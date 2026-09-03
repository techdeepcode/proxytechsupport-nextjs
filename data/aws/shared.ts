import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive AWS AI/ML + Generative AI + Agentic AI
 * SEO cluster. Mirrors the AI/ML + Angular cluster approach: category highlight
 * sets + context-aware FAQ generators + a thin `awsPage()` builder that fills
 * canonical + lastmod so each page object stays compact while remaining unique
 * (unique title, H1, intro, use cases, FAQs, and internal links per page).
 *
 * Technical content is written to reflect the verified AWS product state through
 * August 2026 — Amazon Bedrock, Bedrock AgentCore (GA Oct 2025; Policy/Cedar GA
 * Mar 2026; Harness GA Jun 2026), Amazon Nova (Nova 2 GA; first-gen legacy),
 * Amazon SageMaker Unified Studio / Lakehouse / Catalog (GA 2025), and SageMaker AI.
 *
 * NOTHING here renders on its own — these are data-only helpers consumed by the
 * batch files under data/aws/*.ts and surfaced through data/aws/index.ts.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-08-25T12:00:00.000Z';

// ─── Category highlight sets ────────────────────────────────────────────────

export const jobSupportHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time AWS AI/ML Job Support',
    description:
      'Live expert assistance during your working hours — Amazon Bedrock apps, SageMaker training and inference, AgentCore agents, RAG pipelines, IAM/VPC issues, and daily sprint deliverables so you always hit your deadlines.',
  },
  {
    title: 'Production AWS AI Issue Support',
    description:
      'On-call help for real production incidents — Bedrock throttling and AccessDenied errors, Knowledge Base ingestion failures, AgentCore Runtime and Gateway problems, SageMaker endpoint failures, GPU capacity, and cost blowups.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'AWS AI/ML proxy interview assistance, profile positioning, and candidate marketing for AWS AI Engineer, GenAI Engineer, Bedrock Developer, AgentCore, SageMaker, and AWS MLOps roles — real-time interview support, recruiter readiness, and profile visibility.',
  },
];

export const techHighlights: LandingHighlight[] = [
  {
    title: 'Real Project Support',
    description:
      'Hands-on help on real tickets — architecture, implementation, debugging, and code review on your actual AWS account during your working hours, not generic tutorials.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Firefighting for live incidents — latency, reliability, IAM, quotas, throttling, cost, and accuracy problems resolved with an AWS AI expert on the call.',
  },
  {
    title: 'Interview & Profile Support',
    description:
      'AWS AI/ML interview questions covered end-to-end plus profile positioning so you can both keep your job and land the next one.',
  },
];

export const roleHighlights: LandingHighlight[] = [
  {
    title: 'Role-Specific AWS Project Support',
    description:
      'Daily live support mapped to your exact responsibilities — the real Bedrock, SageMaker, AgentCore, and data deliverables, tools, and stakeholders your role owns.',
  },
  {
    title: 'Production & On-Call Backup',
    description:
      'An AWS AI expert beside you during incidents, releases, and high-pressure delivery so you never face a production issue alone.',
  },
  {
    title: 'Interview & Positioning',
    description:
      'Role-targeted AWS AI/ML proxy interview support, interview assistance, and profile positioning to move into and up within the role.',
  },
];

export const interviewHighlights: LandingHighlight[] = [
  {
    title: 'Live AWS Interview Guidance',
    description:
      'Discreet real-time expert support during your live AWS AI/ML technical interview — Bedrock and RAG architecture, AgentCore system design, SageMaker MLOps, and coding rounds.',
  },
  {
    title: 'Coding & System Design Coverage',
    description:
      'Live support across the real interview rounds — Amazon Bedrock, AgentCore, SageMaker, Nova, RAG, and AWS GenAI coding and architecture rounds across FAANG, product, and consulting formats.',
  },
  {
    title: 'Get Interviews Scheduled',
    description:
      'Profile engineering, AWS keyword targeting, and recruiter outreach so you actually get AWS AI/ML interview calls in the first place.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'AWS AI/ML Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact keywords AWS AI recruiters search for — Amazon Bedrock, AgentCore, SageMaker, GenAI, RAG, and AWS MLOps signals.',
  },
  {
    title: 'Candidate Marketing & Outreach',
    description:
      'Active application support and recruiter outreach so your AWS AI profile reaches hiring managers instead of sitting in an ATS black hole.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start coming, we back you with AWS AI/ML proxy interview assistance and real-time job support to convert offers and keep the role.',
  },
];

// ─── Reusable anchor links to new AWS hubs + existing site pages ─────────────

export const AWS_HUB_LINK: LandingRelatedLink = { label: 'AWS AI/ML job support hub', href: '/aws-ai-ml-job-support/' };
export const BEDROCK_HUB_LINK: LandingRelatedLink = { label: 'Amazon Bedrock job support', href: '/amazon-bedrock-job-support/' };
export const AGENTCORE_HUB_LINK: LandingRelatedLink = { label: 'Amazon Bedrock AgentCore support', href: '/amazon-bedrock-agentcore-job-support/' };
export const SAGEMAKER_HUB_LINK: LandingRelatedLink = { label: 'Amazon SageMaker job support', href: '/amazon-sagemaker-job-support/' };
export const SAGEMAKER_AI_HUB_LINK: LandingRelatedLink = { label: 'Amazon SageMaker AI support', href: '/amazon-sagemaker-ai-job-support/' };
export const KB_RAG_HUB_LINK: LandingRelatedLink = { label: 'Bedrock Knowledge Bases & RAG', href: '/amazon-bedrock-knowledge-bases-job-support/' };
export const MLOPS_HUB_LINK: LandingRelatedLink = { label: 'AWS MLOps job support', href: '/aws-mlops-job-support/' };
export const NOVA_HUB_LINK: LandingRelatedLink = { label: 'Amazon Nova job support', href: '/amazon-nova-job-support/' };
export const AWS_PRODUCTION_LINK: LandingRelatedLink = { label: 'AWS AI production support', href: '/aws-ai-ml-production-support/' };
export const AWS_INTERVIEW_HUB_LINK: LandingRelatedLink = { label: 'AWS AI/ML interview support', href: '/aws-ai-ml-interview-support/' };
export const AWS_PROFILE_LINK: LandingRelatedLink = { label: 'AWS AI profile positioning', href: '/aws-ai-ml-profile-positioning-support/' };
export const AWS_CANDIDATE_MARKETING_LINK: LandingRelatedLink = { label: 'AWS AI candidate marketing', href: '/aws-ai-ml-candidate-marketing/' };
export const AWS_GET_SCHEDULED_LINK: LandingRelatedLink = { label: 'Get AWS AI interview scheduled', href: '/get-aws-ai-ml-interview-scheduled/' };

/** Existing, already-live site pages (verified real routes) — cross-link, never duplicate. */
export const EXISTING = {
  awsBedrockJobSupport: { label: 'AWS Bedrock job support', href: '/aws-bedrock-job-support/' } as LandingRelatedLink,
  awsBedrockInterview: { label: 'AWS Bedrock interview support', href: '/aws-bedrock-interview-support/' } as LandingRelatedLink,
  awsGuide: { label: 'AWS job support guide', href: '/aws-job-support-guide/' } as LandingRelatedLink,
  bedrockVsAzure: { label: 'Azure OpenAI vs AWS Bedrock', href: '/azure-openai-vs-aws-bedrock-job-support/' } as LandingRelatedLink,
  aimlHub: { label: 'Global AI/ML job support', href: '/global-ai-ml-job-support/' } as LandingRelatedLink,
  aimlProxy: { label: 'AI/ML proxy interview support', href: '/ai-ml-proxy-interview-support/' } as LandingRelatedLink,
  aimlProduction: { label: 'AI/ML production support', href: '/ai-ml-production-support/' } as LandingRelatedLink,
  genai: { label: 'Generative AI job support', href: '/generative-ai-job-support/' } as LandingRelatedLink,
  genaiEngineer: { label: 'GenAI Engineer job support', href: '/genai-engineer-job-support/' } as LandingRelatedLink,
  genaiProxy: { label: 'GenAI interview proxy support', href: '/genai-interview-proxy-support/' } as LandingRelatedLink,
  agenticAi: { label: 'Agentic AI job support', href: '/agentic-ai-job-support/' } as LandingRelatedLink,
  rag: { label: 'RAG job support', href: '/rag-job-support/' } as LandingRelatedLink,
  ragEngineer: { label: 'RAG Engineer job support', href: '/rag-engineer-job-support/' } as LandingRelatedLink,
  ragProxy: { label: 'RAG interview proxy support', href: '/rag-interview-proxy-support/' } as LandingRelatedLink,
  llm: { label: 'LLM job support', href: '/llm-job-support/' } as LandingRelatedLink,
  vectorDb: { label: 'Vector database job support', href: '/vector-database-job-support/' } as LandingRelatedLink,
  langchain: { label: 'LangChain job support', href: '/langchain-job-support/' } as LandingRelatedLink,
  mlops: { label: 'MLOps job support', href: '/mlops-job-support/' } as LandingRelatedLink,
  mlopsEngineer: { label: 'MLOps Engineer job support', href: '/mlops-engineer-job-support/' } as LandingRelatedLink,
  mlopsProxy: { label: 'MLOps proxy interview support', href: '/mlops-proxy-interview-support/' } as LandingRelatedLink,
  modelDeployment: { label: 'Model deployment job support', href: '/model-deployment-job-support/' } as LandingRelatedLink,
  fineTuning: { label: 'Fine-tuning job support', href: '/fine-tuning-job-support/' } as LandingRelatedLink,
  pythonAiml: { label: 'Python AI/ML job support', href: '/python-ai-ml-job-support/' } as LandingRelatedLink,
  aiEngineer: { label: 'AI Engineer job support', href: '/ai-engineer-job-support/' } as LandingRelatedLink,
  cloudUsa: { label: 'Cloud job support USA', href: '/cloud-job-support-usa/' } as LandingRelatedLink,
  devopsUsa: { label: 'DevOps job support USA', href: '/devops-job-support-usa/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Job-support style FAQs for AWS service / country / city / role job-support pages. */
export function awsJobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What AWS AI/ML job support do you provide for ${entity}?`,
      answer: `We provide real-time AWS AI/ML job support for ${entity}. Our in-house AWS AI engineers join your working hours and help with ${focus}. That includes Amazon Bedrock application development (Converse API, InvokeModel, streaming), Knowledge Bases and RAG, Bedrock Guardrails, AgentCore agents, SageMaker AI training and inference, IAM roles and policies, VPC endpoints, and daily sprint deliverables. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: 'Can you help with live AWS AI production incidents?',
      answer:
        'Yes. Production firefighting is a core strength. We help resolve Bedrock AccessDenied and model-access errors, throttling and quota (ServiceQuotaExceeded) issues, cross-region inference profile problems, Knowledge Base ingestion and sync failures, RAG retrieval quality collapse, AgentCore Runtime/Gateway/Memory failures, SageMaker endpoint deployment and GPU-capacity errors, and cost blowups — often within the same working session, with an AWS expert on the call.',
    },
    {
      question: 'Which AWS AI/ML services and tools do you cover?',
      answer:
        'Amazon Bedrock (foundation models, Converse API, inference profiles, Knowledge Bases, Guardrails, Flows, Data Automation, Prompt Management), Amazon Bedrock AgentCore (Runtime, Memory, Gateway, Identity, Policy/Cedar, Browser, Code Interpreter, Observability), Amazon Nova, Amazon SageMaker AI (training, HyperPod, JumpStart, endpoints, Pipelines, Managed MLflow, Model Registry), SageMaker Unified Studio and Lakehouse, plus OpenSearch, Aurora pgvector, S3 Vectors, Textract, Comprehend, and the boto3/AWS SDK, Terraform, CDK, and CloudFormation tooling around them.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All AWS AI/ML job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. Whether it is job support, production help, interview assistance, or candidate marketing, every engagement is handled with full professional discretion. We do not access your AWS account without your explicit direction.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house AWS AI expert team — no sub-contracting. Reach out on WhatsApp and we will match you with the right engineer for your AWS stack and situation immediately.',
    },
  ];
}

/** AWS service technology-page FAQs. `service` = the AWS service; `usage` = one-line real usage. */
export function awsServiceFaqs(service: string, usage: string): LandingFaqItem[] {
  return [
    {
      question: `What kind of ${service} job support do you provide?`,
      answer: `We provide hands-on, real-time ${service} job support on your actual AWS project tickets. ${usage} Our experts help with architecture and implementation, IAM and networking setup, debugging, code review, performance/cost tuning, and production issues — during your working hours, same-day. We work on your real deliverables, not generic tutorials.`,
    },
    {
      question: `What are the common production problems with ${service}?`,
      answer: `Typical ${service} production issues we resolve include IAM AccessDenied and trust-policy misconfigurations, throttling and service quotas, region and endpoint availability, latency and timeout spikes, cost overruns, and integration failures with upstream and downstream AWS services. We help you find the root cause using CloudWatch logs, CloudTrail events, and request IDs, then ship a stable fix.`,
    },
    {
      question: `Do you cover ${service} interview questions?`,
      answer: `Yes. We provide ${service} proxy interview support — real-time expert help on fundamentals, architecture and design trade-offs, IAM and security, scenario-based problems, and hands-on rounds — during your live interview. We calibrate to the exact role and company format.`,
    },
    {
      question: `Can you help if I just joined a project using ${service}?`,
      answer: `Yes. Onboarding onto an unfamiliar ${service} setup is one of the most common reasons people reach out. We help you understand the existing architecture, IAM boundaries, and account structure, get productive fast, deliver your first tasks confidently, and avoid the mistakes that get flagged in reviews and standups.`,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Contact us on WhatsApp with your AWS stack, the problem, and your timeline. We assign the right expert — usually same-day. Every engagement is fully confidential, and NDAs are available on request.',
    },
  ];
}

/** Interview-page FAQs. `entity` = AWS role/service/region interview context. */
export function awsInterviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What ${entity} interview support do you provide?`,
      answer: `We provide real-time, discreet proxy interview support for ${entity} interviews. Our in-house AWS AI experts join your live session and guide you through coding rounds, Bedrock and RAG architecture questions, AgentCore and multi-agent system design, SageMaker MLOps and deployment scenarios, AWS security (IAM, KMS, VPC) discussions, and behavioral rounds.`,
    },
    {
      question: 'What AWS AI/ML interview formats do you support?',
      answer:
        'All of them — live coding, take-home reviews, ML/LLM system design, AWS architecture deep-dives, case studies, and final-round panels. Whether it is a FAANG-style bar-raiser, a product-company technical panel, or a consulting client round, we align to the exact format and seniority level.',
    },
    {
      question: 'What AWS AI/ML topics are covered?',
      answer:
        'Amazon Bedrock application and RAG design, Knowledge Bases and vector retrieval, Bedrock Guardrails and responsible AI, AgentCore agent architecture (Runtime, Memory, Gateway, Identity, Policy), Amazon Nova, SageMaker AI training and inference, AWS MLOps (Pipelines, Managed MLflow, Model Registry), cost and latency optimization, and AWS security and networking for AI workloads.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details, and support is delivered discreetly through audio or chat, calibrated to your interview format. We do not guarantee interview selection or employment — hiring decisions are made solely by employers.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right AWS AI expert and run a pre-interview alignment session so guidance matches your background and experience level.',
    },
  ];
}

/** Candidate-marketing / get-scheduled FAQs. */
export function awsMarketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more interview calls?`,
      answer: `We help ${entity} get interview calls through AWS AI profile engineering, keyword targeting, LinkedIn positioning, and recruiter outreach. We rebuild your resume and LinkedIn around the exact terms AWS AI recruiters search for — Amazon Bedrock, AgentCore, SageMaker, GenAI, RAG, AWS MLOps, and measurable production impact — then support active applications and outreach to hiring managers and staffing firms.`,
    },
    {
      question: 'Why is my AWS AI resume getting no calls?',
      answer:
        'Usually a keyword and positioning mismatch: the resume reads like a generic cloud or data engineer, buries the Bedrock/SageMaker/GenAI impact, and misses the terms recruiters and ATS filters screen for. We diagnose the gaps and rebuild the profile so it surfaces in searches and passes ATS screening for the AWS AI roles you want.',
    },
    {
      question: 'What AWS AI/ML profiles do you support?',
      answer:
        'AWS AI Engineer, AWS Generative AI Engineer, Amazon Bedrock Developer, AWS Agentic AI / AgentCore Engineer, AWS ML Engineer, SageMaker Engineer, AWS MLOps Engineer, AWS RAG Engineer, AWS AI Solutions Architect, and AWS AI Platform Engineer — at every level from transitioning-in to senior/lead.',
    },
    {
      question: 'Do you help with contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099) and full-time searches, and understand the AWS AI hiring landscape across product companies, startups, enterprises, and consulting firms — positioning your profile accordingly for each.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market and specialization.',
    },
  ];
}

/** Knowledge-base / educational-page FAQs. `topic` = the guide subject. */
export function awsKbFaqs(topic: string): LandingFaqItem[] {
  return [
    {
      question: `What does this ${topic} guide cover?`,
      answer: `This guide explains ${topic} in practical terms — what it is, how it works on AWS day to day, the common production problems and how they are handled, and how professional support fits in. It reflects the AWS product state through August 2026 and is written for working AWS AI/ML professionals and candidates who want clear, real-world answers rather than marketing.`,
    },
    {
      question: 'Is this an educational guide or a paid service?',
      answer:
        'This is an educational guide. If you decide you want hands-on help, we also offer real-time AWS AI/ML job support, production issue support, interview assistance, and candidate marketing — but the guide itself is here to inform, and you can act on it however you like.',
    },
    {
      question: 'Who is this guide for?',
      answer:
        'AWS AI Engineers, GenAI Engineers, Bedrock and AgentCore developers, SageMaker and MLOps engineers, data scientists, and anyone preparing for AWS AI/ML roles or currently working on AWS AI projects who wants to understand the topic clearly and avoid common mistakes.',
    },
    {
      question: 'How do I get personalized help?',
      answer:
        'Reach out on WhatsApp describing your situation — your AWS stack, your role, and what you are stuck on. We will point you to the right support option, whether that is live job support, a production fix, interview help, or profile positioning.',
    },
  ];
}

// ─── Thin config builder ─────────────────────────────────────────────────────

type AwsPageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod'> & {
  canonical?: string;
  lastmod?: string;
};

/** Fill canonical (from slug) + lastmod so batch files stay compact. */
export function awsPage(cfg: AwsPageInput): LandingPageConfig {
  return {
    ...cfg,
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/**
 * Compact builder for AWS technology/service job-support pages. Fills the common
 * boilerplate (techHighlights, default geoLine/timezoneNote/bottomCTA) so each
 * service page only declares its unique content. Any field can still be overridden.
 */
type AwsServicePageInput = Omit<
  LandingPageConfig,
  'canonical' | 'lastmod' | 'highlights' | 'geoLine' | 'timezoneNote' | 'bottomCTAHeading' | 'bottomCTABody'
> & {
  canonical?: string;
  lastmod?: string;
  highlights?: LandingHighlight[];
  geoLine?: string;
  timezoneNote?: string;
  bottomCTAHeading?: string;
  bottomCTABody?: string;
};

export function awsServicePage(cfg: AwsServicePageInput): LandingPageConfig {
  return {
    ...cfg,
    highlights: cfg.highlights ?? techHighlights,
    geoLine:
      cfg.geoLine ??
      'Real-time AWS AI/ML support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
    timezoneNote:
      cfg.timezoneNote ?? 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    bottomCTAHeading: cfg.bottomCTAHeading ?? 'Need Real-Time AWS AI Support or Interview Help Right Now?',
    bottomCTABody:
      cfg.bottomCTABody ??
      'In-house Amazon Bedrock, AgentCore, and SageMaker experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/** Convenience for the common related-links shape used across the cluster. */
export function relatedLinks(input: {
  geoLinks: LandingRelatedLink[];
  techLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
  blogLink?: LandingRelatedLink;
  additionalLinks?: LandingRelatedLink[];
}): LandingRelatedLinks {
  return {
    blogLink: EXISTING.blog,
    ...input,
  };
}
