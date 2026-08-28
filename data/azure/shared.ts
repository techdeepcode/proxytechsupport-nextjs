import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive Microsoft Azure AI / ML / Generative AI /
 * Agentic AI SEO cluster. Mirrors the AWS + AI/ML + Angular cluster approach:
 * category highlight sets + context-aware FAQ generators + thin `azurePage()` /
 * `azureServicePage()` builders that fill canonical + lastmod so each page object
 * stays compact while remaining unique (unique title, H1, intro, use cases, FAQs,
 * and internal links per page).
 *
 * Technical content reflects the verified Microsoft/Azure product state through
 * August 2026 — Microsoft Foundry (formerly Azure AI Foundry / Azure AI Studio),
 * Foundry Agent Service (Responses API, Agent Runtime, hosted agents, MCP, A2A),
 * Foundry Models + Model Router, Foundry IQ, Azure AI Search agentic retrieval
 * (Knowledge Agents / Knowledge Sources), Azure Machine Learning, Azure MLOps,
 * Microsoft Agent Framework, and Foundry Local.
 *
 * NOTHING here renders on its own — these are data-only helpers consumed by the
 * batch files under data/azure/*.ts and surfaced through data/azure/index.ts.
 *
 * ADDITIVE RULE: these pages never duplicate already-live routes. The following
 * pre-existing routes are cross-linked, never recreated:
 *   /azure-openai-job-support/, /azure-openai-interview-support/,
 *   /azure-openai-vs-aws-bedrock-job-support/, /azure-job-support-guide/,
 *   /openai-api-job-support/, and the entire /azure-*-dotnet-job-support/ .NET cluster
 *   (incl. /azure-ai-foundry-dotnet-job-support/, /azure-openai-dotnet-job-support/).
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-08-28T12:00:00.000Z';

// ─── Category highlight sets ────────────────────────────────────────────────

export const jobSupportHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Azure AI/ML Proxy Job Support',
    description:
      'Live expert proxy job support during your working hours — Microsoft Foundry apps, Azure OpenAI deployments, Foundry Agent Service, Azure AI Search RAG, Azure Machine Learning training and endpoints, Entra ID / Managed Identity issues, and daily sprint deliverables so you always hit your deadlines. Technical support and mentoring, not replacing you.',
  },
  {
    title: 'Production Azure AI Issue Support',
    description:
      'On-call help for real production incidents — Azure OpenAI 429 throttling and content-filter blocks, deployment-not-found and quota errors, Foundry agent tool and MCP failures, Azure AI Search indexer and vector-dimension errors, Azure ML endpoint failures, GPU OOM, and cost blowups.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'Azure AI/ML interview support, profile positioning, and candidate marketing for Azure AI Engineer, Microsoft Foundry Engineer, Azure OpenAI Engineer, Azure ML / MLOps, and Azure AI Solutions Architect roles — preparation, recruiter readiness, and profile visibility.',
  },
];

export const techHighlights: LandingHighlight[] = [
  {
    title: 'Real Project Support',
    description:
      'Hands-on help on real tickets — architecture, implementation, debugging, and code review on your actual Azure subscription during your working hours, not generic tutorials.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Firefighting for live incidents — latency, reliability, Entra ID / RBAC, quotas, throttling, cost, and accuracy problems resolved with an Azure AI expert on the call.',
  },
  {
    title: 'Interview & Profile Support',
    description:
      'Azure AI/ML interview questions covered end-to-end plus profile positioning so you can both keep your job and land the next one.',
  },
];

export const roleHighlights: LandingHighlight[] = [
  {
    title: 'Role-Specific Azure Project Support',
    description:
      'Daily live support mapped to your exact responsibilities — the real Microsoft Foundry, Azure OpenAI, Azure ML, and data deliverables, tools, and stakeholders your role owns.',
  },
  {
    title: 'Production & On-Call Backup',
    description:
      'An Azure AI expert beside you during incidents, releases, and high-pressure delivery so you never face a production issue alone.',
  },
  {
    title: 'Interview & Positioning',
    description:
      'Role-targeted Azure AI/ML interview preparation, interview assistance, and profile positioning to move into and up within the role.',
  },
];

export const interviewHighlights: LandingHighlight[] = [
  {
    title: 'Azure Proxy Interview Support',
    description:
      'Technical proxy interview support (also searched as interview proxy support) — calibrated mock interviews and expert mentoring on Microsoft Foundry and RAG architecture, Foundry Agent Service system design, Azure ML MLOps, and coding rounds. You attend and complete your own interview.',
  },
  {
    title: 'Mock Interviews & Prep',
    description:
      'Calibrated mock interviews and question banks for Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, RAG, and Azure ML architecture rounds across FAANG, product, and consulting formats.',
  },
  {
    title: 'Get Interviews Scheduled',
    description:
      'Profile engineering, Azure keyword targeting, and recruiter outreach so you actually get Azure AI/ML interview calls in the first place.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'Azure AI/ML Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact keywords Azure AI recruiters search for — Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, Azure ML, and Azure MLOps signals.',
  },
  {
    title: 'Candidate Marketing & Outreach',
    description:
      'Active application support and recruiter outreach so your Azure AI profile reaches hiring managers instead of sitting in an ATS black hole.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start coming, we back you with Azure AI/ML interview assistance and real-time job support to convert offers and keep the role.',
  },
];

// ─── Reusable anchor links to new Azure hubs + existing site pages ──────────

export const AZURE_HUB_LINK: LandingRelatedLink = { label: 'Azure AI/ML proxy job support hub', href: '/azure-ai-ml-proxy-job-support/' };
export const FOUNDRY_HUB_LINK: LandingRelatedLink = { label: 'Microsoft Foundry proxy job support', href: '/microsoft-foundry-proxy-job-support/' };
export const OPENAI_SUPP_LINK: LandingRelatedLink = { label: 'Azure OpenAI production proxy support', href: '/azure-openai-production-support/' };
export const AGENT_HUB_LINK: LandingRelatedLink = { label: 'Foundry Agent Service proxy job support', href: '/microsoft-foundry-agent-service-proxy-job-support/' };
export const SEARCH_HUB_LINK: LandingRelatedLink = { label: 'Azure AI Search proxy job support', href: '/azure-ai-search-proxy-job-support/' };
export const RAG_HUB_LINK: LandingRelatedLink = { label: 'Azure RAG proxy job support', href: '/azure-rag-proxy-job-support/' };
export const AZUREML_HUB_LINK: LandingRelatedLink = { label: 'Azure Machine Learning proxy job support', href: '/azure-machine-learning-proxy-job-support/' };
export const MLOPS_HUB_LINK: LandingRelatedLink = { label: 'Azure MLOps proxy job support', href: '/azure-mlops-proxy-job-support/' };
export const FOUNDRY_IQ_LINK: LandingRelatedLink = { label: 'Microsoft Foundry IQ proxy job support', href: '/microsoft-foundry-iq-proxy-job-support/' };
export const AGENT_FRAMEWORK_LINK: LandingRelatedLink = { label: 'Microsoft Agent Framework job support', href: '/microsoft-agent-framework-job-support/' };
export const FOUNDRY_LOCAL_LINK: LandingRelatedLink = { label: 'Microsoft Foundry Local proxy job support', href: '/microsoft-foundry-local-proxy-job-support/' };
export const FOUNDRY_TOOLS_LINK: LandingRelatedLink = { label: 'Microsoft Foundry Tools proxy job support', href: '/microsoft-foundry-tools-proxy-job-support/' };
export const MODEL_ROUTER_LINK: LandingRelatedLink = { label: 'Foundry Model Router proxy job support', href: '/microsoft-foundry-model-router-job-support/' };
export const SECURITY_HUB_LINK: LandingRelatedLink = { label: 'Azure AI security proxy job support', href: '/azure-ai-security-proxy-job-support/' };
export const OBSERVABILITY_HUB_LINK: LandingRelatedLink = { label: 'Azure AI observability proxy job support', href: '/azure-ai-observability-proxy-job-support/' };
export const AZURE_PRODUCTION_LINK: LandingRelatedLink = { label: 'Azure AI production proxy support', href: '/azure-ai-ml-production-support/' };
export const AZURE_INTERVIEW_HUB_LINK: LandingRelatedLink = { label: 'Azure AI/ML proxy interview support', href: '/azure-ai-ml-proxy-interview-support/' };
export const AZURE_PROFILE_LINK: LandingRelatedLink = { label: 'Azure AI proxy job profile positioning', href: '/azure-ai-ml-profile-positioning-support/' };
export const AZURE_CANDIDATE_MARKETING_LINK: LandingRelatedLink = { label: 'Azure AI candidate marketing', href: '/azure-ai-ml-candidate-marketing/' };
export const AZURE_GET_SCHEDULED_LINK: LandingRelatedLink = { label: 'Get Azure AI proxy interview scheduled', href: '/get-azure-ai-ml-interview-scheduled/' };
export const DATABRICKS_HUB_LINK: LandingRelatedLink = { label: 'Azure Databricks AI proxy job support', href: '/azure-databricks-ai-proxy-job-support/' };

/** Existing, already-live site pages (verified real routes) — cross-link, never duplicate. */
export const EXISTING = {
  azureOpenAiJobSupport: { label: 'Azure OpenAI job support', href: '/azure-openai-job-support/' } as LandingRelatedLink,
  azureOpenAiInterview: { label: 'Azure OpenAI interview support', href: '/azure-openai-interview-support/' } as LandingRelatedLink,
  azureOpenAiVsBedrock: { label: 'Azure OpenAI vs AWS Bedrock', href: '/azure-openai-vs-aws-bedrock-job-support/' } as LandingRelatedLink,
  azureGuide: { label: 'Azure job support guide', href: '/azure-job-support-guide/' } as LandingRelatedLink,
  azureOpenAiDotnet: { label: 'Azure OpenAI .NET job support', href: '/azure-openai-dotnet-job-support/' } as LandingRelatedLink,
  azureAiFoundryDotnet: { label: 'Azure AI Foundry .NET job support', href: '/azure-ai-foundry-dotnet-job-support/' } as LandingRelatedLink,
  azureAiSearchDotnet: { label: 'Azure AI Search .NET job support', href: '/azure-ai-search-dotnet-job-support/' } as LandingRelatedLink,
  modernDotnetAzureAi: { label: 'Modern .NET Azure AI job support', href: '/modern-dotnet-azure-ai-job-support/' } as LandingRelatedLink,
  openaiApi: { label: 'OpenAI API job support', href: '/openai-api-job-support/' } as LandingRelatedLink,
  openaiSdkDotnet: { label: 'OpenAI SDK .NET job support', href: '/openai-sdk-dotnet-job-support/' } as LandingRelatedLink,
  awsBedrockVsAzure: { label: 'AWS Bedrock job support', href: '/amazon-bedrock-job-support/' } as LandingRelatedLink,
  awsHub: { label: 'AWS AI/ML job support', href: '/aws-ai-ml-job-support/' } as LandingRelatedLink,
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
  dotnetAzure: { label: '.NET Azure job support', href: '/dotnet-azure-job-support/' } as LandingRelatedLink,
  cloudUsa: { label: 'Cloud job support USA', href: '/cloud-job-support-usa/' } as LandingRelatedLink,
  devopsUsa: { label: 'DevOps job support USA', href: '/devops-job-support-usa/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Job-support style FAQs for Azure service / country / city / role job-support pages. */
export function azureJobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What is ${entity} proxy job support?`,
      answer: `${entity} proxy job support is real-time, implementation-level technical guidance for professionals working on live Azure AI projects. Our in-house Azure AI engineers join your working hours and help with ${focus}. That includes Microsoft Foundry projects and model deployments, Azure OpenAI application development (Responses API, Chat Completions, streaming, embeddings), Foundry Agent Service agents and tools, Azure AI Search and RAG, Azure Machine Learning training and endpoints, Entra ID / Managed Identity and RBAC, private endpoints, and daily sprint deliverables. Proxy here means expert technical support, troubleshooting, architecture and mentoring — not replacing the professional or performing their employment duties. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: `What does "proxy" mean in ${entity} proxy job support?`,
      answer:
        'It means hands-on technical proxy support — an experienced Azure AI engineer working alongside you on your real tasks: architecture, implementation, debugging, code review, and production troubleshooting. It does not mean impersonating you or carrying out your job responsibilities on your behalf. You remain the professional delivering the work; we provide the expert guidance behind you.',
    },
    {
      question: 'Can you help with live Azure AI production incidents?',
      answer:
        'Yes. Production firefighting is a core strength. We help resolve Azure OpenAI 429 throttling and rate-limit errors, content-filter blocks, DeploymentNotFound and quota issues, Managed Identity and Entra ID auth failures, Private Endpoint connectivity, Foundry agent tool and MCP failures, Azure AI Search indexer failures and vector-dimension mismatch, Azure ML endpoint deployment and GPU-OOM errors, and cost blowups — often within the same working session, with an Azure expert on the call.',
    },
    {
      question: 'Which Azure AI/ML services and tools do you cover?',
      answer:
        'Microsoft Foundry (formerly Azure AI Foundry / Azure AI Studio — projects, model deployments, Foundry Models, Model Router, evaluations, observability), Azure OpenAI (Responses API, Realtime API, provisioned throughput/PTU, Global Standard and Data Zone deployments), Foundry Agent Service (Agent Runtime, hosted agents, tools, memory, MCP, A2A, tracing), Azure AI Search (vector, hybrid, semantic ranker, integrated vectorization, agentic retrieval, Knowledge Agents and Knowledge Sources), Foundry IQ, Azure Machine Learning (workspace, compute, pipelines, MLflow, registry, online and batch endpoints, AutoML), Azure MLOps, Microsoft Agent Framework, Foundry Local, plus the Azure SDKs, Bicep, Terraform, and GitHub Actions tooling around them.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All Azure AI/ML job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. Whether it is job support, production help, interview assistance, or candidate marketing, every engagement is handled with full professional discretion. We do not access your Azure subscription without your explicit direction.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house Azure AI expert team — no sub-contracting. Reach out on WhatsApp and we will match you with the right engineer for your Azure stack and situation immediately.',
    },
  ];
}

/** Azure service technology-page FAQs. `service` = the Azure service; `usage` = one-line real usage. */
export function azureServiceFaqs(service: string, usage: string): LandingFaqItem[] {
  return [
    {
      question: `What kind of ${service} proxy job support do you provide?`,
      answer: `We provide hands-on, real-time ${service} proxy job support on your actual Azure project tickets. ${usage} This page is part of our Azure AI proxy job support ecosystem: our experts help with architecture and implementation, Entra ID / RBAC and networking setup, debugging, code review, performance/cost tuning, and production issues — during your working hours, same-day. "Proxy" means expert technical support and mentoring on your real deliverables, not replacing you or performing your job duties.`,
    },
    {
      question: `What are the common production problems with ${service}?`,
      answer: `Typical ${service} production issues we resolve include Entra ID / Managed Identity auth and RBAC misconfigurations, throttling and quota (429) limits, region and model/SKU availability, latency and timeout spikes, Private Endpoint and VNet connectivity, cost overruns, and integration failures with upstream and downstream Azure services. We help you find the root cause using Azure Monitor, Application Insights, Log Analytics, and request IDs, then ship a stable fix.`,
    },
    {
      question: `Do you provide ${service} proxy interview support and cover interview questions?`,
      answer: `Yes. We provide ${service} proxy interview support (also searched as ${service} interview proxy support) — preparation, mock interviews, and technical mentoring on fundamentals, architecture and design trade-offs, security and identity, scenario-based problems, and hands-on rounds — calibrated to the exact role and company format. Proxy interview support means expert technical preparation and guidance; you attend and complete your own interview.`,
    },
    {
      question: `Can you help if I just joined a project using ${service}?`,
      answer: `Yes. Onboarding onto an unfamiliar ${service} setup is one of the most common reasons people reach out. We help you understand the existing architecture, identity boundaries, and subscription/resource structure, get productive fast, deliver your first tasks confidently, and avoid the mistakes that get flagged in reviews and standups.`,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Contact us on WhatsApp with your Azure stack, the problem, and your timeline. We assign the right expert — usually same-day. Every engagement is fully confidential, and NDAs are available on request.',
    },
  ];
}

/** Interview-page FAQs. `entity` = Azure role/service/region interview context. */
export function azureInterviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What is ${entity} proxy interview support?`,
      answer: `${entity} proxy interview support (also searched as ${entity} interview proxy support) is technical preparation and expert mentoring for your ${entity} interview. We run calibrated mock interviews and guide you on coding rounds, Microsoft Foundry and Azure OpenAI RAG architecture questions, Foundry Agent Service and multi-agent system design, Azure ML MLOps and deployment scenarios, Azure security (Entra ID, Key Vault, Private Link) discussions, and behavioral rounds — so you walk in confident and ready.`,
    },
    {
      question: 'Does proxy interview support mean someone attends the interview for me?',
      answer:
        'No. The candidate attends and completes their own interview. Proxy interview support refers to technical guidance, preparation, mock interviews, architecture review, and scenario-based mentoring that get you ready to perform. We do not impersonate candidates or sit interviews on anyone’s behalf, and we do not guarantee selection or employment — hiring decisions are made solely by employers.',
    },
    {
      question: `What Azure AI/ML topics does ${entity} proxy interview support cover?`,
      answer:
        'Microsoft Foundry application and RAG design, Azure AI Search vector/hybrid retrieval and agentic retrieval, Foundry Agent Service architecture (Agent Runtime, memory, tools, MCP, A2A), Azure OpenAI Responses API and provisioned throughput, Azure Machine Learning training and inference, Azure MLOps (pipelines, MLflow, model registry), cost and latency optimization, and Azure security and networking for AI workloads — across live coding, ML/LLM system design, architecture deep-dives, case studies, and final-round panels.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details. Support is delivered discreetly and calibrated to your interview format and seniority level.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right Azure AI expert and run a pre-interview alignment session so preparation matches your background and experience level.',
    },
  ];
}

/** Candidate-marketing / get-scheduled FAQs. */
export function azureMarketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more interview calls?`,
      answer: `We help ${entity} get interview calls through Azure AI profile engineering, keyword targeting, LinkedIn positioning, and recruiter outreach. We rebuild your resume and LinkedIn around the exact terms Azure AI recruiters search for — Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, Azure ML, Azure MLOps, and measurable production impact — then support active applications and outreach to hiring managers and staffing firms.`,
    },
    {
      question: 'Why is my Azure AI resume getting no calls?',
      answer:
        'Usually a keyword and positioning mismatch: the resume reads like a generic cloud or data engineer, buries the Foundry/Azure OpenAI/Azure ML impact, and misses the terms recruiters and ATS filters screen for. We diagnose the gaps and rebuild the profile so it surfaces in searches and passes ATS screening for the Azure AI roles you want.',
    },
    {
      question: 'What Azure AI/ML profiles do you support?',
      answer:
        'Azure AI Engineer, Microsoft Foundry Engineer, Azure OpenAI Engineer, Azure Generative AI Engineer, Azure Agentic AI Engineer, Azure ML Engineer, Azure MLOps Engineer, Azure RAG Engineer, Azure AI Solutions Architect, and Azure AI Platform Engineer — at every level from transitioning-in to senior/lead.',
    },
    {
      question: 'Do you help with contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099, inside/outside IR35 where relevant) and full-time searches, and understand the Azure AI hiring landscape across product companies, startups, enterprises, and consulting/SI firms — positioning your profile accordingly for each.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market and specialization.',
    },
  ];
}

/** Knowledge-base / educational-page FAQs. `topic` = the guide subject. */
export function azureKbFaqs(topic: string): LandingFaqItem[] {
  return [
    {
      question: `What does this ${topic} guide cover?`,
      answer: `This guide explains ${topic} in practical terms — what it is, how it works on Azure day to day, the common production problems and how they are handled, and how professional support fits in. It reflects the Microsoft/Azure product state through August 2026 and is written for working Azure AI/ML professionals and candidates who want clear, real-world answers rather than marketing.`,
    },
    {
      question: 'Is this an educational guide or a paid service?',
      answer:
        'This is an educational guide. If you decide you want hands-on help, we also offer real-time Azure AI/ML job support, production issue support, interview assistance, and candidate marketing — but the guide itself is here to inform, and you can act on it however you like.',
    },
    {
      question: 'Who is this guide for?',
      answer:
        'Azure AI Engineers, Microsoft Foundry engineers, Azure OpenAI developers, Azure ML and MLOps engineers, data scientists, and anyone preparing for Azure AI/ML roles or currently working on Azure AI projects who wants to understand the topic clearly and avoid common mistakes.',
    },
    {
      question: 'How do I get personalized help?',
      answer:
        'Reach out on WhatsApp describing your situation — your Azure stack, your role, and what you are stuck on. We will point you to the right support option, whether that is live job support, a production fix, interview help, or profile positioning.',
    },
  ];
}

// ─── Thin config builders ────────────────────────────────────────────────────

type AzurePageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod'> & {
  canonical?: string;
  lastmod?: string;
};

/** Fill canonical (from slug) + lastmod so batch files stay compact. */
export function azurePage(cfg: AzurePageInput): LandingPageConfig {
  return {
    ...cfg,
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/**
 * Compact builder for Azure technology/service job-support pages. Fills the common
 * boilerplate (techHighlights, default geoLine/timezoneNote/bottomCTA) so each
 * service page only declares its unique content. Any field can still be overridden.
 */
type AzureServicePageInput = Omit<
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

export function azureServicePage(cfg: AzureServicePageInput): LandingPageConfig {
  return {
    ...cfg,
    highlights: cfg.highlights ?? techHighlights,
    geoLine:
      cfg.geoLine ??
      'Real-time Azure AI/ML support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, France, Switzerland, Australia, Singapore, UAE, and worldwide.',
    timezoneNote:
      cfg.timezoneNote ?? 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    bottomCTAHeading: cfg.bottomCTAHeading ?? 'Need Azure AI Proxy Job Support or Proxy Interview Support Right Now?',
    bottomCTABody:
      cfg.bottomCTABody ??
      'In-house Microsoft Foundry, Azure OpenAI, Foundry Agent Service, and Azure ML experts available same-day — Azure AI proxy job support for live projects and production issues, or proxy interview support (technical preparation and mentoring — you attend your own interview). Talk to ProxyTechSupport on WhatsApp now.',
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
