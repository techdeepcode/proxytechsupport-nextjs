import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive global AI/ML SEO cluster.
 * Mirrors the Workday cluster approach: category highlight sets + context-aware FAQ
 * generators + a thin `aimlPage()` builder that fills canonical + lastmod so each page
 * object stays compact while remaining unique (unique title, H1, intro, use cases,
 * FAQs, and internal links per page).
 *
 * NOTHING here renders on its own — these are data-only helpers consumed by the batch
 * files under data/aiml/*.ts and surfaced through data/aiml/index.ts.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-07-08T12:00:00.000Z';

// ─── Category highlight sets ────────────────────────────────────────────────

export const jobSupportHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time AI/ML Job Support',
    description:
      'Live expert assistance during your working hours — model training bugs, data pipeline failures, LLM/RAG integration issues, deployment errors, and sprint deliverables so you always hit your deadlines.',
  },
  {
    title: 'Production AI Issue Support',
    description:
      'On-call help for real production incidents — model drift, latency spikes, hallucinating RAG pipelines, broken feature stores, failing inference endpoints, and MLOps rollback situations.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'AI/ML proxy interview assistance, profile positioning, and candidate marketing to help you clear technical rounds and get more recruiter calls for AI Engineer, ML Engineer, GenAI, and MLOps roles.',
  },
];

export const techHighlights: LandingHighlight[] = [
  {
    title: 'Real Project Support',
    description:
      'Hands-on help on real tickets — architecture, implementation, debugging, and code review during your working hours, not generic tutorials.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Firefighting for live incidents — performance, reliability, cost, accuracy, and scaling problems resolved with an expert on the call.',
  },
  {
    title: 'Interview & Profile Support',
    description:
      'Interview questions covered end-to-end plus profile positioning so you can both keep your job and land the next one.',
  },
];

export const roleHighlights: LandingHighlight[] = [
  {
    title: 'Role-Specific Project Support',
    description:
      'Daily live support mapped to your exact responsibilities — the real deliverables, tools, and stakeholders your role owns.',
  },
  {
    title: 'Production & On-Call Backup',
    description:
      'An expert beside you during incidents, releases, and high-pressure delivery so you never face a production issue alone.',
  },
  {
    title: 'Interview & Positioning',
    description:
      'Role-targeted interview preparation, proxy interview assistance, and profile positioning to move into and up within the role.',
  },
];

export const interviewHighlights: LandingHighlight[] = [
  {
    title: 'Live Interview Guidance',
    description:
      'Discreet real-time expert support during your live AI/ML technical interview — coding, system design, and scenario questions.',
  },
  {
    title: 'Mock Interviews & Prep',
    description:
      'Calibrated mock interviews and question banks for GenAI, LLM, RAG, MLOps, and data science rounds across FAANG, product, and consulting formats.',
  },
  {
    title: 'Get Interviews Scheduled',
    description:
      'Profile engineering, keyword targeting, and recruiter outreach so you actually get AI/ML interview calls in the first place.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'AI/ML Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact keywords AI/ML recruiters search for — GenAI, LLM, RAG, MLOps, and cloud AI signals.',
  },
  {
    title: 'Candidate Marketing & Outreach',
    description:
      'Active application support and recruiter outreach so your profile reaches hiring managers instead of sitting in an ATS black hole.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start coming, we back you with proxy interview assistance and real-time job support to convert offers and keep the role.',
  },
];

// ─── Reusable anchor links to existing + hub pages (verified real routes) ────

export const HUB_LINK: LandingRelatedLink = { label: 'Global AI/ML job support', href: '/global-ai-ml-job-support/' };
export const PRODUCTION_LINK: LandingRelatedLink = { label: 'AI/ML production support', href: '/ai-ml-production-support/' };
export const PROFILE_LINK: LandingRelatedLink = { label: 'AI/ML profile positioning', href: '/ai-ml-profile-positioning-support/' };
export const ONBOARDING_LINK: LandingRelatedLink = { label: 'AI/ML project onboarding support', href: '/ai-ml-project-onboarding-support/' };
export const CANDIDATE_MARKETING_LINK: LandingRelatedLink = { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' };
export const GET_SCHEDULED_LINK: LandingRelatedLink = { label: 'Get AI/ML interview scheduled', href: '/get-ai-ml-interview-scheduled/' };

/** Existing knowledge-base + interview anchors (already live on the site). */
export const EXISTING = {
  aimlGuide: { label: 'AI/ML job support guide', href: '/ai-ml-job-support-guide/' } as LandingRelatedLink,
  aimlProxy: { label: 'AI/ML proxy interview support', href: '/ai-ml-proxy-interview-support/' } as LandingRelatedLink,
  mlopsGuide: { label: 'MLOps job support guide', href: '/mlops-job-support-guide/' } as LandingRelatedLink,
  mlopsProxy: { label: 'MLOps proxy interview support', href: '/mlops-proxy-interview-support/' } as LandingRelatedLink,
  ragGuide: { label: 'RAG & Agentic AI guide', href: '/rag-agentic-ai-job-support-guide/' } as LandingRelatedLink,
  genaiGuide: { label: 'GenAI interview support guide', href: '/genai-interview-support-guide/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  clientCall: { label: 'Client call & standup support', href: '/client-call-and-standup-support-guide/' } as LandingRelatedLink,
  realtimeGuide: { label: 'Real-time IT job support guide', href: '/real-time-it-job-support-guide/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  finalRound: { label: 'Final round interview support', href: '/final-round-interview-support-guide/' } as LandingRelatedLink,
  technicalUsa: { label: 'Technical interview support USA', href: '/technical-interview-support-usa-guide/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  europeGuide: { label: 'Europe AI/ML RAG MLOps guide', href: '/europe-ai-ml-rag-mlops-support-guide/' } as LandingRelatedLink,
  germanyGuide: { label: 'Germany AI/ML data guide', href: '/germany-ai-ml-data-support-guide/' } as LandingRelatedLink,
  dotnetAiml: { label: '.NET AI/ML job support', href: '/dotnet-ai-ml-job-support/' } as LandingRelatedLink,
  agenticUsa: { label: 'Agentic AI & RAG job support USA', href: '/agentic-ai-rag-mlops-job-support-usa/' } as LandingRelatedLink,
  aiWorkflowUsa: { label: 'AI workflow automation support USA', href: '/ai-workflow-automation-pipeline-job-support-usa/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Job-support style FAQs for country / city / role / tech job-support pages. */
export function jobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What AI/ML job support do you provide for ${entity}?`,
      answer: `We provide real-time AI/ML job support for ${entity}. Our in-house AI engineers, ML engineers, and MLOps specialists join your working hours and help with ${focus}. That includes model development and debugging, data pipeline and feature engineering issues, LLM and RAG application work, prompt and evaluation problems, training and fine-tuning, deployment and serving, and daily sprint deliverables. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: 'Can you help with live AI production incidents?',
      answer:
        'Yes. Production firefighting is a core strength. We help resolve model drift and accuracy regressions, inference latency and timeout spikes, GPU/cost blowups, RAG pipelines returning wrong or hallucinated answers, broken feature stores and data drift, failing batch/streaming jobs, and rollback situations — often within the same working session, with an expert on the call.',
    },
    {
      question: 'Which AI/ML stacks and tools do you cover?',
      answer:
        'We cover Python, PyTorch, TensorFlow, scikit-learn, Hugging Face and Transformers, LangChain, LangGraph, CrewAI and AutoGen, OpenAI, Azure OpenAI, AWS Bedrock, Google Vertex AI, vector databases (Pinecone, Qdrant, Weaviate, ChromaDB), MLOps tooling (MLflow, Kubeflow, Airflow, Databricks), and cloud AI platforms across AWS, Azure, and GCP.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All AI/ML job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. Whether it is job support, production help, interview assistance, or candidate marketing, every engagement is handled with full professional discretion.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house AI/ML expert team — no sub-contracting. Reach out on WhatsApp and we will match you with the right engineer for your stack and situation immediately.',
    },
  ];
}

/** Technology-page FAQs. `tech` = the technology, `usage` = one-line real-world usage. */
export function techFaqs(tech: string, usage: string): LandingFaqItem[] {
  return [
    {
      question: `What kind of ${tech} job support do you provide?`,
      answer: `We provide hands-on, real-time ${tech} job support on your actual project tickets. ${usage} Our experts help with design and implementation, debugging, code review, performance and cost tuning, and production issues — during your working hours, same-day. We do not hand you generic tutorials; we work on your real deliverables.`,
    },
    {
      question: `What are the common production problems with ${tech}?`,
      answer: `Typical ${tech} production issues we resolve include incorrect or unstable outputs, latency and throughput bottlenecks, memory and cost overruns, integration failures with upstream/downstream systems, versioning and dependency conflicts, and reliability problems under real traffic. We help you diagnose the root cause and ship a stable fix.`,
    },
    {
      question: `Do you cover ${tech} interview questions?`,
      answer: `Yes. We prepare you for ${tech} interview questions — fundamentals, architecture and design trade-offs, scenario-based problems, and hands-on coding rounds — and can provide live proxy interview support during the real interview if needed. We calibrate to the exact role and company format.`,
    },
    {
      question: `Can you help if I just joined a project using ${tech}?`,
      answer: `Yes. Onboarding onto an unfamiliar ${tech} codebase is one of the most common reasons people reach out. We help you understand the existing setup, get productive fast, deliver your first tasks confidently, and avoid the mistakes that get flagged in reviews and standups.`,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Contact us on WhatsApp with your stack, the problem, and your timeline. We assign the right expert — usually same-day. Every engagement is fully confidential, and NDAs are available on request.',
    },
  ];
}

/** Interview-page FAQs. `entity` = role/tech/region interview context. */
export function interviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What ${entity} interview support do you provide?`,
      answer: `We provide real-time, discreet proxy interview support for ${entity} interviews. Our in-house AI/ML experts join your live session and guide you through coding rounds, ML system design, GenAI/RAG architecture questions, MLOps and deployment scenarios, and behavioral rounds. We also run calibrated mock interviews before the real thing.`,
    },
    {
      question: 'What interview formats do you support?',
      answer:
        'All of them — live coding, take-home reviews, ML/LLM system design, case studies, architecture deep-dives, and final-round panels. Whether it is a FAANG-style bar-raiser, a product company technical panel, or a consulting client round, we align to the exact format and seniority level.',
    },
    {
      question: 'What AI/ML topics are covered?',
      answer:
        'GenAI and LLM application design, RAG architecture and evaluation, agentic AI and multi-agent systems, prompt engineering, fine-tuning and LoRA/QLoRA, classical ML and data science, MLOps and model deployment/monitoring, vector databases, and cloud AI services on AWS, Azure, and GCP.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details, and support is delivered discreetly through audio or chat, calibrated to your interview format.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right expert and run a pre-interview alignment session so guidance matches your background and experience level.',
    },
  ];
}

/** Candidate-marketing / get-scheduled FAQs. */
export function marketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more interview calls?`,
      answer: `We help ${entity} get interview calls through AI/ML profile engineering, keyword targeting, LinkedIn positioning, and recruiter outreach. We rebuild your resume and LinkedIn around the exact terms AI/ML recruiters search for — GenAI, LLM, RAG, MLOps, model deployment, and cloud AI signals — then support active applications and outreach to hiring managers and staffing firms.`,
    },
    {
      question: 'Why is my AI/ML resume getting no calls?',
      answer:
        'Usually a keyword and positioning mismatch: the resume reads like a generic data or software profile, buries the AI/ML impact, and misses the terms recruiters and ATS filters actually screen for. We diagnose the gaps and rebuild the profile so it surfaces in searches and passes ATS screening for the roles you want.',
    },
    {
      question: 'What AI/ML profiles do you support?',
      answer:
        'AI Engineer, Machine Learning Engineer, GenAI Engineer, LLM Engineer, MLOps Engineer, Data Scientist, NLP Engineer, Computer Vision Engineer, AI Solutions Architect, AI Platform Engineer, and applied/research AI roles — at every level from transitioning-in to senior/lead.',
    },
    {
      question: 'Do you help with contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099) and full-time searches, and understand the AI/ML hiring landscape across product companies, startups, enterprises, and consulting firms — positioning your profile accordingly for each.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market and specialization.',
    },
  ];
}

/** Knowledge-base / educational-page FAQs. `topic` = the guide subject. */
export function kbFaqs(topic: string): LandingFaqItem[] {
  return [
    {
      question: `What does this ${topic} guide cover?`,
      answer: `This guide explains ${topic} in practical terms — what it means, how it works day to day, the common problems and how they are handled, and how professional support fits in. It is written for working AI/ML professionals and candidates who want clear, real-world answers rather than theory.`,
    },
    {
      question: 'Is this an educational guide or a paid service?',
      answer:
        'This is an educational guide. If you decide you want hands-on help, we also offer real-time AI/ML job support, production issue support, interview assistance, and candidate marketing — but the guide itself is here to inform, and you can act on it however you like.',
    },
    {
      question: 'Who is this guide for?',
      answer:
        'AI Engineers, ML Engineers, GenAI/LLM developers, MLOps engineers, data scientists, and anyone preparing for AI/ML roles or currently working on AI/ML projects who wants to understand the topic clearly and avoid common mistakes.',
    },
    {
      question: 'How do I get personalized help?',
      answer:
        'Reach out on WhatsApp describing your situation — your stack, your role, and what you are stuck on. We will point you to the right support option, whether that is live job support, a production fix, interview help, or profile positioning.',
    },
  ];
}

// ─── Thin config builder ─────────────────────────────────────────────────────

type AimlPageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod'> & {
  canonical?: string;
  lastmod?: string;
};

/** Fill canonical (from slug) + lastmod so batch files stay compact. */
export function aimlPage(cfg: AimlPageInput): LandingPageConfig {
  return {
    ...cfg,
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
