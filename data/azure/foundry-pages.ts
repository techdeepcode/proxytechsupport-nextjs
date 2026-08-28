import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  azureServicePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  azureJobFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  OPENAI_SUPP_LINK,
  AGENT_HUB_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AZUREML_HUB_LINK,
  MLOPS_HUB_LINK,
  FOUNDRY_IQ_LINK,
  AGENT_FRAMEWORK_LINK,
  FOUNDRY_LOCAL_LINK,
  FOUNDRY_TOOLS_LINK,
  MODEL_ROUTER_LINK,
  SECURITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

// ─── Microsoft Foundry master hub ────────────────────────────────────────────

const foundryHub: LandingPageConfig = azurePage({
  slug: 'microsoft-foundry-proxy-job-support',
  title: 'Microsoft Foundry Proxy Job Support — Foundry Agents, Models & Model Router',
  description:
    'Real-time Microsoft Foundry (formerly Azure AI Foundry / Azure AI Studio) job support — Foundry resource and projects, Foundry Models, Foundry Agent Service, Model Router, evaluations, and observability. Production help and interview support, USA, UK, Europe & worldwide.',
  keywords: [
    'Microsoft Foundry job support', 'Azure AI Foundry job support', 'Foundry Agent Service support',
    'Foundry Models job support', 'Foundry Model Router support', 'Microsoft Foundry production support',
    'Azure AI Studio job support', 'Foundry project support',
  ],
  h1: 'Microsoft Foundry Proxy Job Support — Projects, Foundry Models, Agents & Model Router',
  tagline:
    'Real-time job support, production help, and interview assistance for Microsoft Foundry — the unified Azure AI platform (formerly Azure AI Foundry / Azure AI Studio).',
  heroEyebrow: 'Microsoft Foundry Support Hub — Updated August 2026',
  painIntro:
    'Migrating from a hub-based Azure AI Foundry project to the new Foundry resource model? Wiring up the unified project endpoint and azure-ai-projects SDK? Deploying Foundry Models or standing up an agent, and hitting RBAC, networking, or quota walls? A Microsoft Foundry expert on the call gets you unblocked.',
  heroVariant:
    'Microsoft Foundry (formerly Azure AI Foundry, and before that Azure AI Studio) is now the unified platform for building AI apps and agents on Azure. The current architecture centers on a single top-level Foundry resource (under Microsoft.CognitiveServices) that owns governance — networking, Entra ID RBAC, policy, and model deployments — with Foundry projects as the development boundary inside it. The new portal is GA and runs alongside Foundry (classic) for hub-based projects. We help with the Foundry resource/project model, the unified project endpoint and azure-ai-projects 2.x SDK, the v1 stable API routes (/openai/v1/), Foundry Models deployments, Foundry Model Router, Foundry Agent Service, evaluations, observability, and upgrading an existing Azure OpenAI resource to a Foundry resource without losing endpoints or state.',
  geoLine:
    'Microsoft Foundry support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover the Foundry resource/project model, azure-ai-projects SDK, Foundry Models catalog, Foundry Model Router, Foundry Agent Service, evaluations, observability, Foundry IQ, and Foundry Local — all current through August 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Is "Microsoft Foundry" the same as Azure AI Foundry?',
      answer:
        'Yes — Microsoft Foundry is the current name for the platform previously branded Azure AI Foundry, and before that Azure AI Studio. Azure AI Services is now branded Foundry Tools. The new Microsoft Foundry portal is GA; a Foundry (classic) portal runs side-by-side for hub-based projects. A lot of documentation and search traffic still says "Azure AI Foundry," so we work fluently across both names and help you migrate to the new resource/project model.',
    },
    {
      question: 'What does the new Foundry resource and project architecture look like?',
      answer:
        'There is a single top-level Foundry resource (provider namespace Microsoft.CognitiveServices, shared with Azure OpenAI/Speech/Vision/Language) that owns governance — networking, security, Entra ID RBAC, policy, and model deployments. Foundry projects live inside the resource as development boundaries where teams build and evaluate. This replaces the older hub + Azure OpenAI + Azure AI Services model. Access uses a unified project endpoint with the azure-ai-projects 2.x SDK plus OpenAI() clients, and the v1 stable /openai/v1/ routes replace the old monthly api-version parameters.',
    },
    {
      question: 'Can you help migrate from hub-based projects or upgrade an Azure OpenAI resource?',
      answer:
        'Yes. We help you move from hub-based Foundry (classic) projects to the new Foundry resource/project model, consolidate the old multi-endpoint/multi-package setup onto the single project endpoint and azure-ai-projects SDK, and upgrade an existing Azure OpenAI resource to a Foundry resource while preserving endpoints, keys, and deployment state. We also map the renamed RBAC roles (Foundry User / Foundry Owner / Foundry Account Owner / Foundry Project Manager).',
    },
    {
      question: 'Which Microsoft Foundry capabilities do you support?',
      answer:
        'Foundry Models (the 10,000+ model catalog including OpenAI GPT-5.6, Anthropic Claude, xAI Grok, DeepSeek, Meta Llama), Foundry Model Router, Foundry Agent Service (Responses API, Agent Runtime, prompt and hosted agents, tools, memory, MCP, A2A), evaluations, observability and tracing, Foundry IQ, and Foundry Local — plus the security, networking, and cost work around them.',
    },
    {
      question: 'Do you provide production support and interview help for Foundry?',
      answer:
        'Both. We firefight live Foundry incidents (deployment, quota, RBAC, agent, and networking failures) and prepare you for Microsoft Foundry interviews with mock sessions and real-time guidance on architecture and system-design rounds. See our production support and interview support pages.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Microsoft Foundry Teams With',
    cases: [
      'Migrating hub-based Foundry (classic) projects to the new Foundry resource/project model',
      'Consolidating multiple endpoints and SDK packages onto the unified project endpoint and azure-ai-projects 2.x',
      'Deploying Foundry Models and configuring Model Router routing profiles and custom model subsets',
      'Standing up a Foundry Agent Service agent with tools, memory, and MCP and getting it through evaluations',
      'Fixing Entra ID RBAC, Private Endpoint, and quota issues blocking a Foundry deployment',
      'Preparing for a Microsoft Foundry architecture or system-design interview',
    ],
  },
  bottomCTAHeading: 'Need Microsoft Foundry Help Right Now?',
  bottomCTABody:
    'In-house Microsoft Foundry experts available same-day — migration, agents, Foundry Models, Model Router, production fixes, or interview prep. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, { label: 'Microsoft Foundry production support', href: '/microsoft-foundry-production-support/' }],
    techLinks: [AGENT_HUB_LINK, MODEL_ROUTER_LINK],
    problemLink: { label: 'Microsoft Foundry troubleshooting', href: '/microsoft-foundry-troubleshooting-support/' },
    proxyLink: { label: 'Microsoft Foundry interview support', href: '/microsoft-foundry-proxy-interview-support/' },
    additionalLinks: [
      { label: 'Microsoft Foundry Models job support', href: '/microsoft-foundry-models-job-support/' },
      MODEL_ROUTER_LINK,
      { label: 'Foundry model evaluation job support', href: '/microsoft-foundry-model-evaluation-job-support/' },
      { label: 'Microsoft Foundry observability job support', href: '/microsoft-foundry-observability-job-support/' },
      AGENT_HUB_LINK, FOUNDRY_IQ_LINK, FOUNDRY_LOCAL_LINK, FOUNDRY_TOOLS_LINK, AGENT_FRAMEWORK_LINK,
      OPENAI_SUPP_LINK, SEARCH_HUB_LINK, RAG_HUB_LINK, AZUREML_HUB_LINK, MLOPS_HUB_LINK,
      EXISTING.azureOpenAiJobSupport, EXISTING.azureAiFoundryDotnet, EXISTING.genai, EXISTING.aimlHub,
    ],
  }),
});

// ─── Compact Foundry service pages ───────────────────────────────────────────

const foundryTechLinks = [FOUNDRY_HUB_LINK, MODEL_ROUTER_LINK];
const foundryProblem = { label: 'Microsoft Foundry troubleshooting', href: '/microsoft-foundry-troubleshooting-support/' };
const foundryProxy = { label: 'Microsoft Foundry interview support', href: '/microsoft-foundry-proxy-interview-support/' };

const foundryProduction: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-production-support',
  title: 'Microsoft Foundry Production Support — Live Foundry Incident Help',
  description:
    'Real-time Microsoft Foundry production support: fix deployment, quota, RBAC, agent, model-router, and networking failures in Foundry resources and projects with an Azure AI expert on the call.',
  keywords: [
    'Microsoft Foundry production support', 'Foundry deployment failure', 'Foundry RBAC error',
    'Foundry agent production issue', 'Azure AI Foundry production support', 'Foundry quota error',
  ],
  h1: 'Microsoft Foundry Production Support — Fix Live Foundry Issues Fast',
  tagline: 'On-call help for Microsoft Foundry production incidents — deployments, quotas, RBAC, agents, and networking.',
  heroEyebrow: 'Microsoft Foundry Production Firefighting',
  painIntro:
    'A Foundry Model deployment failing, an agent breaking in the Agent Runtime, Model Router returning errors, or an Entra ID RBAC change that locked a project out of production? Foundry incidents need an expert who knows the new resource/project model.',
  heroVariant:
    'We work Microsoft Foundry incidents live — Foundry resource and project misconfiguration, model-deployment and quota failures, Foundry Model Router errors and failover, Foundry Agent Service tool/MCP/memory failures, Entra ID RBAC (Foundry User/Owner/Account Owner/Project Manager) and Managed Identity issues, Private Endpoint and VNet connectivity, and observability gaps. We read Azure Monitor, Application Insights traces, and Log Analytics to find root cause and ship a durable fix.',
  faqs: azureServiceFaqs('Microsoft Foundry production', 'We firefight Foundry resource/project, model-deployment, Model Router, agent, RBAC, and networking incidents live.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_PRODUCTION_LINK],
    techLinks: [AGENT_HUB_LINK, MODEL_ROUTER_LINK],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [AZURE_HUB_LINK, OPENAI_SUPP_LINK, FOUNDRY_IQ_LINK, EXISTING.aimlProduction],
  }),
});

const foundryModels: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-models-job-support',
  title: 'Foundry Models Proxy Job Support — Model Catalog, Deployment & Selection',
  description:
    'Foundry Models job support: model catalog (OpenAI GPT-5.6, Anthropic Claude, xAI Grok, DeepSeek, Meta Llama), deployment types (Global Standard, Data Zone Standard), model selection, and cost/quality trade-offs on Microsoft Foundry.',
  keywords: [
    'Foundry Models job support', 'Microsoft Foundry model catalog', 'Foundry model deployment support',
    'Global Standard deployment', 'Data Zone Standard deployment', 'Foundry model selection',
  ],
  h1: 'Foundry Models Proxy Job Support — Catalog, Deployment Types & Model Selection',
  tagline: 'Choose, deploy, and operate the right models from the Foundry Models catalog for cost, quality, latency, and compliance.',
  heroEyebrow: 'Foundry Models Support',
  painIntro:
    'The Foundry Models catalog has 10,000+ models across providers and multiple deployment types. Picking the right model and deployment — and getting quota — is where teams stall.',
  heroVariant:
    'We help you navigate Foundry Models: the catalog spanning OpenAI (GPT-5.6 sol/terra/luna), Anthropic Claude (including Claude Opus 4.8), xAI Grok, DeepSeek, Meta Llama, Mistral, and more; the split between models sold directly by Azure and partner/open models; and deployment types — Global Standard, Data Zone Standard (EU and APAC data zones for sovereignty), and Regional. We help with model selection for cost/quality/latency, quota and access registration (e.g. GPT-5 base), and wiring deployments into your apps and agents.',
  faqs: azureServiceFaqs('Foundry Models', 'We help with model selection, deployment types (Global Standard / Data Zone Standard), quota, and access registration across the Foundry Models catalog.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
    techLinks: [MODEL_ROUTER_LINK, OPENAI_SUPP_LINK],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Foundry model evaluation job support', href: '/microsoft-foundry-model-evaluation-job-support/' }, AGENT_HUB_LINK, EXISTING.llm],
  }),
});

const modelRouter: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-model-router-job-support',
  title: 'Foundry Model Router Proxy Job Support — Routing Pool, Profiles & Failover',
  description:
    'Foundry Model Router job support: automatic per-prompt model selection across GPT-5.6 and Claude Opus 4.8, routing profiles, custom model subsets, agentic routing, 28-region availability, and cost optimization on Microsoft Foundry.',
  keywords: [
    'Foundry Model Router job support', 'Azure model router support', 'model router routing profiles',
    'model router cost optimization', 'agentic model routing', 'Foundry model routing pool',
  ],
  h1: 'Foundry Model Router Proxy Job Support — Routing Profiles, Failover & Cost',
  tagline: 'Cut inference cost without losing quality — configure Foundry Model Router routing profiles, custom subsets, and agentic routing.',
  heroEyebrow: 'Foundry Model Router Support',
  painIntro:
    'Model Router promises big cost savings by picking the best model per prompt — but only if the routing profile, model subset, and tool compatibility are set up right. Get it wrong and you overpay or degrade quality.',
  heroVariant:
    'Foundry Model Router is GA (version 2025-11-18) across 28 Azure regions, all supporting Global Standard and Data Zone Standard. It automatically selects the best chat model per prompt — Microsoft cites up to ~60% inference-cost savings at GPT-5-family fidelity. The current routing pool includes gpt-5.6-sol/terra/luna and claude-opus-4-8 (Claude must be deployed to your Foundry resource first), while older *-chat and some models were removed from the pool. We help configure routing profiles (quality vs cost skew), custom model subsets, automatic failover, and agentic routing that can select OpenAI, OSS, and Anthropic models by model+tool compatibility.',
  faqs: azureServiceFaqs('Foundry Model Router', 'We configure routing profiles, custom model subsets, failover, and agentic routing to cut cost while holding quality.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Foundry Models job support', href: '/microsoft-foundry-models-job-support/' }, AGENT_HUB_LINK],
    problemLink: { label: 'Azure AI cost optimization', href: '/azure-ai-cost-optimization-proxy-job-support/' },
    proxyLink: foundryProxy,
    additionalLinks: [OPENAI_SUPP_LINK, { label: 'Foundry model router guide', href: '/foundry-model-router-guide/' }, EXISTING.llm],
  }),
});

const modelEvaluation: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-model-evaluation-job-support',
  title: 'Foundry Model Evaluation Proxy Job Support — Evaluations, Metrics & Graders',
  description:
    'Microsoft Foundry model and agent evaluation job support: build evaluation datasets, run quality/safety graders, compare models, and add evaluations to CI so you ship Azure AI changes with confidence.',
  keywords: [
    'Foundry model evaluation job support', 'Azure AI evaluation support', 'Foundry evaluations',
    'LLM evaluation Azure', 'agent evaluation Foundry', 'Azure AI graders',
  ],
  h1: 'Foundry Model Evaluation Proxy Job Support — Datasets, Graders & CI Gates',
  tagline: 'Evaluate models and agents on Microsoft Foundry with real datasets, graders, and CI gates — not vibes.',
  heroEyebrow: 'Foundry Evaluations Support',
  painIntro:
    'Shipping an Azure AI change without evaluation is how quality quietly regresses. Building meaningful evaluation datasets and graders — and wiring them into CI — takes experience.',
  heroVariant:
    'We help you evaluate Foundry Models and agents: build representative evaluation datasets, choose and configure graders (quality, groundedness, safety, task-specific), compare candidate models and prompts, evaluate RAG groundedness and agent trajectories, and gate deployments in CI. Evaluation results feed model selection, Model Router profiles, and production monitoring.',
  faqs: azureServiceFaqs('Foundry model evaluation', 'We build evaluation datasets and graders, compare models, evaluate RAG and agents, and add evaluation gates to CI.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Azure AI evaluation job support', href: '/azure-ai-evaluation-job-support/' }, AGENT_HUB_LINK],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [MODEL_ROUTER_LINK, { label: 'Azure LLMOps job support', href: '/azure-llmops-job-support/' }, EXISTING.mlops],
  }),
});

const foundryObservability: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-observability-job-support',
  title: 'Microsoft Foundry Observability Proxy Job Support — Tracing, Metrics & Insights',
  description:
    'Microsoft Foundry observability job support: end-to-end agent tracing, OpenTelemetry, Application Insights, token/latency metrics, and evaluation-in-production for Foundry models and agents.',
  keywords: [
    'Microsoft Foundry observability', 'Foundry agent tracing', 'Azure AI OpenTelemetry',
    'Foundry Application Insights', 'Foundry monitoring job support', 'Azure AI tracing',
  ],
  h1: 'Microsoft Foundry Observability Proxy Job Support — Traces, Metrics & Evaluation',
  tagline: 'See what your Foundry agents and models actually do — end-to-end traces, token/latency metrics, and production evaluation.',
  heroEyebrow: 'Foundry Observability Support',
  painIntro:
    'When a Foundry agent gives a wrong answer or a deployment slows down, you need traces — not guesses. Standing up end-to-end observability across models, tools, and agents is where most teams fall short.',
  heroVariant:
    'We help you instrument Microsoft Foundry: end-to-end tracing for prompt and hosted agents (GA), OpenTelemetry export, Application Insights and Log Analytics dashboards, token-usage and latency metrics, tool-call and MCP visibility, request IDs for support tickets, and continuous evaluation datasets running against production traffic so quality regressions surface early.',
  faqs: azureServiceFaqs('Microsoft Foundry observability', 'We instrument agent tracing, OpenTelemetry, Application Insights dashboards, and production evaluation for Foundry.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Foundry agent tracing job support', href: '/foundry-agent-observability-job-support/' }, AGENT_HUB_LINK],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Azure AI observability job support', href: '/azure-ai-observability-proxy-job-support/' }, { label: 'Azure Application Insights AI job support', href: '/azure-application-insights-ai-job-support/' }],
  }),
});

const foundryTroubleshooting: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-troubleshooting-support',
  title: 'Microsoft Foundry Troubleshooting Support — Diagnose & Fix Foundry Errors',
  description:
    'Microsoft Foundry troubleshooting support: diagnose deployment-not-found, quota, RBAC/permission, agent tool, Model Router, and networking errors with a structured root-cause method and durable fix.',
  keywords: [
    'Microsoft Foundry troubleshooting', 'Foundry error fix', 'Foundry deployment not found',
    'Foundry permission denied', 'Foundry agent tool failure', 'Azure AI Foundry troubleshooting',
  ],
  h1: 'Microsoft Foundry Troubleshooting Support — Root-Cause Foundry Failures',
  tagline: 'A structured method for Foundry failures: symptom → root cause → logs/metrics → config/identity/network check → fix → validation → prevention.',
  heroEyebrow: 'Foundry Troubleshooting',
  painIntro:
    'Foundry errors are often ambiguous — a permission problem, a quota limit, a missing deployment, and a networking failure can all surface as a generic error. Guessing wastes hours.',
  heroVariant:
    'We troubleshoot Microsoft Foundry the same disciplined way every time: reproduce the symptom, isolate root cause across config, Entra ID identity/RBAC, and network, read Azure Monitor/Application Insights/Log Analytics and request IDs, apply the fix, validate it, and add prevention. Common cases: DeploymentNotFound, quota/429, Foundry role misconfiguration, agent tool/MCP failures, Model Router errors, and Private Endpoint connectivity.',
  faqs: azureServiceFaqs('Microsoft Foundry troubleshooting', 'We root-cause deployment, quota, RBAC, agent, Model Router, and networking failures and ship a durable fix.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_PRODUCTION_LINK],
    techLinks: [AGENT_HUB_LINK, MODEL_ROUTER_LINK],
    problemLink: AZURE_PRODUCTION_LINK,
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Azure OpenAI troubleshooting', href: '/azure-openai-troubleshooting-support/' }, { label: 'Foundry agent troubleshooting', href: '/foundry-agent-troubleshooting-support/' }],
  }),
});

// ─── Foundry IQ cluster ──────────────────────────────────────────────────────

const foundryIqHub: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-iq-proxy-job-support',
  title: 'Microsoft Foundry IQ Proxy Job Support — Managed Knowledge Layer for Agents',
  description:
    'Microsoft Foundry IQ job support: the managed, permission-aware knowledge layer for agents — serverless agentic retrieval over Work IQ, Fabric IQ, Web IQ, Azure SQL, and MCP sources, built on Azure AI Search.',
  keywords: [
    'Microsoft Foundry IQ job support', 'Foundry IQ agentic retrieval', 'Foundry IQ knowledge layer',
    'permission-aware knowledge Azure', 'Foundry IQ enterprise RAG', 'Foundry IQ support',
  ],
  h1: 'Microsoft Foundry IQ Proxy Job Support — Permission-Aware Agentic Knowledge',
  tagline: 'Give agents reliable, permission-aware enterprise knowledge with Foundry IQ — the managed knowledge layer built on Azure AI Search agentic retrieval.',
  heroEyebrow: 'Foundry IQ Support',
  painIntro:
    'Wiring every agent to its own bespoke RAG stack does not scale. Foundry IQ turns enterprise content into reusable, permission-aware knowledge bases — but configuring sources and permissions correctly takes care.',
  heroVariant:
    'Foundry IQ is Microsoft Foundry’s managed knowledge layer: serverless agentic retrieval that turns enterprise content into reusable, permission-aware knowledge bases for agents, built on Azure AI Search agentic retrieval. It unifies Work IQ, Fabric IQ (Data agents + Ontology), Azure SQL, File Search, MCP sources, and Web IQ (web grounding with publisher-preference honoring and zero data retention) behind one SLA-backed retrieval endpoint. It is partial GA — API-level GA with portal access in preview; Foundry IQ Serverless (Developer tier) is in public preview with billing beginning September 13, 2026. We help you design knowledge sources, wire permission-aware retrieval, and integrate it with Microsoft Agent Framework.',
  faqs: azureServiceFaqs('Microsoft Foundry IQ', 'We design knowledge sources, permission-aware agentic retrieval, and Foundry IQ integration for your agents.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
    techLinks: [SEARCH_HUB_LINK, RAG_HUB_LINK],
    problemLink: { label: 'Azure RAG troubleshooting', href: '/azure-rag-troubleshooting-support/' },
    proxyLink: foundryProxy,
    additionalLinks: [
      { label: 'Foundry IQ agentic retrieval support', href: '/foundry-iq-agentic-retrieval-support/' },
      { label: 'Foundry IQ enterprise RAG support', href: '/foundry-iq-enterprise-rag-support/' },
      { label: 'Azure AI Search agentic retrieval', href: '/azure-ai-search-agentic-retrieval-job-support/' },
      AGENT_HUB_LINK, { label: 'Foundry IQ guide', href: '/foundry-iq-guide/' },
    ],
  }),
});

const foundryIqAgentic: LandingPageConfig = azureServicePage({
  slug: 'foundry-iq-agentic-retrieval-support',
  title: 'Foundry IQ Agentic Retrieval Support — Query Planning & Synthesis',
  description:
    'Foundry IQ agentic retrieval support: configure serverless agentic retrieval, query planning across knowledge sources, reasoning effort, and answer synthesis for Azure AI agents.',
  keywords: [
    'Foundry IQ agentic retrieval', 'agentic retrieval Azure', 'Foundry IQ query planning',
    'answer synthesis Azure AI', 'knowledge base retrieve action',
  ],
  h1: 'Foundry IQ Agentic Retrieval Support — Multi-Source Reasoning Retrieval',
  tagline: 'Configure Foundry IQ agentic retrieval — query decomposition, semantic reranking, and answer synthesis across enterprise knowledge sources.',
  heroEyebrow: 'Foundry IQ Agentic Retrieval',
  painIntro:
    'Agentic retrieval is more than vector search — it plans subqueries, reranks, and can synthesize an answer. Tuning reasoning effort and sources for quality and cost is the hard part.',
  heroVariant:
    'Foundry IQ agentic retrieval, built on Azure AI Search, uses an LLM to decompose a query into parallel subqueries at low/medium reasoning effort, semantically reranks each with the semantic ranker, and merges results — optionally returning a synthesized answer. We help you configure knowledge bases and the retrieve action, choose reasoning effort (minimal/low/medium), wire indexed and remote knowledge sources, and tune for groundedness, latency, and cost.',
  faqs: azureServiceFaqs('Foundry IQ agentic retrieval', 'We configure knowledge bases, query planning, reasoning effort, and answer synthesis across your knowledge sources.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_IQ_LINK, AZURE_HUB_LINK],
    techLinks: [SEARCH_HUB_LINK, { label: 'Azure AI Search agentic retrieval', href: '/azure-ai-search-agentic-retrieval-job-support/' }],
    problemLink: { label: 'Azure RAG troubleshooting', href: '/azure-rag-troubleshooting-support/' },
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Azure AI Search Knowledge Agents', href: '/azure-ai-search-knowledge-agents-job-support/' }, RAG_HUB_LINK, AGENT_HUB_LINK],
  }),
});

const foundryIqEnterprise: LandingPageConfig = azureServicePage({
  slug: 'foundry-iq-enterprise-rag-support',
  title: 'Foundry IQ Enterprise RAG Support — Permission-Aware Knowledge at Scale',
  description:
    'Foundry IQ enterprise RAG support: reusable, permission-aware knowledge bases across Work IQ, Fabric IQ, Azure SQL, and MCP sources for grounded, governed agent answers at enterprise scale.',
  keywords: [
    'Foundry IQ enterprise RAG', 'permission-aware RAG Azure', 'enterprise knowledge Azure AI',
    'Foundry IQ knowledge base', 'governed RAG Azure',
  ],
  h1: 'Foundry IQ Enterprise RAG Support — Governed, Permission-Aware Knowledge',
  tagline: 'Scale RAG across the enterprise with Foundry IQ — one governed, permission-aware knowledge layer instead of dozens of bespoke pipelines.',
  heroEyebrow: 'Foundry IQ Enterprise RAG',
  painIntro:
    'Enterprise RAG fails on permissions and governance, not embeddings. Serving grounded answers while respecting who can see what is the real challenge.',
  heroVariant:
    'We help you build enterprise RAG on Foundry IQ: reusable knowledge bases that honor source permissions (permission-aware retrieval), unify Work IQ, Fabric IQ (Data agents + Ontology), Azure SQL, File Search, MCP sources, and Web IQ behind one SLA-backed endpoint, and deliver grounded, cited answers to multiple agents. We cover data onboarding, permissions, groundedness evaluation, and cost governance.',
  faqs: azureServiceFaqs('Foundry IQ enterprise RAG', 'We design permission-aware knowledge bases, unify enterprise sources, and deliver grounded, governed agent answers at scale.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_IQ_LINK, AZURE_HUB_LINK],
    techLinks: [RAG_HUB_LINK, SEARCH_HUB_LINK],
    problemLink: { label: 'Azure enterprise RAG job support', href: '/azure-enterprise-rag-job-support/' },
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Foundry IQ agentic retrieval support', href: '/foundry-iq-agentic-retrieval-support/' }, { label: 'Microsoft Fabric AI job support', href: '/microsoft-fabric-ai-job-support/' }, AGENT_HUB_LINK],
  }),
});

// ─── Foundry Local cluster ───────────────────────────────────────────────────

const foundryLocalHub: LandingPageConfig = azureServicePage({
  slug: 'microsoft-foundry-local-proxy-job-support',
  title: 'Microsoft Foundry Local Proxy Job Support — On-Prem, Edge & Disconnected AI',
  description:
    'Microsoft Foundry Local job support: on-prem, edge, and air-gapped inference on Azure Local with ONNX-GenAI and vLLM runtimes, multi-GPU model parallelism, and inference-aware routing without outbound internet.',
  keywords: [
    'Microsoft Foundry Local job support', 'Foundry Local Azure Local', 'Foundry Local vLLM',
    'disconnected AI Azure', 'air-gapped inference Azure', 'Foundry Local multi-GPU',
  ],
  h1: 'Microsoft Foundry Local Proxy Job Support — Private, Sovereign & Disconnected AI',
  tagline: 'Run models on your own hardware with Foundry Local on Azure Local — ONNX-GenAI and vLLM, multi-GPU, and fully disconnected inference.',
  heroEyebrow: 'Foundry Local Support',
  painIntro:
    'Sovereign, regulated, and air-gapped workloads cannot call a public endpoint. Standing up private inference on Azure Local — with GPUs actually utilized — is a specialist job.',
  heroVariant:
    'Foundry Local on Azure Local delivers on-prem, edge, and disconnected (air-gapped) inference. It ships a default ONNX-GenAI engine plus a vLLM runtime for high-throughput GPU serving, supports multi-node Kubernetes, and does inference-aware routing without outbound internet. We help you deploy models, tune multi-GPU model parallelism (tensor_parallel_size and pipeline_parallel_size), use the automatic GPU inference planner, bring your own models, cache models, and run evaluations — all in disconnected environments.',
  faqs: azureServiceFaqs('Microsoft Foundry Local', 'We deploy Foundry Local on Azure Local, tune multi-GPU vLLM serving, and run disconnected/air-gapped inference.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Foundry Local vLLM job support', href: '/foundry-local-vllm-job-support/' }, { label: 'Foundry Local multi-GPU job support', href: '/foundry-local-multi-gpu-job-support/' }],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [
      { label: 'Foundry Local disconnected AI support', href: '/foundry-local-disconnected-ai-support/' },
      { label: 'AKS vLLM job support', href: '/aks-vllm-job-support/' },
      { label: 'Foundry Local architecture guide', href: '/foundry-local-architecture-guide/' },
      SECURITY_HUB_LINK,
    ],
  }),
});

const foundryLocalVllm: LandingPageConfig = azureServicePage({
  slug: 'foundry-local-vllm-job-support',
  title: 'Foundry Local vLLM Proxy Job Support — High-Throughput GPU Serving',
  description:
    'Foundry Local vLLM job support: configure the vLLM runtime on Azure Local for high-throughput GPU inference — batching, KV cache, quantization, and the automatic GPU inference planner.',
  keywords: [
    'Foundry Local vLLM job support', 'vLLM Azure Local', 'vLLM GPU serving Azure',
    'vLLM inference tuning', 'Foundry Local GPU planner',
  ],
  h1: 'Foundry Local vLLM Proxy Job Support — Tune High-Throughput Inference',
  tagline: 'Get real throughput from GPUs with the vLLM runtime on Foundry Local — batching, KV cache, and the GPU inference planner.',
  heroEyebrow: 'Foundry Local vLLM',
  painIntro:
    'vLLM can dramatically raise throughput — but only when batching, KV cache, and parallelism are tuned to your GPUs and model. Untuned, you waste expensive hardware.',
  heroVariant:
    'We tune the vLLM runtime under Foundry Local on Azure Local: continuous batching, KV-cache sizing, quantization, tensor and pipeline parallelism, and the automatic GPU inference planner that right-sizes serving for your hardware. We help you hit throughput and latency targets on multi-GPU nodes, including disconnected clusters.',
  faqs: azureServiceFaqs('Foundry Local vLLM', 'We tune vLLM batching, KV cache, parallelism, and the GPU inference planner for throughput on Azure Local.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_LOCAL_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Foundry Local multi-GPU job support', href: '/foundry-local-multi-gpu-job-support/' }, { label: 'AKS vLLM job support', href: '/aks-vllm-job-support/' }],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'AKS GPU AI job support', href: '/aks-gpu-ai-job-support/' }, { label: 'Foundry Local disconnected AI support', href: '/foundry-local-disconnected-ai-support/' }],
  }),
});

const foundryLocalMultiGpu: LandingPageConfig = azureServicePage({
  slug: 'foundry-local-multi-gpu-job-support',
  title: 'Foundry Local Multi-GPU Proxy Job Support — Tensor & Pipeline Parallelism',
  description:
    'Foundry Local multi-GPU job support: distribute one model replica across GPUs with tensor_parallel_size and pipeline_parallel_size, plus the automatic GPU inference planner on Azure Local.',
  keywords: [
    'Foundry Local multi-GPU', 'tensor_parallel_size', 'pipeline_parallel_size',
    'model parallelism Azure', 'multi-GPU inference Azure Local',
  ],
  h1: 'Foundry Local Multi-GPU Proxy Job Support — Model Parallelism Done Right',
  tagline: 'Split large models across GPUs on Foundry Local — tensor_parallel_size, pipeline_parallel_size, and the GPU inference planner.',
  heroEyebrow: 'Foundry Local Multi-GPU',
  painIntro:
    'A model too big for one GPU needs parallelism — but the wrong tensor/pipeline split tanks throughput or OOMs. Getting the parallel layout right is the difference between usable and unusable.',
  heroVariant:
    'We configure multi-GPU model parallelism for Foundry Local vLLM deployments: tensor_parallel_size (weight partitioning across GPUs) and pipeline_parallel_size (pipeline stages), balanced against your GPU count, interconnect, and model size. We use the automatic GPU inference planner to right-size the layout and fix multi-GPU OOM, imbalance, and NCCL/interconnect issues.',
  faqs: azureServiceFaqs('Foundry Local multi-GPU', 'We set tensor_parallel_size and pipeline_parallel_size and use the GPU inference planner to distribute models across GPUs.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_LOCAL_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Foundry Local vLLM job support', href: '/foundry-local-vllm-job-support/' }, { label: 'AKS GPU AI job support', href: '/aks-gpu-ai-job-support/' }],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Azure ML GPU training job support', href: '/azure-ml-gpu-training-job-support/' }, { label: 'Foundry Local disconnected AI support', href: '/foundry-local-disconnected-ai-support/' }],
  }),
});

const foundryLocalDisconnected: LandingPageConfig = azureServicePage({
  slug: 'foundry-local-disconnected-ai-support',
  title: 'Foundry Local Disconnected AI Support — Air-Gapped & Sovereign Inference',
  description:
    'Foundry Local disconnected AI support: run models in air-gapped, sovereign, and edge environments on Azure Local with model caching, multi-node Kubernetes, and inference-aware routing without outbound internet.',
  keywords: [
    'Foundry Local disconnected AI', 'air-gapped AI Azure', 'sovereign AI Azure Local',
    'offline inference Azure', 'disconnected Kubernetes AI',
  ],
  h1: 'Foundry Local Disconnected AI Support — Run AI Fully Offline',
  tagline: 'Deploy AI where the internet cannot reach — air-gapped, sovereign, and edge inference on Foundry Local + Azure Local.',
  heroEyebrow: 'Foundry Local Disconnected AI',
  painIntro:
    'Defense, government, and regulated workloads often run with zero outbound internet. Delivering reliable model inference there — with updates, caching, and routing — is a specialist problem.',
  heroVariant:
    'We help you run Foundry Local on Azure Local in disconnected (air-gapped) environments: model caching and offline distribution, multi-node Kubernetes serving, inference-aware routing without outbound internet, bring-your-own-models, and offline evaluation. Ideal for sovereign AI, data-residency-constrained, and edge scenarios.',
  faqs: azureServiceFaqs('Foundry Local disconnected AI', 'We deploy air-gapped inference on Azure Local with model caching, multi-node K8s, and offline routing.'),
  relatedLinks: relatedLinks({
    geoLinks: [FOUNDRY_LOCAL_LINK, AZURE_HUB_LINK],
    techLinks: [{ label: 'Foundry Local vLLM job support', href: '/foundry-local-vllm-job-support/' }, SECURITY_HUB_LINK],
    problemLink: foundryProblem,
    proxyLink: foundryProxy,
    additionalLinks: [{ label: 'Foundry Local multi-GPU job support', href: '/foundry-local-multi-gpu-job-support/' }, { label: 'Azure AI governance job support', href: '/azure-ai-governance-job-support/' }],
  }),
});

export const azureFoundryPages: LandingPageConfig[] = [
  foundryHub,
  foundryProduction,
  foundryModels,
  modelRouter,
  modelEvaluation,
  foundryObservability,
  foundryTroubleshooting,
  foundryIqHub,
  foundryIqAgentic,
  foundryIqEnterprise,
  foundryLocalHub,
  foundryLocalVllm,
  foundryLocalMultiGpu,
  foundryLocalDisconnected,
];
