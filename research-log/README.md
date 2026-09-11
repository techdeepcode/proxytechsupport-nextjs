# ProxyTech Research — Program Log

This folder is the running record of the **ProxyTech Research** program (the `/research/` archive and its flat publications). It exists so we can continue day-by-day: log new incidents and papers as they appear, decide what becomes a publication, and pick the next cluster.

## Files

| File | Purpose |
|------|---------|
| [`00-implementation-report.md`](./00-implementation-report.md) | Full report of **Cluster 1 — Autonomous AI Agent Security** (what shipped, sources, files, verification). The source of truth for how the system is built. |
| [`CHANGELOG.md`](./CHANGELOG.md) | **Date-wise** log of everything done/changed. Append a dated entry every working session. |
| [`incident-research-tracker.md`](./incident-research-tracker.md) | Daily intake: new incidents + new arXiv papers, triaged (verified? which publication does it feed?). This is what we update daily. |
| [`next-cluster-opportunities.md`](./next-cluster-opportunities.md) | Scored backlog of the **next clusters** to build, with candidate slugs. Pick from here when Cluster 1 is saturated. |

## How the system works (so any session can continue)

- **Data model:** `data/research/cluster.ts` — `PUBLICATIONS[]` (registry) + `REFERENCES{}` (verified source pool). `data/research/seo.ts` — metadata + JSON-LD helpers.
- **Design system:** `components/research/` — `ResearchStyles`, `ResearchLayout`, `primitives.tsx`, `ResearchArchiveExplorer`. All classes are `rx-` namespaced; do NOT reuse blog/interview/KB/service layouts.
- **Pages:** each flat publication is `app/<slug>/page.tsx` importing `ResearchLayout` + primitives. `/research/` is the hub.
- **Discovery:** `app/sitemap.ts` (reads `PUBLICATIONS`), Footer "ProxyTech Research — AI Agent Security" section, `public/llms.txt` + `llms-full.txt` via `scripts/gen-research-llms.mjs` (idempotent, marker-wrapped).
- **Funnel:** blog lead-ins in `content/blog-articles/` link into the cluster; hub links back to blogs.

## Golden rules (do not break)

1. **Verify every arXiv ID and incident against its primary source before citing.** A fabricated paper (`2604.23425`) was caught this way. Never trust a subagent-supplied ID.
2. **Additive only.** Never remove existing links/pages/config. New publications and links only.
3. **Separate paper claims from ProxyTech interpretation** (use `ResearchAnalysis` / `ANALYSIS` label). State limitations. No sensationalism. No peer-review/arXiv-affiliation claims.
4. **Flat URLs** for publications; `/research/` is the only hub. Distinct research design — never the marketing look.
5. After changes: `npx tsc --noEmit`, `npx eslint <new files>`, `npx next build`, then re-run `node scripts/gen-research-llms.mjs`.

## Daily workflow

1. Scan arXiv (cs.CR/cs.AI/cs.LG/cs.CL/cs.SE/cs.MA/cs.DC) + primary incident sources (Anthropic, OpenAI, Microsoft/MSRC, Google GTIG/Project Zero, Cloudflare, GitHub, Hugging Face, AWS, CISA, NIST).
2. Add rows to `incident-research-tracker.md` (mark **verified?**).
3. Decide: does it extend an existing publication (update `dateModified`), or justify a new one?
4. If new page: add to `PUBLICATIONS`, add source to `REFERENCES`, create `app/<slug>/page.tsx`, add to `scripts/gen-research-llms.mjs`, sitemap is automatic.
5. Append a dated entry to `CHANGELOG.md`.
6. Build + regenerate llms.
