/**
 * Regenerates the "Tech Companies" section in public/llms.txt and public/llms-full.txt
 * with the FULL 500-company list (name, support-page URL, focus) from the registry, so
 * agentic crawlers can index every employer. Idempotent: replaces the existing section
 * between its heading and the next "## " heading.
 *
 * Run: node scripts/gen-companies-llms.mjs
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TMP = path.join(ROOT, '.llmstmp');

function loadRegistry() {
  fs.rmSync(TMP, { recursive: true, force: true });
  execSync(
    `npx tsc data/companies/registry.ts --outDir .llmstmp --module commonjs --moduleResolution node --target es2019 --esModuleInterop --skipLibCheck`,
    { cwd: ROOT, stdio: 'inherit' },
  );
  const m = require(path.join(TMP, 'registry.js'));
  const out = { companies: m.companies, categories: m.COMPANY_CATEGORIES };
  fs.rmSync(TMP, { recursive: true, force: true });
  return out;
}

function replaceSection(text, heading, content) {
  const start = text.indexOf(heading);
  if (start === -1) throw new Error(`Heading not found: ${heading}`);
  const after = text.indexOf('\n## ', start + heading.length);
  const end = after === -1 ? text.length : after + 1; // keep the next heading
  return text.slice(0, start) + content + (end === text.length ? '\n' : '') + text.slice(end);
}

const { companies, categories } = loadRegistry();

const INTRO =
  'Technical interview support, proxy interview support and real-time job support for candidates interviewing at — or working for — 500+ major technology and technology-driven employers. Every company has a support page (flat /{company}-career-support/ URLs) and all 500 are listed below. Not listed? Support is based on your technology, stack and role — share a job description and we match you with the right expert. ProxyTechSupport is independent and not affiliated with any listed employer; candidates attend their own interviews.';

// ── llms.txt section (curated intro + full 500 as markdown links) ────────────
let llms = `## Tech Companies — Interview & Job Support for 500+ Employers\n\n> ${INTRO}\n\n`;
llms += `- [Tech Companies Directory (500+ employers)](/tech-companies/): Search, filter by industry and support type, and browse A–Z across 500+ employers for technical interview, proxy interview and job support.\n`;
for (const c of companies) {
  llms += `- [${c.name} Interview & Job Support](${c.primaryUrl}): ${c.blurb}\n`;
}
llms += '\n';

// ── llms-full.txt section (service description + full 500 grouped by industry) ─
let full = `## Tech Companies — Interview & Job Support for 500+ Employers\n\n`;
full += `${INTRO}\n\n`;
full += `Directory / dashboard URL: /tech-companies/ — search by company name or alias, filter by industry and support type, browse A–Z, and open the support page for any company.\n\n`;
full += `What we offer for each company:\n`;
full += `- Technical interview support and proxy interview support — real-time, discreet help during live coding, data-structures and system-design rounds. You attend and complete your own interview.\n`;
full += `- Job support and proxy job support — an experienced engineer works alongside you during your working hours on real tasks: implementation, debugging, design and code review, production incidents and delivery.\n`;
full += `- Get interview scheduled and candidate marketing — resume/LinkedIn positioning and recruiter outreach to land relevant interviews.\n\n`;
full += `Full company list (all 500 — name, support page, focus), grouped by industry:\n\n`;
for (const cat of categories) {
  const inCat = companies.filter((c) => c.category === cat.key);
  if (!inCat.length) continue;
  full += `### ${cat.label} (${inCat.length})\n`;
  for (const c of inCat) {
    full += `- ${c.name} — ${c.primaryUrl} — ${c.blurb}\n`;
  }
  full += '\n';
}
full += `Independence: ProxyTechSupport is an independent technical and career-support provider and is NOT affiliated with, endorsed by, or sponsored by any listed employer. Candidates attend and complete their own interviews; no interviews, selection or employment are guaranteed.\n\n`;

const llmsPath = path.join(ROOT, 'public/llms.txt');
const fullPath = path.join(ROOT, 'public/llms-full.txt');
fs.writeFileSync(llmsPath, replaceSection(fs.readFileSync(llmsPath, 'utf8'), '## Tech Companies', llms));
fs.writeFileSync(fullPath, replaceSection(fs.readFileSync(fullPath, 'utf8'), '## Tech Companies', full));

console.log(`Updated llms.txt + llms-full.txt with all ${companies.length} companies across ${categories.length} industries.`);
