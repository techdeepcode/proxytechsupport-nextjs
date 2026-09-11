# ProxyTech Research — Changelog (date-wise)

Newest first. Append a dated entry every working session. Format: what shipped, sources verified, files touched, build status.

---

## 2026-09-12
- **Funnel + de-orphan.** Added sitewide Footer section "ProxyTech Research — AI Agent Security" (hub + 11 pages) and `/research/` to footer resources.
- **3 funnel blogs created** (`content/blog-articles/`): `gtg-1002-ai-orchestrated-cyberattack-engineering-lessons`, `ai-agent-prompt-injection-echoleak-camoleak-explained`, `securing-ai-agents-production-checklist-2026` — each links into the cluster; hub links back (bidirectional). Registered in `content/blog-articles/index.ts`.
- **llms manifests** extended with a "Blog Lead-ins" subsection via `scripts/gen-research-llms.mjs` (idempotent).
- **Lint hardening:** converted 73 internal prose `<a>`→`<Link>` across research pages (`no-html-link-for-pages`); removed unused imports. eslint 0 errors.
- **Build:** `npx next build` exit 0. All 12 research routes + 3 blogs exported. tsc clean.
- Created this `research-log/` folder (README, implementation report, changelog, incident tracker, next-cluster backlog).

## 2026-09-11
- **Cluster 1 shipped — Autonomous AI Agent Security.** See `00-implementation-report.md`.
- Live arXiv + incident research via parallel agents; **independently verified** every load-bearing arXiv ID and the GTG-1002 primary source; **caught and excluded a fabricated paper** (`2604.23425`).
- Built research data model (`data/research/cluster.ts`, `seo.ts`), design system (`components/research/*`), `/research/` hub, and 11 flat publications with diagrams, paper cards, failure modes, decision tables, references, and TechArticle/BreadcrumbList schema.
- Wired `app/sitemap.ts`; injected cluster into `public/llms.txt` + `llms-full.txt` via new `scripts/gen-research-llms.mjs`.
- Build passed (168→ pages superset; all research routes exported).

---

### Template for new entries
```
## YYYY-MM-DD
- Incident/paper added: <name> (verified? Y/N, source URL) → fed into <publication or NEW /slug/>.
- Pages created/updated: <slugs> (updated dateModified where content changed).
- Files touched: <...>
- Build: <status>. llms regenerated: <Y/N>.
```
