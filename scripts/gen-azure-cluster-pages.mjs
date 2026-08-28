/**
 * Generates physical app/<slug>/page.tsx route files for the additive Microsoft
 * Azure AI / ML / Generative AI / Agentic AI SEO cluster.
 *
 * Slugs are derived from the AUTHORITATIVE runtime array allAzureClusterPages
 * (data/azure/index.ts) — not by regex — because the batch files build pages
 * through helper factories (mk/svc/rolePage/guide/compare/…) that pass the slug
 * positionally or via object shorthand, which a source regex cannot see reliably.
 *
 * To read the array without a TS runtime, we transpile data/azure/index.ts (and its
 * import graph) to CommonJS in a temp dir with the project's local tsc, require it,
 * and read every config's slug. This guarantees exactly one page.tsx per config.
 *
 * Idempotent: never overwrites an existing page.tsx (respects the add-only rule),
 * so pre-existing routes (e.g. azure-openai-job-support) are always preserved.
 *
 * Run: node scripts/gen-azure-cluster-pages.mjs
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
const TMP = path.join(ROOT, '.aztmp');

function collectSlugs() {
  // Transpile the azure data graph to CJS so we can require the real array.
  fs.rmSync(TMP, { recursive: true, force: true });
  execSync(
    `npx tsc data/azure/index.ts --outDir .aztmp --module commonjs ` +
      `--moduleResolution node --target es2019 --esModuleInterop --skipLibCheck --resolveJsonModule`,
    { cwd: ROOT, stdio: 'inherit' },
  );
  // tsc roots the emit at the common source dir (data/), so index lands at .aztmp/azure/index.js
  const entry = path.join(TMP, 'azure', 'index.js');
  const mod = require(entry);
  const slugs = [...new Set(mod.allAzureClusterPages.map((p) => p.slug))].sort();
  fs.rmSync(TMP, { recursive: true, force: true });
  return slugs;
}

function pageSource(slug) {
  const comp = 'AzurePage_' + slug.replace(/[^a-z0-9]/gi, '_');
  return `import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === '${slug}')!;

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
