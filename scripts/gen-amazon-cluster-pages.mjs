/**
 * Generates physical app/<slug>/page.tsx route files for the additive Amazon global
 * authority SEO cluster (hiring, interview process, interview rounds, Leadership
 * Principles, roles, proxy interview support, proxy job support, get-interview-
 * scheduled, candidate marketing, technologies, teams, countries and cities).
 *
 * Slugs are derived from the AUTHORITATIVE runtime array allAmazonClusterPages
 * (data/amazon/index.ts). To read it without a TS runtime, we transpile the amazon
 * data graph to CommonJS in a temp dir with the project's local tsc, require it, and
 * read every config's slug. This guarantees exactly one page.tsx per config.
 *
 * Idempotent: never overwrites an existing page.tsx (respects the add-only rule),
 * so any pre-existing route is always preserved.
 *
 * Run: node scripts/gen-amazon-cluster-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const TMP = path.join(ROOT, '.amztmp');

function collectSlugs() {
  fs.rmSync(TMP, { recursive: true, force: true });
  execSync(
    `npx tsc data/amazon/index.ts --outDir .amztmp --module commonjs ` +
      `--moduleResolution node --target es2019 --esModuleInterop --skipLibCheck --resolveJsonModule`,
    { cwd: ROOT, stdio: 'inherit' },
  );
  // tsc roots the emit at the common source dir (data/), so index lands at .amztmp/amazon/index.js
  const entry = path.join(TMP, 'amazon', 'index.js');
  const mod = require(entry);
  const slugs = [...new Set(mod.allAmazonClusterPages.map((p) => p.slug))].sort();
  fs.rmSync(TMP, { recursive: true, force: true });
  return slugs;
}

function pageSource(slug) {
  const comp = 'AmazonPage_' + slug.replace(/[^a-z0-9]/gi, '_');
  return `import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === '${slug}')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function ${comp}() {
  return <LandingPageTemplate config={config} />;
}
`;
}

const slugs = collectSlugs();
let created = 0;
let skipped = 0;
for (const slug of slugs) {
  const dir = path.join(APP, slug);
  const file = path.join(dir, 'page.tsx');
  if (fs.existsSync(file)) {
    skipped++;
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, pageSource(slug), 'utf8');
  created++;
  console.log(`created app/${slug}/page.tsx`);
}
console.log(`\nDone. ${slugs.length} slugs, ${created} created, ${skipped} skipped (already existed).`);
