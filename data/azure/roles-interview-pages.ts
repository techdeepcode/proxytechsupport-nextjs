import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  roleHighlights,
  interviewHighlights,
  marketingHighlights,
  azureJobFaqs,
  azureInterviewFaqs,
  azureMarketingFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  OPENAI_SUPP_LINK,
  AGENT_HUB_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AZUREML_HUB_LINK,
  MLOPS_HUB_LINK,
  SECURITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_INTERVIEW_HUB_LINK,
  AZURE_PRODUCTION_LINK,
  AZURE_PROFILE_LINK,
  AZURE_CANDIDATE_MARKETING_LINK,
  AZURE_GET_SCHEDULED_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

// ─── Role pages ──────────────────────────────────────────────────────────────

const rolePage = (
  slug: string, role: string, focus: string, h1: string, painIntro: string, heroVariant: string,
  tech: { label: string; href: string }[], proxy: { label: string; href: string },
  extra: { label: string; href: string }[] = [],
): LandingPageConfig =>
  azurePage({
    slug,
    title: `${role} Proxy Job Support | Azure AI Project & Interview Help`,
    description: `${role} proxy job support: real-time, implementation-level technical help on your daily Azure AI deliverables — ${focus} — plus production support and ${role} proxy interview support. Technical mentoring, not replacing you.`,
    keywords: [`${role} proxy job support`, `${role} proxy support`, 'Azure AI proxy job support', 'Microsoft Foundry proxy job support', `${role} proxy interview support`],
    h1,
    tagline: `Daily real-time proxy job support mapped to your ${role} responsibilities — the real Azure AI deliverables, tools, and stakeholders your role owns.`,
    heroEyebrow: `${role} Proxy Job Support`,
    painIntro,
    heroVariant,
    geoLine: `Real-time ${role} support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    highlights: roleHighlights,
    faqs: azureJobFaqs(role, focus),
    bottomCTAHeading: `Need ${role} Proxy Job Support or Proxy Interview Support?`,
    bottomCTABody: `In-house Azure AI experts back you on your ${role} work same-day — proxy job support for live projects and production issues, or ${role} proxy interview support (technical preparation and mentoring; you attend your own interview). Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_HUB_LINK, proxy],
      techLinks: tech,
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: proxy,
      additionalLinks: extra.concat([AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK, AZURE_PROFILE_LINK]),
    }),
  });

const aiEngineer = rolePage(
  'azure-ai-engineer-proxy-job-support', 'Azure AI Engineer',
  'Microsoft Foundry apps, Azure OpenAI integration, RAG with Azure AI Search, Foundry agents, and content safety',
  'Azure AI Engineer Proxy Job Support — Ship AI Features With Confidence',
  'As an Azure AI Engineer you own building AI features on Foundry and Azure OpenAI — and every RAG bug, agent failure, and content-filter block lands on you. We back you daily.',
  'We support Azure AI Engineers on real deliverables: Microsoft Foundry apps and model deployments, Azure OpenAI integration (Responses API, tool calling), RAG with Azure AI Search, Foundry agents and tools, content safety, evaluation, and the Entra ID/networking/cost work around them — during your working hours.',
  [FOUNDRY_HUB_LINK, EXISTING.azureOpenAiJobSupport], A('Azure AI Engineer interview support', 'azure-ai-engineer-proxy-interview-support'),
  [AGENT_HUB_LINK, RAG_HUB_LINK, A('Azure AI Engineer profile positioning', 'azure-ai-engineer-profile-positioning')],
);

const foundryEngineer = rolePage(
  'microsoft-foundry-engineer-proxy-job-support', 'Microsoft Foundry Engineer',
  'Foundry resource/project setup, Foundry Models and Model Router, agents, evaluations, and observability',
  'Microsoft Foundry Engineer Proxy Job Support — Own the Foundry Platform',
  'As a Microsoft Foundry Engineer you own the Foundry platform — resources, projects, model deployments, agents, and governance. We help you run it reliably.',
  'We support Microsoft Foundry Engineers: the Foundry resource/project model, Foundry Models and Model Router, Foundry Agent Service, evaluations and observability, RBAC and private networking, and migration from hub-based projects — real platform work, same-day.',
  [FOUNDRY_HUB_LINK, AGENT_HUB_LINK], A('Microsoft Foundry interview support', 'microsoft-foundry-proxy-interview-support'),
  [OPENAI_SUPP_LINK, A('Foundry Model Router job support', 'microsoft-foundry-model-router-job-support')],
);

const openaiEngineer = rolePage(
  'azure-openai-engineer-proxy-job-support', 'Azure OpenAI Engineer',
  'Azure OpenAI deployments, the Responses API, tool calling, RAG, quota/PTU, and content filters',
  'Azure OpenAI Engineer Proxy Job Support — Build on Azure OpenAI',
  'As an Azure OpenAI Engineer you live in deployments, the Responses API, quota, and content filters — and production 429s and filter blocks are yours to fix. We back you.',
  'We support Azure OpenAI Engineers: model deployments (Global/Data Zone/PTU), the Responses API and tool calling, embeddings and RAG, quota and throttling, content filters, cost optimization, and Managed Identity security — on your real workload.',
  [EXISTING.azureOpenAiJobSupport, OPENAI_SUPP_LINK], A('Azure OpenAI interview support', 'azure-openai-interview-support'),
  [A('Azure OpenAI Engineer profile positioning', 'azure-openai-engineer-profile-positioning'), FOUNDRY_HUB_LINK],
);

const genaiEngineer = rolePage(
  'azure-generative-ai-engineer-proxy-job-support', 'Azure Generative AI Engineer',
  'GenAI apps on Foundry, RAG, agents, prompt engineering, evaluation, and safe deployment',
  'Azure Generative AI Engineer Proxy Job Support — Build Production GenAI',
  'As an Azure Generative AI Engineer you turn models into products — RAG, agents, and evaluation on Foundry. We help you ship them reliably.',
  'We support Azure Generative AI Engineers: GenAI apps on Microsoft Foundry, RAG with Azure AI Search and Foundry IQ, Foundry agents, prompt engineering, evaluation and guardrails, LLMOps, and cost — real GenAI delivery, same-day.',
  [FOUNDRY_HUB_LINK, RAG_HUB_LINK], A('Azure agentic AI interview support', 'azure-agentic-ai-proxy-interview-support'),
  [AGENT_HUB_LINK, A('Azure GenAI Engineer candidate marketing', 'azure-genai-engineer-candidate-marketing'), EXISTING.genai],
);

const agenticEngineer = rolePage(
  'azure-agentic-ai-engineer-proxy-job-support', 'Azure Agentic AI Engineer',
  'Foundry Agent Service, multi-agent workflows, tools/MCP/A2A, memory, and Microsoft Agent Framework',
  'Azure Agentic AI Engineer Proxy Job Support — Build Reliable Agents',
  'As an Azure Agentic AI Engineer you build agents and multi-agent systems — where tool failures, memory bugs, and orchestration issues are constant. We back you daily.',
  'We support Azure Agentic AI Engineers: Foundry Agent Service (Responses API, Agent Runtime, prompt/hosted agents), tools/MCP/A2A, memory, multi-agent workflows, Microsoft Agent Framework, evaluation, and tracing — real agentic delivery, same-day.',
  [AGENT_HUB_LINK, A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support')], A('Azure agentic AI interview support', 'azure-agentic-ai-proxy-interview-support'),
  [FOUNDRY_HUB_LINK, EXISTING.agenticAi],
);

const mlEngineer = rolePage(
  'azure-ml-engineer-proxy-job-support', 'Azure ML Engineer',
  'Azure ML training, pipelines, MLflow, endpoints, AutoML, and model deployment',
  'Azure ML Engineer Proxy Job Support — Train & Deploy on Azure ML',
  'As an Azure ML Engineer you own training, pipelines, and endpoints — and a Failed endpoint or GPU OOM before a release is yours to fix. We back you.',
  'We support Azure ML Engineers: training jobs and environments, pipelines, MLflow, the model registry, AutoML, online/batch endpoints, GPU training, and MLOps — on your real Azure ML workload, same-day.',
  [AZUREML_HUB_LINK, MLOPS_HUB_LINK], A('Azure ML interview support', 'azure-ml-proxy-interview-support'),
  [A('Azure ML Engineer profile positioning', 'azure-ml-engineer-profile-positioning'), A('Azure ML Engineer candidate marketing', 'azure-ml-engineer-candidate-marketing')],
);

const mlopsEngineer = rolePage(
  'azure-mlops-engineer-proxy-job-support', 'Azure MLOps Engineer',
  'ML CI/CD, pipelines, model promotion, monitoring, retraining, and LLMOps',
  'Azure MLOps Engineer Proxy Job Support — Ship & Monitor Models Reliably',
  'As an Azure MLOps Engineer you own CI/CD, promotion, and monitoring — the plumbing everyone depends on. We help you build it right.',
  'We support Azure MLOps Engineers: ML CI/CD (Azure DevOps/GitHub Actions), pipelines, registry-driven promotion, monitoring (drift/quality/health), retraining, and LLMOps for Azure OpenAI and Foundry — real MLOps delivery, same-day.',
  [MLOPS_HUB_LINK, AZUREML_HUB_LINK], A('Azure MLOps interview support', 'azure-mlops-proxy-interview-support'),
  [A('Azure MLOps Engineer profile positioning', 'azure-mlops-engineer-profile-positioning'), EXISTING.mlopsEngineer],
);

const ragEngineer = rolePage(
  'azure-rag-engineer-proxy-job-support', 'Azure RAG Engineer',
  'RAG on Azure AI Search, agentic retrieval, Foundry IQ, chunking/embeddings, and groundedness evaluation',
  'Azure RAG Engineer Proxy Job Support — Build Grounded Retrieval',
  'As an Azure RAG Engineer you own retrieval quality — and hallucinations and wrong citations are yours to solve. We back you daily.',
  'We support Azure RAG Engineers: RAG on Azure AI Search (vector/hybrid/agentic retrieval), Foundry IQ, chunking and embeddings, semantic ranking, citations, hallucination mitigation, and groundedness evaluation — real RAG delivery, same-day.',
  [RAG_HUB_LINK, SEARCH_HUB_LINK], A('Azure RAG interview support', 'azure-rag-proxy-interview-support'),
  [A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support'), EXISTING.ragEngineer],
);

const solutionsArchitect = rolePage(
  'azure-ai-solutions-architect-proxy-job-support', 'Azure AI Solutions Architect',
  'Azure AI architecture, RAG and agent system design, security/networking, cost, and platform decisions',
  'Azure AI Solutions Architect Proxy Job Support — Design AI That Ships',
  'As an Azure AI Solutions Architect you own the architecture others build on — RAG, agents, security, and cost trade-offs. We help you get the big decisions right.',
  'We support Azure AI Solutions Architects: end-to-end Azure AI architecture, RAG and agent system design, Foundry vs Azure ML decisions, security and private networking, cost and Model Router strategy, and reference architectures — real architecture work, same-day.',
  [FOUNDRY_HUB_LINK, SECURITY_HUB_LINK], A('Azure AI Solutions Architect interview support', 'azure-ai-solutions-architect-proxy-interview-support'),
  [A('Azure AI Solutions Architect profile positioning', 'azure-ai-solutions-architect-profile-positioning'), A('Microsoft Foundry architecture guide', 'microsoft-foundry-architecture-guide')],
);

const platformEngineer = rolePage(
  'azure-ai-platform-engineer-proxy-job-support', 'Azure AI Platform Engineer',
  'Azure AI platform, IaC (Terraform/Bicep), landing zones, RBAC, private networking, and cost governance',
  'Azure AI Platform Engineer Proxy Job Support — Build the AI Platform',
  'As an Azure AI Platform Engineer you build the paved road — IaC, landing zones, RBAC, and networking others build AI on. We back your platform work.',
  'We support Azure AI Platform Engineers: AI landing zones, IaC (Terraform/Bicep) for Foundry/Azure OpenAI/ML, RBAC and Managed Identity, private networking, cost governance, and self-service platform patterns — real platform engineering, same-day.',
  [A('Azure AI Terraform job support', 'azure-ai-terraform-job-support'), SECURITY_HUB_LINK], AZURE_INTERVIEW_HUB_LINK,
  [A('Azure AI Bicep job support', 'azure-ai-bicep-job-support'), FOUNDRY_HUB_LINK],
);

const securityEngineer = rolePage(
  'azure-ai-security-engineer-proxy-job-support', 'Azure AI Security Engineer',
  'AI security, Entra ID/Managed Identity, RBAC, Private Link, content safety, and governance',
  'Azure AI Security Engineer Proxy Job Support — Secure AI Workloads',
  'As an Azure AI Security Engineer you own the controls that keep AI safe — identity, networking, content safety, and governance. We back your security work.',
  'We support Azure AI Security Engineers: Entra ID and Managed Identity, least-privilege RBAC, Private Endpoints/Private Link, Key Vault, content safety, Azure Policy and Purview governance, and audit for AI workloads — real security engineering, same-day.',
  [SECURITY_HUB_LINK, A('Azure AI governance job support', 'azure-ai-governance-job-support')], AZURE_INTERVIEW_HUB_LINK,
  [A('Azure AI private endpoint job support', 'azure-ai-private-endpoint-job-support'), A('Azure AI security guide', 'azure-ai-security-guide')],
);

// ─── Interview pages ─────────────────────────────────────────────────────────

const interviewPage = (
  slug: string, entity: string, h1: string, painIntro: string, heroVariant: string,
  tech: { label: string; href: string }[], extra: { label: string; href: string }[] = [],
): LandingPageConfig =>
  azurePage({
    slug,
    title: `${entity} Proxy Interview Support | ${entity} Interview Proxy Help`,
    description: `${entity} proxy interview support (also searched as ${entity} interview proxy support): calibrated mock interviews and expert technical mentoring for ${entity} technical and system-design rounds on Azure. You attend your own interview.`,
    keywords: [`${entity} proxy interview support`, `${entity} interview proxy support`, `${entity} proxy interview`, `${entity} interview questions`, `${entity} mock interview`],
    h1,
    tagline: `${entity} proxy interview support (interview proxy support) plus calibrated mock interviews — technical, coding, and system-design rounds. Preparation and mentoring, not attending for you.`,
    heroEyebrow: `${entity} Proxy Interview Support`,
    painIntro,
    heroVariant,
    geoLine: `${entity} proxy interview support for candidates across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.`,
    timezoneNote: 'Proxy interview support available across all major time zones, including early-morning and late-evening slots.',
    highlights: interviewHighlights,
    faqs: azureInterviewFaqs(entity),
    bottomCTAHeading: `${entity} Proxy Interview Support — Interview Coming Up?`,
    bottomCTABody: `Get calibrated mock interviews and ${entity} proxy interview support (interview proxy support) from in-house Azure AI experts — technical preparation and mentoring; you attend and complete your own interview. Message ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_INTERVIEW_HUB_LINK, AZURE_HUB_LINK],
      techLinks: tech,
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: EXISTING.aimlProxy,
      additionalLinks: extra.concat([AZURE_INTERVIEW_HUB_LINK, AZURE_GET_SCHEDULED_LINK]),
    }),
  });

const foundryInterview = interviewPage(
  'microsoft-foundry-proxy-interview-support', 'Microsoft Foundry',
  'Microsoft Foundry Proxy Interview Support — Architecture & System Design',
  'Microsoft Foundry interviews go deep on the resource/project model, agents, models, and RAG architecture. Underprepared system-design rounds cost strong engineers offers.',
  'We prepare you for Microsoft Foundry interviews: the Foundry resource/project architecture, Foundry Models and Model Router, Foundry Agent Service and multi-agent design, RAG with Azure AI Search and Foundry IQ, evaluation and observability, and security — with mock interviews and live guidance calibrated to your role.',
  [FOUNDRY_HUB_LINK, AGENT_HUB_LINK], [A('Foundry Agent Service interview support', 'foundry-agent-service-proxy-interview-support'), A('Microsoft Foundry job support', 'microsoft-foundry-proxy-job-support')],
);

const agentInterview = interviewPage(
  'foundry-agent-service-proxy-interview-support', 'Foundry Agent Service',
  'Foundry Agent Service Proxy Interview Support — Agent System Design',
  'Agent interviews test whether you can design reliable agents — Responses API, tools, memory, MCP, and multi-agent orchestration. It is easy to freeze on system design.',
  'We prepare you for Foundry Agent Service interviews: the Responses API and Agent Runtime, prompt vs hosted agents, tools/MCP/A2A, memory, multi-agent workflows, evaluation and tracing, and migration from the Assistants API — with mock interviews and live guidance.',
  [AGENT_HUB_LINK, A('Microsoft Agent Framework interview support', 'microsoft-agent-framework-proxy-interview-support')], [A('Foundry Agent Service job support', 'microsoft-foundry-agent-service-proxy-job-support')],
);

const ragInterview = interviewPage(
  'azure-rag-proxy-interview-support', 'Azure RAG',
  'Azure RAG Proxy Interview Support — Retrieval System Design',
  'Azure RAG interviews focus on retrieval architecture — chunking, embeddings, hybrid vs agentic retrieval, and grounding. Vague answers lose offers.',
  'We prepare you for Azure RAG interviews: chunking and embeddings, Azure AI Search vector/hybrid/agentic retrieval, semantic ranking, Foundry IQ, citations and grounding, hallucination mitigation, and RAG evaluation — with mock interviews and live guidance.',
  [RAG_HUB_LINK, SEARCH_HUB_LINK], [A('Azure AI Search interview support', 'azure-ai-search-proxy-interview-support'), A('Azure RAG job support', 'azure-rag-proxy-job-support')],
);

const searchInterview = interviewPage(
  'azure-ai-search-proxy-interview-support', 'Azure AI Search',
  'Azure AI Search Proxy Interview Support — Search & Retrieval Rounds',
  'Azure AI Search interviews cover vector/hybrid search, indexers, semantic ranking, and now agentic retrieval. The depth surprises candidates.',
  'We prepare you for Azure AI Search interviews: index and indexer design, vector/hybrid search, the semantic ranker, integrated vectorization, agentic retrieval with Knowledge Agents and Knowledge Sources, and RAG architecture — with mock interviews and live guidance.',
  [SEARCH_HUB_LINK, RAG_HUB_LINK], [A('Azure AI Search job support', 'azure-ai-search-proxy-job-support')],
);

const mlInterview = interviewPage(
  'azure-ml-proxy-interview-support', 'Azure ML',
  'Azure ML Proxy Interview Support — Training, Deployment & MLOps Rounds',
  'Azure ML interviews test the full lifecycle — training, pipelines, endpoints, and MLOps. System-design rounds trip up strong practitioners.',
  'We prepare you for Azure ML interviews: training and pipelines, MLflow and the model registry, online/batch endpoints, AutoML, distributed GPU training, and MLOps (CI/CD, monitoring, promotion) — with mock interviews and live guidance.',
  [AZUREML_HUB_LINK, MLOPS_HUB_LINK], [A('Azure MLOps interview support', 'azure-mlops-proxy-interview-support'), A('Azure Machine Learning job support', 'azure-machine-learning-proxy-job-support')],
);

const mlopsInterview = interviewPage(
  'azure-mlops-proxy-interview-support', 'Azure MLOps',
  'Azure MLOps Proxy Interview Support — CI/CD & Monitoring System Design',
  'Azure MLOps interviews are system-design heavy — CI/CD, promotion, monitoring, and retraining. Hand-wavy answers do not pass.',
  'We prepare you for Azure MLOps interviews: ML CI/CD with Azure DevOps/GitHub Actions, registry-driven promotion, monitoring (drift/quality/health), retraining, IaC, and LLMOps for Azure OpenAI and Foundry — with mock interviews and live guidance.',
  [MLOPS_HUB_LINK, AZUREML_HUB_LINK], [A('Azure MLOps job support', 'azure-mlops-proxy-job-support')],
);

const aiEngineerInterview = interviewPage(
  'azure-ai-engineer-proxy-interview-support', 'Azure AI Engineer',
  'Azure AI Engineer Proxy Interview Support — End-to-End AI Rounds',
  'Azure AI Engineer interviews span Foundry, Azure OpenAI, RAG, agents, and coding. Breadth plus system design is hard to prepare alone.',
  'We prepare you for Azure AI Engineer interviews: Microsoft Foundry and Azure OpenAI, RAG and Azure AI Search, Foundry agents, content safety and evaluation, security, and coding rounds — with mock interviews and live guidance calibrated to the role.',
  [FOUNDRY_HUB_LINK, EXISTING.azureOpenAiJobSupport], [A('Azure AI Engineer job support', 'azure-ai-engineer-proxy-job-support'), EXISTING.azureOpenAiInterview],
);

const architectInterview = interviewPage(
  'azure-ai-solutions-architect-proxy-interview-support', 'Azure AI Solutions Architect',
  'Azure AI Solutions Architect Proxy Interview Support — Architecture Deep-Dives',
  'Architect interviews are almost all system design — RAG, agents, security, cost, and platform trade-offs at scale. This is where preparation matters most.',
  'We prepare you for Azure AI Solutions Architect interviews: end-to-end AI architecture, RAG and agent system design, Foundry vs Azure ML decisions, security and networking, cost and Model Router strategy, and reference architectures — with mock architecture rounds and live guidance.',
  [FOUNDRY_HUB_LINK, SECURITY_HUB_LINK], [A('Azure AI Solutions Architect job support', 'azure-ai-solutions-architect-proxy-job-support'), A('Microsoft Foundry architecture guide', 'microsoft-foundry-architecture-guide')],
);

const agenticInterview = interviewPage(
  'azure-agentic-ai-proxy-interview-support', 'Azure Agentic AI',
  'Azure Agentic AI Proxy Interview Support — Agent Architecture Rounds',
  'Agentic AI interviews test agent and multi-agent design — tools, memory, MCP/A2A, and orchestration. The bar is high and rising.',
  'We prepare you for Azure Agentic AI interviews: Foundry Agent Service, agent and multi-agent architecture, tools/MCP/A2A, memory, Microsoft Agent Framework, and evaluation/tracing — with mock interviews and live guidance.',
  [AGENT_HUB_LINK, A('Microsoft Agent Framework interview support', 'microsoft-agent-framework-proxy-interview-support')], [A('Azure Agentic AI Engineer job support', 'azure-agentic-ai-engineer-proxy-job-support')],
);

const agentFrameworkInterview = interviewPage(
  'microsoft-agent-framework-proxy-interview-support', 'Microsoft Agent Framework',
  'Microsoft Agent Framework Proxy Interview Support — Framework & Workflows',
  'Agent Framework interviews probe the SK/AutoGen successor — agents, graph workflows, and migration. Fresh material that is hard to self-study.',
  'We prepare you for Microsoft Agent Framework interviews: agents and function tools, graph-based (data-flow) workflows, multi-agent orchestration, relationship to Semantic Kernel and AutoGen and migration, MCP/A2A, and deployment as Foundry hosted agents — with mock interviews and live guidance.',
  [A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support'), AGENT_HUB_LINK], [A('Azure agentic AI interview support', 'azure-agentic-ai-proxy-interview-support')],
);

// ─── Profile positioning ─────────────────────────────────────────────────────

const profilePage = (
  slug: string, role: string, keywords: string, heroVariant: string,
): LandingPageConfig =>
  azurePage({
    slug,
    title: `${role} Profile Positioning — Resume & LinkedIn for ${role} Roles`,
    description: `${role} profile positioning: resume and LinkedIn engineered around ${keywords} so recruiters and ATS filters surface you for ${role} roles.`,
    keywords: [`${role} profile positioning`, `${role} resume`, `${role} LinkedIn`, 'Azure AI profile positioning'],
    h1: `${role} Profile Positioning — Get Found for ${role} Roles`,
    tagline: `Resume and LinkedIn engineered around the exact ${role} keywords recruiters and ATS filters screen for.`,
    heroEyebrow: `${role} Profile Positioning`,
    painIntro: `If your resume does not clearly signal ${role} experience with the right keywords, recruiters never surface you and ATS filters screen you out.`,
    heroVariant,
    geoLine: `${role} profile positioning for candidates across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.`,
    timezoneNote: 'Profile work and reviews scheduled across all major time zones.',
    highlights: marketingHighlights,
    faqs: azureMarketingFaqs(`${role}s`),
    bottomCTAHeading: `Ready to Get Found for ${role} Roles?`,
    bottomCTABody: `We rebuild your resume and LinkedIn around real ${role} keywords and impact, then support outreach. Message ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_PROFILE_LINK, AZURE_CANDIDATE_MARKETING_LINK],
      techLinks: [AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK],
      problemLink: AZURE_CANDIDATE_MARKETING_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: [AZURE_GET_SCHEDULED_LINK, EXISTING.candidateMarketing],
    }),
  });

const aiEngineerProfile = profilePage('azure-ai-engineer-profile-positioning', 'Azure AI Engineer', 'Microsoft Foundry, Azure OpenAI, RAG, Azure AI Search, and agents',
  'We rebuild your Azure AI Engineer profile around Microsoft Foundry, Azure OpenAI, RAG, Azure AI Search, Foundry agents, and measurable production impact — so it passes ATS and reads like a real AI engineer to hiring managers.');
const openaiEngineerProfile = profilePage('azure-openai-engineer-profile-positioning', 'Azure OpenAI Engineer', 'Azure OpenAI, Responses API, RAG, PTU, and content safety',
  'We rebuild your Azure OpenAI Engineer profile around Azure OpenAI deployments, the Responses API, RAG, provisioned throughput, and content safety — with real impact metrics that recruiters search for.');
const mlEngineerProfile = profilePage('azure-ml-engineer-profile-positioning', 'Azure ML Engineer', 'Azure ML, MLflow, pipelines, endpoints, and MLOps',
  'We rebuild your Azure ML Engineer profile around Azure ML training, MLflow, pipelines, endpoints, and MLOps — surfacing you for the ML roles you want.');
const mlopsEngineerProfile = profilePage('azure-mlops-engineer-profile-positioning', 'Azure MLOps Engineer', 'Azure MLOps, CI/CD, model promotion, monitoring, and LLMOps',
  'We rebuild your Azure MLOps Engineer profile around ML CI/CD, promotion, monitoring, retraining, and LLMOps — the exact terms MLOps recruiters screen for.');
const architectProfile = profilePage('azure-ai-solutions-architect-profile-positioning', 'Azure AI Solutions Architect', 'Azure AI architecture, RAG and agent design, security, and cost',
  'We rebuild your Azure AI Solutions Architect profile around AI architecture, RAG and agent system design, security, and cost leadership — positioning you for architect and lead roles.');

// ─── Candidate marketing ─────────────────────────────────────────────────────

const marketingPage = (
  slug: string, role: string, heroVariant: string,
): LandingPageConfig =>
  azurePage({
    slug,
    title: `${role} Candidate Marketing — Get More ${role} Interview Calls`,
    description: `${role} candidate marketing: profile engineering, keyword targeting, and recruiter outreach so your ${role} profile reaches hiring managers and generates interview calls.`,
    keywords: [`${role} candidate marketing`, `${role} job search`, `${role} recruiter outreach`, 'Azure AI candidate marketing'],
    h1: `${role} Candidate Marketing — Turn Your Profile Into Interview Calls`,
    tagline: `Profile engineering, keyword targeting, and active recruiter outreach so your ${role} profile generates real interview calls.`,
    heroEyebrow: `${role} Candidate Marketing`,
    painIntro: `A strong ${role} background is invisible if recruiters never find it. Most candidates get few calls because their profile is not surfaced and applications never reach a human.`,
    heroVariant,
    geoLine: `${role} candidate marketing across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.`,
    timezoneNote: 'Outreach and applications run continuously across all major time zones.',
    highlights: marketingHighlights,
    faqs: azureMarketingFaqs(`${role}s`),
    bottomCTAHeading: `Want More ${role} Interview Calls?`,
    bottomCTABody: `We position your ${role} profile and run active outreach so recruiters reach you. Message ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_CANDIDATE_MARKETING_LINK, AZURE_PROFILE_LINK],
      techLinks: [AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK],
      problemLink: AZURE_PROFILE_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: [AZURE_GET_SCHEDULED_LINK, EXISTING.candidateMarketing, EXISTING.getScheduled],
    }),
  });

const aiEngineerMarketing = marketingPage('azure-ai-engineer-candidate-marketing', 'Azure AI Engineer',
  'We market you as an Azure AI Engineer — a profile rebuilt around Microsoft Foundry, Azure OpenAI, RAG, and agents, targeted applications, and outreach to hiring managers across product, enterprise, and consulting firms.');
const mlEngineerMarketing = marketingPage('azure-ml-engineer-candidate-marketing', 'Azure ML Engineer',
  'We market you as an Azure ML Engineer — a profile rebuilt around Azure ML, MLflow, pipelines, endpoints, and MLOps, with targeted applications and recruiter outreach for a steady interview pipeline.');
const genaiEngineerMarketing = marketingPage('azure-genai-engineer-candidate-marketing', 'Azure GenAI Engineer',
  'We market you as an Azure Generative AI Engineer — a profile rebuilt around Foundry, RAG, agents, and evaluation, with targeted applications and outreach so GenAI hiring managers actually reach you.');

export const azureRolesInterviewPages: LandingPageConfig[] = [
  aiEngineer, foundryEngineer, openaiEngineer, genaiEngineer, agenticEngineer, mlEngineer,
  mlopsEngineer, ragEngineer, solutionsArchitect, platformEngineer, securityEngineer,
  foundryInterview, agentInterview, ragInterview, searchInterview, mlInterview, mlopsInterview,
  aiEngineerInterview, architectInterview, agenticInterview, agentFrameworkInterview,
  aiEngineerProfile, openaiEngineerProfile, mlEngineerProfile, mlopsEngineerProfile, architectProfile,
  aiEngineerMarketing, mlEngineerMarketing, genaiEngineerMarketing,
];
