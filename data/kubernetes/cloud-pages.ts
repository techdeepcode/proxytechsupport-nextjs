import type { LandingPageConfig } from '../landing-pages';
import {
  k8sTechPage,
  relatedLinks,
  k8sTechFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_FINOPS_LINK,
  K8S_INTERVIEW_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_AGENT_RUNTIME_LINK,
  K8S_AGENT_SANDBOX_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_VLLM_LINK,
  K8S_GPU_LINK,
  K8S_GPU_SCHED_LINK,
  K8S_OPENSHIFT_LINK,
  K8S_PRIVATE_AI_LINK,
  EKS_AGENTIC_LINK,
  AKS_AGENTIC_LINK,
  GKE_AGENTIC_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

const geoUS = [K8S_USA_LINK, K8S_EUROPE_LINK];

// ─── EKS ──────────────────────────────────────────────────────────────────────

export const eksAgenticAi: LandingPageConfig = k8sTechPage({
  slug: 'eks-agentic-ai-job-support',
  title: 'EKS Agentic AI Job Support — Agents, GPU & Inference on Amazon EKS',
  description:
    'Real-time job support for agentic AI on Amazon EKS: agent runtimes and sandboxes, GPU scheduling, vLLM/KServe inference, IRSA/Pod Identity, Karpenter autoscaling, and when Bedrock AgentCore is a better fit than self-hosting on EKS.',
  keywords: [
    'EKS agentic AI job support', 'EKS agent runtime', 'EKS GPU AI', 'EKS vLLM', 'EKS Karpenter GPU',
    'Amazon EKS AI infrastructure', 'EKS Bedrock AgentCore',
  ],
  h1: 'EKS Agentic AI Job Support — Run Production Agents and Inference on Amazon EKS',
  tagline: 'Amazon EKS as an AI platform: agent runtimes, GPU scheduling, inference, and AWS-native identity — with honest build-vs-buy against Bedrock AgentCore.',
  heroEyebrow: 'Agentic AI on Amazon EKS',
  painIntro:
    'Running agents and LLM inference on EKS means wiring GPU nodes, Karpenter, IRSA/Pod Identity, and inference servers together — and deciding where EKS beats managed AWS AI services.',
  heroVariant:
    'We help you operate agentic AI and inference on Amazon EKS: GPU node groups and Karpenter provisioning (including scale-to-zero and Spot), DRA and GPU scheduling, vLLM/KServe/Ray serving, agent runtimes and sandboxes with gVisor/Kata, IRSA and EKS Pod Identity for least-privilege workload identity, VPC and egress control, and observability with CloudWatch, Prometheus, and OpenTelemetry. We advise honestly on when AWS Bedrock AgentCore (managed agent runtime, memory, gateway, identity) is the better path and when self-hosting on EKS gives you control worth the operational cost.',
  faqs: k8sTechFaqs('EKS agentic AI', 'We help you run agents, sandboxes, and LLM inference on Amazon EKS with GPU scheduling, Karpenter, IRSA/Pod Identity, and the right build-vs-buy call against Bedrock AgentCore.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [EKS_AGENTIC_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_GPU_SCHED_LINK, K8S_VLLM_LINK, K8S_SECURITY_LINK,
      { label: 'EKS agent runtime support', href: '/eks-agent-runtime-job-support/' },
      { label: 'EKS vLLM support', href: '/eks-vllm-job-support/' },
      { label: 'EKS GPU scheduling support', href: '/eks-gpu-scheduling-job-support/' },
      { label: 'EKS AI observability support', href: '/eks-ai-observability-job-support/' },
      { label: 'EKS AI production support', href: '/eks-ai-production-support/' },
      EXISTING.awsAiMl, EXISTING.agenticAi,
    ],
  }),
});

export const eksAgentRuntime: LandingPageConfig = k8sTechPage({
  slug: 'eks-agent-runtime-job-support',
  title: 'EKS Agent Runtime Job Support — Session Isolation & Lifecycle on EKS',
  description:
    'Real-time support for agent execution runtimes on Amazon EKS: session isolation, resource limits, suspend/resume, IRSA/Pod Identity scoping, and integration or comparison with Bedrock AgentCore Runtime.',
  keywords: ['EKS agent runtime', 'EKS agent isolation', 'EKS Bedrock AgentCore runtime', 'agent lifecycle EKS', 'IRSA agents'],
  h1: 'EKS Agent Runtime — Execute and Isolate Agents on Amazon EKS',
  tagline: 'The agent execution layer on EKS: lifecycle, isolation, and AWS-native identity.',
  heroEyebrow: 'Agent Runtime on EKS',
  painIntro: 'Long-running agents on EKS need per-session isolation, resource limits, clean suspend/resume, and least-privilege IRSA/Pod Identity — not a shared, overprivileged runtime.',
  heroVariant:
    'We help you build the agent runtime on Amazon EKS: mapping sessions to Pods/Jobs or a sandbox pool, enforcing CPU/GPU/memory limits and timeouts, suspend/resume so idle agents release compute, and scoping each agent with IRSA or EKS Pod Identity so it only reaches what it needs. We compare this directly with AWS Bedrock AgentCore Runtime so you self-host only where it buys real control.',
  faqs: k8sTechFaqs('EKS agent runtime', 'We help you run isolated, resource-limited agent sessions on EKS with IRSA/Pod Identity scoping and suspend/resume, and compare with Bedrock AgentCore Runtime.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [EKS_AGENTIC_LINK, K8S_AGENT_RUNTIME_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_SANDBOX_LINK, K8S_SECURITY_LINK, EXISTING.awsAiMl, EXISTING.agenticAi],
  }),
});

export const eksVllm: LandingPageConfig = k8sTechPage({
  slug: 'eks-vllm-job-support',
  title: 'EKS vLLM Job Support — GPU Serving with Karpenter on Amazon EKS',
  description:
    'Real-time vLLM job support on Amazon EKS: GPU node groups and Karpenter, KV-cache and memory tuning, autoscaling, Spot capacity, and fixing OOM/TTFT on EKS.',
  keywords: ['EKS vLLM', 'vLLM Karpenter', 'EKS GPU serving', 'vLLM EKS OOM', 'EKS LLM inference'],
  h1: 'EKS vLLM Job Support — Serve LLMs on Amazon EKS Without Blowing the Budget',
  tagline: 'vLLM on EKS with Karpenter-provisioned GPUs, tuned KV cache, and Spot capacity.',
  heroEyebrow: 'vLLM on Amazon EKS',
  painIntro: 'vLLM on EKS lives or dies on GPU provisioning (Karpenter), KV-cache/memory tuning, and autoscaling — get those wrong and you get OOM, high TTFT, or idle Spot GPUs.',
  heroVariant:
    'We help you serve LLMs with vLLM on Amazon EKS: Karpenter GPU provisioning (right instance types, Spot with interruption handling, scale-to-zero), KV-cache and gpu-memory-utilization tuning to avoid OOM, tensor parallelism for large models, readiness probes for slow weight loads from S3, and autoscaling on token/queue signals — all measured against TTFT and cost per token.',
  faqs: k8sTechFaqs('EKS vLLM', 'We help you serve vLLM on EKS with Karpenter GPU provisioning, KV-cache/memory tuning, Spot capacity, and token-based autoscaling.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_VLLM_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, EKS_AGENTIC_LINK, K8S_GPU_SCHED_LINK, K8S_FINOPS_LINK,
      { label: 'vLLM OOM troubleshooting', href: '/kubernetes-vllm-oom-troubleshooting/' },
      EXISTING.vllmInference, EXISTING.awsAiMl,
    ],
  }),
});

export const eksGpuScheduling: LandingPageConfig = k8sTechPage({
  slug: 'eks-gpu-scheduling-job-support',
  title: 'EKS GPU Scheduling Job Support — Karpenter, DRA & Gang Scheduling on EKS',
  description:
    'Real-time GPU scheduling support on Amazon EKS: Karpenter GPU provisioning, NVIDIA GPU Operator, DRA, MIG, gang scheduling for distributed jobs, and fixing Pending GPU Pods on EKS.',
  keywords: ['EKS GPU scheduling', 'Karpenter GPU', 'EKS DRA', 'EKS gang scheduling', 'EKS GPU Pod Pending'],
  h1: 'EKS GPU Scheduling — Keep GPUs Busy and Jobs Reliable on Amazon EKS',
  tagline: 'Karpenter plus DRA, MIG, and gang scheduling for AI workloads on EKS.',
  heroEyebrow: 'GPU Scheduling on EKS',
  painIntro: 'GPU Pods Pending, Karpenter not provisioning the right instances, or multi-node jobs deadlocking — scheduling is where EKS GPU reliability and cost are decided.',
  heroVariant:
    'We help you schedule GPU workloads on Amazon EKS: Karpenter provisioning of the right GPU instances (with consolidation and Spot), the NVIDIA GPU Operator, DRA for flexible accelerator requests, MIG to pack small models, and gang scheduling (native Workload/PodGroup Beta in v1.37, or Kueue/Volcano) so distributed training and multi-node inference schedule all-or-nothing. We diagnose Pending GPU Pods from scheduler and Karpenter events and fix the real cause.',
  faqs: k8sTechFaqs('EKS GPU scheduling', 'We help you provision GPUs with Karpenter, configure DRA/MIG and the GPU Operator, and enable gang scheduling so jobs schedule reliably on EKS.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_GPU_SCHED_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, EKS_AGENTIC_LINK, K8S_INFERENCE_HUB_LINK, K8S_FINOPS_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.awsAiMl,
    ],
  }),
});

export const eksAiObservability: LandingPageConfig = k8sTechPage({
  slug: 'eks-ai-observability-job-support',
  title: 'EKS AI Observability Job Support — CloudWatch, Prometheus & OTel on EKS',
  description:
    'Real-time AI observability support on Amazon EKS: CloudWatch Container Insights, Prometheus/AMP, OpenTelemetry tracing for agents and LLMs, DCGM GPU metrics, and inference SLOs (TTFT/TPOT).',
  keywords: ['EKS AI observability', 'CloudWatch Container Insights AI', 'AMP Prometheus EKS', 'OpenTelemetry EKS LLM', 'DCGM EKS'],
  h1: 'EKS AI Observability — See the Whole AI Request Path on Amazon EKS',
  tagline: 'CloudWatch, Amazon Managed Prometheus, and OpenTelemetry wired for AI and agent workloads.',
  heroEyebrow: 'AI Observability on EKS',
  painIntro: 'Ready Pods on EKS tell you nothing about slow answers, KV-cache pressure, or agent loops. AI observability needs inference- and action-level signals.',
  heroVariant:
    'We help you instrument AI on Amazon EKS: CloudWatch Container Insights and Amazon Managed Prometheus for inference and GPU metrics (via DCGM), OpenTelemetry tracing across agent → LLM → MCP → tool → retrieval, Grafana/CloudWatch dashboards for TTFT/TPOT/tokens-per-sec/KV-cache, and SLOs that reflect user experience. On-call becomes survivable because the signals point at the real failure.',
  faqs: k8sTechFaqs('EKS AI observability', 'We help you instrument AI on EKS with CloudWatch, Amazon Managed Prometheus, DCGM, and OpenTelemetry, and define inference SLOs.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_SRE_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [K8S_HUB_LINK, EKS_AGENTIC_LINK, K8S_GPU_LINK, { label: 'EKS AI production support', href: '/eks-ai-production-support/' }, EXISTING.awsAiMl, EXISTING.sre],
  }),
});

export const eksAiProduction: LandingPageConfig = k8sTechPage({
  slug: 'eks-ai-production-support',
  title: 'EKS AI Production Support — Fix Live GPU & Inference Incidents on Amazon EKS',
  description:
    'Real-time production support for AI on Amazon EKS: GPU Pods Pending, Karpenter provisioning failures, vLLM OOM, high TTFT, autoscaling failures, and agent/MCP incidents — with an engineer on the call.',
  keywords: ['EKS AI production support', 'EKS GPU incident', 'Karpenter GPU failure', 'EKS vLLM OOM', 'EKS inference incident'],
  h1: 'EKS AI Production Support — Stabilise AI Incidents on Amazon EKS Fast',
  tagline: 'Live firefighting for GPU, inference, and agent incidents on Amazon EKS.',
  heroEyebrow: 'AI Production Firefighting on EKS',
  painIntro: 'A GPU Pod that will not schedule before a release, Karpenter not bringing up GPU nodes, vLLM OOMKilled, or TTFT spiking on EKS — these need an expert now, not a ticket.',
  heroVariant:
    'We work AI incidents live on Amazon EKS: GPU Pods Pending and Karpenter provisioning failures, NVIDIA device-plugin/driver issues, vLLM/KServe OOM and KV-cache exhaustion, TTFT and timeout spikes, HPA/KEDA autoscaling failures, and agent/MCP errors — reading CloudWatch, Karpenter, scheduler, and DCGM signals to find the cause, stabilise, and harden against a repeat.',
  faqs: k8sTechFaqs('EKS AI production', 'We resolve live EKS AI incidents — GPU Pending, Karpenter failures, vLLM OOM, high TTFT, autoscaling and agent/MCP errors — and harden against repeats.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_PRODUCTION_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_SRE_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, EKS_AGENTIC_LINK, K8S_GPU_SCHED_LINK, K8S_VLLM_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.awsAiMl, EXISTING.aimlProduction,
    ],
  }),
});

// ─── AKS ──────────────────────────────────────────────────────────────────────

export const aksAgenticAi: LandingPageConfig = k8sTechPage({
  slug: 'aks-agentic-ai-job-support',
  title: 'AKS Agentic AI Job Support — Agents, GPU & Inference on Azure Kubernetes Service',
  description:
    'Real-time job support for agentic AI on Azure AKS: agent runtimes and sandboxes, GPU scheduling, vLLM/KServe inference, Entra Workload ID, KEDA autoscaling, and when Microsoft Foundry Agent Service fits better than self-hosting on AKS.',
  keywords: [
    'AKS agentic AI job support', 'AKS agent runtime', 'AKS GPU AI', 'AKS vLLM', 'Entra Workload ID AKS',
    'Azure Kubernetes AI infrastructure', 'AKS Microsoft Foundry',
  ],
  h1: 'AKS Agentic AI Job Support — Run Production Agents and Inference on Azure AKS',
  tagline: 'Azure AKS as an AI platform: agent runtimes, GPU scheduling, inference, and Entra identity — with honest build-vs-buy against Microsoft Foundry Agent Service.',
  heroEyebrow: 'Agentic AI on Azure AKS',
  painIntro: 'Running agents and inference on AKS means wiring GPU node pools, KEDA, Entra Workload ID, and inference servers — and deciding where AKS beats managed Azure AI services.',
  heroVariant:
    'We help you operate agentic AI and inference on Azure AKS: GPU node pools and autoscaling (including KEDA and scale-to-zero, Spot), DRA and GPU scheduling, vLLM/KServe/Ray serving, agent runtimes and sandboxes with gVisor/Kata, Microsoft Entra Workload ID for least-privilege identity, Azure CNI and egress control, and observability with Azure Monitor, Managed Prometheus, and OpenTelemetry. We advise honestly on when Microsoft Foundry Agent Service or Azure OpenAI is the better path, and when self-hosting on AKS is worth the operational cost. Microsoft Agent Framework 1.0 (GA April 2026) is the current agent SDK; Semantic Kernel is now maintenance-only.',
  faqs: k8sTechFaqs('AKS agentic AI', 'We help you run agents, sandboxes, and inference on Azure AKS with GPU scheduling, KEDA, Entra Workload ID, and the right build-vs-buy call against Microsoft Foundry.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [AKS_AGENTIC_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_GPU_SCHED_LINK, K8S_VLLM_LINK, K8S_SECURITY_LINK,
      { label: 'AKS agent runtime support', href: '/aks-agent-runtime-job-support/' },
      { label: 'AKS AI observability support', href: '/aks-ai-observability-job-support/' },
      { label: 'AKS private AI support', href: '/aks-private-ai-job-support/' },
      { label: 'AKS AI production support', href: '/aks-ai-production-support/' },
      EXISTING.aksAiMl, EXISTING.aksGpu, EXISTING.aksVllm, EXISTING.azureAiMl, EXISTING.mcpFoundry,
    ],
  }),
});

export const aksAgentRuntime: LandingPageConfig = k8sTechPage({
  slug: 'aks-agent-runtime-job-support',
  title: 'AKS Agent Runtime Job Support — Session Isolation & Lifecycle on Azure AKS',
  description:
    'Real-time support for agent runtimes on Azure AKS: session isolation, resource limits, suspend/resume, Entra Workload ID scoping, and comparison with Microsoft Foundry Agent Service.',
  keywords: ['AKS agent runtime', 'AKS agent isolation', 'Entra Workload ID agents', 'agent lifecycle AKS', 'Foundry Agent Service'],
  h1: 'AKS Agent Runtime — Execute and Isolate Agents on Azure AKS',
  tagline: 'The agent execution layer on AKS: lifecycle, isolation, and Entra-native identity.',
  heroEyebrow: 'Agent Runtime on AKS',
  painIntro: 'Long-running agents on AKS need per-session isolation, resource limits, suspend/resume, and least-privilege Entra Workload ID — not a shared, overprivileged runtime.',
  heroVariant:
    'We help you build the agent runtime on Azure AKS: mapping sessions to Pods/Jobs or a sandbox pool, enforcing resource limits and timeouts, suspend/resume so idle agents release compute, and scoping each agent with Microsoft Entra Workload ID. We compare directly with Microsoft Foundry Agent Service so you self-host only where it buys real control, and wire in Microsoft Agent Framework where it fits.',
  faqs: k8sTechFaqs('AKS agent runtime', 'We help you run isolated, resource-limited agent sessions on AKS with Entra Workload ID scoping and suspend/resume, and compare with Microsoft Foundry Agent Service.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [AKS_AGENTIC_LINK, K8S_AGENT_RUNTIME_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_SANDBOX_LINK, K8S_SECURITY_LINK, EXISTING.azureAiMl, EXISTING.mcpFoundry],
  }),
});

export const aksAiObservability: LandingPageConfig = k8sTechPage({
  slug: 'aks-ai-observability-job-support',
  title: 'AKS AI Observability Job Support — Azure Monitor, Prometheus & OTel on AKS',
  description:
    'Real-time AI observability support on Azure AKS: Azure Monitor, Managed Prometheus and Grafana, OpenTelemetry tracing for agents and LLMs, DCGM GPU metrics, and inference SLOs.',
  keywords: ['AKS AI observability', 'Azure Monitor AI', 'Managed Prometheus AKS', 'OpenTelemetry AKS LLM', 'DCGM AKS'],
  h1: 'AKS AI Observability — See the Whole AI Request Path on Azure AKS',
  tagline: 'Azure Monitor, Managed Prometheus/Grafana, and OpenTelemetry for AI and agent workloads.',
  heroEyebrow: 'AI Observability on AKS',
  painIntro: 'Ready Pods on AKS say nothing about slow generations, KV-cache pressure, or agent loops. AI observability needs inference- and action-level signals.',
  heroVariant:
    'We help you instrument AI on Azure AKS: Azure Monitor and Azure Managed Prometheus/Grafana for inference and GPU metrics (DCGM), OpenTelemetry tracing across agent → LLM → MCP → tool → retrieval, dashboards for TTFT/TPOT/tokens-per-sec/KV-cache, and SLOs that reflect user experience rather than Pod health.',
  faqs: k8sTechFaqs('AKS AI observability', 'We help you instrument AI on AKS with Azure Monitor, Managed Prometheus/Grafana, DCGM, and OpenTelemetry, and define inference SLOs.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_SRE_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [K8S_HUB_LINK, AKS_AGENTIC_LINK, K8S_GPU_LINK, { label: 'AKS AI production support', href: '/aks-ai-production-support/' }, EXISTING.azureAiMl, EXISTING.sre],
  }),
});

export const aksPrivateAi: LandingPageConfig = k8sTechPage({
  slug: 'aks-private-ai-job-support',
  title: 'AKS Private AI Job Support — Private Endpoints, Data Residency & Foundry Local',
  description:
    'Real-time support for private AI on Azure AKS: private endpoints and Private Link, data-residency architecture, Azure Arc and Foundry Local for hybrid, Key Vault secret isolation, and keeping model/data traffic off the public internet.',
  keywords: ['AKS private AI', 'Azure Private Link AI', 'data residency AKS', 'Azure Arc AI', 'Foundry Local', 'private endpoints AI'],
  h1: 'AKS Private AI — Keep Models, Data, and Traffic Private on Azure',
  tagline: 'Private endpoints, data residency, and hybrid AI with Azure Arc and Foundry Local on AKS.',
  heroEyebrow: 'Private AI on Azure AKS',
  painIntro: 'Regulated workloads cannot send data or model traffic over the public internet. Private AI on AKS means private endpoints, data-residency architecture, and sometimes on-prem inference.',
  heroVariant:
    'We help you design private AI on Azure AKS: Private Link and private endpoints for Azure OpenAI/Foundry and storage, data-residency-aware architecture (regional inference, keeping data in-region), Azure Arc and Foundry Local to run models in your own environment for hybrid/disconnected needs, Key Vault and workload identity for secret isolation, and network policy so model and data traffic never traverses the public internet. We explain the engineering implications of residency and governance without giving legal advice.',
  faqs: k8sTechFaqs('AKS private AI', 'We help you design private AI on AKS with Private Link/private endpoints, data-residency architecture, Azure Arc/Foundry Local for hybrid, and Key Vault secret isolation.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_EUROPE_LINK, K8S_USA_LINK],
    techLinks: [K8S_PRIVATE_AI_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, AKS_AGENTIC_LINK, K8S_OPENSHIFT_LINK,
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      { label: 'On-premises AI infrastructure support', href: '/on-premises-ai-infrastructure-job-support/' },
      EXISTING.azureAiMl, EXISTING.mcpFoundry,
    ],
  }),
});

export const aksAiProduction: LandingPageConfig = k8sTechPage({
  slug: 'aks-ai-production-support',
  title: 'AKS AI Production Support — Fix Live GPU & Inference Incidents on Azure AKS',
  description:
    'Real-time production support for AI on Azure AKS: GPU Pods Pending, node-pool scaling failures, vLLM OOM, high TTFT, autoscaling failures, and agent/MCP incidents — with an engineer on the call.',
  keywords: ['AKS AI production support', 'AKS GPU incident', 'AKS node pool scaling', 'AKS vLLM OOM', 'AKS inference incident'],
  h1: 'AKS AI Production Support — Stabilise AI Incidents on Azure AKS Fast',
  tagline: 'Live firefighting for GPU, inference, and agent incidents on Azure AKS.',
  heroEyebrow: 'AI Production Firefighting on AKS',
  painIntro: 'A GPU Pod that will not schedule, a GPU node pool not scaling, vLLM OOMKilled, or TTFT spiking on AKS — these need an expert now, not a ticket.',
  heroVariant:
    'We work AI incidents live on Azure AKS: GPU Pods Pending and node-pool/cluster-autoscaler failures, NVIDIA device-plugin/driver issues, vLLM/KServe OOM and KV-cache exhaustion, TTFT and timeout spikes, KEDA/HPA autoscaling failures, and agent/MCP errors — reading Azure Monitor, scheduler, and DCGM signals to find the cause, stabilise, and harden.',
  faqs: k8sTechFaqs('AKS AI production', 'We resolve live AKS AI incidents — GPU Pending, node-pool scaling, vLLM OOM, high TTFT, autoscaling and agent/MCP errors — and harden against repeats.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_PRODUCTION_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_SRE_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, AKS_AGENTIC_LINK, K8S_GPU_SCHED_LINK, K8S_VLLM_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.aksVllm, EXISTING.azureAiMl, EXISTING.aimlProduction,
    ],
  }),
});

// ─── GKE ──────────────────────────────────────────────────────────────────────

export const gkeAgenticAi: LandingPageConfig = k8sTechPage({
  slug: 'gke-agentic-ai-job-support',
  title: 'GKE Agentic AI Job Support — Agents, GPU/TPU & Inference on Google Kubernetes Engine',
  description:
    'Real-time job support for agentic AI on Google GKE: GKE Agent Sandbox, Inference Gateway, agent runtimes, GPU/TPU scheduling, vLLM/KServe, Workload Identity, and when Vertex AI or a managed runtime fits better than self-hosting on GKE.',
  keywords: [
    'GKE agentic AI job support', 'GKE Agent Sandbox', 'GKE Inference Gateway', 'GKE GPU TPU AI',
    'GKE vLLM', 'GKE Workload Identity AI', 'Google Kubernetes Engine AI',
  ],
  h1: 'GKE Agentic AI Job Support — Run Production Agents and Inference on Google GKE',
  tagline: 'Google GKE as an AI platform: Agent Sandbox, Inference Gateway, GPU/TPU, and Workload Identity — with honest build-vs-buy against Vertex AI.',
  heroEyebrow: 'Agentic AI on Google GKE',
  painIntro: 'GKE has become a serious AI platform — Agent Sandbox, Inference Gateway, huge clusters — but using those well alongside GPU/TPU scheduling and Workload Identity still takes expertise.',
  heroVariant:
    'We help you operate agentic AI and inference on Google GKE: GKE Agent Sandbox (gVisor-based isolation, an open-source Kubernetes SIG Apps subproject) for fast, secure agent/code execution; the GA GKE Inference Gateway with KV-cache-aware routing and Predictive Latency Boost; GPU and TPU scheduling (including DRA and gang scheduling); vLLM/KServe serving; GKE Workload Identity for least-privilege; and observability with Google Cloud Monitoring and OpenTelemetry. GKE now supports very large clusters (up to 130,000 nodes), so we also help with scale. We advise honestly on when Vertex AI or a managed runtime is the better path.',
  faqs: k8sTechFaqs('GKE agentic AI', 'We help you run agents and inference on GKE with Agent Sandbox, Inference Gateway, GPU/TPU scheduling, Workload Identity, and the right build-vs-buy call against Vertex AI.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [GKE_AGENTIC_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_GPU_SCHED_LINK, K8S_VLLM_LINK, K8S_SECURITY_LINK,
      { label: 'GKE Agent Sandbox support', href: '/gke-agent-sandbox-job-support/' },
      { label: 'GKE Inference Gateway support', href: '/gke-inference-gateway-job-support/' },
      { label: 'GKE vLLM support', href: '/gke-vllm-job-support/' },
      { label: 'GKE GPU/TPU AI support', href: '/gke-gpu-tpu-ai-job-support/' },
      { label: 'GKE AI observability support', href: '/gke-ai-observability-job-support/' },
      { label: 'GKE AI production support', href: '/gke-ai-production-support/' },
      EXISTING.agenticAi,
    ],
  }),
});

export const gkeAgentSandbox: LandingPageConfig = k8sTechPage({
  slug: 'gke-agent-sandbox-job-support',
  title: 'GKE Agent Sandbox Job Support — Secure, Fast Agent Code Execution',
  description:
    'Real-time support for GKE Agent Sandbox: gVisor-based isolation for agent and code execution, fast per-session provisioning, filesystem/network isolation, and integrating it into agent and coding-agent platforms.',
  keywords: ['GKE Agent Sandbox', 'gVisor agent sandbox', 'GKE secure code execution', 'agent sandbox GKE', 'coding agent GKE'],
  h1: 'GKE Agent Sandbox — Run Untrusted Agent Code Safely and Fast on GKE',
  tagline: 'gVisor-isolated sandboxes at high provisioning rates for agent and coding-agent workloads.',
  heroEyebrow: 'GKE Agent Sandbox',
  painIntro: 'Agents that execute code need strong isolation and fast provisioning. GKE Agent Sandbox provides gVisor-based isolation as a managed capability — but you still design the lifecycle, egress, and integration.',
  heroVariant:
    'We help you use GKE Agent Sandbox: gVisor kernel isolation for agent and code execution at high provisioning rates (built as an open-source Kubernetes SIG Apps subproject), per-session filesystem and network isolation, resource and timeout limits, and integration into your agent runtime and coding-agent platform. We help you decide when Agent Sandbox is the right managed choice versus rolling gVisor/Kata yourself, and wire egress and secret isolation so a manipulated agent has minimal blast radius.',
  faqs: k8sTechFaqs('GKE Agent Sandbox', 'We help you run agent/code execution in GKE Agent Sandbox with gVisor isolation, fast provisioning, egress control, and integration into your agent platform.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_AGENT_SANDBOX_LINK, GKE_AGENTIC_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_SECURITY_LINK,
      { label: 'Coding agent infrastructure support', href: '/kubernetes-coding-agent-infrastructure-support/' },
      EXISTING.aiAgentSandboxSec, EXISTING.aiAgentContainment,
    ],
  }),
});

export const gkeInferenceGateway: LandingPageConfig = k8sTechPage({
  slug: 'gke-inference-gateway-job-support',
  title: 'GKE Inference Gateway Job Support — KV-Cache-Aware LLM Routing',
  description:
    'Real-time support for GKE Inference Gateway: inference-aware routing over vLLM replica pools, KV-cache-aware load balancing, Predictive Latency Boost, and cutting TTFT on Google GKE.',
  keywords: ['GKE Inference Gateway', 'KV-cache-aware routing', 'Predictive Latency Boost', 'GKE vLLM routing', 'inference gateway GKE'],
  h1: 'GKE Inference Gateway — Inference-Aware Routing That Cuts TTFT',
  tagline: 'Point it at a pool of vLLM replicas and let KV-cache-aware, ML-driven routing take over from a dumb load balancer.',
  heroEyebrow: 'GKE Inference Gateway (GA)',
  painIntro: 'A standard load balancer spreads LLM traffic blindly, wasting KV-cache locality and spiking TTFT. GKE Inference Gateway routes with inference awareness.',
  heroVariant:
    'We help you adopt the GA GKE Inference Gateway: pointing it at a pool of vLLM replicas so it takes over request dispatch with KV-cache-aware routing (sending requests where the cache already holds relevant context) and Predictive Latency Boost (ML-driven, capacity-aware routing that can cut time-to-first-token substantially). We wire in autoscaling, observability, and the serving backends so the gateway delivers its latency and efficiency gains on your real traffic.',
  faqs: k8sTechFaqs('GKE Inference Gateway', 'We help you deploy GKE Inference Gateway over vLLM replica pools with KV-cache-aware routing and Predictive Latency Boost to cut TTFT and improve efficiency.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_VLLM_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, GKE_AGENTIC_LINK, K8S_FINOPS_LINK,
      { label: 'High TTFT troubleshooting', href: '/kubernetes-high-ttft-troubleshooting/' },
      { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
      EXISTING.vllmInference,
    ],
  }),
});

export const gkeVllm: LandingPageConfig = k8sTechPage({
  slug: 'gke-vllm-job-support',
  title: 'GKE vLLM Job Support — GPU & TPU Serving on Google Kubernetes Engine',
  description:
    'Real-time vLLM job support on Google GKE: GPU and TPU serving, node auto-provisioning, KV-cache tuning, Inference Gateway integration, autoscaling, and fixing OOM/TTFT on GKE.',
  keywords: ['GKE vLLM', 'vLLM TPU GKE', 'GKE GPU serving', 'vLLM GKE OOM', 'GKE LLM inference'],
  h1: 'GKE vLLM Job Support — Serve LLMs on GPUs or TPUs on Google GKE',
  tagline: 'vLLM on GKE with GPU or TPU acceleration, tuned caching, and Inference Gateway routing.',
  heroEyebrow: 'vLLM on Google GKE',
  painIntro: 'vLLM on GKE can run on GPUs or TPUs with node auto-provisioning — but caching, memory, and autoscaling still decide whether you hit TTFT and cost targets.',
  heroVariant:
    'We help you serve LLMs with vLLM on Google GKE: GPU and TPU serving (vLLM supports TPU paths on GKE), node auto-provisioning, KV-cache/memory tuning to avoid OOM, readiness probes for slow weight loads from GCS, GKE Inference Gateway for KV-cache-aware routing, and token/queue-based autoscaling — all tuned to TTFT and cost per token.',
  faqs: k8sTechFaqs('GKE vLLM', 'We help you serve vLLM on GKE across GPUs/TPUs with node auto-provisioning, KV-cache tuning, Inference Gateway routing, and token-based autoscaling.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_VLLM_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, GKE_AGENTIC_LINK, K8S_GPU_SCHED_LINK, K8S_FINOPS_LINK,
      { label: 'GKE Inference Gateway support', href: '/gke-inference-gateway-job-support/' },
      { label: 'vLLM OOM troubleshooting', href: '/kubernetes-vllm-oom-troubleshooting/' },
      EXISTING.vllmInference,
    ],
  }),
});

export const gkeGpuTpuAi: LandingPageConfig = k8sTechPage({
  slug: 'gke-gpu-tpu-ai-job-support',
  title: 'GKE GPU/TPU AI Job Support — Accelerator Scheduling on Google GKE',
  description:
    'Real-time GPU/TPU scheduling support on Google GKE: node auto-provisioning, DRA, gang scheduling, TPU slices and topology, multi-host TPU, MIG, and fixing Pending accelerator Pods on GKE.',
  keywords: ['GKE GPU scheduling', 'GKE TPU AI', 'TPU slice topology', 'GKE DRA', 'GKE gang scheduling', 'multi-host TPU'],
  h1: 'GKE GPU/TPU AI — Schedule Accelerators Reliably on Google GKE',
  tagline: 'GPUs and TPUs, node auto-provisioning, DRA, and gang scheduling for AI on GKE.',
  heroEyebrow: 'GPU/TPU Scheduling on GKE',
  painIntro: 'GKE adds TPUs alongside GPUs — slices, topology, and multi-host setups — on top of the usual GPU scheduling concerns. Getting placement right is where utilisation and reliability live.',
  heroVariant:
    'We help you schedule accelerators on Google GKE: GPU and TPU node auto-provisioning, TPU slice topology and multi-host TPU setup, DRA for flexible accelerator requests, MIG for packing small GPU models, gang scheduling (native v1.37 Beta or Kueue) for distributed jobs, and topology-aware placement so workloads land on well-connected accelerators. We diagnose Pending accelerator Pods from scheduler and autoscaler events and fix the real cause.',
  faqs: k8sTechFaqs('GKE GPU/TPU AI', 'We help you schedule GPUs and TPUs on GKE with node auto-provisioning, TPU slice topology, DRA, MIG, and gang scheduling for reliable AI workloads.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_GPU_SCHED_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, GKE_AGENTIC_LINK, K8S_INFERENCE_HUB_LINK, K8S_FINOPS_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.kubernetesGuide,
    ],
  }),
});

export const gkeAiObservability: LandingPageConfig = k8sTechPage({
  slug: 'gke-ai-observability-job-support',
  title: 'GKE AI Observability Job Support — Cloud Monitoring, Prometheus & OTel',
  description:
    'Real-time AI observability support on Google GKE: Google Cloud Managed Service for Prometheus, Cloud Monitoring/Trace, OpenTelemetry for agents and LLMs, DCGM GPU metrics, and inference SLOs.',
  keywords: ['GKE AI observability', 'Google Cloud Monitoring AI', 'Managed Prometheus GKE', 'OpenTelemetry GKE LLM', 'DCGM GKE'],
  h1: 'GKE AI Observability — See the Whole AI Request Path on Google GKE',
  tagline: 'Cloud Monitoring, Managed Prometheus, and OpenTelemetry wired for AI and agent workloads.',
  heroEyebrow: 'AI Observability on GKE',
  painIntro: 'Ready Pods on GKE say nothing about slow generations, KV-cache pressure, or agent loops. AI observability needs inference- and action-level signals.',
  heroVariant:
    'We help you instrument AI on Google GKE: Google Cloud Managed Service for Prometheus and Cloud Monitoring/Trace for inference and GPU metrics (DCGM), OpenTelemetry tracing across agent → LLM → MCP → tool → retrieval, dashboards for TTFT/TPOT/tokens-per-sec/KV-cache, and SLOs that reflect user experience. With the Inference Gateway in the path, we also surface routing and cache-hit signals.',
  faqs: k8sTechFaqs('GKE AI observability', 'We help you instrument AI on GKE with Managed Prometheus, Cloud Monitoring/Trace, DCGM, and OpenTelemetry, and define inference SLOs.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_SRE_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [K8S_HUB_LINK, GKE_AGENTIC_LINK, K8S_GPU_LINK, { label: 'GKE AI production support', href: '/gke-ai-production-support/' }, EXISTING.sre],
  }),
});

export const gkeAiProduction: LandingPageConfig = k8sTechPage({
  slug: 'gke-ai-production-support',
  title: 'GKE AI Production Support — Fix Live GPU/TPU & Inference Incidents on GKE',
  description:
    'Real-time production support for AI on Google GKE: accelerator Pods Pending, node auto-provisioning failures, vLLM OOM, high TTFT, Inference Gateway issues, autoscaling failures, and agent/MCP incidents.',
  keywords: ['GKE AI production support', 'GKE GPU incident', 'GKE TPU incident', 'GKE vLLM OOM', 'GKE inference incident'],
  h1: 'GKE AI Production Support — Stabilise AI Incidents on Google GKE Fast',
  tagline: 'Live firefighting for GPU/TPU, inference, and agent incidents on Google GKE.',
  heroEyebrow: 'AI Production Firefighting on GKE',
  painIntro: 'An accelerator Pod that will not schedule, node auto-provisioning stalling, vLLM OOMKilled, or TTFT spiking through the Inference Gateway on GKE — these need an expert now.',
  heroVariant:
    'We work AI incidents live on Google GKE: GPU/TPU Pods Pending and node auto-provisioning failures, device-plugin/driver issues, vLLM/KServe OOM and KV-cache exhaustion, TTFT and timeout spikes (including Inference Gateway routing issues), autoscaling failures, and agent/MCP errors — reading Cloud Monitoring, scheduler, autoscaler, and DCGM signals to find the cause, stabilise, and harden.',
  faqs: k8sTechFaqs('GKE AI production', 'We resolve live GKE AI incidents — accelerator Pending, node provisioning, vLLM OOM, high TTFT, Inference Gateway, autoscaling and agent/MCP errors — and harden against repeats.'),
  relatedLinks: relatedLinks({
    geoLinks: geoUS,
    techLinks: [K8S_PRODUCTION_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_SRE_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, GKE_AGENTIC_LINK, K8S_GPU_SCHED_LINK, K8S_VLLM_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.aimlProduction,
    ],
  }),
});

export const kubernetesCloudPages: LandingPageConfig[] = [
  eksAgenticAi, eksAgentRuntime, eksVllm, eksGpuScheduling, eksAiObservability, eksAiProduction,
  aksAgenticAi, aksAgentRuntime, aksAiObservability, aksPrivateAi, aksAiProduction,
  gkeAgenticAi, gkeAgentSandbox, gkeInferenceGateway, gkeVllm, gkeGpuTpuAi, gkeAiObservability, gkeAiProduction,
];
