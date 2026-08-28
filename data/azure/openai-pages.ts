import type { LandingPageConfig } from '../landing-pages';
import {
  azureServicePage,
  relatedLinks,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AGENT_HUB_LINK,
  RAG_HUB_LINK,
  SEARCH_HUB_LINK,
  MODEL_ROUTER_LINK,
  SECURITY_HUB_LINK,
  OBSERVABILITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

/**
 * Azure OpenAI supplementary subservice cluster. The base /azure-openai-job-support/
 * and /azure-openai-interview-support/ routes already exist and are preserved +
 * cross-linked (never recreated). These pages own distinct subservice intent only.
 */

const oaiTech = [EXISTING.azureOpenAiJobSupport, FOUNDRY_HUB_LINK];
const oaiProblem = { label: 'Azure OpenAI troubleshooting', href: '/azure-openai-troubleshooting-support/' };
const oaiProxy = EXISTING.azureOpenAiInterview;

const openaiProduction: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-production-support',
  title: 'Azure OpenAI Production Support — Fix 429, Content Filters & Deployments',
  description:
    'Real-time Azure OpenAI production support: resolve 429 RateLimitExceeded, content-filter blocks, DeploymentNotFound, quota, PTU, and latency issues on Responses API and Chat Completions with an expert on the call.',
  keywords: [
    'Azure OpenAI production support', 'Azure OpenAI 429 fix', 'Azure OpenAI content filter',
    'Azure OpenAI DeploymentNotFound', 'Azure OpenAI quota error', 'Azure OpenAI latency',
  ],
  h1: 'Azure OpenAI Production Support — Resolve Live Azure OpenAI Incidents',
  tagline: 'On-call help for Azure OpenAI production issues — throttling, content filters, deployments, quota, PTU, and latency.',
  heroEyebrow: 'Azure OpenAI Production Firefighting',
  painIntro:
    'Azure OpenAI throwing 429 RateLimitExceeded under load, a content filter blocking valid output, DeploymentNotFound after a change, or latency creeping over SLA? These incidents need someone who knows the deployment and quota model.',
  heroVariant:
    'We firefight Azure OpenAI in production: 429 RateLimitExceeded and TPM/RPM quota exhaustion, content-filter false positives and severity tuning, DeploymentNotFound and model/region availability, provisioned throughput (PTU) sizing and spillover, Responses API vs Chat Completions behavior, streaming and timeout issues, and cost blowups. We read Azure Monitor metrics, Application Insights, and request IDs to root-cause and stabilize.',
  faqs: azureServiceFaqs('Azure OpenAI production', 'We firefight 429 throttling, content filters, DeploymentNotFound, quota/PTU, and latency incidents live.'),
  relatedLinks: relatedLinks({
    geoLinks: [EXISTING.azureOpenAiJobSupport, AZURE_PRODUCTION_LINK],
    techLinks: [{ label: 'Azure OpenAI quota & throttling support', href: '/azure-openai-quota-throttling-support/' }, MODEL_ROUTER_LINK],
    problemLink: oaiProblem,
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI provisioned throughput', href: '/azure-openai-provisioned-throughput-job-support/' }, { label: 'Azure OpenAI cost optimization', href: '/azure-openai-cost-optimization-support/' }, FOUNDRY_HUB_LINK, AZURE_HUB_LINK],
  }),
});

const responsesApi: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-responses-api-job-support',
  title: 'Azure OpenAI Responses API Proxy Job Support — Reasoning, Tools & State',
  description:
    'Azure OpenAI Responses API job support: migrate from Chat Completions/Assistants, use reasoning_effort, carry reasoning across turns, wire tool calling, and adopt the v1 /openai/v1/responses surface on Microsoft Foundry.',
  keywords: [
    'Azure OpenAI Responses API job support', 'Responses API Azure', 'reasoning_effort Azure OpenAI',
    'Chat Completions to Responses API', 'Assistants API migration', 'openai v1 responses',
  ],
  h1: 'Azure OpenAI Responses API Proxy Job Support — The Unified Reasoning Surface',
  tagline: 'Adopt the Responses API — the recommended, unified Azure OpenAI surface that combines Chat Completions and Assistants capabilities.',
  heroEyebrow: 'Azure OpenAI Responses API',
  painIntro:
    'The Responses API is now the recommended surface, and the Assistants API is retiring — but migrating and using reasoning items, tool calls, and state correctly takes real experience.',
  heroVariant:
    'The Responses API (/openai/v1/responses) is the unified, recommended Azure OpenAI surface — it combines Chat Completions and Assistants capabilities, supports the full range of reasoning_effort, and carries reasoning items across turns, which is where new reasoning features ship first. We help you migrate from Chat Completions and the retiring Assistants API, adopt the v1 stable routes, wire tool calling and structured outputs, and use reasoning correctly with the GPT-5.6 family.',
  faqs: azureServiceFaqs('Azure OpenAI Responses API', 'We migrate you to the Responses API, wire reasoning_effort, tool calling, and state, and adopt the v1 /openai/v1 routes.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [AGENT_HUB_LINK, { label: 'Azure OpenAI tool calling job support', href: '/azure-openai-tool-calling-job-support/' }],
    problemLink: oaiProblem,
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Foundry Responses API agents', href: '/foundry-responses-api-agents-job-support/' }, { label: 'Assistants API to Foundry agent migration', href: '/azure-openai-assistants-to-foundry-agent-migration/' }, EXISTING.openaiApi],
  }),
});

const realtimeApi: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-realtime-api-job-support',
  title: 'Azure OpenAI Realtime API Proxy Job Support — Low-Latency Voice & Audio',
  description:
    'Azure OpenAI Realtime API job support: build low-latency voice and audio apps with gpt-realtime and gpt-audio models — streaming, tool calling, interruptions, and telephony integration.',
  keywords: [
    'Azure OpenAI Realtime API job support', 'gpt-realtime Azure', 'Azure voice AI',
    'realtime audio Azure OpenAI', 'low latency voice Azure',
  ],
  h1: 'Azure OpenAI Realtime API Proxy Job Support — Build Real-Time Voice Apps',
  tagline: 'Ship low-latency voice and audio experiences on Azure OpenAI Realtime — streaming, interruptions, and tool calling.',
  heroEyebrow: 'Azure OpenAI Realtime API',
  painIntro:
    'Real-time voice is unforgiving — latency, interruptions (barge-in), and tool calls all have to work together. Getting a production voice app right is hard.',
  heroVariant:
    'We help you build on the Azure OpenAI Realtime API with the current gpt-realtime-1.5 and gpt-audio-1.5 models — low-latency streaming, barge-in/interruption handling, multilingual support, tool calling mid-conversation, and integration with telephony and web clients. We cover session management, audio formats, and production reliability.',
  faqs: azureServiceFaqs('Azure OpenAI Realtime API', 'We build low-latency voice apps with gpt-realtime/gpt-audio — streaming, interruptions, tool calling, and telephony.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [{ label: 'Azure AI Speech job support', href: '/azure-ai-speech-job-support/' }, AGENT_HUB_LINK],
    problemLink: oaiProblem,
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI tool calling job support', href: '/azure-openai-tool-calling-job-support/' }, FOUNDRY_HUB_LINK],
  }),
});

const modelDeployment: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-model-deployment-job-support',
  title: 'Azure OpenAI Model Deployment Proxy Job Support — Global & Data Zone',
  description:
    'Azure OpenAI model deployment job support: choose Global Standard, Data Zone Standard, or provisioned throughput, manage deployment names and versions, handle model retirements, and register for gated models.',
  keywords: [
    'Azure OpenAI model deployment', 'Global Standard deployment', 'Data Zone Standard deployment',
    'Azure OpenAI deployment name', 'Azure OpenAI model version', 'gpt-5 access registration',
  ],
  h1: 'Azure OpenAI Model Deployment Proxy Job Support — Pick the Right Deployment Type',
  tagline: 'Get deployment types, versions, quota, and access registration right for your Azure OpenAI workload.',
  heroEyebrow: 'Azure OpenAI Deployments',
  painIntro:
    'Deployment name vs model, deployment type, region, version, and quota all interact — and gated models need access registration. One wrong choice and your app is throttled, non-compliant, or expensive.',
  heroVariant:
    'We help you deploy Azure OpenAI models correctly: choose between Global Standard, Data Zone Standard (EU/APAC data zones for sovereignty), and provisioned throughput; manage deployment names, model versions, and auto-update/retirement handling; request quota; and register for gated models (e.g. GPT-5 base). We align deployment choices to latency, cost, and data-residency requirements.',
  faqs: azureServiceFaqs('Azure OpenAI model deployment', 'We choose deployment types, manage versions and quota, and handle gated-model access registration.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [{ label: 'Azure OpenAI provisioned throughput', href: '/azure-openai-provisioned-throughput-job-support/' }, { label: 'Foundry Models job support', href: '/microsoft-foundry-models-job-support/' }],
    problemLink: oaiProblem,
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI cost optimization', href: '/azure-openai-cost-optimization-support/' }, MODEL_ROUTER_LINK, AZURE_HUB_LINK],
  }),
});

const embeddings: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-embeddings-job-support',
  title: 'Azure OpenAI Embeddings Proxy Job Support — Vectors, Dimensions & RAG',
  description:
    'Azure OpenAI embeddings job support: choose embedding models and dimensions, batch and rate-limit efficiently, avoid vector-dimension mismatch, and wire embeddings into Azure AI Search and RAG.',
  keywords: [
    'Azure OpenAI embeddings job support', 'text-embedding Azure', 'vector dimension mismatch',
    'Azure embeddings RAG', 'embedding model Azure OpenAI',
  ],
  h1: 'Azure OpenAI Embeddings Proxy Job Support — Get Retrieval Vectors Right',
  tagline: 'Pick the right embedding model and dimensions, index efficiently, and avoid the mismatch that breaks RAG.',
  heroEyebrow: 'Azure OpenAI Embeddings',
  painIntro:
    'Change embedding models and your existing vectors silently break — dimension mismatch and quality drops follow. Embeddings are the foundation of RAG, and small mistakes cascade.',
  heroVariant:
    'We help with Azure OpenAI embeddings: choosing the embedding model and dimensions, batching and rate-limit-aware ingestion, normalization, and avoiding vector-dimension mismatch when models change. We wire embeddings into Azure AI Search (integrated vectorization or push), tune chunking, and evaluate retrieval quality end to end.',
  faqs: azureServiceFaqs('Azure OpenAI embeddings', 'We choose embedding models/dimensions, batch ingestion, prevent vector-dimension mismatch, and wire embeddings into Azure AI Search RAG.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [SEARCH_HUB_LINK, RAG_HUB_LINK],
    problemLink: { label: 'Azure RAG troubleshooting', href: '/azure-rag-troubleshooting-support/' },
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure AI Search vector search', href: '/azure-ai-search-vector-search-job-support/' }, { label: 'Azure AI Search integrated vectorization', href: '/azure-ai-search-integrated-vectorization-job-support/' }, EXISTING.vectorDb],
  }),
});

const toolCalling: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-tool-calling-job-support',
  title: 'Azure OpenAI Tool Calling Proxy Job Support — Functions, Structured Outputs',
  description:
    'Azure OpenAI tool calling job support: function/tool calling, structured outputs and JSON schema, parallel tool calls, and reliable orchestration on the Responses API and Chat Completions.',
  keywords: [
    'Azure OpenAI tool calling', 'Azure OpenAI function calling', 'structured outputs Azure OpenAI',
    'JSON schema Azure OpenAI', 'parallel tool calls Azure',
  ],
  h1: 'Azure OpenAI Tool Calling Proxy Job Support — Reliable Function & Tool Calls',
  tagline: 'Make tool calling and structured outputs reliable — schemas, validation, parallel calls, and error handling on Azure OpenAI.',
  heroEyebrow: 'Azure OpenAI Tool Calling',
  painIntro:
    'Tool calling looks simple until the model returns malformed arguments, calls the wrong tool, or loops. Making it production-reliable takes schema discipline and error handling.',
  heroVariant:
    'We help you build reliable tool/function calling on Azure OpenAI — JSON-schema-constrained structured outputs, parallel tool calls, argument validation, retry and fallback strategies, and orchestration across multiple tools. Works with both the Responses API and Chat Completions, and bridges cleanly into Foundry Agent Service tools and MCP.',
  faqs: azureServiceFaqs('Azure OpenAI tool calling', 'We make function/tool calling and structured outputs reliable with schemas, validation, and error handling.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [{ label: 'Azure OpenAI Responses API', href: '/azure-openai-responses-api-job-support/' }, AGENT_HUB_LINK],
    problemLink: oaiProblem,
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Foundry agent tools job support', href: '/foundry-agent-tools-job-support/' }, { label: 'Foundry agent MCP job support', href: '/foundry-agent-mcp-job-support/' }],
  }),
});

const provisionedThroughput: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-provisioned-throughput-job-support',
  title: 'Azure OpenAI Provisioned Throughput (PTU) Proxy Job Support — Sizing & Spillover',
  description:
    'Azure OpenAI provisioned throughput (PTU) job support: size PTUs, model spillover to standard, reserve capacity, and balance predictable latency against cost for production Azure OpenAI workloads.',
  keywords: [
    'Azure OpenAI provisioned throughput', 'Azure OpenAI PTU', 'PTU sizing Azure',
    'Azure OpenAI reserved capacity', 'PTU spillover',
  ],
  h1: 'Azure OpenAI Provisioned Throughput Proxy Job Support — Right-Size PTUs',
  tagline: 'Get predictable latency and cost with provisioned throughput — size PTUs, plan spillover, and reserve capacity.',
  heroEyebrow: 'Azure OpenAI PTU',
  painIntro:
    'Provisioned throughput gives predictable latency — but over-provision and you burn budget, under-provision and you throttle. PTU sizing is a calculation most teams get wrong first time.',
  heroVariant:
    'We size Azure OpenAI provisioned throughput (PTU) for your traffic profile — measuring token throughput, choosing PTU counts, planning spillover to Standard deployments, and using reservations for cost. We balance predictable latency against cost and combine PTU with Model Router where it helps.',
  faqs: azureServiceFaqs('Azure OpenAI provisioned throughput', 'We size PTUs, plan spillover to Standard, and balance predictable latency against cost.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [{ label: 'Azure OpenAI cost optimization', href: '/azure-openai-cost-optimization-support/' }, MODEL_ROUTER_LINK],
    problemLink: oaiProblem,
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI model deployment', href: '/azure-openai-model-deployment-job-support/' }, { label: 'Azure AI cost optimization', href: '/azure-ai-cost-optimization-proxy-job-support/' }],
  }),
});

const quotaThrottling: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-quota-throttling-support',
  title: 'Azure OpenAI Quota & Throttling Support — Fix 429 and TPM/RPM Limits',
  description:
    'Azure OpenAI quota and throttling support: eliminate 429 RateLimitExceeded, manage TPM/RPM quota, request increases, add retry/backoff, and distribute load across deployments and regions.',
  keywords: [
    'Azure OpenAI quota', 'Azure OpenAI throttling', 'Azure OpenAI 429', 'TPM RPM Azure OpenAI',
    'RateLimitExceeded Azure', 'Azure OpenAI quota increase',
  ],
  h1: 'Azure OpenAI Quota & Throttling Support — Stop the 429s',
  tagline: 'Diagnose and fix Azure OpenAI 429 throttling — TPM/RPM quota, retries, load distribution, and quota increases.',
  heroEyebrow: 'Azure OpenAI Quota & Throttling',
  painIntro:
    '429 RateLimitExceeded under load kills user experience. It is usually TPM/RPM quota, uneven load, or missing backoff — and the fix is rarely just "ask for more quota."',
  heroVariant:
    'We fix Azure OpenAI throttling properly: measure TPM/RPM against your deployment quota, add exponential backoff and retry-after handling, distribute load across deployments and regions, adopt Global/Data Zone Standard or provisioned throughput where appropriate, and file well-justified quota increases. We also add Model Router to spread load and cost.',
  faqs: azureServiceFaqs('Azure OpenAI quota and throttling', 'We eliminate 429s with quota management, backoff, load distribution, and deployment strategy.'),
  relatedLinks: relatedLinks({
    geoLinks: [EXISTING.azureOpenAiJobSupport, AZURE_PRODUCTION_LINK],
    techLinks: [{ label: 'Azure OpenAI provisioned throughput', href: '/azure-openai-provisioned-throughput-job-support/' }, MODEL_ROUTER_LINK],
    problemLink: { label: 'Azure OpenAI production support', href: '/azure-openai-production-support/' },
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI cost optimization', href: '/azure-openai-cost-optimization-support/' }, oaiProblem],
  }),
});

const costOptimization: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-cost-optimization-support',
  title: 'Azure OpenAI Cost Optimization Support — Cut Token & Deployment Spend',
  description:
    'Azure OpenAI cost optimization support: reduce token spend with prompt design, caching, model selection, Model Router, right-sized deployments, and provisioned throughput trade-offs.',
  keywords: [
    'Azure OpenAI cost optimization', 'reduce Azure OpenAI cost', 'Azure OpenAI token cost',
    'Model Router cost savings', 'Azure OpenAI FinOps',
  ],
  h1: 'Azure OpenAI Cost Optimization Support — Lower Spend Without Losing Quality',
  tagline: 'Cut Azure OpenAI cost with prompt design, caching, model selection, Model Router, and right-sized deployments.',
  heroEyebrow: 'Azure OpenAI Cost Optimization',
  painIntro:
    'Azure OpenAI bills climb fast — oversized prompts, wrong model choices, no caching, and idle PTU. Cutting cost without hurting quality needs a systematic pass.',
  heroVariant:
    'We run a cost pass on your Azure OpenAI workload: prompt and context trimming, prompt/response caching, right-sizing model selection (and adding Model Router for up to ~60% savings at GPT-5-family fidelity), choosing Standard vs provisioned throughput correctly, batching, and cutting runaway retries. We measure before/after so savings are real.',
  faqs: azureServiceFaqs('Azure OpenAI cost optimization', 'We cut token and deployment spend via prompt design, caching, model selection, Model Router, and right-sized deployments.'),
  relatedLinks: relatedLinks({
    geoLinks: oaiTech,
    techLinks: [MODEL_ROUTER_LINK, { label: 'Azure OpenAI provisioned throughput', href: '/azure-openai-provisioned-throughput-job-support/' }],
    problemLink: { label: 'Azure AI cost optimization', href: '/azure-ai-cost-optimization-proxy-job-support/' },
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure AI FinOps', href: '/azure-ai-cost-optimization-proxy-job-support/' }, { label: 'Azure OpenAI quota & throttling support', href: '/azure-openai-quota-throttling-support/' }],
  }),
});

const openaiTroubleshooting: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-troubleshooting-support',
  title: 'Azure OpenAI Troubleshooting Support — Diagnose & Fix Azure OpenAI Errors',
  description:
    'Azure OpenAI troubleshooting support: root-cause 429, content filter, DeploymentNotFound, auth (Entra ID/Managed Identity), Private Endpoint, and streaming errors with a structured method.',
  keywords: [
    'Azure OpenAI troubleshooting', 'Azure OpenAI error fix', 'Azure OpenAI 401 403',
    'Azure OpenAI managed identity error', 'Azure OpenAI private endpoint',
  ],
  h1: 'Azure OpenAI Troubleshooting Support — Root-Cause Every Error',
  tagline: 'A structured method for Azure OpenAI errors: symptom → root cause → logs → config/identity/network check → fix → validation → prevention.',
  heroEyebrow: 'Azure OpenAI Troubleshooting',
  painIntro:
    'Azure OpenAI errors are often ambiguous — 401/403 auth, 404 DeploymentNotFound, 429 throttling, content-filter blocks, and networking failures each need a different fix.',
  heroVariant:
    'We troubleshoot Azure OpenAI methodically: reproduce the symptom, isolate root cause across deployment config, Entra ID/Managed Identity auth and RBAC, content-filter policy, and Private Endpoint/VNet networking, read Azure Monitor and request IDs, apply the fix, validate, and add prevention. Common cases: 401/403, DeploymentNotFound, 429, content filter, streaming timeouts, and CORS.',
  faqs: azureServiceFaqs('Azure OpenAI troubleshooting', 'We root-cause 429, content-filter, DeploymentNotFound, auth, and networking errors and ship a durable fix.'),
  relatedLinks: relatedLinks({
    geoLinks: [EXISTING.azureOpenAiJobSupport, AZURE_PRODUCTION_LINK],
    techLinks: [{ label: 'Azure OpenAI production support', href: '/azure-openai-production-support/' }, SECURITY_HUB_LINK],
    problemLink: { label: 'Microsoft Foundry troubleshooting', href: '/microsoft-foundry-troubleshooting-support/' },
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI security job support', href: '/azure-openai-security-job-support/' }, { label: 'Azure OpenAI monitoring job support', href: '/azure-openai-monitoring-job-support/' }, OBSERVABILITY_HUB_LINK],
  }),
});

const openaiRag: LandingPageConfig = azureServicePage({
  slug: 'azure-openai-rag-job-support',
  title: 'Azure OpenAI RAG Proxy Job Support — Grounded Answers with Azure AI Search',
  description:
    'Azure OpenAI RAG job support: build grounded retrieval-augmented generation with Azure OpenAI + Azure AI Search — chunking, embeddings, hybrid retrieval, citations, and hallucination mitigation.',
  keywords: [
    'Azure OpenAI RAG job support', 'Azure OpenAI Azure AI Search RAG', 'grounding Azure OpenAI',
    'RAG citations Azure', 'Azure OpenAI on your data',
  ],
  h1: 'Azure OpenAI RAG Proxy Job Support — Grounded, Cited Answers',
  tagline: 'Build reliable RAG on Azure OpenAI + Azure AI Search — retrieval quality, citations, and hallucination control.',
  heroEyebrow: 'Azure OpenAI RAG',
  painIntro:
    'RAG on Azure OpenAI is easy to demo and hard to make reliable — retrieval misses, wrong citations, and hallucinations appear the moment real data and users arrive.',
  heroVariant:
    'We build production RAG on Azure OpenAI with Azure AI Search: chunking strategy, embeddings and integrated vectorization, hybrid (keyword + vector) retrieval, semantic ranking, metadata filtering, prompt grounding, citations, and hallucination mitigation. We evaluate groundedness and answer quality, and can graduate you to agentic retrieval and Foundry IQ where it fits.',
  faqs: azureServiceFaqs('Azure OpenAI RAG', 'We build grounded RAG on Azure OpenAI + Azure AI Search — retrieval, citations, and hallucination control, evaluated end to end.'),
  relatedLinks: relatedLinks({
    geoLinks: [EXISTING.azureOpenAiJobSupport, RAG_HUB_LINK],
    techLinks: [SEARCH_HUB_LINK, { label: 'Azure AI Search RAG job support', href: '/azure-ai-search-rag-job-support/' }],
    problemLink: { label: 'Azure RAG troubleshooting', href: '/azure-rag-troubleshooting-support/' },
    proxyLink: oaiProxy,
    additionalLinks: [{ label: 'Azure OpenAI embeddings job support', href: '/azure-openai-embeddings-job-support/' }, { label: 'Microsoft Foundry IQ job support', href: '/microsoft-foundry-iq-proxy-job-support/' }, EXISTING.rag],
  }),
});

export const azureOpenAiPages: LandingPageConfig[] = [
  openaiProduction,
  responsesApi,
  realtimeApi,
  modelDeployment,
  embeddings,
  toolCalling,
  provisionedThroughput,
  quotaThrottling,
  costOptimization,
  openaiTroubleshooting,
  openaiRag,
];
