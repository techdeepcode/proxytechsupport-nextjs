import type { LandingPageConfig } from '../landing-pages';
import {
  k8sPage,
  k8sTechPage,
  relatedLinks,
  jobSupportHighlights,
  k8sTechFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_INTERVIEW_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_AGENT_RUNTIME_LINK,
  K8S_AGENT_SANDBOX_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_MCP_GATEWAY_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

// ─── MCP SERVER HUB ────────────────────────────────────────────────────────────

export const kubernetesMcpServer: LandingPageConfig = k8sPage({
  slug: 'kubernetes-mcp-server-job-support',
  title: 'Kubernetes MCP Server Job Support — Deploy, Scale & Secure Tool Servers',
  description:
    'Real-time job support for running Model Context Protocol (MCP) servers on Kubernetes: deployment and scaling of tool servers, authentication and authorization, RBAC, network policy, multi-tenancy, rate limits, and agent-to-tool security. Same-day, global.',
  keywords: [
    'Kubernetes MCP server support', 'MCP server Kubernetes', 'Model Context Protocol Kubernetes',
    'MCP tool server', 'MCP authentication authorization', 'MCP multi-tenancy', 'MCP production support',
  ],
  h1: 'Kubernetes MCP Server Job Support — Run Tool Servers Agents Can Trust',
  tagline:
    'MCP servers are how agents reach tools and data. On Kubernetes they need deployment, scaling, authentication, authorization, and isolation done properly.',
  heroEyebrow: 'MCP Servers on Kubernetes',
  painIntro:
    'An MCP server is a privileged bridge between an agent and real tools, data, and APIs. Deploy it without proper authentication, authorization, rate limits, and network policy and you have handed an agent — and anyone who can manipulate it — a powerful, unguarded capability.',
  heroVariant:
    'We help you run Model Context Protocol (MCP) servers on Kubernetes end to end: deployment and horizontal scaling of tool servers, authentication and authorization (OAuth/OIDC where appropriate), RBAC and scoped access per agent identity, network policy and egress control, rate limiting, multi-tenancy and isolation, audit logging of every tool call, and observability. We treat the MCP layer as security-critical infrastructure — because a tool server is exactly the capability a prompt injection would try to abuse — and we cover both self-hosted MCP and managed gateways (AWS Bedrock AgentCore Gateway, Microsoft Foundry) honestly.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is involved in running MCP servers on Kubernetes?',
      answer:
        'Deployment and scaling of the tool servers, authentication and authorization so only permitted agent identities can call them, RBAC and least-privilege scoping of what each tool can do, network policy and egress control, rate limiting to prevent abuse and runaway cost, multi-tenancy and isolation, audit logging of every tool invocation, and observability. We treat MCP as privileged infrastructure, not an afterthought.',
    },
    {
      question: 'How do you secure agent-to-tool access over MCP?',
      answer:
        'Each agent authenticates with its own scoped, short-lived identity; MCP servers authorize per tool and per action; network policy limits what the server can reach; rate limits cap abuse; and every call is audited. The principle is that a manipulated agent should only ever reach the minimum set of tools and data it genuinely needs.',
    },
    {
      question: 'Self-hosted MCP on Kubernetes or a managed gateway?',
      answer:
        'Self-host on Kubernetes when you need control over data residency, custom tools, network integration, or hybrid/on-prem. Use a managed MCP gateway (such as AWS Bedrock AgentCore Gateway or Microsoft Foundry integrations) when you want authentication, authorization, and scaling handled for you. We help you choose on the merits and connect either into your agent platform securely.',
    },
    {
      question: 'Do you help debug MCP production failures?',
      answer:
        'Yes. MCP failures — 401/403 authorization errors, token/credential expiry, rate-limit rejections, timeouts, and tool errors that cascade into agent loops — are a common incident class. We help you trace the failing call, fix the auth/scope/network cause, and add the observability and limits that prevent a repeat.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your MCP setup, agent framework, and cluster, and whether you are building, scaling, securing, or firefighting. We will work it with you same-day.',
    },
  ],
  useCasesSection: {
    title: 'MCP Work We Help With on Kubernetes',
    cases: [
      'Deploying and scaling MCP tool servers with health, readiness, and horizontal autoscaling',
      'Putting MCP servers behind proper authentication and per-agent authorization',
      'Scoping RBAC and network egress so a tool can only do and reach what it should',
      'Rate-limiting and multi-tenant isolation to prevent abuse and cross-tenant leakage',
      'Auditing every tool call for security and debuggability',
      'Debugging MCP 401/403, token expiry, timeouts, and tool errors that trigger agent loops',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_MCP_GATEWAY_LINK, K8S_AGENTIC_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENT_RUNTIME_LINK, K8S_AGENT_SANDBOX_LINK, K8S_SECURITY_LINK, K8S_SRE_LINK,
      { label: 'MCP gateway support', href: '/kubernetes-mcp-gateway-job-support/' },
      { label: 'MCP security support', href: '/kubernetes-mcp-security-job-support/' },
      { label: 'MCP observability support', href: '/kubernetes-mcp-observability-job-support/' },
      { label: 'MCP failure troubleshooting', href: '/kubernetes-mcp-failure-troubleshooting/' },
      EXISTING.mcpServer, EXISTING.mcpSecurity, EXISTING.mcpFoundry, EXISTING.agenticAi,
    ],
  }),
});

// ─── MCP GATEWAY ───────────────────────────────────────────────────────────────

export const kubernetesMcpGateway: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-mcp-gateway-job-support',
  title: 'Kubernetes MCP Gateway Job Support — Central Auth, Routing & Policy for Tools',
  description:
    'Real-time support for MCP gateways on Kubernetes: a single policy-enforcing entry point for tool servers with authentication, authorization, routing, rate limiting, and audit — using Gateway API, service mesh, or managed gateways.',
  keywords: [
    'MCP gateway Kubernetes', 'MCP gateway support', 'tool server gateway', 'MCP routing policy',
    'MCP rate limiting', 'agent gateway Kubernetes',
  ],
  h1: 'Kubernetes MCP Gateway — One Governed Front Door for Agent Tools',
  tagline: 'Centralise authentication, authorization, routing, and rate limiting for all your MCP tool servers.',
  heroEyebrow: 'MCP Gateway — Kubernetes',
  painIntro:
    'As MCP servers multiply, per-server auth and policy become inconsistent and hard to audit. A gateway gives you one governed entry point where identity, authorization, routing, limits, and logging live.',
  heroVariant:
    'We help you build an MCP gateway on Kubernetes: a single policy-enforcing front door for your tool servers that handles authentication and per-agent authorization, routes to the right MCP backend, applies rate limits and quotas, and audits every call — built on the Gateway API, a service mesh (Istio), or a managed agent gateway. Centralising this makes agent-to-tool access consistent, reviewable, and far easier to secure than scattered per-server configuration.',
  faqs: k8sTechFaqs('MCP gateway', 'We help you centralise authentication, authorization, routing, rate limiting, and audit for MCP tool servers behind one gateway.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_MCP_SERVER_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_RUNTIME_LINK,
      { label: 'MCP security support', href: '/kubernetes-mcp-security-job-support/' },
      { label: 'Agent identity & workload identity support', href: '/kubernetes-agent-identity-workload-identity-support/' },
      EXISTING.mcpSecurity, EXISTING.mcpFoundry,
    ],
  }),
});

// ─── MCP SECURITY ───────────────────────────────────────────────────────────────

export const kubernetesMcpSecurity: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-mcp-security-job-support',
  title: 'Kubernetes MCP Security Job Support — Authz, Least Privilege & Audit for Tools',
  description:
    'Real-time support for MCP security on Kubernetes: OAuth/OIDC authentication, per-agent authorization and least privilege, network egress control, rate limiting, secret isolation, and full tool-call auditing against prompt-injection abuse.',
  keywords: [
    'MCP security Kubernetes', 'MCP authorization', 'MCP OAuth OIDC', 'MCP least privilege',
    'tool call audit', 'MCP prompt injection defense',
  ],
  h1: 'Kubernetes MCP Security — Make Tool Servers the Hardest Thing to Abuse',
  tagline: 'MCP servers are the capability a prompt injection wants. Lock them down with authz, least privilege, egress control, and audit.',
  heroEyebrow: 'MCP Security',
  painIntro:
    'The most dangerous thing an injected prompt can do is call a powerful tool. If your MCP servers trust any caller, grant broad scope, or are not audited, you have no defence when an agent is manipulated.',
  heroVariant:
    'We help you secure MCP on Kubernetes as the critical capability layer it is: OAuth/OIDC authentication, per-agent and per-action authorization, least-privilege tool scopes, network egress restriction so a tool can only reach intended systems, rate limits to cap abuse, secret isolation, and full audit of every call. We connect this with agent identity and sandboxing so that even a successful prompt injection reaches the smallest possible blast radius.',
  faqs: k8sTechFaqs('MCP security', 'We help you secure MCP servers with OAuth/OIDC, per-agent authorization, least-privilege scopes, egress control, rate limits, and full tool-call auditing.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_SECURITY_LINK, K8S_MCP_GATEWAY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_MCP_SERVER_LINK, K8S_AGENTIC_HUB_LINK,
      { label: 'Agent identity & workload identity support', href: '/kubernetes-agent-identity-workload-identity-support/' },
      EXISTING.mcpSecurity, EXISTING.aiAgentPromptInjection, EXISTING.aiAgentNetworkEgress, EXISTING.aiAgentIdentity,
    ],
  }),
});

// ─── MCP OBSERVABILITY ────────────────────────────────────────────────────────

export const kubernetesMcpObservability: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-mcp-observability-job-support',
  title: 'Kubernetes MCP Observability Job Support — Trace Every Tool Call',
  description:
    'Real-time support for MCP observability on Kubernetes: trace and audit every tool call, measure latency and error rates, detect abuse and loops, and connect MCP spans into end-to-end agent traces with OpenTelemetry.',
  keywords: [
    'MCP observability Kubernetes', 'MCP tracing', 'tool call monitoring', 'MCP latency errors',
    'OpenTelemetry MCP', 'agent tool observability',
  ],
  h1: 'Kubernetes MCP Observability — Know Every Tool Call, Its Cost and Outcome',
  tagline: 'Trace, measure, and audit MCP tool calls as first-class spans in your agent traces.',
  heroEyebrow: 'MCP Observability',
  painIntro:
    'When an agent incident traces back to a tool, you need the full picture: which MCP server, which tool, what inputs and outputs, how long it took, whether it errored, and what it cost. Without MCP-level telemetry, tool calls are a blind spot.',
  heroVariant:
    'We help you instrument MCP on Kubernetes: OpenTelemetry spans for every tool call wired into end-to-end agent traces, latency and error-rate metrics per tool and per server, abuse and loop detection, and audit-grade records of inputs, outputs, and outcomes. This turns the tool layer from a black box into something you can debug, cost-attribute, and prove.',
  faqs: k8sTechFaqs('MCP observability', 'We help you trace every MCP tool call with OpenTelemetry, measure latency/errors per tool, and audit inputs, outputs, and outcomes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_SRE_LINK, K8S_MCP_SERVER_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_MCP_GATEWAY_LINK, K8S_AGENTIC_HUB_LINK,
      { label: 'Agent observability support', href: '/kubernetes-agent-observability-job-support/' },
      { label: 'MCP failure troubleshooting', href: '/kubernetes-mcp-failure-troubleshooting/' },
      EXISTING.mcpServer,
    ],
  }),
});

// ─── MCP PRODUCTION ──────────────────────────────────────────────────────────

export const kubernetesMcpProduction: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-mcp-production-support',
  title: 'Kubernetes MCP Production Support — Fix Tool-Server Incidents Fast',
  description:
    'Real-time production support for MCP on Kubernetes: resolve authorization failures, token/credential expiry, rate-limit rejections, timeouts, and tool errors that cascade into agent loops — with an engineer on the call.',
  keywords: [
    'MCP production support', 'MCP incident Kubernetes', 'MCP 401 403 fix', 'MCP timeout',
    'tool server failure', 'MCP rate limit error',
  ],
  h1: 'Kubernetes MCP Production Support — Stop Tool-Server Failures Cascading',
  tagline: 'MCP failures turn into agent loops and broken workflows fast. Real-time help to find the cause and stabilise.',
  heroEyebrow: 'MCP Production Firefighting',
  painIntro:
    'An MCP server returning 401/403, a credential that just expired, a rate limit tripping under load, or a tool timing out — and suddenly agents loop, retry, and the whole workflow breaks. These cascade quickly.',
  heroVariant:
    'We work MCP incidents live on Kubernetes: tracing the failing tool call, identifying the authorization, token-expiry, rate-limit, network, or tool-logic cause, stabilising the agent workflow so it stops looping or retrying destructively, and then adding the limits, retries-with-backoff, and observability that prevent a repeat. You keep an engineer on the call until it is healthy.',
  faqs: k8sTechFaqs('MCP production', 'We help you resolve MCP 401/403, token expiry, rate-limit, timeout, and tool errors live, stop agent loops, and harden against repeats.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_MCP_SERVER_LINK, K8S_PRODUCTION_LINK],
    problemLink: K8S_SRE_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_MCP_GATEWAY_LINK, K8S_AGENTIC_HUB_LINK, K8S_SECURITY_LINK,
      { label: 'MCP failure troubleshooting', href: '/kubernetes-mcp-failure-troubleshooting/' },
      { label: 'Agent permission error troubleshooting', href: '/kubernetes-agent-permission-error-troubleshooting/' },
      EXISTING.mcpServer, EXISTING.aimlProduction,
    ],
  }),
});

export const kubernetesMcpPages: LandingPageConfig[] = [
  kubernetesMcpServer,
  kubernetesMcpGateway,
  kubernetesMcpSecurity,
  kubernetesMcpObservability,
  kubernetesMcpProduction,
];
