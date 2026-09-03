import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  roleHighlights,
  interviewHighlights,
  awsJobFaqs,
  awsInterviewFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  MLOPS_HUB_LINK,
  KB_RAG_HUB_LINK,
  AWS_INTERVIEW_HUB_LINK,
  AWS_PROFILE_LINK,
  AWS_PRODUCTION_LINK,
} from './shared';

const roleRelated = (self: string, focusLinks: { label: string; href: string }[]) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, AWS_INTERVIEW_HUB_LINK],
    techLinks: focusLinks.slice(0, 2),
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'AWS AI Engineer', href: '/aws-ai-engineer-job-support/' },
      { label: 'AWS GenAI Engineer', href: '/aws-generative-ai-engineer-job-support/' },
      { label: 'AWS ML Engineer', href: '/aws-ml-engineer-job-support/' },
      { label: 'AWS MLOps Engineer', href: '/aws-mlops-engineer-job-support/' },
      { label: 'AWS AI Solutions Architect', href: '/aws-ai-solutions-architect-job-support/' },
      AWS_PROFILE_LINK, ...focusLinks,
    ].filter((l) => l.href !== self),
  });

// ─── AWS AI Engineer ─────────────────────────────────────────────────────────

export const awsAiEngineer: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-engineer-job-support',
  title: 'AWS AI Engineer Job Support — Bedrock, RAG & Agents in Production',
  description:
    'Real-time AWS AI Engineer job support: building and shipping Bedrock applications, RAG, agents, and AWS AI services on real projects — plus interview and profile support. Same-day, confidential.',
  keywords: [
    'AWS AI Engineer job support', 'AWS AI engineer support', 'Bedrock engineer support',
    'AWS GenAI engineer help', 'AWS AI developer support', 'AI engineer AWS project support',
  ],
  h1: 'AWS AI Engineer Job Support — Ship Real Bedrock, RAG & Agent Work',
  tagline:
    'Daily support mapped to what an AWS AI Engineer actually owns — Bedrock apps, RAG, agents, and AWS AI services on your real project.',
  heroEyebrow: 'AWS AI Engineer',
  painIntro:
    'Carrying AWS AI Engineer responsibilities — building Bedrock apps, RAG, and agents — and want an expert beside you on the hard tickets and incidents?',
  heroVariant:
    'We support AWS AI Engineers on the real deliverables of the role: designing and building Bedrock applications with the Converse API, RAG on Knowledge Bases, Guardrails, AgentCore agents, integration with Lambda and data services, IAM and cost, and production incidents. We work your actual tickets during your working hours, help you pass reviews and standups, and back you for interviews and profile positioning as you grow into and beyond the role.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS AI Engineers', 'building and shipping Bedrock applications, RAG, and agents, plus debugging production AWS AI issues'),
  relatedLinks: roleRelated('/aws-ai-engineer-job-support/', [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK]),
});

// ─── AWS Generative AI Engineer ──────────────────────────────────────────────

export const awsGenAiEngineer: LandingPageConfig = awsServicePage({
  slug: 'aws-generative-ai-engineer-job-support',
  title: 'AWS Generative AI Engineer Job Support — GenAI on Bedrock & AgentCore',
  description:
    'Real-time AWS Generative AI Engineer job support: LLM applications, RAG, agents, Guardrails, and evaluation on Amazon Bedrock and AgentCore — plus interview and profile support. Same-day.',
  keywords: [
    'AWS Generative AI Engineer job support', 'AWS GenAI engineer support', 'Bedrock GenAI engineer',
    'GenAI engineer AWS help', 'AWS LLM engineer support', 'generative AI AWS role support',
  ],
  h1: 'AWS Generative AI Engineer Job Support — LLM Apps, RAG & Agents',
  tagline:
    'The GenAI Engineer role on AWS lives in Bedrock, RAG, and agents. We support the real work and the interviews.',
  heroEyebrow: 'AWS Generative AI Engineer',
  painIntro:
    'Building LLM applications, RAG, and agents on AWS and want expert backup on architecture, evaluation, and production quality?',
  heroVariant:
    'We support AWS Generative AI Engineers across the GenAI stack: Bedrock model selection and the Converse API, RAG on Knowledge Bases with reranking and evaluation, Guardrails and responsible AI, AgentCore agents, prompt management, and FMOps/LLMOps. We work your real deliverables, help you ship reliable GenAI, and back you for interviews and profile positioning. Cross-linked to our existing GenAI Engineer support.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS Generative AI Engineers', 'building LLM applications, RAG, agents, and evaluation on Bedrock and AgentCore, plus production GenAI quality'),
  relatedLinks: roleRelated('/aws-generative-ai-engineer-job-support/', [BEDROCK_HUB_LINK, AGENTCORE_HUB_LINK]),
});

// ─── AWS ML Engineer ─────────────────────────────────────────────────────────

export const awsMlEngineer: LandingPageConfig = awsServicePage({
  slug: 'aws-ml-engineer-job-support',
  title: 'AWS ML Engineer Job Support — SageMaker Training, Inference & MLOps',
  description:
    'Real-time AWS ML Engineer job support: SageMaker AI training and inference, Pipelines, MLflow, Model Registry, and MLOps on real projects — plus interview and profile support. Same-day.',
  keywords: [
    'AWS ML Engineer job support', 'SageMaker ML engineer', 'AWS machine learning engineer support',
    'ML engineer AWS help', 'SageMaker MLOps engineer', 'AWS ML role support',
  ],
  h1: 'AWS ML Engineer Job Support — Train, Deploy & Operate ML on SageMaker',
  tagline:
    'The AWS ML Engineer role is SageMaker end to end. We support the real training, inference, and MLOps work.',
  heroEyebrow: 'AWS ML Engineer',
  painIntro:
    'Owning training, deployment, and MLOps on SageMaker and want an expert on the hard runs, endpoints, and pipelines?',
  heroVariant:
    'We support AWS ML Engineers across SageMaker AI: training jobs and distributed/HyperPod training, real-time/serverless/async inference, Pipelines, Managed MLflow, Model Registry, Feature Store, and model governance — plus IAM, VPC, and cost. We work your real deliverables and incidents, help you pass reviews, and back you for interviews and profile positioning.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS ML Engineers', 'SageMaker training, inference, Pipelines, MLflow, Model Registry, and MLOps, plus production ML incidents'),
  relatedLinks: roleRelated('/aws-ml-engineer-job-support/', [SAGEMAKER_AI_HUB_LINK, MLOPS_HUB_LINK]),
});

// ─── AWS MLOps Engineer ──────────────────────────────────────────────────────

export const awsMlopsEngineer: LandingPageConfig = awsServicePage({
  slug: 'aws-mlops-engineer-job-support',
  title: 'AWS MLOps Engineer Job Support — Pipelines, CI/CD, IaC & Monitoring',
  description:
    'Real-time AWS MLOps Engineer job support: SageMaker Pipelines, Managed MLflow, Model Registry, CI/CD, Terraform/CDK, monitoring, and FMOps/LLMOps on real projects — plus interview and profile support.',
  keywords: [
    'AWS MLOps Engineer job support', 'SageMaker MLOps engineer support', 'AWS ML CI/CD engineer',
    'MLOps engineer AWS help', 'AWS FMOps LLMOps engineer', 'MLOps role support AWS',
  ],
  h1: 'AWS MLOps Engineer Job Support — Build the ML & GenAI Delivery Machine',
  tagline:
    'The MLOps Engineer owns pipelines, CI/CD, IaC, and monitoring on AWS. We support the real platform work.',
  heroEyebrow: 'AWS MLOps Engineer',
  painIntro:
    'Building the ML/GenAI delivery platform on AWS and want expert backup on Pipelines, CI/CD, IaC, and monitoring?',
  heroVariant:
    'We support AWS MLOps Engineers across the platform: SageMaker Pipelines, Managed MLflow, Model Registry, CI/CD with CodePipeline/CodeBuild/ECR and GitHub Actions, IaC with Terraform/CDK/CloudFormation, retraining and rollback, drift and inference monitoring, and FMOps/LLMOps for Bedrock. We work your real deliverables and incidents, and back you for interviews and profile positioning.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS MLOps Engineers', 'SageMaker Pipelines, MLflow, Model Registry, CI/CD, IaC, monitoring, and FMOps/LLMOps'),
  relatedLinks: roleRelated('/aws-mlops-engineer-job-support/', [MLOPS_HUB_LINK, SAGEMAKER_AI_HUB_LINK]),
});

// ─── AWS RAG Engineer ────────────────────────────────────────────────────────

export const awsRagEngineer: LandingPageConfig = awsServicePage({
  slug: 'aws-rag-engineer-job-support',
  title: 'AWS RAG Engineer Job Support — Retrieval, Knowledge Bases & Quality',
  description:
    'Real-time AWS RAG Engineer job support: Bedrock Knowledge Bases, OpenSearch and pgvector, chunking, reranking, evaluation, and production RAG quality — plus interview and profile support. Same-day.',
  keywords: [
    'AWS RAG Engineer job support', 'Bedrock RAG engineer', 'AWS retrieval engineer support',
    'RAG engineer AWS help', 'Knowledge Bases engineer', 'AWS RAG role support',
  ],
  h1: 'AWS RAG Engineer Job Support — Build Retrieval That Actually Works',
  tagline:
    'The RAG Engineer owns retrieval quality on AWS. We support the real Knowledge Base, vector, and evaluation work.',
  heroEyebrow: 'AWS RAG Engineer',
  painIntro:
    'Owning RAG quality on Bedrock and want an expert on chunking, embeddings, reranking, and evaluation when answers go wrong?',
  heroVariant:
    'We support AWS RAG Engineers on the real retrieval stack: Bedrock Knowledge Bases, OpenSearch Serverless and Aurora pgvector, chunking and metadata design, embeddings, reranking and query rewriting, RetrieveAndGenerate, grounding and Guardrails, and evaluation harnesses. We work your real deliverables and incidents, and back you for interviews and profile positioning.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS RAG Engineers', 'Bedrock Knowledge Bases, vector stores, chunking, reranking, evaluation, and production RAG quality'),
  relatedLinks: roleRelated('/aws-rag-engineer-job-support/', [KB_RAG_HUB_LINK, BEDROCK_HUB_LINK]),
});

// ─── AWS AI Solutions Architect ──────────────────────────────────────────────

export const awsAiSolutionsArchitect: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-solutions-architect-job-support',
  title: 'AWS AI Solutions Architect Job Support — Enterprise GenAI Architecture',
  description:
    'Real-time AWS AI Solutions Architect job support: enterprise Bedrock/SageMaker/AgentCore architecture, security, cost, and scalability — plus interview and profile support. Same-day, confidential.',
  keywords: [
    'AWS AI Solutions Architect job support', 'AWS GenAI architect support', 'AWS AI architect help',
    'Bedrock architecture support', 'enterprise AWS AI architecture', 'AWS AI architect role support',
  ],
  h1: 'AWS AI Solutions Architect Job Support — Design Enterprise AI That Holds Up',
  tagline:
    'The AI Solutions Architect owns the whole design — Bedrock, SageMaker, AgentCore, security, and cost. We support the architecture and the reviews.',
  heroEyebrow: 'AWS AI Solutions Architect',
  painIntro:
    'Designing enterprise AWS AI architecture and want an expert to pressure-test decisions on security, cost, scalability, and governance?',
  heroVariant:
    'We support AWS AI Solutions Architects on end-to-end design: Bedrock and RAG architecture, AgentCore agent platforms, SageMaker ML platforms, data and vector architecture, security (IAM, KMS, VPC/PrivateLink), governance, observability, and cost — plus the trade-off discussions and architecture reviews that decide a project. We help you produce defensible designs and back you for interviews and profile positioning.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS AI Solutions Architects', 'enterprise Bedrock/SageMaker/AgentCore architecture, security, governance, scalability, and cost design'),
  relatedLinks: roleRelated('/aws-ai-solutions-architect-job-support/', [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK]),
});

// ─── Amazon Bedrock Developer ────────────────────────────────────────────────

export const amazonBedrockDeveloper: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-developer-job-support',
  title: 'Amazon Bedrock Developer Job Support — Build GenAI Apps on Bedrock',
  description:
    'Real-time Amazon Bedrock Developer job support: Converse API, foundation models, RAG, Guardrails, and Bedrock application development on real projects — plus interview and profile support.',
  keywords: [
    'Amazon Bedrock Developer job support', 'Bedrock developer support', 'Bedrock application developer',
    'Bedrock dev help', 'AWS Bedrock developer role', 'Bedrock coding support',
  ],
  h1: 'Amazon Bedrock Developer Job Support — Ship Production GenAI Apps',
  tagline:
    'The Bedrock Developer builds the GenAI application. We support the real coding, integration, and debugging.',
  heroEyebrow: 'Amazon Bedrock Developer',
  painIntro:
    'Developing on Amazon Bedrock and want an expert on the Converse API, RAG integration, Guardrails, and production bugs?',
  heroVariant:
    'We support Amazon Bedrock Developers on the real build: Converse API and tool use, model selection, Knowledge Base and RAG integration, Guardrails, Prompt Management, boto3/SDK code, streaming, error handling, and IAM. We work your actual tickets, help you pass reviews, and back you for interviews and profile positioning as a Bedrock developer.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('Amazon Bedrock Developers', 'Bedrock application development with the Converse API, RAG, Guardrails, and production debugging'),
  relatedLinks: roleRelated('/amazon-bedrock-developer-job-support/', [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK]),
});

// ─── AWS Agentic AI Engineer ─────────────────────────────────────────────────

export const awsAgenticAiEngineer: LandingPageConfig = awsServicePage({
  slug: 'aws-agentic-ai-engineer-job-support',
  title: 'AWS Agentic AI Engineer Job Support — AgentCore, MCP & Multi-Agent',
  description:
    'Real-time AWS Agentic AI Engineer job support: AgentCore agents, Memory, Gateway, Identity, Policy, MCP, and multi-agent systems on real projects — plus interview and profile support.',
  keywords: [
    'AWS Agentic AI Engineer job support', 'AgentCore engineer support', 'AWS agent engineer',
    'agentic AI engineer AWS help', 'multi-agent engineer AWS', 'AWS agent role support',
  ],
  h1: 'AWS Agentic AI Engineer Job Support — Build Production Agents on AgentCore',
  tagline:
    'The Agentic AI Engineer owns production agents. We support the real AgentCore, MCP, and multi-agent work.',
  heroEyebrow: 'AWS Agentic AI Engineer',
  painIntro:
    'Building production agents on AWS and want an expert on AgentCore Runtime, Memory, Gateway, Policy, and multi-agent design?',
  heroVariant:
    'We support AWS Agentic AI Engineers across the agent stack: AgentCore Runtime, Memory, Gateway, Identity, Policy (Cedar), Browser, Code Interpreter, and Observability; framework agents with Strands, LangGraph, and CrewAI; MCP and A2A; and multi-agent orchestration. We work your real deliverables and incidents, and back you for interviews and profile positioning.',
  highlights: roleHighlights,
  faqs: awsJobFaqs('AWS Agentic AI Engineers', 'AgentCore Runtime, Memory, Gateway, Identity, Policy, MCP, and multi-agent systems, plus production agent incidents'),
  relatedLinks: roleRelated('/aws-agentic-ai-engineer-job-support/', [AGENTCORE_HUB_LINK, { label: 'MCP on AWS', href: '/aws-mcp-agentcore-job-support/' }]),
});

// ─── AWS RAG interview proxy ─────────────────────────────────────────────────

export const awsRagInterviewProxy: LandingPageConfig = awsServicePage({
  slug: 'aws-rag-interview-proxy-support',
  title: 'AWS RAG Interview Support — Retrieval & Bedrock RAG System Design',
  description:
    'Real-time AWS RAG interview support: retrieval architecture, Bedrock Knowledge Bases, chunking, embeddings, reranking, evaluation, and RAG system design. Live, real-time proxy interview support.',
  keywords: [
    'AWS RAG interview support', 'Bedrock RAG interview', 'RAG system design interview AWS',
    'retrieval interview AWS', 'Knowledge Bases interview', 'AWS RAG proxy interview',
  ],
  h1: 'AWS RAG Interview Support — Ace Retrieval & RAG System Design',
  tagline:
    'RAG interviews probe retrieval quality, not just prompts. Our experts back you live, in real time, during the interview itself.',
  heroEyebrow: 'AWS RAG Interview Support',
  painIntro:
    'An AWS RAG or GenAI interview coming up and unsure how deep they will go on chunking, embeddings, reranking, and RAG evaluation on Bedrock?',
  heroVariant:
    'Our experts support you across the AWS RAG interview surface: retrieval architecture, Bedrock Knowledge Bases, chunking strategies, embeddings and vector stores (OpenSearch, pgvector), reranking and query rewriting, RetrieveAndGenerate, grounding and Guardrails, and RAG evaluation. We provide discreet, real-time live support. We never guarantee selection — hiring decisions are made solely by employers.',
  highlights: interviewHighlights,
  faqs: awsInterviewFaqs('AWS RAG'),
  relatedLinks: relatedLinks({
    geoLinks: [AWS_INTERVIEW_HUB_LINK, KB_RAG_HUB_LINK],
    techLinks: [
      { label: 'Bedrock interview support', href: '/amazon-bedrock-interview-proxy-support/' },
      { label: 'AWS RAG Engineer', href: '/aws-rag-engineer-job-support/' },
    ],
    problemLink: { label: 'Bedrock RAG troubleshooting', href: '/amazon-bedrock-rag-troubleshooting-support/' },
    proxyLink: EXISTING.ragProxy,
    additionalLinks: [AWS_INTERVIEW_HUB_LINK, KB_RAG_HUB_LINK, EXISTING.ragProxy, EXISTING.ragEngineer],
  }),
});

// ─── AWS AI Solutions Architect interview proxy ──────────────────────────────

export const awsAiArchitectInterviewProxy: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-solutions-architect-interview-proxy-support',
  title: 'AWS AI Solutions Architect Interview Support — Enterprise AI Design',
  description:
    'Real-time AWS AI Solutions Architect interview support: enterprise Bedrock/SageMaker/AgentCore architecture, security, cost, and scalability system design. Live, real-time proxy interview support.',
  keywords: [
    'AWS AI Solutions Architect interview', 'AWS GenAI architect interview', 'AWS AI architecture interview',
    'Bedrock architecture interview', 'AWS AI system design interview', 'AI architect proxy interview',
  ],
  h1: 'AWS AI Solutions Architect Interview Support — Enterprise AI System Design',
  tagline:
    'Architect interviews are all system design and trade-offs. Our experts back you live across Bedrock, SageMaker, AgentCore, security, and cost.',
  heroEyebrow: 'AWS AI Architect Interview Support',
  painIntro:
    'An AWS AI Solutions Architect interview coming up with heavy system-design rounds on enterprise GenAI, security, and cost?',
  heroVariant:
    'Our experts support you across the AWS AI architecture interview surface: end-to-end Bedrock and RAG architecture, AgentCore agent platforms, SageMaker ML platforms, data and vector architecture, security (IAM, KMS, VPC/PrivateLink), governance, observability, scalability, and cost trade-offs. We provide discreet, real-time live support. We never guarantee selection — hiring decisions are made solely by employers.',
  highlights: interviewHighlights,
  faqs: awsInterviewFaqs('AWS AI Solutions Architect'),
  relatedLinks: relatedLinks({
    geoLinks: [AWS_INTERVIEW_HUB_LINK, { label: 'AWS AI Solutions Architect', href: '/aws-ai-solutions-architect-job-support/' }],
    techLinks: [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [AWS_INTERVIEW_HUB_LINK, AGENTCORE_HUB_LINK, EXISTING.genaiProxy, AWS_PROFILE_LINK],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsRolePages: LandingPageConfig[] = [
  awsAiEngineer,
  awsGenAiEngineer,
  awsMlEngineer,
  awsMlopsEngineer,
  awsRagEngineer,
  awsAiSolutionsArchitect,
  amazonBedrockDeveloper,
  awsAgenticAiEngineer,
  awsRagInterviewProxy,
  awsAiArchitectInterviewProxy,
];
