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
  K8S_AGENT_RUNTIME_LINK,
  K8S_AGENT_SANDBOX_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_MCP_GATEWAY_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_VLLM_LINK,
  K8S_GPU_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
  EKS_AGENTIC_LINK,
  AKS_AGENTIC_LINK,
  GKE_AGENTIC_LINK,
} from './shared';

// ─── AGENTIC AI HUB ────────────────────────────────────────────────────────────

export const kubernetesAgenticAiHub: LandingPageConfig = k8sPage({
  slug: 'kubernetes-agentic-ai-job-support',
  title: 'Kubernetes Agentic AI Job Support — Agent Runtimes, Sandboxes, MCP & Multi-Agent',
  description:
    'Real-time job support for running agentic AI on Kubernetes: long-running agents, execution runtimes, session isolation and sandboxes, state and memory, MCP tool servers, multi-agent systems, scale-to-zero, and when a managed agent runtime beats Kubernetes. Global, same-day.',
  keywords: [
    'Kubernetes agentic AI job support', 'agent runtime Kubernetes', 'agent sandbox Kubernetes',
    'multi-agent system Kubernetes', 'agent infrastructure support', 'MCP Kubernetes support',
    'long running agents Kubernetes', 'agent state management', 'agentic AI production support',
  ],
  h1: 'Kubernetes Agentic AI Job Support — Build and Operate Agent Infrastructure',
  tagline:
    'Long-running agents, secure tool execution, and multi-agent systems have different infrastructure needs than request/response services. Real-time support for building and operating them on Kubernetes — with honest advice on when a managed runtime is the better call.',
  heroEyebrow: 'Agentic AI Infrastructure — Kubernetes',
  painIntro:
    'Agents are not stateless web requests. They run for minutes or hours, hold session state and memory, execute arbitrary tools and code, call MCP servers, and occasionally loop or escape their boundaries. Running them well on Kubernetes needs deliberate infrastructure.',
  heroVariant:
    'This hub covers the real infrastructure questions of agentic AI on Kubernetes: how to run long-running and asynchronous agents (Jobs, Deployments, queues, event-driven workers), how to isolate agent sessions and sandbox tool/code execution, how to persist state and memory and support suspend/resume and snapshotting, how to connect agents to tools via MCP securely, how to scale multi-agent systems and scale them to zero when idle, and how to observe and cost-control them. We also give unbiased guidance on the build-vs-buy decision — when a managed agent runtime (AWS Bedrock AgentCore, Microsoft Foundry Agent Service, GKE Agent Sandbox) is the right choice, and when Kubernetes-hosted agent infrastructure genuinely pays off. No forced Kubernetes bias.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What makes agentic AI different to run on Kubernetes?',
      answer:
        'Agents are long-running, stateful, and act on the world. They hold conversation and task state, execute tools and sometimes untrusted code, call MCP servers and external APIs, and can run for a long time or loop. That changes the infrastructure: you need session isolation and sandboxing, state and memory persistence, suspend/resume for idle agents, careful autoscaling (including scale-to-zero), least-privilege identity and egress control, and action-level observability — none of which a default stateless-service setup gives you.',
    },
    {
      question: 'When should I use a managed agent runtime instead of Kubernetes?',
      answer:
        'When you want strong session isolation, fast per-session sandboxing, and suspend/resume without building it yourself, a managed runtime (AWS Bedrock AgentCore, Microsoft Foundry Agent Service, Google GKE Agent Sandbox) is often the faster, safer path — especially early on. Kubernetes-hosted agent infrastructure pays off when you need control over data residency, custom runtimes and GPUs, deep integration with existing clusters, hybrid/on-prem, or cost control at scale. We help you make that call on the merits, not dogma.',
    },
    {
      question: 'Do you help with multi-agent and event-driven agent systems?',
      answer:
        'Yes. We help design multi-agent topologies (orchestrator/worker, planner/executor), asynchronous and event-driven agents backed by queues, concurrency and backpressure control, per-agent identity and isolation, and the observability to debug which agent/tool caused an outcome. We keep the design honest about failure modes — loops, fan-out cost, and partial failures.',
    },
    {
      question: 'How do you handle agent state, memory, and suspend/resume?',
      answer:
        'We help you separate ephemeral session state from durable memory, persist it appropriately (databases, object storage, vector stores), and implement suspend/resume and snapshotting so idle agents do not hold compute. This is also where most of the cost savings live — an idle agent holding a GPU is pure waste.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your agent framework, where it runs today, and what is hurting — isolation, state, cost, reliability, or an upcoming design review. We will work it with you same-day and point you to the right sub-topics (runtime, sandbox, MCP, scale-to-zero, security, observability, cost).',
    },
  ],
  useCasesSection: {
    title: 'Agentic AI Infrastructure We Help With',
    cases: [
      'Running long-running and asynchronous agents reliably without holding GPUs while idle',
      'Isolating agent sessions and sandboxing tool/code execution with gVisor or Kata',
      'Persisting agent state and memory with suspend/resume and snapshotting',
      'Securing agent-to-tool access over MCP with scoped identity and egress control',
      'Scaling multi-agent systems and scaling them to zero when there is no work',
      'Deciding build-vs-buy between a managed agent runtime and Kubernetes-hosted infrastructure',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_AGENT_SANDBOX_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_MCP_SERVER_LINK, K8S_MCP_GATEWAY_LINK, K8S_SECURITY_LINK, K8S_SRE_LINK, K8S_FINOPS_LINK,
      K8S_INFERENCE_HUB_LINK, EKS_AGENTIC_LINK, AKS_AGENTIC_LINK, GKE_AGENTIC_LINK,
      { label: 'Agent state management support', href: '/kubernetes-agent-state-management-support/' },
      { label: 'Multi-agent system support', href: '/kubernetes-multi-agent-system-job-support/' },
      { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
      { label: 'Coding agent infrastructure support', href: '/kubernetes-coding-agent-infrastructure-support/' },
      EXISTING.agenticAi, EXISTING.agenticAiEngineer, EXISTING.mcpServer, EXISTING.awsAiMl, EXISTING.azureAiMl,
    ],
  }),
});

// ─── AGENT RUNTIME ───────────────────────────────────────────────────────────

export const kubernetesAgentRuntime: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-runtime-job-support',
  title: 'Kubernetes Agent Runtime Job Support — Execution, Lifecycle & Isolation',
  description:
    'Real-time support for agent execution runtimes on Kubernetes: long-running and async agents, session lifecycle, per-session isolation, resource limits, timeouts, and graceful suspend/resume — plus when a managed runtime fits better.',
  keywords: [
    'Kubernetes agent runtime support', 'agent execution runtime', 'long running agent Kubernetes',
    'agent session isolation', 'async agent workers', 'agent lifecycle Kubernetes',
  ],
  h1: 'Kubernetes Agent Runtime — Execute and Isolate Long-Running Agents',
  tagline: 'The execution layer for agents: lifecycle, isolation, resource control, and clean suspend/resume.',
  heroEyebrow: 'Agent Runtime — Kubernetes',
  painIntro:
    'Agents that run for minutes or hours, each session needing its own isolation and resource limits, with clean startup, timeout, and teardown — the runtime layer is where reliability and cost are won or lost.',
  heroVariant:
    'We help you design the agent execution runtime on Kubernetes: mapping agent sessions to Pods/Jobs or a sandbox pool, enforcing per-session CPU/GPU/memory limits and timeouts, handling long-running and asynchronous execution with queues and event-driven workers, isolating sessions so one agent cannot affect another, and implementing graceful suspend/resume so idle sessions release compute. We compare this honestly with managed runtimes (AWS Bedrock AgentCore Runtime, Microsoft Foundry Agent Service, GKE Agent Sandbox) so you only build what gives you real control.',
  faqs: k8sTechFaqs('agent runtime', 'We help you run long-running and asynchronous agents with proper session isolation, resource limits, timeouts, and suspend/resume on Kubernetes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENT_SANDBOX_LINK, K8S_MCP_SERVER_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK, K8S_SRE_LINK,
      { label: 'Agent state management support', href: '/kubernetes-agent-state-management-support/' },
      { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
      EKS_AGENTIC_LINK, AKS_AGENTIC_LINK, GKE_AGENTIC_LINK, EXISTING.agenticAi,
    ],
  }),
});

// ─── AGENT SANDBOX ───────────────────────────────────────────────────────────

export const kubernetesAgentSandbox: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-sandbox-job-support',
  title: 'Kubernetes Agent Sandbox Job Support — Secure Code & Tool Execution',
  description:
    'Real-time support for agent sandboxes on Kubernetes: secure code execution with gVisor and Kata Containers, filesystem/network/secret isolation, sandbox lifecycle and pooling, and fast per-session provisioning — with GKE Agent Sandbox and managed options compared.',
  keywords: [
    'Kubernetes agent sandbox support', 'secure code execution Kubernetes', 'gVisor Kata agent',
    'agent sandbox isolation', 'sandbox lifecycle Kubernetes', 'code interpreter sandbox',
  ],
  h1: 'Kubernetes Agent Sandbox — Run Untrusted Agent Code Safely',
  tagline: 'When an agent executes code or tools, the sandbox is your blast-radius control. Real-time support to get it right.',
  heroEyebrow: 'Agent Sandbox — Kubernetes',
  painIntro:
    'An agent that writes and runs code — or calls tools that do — is executing effectively untrusted instructions. Without a real sandbox, a single prompt injection or bad tool call can read secrets, reach the network, or break out of the container.',
  heroVariant:
    'We help you build agent sandboxes on Kubernetes with isolation matched to the threat model: gVisor for strong user-space kernel isolation or Kata Containers for VM-grade isolation, filesystem isolation (read-only roots, ephemeral scratch), network egress restriction, secret isolation, dropped capabilities, and rootless execution. We also help with sandbox lifecycle and pooling for fast per-session provisioning, and compare against managed options such as GKE Agent Sandbox (gVisor-based, open-source Kubernetes SIG Apps subproject), AWS Bedrock AgentCore Code Interpreter, and Microsoft Foundry so you adopt the right strength without overbuilding.',
  faqs: k8sTechFaqs('agent sandbox', 'We help you execute agent-generated code and tool calls safely with gVisor/Kata isolation, filesystem/network/secret isolation, and fast sandbox provisioning.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_SECURITY_LINK, K8S_AGENT_RUNTIME_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_MCP_SERVER_LINK, GKE_AGENTIC_LINK,
      { label: 'GKE Agent Sandbox job support', href: '/gke-agent-sandbox-job-support/' },
      { label: 'Coding agent infrastructure support', href: '/kubernetes-coding-agent-infrastructure-support/' },
      EXISTING.aiAgentSandboxSec, EXISTING.aiAgentContainment, EXISTING.aiAgentNetworkEgress, EXISTING.mcpSecurity,
    ],
  }),
});

// ─── CODING AGENT INFRASTRUCTURE ───────────────────────────────────────────────

export const kubernetesCodingAgentInfra: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-coding-agent-infrastructure-support',
  title: 'Kubernetes Coding Agent Infrastructure Support — Dev Sandboxes at Scale',
  description:
    'Real-time support for coding-agent infrastructure on Kubernetes: ephemeral dev sandboxes, repo and toolchain isolation, resource and timeout control, fast provisioning, and secure egress for autonomous and assisted coding agents.',
  keywords: [
    'coding agent Kubernetes', 'coding agent infrastructure', 'dev sandbox Kubernetes',
    'autonomous coding agent platform', 'ephemeral dev environment agent', 'code execution sandbox agent',
  ],
  h1: 'Kubernetes Coding Agent Infrastructure — Ephemeral, Isolated, Fast',
  tagline: 'Coding agents need disposable, isolated dev environments that spin up fast and clean up completely.',
  heroEyebrow: 'Coding Agent Infrastructure',
  painIntro:
    'A coding agent needs a real environment — a repo, a toolchain, package installs, test runs — but each session must be isolated, time-boxed, and disposable, and it must not become a path to your secrets or network.',
  heroVariant:
    'We help you build coding-agent infrastructure on Kubernetes: ephemeral per-session sandboxes with the repo and toolchain mounted, strong isolation (gVisor/Kata, non-root, read-only roots, scoped egress), resource limits and timeouts so a runaway build cannot take a node down, fast provisioning via warm pools, and clean teardown. We cover both autonomous coding agents and human-in-the-loop assistants, and compare with managed code-execution sandboxes so you build only where control matters.',
  faqs: k8sTechFaqs('coding agent infrastructure', 'We help you run ephemeral, isolated dev sandboxes for coding agents with fast provisioning, resource/timeout limits, and secure egress.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENT_SANDBOX_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_RUNTIME_LINK, K8S_FINOPS_LINK, GKE_AGENTIC_LINK,
      { label: 'Coding agent platform (use case)', href: '/kubernetes-coding-agent-platform-job-support/' },
      EXISTING.aiAgentSandboxSec, EXISTING.agenticAiEngineer,
    ],
  }),
});

// ─── MULTI-AGENT SYSTEM ────────────────────────────────────────────────────────

export const kubernetesMultiAgentSystem: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-multi-agent-system-job-support',
  title: 'Kubernetes Multi-Agent System Job Support — Orchestration, Queues & Isolation',
  description:
    'Real-time support for multi-agent systems on Kubernetes: orchestrator/worker topologies, event-driven and async agents, queues and backpressure, per-agent identity and isolation, fan-out cost control, and debugging which agent caused an outcome.',
  keywords: [
    'multi-agent system Kubernetes', 'agent orchestration Kubernetes', 'event-driven agents',
    'async agent workers', 'agent queues backpressure', 'multi-agent production support',
  ],
  h1: 'Kubernetes Multi-Agent Systems — Orchestrate Agents Without Chaos',
  tagline: 'Multiple agents, queues, and tools in production need topology, backpressure, isolation, and traceability by design.',
  heroEyebrow: 'Multi-Agent Systems — Kubernetes',
  painIntro:
    'Two agents become ten, fan-out multiplies cost and failure modes, a loop in one worker drags the system down, and when something goes wrong you cannot tell which agent or tool caused it. Multi-agent systems need structure.',
  heroVariant:
    'We help you design multi-agent systems on Kubernetes that stay debuggable and affordable: orchestrator/worker and planner/executor topologies, event-driven and asynchronous agents backed by queues (with concurrency limits and backpressure), per-agent workload identity and isolation, fan-out and loop cost controls, and end-to-end tracing so every agent action, tool call, and MCP request is attributable. The aim is a system where you can reason about behaviour, cost, and failure instead of hoping it holds.',
  faqs: k8sTechFaqs('multi-agent system', 'We help you orchestrate multiple agents with queues, backpressure, per-agent isolation, and full action-level tracing on Kubernetes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_SRE_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_MCP_GATEWAY_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK,
      { label: 'Multi-agent platform use case', href: '/kubernetes-multi-agent-platform-job-support/' },
      { label: 'Agent observability support', href: '/kubernetes-agent-observability-job-support/' },
      EXISTING.agenticAi, EXISTING.agenticAiEngineer,
    ],
  }),
});

// ─── AGENT STATE MANAGEMENT ────────────────────────────────────────────────────

export const kubernetesAgentState: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-state-management-support',
  title: 'Kubernetes Agent State Management Support — Memory, Sessions & Snapshots',
  description:
    'Real-time support for agent state and memory on Kubernetes: ephemeral session vs durable memory, persistence to databases/object/vector stores, snapshotting, suspend/resume, and state isolation across tenants.',
  keywords: [
    'agent state management Kubernetes', 'agent memory persistence', 'agent snapshot resume',
    'session state agents', 'durable agent memory', 'agent checkpointing Kubernetes',
  ],
  h1: 'Kubernetes Agent State Management — Memory That Survives, Compute That Does Not',
  tagline: 'Separate ephemeral session state from durable memory, persist it well, and suspend idle agents cleanly.',
  heroEyebrow: 'Agent State & Memory',
  painIntro:
    'Agents lose context between sessions, hold compute just to keep state warm, or leak one tenant’s memory into another. Getting state right is what makes agents both reliable and affordable.',
  heroVariant:
    'We help you design agent state on Kubernetes: clearly separating ephemeral session state from durable long-term memory, persisting to the right store (databases, object storage, vector stores for semantic memory), implementing snapshotting and suspend/resume so an idle agent releases compute without losing context, and isolating state across tenants and sessions. This is the layer that lets you scale agents to zero and still resume them correctly — and it is where cross-tenant leakage must be designed out.',
  faqs: k8sTechFaqs('agent state management', 'We help you separate session state from durable memory, persist it to the right stores, and implement snapshot/suspend/resume with tenant isolation.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_AGENT_RUNTIME_LINK, K8S_FINOPS_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_SECURITY_LINK,
      { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
      EXISTING.vectorDb, EXISTING.rag, EXISTING.agenticAi,
    ],
  }),
});

// ─── AGENT SCALE-TO-ZERO ───────────────────────────────────────────────────────

export const kubernetesAgentScaleToZero: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-scale-to-zero-support',
  title: 'Kubernetes Agent Scale-to-Zero Support — Stop Paying for Idle Agents',
  description:
    'Real-time support for scale-to-zero on Kubernetes for agents and bursty inference: KEDA/Knative autoscaling, suspend/resume, cold-start mitigation, and warm pools — cut idle GPU cost without breaking latency SLOs.',
  keywords: [
    'agent scale to zero Kubernetes', 'KEDA scale to zero GPU', 'Knative agents', 'idle agent cost',
    'cold start mitigation agents', 'suspend resume agents Kubernetes',
  ],
  h1: 'Kubernetes Agent Scale-to-Zero — Idle Agents Should Cost Nothing',
  tagline: 'Scale agents and bursty inference to zero when there is no work — and make the cold start fast enough to be usable.',
  heroEyebrow: 'Scale-to-Zero — Agents & Inference',
  painIntro:
    'An agent or model endpoint that holds a GPU 24/7 for occasional work is the single most common AI cost mistake. Scale-to-zero fixes it — if the cold start does not break your SLA.',
  heroVariant:
    'We help you implement scale-to-zero on Kubernetes for agents and bursty inference with KEDA or Knative, decide which workloads can tolerate cold starts, and then make the cold start fast enough to use in production: model and image caching, warm pools, faster weight loading, and suspend/resume for long-running agents. We tune it against TTFT and success-rate SLOs so the savings are real and the user experience holds.',
  faqs: k8sTechFaqs('scale-to-zero', 'We help you scale agents and bursty inference to zero with KEDA/Knative, mitigate cold starts with caching and warm pools, and protect latency SLOs.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_FINOPS_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_RUNTIME_LINK, K8S_GPU_LINK,
      { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
      { label: 'GPU underutilization troubleshooting', href: '/kubernetes-gpu-underutilization-troubleshooting/' },
      EXISTING.mlops,
    ],
  }),
});

// ─── AGENT SECURITY ────────────────────────────────────────────────────────────

export const kubernetesAgentSecurity: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-security-job-support',
  title: 'Kubernetes Agent Security Job Support — Least-Privilege, Egress & Containment',
  description:
    'Real-time support for securing agents on Kubernetes: least-privilege RBAC and workload identity, network egress control, tool-abuse and privilege-escalation containment, secret isolation, and policy with OPA/Gatekeeper and Kyverno.',
  keywords: [
    'agent security Kubernetes', 'agent least privilege', 'agent egress control', 'agent RBAC',
    'agent privilege escalation', 'workload identity agents', 'agent containment Kubernetes',
  ],
  h1: 'Kubernetes Agent Security — Control What an Agent Can Reach',
  tagline: 'Assume the model can be manipulated. Make sure a bad instruction cannot reach a dangerous capability.',
  heroEyebrow: 'Agent Security — Kubernetes',
  painIntro:
    'The risk is not only a clever prompt — it is what the agent is allowed to do when manipulated. Overprivileged service accounts, unrestricted egress, and shared credentials turn a prompt injection into a breach.',
  heroVariant:
    'We help you apply least-privilege to agents on Kubernetes: scoped RBAC and workload identity per agent (no ambient cloud permissions, short-lived credentials), network egress restriction so agents and tools can only reach what they need, containment of tool abuse and privilege escalation, secret isolation, and policy enforcement with OPA/Gatekeeper and Kyverno. We are explicit that this is infrastructure-layer defence — it limits blast radius but does not replace application-layer controls against prompt injection; both layers matter.',
  faqs: k8sTechFaqs('agent security', 'We help you lock agents down with scoped RBAC, workload identity, egress control, secret isolation, and OPA/Kyverno policy so a manipulated agent has minimal blast radius.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_SECURITY_LINK, K8S_AGENT_SANDBOX_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_MCP_GATEWAY_LINK, K8S_AGENT_RUNTIME_LINK,
      { label: 'Security agent (use case)', href: '/kubernetes-security-agent-job-support/' },
      { label: 'DevOps agent (use case)', href: '/kubernetes-devops-agent-job-support/' },
      EXISTING.aiAgentIdentity, EXISTING.aiAgentNetworkEgress, EXISTING.aiAgentPromptInjection,
      EXISTING.aiAgentContainment, EXISTING.mcpSecurity,
    ],
  }),
});

// ─── AGENT OBSERVABILITY ───────────────────────────────────────────────────────

export const kubernetesAgentObservability: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-observability-job-support',
  title: 'Kubernetes Agent Observability Job Support — Trace Every Agent Action',
  description:
    'Real-time support for agent observability on Kubernetes: action-level tracing of agent→LLM→MCP→tool→retrieval with OpenTelemetry GenAI conventions, loop and cost detection, and auditing which agent did what.',
  keywords: [
    'agent observability Kubernetes', 'agent tracing OpenTelemetry', 'LLM agent monitoring',
    'agent action audit', 'agent loop detection', 'multi-agent observability',
  ],
  h1: 'Kubernetes Agent Observability — See and Prove What Agents Do',
  tagline: 'Action-level traces across agent, LLM, MCP, tool, and retrieval — so loops, bad calls, and runaway cost are debuggable after the fact.',
  heroEyebrow: 'Agent Observability',
  painIntro:
    'When an agent does something wrong — loops, calls the wrong tool, burns cost — you need to know exactly what happened: which agent, which step, which tool, what parameters, what it cost. Standard Pod metrics cannot tell you.',
  heroVariant:
    'We help you instrument agents on Kubernetes with action-level observability: OpenTelemetry spans using GenAI semantic conventions across the full agent → LLM → MCP → tool → retrieval → vector DB path, structured events for every tool and MCP call (inputs, outputs, cost, outcome), loop and runaway-cost detection, and audit trails that let you prove what an agent did. This is what makes multi-agent systems debuggable and compliant instead of a black box.',
  faqs: k8sTechFaqs('agent observability', 'We help you capture action-level traces and audit events across the full agent/LLM/MCP/tool/retrieval path so loops, bad calls, and cost are debuggable.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_SRE_LINK, K8S_MCP_SERVER_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_SECURITY_LINK, K8S_FINOPS_LINK,
      { label: 'Agent loop troubleshooting', href: '/kubernetes-agent-loop-troubleshooting/' },
      { label: 'Multi-agent system support', href: '/kubernetes-multi-agent-system-job-support/' },
      EXISTING.agenticAi,
    ],
  }),
});

// ─── AGENT COST OPTIMIZATION ───────────────────────────────────────────────────

export const kubernetesAgentCost: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-cost-optimization-support',
  title: 'Kubernetes Agent Cost Optimization Support — Tame Agent & Token Spend',
  description:
    'Real-time support for agent cost on Kubernetes: idle-agent reclaim, scale-to-zero and suspend/resume, loop and fan-out cost controls, model routing by cost, and per-agent token/GPU accounting.',
  keywords: [
    'agent cost optimization Kubernetes', 'agent token cost', 'idle agent GPU', 'agent fan-out cost',
    'model routing cost', 'agent FinOps',
  ],
  h1: 'Kubernetes Agent Cost Optimization — Stop Agents From Burning the Budget',
  tagline: 'Idle agents, loops, fan-out, and oversized models are where agent cost hides. We find it and fix it.',
  heroEyebrow: 'Agent Cost Optimization',
  painIntro:
    'Agent cost grows in ways request/response services do not: idle agents holding GPUs, loops that retry forever, fan-out that multiplies calls, and oversized models answering trivial requests. Without controls, the bill outruns the value.',
  heroVariant:
    'We help you control agent cost on Kubernetes: reclaim idle agents with scale-to-zero and suspend/resume, add loop and fan-out guards so a misbehaving agent cannot run up unbounded spend, route requests to right-sized models, cache and reuse where possible, and get per-agent token and GPU accounting so owners can see and own their spend. We tune this against reliability SLOs so cost control never silently degrades the product.',
  faqs: k8sTechFaqs('agent cost optimization', 'We help you reclaim idle agents, add loop/fan-out cost guards, route to right-sized models, and get per-agent token/GPU cost visibility.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_FINOPS_LINK, K8S_AGENT_RUNTIME_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_INFERENCE_HUB_LINK,
      { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
      { label: 'Agent observability support', href: '/kubernetes-agent-observability-job-support/' },
      EXISTING.mlops,
    ],
  }),
});

// ─── AGENT / WORKLOAD IDENTITY ─────────────────────────────────────────────────

export const kubernetesAgentIdentity: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-agent-identity-workload-identity-support',
  title: 'Kubernetes Agent Identity & Workload Identity Support — Scoped, Short-Lived Access',
  description:
    'Real-time support for agent and workload identity on Kubernetes: per-agent identities, federated cloud workload identity (IRSA, Entra Workload ID, GKE Workload Identity), short-lived credentials, and least-privilege scoping for tools and MCP.',
  keywords: [
    'workload identity Kubernetes agents', 'agent identity', 'IRSA agents', 'GKE workload identity AI',
    'Entra workload identity', 'short-lived credentials agents',
  ],
  h1: 'Kubernetes Agent & Workload Identity — Every Agent Gets Its Own Least-Privilege Identity',
  tagline: 'Agents should authenticate as themselves with scoped, short-lived credentials — never a shared high-privilege key.',
  heroEyebrow: 'Agent & Workload Identity',
  painIntro:
    'A shared, long-lived credential used by every agent is a breach waiting to happen. Each agent and tool should have its own scoped identity with short-lived credentials and only the permissions it needs.',
  heroVariant:
    'We help you design agent and workload identity on Kubernetes: per-agent service accounts and identities, federation to cloud workload identity (EKS IRSA / Pod Identity, AKS/Entra Workload ID, GKE Workload Identity), short-lived token exchange instead of static secrets, and least-privilege scoping of what each agent identity can call — tools, MCP servers, cloud APIs. This is the backbone of agent security and the thing auditors and security reviews ask about first.',
  faqs: k8sTechFaqs('agent and workload identity', 'We help you give each agent a scoped, short-lived identity federated to cloud workload identity, with least-privilege access to tools and MCP.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_SECURITY_LINK, K8S_MCP_GATEWAY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_RUNTIME_LINK, K8S_MCP_SERVER_LINK,
      EXISTING.aiAgentIdentity, EXISTING.aiAgentContainment, EXISTING.mcpSecurity,
    ],
  }),
});

export const kubernetesAgenticPages: LandingPageConfig[] = [
  kubernetesAgenticAiHub,
  kubernetesAgentRuntime,
  kubernetesAgentSandbox,
  kubernetesCodingAgentInfra,
  kubernetesMultiAgentSystem,
  kubernetesAgentState,
  kubernetesAgentScaleToZero,
  kubernetesAgentSecurity,
  kubernetesAgentObservability,
  kubernetesAgentCost,
  kubernetesAgentIdentity,
];
