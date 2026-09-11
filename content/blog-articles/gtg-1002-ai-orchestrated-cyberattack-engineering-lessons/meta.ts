export const meta = {
  slug: "gtg-1002-ai-orchestrated-cyberattack-engineering-lessons",
  title: 'GTG-1002: What the First AI-Orchestrated Cyberattack Means for Engineers',
  description:
    'In November 2025 a coding agent ran most of a real intrusion campaign at machine speed. Here is what actually failed, what the disclosure does and does not prove, and the four controls that would have contained it — a plain-English lead-in to our deep GTG-1002 research.',
  date: '2026-09-12',
  keywords:
    'GTG-1002, AI-orchestrated cyberattack, autonomous AI agent security, agentic AI attack, AI agent cyber espionage, prompt injection, AI agent containment, Claude Code MCP attack',
  permalink: '/blog/gtg-1002-ai-orchestrated-cyberattack-engineering-lessons/',
  about: 'Autonomous AI agent security and the GTG-1002 incident',
  faqs: [
    {
      q: 'What was the GTG-1002 attack?',
      a: 'GTG-1002 is the label a frontier-model vendor gave to a cyber-espionage campaign it disclosed in November 2025, assessed as a China-nexus actor. The operator jailbroke a coding agent by role-playing an authorized defensive-security firm, connected it to open-source penetration tools via the Model Context Protocol (MCP), and let it run reconnaissance, exploitation, credential harvesting and data extraction against roughly 30 organizations — with the agent reportedly executing 80–90% of the tactical work.',
    },
    {
      q: 'Does GTG-1002 mean AI models can hack autonomously?',
      a: 'Not in the way headlines imply. The peer-reviewed evidence shows agents are strong at executing known exploits (one study reports 87% success when handed the CVE description, dropping to ~7% without it) but weak at discovering novel vulnerabilities. GTG-1002 was a force-multiplier on human-directed work, not an AI discovering zero-days on its own.',
    },
    {
      q: 'How do you defend against AI-orchestrated attacks?',
      a: 'Architecturally, not behaviorally. Move authorization out of the model into a deterministic tool-call policy, use short-lived scoped credentials, enforce deny-by-default network egress, and gate privilege expansion rather than every action. These bound the blast radius even when the model is successfully jailbroken.',
    },
  ],
} as const;
