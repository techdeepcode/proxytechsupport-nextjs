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
  K8S_FINOPS_LINK,
  K8S_INTERVIEW_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_VLLM_LINK,
  K8S_KSERVE_LINK,
  K8S_GPU_LINK,
  K8S_GPU_SCHED_LINK,
  K8S_OPENSHIFT_LINK,
  K8S_ONPREM_LINK,
  K8S_PRIVATE_AI_LINK,
  K8S_EUROPE_LINK,
  K8S_USA_LINK,
} from './shared';

const geoEU = [K8S_EUROPE_LINK, K8S_USA_LINK];

// ─── OPENSHIFT AI HUB ──────────────────────────────────────────────────────────

export const openshiftAiHub: LandingPageConfig = k8sPage({
  slug: 'openshift-ai-job-support',
  title: 'OpenShift AI Job Support — llm-d, KServe, vLLM, Llama Stack & GPU on OpenShift',
  description:
    'Real-time job support for Red Hat OpenShift AI: distributed inference with llm-d, KServe/LLMInferenceService, vLLM, Llama Stack Operator, the GPU Operator, MCP, RBAC, and hybrid/air-gapped private AI. Same-day, global.',
  keywords: [
    'OpenShift AI job support', 'OpenShift llm-d', 'OpenShift KServe vLLM', 'Llama Stack OpenShift',
    'OpenShift GPU Operator', 'Red Hat OpenShift AI support', 'OpenShift private AI',
  ],
  h1: 'OpenShift AI Job Support — Enterprise, Hybrid & Private AI on Red Hat OpenShift',
  tagline:
    'Red Hat OpenShift AI for regulated, hybrid, and on-prem AI: distributed inference with llm-d, KServe/vLLM serving, Llama Stack, GPU, and the governance enterprises need.',
  heroEyebrow: 'OpenShift AI — Enterprise & Hybrid',
  painIntro:
    'Running AI on OpenShift means enterprise expectations — RBAC, GitOps, observability, air-gapped delivery — layered over the fast-moving world of vLLM, KServe, llm-d, and GPU operators. That is a lot to get right.',
  heroVariant:
    'We help you operate Red Hat OpenShift AI across the stack: distributed inference with llm-d (Kubernetes-native distributed serving on vLLM, available as Technology Preview in recent OpenShift AI releases) deployed via KServe, KServe/LLMInferenceService and vLLM for standard serving, the Llama Stack Operator (LlamaStackDistribution) for agentic/GenAI building blocks, the NVIDIA GPU Operator, MCP servers, RBAC and service-mesh routing, GitOps configuration, and full observability with pre-built dashboards. OpenShift AI shines for hybrid, regulated, and sovereign workloads — and we also run the Red Hat AI Inference Server (vLLM) in air-gapped/disconnected clusters. We advise honestly on OpenShift vs the hyperscaler managed services for your constraints.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What does OpenShift AI job support cover?',
      answer:
        'Model serving with KServe and vLLM, distributed inference with llm-d (Technology Preview in recent OpenShift AI versions, deployed through KServe with service-mesh routing between workers), the Llama Stack Operator for agentic/GenAI building blocks, the NVIDIA GPU Operator and GPU scheduling, MCP servers, RBAC and security, GitOps and pipelines, observability, and hybrid/air-gapped deployment — on OpenShift and OpenShift AI Self-Managed.',
    },
    {
      question: 'What is llm-d and is it production-ready on OpenShift?',
      answer:
        'llm-d is a Kubernetes-native distributed LLM serving stack built on vLLM, launched in 2025 by Red Hat with Google Cloud, IBM Research, NVIDIA, and CoreWeave. On Red Hat OpenShift AI it is offered as a Technology Preview (for example llm-d v0.2 in OpenShift AI 2.25), unified through KServe (the LLMInference CRD) with service-mesh routing, dashboards, and GitOps. We are explicit about Technology-Preview status and help you pilot it safely rather than assume GA.',
    },
    {
      question: 'Can you help with air-gapped and regulated OpenShift AI?',
      answer:
        'Yes. We help you run AI in fully disconnected OpenShift clusters — the Red Hat AI Inference Server (vLLM) supports air-gapped deployment and benchmarking — with internal registries, model mirroring, data-residency-aware architecture, RBAC, and audit. This is a core strength for financial services, healthcare, pharma, government, and other regulated sectors.',
    },
    {
      question: 'OpenShift AI or a hyperscaler managed AI service?',
      answer:
        'OpenShift AI fits when you need hybrid/on-prem, data sovereignty, air-gapped operation, consistent tooling across clouds and datacenters, and enterprise governance. A hyperscaler managed service may be simpler when you are all-in on one cloud and do not need that control. We help you choose on the merits and connect them where you run both.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your OpenShift version, what you are deploying (serving, llm-d, Llama Stack, GPU), and your constraints (hybrid, air-gapped, regulated). We will work it with you same-day.',
    },
  ],
  useCasesSection: {
    title: 'OpenShift AI Work We Help With',
    cases: [
      'Serving LLMs with KServe/LLMInferenceService and vLLM on OpenShift with autoscaling and safe rollouts',
      'Piloting llm-d distributed inference (Technology Preview) with service-mesh routing between workers',
      'Deploying the Llama Stack Operator for agentic and GenAI building blocks',
      'Configuring the NVIDIA GPU Operator and GPU scheduling on OpenShift',
      'Running air-gapped/disconnected AI with the Red Hat AI Inference Server (vLLM)',
      'RBAC, GitOps, and observability for regulated enterprise AI platforms',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_KSERVE_LINK, K8S_VLLM_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK, K8S_PRIVATE_AI_LINK, K8S_ONPREM_LINK, K8S_SECURITY_LINK,
      { label: 'OpenShift AI llm-d support', href: '/openshift-ai-llm-d-job-support/' },
      { label: 'OpenShift AI vLLM & KServe support', href: '/openshift-ai-vllm-kserve-job-support/' },
      { label: 'OpenShift AI GPU support', href: '/openshift-ai-gpu-job-support/' },
      { label: 'OpenShift AI MCP support', href: '/openshift-ai-mcp-job-support/' },
      { label: 'Air-gapped AI on Kubernetes support', href: '/air-gapped-ai-kubernetes-job-support/' },
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      EXISTING.vllmInference, EXISTING.mcpServer,
    ],
  }),
});

// ─── OPENSHIFT AI llm-d ────────────────────────────────────────────────────────

export const openshiftAiLlmD: LandingPageConfig = k8sTechPage({
  slug: 'openshift-ai-llm-d-job-support',
  title: 'OpenShift AI llm-d Job Support — Kubernetes-Native Distributed LLM Serving',
  description:
    'Real-time support for llm-d on Red Hat OpenShift AI: distributed vLLM serving, intelligent/KV-aware routing, prefill/decode disaggregation, KServe LLMInference CRD deployment, and service-mesh routing between workers.',
  keywords: ['OpenShift llm-d', 'llm-d distributed inference', 'llm-d vLLM', 'llm-d KServe', 'intelligent routing llm-d', 'Red Hat llm-d'],
  h1: 'OpenShift AI llm-d — Distributed vLLM Serving with Intelligent Routing',
  tagline: 'llm-d brings disaggregated, KV-aware distributed inference to OpenShift — as a Technology Preview you should pilot carefully.',
  heroEyebrow: 'llm-d on OpenShift AI',
  painIntro: 'Scaling vLLM beyond a single replica for long contexts and high load needs intelligent routing and disaggregation. llm-d provides that on OpenShift — but it is Technology Preview and needs careful piloting.',
  heroVariant:
    'We help you pilot and operate llm-d on Red Hat OpenShift AI: distributed vLLM serving with intelligent, KV-cache-aware routing for multi-turn and long-context workloads, prefill/decode disaggregation, deployment through the KServe LLMInference CRD with unified configuration, and service-mesh routing between workers with pre-built dashboards. We treat it as Technology Preview — piloting on representative traffic, measuring the gain over single-replica vLLM, and keeping a fallback — rather than assuming production GA.',
  faqs: k8sTechFaqs('llm-d', 'We help you pilot llm-d distributed vLLM serving on OpenShift AI with intelligent KV-aware routing and prefill/decode disaggregation via KServe, treating it as Technology Preview.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_OPENSHIFT_LINK, K8S_VLLM_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_KSERVE_LINK, K8S_INFERENCE_HUB_LINK,
      { label: 'NVIDIA Dynamo support', href: '/kubernetes-nvidia-dynamo-job-support/' },
      { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
      EXISTING.vllmInference, EXISTING.llm,
    ],
  }),
});

// ─── OPENSHIFT AI vLLM + KServe ─────────────────────────────────────────────────

export const openshiftAiVllmKserve: LandingPageConfig = k8sTechPage({
  slug: 'openshift-ai-vllm-kserve-job-support',
  title: 'OpenShift AI vLLM & KServe Job Support — Governed Model Serving on OpenShift',
  description:
    'Real-time support for vLLM and KServe on Red Hat OpenShift AI: LLMInferenceService/InferenceService, vLLM runtime tuning, autoscaling, canary rollouts, and enterprise governance for model serving.',
  keywords: ['OpenShift vLLM', 'OpenShift KServe', 'LLMInferenceService OpenShift', 'OpenShift model serving', 'vLLM KServe governance'],
  h1: 'OpenShift AI vLLM & KServe — Standard, Governed LLM Serving',
  tagline: 'Serve LLMs on OpenShift with KServe and vLLM, with the governance, autoscaling, and rollout safety enterprises require.',
  heroEyebrow: 'vLLM & KServe on OpenShift',
  painIntro: 'Enterprises need model serving that is standard, governed, and safe to update — not bespoke per team. KServe + vLLM on OpenShift provides that if configured well.',
  heroVariant:
    'We help you serve LLMs on Red Hat OpenShift AI with KServe and vLLM: the LLMInferenceService custom resource for LLMs and InferenceService for classic models, vLLM runtime tuning (KV cache, memory, parallelism), autoscaling and scale-to-zero, canary/blue-green rollouts for safe model updates, and integration with OpenShift RBAC, pipelines, and observability. The result is a governed serving platform teams can share without reinventing it.',
  faqs: k8sTechFaqs('OpenShift vLLM & KServe', 'We help you serve LLMs on OpenShift AI with KServe LLMInferenceService and vLLM, with tuned runtime, autoscaling, canary rollouts, and enterprise governance.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_KSERVE_LINK, K8S_VLLM_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_OPENSHIFT_LINK, K8S_INFERENCE_HUB_LINK, K8S_SRE_LINK,
      { label: 'OpenShift AI llm-d support', href: '/openshift-ai-llm-d-job-support/' },
      EXISTING.vllmInference, EXISTING.mlops,
    ],
  }),
});

// ─── OPENSHIFT AI GPU ──────────────────────────────────────────────────────────

export const openshiftAiGpu: LandingPageConfig = k8sTechPage({
  slug: 'openshift-ai-gpu-job-support',
  title: 'OpenShift AI GPU Job Support — GPU Operator, MIG & Scheduling on OpenShift',
  description:
    'Real-time GPU support on Red Hat OpenShift AI: NVIDIA GPU Operator, Node Feature Discovery, MIG, time-slicing, DRA, scheduling, and fixing Pending GPU Pods on OpenShift.',
  keywords: ['OpenShift GPU Operator', 'OpenShift MIG', 'OpenShift GPU scheduling', 'Node Feature Discovery GPU', 'OpenShift GPU Pending'],
  h1: 'OpenShift AI GPU — Operator, MIG, and Scheduling Done Right on OpenShift',
  tagline: 'The GPU layer on OpenShift: GPU Operator, Node Feature Discovery, MIG, time-slicing, and reliable scheduling.',
  heroEyebrow: 'GPU on OpenShift AI',
  painIntro: 'GPU on OpenShift means the NVIDIA GPU Operator, Node Feature Discovery, entitlement/driver setup, and MIG or time-slicing — any of which can leave Pods Pending or GPUs underused.',
  heroVariant:
    'We help you set up GPUs on Red Hat OpenShift AI: the NVIDIA GPU Operator with Node Feature Discovery, driver and entitlement configuration, MIG partitioning and time-slicing to share GPUs across small models, DRA for flexible allocation, scheduling and taints/tolerations, and DCGM metrics. We diagnose Pending GPU Pods and underutilisation from events and fix the real cause so training and inference land on the right GPUs and stay busy.',
  faqs: k8sTechFaqs('OpenShift GPU', 'We help you configure the NVIDIA GPU Operator, Node Feature Discovery, MIG/time-slicing, DRA, and scheduling on OpenShift, and fix Pending GPU Pods.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_GPU_LINK, K8S_GPU_SCHED_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_OPENSHIFT_LINK, K8S_INFERENCE_HUB_LINK, K8S_FINOPS_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
    ],
  }),
});

// ─── OPENSHIFT AI MCP ──────────────────────────────────────────────────────────

export const openshiftAiMcp: LandingPageConfig = k8sTechPage({
  slug: 'openshift-ai-mcp-job-support',
  title: 'OpenShift AI MCP Job Support — Secure Tool Servers & Gateways on OpenShift',
  description:
    'Real-time support for MCP on Red Hat OpenShift AI: deploying MCP servers and gateways, OpenShift RBAC and OAuth, network policy, Llama Stack integration, and auditing agent-to-tool access in regulated environments.',
  keywords: ['OpenShift MCP', 'MCP server OpenShift', 'MCP gateway OpenShift', 'Llama Stack MCP', 'OpenShift agent tools'],
  h1: 'OpenShift AI MCP — Govern Agent Tool Access on Red Hat OpenShift',
  tagline: 'Run MCP tool servers and gateways on OpenShift with enterprise RBAC, OAuth, network policy, and audit.',
  heroEyebrow: 'MCP on OpenShift AI',
  painIntro: 'In regulated OpenShift environments, agent-to-tool access over MCP must be authenticated, authorized, network-restricted, and fully audited — not best-effort.',
  heroVariant:
    'We help you run MCP on Red Hat OpenShift AI: deploying MCP tool servers and gateways with OpenShift OAuth and RBAC, per-agent authorization, network policy and egress control, rate limiting, integration with the Llama Stack Operator where you use it, and audit of every tool call. This is where regulated enterprises need agent tooling to be governed and provable — we build it to that bar.',
  faqs: k8sTechFaqs('OpenShift MCP', 'We help you run MCP servers and gateways on OpenShift with OAuth/RBAC, per-agent authorization, network policy, and full tool-call auditing for regulated environments.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_MCP_SERVER_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_OPENSHIFT_LINK, K8S_AGENTIC_HUB_LINK,
      { label: 'MCP gateway support', href: '/kubernetes-mcp-gateway-job-support/' },
      EXISTING.mcpServer, EXISTING.mcpSecurity,
    ],
  }),
});

// ─── ON-PREMISES AI INFRASTRUCTURE ──────────────────────────────────────────────

export const onPremisesAiInfra: LandingPageConfig = k8sPage({
  slug: 'on-premises-ai-infrastructure-job-support',
  title: 'On-Premises AI Infrastructure Job Support — Private GPU Clusters & Hybrid',
  description:
    'Real-time job support for on-premises AI infrastructure on Kubernetes: private GPU clusters, bare-metal and OpenStack, DGX, vLLM/KServe serving, hybrid architecture, and keeping data and models in your own datacenter.',
  keywords: [
    'on-premises AI infrastructure', 'private GPU cluster Kubernetes', 'on-prem LLM serving', 'DGX Kubernetes',
    'bare-metal AI Kubernetes', 'hybrid AI infrastructure', 'self-hosted AI',
  ],
  h1: 'On-Premises AI Infrastructure Job Support — Own Your AI Stack End to End',
  tagline:
    'Private GPU clusters, bare-metal Kubernetes, and hybrid architecture for teams that need AI to run in their own datacenter — for cost, control, or compliance.',
  heroEyebrow: 'On-Premises & Hybrid AI',
  painIntro:
    'Cloud GPU cost, data-sovereignty rules, or latency can all push AI on-prem. But running production LLM serving and agents on your own GPU cluster is a serious undertaking — hardware, drivers, networking, storage, and the full serving stack.',
  heroVariant:
    'We help you build and operate on-premises AI infrastructure on Kubernetes: private GPU clusters (including DGX and other NVIDIA systems), bare-metal Kubernetes and OpenStack, high-speed networking (NVLink/NVSwitch, InfiniBand/RoCE with NCCL tuning), fast storage for weights and datasets, the NVIDIA GPU Operator, and the full serving stack (vLLM, KServe, Ray, llm-d, NIM). We design hybrid architectures that burst to cloud when needed while keeping sensitive data in your datacenter, and we are honest about where on-prem genuinely beats cloud economics and where it does not.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'When does on-premises AI make sense versus cloud?',
      answer:
        'On-prem makes sense when you have sustained, high GPU utilisation (where owned hardware beats cloud rental), strict data-sovereignty or air-gap requirements, latency needs that favour local inference, or existing datacenter investment. Cloud wins for bursty, early-stage, or variable workloads. Most mature teams end up hybrid — we help you design the split honestly rather than forcing either.',
    },
    {
      question: 'What do you help with on a private GPU cluster?',
      answer:
        'Hardware and topology planning, bare-metal Kubernetes or OpenStack, the NVIDIA GPU Operator and drivers, high-speed interconnect (InfiniBand/RoCE, NVLink) and NCCL tuning, fast storage for model weights, the serving stack (vLLM, KServe, Ray, llm-d, NIM), scheduling (DRA, gang scheduling), observability, and upgrades — plus the reliability and capacity practices to run it like a platform, not a science project.',
    },
    {
      question: 'Can you help with hybrid cloud + on-prem AI?',
      answer:
        'Yes. We design hybrid architectures where sensitive data and steady inference stay on-prem while bursts, experimentation, or specific services use cloud — with consistent tooling (often OpenShift, Rancher, or GitOps across both), workload identity, and data-flow controls that respect residency requirements.',
    },
    {
      question: 'Do you support air-gapped and regulated on-prem AI?',
      answer:
        'Yes. We help with fully disconnected clusters — internal registries, model mirroring, offline operators, and the Red Hat AI Inference Server (vLLM) for air-gapped serving — plus RBAC, audit, and data-residency architecture for regulated sectors. See our air-gapped and sovereign AI pages.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your hardware (or plans), workloads, and constraints (cost, sovereignty, latency). We will help you design or stabilise the platform — same-day.',
    },
  ],
  useCasesSection: {
    title: 'On-Premises AI Work We Help With',
    cases: [
      'Standing up a private GPU cluster (DGX or custom) on bare-metal Kubernetes or OpenStack',
      'High-speed interconnect (InfiniBand/RoCE, NVLink) and NCCL tuning for distributed workloads',
      'Running vLLM, KServe, Ray, llm-d, and NIM on your own hardware',
      'Designing hybrid cloud + on-prem architecture that respects data residency',
      'Air-gapped/disconnected serving with internal registries and model mirroring',
      'Capacity, reliability, and cost practices to operate it like a real platform',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_OPENSHIFT_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_PRIVATE_AI_LINK, K8S_INFERENCE_HUB_LINK, K8S_GPU_SCHED_LINK, K8S_FINOPS_LINK,
      { label: 'Air-gapped AI on Kubernetes support', href: '/air-gapped-ai-kubernetes-job-support/' },
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      { label: 'Rancher / RKE2 AI support', href: '/rancher-rke2-ai-job-support/' },
      { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
      EXISTING.vllmInference,
    ],
  }),
});

// ─── AIR-GAPPED AI ─────────────────────────────────────────────────────────────

export const airGappedAi: LandingPageConfig = k8sTechPage({
  slug: 'air-gapped-ai-kubernetes-job-support',
  title: 'Air-Gapped AI on Kubernetes Job Support — Disconnected LLM Serving',
  description:
    'Real-time support for air-gapped AI on Kubernetes: disconnected clusters, internal registries and model mirroring, offline operators, Red Hat AI Inference Server (vLLM), and serving LLMs with no internet access.',
  keywords: ['air-gapped AI Kubernetes', 'disconnected LLM serving', 'offline AI cluster', 'air-gapped vLLM', 'model mirroring air-gapped'],
  h1: 'Air-Gapped AI on Kubernetes — Serve Models With No Internet Access',
  tagline: 'Disconnected clusters, mirrored models and images, and offline operators for the most restricted environments.',
  heroEyebrow: 'Air-Gapped AI',
  painIntro: 'Defence, government, and some financial/healthcare workloads run fully disconnected. Every image, model, and operator has to be mirrored inside — and nothing can phone home.',
  heroVariant:
    'We help you run AI in air-gapped (disconnected) Kubernetes clusters: internal container registries, model and dataset mirroring, offline operator and dependency management, the Red Hat AI Inference Server (vLLM) which supports air-gapped deployment and benchmarking, GPU operator setup without internet, and serving (vLLM/KServe) with no external calls. We also handle the update process — bringing new models and patches across the boundary safely — and the audit requirements these environments demand.',
  faqs: k8sTechFaqs('air-gapped AI', 'We help you run disconnected Kubernetes AI with internal registries, model/image mirroring, offline operators, and air-gapped vLLM serving — with a safe update process.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_ONPREM_LINK, K8S_PRIVATE_AI_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_OPENSHIFT_LINK, K8S_SECURITY_LINK, K8S_VLLM_LINK,
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      EXISTING.vllmInference,
    ],
  }),
});

// ─── SOVEREIGN AI ──────────────────────────────────────────────────────────────

export const sovereignAi: LandingPageConfig = k8sTechPage({
  slug: 'sovereign-ai-kubernetes-job-support',
  title: 'Sovereign AI on Kubernetes Job Support — Data Residency & Regional Control',
  description:
    'Real-time support for sovereign AI on Kubernetes: data-residency architecture, regional inference, EU/regional cloud and on-prem deployment, workload identity, audit logging, and model/data isolation — engineering, not legal advice.',
  keywords: ['sovereign AI Kubernetes', 'data residency AI', 'regional inference', 'EU sovereign AI', 'data sovereignty architecture', 'private AI regional'],
  h1: 'Sovereign AI on Kubernetes — Keep Data and Inference Where It Must Stay',
  tagline: 'Data-residency architecture, regional inference, and audit for AI that cannot leave a jurisdiction.',
  heroEyebrow: 'Sovereign AI',
  painIntro: 'Regulated and public-sector workloads often require that data and inference stay within a country or region. Meeting that is an architecture problem — regional deployment, data-flow control, and audit.',
  heroVariant:
    'We help you architect sovereign AI on Kubernetes: keeping data and inference within a required jurisdiction via regional cloud regions or on-prem/EU clusters, data-residency-aware data flows, private endpoints so traffic never leaves the boundary, workload identity and model/data isolation, and audit logging that proves where data went. We explain the engineering implications of data residency, the EU AI Act context, and GDPR — focusing on architecture (regional inference, private endpoints, isolation, audit) rather than giving legal conclusions, which are for your counsel.',
  faqs: k8sTechFaqs('sovereign AI', 'We help you keep data and inference within a required jurisdiction via regional/on-prem deployment, data-flow control, isolation, and audit — engineering implications, not legal advice.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_PRIVATE_AI_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_ONPREM_LINK, K8S_OPENSHIFT_LINK,
      { label: 'Air-gapped AI on Kubernetes support', href: '/air-gapped-ai-kubernetes-job-support/' },
      K8S_EUROPE_LINK,
      { label: 'AKS private AI support', href: '/aks-private-ai-job-support/' },
    ],
  }),
});

// ─── PRIVATE AI ────────────────────────────────────────────────────────────────

export const privateAiKubernetes: LandingPageConfig = k8sPage({
  slug: 'private-ai-kubernetes-job-support',
  title: 'Private AI on Kubernetes Job Support — Self-Hosted LLMs, Your Data, Your Control',
  description:
    'Real-time job support for private AI on Kubernetes: self-hosted open-weight LLMs with vLLM/KServe, private RAG over your own data, no data leaving your boundary, workload identity, and hybrid/on-prem deployment.',
  keywords: [
    'private AI Kubernetes', 'self-hosted LLM', 'private RAG', 'open weight model serving', 'private GPT alternative',
    'enterprise private AI', 'data never leaves',
  ],
  h1: 'Private AI on Kubernetes — Self-Hosted Models and RAG Over Your Own Data',
  tagline:
    'Run open-weight models and private RAG on your own cluster so sensitive data and prompts never leave your boundary.',
  heroEyebrow: 'Private AI on Kubernetes',
  painIntro:
    'Sending proprietary data and prompts to a third-party API is a non-starter for many teams. Private AI — self-hosted models and RAG on your own Kubernetes — keeps everything inside your boundary, but someone has to build and run it.',
  heroVariant:
    'We help you build private AI on Kubernetes: serving open-weight models (Llama, Mistral, Qwen and others) with vLLM or KServe on your GPUs, private RAG over your own documents with your own vector store, embeddings that never leave your environment, workload identity and secret isolation, and the observability and cost controls to run it sustainably. Deploy on-prem, in your own cloud account, or hybrid — the point is that sensitive data, prompts, and outputs stay under your control. We help you match model size and hardware to real quality and latency needs rather than over-provisioning.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is private AI on Kubernetes?',
      answer:
        'Running AI — model inference and often RAG over your own data — inside your own boundary (on-prem, your cloud account, or hybrid) so proprietary data, prompts, and outputs never go to a third-party API. On Kubernetes that means serving open-weight models with vLLM/KServe on your GPUs, a private vector store, and your own identity, security, and observability around it.',
    },
    {
      question: 'Which models and serving stack do you use for private AI?',
      answer:
        'Open-weight models such as Llama, Mistral, Qwen, and others served with vLLM or KServe, sized to your quality and latency needs. For private RAG we help you choose embeddings and a vector store (pgvector, Milvus, Qdrant, OpenSearch) that run inside your boundary. We match model size to hardware so you are not paying for GPUs you do not need.',
    },
    {
      question: 'How do you guarantee data does not leave the boundary?',
      answer:
        'Network policy and egress control so inference and embedding traffic cannot reach the public internet, private endpoints for any managed components, secret isolation, and workload identity. We design the data flows explicitly and can add audit logging so you can prove nothing left.',
    },
    {
      question: 'Can private AI be hybrid?',
      answer:
        'Yes. Many teams keep sensitive inference and data private while using cloud for bursts or non-sensitive workloads. We design the split so the sensitive path stays private and the rest scales economically, with consistent tooling across both.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your data-sensitivity needs, target models, and hardware/cloud. We will help you design or stabilise a private AI platform that meets your control and latency requirements — same-day.',
    },
  ],
  useCasesSection: {
    title: 'Private AI Work We Help With',
    cases: [
      'Serving open-weight LLMs (Llama, Mistral, Qwen) with vLLM/KServe on your own GPUs',
      'Private RAG over your documents with an in-boundary vector store and embeddings',
      'Network policy and egress control so no data or prompt leaves your boundary',
      'Workload identity, secret isolation, and audit for sensitive AI',
      'Right-sizing models and hardware to real quality and latency needs',
      'Hybrid designs that keep the sensitive path private while scaling the rest',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_VLLM_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_ONPREM_LINK, K8S_OPENSHIFT_LINK, K8S_SECURITY_LINK, K8S_KSERVE_LINK,
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      { label: 'Air-gapped AI on Kubernetes support', href: '/air-gapped-ai-kubernetes-job-support/' },
      { label: 'AKS private AI support', href: '/aks-private-ai-job-support/' },
      EXISTING.rag, EXISTING.vectorDb, EXISTING.huggingFace,
    ],
  }),
});

// ─── RANCHER / RKE2 ─────────────────────────────────────────────────────────────

export const rancherRke2Ai: LandingPageConfig = k8sTechPage({
  slug: 'rancher-rke2-ai-job-support',
  title: 'Rancher / RKE2 AI Job Support — SUSE AI, Edge & Multi-Cluster GPU',
  description:
    'Real-time support for AI on Rancher and RKE2: SUSE AI, multi-cluster GPU management, edge inference, the NVIDIA GPU Operator on RKE2, and vLLM/KServe serving across distributed clusters.',
  keywords: ['Rancher AI', 'RKE2 GPU', 'SUSE AI', 'multi-cluster GPU Kubernetes', 'edge AI Rancher', 'RKE2 vLLM'],
  h1: 'Rancher / RKE2 AI — Multi-Cluster and Edge GPU Serving',
  tagline: 'Run AI across many clusters and edge sites with Rancher/RKE2 and SUSE AI.',
  heroEyebrow: 'Rancher / RKE2 AI',
  painIntro: 'Teams standardised on Rancher/RKE2 (or SUSE) need AI serving and GPU management that fit their fleet and edge model — not a hyperscaler-only approach.',
  heroVariant:
    'We help you run AI on Rancher and RKE2: multi-cluster GPU management with Rancher, the NVIDIA GPU Operator on RKE2, SUSE AI building blocks, edge inference on constrained sites, and vLLM/KServe serving across distributed clusters with consistent policy and observability. This suits manufacturing, telco, retail edge, and sovereign deployments where a lightweight, fleet-friendly Kubernetes is the standard.',
  faqs: k8sTechFaqs('Rancher/RKE2 AI', 'We help you run AI on Rancher/RKE2 and SUSE AI with multi-cluster GPU management, the GPU Operator on RKE2, edge inference, and vLLM/KServe serving.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_GPU_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_ONPREM_LINK, K8S_PRIVATE_AI_LINK,
      { label: 'Edge AI on Kubernetes support', href: '/kubernetes-edge-ai-job-support/' },
      { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
    ],
  }),
});

// ─── BARE-METAL GPU ─────────────────────────────────────────────────────────────

export const bareMetalGpu: LandingPageConfig = k8sTechPage({
  slug: 'bare-metal-gpu-kubernetes-job-support',
  title: 'Bare-Metal GPU Kubernetes Job Support — Drivers, Interconnect & Performance',
  description:
    'Real-time support for bare-metal GPU Kubernetes: cluster provisioning, NVIDIA drivers and GPU Operator, InfiniBand/RoCE and NCCL, NVLink/NVSwitch topology, storage for weights, and squeezing full performance from owned GPUs.',
  keywords: ['bare-metal GPU Kubernetes', 'bare metal AI cluster', 'InfiniBand NCCL Kubernetes', 'NVLink NVSwitch', 'GPU driver Kubernetes', 'DGX Kubernetes'],
  h1: 'Bare-Metal GPU Kubernetes — Full Performance From Hardware You Own',
  tagline: 'Drivers, interconnect, topology, and storage tuned so owned GPUs deliver their full throughput.',
  heroEyebrow: 'Bare-Metal GPU Kubernetes',
  painIntro: 'Owned GPUs only pay off at high utilisation and full performance — and that depends on drivers, interconnect (InfiniBand/RoCE, NVLink), NCCL tuning, and storage being exactly right.',
  heroVariant:
    'We help you run Kubernetes on bare-metal GPU hardware: cluster provisioning (kubeadm, RKE2, OpenShift, or Cluster API), NVIDIA driver and GPU Operator setup, high-speed interconnect (InfiniBand/RoCE with correct NCCL configuration, NVLink/NVSwitch topology), fast storage for model weights and datasets, topology-aware scheduling, and DCGM metrics. For distributed training and multi-node inference we tune the network path so you actually get the interconnect bandwidth you paid for — the single most common cause of disappointing bare-metal GPU performance.',
  faqs: k8sTechFaqs('bare-metal GPU Kubernetes', 'We help you provision bare-metal GPU clusters, configure drivers/GPU Operator, tune InfiniBand/RoCE/NCCL and NVLink topology, and get full performance from owned GPUs.'),
  relatedLinks: relatedLinks({
    geoLinks: geoEU,
    techLinks: [K8S_GPU_LINK, K8S_GPU_SCHED_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_ONPREM_LINK, K8S_INFERENCE_HUB_LINK, K8S_FINOPS_LINK,
      { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
      { label: 'CUDA error troubleshooting', href: '/kubernetes-cuda-error-troubleshooting/' },
    ],
  }),
});

export const kubernetesOnpremPages: LandingPageConfig[] = [
  openshiftAiHub,
  openshiftAiLlmD,
  openshiftAiVllmKserve,
  openshiftAiGpu,
  openshiftAiMcp,
  onPremisesAiInfra,
  airGappedAi,
  sovereignAi,
  privateAiKubernetes,
  rancherRke2Ai,
  bareMetalGpu,
];
