import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  techHighlights,
  azureKbFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AGENT_HUB_LINK,
  AGENT_FRAMEWORK_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AZUREML_HUB_LINK,
  MODEL_ROUTER_LINK,
  AZURE_HUB_LINK,
  AZURE_INTERVIEW_HUB_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

/**
 * Comparison pages (decision-intent). These help engineers choose between options
 * and funnel to the relevant hub. The existing /azure-openai-vs-aws-bedrock-job-support/
 * route is preserved and cross-linked — never recreated here.
 */
const compare = (
  slug: string, pair: string, title: string, description: string, h1: string,
  painIntro: string, heroVariant: string, tech: { label: string; href: string }[],
  extra: { label: string; href: string }[] = [],
): LandingPageConfig =>
  azurePage({
    slug, title, description, h1,
    keywords: [pair, `${pair} comparison`, `${pair} which to use`, 'Azure AI comparison'],
    tagline: `A practical, engineer-first comparison of ${pair} — trade-offs, when to use each, and how to decide.`,
    heroEyebrow: 'Comparison — Updated August 2026',
    painIntro,
    heroVariant,
    geoLine: 'An engineer-first Azure AI comparison for teams worldwide, reflecting the Microsoft/Azure product state through August 2026.',
    timezoneNote: 'Educational comparison — our support team is available across all major time zones for hands-on help.',
    highlights: techHighlights,
    faqs: azureKbFaqs(pair),
    bottomCTAHeading: `Need Azure AI Proxy Job Support to Decide on ${pair}?`,
    bottomCTABody: `We help teams choose and implement the right option for ${pair} with Azure AI proxy job support — real-time technical guidance and implementation help on your real project, plus proxy interview support if you have interviews coming up. Talk to ProxyTechSupport on WhatsApp.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK],
      techLinks: tech,
      problemLink: EXISTING.production,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: extra.concat([EXISTING.blog]),
    }),
  });

export const azureComparisonPages: LandingPageConfig[] = [
  compare(
    'microsoft-foundry-vs-azure-machine-learning-job-support', 'Microsoft Foundry vs Azure Machine Learning',
    'Microsoft Foundry vs Azure Machine Learning — Which to Use in 2026',
    'Microsoft Foundry vs Azure Machine Learning: when to use Foundry (GenAI apps and agents) vs Azure ML (custom/classic model training and deployment), and how they complement each other.',
    'Microsoft Foundry vs Azure Machine Learning — Which to Use',
    'Teams often ask whether to build on Microsoft Foundry or Azure ML. They solve different problems — this comparison shows which fits your workload.',
    'Microsoft Foundry is for building generative-AI apps and agents (Foundry Models, agents, RAG, evaluation), while Azure Machine Learning is for training and deploying custom/classic ML models (training jobs, pipelines, MLflow, endpoints, AutoML). They complement each other — you might train or fine-tune in Azure ML and serve generative features through Foundry. This guide compares them by use case, workflow, deployment, MLOps, and skills, and helps you decide (or combine).',
    [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
    [A('Microsoft Foundry job support', 'microsoft-foundry-proxy-job-support'), A('Azure Machine Learning job support', 'azure-machine-learning-proxy-job-support')],
  ),
  compare(
    'microsoft-foundry-vs-amazon-bedrock-job-support', 'Microsoft Foundry vs Amazon Bedrock',
    'Microsoft Foundry vs Amazon Bedrock — Azure vs AWS GenAI in 2026',
    'Microsoft Foundry vs Amazon Bedrock: compare Azure and AWS generative-AI platforms — models, agents, RAG, deployment, and ecosystem — to choose the right one.',
    'Microsoft Foundry vs Amazon Bedrock — Azure vs AWS GenAI',
    'Choosing between Azure’s Microsoft Foundry and AWS’s Amazon Bedrock is a common platform decision. This compares them fairly for real teams.',
    'This guide compares Microsoft Foundry and Amazon Bedrock: model catalogs (both offer OpenAI/Anthropic-class and open models), agent services (Foundry Agent Service vs Bedrock AgentCore), RAG and knowledge (Azure AI Search/Foundry IQ vs Bedrock Knowledge Bases), deployment and data-residency options, model routing, security and governance, and ecosystem fit. It helps you choose based on your existing cloud, compliance, and team skills — and complements our existing Azure OpenAI vs AWS Bedrock page.',
    [FOUNDRY_HUB_LINK, EXISTING.awsHub],
    [EXISTING.azureOpenAiVsBedrock, A('Foundry Agent Service vs Bedrock AgentCore', 'foundry-agent-service-vs-bedrock-agentcore-job-support')],
  ),
  compare(
    'foundry-agent-service-vs-bedrock-agentcore-job-support', 'Foundry Agent Service vs Bedrock AgentCore',
    'Foundry Agent Service vs Bedrock AgentCore — Agent Platforms Compared',
    'Foundry Agent Service vs Amazon Bedrock AgentCore: compare Azure and AWS managed agent platforms — runtime, tools, memory, identity, and observability.',
    'Foundry Agent Service vs Bedrock AgentCore — Which Agent Platform',
    'Both clouds now offer managed agent platforms. This compares Foundry Agent Service and Bedrock AgentCore for teams choosing where to build agents.',
    'This guide compares Foundry Agent Service and Amazon Bedrock AgentCore: runtime and hosting (Agent Runtime, prompt/hosted agents vs AgentCore Runtime), tools and protocols (MCP, A2A, code interpreter), memory, identity, and observability. It maps concepts across the two and helps you choose based on your cloud, models, and governance needs.',
    [AGENT_HUB_LINK, EXISTING.awsHub],
    [A('Foundry Agent Service job support', 'microsoft-foundry-agent-service-proxy-job-support')],
  ),
  compare(
    'microsoft-agent-framework-vs-langgraph-job-support', 'Microsoft Agent Framework vs LangGraph',
    'Microsoft Agent Framework vs LangGraph — Agent Frameworks Compared',
    'Microsoft Agent Framework vs LangGraph: compare the SK/AutoGen successor with LangGraph for building agents and multi-agent workflows on Azure.',
    'Microsoft Agent Framework vs LangGraph — Which Framework',
    'Teams building agents on Azure often weigh Microsoft Agent Framework against LangGraph. This compares them on model, workflows, and Azure fit.',
    'This guide compares Microsoft Agent Framework (1.0 GA, the SK/AutoGen successor, .NET + Python) and LangGraph (Python/JS, graph-based agent state): programming model and graph workflows, multi-agent orchestration, Azure/Foundry integration and hosted-agent deployment, ecosystem, and skills. Both can deploy as Foundry hosted agents — this helps you choose.',
    [AGENT_FRAMEWORK_LINK, A('LangGraph Microsoft Foundry job support', 'langgraph-microsoft-foundry-job-support')],
    [A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support')],
  ),
  compare(
    'microsoft-agent-framework-vs-semantic-kernel-job-support', 'Microsoft Agent Framework vs Semantic Kernel',
    'Microsoft Agent Framework vs Semantic Kernel — Migrate or Stay?',
    'Microsoft Agent Framework vs Semantic Kernel: how they relate, what changed, and whether to migrate from SK to Agent Framework 1.0.',
    'Microsoft Agent Framework vs Semantic Kernel — Migrate or Stay?',
    'Since Agent Framework is the SK successor, teams on Semantic Kernel ask whether and when to migrate. This lays out the decision.',
    'This guide compares Microsoft Agent Framework and Semantic Kernel: Agent Framework 1.0 (GA) is the unified successor to both SK and AutoGen. It covers what carries over (agents, plugins/tools), what changed (graph workflows, unified model), single-agent migration (largely API-compatible) vs multi-agent rework, and how to decide when to migrate — with a clear path.',
    [AGENT_FRAMEWORK_LINK, A('Semantic Kernel Foundry job support', 'semantic-kernel-foundry-job-support')],
    [A('Semantic Kernel → Agent Framework migration', 'semantic-kernel-agent-framework-migration')],
  ),
  compare(
    'azure-ai-search-vs-pgvector-job-support', 'Azure AI Search vs pgvector',
    'Azure AI Search vs pgvector — Which Vector Store for RAG?',
    'Azure AI Search vs pgvector (Azure PostgreSQL): compare a managed search/retrieval platform with in-database vectors for RAG — features, ops, and cost.',
    'Azure AI Search vs pgvector — Which for RAG?',
    'A common RAG decision: use Azure AI Search or keep vectors in Postgres with pgvector. This compares them for real workloads.',
    'This guide compares Azure AI Search and pgvector on Azure Database for PostgreSQL for RAG: retrieval features (hybrid, semantic ranker, agentic retrieval vs SQL + vector), operational model (managed search service vs in-database), scale, freshness, cost, and when co-locating vectors with operational data wins. It helps you pick the right retrieval backend.',
    [SEARCH_HUB_LINK, A('Azure PostgreSQL pgvector job support', 'azure-postgresql-pgvector-job-support')],
    [RAG_HUB_LINK, EXISTING.vectorDb],
  ),
  compare(
    'azure-ml-vs-sagemaker-job-support', 'Azure ML vs SageMaker',
    'Azure ML vs Amazon SageMaker — ML Platforms Compared in 2026',
    'Azure Machine Learning vs Amazon SageMaker: compare the two cloud ML platforms — training, pipelines, MLflow/registry, endpoints, and MLOps.',
    'Azure ML vs Amazon SageMaker — Which ML Platform',
    'Teams standardizing on a cloud ML platform weigh Azure ML against SageMaker. This compares them for training-to-production ML.',
    'This guide compares Azure Machine Learning and Amazon SageMaker: training and compute, pipelines, experiment tracking (MLflow vs SageMaker), model registry, online/batch endpoints, AutoML, MLOps and CI/CD, and ecosystem fit. It helps you choose based on your cloud, team skills, and workloads.',
    [AZUREML_HUB_LINK, EXISTING.awsHub],
    [A('Azure Machine Learning job support', 'azure-machine-learning-proxy-job-support')],
  ),
  compare(
    'knowledge-agents-vs-traditional-rag-job-support', 'Knowledge Agents vs traditional RAG',
    'Knowledge Agents vs Traditional RAG — Agentic Retrieval Compared',
    'Knowledge Agents (agentic retrieval) vs traditional RAG: how LLM query planning and answer synthesis differ from single-query retrieval, and when each wins.',
    'Knowledge Agents vs Traditional RAG — When to Go Agentic',
    'Agentic retrieval (Knowledge Agents) is more powerful but heavier than traditional single-query RAG. This compares them for real workloads.',
    'This guide compares Azure AI Search agentic retrieval (Knowledge Agents/knowledge bases, LLM query planning, semantic reranking, answer synthesis) with traditional single-query RAG: quality on complex/multi-part questions, latency and cost, configuration effort, and when each is the right choice. It helps you decide when the extra reasoning is worth it.',
    [SEARCH_HUB_LINK, A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
    [RAG_HUB_LINK, A('Azure AI Search agentic retrieval guide', 'azure-ai-search-agentic-retrieval-guide')],
  ),
  compare(
    'azure-openai-vs-foundry-models-job-support', 'Azure OpenAI vs Foundry Models',
    'Azure OpenAI vs Foundry Models — Which Model Access Path?',
    'Azure OpenAI vs Foundry Models: how OpenAI models in Foundry relate to the broader Foundry Models catalog, and how to choose and route across them.',
    'Azure OpenAI vs Foundry Models — Which Path?',
    'With OpenAI models now part of the broader Foundry Models catalog, teams ask how the two relate and how to choose. This clarifies it.',
    'This guide compares Azure OpenAI and Foundry Models: Azure OpenAI provides OpenAI’s models (now "Azure OpenAI in Foundry Models"), while Foundry Models is the broader 10,000+ model catalog spanning OpenAI, Anthropic, xAI, DeepSeek, Meta, and more. It covers deployment types (Global/Data Zone Standard), when to use a single provider vs the catalog, and how Foundry Model Router routes across them — helping you choose and combine.',
    [EXISTING.azureOpenAiJobSupport, A('Foundry Models job support', 'microsoft-foundry-models-job-support')],
    [MODEL_ROUTER_LINK, FOUNDRY_HUB_LINK],
  ),
];
