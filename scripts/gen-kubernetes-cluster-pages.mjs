/**
 * Generates physical app/<slug>/page.tsx route files for the additive Kubernetes +
 * Agentic AI + AI Infrastructure global authority cluster. Slugs are auto-discovered
 * from data/kubernetes/*.ts (every quoted 3+ segment kebab slug declared as `slug: '...'`),
 * so there is no manual list to maintain — add a page config, re-run this script.
 *
 * Idempotent: never overwrites an existing page.tsx (respects the add-only rule).
 * Each generated page resolves its config by slug from data/kubernetes → allKubernetesClusterPages.
 *
 * Run: node scripts/gen-kubernetes-cluster-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const K8S_DATA_DIR = path.join(ROOT, 'data', 'kubernetes');

function collectSlugs() {
  const slugs = new Set();
  for (const file of fs.readdirSync(K8S_DATA_DIR)) {
    if (!file.endsWith('.ts') || file === 'shared.ts' || file === 'index.ts') continue;
    const text = fs.readFileSync(path.join(K8S_DATA_DIR, file), 'utf8');
    // Match slugs only where they appear as `slug: 'x'` — avoids treating related-link
    // hrefs, keyword phrases, or other kebab tokens as page slugs.
    for (const m of text.matchAll(/slug:\s*'([a-z0-9]+(?:-[a-z0-9]+){2,})'/g)) {
      slugs.add(m[1]);
    }
  }
  return [...slugs].sort();
}

function pageSource(slug) {
  const comp = 'K8sPage_' + slug.replace(/[^a-z0-9]/gi, '_');
  return `import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === '${slug}')!;

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
