import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  MLOPS_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

// ─── AWS MLOps hub ───────────────────────────────────────────────────────────

export const awsMlopsHub: LandingPageConfig = awsPage({
  slug: 'aws-mlops-job-support',
  title: 'AWS MLOps Job Support — SageMaker Pipelines, MLflow, CI/CD & FMOps',
  description:
    'Real-time AWS MLOps job support: SageMaker Pipelines, Managed MLflow, Model Registry, CI/CD with CodePipeline and GitHub Actions, Terraform/CDK, retraining, monitoring, and FMOps/LLMOps for GenAI on AWS.',
  keywords: [
    'AWS MLOps job support', 'SageMaker MLOps support', 'AWS FMOps LLMOps', 'SageMaker Pipelines MLOps',
    'AWS ML CI/CD', 'AWS model deployment MLOps', 'AWS GenAIOps support', 'AWS ML monitoring',
  ],
  h1: 'AWS MLOps Job Support — Pipelines, MLflow, CI/CD & GenAIOps',
  tagline:
    'The strongest MLOps hub on AWS: real-time help building reproducible training, deployment, monitoring, and GenAIOps on SageMaker and the AWS developer tools.',
  heroEyebrow: 'AWS MLOps Hub — Updated August 2026',
  painIntro:
    'Models trained in notebooks but no repeatable path to production, no versioning, and no monitoring? MLOps is where AWS ML projects either scale or stall.',
  heroVariant:
    'We help you build real MLOps on AWS: SageMaker Pipelines for orchestration, Managed MLflow for experiment tracking, Model Registry for versioning and approval, automated retraining and promotion, CI/CD with CodePipeline, CodeBuild, ECR, and GitHub Actions, and IaC with Terraform, CDK, and CloudFormation. We cover inference monitoring, model and data drift, model evaluation, and rollback — and extend it to FMOps/LLMOps/GenAIOps for Bedrock and foundation-model workloads (prompt versioning, evaluation harnesses, guardrail and cost monitoring). We cross-link to your existing MLOps and model-deployment work.',
  geoLine:
    'AWS MLOps support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover SageMaker Pipelines, Managed MLflow, Model Registry, CodePipeline/CodeBuild/ECR, GitHub Actions, Terraform/CDK/CloudFormation, and FMOps/LLMOps for Bedrock.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What AWS MLOps job support do you provide?',
      answer:
        'End-to-end: SageMaker Pipelines orchestration, Managed MLflow experiment tracking, Model Registry versioning and approval, CI/CD with CodePipeline/CodeBuild/ECR and GitHub Actions, IaC with Terraform/CDK/CloudFormation, retraining and promotion automation, inference and drift monitoring, model evaluation, and safe rollback. We also cover FMOps/LLMOps for Bedrock and GenAI workloads.',
    },
    {
      question: 'Do you cover FMOps / LLMOps / GenAIOps?',
      answer:
        'Yes. For foundation-model and GenAI workloads we help with prompt versioning (Bedrock Prompt Management), evaluation harnesses, RAG evaluation, guardrail monitoring, token/cost observability, and deployment/rollback patterns specific to LLM apps and agents — the operational layer around Bedrock and AgentCore.',
    },
    {
      question: 'Can you help with CI/CD and IaC for ML on AWS?',
      answer:
        'Yes. We build CI/CD pipelines that train, evaluate, register, and deploy models with approval gates, using CodePipeline, CodeBuild, ECR, and GitHub Actions, and provision everything with Terraform, CDK, or CloudFormation so it is reproducible and auditable.',
    },
    {
      question: 'Do you help fix MLOps production incidents?',
      answer:
        'Yes. Pipeline execution failures, MLflow tracking issues, registry/promotion problems, broken deployments, drift alerts, and retraining failures — we work these live and harden the pipeline so they do not recur.',
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your MLOps setup and goals. We assign the right expert — usually same-day. Every engagement is confidential and NDAs are available.',
    },
  ],
  useCasesSection: {
    title: 'AWS MLOps Situations We Help With',
    cases: [
      'Building a SageMaker Pipeline that trains, evaluates, registers, and deploys',
      'Setting up Managed MLflow and Model Registry with approval gates',
      'CI/CD with CodePipeline, CodeBuild, ECR, and GitHub Actions',
      'IaC for ML with Terraform, CDK, or CloudFormation',
      'Inference and drift monitoring with safe rollback',
      'FMOps/LLMOps for Bedrock — prompt versioning, evaluation, cost and guardrail monitoring',
    ],
  },
  proxySection: {
    title: 'MLOps Interview & Career Support',
    intro:
      'Interviewing for an AWS MLOps role? Our experts back you live, in real time.',
    points: [
      'Pipelines, MLflow, Model Registry, and CI/CD system-design questions',
      'FMOps/LLMOps and GenAI operations',
      'Live, discreet proxy interview support during the real interview',
      'Profile positioning for AWS MLOps Engineer roles',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'Need AWS MLOps Job Support or a Pipeline Fix Now?',
  bottomCTABody:
    'In-house AWS MLOps experts — Pipelines, MLflow, Model Registry, CI/CD, IaC, and FMOps/LLMOps. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    techLinks: [
      { label: 'SageMaker Pipelines', href: '/amazon-sagemaker-pipelines-job-support/' },
      { label: 'SageMaker Managed MLflow', href: '/amazon-sagemaker-mlflow-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.mlopsProxy,
    additionalLinks: [
      { label: 'AWS GenAIOps / FMOps support', href: '/aws-genai-ops-job-support/' },
      { label: 'SageMaker Model Registry', href: '/amazon-sagemaker-model-registry-job-support/' },
      { label: 'AWS AI IaC & Terraform support', href: '/aws-ai-terraform-job-support/' },
      { label: 'AWS AI observability support', href: '/aws-ai-observability-job-support/' },
      SAGEMAKER_AI_HUB_LINK, AWS_HUB_LINK, AWS_INTERVIEW_HUB_LINK,
      EXISTING.mlops, EXISTING.mlopsEngineer, EXISTING.modelDeployment,
    ],
  }),
});

// ─── AWS GenAIOps / FMOps / LLMOps ───────────────────────────────────────────

export const awsGenAiOps: LandingPageConfig = awsServicePage({
  slug: 'aws-genai-ops-job-support',
  title: 'AWS FMOps & LLMOps Support — Operate Bedrock & GenAI in Production',
  description:
    'Real-time AWS FMOps/LLMOps/GenAIOps support: prompt versioning, RAG and LLM evaluation harnesses, guardrail monitoring, token and cost observability, and deployment/rollback for Bedrock and agent workloads.',
  keywords: [
    'AWS FMOps support', 'AWS LLMOps support', 'AWS GenAIOps', 'Bedrock LLMOps',
    'RAG evaluation harness AWS', 'GenAI monitoring AWS', 'LLM cost observability AWS',
  ],
  h1: 'AWS FMOps & LLMOps Support — The Operational Layer for GenAI on AWS',
  tagline:
    'LLM apps and agents need their own operational discipline. We help you build FMOps/LLMOps around Bedrock and AgentCore.',
  heroEyebrow: 'AWS FMOps / LLMOps / GenAIOps',
  painIntro:
    'Your Bedrock app or agent works, but you have no way to version prompts, measure quality regressions, monitor guardrails, or control token cost? That operational gap is where GenAI projects erode trust.',
  heroVariant:
    'FMOps/LLMOps is the operational layer for foundation-model and GenAI workloads on AWS. We help you version prompts (Bedrock Prompt Management), build RAG and LLM evaluation harnesses (including LLM-as-a-judge), monitor guardrail effectiveness, instrument token usage and cost (CloudWatch, Cost Explorer, Budgets), track model and prompt changes, and design safe deployment and rollback for Bedrock apps and AgentCore agents. This complements classic SageMaker MLOps for a complete operations story across ML and GenAI.',
  faqs: awsServiceFaqs('AWS FMOps/LLMOps', 'We help you version prompts, build evaluation harnesses, monitor guardrails, instrument token cost, and design safe deployment/rollback for Bedrock and agents.'),
  relatedLinks: relatedLinks({
    geoLinks: [MLOPS_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Prompt Management', href: '/amazon-bedrock-prompt-management-job-support/' },
      { label: 'AWS AI observability support', href: '/aws-ai-observability-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.mlopsProxy,
    additionalLinks: [MLOPS_HUB_LINK, AWS_HUB_LINK, EXISTING.mlops, EXISTING.rag],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsMlopsPages: LandingPageConfig[] = [awsMlopsHub, awsGenAiOps];
