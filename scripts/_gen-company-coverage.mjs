/** One-off: emit docs/company-cluster-coverage.md from the registry (all 500). */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TMP = path.join(ROOT, '.covtmp');

fs.rmSync(TMP, { recursive: true, force: true });
execSync(
  `npx tsc data/companies/registry.ts --outDir .covtmp --module commonjs --moduleResolution node --target es2019 --esModuleInterop --skipLibCheck`,
  { cwd: ROOT, stdio: 'inherit' },
);
const m = require(path.join(TMP, 'registry.js'));
const companies = m.companies;

const total = companies.length;
const locked = companies.filter((c) => c.locked).length;
const hubs = companies.filter((c) => c.hasHub).length;
const dedicated = companies.filter((c) => c.supportStatus === 'dedicated-cluster').length;
const byTier = {};
for (const c of companies) byTier[c.tier] = (byTier[c.tier] || 0) + 1;

const reason = (c) => {
  if (c.locked) return 'LOCKED — existing dedicated Amazon cluster, never regenerated';
  if (c.supportStatus === 'dedicated-cluster') return 'Existing dedicated cluster — links to it';
  if (c.hasHub) return 'Dedicated company hub generated';
  return 'Tier D — dashboard card + relevant existing destination (expand demand-driven)';
};

let out = `# Company Cluster — Coverage Report (all 500 companies)

Generated from data/companies/registry.ts. Freshness baseline: September 2026.
ProxyTechSupport is independent and not affiliated with any listed employer.

## Summary

- Source companies: **${total}**
- Amazon LOCKED: **${locked}**
- Existing dedicated clusters (Amazon/Workday/UiPath/Hugging Face): **${dedicated}**
- Dedicated NEW company hubs generated (Tier A/B/C): **${hubs}**
- Tier distribution: ${Object.entries(byTier).sort().map(([t, n]) => `${t}=${n}`).join(', ')}
- Every company appears in the /tech-companies/ dashboard with a status and a valid destination.

| Field | Meaning |
| --- | --- |
| Destination | The crawlable link the dashboard card points to |
| Hub | \`yes\` = new /{slug}-career-support/ page generated |

## All 500 companies

| # | Company | Tier | Status | Hub | Destination | Notes |
| --- | --- | --- | --- | --- | --- | --- |
`;

companies.forEach((c, i) => {
  out += `| ${i + 1} | ${c.name} | ${c.tier} | ${c.supportStatus} | ${c.hasHub ? 'yes' : '—'} | ${c.primaryUrl} | ${reason(c)} |\n`;
});

fs.writeFileSync(path.join(ROOT, 'docs/company-cluster-coverage.md'), out, 'utf8');
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`Wrote docs/company-cluster-coverage.md — ${total} companies, ${hubs} hubs.`);
