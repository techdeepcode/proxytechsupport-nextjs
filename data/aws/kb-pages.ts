import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsKbFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  KB_RAG_HUB_LINK,
  MLOPS_HUB_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

const guideRelated = (self: string, extra: { label: string; href: string }[] = []) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: extra.slice(0, 2).length ? extra.slice(0, 2) : [KB_RAG_HUB_LINK, AGENTCORE_HUB_LINK],
    problemLink: { label: 'AWS AI production support', href: '/aws-ai-ml-production-support/' },
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'What is Amazon Bedrock?', href: '/what-is-amazon-bedrock-guide/' },
      { label: 'AgentCore architecture guide', href: '/amazon-bedrock-agentcore-architecture-guide/' },
      { label: 'SageMaker MLOps guide', href: '/amazon-sagemaker-mlops-guide/' },
      { label: 'AWS GenAI architecture guide', href: '/aws-genai-architecture-guide/' },
      AWS_HUB_LINK, ...extra,
    ].filter((l) => l.href !== self),
  });

// ─── What is Amazon Bedrock? ─────────────────────────────────────────────────

export const whatIsBedrockGuide: LandingPageConfig = awsServicePage({
  slug: 'what-is-amazon-bedrock-guide',
  title: 'What Is Amazon Bedrock? A Practical 2026 Guide',
  description:
    'A practical guide to Amazon Bedrock in 2026: what it is, how it works, foundation models, Converse API, Knowledge Bases (RAG), Guardrails, AgentCore, Data Automation, inference, and how to get started.',
  keywords: [
    'what is Amazon Bedrock', 'Amazon Bedrock guide', 'how Amazon Bedrock works',
    'Amazon Bedrock explained', 'Amazon Bedrock 2026', 'Bedrock overview',
  ],
  h1: 'What Is Amazon Bedrock? A Practical Guide for 2026',
  tagline:
    'A clear, current explanation of Amazon Bedrock — what it is, how it works, and how the pieces fit — for engineers and candidates.',
  heroEyebrow: 'Guide — Updated August 2026',
  painIntro:
    'Heard about Amazon Bedrock but unsure what it actually is versus SageMaker, or how RAG, Guardrails, and agents fit together? This guide explains it in practical terms.',
  heroVariant:
    'Amazon Bedrock is AWS’s fully managed service for building generative AI applications with foundation models — Amazon Nova, Anthropic Claude, Meta Llama, Mistral, Cohere, and more — behind one API. This guide covers how it works: the Converse API and inference options (on-demand, provisioned throughput, inference profiles, cross-region inference, intelligent prompt routing), Knowledge Bases for RAG, Guardrails (including automated reasoning checks) for responsible AI, Bedrock Flows and Prompt Management, Data Automation for multimodal extraction, model customization, and how AgentCore extends Bedrock for production agents. It reflects the AWS state through August 2026 and points you to hands-on support when you want it.',
  faqs: awsKbFaqs('Amazon Bedrock'),
  relatedLinks: guideRelated('/what-is-amazon-bedrock-guide/', [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK]),
});

// ─── AgentCore architecture guide ────────────────────────────────────────────

export const agentCoreArchitectureGuide: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-architecture-guide',
  title: 'Amazon Bedrock AgentCore Architecture — A 2026 Guide',
  description:
    'A practical guide to Amazon Bedrock AgentCore architecture in 2026: Runtime, Memory, Gateway, Identity, Policy (Cedar), Browser, Code Interpreter, and Observability, and how to design production agents.',
  keywords: [
    'AgentCore architecture', 'Amazon Bedrock AgentCore guide', 'AgentCore components explained',
    'how AgentCore works', 'production AI agents architecture AWS', 'AgentCore 2026',
  ],
  h1: 'Amazon Bedrock AgentCore Architecture — A Practical 2026 Guide',
  tagline:
    'How the AgentCore modules fit together to run secure, scalable production agents — explained clearly.',
  heroEyebrow: 'Guide — Updated August 2026',
  painIntro:
    'Trying to understand how AgentCore Runtime, Memory, Gateway, Identity, and Policy fit together for a production agent? This guide maps the architecture.',
  heroVariant:
    'Amazon Bedrock AgentCore (GA since October 2025) is a set of modular services for running AI agents securely at scale, framework- and model-agnostic. This guide explains the architecture: Runtime (session isolation, scaling, long-running workloads), Memory (short/long-term), Gateway (tools from APIs, Lambda, and MCP), Identity (workload/user, OAuth, IAM), Policy (Cedar, default-deny authorization), Browser and Code Interpreter (sandboxed capabilities), and Observability (CloudWatch, OpenTelemetry) — plus how they combine with your framework (Strands, LangGraph, CrewAI) and Bedrock models. It reflects the AWS state through August 2026, including AgentCore Policy (GA March 2026) and Harness (GA June 2026).',
  faqs: awsKbFaqs('Amazon Bedrock AgentCore architecture'),
  relatedLinks: guideRelated('/amazon-bedrock-agentcore-architecture-guide/', [AGENTCORE_HUB_LINK, EXISTING.agenticAi]),
});

// ─── SageMaker MLOps guide ───────────────────────────────────────────────────

export const sagemakerMlopsGuide: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-mlops-guide',
  title: 'Amazon SageMaker MLOps — A Practical 2026 Guide',
  description:
    'A practical guide to SageMaker MLOps in 2026: Pipelines, Managed MLflow, Model Registry, CI/CD, monitoring, and how to build reproducible ML delivery on AWS.',
  keywords: [
    'SageMaker MLOps guide', 'SageMaker Pipelines MLflow', 'AWS MLOps explained',
    'SageMaker Model Registry', 'ML CI/CD AWS', 'SageMaker MLOps 2026',
  ],
  h1: 'Amazon SageMaker MLOps — A Practical Guide for 2026',
  tagline:
    'How to turn ML models into reproducible, governed, monitored production systems on SageMaker — explained.',
  heroEyebrow: 'Guide — Updated August 2026',
  painIntro:
    'Models that work in notebooks but no repeatable path to production? This guide explains how SageMaker MLOps closes that gap.',
  heroVariant:
    'SageMaker MLOps is how you make machine learning reproducible and reliable on AWS. This guide covers the building blocks: SageMaker Pipelines for orchestration, Managed MLflow for experiment tracking, Model Registry for versioning and approval, CI/CD with CodePipeline/CodeBuild/ECR and GitHub Actions, IaC with Terraform/CDK/CloudFormation, and inference and drift monitoring — plus how FMOps/LLMOps extends this for Bedrock and GenAI. It reflects the AWS state through August 2026 and links to hands-on support.',
  faqs: awsKbFaqs('SageMaker MLOps'),
  relatedLinks: guideRelated('/amazon-sagemaker-mlops-guide/', [MLOPS_HUB_LINK, SAGEMAKER_AI_HUB_LINK]),
});

// ─── AWS GenAI architecture guide ────────────────────────────────────────────

export const awsGenAiArchitectureGuide: LandingPageConfig = awsServicePage({
  slug: 'aws-genai-architecture-guide',
  title: 'AWS Generative AI Architecture — A Practical 2026 Guide',
  description:
    'A practical guide to enterprise AWS generative AI architecture in 2026: Bedrock, RAG, AgentCore, security, observability, and cost — how to design production GenAI on AWS.',
  keywords: [
    'AWS GenAI architecture', 'AWS generative AI architecture guide', 'enterprise AWS AI architecture',
    'Bedrock architecture guide', 'production GenAI AWS', 'AWS AI reference architecture',
  ],
  h1: 'AWS Generative AI Architecture — A Practical Guide for 2026',
  tagline:
    'How to design enterprise GenAI on AWS — from Bedrock and RAG to agents, security, observability, and cost.',
  heroEyebrow: 'Guide — Updated August 2026',
  painIntro:
    'Designing enterprise GenAI on AWS and want a clear architectural map from prototype to production? This guide lays it out.',
  heroVariant:
    'This guide walks through enterprise AWS generative AI architecture end to end: choosing foundation models on Bedrock, RAG with Knowledge Bases (OpenSearch/pgvector), Guardrails and responsible AI, agents on AgentCore, application integration (Lambda, API Gateway, Step Functions), data (S3, Glue, lakehouse), security (IAM, KMS, VPC/PrivateLink), observability (CloudWatch, OpenTelemetry), and cost (FinOps). It reflects the AWS state through August 2026 and connects to hands-on job support, interview help, and production support.',
  faqs: awsKbFaqs('AWS generative AI architecture'),
  relatedLinks: guideRelated('/aws-genai-architecture-guide/', [BEDROCK_HUB_LINK, { label: 'AWS AI security', href: '/aws-ai-security-job-support/' }]),
});

// ─── Bedrock RAG guide ───────────────────────────────────────────────────────

export const bedrockRagGuide: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-rag-guide',
  title: 'Amazon Bedrock RAG — A Practical 2026 Guide',
  description:
    'A practical guide to RAG on Amazon Bedrock in 2026: Knowledge Bases, chunking, embeddings, vector stores, reranking, RetrieveAndGenerate, evaluation, and reducing hallucination.',
  keywords: [
    'Amazon Bedrock RAG guide', 'Bedrock Knowledge Bases guide', 'RAG on AWS guide',
    'Bedrock retrieval guide', 'RAG evaluation Bedrock', 'Bedrock RAG 2026',
  ],
  h1: 'Amazon Bedrock RAG — A Practical Guide for 2026',
  tagline:
    'How to build retrieval-augmented generation on Bedrock that stays accurate in production — explained step by step.',
  heroEyebrow: 'Guide — Updated August 2026',
  painIntro:
    'Building RAG on Bedrock and want to understand chunking, embeddings, reranking, and evaluation before you get burned in production? This guide covers it.',
  heroVariant:
    'This guide explains RAG on Amazon Bedrock: how Knowledge Bases work (ingestion, chunking strategies, embeddings, vector storage in OpenSearch or pgvector), Retrieve and RetrieveAndGenerate, metadata filtering, reranking and query rewriting, grounding and citations, Guardrails for hallucination reduction, and how to build an evaluation harness so quality is measured. It reflects the AWS state through August 2026 and links to hands-on RAG support.',
  faqs: awsKbFaqs('Amazon Bedrock RAG'),
  relatedLinks: guideRelated('/amazon-bedrock-rag-guide/', [KB_RAG_HUB_LINK, { label: 'Bedrock RAG support', href: '/amazon-bedrock-rag-job-support/' }]),
});

// ─── How to explain an AWS AI project in interview ───────────────────────────

export const awsAiInterviewProjectGuide: LandingPageConfig = awsServicePage({
  slug: 'how-to-explain-aws-ai-project-in-interview-guide',
  title: 'How to Explain an AWS AI Project in an Interview — 2026 Guide',
  description:
    'A practical guide to explaining an AWS AI project in interviews: how to describe Bedrock, RAG, AgentCore, and SageMaker work with architecture, trade-offs, metrics, and impact.',
  keywords: [
    'explain AWS AI project interview', 'AWS AI interview project', 'Bedrock project interview',
    'how to describe AWS AI work', 'AWS AI system design interview guide', 'AWS AI STAR interview',
  ],
  h1: 'How to Explain an AWS AI Project in an Interview',
  tagline:
    'Interviewers reward clear architecture, honest trade-offs, and real metrics. This guide shows how to present your AWS AI work.',
  heroEyebrow: 'Guide — Updated August 2026',
  painIntro:
    'Did strong AWS AI work but freeze when asked to explain it in an interview? Presenting projects well is a learnable skill.',
  heroVariant:
    'This guide shows how to explain an AWS AI project in an interview: frame the problem and constraints, describe the architecture concretely (Bedrock model choice, RAG design on Knowledge Bases, AgentCore agent structure, or SageMaker training/inference), justify trade-offs (cost, latency, accuracy, security), quantify impact with real metrics, and handle deep-dive follow-ups honestly. It pairs with our AWS AI interview support and reflects the AWS state through August 2026.',
  faqs: awsKbFaqs('explaining an AWS AI project in an interview'),
  relatedLinks: guideRelated('/how-to-explain-aws-ai-project-in-interview-guide/', [AWS_INTERVIEW_HUB_LINK, EXISTING.genaiProxy]),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsKbPages: LandingPageConfig[] = [
  whatIsBedrockGuide,
  agentCoreArchitectureGuide,
  sagemakerMlopsGuide,
  awsGenAiArchitectureGuide,
  bedrockRagGuide,
  awsAiInterviewProjectGuide,
];
