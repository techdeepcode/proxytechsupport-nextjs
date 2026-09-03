import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  jobSupportHighlights,
  marketingHighlights,
  interviewHighlights,
  azureMarketingFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  OPENAI_SUPP_LINK,
  AGENT_HUB_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AZUREML_HUB_LINK,
  MLOPS_HUB_LINK,
  FOUNDRY_IQ_LINK,
  AGENT_FRAMEWORK_LINK,
  FOUNDRY_LOCAL_LINK,
  FOUNDRY_TOOLS_LINK,
  MODEL_ROUTER_LINK,
  SECURITY_HUB_LINK,
  OBSERVABILITY_HUB_LINK,
  DATABRICKS_HUB_LINK,
  AZURE_PRODUCTION_LINK,
  AZURE_INTERVIEW_HUB_LINK,
  AZURE_PROFILE_LINK,
  AZURE_CANDIDATE_MARKETING_LINK,
  AZURE_GET_SCHEDULED_LINK,
} from './shared';

// ─── Azure AI/ML master hub ──────────────────────────────────────────────────

export const azureAiMlHub: LandingPageConfig = azurePage({
  slug: 'azure-ai-ml-proxy-job-support',
  title: 'Azure AI & ML Proxy Job Support | Microsoft Foundry, OpenAI & Azure ML',
  description:
    'Azure AI & ML proxy job support and proxy interview support for Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, Foundry IQ, Azure Machine Learning, and Azure MLOps — real-time technical help across USA, UK, Canada, Europe, Australia & worldwide. Mentoring, not replacing you.',
  keywords: [
    'Azure AI ML proxy job support', 'Azure AI proxy job support', 'Microsoft Foundry proxy job support',
    'Azure OpenAI proxy job support', 'Azure proxy job support', 'Azure ML proxy job support',
    'Azure AI proxy interview support', 'Azure technical proxy support', 'proxy job support Azure',
    'Azure AI proxy support',
  ],
  h1: 'Azure AI & ML Proxy Job Support — Microsoft Foundry, Azure OpenAI, Agents & Azure ML',
  tagline:
    'Technical proxy support for Microsoft Foundry, Azure OpenAI, Azure AI Search, RAG, Azure ML, MLOps and Agentic AI projects — proxy job support and proxy interview support across every Azure AI service, country, and role.',
  heroEyebrow: 'Azure AI/ML Proxy Job & Interview Support Hub — Updated August 2026',
  painIntro:
    'Looking for Azure AI Proxy Job Support for a live Azure AI project, sprint task, production issue or project onboarding — or Azure AI Proxy Interview Support for an upcoming interview? ProxyTechSupport provides implementation-level proxy job support across Azure OpenAI, Microsoft Foundry, RAG, Azure AI Search, Foundry Agent Service, Azure Machine Learning and related Azure AI technologies. Our proxy job support focuses on technical guidance, troubleshooting, architecture, implementation and project mentoring — proxy does not mean replacing the professional or performing their employment responsibilities.',
  heroVariant:
    'Microsoft Foundry (formerly Azure AI Foundry / Azure AI Studio) moves fast and breaks in production in ways that are hard to debug alone — Entra ID and Managed Identity failures, rate-limit (429) and quota errors, content-filter false blocks, DeploymentNotFound, Private Endpoint connectivity, RAG retrieval collapse, agent tool and MCP failures, and GPU-capacity errors on Azure ML. This hub connects you to in-house experts across the full Azure AI stack: Microsoft Foundry (Foundry Models, Model Router, evaluations, observability), Azure OpenAI (Responses API, Realtime API, provisioned throughput, Global/Data Zone deployments), Foundry Agent Service (Agent Runtime, hosted agents, tools, memory, MCP, A2A, tracing), Azure AI Search (vector, hybrid, semantic ranker, agentic retrieval with Knowledge Agents and Knowledge Sources), Foundry IQ, Azure Machine Learning, Azure MLOps, Microsoft Agent Framework, and Foundry Local. From daily job support to emergency production fixes, live interview guidance, and profile positioning — start from here.',
  geoLine:
    'Supporting Azure AI/ML professionals across USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, Saudi Arabia, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Microsoft Foundry, Foundry Agent Service, Foundry Models & Model Router, Azure OpenAI, Azure AI Search agentic retrieval, Foundry IQ, Azure Machine Learning, Azure MLOps, Microsoft Agent Framework, Foundry Local, and Azure AI security, observability, and IaC — all current through August 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is Azure AI/ML job support?',
      answer:
        'It is real-time, hands-on help from experienced Azure AI engineers during your working hours — on your actual project. We help with Microsoft Foundry projects and model deployments, Azure OpenAI application development, Foundry Agent Service agents, Azure AI Search and RAG, Azure Machine Learning training and inference, Azure MLOps, and the Entra ID, RBAC, networking, and cost work around them. It is delivered live, confidentially, and same-day where needed, anywhere in the world.',
    },
    {
      question: 'Which Azure AI/ML services do you cover?',
      answer:
        'Microsoft Foundry (formerly Azure AI Foundry / Azure AI Studio — Foundry resource and projects, Foundry Models catalog, Foundry Model Router, evaluations, observability, Foundry Local), Azure OpenAI (Responses API, Chat Completions, Realtime API, embeddings, provisioned throughput/PTU, Global Standard and Data Zone Standard deployments), Foundry Agent Service (Agent Runtime, prompt and hosted agents, tools, memory, code interpreter, MCP, A2A, tracing, evaluation), Azure AI Search (vector, hybrid, semantic ranker, integrated vectorization, agentic retrieval, Knowledge Agents and Knowledge Sources), Foundry IQ, Azure Machine Learning (workspace, compute, pipelines, MLflow, registry, online and batch endpoints, AutoML), Azure MLOps and LLMOps, Microsoft Agent Framework, Foundry Tools (Document Intelligence, Content Understanding, Speech, Vision, Language, Content Safety), and Azure Databricks AI.',
    },
    {
      question: 'Do you help with live Azure AI production issues?',
      answer:
        'Yes. We provide dedicated Azure AI production support — Azure OpenAI 429 throttling and rate limits, content-filter blocks, DeploymentNotFound and quota errors, Managed Identity and Entra ID auth failures, Private Endpoint connectivity, Foundry agent tool/MCP failures, Azure AI Search indexer failures and vector-dimension mismatch, poor RAG retrieval, Azure ML endpoint and container failures, GPU OOM, and cost blowups — with an expert on the call. See our Azure AI production support page.',
    },
    {
      question: 'Can you help me prepare for or clear Azure AI/ML interviews?',
      answer:
        'Yes. We offer Azure AI/ML interview support and get-interview-scheduled services for Azure AI Engineer, Microsoft Foundry Engineer, Azure OpenAI Engineer, Azure Generative AI Engineer, Azure ML, Azure MLOps, and Azure AI Solutions Architect roles — live guidance during interviews, real-time interview support, and profile positioning so the calls come in the first place. Hiring decisions are always made solely by employers.',
    },
    {
      question: 'Is your content current with the latest Microsoft/Azure releases?',
      answer:
        'Yes. This cluster reflects the Microsoft/Azure product state through August 2026 — the Microsoft Foundry rename and Foundry resource/project architecture, Foundry Agent Service GA with the Responses API (Agents v2) replacing the retiring Azure OpenAI Assistants API, Foundry Model Router GA across 28 regions (routing GPT-5.6 and Claude Opus 4.8), Azure AI Search agentic retrieval, Foundry IQ, Microsoft Agent Framework 1.0, and the Prompt Flow and Foundry Workflows retirements. We verify version-sensitive details before advising.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your Azure stack, your situation (job support, production issue, interview, or profile), and your timeline. We match you with the right Azure AI expert — usually the same day. Every engagement is confidential and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Azure AI/ML Professionals With',
    cases: [
      'An Azure OpenAI deployment returning 429 RateLimitExceeded or a content filter blocking legitimate output you cannot trace',
      'A Foundry agent whose tool calls, MCP server connection, or memory keep failing in the Agent Runtime',
      'An Azure AI Search index returning irrelevant results, a failing indexer, or a vector-dimension mismatch after an embedding-model change',
      'An Azure ML online endpoint stuck in Failed/Updating, a training job dying on GPU OOM, or inference latency over SLA',
      'Joining a new Azure AI project and needing to ramp up on Microsoft Foundry, Azure OpenAI, or Azure ML fast',
      'An Azure AI/ML interview in a few days — Foundry RAG design, agentic architecture, or Azure ML MLOps you do not feel ready for',
    ],
  },
  proxySection: {
    title: 'Azure AI/ML Interview & Candidate Marketing Support',
    intro:
      'Getting into and moving up in Azure AI roles takes more than skill — it takes interview readiness and a profile that recruiters actually find. We support both sides: live interview assistance during your real interview, and candidate marketing to generate the calls.',
    points: [
      'Live, discreet guidance during Microsoft Foundry, Azure OpenAI, Foundry Agent Service, and Azure ML interviews',
      'Live proxy interview support for coding, RAG/LLM system design, and Azure AI architecture rounds',
      'Profile positioning around the exact keywords Azure AI recruiters and ATS filters screen for',
      'Active candidate marketing and recruiter outreach to build a real interview pipeline',
      'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
    ],
  },
  bottomCTAHeading: 'Need Real-Time Azure AI/ML Job Support or Interview Help Right Now?',
  bottomCTABody:
    'In-house Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, and Azure ML experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Azure AI/ML job support USA', href: '/usa-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support Canada', href: '/canada-azure-ai-proxy-job-support/' },
    ],
    techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
    problemLink: AZURE_PRODUCTION_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      // Master service hubs
      FOUNDRY_HUB_LINK, OPENAI_SUPP_LINK, AGENT_HUB_LINK, SEARCH_HUB_LINK, RAG_HUB_LINK,
      AZUREML_HUB_LINK, MLOPS_HUB_LINK, FOUNDRY_IQ_LINK, MODEL_ROUTER_LINK, AGENT_FRAMEWORK_LINK,
      FOUNDRY_LOCAL_LINK, FOUNDRY_TOOLS_LINK, DATABRICKS_HUB_LINK, SECURITY_HUB_LINK, OBSERVABILITY_HUB_LINK,
      AZURE_PRODUCTION_LINK, AZURE_INTERVIEW_HUB_LINK, AZURE_PROFILE_LINK, AZURE_CANDIDATE_MARKETING_LINK,
      AZURE_GET_SCHEDULED_LINK,
      // Country hubs
      { label: 'Azure AI/ML job support UK', href: '/uk-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support Ireland', href: '/ireland-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support Germany', href: '/germany-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support Australia', href: '/australia-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support Singapore', href: '/singapore-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support UAE', href: '/uae-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support Europe', href: '/europe-azure-ai-proxy-job-support/' },
      // Bridge into existing authority clusters
      EXISTING.azureOpenAiJobSupport, EXISTING.aimlHub, EXISTING.genai, EXISTING.rag,
      EXISTING.agenticAi, EXISTING.mlops, EXISTING.azureGuide, EXISTING.awsHub,
    ],
  }),
});

// ─── Azure AI production support ─────────────────────────────────────────────

export const azureAiProductionSupport: LandingPageConfig = azurePage({
  slug: 'azure-ai-ml-production-support',
  title: 'Azure AI Production Support — Foundry, Azure OpenAI & Azure ML Incidents',
  description:
    'Real-time Azure AI production support: fix Azure OpenAI 429 throttling and content-filter blocks, DeploymentNotFound, Foundry agent tool/MCP failures, Azure AI Search indexer errors, and Azure ML endpoint failures with an expert on the call. Same-day help.',
  keywords: [
    'Azure AI production support', 'Azure OpenAI 429 fix', 'Azure OpenAI throttling support',
    'Foundry agent production support', 'Azure AI Search indexer failure', 'Azure ML endpoint failure support',
    'Azure AI incident support', 'Azure OpenAI content filter fix', 'Azure GenAI production firefighting',
  ],
  h1: 'Azure AI Production Support — Fix Live Foundry, Azure OpenAI & Azure ML Issues Fast',
  tagline:
    'When an Azure AI system breaks in production, you need an expert on the call now — not a support ticket queue. Real-time help for Foundry, Azure OpenAI, RAG, agent, and Azure ML incidents.',
  heroEyebrow: 'Azure AI Production Firefighting — 24/7',
  painIntro:
    'Azure OpenAI suddenly throwing 429 RateLimitExceeded under load? Content filter blocking valid responses? A Foundry agent timing out or its MCP tool failing? Azure AI Search returning stale or wrong results? An Azure ML endpoint stuck in Failed before a release? Azure AI incidents are high-pressure and hard to debug alone.',
  heroVariant:
    'Azure AI systems fail in specific ways — Entra ID and Managed Identity auth failures, RateLimitExceeded (429) and quota exhaustion, content-filter false positives, DeploymentNotFound and model/region availability, Private Endpoint and VNet connectivity, embedding and vector-dimension mismatch, Azure AI Search indexer and skillset failures, Foundry agent tool/MCP/A2A errors, missing agent traces, Azure ML container and GPU-OOM failures, and runaway token or endpoint cost. Our engineers work the incident live with you — reading Azure Monitor metrics, Application Insights traces, Log Analytics (KQL), and request IDs — to find the root cause, stabilize the system, and ship a durable fix.',
  geoLine:
    'On-call Azure AI production support for teams across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available around the clock for urgent production incidents across all major time zones.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What Azure AI production issues can you help with?',
      answer:
        'Azure OpenAI 429 RateLimitExceeded and quota exhaustion, content-filter blocks, DeploymentNotFound and model/region availability, Managed Identity and Entra ID auth failures, Private Endpoint connectivity, latency and timeout spikes, Foundry agent tool/MCP/A2A failures and missing traces, Azure AI Search indexer and skillset failures, vector-dimension mismatch and poor RAG retrieval, semantic ranker issues, Azure ML endpoint deployment and container-health failures, GPU OOM, autoscaling, MLflow tracking issues, and pipeline failures. We work the incident live until the system is stable.',
    },
    {
      question: 'How fast can you join an Azure AI incident?',
      answer:
        'Usually within the same working session. Message us on WhatsApp with the symptoms, the service, and the request ID or error code, and we assign an engineer who has handled that class of incident before. For active outages we prioritize immediate response.',
    },
    {
      question: 'Do you cover Azure AI Search and RAG problems specifically?',
      answer:
        'Yes. RAG on Azure is a core focus — indexer and skillset failures, integrated-vectorization and embedding issues, vector-dimension mismatch after a model change, hybrid-query and semantic-ranker tuning, agentic retrieval and Knowledge Agent/Knowledge Source configuration, and answers that are wrong or hallucinated. We diagnose and fix answer-quality and reliability issues end to end.',
    },
    {
      question: 'Can you help reduce Azure OpenAI and Azure ML cost during an incident?',
      answer:
        'Yes. Cost blowups are a common trigger. We help right-size deployments (Global Standard vs Data Zone vs provisioned throughput/PTU), tune token usage and prompt design, add Model Router where it lowers cost without hurting quality, fix runaway retries, and right-size Azure ML compute and endpoints so the bill comes back under control without breaking the workload.',
    },
    {
      question: 'Is production support confidential?',
      answer:
        'Absolutely. Every engagement is confidential, NDAs are available on request, and we never access your Azure subscription without your explicit direction. We document the root cause and fix so your team can prevent a repeat.',
    },
  ],
  bottomCTAHeading: 'Azure AI System Down or Degraded Right Now?',
  bottomCTABody:
    'Get an in-house Microsoft Foundry, Azure OpenAI, Azure AI Search, or Azure ML expert on the incident with you — root-cause diagnosis, a durable fix, and prevention. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Azure AI/ML job support USA', href: '/usa-azure-ai-proxy-job-support/' },
      { label: 'Azure AI/ML job support hub', href: '/azure-ai-ml-proxy-job-support/' },
    ],
    techLinks: [OPENAI_SUPP_LINK, SEARCH_HUB_LINK],
    problemLink: EXISTING.production,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      FOUNDRY_HUB_LINK, AGENT_HUB_LINK, RAG_HUB_LINK, AZUREML_HUB_LINK, MLOPS_HUB_LINK,
      SECURITY_HUB_LINK, OBSERVABILITY_HUB_LINK, EXISTING.aimlProduction, EXISTING.azureOpenAiJobSupport,
    ],
  }),
});

// ─── Azure AI/ML interview hub ───────────────────────────────────────────────

export const azureAiInterviewHub: LandingPageConfig = azurePage({
  slug: 'azure-ai-ml-proxy-interview-support',
  title: 'Azure AI & ML Proxy Interview Support | Interview Proxy Support',
  description:
    'Azure AI & ML proxy interview support (also searched as interview proxy support): real-time expert help for Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, RAG, Azure ML, and MLOps interview rounds — coding, system design, architecture and production scenarios. You attend your own interview.',
  keywords: [
    'Azure AI ML proxy interview support', 'Azure AI interview proxy support', 'Azure AI proxy interview',
    'Microsoft Foundry proxy interview support', 'Azure OpenAI proxy interview support', 'Azure ML proxy interview support',
    'Azure RAG proxy interview', 'Azure AI proxy interviewer support',
  ],
  h1: 'Azure AI & ML Proxy Interview Support — Microsoft Foundry, Azure OpenAI, RAG & Azure ML',
  tagline:
    'Implementation-level proxy interview support (interview proxy support) for Azure OpenAI, Microsoft Foundry, RAG, Azure ML, system design and production scenarios — real-time expert help calibrated to your role. You attend and complete your own interview.',
  heroEyebrow: 'Azure AI/ML Proxy Interview Support Hub — Updated August 2026',
  painIntro:
    'Looking for Azure AI Proxy Interview Support — or Azure AI interview proxy support — for an Azure AI Engineer, Generative AI Engineer, Azure Solutions Architect or senior cloud AI role? ProxyTechSupport provides technical proxy interview support covering Microsoft Foundry, Azure OpenAI, RAG, Azure AI Search, Foundry Agent Service, Azure Machine Learning, system design and production troubleshooting scenarios. Azure AI/ML Proxy Interview Support gives you real-time, discreet expert help on the exact Azure AI technologies your interview covers — the candidate attends and completes their own interview.',
  heroVariant:
    'You get real-time, discreet expert support during your actual Azure AI/ML interview. Coverage spans Microsoft Foundry (resource/project architecture, model deployments, Model Router), Azure OpenAI (Responses API, provisioned throughput, content filters), Foundry Agent Service (Agent Runtime, tools, memory, MCP, A2A), Azure AI Search (vector, hybrid, semantic ranker, agentic retrieval, Knowledge Agents), RAG architecture and evaluation, Azure Machine Learning (training, endpoints, pipelines), Azure MLOps (MLflow, registry, CI/CD), and Azure security and networking for AI workloads — calibrated to your exact role, seniority, and interview format.',
  geoLine:
    'Azure AI/ML interview support for candidates across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Interview support available across all major time zones, including early-morning and late-evening interview slots.',
  highlights: interviewHighlights,
  faqs: [
    {
      question: 'What Azure AI/ML interview support do you provide?',
      answer:
        'Real-time, discreet expert support during your live Azure AI/ML interview. We cover Microsoft Foundry and Azure OpenAI architecture, RAG and Azure AI Search design, Foundry Agent Service and multi-agent system design, Azure ML MLOps, coding rounds, and behavioral rounds — aligned to your specific role and company format.',
    },
    {
      question: 'Which Azure AI/ML roles do you cover?',
      answer:
        'Azure AI Engineer, Microsoft Foundry Engineer, Azure OpenAI Engineer, Azure Generative AI Engineer, Azure Agentic AI Engineer, Azure ML Engineer, Azure MLOps Engineer, Azure RAG Engineer, Azure AI Solutions Architect, and Azure AI Platform Engineer — from transitioning-in to senior/lead and architect levels.',
    },
    {
      question: 'What system-design topics come up in Azure AI interviews?',
      answer:
        'Common ones: design an enterprise RAG system on Azure AI Search with agentic retrieval; design a multi-agent workflow on Foundry Agent Service with tools and memory; choose between Global Standard, Data Zone Standard, and provisioned throughput for an Azure OpenAI workload; design an Azure ML training-to-deployment pipeline with MLflow and the model registry; and secure an Azure AI workload with Entra ID, Managed Identity, Private Endpoints, and Key Vault. Our experts support you through exactly these scenarios in real time.',
    },
    {
      question: 'Is interview support confidential and ethical?',
      answer:
        'Yes. Every session is fully confidential. We provide real-time technical interview support — we never impersonate you and we do not guarantee selection or employment. Hiring decisions are made solely by employers. Guidance is delivered discreetly and calibrated to your real background so you can present your experience accurately and confidently.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role and company, and the likely topics. We assign the right Azure AI expert and run a pre-interview alignment session so our real-time support matches your experience level.',
    },
  ],
  bottomCTAHeading: 'Azure AI/ML Interview Coming Up?',
  bottomCTABody:
    'Get real-time Azure AI/ML proxy interview support from in-house Microsoft Foundry, Azure OpenAI, and Azure ML experts. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Azure AI/ML job support hub', href: '/azure-ai-ml-proxy-job-support/' },
      { label: 'Azure OpenAI interview support', href: '/azure-openai-interview-support/' },
    ],
    techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
    problemLink: AZURE_PRODUCTION_LINK,
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [
      { label: 'Microsoft Foundry interview support', href: '/microsoft-foundry-proxy-interview-support/' },
      { label: 'Foundry Agent Service interview support', href: '/foundry-agent-service-proxy-interview-support/' },
      { label: 'Azure RAG interview support', href: '/azure-rag-proxy-interview-support/' },
      { label: 'Azure AI Search interview support', href: '/azure-ai-search-proxy-interview-support/' },
      { label: 'Azure ML interview support', href: '/azure-ml-proxy-interview-support/' },
      { label: 'Azure MLOps interview support', href: '/azure-mlops-proxy-interview-support/' },
      { label: 'Azure AI Engineer interview support', href: '/azure-ai-engineer-proxy-interview-support/' },
      AZURE_GET_SCHEDULED_LINK, AZURE_PROFILE_LINK, EXISTING.azureOpenAiInterview, EXISTING.aimlProxy,
    ],
  }),
});

// ─── Azure AI profile positioning ────────────────────────────────────────────

export const azureAiProfilePositioning: LandingPageConfig = azurePage({
  slug: 'azure-ai-ml-profile-positioning-support',
  title: 'Azure AI/ML Profile Positioning — Resume & LinkedIn for Azure AI Roles',
  description:
    'Azure AI/ML profile positioning: resume and LinkedIn engineered around Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, Azure ML, and Azure MLOps keywords so recruiters and ATS filters actually surface you.',
  keywords: [
    'Azure AI profile positioning', 'Azure AI resume help', 'Microsoft Foundry resume',
    'Azure AI LinkedIn optimization', 'Azure ML engineer resume', 'Azure AI keyword targeting',
    'Azure OpenAI engineer profile',
  ],
  h1: 'Azure AI/ML Profile Positioning — Get Found for the Azure AI Roles You Want',
  tagline:
    'Resume and LinkedIn engineered around the exact Azure AI keywords recruiters and ATS filters screen for — so your Microsoft Foundry, Azure OpenAI, and Azure ML experience actually surfaces.',
  heroEyebrow: 'Azure AI/ML Profile Positioning',
  painIntro:
    'If your Azure AI resume reads like a generic cloud or data engineer, recruiters never see the Foundry, Azure OpenAI, RAG, and Azure ML impact that qualifies you — and ATS filters screen you out before a human ever looks.',
  heroVariant:
    'We rebuild your profile around the terms Azure AI recruiters actually search — Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, RAG, Azure Machine Learning, Azure MLOps, Entra ID and Managed Identity, provisioned throughput, and measurable production impact (latency, cost, reliability, accuracy). The result is a resume and LinkedIn that pass ATS screening and read like a genuine Azure AI engineer to a hiring manager.',
  geoLine:
    'Azure AI/ML profile positioning for candidates across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Profile work and reviews scheduled across all major time zones.',
  highlights: marketingHighlights,
  faqs: azureMarketingFaqs('Azure AI/ML engineers'),
  bottomCTAHeading: 'Ready to Get Found for Azure AI Roles?',
  bottomCTABody:
    'We rebuild your resume and LinkedIn around real Azure AI keywords and impact, then support outreach so the calls come in. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Azure AI/ML job support hub', href: '/azure-ai-ml-proxy-job-support/' },
      { label: 'Azure AI candidate marketing', href: '/azure-ai-ml-candidate-marketing/' },
    ],
    techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
    problemLink: AZURE_CANDIDATE_MARKETING_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'Azure AI Engineer profile positioning', href: '/azure-ai-engineer-profile-positioning/' },
      { label: 'Azure ML Engineer profile positioning', href: '/azure-ml-engineer-profile-positioning/' },
      AZURE_GET_SCHEDULED_LINK, EXISTING.candidateMarketing, EXISTING.getScheduled,
    ],
  }),
});

// ─── Azure AI candidate marketing ────────────────────────────────────────────

export const azureAiCandidateMarketing: LandingPageConfig = azurePage({
  slug: 'azure-ai-ml-candidate-marketing',
  title: 'Azure AI/ML Candidate Marketing — Get More Azure AI Interview Calls',
  description:
    'Azure AI/ML candidate marketing: profile engineering, keyword targeting, and recruiter outreach so your Microsoft Foundry, Azure OpenAI, and Azure ML profile reaches hiring managers and generates real interview calls.',
  keywords: [
    'Azure AI candidate marketing', 'Azure AI job application support', 'Azure AI recruiter outreach',
    'Microsoft Foundry candidate marketing', 'Azure ML engineer marketing', 'Azure AI interview calls',
  ],
  h1: 'Azure AI/ML Candidate Marketing — Turn Your Profile Into Interview Calls',
  tagline:
    'Profile engineering, keyword targeting, and active recruiter outreach so your Azure AI profile reaches hiring managers instead of sitting in an ATS black hole.',
  heroEyebrow: 'Azure AI/ML Candidate Marketing',
  painIntro:
    'A strong Azure AI background is worth nothing if recruiters never find it. Most Azure AI candidates get few calls not because they lack skill, but because their profile is invisible and their applications never reach a human.',
  heroVariant:
    'We market you actively — an Azure AI profile rebuilt around Microsoft Foundry, Azure OpenAI, Foundry Agent Service, Azure AI Search, Azure ML, and Azure MLOps keywords; targeted applications; and direct outreach to hiring managers and staffing firms across product companies, enterprises, and consulting/SI firms. The goal is a steady pipeline of relevant Azure AI interview calls.',
  geoLine:
    'Azure AI/ML candidate marketing across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Outreach and applications run continuously across all major time zones.',
  highlights: marketingHighlights,
  faqs: azureMarketingFaqs('Azure AI/ML candidates'),
  bottomCTAHeading: 'Want More Azure AI Interview Calls?',
  bottomCTABody:
    'We position your Azure AI profile and run active outreach so recruiters and hiring managers actually reach you. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Azure AI/ML job support hub', href: '/azure-ai-ml-proxy-job-support/' },
      { label: 'Azure AI profile positioning', href: '/azure-ai-ml-profile-positioning-support/' },
    ],
    techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
    problemLink: AZURE_PROFILE_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'Azure AI Engineer candidate marketing', href: '/azure-ai-engineer-candidate-marketing/' },
      { label: 'Azure ML Engineer candidate marketing', href: '/azure-ml-engineer-candidate-marketing/' },
      { label: 'Azure GenAI Engineer candidate marketing', href: '/azure-genai-engineer-candidate-marketing/' },
      AZURE_GET_SCHEDULED_LINK, EXISTING.candidateMarketing, EXISTING.getScheduled,
    ],
  }),
});

// ─── Get Azure AI interview scheduled ────────────────────────────────────────

export const azureGetScheduled: LandingPageConfig = azurePage({
  slug: 'get-azure-ai-ml-interview-scheduled',
  title: 'Get Azure AI/ML Interview Scheduled — Recruiter Outreach & Applications',
  description:
    'Get Azure AI/ML interviews scheduled: targeted applications and recruiter outreach for Microsoft Foundry, Azure OpenAI, Azure ML, and Azure MLOps roles, backed by profile positioning and live interview support.',
  keywords: [
    'get Azure AI interview scheduled', 'Azure AI job applications', 'Azure AI recruiter outreach',
    'Azure ML interview scheduling', 'Microsoft Foundry job applications',
  ],
  h1: 'Get Your Azure AI/ML Interview Scheduled',
  tagline:
    'Targeted applications and recruiter outreach that get Azure AI/ML interviews on your calendar — then backed by real-time proxy interview support.',
  heroEyebrow: 'Get Azure AI/ML Interview Scheduled',
  painIntro:
    'Applying into the void is exhausting and slow. If your Azure AI applications are not converting into scheduled interviews, the problem is usually targeting, positioning, and reach — not your ability.',
  heroVariant:
    'We get Azure AI interviews scheduled by combining a keyword-optimized profile with targeted applications and direct recruiter and hiring-manager outreach for Microsoft Foundry, Azure OpenAI, Azure ML, and Azure MLOps roles. Once interviews are booked, we back you with real-time proxy interview support so you convert.',
  geoLine:
    'Interview scheduling and outreach for Azure AI/ML candidates across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Outreach runs continuously; interviews scheduled to your preferred time zone.',
  highlights: marketingHighlights,
  faqs: azureMarketingFaqs('Azure AI/ML job seekers'),
  bottomCTAHeading: 'Want Azure AI Interviews On Your Calendar?',
  bottomCTABody:
    'We position your profile, run targeted outreach, and back you with real-time interview support to convert. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Azure AI/ML job support hub', href: '/azure-ai-ml-proxy-job-support/' },
      { label: 'Azure AI/ML interview support', href: '/azure-ai-ml-proxy-interview-support/' },
    ],
    techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
    problemLink: AZURE_CANDIDATE_MARKETING_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [AZURE_PROFILE_LINK, AZURE_CANDIDATE_MARKETING_LINK, EXISTING.getScheduled, EXISTING.candidateMarketing],
  }),
});

export const azureCorePages: LandingPageConfig[] = [
  azureAiMlHub,
  azureAiProductionSupport,
  azureAiInterviewHub,
  azureAiProfilePositioning,
  azureAiCandidateMarketing,
  azureGetScheduled,
];
