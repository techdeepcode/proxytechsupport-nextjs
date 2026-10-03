import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive Kubernetes + Agentic AI + AI Infrastructure
 * global authority cluster. Mirrors the AWS / Azure cluster approach: category highlight
 * sets + context-aware FAQ generators + thin page builders that fill canonical + lastmod
 * so each page object stays compact while remaining unique (unique title, H1, intro,
 * use cases, FAQs, and internal links per page).
 *
 * Positioning: "Operating production AI and autonomous agents on Kubernetes and modern
 * cloud infrastructure in 2026" — NOT "what is Kubernetes". Content emphasises agentic AI,
 * LLM serving, RAG, MCP, GPU/inference, agent runtimes/sandboxes, AI observability, AI
 * security, AI SRE, production incidents, cost, scaling, hybrid/private AI.
 *
 * Technical content reflects the verified ecosystem state through September/October 2026:
 *  - Kubernetes v1.37 "Garhwal" (released 26 Aug 2026): DRA Core APIs GA (since 1.34) with
 *    extended-resource support now GA; Workload / PodGroup APIs + gang scheduling +
 *    Workload-Aware Preemption promoted to BETA (gang scheduling ships disabled by default);
 *    new CompositePodGroup API for hierarchical/topology-aware scheduling; in-place pod
 *    resize ("pod rightsizing"). We never assert GA where a feature is Beta/preview.
 *  - NVIDIA Dynamo v1.3.x: disaggregated prefill/decode, NIXL transfer, KV-aware routing,
 *    Dynamo Kubernetes Operator, topology-aware + media-aware routing.
 *  - GKE Inference Gateway GA (KV-cache-aware routing, Predictive Latency Boost); GKE Agent
 *    Sandbox (gVisor isolation, open-source Kubernetes SIG Apps subproject).
 *  - KServe LLMInferenceService; vLLM; Ray Serve; SGLang; TensorRT-LLM; NVIDIA NIM.
 *  - Red Hat OpenShift AI with llm-d distributed inference (Tech Preview), KServe, Llama
 *    Stack Operator, Red Hat AI Inference Server (vLLM) for air-gapped/disconnected.
 *  - AWS Bedrock AgentCore (Runtime, Memory, Gateway, Identity, Policy, Browser, Code
 *    Interpreter, Observability); Microsoft Agent Framework 1.0 + Microsoft Foundry.
 *
 * NOTHING here renders on its own — these are data-only helpers consumed by the batch files
 * under data/kubernetes/*.ts and surfaced through data/kubernetes/index.ts.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-10-02T12:00:00.000Z';

// ─── Category highlight sets ────────────────────────────────────────────────

export const jobSupportHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Kubernetes AI Job Support',
    description:
      'Live expert help during your working hours — running LLM inference (vLLM, KServe, Dynamo), agent runtimes and sandboxes, GPU scheduling, autoscaling, RAG pipelines, and daily platform deliverables on your real cluster so you always hit your deadlines.',
  },
  {
    title: 'Production AI Incident Support',
    description:
      'On-call firefighting for live incidents — GPU Pods stuck Pending, CUDA/OOMKilled crashes, vLLM out-of-memory, high TTFT, model-loading failures, autoscaling that will not scale, agent loops, MCP authorization errors, and RAG/vector-DB latency — with an engineer on the call.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'Kubernetes AI proxy interview assistance, profile positioning, and candidate marketing for Platform Engineer, AI Infrastructure Engineer, GPU Infrastructure Engineer, MLOps/LLMOps, and SRE roles — real-time interview guidance, recruiter readiness, and profile visibility.',
  },
];

export const techHighlights: LandingHighlight[] = [
  {
    title: 'Real Project Support',
    description:
      'Hands-on help on real tickets — architecture, Helm/Kustomize manifests, operators and CRDs, debugging, and code review on your actual Kubernetes cluster during your working hours, not generic tutorials.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Firefighting for live incidents — GPU scheduling, inference latency, autoscaling, memory, networking, RBAC, quota, and cost problems resolved with an AI-infrastructure expert on the call.',
  },
  {
    title: 'Interview & Profile Support',
    description:
      'Kubernetes AI infrastructure interview questions covered end-to-end plus profile positioning so you can both keep your job and land the next one.',
  },
];

export const roleHighlights: LandingHighlight[] = [
  {
    title: 'Role-Specific Kubernetes AI Support',
    description:
      'Daily live support mapped to your exact responsibilities — the real inference, agent-platform, GPU, and reliability deliverables, tools, and stakeholders your role owns.',
  },
  {
    title: 'Production & On-Call Backup',
    description:
      'An AI-platform expert beside you during incidents, releases, and high-pressure delivery so you never face a production GPU or agent failure alone.',
  },
  {
    title: 'Interview & Positioning',
    description:
      'Role-targeted Kubernetes AI proxy interview support, interview assistance, and profile positioning to move into and up within the role.',
  },
];

export const interviewHighlights: LandingHighlight[] = [
  {
    title: 'Live Kubernetes AI Interview Guidance',
    description:
      'Discreet real-time expert support during your live interview — cluster architecture, GPU scheduling and DRA, LLM serving and autoscaling design, agent-platform and MCP security, observability, and coding rounds.',
  },
  {
    title: 'System Design & Scenario Coverage',
    description:
      'Live support across the real interview rounds — designing production inference platforms, multi-agent systems, GPU capacity and cost models, incident scenarios, and platform-engineering trade-offs across cloud and on-prem.',
  },
  {
    title: 'Get Interviews Scheduled',
    description:
      'Profile engineering, keyword targeting, and recruiter outreach so you actually get Kubernetes AI / platform-engineering interview calls in the first place.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'Kubernetes AI Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact keywords AI-platform recruiters search for — Kubernetes, GPU scheduling, vLLM/KServe, agent runtimes, MLOps/LLMOps, SRE, and production reliability signals.',
  },
  {
    title: 'Candidate Marketing & Outreach',
    description:
      'Active application support and recruiter outreach so your platform-engineering profile reaches hiring managers instead of sitting in an ATS black hole.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start coming, we back you with Kubernetes AI proxy interview assistance and real-time job support to convert offers and keep the role.',
  },
];

// ─── New-cluster hub anchor links ─────────────────────────────────────────────

export const K8S_HUB_LINK: LandingRelatedLink = { label: 'Kubernetes AI job support hub', href: '/kubernetes-ai-job-support/' };
export const K8S_PRODUCTION_LINK: LandingRelatedLink = { label: 'Kubernetes AI production support', href: '/kubernetes-ai-production-support/' };
export const K8S_SRE_LINK: LandingRelatedLink = { label: 'Kubernetes AI SRE & observability', href: '/kubernetes-ai-sre-observability-job-support/' };
export const K8S_SECURITY_LINK: LandingRelatedLink = { label: 'Kubernetes AI security', href: '/kubernetes-ai-security-job-support/' };
export const K8S_FINOPS_LINK: LandingRelatedLink = { label: 'Kubernetes AI FinOps & cost', href: '/kubernetes-ai-finops-job-support/' };
export const K8S_INTERVIEW_LINK: LandingRelatedLink = { label: 'Kubernetes AI interview support', href: '/kubernetes-ai-interview-support/' };
export const K8S_PROFILE_LINK: LandingRelatedLink = { label: 'Kubernetes AI profile positioning', href: '/kubernetes-ai-profile-positioning-support/' };
export const K8S_MARKETING_LINK: LandingRelatedLink = { label: 'Kubernetes AI candidate marketing', href: '/kubernetes-ai-candidate-marketing/' };

export const K8S_AGENTIC_HUB_LINK: LandingRelatedLink = { label: 'Kubernetes agentic AI job support', href: '/kubernetes-agentic-ai-job-support/' };
export const K8S_AGENT_RUNTIME_LINK: LandingRelatedLink = { label: 'Kubernetes agent runtime support', href: '/kubernetes-agent-runtime-job-support/' };
export const K8S_AGENT_SANDBOX_LINK: LandingRelatedLink = { label: 'Kubernetes agent sandbox support', href: '/kubernetes-agent-sandbox-job-support/' };
export const K8S_MCP_SERVER_LINK: LandingRelatedLink = { label: 'Kubernetes MCP server support', href: '/kubernetes-mcp-server-job-support/' };
export const K8S_MCP_GATEWAY_LINK: LandingRelatedLink = { label: 'Kubernetes MCP gateway support', href: '/kubernetes-mcp-gateway-job-support/' };

export const K8S_INFERENCE_HUB_LINK: LandingRelatedLink = { label: 'Kubernetes LLM inference support', href: '/kubernetes-llm-inference-job-support/' };
export const K8S_VLLM_LINK: LandingRelatedLink = { label: 'Kubernetes vLLM support', href: '/kubernetes-vllm-job-support/' };
export const K8S_KSERVE_LINK: LandingRelatedLink = { label: 'Kubernetes KServe support', href: '/kubernetes-kserve-job-support/' };
export const K8S_DYNAMO_LINK: LandingRelatedLink = { label: 'Kubernetes NVIDIA Dynamo support', href: '/kubernetes-nvidia-dynamo-job-support/' };
export const K8S_GPU_LINK: LandingRelatedLink = { label: 'Kubernetes GPU infrastructure support', href: '/kubernetes-gpu-infrastructure-job-support/' };
export const K8S_GPU_SCHED_LINK: LandingRelatedLink = { label: 'Kubernetes GPU scheduling support', href: '/kubernetes-gpu-scheduling-job-support/' };

export const K8S_OPENSHIFT_LINK: LandingRelatedLink = { label: 'OpenShift AI job support', href: '/openshift-ai-job-support/' };
export const K8S_ONPREM_LINK: LandingRelatedLink = { label: 'On-premises AI infrastructure support', href: '/on-premises-ai-infrastructure-job-support/' };
export const K8S_PRIVATE_AI_LINK: LandingRelatedLink = { label: 'Private AI on Kubernetes support', href: '/private-ai-kubernetes-job-support/' };

export const K8S_EUROPE_LINK: LandingRelatedLink = { label: 'Europe Kubernetes AI job support', href: '/kubernetes-ai-job-support-europe/' };
export const K8S_USA_LINK: LandingRelatedLink = { label: 'USA Kubernetes AI job support', href: '/kubernetes-ai-job-support-usa/' };

/** Cloud K8s-specific hubs created in this cluster. */
export const EKS_AGENTIC_LINK: LandingRelatedLink = { label: 'EKS agentic AI job support', href: '/eks-agentic-ai-job-support/' };
export const AKS_AGENTIC_LINK: LandingRelatedLink = { label: 'AKS agentic AI job support', href: '/aks-agentic-ai-job-support/' };
export const GKE_AGENTIC_LINK: LandingRelatedLink = { label: 'GKE agentic AI job support', href: '/gke-agentic-ai-job-support/' };

/** Existing, already-live site routes (verified real) — cross-link, never duplicate. */
export const EXISTING = {
  kubernetesGuide: { label: 'Kubernetes job support guide', href: '/kubernetes-job-support-guide/' } as LandingRelatedLink,
  agenticAi: { label: 'Agentic AI job support', href: '/agentic-ai-job-support/' } as LandingRelatedLink,
  agenticAiEngineer: { label: 'Agentic AI Engineer job support', href: '/agentic-ai-engineer-job-support/' } as LandingRelatedLink,
  agenticAiProxy: { label: 'Agentic AI interview proxy support', href: '/agentic-ai-interview-proxy-support/' } as LandingRelatedLink,
  vllmInference: { label: 'vLLM inference job support', href: '/vllm-inference-job-support/' } as LandingRelatedLink,
  mcpServer: { label: 'MCP server job support', href: '/mcp-server-ai-job-support/' } as LandingRelatedLink,
  mcpSecurity: { label: 'MCP server security', href: '/mcp-server-security/' } as LandingRelatedLink,
  mcpFoundry: { label: 'MCP Microsoft Foundry support', href: '/mcp-microsoft-foundry-job-support/' } as LandingRelatedLink,
  aksAiMl: { label: 'AKS AI/ML job support', href: '/aks-ai-ml-job-support/' } as LandingRelatedLink,
  aksGpu: { label: 'AKS GPU AI job support', href: '/aks-gpu-ai-job-support/' } as LandingRelatedLink,
  aksVllm: { label: 'AKS vLLM job support', href: '/aks-vllm-job-support/' } as LandingRelatedLink,
  awsAiMl: { label: 'AWS AI/ML job support hub', href: '/aws-ai-ml-job-support/' } as LandingRelatedLink,
  azureAiMl: { label: 'Azure AI proxy job support hub', href: '/azure-ai-ml-proxy-job-support/' } as LandingRelatedLink,
  aiPlatformEngineer: { label: 'AI Platform Engineer job support', href: '/ai-platform-engineer-job-support/' } as LandingRelatedLink,
  aiDevopsEngineer: { label: 'AI DevOps Engineer job support', href: '/ai-devops-engineer-job-support/' } as LandingRelatedLink,
  aimlProduction: { label: 'AI/ML production support', href: '/ai-ml-production-support/' } as LandingRelatedLink,
  aimlProxy: { label: 'AI/ML proxy interview support', href: '/ai-ml-proxy-interview-support/' } as LandingRelatedLink,
  genai: { label: 'Generative AI job support', href: '/generative-ai-job-support/' } as LandingRelatedLink,
  rag: { label: 'RAG job support', href: '/rag-job-support/' } as LandingRelatedLink,
  llm: { label: 'LLM job support', href: '/llm-job-support/' } as LandingRelatedLink,
  vectorDb: { label: 'Vector database job support', href: '/vector-database-job-support/' } as LandingRelatedLink,
  mlops: { label: 'MLOps job support', href: '/mlops-job-support/' } as LandingRelatedLink,
  pythonAiml: { label: 'Python AI/ML job support', href: '/python-ai-ml-job-support/' } as LandingRelatedLink,
  devops: { label: 'DevOps job support', href: '/devops-job-support/' } as LandingRelatedLink,
  sre: { label: 'SRE job support', href: '/sre-job-support-usa/' } as LandingRelatedLink,
  cloudTech: { label: 'Cloud technologies job support', href: '/cloud-technologies-job-support/' } as LandingRelatedLink,
  huggingFace: { label: 'Hugging Face proxy job support', href: '/hugging-face-proxy-job-support/' } as LandingRelatedLink,
  aiAgentSandboxSec: { label: 'AI agent sandbox escape security', href: '/ai-agent-sandbox-escape-security/' } as LandingRelatedLink,
  aiAgentPromptInjection: { label: 'AI agent prompt injection security', href: '/ai-agent-prompt-injection-security/' } as LandingRelatedLink,
  aiAgentContainment: { label: 'AI agent containment architecture', href: '/ai-agent-containment-architecture/' } as LandingRelatedLink,
  aiAgentIdentity: { label: 'AI agent identity & access control', href: '/ai-agent-identity-and-access-control/' } as LandingRelatedLink,
  aiAgentNetworkEgress: { label: 'AI agent network egress control', href: '/ai-agent-network-egress-control/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Job-support style FAQs for Kubernetes AI service / cloud / country / role job-support pages. */
export function k8sJobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What Kubernetes AI job support do you provide for ${entity}?`,
      answer: `We provide real-time Kubernetes AI job support for ${entity}. Our in-house platform and AI-infrastructure engineers join your working hours and help with ${focus}. That includes LLM inference serving (vLLM, KServe/LLMInferenceService, Ray Serve, NVIDIA Dynamo, SGLang, TensorRT-LLM, NIM), GPU scheduling and Dynamic Resource Allocation (DRA), agent runtimes and sandboxes, autoscaling (HPA/KEDA/scale-to-zero), RBAC and network policy, observability, and daily sprint deliverables. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: 'Can you help with live Kubernetes AI production incidents?',
      answer:
        'Yes. Production firefighting is a core strength. We help resolve GPU Pods stuck in Pending, CUDA and OOMKilled crashes, device-plugin failures, vLLM out-of-memory and KV-cache exhaustion, high time-to-first-token (TTFT), inference timeouts, model-loading failures from object storage, autoscaling that will not scale up or down, agent loops burning tokens and GPU, MCP server authorization failures, and RAG/vector-DB latency — usually within the same working session, with an engineer reading your logs, events, and metrics on the call.',
    },
    {
      question: 'Which Kubernetes AI tools and platforms do you cover?',
      answer:
        'Kubernetes 1.3x including v1.37 scheduling features (Dynamic Resource Allocation, Workload/PodGroup gang scheduling in Beta, CompositePodGroup, in-place pod resize), the NVIDIA GPU Operator, MIG, KServe, vLLM, Ray/Ray Serve, NVIDIA Dynamo and its Kubernetes Operator, SGLang, TensorRT-LLM, NVIDIA NIM, KEDA, Gateway API and inference gateways, Istio, Prometheus, Grafana, OpenTelemetry, Argo, Kueue, and agent runtimes and MCP servers — on EKS, AKS, GKE, OpenShift, and bare-metal/on-prem clusters.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All Kubernetes AI job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. Whether it is job support, production help, interview assistance, or candidate marketing, every engagement is handled with full professional discretion. We work only within the access and direction you give us.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house team of Kubernetes, GPU, and AI-infrastructure engineers — no sub-contracting. Reach out on WhatsApp and we will match you with the right expert for your cluster, cloud, and situation immediately.',
    },
  ];
}

/** Technology/architecture-page FAQs. `tech` = the component; `usage` = one-line real usage. */
export function k8sTechFaqs(tech: string, usage: string): LandingFaqItem[] {
  return [
    {
      question: `What kind of ${tech} job support do you provide?`,
      answer: `We provide hands-on, real-time ${tech} job support on your actual Kubernetes project. ${usage} Our experts help with architecture and manifests, operator/CRD configuration, GPU and networking setup, debugging, code review, performance and cost tuning, and production issues — during your working hours, same-day. We work on your real deliverables, not generic tutorials.`,
    },
    {
      question: `What are the common production problems with ${tech}?`,
      answer: `Typical ${tech} production issues we resolve include GPU scheduling and capacity failures, out-of-memory and KV-cache pressure, latency and timeout spikes, autoscaling misconfiguration, readiness/liveness probe tuning for slow model loads, image and weight pull bottlenecks, RBAC and service-account problems, and cost overruns from idle GPUs. We find the root cause from Pod events, container logs, and Prometheus/OpenTelemetry metrics, then ship a stable fix.`,
    },
    {
      question: `Do you cover ${tech} interview questions?`,
      answer: `Yes. We provide ${tech} proxy interview support — real-time expert help on fundamentals, architecture and design trade-offs, scaling and reliability, security, and scenario-based production problems — during your live interview. We calibrate to the exact role, seniority, and company format.`,
    },
    {
      question: `Can you help if I just joined a project using ${tech}?`,
      answer: `Yes. Onboarding onto an unfamiliar ${tech} setup is one of the most common reasons people reach out. We help you understand the existing architecture, cluster layout, and operational boundaries, get productive fast, deliver your first tasks confidently, and avoid the mistakes that get flagged in reviews and standups.`,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Contact us on WhatsApp with your stack, the problem, and your timeline. We assign the right expert — usually same-day. Every engagement is fully confidential, and NDAs are available on request.',
    },
  ];
}

/** Evergreen troubleshooting-page FAQs. `symptom` = the failure; `root` = typical root-cause summary. */
export function k8sTroubleshootFaqs(symptom: string, root: string): LandingFaqItem[] {
  return [
    {
      question: `What usually causes ${symptom} on Kubernetes?`,
      answer: `${root} We diagnose it live by reading Pod events (kubectl describe), scheduler and device-plugin logs, container logs, GPU metrics (DCGM), and Prometheus/OpenTelemetry traces — then confirm the root cause before changing anything, rather than guessing.`,
    },
    {
      question: `How do you fix ${symptom} in production without making it worse?`,
      answer: `We stabilise first — protect the running workload, control blast radius, and restore service — then apply the durable fix (scheduling, resource requests/limits, node/GPU configuration, probes, autoscaling policy, or manifest changes) and add the observability or guardrail that would have caught it earlier. You keep an engineer on the call throughout.`,
    },
    {
      question: `Can you help right now if ${symptom} is happening live?`,
      answer: `Yes. This is exactly the kind of incident we handle on-call. Message us on WhatsApp describing the symptom, your cluster and cloud (EKS/AKS/GKE/OpenShift/bare-metal), and what changed recently, and we will join and work it with you until the system is stable.`,
    },
    {
      question: 'Is this an educational guide or a support service?',
      answer:
        'Both. This page explains the failure mode and how it is resolved so you can act on it yourself. If you would rather have an expert work it with you live — during an incident or as ongoing job support — that service is available same-day and confidentially.',
    },
    {
      question: 'Do you also help prevent this from recurring?',
      answer:
        'Yes. After the fix we help you add the right alerts, SLOs, resource policies, admission controls, and runbooks so the same failure does not page you again — and we can review the rest of your platform for the same class of risk.',
    },
  ];
}

/** Interview-page FAQs. `entity` = role/service interview context. */
export function k8sInterviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What ${entity} interview support do you provide?`,
      answer: `We provide real-time, discreet proxy interview support for ${entity} interviews. Our in-house experts join your live session and guide you through cluster architecture, GPU scheduling and DRA, LLM-serving and autoscaling system design, agent-platform and MCP security, observability and SRE scenarios, cost/capacity trade-offs, and coding rounds.`,
    },
    {
      question: 'What interview formats do you support?',
      answer:
        'All of them — live coding, take-home reviews, platform and infrastructure system design, incident/troubleshooting deep-dives, architecture panels, and final rounds. Whether it is a FAANG-style bar-raiser, a product-company platform panel, or a consulting client round, we align to the exact format and seniority level.',
    },
    {
      question: 'What topics are covered?',
      answer:
        'Kubernetes scheduling and resource management, Dynamic Resource Allocation and GPU/MIG, LLM inference serving (vLLM, KServe, Dynamo, disaggregated prefill/decode), autoscaling and scale-to-zero, agent runtimes/sandboxes and MCP, observability (Prometheus, Grafana, OpenTelemetry), AI security (RBAC, OPA/Gatekeeper, Kyverno, gVisor/Kata), FinOps, and multi-cloud/on-prem/hybrid design.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details, and support is delivered discreetly through audio or chat, calibrated to your interview format. We do not guarantee interview selection or employment — hiring decisions are made solely by employers.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right expert and run a pre-interview alignment session so guidance matches your background and experience level.',
    },
  ];
}

/** Candidate-marketing / profile / get-scheduled FAQs. */
export function k8sMarketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more interview calls?`,
      answer: `We help ${entity} get interview calls through profile engineering, keyword targeting, LinkedIn positioning, and recruiter outreach. We rebuild your resume and LinkedIn around the exact terms AI-platform recruiters search for — Kubernetes, GPU scheduling, vLLM/KServe/Dynamo, agent platforms, MLOps/LLMOps, SRE, reliability, and measurable production impact — then support active applications and outreach to hiring managers and staffing firms.`,
    },
    {
      question: 'Why is my platform/AI-infrastructure resume getting no calls?',
      answer:
        'Usually a keyword and positioning mismatch: the resume reads like a generic DevOps or sysadmin profile, buries the GPU/inference/agent-platform impact, and misses the terms recruiters and ATS filters screen for. We diagnose the gaps and rebuild the profile so it surfaces in searches and passes ATS screening for the Kubernetes AI roles you want.',
    },
    {
      question: 'What profiles do you support?',
      answer:
        'Kubernetes Platform Engineer, AI Infrastructure Engineer, GPU Infrastructure Engineer, MLOps and LLMOps Engineer, AI Platform Engineer, Cloud AI Engineer, SRE, and DevOps engineers moving into AI infrastructure — at every level from transitioning-in to senior/staff/lead.',
    },
    {
      question: 'Do you help with contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099) and full-time searches, and understand the AI-infrastructure hiring landscape across product companies, startups, enterprises, and consulting firms — positioning your profile accordingly for each.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market and specialization.',
    },
  ];
}

// ─── Thin config builders ─────────────────────────────────────────────────────

type K8sPageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod' | 'geoLine' | 'timezoneNote'> & {
  canonical?: string;
  lastmod?: string;
  geoLine?: string;
  timezoneNote?: string;
};

const DEFAULT_GEO_LINE =
  'Real-time Kubernetes AI infrastructure support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Switzerland, Australia, New Zealand, Singapore, UAE, and worldwide.';
const DEFAULT_TZ_NOTE =
  'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours — and 24/7 for production incidents.';

/** Fill canonical (from slug) + lastmod + default geo/timezone so batch files stay compact. */
export function k8sPage(cfg: K8sPageInput): LandingPageConfig {
  return {
    ...cfg,
    geoLine: cfg.geoLine ?? DEFAULT_GEO_LINE,
    timezoneNote: cfg.timezoneNote ?? DEFAULT_TZ_NOTE,
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/**
 * Compact builder for Kubernetes AI technology / architecture pages. Fills the common
 * boilerplate (techHighlights, default geoLine/timezoneNote/bottomCTA) so each page
 * only declares its unique content. Any field can still be overridden.
 */
type K8sTechPageInput = Omit<
  LandingPageConfig,
  'canonical' | 'lastmod' | 'highlights' | 'geoLine' | 'timezoneNote' | 'bottomCTAHeading' | 'bottomCTABody'
> & {
  canonical?: string;
  lastmod?: string;
  highlights?: LandingHighlight[];
  geoLine?: string;
  timezoneNote?: string;
  bottomCTAHeading?: string;
  bottomCTABody?: string;
};

export function k8sTechPage(cfg: K8sTechPageInput): LandingPageConfig {
  return {
    ...cfg,
    highlights: cfg.highlights ?? techHighlights,
    geoLine:
      cfg.geoLine ??
      'Real-time Kubernetes AI infrastructure support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Switzerland, Australia, New Zealand, Singapore, UAE, and worldwide.',
    timezoneNote:
      cfg.timezoneNote ?? 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours — and 24/7 for production incidents.',
    bottomCTAHeading: cfg.bottomCTAHeading ?? 'Need Real-Time Kubernetes AI Support or Interview Help Right Now?',
    bottomCTABody:
      cfg.bottomCTABody ??
      'In-house Kubernetes, GPU, inference, and agent-platform experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/** Convenience for the common related-links shape used across the cluster. */
export function relatedLinks(input: {
  geoLinks: LandingRelatedLink[];
  techLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
  blogLink?: LandingRelatedLink;
  additionalLinks?: LandingRelatedLink[];
}): LandingRelatedLinks {
  return {
    blogLink: EXISTING.blog,
    ...input,
  };
}
