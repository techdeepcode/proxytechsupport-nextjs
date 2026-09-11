/** One-off: convert internal prose <a href="/x/">text</a> to Next <Link> in research pages
 *  (satisfies @next/next/no-html-link-for-pages). External links (http) are untouched. */
import fs from 'fs';

const slugs = [
  'autonomous-ai-agent-security',
  'ai-orchestrated-cyber-espionage-gtg-1002',
  'ai-agent-prompt-injection-security',
  'ai-coding-agent-security',
  'mcp-server-security',
  'ai-agent-sandbox-escape-security',
  'ai-agent-containment-architecture',
  'ai-agent-identity-and-access-control',
  'ai-agent-tool-permissions-least-privilege',
  'ai-agent-network-egress-control',
  'ai-agent-autonomous-exploitation-benchmarks',
];

let total = 0;
for (const s of slugs) {
  const f = `app/${s}/page.tsx`;
  let t = fs.readFileSync(f, 'utf8');
  const before = (t.match(/<a href="\//g) || []).length;
  t = t.replace(/<a href="(\/[^"]+)">([^<]+)<\/a>/g, '<Link href="$1">$2</Link>');
  const after = (t.match(/<a href="\//g) || []).length;
  if (t.includes('<Link ') && !/import Link from ['"]next\/link['"]/.test(t)) {
    t = t.replace(/^(import TopBar[^\n]*\n)/m, "import Link from 'next/link';\n$1");
  }
  fs.writeFileSync(f, t, 'utf8');
  console.log(`${s}: converted ${before - after} internal anchors`);
  total += before - after;
}
console.log('TOTAL converted:', total);
