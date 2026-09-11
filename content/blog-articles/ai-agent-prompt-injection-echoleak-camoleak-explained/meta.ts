export const meta = {
  slug: "ai-agent-prompt-injection-echoleak-camoleak-explained",
  title: 'Prompt Injection Is Now Remote Code Execution: EchoLeak & CamoLeak Explained',
  description:
    'EchoLeak and CamoLeak turned zero-click prompt injection into real data theft from Microsoft 365 Copilot and GitHub Copilot in 2025. Here is why injection is a control-flow bug, not a content bug — and what actually stops it.',
  date: '2026-09-12',
  keywords:
    'prompt injection, indirect prompt injection, EchoLeak, CamoLeak, CVE-2025-32711, CVE-2025-59145, AI agent security, LLM security, Copilot vulnerability, zero-click AI exfiltration',
  permalink: '/blog/ai-agent-prompt-injection-echoleak-camoleak-explained/',
  about: 'Indirect prompt injection against AI agents',
  faqs: [
    {
      q: 'What is indirect prompt injection?',
      a: 'Indirect prompt injection is when an attacker plants instructions in content an AI agent will later read on someone else’s behalf — a web page, email, document, or code comment. Because the model processes instructions and data in the same channel, it can execute the planted instruction using the victim’s tools and permissions. It is a control-flow integrity failure, not a content-moderation problem.',
    },
    {
      q: 'What were EchoLeak and CamoLeak?',
      a: 'EchoLeak (CVE-2025-32711) was a zero-click flaw in Microsoft 365 Copilot where a single crafted email could make the assistant read and exfiltrate internal documents. CamoLeak (CVE-2025-59145) hid instructions in invisible markdown in a GitHub pull request to exfiltrate private source and secrets via a trusted image proxy. Both were disclosed and patched in 2025.',
    },
    {
      q: 'Can prompt injection be fully prevented?',
      a: 'Not reliably at the content layer — no evaluated defense eliminates it while keeping full task utility. The durable approach is to assume injection will sometimes succeed and bound its consequences with deterministic tool-call authorization, data provenance/isolation, and deny-by-default network egress.',
    },
  ],
} as const;
