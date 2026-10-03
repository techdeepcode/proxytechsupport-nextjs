import type { LandingPageConfig } from '../landing-pages';
import {
  k8sPage,
  relatedLinks,
  roleHighlights,
  k8sInterviewFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_FINOPS_LINK,
  K8S_INTERVIEW_LINK,
  K8S_PROFILE_LINK,
  K8S_MARKETING_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_GPU_LINK,
  K8S_GPU_SCHED_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

const geo = [K8S_USA_LINK, K8S_EUROPE_LINK];

// Sibling-role links so every role page cross-links its peers (≥2 contextual inbound).
const ROLE_LINKS: { label: string; href: string }[] = [
  { label: 'Kubernetes Platform Engineer support', href: '/kubernetes-platform-engineer-job-support/' },
  { label: 'AI Infrastructure Engineer support', href: '/ai-infrastructure-engineer-kubernetes-job-support/' },
  { label: 'GPU Infrastructure Engineer support', href: '/gpu-infrastructure-engineer-job-support/' },
  { label: 'LLMOps Engineer support', href: '/llmops-engineer-kubernetes-job-support/' },
];

function rolePage(cfg: {
  slug: string;
  role: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  tagline: string;
  painIntro: string;
  heroVariant: string;
  ownsCases: string[];
  techLinks: { label: string; href: string }[];
  extraLinks: { label: string; href: string }[];
}): LandingPageConfig {
  return k8sPage({
    slug: cfg.slug,
    title: cfg.title,
    description: cfg.description,
    keywords: cfg.keywords,
    h1: cfg.h1,
    tagline: cfg.tagline,
    heroEyebrow: `${cfg.role} Support`,
    painIntro: cfg.painIntro,
    heroVariant: cfg.heroVariant,
    geoLine: `Real-time ${cfg.role} support across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours — and 24/7 for production incidents.',
    highlights: roleHighlights,
    faqs: k8sInterviewFaqs(cfg.role),
    useCasesSection: {
      title: `What a ${cfg.role} Owns — and Where We Help`,
      cases: cfg.ownsCases,
    },
    proxySection: {
      title: `${cfg.role} Interview & Candidate Marketing`,
      intro: `Whether you are moving into or up within a ${cfg.role} role, we support both live proxy interview assistance and candidate marketing so the calls come in and you convert them.`,
      points: [
        `Live, discreet guidance during ${cfg.role} interviews — system design, scheduling, and incident rounds`,
        'Profile positioning around the exact keywords recruiters and ATS filters screen for',
        'Active candidate marketing and recruiter outreach to build a real interview pipeline',
        'End-to-end: get the interview, clear it, then keep the role with real-time job support',
      ],
    },
    bottomCTAHeading: `Need ${cfg.role} Job or Interview Support Right Now?`,
    bottomCTABody:
      'In-house Kubernetes, GPU, inference, and agent-platform experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: geo,
      techLinks: cfg.techLinks,
      problemLink: K8S_PRODUCTION_LINK,
      proxyLink: K8S_INTERVIEW_LINK,
      additionalLinks: [
        K8S_HUB_LINK, K8S_PROFILE_LINK, K8S_MARKETING_LINK,
        ...cfg.extraLinks,
        ...ROLE_LINKS.filter((l) => l.href !== `/${cfg.slug}/`),
      ],
    }),
  });
}

export const kubernetesPlatformEngineer = rolePage({
  slug: 'kubernetes-platform-engineer-job-support',
  role: 'Kubernetes Platform Engineer (AI)',
  title: 'Kubernetes Platform Engineer Job Support — Build the AI Platform Teams Run On',
  description:
    'Real-time job and interview support for Kubernetes Platform Engineers building AI platforms: cluster architecture, GPU scheduling, inference platforms, agent runtimes, self-service, observability, security, and cost.',
  keywords: ['Kubernetes platform engineer support', 'AI platform engineer Kubernetes', 'internal developer platform AI', 'platform engineering GPU', 'platform engineer interview'],
  h1: 'Kubernetes Platform Engineer Job Support — The AI Platform Beneath Everything',
  tagline: 'Platform engineers now own the AI substrate — GPUs, inference, agents, and self-service. We support the whole remit.',
  painIntro:
    'As a platform engineer you are suddenly responsible for GPUs, inference platforms, agent runtimes, and the self-service that lets product teams ship AI — on top of the cluster you already run.',
  heroVariant:
    'We support Kubernetes platform engineers building AI platforms: cluster architecture and multi-tenancy, GPU scheduling (DRA, MIG, gang scheduling), golden-path inference platforms (vLLM, KServe, Dynamo), agent runtimes and sandboxes, MCP gateways, self-service via operators and GitOps, observability, security, and cost controls. The goal is a platform product teams can self-serve safely — and we help you build it and defend the design in interviews.',
  ownsCases: [
    'Cluster architecture, multi-tenancy, and golden paths for AI workloads',
    'GPU scheduling and capacity: DRA, MIG, gang scheduling, and topology',
    'Self-service inference and agent platforms via operators and GitOps',
    'Platform-wide observability, security, and cost controls',
    'Reliability and on-call for the AI substrate every team depends on',
    'Interviews: platform system design, scheduling deep-dives, and incident scenarios',
  ],
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_SCHED_LINK],
  extraLinks: [
    K8S_AGENTIC_HUB_LINK, K8S_SRE_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK,
    { label: 'Multi-agent platform support', href: '/kubernetes-multi-agent-platform-job-support/' },
    EXISTING.aiPlatformEngineer,
  ],
});

export const aiInfrastructureEngineer = rolePage({
  slug: 'ai-infrastructure-engineer-kubernetes-job-support',
  role: 'AI Infrastructure Engineer',
  title: 'AI Infrastructure Engineer Job Support — GPU, Inference & Agent Infrastructure',
  description:
    'Real-time job and interview support for AI Infrastructure Engineers on Kubernetes: GPU clusters, LLM serving, distributed training/inference, agent runtimes, observability, and cost — across cloud and on-prem.',
  keywords: ['AI infrastructure engineer support', 'AI infra engineer Kubernetes', 'GPU inference infrastructure', 'LLM infrastructure engineer', 'AI infra interview'],
  h1: 'AI Infrastructure Engineer Job Support — Own the GPU and Inference Substrate',
  tagline: 'From GPU clusters to LLM serving to agent runtimes — the infrastructure that makes AI run in production.',
  painIntro:
    'AI Infrastructure Engineers live where models meet hardware: GPU clusters, distributed inference, serving platforms, and the reliability and cost of it all. It is a deep, fast-moving remit.',
  heroVariant:
    'We support AI Infrastructure Engineers on Kubernetes: building and operating GPU clusters (NVIDIA GPU Operator, MIG, interconnect), distributed training and inference (gang scheduling, NCCL/RDMA), LLM-serving platforms (vLLM, KServe, Dynamo, SGLang, TensorRT-LLM, NIM), agent runtimes, observability, and FinOps — across EKS, AKS, GKE, OpenShift, and bare-metal. We help with real deliverables and with interviews where you must design inference platforms and defend trade-offs.',
  ownsCases: [
    'GPU cluster build and operation: operator, drivers, MIG, interconnect, topology',
    'Distributed training and inference: parallelism, gang scheduling, NCCL/RDMA',
    'LLM-serving platforms: vLLM, KServe, Dynamo, SGLang, TensorRT-LLM, NIM',
    'Inference-specific observability (TTFT/TPOT/KV-cache) and reliability',
    'FinOps: GPU utilisation, scale-to-zero, Spot, and cost per token',
    'Interviews: inference system design and GPU-capacity scenarios',
  ],
  techLinks: [K8S_GPU_LINK, K8S_INFERENCE_HUB_LINK],
  extraLinks: [
    K8S_GPU_SCHED_LINK, K8S_SRE_LINK, K8S_FINOPS_LINK,
    { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
    EXISTING.aiPlatformEngineer, EXISTING.mlops,
  ],
});

export const gpuInfrastructureEngineer = rolePage({
  slug: 'gpu-infrastructure-engineer-job-support',
  role: 'GPU Infrastructure Engineer',
  title: 'GPU Infrastructure Engineer Job Support — Drivers, Scheduling, Interconnect & Utilisation',
  description:
    'Real-time job and interview support for GPU Infrastructure Engineers on Kubernetes: NVIDIA GPU Operator, MIG, DRA, gang scheduling, NVLink/InfiniBand/NCCL, DCGM, and maximising utilisation across cloud and bare-metal.',
  keywords: ['GPU infrastructure engineer support', 'GPU engineer Kubernetes', 'NVIDIA GPU Operator engineer', 'GPU scheduling interconnect', 'GPU utilisation engineer'],
  h1: 'GPU Infrastructure Engineer Job Support — Make Every Accelerator Earn Its Keep',
  tagline: 'Drivers, scheduling, interconnect, and utilisation — the deep GPU layer that decides AI performance and cost.',
  painIntro:
    'As a GPU Infrastructure Engineer you own the layer everyone else takes for granted — and when it is wrong, every AI workload is slow, unschedulable, or expensive.',
  heroVariant:
    'We support GPU Infrastructure Engineers on Kubernetes: the NVIDIA GPU Operator and drivers, MIG partitioning and time-slicing, DRA and gang scheduling, high-speed interconnect (NVLink/NVSwitch, InfiniBand/RoCE with NCCL tuning), topology-aware placement, DCGM metrics, and relentless focus on utilisation and cost. We help with real cluster work — on cloud GPUs or bare-metal/DGX — and with interviews where you must reason about scheduling, interconnect, and capacity.',
  ownsCases: [
    'NVIDIA GPU Operator, drivers, device plugins, and node configuration',
    'MIG partitioning, time-slicing, and sharing strategies for mixed workloads',
    'DRA, gang scheduling, and topology-aware placement',
    'High-speed interconnect (NVLink, InfiniBand/RoCE) and NCCL tuning',
    'DCGM metrics, utilisation, and cost-per-GPU optimisation',
    'Interviews: GPU scheduling, interconnect, and capacity deep-dives',
  ],
  techLinks: [K8S_GPU_LINK, K8S_GPU_SCHED_LINK],
  extraLinks: [
    K8S_FINOPS_LINK,
    { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
    { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
    { label: 'Gang scheduling AI job support', href: '/kubernetes-gang-scheduling-ai-job-support/' },
  ],
});

export const llmopsEngineer = rolePage({
  slug: 'llmops-engineer-kubernetes-job-support',
  role: 'LLMOps Engineer',
  title: 'LLMOps Engineer Job Support — Serve, Evaluate & Operate LLMs on Kubernetes',
  description:
    'Real-time job and interview support for LLMOps Engineers on Kubernetes: model serving and rollouts, evaluation and guardrails, RAG pipelines, observability, cost, and reliable LLM operations across cloud and on-prem.',
  keywords: ['LLMOps engineer support', 'LLMOps Kubernetes', 'LLM operations engineer', 'model serving rollouts', 'LLMOps interview'],
  h1: 'LLMOps Engineer Job Support — Operate LLMs in Production, Not Just Deploy Them',
  tagline: 'Serving, rollouts, evaluation, RAG, observability, and cost — the operational discipline around production LLMs.',
  painIntro:
    'LLMOps is where models meet operations: safe rollouts, evaluation and guardrails, RAG freshness, observability, and cost — all while the models and tools change under you.',
  heroVariant:
    'We support LLMOps Engineers on Kubernetes: model serving and safe rollouts (canary/blue-green with KServe/vLLM), evaluation harnesses and guardrails, RAG ingestion and freshness, inference observability (TTFT/TPOT, quality, cost), prompt and model versioning, and the FinOps of token and GPU spend. We help with real LLMOps deliverables and with interviews where you must design the operational layer around production LLMs and agents.',
  ownsCases: [
    'Model serving and safe rollouts (canary/blue-green) with KServe and vLLM',
    'Evaluation, guardrails, and quality monitoring for LLM outputs',
    'RAG ingestion, freshness, and retrieval-quality operations',
    'Inference observability: TTFT/TPOT, success rate, and cost per token',
    'Prompt/model versioning and reproducible deployments',
    'Interviews: LLMOps system design, evaluation, and reliability scenarios',
  ],
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_SRE_LINK],
  extraLinks: [
    K8S_FINOPS_LINK, K8S_AGENTIC_HUB_LINK,
    { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
    EXISTING.mlops, EXISTING.llm,
  ],
});

export const kubernetesRolePages: LandingPageConfig[] = [
  kubernetesPlatformEngineer,
  aiInfrastructureEngineer,
  gpuInfrastructureEngineer,
  llmopsEngineer,
];
