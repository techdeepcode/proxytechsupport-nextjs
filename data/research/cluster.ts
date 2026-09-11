/**
 * ProxyTech Research — Autonomous AI Agent Security cluster.
 *
 * This is an INDEPENDENT engineering-research analysis that REFERENCES academic
 * papers and primary security disclosures. It does not claim peer review, journal
 * publication, arXiv affiliation, or academic positions.
 *
 * All arXiv identifiers and incident sources below were verified against their
 * primary source pages during research (September 2026). See `references` and
 * `incidents` for provenance.
 */

export const RESEARCH_BASE = 'https://proxytechsupport.com';

export type EvidenceLabel =
  | 'INCIDENT'
  | 'PRIMARY SOURCE'
  | 'RESEARCH'
  | 'EXPERIMENTAL'
  | 'ANALYSIS'
  | 'OPEN QUESTION';

export type EvidenceConfidence = 'High' | 'Moderate' | 'Mixed' | 'Emerging';

export interface ResearchReference {
  /** Stable citation key, e.g. "progent" — used for [n] numbering per page. */
  key: string;
  authors: string;
  title: string;
  /** arXiv identifier (bare, e.g. 2504.11703) or empty for non-arXiv sources. */
  arxiv?: string;
  categories?: string;
  submitted?: string;
  revised?: string;
  year: string;
  /** Canonical link to the original source. */
  url: string;
  /** Publisher / venue label for non-arXiv sources. */
  venue?: string;
}

export interface ResearchPublication {
  slug: string;
  seriesIndex: number;
  title: string;
  /** Short label used in series navigation and archive cards. */
  navTitle: string;
  area: string;
  type: string;
  published: string; // ISO date
  updated: string; // ISO date
  evidenceReviewed: string; // human month/year
  evidenceConfidence: EvidenceConfidence;
  readingTime: string;
  primaryEvidence: string[];
  /** SEO */
  seoTitle: string;
  metaDescription: string;
  /** Archive summary / dek. */
  summary: string;
  /** The single research question this publication answers. */
  researchQuestion: string;
  /** Evidence labels that dominate this publication (for archive chips). */
  labels: EvidenceLabel[];
  /** Related publication slugs (flat-URL topical clustering). */
  related: string[];
  featured?: boolean;
  isFlagship?: boolean;
}

export const RESEARCH_AUTHOR = {
  name: 'ProxyTech Engineering Research',
  url: `${RESEARCH_BASE}/research/`,
};

/* ------------------------------------------------------------------ */
/* Shared reference pool (verified primary sources)                    */
/* ------------------------------------------------------------------ */

export const REFERENCES: Record<string, ResearchReference> = {
  gtg1002: {
    key: 'gtg1002',
    authors: 'Anthropic',
    title: 'Disrupting the first reported AI-orchestrated cyber espionage campaign (GTG-1002)',
    year: '2025',
    url: 'https://www.anthropic.com/news/disrupting-AI-espionage',
    venue: 'Anthropic — Primary disclosure',
    submitted: '2025-11-13',
  },
  progent: {
    key: 'progent',
    authors: 'T. Shi, J. He, Z. Wang, H. Li, L. Wu, W. Guo, D. Song',
    title: 'Progent: Securing AI Agents with Privilege Control',
    arxiv: '2504.11703',
    categories: 'cs.CR, cs.AI',
    submitted: '2025-04-16',
    revised: '2026-05-14',
    year: '2025',
    url: 'https://arxiv.org/abs/2504.11703',
  },
  oneday: {
    key: 'oneday',
    authors: 'R. Fang, R. Bindu, A. Gupta, D. Kang',
    title: 'LLM Agents can Autonomously Exploit One-day Vulnerabilities',
    arxiv: '2404.08144',
    categories: 'cs.CR, cs.AI',
    submitted: '2024-04-11',
    revised: '2024-04-17',
    year: '2024',
    url: 'https://arxiv.org/abs/2404.08144',
  },
  zeroday: {
    key: 'zeroday',
    authors: 'Y. Zhu, A. Kellermann, A. Gupta, P. Li, R. Fang, R. Bindu, D. Kang',
    title: 'Teams of LLM Agents can Exploit Zero-Day Vulnerabilities',
    arxiv: '2406.01637',
    categories: 'cs.MA, cs.AI',
    submitted: '2024-06-02',
    revised: '2025-03-30',
    year: '2024',
    url: 'https://arxiv.org/abs/2406.01637',
  },
  cvebench: {
    key: 'cvebench',
    authors: 'Y. Zhu, A. Kellermann, D. Bowman, P. Li, A. Gupta, et al.',
    title: "CVE-Bench: A Benchmark for AI Agents' Ability to Exploit Real-World Web Application Vulnerabilities",
    arxiv: '2503.17332',
    categories: 'cs.CR, cs.AI',
    submitted: '2025-03-21',
    revised: '2025-06-24',
    year: '2025',
    url: 'https://arxiv.org/abs/2503.17332',
  },
  agentdojo: {
    key: 'agentdojo',
    authors: 'E. Debenedetti, J. Zhang, M. Balunović, L. Beurer-Kellner, M. Fischer, F. Tramèr',
    title: 'AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents',
    arxiv: '2406.13352',
    categories: 'cs.CR, cs.LG',
    submitted: '2024-06-19',
    revised: '2024-11-24',
    year: '2024',
    url: 'https://arxiv.org/abs/2406.13352',
  },
  ztidentity: {
    key: 'ztidentity',
    authors: 'K. Huang, V. S. Narajala, J. Yeoh, J. Ross, R. Raskar, et al.',
    title: 'A Novel Zero-Trust Identity Framework for Agentic AI: Decentralized Authentication and Fine-Grained Access Control',
    arxiv: '2505.19301',
    categories: 'cs.CR, cs.AI, cs.MA',
    submitted: '2025-05-25',
    revised: '2025-05-28',
    year: '2025',
    url: 'https://arxiv.org/abs/2505.19301',
  },
  openididentity: {
    key: 'openididentity',
    authors: 'T. South, S. Nagabhushanaradhya, A. Dissanayaka, S. Cecchetti, et al.',
    title: 'Identity Management for Agentic AI: The new frontier of authorization, authentication, and security for an AI agent world',
    arxiv: '2510.25819',
    categories: 'cs.CR, cs.AI, cs.NI',
    submitted: '2025-10-29',
    year: '2025',
    url: 'https://arxiv.org/abs/2510.25819',
    venue: 'OpenID Foundation whitepaper (arXiv preprint)',
  },
  mcpglance: {
    key: 'mcpglance',
    authors: 'M. M. Hasan, H. Li, E. Fallahzadeh, G. K. Rajbahadur, B. Adams, A. E. Hassan',
    title: 'Model Context Protocol (MCP) at First Glance: Studying the Security and Maintainability of MCP Servers',
    arxiv: '2506.13538',
    categories: 'cs.SE, cs.ET',
    submitted: '2025-06-16',
    revised: '2026-04-13',
    year: '2025',
    url: 'https://arxiv.org/abs/2506.13538',
  },
  cybercapable: {
    key: 'cybercapable',
    authors: 'A. B. Siddik',
    title: 'Cyber-Capable AI Agents: Vulnerabilities, Evaluation Containment, and Defensive Response',
    arxiv: '2607.25379',
    categories: 'cs.AI',
    submitted: '2026-07-28',
    revised: '2026-08-01',
    year: '2026',
    url: 'https://arxiv.org/abs/2607.25379',
  },
  // Incident references (primary / vendor / researcher disclosures)
  echoleak: {
    key: 'echoleak',
    authors: 'Aim Security; Microsoft (MSRC)',
    title: 'EchoLeak — zero-click indirect prompt injection in Microsoft 365 Copilot (CVE-2025-32711)',
    year: '2025',
    url: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2025-32711',
    venue: 'Primary security disclosure (CVE-2025-32711)',
  },
  camoleak: {
    key: 'camoleak',
    authors: 'Legit Security; GitHub',
    title: 'CamoLeak — GitHub Copilot Chat private source-code exfiltration (CVE-2025-59145)',
    year: '2025',
    url: 'https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code',
    venue: 'Security disclosure (CVE-2025-59145)',
  },
  copilotrce: {
    key: 'copilotrce',
    authors: 'J. Rehberger (Embrace The Red); Microsoft',
    title: 'GitHub Copilot / VS Code remote code execution via prompt injection & auto-approve (CVE-2025-53773)',
    year: '2025',
    url: 'https://embracethered.com/blog/posts/2025/github-copilot-remote-code-execution-via-prompt-injection/',
    venue: 'Security disclosure (CVE-2025-53773)',
  },
  cursor: {
    key: 'cursor',
    authors: 'Aim Security (CurXecute); Check Point Research (MCPoison)',
    title: 'Cursor IDE agent vulnerabilities: CurXecute (CVE-2025-54135) and MCPoison (CVE-2025-54136)',
    year: '2025',
    url: 'https://research.checkpoint.com/2025/cursor-vulnerability-mcpoison/',
    venue: 'Security disclosure (CVE-2025-54135 / CVE-2025-54136)',
  },
  postmark: {
    key: 'postmark',
    authors: 'Koi Security; Snyk',
    title: 'Malicious postmark-mcp npm package harvested email via silent BCC',
    year: '2025',
    url: 'https://snyk.io/blog/malicious-mcp-server-on-npm-postmark-mcp-harvests-emails/',
    venue: 'Supply-chain incident disclosure',
  },
  mcpremote: {
    key: 'mcpremote',
    authors: 'JFrog Security Research',
    title: 'Critical RCE in mcp-remote via crafted OAuth authorization endpoint (CVE-2025-6514)',
    year: '2025',
    url: 'https://jfrog.com/blog/2025-6514-critical-mcp-remote-rce-vulnerability/',
    venue: 'Security disclosure (CVE-2025-6514)',
  },
  mcpinspector: {
    key: 'mcpinspector',
    authors: 'Oligo Security; Anthropic',
    title: 'MCP Inspector unauthenticated RCE via browser + STDIO proxy (CVE-2025-49596)',
    year: '2025',
    url: 'https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596',
    venue: 'Security disclosure (CVE-2025-49596)',
  },
  owaspagentic: {
    key: 'owaspagentic',
    authors: 'OWASP',
    title: 'OWASP Top 10 for LLM Applications & Agentic AI Threats and Mitigations',
    year: '2025',
    url: 'https://genai.owasp.org/',
    venue: 'OWASP GenAI Security Project',
  },
  nistai: {
    key: 'nistai',
    authors: 'NIST',
    title: 'AI Risk Management Framework (AI RMF 1.0) and Generative AI Profile',
    year: '2024',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    venue: 'NIST',
  },
};

/* ------------------------------------------------------------------ */
/* Publications                                                        */
/* ------------------------------------------------------------------ */

export const PUBLICATIONS: ResearchPublication[] = [
  {
    slug: 'autonomous-ai-agent-security',
    seriesIndex: 1,
    title: 'Autonomous AI Agent Security: What Changed When the Model Became the Operator',
    navTitle: 'Autonomous AI Agent Security',
    area: 'AI Agent Security',
    type: 'Research Pillar',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'High',
    readingTime: '18 min',
    primaryEvidence: ['Academic Research', 'Primary Security Disclosure', 'Threat Intelligence'],
    seoTitle: 'Autonomous AI Agent Security: Threat Model, Boundaries & Architecture | ProxyTech Research',
    metaDescription:
      'An engineering analysis of autonomous AI agent security: why tool-using LLM agents break traditional trust boundaries, what the 2024–2026 research and incidents actually show, and how to architect containment, identity, and egress control.',
    summary:
      'The pillar of the series. Autonomous agents collapse the boundary between untrusted data and privileged action. We map the new attack surface, separate what the evidence proves from what it does not, and lay out the architectural response.',
    researchQuestion:
      'When an LLM stops advising and starts acting — invoking tools, running commands, spending credentials — which security assumptions from the pre-agent era stop holding?',
    labels: ['RESEARCH', 'INCIDENT', 'ANALYSIS'],
    related: [
      'ai-orchestrated-cyber-espionage-gtg-1002',
      'ai-agent-prompt-injection-security',
      'ai-agent-containment-architecture',
    ],
    featured: true,
  },
  {
    slug: 'ai-orchestrated-cyber-espionage-gtg-1002',
    seriesIndex: 2,
    title: 'Anatomy of an AI-Orchestrated Intrusion: A Technical Reconstruction of GTG-1002',
    navTitle: 'The GTG-1002 Incident',
    area: 'AI Agent Security',
    type: 'Incident Research',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'High',
    readingTime: '22 min',
    primaryEvidence: ['Primary Security Disclosure', 'Threat Intelligence', 'Academic Research'],
    seoTitle: 'GTG-1002: Anatomy of the First AI-Orchestrated Cyber Espionage Campaign | ProxyTech Research',
    metaDescription:
      "A technical reconstruction of GTG-1002 — the first publicly reported AI-orchestrated cyber-espionage campaign, in which an autonomous coding agent executed 80–90% of intrusion work. What failed, what the disclosure proves, and how to redesign agent deployments.",
    summary:
      'The flagship. In November 2025 Anthropic disclosed a campaign in which an agent ran the majority of an intrusion lifecycle at machine speed. We reconstruct the architecture, isolate the boundary that failed, and build the counterfactual secure deployment.',
    researchQuestion:
      'How does an intrusion actually work when a tool-using agent — not a human operator — drives reconnaissance, exploitation, and exfiltration, and which controls would have contained it?',
    labels: ['INCIDENT', 'PRIMARY SOURCE', 'ANALYSIS', 'OPEN QUESTION'],
    related: [
      'autonomous-ai-agent-security',
      'ai-agent-autonomous-exploitation-benchmarks',
      'ai-agent-network-egress-control',
    ],
    featured: true,
    isFlagship: true,
  },
  {
    slug: 'ai-agent-prompt-injection-security',
    seriesIndex: 3,
    title: 'Indirect Prompt Injection: The Control-Flow Vulnerability of the Agent Era',
    navTitle: 'Prompt Injection',
    area: 'AI Agent Security',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'High',
    readingTime: '19 min',
    primaryEvidence: ['Academic Research', 'Primary Security Disclosure', 'Experimental'],
    seoTitle: 'Indirect Prompt Injection Security for AI Agents: Evidence & Defenses | ProxyTech Research',
    metaDescription:
      'Why indirect prompt injection is a control-flow hijack, not a content-moderation problem. EchoLeak, CamoLeak, AgentDojo results, and the defenses that actually reduce attack success — with their limits.',
    summary:
      'Injected instructions in retrieved data cross the same channel as trusted instructions. We treat this as a control-flow integrity problem, review benchmark and incident evidence, and grade the defense classes honestly.',
    researchQuestion:
      'Why do agents obey instructions hidden in the data they read, and can any current defense reduce that below a rate production systems can tolerate?',
    labels: ['RESEARCH', 'INCIDENT', 'EXPERIMENTAL', 'ANALYSIS'],
    related: [
      'ai-coding-agent-security',
      'mcp-server-security',
      'ai-agent-tool-permissions-least-privilege',
    ],
    featured: true,
  },
  {
    slug: 'ai-coding-agent-security',
    seriesIndex: 4,
    title: 'The AI Coding Agent as an Execution Engine: Auto-Approve, YOLO Mode, and the Developer Trust Boundary',
    navTitle: 'AI Coding Agents',
    area: 'Software Engineering',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'High',
    readingTime: '17 min',
    primaryEvidence: ['Primary Security Disclosure', 'Academic Research', 'Analysis'],
    seoTitle: 'AI Coding Agent Security: RCE, Auto-Approve & Prompt Injection Risks | ProxyTech Research',
    metaDescription:
      'AI coding agents can write files, edit their own config, and run shell commands. We analyze CVE-2025-53773, Cursor CurXecute/MCPoison, and why "auto-approve" turns injection into remote code execution.',
    summary:
      'Coding agents sit inside the developer trust boundary with a shell attached. We examine how prompt injection in repository content becomes code execution, and where the approval boundary must sit.',
    researchQuestion:
      'What is the real blast radius when an AI coding agent with file-write and shell access reads attacker-influenced repository content?',
    labels: ['INCIDENT', 'PRIMARY SOURCE', 'ANALYSIS'],
    related: [
      'ai-agent-prompt-injection-security',
      'mcp-server-security',
      'ai-agent-tool-permissions-least-privilege',
    ],
  },
  {
    slug: 'mcp-server-security',
    seriesIndex: 5,
    title: 'Model Context Protocol Security: The Tool Supply Chain Nobody Vetted',
    navTitle: 'MCP Security',
    area: 'AI Infrastructure',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'High',
    readingTime: '18 min',
    primaryEvidence: ['Academic Research', 'Primary Security Disclosure', 'Analysis'],
    seoTitle: 'MCP Server Security: Tool Poisoning, Supply Chain & RCE Evidence | ProxyTech Research',
    metaDescription:
      'The Model Context Protocol turned tools into an installable supply chain. We review the empirical study of 1,899 MCP servers, tool-poisoning, and real incidents (postmark-mcp, mcp-remote CVE-2025-6514, MCP Inspector CVE-2025-49596).',
    summary:
      'MCP made "give the agent a tool" as easy as installing a package — and inherited every package-manager security problem plus new semantic ones. We map the MCP attack surface with empirical and incident evidence.',
    researchQuestion:
      'When tools are distributed like npm packages and their descriptions are read by the model as instructions, what is the trust model — and who verifies it?',
    labels: ['RESEARCH', 'INCIDENT', 'ANALYSIS'],
    related: [
      'ai-coding-agent-security',
      'ai-agent-prompt-injection-security',
      'ai-agent-tool-permissions-least-privilege',
    ],
  },
  {
    slug: 'ai-agent-sandbox-escape-security',
    seriesIndex: 6,
    title: 'Can an Agent Escape Its Sandbox? Reading the Evidence on Containment Boundaries',
    navTitle: 'Sandbox Escape',
    area: 'Cloud Systems',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'Moderate',
    readingTime: '17 min',
    primaryEvidence: ['Academic Research', 'Experimental', 'Analysis'],
    seoTitle: 'AI Agent Sandbox Escape: Containment Boundary Evidence & Isolation | ProxyTech Research',
    metaDescription:
      'What does the evidence actually say about AI agents escaping containers and sandboxes? We separate demonstrated capability from speculation, and lay out defense-in-depth isolation for agent execution.',
    summary:
      'A sober look at containment as a security boundary. Agents that can run code inherit every classic container-escape technique; we assess what the evidence proves and what remains an open question.',
    researchQuestion:
      'Is "run it in a sandbox" a sufficient containment strategy for a capable, motivated agent — and what does the evidence say about where that boundary breaks?',
    labels: ['RESEARCH', 'EXPERIMENTAL', 'ANALYSIS', 'OPEN QUESTION'],
    related: [
      'ai-agent-containment-architecture',
      'ai-agent-network-egress-control',
      'ai-agent-autonomous-exploitation-benchmarks',
    ],
  },
  {
    slug: 'ai-agent-containment-architecture',
    seriesIndex: 7,
    title: 'Containment Architecture for AI Agents: Isolation as a First-Class Design Principle',
    navTitle: 'Containment Architecture',
    area: 'Distributed Systems',
    type: 'Systems Architecture Report',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'Moderate',
    readingTime: '20 min',
    primaryEvidence: ['Academic Research', 'Analysis'],
    seoTitle: 'AI Agent Containment Architecture: Isolation, Mediation & Blast Radius | ProxyTech Research',
    metaDescription:
      'A systems-architecture report on containing autonomous agents: treating the agent like an untrusted OS process, mediating every boundary (user, tool, execution, agent-to-agent, environment), and bounding blast radius.',
    summary:
      'If the agent is potentially the adversary, containment must be structural, not behavioral. We translate OS-security principles — isolation, mediation, least privilege — into an agent runtime architecture.',
    researchQuestion:
      'What does a containment architecture look like when you assume the model inside it may be adversarial, and how do you bound blast radius by construction?',
    labels: ['RESEARCH', 'ANALYSIS'],
    related: [
      'ai-agent-sandbox-escape-security',
      'ai-agent-identity-and-access-control',
      'ai-agent-network-egress-control',
    ],
  },
  {
    slug: 'ai-agent-identity-and-access-control',
    seriesIndex: 8,
    title: 'Who Is the Agent? Identity and Access Control for Non-Human Operators',
    navTitle: 'Identity & Access',
    area: 'Cybersecurity',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'Moderate',
    readingTime: '18 min',
    primaryEvidence: ['Academic Research', 'Analysis'],
    seoTitle: 'AI Agent Identity & IAM: Non-Human Identity, Delegation & Short-Lived Creds | ProxyTech Research',
    metaDescription:
      'Agents act on behalf of users but are not users. We analyze identity models for autonomous agents: delegated authority, per-agent vs shared identity, short-lived credentials, and revocation — with the IAM research evidence.',
    summary:
      'The hardest agent-security question is authorization, not authentication. We compare identity models for delegated, autonomous operators and make an evidence-aware recommendation.',
    researchQuestion:
      'When an agent acts on a user’s behalf across many tools, whose identity does it carry, what is it authorized to do, and how fast can that authority be revoked?',
    labels: ['RESEARCH', 'ANALYSIS'],
    related: [
      'ai-agent-tool-permissions-least-privilege',
      'ai-agent-containment-architecture',
      'ai-agent-network-egress-control',
    ],
  },
  {
    slug: 'ai-agent-tool-permissions-least-privilege',
    seriesIndex: 9,
    title: 'Tool Permissions and Least Privilege: Confining What an Agent Is Allowed to Do',
    navTitle: 'Tool Permissions',
    area: 'AI Agent Security',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'Moderate',
    readingTime: '16 min',
    primaryEvidence: ['Academic Research', 'Experimental', 'Analysis'],
    seoTitle: 'AI Agent Tool Permissions & Least Privilege: Privilege Control Evidence | ProxyTech Research',
    metaDescription:
      'Least privilege for AI agents means bounding tool calls, not trusting the model to behave. We analyze deterministic privilege control (Progent), monotonic confinement, and over-privilege in real skill ecosystems.',
    summary:
      'The most tractable agent-security lever is the permission envelope around tools. We review deterministic privilege control and least-privilege enforcement, and where they trade utility for safety.',
    researchQuestion:
      'Can a deterministic policy layer around tool calls confine an agent enough to survive a successful prompt injection without destroying its usefulness?',
    labels: ['RESEARCH', 'EXPERIMENTAL', 'ANALYSIS'],
    related: [
      'ai-agent-prompt-injection-security',
      'ai-agent-identity-and-access-control',
      'ai-agent-containment-architecture',
    ],
  },
  {
    slug: 'ai-agent-network-egress-control',
    seriesIndex: 10,
    title: 'Network Egress Control for AI Agents: Closing the Exfiltration Channel',
    navTitle: 'Network Egress',
    area: 'Cloud Systems',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'Moderate',
    readingTime: '16 min',
    primaryEvidence: ['Primary Security Disclosure', 'Analysis'],
    seoTitle: 'AI Agent Network Egress Control: Deny-by-Default & Exfiltration Defense | ProxyTech Research',
    metaDescription:
      'Most agent data-exfiltration relies on outbound network access the agent never needed. We analyze exfiltration channels (image proxies, DNS, trusted APIs) and deny-by-default egress with allowlisted proxies.',
    summary:
      'The last line of defense against a compromised agent is the network. We analyze real exfiltration channels and the egress architecture that turns "obeyed the injection" into "went nowhere."',
    researchQuestion:
      'If an agent is successfully hijacked, can the network layer prevent the data from actually leaving — and what does deny-by-default egress cost operationally?',
    labels: ['INCIDENT', 'ANALYSIS'],
    related: [
      'ai-agent-containment-architecture',
      'ai-orchestrated-cyber-espionage-gtg-1002',
      'ai-agent-prompt-injection-security',
    ],
  },
  {
    slug: 'ai-agent-autonomous-exploitation-benchmarks',
    seriesIndex: 11,
    title: 'Measuring Offensive Capability: What AI Agent Cybersecurity Benchmarks Do and Do Not Prove',
    navTitle: 'Exploitation Benchmarks',
    area: 'Cybersecurity',
    type: 'Technical Research Analysis',
    published: '2026-09-11',
    updated: '2026-09-11',
    evidenceReviewed: 'September 2026',
    evidenceConfidence: 'Mixed',
    readingTime: '18 min',
    primaryEvidence: ['Academic Research', 'Experimental', 'Analysis'],
    seoTitle: 'AI Agent Exploitation Benchmarks: One-Day, Zero-Day & CVE-Bench Evidence | ProxyTech Research',
    metaDescription:
      'How offensive AI-agent capability is measured, and why the numbers are so easy to misread. One-day (87%), zero-day teams (4.3×), CVE-Bench (13%) — what each benchmark controls for, and its threats to validity.',
    summary:
      'Benchmark numbers drive both hype and policy. We read the offensive-capability literature carefully, separating "exploited with the CVE handed to it" from "found it alone," and flag the measurement traps.',
    researchQuestion:
      'What do agent exploitation benchmarks actually measure, and how much of the headline capability depends on information the benchmark quietly provides?',
    labels: ['RESEARCH', 'EXPERIMENTAL', 'ANALYSIS', 'OPEN QUESTION'],
    related: [
      'ai-orchestrated-cyber-espionage-gtg-1002',
      'ai-agent-sandbox-escape-security',
      'autonomous-ai-agent-security',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Derived helpers                                                     */
/* ------------------------------------------------------------------ */

export const SERIES_NAME = 'Autonomous AI Agent Security';
export const SERIES_TOTAL = PUBLICATIONS.length;

export function getPublication(slug: string): ResearchPublication | undefined {
  return PUBLICATIONS.find((p) => p.slug === slug);
}

export function publicationUrl(slug: string): string {
  return `${RESEARCH_BASE}/${slug}/`;
}

export function getRelated(slug: string): ResearchPublication[] {
  const pub = getPublication(slug);
  if (!pub) return [];
  return pub.related
    .map((s) => getPublication(s))
    .filter((p): p is ResearchPublication => Boolean(p));
}

export function seriesNeighbors(slug: string): {
  prev?: ResearchPublication;
  next?: ResearchPublication;
} {
  const ordered = [...PUBLICATIONS].sort((a, b) => a.seriesIndex - b.seriesIndex);
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: ordered[i - 1], next: ordered[i + 1] };
}

/* Research areas surfaced on the archive hub. */
export const RESEARCH_AREAS: { name: string; blurb: string }[] = [
  { name: 'AI Agent Security', blurb: 'Trust boundaries, injection, and confinement for tool-using models.' },
  { name: 'Cybersecurity', blurb: 'Offensive capability, identity, and threat evidence.' },
  { name: 'Cloud Systems', blurb: 'Isolation, egress, and runtime boundaries for agent workloads.' },
  { name: 'Distributed Systems', blurb: 'Mediation and blast-radius control across agent architectures.' },
  { name: 'Software Engineering', blurb: 'Coding agents inside the developer trust boundary.' },
  { name: 'AI Infrastructure', blurb: 'The tool supply chain: MCP, registries, and provenance.' },
];

/* Open research questions surfaced on the hub. */
export const RESEARCH_QUESTIONS: string[] = [
  'Can any defense drive indirect prompt-injection success low enough for high-privilege production agents?',
  'How much autonomous offensive capability is real versus an artifact of information handed to the benchmark?',
  'What is the right identity model for an agent that acts for a user but is not the user?',
  'Is behavioral alignment ever a sufficient substitute for architectural containment?',
  'How do you detect an agent that is doing exactly what it was told — by an attacker?',
];
