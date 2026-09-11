import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_SMOLAGENTS_LINK,
  HF_OPENENV_LINK,
  HF_AGENTIC_RAG_LINK,
  HF_TRL_LINK,
  HF_SBERT_LINK,
  HF_RAG_HUB_LINK,
  HF_PROVIDERS_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_LIGHTEVAL_LINK,
} from './shared';

// ─── smolagents hub ──────────────────────────────────────────────────────────

export const smolagentsJobSupport: LandingPageConfig = hfServicePage({
  slug: 'smolagents-job-support',
  title: 'smolagents Job Support | CodeAgent, ToolCallingAgent, Tools & MCP',
  description:
    'Job support for Hugging Face smolagents — build agents with CodeAgent and ToolCallingAgent, define tools, connect MCP servers, run multi-agent workflows, and execute code securely in a sandbox. Ship reliable agents on your real project.',
  keywords: [
    'smolagents job support', 'Hugging Face smolagents support', 'CodeAgent ToolCallingAgent',
    'smolagents tools MCP', 'smolagents sandbox', 'multi-agent smolagents', 'agent framework support',
  ],
  h1: 'smolagents Job Support — CodeAgent, ToolCallingAgent, Tools, MCP & Sandboxing',
  tagline:
    'Real-time help building agents with Hugging Face smolagents — CodeAgent and ToolCallingAgent, custom tools, MCP integrations, multi-agent orchestration, and secure sandboxed code execution.',
  heroEyebrow: 'smolagents / Agent Development Support',
  painIntro:
    'An agent that loops, calls the wrong tool, or runs unsafe code? smolagents is a minimal, powerful way to build LLM agents, but agent reliability, tool design, and safe code execution take real care. We help you build agents that behave.',
  heroVariant:
    'smolagents is Hugging Face’s minimal agent library (pre-2.0 and actively developed — we flag where behavior is still evolving). It centers on MultiStepAgent, with CodeAgent (the agent writes actions as executable Python) and ToolCallingAgent (actions as structured tool calls). We help with tool design (the @tool decorator and Tool class), model backends (Inference Providers, local Transformers, or others), MCP server integration via ToolCollection.from_mcp, managed/multi-agent workflows, memory and planning, telemetry/inspection, human-in-the-loop, and — critically — secure code execution in a sandbox (E2B, Modal, or Docker) rather than running model-written code on your host.',
  faqs: [
    ...hfServiceFaqs('smolagents', 'We help build CodeAgent/ToolCallingAgent agents, design tools, connect MCP servers, and set up sandboxed execution on your real project.'),
    {
      question: 'What is the difference between CodeAgent and ToolCallingAgent?',
      answer:
        'CodeAgent has the LLM express actions as Python code that is executed — flexible and expressive, great for chaining logic and computation, but it must run in a sandbox because it executes model-written code. ToolCallingAgent has the LLM emit structured tool calls (JSON-style) that your code dispatches — more constrained and predictable, closer to classic function calling. We help you choose based on how open-ended the task is and your safety constraints.',
    },
    {
      question: 'Is it safe to run a CodeAgent in production?',
      answer:
        'Only with sandboxing. smolagents explicitly warns that local code execution is potentially unsafe. For production you run the agent’s code in an isolated sandbox (E2B, Modal, or Docker) with restricted network and filesystem access, tight tool permissions, and limits. We help you set up that sandbox and the guardrails so an agent cannot damage your environment.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Agentic RAG job support', href: '/huggingface-agentic-rag-job-support/' },
    ],
    techLinks: [HF_AGENTIC_RAG_LINK, HF_OPENENV_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PROVIDERS_LINK, HF_RAG_HUB_LINK, HF_TRANSFORMERS_INFERENCE_LINK,
      EXISTING.agenticAi, EXISTING.agenticEngineer, EXISTING.llm, EXISTING.genai,
    ],
  }),
});

// ─── Code agents ─────────────────────────────────────────────────────────────

export const codeAgents: LandingPageConfig = hfServicePage({
  slug: 'huggingface-code-agents-job-support',
  title: 'Code Agents Job Support | smolagents CodeAgent & Secure Execution',
  description:
    'Job support for code-writing agents with smolagents CodeAgent — agents that write and run Python to solve tasks, with sandboxed execution, tool access, and guardrails. Build capable agents without letting them run wild.',
  keywords: [
    'code agent job support', 'CodeAgent smolagents', 'agent code execution sandbox',
    'python agent support', 'secure code execution agent', 'LLM code agent',
  ],
  h1: 'Code Agents Job Support — CodeAgent, Sandboxed Execution & Guardrails',
  tagline:
    'Real-time help with code-writing agents — smolagents CodeAgent that solves tasks by writing Python, run safely in a sandbox with the right tools and limits.',
  heroEyebrow: 'Code Agents Support',
  painIntro:
    'A code agent that writes almost-right code, loops on errors, or worryingly runs on your host? Code agents are the most capable agent style but also the riskiest to operate. We help you make them both effective and safe.',
  heroVariant:
    'Code agents (smolagents CodeAgent) express each action as executable Python, which lets them chain computation, call tools as functions, and recover from errors by editing code — often outperforming pure tool-calling on complex tasks. We help with prompt and tool design, giving the agent the right libraries and tools, iteration and error-recovery behavior, step and token limits, and — essential — running the generated code in an isolated sandbox (E2B, Modal, or Docker) with restricted network/filesystem access. We also help you evaluate and observe agent runs so you can trust them.',
  faqs: [
    ...hfServiceFaqs('code agents', 'We help build and safely operate smolagents CodeAgent — tool design, error recovery, limits, and sandboxed execution.'),
    {
      question: 'Why do code agents often beat tool-calling agents?',
      answer:
        'Because code is a more expressive action space — one code block can call several tools, loop, do arithmetic, and handle intermediate results, whereas tool-calling emits one structured call at a time. For multi-step, computational tasks this reduces round-trips and errors. The trade-off is that code must be sandboxed. We help you use CodeAgent where it wins and ToolCallingAgent where predictability matters more.',
    },
    {
      question: 'How do I keep a code agent from doing damage?',
      answer:
        'Sandbox execution (E2B/Modal/Docker), restrict network and filesystem, allow-list only the tools and packages it needs, cap steps/time/tokens, and log every action for inspection. We set up these guardrails so the agent is useful without being dangerous.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'smolagents job support', href: '/smolagents-job-support/' },
    ],
    techLinks: [HF_SMOLAGENTS_LINK, HF_AGENTIC_RAG_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PROVIDERS_LINK, HF_OPENENV_LINK,
      EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
});

// ─── Tool-calling agents ─────────────────────────────────────────────────────

export const toolCallingAgents: LandingPageConfig = hfServicePage({
  slug: 'huggingface-tool-calling-agents-job-support',
  title: 'Tool-Calling Agents Job Support | smolagents ToolCallingAgent & Tool Design',
  description:
    'Job support for tool-calling agents with smolagents ToolCallingAgent — design reliable tools, structured tool calls, error handling, and predictable agent behavior for production. When you need control over what the agent can do.',
  keywords: [
    'tool calling agent job support', 'ToolCallingAgent smolagents', 'function calling agent',
    'agent tool design', 'structured tool calls', 'reliable agent support',
  ],
  h1: 'Tool-Calling Agents Job Support — ToolCallingAgent, Tool Design & Reliability',
  tagline:
    'Real-time help with tool-calling agents — smolagents ToolCallingAgent, well-designed tools, structured calls, and the error handling that makes agents predictable in production.',
  heroEyebrow: 'Tool-Calling Agents Support',
  painIntro:
    'A tool-calling agent that picks the wrong tool, passes bad arguments, or fails silently? Tool-calling agents trade some capability for control and predictability — but only if the tools and error handling are designed well. We help you build agents you can rely on.',
  heroVariant:
    'ToolCallingAgent has the LLM emit structured tool calls that your code executes — the more constrained, auditable counterpart to CodeAgent, and the right choice when you must tightly control what an agent can do. We help with clear tool definitions (names, descriptions, typed arguments via the @tool decorator), argument validation and error handling, retry and fallback behavior, tool selection quality, MCP-provided tools via ToolCollection, and observability. We also help you decide when to graduate to a code agent for more open-ended tasks.',
  faqs: [
    ...hfServiceFaqs('tool-calling agents', 'We help design robust tools, structured calls, validation and error handling for ToolCallingAgent on your real project.'),
    {
      question: 'When should I use ToolCallingAgent over CodeAgent?',
      answer:
        'Use ToolCallingAgent when you need predictable, auditable behavior with a fixed set of allowed actions — regulated environments, sensitive systems, or when every action must be reviewable. Use CodeAgent for open-ended, computational, multi-step tasks where expressiveness pays off (in a sandbox). Many systems use both, with tool-calling for the sensitive parts.',
    },
    {
      question: 'How do I make tool selection reliable?',
      answer:
        'Clear, unambiguous tool names and descriptions; typed, well-described arguments; a small, non-overlapping tool set; validation that rejects bad calls with a helpful error the agent can recover from; and evaluation of tool-selection accuracy on real tasks. We help you tighten all of these so the agent picks and calls the right tool.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'MCP agents job support', href: '/huggingface-mcp-agents-job-support/' },
    ],
    techLinks: [HF_SMOLAGENTS_LINK, { label: 'MCP agents job support', href: '/huggingface-mcp-agents-job-support/' }],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_AGENTIC_RAG_LINK, HF_PROVIDERS_LINK,
      EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
});

// ─── MCP agents ──────────────────────────────────────────────────────────────

export const mcpAgents: LandingPageConfig = hfServicePage({
  slug: 'huggingface-mcp-agents-job-support',
  title: 'MCP Agents Job Support | Model Context Protocol Tools with smolagents',
  description:
    'Job support for MCP (Model Context Protocol) agents — connect smolagents to MCP servers via ToolCollection.from_mcp, expose and consume MCP tools, manage trust boundaries, and integrate external systems safely.',
  keywords: [
    'MCP agents job support', 'Model Context Protocol support', 'smolagents MCP',
    'ToolCollection from_mcp', 'MCP server integration', 'MCP tools agent',
  ],
  h1: 'MCP Agents Job Support — Model Context Protocol Tools & Trust Boundaries',
  tagline:
    'Real-time help connecting agents to MCP servers — smolagents ToolCollection.from_mcp, consuming and exposing MCP tools, and handling trust boundaries when agents reach external systems.',
  heroEyebrow: 'MCP Integration Support',
  painIntro:
    'Wiring an agent to MCP servers and unsure how connection, tool discovery, or trust boundaries should work? MCP is becoming the standard way to give agents access to external tools and data — but connecting it safely matters. We help you integrate it right.',
  heroVariant:
    'The Model Context Protocol (MCP) standardizes how agents discover and call external tools and data sources. smolagents connects to MCP servers with ToolCollection.from_mcp, importing their tools into an agent. We help with MCP client setup and tool discovery, mapping MCP tools onto CodeAgent or ToolCallingAgent, authentication and secrets for MCP servers, trust boundaries (what an MCP-provided tool is allowed to do), error handling across the protocol, and — where you are exposing capabilities — building MCP servers. We keep security front and center, since MCP tools can reach outside your process.',
  faqs: [
    ...hfServiceFaqs('MCP agents', 'We help connect smolagents to MCP servers, map MCP tools onto agents, and secure the trust boundaries and secrets involved.'),
    {
      question: 'What does MCP give me over hand-written tools?',
      answer:
        'MCP is a standard protocol, so tools built for one MCP-compatible client work with others, and there is a growing ecosystem of ready MCP servers (for files, search, databases, SaaS). Instead of writing bespoke integrations per agent, you connect to an MCP server once. We help you consume existing MCP servers and, when needed, expose your own systems as MCP tools.',
    },
    {
      question: 'How do I handle security with MCP tools?',
      answer:
        'Treat MCP tools as an external trust boundary: scope credentials narrowly, allow-list which servers/tools an agent can use, validate inputs and outputs, and log all calls. For code agents, keep execution sandboxed even when tools come from MCP. We help you set these controls so MCP expands capability without expanding risk.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'smolagents job support', href: '/smolagents-job-support/' },
    ],
    techLinks: [HF_SMOLAGENTS_LINK, HF_AGENTIC_RAG_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, { label: 'Tool-calling agents job support', href: '/huggingface-tool-calling-agents-job-support/' },
      HF_OPENENV_LINK, EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
});

// ─── Multi-agent systems ─────────────────────────────────────────────────────

export const multiAgentSystems: LandingPageConfig = hfServicePage({
  slug: 'huggingface-multi-agent-systems-job-support',
  title: 'Multi-Agent Systems Job Support | Managed & Orchestrated Agents with smolagents',
  description:
    'Job support for multi-agent systems with smolagents — managed agents, orchestration, delegation between specialized agents, shared memory, and keeping multi-agent workflows reliable and observable.',
  keywords: [
    'multi-agent systems job support', 'managed agents smolagents', 'agent orchestration support',
    'multi-agent workflow', 'agent delegation', 'hierarchical agents',
  ],
  h1: 'Multi-Agent Systems Job Support — Orchestration, Delegation & Reliability',
  tagline:
    'Real-time help designing multi-agent systems — managed agents and orchestration in smolagents, delegation between specialized agents, shared context, and reliability at scale.',
  heroEyebrow: 'Multi-Agent Systems Support',
  painIntro:
    'A multi-agent setup that loops, duplicates work, or is impossible to debug? Multiple agents can outperform one — or amplify every failure. We help you design orchestration that is actually more reliable, not just more complex.',
  heroVariant:
    'smolagents supports managed/multi-agent workflows where a manager agent delegates subtasks to specialized worker agents. We help design the topology (when a single agent is enough versus a manager + workers), scope each agent’s tools and responsibilities, pass context between agents without losing state, control cost and step budgets across the system, add telemetry so the whole run is inspectable, and handle failure isolation so one agent’s error does not cascade. We are candid about when multi-agent complexity is not worth it.',
  faqs: [
    ...hfServiceFaqs('multi-agent systems', 'We help design orchestration and delegation, scope agent tools, share context, and keep multi-agent runs observable and reliable.'),
    {
      question: 'When is multi-agent actually better than a single agent?',
      answer:
        'When the task has genuinely distinct sub-skills (e.g. research vs coding vs review), when tool sets are large enough that splitting them improves selection accuracy, or when parallelism helps. If a single well-equipped agent can do the job, one agent is simpler, cheaper, and easier to debug. We help you make that call honestly before building a system you have to maintain.',
    },
    {
      question: 'How do I debug a multi-agent workflow?',
      answer:
        'With end-to-end telemetry: capture each agent’s inputs, tool calls, and outputs, and trace delegation. smolagents supports inspection/telemetry that we wire into your observability stack, so you can see exactly which agent went wrong and why, rather than guessing.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'smolagents job support', href: '/smolagents-job-support/' },
    ],
    techLinks: [HF_SMOLAGENTS_LINK, HF_AGENTIC_RAG_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_OPENENV_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
});

// ─── Agentic RAG ─────────────────────────────────────────────────────────────

export const agenticRag: LandingPageConfig = hfServicePage({
  slug: 'huggingface-agentic-rag-job-support',
  title: 'Agentic RAG Job Support | Retrieval Agents with smolagents & Sentence Transformers',
  description:
    'Job support for agentic RAG — agents that decide when and what to retrieve, query reformulation, multi-hop retrieval, and combining smolagents with Sentence Transformers and vector search for higher-quality answers than static RAG.',
  keywords: [
    'agentic RAG job support', 'retrieval agent support', 'smolagents RAG', 'multi-hop retrieval',
    'query reformulation RAG', 'agentic retrieval Hugging Face',
  ],
  h1: 'Agentic RAG Job Support — Retrieval Agents & Multi-Hop Retrieval',
  tagline:
    'Real-time help building agentic RAG — agents that reason about when and what to retrieve, reformulate queries, do multi-hop retrieval, and combine smolagents with embeddings and vector search.',
  heroEyebrow: 'Agentic RAG Support',
  painIntro:
    'Static RAG returning shallow or wrong answers on complex questions? Agentic RAG lets the model decide to retrieve, refine its query, and retrieve again — turning retrieval into a reasoning loop. We help you build it and know when it is worth the extra latency.',
  heroVariant:
    'Agentic RAG wraps retrieval in an agent: the model reformulates queries, decides when to search, does multi-hop retrieval across sources, and synthesizes — rather than a single fixed retrieve-then-generate step. We build it by giving a smolagents agent retrieval tools backed by Sentence Transformers embeddings, a vector database, and cross-encoder reranking (served via TEI where useful). We help with query reformulation, retrieval-tool design, controlling loops and latency, grounding and citation, and evaluating answer quality. We are clear that static RAG is often sufficient — agentic RAG earns its cost on complex, multi-step questions.',
  faqs: [
    ...hfServiceFaqs('agentic RAG', 'We help build retrieval agents with smolagents plus Sentence Transformers and vector search, and tune query reformulation and multi-hop retrieval.'),
    {
      question: 'How is agentic RAG different from standard RAG?',
      answer:
        'Standard RAG does one retrieval then generates. Agentic RAG lets the model iterate: reformulate the query, decide whether more retrieval is needed, search multiple sources, and combine results — better for complex or multi-hop questions. The cost is more latency and tokens per query. We help you use agentic retrieval only where it improves answers enough to justify that cost.',
    },
    {
      question: 'What retrieval stack do you use for agentic RAG?',
      answer:
        'Typically Sentence Transformers for embeddings (bi-encoder retrieval), a vector database for search, cross-encoder reranking for precision (often served with TEI), and smolagents to orchestrate retrieval as tools. We help you assemble and tune this stack and integrate it with your existing vector store.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Embeddings & RAG job support', href: '/huggingface-embeddings-job-support/' },
    ],
    techLinks: [HF_SBERT_LINK, HF_SMOLAGENTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_RAG_HUB_LINK, HF_OPENENV_LINK, HF_PROVIDERS_LINK,
      EXISTING.rag, EXISTING.ragEngineer, EXISTING.vectorDb, EXISTING.agenticAi,
    ],
  }),
});

// ─── OpenEnv ─────────────────────────────────────────────────────────────────

export const openenvJobSupport: LandingPageConfig = hfServicePage({
  slug: 'openenv-job-support',
  title: 'OpenEnv Job Support | Agentic RL Environments (reset/step) with TRL',
  description:
    'Job support for OpenEnv — the experimental Hugging Face framework for agentic RL environments with Gymnasium-style reset/step/state, HTTP env servers, MCP environments, and TRL integration for RL post-training. Status: experimental.',
  keywords: [
    'OpenEnv job support', 'agentic RL environments', 'OpenEnv reset step', 'RL environment Hugging Face',
    'OpenEnv TRL', 'MCP environments', 'agent training environment',
  ],
  h1: 'OpenEnv Job Support — Agentic RL Environments & TRL Integration',
  tagline:
    'Real-time help with OpenEnv — building and running isolated RL environments (reset/step/state), env servers and clients, rewards, and wiring OpenEnv into TRL for RL post-training. (OpenEnv is experimental.)',
  heroEyebrow: 'OpenEnv / Agentic RL Support — Experimental',
  painIntro:
    'Exploring RL post-training with environments and hitting OpenEnv’s rough edges? OpenEnv is a new, explicitly experimental framework for agentic RL environments — powerful, but with APIs that may still change. We help you build with it while managing that risk.',
  heroVariant:
    'OpenEnv provides a unified, container-first way to build and run isolated execution environments for agentic RL, with Gymnasium-style semantics: reset(), step(), and state(); actions, observations, and rewards; HTTP-native environment servers with clients and a CLI; and MCP environments (with async step and tool calls). It integrates with TRL for RL post-training (the trl/openenv path). Because OpenEnv is officially experimental — expect bugs and changing APIs — we help you pin versions, isolate it behind your own interface, design environments and reward signals, connect it to TRL/GRPO, and avoid building brittle dependencies on unstable surfaces.',
  faqs: [
    ...hfServiceFaqs('OpenEnv', 'We help build RL environments (reset/step/state), env servers/clients, rewards, and wire OpenEnv into TRL — while managing its experimental status.'),
    {
      question: 'Is OpenEnv production-ready?',
      answer:
        'No — OpenEnv is officially experimental; the docs warn to expect bugs, incomplete features, and APIs that may change. It is well suited to research and RL post-training experiments today. We help you use it productively while insulating your codebase from breaking changes (version pinning, thin adapters) so an OpenEnv update does not break your pipeline.',
    },
    {
      question: 'How does OpenEnv work with TRL?',
      answer:
        'OpenEnv supplies the environment (the agent acts, the environment returns observations and rewards), and TRL supplies the RL training loop (e.g. GRPO). The agent/model produces an action, the environment steps and returns state and reward, and TRL updates the policy. We help you connect the two and design rewards that train the behavior you want.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Agentic RL job support', href: '/huggingface-agentic-rl-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_SMOLAGENTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, { label: 'GRPO job support', href: '/huggingface-grpo-job-support/' },
      HF_LIGHTEVAL_LINK, EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
});

// ─── Agentic RL ──────────────────────────────────────────────────────────────

export const agenticRl: LandingPageConfig = hfServicePage({
  slug: 'huggingface-agentic-rl-job-support',
  title: 'Agentic RL Job Support | Train Agents with Environments, Rewards & TRL',
  description:
    'Job support for agentic reinforcement learning — training agents and coding agents with environments (OpenEnv), reward design, GRPO with TRL, and evaluation. Turn an LLM into a capable, verifiable agent through RL.',
  keywords: [
    'agentic RL job support', 'agent training RL', 'coding agent training', 'RL post-training agents',
    'OpenEnv GRPO', 'reinforcement learning agents Hugging Face',
  ],
  h1: 'Agentic RL Job Support — Training Agents with Environments & Rewards',
  tagline:
    'Real-time help training agents with reinforcement learning — environments and rewards (OpenEnv), GRPO in TRL, and evaluation, including coding-agent training.',
  heroEyebrow: 'Agentic RL Support',
  painIntro:
    'Trying to train an agent (or coding agent) to actually get better at a task through RL, and unsure how environments, rewards, and trainers fit together? Agentic RL is the frontier of agent development. We help you assemble a working training loop.',
  heroVariant:
    'Agentic RL trains an agent to improve at a task by acting in an environment and optimizing a reward, rather than just prompting a fixed model. The pieces: an environment (OpenEnv, experimental) that returns observations and rewards; a reward or verifier (e.g. tests pass, task completed); and an RL trainer (GRPO in TRL). We help design the environment and reward, set up the generation and training loop (vLLM-accelerated), avoid reward hacking, and evaluate the trained agent honestly. Coding-agent training — where the reward is whether generated code passes tests — is a common, high-value case we support.',
  faqs: [
    ...hfServiceFaqs('agentic RL', 'We help design environments and rewards, run GRPO with TRL and OpenEnv, and evaluate the trained agent on your real task.'),
    {
      question: 'What do I need to start training an agent with RL?',
      answer:
        'Three things: a task with a checkable reward (a verifier, tests, or a reward model), an environment that runs the agent and returns observations and rewards (OpenEnv or a custom one), and an RL trainer (GRPO in TRL). We help you assemble all three, starting from the reward because a clean, hard-to-game reward is what makes agentic RL work.',
    },
    {
      question: 'Can you help train a coding agent?',
      answer:
        'Yes. Coding-agent training is a strong fit for agentic RL: the reward is whether the generated code compiles and passes tests, which is verifiable and hard to fake. We help you build the environment (sandboxed execution + test harness), define the reward, run GRPO, and evaluate on held-out problems.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'OpenEnv job support', href: '/openenv-job-support/' },
    ],
    techLinks: [HF_OPENENV_LINK, HF_TRL_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, { label: 'GRPO job support', href: '/huggingface-grpo-job-support/' },
      HF_SMOLAGENTS_LINK, HF_LIGHTEVAL_LINK, EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
});

export const huggingFaceAgentsPages: LandingPageConfig[] = [
  smolagentsJobSupport,
  codeAgents,
  toolCallingAgents,
  mcpAgents,
  multiAgentSystems,
  agenticRag,
  openenvJobSupport,
  agenticRl,
];
