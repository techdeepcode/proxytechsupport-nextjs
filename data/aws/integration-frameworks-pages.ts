import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

const ifRelated = (self: string) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [AGENTCORE_HUB_LINK, { label: 'MCP on AWS', href: '/aws-mcp-agentcore-job-support/' }],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'AWS Lambda + Bedrock', href: '/aws-lambda-bedrock-job-support/' },
      { label: 'AWS Step Functions AI', href: '/aws-step-functions-ai-job-support/' },
      { label: 'MCP on AWS', href: '/aws-mcp-agentcore-job-support/' },
      { label: 'Strands Agents', href: '/aws-strands-agents-job-support/' },
      { label: 'LangGraph + AgentCore', href: '/aws-langgraph-agentcore-job-support/' },
      { label: 'Python Amazon Bedrock', href: '/python-amazon-bedrock-job-support/' },
      AGENTCORE_HUB_LINK, EXISTING.langchain,
    ].filter((l) => l.href !== self),
  });

// ─── AWS Lambda + Bedrock ────────────────────────────────────────────────────

export const lambdaBedrock: LandingPageConfig = awsServicePage({
  slug: 'aws-lambda-bedrock-job-support',
  title: 'AWS Lambda + Bedrock Support — Serverless GenAI & Agent Tools',
  description:
    'Real-time AWS Lambda for GenAI support: Lambda with Bedrock, serverless GenAI APIs, Lambda RAG, agent tools for AgentCore, streaming, and cost/timeout handling on AWS.',
  keywords: [
    'AWS Lambda Bedrock support', 'Lambda GenAI', 'Lambda RAG', 'Lambda AgentCore tools',
    'serverless GenAI AWS', 'Lambda Bedrock streaming',
  ],
  h1: 'AWS Lambda + Bedrock Support — Serverless GenAI Done Right',
  tagline:
    'Lambda is the glue for serverless GenAI and agent tools. We help you build Bedrock-backed functions that scale and stay in budget.',
  heroEyebrow: 'Lambda + Bedrock',
  painIntro:
    'Lambda timing out on long Bedrock calls, cold starts hurting latency, or streaming responses tricky through API Gateway? Serverless GenAI has real constraints.',
  heroVariant:
    'AWS Lambda is the serverless backbone for many Bedrock applications and agent tools. We help you build Bedrock-backed Lambda functions, handle long-running inference within limits (and when to use Step Functions or async instead), implement RAG in Lambda, expose functions as AgentCore Gateway tools, stream responses, manage cold starts and concurrency, and control cost — with correct IAM and observability.',
  faqs: awsServiceFaqs('AWS Lambda + Bedrock', 'We help you build Bedrock-backed Lambda functions, handle timeouts and streaming, expose Lambda as AgentCore tools, and control cold starts and cost.'),
  relatedLinks: ifRelated('/aws-lambda-bedrock-job-support/'),
});

// ─── AWS Step Functions AI ───────────────────────────────────────────────────

export const stepFunctionsAi: LandingPageConfig = awsServicePage({
  slug: 'aws-step-functions-ai-job-support',
  title: 'AWS Step Functions for AI Support — Orchestrate GenAI & Agent Workflows',
  description:
    'Real-time AWS Step Functions for AI support: orchestrating Bedrock and document workflows, agent workflows, error handling and retries, and durable GenAI pipelines on AWS.',
  keywords: [
    'AWS Step Functions AI support', 'Step Functions Bedrock', 'Step Functions document workflow',
    'Step Functions agent workflow', 'GenAI orchestration AWS', 'durable AI workflow AWS',
  ],
  h1: 'AWS Step Functions for AI Support — Durable GenAI & Document Workflows',
  tagline:
    'When a GenAI process needs multiple steps, retries, and durability, Step Functions orchestrates it. We help you design it.',
  heroEyebrow: 'Step Functions for AI',
  painIntro:
    'A multi-step document or agent workflow that keeps failing halfway with no clean retry or state? Step Functions gives you durable orchestration — designed right.',
  heroVariant:
    'AWS Step Functions provides durable, visual orchestration for multi-step AI workflows — chaining Bedrock calls, Lambda functions, human review, and other AWS services with built-in retries, error handling, and state. We help you design state machines for document-processing (with Textract and Bedrock Data Automation), multi-step GenAI pipelines, and agent workflows, handle long-running steps and callbacks, and choose between Step Functions, Bedrock Flows, and AgentCore for orchestration.',
  faqs: awsServiceFaqs('AWS Step Functions for AI', 'We help you design durable state machines for document and GenAI workflows, handle retries and long-running steps, and choose between Step Functions, Flows, and AgentCore.'),
  relatedLinks: ifRelated('/aws-step-functions-ai-job-support/'),
});

// ─── MCP on AWS / AgentCore ──────────────────────────────────────────────────

export const mcpAgentCore: LandingPageConfig = awsServicePage({
  slug: 'aws-mcp-agentcore-job-support',
  title: 'MCP on AWS Support — AgentCore Gateway, MCP Servers & A2A',
  description:
    'Real-time Model Context Protocol (MCP) on AWS support: MCP servers, AgentCore MCP Gateway, authenticated and enterprise MCP, A2A, and multi-agent standards on AWS.',
  keywords: [
    'MCP on AWS support', 'AgentCore MCP', 'MCP Gateway AWS', 'MCP server AWS',
    'authenticated MCP', 'A2A AWS', 'multi-agent AWS',
  ],
  h1: 'MCP on AWS Support — Standards-Based Tools & Multi-Agent on AgentCore',
  tagline:
    'MCP standardizes how agents use tools; A2A standardizes how agents talk. We help you build both on AWS with AgentCore.',
  heroEyebrow: 'MCP & A2A on AWS',
  painIntro:
    'Want your agent to consume MCP tools securely, or expose your own MCP server to enterprise agents, or coordinate multiple agents? Standards make this maintainable — if implemented well.',
  heroVariant:
    'The Model Context Protocol (MCP) standardizes how agents discover and call tools, and AgentCore Gateway can expose and consume MCP servers with authentication (Identity) and authorization (Policy/Cedar). We help you build and secure MCP servers on AWS, connect them through AgentCore Gateway, design authenticated and enterprise MCP, and implement agent-to-agent (A2A) and multi-agent patterns. We connect this to your existing LangGraph, LangChain, and MCP work so agents interoperate cleanly.',
  faqs: awsServiceFaqs('MCP on AWS', 'We help you build and secure MCP servers, connect them via AgentCore Gateway with Identity and Policy, and design A2A and multi-agent patterns.'),
  relatedLinks: ifRelated('/aws-mcp-agentcore-job-support/'),
});

// ─── Strands Agents ──────────────────────────────────────────────────────────

export const strandsAgents: LandingPageConfig = awsServicePage({
  slug: 'aws-strands-agents-job-support',
  title: 'Strands Agents Support — Build Agents on AWS with Strands + AgentCore',
  description:
    'Real-time Strands Agents SDK support: building agents with Strands, Strands with Bedrock and AgentCore, tools and MCP, and deploying Strands agents to production on AWS.',
  keywords: [
    'Strands Agents support', 'Strands SDK AWS', 'Strands Bedrock', 'Strands AgentCore',
    'Strands agent tools', 'AWS agent framework',
  ],
  h1: 'Strands Agents Support — From Strands SDK to Production on AgentCore',
  tagline:
    'Strands is AWS’s open-source agent SDK. We help you build with it and deploy to AgentCore Runtime for production.',
  heroEyebrow: 'Strands Agents',
  painIntro:
    'Prototyping agents with Strands but unsure how to add tools, memory, and get to production? Strands plus AgentCore is the path.',
  heroVariant:
    'Strands Agents is an open-source SDK for building AI agents that works naturally with Amazon Bedrock and deploys to AgentCore. We help you build agents with Strands (model, tools, prompts), add tools via AgentCore Gateway and MCP, wire Memory and Identity, deploy to AgentCore Runtime with session isolation and scaling, and observe them with AgentCore Observability — taking a Strands prototype to a secure production agent.',
  faqs: awsServiceFaqs('Strands Agents', 'We help you build agents with Strands, add tools and memory via AgentCore, deploy to Runtime, and observe them in production.'),
  relatedLinks: ifRelated('/aws-strands-agents-job-support/'),
});

// ─── LangGraph + AgentCore ───────────────────────────────────────────────────

export const langGraphAgentCore: LandingPageConfig = awsServicePage({
  slug: 'aws-langgraph-agentcore-job-support',
  title: 'LangGraph & LangChain on AWS Support — Bedrock + AgentCore Deployment',
  description:
    'Real-time LangGraph and LangChain on AWS support: LangChain with Bedrock, LangGraph with AgentCore, deploying framework agents to AgentCore Runtime, and production debugging on AWS.',
  keywords: [
    'LangGraph AgentCore support', 'LangChain Bedrock support', 'LangGraph AWS deployment',
    'LangChain AgentCore', 'framework agents AWS', 'LangGraph production AWS',
  ],
  h1: 'LangGraph & LangChain on AWS Support — Deploy Framework Agents to AgentCore',
  tagline:
    'Already building with LangChain or LangGraph? We help you run them on Bedrock and deploy to AgentCore for production.',
  heroEyebrow: 'LangGraph / LangChain on AWS',
  painIntro:
    'A LangGraph agent that works locally but needs production hosting, memory, tool auth, and observability on AWS? AgentCore is framework-agnostic and built for exactly this.',
  heroVariant:
    'LangChain and LangGraph are popular agent frameworks, and AgentCore is framework-agnostic — so you can keep your LangGraph graph and deploy it to AgentCore Runtime. We help you use LangChain/LangGraph with Bedrock models, deploy framework agents to AgentCore for session isolation, scaling, and long-running workloads, add Memory, Gateway tools, Identity, and Policy, and observe with AgentCore Observability. We connect this to your existing LangChain and LangGraph work on the site.',
  faqs: awsServiceFaqs('LangGraph & LangChain on AWS', 'We help you use LangChain/LangGraph with Bedrock, deploy framework agents to AgentCore Runtime, and add memory, tools, identity, and observability.'),
  relatedLinks: ifRelated('/aws-langgraph-agentcore-job-support/'),
});

// ─── Python Amazon Bedrock (boto3) ───────────────────────────────────────────

export const pythonBedrock: LandingPageConfig = awsServicePage({
  slug: 'python-amazon-bedrock-job-support',
  title: 'Python Amazon Bedrock Support — boto3, Converse API & Production Code',
  description:
    'Real-time Python Amazon Bedrock support: boto3 and the AWS SDK for Python, Converse API, streaming, tool use, error handling and retries, and production Bedrock code on AWS.',
  keywords: [
    'Python Amazon Bedrock support', 'boto3 Bedrock', 'Python Bedrock Converse',
    'Python Bedrock streaming', 'boto3 Bedrock error handling', 'Python AWS AI SDK',
  ],
  h1: 'Python Amazon Bedrock Support — Production-Grade boto3 & Converse Code',
  tagline:
    'Most AWS AI code is Python. We help you write correct, resilient boto3 and Converse API code for Bedrock.',
  heroEyebrow: 'Python + Amazon Bedrock',
  painIntro:
    'boto3 Bedrock calls throwing ClientError, streaming hard to handle, or retries and pagination done wrong? Production Python for Bedrock needs care.',
  heroVariant:
    'We help you write production Python for Amazon Bedrock with boto3 and the AWS SDK: Converse and ConverseStream, InvokeModel and streaming, tool use loops, structured output, robust error handling (ClientError, ThrottlingException) with exponential backoff, credential and session management, and integration with Knowledge Bases and Guardrails. We also help structure Bedrock code into maintainable services and connect it to your existing Python AI/ML work.',
  faqs: awsServiceFaqs('Python Amazon Bedrock (boto3)', 'We help you write resilient boto3/Converse code, handle streaming and errors with backoff, and structure production Bedrock services in Python.'),
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Converse API', href: '/amazon-bedrock-converse-api-job-support/' },
      EXISTING.pythonAiml,
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [BEDROCK_HUB_LINK, AGENTCORE_HUB_LINK, EXISTING.pythonAiml, EXISTING.langchain],
  }),
});

// ─── AWS AI IaC / Terraform ──────────────────────────────────────────────────

export const awsAiTerraform: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-terraform-job-support',
  title: 'AWS AI IaC Support — Terraform, CDK & CloudFormation for Bedrock & SageMaker',
  description:
    'Real-time AWS AI Infrastructure-as-Code support: Terraform, AWS CDK, and CloudFormation for Bedrock, SageMaker, and AgentCore, plus CI/CD for GenAI and MLOps on AWS.',
  keywords: [
    'AWS AI Terraform support', 'Terraform Bedrock', 'Terraform SageMaker', 'AWS CDK Bedrock',
    'CloudFormation SageMaker', 'AgentCore Terraform', 'AI IaC AWS',
  ],
  h1: 'AWS AI IaC Support — Provision Bedrock, SageMaker & AgentCore as Code',
  tagline:
    'Click-ops does not scale or audit. We help you provision AWS AI with Terraform, CDK, and CloudFormation.',
  heroEyebrow: 'AWS AI IaC / DevOps',
  painIntro:
    'AI resources created by hand, no reproducibility, and a security team asking for IaC? Bedrock, SageMaker, and AgentCore all deserve to be code.',
  heroVariant:
    'We help you provision AWS AI as code: Terraform, AWS CDK, and CloudFormation for Bedrock (Knowledge Bases, Guardrails, models), SageMaker (domains, endpoints, pipelines), and AgentCore (Runtime, Gateway, and supporting resources — which support CloudFormation). We build CI/CD for AI/ML with CodePipeline, CodeBuild, ECR, and GitHub Actions, manage state and environments, and enforce security and governance in the pipeline. We cross-link your existing Terraform and DevOps work.',
  faqs: awsServiceFaqs('AWS AI IaC', 'We help you provision Bedrock, SageMaker, and AgentCore with Terraform, CDK, and CloudFormation, and build CI/CD for GenAI and MLOps.'),
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, { label: 'AWS MLOps', href: '/aws-mlops-job-support/' }],
    techLinks: [BEDROCK_HUB_LINK, AGENTCORE_HUB_LINK],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [{ label: 'AWS MLOps', href: '/aws-mlops-job-support/' }, BEDROCK_HUB_LINK, EXISTING.devopsUsa],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsIntegrationFrameworkPages: LandingPageConfig[] = [
  lambdaBedrock,
  stepFunctionsAi,
  mcpAgentCore,
  strandsAgents,
  langGraphAgentCore,
  pythonBedrock,
  awsAiTerraform,
];
