/**
 * Generates physical app/<slug>/page.tsx route files for the additive 500-COMPANY
 * employer cluster — the Tier A/B/C company authority hubs (/{company}-career-support/).
 *
 * Slugs come from the AUTHORITATIVE runtime array allCompanyClusterPages
 * (data/companies/index.ts). To read it without a TS runtime we transpile the companies
 * data graph to CommonJS in a temp dir with the project's local tsc, require it, and read
 * every config's slug. Exactly one page.tsx per config.
 *
 * Idempotent: never overwrites an existing page.tsx (respects the add-only rule), so any
 * pre-existing route is always preserved. The dashboard at /tech-companies/ is a normal
 * hand-authored route and is NOT touched here.
 *
 * Run: node scripts/gen-companies-cluster-pages.mjs
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
const TMP = path.join(ROOT, '.companiestmp');

function collectSlugs() {
  fs.rmSync(TMP, { recursive: true, force: true });
  execSync(
    `npx tsc data/companies/index.ts --outDir .companiestmp --module commonjs ` +
      `--moduleResolution node --target es2019 --esModuleInterop --skipLibCheck --resolveJsonModule`,
    { cwd: ROOT, stdio: 'inherit' },
  );
  // tsc roots the emit at the common source dir (data/), so index lands at
  // .companiestmp/companies/index.js
  const entry = path.join(TMP, 'companies', 'index.js');
  const mod = require(entry);
  const slugs = [...new Set(mod.allCompanyClusterPages.map((p) => p.slug))].sort();
  fs.rmSync(TMP, { recursive: true, force: true });
  return slugs;
}

function pageSource(slug) {
  const comp = 'CompanyHub_' + slug.replace(/[^a-z0-9]/gi, '_');
  return `import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allCompanyClusterPages } from '@/data/companies';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allCompanyClusterPages.find((p) => p.slug === '${slug}')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function ${comp}() {
  return <LandingPageTemplate config={config} />;
}
`;
}

function main() {
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
  }
  console.log(`Company cluster: ${slugs.length} slugs — created ${created}, skipped ${skipped} (already existed).`);
}

main();
