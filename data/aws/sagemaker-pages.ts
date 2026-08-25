import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  SAGEMAKER_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  MLOPS_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

// ─── Amazon SageMaker parent hub ─────────────────────────────────────────────

export const sageMakerHub: LandingPageConfig = awsPage({
  slug: 'amazon-sagemaker-job-support',
  title: 'Amazon SageMaker Job Support — Unified Studio, Lakehouse & AI/ML',
  description:
    'Real-time Amazon SageMaker job support: the next-generation SageMaker with Unified Studio, Lakehouse, Catalog governance, and SageMaker AI for data and AI development on AWS. Same-day, confidential.',
  keywords: [
    'Amazon SageMaker job support', 'SageMaker Unified Studio support', 'SageMaker Lakehouse support',
    'SageMaker Catalog support', 'SageMaker production support', 'SageMaker architecture support',
    'AWS data and AI platform support',
  ],
  h1: 'Amazon SageMaker Job Support — Unified Data & AI Development on AWS',
  tagline:
    'The strongest ML/MLOps hub on AWS: real-time help with the next-generation SageMaker — Unified Studio, Lakehouse, Catalog governance, and SageMaker AI.',
  heroEyebrow: 'Amazon SageMaker Hub — Updated August 2026',
  painIntro:
    'Navigating the next-generation Amazon SageMaker — Unified Studio bringing together analytics and AI, Lakehouse over S3 and Redshift, Catalog for governance, and SageMaker AI for ML — and not sure how the pieces fit? The platform is powerful but broad.',
  heroVariant:
    'The next generation of Amazon SageMaker (Unified Studio generally available since March 2025) is a single environment that unifies AWS analytics and AI/ML — Amazon EMR, AWS Glue, Amazon Athena, Amazon Redshift, Amazon Bedrock, and SageMaker AI. SageMaker Lakehouse provides unified, open access to data across S3 data lakes, Redshift warehouses, and federated sources on Apache Iceberg standards; SageMaker Catalog delivers data and AI governance; and Amazon Q Developer assists across the lifecycle. We help you set up Unified Studio and projects, wire Lakehouse and Catalog, integrate Bedrock and SageMaker AI, configure IAM Identity Center, and build governed data-and-AI workflows.',
  geoLine:
    'Amazon SageMaker support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover SageMaker Unified Studio, Lakehouse (Apache Iceberg), Catalog governance, SageMaker AI, and integration with EMR, Glue, Athena, Redshift, and Bedrock.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is the difference between Amazon SageMaker and SageMaker AI?',
      answer:
        'The next generation of Amazon SageMaker is a unified platform for data and AI, centered on SageMaker Unified Studio, with SageMaker Lakehouse (data), SageMaker Catalog (governance), and integrations across EMR, Glue, Athena, Redshift, and Bedrock. SageMaker AI is the machine-learning capability within that platform — training, tuning, deployment, MLOps, and inference (formerly the core "Amazon SageMaker" ML service). We support both and help you use them together.',
    },
    {
      question: 'What Amazon SageMaker job support do you provide?',
      answer:
        'Setting up and using SageMaker Unified Studio and projects, configuring Lakehouse over S3 and Redshift on Apache Iceberg, governing data and models with SageMaker Catalog and Lake Formation, integrating Bedrock and SageMaker AI, wiring IAM Identity Center, and building end-to-end data-and-AI workflows. We also handle production issues and architecture reviews.',
    },
    {
      question: 'Do you help with SageMaker Lakehouse and Catalog?',
      answer:
        'Yes. We help you configure SageMaker Lakehouse for unified access across S3 data lakes, Redshift warehouses, and federated sources using Apache Iceberg, enable zero-ETL patterns where supported, and set up SageMaker Catalog for data-asset and model discovery, metadata, lineage, and access governance with Lake Formation.',
    },
    {
      question: 'Can you help with SageMaker production incidents?',
      answer:
        'Yes. Unified Studio project and permissions issues, Lakehouse access and federation problems, Catalog governance and lineage gaps, and SageMaker AI training/inference failures — we work these live. See our SageMaker AI and inference troubleshooting pages for the ML-specific incidents.',
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your SageMaker setup and where you are stuck. We assign the right expert — usually same-day. Every engagement is confidential and NDAs are available.',
    },
  ],
  useCasesSection: {
    title: 'Amazon SageMaker Situations We Help With',
    cases: [
      'Setting up SageMaker Unified Studio, projects, and collaborative development',
      'Configuring Lakehouse over S3 and Redshift on Apache Iceberg with federated data',
      'Governing data and models with SageMaker Catalog and Lake Formation',
      'Integrating Bedrock and SageMaker AI inside Unified Studio',
      'Wiring IAM Identity Center for workforce access',
      'Building governed, end-to-end data-and-AI workflows',
    ],
  },
  proxySection: {
    title: 'SageMaker Interview & Career Support',
    intro:
      'Interviewing for a SageMaker, ML, or AWS data-and-AI role? We prepare you and can back you live.',
    points: [
      'SageMaker platform and SageMaker AI architecture preparation',
      'Lakehouse, Catalog, and governance design questions',
      'Live, discreet proxy interview support during the real interview',
      'Profile positioning for SageMaker and AWS ML Engineer roles',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'Need Amazon SageMaker Job Support or a Production Fix Now?',
  bottomCTABody:
    'In-house Amazon SageMaker experts available same-day — Unified Studio, Lakehouse, Catalog, and SageMaker AI. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    techLinks: [
      { label: 'SageMaker Unified Studio support', href: '/amazon-sagemaker-unified-studio-job-support/' },
      { label: 'SageMaker Lakehouse support', href: '/amazon-sagemaker-lakehouse-job-support/' },
    ],
    problemLink: { label: 'SageMaker inference troubleshooting', href: '/amazon-sagemaker-inference-troubleshooting-support/' },
    proxyLink: { label: 'SageMaker interview support', href: '/amazon-sagemaker-interview-proxy-support/' },
    additionalLinks: [
      SAGEMAKER_AI_HUB_LINK,
      { label: 'SageMaker Unified Studio', href: '/amazon-sagemaker-unified-studio-job-support/' },
      { label: 'SageMaker Lakehouse', href: '/amazon-sagemaker-lakehouse-job-support/' },
      { label: 'SageMaker Catalog & governance', href: '/amazon-sagemaker-catalog-job-support/' },
      { label: 'SageMaker training support', href: '/amazon-sagemaker-ai-training-job-support/' },
      { label: 'SageMaker inference support', href: '/amazon-sagemaker-ai-inference-job-support/' },
      MLOPS_HUB_LINK, AWS_HUB_LINK, AWS_PRODUCTION_LINK,
      EXISTING.mlops, EXISTING.modelDeployment, EXISTING.aimlHub,
    ],
  }),
});

const smRelated = (self: string) =>
  relatedLinks({
    geoLinks: [SAGEMAKER_HUB_LINK, AWS_HUB_LINK],
    techLinks: [SAGEMAKER_AI_HUB_LINK, MLOPS_HUB_LINK],
    problemLink: { label: 'SageMaker inference troubleshooting', href: '/amazon-sagemaker-inference-troubleshooting-support/' },
    proxyLink: { label: 'SageMaker interview support', href: '/amazon-sagemaker-interview-proxy-support/' },
    additionalLinks: [
      { label: 'SageMaker Unified Studio', href: '/amazon-sagemaker-unified-studio-job-support/' },
      { label: 'SageMaker Lakehouse', href: '/amazon-sagemaker-lakehouse-job-support/' },
      { label: 'SageMaker Catalog & governance', href: '/amazon-sagemaker-catalog-job-support/' },
      SAGEMAKER_HUB_LINK, SAGEMAKER_AI_HUB_LINK,
      { label: 'AWS Glue for ML support', href: '/aws-glue-ml-job-support/' },
      { label: 'Amazon Redshift AI support', href: '/amazon-redshift-ai-job-support/' },
    ].filter((l) => l.href !== self),
  });

// ─── SageMaker Unified Studio ────────────────────────────────────────────────

export const sageMakerUnifiedStudio: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-unified-studio-job-support',
  title: 'SageMaker Unified Studio Support — One Environment for Data & AI',
  description:
    'Real-time Amazon SageMaker Unified Studio support: projects, notebooks, Bedrock and SageMaker AI integration, Redshift, Glue, Athena, EMR, IAM Identity Center, and collaborative data-and-AI development on AWS.',
  keywords: [
    'SageMaker Unified Studio support', 'SageMaker Unified Studio projects', 'Unified Studio Bedrock',
    'Unified Studio SageMaker AI', 'Unified Studio Redshift Glue Athena', 'AWS data AI workspace',
  ],
  h1: 'Amazon SageMaker Unified Studio Support — Build Data & AI in One Place',
  tagline:
    'Unified Studio brings analytics, ML, and GenAI into one governed workspace. We help you set up projects and workflows that actually flow.',
  heroEyebrow: 'SageMaker Unified Studio',
  painIntro:
    'Teams juggling separate tools for data, ML, and GenAI, or stuck on project permissions and integration in Unified Studio? The unified workspace only pays off when it is configured well.',
  heroVariant:
    'SageMaker Unified Studio (generally available since March 2025) is a single environment that brings together AWS analytics and AI/ML tools — Amazon EMR, AWS Glue, Amazon Athena, Amazon Redshift, Amazon Bedrock, and SageMaker AI — with Amazon Q Developer assistance. We help you set up domains and projects, manage collaborative development and permissions with IAM Identity Center, connect data via Lakehouse, integrate Bedrock and SageMaker AI notebooks, and build end-to-end data-to-AI workflows without bouncing between consoles.',
  faqs: awsServiceFaqs('SageMaker Unified Studio', 'We help you set up projects, permissions with IAM Identity Center, data connectivity via Lakehouse, and Bedrock + SageMaker AI integration for collaborative development.'),
  relatedLinks: smRelated('/amazon-sagemaker-unified-studio-job-support/'),
});

// ─── SageMaker Lakehouse ─────────────────────────────────────────────────────

export const sageMakerLakehouse: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-lakehouse-job-support',
  title: 'SageMaker Lakehouse Support — Unified Iceberg Data for AI on AWS',
  description:
    'Real-time Amazon SageMaker Lakehouse support: unified access over S3 and Redshift on Apache Iceberg, federated data, zero-ETL where available, data sharing, and Bedrock + SageMaker AI on lakehouse data.',
  keywords: [
    'SageMaker Lakehouse support', 'SageMaker Lakehouse Iceberg', 'SageMaker Lakehouse Redshift S3',
    'AWS lakehouse federated data', 'zero-ETL SageMaker', 'lakehouse Bedrock RAG',
  ],
  h1: 'Amazon SageMaker Lakehouse Support — One Copy of Data for Analytics & AI',
  tagline:
    'SageMaker Lakehouse unifies S3, Redshift, and federated sources on Apache Iceberg. We help you connect it and feed Bedrock and SageMaker AI from it.',
  heroEyebrow: 'SageMaker Lakehouse',
  painIntro:
    'Data split across S3 lakes and Redshift warehouses, copied and re-copied for every ML and analytics job? Lakehouse is designed to end that — if the access model is set up correctly.',
  heroVariant:
    'SageMaker Lakehouse provides unified, open, secure access to data stored in Amazon S3 data lakes, Amazon Redshift warehouses, and third-party/federated sources — built on Apache Iceberg open standards, so you query one logical copy from analytics, ML, and GenAI. We help you configure Lakehouse catalogs and permissions, set up federated access and data sharing, enable zero-ETL patterns where supported, and feed lakehouse data into Bedrock RAG and SageMaker AI training — governed by SageMaker Catalog and Lake Formation.',
  faqs: awsServiceFaqs('SageMaker Lakehouse', 'We help you configure Iceberg-based unified access over S3 and Redshift, federated data, zero-ETL, and feeding lakehouse data into Bedrock and SageMaker AI.'),
  relatedLinks: smRelated('/amazon-sagemaker-lakehouse-job-support/'),
});

// ─── SageMaker Catalog / governance ──────────────────────────────────────────

export const sageMakerCatalog: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-catalog-job-support',
  title: 'SageMaker Catalog Support — Data & AI Governance on AWS',
  description:
    'Real-time Amazon SageMaker Catalog support: data and AI governance, data-asset and model discovery, metadata, lineage, data quality, access governance, and Lake Formation integration for governed AI development.',
  keywords: [
    'SageMaker Catalog support', 'SageMaker data governance', 'SageMaker AI governance',
    'SageMaker lineage metadata', 'SageMaker Lake Formation', 'governed AI development AWS',
  ],
  h1: 'Amazon SageMaker Catalog Support — Govern Data & AI Assets Properly',
  tagline:
    'Governance is not optional at enterprise scale. SageMaker Catalog gives you discovery, metadata, lineage, and access control. We help you operationalize it.',
  heroEyebrow: 'SageMaker Catalog & Governance',
  painIntro:
    'Data and model assets no one can find, unclear lineage, and access that is hard to audit? Governance debt slows every AI project and fails compliance reviews.',
  heroVariant:
    'SageMaker Catalog delivers data and AI governance inside the SageMaker platform — data-asset and model discovery, business and technical metadata, lineage, data quality, and access governance, integrated with AWS Lake Formation (and building on DataZone capabilities). We help you set up the catalog, curate metadata and glossaries, establish lineage across data-to-model pipelines, define fine-grained access with Lake Formation, and build a governed AI development practice that satisfies audit and compliance without blocking delivery.',
  faqs: awsServiceFaqs('SageMaker Catalog', 'We help you set up data and model discovery, metadata, lineage, data quality, and Lake Formation access governance for governed AI development.'),
  relatedLinks: smRelated('/amazon-sagemaker-catalog-job-support/'),
});

// ─── SageMaker interview proxy ───────────────────────────────────────────────

export const sageMakerInterviewProxy: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-interview-proxy-support',
  title: 'Amazon SageMaker Interview Support — ML Platform & MLOps System Design',
  description:
    'Real-time Amazon SageMaker interview support: SageMaker AI training and inference, Pipelines, Managed MLflow, Model Registry, Unified Studio, Lakehouse, and MLOps system design. Calibrated mocks plus live proxy support.',
  keywords: [
    'SageMaker interview support', 'SageMaker AI interview', 'SageMaker MLOps interview',
    'SageMaker system design interview', 'AWS ML engineer interview SageMaker', 'SageMaker proxy interview',
  ],
  h1: 'Amazon SageMaker Interview Support — ML Platform, MLOps & Deployment',
  tagline:
    'SageMaker interviews go deep on training, inference, Pipelines, MLflow, and deployment. We prepare you and can back you live during the real thing.',
  heroEyebrow: 'SageMaker Interview Support',
  painIntro:
    'A SageMaker or AWS ML Engineer interview coming up and unsure how deep they will push on training options, endpoint types, Pipelines, Managed MLflow, and Model Registry?',
  heroVariant:
    'We prepare you across the SageMaker interview surface: SageMaker AI training (jobs, distributed training, HyperPod), inference (real-time endpoints, serverless, asynchronous, Batch Transform, multi-model), MLOps (Pipelines, Managed MLflow, Model Registry, Experiments), the SageMaker platform (Unified Studio, Lakehouse, Catalog), and cost/security design. We run calibrated mocks and can provide discreet live support. We never guarantee selection — hiring decisions are made solely by employers.',
  faqs: awsServiceFaqs('SageMaker interview', 'We prepare you on training, inference, Pipelines, Managed MLflow, Model Registry, the SageMaker platform, and MLOps system design, with calibrated mocks and optional live support.'),
  relatedLinks: relatedLinks({
    geoLinks: [AWS_INTERVIEW_HUB_LINK, SAGEMAKER_HUB_LINK],
    techLinks: [SAGEMAKER_AI_HUB_LINK, MLOPS_HUB_LINK],
    problemLink: { label: 'SageMaker inference troubleshooting', href: '/amazon-sagemaker-inference-troubleshooting-support/' },
    proxyLink: EXISTING.mlopsProxy,
    additionalLinks: [AWS_INTERVIEW_HUB_LINK, SAGEMAKER_HUB_LINK, SAGEMAKER_AI_HUB_LINK, EXISTING.mlopsProxy],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsSageMakerPages: LandingPageConfig[] = [
  sageMakerHub,
  sageMakerUnifiedStudio,
  sageMakerLakehouse,
  sageMakerCatalog,
  sageMakerInterviewProxy,
];
