import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  KB_RAG_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

// ─── Healthcare AWS AI ───────────────────────────────────────────────────────

export const healthcareAwsAi: LandingPageConfig = awsServicePage({
  slug: 'healthcare-aws-ai-job-support',
  title: 'Healthcare AWS AI Support — HIPAA, PHI, Clinical RAG & HealthLake',
  description:
    'Real-time healthcare AWS AI support: HIPAA/PHI-safe architecture, clinical RAG on Bedrock, FHIR and HealthLake, HealthScribe, Comprehend Medical, Guardrails, and IAM/KMS for healthcare GenAI on AWS.',
  keywords: [
    'healthcare AWS AI support', 'HIPAA Bedrock', 'clinical RAG AWS', 'AWS HealthLake',
    'AWS HealthScribe', 'Comprehend Medical', 'PHI safe AI AWS', 'FHIR Bedrock',
  ],
  h1: 'Healthcare AWS AI Support — Build PHI-Safe GenAI on AWS',
  tagline:
    'Healthcare AI on AWS is different — HIPAA, PHI, and clinical accuracy come first. We help you architect it correctly.',
  heroEyebrow: 'Healthcare AWS AI',
  painIntro:
    'Building clinical GenAI on AWS and worried about PHI handling, HIPAA, and hallucination in a clinical context? Healthcare AI has zero tolerance for the usual shortcuts.',
  heroVariant:
    'Healthcare AWS AI demands a specific architecture: PHI-safe data handling with KMS encryption and tight IAM, private connectivity (VPC/PrivateLink), HIPAA-eligible services, and clinical accuracy. We help you build clinical RAG on Bedrock Knowledge Bases with strong grounding and Guardrails, work with FHIR data and AWS HealthLake, use AWS HealthScribe for clinical documentation and Amazon Comprehend Medical for medical entity extraction, and design healthcare agents and voice AI — all with the governance and evaluation clinical settings require. We cross-link to the broader AI/ML healthcare work on the site.',
  highlights: jobSupportHighlights,
  faqs: awsServiceFaqs('healthcare AWS AI', 'We help you build PHI-safe clinical RAG on Bedrock, work with FHIR/HealthLake, use HealthScribe and Comprehend Medical, and design HIPAA-aware architecture with KMS, IAM, and Guardrails.'),
  useCasesSection: {
    title: 'Healthcare AWS AI Situations We Help With',
    cases: [
      'PHI-safe architecture with KMS, IAM, and VPC/PrivateLink for clinical GenAI',
      'Clinical RAG on Bedrock Knowledge Bases with grounding and Guardrails',
      'FHIR data and AWS HealthLake integration for AI workflows',
      'Clinical documentation with AWS HealthScribe',
      'Medical entity extraction and PII/PHI redaction with Comprehend Medical',
      'Healthcare document AI with Textract and Bedrock Data Automation',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [KB_RAG_HUB_LINK, { label: 'Bedrock Guardrails', href: '/amazon-bedrock-guardrails-job-support/' }],
    problemLink: { label: 'AWS AI security', href: '/aws-ai-security-job-support/' },
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'Amazon Textract', href: '/amazon-textract-job-support/' },
      { label: 'Amazon Comprehend', href: '/amazon-comprehend-job-support/' },
      { label: 'AWS AI governance', href: '/aws-ai-governance-job-support/' },
      BEDROCK_HUB_LINK, EXISTING.aimlHub,
    ],
  }),
});

// ─── Financial services AWS AI ───────────────────────────────────────────────

export const financialServicesAwsAi: LandingPageConfig = awsServicePage({
  slug: 'financial-services-aws-ai-job-support',
  title: 'Financial Services AWS AI Support — Banking GenAI, RAG & Governance',
  description:
    'Real-time financial-services AWS AI support: banking and fintech GenAI on Bedrock, RAG on regulated content, PII protection, audit, agent authorization, model evaluation, and governance on AWS.',
  keywords: [
    'financial services AWS AI support', 'banking Bedrock', 'fintech AWS AI', 'AWS AI PII protection',
    'financial RAG AWS', 'AWS AI audit governance', 'banking GenAI AWS',
  ],
  h1: 'Financial Services AWS AI Support — Compliant, Auditable GenAI',
  tagline:
    'Financial-services AI on AWS lives or dies on governance — PII, audit, and controllable agents. We help you build it right.',
  heroEyebrow: 'Financial Services AWS AI',
  painIntro:
    'Building banking or fintech GenAI on AWS and facing hard questions on PII, audit, model risk, and agent authorization? Financial services set the highest governance bar.',
  heroVariant:
    'Financial-services AWS AI requires strong controls: PII detection and redaction (Comprehend, Guardrails), full audit (CloudTrail), model evaluation and model-risk documentation, fine-grained agent authorization (AgentCore Policy/Cedar), and encryption and private networking (KMS, VPC/PrivateLink). We help you build RAG on regulated content, fraud and risk ML on SageMaker, customer-service and back-office agents, and the governance and evaluation that model-risk and compliance teams require — across banking, capital markets, insurance-adjacent, and fintech.',
  highlights: jobSupportHighlights,
  faqs: awsServiceFaqs('financial-services AWS AI', 'We help you build compliant banking/fintech GenAI on Bedrock, RAG on regulated content, PII protection, audit, agent authorization, and model-risk governance.'),
  useCasesSection: {
    title: 'Financial Services AWS AI Situations We Help With',
    cases: [
      'RAG on regulated financial content with PII protection and audit',
      'Fraud and risk ML on SageMaker with governance',
      'Fine-grained agent authorization with AgentCore Policy (Cedar)',
      'PII detection and redaction with Comprehend and Guardrails',
      'Model evaluation and model-risk documentation for GenAI',
      'CloudTrail audit and multi-account governance for AI',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [KB_RAG_HUB_LINK, { label: 'AgentCore Policy', href: '/amazon-bedrock-agentcore-policy-job-support/' }],
    problemLink: { label: 'AWS AI security', href: '/aws-ai-security-job-support/' },
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'AWS AI governance', href: '/aws-ai-governance-job-support/' },
      { label: 'Amazon Comprehend', href: '/amazon-comprehend-job-support/' },
      BEDROCK_HUB_LINK, EXISTING.aimlHub,
    ],
  }),
});

// ─── Insurance AWS AI ────────────────────────────────────────────────────────

export const insuranceAwsAi: LandingPageConfig = awsServicePage({
  slug: 'insurance-aws-ai-job-support',
  title: 'Insurance AWS AI Support — Claims, Textract, Data Automation & Agents',
  description:
    'Real-time insurance AWS AI support: claims processing, document AI with Textract and Bedrock Data Automation, RAG, agent workflows, and underwriting GenAI on AWS.',
  keywords: [
    'insurance AWS AI support', 'insurance Bedrock', 'claims AI AWS', 'insurance document AI AWS',
    'Textract insurance', 'Bedrock Data Automation insurance', 'underwriting GenAI AWS',
  ],
  h1: 'Insurance AWS AI Support — Automate Claims & Documents on AWS',
  tagline:
    'Insurance AI is document- and workflow-heavy. We help you automate claims and underwriting with Textract, Data Automation, and agents.',
  heroEyebrow: 'Insurance AWS AI',
  painIntro:
    'Drowning in claims documents and forms, or building underwriting GenAI on AWS? Insurance AI is mostly document intelligence and workflow — done accurately.',
  heroVariant:
    'Insurance AWS AI is differentiated by document- and workflow-heavy use cases: claims intake and processing, forms and policy documents, and underwriting. We help you build intelligent document processing with Amazon Textract and Bedrock Data Automation, RAG on policy and claims content, agent workflows for claims triage and customer service (AgentCore, Step Functions), and underwriting decision support — with PII protection, confidence handling and human review, and audit. We connect this to the broader insurance AI/ML work on the site.',
  highlights: jobSupportHighlights,
  faqs: awsServiceFaqs('insurance AWS AI', 'We help you build claims and document automation with Textract and Bedrock Data Automation, RAG on policy content, and agent workflows with PII protection and audit.'),
  useCasesSection: {
    title: 'Insurance AWS AI Situations We Help With',
    cases: [
      'Claims intake and processing with Textract and Bedrock Data Automation',
      'RAG on policy, claims, and underwriting content',
      'Agent workflows for claims triage with AgentCore and Step Functions',
      'Confidence handling and human review for document extraction',
      'PII protection and audit for insurance GenAI',
      'Underwriting decision support with evaluation and governance',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Data Automation', href: '/amazon-bedrock-data-automation-job-support/' },
      { label: 'Amazon Textract', href: '/amazon-textract-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'AWS Step Functions AI', href: '/aws-step-functions-ai-job-support/' },
      KB_RAG_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.aimlHub,
    ],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsIndustryPages: LandingPageConfig[] = [
  healthcareAwsAi,
  financialServicesAwsAi,
  insuranceAwsAi,
];
