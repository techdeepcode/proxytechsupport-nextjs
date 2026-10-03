import fs from 'fs';
import path from 'path';
const ROOT = process.cwd();
const OUT = path.join(ROOT, 'out');
const DATA = path.join(ROOT, 'data', 'kubernetes');
const slugSet = new Set();
for (const f of fs.readdirSync(DATA)){
  if(!f.endsWith('.ts')||f==='shared.ts'||f==='index.ts') continue;
  const t = fs.readFileSync(path.join(DATA,f),'utf8');
  for (const m of t.matchAll(/slug:\s*'([a-z0-9]+(?:-[a-z0-9]+){2,})'/g)) slugSet.add(m[1]);
}
const slugs = [...slugSet];
const allDirs = fs.readdirSync(OUT,{withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
const inbound = new Map(slugs.map(s=>[s,new Set()]));
const outbound = new Map(slugs.map(s=>[s,new Set()]));
const hrefsOf = html => { const s=new Set(); for(const m of html.matchAll(/href="\/([a-z0-9][a-z0-9-]*)\/"/g)) s.add(m[1]); return s; };
let scanned=0;
for (const dir of allDirs){
  const f = path.join(OUT,dir,'index.html'); if(!fs.existsSync(f)) continue;
  const hrefs = hrefsOf(fs.readFileSync(f,'utf8')); scanned++;
  for (const h of hrefs){ if(slugSet.has(h)&&h!==dir) inbound.get(h).add(dir); }
  if(slugSet.has(dir)) for(const h of hrefs){ if(h!==dir) outbound.get(dir).add(h); }
}
let orphans=0,under2in=0,under3out=0; const rep=[];
for(const s of slugs){ const i=inbound.get(s).size,o=outbound.get(s).size;
  if(i===0)orphans++; if(i<2)under2in++; if(o<3)under3out++;
  if(i<2||o<3) rep.push(`${s}  inbound=${i} outbound=${o}`); }
console.log(`Scanned ${scanned} built pages. Cluster pages: ${slugs.length}`);
console.log(`Orphans (0 inbound): ${orphans}`);
console.log(`Pages with <2 inbound: ${under2in}`);
console.log(`Pages with <3 outbound: ${under3out}`);
if(rep.length){ console.log('--- needing attention ---'); rep.slice(0,50).forEach(r=>console.log(r)); }
const incs=slugs.map(s=>inbound.get(s).size).sort((a,b)=>a-b);
const outs=slugs.map(s=>outbound.get(s).size).sort((a,b)=>a-b);
console.log(`Inbound  min=${incs[0]} median=${incs[incs.length>>1]} max=${incs[incs.length-1]}`);
console.log(`Outbound min=${outs[0]} median=${outs[outs.length>>1]} max=${outs[outs.length-1]}`);
