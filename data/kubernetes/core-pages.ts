import type { LandingPageConfig } from '../landing-pages';
import {
  k8sPage,
  k8sTechPage,
  relatedLinks,
  jobSupportHighlights,
  interviewHighlights,
  marketingHighlights,
  k8sInterviewFaqs,
  k8sMarketingFaqs,
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
  K8S_AGENT_RUNTIME_LINK,
  K8S_AGENT_SANDBOX_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_MCP_GATEWAY_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_VLLM_LINK,
  K8S_KSERVE_LINK,
  K8S_DYNAMO_LINK,
  K8S_GPU_LINK,
  K8S_GPU_SCHED_LINK,
  K8S_OPENSHIFT_LINK,
  K8S_ONPREM_LINK,
  K8S_PRIVATE_AI_LINK,
  K8S_EUROPE_LINK,
  K8S_USA_LINK,
  EKS_AGENTIC_LINK,
  AKS_AGENTIC_LINK,
  GKE_AGENTIC_LINK,
} from './shared';

// ─── GLOBAL MASTER HUB ───────────────────────────────────────────────────────

export const kubernetesAiHub: LandingPageConfig = k8sPage({
  slug: 'kubernetes-ai-job-support',
  title: 'Kubernetes AI Job Support — Agentic AI, LLM Inference, GPU & Production Support',
  description:
    'Real-time job support, production incident help, and interview support for running production AI and autonomous agents on Kubernetes — agentic AI, LLM inference (vLLM, KServe, Dynamo), GPU scheduling, MCP, AI SRE, security & FinOps. EKS, AKS, GKE, OpenShift & on-prem. Global.',
  keywords: [
    'Kubernetes AI job support', 'Kubernetes agentic AI support', 'LLM inference Kubernetes support',
    'GPU Kubernetes job support', 'Kubernetes production AI support', 'vLLM Kubernetes support',
    'KServe job support', 'AI infrastructure job support', 'Kubernetes MLOps support',
    'Kubernetes AI SRE support',
  ],
  h1: 'Kubernetes AI Job Support — Production AI, Agentic Systems, LLM Inference & GPU Infrastructure',
  tagline:
    'One hub for real-time job support, production incident help, and interview assistance for operating production AI and autonomous agents on Kubernetes — across agentic AI, GPU/inference, cloud providers, on-prem, industries, and countries.',
  heroEyebrow: 'Global Kubernetes AI Infrastructure Hub — Updated October 2026',
  painIntro:
    'GPU Pods stuck Pending, a vLLM server OOMKilled under load, time-to-first-token blowing past SLA, an agent stuck in a loop burning GPU and tokens, an MCP server returning authorization errors, or a Kubernetes AI platform interview you are not ready for? You need an experienced AI-infrastructure engineer beside you — not another forum thread.',
  heroVariant:
    'Running AI in production on Kubernetes is a different discipline from "deploying a container". It means GPU scheduling and Dynamic Resource Allocation, gang scheduling for distributed training and multi-node inference, serving LLMs with vLLM, KServe, Ray Serve, NVIDIA Dynamo, SGLang, TensorRT-LLM and NIM, autoscaling and scale-to-zero around cold starts, isolating long-running agents and tool execution, securing MCP servers and agent identity, and proving that a healthy Pod actually means a healthy AI application. This hub connects you to in-house experts across the full stack — Kubernetes v1.37 scheduling, GPU/NVIDIA operators, inference platforms, agent runtimes and sandboxes, MCP, AI observability, AI security, and FinOps — on EKS, AKS, GKE, OpenShift, and bare-metal/on-prem clusters. From daily job support to emergency production fixes, live interview guidance, and profile positioning — start from here.',
  geoLine:
    'Supporting Kubernetes AI and platform-engineering professionals across USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Denmark, Finland, Norway, Belgium, Austria, Spain, Portugal, Australia, New Zealand, Singapore, Hong Kong, UAE, Saudi Arabia, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours — and 24/7 for production incidents.',
  techSnippet:
    'We cover Kubernetes v1.37 scheduling (DRA, gang scheduling/PodGroup in Beta, CompositePodGroup, in-place pod resize), the NVIDIA GPU Operator & MIG, KServe, vLLM, Ray Serve, NVIDIA Dynamo, SGLang, TensorRT-LLM, NIM, KEDA, Gateway/inference gateways, Istio, Prometheus, Grafana, OpenTelemetry, Argo, Kueue, agent runtimes, and MCP — current through October 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is Kubernetes AI job support?',
      answer:
        'It is real-time, hands-on help from experienced platform and AI-infrastructure engineers during your working hours — on your actual cluster. We help with LLM inference serving, GPU scheduling and Dynamic Resource Allocation, agent runtimes and sandboxes, MCP servers and gateways, autoscaling and scale-to-zero, AI observability, AI security, and cost/FinOps. It is delivered live, confidentially, and same-day where needed, anywhere in the world.',
    },
    {
      question: 'What does this cluster cover that generic Kubernetes support does not?',
      answer:
        'The focus is operating production AI and autonomous agents — not "what is Kubernetes". That means GPU and accelerator scheduling (DRA, MIG, topology-aware placement, gang scheduling for multi-node inference and training), LLM-serving platforms (vLLM, KServe/LLMInferenceService, Ray Serve, NVIDIA Dynamo with disaggregated prefill/decode and KV-aware routing), agent execution isolation and sandboxes, MCP security, inference-specific observability (TTFT, TPOT, tokens/sec, KV-cache utilisation), and the FinOps of idle GPUs and cold starts.',
    },
    {
      question: 'Do you help with live production AI incidents on Kubernetes?',
      answer:
        'Yes. We provide dedicated Kubernetes AI production support — GPU Pods Pending, CUDA and OOMKilled errors, device-plugin failures, vLLM OOM and KV-cache exhaustion, high TTFT, inference timeouts, model-loading failures, autoscaling failures, agent loops, MCP failures, and RAG/vector-DB latency — with an engineer on the call. See our Kubernetes AI production support page.',
    },
    {
      question: 'Which clouds and distributions do you support?',
      answer:
        'Amazon EKS, Azure AKS, Google GKE, Red Hat OpenShift / OpenShift AI, Rancher/RKE2, SUSE, VMware Tanzu, and bare-metal / on-prem Kubernetes — including air-gapped, sovereign, and private-AI deployments. We advise honestly on when a managed agent runtime or managed inference service is a better fit than self-hosting on Kubernetes.',
    },
    {
      question: 'Is your content current with the latest Kubernetes and AI infra releases?',
      answer:
        'Yes. This cluster reflects the verified ecosystem state through September/October 2026 — Kubernetes v1.37 "Garhwal" (DRA extended-resource support GA; Workload/PodGroup gang scheduling and Workload-Aware Preemption in Beta and disabled by default; the new CompositePodGroup API; in-place pod resize), NVIDIA Dynamo with its Kubernetes Operator, GKE Inference Gateway GA and GKE Agent Sandbox, KServe LLMInferenceService, and OpenShift AI with llm-d. We verify version-sensitive status before advising and never assume GA where a feature is Beta or preview.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your cluster and cloud, your situation (job support, production incident, interview, or profile), and your timeline. We match you with the right expert — usually the same day. Every engagement is confidential and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Kubernetes AI Professionals With',
    cases: [
      'A GPU Pod stuck in Pending for a model you need to ship today — no allocatable GPUs, taints/tolerations, DRA ResourceClaim, or node-affinity issue you cannot pin down',
      'A vLLM or KServe inference server OOMKilled or hitting KV-cache limits under real traffic, with TTFT climbing past SLA',
      'A multi-node inference or training job that deadlocks because Pods schedule partially — a gang-scheduling / PodGroup problem',
      'A long-running agent that loops, leaks memory across sessions, or escapes its intended tool and network boundaries',
      'An MCP server failing authorization, or an agent platform where you cannot tell which tool call caused the incident',
      'A Kubernetes AI / platform-engineering interview in a few days — GPU scheduling, inference system design, or agent-platform security you do not feel ready for',
    ],
  },
  proxySection: {
    title: 'Kubernetes AI Interview & Candidate Marketing Support',
    intro:
      'Getting into and moving up in AI-infrastructure roles takes more than skill — it takes interview readiness and a profile recruiters actually find. We support both sides: live proxy interview assistance during your real interview, and candidate marketing to generate the calls.',
    points: [
      'Live, discreet guidance during Kubernetes, GPU, inference, and agent-platform interviews',
      'System-design coverage: production inference platforms, multi-agent systems, GPU capacity and cost models',
      'Profile positioning around the exact keywords AI-platform recruiters and ATS filters screen for',
      'Active candidate marketing and recruiter outreach to build a real interview pipeline',
      'End-to-end: get the interview, clear it, then keep the role with real-time job support',
    ],
  },
  bottomCTAHeading: 'Need Real-Time Kubernetes AI Job Support or Interview Help Right Now?',
  bottomCTABody:
    'In-house Kubernetes, GPU, inference, and agent-platform experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENTIC_HUB_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      // Operational sub-hubs
      K8S_SRE_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK, K8S_PROFILE_LINK, K8S_MARKETING_LINK,
      // Agentic + MCP
      K8S_AGENT_RUNTIME_LINK, K8S_AGENT_SANDBOX_LINK, K8S_MCP_SERVER_LINK, K8S_MCP_GATEWAY_LINK,
      // Inference / GPU
      K8S_VLLM_LINK, K8S_KSERVE_LINK, K8S_DYNAMO_LINK, K8S_GPU_LINK, K8S_GPU_SCHED_LINK,
      // Cloud + on-prem
      EKS_AGENTIC_LINK, AKS_AGENTIC_LINK, GKE_AGENTIC_LINK, K8S_OPENSHIFT_LINK, K8S_ONPREM_LINK, K8S_PRIVATE_AI_LINK,
      // Bridge into existing authority clusters
      EXISTING.kubernetesGuide, EXISTING.agenticAi, EXISTING.vllmInference, EXISTING.mcpServer,
      EXISTING.awsAiMl, EXISTING.azureAiMl, EXISTING.aksAiMl, EXISTING.rag, EXISTING.llm,
      EXISTING.mlops, EXISTING.aiPlatformEngineer, EXISTING.aimlProduction, EXISTING.huggingFace,
    ],
  }),
});

// ─── PRODUCTION SUPPORT HUB ────────────────────────────────────────────────────

export const kubernetesAiProductionSupport: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-production-support',
  title: 'Kubernetes AI Production Support — GPU, Inference & Agent Incident Firefighting',
  description:
    'Real-time Kubernetes AI production support: fix GPU Pods Pending, OOMKilled/CUDA crashes, vLLM OOM, high TTFT, model-loading failures, autoscaling failures, agent loops, and MCP errors with an engineer on the call. Same-day, 24/7 for incidents.',
  keywords: [
    'Kubernetes AI production support', 'GPU Pod Pending fix', 'vLLM OOM Kubernetes',
    'Kubernetes inference incident support', 'KServe production support', 'Kubernetes GPU incident',
    'LLM serving production support', 'agent platform incident support', 'Kubernetes AI firefighting',
  ],
  h1: 'Kubernetes AI Production Support — Fix Live GPU, Inference & Agent Incidents Fast',
  tagline:
    'When a production AI system breaks on Kubernetes, you need an expert on the call now — not a support-ticket queue. Real-time help for GPU, inference, autoscaling, and agent incidents.',
  heroEyebrow: 'Kubernetes AI Production Firefighting — 24/7',
  painIntro:
    'A GPU Pod that will not schedule before a release? vLLM OOMKilled under load? TTFT suddenly 10× worse? A model that will not finish loading from object storage? An agent looping and draining a GPU node? These incidents are high-pressure and hard to debug alone.',
  heroVariant:
    'Production AI on Kubernetes fails in specific, recognisable ways — unschedulable GPU Pods (no allocatable GPU, taints, DRA ResourceClaim not satisfied), device-plugin and NVIDIA driver mismatches, CUDA and OOMKilled crashes, KV-cache exhaustion, cold-start latency and readiness-probe timeouts on multi-gigabyte model loads, HPA/KEDA policies that never scale, partial scheduling of multi-node jobs, runaway agent loops, and MCP authorization failures. Our engineers work the incident live with you — reading Pod events, scheduler and device-plugin logs, DCGM GPU metrics, and Prometheus/OpenTelemetry traces — to find the real root cause, stabilise the system, and ship a durable fix with the guardrail that prevents a repeat.',
  faqs: [
    {
      question: 'What Kubernetes AI production issues can you help with?',
      answer:
        'GPU Pods stuck Pending, CUDA and OOMKilled errors, NVIDIA device-plugin and driver problems, vLLM/KServe out-of-memory and KV-cache exhaustion, high time-to-first-token and inference timeouts, model-loading failures, HPA/KEDA/scale-to-zero autoscaling failures, partial gang scheduling of distributed jobs, agent loops, MCP server failures, and RAG/vector-DB latency. We work the incident live until the system is stable, then harden it.',
    },
    {
      question: 'How fast can you join a live incident?',
      answer:
        'Usually within the same working session. Message us on WhatsApp with the symptom, your cluster/cloud, and what changed recently; we join, triage from events/logs/metrics, stabilise, and then apply the durable fix. We stay on until the system is healthy.',
    },
    {
      question: 'Do you change things in our cluster directly?',
      answer:
        'Only with your explicit direction and within the access you provide. We can pair with your engineer who holds the keyboard, review and author manifests/Helm changes, and guide kubectl steps. We prioritise protecting the running workload and controlling blast radius before any change.',
    },
    {
      question: 'Which platforms and clouds do you cover for incidents?',
      answer:
        'EKS, AKS, GKE, OpenShift/OpenShift AI, Rancher/RKE2, and bare-metal/on-prem Kubernetes — with the NVIDIA GPU Operator, KServe, vLLM, Ray, NVIDIA Dynamo, SGLang, TensorRT-LLM, NIM, KEDA, Gateway/inference gateways, Istio, Prometheus, Grafana, and OpenTelemetry.',
    },
    {
      question: 'Can you help prevent incidents, not just fix them?',
      answer:
        'Yes. After stabilising we help you add the right SLOs and alerts (TTFT/TPOT, GPU memory, KV-cache utilisation, queue depth), resource requests/limits, admission policies, PodDisruptionBudgets, and runbooks so the same class of failure does not page you again. See our AI SRE & observability hub.',
    },
  ],
  useCasesSection: {
    title: 'Live Incidents We Resolve on Kubernetes',
    cases: [
      'GPU Pod Pending: no allocatable GPU, taint/toleration mismatch, or an unsatisfied DRA ResourceClaim before a deadline',
      'vLLM/KServe OOMKilled or KV-cache exhaustion collapsing throughput under real concurrency',
      'TTFT and tail latency spiking after a traffic, model, or config change',
      'A model Pod failing readiness because the weights take longer to load than the probe allows',
      'HPA/KEDA not scaling on the right signal, or scale-to-zero cold starts breaking SLA',
      'An agent workload looping and saturating a GPU node, or an MCP server returning 401/403 to tools',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
    problemLink: K8S_SRE_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_VLLM_LINK, K8S_KSERVE_LINK, K8S_GPU_SCHED_LINK, K8S_AGENTIC_HUB_LINK,
      K8S_MCP_SERVER_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      { label: 'vLLM OOM troubleshooting', href: '/kubernetes-vllm-oom-troubleshooting/' },
      { label: 'High TTFT troubleshooting', href: '/kubernetes-high-ttft-troubleshooting/' },
      EXISTING.aimlProduction, EXISTING.production, EXISTING.vllmInference,
    ],
  }),
});

// ─── AI SRE & OBSERVABILITY HUB ─────────────────────────────────────────────────

export const kubernetesAiSreObservability: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-sre-observability-job-support',
  title: 'Kubernetes AI SRE & Observability Job Support — Trace the Full AI Request Path',
  description:
    'Real-time AI SRE and observability job support for Kubernetes: SLOs for LLM apps, TTFT/TPOT/token metrics, GPU and KV-cache monitoring, OpenTelemetry tracing across agent→LLM→MCP→tool→vector DB→GPU, Prometheus, Grafana, and Datadog. Healthy Pods ≠ healthy AI app.',
  keywords: [
    'Kubernetes AI SRE support', 'AI observability Kubernetes', 'LLM observability support',
    'OpenTelemetry LLM tracing', 'GPU monitoring Kubernetes', 'inference SLO support',
    'AI reliability engineering', 'Prometheus Grafana AI', 'agent observability support',
  ],
  h1: 'Kubernetes AI SRE & Observability — Reliability for Production AI and Agents',
  tagline:
    'A healthy Pod does not mean a healthy AI application. Real-time SRE and observability support to instrument, alert on, and reason about the whole AI request path.',
  heroEyebrow: 'AI SRE & Observability — Kubernetes',
  painIntro:
    'Your Pods are Ready, CPU and memory look fine, and yet answers are slow, wrong, or timing out. The failure is somewhere across the agent, the LLM, the MCP tool call, retrieval, the vector DB, the GPU, or the network — and your dashboards cannot see it.',
  heroVariant:
    'Operating AI reliably on Kubernetes means instrumenting the real request path: User → Agent → Workflow → LLM → MCP → Tool → Retrieval → Vector DB → API → Pod → Node → GPU → Network → Storage. We help you build that with OpenTelemetry traces and GenAI semantic conventions, Prometheus and Grafana (or Datadog, CloudWatch, Azure Monitor, Google Cloud Monitoring), and inference-specific signals — TTFT, TPOT, tokens/sec, queue latency, KV-cache utilisation and hit ratio, GPU utilisation and memory, batch size, concurrency, cold starts, and cost per request/token. Then we define SLOs that reflect user experience, not just Pod health, and the alerts and runbooks that make on-call survivable.',
  faqs: [
    {
      question: 'Why is "healthy Pods" not enough for AI applications?',
      answer:
        'Because Pod and node health say nothing about the AI behaviour: a Ready Pod can still return wrong RAG citations, time out on long generations, exhaust its KV cache, loop an agent, or burn a GPU at 8% utilisation. Reliability for AI means measuring the application-layer and inference-layer signals — latency distribution (TTFT/TPOT), token throughput, retrieval quality, tool-call success, and GPU/KV efficiency — and alerting on those, not just CPU/memory and restarts.',
    },
    {
      question: 'What do you help instrument and monitor?',
      answer:
        'OpenTelemetry tracing across the full agent/LLM/MCP/tool/retrieval path using GenAI semantic conventions; Prometheus metrics for inference servers (vLLM, KServe) and the NVIDIA GPU Operator/DCGM; Grafana dashboards for TTFT, TPOT, tokens/sec, queue depth, KV-cache utilisation, GPU memory and SM utilisation; and integrations with Datadog, CloudWatch, Azure Monitor, and Google Cloud Monitoring where you already run them.',
    },
    {
      question: 'Can you help define SLOs and on-call for AI systems?',
      answer:
        'Yes. We help set SLIs/SLOs that reflect user experience (e.g., p95 TTFT, successful-response rate, retrieval freshness), error budgets, alerting that fires on the right leading indicators, PodDisruptionBudgets and rollout safety for model updates, and blameless-postmortem-ready runbooks for the common AI failure modes.',
    },
    {
      question: 'Do you support agent and multi-agent observability specifically?',
      answer:
        'Yes. Multi-agent systems need action-level auditing — which agent, which tool, which MCP server, which parameters, what cost, and what outcome. We help you capture that as spans and structured events so you can debug loops, runaway cost, and bad tool calls after the fact, and prove what an agent did.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your current stack (inference servers, tracing, metrics backend) and what is hurting — slow answers, blind spots, noisy alerts, or an upcoming reliability review. We will join and work it with you, same-day.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_AGENT_RUNTIME_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_GPU_LINK, K8S_VLLM_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK,
      K8S_AGENT_RUNTIME_LINK, K8S_MCP_SERVER_LINK,
      { label: 'High TTFT troubleshooting', href: '/kubernetes-high-ttft-troubleshooting/' },
      { label: 'GPU underutilization troubleshooting', href: '/kubernetes-gpu-underutilization-troubleshooting/' },
      EXISTING.sre, EXISTING.aimlProduction, EXISTING.mlops,
    ],
  }),
});

// ─── AI SECURITY HUB ───────────────────────────────────────────────────────────

export const kubernetesAiSecurity: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-security-job-support',
  title: 'Kubernetes AI Security Job Support — Agents, MCP, Sandboxes & Workload Identity',
  description:
    'Real-time Kubernetes AI security job support: prompt injection and tool-abuse blast-radius, agent privilege escalation, overprivileged service accounts, RBAC, OPA/Gatekeeper, Kyverno, network egress control, Seccomp/AppArmor, gVisor and Kata sandboxes, and secret isolation for AI workloads.',
  keywords: [
    'Kubernetes AI security support', 'agent security Kubernetes', 'MCP security support',
    'prompt injection containment', 'gVisor Kata Kubernetes', 'OPA Gatekeeper Kyverno AI',
    'agent sandbox security', 'workload identity AI', 'Kubernetes RBAC AI workloads',
  ],
  h1: 'Kubernetes AI Security — Contain Agents, Secure MCP, and Isolate AI Workloads',
  tagline:
    'Kubernetes does not solve application-layer AI risk on its own. Real-time support to contain prompt injection, lock down agent privileges, and isolate tool execution.',
  heroEyebrow: 'AI Security on Kubernetes',
  painIntro:
    'An agent that can be talked into running the wrong tool, a service account with far more RBAC than it needs, code execution that could break out of its container, or an MCP server exposed without proper authorization — AI workloads introduce security problems that a default cluster will not stop.',
  heroVariant:
    'Securing AI on Kubernetes is about controlling blast radius when — not if — a model does something unintended. We help you design least-privilege for agents (scoped RBAC and workload identity, short-lived credentials, no ambient cloud permissions), contain prompt injection and tool abuse so a bad instruction cannot reach a dangerous capability, harden code execution with Seccomp/AppArmor, gVisor, or Kata Containers, enforce policy with OPA/Gatekeeper and Kyverno, restrict network egress for agents and MCP servers, isolate secrets and tenants, and audit every tool and MCP call. We are explicit about the boundary: Kubernetes controls infrastructure blast radius, but it does not by itself stop a model from being manipulated — defence has to span both layers.',
  faqs: [
    {
      question: 'What AI security problems do you help with on Kubernetes?',
      answer:
        'Prompt injection and tool-abuse containment, agent privilege escalation and overprivileged service accounts, code-execution and container-breakout risk, secret exfiltration and network egress control, cross-tenant leakage, model and dependency supply-chain risk, and MCP server authentication/authorization. We design the RBAC, policy, isolation, and auditing that keep an unintended model action from becoming a breach.',
    },
    {
      question: 'Does Kubernetes solve prompt injection?',
      answer:
        'No — and we are clear about that. Prompt injection is an application-layer problem. What Kubernetes and the platform can do is limit what a compromised or manipulated agent can reach: least-privilege RBAC and workload identity, egress restrictions, sandboxed tool execution, and policy enforcement. Defence spans the model/application layer and the infrastructure layer together.',
    },
    {
      question: 'What isolation options do you help choose and implement?',
      answer:
        'For untrusted or agent-generated code we help you evaluate and deploy gVisor and Kata Containers for stronger isolation than default runc, plus Seccomp/AppArmor profiles, rootless and non-root containers, read-only root filesystems, dropped capabilities, and network policies. We match the isolation strength to the threat model so you are neither exposed nor paying for isolation you do not need.',
    },
    {
      question: 'How do you secure MCP servers and agent identity?',
      answer:
        'We help you put MCP servers behind proper authentication and authorization (OAuth/OIDC where appropriate), scope what each agent identity can call, apply rate limits and network policy, and audit every tool invocation. Agent identity is treated as a first-class workload identity with least privilege, not a shared high-privilege credential.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your setup — agent framework, MCP servers, cluster, and cloud — and your concern, whether it is an upcoming security review, a pen-test finding, or an incident. We will assess the blast radius and help you close the gaps, same-day.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENT_SANDBOX_LINK, K8S_MCP_GATEWAY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_RUNTIME_LINK, K8S_MCP_SERVER_LINK,
      K8S_SRE_LINK, K8S_PRIVATE_AI_LINK, K8S_OPENSHIFT_LINK,
      EXISTING.aiAgentSandboxSec, EXISTING.aiAgentPromptInjection, EXISTING.aiAgentContainment,
      EXISTING.aiAgentIdentity, EXISTING.aiAgentNetworkEgress, EXISTING.mcpSecurity,
    ],
  }),
});

// ─── AI FINOPS HUB ───────────────────────────────────────────────────────────

export const kubernetesAiFinops: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-finops-job-support',
  title: 'Kubernetes AI FinOps Job Support — Cut Idle GPU, Cold-Start & Token Cost',
  description:
    'Real-time Kubernetes AI FinOps job support: reclaim idle GPU, scale agents to zero, tune batching and quantization, use Spot/preemptible safely, model-route by cost, and get per-request/per-token cost visibility. Make production AI affordable without breaking SLAs.',
  keywords: [
    'Kubernetes AI FinOps support', 'GPU cost optimization Kubernetes', 'idle GPU reclaim',
    'scale to zero GPU', 'LLM cost optimization', 'Spot GPU Kubernetes', 'token economics',
    'inference cost per request', 'AI cost optimization support',
  ],
  h1: 'Kubernetes AI FinOps — Make Production AI Affordable Without Breaking SLAs',
  tagline:
    'GPUs are the budget. Real-time support to find idle capacity, scale to zero safely, and tune the batching, routing, and scheduling that actually move the bill.',
  heroEyebrow: 'AI FinOps on Kubernetes',
  painIntro:
    'A GPU fleet that sits at single-digit utilisation, agents that hold accelerators while idle, a dev namespace nobody scaled down, or a token bill that grew faster than traffic — AI cost on Kubernetes is mostly wasted GPU time, and it is fixable.',
  heroVariant:
    'Most AI cost on Kubernetes is idle and avoidable. We help you measure where the money goes (GPU utilisation and memory, idle vs busy time, cost per request and per token, cold-start economics, storage and network transfer) and then act on it: bin-packing and topology-aware scheduling, MIG partitioning for small models, scale-to-zero for agents and bursty inference (with cold-start mitigation), suspend/resume for long-running agents, continuous batching and quantization, model routing that sends cheap requests to cheap models, and Spot/preemptible capacity with safe interruption handling. The goal is a lower bill that does not quietly break your latency SLOs — so FinOps and SRE are tuned together, not against each other.',
  faqs: [
    {
      question: 'Where does Kubernetes AI cost actually go?',
      answer:
        'Overwhelmingly to idle GPU time — accelerators reserved but not doing useful work. The other big buckets are oversized requests/limits that prevent bin-packing, agents and endpoints that never scale down, cold-start overhead, redundant computation from poor KV-cache reuse, over-large models for simple requests, and storage/network egress for weights and data. We quantify each before changing anything.',
    },
    {
      question: 'How do you cut GPU cost without hurting latency?',
      answer:
        'By tuning FinOps and SRE together. We improve GPU packing and utilisation (MIG, topology-aware placement, continuous batching), introduce scale-to-zero and suspend/resume where cold starts are acceptable (and mitigate them where they are not), route requests to right-sized models, and use Spot/preemptible with graceful interruption — always watching TTFT/TPOT and success-rate SLOs so savings never come at the cost of user experience.',
    },
    {
      question: 'Can you help with scale-to-zero for agents and inference?',
      answer:
        'Yes. We help you implement scale-to-zero with KEDA/Knative or inference-platform autoscalers, decide which workloads can tolerate cold starts, and reduce cold-start time (model caching, warm pools, faster weight loading) so scaling to zero is actually usable in production rather than a latency landmine.',
    },
    {
      question: 'Do you help attribute cost to teams and workloads?',
      answer:
        'Yes. We help you get per-namespace, per-workload, and per-request/token cost visibility (labels, GPU accounting, and tools like OpenCost or your cloud cost explorer) so you can show owners where the spend is and set budgets and quotas that hold.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your cluster, GPU types, and the biggest cost worry. We will start from utilisation and cost data, find the largest avoidable spend, and work the fixes with you — same-day.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_GPU_SCHED_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_GPU_LINK, K8S_VLLM_LINK, K8S_DYNAMO_LINK, K8S_SRE_LINK,
      { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
      { label: 'GPU underutilization troubleshooting', href: '/kubernetes-gpu-underutilization-troubleshooting/' },
      { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
      EXISTING.mlops, EXISTING.aiPlatformEngineer,
    ],
  }),
});

// ─── INTERVIEW HUB ───────────────────────────────────────────────────────────

export const kubernetesAiInterview: LandingPageConfig = k8sPage({
  slug: 'kubernetes-ai-interview-support',
  title: 'Kubernetes AI Interview Support — Platform, GPU, Inference & Agent System Design',
  description:
    'Real-time proxy interview support for Kubernetes AI and platform-engineering roles: GPU scheduling and DRA, LLM-serving system design, autoscaling, agent-platform security, observability, and coding rounds. Discreet live guidance calibrated to your role and format.',
  keywords: [
    'Kubernetes AI interview support', 'platform engineer proxy interview', 'AI infrastructure interview',
    'GPU scheduling interview', 'LLM serving system design interview', 'Kubernetes proxy interview',
    'MLOps interview support', 'SRE AI interview', 'agent platform interview',
  ],
  h1: 'Kubernetes AI Interview Support — Live Guidance for Platform & AI-Infrastructure Roles',
  tagline:
    'Discreet, real-time expert support during your live Kubernetes AI interview — from GPU scheduling to inference system design to agent-platform security.',
  heroEyebrow: 'Kubernetes AI Proxy Interview Support',
  painIntro:
    'A platform-engineering or AI-infrastructure interview in a few days, with a system-design round on production LLM serving, a scheduling deep-dive, or an incident scenario you have not seen before? Walking in cold is a risk you do not have to take.',
  heroVariant:
    'AI-infrastructure interviews go deep: design a production inference platform to a latency and cost budget; schedule multi-node training/inference with gang scheduling and DRA; choose between vLLM, KServe, Ray Serve, and NVIDIA Dynamo and justify it; contain an agent platform and secure its MCP servers; debug a GPU Pending or TTFT incident live; and defend reliability and FinOps trade-offs. Our in-house experts join your real interview discreetly and guide you through coding, system design, and scenario rounds — calibrated to the exact role, seniority, and company format, after a pre-interview alignment session so the guidance fits your own background.',
  highlights: interviewHighlights,
  faqs: k8sInterviewFaqs('Kubernetes AI and platform-engineering'),
  proxySection: {
    title: 'What the Live Interview Guidance Covers',
    intro:
      'We align to your interview format before the call, then support you in real time across the rounds AI-infrastructure interviews actually use.',
    points: [
      'Inference system design: vLLM/KServe/Dynamo, batching, KV cache, autoscaling, latency and cost budgets',
      'Scheduling deep-dives: GPU/MIG, DRA, gang scheduling, topology-aware placement, Kueue',
      'Agent-platform and MCP security, multi-agent design, and observability scenarios',
      'Incident/troubleshooting rounds: GPU Pending, OOM, high TTFT, autoscaling failures',
      'Coding rounds plus behavioural and reliability trade-off discussions',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_SCHED_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_PROFILE_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_MARKETING_LINK, K8S_AGENTIC_HUB_LINK, K8S_SRE_LINK, K8S_SECURITY_LINK,
      EXISTING.agenticAiProxy, EXISTING.aimlProxy, EXISTING.aiPlatformEngineer, EXISTING.getScheduled,
    ],
  }),
});

// ─── PROFILE POSITIONING ─────────────────────────────────────────────────────

export const kubernetesAiProfilePositioning: LandingPageConfig = k8sPage({
  slug: 'kubernetes-ai-profile-positioning-support',
  title: 'Kubernetes AI Profile Positioning — Resume & LinkedIn for AI-Infrastructure Roles',
  description:
    'Profile positioning for Kubernetes AI and platform-engineering roles: resume and LinkedIn engineered around the keywords recruiters and ATS screen for — GPU scheduling, vLLM/KServe, agent platforms, MLOps/LLMOps, SRE, and measurable production impact.',
  keywords: [
    'Kubernetes AI profile positioning', 'platform engineer resume', 'AI infrastructure resume',
    'LinkedIn optimization platform engineer', 'MLOps resume keywords', 'GPU infrastructure resume',
    'ATS optimization AI infrastructure', 'Kubernetes AI LinkedIn',
  ],
  h1: 'Kubernetes AI Profile Positioning — Get Found for AI-Infrastructure Roles',
  tagline:
    'Your platform and AI-infrastructure experience, positioned around the exact terms recruiters and ATS filters actually search.',
  heroEyebrow: 'Profile Positioning — Kubernetes AI',
  painIntro:
    'Strong platform work but no calls? The resume probably reads like a generic DevOps profile, buries the GPU, inference, and agent-platform impact, and misses the keywords AI-infrastructure recruiters screen for.',
  heroVariant:
    'We rebuild your resume and LinkedIn around what hiring teams actually search — Kubernetes, GPU scheduling and DRA, vLLM/KServe/Dynamo, agent platforms and MCP, MLOps/LLMOps, autoscaling, SRE and reliability, and quantified production impact (latency cut, cost reclaimed, incidents prevented). The result surfaces in recruiter searches, passes ATS screening, and tells a clear seniority story for the Kubernetes AI roles you want — paired, if you like, with candidate marketing and interview support so the pipeline actually converts.',
  highlights: marketingHighlights,
  faqs: k8sMarketingFaqs('Kubernetes AI and platform engineers'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_HUB_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_MARKETING_LINK, K8S_INTERVIEW_LINK, EXISTING.getScheduled, EXISTING.candidateMarketing,
      EXISTING.aiPlatformEngineer, EXISTING.aimlProxy,
    ],
  }),
});

// ─── CANDIDATE MARKETING ─────────────────────────────────────────────────────

export const kubernetesAiCandidateMarketing: LandingPageConfig = k8sPage({
  slug: 'kubernetes-ai-candidate-marketing',
  title: 'Kubernetes AI Candidate Marketing — Build a Real AI-Infrastructure Interview Pipeline',
  description:
    'Candidate marketing for Kubernetes AI and platform-engineering roles: profile engineering, targeted applications, and recruiter outreach so your AI-infrastructure profile reaches hiring managers — then interview and job support to convert and keep the role.',
  keywords: [
    'Kubernetes AI candidate marketing', 'platform engineer candidate marketing', 'AI infrastructure job search',
    'recruiter outreach platform engineer', 'MLOps candidate marketing', 'C2C AI infrastructure',
    'Kubernetes AI job search support',
  ],
  h1: 'Kubernetes AI Candidate Marketing — Get in Front of Hiring Managers',
  tagline:
    'Profile engineering, targeted applications, and recruiter outreach so your AI-infrastructure experience reaches real hiring managers — not an ATS black hole.',
  heroEyebrow: 'Candidate Marketing — Kubernetes AI',
  painIntro:
    'A strong platform background should not sit unseen. If applications disappear into ATS systems and recruiters never call, the problem is usually distribution and positioning, not ability.',
  heroVariant:
    'We run active candidate marketing for Kubernetes AI and platform-engineering professionals: a profile engineered around GPU/inference/agent-platform keywords, targeted applications to roles that fit your level, and direct outreach to hiring managers and staffing firms across product companies, startups, enterprises, and consulting. Once the calls start, we back you with proxy interview assistance and real-time job support so you convert offers and keep the role — contract (C2C, W2, 1099) or full-time.',
  highlights: marketingHighlights,
  faqs: k8sMarketingFaqs('Kubernetes AI and platform engineers'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_PROFILE_LINK, K8S_INTERVIEW_LINK, EXISTING.candidateMarketing, EXISTING.getScheduled,
      EXISTING.aiPlatformEngineer, EXISTING.aimlProxy,
    ],
  }),
});

export const kubernetesCorePages: LandingPageConfig[] = [
  kubernetesAiHub,
  kubernetesAiProductionSupport,
  kubernetesAiSreObservability,
  kubernetesAiSecurity,
  kubernetesAiFinops,
  kubernetesAiInterview,
  kubernetesAiProfilePositioning,
  kubernetesAiCandidateMarketing,
];
