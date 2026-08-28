import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  techHighlights,
  azureKbFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AGENT_HUB_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AZUREML_HUB_LINK,
  MLOPS_HUB_LINK,
  SECURITY_HUB_LINK,
  OBSERVABILITY_HUB_LINK,
  FOUNDRY_IQ_LINK,
  FOUNDRY_LOCAL_LINK,
  MODEL_ROUTER_LINK,
  AGENT_FRAMEWORK_LINK,
  AZURE_HUB_LINK,
  AZURE_INTERVIEW_HUB_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

/**
 * Educational guide pages (TechArticle intent). Each teaches a topic and funnels to
 * the matching service hub. Distinct search intent ("what is / architecture / guide")
 * from the job-support service pages — no cannibalization.
 */
const guide = (
  slug: string, topic: string, title: string, description: string, h1: string, tagline: string,
  painIntro: string, heroVariant: string, tech: { label: string; href: string }[],
  extra: { label: string; href: string }[] = [], kw: string[] = [],
): LandingPageConfig =>
  azurePage({
    slug, title, description, h1, tagline,
    keywords: kw.length ? kw : [topic, `${topic} guide`, `what is ${topic}`, 'Azure AI guide'],
    heroEyebrow: `Guide — Updated August 2026`,
    painIntro,
    heroVariant,
    geoLine: 'A practical Azure AI guide for engineers and candidates worldwide, reflecting the Microsoft/Azure product state through August 2026.',
    timezoneNote: 'Educational guide — our support team is available across all major time zones if you want hands-on help.',
    highlights: techHighlights,
    faqs: azureKbFaqs(topic),
    bottomCTAHeading: `Need Azure AI Proxy Job Support or Proxy Interview Support for ${topic}?`,
    bottomCTABody: `Beyond this guide, we offer Azure AI proxy job support for live ${topic} projects and production issues, plus ${topic} proxy interview support (technical preparation and mentoring; you attend your own interview). Talk to ProxyTechSupport on WhatsApp.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK],
      techLinks: tech,
      problemLink: EXISTING.production,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: extra.concat([EXISTING.blog, EXISTING.azureGuide]),
    }),
  });

const whatIsFoundry = guide(
  'what-is-microsoft-foundry-guide', 'Microsoft Foundry',
  'What Is Microsoft Foundry? — 2026 Guide (formerly Azure AI Foundry)',
  'A clear 2026 guide to Microsoft Foundry (formerly Azure AI Foundry / Azure AI Studio): the resource/project model, Foundry Models, agents, Model Router, and how it replaces the old hub-based approach.',
  'What Is Microsoft Foundry? A Practical 2026 Guide',
  'Understand Microsoft Foundry — the unified Azure AI platform, what changed from Azure AI Foundry/Studio, and how the new resource/project model works.',
  'If you learned "Azure AI Foundry" or "Azure AI Studio," the rename to Microsoft Foundry and the new resource/project model can be confusing. This guide clears it up.',
  'Microsoft Foundry (formerly Azure AI Foundry, previously Azure AI Studio) is the unified platform for building AI apps and agents on Azure. It centers on a single Foundry resource (under Microsoft.CognitiveServices) that owns governance — networking, RBAC, policy, and model deployments — with Foundry projects as the development boundary inside it. The new portal is GA and runs alongside Foundry (classic) for hub-based projects. Access uses one project endpoint with the azure-ai-projects SDK and the v1 stable /openai/v1/ routes. This guide explains the architecture, how it differs from the old hub model, and how Foundry Models, Model Router, and Foundry Agent Service fit together.',
  [FOUNDRY_HUB_LINK, AGENT_HUB_LINK],
  [A('Microsoft Foundry architecture guide', 'microsoft-foundry-architecture-guide'), MODEL_ROUTER_LINK],
);

const foundryArchitecture = guide(
  'microsoft-foundry-architecture-guide', 'Microsoft Foundry architecture',
  'Microsoft Foundry Architecture Guide — Resources, Projects & Deployments',
  'Microsoft Foundry architecture guide: the Foundry resource/project model, model deployments, RBAC (Foundry roles), networking, agents, and how to design production Foundry environments in 2026.',
  'Microsoft Foundry Architecture Guide',
  'A production-oriented look at Microsoft Foundry architecture — resources, projects, deployments, identity, networking, and agents.',
  'Designing a production Foundry environment means understanding the resource/project boundary, RBAC, networking, and how agents and models are deployed. This guide lays it out.',
  'This guide covers Microsoft Foundry architecture for production: the Foundry resource as the governance boundary (networking, Entra ID RBAC with the new Foundry roles, policy, model deployments), Foundry projects as development boundaries, the unified project endpoint and azure-ai-projects SDK, private networking and Private Endpoints, and how Foundry Agent Service, Foundry Models, Model Router, and evaluations sit within it. It also covers migrating from hub-based projects and upgrading an Azure OpenAI resource to a Foundry resource.',
  [FOUNDRY_HUB_LINK, SECURITY_HUB_LINK],
  [A('What is Microsoft Foundry guide', 'what-is-microsoft-foundry-guide'), A('Azure AI security guide', 'azure-ai-security-guide')],
);

const agentArchitecture = guide(
  'foundry-agent-service-architecture-guide', 'Foundry Agent Service architecture',
  'Foundry Agent Service Architecture Guide — Responses API, Runtime & Tools',
  'Foundry Agent Service architecture guide: the Responses API (Agents v2), Agent Runtime, prompt vs hosted agents, tools/MCP/A2A, memory, and evaluation — and migrating off the Assistants API.',
  'Foundry Agent Service Architecture Guide',
  'How Foundry Agent Service is built — the Responses API, Agent Runtime, agent types, tools, and the object model that replaced Assistants.',
  'Foundry Agent Service changed the agent object model and API. This guide explains how it is architected and how to design reliable agents on it.',
  'This guide explains Foundry Agent Service architecture: the Responses API (Agents v2) that replaced the Assistants API, the Conversations/Items/Responses/Agent Versions object model, the Agent Runtime that hosts and scales prompt and hosted agents, the Responses and Invocations protocols, tools (web search, file search, code interpreter, custom functions, OpenAPI, MCP) and Toolboxes, memory, A2A, tracing, and evaluation. It also covers migrating off the Assistants API (retires August 26, 2026) and the classic Agent Service (retires March 31, 2027).',
  [AGENT_HUB_LINK, AGENT_FRAMEWORK_LINK],
  [A('Microsoft Agent Framework guide', 'microsoft-agent-framework-guide'), A('Foundry Agent Service job support', 'microsoft-foundry-agent-service-proxy-job-support')],
);

const openaiArchitecture = guide(
  'azure-openai-production-architecture-guide', 'Azure OpenAI production architecture',
  'Azure OpenAI Production Architecture Guide — Deployments, Security & Scale',
  'Azure OpenAI production architecture guide: Responses API, deployment types (Global/Data Zone/PTU), quota and throttling, security (Managed Identity, Private Link), monitoring, and cost.',
  'Azure OpenAI Production Architecture Guide',
  'How to architect Azure OpenAI for production — deployments, security, scale, reliability, and cost.',
  'Getting Azure OpenAI to production means more than an API call — deployment strategy, security, quota, and cost all have to be designed. This guide shows how.',
  'This guide covers production Azure OpenAI architecture: the Responses API as the recommended surface, deployment types (Global Standard, Data Zone Standard, provisioned throughput/PTU), quota and 429 handling with backoff and load distribution, security with Managed Identity and Private Endpoints, content filters, monitoring with Azure Monitor and Application Insights, and cost optimization including Model Router.',
  [EXISTING.azureOpenAiJobSupport, A('Azure OpenAI production support', 'azure-openai-production-support')],
  [MODEL_ROUTER_LINK, A('Azure AI security guide', 'azure-ai-security-guide')],
);

const searchRagGuide = guide(
  'azure-ai-search-rag-guide', 'Azure AI Search RAG',
  'Azure AI Search RAG Guide — Vector, Hybrid & Semantic Retrieval',
  'Azure AI Search RAG guide: chunking, embeddings, integrated vectorization, vector/hybrid search, the semantic ranker, and building reliable retrieval for grounded generation.',
  'Azure AI Search RAG Guide',
  'How to build reliable RAG retrieval on Azure AI Search — from chunking and embeddings to hybrid and semantic search.',
  'RAG quality is retrieval quality. This guide explains how to build the Azure AI Search retrieval layer that grounded generation depends on.',
  'This guide covers RAG on Azure AI Search: chunking strategy, embeddings and integrated vectorization, vector and hybrid (keyword + vector) search with Reciprocal Rank Fusion, the semantic ranker for L2 reranking, metadata filtering and security-trimming, citations, and retrieval evaluation. It also introduces agentic retrieval as the next step.',
  [SEARCH_HUB_LINK, RAG_HUB_LINK],
  [A('Azure AI Search agentic retrieval guide', 'azure-ai-search-agentic-retrieval-guide'), A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support')],
);

const agenticRetrievalGuide = guide(
  'azure-ai-search-agentic-retrieval-guide', 'Azure AI Search agentic retrieval',
  'Azure AI Search Agentic Retrieval Guide — Knowledge Agents & Synthesis',
  'Azure AI Search agentic retrieval guide: knowledge bases, knowledge sources, LLM query planning, reasoning effort, semantic reranking, and answer synthesis (2026-04-01 GA / 2026-05-01-preview).',
  'Azure AI Search Agentic Retrieval Guide',
  'Understand agentic retrieval — how knowledge bases plan subqueries, rerank, and synthesize grounded answers.',
  'Agentic retrieval goes beyond a single vector query. This guide explains how it plans, reranks, and synthesizes — and when to use it.',
  'This guide explains Azure AI Search agentic retrieval: a knowledge base (orchestrator) with a retrieve action over indexed and remote knowledge sources, an LLM decomposing queries into parallel subqueries at low/medium reasoning effort, semantic reranking of each, result merging, and optional answer synthesis. Core is GA in the 2026-04-01 REST API; synthesis and non-web sources are in 2026-05-01-preview. It also covers how Foundry IQ builds on this.',
  [SEARCH_HUB_LINK, FOUNDRY_IQ_LINK],
  [A('Foundry IQ guide', 'foundry-iq-guide'), A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
);

const foundryIqGuide = guide(
  'foundry-iq-guide', 'Foundry IQ',
  'Foundry IQ Guide — The Managed Knowledge Layer for Agents',
  'Foundry IQ guide: the managed, permission-aware knowledge layer for agents — Work IQ, Fabric IQ, Web IQ, serverless agentic retrieval, and how it builds on Azure AI Search.',
  'Foundry IQ Guide',
  'What Foundry IQ is, how it works, and when to use it for enterprise agent knowledge.',
  'Foundry IQ promises reusable, permission-aware knowledge for agents. This guide explains what it is and how it fits with Azure AI Search.',
  'This guide explains Foundry IQ: Microsoft Foundry’s managed knowledge layer that turns enterprise content into reusable, permission-aware knowledge bases for agents, built on Azure AI Search agentic retrieval. It unifies Work IQ, Fabric IQ (Data agents + Ontology), Azure SQL, File Search, MCP sources, and Web IQ behind one SLA-backed endpoint. It is partial GA — API GA, portal preview — with Foundry IQ Serverless (Developer tier) in preview and billing beginning September 13, 2026.',
  [FOUNDRY_IQ_LINK, RAG_HUB_LINK],
  [A('Azure AI Search agentic retrieval guide', 'azure-ai-search-agentic-retrieval-guide'), A('Foundry IQ enterprise RAG support', 'foundry-iq-enterprise-rag-support')],
);

const mlArchitectureGuide = guide(
  'azure-machine-learning-architecture-guide', 'Azure Machine Learning architecture',
  'Azure Machine Learning Architecture Guide — Training to Endpoints',
  'Azure Machine Learning architecture guide: workspace, compute, training, pipelines, MLflow, model registry, and online/batch endpoints for a production ML lifecycle in 2026.',
  'Azure Machine Learning Architecture Guide',
  'A production-oriented view of Azure ML — workspace, compute, training, pipelines, registry, and endpoints.',
  'A reliable Azure ML setup connects workspace, compute, training, registry, and endpoints cleanly. This guide shows the architecture.',
  'This guide covers Azure ML (v2) architecture: workspace and connections, compute (instances/clusters, GPU), training jobs and environments, pipelines, MLflow tracking and models, the model registry, AutoML, and managed online/batch endpoints — plus networking, identity, and the MLflow Projects (retired September 2026) and Prompt Flow (retiring April 2027) migrations.',
  [AZUREML_HUB_LINK, MLOPS_HUB_LINK],
  [A('Azure MLOps guide', 'azure-mlops-guide'), A('Azure Machine Learning job support', 'azure-machine-learning-proxy-job-support')],
);

const mlopsGuide = guide(
  'azure-mlops-guide', 'Azure MLOps',
  'Azure MLOps Guide — CI/CD, Promotion, Monitoring & Retraining',
  'Azure MLOps guide: CI/CD for ML with Azure DevOps and GitHub Actions, pipelines, registry-driven promotion, monitoring (drift/quality), retraining, and LLMOps for Azure OpenAI and Foundry.',
  'Azure MLOps Guide',
  'How to operationalize ML on Azure — CI/CD, promotion, monitoring, retraining, and LLMOps.',
  'MLOps turns fragile ML into reliable software delivery. This guide explains the Azure MLOps building blocks and how they fit together.',
  'This guide covers Azure MLOps: CI/CD for ML with Azure DevOps and GitHub Actions, reproducible pipelines, model registry-driven promotion with approvals, safe rollout and rollback, monitoring (data drift, model quality, endpoint health), scheduled retraining, and the extension to LLMOps/GenAIOps for Azure OpenAI and Foundry (evaluation gates, prompt versioning, observability).',
  [MLOPS_HUB_LINK, AZUREML_HUB_LINK],
  [A('Azure Machine Learning architecture guide', 'azure-machine-learning-architecture-guide'), A('Azure MLOps job support', 'azure-mlops-proxy-job-support')],
);

const ragProductionGuide = guide(
  'azure-rag-production-guide', 'Azure RAG production',
  'Azure RAG Production Guide — Ship Grounded RAG That Stays Reliable',
  'Azure RAG production guide: retrieval quality, grounding and citations, hallucination mitigation, evaluation, latency, cost, and security for production RAG on Azure.',
  'Azure RAG Production Guide',
  'What it takes to run RAG in production on Azure — retrieval quality, grounding, evaluation, and reliability.',
  'RAG demos are easy; production RAG is hard. This guide covers what separates a demo from a reliable production system.',
  'This guide covers production Azure RAG: retrieval quality (chunking, embeddings, hybrid + semantic + agentic retrieval), grounding and citations, hallucination mitigation, groundedness evaluation and CI gates, latency and cost trade-offs, permission-aware security, and choosing between classic RAG, agentic retrieval, and Foundry IQ.',
  [RAG_HUB_LINK, SEARCH_HUB_LINK],
  [A('Azure AI Search RAG guide', 'azure-ai-search-rag-guide'), A('Azure RAG production support', 'azure-rag-production-support')],
);

const securityGuide = guide(
  'azure-ai-security-guide', 'Azure AI security',
  'Azure AI Security Guide — Identity, Networking, Content Safety & Governance',
  'Azure AI security guide: Entra ID and Managed Identity, RBAC, Key Vault, Private Endpoints/Private Link, content safety, and governance (Policy, Purview) for Foundry, Azure OpenAI, and Azure ML.',
  'Azure AI Security Guide',
  'How to secure Azure AI workloads — identity, networking, content safety, and governance.',
  'AI security spans identity, networking, safety, and governance. This guide covers the controls that keep Azure AI workloads safe.',
  'This guide covers Azure AI security: Entra ID authentication and Managed Identity (keyless), least-privilege RBAC including the new Foundry roles, Key Vault, VNet and Private Endpoints/Private Link, content safety and guardrails, Azure Policy and Microsoft Purview governance, Defender for Cloud, and audit — across Microsoft Foundry, Azure OpenAI, Azure AI Search, and Azure ML.',
  [SECURITY_HUB_LINK, FOUNDRY_HUB_LINK],
  [A('Azure AI governance job support', 'azure-ai-governance-job-support'), A('Azure AI security job support', 'azure-ai-security-proxy-job-support')],
);

const observabilityGuide = guide(
  'azure-ai-observability-guide', 'Azure AI observability',
  'Azure AI Observability Guide — Tracing, Metrics & Evaluation',
  'Azure AI observability guide: agent tracing, OpenTelemetry, Azure Monitor, Application Insights, token/latency metrics, and evaluation-in-production for Azure AI systems.',
  'Azure AI Observability Guide',
  'How to see, measure, and debug Azure AI in production — traces, metrics, and evaluation.',
  'You cannot fix what you cannot see. This guide covers instrumenting Azure AI for real observability.',
  'This guide covers Azure AI observability: end-to-end agent tracing, OpenTelemetry with GenAI semantic conventions, Azure Monitor metrics, Application Insights distributed tracing, Log Analytics/KQL, token-usage and latency and error metrics, request IDs, and continuous evaluation against production traffic — across Foundry, Azure OpenAI, and Azure ML.',
  [OBSERVABILITY_HUB_LINK, MLOPS_HUB_LINK],
  [A('Azure AI observability job support', 'azure-ai-observability-proxy-job-support'), A('Foundry agent observability job support', 'foundry-agent-observability-job-support')],
);

const agentFrameworkGuide = guide(
  'microsoft-agent-framework-guide', 'Microsoft Agent Framework',
  'Microsoft Agent Framework Guide — The SK + AutoGen Successor',
  'Microsoft Agent Framework guide: the 1.0 GA framework unifying Semantic Kernel and AutoGen — agents, graph workflows, multi-provider, and migration across .NET and Python.',
  'Microsoft Agent Framework Guide',
  'What Microsoft Agent Framework is, how it relates to Semantic Kernel and AutoGen, and how to adopt it.',
  'Agent Framework unifies Semantic Kernel and AutoGen. This guide explains what it is and how to migrate to it.',
  'This guide explains Microsoft Agent Framework 1.0 (GA): the unified successor to Semantic Kernel and AutoGen, offering agents, function tools, and graph-based (data-flow) workflows across .NET and Python, multi-provider models, and interop (MCP, A2A). It covers migration from SK (largely API-compatible for single agents) and AutoGen (event-driven → graph workflows), and deployment as Foundry hosted agents.',
  [AGENT_FRAMEWORK_LINK, AGENT_HUB_LINK],
  [A('Foundry Agent Service architecture guide', 'foundry-agent-service-architecture-guide'), A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support')],
);

const foundryLocalGuide = guide(
  'foundry-local-architecture-guide', 'Foundry Local',
  'Foundry Local Architecture Guide — On-Prem, Multi-GPU & Disconnected AI',
  'Foundry Local architecture guide: on-prem and disconnected inference on Azure Local with ONNX-GenAI and vLLM, multi-GPU parallelism, and the GPU inference planner.',
  'Foundry Local Architecture Guide',
  'How Foundry Local runs private, sovereign, and disconnected AI on your own hardware.',
  'Running AI on your own hardware — including air-gapped — has a specific architecture. This guide explains Foundry Local.',
  'This guide explains Foundry Local on Azure Local: on-prem, edge, and disconnected (air-gapped) inference with the default ONNX-GenAI engine and a vLLM runtime for GPU serving, multi-node Kubernetes, multi-GPU model parallelism (tensor_parallel_size and pipeline_parallel_size), the automatic GPU inference planner, model caching, and inference-aware routing without outbound internet — for private and sovereign AI.',
  [FOUNDRY_LOCAL_LINK, SECURITY_HUB_LINK],
  [A('Foundry Local vLLM job support', 'foundry-local-vllm-job-support'), A('Microsoft Foundry Local job support', 'microsoft-foundry-local-proxy-job-support')],
);

const modelRouterGuide = guide(
  'foundry-model-router-guide', 'Foundry Model Router',
  'Foundry Model Router Guide — Routing Profiles, Pool & Cost Savings',
  'Foundry Model Router guide: how per-prompt model routing works, the 2026 routing pool (GPT-5.6, Claude Opus 4.8), routing profiles, agentic routing, and cost savings.',
  'Foundry Model Router Guide',
  'How Foundry Model Router cuts cost by picking the best model per prompt — and how to configure it.',
  'Model Router promises big savings by routing per prompt. This guide explains how it works and how to get the savings safely.',
  'This guide explains Foundry Model Router (GA, version 2025-11-18, across 28 regions): it automatically selects the best chat model per prompt for up to ~60% inference-cost savings at GPT-5-family fidelity. The routing pool includes gpt-5.6-sol/terra/luna and claude-opus-4-8 (older *-chat models were removed). It covers routing profiles (quality vs cost), custom model subsets, automatic failover, and agentic routing across OpenAI, OSS, and Anthropic models.',
  [MODEL_ROUTER_LINK, FOUNDRY_HUB_LINK],
  [A('Foundry Model Router job support', 'microsoft-foundry-model-router-job-support'), A('Azure AI cost optimization job support', 'azure-ai-cost-optimization-proxy-job-support')],
);

export const azureKbPages: LandingPageConfig[] = [
  whatIsFoundry, foundryArchitecture, agentArchitecture, openaiArchitecture, searchRagGuide,
  agenticRetrievalGuide, foundryIqGuide, mlArchitectureGuide, mlopsGuide, ragProductionGuide,
  securityGuide, observabilityGuide, agentFrameworkGuide, foundryLocalGuide, modelRouterGuide,
];
