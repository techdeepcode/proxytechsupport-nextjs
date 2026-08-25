import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsServiceFaqs,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

const secObsRelated = (self: string) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'AWS AI security', href: '/aws-ai-security-job-support/' },
      { label: 'AWS AI observability', href: '/aws-ai-observability-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'AWS AI security', href: '/aws-ai-security-job-support/' },
      { label: 'AWS AI governance', href: '/aws-ai-governance-job-support/' },
      { label: 'AWS AI observability', href: '/aws-ai-observability-job-support/' },
      { label: 'AWS AI cost optimization', href: '/aws-ai-cost-optimization-job-support/' },
      { label: 'Bedrock Guardrails', href: '/amazon-bedrock-guardrails-job-support/' },
      AGENTCORE_HUB_LINK,
    ].filter((l) => l.href !== self),
  });

// ─── AWS AI security ─────────────────────────────────────────────────────────

export const awsAiSecurity: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-security-job-support',
  title: 'AWS AI Security Support — IAM, KMS, VPC & PrivateLink for AI Workloads',
  description:
    'Real-time AWS AI security support: IAM least privilege for Bedrock/SageMaker/AgentCore, KMS encryption, VPC endpoints and PrivateLink, Secrets Manager, CloudTrail audit, and enterprise AI security architecture on AWS.',
  keywords: [
    'AWS AI security support', 'Bedrock IAM', 'SageMaker IAM', 'AgentCore security',
    'Bedrock KMS encryption', 'Bedrock VPC endpoint PrivateLink', 'AWS AI security architecture',
  ],
  h1: 'AWS AI Security Support — Lock Down Bedrock, SageMaker & AgentCore',
  tagline:
    'AI workloads touch sensitive data and powerful actions. We help you secure them with IAM, KMS, VPC, and audit — properly.',
  heroEyebrow: 'AWS AI Security',
  painIntro:
    'AccessDenied from over-tight or wrong IAM, data that must never leave your VPC, or a security review blocking your Bedrock launch? AI security has to be designed, not bolted on.',
  heroVariant:
    'We help you secure AWS AI end to end: IAM roles and least-privilege policies for Bedrock, SageMaker, and AgentCore (including trust policies and cross-account access), KMS encryption for models and data, private connectivity with VPC endpoints and AWS PrivateLink so traffic never traverses the public internet, Secrets Manager for API keys and agent tool credentials, CloudTrail for audit, and AWS WAF for protecting GenAI APIs and chatbot endpoints. We connect this to Bedrock Guardrails and AgentCore Identity/Policy for a complete enterprise AI security posture.',
  faqs: awsServiceFaqs('AWS AI security', 'We help you design IAM least privilege, KMS encryption, VPC/PrivateLink private connectivity, Secrets Manager, CloudTrail audit, and WAF for Bedrock, SageMaker, and AgentCore.'),
  useCasesSection: {
    title: 'AWS AI Security Situations We Help With',
    cases: [
      'IAM least-privilege roles and trust policies for Bedrock, SageMaker, and AgentCore',
      'Keeping AI traffic private with VPC endpoints and PrivateLink',
      'KMS encryption for model artifacts, data, and Knowledge Bases',
      'Secrets Manager for API keys and agent tool credentials',
      'CloudTrail audit and cross-account AI governance',
      'Protecting GenAI APIs and chatbot endpoints with AWS WAF',
    ],
  },
  relatedLinks: secObsRelated('/aws-ai-security-job-support/'),
});

// ─── AWS AI governance ───────────────────────────────────────────────────────

export const awsAiGovernance: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-governance-job-support',
  title: 'AWS AI Governance Support — Responsible AI, Audit & Multi-Account',
  description:
    'Real-time AWS AI governance support: responsible AI with Bedrock Guardrails, SageMaker Catalog and Lake Formation, AWS Organizations and SCPs, Control Tower, CloudTrail, and enterprise AI governance on AWS.',
  keywords: [
    'AWS AI governance support', 'responsible AI AWS', 'Bedrock governance', 'SageMaker governance',
    'AWS Organizations AI', 'Control Tower AI', 'AI landing zone AWS',
  ],
  h1: 'AWS AI Governance Support — Govern AI Across Accounts and Teams',
  tagline:
    'Enterprise AI needs governance: responsible AI, model and data lineage, and multi-account controls. We help you build it.',
  heroEyebrow: 'AWS AI Governance',
  painIntro:
    'Multiple teams building AI across many accounts, with no consistent responsible-AI, audit, or access model? Governance debt fails compliance and slows everyone.',
  heroVariant:
    'We help you establish AWS AI governance: responsible AI with Bedrock Guardrails (including automated reasoning), data and model governance with SageMaker Catalog and AWS Lake Formation, multi-account structure with AWS Organizations and Service Control Policies (SCPs), AI landing zones with Control Tower, audit with CloudTrail, and clear ownership and access boundaries. The result is AI development that satisfies audit and compliance without blocking delivery.',
  faqs: awsServiceFaqs('AWS AI governance', 'We help you set up responsible AI, data/model governance, multi-account controls with Organizations and SCPs, Control Tower landing zones, and CloudTrail audit.'),
  relatedLinks: secObsRelated('/aws-ai-governance-job-support/'),
});

// ─── AWS AI observability ────────────────────────────────────────────────────

export const awsAiObservability: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-observability-job-support',
  title: 'AWS AI Observability Support — CloudWatch, OpenTelemetry & Tracing',
  description:
    'Real-time AWS AI observability support: CloudWatch metrics and logs for Bedrock and SageMaker, AgentCore Observability with OpenTelemetry, X-Ray, token and latency monitoring, and AI application monitoring on AWS.',
  keywords: [
    'AWS AI observability support', 'Bedrock CloudWatch', 'AgentCore Observability OpenTelemetry',
    'SageMaker monitoring', 'AI application monitoring AWS', 'GenAI tracing AWS',
  ],
  h1: 'AWS AI Observability Support — See Latency, Cost & Failures Clearly',
  tagline:
    'You cannot fix what you cannot see. We help you instrument Bedrock, SageMaker, and agents with CloudWatch and OpenTelemetry.',
  heroEyebrow: 'AWS AI Observability',
  painIntro:
    'A GenAI app slow or wrong in production with no visibility into why, or token cost invisible until the bill arrives? Observability is the foundation of reliable AI.',
  heroVariant:
    'We help you instrument AWS AI for observability: CloudWatch metrics, logs, and dashboards for Bedrock invocations and SageMaker endpoints; AgentCore Observability with OpenTelemetry traces and spans for agent trajectories; X-Ray for distributed tracing; token-usage, latency, throughput, and failure monitoring; and alerting. This is what lets you debug incidents fast and catch regressions early — and it connects directly to FinOps cost monitoring.',
  faqs: awsServiceFaqs('AWS AI observability', 'We help you instrument Bedrock, SageMaker, and AgentCore with CloudWatch and OpenTelemetry, build dashboards and alerting, and monitor latency, tokens, and failures.'),
  relatedLinks: secObsRelated('/aws-ai-observability-job-support/'),
});

// ─── AWS AI cost optimization / FinOps ───────────────────────────────────────

export const awsAiCostOptimization: LandingPageConfig = awsServicePage({
  slug: 'aws-ai-cost-optimization-job-support',
  title: 'AWS AI Cost Optimization Support — GenAI FinOps for Bedrock & SageMaker',
  description:
    'Real-time AWS AI cost optimization support: Bedrock token cost, SageMaker endpoint and GPU cost, provisioned vs on-demand, intelligent prompt routing, Cost Explorer, Budgets, and GenAI FinOps on AWS.',
  keywords: [
    'AWS AI cost optimization', 'Bedrock cost optimization', 'SageMaker cost optimization',
    'GenAI FinOps AWS', 'Bedrock token cost', 'AWS AI budgets', 'provisioned vs on-demand cost',
  ],
  h1: 'AWS AI Cost Optimization Support — Cut GenAI & ML Spend Without Losing Quality',
  tagline:
    'AI bills surprise teams fast. We help you model, monitor, and cut Bedrock and SageMaker cost with FinOps discipline.',
  heroEyebrow: 'AWS AI FinOps',
  painIntro:
    'Bedrock token cost or SageMaker endpoint spend climbing with no clear cause, or a budget review looming? AI cost is controllable with the right levers.',
  heroVariant:
    'We help you optimize AWS AI cost: model Bedrock token spend, use intelligent prompt routing and model right-sizing to cut inference cost (often significantly) without quality loss, decide provisioned throughput vs on-demand, right-size and autoscale SageMaker endpoints, eliminate idle infrastructure and GPU waste, and set up Cost Explorer, AWS Budgets, and tagging so spend is visible and attributable. This is GenAI FinOps — predictable AI spend that scales with value, not surprise.',
  faqs: awsServiceFaqs('AWS AI cost optimization', 'We help you model token and endpoint cost, apply prompt routing and right-sizing, choose provisioned vs on-demand, and set up Cost Explorer and Budgets.'),
  useCasesSection: {
    title: 'AWS AI Cost Situations We Help With',
    cases: [
      'Bedrock token cost climbing — routing, caching, and model right-sizing',
      'Deciding provisioned throughput vs on-demand for your traffic',
      'SageMaker endpoint and GPU cost right-sizing and autoscaling',
      'Eliminating idle infrastructure and GPU waste',
      'Setting up Cost Explorer, Budgets, and tagging for attribution',
      'Building a token-cost and endpoint-cost model for forecasting',
    ],
  },
  relatedLinks: secObsRelated('/aws-ai-cost-optimization-job-support/'),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsSecurityObservabilityPages: LandingPageConfig[] = [
  awsAiSecurity,
  awsAiGovernance,
  awsAiObservability,
  awsAiCostOptimization,
];
