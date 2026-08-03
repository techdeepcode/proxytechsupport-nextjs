import fs from 'fs';
import path from 'path';
const dir = path.join(process.cwd(), 'data', 'angular');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
const declared = new Set();
const referenced = new Map();
for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), 'utf8');
  for (const m of t.matchAll(/\bslug:\s*'([a-z0-9-]+)'/g)) declared.add(m[1]);
  for (const m of t.matchAll(/usCity\(\s*'([a-z0-9-]+)'/g)) declared.add(m[1]);
  for (const m of t.matchAll(/'([a-z0-9]+(?:-[a-z0-9]+){2,})'/g)) {
    if (!referenced.has(m[1])) referenced.set(m[1], f);
  }
}
const app = path.join(process.cwd(), 'app');
const existing = new Set(
  fs.readdirSync(app).filter((n) => {
    try { return fs.existsSync(path.join(app, n, 'page.tsx')); } catch { return false; }
  }),
);
const missing = [];
for (const [tok, f] of referenced) {
  if (!declared.has(tok) && !existing.has(tok)) missing.push(tok + '  <- ' + f);
}
console.log('declared page slugs:', declared.size);
console.log('referenced kebab tokens:', referenced.size);
console.log('MISSING (referenced but no config & no existing route):', missing.length);
missing.sort().forEach((x) => console.log('  ' + x));
