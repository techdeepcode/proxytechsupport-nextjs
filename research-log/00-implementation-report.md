# Implementation Report — Cluster 1: Autonomous AI Agent Security

**Status:** Shipped · **Built:** 2026-09-11 → 2026-09-12 · **Build:** `npx next build` exit 0, tsc clean, eslint 0 errors.

---

## 1. Selected cluster & why
**Autonomous AI Agent Security.** Chosen because it uniquely satisfies the "both/and" test — a **verified recent incident spine** *and* a **deep active arXiv literature** — and supports 11 non-overlapping publications with strong, durable search intent and direct ProxyTech commercial adjacency (agentic AI, AI security/governance, DevSecOps).

## 2. arXiv papers used (all verified against their abstract page before citing)
| Key | arXiv | Title (short) | Load-bearing metric |
|-----|-------|---------------|---------------------|
| gtg1002 | — (Anthropic) | Disrupting the first AI-orchestrated espionage campaign (GTG-1002) | 80–90% agent-executed; ~30 targets |
| progent | 2504.11703 | Progent: Securing AI Agents with Privilege Control | ASR ↓ with utility retained |
| oneday | 2404.08144 | LLM Agents can Autonomously Exploit One-day Vulns | **87% → 7%** (with/without CVE) |
| zeroday | 2406.01637 | Teams of LLM Agents can Exploit Zero-Day Vulns | **4.3×** over single agent |
| cvebench | 2503.17332 | CVE-Bench | **≤13%** real-world CVEs resolved |
| agentdojo | 2406.13352 | AgentDojo | 97 tasks / 629 security cases |
| ztidentity | 2505.19301 | Zero-Trust Identity Framework for Agentic AI | framework (no empirical) |
| openididentity | 2510.25819 | Identity Management for Agentic AI (OpenID) | strategy whitepaper |
| mcpglance | 2506.13538 | MCP at First Glance (1,899 servers) | 7.2% vuln / 5.5% tool-poisoning |
| cybercapable | 2607.25379 | Cyber-Capable AI Agents | framing only — incident unverified, flagged |

**Excluded fabrication:** `2604.23425` "frontier model escape" — surfaced by a research subagent, fetched, confirmed NOT a real paper, dropped.

## 3. Incident / primary sources
GTG-1002 (Anthropic, 2025-11-13/14, verified primary) · EchoLeak CVE-2025-32711 · CamoLeak CVE-2025-59145 · Copilot RCE CVE-2025-53773 · Cursor CurXecute/MCPoison CVE-2025-54135/54136 · postmark-mcp (Koi/Snyk) · mcp-remote CVE-2025-6514 (JFrog) · MCP Inspector CVE-2025-49596 (Oligo).

## 4. URLs created (flat; `/research/` is the only hub)
1. `/research/` — archive hub
2. `/autonomous-ai-agent-security/` — **pillar** (series 01)
3. `/ai-orchestrated-cyber-espionage-gtg-1002/` — **flagship** incident (02)
4. `/ai-agent-prompt-injection-security/` (03)
5. `/ai-coding-agent-security/` (04)
6. `/mcp-server-security/` (05)
7. `/ai-agent-sandbox-escape-security/` (06)
8. `/ai-agent-containment-architecture/` (07)
9. `/ai-agent-identity-and-access-control/` (08)
10. `/ai-agent-tool-permissions-least-privilege/` (09)
11. `/ai-agent-network-egress-control/` (10)
12. `/ai-agent-autonomous-exploitation-benchmarks/` (11)

Funnel blogs: `/blog/gtg-1002-ai-orchestrated-cyberattack-engineering-lessons/` · `/blog/ai-agent-prompt-injection-echoleak-camoleak-explained/` · `/blog/securing-ai-agents-production-checklist-2026/`

## 5. Components created
`components/research/`: `ResearchStyles.tsx` (rx- design system), `ResearchLayout.tsx` (client: masthead, research-profile grid, sticky TOC scroll-spy, progress bar, collapsible mobile TOC, series nav, related, restrained CTA), `ResearchArchiveExplorer.tsx` (client-side filtering only), `primitives.tsx` (ResearchBadge/BadgeRow, Cite, ResearchAbstract, ResearchBlock, ResearchFinding, ResearchQuestion, ResearchAnalysis, ResearchMetricStrip, ResearchPaperCard, ResearchTimeline, ResearchFailureMode, ResearchDecision, ResearchCounterfactual, ResearchLimitations, ResearchReferenceList, ResearchFigure).

## 6. Data / files
- New: `data/research/cluster.ts` (PUBLICATIONS + REFERENCES), `data/research/seo.ts` (metadata + TechArticle/BreadcrumbList JSON-LD), `scripts/gen-research-llms.mjs`, `scripts/_fix-research-internal-links.mjs` (one-off).
- Modified (additive): `app/sitemap.ts`, `components/Footer.tsx`, `content/blog-articles/index.ts`, `public/llms.txt`, `public/llms-full.txt`.

## 7. Diagrams
Native HTML/CSS/SVG, each with `aria-label` text equivalent: agent loop, indirect-injection confused-deputy, coding-agent self-escalation chain, two MCP attack surfaces, standing-vs-scoped identity, GTG-1002 operated architecture, contained counterfactual, mediation-plane reference architecture, layered isolation rings, deny-by-default egress; plus timeline, metric strips, decision tables.

## 8. SEO / schema
Per page: unique title + meta description, canonical + hreflang, OG `article` (published/modified/author/section), Twitter card, **TechArticle** + **BreadcrumbList** JSON-LD, `CreativeWorkSeries`, `mainEntityOfPage`. Hub: **CollectionPage** + **ItemList**. Blogs: Article + FAQPage via existing pipeline. Sitemap + both llms manifests updated. Explicit independent-analysis disclaimer (no peer-review/arXiv/university claims).

## 9. Internal-link structure (no orphans)
Series prev/next + related + inline cross-links across all 11; hub → all + blogs; Footer sitewide → hub + 11; blogs → research (contextual) and hub → blogs (bidirectional); research → existing services (`ai-security-governance-job-support`, `agentic-ai-job-support`, `cybersecurity-devsecops-job-support-guide`).

## 10. Verification
`npx next build` exit 0; all 12 research routes + 3 blogs exported to `out/`; `tsc --noEmit` clean; `eslint` 0 errors (73 internal `<a>`→`<Link>`); `verify-content-urls.mjs` passes; footer section + blog→research links + sitemap entries confirmed in emitted HTML.

## 11. Limitations / unverifiable claims (surfaced in-content)
- GTG-1002 = single-source vendor disclosure, no independent IOCs; "80–90%" has no published methodology → OPEN QUESTION.
- `2607.25379` references an unverifiable "July 2026 HuggingFace/OpenAI incident" → cited for framing only, flagged; incident not asserted as fact.
- Sandbox-escape page marks autonomous novel-escape as unproven (no verified paper); grounds claims only in exploitation-given-knowledge.

## 12. Publication coverage map (for future extension without cannibalization)
- Pillar = whole-theme overview · Flagship = the incident · then attack surface (injection → coding agents → MCP) · then defenses (sandbox → containment → identity → tool permissions → egress) · then measurement (benchmarks). New pages should slot into one lane and cross-link, not overlap.
