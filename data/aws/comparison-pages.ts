import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsKbFaqs,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  KB_RAG_HUB_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

const cmpRelated = (self: string, extra: { label: string; href: string }[] = []) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: extra.slice(0, 2).length ? extra.slice(0, 2) : [KB_RAG_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    problemLink: { label: 'AWS AI production support', href: '/aws-ai-ml-production-support/' },
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'Bedrock vs SageMaker AI', href: '/amazon-bedrock-vs-sagemaker-ai-job-support/' },
      { label: 'RAG vs fine-tuning on AWS', href: '/aws-rag-vs-fine-tuning-job-support/' },
      { label: 'Knowledge Bases vs custom RAG', href: '/bedrock-knowledge-bases-vs-custom-rag-job-support/' },
      { label: 'OpenSearch vs pgvector', href: '/opensearch-vs-pgvector-job-support/' },
      { label: 'AgentCore vs LangGraph', href: '/agentcore-vs-langgraph-job-support/' },
      BEDROCK_HUB_LINK, ...extra,
    ].filter((l) => l.href !== self),
  });

// ─── Bedrock vs SageMaker AI ─────────────────────────────────────────────────

export const bedrockVsSagemaker: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-vs-sagemaker-ai-job-support',
  title: 'Amazon Bedrock vs SageMaker AI — Which to Use, With Support',
  description:
    'Amazon Bedrock vs SageMaker AI: when to use managed foundation models on Bedrock vs building/training on SageMaker AI. Decision guidance plus real-time job support for either path on AWS.',
  keywords: [
    'Bedrock vs SageMaker AI', 'Amazon Bedrock or SageMaker', 'Bedrock vs SageMaker decision',
    'AWS GenAI vs ML platform', 'when to use Bedrock', 'when to use SageMaker',
  ],
  h1: 'Amazon Bedrock vs SageMaker AI — Choose the Right AWS AI Platform',
  tagline:
    'Bedrock for managed foundation models; SageMaker AI for building and training your own. We help you decide — and support either.',
  heroEyebrow: 'Bedrock vs SageMaker AI',
  painIntro:
    'Not sure whether your use case belongs on Amazon Bedrock or SageMaker AI? Choosing wrong means rework, cost, and missed deadlines.',
  heroVariant:
    'Amazon Bedrock is the fastest path to production GenAI with managed foundation models, RAG (Knowledge Bases), Guardrails, and agents (AgentCore) — you consume models via API. Amazon SageMaker AI is the full ML platform for building, training, fine-tuning, and deploying your own models at scale. Many real architectures use both: Bedrock for GenAI features, SageMaker AI for custom ML and heavy training/inference. We help you decide based on control, cost, latency, data, and team skills — and provide job support for whichever path (or both) you take.',
  faqs: awsKbFaqs('Amazon Bedrock vs SageMaker AI'),
  relatedLinks: cmpRelated('/amazon-bedrock-vs-sagemaker-ai-job-support/', [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK]),
});

// ─── Nova vs Claude ──────────────────────────────────────────────────────────

export const novaVsClaude: LandingPageConfig = awsServicePage({
  slug: 'amazon-nova-vs-claude-job-support',
  title: 'Amazon Nova vs Claude on Bedrock — Model Choice With Support',
  description:
    'Amazon Nova vs Anthropic Claude on Bedrock: how to choose between Nova and Claude for cost, latency, and quality, with a task-specific evaluation and real-time support on AWS.',
  keywords: [
    'Amazon Nova vs Claude', 'Nova or Claude Bedrock', 'Bedrock model comparison',
    'Nova vs Claude cost', 'Bedrock model selection', 'best Bedrock model',
  ],
  h1: 'Amazon Nova vs Claude on Bedrock — Pick the Right Model With Evidence',
  tagline:
    'Nova is fast and cost-efficient; Claude is strong on reasoning. The right choice is task-specific. We help you decide with evaluation.',
  heroEyebrow: 'Nova vs Claude on Bedrock',
  painIntro:
    'Choosing Amazon Nova or Anthropic Claude for your Bedrock app based on reputation instead of your actual task? That is how quality and cost surprises happen.',
  heroVariant:
    'Both Amazon Nova (Nova 2 as the current generation) and Anthropic Claude run on Amazon Bedrock behind one API. Nova is designed to be fast and cost-efficient on AWS; Claude is strong on complex reasoning and long context. The right choice depends on your task, latency budget, and cost target. We help you build a task-specific evaluation (including LLM-as-a-judge), compare quality/latency/cost, design prompts per model, and even use intelligent prompt routing across a family — so you choose with evidence, not reputation. We verify current model IDs before advising.',
  faqs: awsKbFaqs('Amazon Nova vs Claude on Bedrock'),
  relatedLinks: cmpRelated('/amazon-nova-vs-claude-job-support/', [{ label: 'Amazon Nova', href: '/amazon-nova-job-support/' }, { label: 'Bedrock foundation models', href: '/amazon-bedrock-foundation-models-job-support/' }]),
});

// ─── RAG vs fine-tuning on AWS ───────────────────────────────────────────────

export const ragVsFineTuning: LandingPageConfig = awsServicePage({
  slug: 'aws-rag-vs-fine-tuning-job-support',
  title: 'RAG vs Fine-Tuning on AWS — Which Approach, With Support',
  description:
    'RAG vs fine-tuning on AWS: when to use Bedrock Knowledge Bases RAG vs model customization/fine-tuning, how to combine them, and real-time support for either on AWS.',
  keywords: [
    'RAG vs fine-tuning AWS', 'Bedrock RAG or fine-tuning', 'when to fine-tune Bedrock',
    'RAG vs fine-tuning decision', 'AWS model customization vs RAG',
  ],
  h1: 'RAG vs Fine-Tuning on AWS — Choose (or Combine) the Right Approach',
  tagline:
    'RAG adds knowledge; fine-tuning changes behavior. Most teams need RAG first. We help you decide — and build either.',
  heroEyebrow: 'RAG vs Fine-Tuning on AWS',
  painIntro:
    'Tempted to fine-tune when RAG (or better prompting) would solve it faster and cheaper? Choosing wrong wastes weeks and budget.',
  heroVariant:
    'On AWS, RAG (Bedrock Knowledge Bases) injects up-to-date, source-grounded knowledge at inference time, while fine-tuning/customization changes a model’s behavior and style. For most knowledge-grounded use cases, RAG plus good prompting is the right first move; fine-tuning fits when you need consistent format, tone, or task behavior that prompting cannot achieve, and the two can be combined. We help you evaluate the trade-offs (cost, freshness, maintenance, quality), prototype with evaluation, and build RAG, fine-tuning, or both on Bedrock.',
  faqs: awsKbFaqs('RAG vs fine-tuning on AWS'),
  relatedLinks: cmpRelated('/aws-rag-vs-fine-tuning-job-support/', [KB_RAG_HUB_LINK, { label: 'Bedrock model customization', href: '/amazon-bedrock-model-customization-job-support/' }]),
});

// ─── Bedrock on-demand vs provisioned throughput ─────────────────────────────

export const onDemandVsProvisioned: LandingPageConfig = awsServicePage({
  slug: 'bedrock-on-demand-vs-provisioned-throughput-job-support',
  title: 'Bedrock On-Demand vs Provisioned Throughput — Which & When',
  description:
    'Amazon Bedrock on-demand vs provisioned throughput: how to choose for cost, latency, and reliability, when provisioned throughput is worth it, and real-time support on AWS.',
  keywords: [
    'Bedrock on-demand vs provisioned throughput', 'Bedrock provisioned throughput worth it',
    'Bedrock inference cost', 'Bedrock throughput decision', 'Bedrock capacity planning',
  ],
  h1: 'Bedrock On-Demand vs Provisioned Throughput — Cost, Latency & Reliability',
  tagline:
    'On-demand is flexible; provisioned throughput guarantees capacity. The break-even depends on your traffic. We help you model it.',
  heroEyebrow: 'On-Demand vs Provisioned Throughput',
  painIntro:
    'Hitting throttling on on-demand, or unsure whether provisioned throughput is worth the commitment? Getting this wrong costs money or reliability.',
  heroVariant:
    'Amazon Bedrock offers on-demand inference (pay per token, flexible, subject to account limits) and provisioned throughput (reserved capacity for guaranteed throughput and predictable performance, including for custom models). On-demand fits variable or early-stage traffic; provisioned throughput fits steady, high-volume, latency-sensitive workloads where throttling is unacceptable. We help you model your traffic, find the break-even, combine with inference profiles and intelligent prompt routing, and plan capacity so you pay for what you actually need.',
  faqs: awsKbFaqs('Bedrock on-demand vs provisioned throughput'),
  relatedLinks: cmpRelated('/bedrock-on-demand-vs-provisioned-throughput-job-support/', [{ label: 'Bedrock inference', href: '/amazon-bedrock-inference-job-support/' }, { label: 'AWS AI cost optimization', href: '/aws-ai-cost-optimization-job-support/' }]),
});

// ─── OpenSearch vs pgvector ──────────────────────────────────────────────────

export const openSearchVsPgvector: LandingPageConfig = awsServicePage({
  slug: 'opensearch-vs-pgvector-job-support',
  title: 'OpenSearch vs pgvector on AWS — Vector Store Choice With Support',
  description:
    'OpenSearch Serverless vs Aurora PostgreSQL pgvector for RAG on AWS: how to choose your vector store for scale, cost, and integration, with real-time support for either.',
  keywords: [
    'OpenSearch vs pgvector', 'Aurora pgvector vs OpenSearch', 'AWS vector store choice',
    'Bedrock vector database', 'RAG vector store AWS', 'OpenSearch Serverless vs pgvector',
  ],
  h1: 'OpenSearch vs pgvector on AWS — Pick the Right Vector Store for RAG',
  tagline:
    'OpenSearch Serverless is the default for Bedrock Knowledge Bases; pgvector keeps RAG in your database. We help you choose.',
  heroEyebrow: 'OpenSearch vs pgvector',
  painIntro:
    'Deciding where your embeddings live — OpenSearch Serverless or Aurora pgvector — and unsure which fits your scale, cost, and data model?',
  heroVariant:
    'Amazon OpenSearch Serverless offers purpose-built vector search with hybrid retrieval and is the most common store behind Bedrock Knowledge Bases; Aurora PostgreSQL with pgvector keeps vectors alongside relational data for SQL-native RAG. OpenSearch fits large-scale, search-heavy, hybrid retrieval; pgvector fits teams already on Postgres wanting one system. We help you compare on scale, latency, cost, operational overhead, and integration, and build RAG on whichever you choose.',
  faqs: awsKbFaqs('OpenSearch vs pgvector on AWS'),
  relatedLinks: cmpRelated('/opensearch-vs-pgvector-job-support/', [{ label: 'OpenSearch vector search', href: '/amazon-opensearch-vector-search-job-support/' }, { label: 'Aurora pgvector', href: '/aurora-postgresql-pgvector-job-support/' }]),
});

// ─── AgentCore vs LangGraph ──────────────────────────────────────────────────

export const agentCoreVsLangGraph: LandingPageConfig = awsServicePage({
  slug: 'agentcore-vs-langgraph-job-support',
  title: 'AgentCore vs LangGraph — Framework vs Platform, With Support',
  description:
    'Amazon Bedrock AgentCore vs LangGraph: how AgentCore (an agent runtime/platform) and LangGraph (an agent framework) relate, when to use each, and how to run LangGraph on AgentCore.',
  keywords: [
    'AgentCore vs LangGraph', 'AgentCore or LangGraph', 'agent platform vs framework',
    'LangGraph on AgentCore', 'AWS agent architecture choice', 'AgentCore vs framework',
  ],
  h1: 'AgentCore vs LangGraph — They Solve Different Problems',
  tagline:
    'LangGraph is an agent framework; AgentCore is the runtime and platform. Often you use both. We help you decide.',
  heroEyebrow: 'AgentCore vs LangGraph',
  painIntro:
    'Treating AgentCore and LangGraph as either/or? They usually are not — one builds the agent logic, the other runs it in production.',
  heroVariant:
    'LangGraph is a framework for defining agent logic and graphs; Amazon Bedrock AgentCore is the production runtime and platform (Runtime, Memory, Gateway, Identity, Policy, Observability). Because AgentCore is framework-agnostic, you can build with LangGraph (or Strands or CrewAI) and deploy to AgentCore for session isolation, scaling, secure tools, and observability. We help you decide what to build in the framework vs rely on the platform for, and get a LangGraph agent running on AgentCore in production.',
  faqs: awsKbFaqs('AgentCore vs LangGraph'),
  relatedLinks: cmpRelated('/agentcore-vs-langgraph-job-support/', [AGENTCORE_HUB_LINK, { label: 'LangGraph + AgentCore', href: '/aws-langgraph-agentcore-job-support/' }]),
});

// ─── Knowledge Bases vs custom RAG ───────────────────────────────────────────

export const kbVsCustomRag: LandingPageConfig = awsServicePage({
  slug: 'bedrock-knowledge-bases-vs-custom-rag-job-support',
  title: 'Bedrock Knowledge Bases vs Custom RAG — Managed vs Build-Your-Own',
  description:
    'Amazon Bedrock Knowledge Bases vs custom RAG: when managed RAG is enough vs building your own retrieval pipeline for control, and real-time support for either on AWS.',
  keywords: [
    'Bedrock Knowledge Bases vs custom RAG', 'managed RAG vs custom RAG AWS', 'build vs buy RAG AWS',
    'Bedrock Knowledge Bases limitations', 'custom RAG pipeline AWS',
  ],
  h1: 'Bedrock Knowledge Bases vs Custom RAG — Managed Speed vs Full Control',
  tagline:
    'Knowledge Bases get you RAG fast; a custom pipeline gives full control. We help you choose the right level.',
  heroEyebrow: 'Knowledge Bases vs Custom RAG',
  painIntro:
    'Hitting the limits of managed Knowledge Bases, or over-building a custom RAG pipeline you did not need? The right level of control matters.',
  heroVariant:
    'Amazon Bedrock Knowledge Bases give you managed RAG — ingestion, chunking, embeddings, vector storage, and RetrieveAndGenerate — fast and with less code. A custom RAG pipeline (your own orchestration with OpenSearch/pgvector, chunking, reranking, and retrieval logic) gives maximum control for advanced requirements. We help you decide based on control, customization, cost, and maintenance, and build either — starting with Knowledge Bases when it fits and moving to custom only where the requirements justify it.',
  faqs: awsKbFaqs('Bedrock Knowledge Bases vs custom RAG'),
  relatedLinks: cmpRelated('/bedrock-knowledge-bases-vs-custom-rag-job-support/', [KB_RAG_HUB_LINK, { label: 'Bedrock RAG', href: '/amazon-bedrock-rag-job-support/' }]),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsComparisonPages: LandingPageConfig[] = [
  bedrockVsSagemaker,
  novaVsClaude,
  ragVsFineTuning,
  onDemandVsProvisioned,
  openSearchVsPgvector,
  agentCoreVsLangGraph,
  kbVsCustomRag,
];
