# Next-Cluster Opportunities (scored backlog)

Pick the next cluster from here when Cluster 1 (Autonomous AI Agent Security) is saturated, or run in parallel. Scores are out of 10 (freshness / research depth / search intent / engineering relevance / longevity / ProxyTech adjacency / source quality / expansion potential). **Verify all sources before building** — same discipline as Cluster 1.

Priority order (top = build next):

---

## A. AI Supply Chain & Model/Artifact Provenance  ⭐ recommended next
**Why:** Fast-moving 2025–2026 incidents (malicious models/datasets on hubs, pickle/deserialization RCE, poisoned fine-tunes, typosquatted packages), strong regulatory tailwind (SBOM/AI-BOM, EU AI Act), and clean adjacency to the existing Hugging Face cluster. Minimal overlap with Cluster 1 (that's runtime; this is supply/provenance).
**Scores:** Fresh 9 · Depth 8 · Search 9 · Eng 9 · Longevity 9 · Adjacency 10 · Sources 8 · Expansion 9.
**Candidate flat slugs:** `/ai-model-supply-chain-security/` (pillar) · `/malicious-ml-model-file-security/` (pickle/safetensors) · `/ai-dataset-poisoning-research/` · `/ai-bom-model-provenance/` · `/model-registry-security/` · `/fine-tuning-supply-chain-attacks/`.
**Verify sources:** Hugging Face security advisories, ReversingLabs/JFrog model-scanning research, arXiv cs.CR data-poisoning + backdoor papers, NIST/CISA SBOM guidance.

## B. Multi-Agent System Security (agent-to-agent)
**Why:** Directly extends Cluster 1's fifth boundary (agent↔agent). Growing cs.MA literature on injection propagation, orchestration hijack, trust in agent networks. Distinct search intent.
**Scores:** Fresh 9 · Depth 8 · Search 7 · Eng 9 · Longevity 8 · Adjacency 9 · Sources 8 · Expansion 8.
**Candidate slugs:** `/multi-agent-system-security/` (pillar) · `/agent-to-agent-attack-propagation/` · `/agent-orchestration-security/` · `/agent-communication-trust/` (A2A/ACP protocols) · `/swarm-agent-containment/`.
**Verify:** FuncPoison-style papers, A2A/ACP protocol specs, cs.MA arXiv, OWASP Agentic.

## C. LLM/AI for Defensive SecOps (AIOps / autonomous defense)
**Why:** The defender-side counterpart to Cluster 1 — high commercial adjacency (SOC automation, triage, detection engineering). Balances the offensive framing and captures "AI security operations" search intent.
**Scores:** Fresh 8 · Depth 7 · Search 8 · Eng 9 · Longevity 8 · Adjacency 10 · Sources 7 · Expansion 8.
**Candidate slugs:** `/ai-soc-automation-research/` (pillar) · `/llm-alert-triage-security/` · `/autonomous-incident-response-agents/` · `/ai-detection-engineering/` · `/ai-vulnerability-remediation-agents/`.
**Verify:** Vendor SOC-copilot disclosures, arXiv autonomous-defense/patching papers (e.g. OpenAnt-style), CISA guidance.

## D. Text-to-SQL / Database Agent Security
**Why:** Narrow, searchable, low-overlap. Database agents are widely deployed and under-covered on security (SQL injection via NL, data exfiltration, schema leakage, over-broad DB grants).
**Scores:** Fresh 7 · Depth 7 · Search 8 · Eng 8 · Longevity 8 · Adjacency 8 · Sources 7 · Expansion 7.
**Candidate slugs:** `/text-to-sql-agent-security/` (pillar) · `/database-agent-least-privilege/` · `/nl-to-sql-injection-research/` · `/rag-over-databases-security/`.
**Verify:** text-to-SQL benchmark + attack papers (arXiv cs.DB/cs.CL), vendor DB-copilot docs.

## E. RAG Security & Knowledge-Base Poisoning
**Why:** RAG is ubiquitous; poisoning, retrieval hijack, and context-exfiltration are active research. Adjacent to existing RAG job-support pages and the injection publication.
**Scores:** Fresh 8 · Depth 8 · Search 8 · Eng 8 · Longevity 8 · Adjacency 9 · Sources 8 · Expansion 8.
**Candidate slugs:** `/rag-security-research/` (pillar) · `/knowledge-base-poisoning/` · `/retrieval-hijack-attacks/` · `/embedding-inversion-privacy/` · `/rag-data-exfiltration/`.
**Verify:** arXiv RAG-poisoning / embedding-inversion papers, real KB-poisoning disclosures.

## F. AI Governance, Evals & Assurance (EU AI Act / NIST / red-teaming)
**Why:** Evergreen, policy-driven, strong for enterprise search intent. Complements the technical clusters with a compliance/assurance angle.
**Scores:** Fresh 7 · Depth 6 · Search 8 · Eng 7 · Longevity 9 · Adjacency 8 · Sources 8 · Expansion 7.
**Candidate slugs:** `/ai-security-assurance-research/` (pillar) · `/ai-red-teaming-methods/` · `/eu-ai-act-agent-compliance/` · `/ai-eval-benchmark-integrity/`.
**Verify:** NIST AI RMF/GenAI profile, EU AI Act texts, OWASP GenAI, arXiv eval-contamination papers.

---

## Selection rule
Prefer the highest-scoring cluster that (a) has a **verifiable recent incident** to anchor a flagship, (b) does **not cannibalize** existing publications, and (c) has adjacency to a ProxyTech service we can link to. Default next pick: **A (AI Supply Chain & Provenance)**.
