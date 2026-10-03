import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  k8sTechPage,
  relatedLinks,
  k8sTechFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_INTERVIEW_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_AGENT_RUNTIME_LINK,
  K8S_AGENT_SANDBOX_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_GPU_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

const geo = [K8S_USA_LINK, K8S_EUROPE_LINK];

function useCasePage(cfg: {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  tagline: string;
  heroEyebrow: string;
  entity: string;
  usage: string;
  painIntro: string;
  heroVariant: string;
  techLinks: LandingRelatedLink[];
  extraLinks: LandingRelatedLink[];
}): LandingPageConfig {
  return k8sTechPage({
    slug: cfg.slug,
    title: cfg.title,
    description: cfg.description,
    keywords: cfg.keywords,
    h1: cfg.h1,
    tagline: cfg.tagline,
    heroEyebrow: cfg.heroEyebrow,
    painIntro: cfg.painIntro,
    heroVariant: cfg.heroVariant,
    faqs: k8sTechFaqs(cfg.entity, cfg.usage),
    relatedLinks: relatedLinks({
      geoLinks: geo,
      techLinks: cfg.techLinks,
      problemLink: K8S_PRODUCTION_LINK,
      proxyLink: K8S_INTERVIEW_LINK,
      additionalLinks: [K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, ...cfg.extraLinks],
    }),
  });
}

export const customerSupportAgent = useCasePage({
  slug: 'kubernetes-customer-support-agent-job-support',
  title: 'Kubernetes Customer Support Agent Job Support — Scale, RAG & Guardrails',
  description:
    'Real-time support for customer-support agents on Kubernetes: RAG over knowledge bases, tool/MCP access to systems, autoscaling for bursty volume, guardrails and containment, and reliable production operation.',
  keywords: ['customer support agent Kubernetes', 'support agent RAG', 'support bot infrastructure', 'agent autoscaling support', 'support agent guardrails'],
  h1: 'Kubernetes Customer Support Agent — RAG, Tools, and Scale Under Real Volume',
  tagline: 'Support agents need grounded answers, safe tool access, and autoscaling for spiky volume.',
  heroEyebrow: 'Use Case: Customer Support Agent',
  entity: 'customer-support agents on Kubernetes',
  usage: 'We help you ground a support agent in RAG, give it safe tool/MCP access to your systems, autoscale it for bursty volume, and contain it with guardrails.',
  painIntro:
    'A support agent that hallucinates, cannot safely touch backend systems, or falls over at peak volume erodes trust fast. The infrastructure around it decides whether it helps or hurts.',
  heroVariant:
    'We help you build customer-support agents on Kubernetes: RAG over your knowledge base for grounded answers, safe tool and MCP access to order/account systems with least-privilege identity, autoscaling for spiky volume (scale-to-zero off-peak), guardrails and containment so the agent cannot take unsafe actions, and observability to catch loops and bad answers. The result is an agent that is grounded, safe, and reliable under real traffic.',
  techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_MCP_SERVER_LINK],
  extraLinks: [
    { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
    { label: 'Agent security job support', href: '/kubernetes-agent-security-job-support/' },
    EXISTING.rag, EXISTING.agenticAi,
  ],
});

export const codingAgentPlatform = useCasePage({
  slug: 'kubernetes-coding-agent-platform-job-support',
  title: 'Kubernetes Coding Agent Platform Job Support — Sandboxed Dev at Scale',
  description:
    'Real-time support for coding-agent platforms on Kubernetes: ephemeral sandboxed dev environments, repo/toolchain isolation, fast provisioning, resource/timeout limits, and secure egress for autonomous and assisted coding agents.',
  keywords: ['coding agent platform Kubernetes', 'sandboxed dev environment', 'autonomous coding agent', 'coding agent scale', 'dev sandbox platform'],
  h1: 'Kubernetes Coding Agent Platform — Ephemeral, Isolated Dev at Scale',
  tagline: 'A platform for many coding agents: fast, disposable, isolated sandboxes with secure egress.',
  heroEyebrow: 'Use Case: Coding Agent Platform',
  entity: 'coding-agent platforms on Kubernetes',
  usage: 'We help you run a platform of ephemeral, sandboxed dev environments for coding agents with fast provisioning, resource/timeout limits, and secure egress.',
  painIntro:
    'Running one coding agent is easy; running a platform for many — each needing an isolated, disposable environment that spins up fast and cannot reach your secrets — is a real infrastructure problem.',
  heroVariant:
    'We help you build a coding-agent platform on Kubernetes: ephemeral per-session sandboxes (gVisor/Kata, non-root, read-only roots) with the repo and toolchain mounted, warm pools for fast provisioning, resource and timeout limits so a runaway build cannot take a node down, scoped egress, and clean teardown. We integrate GKE Agent Sandbox or self-hosted sandboxing as fits, and add the observability and cost controls a multi-tenant coding platform needs.',
  techLinks: [K8S_AGENT_SANDBOX_LINK, K8S_AGENT_RUNTIME_LINK],
  extraLinks: [
    { label: 'Coding agent infrastructure support', href: '/kubernetes-coding-agent-infrastructure-support/' },
    { label: 'GKE Agent Sandbox support', href: '/gke-agent-sandbox-job-support/' },
    EXISTING.aiAgentSandboxSec,
  ],
});

export const enterpriseRag = useCasePage({
  slug: 'kubernetes-enterprise-rag-job-support',
  title: 'Kubernetes Enterprise RAG Job Support — Retrieval, Vector DB & Freshness',
  description:
    'Real-time support for enterprise RAG on Kubernetes: embedding and retrieval pipelines, vector DB (pgvector, Milvus, Qdrant, OpenSearch), reranking, freshness and ingestion, latency tuning, and private deployment.',
  keywords: ['enterprise RAG Kubernetes', 'RAG pipeline infrastructure', 'vector database Kubernetes', 'retrieval augmented generation', 'RAG freshness ingestion'],
  h1: 'Kubernetes Enterprise RAG — Retrieval That Is Fresh, Fast, and Private',
  tagline: 'Production RAG is an infrastructure problem: ingestion, vector search, reranking, freshness, and latency.',
  heroEyebrow: 'Use Case: Enterprise RAG',
  entity: 'enterprise RAG on Kubernetes',
  usage: 'We help you build embedding/retrieval pipelines, run and tune the vector DB, keep content fresh, and hit latency targets — privately where needed.',
  painIntro:
    'A RAG demo is easy; enterprise RAG that stays fresh, answers correctly, performs under load, and keeps data private is where teams get stuck.',
  heroVariant:
    'We help you build enterprise RAG on Kubernetes: ingestion and embedding pipelines that keep content fresh, a well-tuned vector DB (pgvector, Milvus, Qdrant, OpenSearch) with the right index and resources, reranking for quality, latency tuning across the retrieval path, and private/in-boundary deployment so sensitive documents never leave. We fix the real failure modes — stale indexes, wrong citations, slow queries, connectivity — and make retrieval reliable.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_SRE_LINK],
  extraLinks: [
    { label: 'RAG latency troubleshooting', href: '/kubernetes-rag-latency-troubleshooting/' },
    { label: 'Vector DB connectivity troubleshooting', href: '/kubernetes-vector-db-connectivity-troubleshooting/' },
    { label: 'Private AI on Kubernetes support', href: '/private-ai-kubernetes-job-support/' },
    EXISTING.rag, EXISTING.vectorDb,
  ],
});

export const documentProcessingAgent = useCasePage({
  slug: 'kubernetes-document-processing-agent-job-support',
  title: 'Kubernetes Document Processing Agent Job Support — Extraction at Scale',
  description:
    'Real-time support for document-processing agents on Kubernetes: OCR and extraction pipelines, batch and async processing with queues, GPU inference, sandboxed tool execution, and private deployment for sensitive documents.',
  keywords: ['document processing agent Kubernetes', 'OCR extraction pipeline', 'batch document AI', 'async agent queue', 'document AI infrastructure'],
  h1: 'Kubernetes Document Processing Agent — Extraction Pipelines That Scale',
  tagline: 'Document AI is batch, bursty, and often sensitive. We build the queued, GPU-backed infrastructure for it.',
  heroEyebrow: 'Use Case: Document Processing Agent',
  entity: 'document-processing agents on Kubernetes',
  usage: 'We help you run OCR/extraction and document agents with queues for batch/async load, GPU inference, sandboxed tools, and private deployment.',
  painIntro:
    'Processing thousands of documents with agents means batch and async workloads, queues, GPU inference, and (often) sensitive data — not a simple request/response service.',
  heroVariant:
    'We help you build document-processing agents on Kubernetes: OCR and extraction pipelines, asynchronous and batch processing backed by queues with concurrency control, GPU inference for vision/NLP models, sandboxed tool execution, and private/in-boundary deployment for sensitive documents. We design for throughput and cost (scale with the queue, scale to zero when empty) and keep the pipeline observable and auditable.',
  techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_GPU_LINK],
  extraLinks: [
    { label: 'Insurance AI on Kubernetes support', href: '/kubernetes-ai-insurance-job-support/' },
    { label: 'Multi-agent system support', href: '/kubernetes-multi-agent-system-job-support/' },
    { label: 'Private AI on Kubernetes support', href: '/private-ai-kubernetes-job-support/' },
  ],
});

export const incidentResponseAgent = useCasePage({
  slug: 'kubernetes-incident-response-agent-job-support',
  title: 'Kubernetes Incident Response Agent Job Support — Safe, Auditable Automation',
  description:
    'Real-time support for incident-response agents on Kubernetes: safe read/act tool access with human checkpoints, least-privilege identity, audit of every action, and integration with observability and runbooks.',
  keywords: ['incident response agent Kubernetes', 'AIOps agent', 'auto-remediation agent', 'incident agent least privilege', 'runbook automation agent'],
  h1: 'Kubernetes Incident Response Agent — Automation That Cannot Make It Worse',
  tagline: 'An agent that touches production during incidents needs least privilege, human checkpoints, and full audit.',
  heroEyebrow: 'Use Case: Incident Response Agent',
  entity: 'incident-response agents on Kubernetes',
  usage: 'We help you build incident agents with safe tool access, human checkpoints for risky actions, least-privilege identity, and full audit.',
  painIntro:
    'An incident-response agent that can act on production is powerful and dangerous — without least privilege, checkpoints, and audit, it can turn an incident into an outage.',
  heroVariant:
    'We help you build incident-response agents on Kubernetes: scoped, least-privilege access to observability and remediation tools over MCP, human-in-the-loop checkpoints before risky actions, policy enforcement on what the agent may do, full audit of every action, and integration with your runbooks and alerting. The agent triages, proposes, and (where safe and approved) acts — but it can never silently take a destructive step.',
  techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_SRE_LINK],
  extraLinks: [
    { label: 'SRE agent on Kubernetes support', href: '/kubernetes-sre-agent-job-support/' },
    { label: 'Agent security job support', href: '/kubernetes-agent-security-job-support/' },
    { label: 'Agent identity & workload identity support', href: '/kubernetes-agent-identity-workload-identity-support/' },
  ],
});

export const devopsAgent = useCasePage({
  slug: 'kubernetes-devops-agent-job-support',
  title: 'Kubernetes DevOps Agent Job Support — CI/CD and Platform Automation Agents',
  description:
    'Real-time support for DevOps agents on Kubernetes: safe automation of CI/CD, IaC, and platform tasks with sandboxed execution, least-privilege, GitOps integration, and human approval for changes.',
  keywords: ['DevOps agent Kubernetes', 'CI/CD agent', 'platform automation agent', 'IaC agent', 'GitOps agent'],
  h1: 'Kubernetes DevOps Agent — Automate Platform Work Without Losing Control',
  tagline: 'DevOps agents can accelerate CI/CD and platform work — with sandboxing, least privilege, and GitOps guardrails.',
  heroEyebrow: 'Use Case: DevOps Agent',
  entity: 'DevOps agents on Kubernetes',
  usage: 'We help you build DevOps agents that automate CI/CD and platform tasks with sandboxed execution, least-privilege access, and GitOps/approval guardrails.',
  painIntro:
    'A DevOps agent with broad cluster and cloud access is a liability. The value comes only when execution is sandboxed, access is least-privilege, and changes go through approval.',
  heroVariant:
    'We help you build DevOps agents on Kubernetes: sandboxed execution for commands and IaC, least-privilege identity scoped to exactly the resources a task needs, GitOps integration so changes are proposed as reviewable PRs rather than applied blindly, human approval for risky operations, and audit of everything. The agent speeds up toil without becoming an unreviewed path to production.',
  techLinks: [K8S_AGENT_SANDBOX_LINK, K8S_AGENT_RUNTIME_LINK],
  extraLinks: [
    { label: 'SRE agent on Kubernetes support', href: '/kubernetes-sre-agent-job-support/' },
    { label: 'Agent security job support', href: '/kubernetes-agent-security-job-support/' },
    EXISTING.devops, EXISTING.aiDevopsEngineer,
  ],
});

export const sreAgent = useCasePage({
  slug: 'kubernetes-sre-agent-job-support',
  title: 'Kubernetes SRE Agent Job Support — Reliability Automation With Guardrails',
  description:
    'Real-time support for SRE agents on Kubernetes: diagnosis from telemetry, safe remediation with checkpoints, least-privilege access to observability and control planes, and integration with SLOs and runbooks.',
  keywords: ['SRE agent Kubernetes', 'reliability agent', 'AIOps SRE', 'auto remediation SRE', 'SRE automation agent'],
  h1: 'Kubernetes SRE Agent — Diagnose and Remediate Safely',
  tagline: 'An SRE agent should read telemetry widely and act narrowly — with checkpoints and audit.',
  heroEyebrow: 'Use Case: SRE Agent',
  entity: 'SRE agents on Kubernetes',
  usage: 'We help you build SRE agents that diagnose from telemetry and remediate safely with least-privilege access, checkpoints, and SLO/runbook integration.',
  painIntro:
    'An SRE agent is most useful when it can read everything and change almost nothing without approval — the hard part is wiring that access and safety correctly.',
  heroVariant:
    'We help you build SRE agents on Kubernetes: broad read access to metrics, logs, and traces for diagnosis; narrow, least-privilege, checkpointed access for remediation; integration with SLOs, error budgets, and runbooks; and full audit. The agent accelerates triage and handles well-understood remediations, while risky actions always route through human approval — so reliability automation never becomes an incident source.',
  techLinks: [K8S_SRE_LINK, K8S_AGENT_RUNTIME_LINK],
  extraLinks: [
    { label: 'Incident response agent support', href: '/kubernetes-incident-response-agent-job-support/' },
    { label: 'Agent observability support', href: '/kubernetes-agent-observability-job-support/' },
    EXISTING.sre,
  ],
});

export const securityAgent = useCasePage({
  slug: 'kubernetes-security-agent-job-support',
  title: 'Kubernetes Security Agent Job Support — Detection & Triage Without Over-Privilege',
  description:
    'Real-time support for security agents on Kubernetes: triage and investigation agents with read-heavy least-privilege access, sandboxed analysis, audit, and strict containment so the security tool is not itself a risk.',
  keywords: ['security agent Kubernetes', 'SOC agent', 'threat triage agent', 'security automation least privilege', 'security agent containment'],
  h1: 'Kubernetes Security Agent — Triage and Investigate Without Becoming the Risk',
  tagline: 'A security agent must be the most contained agent you run — read-heavy, sandboxed, and fully audited.',
  heroEyebrow: 'Use Case: Security Agent',
  entity: 'security agents on Kubernetes',
  usage: 'We help you build security triage/investigation agents with read-heavy least-privilege access, sandboxed analysis, strict containment, and full audit.',
  painIntro:
    'A security agent handles sensitive data and alerts — if it is overprivileged or exploitable, it becomes a high-value target rather than a defence.',
  heroVariant:
    'We help you build security agents on Kubernetes with the strictest containment: read-heavy, least-privilege access for triage and investigation, sandboxed analysis of untrusted artefacts (gVisor/Kata), tight egress control, no standing high-privilege credentials, and full audit. We treat the security agent as the one most likely to be targeted, so it is contained accordingly — useful for the SOC without expanding the attack surface.',
  techLinks: [K8S_SECURITY_LINK, K8S_AGENT_SANDBOX_LINK],
  extraLinks: [
    { label: 'Agent security job support', href: '/kubernetes-agent-security-job-support/' },
    EXISTING.aiAgentContainment, EXISTING.aiAgentNetworkEgress,
  ],
});

export const dataAgent = useCasePage({
  slug: 'kubernetes-data-agent-job-support',
  title: 'Kubernetes Data Agent Job Support — Safe Access to Warehouses and Pipelines',
  description:
    'Real-time support for data agents on Kubernetes: scoped read access to warehouses and lakes, sandboxed query/code execution, cost guards on expensive queries, and audit — so a data agent cannot exfiltrate or run up bills.',
  keywords: ['data agent Kubernetes', 'text-to-SQL agent', 'warehouse agent', 'data pipeline agent', 'data agent governance'],
  h1: 'Kubernetes Data Agent — Query and Pipeline Automation With Guardrails',
  tagline: 'Data agents touch sensitive data and expensive compute — scope, sandbox, and cost-guard them.',
  heroEyebrow: 'Use Case: Data Agent',
  entity: 'data agents on Kubernetes',
  usage: 'We help you build data agents with scoped warehouse access, sandboxed query/code execution, cost guards on expensive queries, and audit.',
  painIntro:
    'A data agent that can query warehouses and run code is powerful — and a path to data exfiltration or runaway query cost if it is not scoped, sandboxed, and guarded.',
  heroVariant:
    'We help you build data agents on Kubernetes: least-privilege, row/column-scoped access to warehouses and lakes, sandboxed execution for generated SQL/code, cost and row-limit guards so an expensive query cannot run up the bill, result-size controls to limit exfiltration, and full audit. The agent can analyse and automate pipelines while staying inside strict data-governance boundaries.',
  techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_SECURITY_LINK],
  extraLinks: [
    { label: 'Analytics agent on Kubernetes support', href: '/kubernetes-analytics-agent-job-support/' },
    { label: 'Agent security job support', href: '/kubernetes-agent-security-job-support/' },
    EXISTING.vectorDb,
  ],
});

export const analyticsAgent = useCasePage({
  slug: 'kubernetes-analytics-agent-job-support',
  title: 'Kubernetes Analytics Agent Job Support — Insight Agents Over Your Metrics',
  description:
    'Real-time support for analytics agents on Kubernetes: safe access to BI and metrics, sandboxed computation, caching for cost, RAG over documentation, and reliable production operation.',
  keywords: ['analytics agent Kubernetes', 'BI agent', 'insight agent', 'metrics agent', 'analytics automation agent'],
  h1: 'Kubernetes Analytics Agent — Answers From Your Data, Safely and Affordably',
  tagline: 'Analytics agents should be grounded, scoped, and cached so they are accurate and cheap to run.',
  heroEyebrow: 'Use Case: Analytics Agent',
  entity: 'analytics agents on Kubernetes',
  usage: 'We help you build analytics agents with scoped BI/metrics access, sandboxed computation, caching to control cost, and RAG grounding over docs.',
  painIntro:
    'An analytics agent that answers business questions needs grounded, scoped access to metrics and caching — otherwise it is inaccurate, expensive, or both.',
  heroVariant:
    'We help you build analytics agents on Kubernetes: scoped access to BI tools and metrics stores, sandboxed computation, RAG grounding over metric definitions and documentation so answers are correct, caching and model routing to keep cost down, and observability to catch wrong answers. The agent gives trustworthy answers from your data without blowing the budget or leaking what it should not.',
  techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_INFERENCE_HUB_LINK],
  extraLinks: [
    { label: 'Data agent on Kubernetes support', href: '/kubernetes-data-agent-job-support/' },
    { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
    EXISTING.rag,
  ],
});

export const multiAgentPlatform = useCasePage({
  slug: 'kubernetes-multi-agent-platform-job-support',
  title: 'Kubernetes Multi-Agent Platform Job Support — One Platform for Many Agents',
  description:
    'Real-time support for a multi-agent platform on Kubernetes: shared runtime, sandboxing, MCP gateway, identity, observability, and cost controls so many teams can run agents on one governed platform.',
  keywords: ['multi-agent platform Kubernetes', 'agent platform engineering', 'shared agent runtime', 'agent platform governance', 'internal agent platform'],
  h1: 'Kubernetes Multi-Agent Platform — A Governed Platform for Every Team’s Agents',
  tagline: 'Stop every team building agent infra from scratch. Build one governed platform on Kubernetes.',
  heroEyebrow: 'Use Case: Multi-Agent Platform',
  entity: 'a multi-agent platform on Kubernetes',
  usage: 'We help you build a shared agent platform — runtime, sandboxing, MCP gateway, identity, observability, and cost controls — so many teams run agents on one governed foundation.',
  painIntro:
    'When every team builds its own agent infrastructure, you get inconsistent security, duplicated effort, and no central visibility or cost control. A platform fixes that.',
  heroVariant:
    'We help you build a multi-agent platform on Kubernetes: a shared agent runtime and sandbox pool, a central MCP gateway for governed tool access, per-agent and per-team identity, platform-wide observability and audit, cost attribution and quotas, and self-service onboarding. Teams ship agents on a consistent, secure, observable foundation instead of reinventing infrastructure — the internal-platform pattern applied to agentic AI.',
  techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_MCP_SERVER_LINK],
  extraLinks: [
    { label: 'Multi-agent system support', href: '/kubernetes-multi-agent-system-job-support/' },
    { label: 'MCP gateway support', href: '/kubernetes-mcp-gateway-job-support/' },
    { label: 'Agent identity & workload identity support', href: '/kubernetes-agent-identity-workload-identity-support/' },
    EXISTING.aiPlatformEngineer,
  ],
});

export const edgeAi = useCasePage({
  slug: 'kubernetes-edge-ai-job-support',
  title: 'Kubernetes Edge AI Job Support — Inference at Constrained, Distributed Sites',
  description:
    'Real-time support for edge AI on Kubernetes: lightweight inference at the edge (K3s/RKE2/MicroShift), intermittent connectivity, small GPUs, model distribution and updates, and fleet management across sites.',
  keywords: ['edge AI Kubernetes', 'K3s edge inference', 'MicroShift AI', 'edge GPU inference', 'fleet edge AI'],
  h1: 'Kubernetes Edge AI — Inference Where the Data Is',
  tagline: 'Edge AI means lightweight Kubernetes, small GPUs, intermittent links, and fleet updates — a distinct discipline.',
  heroEyebrow: 'Use Case: Edge AI',
  entity: 'edge AI on Kubernetes',
  usage: 'We help you run inference at the edge with lightweight Kubernetes (K3s/RKE2/MicroShift), handle intermittent connectivity, and manage models across a fleet.',
  painIntro:
    'Edge AI runs on constrained hardware with flaky connectivity across many sites — model distribution, updates, and reliability are nothing like a central datacenter.',
  heroVariant:
    'We help you run edge AI on Kubernetes: lightweight distributions (K3s, RKE2, MicroShift) on constrained hardware, small-GPU or CPU inference, resilience to intermittent connectivity, model distribution and safe over-the-air updates across a fleet, and central fleet management with GitOps. This suits manufacturing, retail edge, telco, and IoT — where inference must run locally for latency, bandwidth, or sovereignty reasons.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
  extraLinks: [
    { label: 'Rancher / RKE2 AI support', href: '/rancher-rke2-ai-job-support/' },
    { label: 'Manufacturing AI on Kubernetes support', href: '/kubernetes-ai-manufacturing-job-support/' },
    { label: 'Computer vision on Kubernetes support', href: '/kubernetes-computer-vision-job-support/' },
  ],
});

export const computerVision = useCasePage({
  slug: 'kubernetes-computer-vision-job-support',
  title: 'Kubernetes Computer Vision Job Support — Vision Inference & Pipelines at Scale',
  description:
    'Real-time support for computer-vision workloads on Kubernetes: GPU inference for detection/segmentation, video/stream pipelines, batch processing with queues, Triton/vLLM-vision serving, and edge deployment.',
  keywords: ['computer vision Kubernetes', 'vision inference GPU', 'video pipeline Kubernetes', 'object detection serving', 'CV model deployment'],
  h1: 'Kubernetes Computer Vision — Serve Vision Models and Pipelines Reliably',
  tagline: 'Vision workloads are GPU-heavy and streaming or batch. We build the inference and pipeline infrastructure.',
  heroEyebrow: 'Use Case: Computer Vision',
  entity: 'computer-vision workloads on Kubernetes',
  usage: 'We help you serve vision models (detection, segmentation, VLMs), build video/stream and batch pipelines, and deploy to datacenter or edge GPUs.',
  painIntro:
    'Computer vision in production means GPU inference, high-throughput video or batch pipelines, and often edge deployment — each with its own scaling and cost challenges.',
  heroVariant:
    'We help you run computer vision on Kubernetes: GPU inference for detection, segmentation, and vision-language models, video and stream processing pipelines, batch processing with queues and autoscaling, serving via Triton, KServe, or vLLM (for VLMs), and edge deployment where inference must be local. We tune GPU utilisation and batching so vision workloads are both fast and cost-efficient.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
  extraLinks: [
    { label: 'Edge AI on Kubernetes support', href: '/kubernetes-edge-ai-job-support/' },
    { label: 'Manufacturing AI on Kubernetes support', href: '/kubernetes-ai-manufacturing-job-support/' },
    { label: 'GPU infrastructure support', href: '/kubernetes-gpu-infrastructure-job-support/' },
  ],
});

export const kubernetesUseCasePages: LandingPageConfig[] = [
  customerSupportAgent,
  codingAgentPlatform,
  enterpriseRag,
  documentProcessingAgent,
  incidentResponseAgent,
  devopsAgent,
  sreAgent,
  securityAgent,
  dataAgent,
  analyticsAgent,
  multiAgentPlatform,
  edgeAi,
  computerVision,
];
