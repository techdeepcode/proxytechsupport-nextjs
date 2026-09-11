# Incident & Research Tracker (daily intake)

Log new incidents and arXiv papers here as they appear. **Verify before citing.** When an item is strong enough, promote it into an existing publication (bump `dateModified`) or a new one.

Status legend: `NEW` (just logged) · `VERIFIED` (checked against primary source) · `USED` (cited in a page) · `DROPPED` (unverifiable/weak) · `WATCH` (promising, not yet actionable).

## Incidents

| Date logged | Incident / disclosure | Source (primary) | Verified? | Status | Feeds publication |
|-------------|-----------------------|------------------|-----------|--------|-------------------|
| 2026-09-11 | GTG-1002 AI-orchestrated espionage | anthropic.com/news/disrupting-AI-espionage | ✅ | USED | ai-orchestrated-cyber-espionage-gtg-1002 |
| 2026-09-11 | EchoLeak (M365 Copilot, zero-click) | MSRC CVE-2025-32711 | ✅ | USED | ai-agent-prompt-injection-security |
| 2026-09-11 | CamoLeak (GitHub Copilot Chat) | Legit Security / GitHub CVE-2025-59145 | ✅ | USED | prompt-injection; network-egress-control |
| 2026-09-11 | Copilot RCE via prompt injection | Embrace The Red / MS CVE-2025-53773 | ✅ | USED | ai-coding-agent-security |
| 2026-09-11 | Cursor CurXecute / MCPoison | Aim Security / Check Point CVE-2025-54135/54136 | ✅ | USED | ai-coding-agent-security |
| 2026-09-11 | postmark-mcp malicious npm | Koi Security / Snyk | ✅ | USED | mcp-server-security |
| 2026-09-11 | mcp-remote RCE | JFrog CVE-2025-6514 | ✅ | USED | mcp-server-security |
| 2026-09-11 | MCP Inspector RCE | Oligo CVE-2025-49596 | ✅ | USED | mcp-server-security |
| _add below_ | | | | NEW | |

## arXiv papers

| Date logged | arXiv ID | Title (short) | Verified? | Status | Feeds publication |
|-------------|----------|---------------|-----------|--------|-------------------|
| 2026-09-11 | 2504.11703 | Progent (privilege control) | ✅ | USED | tool-permissions; containment |
| 2026-09-11 | 2404.08144 | One-day exploitation (87%→7%) | ✅ | USED | flagship; benchmarks; sandbox |
| 2026-09-11 | 2406.01637 | Zero-day teams (4.3×) | ✅ | USED | flagship; benchmarks |
| 2026-09-11 | 2503.17332 | CVE-Bench (≤13%) | ✅ | USED | flagship; benchmarks; sandbox |
| 2026-09-11 | 2406.13352 | AgentDojo | ✅ | USED | prompt-injection; pillar |
| 2026-09-11 | 2505.19301 | Zero-Trust Agentic Identity | ✅ | USED | identity-and-access |
| 2026-09-11 | 2510.25819 | OpenID Agentic Identity | ✅ | USED | identity-and-access |
| 2026-09-11 | 2506.13538 | MCP at First Glance (1,899) | ✅ | USED | mcp-server-security |
| 2026-09-11 | 2607.25379 | Cyber-Capable AI Agents | ⚠️ partial | USED (framing only) | benchmarks — incident claim NOT asserted |
| 2026-09-11 | 2604.23425 | "frontier model escape" | ❌ | DROPPED | fabricated — does not exist |
| _add below_ | | | | NEW | |

## Watchlist (candidate sources for future pages — verify when promoting)
- Multi-agent / agent-to-agent attack propagation papers (cs.MA) — feeds a future `ai-agent-to-agent-attacks` page.
- MCP-38 / OWASP Agentic Top 10 updates — feeds `mcp-server-security` refresh + a governance page.
- New Anthropic/OpenAI/Google GTIG threat reports — feed flagship follow-ups.
- Formal containment / capability-revocation papers — feed `containment-architecture` refresh.
