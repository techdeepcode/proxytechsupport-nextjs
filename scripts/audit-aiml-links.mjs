/**
 * Orphan / reachability audit for the AI/ML cluster over the BUILT site (out/).
 * - Builds the internal-link graph from every out/<slug>/index.html.
 * - Reports: cluster pages with 0 inbound links (orphans), and whether the cluster
 *   is reachable from the homepage via existing (non-cluster) pages.
 * Run after `npm run build`: node scripts/audit-aiml-links.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const AIML_DATA_DIR = path.join(ROOT, 'data', 'aiml');

// 1. Cluster slugs
const cluster = new Set();
for (const f of fs.readdirSync(AIML_DATA_DIR)) {
  if (!f.endsWith('.ts') || f === 'shared.ts' || f === 'index.ts') continue;
  const t = fs.readFileSync(path.join(AIML_DATA_DIR, f), 'utf8');
  for (const m of t.matchAll(/'([a-z0-9]+(?:-[a-z0-9]+){2,})'/g)) cluster.add(m[1]);
}

// 2. Every built page slug (top-level out/<slug>/index.html)
function builtSlugs() {
  const out = [];
  for (const name of fs.readdirSync(OUT)) {
    const p = path.join(OUT, name, 'index.html');
    if (fs.statSync(path.join(OUT, name)).isDirectory() && fs.existsSync(p)) out.push(name);
  }
  return out;
}

// 3. Extract internal link targets (top-level slug) from a page's HTML
function linksFrom(slug) {
  const html = fs.readFileSync(path.join(OUT, slug, 'index.html'), 'utf8');
  const targets = new Set();
  for (const m of html.matchAll(/href="\/([a-z0-9-]+)\/?"/g)) {
    if (m[1] && m[1] !== slug) targets.add(m[1]);
  }
  return targets;
}

const pages = builtSlugs();
const pageSet = new Set(pages);
const outbound = new Map();      // slug -> Set(targets)
const inbound = new Map();       // slug -> Set(sources)
for (const s of pages) inbound.set(s, new Set());

for (const s of pages) {
  const t = linksFrom(s);
  outbound.set(s, t);
  for (const dst of t) if (inbound.has(dst)) inbound.get(dst).add(s);
}

// 4. Orphans within the cluster (0 inbound from anywhere)
const orphans = [...cluster].filter((s) => pageSet.has(s) && inbound.get(s).size === 0);

// 5. Cluster pages that receive at least one inbound link from an EXISTING (non-cluster) page
const linkedFromExisting = [...cluster].filter(
  (s) => pageSet.has(s) && [...inbound.get(s)].some((src) => !cluster.has(src)),
);

// 6. BFS reachability from homepage ('' == out/index.html)
const homeLinks = (() => {
  const html = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
  const t = new Set();
  for (const m of html.matchAll(/href="\/([a-z0-9-]+)\/?"/g)) t.add(m[1]);
  return t;
})();
const visited = new Set();
const queue = [...homeLinks];
while (queue.length) {
  const s = queue.shift();
  if (visited.has(s) || !pageSet.has(s)) continue;
  visited.add(s);
  for (const dst of outbound.get(s) || []) if (!visited.has(dst)) queue.push(dst);
}
const reachableCluster = [...cluster].filter((s) => pageSet.has(s) && visited.has(s));
const unreachableCluster = [...cluster].filter((s) => pageSet.has(s) && !visited.has(s));

console.log(`Cluster pages built:            ${[...cluster].filter((s) => pageSet.has(s)).length}`);
console.log(`Orphans (0 inbound links):      ${orphans.length}`);
if (orphans.length) console.log('  ' + orphans.join('\n  '));
console.log(`Linked from an EXISTING page:   ${linkedFromExisting.length}`);
console.log(`Reachable from homepage (BFS):  ${reachableCluster.length}`);
console.log(`NOT reachable from homepage:    ${unreachableCluster.length}`);
if (unreachableCluster.length && unreachableCluster.length <= 40) console.log('  ' + unreachableCluster.join('\n  '));

// Which existing (non-cluster) pages link INTO the cluster (entry points)?
const entryPoints = new Set();
for (const s of pages) {
  if (cluster.has(s)) continue;
  for (const dst of outbound.get(s) || []) if (cluster.has(dst)) { entryPoints.add(s); break; }
}
console.log(`\nExisting pages that link INTO the cluster (entry points): ${entryPoints.size}`);
console.log('  ' + [...entryPoints].slice(0, 30).join('\n  '));
