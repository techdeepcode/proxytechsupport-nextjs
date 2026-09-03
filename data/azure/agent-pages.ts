import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  azureServicePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AGENT_HUB_LINK,
  AGENT_FRAMEWORK_LINK,
  FOUNDRY_IQ_LINK,
  SEARCH_HUB_LINK,
  OBSERVABILITY_HUB_LINK,
  SECURITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

const agentProblem = { label: 'Foundry agent troubleshooting', href: '/foundry-agent-troubleshooting-support/' };
const agentProxy = { label: 'Foundry Agent Service interview support', href: '/foundry-agent-service-proxy-interview-support/' };
const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

// ─── Foundry Agent Service master hub ────────────────────────────────────────

const agentHub: LandingPageConfig = azurePage({
  slug: 'microsoft-foundry-agent-service-proxy-job-support',
  title: 'Foundry Agent Service Proxy Job Support — Responses API, Runtime & Tools',
  description:
    'Real-time Microsoft Foundry Agent Service job support: Responses API (Agents v2), Agent Runtime, prompt and hosted agents, tools (web search, file search, code interpreter, MCP), memory, A2A, tracing, and evaluation. Migration from the retiring Assistants API.',
  keywords: [
    'Foundry Agent Service job support', 'Microsoft Foundry agents', 'Azure AI agent job support',
    'Foundry Responses API', 'Agent Runtime Azure', 'hosted agents Foundry', 'Foundry agent tools',
    'Assistants API migration',
  ],
  h1: 'Foundry Agent Service Proxy Job Support — Build, Ship & Operate Azure AI Agents',
  tagline:
    'One hub for real-time Foundry Agent Service job support — Responses API, Agent Runtime, prompt and hosted agents, tools, memory, MCP, A2A, tracing, and evaluation.',
  heroEyebrow: 'Foundry Agent Service Support Hub — Updated August 2026',
  painIntro:
    'Building on Foundry Agent Service and hitting tool-call failures, MCP connection errors, memory that does not persist, or missing traces? Migrating off the retiring Assistants API to the Responses API? An agent expert on the call gets you shipping.',
  heroVariant:
    'Foundry Agent Service is GA and is the current way to build agents on Microsoft Foundry. The terminology shifted: the old Assistants API (Agents v0.5/v1) became the Responses API (Agents v2), and Threads/Messages/Runs/Assistants became Conversations / Items / Responses / Agent Versions. You can build prompt agents (declarative, Foundry-hosted, GA) or hosted agents (bring your own container/code + framework, run by Foundry with a managed endpoint, autoscale, dedicated Entra identity, session state, and observability), or call the Responses API directly for ephemeral agents. The Agent Runtime hosts and scales both, via the Responses API and the schema-free Invocations protocol, with A2A (preview) for agent-to-agent. Built-in tools include web search, file search, code interpreter, and memory (preview), plus custom functions, OpenAPI specs, and MCP servers, grouped into Toolboxes. We help with all of it — including migration off the Assistants API (retires August 26, 2026).',
  geoLine:
    'Foundry Agent Service support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover the Responses API, Agent Runtime, prompt and hosted agents, tools (web search, file search, code interpreter, MCP), Toolboxes, memory, A2A, authentication/identity, tracing, and evaluation — all current through August 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is Foundry Agent Service and is it GA?',
      answer:
        'Foundry Agent Service is Microsoft Foundry’s managed service for building, hosting, and running AI agents. Its core agent capabilities are GA in the new Foundry portal, with private networking and enterprise evaluations at GA and features like Voice Live and memory in preview. It replaces the older Azure OpenAI Assistants API, which retires August 26, 2026.',
    },
    {
      question: 'What is the difference between prompt agents and hosted agents?',
      answer:
        'Prompt agents are declarative — you configure them (instructions, tools, model) and Foundry hosts and runs them; they are GA. Hosted agents let you bring your own container or code and framework (e.g. Microsoft Agent Framework), which Foundry runs with a managed endpoint, autoscale, a dedicated Entra identity, session state, and built-in observability. You can also call the Responses API directly for ephemeral agents. We help you choose and implement the right model.',
    },
    {
      question: 'Which tools and protocols does Foundry Agent Service support?',
      answer:
        'Built-in tools: web search, file search, code interpreter, and memory (preview). Extensibility: custom functions, OpenAPI specs, and MCP servers (remote MCP plus custom MCP on Azure Functions), grouped into Toolboxes behind a single managed, governed endpoint. Protocols: the OpenAI-compatible stateful Responses API and the schema-free Invocations protocol, plus OpenResponses/Activity protocols for Microsoft 365 publishing and A2A (preview) for agent-to-agent communication.',
    },
    {
      question: 'Can you help me migrate off the Assistants API?',
      answer:
        'Yes — this is a common request right now. The Azure OpenAI Assistants API retires August 26, 2026 and the classic Foundry Agent Service (azure-ai-agents SDK / AgentsClient) retires March 31, 2027. We migrate Threads/Messages/Runs/Assistants patterns to the Responses API (Conversations / Items / Responses / Agent Versions) and re-platform onto the new Agent Runtime with minimal disruption.',
    },
    {
      question: 'Do you provide production and interview support for agents?',
      answer:
        'Both. We firefight live agent incidents (tool/MCP failures, memory issues, missing traces, runtime errors) and provide real-time proxy interview support for Foundry Agent Service and multi-agent system-design rounds. See our agent production and interview support pages.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Foundry Agent Service Teams With',
    cases: [
      'Migrating from the retiring Azure OpenAI Assistants API to the Responses API (Agents v2)',
      'Choosing between prompt agents, hosted agents, and direct Responses API calls',
      'Wiring tools — web search, file search, code interpreter, custom functions, OpenAPI, and MCP servers',
      'Fixing agent memory that does not persist across conversations, or missing/incomplete traces',
      'Building multi-agent workflows and A2A communication between agents',
      'Preparing for a Foundry Agent Service or multi-agent system-design interview',
    ],
  },
  bottomCTAHeading: 'Need Foundry Agent Service Help Right Now?',
  bottomCTABody:
    'In-house Foundry Agent Service experts available same-day — Responses API migration, tools, memory, MCP, A2A, production fixes, or proxy interview support. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, A('Foundry Agent Service production support', 'foundry-agent-service-production-support')],
    techLinks: [A('Foundry Agent Runtime job support', 'foundry-agent-runtime-job-support'), A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support')],
    problemLink: agentProblem,
    proxyLink: agentProxy,
    additionalLinks: [
      A('Foundry hosted agents job support', 'foundry-hosted-agents-job-support'),
      A('Foundry prompt agents job support', 'foundry-prompt-agents-job-support'),
      A('Foundry Responses API agents', 'foundry-responses-api-agents-job-support'),
      A('Foundry agent tools job support', 'foundry-agent-tools-job-support'),
      A('Foundry agent toolbox job support', 'foundry-agent-toolbox-job-support'),
      A('Foundry agent memory job support', 'foundry-agent-memory-job-support'),
      A('Foundry agent web search job support', 'foundry-agent-web-search-job-support'),
      A('Foundry agent file search job support', 'foundry-agent-file-search-job-support'),
      A('Foundry agent code interpreter job support', 'foundry-agent-code-interpreter-job-support'),
      A('Foundry agent A2A job support', 'foundry-agent-a2a-job-support'),
      A('Foundry agent authentication job support', 'foundry-agent-authentication-job-support'),
      A('Foundry agent observability job support', 'foundry-agent-observability-job-support'),
      A('Foundry agent evaluation job support', 'foundry-agent-evaluation-job-support'),
      A('Assistants API to Foundry agent migration', 'azure-openai-assistants-to-foundry-agent-migration'),
      AGENT_FRAMEWORK_LINK, FOUNDRY_IQ_LINK, EXISTING.agenticAi, AZURE_HUB_LINK,
    ],
  }),
});

// ─── Compact agent service pages ─────────────────────────────────────────────

const mk = (
  slug: string,
  title: string,
  description: string,
  h1: string,
  tagline: string,
  eyebrow: string,
  painIntro: string,
  heroVariant: string,
  faqService: string,
  faqUsage: string,
  extra: { label: string; href: string }[],
): LandingPageConfig =>
  azureServicePage({
    slug, title, description, h1, tagline, heroEyebrow: eyebrow, painIntro, heroVariant,
    keywords: [title.split(' — ')[0], 'Foundry Agent Service', 'Microsoft Foundry agents', 'Azure AI agents'],
    faqs: azureServiceFaqs(faqService, faqUsage),
    relatedLinks: relatedLinks({
      geoLinks: [AGENT_HUB_LINK, FOUNDRY_HUB_LINK],
      techLinks: [extra[0] ?? AGENT_HUB_LINK, extra[1] ?? FOUNDRY_HUB_LINK],
      problemLink: agentProblem,
      proxyLink: agentProxy,
      additionalLinks: extra.slice(2).concat([AGENT_HUB_LINK, AZURE_HUB_LINK]),
    }),
  });

const agentProduction = mk(
  'foundry-agent-service-production-support',
  'Foundry Agent Service Production Support — Live Agent Incident Help',
  'Foundry Agent Service production support: fix agent tool/MCP failures, memory issues, Agent Runtime errors, missing traces, and A2A problems in production with an expert on the call.',
  'Foundry Agent Service Production Support — Fix Live Agent Incidents',
  'On-call help for Foundry agent incidents — tool/MCP failures, memory, runtime errors, and missing traces.',
  'Foundry Agent Production Firefighting',
  'A production agent whose tool calls fail, MCP server drops, memory does not persist, or traces go missing needs an expert who knows the Agent Runtime — fast.',
  'We firefight Foundry Agent Service in production: Agent Runtime errors, tool-call and OpenAPI failures, MCP server connection drops, memory (preview) not persisting, A2A issues, missing or incomplete traces, authentication/identity failures, and latency. We read agent traces, Application Insights, and request IDs to root-cause and stabilize.',
  'Foundry Agent Service production',
  'We firefight agent tool/MCP failures, memory, runtime errors, and missing traces live.',
  [A('Foundry agent troubleshooting', 'foundry-agent-troubleshooting-support'), A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support'), AZURE_PRODUCTION_LINK, A('Foundry agent observability job support', 'foundry-agent-observability-job-support')],
);

const agentRuntime = mk(
  'foundry-agent-runtime-job-support',
  'Foundry Agent Runtime Proxy Job Support — Hosting, Scaling & Protocols',
  'Foundry Agent Runtime job support: host and scale prompt and hosted agents, manage conversations and tool calls, and choose between the Responses API and the schema-free Invocations protocol.',
  'Foundry Agent Runtime Proxy Job Support — Host & Scale Agents Reliably',
  'Run agents at scale on the Agent Runtime — conversations, tool calls, lifecycle, and the right protocol.',
  'Foundry Agent Runtime',
  'The Agent Runtime hosts and scales your agents and manages conversations, tool calls, and lifecycle — but choosing protocols and getting autoscale and session state right takes experience.',
  'We help you operate the Foundry Agent Runtime: hosting and autoscaling prompt and hosted agents, managing conversations/items/responses and agent versions, and choosing between the OpenAI-compatible stateful Responses API and the schema-free Invocations protocol (plus OpenResponses/Activity for Microsoft 365 publishing). We tune session state, concurrency, and reliability.',
  'Foundry Agent Runtime',
  'We host and scale agents, manage conversations and tool calls, and pick the right runtime protocol.',
  [A('Foundry hosted agents job support', 'foundry-hosted-agents-job-support'), A('Foundry Responses API agents', 'foundry-responses-api-agents-job-support')],
);

const hostedAgents = mk(
  'foundry-hosted-agents-job-support',
  'Foundry Hosted Agents Proxy Job Support — Bring Your Own Code & Framework',
  'Foundry hosted agents job support: package your own container/code and framework (e.g. Microsoft Agent Framework), deploy with managed endpoint, autoscale, dedicated Entra identity, session state, and observability.',
  'Foundry Hosted Agents Proxy Job Support — Deploy Custom Agent Code',
  'Run your own agent code on Foundry — managed endpoint, autoscale, dedicated identity, and built-in observability.',
  'Foundry Hosted Agents',
  'Hosted agents let you bring your own framework and code, but packaging, identity, session state, and observability all have to be wired correctly to run in production.',
  'We help you build and ship Foundry hosted agents: package your container or .zip code and framework (Microsoft Agent Framework, Semantic Kernel, LangGraph, or custom), deploy with a Foundry-managed endpoint, autoscale, a dedicated Entra identity, session state, and built-in tracing. We cover local dev, CI/CD, and promotion.',
  'Foundry hosted agents',
  'We package and deploy your own agent code with managed endpoint, identity, session state, and observability.',
  [A('Microsoft Agent Framework Foundry support', 'microsoft-agent-framework-foundry-support'), A('Foundry Agent Runtime job support', 'foundry-agent-runtime-job-support')],
);

const promptAgents = mk(
  'foundry-prompt-agents-job-support',
  'Foundry Prompt Agents Proxy Job Support — Declarative Agents Done Right',
  'Foundry prompt agents job support: build declarative, Foundry-hosted agents — instructions, tools, model selection, and evaluation — the fastest way to ship a reliable Azure AI agent.',
  'Foundry Prompt Agents Proxy Job Support — Declarative Agents That Work',
  'Ship reliable agents fast with declarative prompt agents — Foundry hosts and runs them; you focus on instructions, tools, and evaluation.',
  'Foundry Prompt Agents',
  'Prompt agents are the fastest path to a working agent, but instructions, tool selection, and evaluation still determine whether it is reliable in production.',
  'We help you build declarative Foundry prompt agents (GA): crafting instructions, selecting tools (web search, file search, code interpreter, MCP), choosing models and Model Router, adding memory, and evaluating quality — all without managing hosting, since Foundry runs them for you.',
  'Foundry prompt agents',
  'We build declarative prompt agents — instructions, tools, models, and evaluation — Foundry-hosted.',
  [A('Foundry agent tools job support', 'foundry-agent-tools-job-support'), A('Foundry agent evaluation job support', 'foundry-agent-evaluation-job-support')],
);

const responsesAgents = mk(
  'foundry-responses-api-agents-job-support',
  'Foundry Responses API Agents Proxy Job Support — Stateful Agent Patterns',
  'Foundry Responses API agents job support: build stateful agents on the OpenAI-compatible Responses API — conversations, items, responses, agent versions, tool calls, and reasoning.',
  'Foundry Responses API Agents Proxy Job Support — Build on Agents v2',
  'Use the Responses API (Agents v2) to build stateful agents — the current, recommended surface replacing the Assistants API.',
  'Foundry Responses API Agents',
  'The Responses API replaced the Assistants API, and the object model changed to Conversations / Items / Responses / Agent Versions. Building on it correctly avoids a costly rewrite later.',
  'We help you build agents on the Foundry Responses API (Agents v2): the conversations/items/responses/agent-versions model, tool calls, structured outputs, reasoning items carried across turns, and agent versioning. We map old Assistants concepts to the new model and adopt the v1 stable /openai/v1/ routes.',
  'Foundry Responses API agents',
  'We build stateful agents on the Responses API — conversations, items, responses, agent versions, tools, and reasoning.',
  [A('Azure OpenAI Responses API', 'azure-openai-responses-api-job-support'), A('Assistants API to Foundry agent migration', 'azure-openai-assistants-to-foundry-agent-migration')],
);

const agentTools = mk(
  'foundry-agent-tools-job-support',
  'Foundry Agent Tools Proxy Job Support — Functions, OpenAPI & Built-in Tools',
  'Foundry agent tools job support: wire built-in tools (web search, file search, code interpreter), custom functions, and OpenAPI specs into agents reliably, with correct schemas and error handling.',
  'Foundry Agent Tools Proxy Job Support — Give Agents Reliable Capabilities',
  'Wire tools into Foundry agents that actually work — built-in tools, custom functions, OpenAPI, and robust error handling.',
  'Foundry Agent Tools',
  'Agents are only as good as their tools. Flaky tool calls, bad schemas, and missing error handling are the top reasons agents fail in production.',
  'We help you add and harden Foundry agent tools: built-in web search, file search, and code interpreter; custom functions with strict JSON schemas; OpenAPI-spec tools; validation, retries, and fallback; and grouping into Toolboxes. We diagnose and fix tool-call failures and wrong-tool selection.',
  'Foundry agent tools',
  'We wire built-in tools, custom functions, and OpenAPI specs into agents with correct schemas and error handling.',
  [A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support'), A('Foundry agent toolbox job support', 'foundry-agent-toolbox-job-support'), A('Azure OpenAI tool calling job support', 'azure-openai-tool-calling-job-support')],
);

const agentToolbox = mk(
  'foundry-agent-toolbox-job-support',
  'Foundry Agent Toolbox Proxy Job Support — Governed Tool Endpoints',
  'Foundry agent Toolbox job support: group tools behind a single managed, MCP-compatible endpoint with centralized authentication, governance, and versioning for enterprise agents.',
  'Foundry Agent Toolbox Proxy Job Support — Centralized, Governed Tools',
  'Manage agent tools at enterprise scale — group them behind one governed, MCP-compatible Toolbox endpoint.',
  'Foundry Agent Toolbox',
  'As agents multiply, ungoverned tools become a security and maintenance nightmare. Toolboxes centralize auth, governance, and versioning — if configured well.',
  'We help you design Foundry Toolboxes: grouping tools behind a single managed, MCP-compatible endpoint with centralized authentication, governance, and versioning, so multiple agents share governed capabilities. We cover access control, secrets, and lifecycle.',
  'Foundry agent Toolbox',
  'We group tools behind one governed, MCP-compatible endpoint with centralized auth, governance, and versioning.',
  [A('Foundry agent tools job support', 'foundry-agent-tools-job-support'), A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support'), SECURITY_HUB_LINK],
);

const agentMemory = mk(
  'foundry-agent-memory-job-support',
  'Foundry Agent Memory Proxy Job Support — Persistent Context Across Sessions',
  'Foundry agent memory job support: configure agent memory (preview) so agents retain context across conversations, with the right scope, retention, and privacy controls.',
  'Foundry Agent Memory Proxy Job Support — Make Agents Remember Correctly',
  'Give agents durable, well-scoped memory — retention, privacy, and retrieval that works across sessions.',
  'Foundry Agent Memory',
  'Memory that does not persist, leaks across users, or grows unbounded is a common agent failure. Getting scope, retention, and privacy right is subtle.',
  'We help you configure Foundry agent memory (preview): what to remember, memory scope (per user/session/agent), retention and eviction, privacy and data-residency controls, and retrieval into the conversation. We fix memory that does not persist or bleeds across sessions.',
  'Foundry agent memory',
  'We configure agent memory scope, retention, privacy, and retrieval so agents remember correctly across sessions.',
  [A('Foundry agent troubleshooting', 'foundry-agent-troubleshooting-support'), A('Microsoft Foundry IQ job support', 'microsoft-foundry-iq-proxy-job-support')],
);

const agentWebSearch = mk(
  'foundry-agent-web-search-job-support',
  'Foundry Agent Web Search Proxy Job Support — Grounded, Current Answers',
  'Foundry agent web search tool job support: ground agents in current web information with the built-in web search tool — configuration, citations, and reliability.',
  'Foundry Agent Web Search Proxy Job Support — Ground Agents in the Live Web',
  'Add the built-in web search tool to Foundry agents for current, cited answers — configured and reliable.',
  'Foundry Agent Web Search',
  'Agents that answer from stale training data lose trust. The built-in web search tool grounds them in current information — when configured and cited correctly.',
  'We help you add and tune the Foundry web search tool: enabling it on prompt and hosted agents, controlling sources and freshness, surfacing citations, and handling latency and failures gracefully.',
  'Foundry agent web search',
  'We enable and tune the built-in web search tool for current, cited agent answers.',
  [A('Foundry agent tools job support', 'foundry-agent-tools-job-support'), A('Foundry IQ agentic retrieval support', 'foundry-iq-agentic-retrieval-support')],
);

const agentFileSearch = mk(
  'foundry-agent-file-search-job-support',
  'Foundry Agent File Search Proxy Job Support — Document-Grounded Agents',
  'Foundry agent file search tool job support: ground agents in your own documents with the built-in file search tool — ingestion, chunking, citations, and retrieval quality.',
  'Foundry Agent File Search Proxy Job Support — Ground Agents in Your Docs',
  'Use the built-in file search tool to ground agents in your documents — reliable retrieval and citations.',
  'Foundry Agent File Search',
  'File search makes agents answer from your documents — but ingestion, chunking, and retrieval quality decide whether the answers are actually right.',
  'We help you use the Foundry file search tool: uploading and indexing documents, chunking, retrieval tuning, citations, and evaluating groundedness. Where you outgrow it, we graduate you to Azure AI Search and Foundry IQ.',
  'Foundry agent file search',
  'We configure the file search tool — ingestion, chunking, citations, and retrieval quality — for document-grounded agents.',
  [A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support'), A('Microsoft Foundry IQ job support', 'microsoft-foundry-iq-proxy-job-support')],
);

const agentCodeInterpreter = mk(
  'foundry-agent-code-interpreter-job-support',
  'Foundry Agent Code Interpreter Proxy Job Support — Safe Code Execution',
  'Foundry agent code interpreter job support: enable the built-in code interpreter for data analysis, file generation, and computation with safe, sandboxed execution.',
  'Foundry Agent Code Interpreter Proxy Job Support — Let Agents Run Code',
  'Enable the code interpreter tool so agents can analyze data, run computations, and generate files — safely and reliably.',
  'Foundry Agent Code Interpreter',
  'The code interpreter unlocks data analysis and computation, but sandboxing, file handling, and reliability need to be set up correctly.',
  'We help you enable and use the Foundry code interpreter tool: sandboxed code execution for data analysis and computation, file inputs and generated outputs, timeouts and resource limits, and reliable orchestration within an agent.',
  'Foundry agent code interpreter',
  'We enable the code interpreter for safe, sandboxed data analysis, computation, and file generation.',
  [A('Foundry agent tools job support', 'foundry-agent-tools-job-support'), A('Foundry prompt agents job support', 'foundry-prompt-agents-job-support')],
);

const agentMcp = mk(
  'foundry-agent-mcp-job-support',
  'Foundry Agent MCP Proxy Job Support — Model Context Protocol Integration',
  'Foundry agent MCP job support: connect agents to remote MCP servers and custom MCP on Azure Functions, fix connection failures, and govern MCP tools through Toolboxes.',
  'Foundry Agent MCP Proxy Job Support — Reliable Model Context Protocol Tools',
  'Connect Foundry agents to MCP servers that actually stay connected — remote MCP, custom MCP on Azure Functions, and governance.',
  'Foundry Agent MCP',
  'MCP is powerful but connection drops, auth failures, and schema mismatches are common. Getting agents reliably talking to MCP servers takes real debugging.',
  'We help you integrate MCP with Foundry agents: connecting remote MCP servers and building custom MCP servers on Azure Functions (/runtime/webhooks/mcp), handling authentication and connection reliability, mapping tool schemas, and governing MCP tools through Toolboxes. We diagnose and fix MCP connection failures.',
  'Foundry agent MCP',
  'We connect agents to remote and custom MCP servers, fix connection failures, and govern MCP tools via Toolboxes.',
  [A('Foundry agent toolbox job support', 'foundry-agent-toolbox-job-support'), A('MCP Microsoft Foundry job support', 'mcp-microsoft-foundry-job-support'), A('Azure Functions OpenAI job support', 'azure-functions-openai-job-support')],
);

const agentA2A = mk(
  'foundry-agent-a2a-job-support',
  'Foundry Agent A2A Proxy Job Support — Agent-to-Agent Communication',
  'Foundry agent A2A job support: build agent-to-agent communication with the A2A protocol (preview) for multi-agent systems, delegation, and orchestration on Microsoft Foundry.',
  'Foundry Agent A2A Proxy Job Support — Multi-Agent Communication',
  'Let agents call agents — design A2A (preview) communication, delegation, and orchestration on Foundry.',
  'Foundry Agent A2A',
  'Multi-agent systems need agents to talk to each other. The A2A protocol enables it, but delegation, error handling, and orchestration have to be designed.',
  'We help you build agent-to-agent (A2A, preview) systems on Foundry: designing delegation and orchestration between agents, handling failures and loops, and combining A2A with MCP tools and Microsoft Agent Framework workflows for robust multi-agent architectures.',
  'Foundry agent A2A',
  'We design A2A (preview) communication, delegation, and orchestration for multi-agent systems.',
  [A('Microsoft Agent Framework multi-agent support', 'microsoft-agent-framework-multi-agent-support'), A('Foundry Agent Runtime job support', 'foundry-agent-runtime-job-support')],
);

const agentAuth = mk(
  'foundry-agent-authentication-job-support',
  'Foundry Agent Authentication Proxy Job Support — Identity & Access for Agents',
  'Foundry agent authentication job support: configure Entra ID and Managed Identity for agents, dedicated agent identities, on-behalf-of flows, and RBAC for tools and knowledge.',
  'Foundry Agent Authentication Proxy Job Support — Secure Agent Identity',
  'Give agents the right identity and access — Entra ID, Managed Identity, dedicated agent identities, and least-privilege RBAC.',
  'Foundry Agent Authentication',
  'Agents act on behalf of users and systems, so identity mistakes are security incidents. Getting agent auth and RBAC right is essential.',
  'We help you secure Foundry agent identity: dedicated Entra identities for hosted agents, Managed Identity for tool and resource access, on-behalf-of and delegated flows, least-privilege RBAC for tools and knowledge sources, and secrets in Key Vault. We fix agent auth failures.',
  'Foundry agent authentication',
  'We configure Entra ID, Managed Identity, dedicated agent identities, and least-privilege RBAC for agents.',
  [SECURITY_HUB_LINK, A('Azure AI managed identity job support', 'azure-ai-managed-identity-job-support')],
);

const agentObservability = mk(
  'foundry-agent-observability-job-support',
  'Foundry Agent Observability Proxy Job Support — Tracing & Agent Traces',
  'Foundry agent observability job support: end-to-end agent tracing (GA), OpenTelemetry, Application Insights, tool-call visibility, and evaluation-in-production for Foundry agents.',
  'Foundry Agent Observability Proxy Job Support — See Every Agent Step',
  'Trace what your agents actually do — end-to-end tracing, tool-call visibility, and production evaluation.',
  'Foundry Agent Observability',
  'When an agent gives a wrong answer, traces tell you which step failed. Missing or shallow tracing makes agent debugging guesswork.',
  'We help you instrument Foundry agents: end-to-end tracing for prompt and hosted agents (GA; preview for workflow/external agents), OpenTelemetry export, Application Insights dashboards, tool-call and MCP visibility, request IDs, and continuous evaluation against production traffic.',
  'Foundry agent observability',
  'We instrument end-to-end agent tracing, OpenTelemetry, Application Insights, and production evaluation.',
  [A('Microsoft Foundry observability job support', 'microsoft-foundry-observability-job-support'), OBSERVABILITY_HUB_LINK],
);

const agentEvaluation = mk(
  'foundry-agent-evaluation-job-support',
  'Foundry Agent Evaluation Proxy Job Support — Trajectory & Quality Graders',
  'Foundry agent evaluation job support: evaluate agent trajectories, tool use, groundedness, and task success with enterprise evaluations, and gate agent releases in CI.',
  'Foundry Agent Evaluation Proxy Job Support — Prove Agents Actually Work',
  'Evaluate agents on real tasks — trajectory, tool use, groundedness, and success — and gate releases in CI.',
  'Foundry Agent Evaluation',
  'Agents are hard to evaluate: it is not just the final answer but the whole trajectory. Without evaluation, quality silently regresses.',
  'We help you evaluate Foundry agents with enterprise evaluations (GA): trajectory and tool-use evaluation, groundedness and safety graders, task-success metrics, evaluation datasets, and CI gates so agent changes are proven before release.',
  'Foundry agent evaluation',
  'We evaluate agent trajectories, tool use, groundedness, and task success, and gate agent releases in CI.',
  [A('Microsoft Foundry model evaluation job support', 'microsoft-foundry-model-evaluation-job-support'), A('Azure AI evaluation job support', 'azure-ai-evaluation-job-support')],
);

const agentTroubleshooting = mk(
  'foundry-agent-troubleshooting-support',
  'Foundry Agent Troubleshooting Support — Fix Agent Failures Fast',
  'Foundry agent troubleshooting support: root-cause tool-call failures, MCP connection drops, memory issues, missing traces, runtime errors, and A2A problems with a structured method.',
  'Foundry Agent Troubleshooting Support — Root-Cause Agent Failures',
  'A structured method for agent failures: symptom → root cause → traces → tool/identity/network check → fix → validation → prevention.',
  'Foundry Agent Troubleshooting',
  'Agent failures span tools, memory, identity, and networking — and often surface as a vague error. A disciplined method beats guessing.',
  'We troubleshoot Foundry agents methodically: reproduce the failure, read agent traces and Application Insights, isolate root cause across tool schemas, MCP connectivity, memory, Entra identity, and networking, apply the fix, validate, and prevent recurrence.',
  'Foundry agent troubleshooting',
  'We root-cause tool/MCP failures, memory issues, missing traces, and runtime errors and ship a durable fix.',
  [A('Foundry Agent Service production support', 'foundry-agent-service-production-support'), A('Foundry agent observability job support', 'foundry-agent-observability-job-support')],
);

// ─── Migration ───────────────────────────────────────────────────────────────

const assistantsMigration = mk(
  'azure-openai-assistants-to-foundry-agent-migration',
  'Assistants API to Foundry Agent Migration — Beat the Aug 2026 Retirement',
  'Azure OpenAI Assistants API to Foundry Agent Service migration support: move Threads/Messages/Runs/Assistants to the Responses API (Conversations/Items/Responses/Agent Versions) before the August 26, 2026 retirement.',
  'Azure OpenAI Assistants API → Foundry Agent Migration Support',
  'Migrate off the retiring Assistants API to the Responses API and Foundry Agent Service — with minimal disruption.',
  'Assistants API Migration',
  'The Azure OpenAI Assistants API retires August 26, 2026. If your app still uses Threads/Messages/Runs/Assistants, you need a migration plan now.',
  'We migrate you off the retiring Assistants API to the Responses API (Agents v2) and Foundry Agent Service: mapping Threads/Messages/Runs/Assistants to Conversations/Items/Responses/Agent Versions, re-platforming tools onto the new model, adopting the v1 stable /openai/v1/ routes, and validating parity. We also plan the classic Foundry Agent Service (azure-ai-agents SDK) migration ahead of its March 31, 2027 retirement.',
  'Assistants API to Foundry Agent migration',
  'We migrate Assistants API apps to the Responses API and Foundry Agent Service before the retirement deadline.',
  [A('Foundry Responses API agents', 'foundry-responses-api-agents-job-support'), A('Foundry agent classic migration support', 'foundry-agent-classic-migration-support'), AGENT_HUB_LINK],
);

const classicMigration = mk(
  'foundry-agent-classic-migration-support',
  'Foundry Agent Classic Migration Support — Move Off the Legacy SDK',
  'Foundry Agent Service classic migration support: move from the classic azure-ai-agents SDK / AgentsClient to the new Foundry Agent Service and Responses API before the March 31, 2027 retirement.',
  'Foundry Agent Classic Migration Support — Modernize Legacy Agents',
  'Migrate classic Foundry Agent Service (azure-ai-agents) apps to the new Agent Service and Responses API.',
  'Foundry Agent Classic Migration',
  'The classic Foundry Agent Service (azure-ai-agents SDK / AgentsClient) retires March 31, 2027. Legacy agent apps need a modernization path.',
  'We migrate classic Foundry Agent Service apps (azure-ai-agents SDK / AgentsClient) to the current Agent Service and Responses API — mapping the object model, re-wiring tools and knowledge, moving to the Agent Runtime with hosted or prompt agents, and validating behavior parity.',
  'Foundry Agent classic migration',
  'We migrate classic azure-ai-agents apps to the new Foundry Agent Service and Responses API.',
  [A('Assistants API to Foundry agent migration', 'azure-openai-assistants-to-foundry-agent-migration'), AGENT_HUB_LINK],
);

// ─── Microsoft Agent Framework ───────────────────────────────────────────────
// NOTE: the hub /microsoft-agent-framework-job-support/ already exists (owned by
// data/dotnet-cluster-pages.ts → microsoftAgentFrameworkJobSupport). We preserve and
// cross-link it (AGENT_FRAMEWORK_LINK) rather than duplicating the slug. The pages
// below are additive Agent-Framework subservices that funnel into that existing hub.

const agentFrameworkMulti = mk(
  'microsoft-agent-framework-multi-agent-support',
  'Microsoft Agent Framework Multi-Agent Support — Graph Workflows',
  'Microsoft Agent Framework multi-agent support: design graph-based (data-flow) multi-agent workflows, orchestration, and handoffs — migrating event-driven AutoGen patterns to the new model.',
  'Microsoft Agent Framework Multi-Agent Support — Orchestrate Agent Teams',
  'Design robust multi-agent systems with Agent Framework graph workflows — orchestration, handoffs, and state.',
  'Agent Framework Multi-Agent',
  'Multi-agent patterns shift from AutoGen’s event-driven model to Agent Framework’s data-flow/graph workflows — a rework that needs experience to get right.',
  'We help you design multi-agent systems on Microsoft Agent Framework: graph-based (data-flow) workflows, orchestration and handoffs between specialized agents, shared state, error handling, and combining with Foundry Agent Service, MCP, and A2A. We migrate AutoGen multi-agent patterns to the new model.',
  'Agent Framework multi-agent',
  'We design graph-based multi-agent workflows, orchestration, and handoffs, migrating AutoGen patterns to the new model.',
  [A('AutoGen to Microsoft Agent Framework migration', 'autogen-to-microsoft-agent-framework-migration'), A('Foundry agent A2A job support', 'foundry-agent-a2a-job-support')],
);

const agentFrameworkFoundry = mk(
  'microsoft-agent-framework-foundry-support',
  'Microsoft Agent Framework + Foundry Support — Hosted Agent Deployment',
  'Microsoft Agent Framework + Microsoft Foundry support: build agents with Agent Framework and deploy them as Foundry hosted agents with managed endpoints, identity, and observability.',
  'Microsoft Agent Framework + Foundry Support — Framework to Production',
  'Take Agent Framework agents to production on Foundry — deploy as hosted agents with managed identity and observability.',
  'Agent Framework + Foundry',
  'Building with Agent Framework is one thing; running it reliably on Foundry with identity, autoscale, and observability is another.',
  'We help you deploy Microsoft Agent Framework agents as Foundry hosted agents: packaging code, wiring the managed endpoint, dedicated Entra identity, session state, tracing, and evaluation — bridging framework development and production Foundry operations.',
  'Microsoft Agent Framework on Foundry',
  'We deploy Agent Framework agents as Foundry hosted agents with managed endpoint, identity, and observability.',
  [A('Foundry hosted agents job support', 'foundry-hosted-agents-job-support'), A('Semantic Kernel Foundry job support', 'semantic-kernel-foundry-job-support')],
);

const agentFrameworkMcp = mk(
  'microsoft-agent-framework-mcp-support',
  'Microsoft Agent Framework MCP Support — Tool & Context Integration',
  'Microsoft Agent Framework MCP support: integrate Model Context Protocol tools and servers into Agent Framework agents and workflows across .NET and Python.',
  'Microsoft Agent Framework MCP Support — Wire MCP Into Agents',
  'Integrate MCP tools and servers into Agent Framework agents — reliable connections and governed tools.',
  'Agent Framework MCP',
  'MCP integration in Agent Framework unlocks a huge tool ecosystem, but connections, auth, and schemas still need careful wiring.',
  'We help you integrate MCP with Microsoft Agent Framework: connecting MCP servers to agents and workflows, handling auth and reliability, mapping tool schemas, and governing tools — consistent with how Foundry Toolboxes expose MCP-compatible endpoints.',
  'Microsoft Agent Framework MCP',
  'We integrate MCP tools and servers into Agent Framework agents and workflows across .NET and Python.',
  [A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support'), A('MCP Microsoft Foundry job support', 'mcp-microsoft-foundry-job-support')],
);

const skMigration = mk(
  'semantic-kernel-agent-framework-migration',
  'Semantic Kernel → Agent Framework Migration Support',
  'Semantic Kernel to Microsoft Agent Framework migration support: migrate SK agents and plugins to Agent Framework 1.0 (GA) — largely API-compatible for single agents, with multi-agent rework.',
  'Semantic Kernel → Microsoft Agent Framework Migration Support',
  'Migrate Semantic Kernel apps to Agent Framework 1.0 — the unified successor — with a clear, low-risk path.',
  'Semantic Kernel Migration',
  'Agent Framework is the successor to Semantic Kernel. Single-agent migration is largely API-compatible, but you want to migrate deliberately, not accidentally.',
  'We migrate Semantic Kernel apps to Microsoft Agent Framework 1.0 (GA): mapping SK agents, plugins, and planners to Agent Framework agents, function tools, and workflows using the official migration guides. Single-agent migration is largely API-compatible; we handle the multi-agent and orchestration differences.',
  'Semantic Kernel to Agent Framework migration',
  'We migrate SK agents and plugins to Agent Framework 1.0 using the official migration path.',
  [A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support'), A('Semantic Kernel Foundry job support', 'semantic-kernel-foundry-job-support')],
);

const autogenMigration = mk(
  'autogen-to-microsoft-agent-framework-migration',
  'AutoGen → Microsoft Agent Framework Migration Support',
  'AutoGen to Microsoft Agent Framework migration support: migrate event-driven AutoGen multi-agent systems to Agent Framework’s data-flow/graph workflows on the 1.0 GA framework.',
  'AutoGen → Microsoft Agent Framework Migration Support',
  'Migrate AutoGen multi-agent systems to Agent Framework — from event-driven to graph-based workflows.',
  'AutoGen Migration',
  'AutoGen’s event-driven multi-agent model maps to Agent Framework’s data-flow/graph workflows — a rework that is easy to get wrong without a plan.',
  'We migrate AutoGen systems to Microsoft Agent Framework 1.0 (GA): translating event-driven multi-agent patterns to graph-based (data-flow) workflows, preserving agent roles and handoffs, and using the official AutoGen migration guide. We validate behavior and performance after migration.',
  'AutoGen to Agent Framework migration',
  'We migrate event-driven AutoGen multi-agent systems to Agent Framework graph workflows.',
  [A('Microsoft Agent Framework multi-agent support', 'microsoft-agent-framework-multi-agent-support'), A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support')],
);

const agentFrameworkTroubleshooting = mk(
  'microsoft-agent-framework-troubleshooting-support',
  'Microsoft Agent Framework Troubleshooting Support',
  'Microsoft Agent Framework troubleshooting support: fix workflow, tool, model-provider, and deployment issues in Agent Framework agents across .NET and Python.',
  'Microsoft Agent Framework Troubleshooting Support — Fix Agent Bugs',
  'Root-cause Agent Framework issues — workflows, tools, providers, and deployment — across .NET and Python.',
  'Agent Framework Troubleshooting',
  'Agent Framework spans workflows, tools, providers, and hosting. When something breaks, a structured method finds it fast.',
  'We troubleshoot Microsoft Agent Framework: workflow/graph execution issues, tool and MCP failures, model-provider errors, state and concurrency bugs, and Foundry hosted-agent deployment problems — across .NET and Python, with a reproduce-isolate-fix-validate method.',
  'Microsoft Agent Framework troubleshooting',
  'We root-cause workflow, tool, provider, and deployment issues in Agent Framework across .NET and Python.',
  [A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support'), A('Foundry agent troubleshooting', 'foundry-agent-troubleshooting-support')],
);

export const azureAgentPages: LandingPageConfig[] = [
  agentHub,
  agentProduction,
  agentRuntime,
  hostedAgents,
  promptAgents,
  responsesAgents,
  agentTools,
  agentToolbox,
  agentMemory,
  agentWebSearch,
  agentFileSearch,
  agentCodeInterpreter,
  agentMcp,
  agentA2A,
  agentAuth,
  agentObservability,
  agentEvaluation,
  agentTroubleshooting,
  assistantsMigration,
  classicMigration,
  agentFrameworkMulti,
  agentFrameworkFoundry,
  agentFrameworkMcp,
  skMigration,
  autogenMigration,
  agentFrameworkTroubleshooting,
];
