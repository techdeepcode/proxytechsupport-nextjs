/**
 * CI / local: ensure interview + blog folder names match meta.slug and slugs do not collide
 * (app/[slug] would serve the wrong template if a blog slug matched an interview slug).
 * Run: node scripts/verify-content-urls.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function readSlugs(rootDir) {
  const root = path.join(ROOT, rootDir);
  const out = [];
  for (const name of fs.readdirSync(root)) {
    const metaPath = path.join(root, name, 'meta.ts');
    if (!fs.existsSync(metaPath)) continue;
    const text = fs.readFileSync(metaPath, 'utf8');
    const m = text.match(/slug:\s*"([^"]+)"/);
    if (!m) throw new Error(`No slug in ${metaPath}`);
    if (m[1] !== name) {
      throw new Error(`Folder "${name}" !== meta.slug "${m[1]}" in ${metaPath}`);
    }
    out.push(m[1]);
  }
  return out;
}

function dupes(arr) {
  const seen = new Set();
  const d = new Set();
  for (const x of arr) {
    if (seen.has(x)) d.add(x);
    seen.add(x);
  }
  return [...d];
}

const blog = readSlugs('content/blog-articles');
const interviews = readSlugs('content/interview-articles');

const blogDup = dupes(blog);
if (blogDup.length) throw new Error(`Duplicate blog slugs: ${blogDup.join(', ')}`);

const ivDup = dupes(interviews);
if (ivDup.length) throw new Error(`Duplicate interview slugs: ${ivDup.join(', ')}`);

const overlap = blog.filter((s) => interviews.includes(s));
if (overlap.length) {
  throw new Error(
    `Blog and interview share slug(s) — /[slug] is ambiguous: ${overlap.join(', ')}`
  );
}

/** Sitemap lists these; each must resolve to a real App Router page (static segment). */
const landingFile = path.join(ROOT, 'data/landing-pages.ts');
const landingText = fs.readFileSync(landingFile, 'utf8');
const landingPaths = [
  ...landingText.matchAll(/canonical:\s*`\$\{BASE_URL\}(\/[a-z0-9-]+\/)`/g),
].map((m) => m[1]);
if (landingPaths.length === 0) {
  throw new Error('No landing canonical paths found in data/landing-pages.ts');
}
for (const pathname of landingPaths) {
  const seg = pathname.replace(/^\/|\/$/g, '');
  const pageFile = path.join(ROOT, 'app', seg, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    throw new Error(`Landing canonical ${pathname} has no app/${seg}/page.tsx`);
  }
}

/** Interview URLs must stay dated slugs — sanity check pattern. */
for (const s of interviews) {
  if (!/^\d{4}-\d{2}-\d{2}-/.test(s)) {
    throw new Error(`Interview slug should start with YYYY-MM-DD- for stable URLs: ${s}`);
  }
}

console.log(`OK: ${blog.length} blog articles, ${interviews.length} interviews`);
console.log(`OK: ${landingPaths.length} landing canonicals → app/*/page.tsx`);
console.log('OK: folder === meta.slug, no slug overlap / duplicates');
