import type { LandingPageConfig, LandingHighlight, LandingFaqItem } from './landing-pages';

const BASE_URL = 'https://proxytechsupport.com';
const LASTMOD = '2026-06-18T10:00:00.000Z';

// ─── .NET cluster highlights ──────────────────────────────────────────────────

const dotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET Project Support',
    description:
      'Live expert assistance during your working hours — ASP.NET Core, C#, Entity Framework Core, Azure deployment, microservices debugging, and production task delivery alongside you.',
  },
  {
    title: 'Azure & AI/ML .NET Support',
    description:
      'Hands-on help for Azure App Service, Azure Functions, AKS, Semantic Kernel, Azure AI Foundry, RAG pipelines, AI agents, .NET Aspire, and cloud-native .NET architectures.',
  },
  {
    title: '.NET Interview Proxy Assistance',
    description:
      'Expert-backed mock interviews and real-time live guidance during .NET Developer, Senior .NET Engineer, and Azure .NET Architect technical interview rounds.',
  },
];

const dotnetParentHighlights: LandingHighlight[] = [
  {
    title: '.NET Core Job Support',
    description:
      'ASP.NET Core, C#, EF Core, Web API, Minimal APIs, Blazor, SignalR, gRPC, Worker Services, and production debugging — live expert help aligned to your daily sprint tasks.',
  },
  {
    title: 'Azure + AI in .NET',
    description:
      'Azure App Service, Functions, AKS, Container Apps, Semantic Kernel, Azure AI Foundry, RAG in .NET, AI agents, vector search, and .NET Aspire cloud-native orchestration support.',
  },
  {
    title: '.NET Interview Proxy Support',
    description:
      'Live real-time guidance during technical .NET interviews — ASP.NET Core architecture, Azure cloud design, AI/ML implementation, clean architecture, CQRS, and system design rounds.',
  },
];

// ─── FAQ generators ───────────────────────────────────────────────────────────

function dotnetGeoFaqs(location: string, tz: string): LandingFaqItem[] {
  return [
    {
      question: `What .NET job support do you provide for developers in ${location}?`,
      answer: `We provide real-time .NET job support for developers working in ${location}. Our in-house .NET experts join your working hours and help with ASP.NET Core tasks, C# debugging, Entity Framework Core issues, Azure deployment, microservices architecture, .NET Aspire, Semantic Kernel, AI/ML in .NET, and production issue resolution. We also provide .NET interview proxy support for developers preparing for or attending technical rounds in ${location}. Same-day start available.`,
    },
    {
      question: 'Can you help with urgent .NET production issues?',
      answer:
        'Yes. We help resolve critical ASP.NET Core production bugs, EF Core performance issues, Azure deployment failures, CI/CD pipeline breakdowns, and microservices outages — often within the same working session. Production firefighting is one of our core strengths.',
    },
    {
      question: 'Do you provide .NET proxy interview support?',
      answer:
        'Yes. Our in-house .NET experts provide real-time, discreet guidance during your live .NET technical interview. We help with coding rounds, system design, ASP.NET Core architecture questions, Azure cloud design, CQRS/clean architecture, and .NET AI/ML implementation questions. This service has helped hundreds of developers clear senior .NET and Azure .NET roles.',
    },
    {
      question: 'What .NET technologies do you support?',
      answer:
        'We cover the full modern .NET stack: .NET 10/9/8, ASP.NET Core, C#, EF Core, Blazor, SignalR, gRPC, Azure (App Service, Functions, AKS, Container Apps, Service Bus, Key Vault, Entra ID), Semantic Kernel, Azure AI Foundry, RAG, AI agents, .NET Aspire, Dapr, Docker, Kubernetes, CQRS, clean architecture, DDD, and legacy .NET modernization.',
    },
    {
      question: `What hours do you support ${location} developers?`,
      answer: `We align with ${tz} working hours and are also available 24/7 for urgent .NET production issues or same-day interview support. Whether you need help before a morning standup, during a critical deployment, or before a scheduled technical interview, we are available.`,
    },
  ];
}

function dotnetTechFaqs(tech: string, tasks: string): LandingFaqItem[] {
  return [
    {
      question: `What ${tech} job support do you provide?`,
      answer: `We provide real-time ${tech} job support — live expert assistance during your working hours for ${tasks}. We also provide ${tech} interview proxy support and mock technical interview preparation. Same-day start available, WhatsApp/Call: +91 96606 14469.`,
    },
    {
      question: `Can you help with urgent ${tech} production issues?`,
      answer: `Yes. We resolve critical ${tech} production bugs, performance bottlenecks, deployment failures, and architecture problems — often within the same working session. Our experts have handled hundreds of real-world ${tech} production incidents.`,
    },
    {
      question: `Do you provide ${tech} proxy interview support?`,
      answer: `Yes. Our in-house experts provide real-time discreet guidance during live ${tech} technical interview rounds — coding questions, system design, architecture discussions, and domain-specific scenarios. We have helped hundreds of developers clear ${tech} roles across USA, UK, Canada, and Europe.`,
    },
    {
      question: 'Is the service confidential?',
      answer:
        'Absolutely. All sessions are completely confidential. We do not share your details with any third party. NDAs are available on request. Every engagement is handled with full professional discretion.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases we can start the same day. We maintain an in-house expert team — no sub-contracting. Contact us on WhatsApp at +91 96606 14469 and we will match you with the right expert immediately.',
    },
  ];
}

// ─── PHASE A: Parent + Country Pages ─────────────────────────────────────────

// Page 1 — Parent Hub
export const modernDotnetAzureAiJobSupport: LandingPageConfig = {
  slug: 'modern-dotnet-azure-ai-job-support',
  title: 'Modern .NET Azure AI Job Support | ASP.NET Core, .NET 10, Semantic Kernel & AI/ML Help',
  description: 'Real-time .NET job support for ASP.NET Core, Azure, .NET 10, Semantic Kernel, Azure AI Foundry, RAG, AI agents, .NET Aspire, microservices, and .NET interview proxy support.',
  canonical: `${BASE_URL}/modern-dotnet-azure-ai-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'modern .NET job support', '.NET Azure AI job support', 'ASP.NET Core job support',
    '.NET 10 job support', 'Semantic Kernel job support', 'Azure AI Foundry .NET support',
    'RAG .NET job support', '.NET interview proxy support', '.NET Aspire job support',
  ],
  heroEyebrow: 'Modern .NET · Azure · AI/ML Job Support',
  h1: 'Modern .NET, Azure & AI Job Support — Real-Time Expert Help',
  tagline: 'Stuck on an ASP.NET Core issue, Azure deployment problem, or .NET AI/ML task? Our in-house .NET experts provide live real-time support for developers working on modern .NET 10, Azure, and AI stacks.',
  painIntro:
    'Modern .NET is no longer just C# and Web API. Today it includes .NET Aspire, Semantic Kernel, Azure AI Foundry, RAG pipelines, AI agents, cloud-native microservices, and Azure-integrated applications. If you are stuck — on any of it — we can help right now.',
  heroVariant:
    'We cover the complete modern .NET stack: ASP.NET Core, .NET 10, EF Core, Azure App Service, Azure Functions, AKS, Container Apps, Service Bus, Cosmos DB, Semantic Kernel, Azure OpenAI, RAG, AI agents, .NET Aspire, Dapr, clean architecture, CQRS, DDD, and legacy .NET modernization. For developers in USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and beyond.',
  geoLine: 'Supporting .NET developers across USA, Canada, UK, Ireland, Europe, Australia, New Zealand, Singapore, UAE, and Saudi Arabia.',
  timezoneNote: 'Available 24/7 — aligned with US, UK, EU, and APAC working hours.',
  techSnippet: 'Full stack coverage: .NET 10 · ASP.NET Core · Azure · Semantic Kernel · AI Foundry · RAG · .NET Aspire · Microservices · EF Core · CQRS · Clean Architecture.',
  highlights: dotnetParentHighlights,
  faqs: [
    {
      question: 'What is modern .NET job support?',
      answer:
        'Modern .NET job support is real-time expert assistance for developers working on .NET 10, ASP.NET Core, Azure cloud-native applications, AI/ML with Semantic Kernel and Azure AI Foundry, .NET Aspire microservices, and enterprise .NET architecture. Our experts join your working hours and help you resolve tasks, debug production issues, design solutions, and deliver on your sprint commitments.',
    },
    {
      question: 'Can you help with Azure deployment and cloud-native .NET issues?',
      answer:
        'Yes. We provide hands-on support for Azure App Service deployments, Azure Functions, AKS, Azure Container Apps, Service Bus, Event Grid, Key Vault, Entra ID, Managed Identity, Azure DevOps pipelines, and GitHub Actions. We help debug deployment failures, connectivity issues, IAM configuration problems, and performance issues in Azure-hosted .NET applications.',
    },
    {
      question: 'Do you provide Semantic Kernel and Azure AI Foundry .NET support?',
      answer:
        'Yes. We support .NET AI/ML implementations including Semantic Kernel plugin development, prompt templates, tool calling, memory, RAG pipeline design, Azure AI Foundry agent creation, Azure OpenAI integration, vector search with Azure AI Search, embeddings, and AI agent orchestration in .NET. This is a fast-moving area and our experts stay current.',
    },
    {
      question: 'Can you help with .NET interview proxy support?',
      answer:
        'Yes. Our .NET proxy interview support provides real-time discreet guidance during live technical interview rounds. We help with ASP.NET Core architecture questions, Azure cloud design rounds, CQRS and clean architecture discussions, coding assessments, and system design scenarios for senior .NET and Azure .NET roles.',
    },
    {
      question: 'Do you help with legacy .NET modernization?',
      answer:
        'Yes. We support .NET Framework to .NET 10 migrations, ASP.NET MVC to ASP.NET Core upgrades, WCF to gRPC or REST API migrations, WebForms to Blazor rewrites, IIS to Azure App Service moves, and monolith to microservices transformations — with real practical help at every step.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'Same-day start in most cases. Contact us on WhatsApp or call +91 96606 14469. Share your stack and current challenge. We will match you with the right in-house .NET expert immediately — no sub-contracting, no delays.',
    },
  ],
  useCasesSection: {
    title: 'Real .NET Situations We Help With Every Day',
    cases: [
      'ASP.NET Core middleware pipeline ordering causing authentication or CORS failures in production',
      'Entity Framework Core N+1 query explosion degrading application performance under load',
      'Azure Functions cold start, dependency injection failure, or Key Vault access issue blocking a deployment',
      'Semantic Kernel plugin not invoking correctly or RAG retrieval returning incorrect grounded responses',
      '.NET Aspire AppHost service discovery failing between microservices in local or cloud environment',
      'CQRS/MediatR handler not resolving correctly or clean architecture layer boundary violations breaking builds',
      'Azure Service Bus message processing failing with lock expiry or duplicate detection issues',
      'Blazor component lifecycle issue causing state loss or re-render loops in production',
      'EF Core migration failing in production due to data conflicts or out-of-order schema changes',
      'Senior .NET or Azure .NET technical interview round coming up — needing real-time expert guidance',
    ],
  },
  proxySection: {
    title: '.NET Interview Proxy Support — Live Guidance for Technical Rounds',
    intro:
      'Facing a senior .NET Developer, Azure .NET Architect, or AI/ML .NET Engineer interview? Our .NET experts provide real-time, discreet guidance during your live technical round — helping you think through architecture, code, and design questions with confidence.',
    points: [
      'ASP.NET Core architecture and system design interview rounds',
      'Azure cloud design — App Service, AKS, Functions, Service Bus, Key Vault, Entra ID',
      'Clean architecture, CQRS, DDD, repository pattern, and microservices design questions',
      '.NET AI/ML rounds — Semantic Kernel, RAG, Azure OpenAI, AI agent design',
      'Live coding assessments in C# — algorithms, LINQ, async/await, EF Core',
      '.NET Aspire, Dapr, Docker, and Kubernetes architecture discussions',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: '.NET Job Support UK', href: '/uk-dotnet-job-support/' },
      { label: '.NET Job Support Canada', href: '/canada-dotnet-job-support/' },
      { label: '.NET Job Support Australia', href: '/australia-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: '.NET Job Support Guide', href: '/dotnet-job-support-guide/' },
      { label: 'Azure Job Support Guide', href: '/azure-job-support-guide/' },
      { label: 'Full Stack .NET Job Support', href: '/full-stack-dotnet-job-support/' },
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need Real-Time .NET, Azure & AI Job Support? Start Today.',
  bottomCTABody:
    'Join hundreds of .NET developers who resolved ASP.NET Core, Azure, Semantic Kernel, AI/ML, and production challenges with live in-house expert support. Available 24/7 for developers across USA, UK, Canada, Ireland, Europe, Australia, Singapore, and UAE.',
};

// Page 2 — USA country
export const usaDotnetJobSupport: LandingPageConfig = {
  slug: 'usa-dotnet-job-support',
  title: '.NET Job Support in USA | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in USA. ASP.NET Core, Azure, .NET 10, Semantic Kernel, AI agents, microservices, production debugging, and .NET interview proxy support.',
  canonical: `${BASE_URL}/usa-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support USA', 'ASP.NET Core job support USA', 'Azure .NET support USA',
    '.NET developer help USA', '.NET interview proxy USA', 'real-time .NET support USA',
  ],
  heroEyebrow: '.NET Job Support — USA',
  h1: '.NET Job Support in USA — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Stuck on an ASP.NET Core task, Azure deployment issue, or .NET AI/ML implementation in your US job? Our in-house .NET experts align with US time zones and are available right now.',
  painIntro:
    'US enterprise .NET projects move fast — banking systems, healthcare platforms, insurance backends, government contractor applications, and cloud-native SaaS all run on ASP.NET Core and Azure. When you hit a blocker, you cannot wait.',
  heroVariant:
    'We help US-based .NET developers with live coding assistance, EF Core debugging, Azure deployment troubleshooting, Semantic Kernel and AI agent implementation, .NET Aspire microservices, CQRS architecture, and pre-interview coaching for US tech company and enterprise .NET roles. All US time zones covered — Eastern, Central, Mountain, Pacific.',
  geoLine: 'Supporting .NET developers across USA — New York, Dallas, Chicago, Atlanta, Seattle, San Francisco, Boston, Washington DC, and all US time zones.',
  timezoneNote: 'Aligned with US Eastern, Central, Mountain, and Pacific working hours.',
  techSnippet: 'US enterprise .NET stack: ASP.NET Core · Azure · .NET 10 · EF Core · Microservices · Semantic Kernel · AI Foundry · CQRS · Clean Architecture.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('USA', 'US Eastern, Central, and Pacific'),
  useCasesSection: {
    title: 'US .NET Job Support Scenarios We Handle',
    cases: [
      'Healthcare .NET application — HL7 FHIR API integration, HIPAA-compliant data handling, Azure Health Data Services',
      'Banking or insurance ASP.NET Core microservice — transaction processing bug, concurrency issue, or performance degradation',
      'Azure cloud-native .NET app — App Service deployment failure, Managed Identity access issue, or Service Bus message processing error',
      'Government contractor .NET project — legacy .NET Framework modernization to .NET 8/10, ATO compliance, Azure Government deployment',
      'SaaS .NET startup — Blazor frontend bug, SignalR connection issue, or EF Core query performance problem',
      'Enterprise .NET AI project — Semantic Kernel plugin not working, RAG grounding issue, Azure OpenAI quota or rate limit problem',
      'US tech company .NET interview — technical screen, system design round, or coding assessment preparation',
      'DevOps for .NET — Azure DevOps pipeline failure, GitHub Actions .NET build error, Docker container issue',
    ],
  },
  proxySection: {
    title: '.NET Interview Proxy Support for US Roles',
    intro:
      'Preparing for a .NET Developer, Senior .NET Engineer, or Azure .NET Architect role at a US company? Our experts provide real-time guidance during your live technical interview — so you perform at your best under US interview pressure.',
    points: [
      'US enterprise .NET technical screens — coding, ASP.NET Core architecture, EF Core',
      'Azure cloud design rounds at US banks, insurance companies, and enterprise software firms',
      'AI/ML .NET interviews at US tech companies and consulting firms — Semantic Kernel, RAG, AI agents',
      'Clean architecture, CQRS, DDD design discussions for senior US .NET roles',
      'System design rounds for Principal or Architect-level .NET positions at US companies',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support UK', href: '/uk-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: '.NET Job Support Guide', href: '/dotnet-job-support-guide/' },
      { label: 'IT Job Support USA', href: '/job-support-usa/' },
      { label: 'New York .NET Job Support', href: '/new-york-dotnet-job-support/' },
      { label: 'Dallas .NET Job Support', href: '/dallas-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in USA? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for US developers. Available across all US time zones — same-day start. WhatsApp or Call: +91 96606 14469.',
};

// Page 3 — Canada country
export const canadaDotnetJobSupport: LandingPageConfig = {
  slug: 'canada-dotnet-job-support',
  title: '.NET Job Support in Canada | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Canada. ASP.NET Core, Azure, .NET 10, Semantic Kernel, microservices, banking/insurance .NET projects, and .NET interview proxy support.',
  canonical: `${BASE_URL}/canada-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Canada', 'ASP.NET Core job support Canada', 'Azure .NET support Canada',
    '.NET developer help Canada', '.NET interview proxy Canada', 'real-time .NET support Canada',
  ],
  heroEyebrow: '.NET Job Support — Canada',
  h1: '.NET Job Support in Canada — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Canadian enterprise .NET projects in banking, insurance, healthcare, and public sector demand precision. Our in-house .NET experts align with ET and PT working hours and help you deliver.',
  painIntro:
    'Canada runs some of the most demanding .NET environments in the world — RBC, TD Bank, Sun Life, Manulife, TELUS, CBC, and hundreds of government vendor projects rely on ASP.NET Core and Azure. When you are stuck, our experts are ready.',
  heroVariant:
    'We support Canadian .NET developers with live project help — EF Core performance, Azure government cloud, .NET Aspire microservices, Semantic Kernel for fintech AI, CQRS for banking backends, clean architecture for healthcare systems, and .NET interview proxy support for Canadian tech roles.',
  geoLine: 'Supporting .NET developers across Canada — Toronto, Vancouver, Calgary, Montreal, Ottawa, and remote Canadian teams.',
  timezoneNote: 'Aligned with Canadian Eastern, Central, and Pacific working hours.',
  techSnippet: 'Canadian enterprise stack: ASP.NET Core · Azure · EF Core · Banking .NET · Healthcare .NET · CQRS · Clean Architecture · Semantic Kernel.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Canada', 'Canadian Eastern and Pacific'),
  useCasesSection: {
    title: 'Canadian .NET Project Scenarios We Support',
    cases: [
      'Canadian banking ASP.NET Core service — payment processing, regulatory compliance API, or authentication with Entra ID',
      'Insurance backend .NET project — policy calculation engine, claims processing service, or legacy .NET Framework migration',
      'Healthcare .NET vendor project — HL7, FHIR, provincial health authority integration, PIPEDA-compliant data handling',
      'Public sector .NET application — Government of Canada Azure deployment, ITSG-33 compliance, secure API design',
      'Toronto fintech .NET startup — Azure cloud-native architecture, Cosmos DB design, event-driven microservices',
      'Canadian .NET AI project — Semantic Kernel for banking chatbot, RAG for document processing, Azure AI Foundry integration',
      'Vancouver tech company .NET role — technical interview preparation, system design coaching, proxy interview support',
      'Calgary energy sector .NET project — data pipeline, Azure Synapse integration, or industrial IoT backend',
    ],
  },
  proxySection: {
    title: '.NET Interview Proxy Support for Canadian Roles',
    intro:
      'Facing a .NET technical interview at a Canadian bank, insurance company, consulting firm, or tech company? Our experts understand Canadian interview formats and provide real-time guidance to help you perform at your best.',
    points: [
      'Canadian banking .NET interviews — RBC, TD, BMO, Scotiabank, Manulife, Sun Life tech formats',
      'Government of Canada vendor .NET technical rounds — system design, security, Azure Government',
      'Toronto/Vancouver fintech .NET technical screens — cloud-native architecture, microservices design',
      'Consulting firm .NET interviews — Accenture Canada, CGI, Deloitte Canada, KPMG Canada formats',
      'Senior .NET developer and architect interviews — CQRS, clean architecture, DDD, EF Core deep dives',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    canadaLinks: [
      { label: 'IT Job Support Canada', href: '/job-support-canada/' },
      { label: 'Toronto .NET Job Support', href: '/toronto-dotnet-job-support/' },
      { label: 'Vancouver .NET Job Support', href: '/vancouver-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in Canada? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for Canadian developers. Banking, insurance, healthcare, and public sector .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 4 — UK country
export const ukDotnetJobSupport: LandingPageConfig = {
  slug: 'uk-dotnet-job-support',
  title: '.NET Job Support in UK | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in UK. ASP.NET Core, Azure, .NET 10, fintech .NET, NHS vendor projects, Semantic Kernel, and .NET interview proxy support for UK roles.',
  canonical: `${BASE_URL}/uk-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support UK', 'ASP.NET Core job support UK', 'Azure .NET support UK',
    '.NET developer help UK', '.NET interview proxy UK', 'fintech .NET job support UK',
  ],
  heroEyebrow: '.NET Job Support — United Kingdom',
  h1: '.NET Job Support in UK — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'UK fintech, NHS vendor projects, and enterprise .NET demands precision. Our in-house .NET experts align with GMT/BST working hours and help you deliver under UK project pressure.',
  painIntro:
    'UK .NET developers work across demanding environments — Barclays, HSBC, Lloyds, NHS digital vendor systems, UK government digital services, and London fintech startups. ASP.NET Core, Azure, and modern .NET stacks are everywhere. When you hit a blocker, our experts are ready.',
  heroVariant:
    'We help UK .NET developers with live project support — EF Core, Azure UK South/North deployments, GDPR-aware .NET design, NHS API integrations, fintech CQRS backends, Semantic Kernel for UK enterprise AI, and proxy interview support for UK .NET technical rounds including HSBC, Barclays, Deloitte UK, and UK tech companies.',
  geoLine: 'Supporting .NET developers across UK — London, Manchester, Birmingham, Edinburgh, Leeds, Bristol, and remote UK teams.',
  timezoneNote: 'Aligned with UK GMT/BST working hours.',
  techSnippet: 'UK enterprise stack: ASP.NET Core · Azure UK regions · EF Core · NHS APIs · Fintech CQRS · GDPR .NET · Clean Architecture · Semantic Kernel.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('UK', 'UK GMT/BST'),
  useCasesSection: {
    title: 'UK .NET Project Scenarios We Support',
    cases: [
      'London fintech ASP.NET Core service — FCA-compliant API design, payment processing, Azure UK cloud deployment',
      'NHS vendor .NET project — HL7, FHIR R4, GP Connect API integration, NHSD authentication, Azure Health API',
      'UK banking .NET microservice — CQRS, Kafka integration, Azure Service Bus, or EF Core performance issue',
      'UK government digital service .NET app — GOV.UK PaaS to Azure migration, GDS design system, NCSC compliance',
      'UK consulting firm .NET project — Deloitte, Accenture, KPMG — Azure migration, legacy modernization',
      'UK tech company .NET AI project — Semantic Kernel for enterprise chatbot, RAG over UK document corpus',
      'GDPR-aware .NET data pipeline — Azure Key Vault, data masking, PII handling in ASP.NET Core',
      'UK .NET technical interview — technical screen or panel at UK bank, NHS supplier, or tech company',
    ],
  },
  proxySection: {
    title: '.NET Interview Proxy Support for UK Roles',
    intro:
      'Facing a .NET technical round at a UK bank, NHS supplier, consulting firm, or tech company? Our experts understand UK interview culture and provide real-time guidance calibrated to UK employer expectations.',
    points: [
      'UK banking .NET interviews — Barclays, HSBC, Lloyds, NatWest, Standard Chartered formats',
      'NHS/healthcare .NET vendor technical rounds — FHIR, HL7, NHS APIs, NHSD authentication',
      'UK consulting firm .NET interviews — Deloitte, Accenture, Capgemini UK formats',
      'London fintech .NET startup interviews — cloud-native design, Azure, microservices',
      'Senior .NET architect and developer rounds — clean architecture, CQRS, DDD, Azure design',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Ireland', href: '/ireland-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support UK', href: '/job-support-uk/' },
      { label: 'London .NET Job Support', href: '/london-dotnet-job-support/' },
      { label: 'Manchester .NET Job Support', href: '/manchester-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in UK? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for UK developers. Fintech, NHS, banking, and consulting .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 5 — Ireland country
export const irelandDotnetJobSupport: LandingPageConfig = {
  slug: 'ireland-dotnet-job-support',
  title: '.NET Job Support in Ireland | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Ireland. ASP.NET Core, Azure, .NET 10, Dublin tech hub .NET projects, Microsoft ecosystem, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/ireland-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Ireland', 'ASP.NET Core job support Ireland', 'Azure .NET support Ireland',
    '.NET developer help Ireland', '.NET interview proxy Ireland', 'Dublin .NET job support',
  ],
  heroEyebrow: '.NET Job Support — Ireland',
  h1: '.NET Job Support in Ireland — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Ireland hosts Microsoft\'s EMEA headquarters and a deep concentration of enterprise .NET roles. Our experts support Dublin tech hub developers with real-time ASP.NET Core, Azure, and AI/ML .NET help.',
  painIntro:
    'Dublin and Cork are home to Microsoft, Google, Meta, LinkedIn, and hundreds of enterprise software companies running ASP.NET Core on Azure. Whether you work for a US multinational\'s Irish office, a local SaaS company, or a financial services firm, our .NET experts are aligned with Irish IST working hours.',
  heroVariant:
    'We support Irish .NET developers with live project help — Azure West Europe deployments, GDPR-compliant .NET architecture, enterprise SaaS microservices, Semantic Kernel for AI-enabled applications, EF Core deep dives, and .NET interview proxy support for Irish tech company and multinational technical rounds.',
  geoLine: 'Supporting .NET developers across Ireland — Dublin, Cork, Galway, Limerick, and remote Irish teams.',
  timezoneNote: 'Aligned with Irish IST (UTC+1) / GMT working hours.',
  techSnippet: 'Irish tech hub stack: ASP.NET Core · Azure West Europe · EF Core · GDPR .NET · SaaS microservices · Semantic Kernel · Microsoft ecosystem.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Ireland', 'Irish IST/GMT'),
  useCasesSection: {
    title: 'Irish .NET Project Scenarios We Support',
    cases: [
      'Dublin US multinational .NET project — Azure deployment for EMEA, GDPR-aware architecture, EU data residency',
      'Irish SaaS company ASP.NET Core microservice — multi-tenant architecture, Azure Service Bus, Cosmos DB design',
      'Irish financial services .NET project — Central Bank of Ireland compliance, payment API, secure Azure deployment',
      'Cork tech company .NET AI project — Semantic Kernel enterprise chatbot, RAG for EU document processing',
      'Dublin consulting project .NET modernization — legacy .NET Framework to .NET 10, IIS to Azure App Service migration',
      'Irish government digital service .NET app — Azure Ireland region, Data Protection Commission compliance',
      '.NET interview at a Dublin multinational — Microsoft, Google, Meta, LinkedIn, Salesforce, or IBM technical round',
      'Irish startup .NET architecture — Blazor frontend, ASP.NET Core API, Azure deployment, EF Core',
    ],
  },
  proxySection: {
    title: '.NET Interview Proxy Support for Irish Roles',
    intro:
      'Preparing for a .NET technical round at a Dublin tech company, US multinational\'s Irish office, or Irish bank? Our experts provide real-time guidance calibrated to Irish and EMEA interview expectations.',
    points: [
      'Dublin multinational .NET interviews — Microsoft, Google, LinkedIn, Salesforce Irish offices',
      'Irish financial services .NET technical rounds — Bank of Ireland, AIB, Permanent TSB, KPMG Ireland',
      'Dublin SaaS and fintech .NET startup technical screens',
      'Senior .NET and Azure .NET architect interviews for Irish enterprises',
      'GDPR and EU data compliance .NET architecture discussion rounds',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support UK', href: '/uk-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support Ireland', href: '/job-support-ireland/' },
      { label: 'Dublin .NET Job Support', href: '/dublin-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in Ireland? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for Irish developers. Dublin tech hub, multinationals, and financial services .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 6 — Germany country
export const germanyDotnetJobSupport: LandingPageConfig = {
  slug: 'germany-dotnet-job-support',
  title: '.NET Job Support in Germany | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Germany. ASP.NET Core, Azure, .NET 10, enterprise .NET modernization, GDPR-compliant .NET, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/germany-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Germany', 'ASP.NET Core job support Germany', 'Azure .NET support Germany',
    '.NET developer help Germany', '.NET interview proxy Germany', 'Berlin .NET job support',
  ],
  heroEyebrow: '.NET Job Support — Germany',
  h1: '.NET Job Support in Germany — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'German enterprise .NET environments — automotive, manufacturing, banking, and regulated systems — demand high precision and GDPR compliance. Our experts align with CET/CEST working hours.',
  painIntro:
    'Germany hosts major .NET deployments across automotive giants, Mittelstand enterprise software, banking systems, and B2B SaaS companies. SAP integration, Azure Germany, GDPR-compliant ASP.NET Core architectures, and enterprise modernization are everyday challenges here.',
  heroVariant:
    'We support German .NET developers with live project help — enterprise .NET architecture, Azure Germany/North Europe regions, GDPR-aware data handling in ASP.NET Core, legacy .NET Framework modernization for German Mittelstand, and .NET interview proxy support for Berlin, Munich, Frankfurt, and Hamburg tech roles.',
  geoLine: 'Supporting .NET developers across Germany — Berlin, Munich, Frankfurt, Hamburg, Cologne, Stuttgart, and remote German teams.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) working hours.',
  techSnippet: 'German enterprise .NET stack: ASP.NET Core · Azure Germany · GDPR-compliant .NET · EF Core · Enterprise modernization · Semantic Kernel · SAP integration.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Germany', 'Central European Time (CET/CEST)'),
  useCasesSection: {
    title: 'German .NET Project Scenarios We Support',
    cases: [
      'German automotive .NET project — real-time data processing, Azure IoT integration, production-critical API',
      'German bank ASP.NET Core service — BaFin compliance, PSD2 API, secure Azure deployment, audit logging',
      'Mittelstand enterprise .NET modernization — .NET Framework 4.8 to .NET 10, legacy WCF to REST migration',
      'German SaaS company microservices — Azure Container Apps, Service Bus, multi-tenant CQRS architecture',
      'GDPR-compliant .NET data pipeline — data masking, PII handling, Azure Key Vault, audit trails',
      'Berlin tech startup .NET project — clean architecture, EF Core, Azure deployment, Blazor frontend',
      'German consulting project .NET deployment — Deloitte Germany, Accenture Germany, Capgemini Germany',
      'Munich or Frankfurt .NET technical interview — German enterprise or multinational tech round',
    ],
  },
  proxySection: {
    title: '.NET Interview Proxy Support for German Roles',
    intro:
      'Facing a .NET technical interview at a German bank, enterprise software company, or Berlin/Munich tech firm? Our experts provide real-time guidance understanding German enterprise and regulatory context.',
    points: [
      'German banking .NET interviews — Deutsche Bank, Commerzbank, DZ Bank, HypoVereinsbank formats',
      'German enterprise software .NET rounds — SAP, Siemens, Bosch, Deutsche Telekom .NET teams',
      'Berlin/Munich startup .NET technical screens',
      'German consulting firm .NET interviews — Capgemini Germany, Accenture Germany, TCS Germany',
      'GDPR, BaFin compliance, and secure .NET architecture discussion rounds',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Netherlands', href: '/netherlands-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support Germany', href: '/job-support-germany/' },
      { label: 'Berlin .NET Job Support', href: '/berlin-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in Germany? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for German developers. Enterprise, automotive, banking, and GDPR-compliant .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 7 — Netherlands country
export const netherlandsDotnetJobSupport: LandingPageConfig = {
  slug: 'netherlands-dotnet-job-support',
  title: '.NET Job Support in Netherlands | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Netherlands. ASP.NET Core, Azure, .NET 10, Amsterdam tech hub, fintech .NET, GDPR, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/netherlands-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Netherlands', 'ASP.NET Core job support Netherlands', 'Azure .NET support Netherlands',
    '.NET developer help Netherlands', '.NET interview proxy Netherlands', 'Amsterdam .NET job support',
  ],
  heroEyebrow: '.NET Job Support — Netherlands',
  h1: '.NET Job Support in Netherlands — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Amsterdam and Rotterdam are major European tech hubs with a strong .NET presence across fintech, logistics, and enterprise software. Our experts align with CET/CEST and support Dutch developers remotely.',
  painIntro:
    'The Netherlands hosts major .NET deployments — ING, ABN AMRO, Rabobank, ASML vendor systems, Philips, and a growing SaaS ecosystem. GDPR compliance, Azure West Europe, and enterprise .NET architecture are daily realities for Dutch .NET developers.',
  heroVariant:
    'We help Dutch .NET developers with live project help — ASP.NET Core microservices, Azure West Europe deployment, GDPR-compliant data pipelines, EF Core performance, Semantic Kernel for fintech AI, and .NET interview proxy support for Amsterdam, Rotterdam, and Eindhoven tech roles.',
  geoLine: 'Supporting .NET developers across Netherlands — Amsterdam, Rotterdam, Eindhoven, Utrecht, The Hague, and remote Dutch teams.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) working hours.',
  techSnippet: 'Dutch enterprise stack: ASP.NET Core · Azure West Europe · GDPR .NET · Fintech .NET · EF Core · Microservices · Semantic Kernel.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Netherlands', 'CET/CEST'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Germany', href: '/germany-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support Netherlands', href: '/job-support-netherlands/' },
      { label: 'Amsterdam .NET Job Support', href: '/amsterdam-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in Netherlands? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for Dutch developers. Fintech, logistics, and enterprise .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 8 — France country
export const franceDotnetJobSupport: LandingPageConfig = {
  slug: 'france-dotnet-job-support',
  title: '.NET Job Support in France | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in France. ASP.NET Core, Azure, .NET 10, Paris tech hub, enterprise modernization, GDPR, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/france-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support France', 'ASP.NET Core job support France', 'Azure .NET support France',
    '.NET developer help France', '.NET interview proxy France', 'Paris .NET job support',
  ],
  heroEyebrow: '.NET Job Support — France',
  h1: '.NET Job Support in France — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'French enterprise .NET deployments across banking, insurance, retail, and aerospace demand precision and RGPD (GDPR) compliance. Our experts align with CET/CEST and support French developers remotely.',
  painIntro:
    'France hosts significant .NET deployments — BNP Paribas, Société Générale, AXA, Total Energies, and CAC 40 companies rely on enterprise .NET. RGPD-compliant architecture, Azure France Central, and enterprise modernization are the daily challenges for French .NET developers.',
  heroVariant:
    'We support French .NET developers with live project help — ASP.NET Core microservices, Azure France Central deployment, RGPD-aware data handling, legacy .NET modernization for French enterprises, Semantic Kernel for AI-enabled applications, and .NET interview proxy support for Paris, Lyon, and Toulouse tech roles.',
  geoLine: 'Supporting .NET developers across France — Paris, Lyon, Toulouse, Bordeaux, Nantes, and remote French teams.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) working hours.',
  techSnippet: 'French enterprise stack: ASP.NET Core · Azure France Central · RGPD-compliant .NET · EF Core · Banking .NET · Enterprise modernization · Semantic Kernel.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('France', 'CET/CEST'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Germany', href: '/germany-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'Paris .NET Job Support', href: '/paris-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in France? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for French developers. Banking, insurance, and enterprise .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 9 — Australia country
export const australiaDotnetJobSupport: LandingPageConfig = {
  slug: 'australia-dotnet-job-support',
  title: '.NET Job Support in Australia | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Australia. ASP.NET Core, Azure Australia East, .NET 10, government vendor .NET, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/australia-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Australia', 'ASP.NET Core job support Australia', 'Azure .NET support Australia',
    '.NET developer help Australia', '.NET interview proxy Australia', 'Sydney .NET job support',
  ],
  heroEyebrow: '.NET Job Support — Australia',
  h1: '.NET Job Support in Australia — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Australian government vendor projects, banking systems, and enterprise .NET deployments on Azure Australia East run on ASP.NET Core. Our experts align with AEST/ACST and are available when you need help.',
  painIntro:
    'Australia runs major .NET deployments — Commonwealth Bank, ANZ, NAB, Westpac, Telstra, and large government vendor contracts depend on ASP.NET Core and Azure. Time-zone-aligned .NET expert support has been missing. We fill that gap.',
  heroVariant:
    'We support Australian .NET developers with live project help — Azure Australia East/Southeast deployments, IRAP-aware .NET architectures, My Health Record integrations, Australian banking CQRS systems, Semantic Kernel for enterprise AI, and .NET interview proxy support for Sydney, Melbourne, Brisbane, and Perth .NET roles.',
  geoLine: 'Supporting .NET developers across Australia — Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and remote Australian teams.',
  timezoneNote: 'Aligned with AEST (UTC+10) and ACST/AWST working hours.',
  techSnippet: 'Australian enterprise stack: ASP.NET Core · Azure Australia East · EF Core · Government .NET · Banking .NET · Semantic Kernel · IRAP-aware architecture.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Australia', 'AEST/ACST'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support New Zealand', href: '/new-zealand-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support Australia', href: '/job-support-australia/' },
      { label: 'Sydney .NET Job Support', href: '/sydney-dotnet-job-support/' },
      { label: 'Melbourne .NET Job Support', href: '/melbourne-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in Australia? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for Australian developers. Banking, government vendor, and enterprise .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 10 — New Zealand country
export const newZealandDotnetJobSupport: LandingPageConfig = {
  slug: 'new-zealand-dotnet-job-support',
  title: '.NET Job Support in New Zealand | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in New Zealand. ASP.NET Core, Azure, .NET 10, NZ government vendor projects, enterprise .NET, and .NET interview proxy support.',
  canonical: `${BASE_URL}/new-zealand-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support New Zealand', 'ASP.NET Core job support NZ', 'Azure .NET support New Zealand',
    '.NET developer help NZ', '.NET interview proxy New Zealand', 'Auckland .NET job support',
  ],
  heroEyebrow: '.NET Job Support — New Zealand',
  h1: '.NET Job Support in New Zealand — Real-Time ASP.NET Core & Azure Help',
  tagline: 'New Zealand\'s growing tech sector and government digital transformation rely on ASP.NET Core and Azure. Our experts align with NZST working hours and provide live .NET support.',
  painIntro:
    'NZ government agencies, banks, and enterprise software firms run on .NET. Projects with Azure Australia East or Southeast Asia connectivity, NZ government digital service APIs, and enterprise .NET modernization challenges are a daily reality for NZ .NET developers.',
  heroVariant:
    'We support NZ .NET developers — live ASP.NET Core help, EF Core debugging, Azure connectivity issues, government digital API integration, and .NET interview proxy support for Auckland, Wellington, and Christchurch .NET technical roles.',
  geoLine: 'Supporting .NET developers across New Zealand — Auckland, Wellington, Christchurch, Hamilton, and remote NZ teams.',
  timezoneNote: 'Aligned with New Zealand Standard Time (NZST/NZDT) working hours.',
  techSnippet: 'NZ enterprise stack: ASP.NET Core · Azure Australia East · EF Core · Government .NET · Microservices · Clean Architecture.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('New Zealand', 'NZST/NZDT'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Australia', href: '/australia-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support New Zealand', href: '/job-support-newzealand/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in New Zealand? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core and Azure .NET support for NZ developers. Government vendor, banking, and enterprise .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 11 — Singapore country
export const singaporeDotnetJobSupport: LandingPageConfig = {
  slug: 'singapore-dotnet-job-support',
  title: '.NET Job Support in Singapore | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Singapore. ASP.NET Core, Azure Southeast Asia, .NET 10, banking .NET, government digital transformation, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/singapore-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Singapore', 'ASP.NET Core job support Singapore', 'Azure .NET support Singapore',
    '.NET developer help Singapore', '.NET interview proxy Singapore', 'MAS .NET job support',
  ],
  heroEyebrow: '.NET Job Support — Singapore',
  h1: '.NET Job Support in Singapore — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Singapore\'s financial hub status and Smart Nation initiative drive heavy .NET usage in banking, fintech, government digital services, and enterprise applications. Our experts align with SGT.',
  painIntro:
    'DBS, OCBC, UOB, GovTech Singapore, and hundreds of MAS-regulated fintech companies run on .NET. MAS TRMG compliance, Azure Southeast Asia, and modern .NET AI/ML implementations are everyday challenges for Singapore .NET developers.',
  heroVariant:
    'We support Singapore .NET developers — live ASP.NET Core help, Azure Southeast Asia deployment, MAS TRMG-aware .NET architecture, Semantic Kernel for financial AI, Smart Nation API integrations, and .NET interview proxy support for Singapore banking, fintech, and government digital tech roles.',
  geoLine: 'Supporting .NET developers across Singapore and Southeast Asia.',
  timezoneNote: 'Aligned with Singapore Time (SGT, UTC+8) working hours.',
  techSnippet: 'Singapore fintech stack: ASP.NET Core · Azure Southeast Asia · MAS TRMG-aware .NET · EF Core · Fintech microservices · Semantic Kernel · Smart Nation APIs.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Singapore', 'Singapore Time (SGT)'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Australia', href: '/australia-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'IT Job Support Singapore', href: '/job-support-singapore/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Job Support in Singapore? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for Singapore developers. Banking, fintech, GovTech, and MAS-compliant .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 12 — UAE country
export const uaeDotnetJobSupport: LandingPageConfig = {
  slug: 'uae-dotnet-job-support',
  title: '.NET Job Support in UAE | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in UAE. ASP.NET Core, Azure UAE North, .NET 10, banking .NET, government digital transformation, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/uae-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support UAE', 'ASP.NET Core job support UAE', 'Azure .NET support UAE',
    '.NET developer help UAE', '.NET interview proxy UAE', 'Dubai .NET job support',
  ],
  heroEyebrow: '.NET Job Support — UAE',
  h1: '.NET Job Support in UAE — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'UAE\'s digital transformation ambitions — from DIFC fintech to government smart city projects — run on modern .NET and Azure. Our experts align with GST and support UAE developers remotely.',
  painIntro:
    'Emirates NBD, First Abu Dhabi Bank, Dubai government digital services, ADNOC vendor projects, and hundreds of UAE enterprises run on ASP.NET Core and Azure UAE North. Delivering .NET projects in this market demands real-time expert support.',
  heroVariant:
    'We support UAE .NET developers — live ASP.NET Core help, Azure UAE North deployment, UAE NESA compliance-aware .NET architecture, Semantic Kernel for Arabic and multilingual AI applications, government digital integration, and .NET interview proxy support for Dubai and Abu Dhabi .NET technical roles.',
  geoLine: 'Supporting .NET developers across UAE — Dubai, Abu Dhabi, Sharjah, and remote UAE teams.',
  timezoneNote: 'Aligned with Gulf Standard Time (GST, UTC+4) working hours.',
  techSnippet: 'UAE enterprise stack: ASP.NET Core · Azure UAE North · NESA-aware .NET · EF Core · Banking .NET · Government digital APIs · Semantic Kernel.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('UAE', 'Gulf Standard Time (GST)'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support Saudi Arabia', href: '/saudi-arabia-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need .NET Job Support in UAE? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for UAE developers. Banking, government digital, and enterprise .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// Page 13 — Saudi Arabia country
export const saudiArabiaDotnetJobSupport: LandingPageConfig = {
  slug: 'saudi-arabia-dotnet-job-support',
  title: '.NET Job Support in Saudi Arabia | ASP.NET Core, Azure & AI Real-Time Help',
  description: 'Real-time .NET job support for developers in Saudi Arabia. ASP.NET Core, Azure, .NET 10, Vision 2030 digital projects, banking .NET, Semantic Kernel, and .NET interview proxy support.',
  canonical: `${BASE_URL}/saudi-arabia-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET job support Saudi Arabia', 'ASP.NET Core job support Saudi Arabia', 'Azure .NET support KSA',
    '.NET developer help Saudi Arabia', '.NET interview proxy Saudi Arabia', 'Riyadh .NET job support',
  ],
  heroEyebrow: '.NET Job Support — Saudi Arabia',
  h1: '.NET Job Support in Saudi Arabia — Real-Time ASP.NET Core, Azure & AI Help',
  tagline: 'Saudi Arabia\'s Vision 2030 digital transformation — NEOM, Saudi Digital Academy, government mega-projects — drives massive .NET and Azure demand. Our experts align with AST and support KSA developers remotely.',
  painIntro:
    'Saudi Aramco vendor projects, Saudi banks, MOMRA digital services, and Vision 2030 smart city platforms rely on ASP.NET Core, Azure, and modern .NET AI. Delivering in this market demands expert support aligned to Arabian Standard Time.',
  heroVariant:
    'We support Saudi .NET developers — live ASP.NET Core help, Azure Saudi Arabia North deployment, NCA/SAMA compliance-aware .NET architecture, Semantic Kernel for Arabic language AI, Vision 2030 digital platform integrations, and .NET interview proxy support for Riyadh, Jeddah, and KAUST tech roles.',
  geoLine: 'Supporting .NET developers across Saudi Arabia — Riyadh, Jeddah, Dammam, KAUST, and remote KSA teams.',
  timezoneNote: 'Aligned with Arabian Standard Time (AST, UTC+3) working hours.',
  techSnippet: 'KSA enterprise stack: ASP.NET Core · Azure Saudi Arabia · SAMA/NCA-aware .NET · EF Core · Banking .NET · Vision 2030 digital APIs · Semantic Kernel.',
  highlights: dotnetHighlights,
  faqs: dotnetGeoFaqs('Saudi Arabia', 'Arabian Standard Time (AST)'),
  relatedLinks: {
    geoLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Job Support UAE', href: '/uae-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need .NET Job Support in Saudi Arabia? Get Expert Help Now.',
  bottomCTABody:
    'Real-time ASP.NET Core, Azure, and AI/ML .NET support for Saudi developers. Vision 2030, banking, and enterprise .NET projects covered. WhatsApp or Call: +91 96606 14469.',
};

// ─── Phase A export ───────────────────────────────────────────────────────────

export const dotnetPhaseAPages: LandingPageConfig[] = [
  modernDotnetAzureAiJobSupport,
  usaDotnetJobSupport,
  canadaDotnetJobSupport,
  ukDotnetJobSupport,
  irelandDotnetJobSupport,
  germanyDotnetJobSupport,
  netherlandsDotnetJobSupport,
  franceDotnetJobSupport,
  australiaDotnetJobSupport,
  newZealandDotnetJobSupport,
  singaporeDotnetJobSupport,
  uaeDotnetJobSupport,
  saudiArabiaDotnetJobSupport,
];

// ─── PHASE B: USA City Pages ──────────────────────────────────────────────────

function usaCityDotnetPage(
  slug: string,
  city: string,
  state: string,
  canonical: string,
  localAngle: string,
  useCases: string[],
): LandingPageConfig {
  return {
    slug,
    title: `.NET Job Support in ${city} | ASP.NET Core, Azure & AI Real-Time Help`,
    description: `Real-time .NET job support for developers in ${city}, ${state}. ASP.NET Core, Azure, .NET 10, ${localAngle}, and .NET interview proxy support for ${city} tech roles.`,
    canonical,
    lastmod: LASTMOD,
    keywords: [
      `.NET job support ${city}`, `ASP.NET Core job support ${city}`, `Azure .NET support ${city}`,
      `.NET developer help ${city}`, `.NET interview proxy ${city}`, `real-time .NET support ${city}`,
    ],
    heroEyebrow: `.NET Job Support — ${city}, ${state}`,
    h1: `.NET Job Support in ${city} — Real-Time ASP.NET Core, Azure & AI Help`,
    tagline: `Working on a .NET project in ${city} and stuck on ASP.NET Core, Azure deployment, or .NET AI/ML? Our in-house experts align with ${city} working hours and provide live support.`,
    painIntro: `${city} is a major tech hub with heavy demand for senior .NET developers. Enterprise, healthcare, finance, and government contractor .NET roles run on ASP.NET Core and Azure. When you hit a blocker, you need expert help fast.`,
    heroVariant: `We help ${city} .NET developers with live coding assistance, EF Core debugging, Azure deployment troubleshooting, Semantic Kernel and AI agent implementation, .NET Aspire microservices, CQRS architecture, and proxy interview support for ${city} tech company technical rounds.`,
    geoLine: `Supporting .NET developers in ${city} and across all USA time zones.`,
    timezoneNote: `Aligned with ${city} working hours and all US time zones.`,
    techSnippet: `${city} .NET stack: ASP.NET Core · Azure · .NET 10 · EF Core · Microservices · Semantic Kernel · CQRS · Clean Architecture.`,
    highlights: dotnetHighlights,
    faqs: dotnetGeoFaqs(`${city}, ${state}`, `${city} local time zone`),
    useCasesSection: {
      title: `${city} .NET Job Support Scenarios`,
      cases: useCases,
    },
    relatedLinks: {
      geoLinks: [
        { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
        { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      ],
      techLinks: [
        { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
        { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
        { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
        { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
      ],
      problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
      proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
      additionalLinks: [
        { label: 'IT Job Support USA', href: '/job-support-usa/' },
        { label: '.NET Job Support Guide', href: '/dotnet-job-support-guide/' },
      ],
    },
    bottomCTAHeading: `Need .NET Job Support in ${city}? Get Expert Help Now.`,
    bottomCTABody: `Real-time ASP.NET Core, Azure, and AI/ML .NET support for ${city} developers. Same-day start. WhatsApp or Call: +91 96606 14469.`,
  };
}

export const newYorkDotnetJobSupport = usaCityDotnetPage(
  'new-york-dotnet-job-support', 'New York', 'NY',
  `${BASE_URL}/new-york-dotnet-job-support/`,
  'Wall Street fintech .NET, healthcare .NET, and enterprise Azure microservices',
  [
    'Wall Street fintech ASP.NET Core service — payment processing, trading system API, compliance logging',
    'NYC healthcare .NET project — Epic integration, FHIR R4, Azure Health Data Services, HIPAA compliance',
    'Large enterprise .NET microservices — Azure Service Bus, Event Grid, Cosmos DB in a NYC banking context',
    'NYC consulting firm .NET project — Deloitte, Accenture, EY, KPMG New York .NET delivery',
    'NYC tech company .NET interview — system design, clean architecture, Azure cloud design round',
  ],
);

export const dallasDotnetJobSupport = usaCityDotnetPage(
  'dallas-dotnet-job-support', 'Dallas', 'TX',
  `${BASE_URL}/dallas-dotnet-job-support/`,
  'telecom .NET, healthcare .NET, and enterprise Azure cloud',
  [
    'Dallas telecom .NET project — AT&T, Ericsson, Nokia vendor .NET integration or production support',
    'Dallas healthcare IT .NET project — Texas Health Resources, Baylor Scott & White vendor .NET apps',
    'Insurance and financial services .NET — State Farm, Allstate, regional bank ASP.NET Core services',
    'DFW consulting firm .NET delivery — CGI, Cognizant, Infosys Dallas .NET project support',
    'Dallas .NET technical interview — system design or coding round for a Texas enterprise or tech company',
  ],
);

export const chicagoDotnetJobSupport = usaCityDotnetPage(
  'chicago-dotnet-job-support', 'Chicago', 'IL',
  `${BASE_URL}/chicago-dotnet-job-support/`,
  'Chicago fintech .NET, insurance .NET, and manufacturing enterprise systems',
  [
    'Chicago fintech ASP.NET Core service — trading platforms, derivatives systems, or payments microservices',
    'Chicago insurance .NET project — Allstate, CNA, Zurich North America enterprise backend',
    'Chicago manufacturing .NET — Caterpillar, Illinois Tool Works, or Motorola vendor project support',
    'Chicago healthcare .NET — Northwestern Medicine, Rush, Advocate Aurora .NET vendor apps',
    'Chicago tech company .NET interview — Morningstar, CDW, or Salesforce Chicago technical round',
  ],
);

export const atlantaDotnetJobSupport = usaCityDotnetPage(
  'atlanta-dotnet-job-support', 'Atlanta', 'GA',
  `${BASE_URL}/atlanta-dotnet-job-support/`,
  'Atlanta fintech .NET, Coca-Cola vendor projects, and AWS/Azure cloud-native .NET',
  [
    'Atlanta fintech ASP.NET Core — NCR, Global Payments, Fiserv, or Cardlytics .NET project support',
    'Atlanta healthcare .NET — Grady Health, Emory, Piedmont Healthcare vendor .NET apps',
    'Atlanta Fortune 500 .NET project — Coca-Cola, Home Depot, UPS, Delta Air Lines .NET systems',
    'Georgia Tech or Atlanta startup .NET project — cloud-native architecture, Azure deployment help',
    'Atlanta .NET technical interview — coding round or system design for an Atlanta enterprise role',
  ],
);

export const houstonDotnetJobSupport = usaCityDotnetPage(
  'houston-dotnet-job-support', 'Houston', 'TX',
  `${BASE_URL}/houston-dotnet-job-support/`,
  'Houston energy sector .NET, healthcare .NET, and enterprise Azure integration',
  [
    'Houston energy .NET project — Shell, BP, Chevron, Halliburton vendor .NET apps or Azure integration',
    'Houston healthcare .NET — MD Anderson Cancer Center, Houston Methodist vendor .NET support',
    'Houston industrial IoT .NET — sensor data pipelines, Azure IoT Hub, time-series processing',
    'Houston consulting .NET project — Deloitte, Accenture, KPMG Houston energy or healthcare delivery',
    'Houston .NET technical interview — Senior .NET Developer or Azure .NET Architect round',
  ],
);

export const austinDotnetJobSupport = usaCityDotnetPage(
  'austin-dotnet-job-support', 'Austin', 'TX',
  `${BASE_URL}/austin-dotnet-job-support/`,
  'Austin tech startup .NET, Dell/Apple vendor projects, and AI/ML .NET development',
  [
    'Austin tech startup ASP.NET Core project — SaaS microservices, multi-tenant architecture, Azure deployment',
    'Dell or Tesla Austin .NET vendor project — enterprise backend, Azure integration, IoT .NET support',
    'Austin AI company .NET project — Semantic Kernel, Azure AI Foundry, RAG pipeline in .NET',
    'Austin gaming or media .NET project — SignalR real-time features, Blazor frontend, Azure CDN',
    'Austin .NET technical interview — coding round or system design at a tech company or startup',
  ],
);

export const charlotteDotnetJobSupport = usaCityDotnetPage(
  'charlotte-dotnet-job-support', 'Charlotte', 'NC',
  `${BASE_URL}/charlotte-dotnet-job-support/`,
  'Charlotte banking .NET, Bank of America and Wells Fargo tech, and healthcare .NET',
  [
    'Charlotte banking ASP.NET Core — Bank of America, Wells Fargo, Truist, or LendingTree .NET service',
    'Charlotte financial services .NET — compliance API, reporting microservice, EF Core production issue',
    'Charlotte healthcare .NET — Atrium Health, Novant Health vendor .NET application support',
    'Charlotte insurance .NET project — Lincoln Financial, Brighthouse Financial .NET backend',
    'Charlotte .NET technical interview — Senior .NET Developer round at a Charlotte bank or fintech',
  ],
);

export const phoenixDotnetJobSupport = usaCityDotnetPage(
  'phoenix-dotnet-job-support', 'Phoenix', 'AZ',
  `${BASE_URL}/phoenix-dotnet-job-support/`,
  'Phoenix healthcare .NET, fintech .NET, and enterprise Azure cloud deployments',
  [
    'Phoenix healthcare .NET — Banner Health, Honor Health, Dignity Health vendor .NET apps',
    'Phoenix fintech .NET — Western Union, Avnet, or local fintech ASP.NET Core microservice',
    'Phoenix insurance .NET — Allied Healthcare, State Farm Phoenix operations .NET backend',
    'Phoenix semiconductor .NET — Intel Phoenix operations, ON Semiconductor vendor project',
    'Phoenix .NET technical interview — coding round or system design at a Phoenix tech company',
  ],
);

export const seattleDotnetJobSupport = usaCityDotnetPage(
  'seattle-dotnet-job-support', 'Seattle', 'WA',
  `${BASE_URL}/seattle-dotnet-job-support/`,
  'Microsoft campus .NET roles, Amazon/Boeing vendor projects, and cutting-edge AI/ML .NET',
  [
    'Microsoft Seattle .NET project — Azure product team, Office 365, or Dynamics 365 integration support',
    'Amazon Seattle .NET vendor project — AWS SDK .NET, Azure integration, or Alexa .NET backend',
    'Boeing .NET project — aerospace engineering data system, Azure Industrial IoT, safety-critical .NET',
    'Seattle fintech .NET — Starbucks tech, Expedia, or Zillow ASP.NET Core service support',
    'Seattle AI/ML .NET project — Semantic Kernel, Azure AI Foundry, OpenAI SDK in .NET',
    'Microsoft technical interview — .NET system design, C# deep dive, or Azure architecture round',
  ],
);

export const sanFranciscoDotnetJobSupport = usaCityDotnetPage(
  'san-francisco-dotnet-job-support', 'San Francisco', 'CA',
  `${BASE_URL}/san-francisco-dotnet-job-support/`,
  'SF fintech .NET, Salesforce vendor projects, and AI/ML .NET startups',
  [
    'San Francisco fintech .NET — Stripe, Square, Visa, Wells Fargo SF, or Salesforce .NET integration',
    'SF AI startup .NET project — Semantic Kernel, Azure OpenAI, RAG pipeline, AI agent orchestration',
    'SF tech company .NET vendor project — Salesforce, Oracle, or Adobe ASP.NET Core service support',
    'SF healthcare .NET — UCSF, Kaiser Permanente SF tech vendor .NET application support',
    'SF .NET technical interview — coding round or system design at a Bay Area tech company',
  ],
);

export const losAngelesDotnetJobSupport = usaCityDotnetPage(
  'los-angeles-dotnet-job-support', 'Los Angeles', 'CA',
  `${BASE_URL}/los-angeles-dotnet-job-support/`,
  'LA entertainment tech .NET, healthcare .NET, and defense contractor .NET projects',
  [
    'LA entertainment tech .NET — Disney, Warner Bros, NBCUniversal .NET streaming or media service',
    'LA defense contractor .NET — Northrop Grumman, Raytheon, SpaceX vendor .NET backend support',
    'LA healthcare .NET — Cedars-Sinai, UCLA Health, Kaiser LA vendor .NET application help',
    'LA fintech .NET — PayPal LA, or local fintech ASP.NET Core microservice production support',
    'LA .NET technical interview — coding round at a Hollywood tech company or LA enterprise',
  ],
);

export const bostonDotnetJobSupport = usaCityDotnetPage(
  'boston-dotnet-job-support', 'Boston', 'MA',
  `${BASE_URL}/boston-dotnet-job-support/`,
  'Boston biotech .NET, healthcare .NET, and MIT/Harvard tech ecosystem .NET roles',
  [
    'Boston biotech .NET project — Moderna, Biogen, or Sanofi vendor .NET lab data or clinical system',
    'Boston healthcare .NET — Mass General, Partners Healthcare, or Beth Israel vendor .NET apps',
    'Boston fintech .NET — Fidelity, Liberty Mutual, or State Street ASP.NET Core service support',
    'Boston startup .NET — MIT/Harvard ecosystem, Azure cloud-native architecture, AI/ML .NET project',
    'Boston .NET technical interview — coding round at a Boston biotech, fintech, or tech company',
  ],
);

export const washingtonDcDotnetJobSupport = usaCityDotnetPage(
  'washington-dc-dotnet-job-support', 'Washington DC', 'DC',
  `${BASE_URL}/washington-dc-dotnet-job-support/`,
  'federal government .NET, defense contractor .NET, and AWS GovCloud/.NET Azure Government',
  [
    'Federal government .NET contract — GSA, DoD, HHS, or VA vendor .NET system on Azure Government',
    'DC defense contractor .NET — Booz Allen Hamilton, SAIC, Leidos, or MITRE .NET application support',
    'DC consultancy .NET project — Deloitte Federal, Accenture Federal, PwC Government .NET delivery',
    'DC healthcare .NET — NIH, FDA, CMS .NET vendor application or Azure FedRAMP deployment support',
    'DC .NET interview — FedRAMP-aware .NET architecture, Azure Government, security clearance role',
  ],
);

export const jerseyCityDotnetJobSupport = usaCityDotnetPage(
  'jersey-city-dotnet-job-support', 'Jersey City', 'NJ',
  `${BASE_URL}/jersey-city-dotnet-job-support/`,
  'Wall Street adjacent .NET, Goldman Sachs/JPMorgan vendor projects, and financial services .NET',
  [
    'Jersey City Wall Street .NET — Goldman Sachs, JPMorgan Chase, or Morgan Stanley .NET service support',
    'NJ financial services .NET — insurance, asset management, or trading platform ASP.NET Core help',
    'Jersey City healthcare .NET — CarePoint Health, RWJBarnabas vendor .NET application support',
    'NJ pharma .NET — Johnson & Johnson, Merck, or Roche NJ .NET lab or business system support',
    'Jersey City .NET interview — Goldman Sachs, JPMorgan, or NJ enterprise .NET technical round',
  ],
);

export const tampaDotnetJobSupport = usaCityDotnetPage(
  'tampa-dotnet-job-support', 'Tampa', 'FL',
  `${BASE_URL}/tampa-dotnet-job-support/`,
  'Tampa fintech .NET, healthcare .NET, and defense contractor .NET projects',
  [
    'Tampa fintech .NET — Raymond James, Syniverse, or WellCare Health Plans .NET backend support',
    'Tampa healthcare .NET — Tampa General Hospital, BayCare Health System vendor .NET apps',
    'Tampa defense .NET — MacDill AFB vendor project, defense contractor ASP.NET Core service',
    'Tampa insurance .NET — Hernando County, local insurance enterprise .NET application support',
    'Tampa .NET technical interview — coding round or system design at a Tampa enterprise company',
  ],
);

export const dotnetPhaseBPages: LandingPageConfig[] = [
  newYorkDotnetJobSupport,
  dallasDotnetJobSupport,
  chicagoDotnetJobSupport,
  atlantaDotnetJobSupport,
  houstonDotnetJobSupport,
  austinDotnetJobSupport,
  charlotteDotnetJobSupport,
  phoenixDotnetJobSupport,
  seattleDotnetJobSupport,
  sanFranciscoDotnetJobSupport,
  losAngelesDotnetJobSupport,
  bostonDotnetJobSupport,
  washingtonDcDotnetJobSupport,
  jerseyCityDotnetJobSupport,
  tampaDotnetJobSupport,
];

// ─── PHASE C: Canada, UK, Europe, Australia City Pages ───────────────────────

function intlCityDotnetPage(
  slug: string,
  city: string,
  country: string,
  countrySlug: string,
  canonical: string,
  localAngle: string,
  useCases: string[],
  tz: string,
): LandingPageConfig {
  return {
    slug,
    title: `.NET Job Support in ${city} | ASP.NET Core, Azure & AI Real-Time Help`,
    description: `Real-time .NET job support for developers in ${city}, ${country}. ASP.NET Core, Azure, .NET 10, ${localAngle}, and .NET interview proxy support for ${city} tech roles.`,
    canonical,
    lastmod: LASTMOD,
    keywords: [
      `.NET job support ${city}`, `ASP.NET Core job support ${city}`, `Azure .NET support ${city}`,
      `.NET developer help ${city}`, `.NET interview proxy ${city}`,
    ],
    heroEyebrow: `.NET Job Support — ${city}`,
    h1: `.NET Job Support in ${city} — Real-Time ASP.NET Core, Azure & AI Help`,
    tagline: `Working on a .NET project in ${city} and stuck? Our in-house .NET experts align with ${tz} and provide live ASP.NET Core, Azure, and AI/ML support.`,
    painIntro: `${city} is a major tech hub with significant .NET demand across enterprise, banking, healthcare, and government sectors. Our experts support you in real time — no waiting.`,
    heroVariant: `We help ${city} .NET developers with live project support — ASP.NET Core, EF Core, Azure deployment, Semantic Kernel, CQRS, clean architecture, and .NET interview proxy support for ${city} technical rounds.`,
    geoLine: `Supporting .NET developers in ${city} and across ${country}.`,
    timezoneNote: `Aligned with ${tz} working hours.`,
    techSnippet: `${city} .NET stack: ASP.NET Core · Azure · .NET 10 · EF Core · Microservices · Clean Architecture · Semantic Kernel.`,
    highlights: dotnetHighlights,
    faqs: dotnetGeoFaqs(`${city}, ${country}`, tz),
    useCasesSection: {
      title: `${city} .NET Job Support Scenarios`,
      cases: useCases,
    },
    relatedLinks: {
      geoLinks: [
        { label: `.NET Job Support ${country}`, href: `/${countrySlug}-dotnet-job-support/` },
        { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      ],
      techLinks: [
        { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
        { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
        { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
        { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
      ],
      problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
      proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    },
    bottomCTAHeading: `Need .NET Job Support in ${city}? Get Expert Help Now.`,
    bottomCTABody: `Real-time ASP.NET Core, Azure, and AI/ML .NET support for ${city} developers. Same-day start. WhatsApp or Call: +91 96606 14469.`,
  };
}

export const torontoDotnetJobSupport = intlCityDotnetPage(
  'toronto-dotnet-job-support', 'Toronto', 'Canada', 'canada',
  `${BASE_URL}/toronto-dotnet-job-support/`,
  'Canadian banking .NET, RBC/TD/BMO fintech, and Ontario enterprise systems',
  [
    'Toronto banking .NET — RBC, TD, BMO, CIBC, or Scotiabank ASP.NET Core microservice support',
    'Toronto insurance .NET — Manulife, Sun Life, Great-West Life .NET backend production help',
    'Ontario government .NET vendor project — ServiceOntario digital services, Azure deployment',
    'Toronto fintech startup ASP.NET Core — KOHO, Wealthsimple, EQ Bank .NET microservice',
    'Toronto .NET technical interview — coding round or system design at a Toronto bank or tech firm',
  ],
  'Eastern Time (ET)',
);

export const vancouverDotnetJobSupport = intlCityDotnetPage(
  'vancouver-dotnet-job-support', 'Vancouver', 'Canada', 'canada',
  `${BASE_URL}/vancouver-dotnet-job-support/`,
  'Vancouver tech startup .NET, gaming industry .NET, and BC enterprise systems',
  [
    'Vancouver gaming .NET — EA, Hootsuite, or local gaming studio ASP.NET Core backend service',
    'Vancouver tech startup .NET — Slack, Hootsuite, or D-Wave vendor .NET project support',
    'BC government .NET vendor project — BC Services Card, digital services, Azure deployment',
    'Vancouver mining or energy .NET — Teck, Westshore Terminals .NET operational system',
    'Vancouver .NET technical interview — coding round at a Vancouver tech company or enterprise',
  ],
  'Pacific Time (PT)',
);

export const calgaryDotnetJobSupport = intlCityDotnetPage(
  'calgary-dotnet-job-support', 'Calgary', 'Canada', 'canada',
  `${BASE_URL}/calgary-dotnet-job-support/`,
  'Calgary energy sector .NET, Enbridge/TC Energy vendor projects, and Alberta enterprise',
  [
    'Calgary energy .NET — Enbridge, TC Energy, Cenovus, or Suncor vendor .NET application support',
    'Alberta government .NET vendor project — MyAlberta Digital Services, Azure deployment help',
    'Calgary financial .NET — ATB Financial, or local insurance company ASP.NET Core service',
    'Calgary tech startup .NET project — cloud-native architecture, EF Core, Azure integration',
    'Calgary .NET interview — coding round or system design for a Calgary energy or enterprise role',
  ],
  'Mountain Time (MT)',
);

export const londonDotnetJobSupport = intlCityDotnetPage(
  'london-dotnet-job-support', 'London', 'UK', 'uk',
  `${BASE_URL}/london-dotnet-job-support/`,
  'London fintech .NET, Barclays/HSBC/Lloyds tech, and City of London enterprise .NET',
  [
    'London fintech .NET — Barclays, HSBC, Lloyds, Standard Chartered ASP.NET Core microservice support',
    'London consulting .NET — Deloitte UK, Accenture UK, KPMG, PwC London .NET delivery',
    'City of London investment bank .NET — Goldman Sachs, JP Morgan, Morgan Stanley London tech',
    'London NHS tech supplier .NET — NHS Digital, NHS England vendor .NET or FHIR API integration',
    'London .NET technical interview — coding round at Barclays, HSBC, or a London fintech company',
  ],
  'UK GMT/BST',
);

export const manchesterDotnetJobSupport = intlCityDotnetPage(
  'manchester-dotnet-job-support', 'Manchester', 'UK', 'uk',
  `${BASE_URL}/manchester-dotnet-job-support/`,
  'Manchester digital economy .NET, Co-op Group vendor projects, and Northern UK enterprise',
  [
    'Manchester enterprise .NET — Co-op Group, AO.com, THG, or PZ Cussons .NET backend support',
    'Manchester financial .NET — HSBC Manchester, insurance sector ASP.NET Core service help',
    'Manchester NHS .NET — Manchester NHS Digital, or health authority .NET vendor application',
    'Manchester tech company .NET — AutoTrader, ON THE BEACH, or startup ASP.NET Core project',
    'Manchester .NET interview — technical screen or system design round at a Manchester tech company',
  ],
  'UK GMT/BST',
);

export const birminghamDotnetJobSupport = intlCityDotnetPage(
  'birmingham-dotnet-job-support', 'Birmingham', 'UK', 'uk',
  `${BASE_URL}/birmingham-dotnet-job-support/`,
  'Birmingham manufacturing .NET, financial services .NET, and West Midlands enterprise',
  [
    'Birmingham manufacturing .NET — Jaguar Land Rover, or West Midlands supplier .NET system',
    'Birmingham financial .NET — HSBC Birmingham, Lloyds Birmingham, local insurer ASP.NET Core help',
    'Birmingham NHS .NET — University Hospitals Birmingham, or West Midlands health system vendor app',
    'Birmingham tech startup .NET — enterprise SaaS, Azure deployment, EF Core performance issue',
    'Birmingham .NET interview — coding round or system design at a Birmingham enterprise company',
  ],
  'UK GMT/BST',
);

export const dublinDotnetJobSupport = intlCityDotnetPage(
  'dublin-dotnet-job-support', 'Dublin', 'Ireland', 'ireland',
  `${BASE_URL}/dublin-dotnet-job-support/`,
  'Dublin tech hub .NET, Microsoft/Google/LinkedIn EMEA offices, and Irish fintech .NET',
  [
    'Dublin Microsoft EMEA .NET project — Azure, Office 365, Dynamics 365 integration or extension',
    'Dublin fintech .NET — Stripe Dublin, TransferMate, Fexco, or AIB digital .NET service',
    'Dublin Google/Meta EMEA .NET vendor project — enterprise backend or data integration support',
    'Dublin government .NET — Revenue Commissioners, Department of Finance digital services .NET',
    'Dublin .NET technical interview — Microsoft, Google, Salesforce, or LinkedIn Dublin technical round',
  ],
  'Irish IST/GMT',
);

export const berlinDotnetJobSupport = intlCityDotnetPage(
  'berlin-dotnet-job-support', 'Berlin', 'Germany', 'germany',
  `${BASE_URL}/berlin-dotnet-job-support/`,
  'Berlin tech startup .NET, Delivery Hero/Zalando vendor projects, and German enterprise .NET',
  [
    'Berlin tech startup ASP.NET Core — Zalando, Delivery Hero, or HelloFresh .NET service support',
    'Berlin enterprise .NET — Deutsche Bahn, Siemens Berlin, or Volkswagen Group digital .NET',
    'Berlin fintech .NET — N26, Trade Republic, or Solarisbank ASP.NET Core microservice support',
    'Berlin government .NET — German federal digital agency, GDPR-compliant .NET architecture',
    'Berlin .NET technical interview — coding round or system design at a Berlin tech company',
  ],
  'CET/CEST',
);

export const amsterdamDotnetJobSupport = intlCityDotnetPage(
  'amsterdam-dotnet-job-support', 'Amsterdam', 'Netherlands', 'netherlands',
  `${BASE_URL}/amsterdam-dotnet-job-support/`,
  'Amsterdam fintech .NET, ING/ABN AMRO tech, and Dutch SaaS enterprise .NET',
  [
    'Amsterdam banking .NET — ING, ABN AMRO, or Rabobank ASP.NET Core microservice production support',
    'Amsterdam SaaS .NET — Booking.com, Adyen, TomTom, or ASML vendor .NET application support',
    'Amsterdam fintech .NET — Mollie, Adyen, or Bunq ASP.NET Core service or Azure integration',
    'Amsterdam GDPR .NET — GDPR-compliant data pipeline, Azure West Europe, PII masking, audit logging',
    'Amsterdam .NET technical interview — coding round at ING, Booking.com, or an Amsterdam startup',
  ],
  'CET/CEST',
);

export const parisDotnetJobSupport = intlCityDotnetPage(
  'paris-dotnet-job-support', 'Paris', 'France', 'france',
  `${BASE_URL}/paris-dotnet-job-support/`,
  'Paris enterprise .NET, BNP Paribas/AXA tech, and French digital economy .NET',
  [
    'Paris banking .NET — BNP Paribas, Société Générale, Crédit Agricole ASP.NET Core microservice',
    'Paris insurance .NET — AXA, Allianz France, Groupama .NET backend production issue support',
    'Paris enterprise .NET — TotalEnergies, LVMH, Capgemini France .NET project delivery support',
    'Paris RGPD .NET — GDPR/RGPD-compliant ASP.NET Core data handling, Azure France Central',
    'Paris .NET technical interview — coding round at a Paris bank, insurance firm, or tech company',
  ],
  'CET/CEST',
);

export const sydneyDotnetJobSupport = intlCityDotnetPage(
  'sydney-dotnet-job-support', 'Sydney', 'Australia', 'australia',
  `${BASE_URL}/sydney-dotnet-job-support/`,
  'Sydney fintech .NET, CBA/ANZ/NAB tech, and NSW government vendor .NET projects',
  [
    'Sydney banking .NET — Commonwealth Bank, ANZ, NAB, Westpac ASP.NET Core microservice support',
    'Sydney fintech .NET — Afterpay, Zip, Macquarie Bank .NET service or Azure Australia East deployment',
    'NSW government .NET — Service NSW, digital identity, or government vendor .NET application help',
    'Sydney healthcare .NET — NSW Health, private hospital vendor .NET integration support',
    'Sydney .NET technical interview — coding round at CBA, ANZ, or a Sydney tech company',
  ],
  'AEST',
);

export const melbourneDotnetJobSupport = intlCityDotnetPage(
  'melbourne-dotnet-job-support', 'Melbourne', 'Australia', 'australia',
  `${BASE_URL}/melbourne-dotnet-job-support/`,
  'Melbourne banking .NET, ANZ tech hub, and Victorian government vendor .NET',
  [
    'Melbourne banking .NET — ANZ headquarters, NAB Melbourne, or Bendigo Bank .NET service support',
    'Melbourne insurance .NET — IAG, TAL, QBE Melbourne .NET backend production issue help',
    'Victorian government .NET — Service Victoria, Vic Roads, or Vic Health vendor .NET application',
    'Melbourne consulting .NET — Deloitte Australia, Accenture, KPMG Melbourne .NET project delivery',
    'Melbourne .NET technical interview — coding round at ANZ, IAG, or a Melbourne enterprise company',
  ],
  'AEST',
);

export const dotnetPhaseCPages: LandingPageConfig[] = [
  torontoDotnetJobSupport,
  vancouverDotnetJobSupport,
  calgaryDotnetJobSupport,
  londonDotnetJobSupport,
  manchesterDotnetJobSupport,
  birminghamDotnetJobSupport,
  dublinDotnetJobSupport,
  berlinDotnetJobSupport,
  amsterdamDotnetJobSupport,
  parisDotnetJobSupport,
  sydneyDotnetJobSupport,
  melbourneDotnetJobSupport,
];

// ─── PHASE D: Core .NET Technology Pages ─────────────────────────────────────

const dotnetTechHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET Technology Support',
    description:
      'Live expert help for your specific .NET technology — ASP.NET Core, C#, EF Core, Blazor, SignalR, gRPC, and more — during your working hours so you deliver on schedule.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Immediate hands-on help for production bugs, performance issues, deployment failures, and architecture problems in your .NET application — often resolved in the same session.',
  },
  {
    title: '.NET Interview Proxy Assistance',
    description:
      'Real-time guidance during live .NET technical interview rounds — coding, system design, and domain-specific questions for senior .NET developer and architect roles.',
  },
];

export const aspnetCoreJobSupport: LandingPageConfig = {
  slug: 'aspnet-core-job-support',
  title: 'ASP.NET Core Job Support | Real-Time Help for ASP.NET Core Developers',
  description: 'Real-time ASP.NET Core job support for developers. Middleware, DI, minimal APIs, Web API, Blazor, authentication, EF Core, Azure deployment debugging, and proxy interview support.',
  canonical: `${BASE_URL}/aspnet-core-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'ASP.NET Core job support', 'ASP.NET Core developer help', 'ASP.NET Core production support',
    'ASP.NET Core interview proxy', 'ASP.NET Core debugging', 'ASP.NET Core Azure support',
  ],
  heroEyebrow: 'ASP.NET Core Job Support',
  h1: 'ASP.NET Core Job Support — Real-Time Expert Help for ASP.NET Core Developers',
  tagline: 'Stuck on an ASP.NET Core middleware issue, authentication problem, API design question, or production bug? Our in-house ASP.NET Core experts are available right now.',
  painIntro:
    'ASP.NET Core is the foundation of modern .NET development — but middleware pipeline ordering, DI container configuration, request validation, async patterns, EF Core integration, and Azure deployment all have sharp edges. When you are blocked, production cannot wait.',
  heroVariant:
    'We help ASP.NET Core developers with middleware configuration, dependency injection, model binding, validation, authentication/authorization (JWT, Entra ID, OAuth), Web API design, Minimal APIs, Blazor, SignalR, gRPC, EF Core, Azure App Service deployment, Kubernetes, and CI/CD pipeline issues. Senior .NET interview proxy support also available.',
  geoLine: 'Supporting ASP.NET Core developers across USA, UK, Canada, Ireland, Europe, Australia, Singapore, UAE, and globally.',
  timezoneNote: 'Available 24/7 — aligned with US, UK, EU, and APAC working hours.',
  techSnippet: 'ASP.NET Core coverage: Middleware · DI · Minimal APIs · Web API · Authentication · EF Core · Blazor · SignalR · gRPC · Azure deployment · Clean Architecture.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('ASP.NET Core', 'middleware debugging, DI configuration, request pipeline issues, authentication, EF Core integration, Azure deployment, and API design'),
  useCasesSection: {
    title: 'Real ASP.NET Core Problems We Solve',
    cases: [
      'Middleware pipeline ordering causing CORS, authentication, or exception handling to fail silently',
      'DI container misconfiguration — scoped service in singleton, or circular dependency causing runtime error',
      'Minimal API endpoint not routing correctly, or model binding failing for complex request types',
      'JWT authentication not validating correctly, or Entra ID integration returning 401 in production',
      'EF Core N+1 query explosion detected under load — navigation property eager loading needed',
      'ASP.NET Core health check endpoint returning unhealthy on Azure App Service warm-up',
      'Blazor component not re-rendering after state update, or SignalR connection dropping under load',
      'gRPC service returning deadline exceeded or unavailable status in Kubernetes environment',
      'Rate limiting middleware causing unexpected 429 for legitimate traffic patterns',
      'Senior .NET Developer interview round — architecture, coding, and system design preparation',
    ],
  },
  proxySection: {
    title: 'ASP.NET Core Interview Proxy Support',
    intro:
      'Facing a Senior .NET Developer or ASP.NET Core Architect interview? Our experts provide real-time guidance during your live technical round — coding, middleware design, API architecture, EF Core, and Azure deployment questions.',
    points: [
      'Middleware pipeline design and request lifecycle questions',
      'Web API and Minimal API design — REST principles, versioning, validation',
      'Authentication and authorization — JWT, Entra ID, OAuth, policy-based auth',
      'EF Core deep dives — migrations, performance, relationships, LINQ',
      'Clean architecture, CQRS with MediatR, repository pattern in ASP.NET Core',
      'Azure App Service, AKS, or Azure Container Apps deployment architecture',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: '.NET Job Support UK', href: '/uk-dotnet-job-support/' },
    ],
    techLinks: [
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'ASP.NET Core Interview Proxy', href: '/aspnet-core-interview-proxy-support/' },
    additionalLinks: [
      { label: '.NET Job Support Guide', href: '/dotnet-job-support-guide/' },
      { label: 'C# Job Support', href: '/csharp-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need ASP.NET Core Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time ASP.NET Core help from in-house experts. Middleware, DI, API design, EF Core, Azure deployment, and interview proxy support. WhatsApp or Call: +91 96606 14469.',
};

export const dotnet10JobSupport: LandingPageConfig = {
  slug: 'dotnet-10-job-support',
  title: '.NET 10 Job Support | Real-Time Help for .NET 10 Developers',
  description: 'Real-time .NET 10 job support. New .NET 10 features, ASP.NET Core 10, C# 14, performance improvements, Azure deployment, migration from earlier .NET versions, and interview proxy support.',
  canonical: `${BASE_URL}/dotnet-10-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET 10 job support', '.NET 10 developer help', '.NET 10 support', 'ASP.NET Core 10 support',
    'C# 14 job support', '.NET 10 migration support', '.NET 10 interview proxy',
  ],
  heroEyebrow: '.NET 10 Job Support',
  h1: '.NET 10 Job Support — Real-Time Expert Help for .NET 10 Applications',
  tagline: 'Building on .NET 10 and running into issues with new features, breaking changes, or performance optimizations? Our experts are current on the .NET 10 release cycle and ready to help.',
  painIntro:
    '.NET 10 (LTS) brings new C# 14 features, ASP.NET Core 10 improvements, EF Core 10 changes, runtime performance updates, and breaking changes from earlier versions. Staying current while delivering production software is genuinely hard.',
  heroVariant:
    'We help developers on .NET 10 with new feature implementation, breaking change resolution, C# 14 syntax, ASP.NET Core 10 middleware and API updates, EF Core 10 query optimization, .NET 10 on Azure deployment, and migration from .NET 8/9 to .NET 10.',
  geoLine: 'Supporting .NET 10 developers across USA, UK, Canada, Ireland, Europe, Australia, Singapore, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET 10 coverage: C# 14 · ASP.NET Core 10 · EF Core 10 · .NET 10 runtime · Azure .NET 10 deployment · Migration from .NET 8/9.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('.NET 10', 'C# 14 features, ASP.NET Core 10 changes, EF Core 10 updates, breaking change resolution, and .NET 10 Azure deployment'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'C# Job Support', href: '/csharp-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
      { label: '.NET Framework to .NET 10 Migration', href: '/dotnet-upgrade-assistant-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need .NET 10 Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET 10 help — new features, breaking changes, Azure deployment, and migration support. WhatsApp or Call: +91 96606 14469.',
};

export const csharpJobSupport: LandingPageConfig = {
  slug: 'csharp-job-support',
  title: 'C# Job Support | Real-Time Help for C# Developers',
  description: 'Real-time C# job support. Async/await, LINQ, generics, pattern matching, records, delegates, memory management, performance, C# 12/13/14 features, and C# interview proxy support.',
  canonical: `${BASE_URL}/csharp-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'C# job support', 'C# developer help', 'C# production support', 'C# interview proxy',
    'C# async await support', 'C# debugging help', 'C sharp job support',
  ],
  heroEyebrow: 'C# Job Support',
  h1: 'C# Job Support — Real-Time Expert Help for C# Developers',
  tagline: 'Stuck on a C# async/await deadlock, LINQ performance problem, generic constraint issue, or memory leak? Our in-house C# experts are available right now.',
  painIntro:
    'C# is a deep, powerful language — async/await, generics, delegates, expression trees, spans, memory management, and the latest features in C# 12/13/14 all have subtle traps. When your production application is behaving unexpectedly, you need someone who knows C# deeply.',
  heroVariant:
    'We help C# developers with async/await deadlocks, LINQ query optimization, generic type constraints, pattern matching, records, nullable reference types, Span<T> and Memory<T>, P/Invoke, unsafe code, performance profiling, memory leak detection, and the latest C# language features. Interview proxy support also available.',
  geoLine: 'Supporting C# developers across USA, UK, Canada, Ireland, Europe, Australia, Singapore, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'C# coverage: Async/await · LINQ · Generics · Pattern matching · Records · Nullable types · Span/Memory · Performance profiling · C# 12/13/14 features.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('C#', 'async/await debugging, LINQ optimization, generics, memory management, C# 12/13/14 features, and performance profiling'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: '.NET Performance Tuning Job Support', href: '/dotnet-performance-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need C# Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time C# help — async/await, LINQ, performance, generics, and interview proxy support. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetWebApiJobSupport: LandingPageConfig = {
  slug: 'dotnet-web-api-job-support',
  title: '.NET Web API Job Support | Real-Time Help for Web API Developers',
  description: 'Real-time .NET Web API job support. REST API design, versioning, authentication, rate limiting, response caching, Swagger/OpenAPI, error handling, and .NET API interview proxy support.',
  canonical: `${BASE_URL}/dotnet-web-api-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Web API job support', 'ASP.NET Core Web API support', 'REST API .NET job support',
    '.NET API developer help', '.NET API interview proxy', '.NET API production support',
  ],
  heroEyebrow: '.NET Web API Job Support',
  h1: '.NET Web API Job Support — Real-Time Expert Help for API Developers',
  tagline: 'Building or debugging a .NET Web API and stuck on routing, authentication, versioning, performance, or OpenAPI documentation? Our experts are available right now.',
  painIntro:
    '.NET Web APIs power enterprise backends, SaaS platforms, and mobile app backends. Issues with routing ambiguity, model binding, response serialization, JWT validation, API versioning, rate limiting, and Swagger documentation generation are daily realities for .NET API developers.',
  heroVariant:
    'We help .NET Web API developers with REST design, route configuration, model validation, global exception handling, JWT and OAuth authentication, API versioning (URL, header, query string), rate limiting, response caching, OpenAPI/Swagger, performance optimization, and Azure API Management integration.',
  geoLine: 'Supporting .NET Web API developers across USA, UK, Canada, Europe, Australia, Singapore, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Web API coverage: REST design · Routing · Authentication · Versioning · Rate limiting · OpenAPI · Azure APIM · EF Core · Performance.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('.NET Web API', 'REST design, routing, authentication, versioning, rate limiting, OpenAPI, and Azure API Management integration'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'Azure API Management .NET Job Support', href: '/azure-api-management-dotnet-job-support/' },
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need .NET Web API Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Web API help — REST design, auth, versioning, performance, and interview proxy support. WhatsApp or Call: +91 96606 14469.',
};

export const aspnetCoreMinimalApiJobSupport: LandingPageConfig = {
  slug: 'aspnet-core-minimal-api-job-support',
  title: 'ASP.NET Core Minimal API Job Support | Real-Time Expert Help',
  description: 'Real-time ASP.NET Core Minimal API job support. Route handlers, endpoint filters, validation, OpenAPI, authentication, DI, and Minimal API interview proxy support.',
  canonical: `${BASE_URL}/aspnet-core-minimal-api-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'ASP.NET Core Minimal API job support', 'Minimal API developer help', '.NET Minimal API support',
    'Minimal API interview proxy', 'ASP.NET Core Minimal API production help',
  ],
  heroEyebrow: 'ASP.NET Core Minimal API Job Support',
  h1: 'ASP.NET Core Minimal API Job Support — Real-Time Expert Help',
  tagline: 'Building a Minimal API in ASP.NET Core and hitting issues with routing, endpoint filters, validation, OpenAPI docs, or DI configuration? Our experts can help right now.',
  painIntro:
    'Minimal APIs in ASP.NET Core offer a streamlined approach for microservices and lightweight APIs — but route group configuration, endpoint filter ordering, validation without controllers, OpenAPI generation, and authentication middleware integration all have specific patterns to master.',
  heroVariant:
    'We help developers with Minimal API route handlers, route groups, endpoint filters, request validation, FluentValidation integration, custom middleware, OpenAPI/Swagger generation, JWT authentication without controllers, dependency injection, and performance tuning for high-throughput Minimal API endpoints.',
  geoLine: 'Supporting ASP.NET Core Minimal API developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Minimal API coverage: Route handlers · Endpoint filters · Validation · OpenAPI · JWT auth · DI · Route groups · Performance · Microservices.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('ASP.NET Core Minimal API', 'route handlers, endpoint filters, validation, OpenAPI docs, JWT authentication, and DI configuration'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'ASP.NET Core Interview Proxy', href: '/aspnet-core-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need ASP.NET Core Minimal API Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Minimal API help from in-house ASP.NET Core experts. WhatsApp or Call: +91 96606 14469.',
};

export const entityFrameworkCoreJobSupport: LandingPageConfig = {
  slug: 'entity-framework-core-job-support',
  title: 'Entity Framework Core Job Support | Real-Time EF Core Developer Help',
  description: 'Real-time Entity Framework Core job support. N+1 queries, migrations, relationships, performance, raw SQL, CQRS read models, Cosmos DB provider, and EF Core interview proxy support.',
  canonical: `${BASE_URL}/entity-framework-core-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Entity Framework Core job support', 'EF Core developer help', 'EF Core production support',
    'EF Core interview proxy', 'EF Core N+1 query fix', 'EF Core migration support',
  ],
  heroEyebrow: 'Entity Framework Core Job Support',
  h1: 'Entity Framework Core Job Support — Real-Time EF Core Expert Help',
  tagline: 'EF Core N+1 queries killing your production performance? Migration failing in staging? Relationship configuration causing unexpected behavior? Our EF Core experts are available right now.',
  painIntro:
    'Entity Framework Core is powerful but has well-known traps — N+1 query problems, migration conflicts in multi-developer teams, lazy loading triggering at unexpected points, connection pool exhaustion, complex relationship configuration, and query translation failures for advanced LINQ expressions.',
  heroVariant:
    'We help EF Core developers with N+1 query detection and resolution (Include, ThenInclude, projection), migration management, relationship configuration (one-to-many, many-to-many, owned entities), raw SQL integration (FromSql, ExecuteSql), CQRS read model query optimization, connection pool configuration, Cosmos DB provider, and EF Core with DI in ASP.NET Core.',
  geoLine: 'Supporting EF Core developers across USA, UK, Canada, Ireland, Europe, Australia, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'EF Core coverage: N+1 queries · Migrations · Relationships · Include/ThenInclude · Raw SQL · Cosmos DB · Performance · CQRS read models.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('Entity Framework Core', 'N+1 query resolution, migrations, relationship configuration, performance optimization, and Cosmos DB provider'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'LINQ Job Support', href: '/linq-job-support/' },
      { label: 'Dapper .NET Job Support', href: '/dapper-dotnet-job-support/' },
      { label: '.NET CQRS Job Support', href: '/dotnet-cqrs-mediatr-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need EF Core Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Entity Framework Core help — N+1 queries, migrations, relationships, and performance. WhatsApp or Call: +91 96606 14469.',
};

export const linqJobSupport: LandingPageConfig = {
  slug: 'linq-job-support',
  title: 'LINQ Job Support | Real-Time Help for C# LINQ Developers',
  description: 'Real-time LINQ job support for C# developers. LINQ to SQL, LINQ query optimization, deferred execution, GroupBy, join queries, EF Core LINQ translation, and LINQ interview proxy support.',
  canonical: `${BASE_URL}/linq-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'LINQ job support', 'C# LINQ developer help', 'LINQ query optimization', 'LINQ production support',
    'LINQ interview proxy', 'LINQ EF Core translation', 'LINQ debugging help',
  ],
  heroEyebrow: 'LINQ Job Support',
  h1: 'LINQ Job Support — Real-Time C# LINQ Expert Help',
  tagline: 'LINQ query returning wrong results, causing N+1 database calls, or throwing a translation exception in EF Core? Our LINQ experts can diagnose and fix it right now.',
  painIntro:
    'LINQ is elegant when it works and baffling when it does not. Deferred execution surprises, GroupBy aggregation producing unexpected output, EF Core failing to translate a complex LINQ expression to SQL, memory enumeration of large datasets — these are real production issues with real performance impact.',
  heroVariant:
    'We help with LINQ method syntax vs query syntax, deferred vs immediate execution, GroupBy with aggregates, left joins with DefaultIfEmpty, SelectMany for collections, EF Core LINQ-to-SQL translation failures, LINQ over XML, parallel LINQ (PLINQ), and optimizing LINQ for high-performance data processing.',
  geoLine: 'Supporting LINQ/C# developers globally — USA, UK, Canada, Europe, Australia.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'LINQ coverage: Method syntax · Query syntax · Deferred execution · GroupBy · SelectMany · EF Core translation · PLINQ · Performance.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('LINQ', 'deferred execution, GroupBy, joins, EF Core LINQ translation, SelectMany, and parallel LINQ (PLINQ)'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'C# Job Support', href: '/csharp-job-support/' },
      { label: '.NET Performance Tuning Job Support', href: '/dotnet-performance-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need LINQ Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time LINQ help — EF Core translation, GroupBy, performance, deferred execution. WhatsApp or Call: +91 96606 14469.',
};

export const dapperDotnetJobSupport: LandingPageConfig = {
  slug: 'dapper-dotnet-job-support',
  title: 'Dapper .NET Job Support | Real-Time Help for Dapper Developers',
  description: 'Real-time Dapper .NET job support. SQL parameter binding, multi-mapping, stored procedures, dynamic queries, Dapper vs EF Core, connection management, and Dapper interview proxy support.',
  canonical: `${BASE_URL}/dapper-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Dapper .NET job support', 'Dapper developer help', 'Dapper ORM support', 'Dapper production help',
    'Dapper interview proxy', 'Dapper SQL Server support', 'Dapper async support',
  ],
  heroEyebrow: 'Dapper .NET Job Support',
  h1: 'Dapper .NET Job Support — Real-Time Expert Help for Dapper Developers',
  tagline: 'Dapper query returning null results, SQL parameter mapping failing, or multi-mapping producing cartesian explosion? Our .NET database experts are available right now.',
  painIntro:
    'Dapper is the micro-ORM of choice for high-performance .NET data access — but SQL parameter binding, stored procedure output mapping, multi-mapping for joined queries, dynamic SQL construction, and connection lifecycle management all require precise understanding.',
  heroVariant:
    'We help Dapper developers with parameter binding (@param style), QueryMultiple for multiple result sets, multi-mapping with splitOn, stored procedure execution, dynamic queries, async Dapper (QueryAsync, ExecuteAsync), Dapper with SQL Server / PostgreSQL / MySQL, repository pattern with Dapper, and Dapper vs EF Core decision guidance.',
  geoLine: 'Supporting Dapper/.NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Dapper coverage: Parameter binding · Multi-mapping · Stored procedures · Dynamic SQL · Async · SQL Server/PostgreSQL · Repository pattern.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('Dapper .NET', 'parameter binding, multi-mapping, stored procedures, async Dapper, and repository pattern integration'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'SQL Server .NET Job Support', href: '/sql-server-dotnet-job-support/' },
      { label: '.NET Repository Pattern Job Support', href: '/dotnet-repository-pattern-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need Dapper .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Dapper help — SQL mapping, stored procedures, multi-mapping, and async. WhatsApp or Call: +91 96606 14469.',
};

export const blazorJobSupport: LandingPageConfig = {
  slug: 'blazor-job-support',
  title: 'Blazor Job Support | Real-Time Help for Blazor Server & WebAssembly Developers',
  description: 'Real-time Blazor job support. Blazor Server, Blazor WebAssembly, component lifecycle, state management, JS interop, authentication, SignalR circuit, and Blazor interview proxy support.',
  canonical: `${BASE_URL}/blazor-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Blazor job support', 'Blazor Server support', 'Blazor WebAssembly support', 'Blazor developer help',
    'Blazor interview proxy', 'Blazor component debugging', 'Blazor production help',
  ],
  heroEyebrow: 'Blazor Job Support',
  h1: 'Blazor Job Support — Real-Time Blazor Server & WebAssembly Expert Help',
  tagline: 'Blazor component not re-rendering, SignalR circuit dropping, WASM loading slowly, or authentication flow broken? Our Blazor experts can diagnose and fix it right now.',
  painIntro:
    'Blazor — both Server and WebAssembly — is increasingly used for enterprise .NET frontends. But component lifecycle management, cascading parameters, EventCallback, JS interop, state management, circuit reconnection in Blazor Server, and WASM payload optimization all have specific patterns and sharp edges.',
  heroVariant:
    'We help Blazor developers with component lifecycle (OnInitialized, OnParametersSet), StateHasChanged patterns, CascadingValue, RenderFragment, EventCallback, JavaScript interop (IJSRuntime), Blazor Server circuit issues, Blazor WASM lazy loading, authentication (JWT, cookie, Entra ID in WASM), and Blazor full-stack with ASP.NET Core Web API.',
  geoLine: 'Supporting Blazor developers globally — USA, UK, Canada, Europe, Australia.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Blazor coverage: Blazor Server · WASM · Component lifecycle · State management · JS interop · Authentication · SignalR circuit · Full-stack .NET.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('Blazor', 'component lifecycle, state management, JS interop, authentication, Blazor Server circuit, and WASM optimization'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'SignalR Job Support', href: '/signalr-job-support/' },
      { label: 'Full Stack .NET Job Support', href: '/full-stack-dotnet-job-support/' },
      { label: 'Blazor Full Stack Job Support', href: '/blazor-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need Blazor Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Blazor Server and WebAssembly help from in-house .NET experts. WhatsApp or Call: +91 96606 14469.',
};

export const signalrJobSupport: LandingPageConfig = {
  slug: 'signalr-job-support',
  title: 'SignalR Job Support | Real-Time .NET SignalR Developer Help',
  description: 'Real-time SignalR job support. Hub configuration, connection management, groups, user targeting, scale-out with Azure SignalR Service, authentication, and SignalR interview proxy support.',
  canonical: `${BASE_URL}/signalr-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'SignalR job support', 'SignalR developer help', 'Azure SignalR Service support', 'SignalR production help',
    'SignalR interview proxy', 'SignalR real-time support', '.NET SignalR debugging',
  ],
  heroEyebrow: 'SignalR Job Support',
  h1: 'SignalR Job Support — Real-Time .NET SignalR Expert Help',
  tagline: 'SignalR connection dropping, hub authentication failing, or Azure SignalR Service scaling issue blocking your real-time feature? Our SignalR experts are available right now.',
  painIntro:
    'SignalR powers real-time features in .NET apps — live dashboards, notifications, chat, collaborative editing. But connection lifecycle management, hub authentication, group management, scale-out configuration, and WebSocket fallback behavior all have production pitfalls.',
  heroVariant:
    'We help SignalR developers with hub method design, connection management, groups and user targeting, typed hubs, background services sending messages, JWT authentication with SignalR, Azure SignalR Service configuration and scale-out, SignalR with Blazor Server, client reconnection logic, and performance tuning for high-connection-count scenarios.',
  geoLine: 'Supporting SignalR/.NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'SignalR coverage: Hub design · Connection management · Groups · Authentication · Azure SignalR Service · Blazor Server · Scale-out · Performance.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('SignalR', 'hub configuration, authentication, groups, Azure SignalR Service scale-out, and Blazor Server circuit management'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
      { label: 'SignalR Real-Time App Job Support', href: '/signalr-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need SignalR Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time SignalR help — hub configuration, authentication, Azure SignalR Service, and scale-out. WhatsApp or Call: +91 96606 14469.',
};

export const grpcDotnetJobSupport: LandingPageConfig = {
  slug: 'grpc-dotnet-job-support',
  title: 'gRPC .NET Job Support | Real-Time gRPC-dotnet Developer Help',
  description: 'Real-time gRPC .NET job support. Proto definitions, service implementation, streaming RPCs, Polly retry, deadline exceeded, authentication, gRPC-Web, and gRPC interview proxy support.',
  canonical: `${BASE_URL}/grpc-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'gRPC .NET job support', 'gRPC dotnet developer help', 'gRPC .NET production support',
    'gRPC interview proxy', 'gRPC streaming .NET support', 'protobuf .NET debugging',
  ],
  heroEyebrow: 'gRPC .NET Job Support',
  h1: 'gRPC .NET Job Support — Real-Time gRPC Expert Help for .NET Developers',
  tagline: 'gRPC service returning UNAVAILABLE or DEADLINE_EXCEEDED, streaming RPC dropping, proto generation failing, or gRPC-Web browser integration not working? Our gRPC .NET experts are ready.',
  painIntro:
    'gRPC is the high-performance RPC choice for .NET microservices — but proto file management, service contract versioning, streaming RPC lifecycle, deadline propagation, TLS configuration in Kubernetes, gRPC-Web for browsers, and Polly retry policies for gRPC all have production-specific challenges.',
  heroVariant:
    'We help .NET gRPC developers with proto file design, unary and streaming RPCs, server/client/bidirectional streaming, interceptors, deadlines and cancellation, authentication with JWT, gRPC reflection, gRPC-Web configuration, Polly resilience for gRPC, load balancing in AKS, and gRPC with .NET Aspire service discovery.',
  geoLine: 'Supporting gRPC/.NET developers globally — USA, UK, Canada, Europe, Australia.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'gRPC .NET coverage: Protobuf · Unary/Streaming RPCs · Interceptors · Authentication · gRPC-Web · Polly · AKS load balancing · .NET Aspire.',
  highlights: dotnetTechHighlights,
  faqs: dotnetTechFaqs('gRPC .NET', 'proto design, streaming RPCs, interceptors, deadline handling, TLS, gRPC-Web, and Polly retry'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: '.NET Interview Proxy Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    additionalLinks: [
      { label: 'WCF to gRPC Migration Support', href: '/wcf-to-dotnet-migration-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need gRPC .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time gRPC .NET help — proto design, streaming, TLS, Polly, and gRPC-Web. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseDPages: LandingPageConfig[] = [
  aspnetCoreJobSupport,
  dotnet10JobSupport,
  csharpJobSupport,
  dotnetWebApiJobSupport,
  aspnetCoreMinimalApiJobSupport,
  entityFrameworkCoreJobSupport,
  linqJobSupport,
  dapperDotnetJobSupport,
  blazorJobSupport,
  signalrJobSupport,
  grpcDotnetJobSupport,
];

// ─── PHASE E: Azure + .NET Pages ─────────────────────────────────────────────

const azureDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Azure .NET Support',
    description:
      'Live expert help for Azure-hosted .NET applications — deployment failures, connectivity issues, IAM/Managed Identity, Service Bus, Event Grid, and production incident resolution.',
  },
  {
    title: 'Azure Architecture & Design',
    description:
      'Hands-on guidance for Azure cloud-native .NET architecture — App Service, AKS, Container Apps, APIM, Azure DevOps CI/CD, and secure Azure .NET application design.',
  },
  {
    title: '.NET Azure Interview Proxy',
    description:
      'Real-time guidance during live Azure .NET technical interview rounds — cloud architecture, deployment patterns, cost optimization, security, and monitoring questions.',
  },
];

export const dotnetAzureJobSupport: LandingPageConfig = {
  slug: 'dotnet-azure-job-support',
  title: '.NET Azure Job Support | Real-Time Azure Cloud .NET Developer Help',
  description: 'Real-time .NET Azure job support. Azure App Service, Functions, AKS, Container Apps, Service Bus, Key Vault, Entra ID, DevOps pipelines, and .NET Azure interview proxy support.',
  canonical: `${BASE_URL}/dotnet-azure-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Azure job support', 'Azure .NET developer help', 'ASP.NET Core Azure support',
    '.NET Azure interview proxy', 'Azure .NET production support', 'Azure cloud .NET help',
  ],
  heroEyebrow: '.NET Azure Job Support',
  h1: '.NET Azure Job Support — Real-Time Expert Help for Azure .NET Developers',
  tagline: 'Azure deployment failing, Managed Identity not resolving, Service Bus processing stuck, or AKS pod crashing? Our in-house Azure .NET experts resolve it in real time.',
  painIntro:
    'Running .NET on Azure means dealing with App Service deployment slots, Azure Functions cold starts, AKS networking, Container Apps scaling, Service Bus lock expiry, Key Vault access policies, Entra ID token issues, Application Insights telemetry, and DevOps pipeline failures — all at once, all under production pressure.',
  heroVariant:
    'We cover the full Azure .NET stack: App Service, Azure Functions, AKS, Container Apps, API Management, Service Bus, Event Grid, Event Hubs, Storage, SQL Database, Cosmos DB, Key Vault, Managed Identity, Entra ID, Azure Monitor, Application Insights, Azure DevOps, GitHub Actions, Bicep/Terraform, and Azure DevCLI.',
  geoLine: 'Supporting Azure .NET developers across USA, UK, Canada, Ireland, Europe, Australia, Singapore, UAE, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure .NET: App Service · Functions · AKS · Container Apps · APIM · Service Bus · Key Vault · Entra ID · DevOps · Bicep · Application Insights.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Azure', 'App Service, Azure Functions, AKS, Service Bus, Key Vault, Managed Identity, Entra ID, and Azure DevOps CI/CD'),
  useCasesSection: {
    title: 'Azure .NET Production Scenarios We Resolve',
    cases: [
      'Azure App Service deployment slot swap failing health check — warm-up endpoint or Managed Identity not ready',
      'Azure Functions cold start causing timeout — DI container initialization, Key Vault reference, or connection pool issue',
      'AKS pod CrashLoopBackOff — .NET app failing to read Kubernetes secrets or connect to Azure SQL via Private Endpoint',
      'Azure Service Bus message processing stuck — lock expiry, duplicate detection conflict, or DLQ message loop',
      'Managed Identity returning 403 on Key Vault — role assignment missing or wrong principal ID bound',
      'Azure API Management policy failing — transformation rule, JWT validation, or backend circuit breaker misconfigured',
      'Application Insights telemetry missing or showing incorrect dependency tracking for distributed .NET app',
      'Azure DevOps pipeline failing on .NET publish — Docker layer caching issue or multi-stage build misconfiguration',
    ],
  },
  proxySection: {
    title: 'Azure .NET Interview Proxy Support',
    intro:
      'Facing a Senior Azure .NET Developer or Azure Solutions Architect interview? Our experts provide real-time guidance during your live technical round — Azure architecture, cloud design, cost optimization, and .NET deployment questions.',
    points: [
      'Azure App Service vs AKS vs Container Apps architecture decision rounds',
      'Azure messaging architecture — Service Bus, Event Grid, Event Hubs design tradeoffs',
      'Azure security architecture — Managed Identity, Key Vault, Private Endpoints, NSG, WAF',
      'Azure DevOps CI/CD design — pipelines, environments, gates, approval flows',
      'Azure cost optimization and right-sizing for .NET workloads',
      'Azure Monitor, Application Insights, and Log Analytics observability design',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'Azure App Service .NET Job Support', href: '/azure-app-service-dotnet-job-support/' },
      { label: 'Azure Functions .NET Job Support', href: '/azure-functions-dotnet-job-support/' },
      { label: 'AKS .NET Job Support', href: '/aks-dotnet-job-support/' },
      { label: '.NET Azure Interview Proxy Support', href: '/dotnet-azure-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
    additionalLinks: [
      { label: 'Azure Job Support Guide', href: '/azure-job-support-guide/' },
      { label: 'Azure DevOps .NET Job Support', href: '/azure-devops-dotnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET Azure Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure .NET help — App Service, Functions, AKS, Service Bus, Key Vault, Entra ID, and DevOps. WhatsApp or Call: +91 96606 14469.',
};

export const azureAppServiceDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-app-service-dotnet-job-support',
  title: 'Azure App Service .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure App Service .NET job support. Deployment slots, always-on, Managed Identity, Key Vault references, scaling, custom domains, TLS, and App Service interview proxy support.',
  canonical: `${BASE_URL}/azure-app-service-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure App Service .NET job support', 'Azure App Service developer help', 'App Service .NET production support',
    'Azure App Service interview proxy', 'Azure App Service deployment help',
  ],
  heroEyebrow: 'Azure App Service .NET Job Support',
  h1: 'Azure App Service .NET Job Support — Real-Time Expert Help',
  tagline: 'Azure App Service deployment failing, slot swap health check timing out, or Managed Identity not resolving Key Vault? Our experts resolve App Service .NET issues in real time.',
  painIntro: 'Azure App Service hosts millions of ASP.NET Core applications — but deployment slot configuration, always-on warm-up, Managed Identity binding, Key Vault reference resolution, custom domain TLS, scaling rules, and App Service Plan sizing all have production-specific gotchas.',
  heroVariant: 'We help with App Service deployment slots, CI/CD from Azure DevOps and GitHub Actions, Managed Identity for SQL and Key Vault, app settings vs Key Vault references, VNet integration, Private Endpoints, custom domains and TLS, auto-scaling, App Service health checks, and container deployment on App Service.',
  geoLine: 'Supporting Azure App Service .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'App Service coverage: Deployment slots · Managed Identity · Key Vault refs · VNet integration · CI/CD · Scaling · Custom domains · Containers.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure App Service .NET', 'deployment slots, Managed Identity, Key Vault references, VNet integration, scaling, and CI/CD pipelines'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Functions .NET Job Support', href: '/azure-functions-dotnet-job-support/' },
      { label: 'Azure Key Vault .NET Job Support', href: '/azure-key-vault-dotnet-job-support/' },
      { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
    additionalLinks: [{ label: 'IIS to Azure App Service Migration', href: '/iis-to-azure-app-service-migration-support/' }],
  },
  bottomCTAHeading: 'Need Azure App Service .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure App Service .NET help — deployment, Managed Identity, scaling, CI/CD. WhatsApp or Call: +91 96606 14469.',
};

export const azureFunctionsDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-functions-dotnet-job-support',
  title: 'Azure Functions .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Functions .NET job support. HTTP/timer/queue triggers, DI, cold starts, Key Vault, Durable Functions, retry policies, Application Insights, and Azure Functions interview proxy.',
  canonical: `${BASE_URL}/azure-functions-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Functions .NET job support', 'Azure Functions developer help', 'Azure Functions production support',
    'Azure Functions interview proxy', 'Durable Functions support', 'Azure Functions cold start fix',
  ],
  heroEyebrow: 'Azure Functions .NET Job Support',
  h1: 'Azure Functions .NET Job Support — Real-Time Expert Help',
  tagline: 'Azure Function cold start causing timeout, DI container not resolving, Key Vault reference failing, or Durable Function orchestration stuck? Our experts resolve it right now.',
  painIntro: 'Azure Functions power event-driven .NET architectures — but cold start issues, DI container initialization, Key Vault access, trigger binding configuration, retry policies, concurrency settings, Durable Functions orchestration bugs, and deployment pipeline issues are daily production challenges.',
  heroVariant: 'We help with HTTP triggers, timer triggers, queue triggers, blob triggers, Service Bus triggers, DI configuration in Functions, Managed Identity for Key Vault and SQL access, cold start optimization, Durable Functions (orchestrations, activities, fans), retry and error handling, Application Insights telemetry, and Functions v4 isolated worker model.',
  geoLine: 'Supporting Azure Functions .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure Functions coverage: Triggers · DI · Cold start · Key Vault · Durable Functions · Retry · Isolated worker · Application Insights.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Functions .NET', 'HTTP/timer/queue triggers, DI configuration, cold start optimization, Durable Functions, and Managed Identity'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure App Service .NET Job Support', href: '/azure-app-service-dotnet-job-support/' },
      { label: 'Azure Service Bus .NET Job Support', href: '/azure-service-bus-dotnet-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Functions .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure Functions help — triggers, DI, cold start, Durable Functions, Key Vault. WhatsApp or Call: +91 96606 14469.',
};

export const aksDotnetJobSupport: LandingPageConfig = {
  slug: 'aks-dotnet-job-support',
  title: 'Azure Kubernetes Service .NET Job Support | AKS .NET Expert Help',
  description: 'Real-time AKS .NET job support. Pod failures, networking, Managed Identity, KEDA scaling, service mesh, Helm, ingress, Private Endpoints, and AKS .NET interview proxy support.',
  canonical: `${BASE_URL}/aks-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'AKS .NET job support', 'Azure Kubernetes Service .NET support', 'Kubernetes .NET developer help',
    'AKS .NET production support', 'AKS .NET interview proxy', 'AKS .NET deployment help',
  ],
  heroEyebrow: 'AKS .NET Job Support',
  h1: 'AKS .NET Job Support — Real-Time Azure Kubernetes Service Expert Help',
  tagline: '.NET pod CrashLoopBackOff, Managed Identity not working in AKS, ingress returning 502, or KEDA not scaling? Our AKS .NET experts resolve it in real time.',
  painIntro: 'Deploying .NET applications to AKS introduces Kubernetes-specific complexity — pod resource limits, Managed Identity with Workload Identity, ingress controller configuration, Private Endpoints, KEDA autoscaling, Helm chart management, and distributed tracing across pods.',
  heroVariant: 'We help with AKS node pool configuration, .NET Dockerfile optimization, Kubernetes manifests, Helm charts, ingress (NGINX, AGIC), Workload Identity for Managed Identity, Azure Container Registry integration, KEDA for queue-based scaling, Dapr sidecar, service mesh (Istio/Linkerd), and CI/CD from Azure DevOps to AKS.',
  geoLine: 'Supporting AKS .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'AKS .NET: Pod lifecycle · Workload Identity · Ingress · KEDA · Helm · Dapr · Service mesh · Private Endpoints · CI/CD.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('AKS .NET', 'pod failures, Workload Identity, ingress configuration, KEDA autoscaling, Helm, and Private Endpoints'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Container Apps .NET Job Support', href: '/azure-container-apps-dotnet-job-support/' },
      { label: '.NET Kubernetes Job Support', href: '/dotnet-kubernetes-job-support/' },
      { label: 'Dapr .NET Job Support', href: '/dapr-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need AKS .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time AKS .NET help — pod failures, Workload Identity, ingress, KEDA, Helm. WhatsApp or Call: +91 96606 14469.',
};

export const azureContainerAppsDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-container-apps-dotnet-job-support',
  title: 'Azure Container Apps .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Container Apps .NET job support. KEDA scaling, Dapr integration, ingress, Managed Identity, secrets, revisions, and Azure Container Apps interview proxy support.',
  canonical: `${BASE_URL}/azure-container-apps-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Container Apps .NET job support', 'Container Apps .NET developer help', 'ACA .NET production support',
    'Azure Container Apps interview proxy', 'Azure Container Apps .NET scaling',
  ],
  heroEyebrow: 'Azure Container Apps .NET Job Support',
  h1: 'Azure Container Apps .NET Job Support — Real-Time Expert Help',
  tagline: 'Azure Container Apps .NET revision failing, KEDA not triggering, Dapr sidecar not communicating, or Managed Identity returning 403? Our experts resolve it right now.',
  painIntro: 'Azure Container Apps offers serverless Kubernetes for .NET — but revision management, KEDA scaling rules, Dapr pub/sub and service invocation, Managed Identity binding, secret references, ingress configuration, and environment variables vs secret mounting all have specific patterns.',
  heroVariant: 'We help with Container Apps environment setup, container revision management, KEDA scaling (HTTP, Service Bus, queue), Dapr sidecar configuration, Managed Identity for Container Apps, secrets management, ingress rules, traffic splitting, Azure Container Registry integration, and CI/CD deployment.',
  geoLine: 'Supporting Azure Container Apps .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Container Apps coverage: Revisions · KEDA · Dapr · Managed Identity · Ingress · Traffic splitting · Secrets · CI/CD.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Container Apps .NET', 'revisions, KEDA scaling, Dapr integration, Managed Identity, ingress, and secrets management'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'AKS .NET Job Support', href: '/aks-dotnet-job-support/' },
      { label: 'Dapr .NET Job Support', href: '/dapr-dotnet-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Container Apps .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure Container Apps help — KEDA, Dapr, Managed Identity, revisions. WhatsApp or Call: +91 96606 14469.',
};

export const azureApiManagementDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-api-management-dotnet-job-support',
  title: 'Azure API Management .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure API Management .NET job support. APIM policies, JWT validation, rate limiting, product configuration, backend integration, and APIM interview proxy support.',
  canonical: `${BASE_URL}/azure-api-management-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure API Management .NET job support', 'APIM .NET developer help', 'Azure APIM production support',
    'APIM policy help', 'Azure API Management interview proxy',
  ],
  heroEyebrow: 'Azure API Management .NET Job Support',
  h1: 'Azure API Management .NET Job Support — Real-Time Expert Help',
  tagline: 'APIM policy not applying correctly, JWT validation returning 401, rate limiting blocking legitimate traffic, or backend health check failing? Our Azure APIM experts are ready.',
  painIntro: 'Azure API Management sits in front of .NET microservices and APIs — but policy pipeline ordering, JWT/OAuth validation, rate limiting rules, product and subscription management, backend circuit breaker configuration, and Bicep/ARM deployment of APIM all require deep expertise.',
  heroVariant: 'We help with APIM inbound/outbound/backend/on-error policy configuration, JWT validation policies, OAuth with Entra ID, rate limiting and quota policies, caching policies, transformation (set-body, set-header), named values and Key Vault references, self-hosted gateway, developer portal, and APIM CI/CD with Azure DevOps.',
  geoLine: 'Supporting Azure APIM .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'APIM coverage: Policies · JWT validation · Rate limiting · OAuth · Named values · Key Vault · Self-hosted gateway · CI/CD.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure API Management .NET', 'policies, JWT validation, rate limiting, OAuth integration, and APIM CI/CD deployment'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: 'Azure Entra ID .NET Job Support', href: '/azure-entra-id-dotnet-job-support/' },
      { label: '.NET Security Job Support', href: '/dotnet-security-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure API Management .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure APIM help — policies, JWT validation, rate limiting, OAuth. WhatsApp or Call: +91 96606 14469.',
};

export const azureServiceBusDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-service-bus-dotnet-job-support',
  title: 'Azure Service Bus .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Service Bus .NET job support. Queue/topic configuration, lock expiry, dead-letter queue, duplicate detection, sessions, Managed Identity, and Service Bus interview proxy.',
  canonical: `${BASE_URL}/azure-service-bus-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Service Bus .NET job support', 'Service Bus developer help', 'Azure Service Bus production support',
    'Service Bus dead-letter queue fix', 'Service Bus interview proxy', 'Azure messaging .NET support',
  ],
  heroEyebrow: 'Azure Service Bus .NET Job Support',
  h1: 'Azure Service Bus .NET Job Support — Real-Time Expert Help',
  tagline: 'Service Bus messages going to dead-letter queue, lock expiry causing reprocessing, duplicate messages appearing, or sessions not routing correctly? Our experts resolve it now.',
  painIntro: 'Azure Service Bus powers .NET event-driven architectures — but message lock expiry, dead-letter queue investigation, duplicate detection windows, session-based processing, topic filter configuration, Managed Identity access, and outbox pattern implementation all have specific production traps.',
  heroVariant: 'We help with queue and topic/subscription design, message lock renewal, dead-letter queue diagnostics and remediation, duplicate detection, session processing, Service Bus SDK v7 configuration (ServiceBusClient, ServiceBusProcessor), Managed Identity for Service Bus access, retry policies, and outbox pattern with EF Core.',
  geoLine: 'Supporting Azure Service Bus .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Service Bus coverage: Queues · Topics · DLQ · Lock expiry · Sessions · Duplicate detection · Managed Identity · Outbox pattern.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Service Bus .NET', 'message lock expiry, dead-letter queue, duplicate detection, sessions, and outbox pattern'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Event Grid .NET Job Support', href: '/azure-event-grid-dotnet-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
      { label: 'Azure Functions .NET Job Support', href: '/azure-functions-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Service Bus .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Service Bus help — DLQ, lock expiry, sessions, duplicate detection, outbox pattern. WhatsApp or Call: +91 96606 14469.',
};

export const azureEventGridDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-event-grid-dotnet-job-support',
  title: 'Azure Event Grid .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Event Grid .NET job support. Event subscriptions, custom topics, CloudEvents, dead-lettering, retry, webhook validation, and Event Grid interview proxy support.',
  canonical: `${BASE_URL}/azure-event-grid-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Event Grid .NET job support', 'Event Grid developer help', 'Azure Event Grid production support',
    'Event Grid .NET interview proxy', 'Azure Event Grid webhook', 'Event Grid CloudEvents support',
  ],
  heroEyebrow: 'Azure Event Grid .NET Job Support',
  h1: 'Azure Event Grid .NET Job Support — Real-Time Expert Help',
  tagline: 'Event Grid subscription not delivering events, webhook validation failing, custom topic schema mismatch, or dead-lettering unexpectedly? Our experts resolve it right now.',
  painIntro: 'Azure Event Grid enables reactive .NET architectures — but event subscription configuration, custom topic schema design, CloudEvents vs Event Grid schema, webhook endpoint validation, dead-letter destination setup, retry policies, and filtering rules all have production-specific nuances.',
  heroVariant: 'We help with system topic vs custom topic configuration, event subscription management, webhook validation handshake, event filtering, CloudEvents format, Managed Identity delivery, dead-letter storage account configuration, Event Grid trigger in Azure Functions, and Event Grid Namespaces (MQTT, pull model).',
  geoLine: 'Supporting Azure Event Grid .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Event Grid coverage: Custom topics · Subscriptions · CloudEvents · Webhook validation · Dead-lettering · Retry · Azure Functions trigger.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Event Grid .NET', 'event subscriptions, webhook validation, CloudEvents, dead-lettering, and Functions integration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Service Bus .NET Job Support', href: '/azure-service-bus-dotnet-job-support/' },
      { label: 'Azure Event Hubs .NET Job Support', href: '/azure-event-hubs-dotnet-job-support/' },
      { label: 'Azure Functions .NET Job Support', href: '/azure-functions-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Event Grid .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Event Grid help — subscriptions, CloudEvents, webhook validation, dead-lettering. WhatsApp or Call: +91 96606 14469.',
};

export const azureEventHubsDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-event-hubs-dotnet-job-support',
  title: 'Azure Event Hubs .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Event Hubs .NET job support. EventProcessorClient, checkpointing, partition management, consumer groups, Kafka surface, Capture, and Event Hubs interview proxy support.',
  canonical: `${BASE_URL}/azure-event-hubs-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Event Hubs .NET job support', 'Event Hubs developer help', 'Azure Event Hubs production support',
    'EventProcessorClient support', 'Event Hubs .NET interview proxy',
  ],
  heroEyebrow: 'Azure Event Hubs .NET Job Support',
  h1: 'Azure Event Hubs .NET Job Support — Real-Time Expert Help',
  tagline: 'EventProcessorClient not checkpointing correctly, partition rebalancing causing duplicate processing, or Event Hubs Kafka surface timing out? Our experts are ready.',
  painIntro: 'Azure Event Hubs powers high-throughput .NET data streaming — but EventProcessorClient partition ownership, checkpointing strategy, consumer group design, Kafka surface configuration, and Event Hubs Capture to blob storage all require precise implementation.',
  heroVariant: 'We help with EventHubProducerClient batching, EventProcessorClient configuration (checkpointing, partition ownership, load balancing), consumer group design, Kafka-compatible Event Hubs in .NET, Event Hubs Capture to Azure Data Lake, Managed Identity access, and schema registry.',
  geoLine: 'Supporting Azure Event Hubs .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Event Hubs coverage: EventProcessorClient · Checkpointing · Partitions · Consumer groups · Kafka surface · Capture · Managed Identity.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Event Hubs .NET', 'EventProcessorClient, checkpointing, partition management, consumer groups, and Kafka surface'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Service Bus .NET Job Support', href: '/azure-service-bus-dotnet-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Event Hubs .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Event Hubs help — EventProcessorClient, checkpointing, Kafka, Capture. WhatsApp or Call: +91 96606 14469.',
};

export const azureStorageDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-storage-dotnet-job-support',
  title: 'Azure Storage .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Storage .NET job support. Blob storage, Queue storage, Table storage, SAS tokens, Managed Identity, lifecycle policies, and Azure Storage interview proxy support.',
  canonical: `${BASE_URL}/azure-storage-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Storage .NET job support', 'Azure Blob Storage .NET support', 'Azure Storage developer help',
    'Azure Storage interview proxy', 'Azure Blob .NET production support', 'SAS token .NET help',
  ],
  heroEyebrow: 'Azure Storage .NET Job Support',
  h1: 'Azure Storage .NET Job Support — Real-Time Expert Help',
  tagline: 'Blob upload failing, SAS token expiring unexpectedly, Queue message not being dequeued, or Managed Identity not accessing Storage? Our experts resolve it right now.',
  painIntro: 'Azure Storage underpins file handling, queuing, and data archiving in .NET applications — but BlobServiceClient configuration, SAS token generation (user delegation vs service), Managed Identity RBAC for Storage, lifecycle management policies, large file chunked upload, and Azure Queue Storage visibility timeouts all have nuances.',
  heroVariant: 'We help with BlobServiceClient/BlobContainerClient/BlobClient, SAS tokens (service, account, user delegation), Managed Identity for Storage access, blob metadata and tags, lifecycle management, Azure CDN for blob delivery, large file upload with chunking/append blobs, Queue storage with trigger Functions, and Table Storage query patterns.',
  geoLine: 'Supporting Azure Storage .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure Storage coverage: Blob · Queue · Table · SAS tokens · Managed Identity · Lifecycle policies · Chunked upload · CDN.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Storage .NET', 'Blob storage, SAS tokens, Managed Identity, Queue storage, and lifecycle management'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Key Vault .NET Job Support', href: '/azure-key-vault-dotnet-job-support/' },
      { label: 'Azure Functions .NET Job Support', href: '/azure-functions-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Storage .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure Storage help — Blob, SAS tokens, Managed Identity, Queue. WhatsApp or Call: +91 96606 14469.',
};

export const azureSqlDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-sql-dotnet-job-support',
  title: 'Azure SQL .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure SQL .NET job support. EF Core with Azure SQL, connection pooling, Managed Identity auth, elastic pools, Always Encrypted, performance tuning, and Azure SQL interview proxy.',
  canonical: `${BASE_URL}/azure-sql-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure SQL .NET job support', 'Azure SQL developer help', 'Azure SQL EF Core support',
    'Azure SQL .NET interview proxy', 'Azure SQL Managed Identity', 'Azure SQL performance tuning',
  ],
  heroEyebrow: 'Azure SQL .NET Job Support',
  h1: 'Azure SQL .NET Job Support — Real-Time Expert Help',
  tagline: 'EF Core connection pool exhausted on Azure SQL, Managed Identity auth returning 18456, slow queries in Azure SQL, or elastic pool throttling? Our experts resolve it now.',
  painIntro: 'Azure SQL is the managed relational database for .NET enterprise applications — but connection string management with Managed Identity, connection pool sizing, query performance in Azure SQL, elastic pool configuration, Always Encrypted for sensitive data, and geo-replication failover all require Azure-specific knowledge.',
  heroVariant: 'We help with EF Core connection to Azure SQL using Managed Identity (no password), connection pool sizing and SqlConnectionStringBuilder, query store and performance recommendations, Azure SQL elastic pools, Always Encrypted column-level encryption, geo-replication and failover groups, and Bicep/ARM provisioning of Azure SQL.',
  geoLine: 'Supporting Azure SQL .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure SQL coverage: EF Core · Managed Identity auth · Connection pooling · Elastic pools · Always Encrypted · Geo-replication · Performance tuning.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure SQL .NET', 'EF Core integration, Managed Identity authentication, connection pooling, elastic pools, and query performance'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'SQL Server .NET Job Support', href: '/sql-server-dotnet-job-support/' },
      { label: 'Cosmos DB .NET Job Support', href: '/cosmos-db-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure SQL .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure SQL help — EF Core, Managed Identity, elastic pools, performance tuning. WhatsApp or Call: +91 96606 14469.',
};

export const cosmosDbDotnetJobSupport: LandingPageConfig = {
  slug: 'cosmos-db-dotnet-job-support',
  title: 'Cosmos DB .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Cosmos DB .NET job support. Partition key design, RU throttling, change feed, EF Core Cosmos provider, SQL API, Managed Identity, and Cosmos DB interview proxy support.',
  canonical: `${BASE_URL}/cosmos-db-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Cosmos DB .NET job support', 'Azure Cosmos DB developer help', 'Cosmos DB .NET production support',
    'Cosmos DB interview proxy', 'Cosmos DB partition key help', 'Cosmos DB EF Core support',
  ],
  heroEyebrow: 'Cosmos DB .NET Job Support',
  h1: 'Cosmos DB .NET Job Support — Real-Time Expert Help',
  tagline: 'Cosmos DB RU throttling under load, hot partition detected, change feed processor not checkpointing, or EF Core Cosmos provider returning wrong results? Our experts are ready.',
  painIntro: 'Azure Cosmos DB is the globally distributed NoSQL database for .NET — but partition key design decisions have long-term consequences, RU throttling under unexpected load, change feed processor configuration, cross-partition queries, and EF Core Cosmos provider limitations require real expertise.',
  heroVariant: 'We help with CosmosClient configuration, container design (partition key selection, indexing policy), RU consumption analysis and optimization, change feed processor (ChangeFeedProcessor, ChangeFeedProcessorBuilder), cross-partition query cost, EF Core Cosmos provider limitations, Managed Identity access, and Cosmos DB with .NET Aspire.',
  geoLine: 'Supporting Cosmos DB .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Cosmos DB coverage: Partition key design · RU optimization · Change feed · EF Core provider · SQL API · Managed Identity · Global distribution.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Cosmos DB .NET', 'partition key design, RU throttling, change feed, EF Core Cosmos provider, and cross-partition queries'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure SQL .NET Job Support', href: '/azure-sql-dotnet-job-support/' },
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Cosmos DB .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Cosmos DB help — partition key, RU, change feed, EF Core Cosmos provider. WhatsApp or Call: +91 96606 14469.',
};

export const azureKeyVaultDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-key-vault-dotnet-job-support',
  title: 'Azure Key Vault .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Key Vault .NET job support. SecretClient, Managed Identity, access policies vs RBAC, key rotation, certificate management, and Key Vault interview proxy support.',
  canonical: `${BASE_URL}/azure-key-vault-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Key Vault .NET job support', 'Key Vault developer help', 'Azure Key Vault Managed Identity',
    'Key Vault interview proxy', 'Azure Key Vault secrets .NET', 'Key Vault RBAC support',
  ],
  heroEyebrow: 'Azure Key Vault .NET Job Support',
  h1: 'Azure Key Vault .NET Job Support — Real-Time Expert Help',
  tagline: 'Key Vault SecretClient returning 403, Managed Identity not assigned the right RBAC role, App Service Key Vault reference resolving to placeholder, or certificate rotation failing? Our experts resolve it now.',
  painIntro: 'Azure Key Vault is the secrets management backbone for secure .NET applications — but access policy vs RBAC model differences, Managed Identity vs Service Principal, App Service Key Vault references, Azure Functions Key Vault integration, and key/certificate rotation handling all have specific production requirements.',
  heroVariant: 'We help with SecretClient, CertificateClient, CryptographyClient configuration, Managed Identity RBAC role assignment (Key Vault Secrets User vs Officer), access policy migration to RBAC, App Service and Functions Key Vault reference configuration, Azure SDK DefaultAzureCredential chain, key rotation with event notification, and Bicep provisioning of Key Vault.',
  geoLine: 'Supporting Azure Key Vault .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Key Vault coverage: SecretClient · Managed Identity · RBAC vs access policies · App Service refs · Certificate management · Key rotation · Bicep.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Key Vault .NET', 'SecretClient, Managed Identity RBAC, App Service references, certificate management, and key rotation'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Entra ID .NET Job Support', href: '/azure-entra-id-dotnet-job-support/' },
      { label: '.NET Security Job Support', href: '/dotnet-security-job-support/' },
      { label: 'Azure App Service .NET Job Support', href: '/azure-app-service-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Key Vault .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Key Vault help — Managed Identity, RBAC, App Service refs, certificate rotation. WhatsApp or Call: +91 96606 14469.',
};

export const azureEntraIdDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-entra-id-dotnet-job-support',
  title: 'Azure Entra ID .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure Entra ID .NET job support. App registrations, MSAL, JWT validation, scopes, claims, RBAC, Managed Identity, B2C, and Entra ID interview proxy support.',
  canonical: `${BASE_URL}/azure-entra-id-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure Entra ID .NET job support', 'Azure AD .NET developer help', 'MSAL .NET support',
    'Entra ID interview proxy', 'Azure AD JWT validation .NET', 'Microsoft Entra ID .NET help',
  ],
  heroEyebrow: 'Azure Entra ID .NET Job Support',
  h1: 'Azure Entra ID .NET Job Support — Real-Time Expert Help',
  tagline: 'Entra ID JWT token validation failing, MSAL token acquisition returning AADSTS error, app registration permissions not working, or Managed Identity not authenticating? Our experts resolve it now.',
  painIntro: 'Azure Entra ID is the identity backbone for enterprise .NET applications — but app registration configuration, JWT token validation in ASP.NET Core, MSAL token acquisition (interactive, client credentials, on-behalf-of), API permission scopes and consent, role-based authorization, Managed Identity, and B2C are genuinely complex.',
  heroVariant: 'We help with app registration and API permission configuration, JWT bearer token validation in ASP.NET Core (AddMicrosoftIdentityWebApi), MSAL.NET token acquisition flows, on-behalf-of (OBO) for API chaining, app roles and claims-based authorization, Managed Identity for service-to-service auth, Azure AD B2C custom policies, and Entra ID with multi-tenant apps.',
  geoLine: 'Supporting Entra ID .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Entra ID coverage: MSAL.NET · JWT validation · OBO flow · App registrations · App roles · Managed Identity · B2C · Multi-tenant.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure Entra ID .NET', 'app registrations, JWT validation, MSAL token acquisition, OBO flow, app roles, and Managed Identity'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'Azure Key Vault .NET Job Support', href: '/azure-key-vault-dotnet-job-support/' },
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
      { label: '.NET Security Job Support', href: '/dotnet-security-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure Entra ID .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Entra ID help — MSAL, JWT validation, app registrations, OBO flow, Managed Identity. WhatsApp or Call: +91 96606 14469.',
};

export const azureDevOpsDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-devops-dotnet-job-support',
  title: 'Azure DevOps .NET Job Support | Real-Time CI/CD Pipeline Expert Help',
  description: 'Real-time Azure DevOps .NET job support. YAML pipelines, multi-stage builds, .NET Docker, artifact publishing, environment approvals, and Azure DevOps interview proxy support.',
  canonical: `${BASE_URL}/azure-devops-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure DevOps .NET job support', 'Azure DevOps CI/CD .NET support', 'Azure Pipelines .NET help',
    'Azure DevOps interview proxy', '.NET Docker CI/CD help', 'Azure DevOps YAML pipeline support',
  ],
  heroEyebrow: 'Azure DevOps .NET Job Support',
  h1: 'Azure DevOps .NET Job Support — Real-Time CI/CD Pipeline Expert Help',
  tagline: 'Azure DevOps pipeline failing on .NET build, Docker multi-stage build breaking, environment approval gates not triggering, or NuGet restore taking too long? Our experts resolve it now.',
  painIntro: 'Azure DevOps CI/CD is the deployment backbone for enterprise .NET teams — but YAML pipeline design, .NET SDK version pinning, Docker layer caching, NuGet feed configuration, test result publishing, artifact management, environment approvals, and deployment to AKS or App Service all have sharp edges.',
  heroVariant: 'We help with YAML pipeline design (stages, jobs, steps), .NET build and test tasks, Docker multi-stage builds and caching, NuGet restore with private feeds, SonarQube/coverage integration, artifact publishing (NuGet packages, Docker images), environment approvals and gates, deployment to Azure App Service, AKS, or Container Apps, and GitHub Actions equivalents.',
  geoLine: 'Supporting Azure DevOps .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure DevOps coverage: YAML pipelines · .NET build/test · Docker · NuGet · Artifacts · Environments · AKS deployment · GitHub Actions.',
  highlights: azureDotnetHighlights,
  faqs: dotnetTechFaqs('Azure DevOps .NET', 'YAML pipelines, .NET Docker builds, NuGet feeds, artifact publishing, and deployment to AKS/App Service'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: 'AKS .NET Job Support', href: '/aks-dotnet-job-support/' },
      { label: 'Docker .NET Job Support', href: '/docker-dotnet-job-support/' },
      { label: 'Azure App Service .NET Job Support', href: '/azure-app-service-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure DevOps .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure DevOps help — YAML pipelines, Docker, NuGet, deployment to AKS/App Service. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseEPages: LandingPageConfig[] = [
  dotnetAzureJobSupport,
  azureAppServiceDotnetJobSupport,
  azureFunctionsDotnetJobSupport,
  aksDotnetJobSupport,
  azureContainerAppsDotnetJobSupport,
  azureApiManagementDotnetJobSupport,
  azureServiceBusDotnetJobSupport,
  azureEventGridDotnetJobSupport,
  azureEventHubsDotnetJobSupport,
  azureStorageDotnetJobSupport,
  azureSqlDotnetJobSupport,
  cosmosDbDotnetJobSupport,
  azureKeyVaultDotnetJobSupport,
  azureEntraIdDotnetJobSupport,
  azureDevOpsDotnetJobSupport,
];

// ─── PHASE F: .NET AI/ML Pages ───────────────────────────────────────────────

const aiMlDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET AI/ML Support',
    description:
      'Live expert help for Semantic Kernel, Azure AI Foundry, Azure OpenAI SDK, RAG pipelines, vector search, AI agents, ML.NET, and ONNX Runtime integration in .NET applications.',
  },
  {
    title: 'AI Architecture & Debugging',
    description:
      'Hands-on help designing and troubleshooting .NET AI/ML systems — agent orchestration, grounding failures, embedding pipeline bugs, Cosmos DB vector search, and AI safety patterns.',
  },
  {
    title: '.NET AI Interview Proxy Support',
    description:
      'Real-time guidance during live .NET AI/ML technical interviews — LLM integration design, RAG architecture, agent framework questions, and AI solution architecture rounds.',
  },
];

export const dotnetAiMlJobSupport: LandingPageConfig = {
  slug: 'dotnet-ai-ml-job-support',
  title: '.NET AI ML Job Support | Real-Time .NET AI Developer Expert Help',
  description: 'Real-time .NET AI/ML job support. Semantic Kernel, Azure OpenAI, RAG pipelines, vector search, AI agents, ML.NET, ONNX Runtime, and .NET AI interview proxy support.',
  canonical: `${BASE_URL}/dotnet-ai-ml-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET AI ML job support', '.NET AI developer help', 'Semantic Kernel job support',
    'Azure OpenAI .NET support', '.NET AI interview proxy', '.NET RAG pipeline support',
  ],
  heroEyebrow: '.NET AI/ML Job Support',
  h1: '.NET AI/ML Job Support — Real-Time Expert Help for .NET AI Developers',
  tagline: 'Semantic Kernel agent not completing, Azure OpenAI SDK throwing 429, RAG pipeline returning hallucinated answers, or ML.NET model accuracy poor in production? Our .NET AI experts resolve it now.',
  painIntro:
    'Building AI into .NET applications means Semantic Kernel orchestration bugs, Azure OpenAI rate limiting, RAG retrieval quality issues, vector embedding pipeline failures, AI agent loops, ML.NET training vs inference gaps, and ONNX Runtime deployment problems — all requiring .NET-specific expertise to resolve quickly.',
  heroVariant:
    'We cover the full .NET AI stack: Semantic Kernel, Microsoft.Extensions.AI, Azure AI Foundry, Azure OpenAI SDK, RAG with Azure AI Search/Cosmos DB, vector search, AI agents (Microsoft Agent Framework), ML.NET, ONNX Runtime, Azure AI Document Intelligence, OpenAI SDK for .NET, and local model inference with Ollama.',
  geoLine: 'Supporting .NET AI developers across USA, UK, Canada, Ireland, Australia, Europe, Singapore, UAE, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET AI/ML: Semantic Kernel · Azure OpenAI SDK · RAG · Vector search · AI agents · ML.NET · ONNX · Ollama · Azure AI Foundry.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('.NET AI/ML', 'Semantic Kernel, Azure OpenAI SDK, RAG pipelines, vector search, AI agents, and ML.NET'),
  useCasesSection: {
    title: '.NET AI/ML Production Scenarios We Resolve',
    cases: [
      'Semantic Kernel planner selecting wrong function or looping without completing task',
      'Azure OpenAI SDK returning 429 throttling — token-per-minute limit exceeded, retry policy missing',
      'RAG pipeline returning hallucinated or irrelevant answers — embedding mismatch, chunking strategy, or retrieval threshold',
      'Vector search returning wrong documents — embedding model inconsistency between index time and query time',
      'AI agent getting stuck in retry loop — memory management, function calling format, or stop condition missing',
      'ML.NET model prediction different in production than in training — feature pipeline mismatch or data normalization issue',
      'ONNX Runtime throwing shape mismatch — input tensor dimensions wrong or pre-processing not matching training',
      'Azure AI Document Intelligence extraction missing fields — model selection or confidence threshold misconfigured',
    ],
  },
  proxySection: {
    title: '.NET AI Interview Proxy Support',
    intro:
      'Facing a Senior .NET AI Engineer or Azure AI Solutions Architect interview? Our experts provide real-time guidance during your live technical round.',
    points: [
      'Semantic Kernel architecture and agent design patterns',
      'RAG pipeline design — chunking, embedding, retrieval, reranking, grounding',
      'Azure AI Foundry and Azure OpenAI solution architecture',
      'Vector database selection — Azure AI Search, Cosmos DB, Qdrant, Pinecone in .NET',
      'AI agent frameworks — Microsoft Agent Framework, AutoGen, Semantic Kernel Agents',
      'ML.NET vs Azure ML vs ONNX — when to use each in production .NET systems',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'Azure OpenAI .NET Job Support', href: '/azure-openai-dotnet-job-support/' },
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
      { label: '.NET AI Interview Proxy Support', href: '/dotnet-ai-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
    additionalLinks: [
      { label: 'AI Agents .NET Job Support', href: '/ai-agents-dotnet-job-support/' },
      { label: 'ML.NET Job Support', href: '/mlnet-job-support/' },
    ],
  },
  bottomCTAHeading: 'Need .NET AI/ML Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET AI/ML help — Semantic Kernel, Azure OpenAI, RAG, vector search, AI agents, ML.NET. WhatsApp or Call: +91 96606 14469.',
};

export const semanticKernelJobSupport: LandingPageConfig = {
  slug: 'semantic-kernel-job-support',
  title: 'Semantic Kernel Job Support | Real-Time Expert Help',
  description: 'Real-time Semantic Kernel job support. Kernel plugins, planners, memory, AI agents, function calling, Azure OpenAI integration, and Semantic Kernel interview proxy support.',
  canonical: `${BASE_URL}/semantic-kernel-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Semantic Kernel job support', 'Semantic Kernel developer help', 'Semantic Kernel .NET support',
    'Semantic Kernel interview proxy', 'Semantic Kernel agent support', 'SK kernel plugins help',
  ],
  heroEyebrow: 'Semantic Kernel Job Support',
  h1: 'Semantic Kernel Job Support — Real-Time Expert Help',
  tagline: 'Semantic Kernel agent looping, planner not selecting the right function, kernel plugin registration failing, or memory connector returning wrong results? Our experts resolve it now.',
  painIntro: 'Semantic Kernel is the .NET-native AI orchestration framework — but plugin registration, function calling with Azure OpenAI, planner behavior, kernel memory configuration, multi-agent patterns, and Handlebars vs function_call prompt rendering all require expertise.',
  heroVariant: 'We help with KernelBuilder configuration, plugin creation (KernelFunction, KernelPlugin), function calling with Azure OpenAI and OpenAI, Handlebars planner vs FunctionChoiceBehavior, kernel memory (ITextMemoryPlugin, ISemanticTextMemory), AI agents with AgentGroupChat, streaming responses, and Semantic Kernel with .NET Aspire.',
  geoLine: 'Supporting Semantic Kernel .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Semantic Kernel: Plugins · Function calling · Planners · Memory · Agents · AgentGroupChat · Streaming · Azure OpenAI.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Semantic Kernel', 'kernel plugins, function calling, planners, memory connectors, and AI agents'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Azure OpenAI .NET Job Support', href: '/azure-openai-dotnet-job-support/' },
      { label: 'AI Agents .NET Job Support', href: '/ai-agents-dotnet-job-support/' },
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Semantic Kernel Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Semantic Kernel help — plugins, planners, memory, AI agents, function calling. WhatsApp or Call: +91 96606 14469.',
};

export const microsoftExtensionsAiJobSupport: LandingPageConfig = {
  slug: 'microsoft-extensions-ai-job-support',
  title: 'Microsoft.Extensions.AI Job Support | Real-Time Expert Help',
  description: 'Real-time Microsoft.Extensions.AI job support. IChatClient, IEmbeddingGenerator, middleware pipeline, DI integration, .NET AI abstractions, and interview proxy support.',
  canonical: `${BASE_URL}/microsoft-extensions-ai-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Microsoft.Extensions.AI job support', 'Microsoft Extensions AI developer help', 'IChatClient .NET support',
    'IEmbeddingGenerator support', 'Microsoft.Extensions.AI interview proxy',
  ],
  heroEyebrow: 'Microsoft.Extensions.AI Job Support',
  h1: 'Microsoft.Extensions.AI Job Support — Real-Time Expert Help',
  tagline: 'IChatClient DI resolution failing, IEmbeddingGenerator not returning expected vectors, middleware pipeline not executing, or provider switching causing compatibility issues? Our experts are ready.',
  painIntro: 'Microsoft.Extensions.AI provides .NET standard abstractions for AI services — IChatClient, IEmbeddingGenerator, middleware pipelines, and DI integration — but wiring them with Azure OpenAI, OpenAI, Ollama, and other providers while maintaining testability requires specific knowledge.',
  heroVariant: 'We help with Microsoft.Extensions.AI package integration, IChatClient and IEmbeddingGenerator setup with Azure OpenAI and OpenAI providers, middleware pipeline design (logging, caching, retry, telemetry), DI registration patterns, testing AI code with fakes, and combining with Semantic Kernel.',
  geoLine: 'Supporting Microsoft.Extensions.AI developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'M.E.AI: IChatClient · IEmbeddingGenerator · Middleware pipeline · DI integration · Azure OpenAI · OpenAI · Ollama providers.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Microsoft.Extensions.AI', 'IChatClient, IEmbeddingGenerator, middleware pipeline, DI registration, and provider configuration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Azure OpenAI .NET Job Support', href: '/azure-openai-dotnet-job-support/' },
      { label: 'Ollama .NET Job Support', href: '/ollama-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Microsoft.Extensions.AI Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Microsoft.Extensions.AI help — IChatClient, IEmbeddingGenerator, middleware, DI. WhatsApp or Call: +91 96606 14469.',
};

export const azureAiFoundryDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-ai-foundry-dotnet-job-support',
  title: 'Azure AI Foundry .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure AI Foundry .NET job support. Project setup, model deployment, evaluation, prompt flows, AI agent orchestration, Azure AI SDK, and interview proxy support.',
  canonical: `${BASE_URL}/azure-ai-foundry-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure AI Foundry .NET job support', 'Azure AI Foundry developer help', 'Azure AI Studio .NET support',
    'Azure AI Foundry interview proxy', 'Azure AI SDK .NET support',
  ],
  heroEyebrow: 'Azure AI Foundry .NET Job Support',
  h1: 'Azure AI Foundry .NET Job Support — Real-Time Expert Help',
  tagline: 'Azure AI Foundry project deployment failing, AI model endpoint not responding, evaluation pipeline broken, or Azure AI SDK authentication failing? Our experts resolve it right now.',
  painIntro: 'Azure AI Foundry (formerly Azure AI Studio) is the enterprise AI development platform — but project configuration, model deployment, Managed Identity authentication, prompt flow design, evaluation framework, agent deployment, and Azure AI SDK integration in .NET all require platform-specific expertise.',
  heroVariant: 'We help with Azure AI Foundry project and hub setup, model catalog deployment (GPT-4o, Phi, Mistral), Azure AI SDK (azure-ai-projects, azure-ai-inference) in .NET, prompt flow and evaluation, AI agent deployment from Foundry, Managed Identity for model access, and connecting Semantic Kernel to Azure AI Foundry endpoints.',
  geoLine: 'Supporting Azure AI Foundry .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure AI Foundry: Project setup · Model deployment · Evaluation · Prompt flow · AI agents · Azure AI SDK · Managed Identity.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Azure AI Foundry .NET', 'project setup, model deployment, evaluation, Azure AI SDK, and Managed Identity authentication'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Azure OpenAI .NET Job Support', href: '/azure-openai-dotnet-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'AI Agents .NET Job Support', href: '/ai-agents-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure AI Foundry .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure AI Foundry help — model deployment, evaluation, AI SDK, Managed Identity. WhatsApp or Call: +91 96606 14469.',
};

export const azureOpenAiDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-openai-dotnet-job-support',
  title: 'Azure OpenAI .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure OpenAI .NET job support. Chat completions, function calling, embeddings, streaming, rate limits, Managed Identity, and Azure OpenAI interview proxy support.',
  canonical: `${BASE_URL}/azure-openai-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure OpenAI .NET job support', 'Azure OpenAI SDK developer help', 'Azure OpenAI production support',
    'Azure OpenAI interview proxy', 'OpenAI .NET SDK support', 'Azure OpenAI function calling',
  ],
  heroEyebrow: 'Azure OpenAI .NET Job Support',
  h1: 'Azure OpenAI .NET Job Support — Real-Time Expert Help',
  tagline: 'Azure OpenAI SDK returning 429 throttling, function calling format invalid, streaming response not processing correctly, or Managed Identity failing to authenticate? Our experts resolve it now.',
  painIntro: 'Azure OpenAI powers the AI layer of modern .NET applications — but deployment configuration, API version pinning, function/tool calling JSON format, streaming chat completions, embeddings generation, rate limit management, and Managed Identity vs API key auth all have production-critical details.',
  heroVariant: 'We help with AzureOpenAIClient and OpenAIClient configuration, deployment name vs model name confusion, chat completions with tool/function calling, streaming completions, embeddings with AzureOpenAIEmbeddingGenerator, retry and rate limit handling, Managed Identity auth via DefaultAzureCredential, and token counting with tiktoken.',
  geoLine: 'Supporting Azure OpenAI .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure OpenAI: AzureOpenAIClient · Chat completions · Function calling · Embeddings · Streaming · Rate limiting · Managed Identity.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Azure OpenAI .NET', 'chat completions, function calling, embeddings, streaming, rate limiting, and Managed Identity auth'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
      { label: 'Azure AI Foundry .NET Job Support', href: '/azure-ai-foundry-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure OpenAI .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure OpenAI help — chat completions, function calling, embeddings, streaming. WhatsApp or Call: +91 96606 14469.',
};

export const ragDotnetJobSupport: LandingPageConfig = {
  slug: 'rag-dotnet-job-support',
  title: 'RAG .NET Job Support | Real-Time RAG Pipeline Expert Help',
  description: 'Real-time RAG .NET job support. Retrieval-augmented generation pipeline design, chunking, embedding, Azure AI Search integration, reranking, grounding, and RAG interview proxy support.',
  canonical: `${BASE_URL}/rag-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'RAG .NET job support', 'retrieval augmented generation .NET support', 'RAG pipeline developer help',
    'RAG .NET interview proxy', 'Azure AI Search RAG support', 'RAG grounding .NET help',
  ],
  heroEyebrow: 'RAG .NET Job Support',
  h1: 'RAG .NET Job Support — Real-Time Retrieval-Augmented Generation Expert Help',
  tagline: 'RAG pipeline returning hallucinated answers, embeddings not matching at query time, retrieval returning irrelevant chunks, or reranker not improving quality? Our experts resolve it now.',
  painIntro: 'RAG (Retrieval-Augmented Generation) in .NET involves chunking strategy, embedding model consistency, vector store indexing, hybrid search configuration, reranking, prompt construction, and grounding — each step can silently degrade answer quality without obvious errors.',
  heroVariant: 'We help with document chunking strategies (fixed, semantic, hierarchical), embedding generation with Azure OpenAI text-embedding-3-large, vector indexing in Azure AI Search and Cosmos DB, hybrid search (vector + keyword), semantic reranking, prompt construction for grounding, citation tracking, and RAG evaluation with Azure AI Foundry.',
  geoLine: 'Supporting RAG .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'RAG .NET: Chunking · Embeddings · Azure AI Search · Cosmos DB vector · Hybrid search · Reranking · Grounding · Evaluation.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('RAG .NET', 'document chunking, embedding consistency, vector indexing, hybrid search, reranking, and grounding quality'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'Vector Search .NET Job Support', href: '/vector-search-dotnet-job-support/' },
      { label: 'Azure AI Search .NET Job Support', href: '/azure-ai-search-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need RAG .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time RAG pipeline help — chunking, embeddings, Azure AI Search, hybrid search, reranking. WhatsApp or Call: +91 96606 14469.',
};

export const vectorSearchDotnetJobSupport: LandingPageConfig = {
  slug: 'vector-search-dotnet-job-support',
  title: 'Vector Search .NET Job Support | Real-Time Expert Help',
  description: 'Real-time vector search .NET job support. Azure AI Search vector, Cosmos DB vector, Qdrant, Pinecone, embedding consistency, HNSW indexing, and vector search interview proxy.',
  canonical: `${BASE_URL}/vector-search-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'vector search .NET job support', 'Azure AI Search vector .NET help', 'vector database .NET support',
    'vector search interview proxy', 'embedding vector search .NET', 'Cosmos DB vector search support',
  ],
  heroEyebrow: 'Vector Search .NET Job Support',
  h1: 'Vector Search .NET Job Support — Real-Time Expert Help',
  tagline: 'Vector search returning semantically wrong documents, embedding dimension mismatch, HNSW index not updating, or Cosmos DB vector query ignoring filter? Our experts resolve it now.',
  painIntro: 'Vector search is the retrieval foundation of .NET RAG and AI applications — but embedding model selection, dimension consistency between indexing and querying, HNSW index configuration, hybrid search (vector + BM25) tuning, metadata filtering, and vector store selection all directly impact search quality.',
  heroVariant: 'We help with Azure AI Search vector index creation (HNSW, flat), vector field configuration, hybrid search combining vector and full-text, semantic ranker, Cosmos DB vector search (DiskANN), Qdrant and Pinecone .NET SDK integration, embedding generation consistency, and Semantic Kernel VectorStore connectors.',
  geoLine: 'Supporting vector search .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Vector search: Azure AI Search · Cosmos DB DiskANN · Qdrant · Pinecone · HNSW · Hybrid search · Semantic ranker · SK VectorStore.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Vector Search .NET', 'embedding consistency, HNSW indexing, hybrid search, metadata filtering, and vector store selection'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
      { label: 'Azure AI Search .NET Job Support', href: '/azure-ai-search-dotnet-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Cosmos DB .NET Job Support', href: '/cosmos-db-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Vector Search .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time vector search help — Azure AI Search, Cosmos DB, Qdrant, HNSW, hybrid search. WhatsApp or Call: +91 96606 14469.',
};

export const aiAgentsDotnetJobSupport: LandingPageConfig = {
  slug: 'ai-agents-dotnet-job-support',
  title: 'AI Agents .NET Job Support | Real-Time Expert Help',
  description: 'Real-time AI agents .NET job support. Semantic Kernel agents, Microsoft Agent Framework, multi-agent orchestration, tool calling, memory, and AI agents interview proxy support.',
  canonical: `${BASE_URL}/ai-agents-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'AI agents .NET job support', '.NET AI agent developer help', 'Semantic Kernel agents support',
    'AI agents interview proxy', 'multi-agent .NET support', 'Microsoft Agent Framework support',
  ],
  heroEyebrow: 'AI Agents .NET Job Support',
  h1: 'AI Agents .NET Job Support — Real-Time Expert Help',
  tagline: 'AI agent getting stuck in a loop, tools not being called correctly, multi-agent handoff failing, or agent memory losing context? Our .NET AI agent experts are ready now.',
  painIntro: 'AI agents in .NET bring new failure modes — tool/function calling format issues, agent memory not persisting correctly, multi-agent orchestration deadlocks, tool result parsing errors, agent stopping conditions not firing, and token budget exceeded before task completion.',
  heroVariant: 'We help with Semantic Kernel ChatCompletionAgent and AgentGroupChat, AgentChat patterns, tool/function calling configuration, agent memory with ISemanticTextMemory, AgentGroupChat termination strategies, Microsoft Agent Framework (preview), AutoGen .NET integration, and AI agent testing strategies.',
  geoLine: 'Supporting AI agents .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'AI Agents: SK Agents · AgentGroupChat · Tool calling · Agent memory · Termination strategies · Microsoft Agent Framework · AutoGen.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('AI Agents .NET', 'agent orchestration, tool calling, memory, multi-agent patterns, and termination strategies'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'Microsoft Agent Framework Job Support', href: '/microsoft-agent-framework-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Azure AI Foundry .NET Job Support', href: '/azure-ai-foundry-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need AI Agents .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time AI agents help — Semantic Kernel agents, tool calling, multi-agent orchestration, memory. WhatsApp or Call: +91 96606 14469.',
};

export const microsoftAgentFrameworkJobSupport: LandingPageConfig = {
  slug: 'microsoft-agent-framework-job-support',
  title: 'Microsoft Agent Framework Job Support | Real-Time Expert Help',
  description: 'Real-time Microsoft Agent Framework job support. Agent definition, tool integration, multi-agent orchestration, Azure AI Foundry deployment, and interview proxy support.',
  canonical: `${BASE_URL}/microsoft-agent-framework-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Microsoft Agent Framework job support', 'Microsoft Agent Framework developer help', 'MAF .NET support',
    'Microsoft Agent Framework interview proxy', 'Azure AI agent framework support',
  ],
  heroEyebrow: 'Microsoft Agent Framework Job Support',
  h1: 'Microsoft Agent Framework Job Support — Real-Time Expert Help',
  tagline: 'Microsoft Agent Framework agent not executing tools, Azure AI Foundry agent deployment failing, multi-agent orchestration breaking, or agent response format incorrect? Our experts resolve it now.',
  painIntro: 'Microsoft Agent Framework (preview) brings enterprise-grade AI agent orchestration to .NET — but agent definition, tool registration, Azure AI Foundry integration, multi-agent workflow design, and agent state management are all evolving rapidly with breaking changes.',
  heroVariant: 'We help with Microsoft Agent Framework agent definition and configuration, tool/function registration, Azure AI Foundry agent deployment, multi-agent workflow patterns, agent memory and state, integration with Semantic Kernel, and migration paths as the framework stabilizes.',
  geoLine: 'Supporting Microsoft Agent Framework developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Microsoft Agent Framework: Agent definition · Tool integration · Multi-agent orchestration · Azure AI Foundry · Semantic Kernel integration.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Microsoft Agent Framework', 'agent definition, tool registration, Azure AI Foundry deployment, and multi-agent orchestration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'AI Agents .NET Job Support', href: '/ai-agents-dotnet-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'Azure AI Foundry .NET Job Support', href: '/azure-ai-foundry-dotnet-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Microsoft Agent Framework Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Microsoft Agent Framework help — agent definition, tool integration, Azure AI Foundry. WhatsApp or Call: +91 96606 14469.',
};

export const mlnetJobSupport: LandingPageConfig = {
  slug: 'mlnet-job-support',
  title: 'ML.NET Job Support | Real-Time Expert Help',
  description: 'Real-time ML.NET job support. Model training, AutoML, prediction engine, feature pipelines, model evaluation, ONNX export, and ML.NET interview proxy support.',
  canonical: `${BASE_URL}/mlnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'ML.NET job support', 'ML.NET developer help', 'ML.NET model training support',
    'ML.NET interview proxy', 'AutoML .NET support', 'ML.NET production support',
  ],
  heroEyebrow: 'ML.NET Job Support',
  h1: 'ML.NET Job Support — Real-Time Expert Help',
  tagline: 'ML.NET model accuracy poor in production, AutoML taking too long without good results, PredictionEngine not thread-safe, or ONNX export failing? Our experts resolve it right now.',
  painIntro: 'ML.NET enables .NET developers to build and deploy machine learning models in C# — but feature pipeline design, trainer selection, AutoML configuration, PredictionEngine thread safety, model evaluation metrics, ONNX export for edge deployment, and training/inference data format consistency all require expertise.',
  heroVariant: 'We help with MLContext configuration, data loading and transformation pipelines, trainer selection (BinaryClassification, MulticlassClassification, Regression, Clustering), AutoML experiment configuration, PredictionEnginePool for thread-safe serving, model evaluation (metrics, cross-validation), ONNX model export, and ML.NET with IHostedService.',
  geoLine: 'Supporting ML.NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'ML.NET: MLContext · Data pipelines · AutoML · PredictionEnginePool · Model evaluation · ONNX export · IHostedService.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('ML.NET', 'model training, AutoML, feature pipelines, PredictionEnginePool, model evaluation, and ONNX export'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'ONNX Runtime .NET Job Support', href: '/onnx-runtime-dotnet-job-support/' },
      { label: 'Azure AI Foundry .NET Job Support', href: '/azure-ai-foundry-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need ML.NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time ML.NET help — model training, AutoML, feature pipelines, ONNX export. WhatsApp or Call: +91 96606 14469.',
};

export const onnxRuntimeDotnetJobSupport: LandingPageConfig = {
  slug: 'onnx-runtime-dotnet-job-support',
  title: 'ONNX Runtime .NET Job Support | Real-Time Expert Help',
  description: 'Real-time ONNX Runtime .NET job support. InferenceSession, tensor input/output, model loading, GPU execution, pre-processing, and ONNX Runtime interview proxy support.',
  canonical: `${BASE_URL}/onnx-runtime-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'ONNX Runtime .NET job support', 'ONNX Runtime developer help', 'ONNX .NET model inference support',
    'ONNX Runtime interview proxy', 'OnnxRuntime InferenceSession support',
  ],
  heroEyebrow: 'ONNX Runtime .NET Job Support',
  h1: 'ONNX Runtime .NET Job Support — Real-Time Expert Help',
  tagline: 'ONNX Runtime InferenceSession throwing shape mismatch, GPU execution provider not loading, input tensor format wrong, or model output not matching training predictions? Our experts resolve it now.',
  painIntro: 'ONNX Runtime enables fast .NET inference for ML models — but input tensor shape specification, data type mapping (float32 vs int64), pre-processing consistency with training, GPU execution provider setup, model optimization, and batched inference all have platform-specific requirements.',
  heroVariant: 'We help with InferenceSession creation and configuration, input/output metadata inspection, tensor creation (DenseTensor, NamedOnnxValue), CPU vs GPU (CUDA, DirectML) execution provider selection, model input pre-processing consistency, output post-processing, and performance optimization for production .NET inference.',
  geoLine: 'Supporting ONNX Runtime .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'ONNX Runtime: InferenceSession · Tensor shapes · Execution providers · GPU (CUDA/DirectML) · Pre/post-processing · Batched inference.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('ONNX Runtime .NET', 'InferenceSession, tensor shape, GPU execution provider, pre-processing consistency, and batched inference'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ML.NET Job Support', href: '/mlnet-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Azure AI Foundry .NET Job Support', href: '/azure-ai-foundry-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need ONNX Runtime .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time ONNX Runtime help — InferenceSession, tensor shapes, GPU execution, pre-processing. WhatsApp or Call: +91 96606 14469.',
};

export const azureAiSearchDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-ai-search-dotnet-job-support',
  title: 'Azure AI Search .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure AI Search .NET job support. Index design, vector search, hybrid search, semantic ranker, skill sets, indexers, Managed Identity, and interview proxy support.',
  canonical: `${BASE_URL}/azure-ai-search-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure AI Search .NET job support', 'Azure Cognitive Search .NET support', 'Azure AI Search developer help',
    'Azure AI Search interview proxy', 'Azure AI Search vector search .NET',
  ],
  heroEyebrow: 'Azure AI Search .NET Job Support',
  h1: 'Azure AI Search .NET Job Support — Real-Time Expert Help',
  tagline: 'Azure AI Search index returning wrong results, vector search dimension mismatch, semantic ranker not improving quality, or indexer failing on source data? Our experts resolve it now.',
  painIntro: 'Azure AI Search is the enterprise search and RAG retrieval backbone for .NET — but index schema design, vector field configuration, hybrid search tuning, semantic ranker activation, skill set and indexer configuration, Managed Identity for data sources, and SearchClient query design all require expertise.',
  heroVariant: 'We help with SearchIndexClient and SearchClient configuration, index schema (searchable, filterable, vector fields), vector index creation (HNSW), hybrid search (vector + BM25) configuration, semantic ranker (semantic configuration), skill sets for AI enrichment, blob storage and SQL indexers, Managed Identity for data sources, and Semantic Kernel VectorStore with Azure AI Search.',
  geoLine: 'Supporting Azure AI Search .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Azure AI Search: Index schema · Vector (HNSW) · Hybrid search · Semantic ranker · Skill sets · Indexers · Managed Identity · SK VectorStore.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Azure AI Search .NET', 'index design, vector search, hybrid search, semantic ranker, skill sets, and indexers'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
      { label: 'Vector Search .NET Job Support', href: '/vector-search-dotnet-job-support/' },
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure AI Search .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Azure AI Search help — vector search, hybrid search, semantic ranker, indexers. WhatsApp or Call: +91 96606 14469.',
};

export const azureAiDocumentIntelligenceDotnetJobSupport: LandingPageConfig = {
  slug: 'azure-ai-document-intelligence-dotnet-job-support',
  title: 'Azure AI Document Intelligence .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Azure AI Document Intelligence .NET job support. Pre-built models, custom models, DocumentAnalysisClient, extraction accuracy, confidence scores, and interview proxy support.',
  canonical: `${BASE_URL}/azure-ai-document-intelligence-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Azure AI Document Intelligence .NET job support', 'Azure Form Recognizer .NET support', 'Document Intelligence developer help',
    'Document Intelligence interview proxy', 'DocumentAnalysisClient .NET help',
  ],
  heroEyebrow: 'Azure AI Document Intelligence .NET Job Support',
  h1: 'Azure AI Document Intelligence .NET Job Support — Real-Time Expert Help',
  tagline: 'Document Intelligence extraction missing fields, confidence score too low, custom model not generalizing, or DocumentAnalysisClient throwing authentication error? Our experts resolve it now.',
  painIntro: 'Azure AI Document Intelligence (formerly Form Recognizer) extracts structured data from documents in .NET — but model selection (pre-built vs custom), training data quality, field confidence thresholds, post-processing of low-confidence extractions, and table/key-value extraction normalization require real expertise.',
  heroVariant: 'We help with DocumentAnalysisClient configuration, pre-built model selection (invoice, receipt, ID, W2, general document), custom model training and labeling, field extraction post-processing, confidence score handling, table extraction normalization, Managed Identity access, and integration with RAG pipelines for document Q&A.',
  geoLine: 'Supporting Azure AI Document Intelligence .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Document Intelligence: Pre-built models · Custom models · DocumentAnalysisClient · Field extraction · Confidence scores · RAG integration.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Azure AI Document Intelligence .NET', 'pre-built models, custom model training, field extraction, confidence scores, and RAG pipeline integration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
      { label: 'Azure AI Foundry .NET Job Support', href: '/azure-ai-foundry-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Azure AI Document Intelligence .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Document Intelligence help — extraction, custom models, confidence scores, RAG integration. WhatsApp or Call: +91 96606 14469.',
};

export const openAiSdkDotnetJobSupport: LandingPageConfig = {
  slug: 'openai-sdk-dotnet-job-support',
  title: 'OpenAI SDK .NET Job Support | Real-Time Expert Help',
  description: 'Real-time OpenAI SDK .NET job support. Chat completions, function calling, structured outputs, streaming, file uploads, assistants API, and OpenAI SDK interview proxy support.',
  canonical: `${BASE_URL}/openai-sdk-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'OpenAI SDK .NET job support', 'OpenAI .NET developer help', 'OpenAI SDK production support',
    'OpenAI SDK interview proxy', 'OpenAI function calling .NET', 'OpenAI structured outputs .NET',
  ],
  heroEyebrow: 'OpenAI SDK .NET Job Support',
  h1: 'OpenAI SDK .NET Job Support — Real-Time Expert Help',
  tagline: 'OpenAI SDK function calling returning unexpected JSON, structured outputs schema not matching, assistants API thread management failing, or streaming not completing? Our experts resolve it now.',
  painIntro: 'The official OpenAI SDK for .NET (openai-dotnet) powers production AI applications — but function/tool calling JSON format, structured outputs with JSON Schema, streaming chat completions, assistants API thread and run management, file uploads for vision, and API key vs organization management all require specific implementation patterns.',
  heroVariant: 'We help with OpenAIClient configuration, ChatClient for chat completions, function/tool calling with ChatTool and required_action handling, structured outputs with response_format JSON schema, streaming completions, Assistants API (threads, runs, messages, files), vision with image URLs, and OpenAI-compatible providers (Ollama, Azure OpenAI).',
  geoLine: 'Supporting OpenAI SDK .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'OpenAI SDK: ChatClient · Function calling · Structured outputs · Streaming · Assistants API · Vision · Compatible providers.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('OpenAI SDK .NET', 'chat completions, function calling, structured outputs, streaming, and Assistants API'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Azure OpenAI .NET Job Support', href: '/azure-openai-dotnet-job-support/' },
      { label: 'Microsoft.Extensions.AI Job Support', href: '/microsoft-extensions-ai-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need OpenAI SDK .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time OpenAI SDK help — function calling, structured outputs, streaming, Assistants API. WhatsApp or Call: +91 96606 14469.',
};

export const ollamaDotnetJobSupport: LandingPageConfig = {
  slug: 'ollama-dotnet-job-support',
  title: 'Ollama .NET Job Support | Real-Time Local LLM Expert Help',
  description: 'Real-time Ollama .NET job support. Local LLM deployment, Ollama .NET client, model pull, chat completions, embedding generation, Semantic Kernel Ollama connector, and interview proxy.',
  canonical: `${BASE_URL}/ollama-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Ollama .NET job support', 'Ollama local LLM .NET support', 'Ollama developer help',
    'Ollama .NET interview proxy', 'local LLM .NET support', 'Ollama Semantic Kernel support',
  ],
  heroEyebrow: 'Ollama .NET Job Support',
  h1: 'Ollama .NET Job Support — Real-Time Local LLM Expert Help',
  tagline: 'Ollama model not loading, .NET HTTP client getting connection refused, embedding dimensions inconsistent, or Semantic Kernel Ollama connector not working? Our experts resolve it now.',
  painIntro: 'Ollama enables local and air-gapped .NET AI applications — but model deployment, API compatibility, .NET HTTP client integration, embedding generation for local RAG, Semantic Kernel OllamaChatCompletionService and OllamaTextEmbeddingGenerationService, and resource management for model loading all require specific knowledge.',
  heroVariant: 'We help with Ollama server setup and model management (pull, list, delete), .NET HTTP client integration using Ollama REST API, OllamaApiClient usage, Semantic Kernel Ollama connectors (chat + embedding), Microsoft.Extensions.AI Ollama provider, embedding generation with local models (nomic-embed-text, mxbai-embed-large), and hybrid local+cloud AI architectures.',
  geoLine: 'Supporting Ollama .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Ollama: Local model deployment · .NET HTTP client · OllamaApiClient · SK connectors · M.E.AI provider · Local embeddings · Air-gapped AI.',
  highlights: aiMlDotnetHighlights,
  faqs: dotnetTechFaqs('Ollama .NET', 'local model deployment, .NET HTTP client, Semantic Kernel connectors, and local embedding generation'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/' },
      { label: 'Microsoft.Extensions.AI Job Support', href: '/microsoft-extensions-ai-job-support/' },
      { label: 'RAG .NET Job Support', href: '/rag-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Ollama .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Ollama help — local model deployment, .NET client, Semantic Kernel connectors, local embeddings. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseFPages: LandingPageConfig[] = [
  dotnetAiMlJobSupport,
  semanticKernelJobSupport,
  microsoftExtensionsAiJobSupport,
  azureAiFoundryDotnetJobSupport,
  azureOpenAiDotnetJobSupport,
  ragDotnetJobSupport,
  vectorSearchDotnetJobSupport,
  aiAgentsDotnetJobSupport,
  microsoftAgentFrameworkJobSupport,
  mlnetJobSupport,
  onnxRuntimeDotnetJobSupport,
  azureAiSearchDotnetJobSupport,
  azureAiDocumentIntelligenceDotnetJobSupport,
  openAiSdkDotnetJobSupport,
  ollamaDotnetJobSupport,
];

// ─── PHASE G: Cloud-Native .NET Pages ────────────────────────────────────────

const cloudNativeDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Cloud-Native .NET Support',
    description:
      'Live expert help for .NET Aspire, Docker, Kubernetes, Dapr, service mesh, OpenTelemetry, health checks, and production cloud-native debugging and incident resolution.',
  },
  {
    title: 'Cloud-Native Architecture & Design',
    description:
      'Hands-on guidance for cloud-native .NET patterns — microservices, container orchestration, distributed tracing, observability, resilience with Polly, and event-driven design.',
  },
  {
    title: '.NET Cloud-Native Interview Proxy',
    description:
      'Real-time guidance during live cloud-native .NET technical interviews — Kubernetes, Docker, .NET Aspire, Dapr, service mesh, observability, and distributed systems design.',
  },
];

export const dotnetAspireJobSupport: LandingPageConfig = {
  slug: 'dotnet-aspire-job-support',
  title: '.NET Aspire Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Aspire job support. AppHost orchestration, service defaults, component integrations, dashboard, health checks, OpenTelemetry, and .NET Aspire interview proxy.',
  canonical: `${BASE_URL}/dotnet-aspire-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Aspire job support', '.NET Aspire developer help', '.NET Aspire AppHost support',
    '.NET Aspire interview proxy', '.NET Aspire production support', 'Aspire cloud-native support',
  ],
  heroEyebrow: '.NET Aspire Job Support',
  h1: '.NET Aspire Job Support — Real-Time Expert Help',
  tagline: '.NET Aspire AppHost not discovering services, component integration failing, health check not passing, or Aspire dashboard not showing telemetry? Our experts resolve it now.',
  painIntro: '.NET Aspire is the opinionated cloud-native .NET stack — but AppHost orchestration configuration, service defaults, component library integration (Redis, SQL, Service Bus, Azure Storage), health check wiring, OpenTelemetry integration, and deployment to Azure Container Apps all have specific requirements.',
  heroVariant: 'We help with AppHost project configuration and resource definition, ServiceDefaults extension methods (AddServiceDefaults), component library integration (Aspire.Azure.*, Aspire.Npgsql, Aspire.StackExchange.Redis), Aspire dashboard and OTLP endpoint, health checks, distributed tracing with OpenTelemetry, and deployment manifests for Azure Container Apps.',
  geoLine: 'Supporting .NET Aspire developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Aspire: AppHost · ServiceDefaults · Components · Dashboard · Health checks · OpenTelemetry · Azure Container Apps deployment.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Aspire', 'AppHost orchestration, service defaults, component integrations, health checks, and Azure Container Apps deployment'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Docker .NET Job Support', href: '/docker-dotnet-job-support/' },
      { label: 'Azure Container Apps .NET Job Support', href: '/azure-container-apps-dotnet-job-support/' },
      { label: '.NET OpenTelemetry Job Support', href: '/dotnet-opentelemetry-job-support/' },
      { label: 'Dapr .NET Job Support', href: '/dapr-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Aspire Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Aspire help — AppHost, ServiceDefaults, components, health checks, Azure Container Apps. WhatsApp or Call: +91 96606 14469.',
};

export const dockerDotnetJobSupport: LandingPageConfig = {
  slug: 'docker-dotnet-job-support',
  title: 'Docker .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Docker .NET job support. Multi-stage Dockerfile, .NET base images, layer caching, non-root user, docker-compose, health checks, and Docker .NET interview proxy support.',
  canonical: `${BASE_URL}/docker-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Docker .NET job support', 'Docker .NET developer help', '.NET Dockerfile support',
    'Docker .NET interview proxy', '.NET multi-stage build help', 'docker-compose .NET support',
  ],
  heroEyebrow: 'Docker .NET Job Support',
  h1: 'Docker .NET Job Support — Real-Time Expert Help',
  tagline: '.NET Docker build failing, image size too large, health check never passing, container running as root, or docker-compose networking broken? Our experts resolve it now.',
  painIntro: 'Containerizing .NET applications requires multi-stage Dockerfile design, correct .NET base image selection (runtime vs sdk vs aspnet), layer caching strategy, non-root user security, HTTPS certificate handling, environment-specific configuration, and docker-compose for local development.',
  heroVariant: 'We help with multi-stage Dockerfile design for ASP.NET Core, base image selection (mcr.microsoft.com/dotnet/aspnet vs sdk), layer caching via restore then build pattern, non-root user (USER app), HTTPS with dev certificate, environment variable injection, docker-compose for multi-service local development, health check instruction, and Docker Scout vulnerability scanning.',
  geoLine: 'Supporting Docker .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Docker .NET: Multi-stage build · Base images · Layer caching · Non-root user · HTTPS · docker-compose · Health check.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('Docker .NET', 'multi-stage Dockerfile, base image selection, layer caching, non-root user, HTTPS, and docker-compose'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Kubernetes Job Support', href: '/dotnet-kubernetes-job-support/' },
      { label: 'AKS .NET Job Support', href: '/aks-dotnet-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: 'Azure DevOps .NET Job Support', href: '/azure-devops-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Docker .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Docker .NET help — multi-stage builds, base images, layer caching, docker-compose. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetKubernetesJobSupport: LandingPageConfig = {
  slug: 'dotnet-kubernetes-job-support',
  title: '.NET Kubernetes Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Kubernetes job support. Deployments, services, ConfigMaps, Secrets, health probes, RBAC, Ingress, KEDA, Helm, and .NET Kubernetes interview proxy support.',
  canonical: `${BASE_URL}/dotnet-kubernetes-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Kubernetes job support', 'Kubernetes .NET developer help', '.NET Kubernetes production support',
    '.NET Kubernetes interview proxy', 'Kubernetes .NET deployment help', 'K8s .NET support',
  ],
  heroEyebrow: '.NET Kubernetes Job Support',
  h1: '.NET Kubernetes Job Support — Real-Time Expert Help',
  tagline: '.NET pod in CrashLoopBackOff, liveness probe killing healthy pods, ConfigMap not mounting correctly, Ingress returning 502, or RBAC blocking Secrets access? Our experts resolve it now.',
  painIntro: 'Running .NET applications on Kubernetes introduces deployment manifest design, health probe configuration, ConfigMap and Secret management, resource limits and requests, HPA/KEDA autoscaling, Ingress controller configuration, RBAC for Secrets access, and persistent volume claims for stateful .NET workloads.',
  heroVariant: 'We help with Deployment and Service manifest design for .NET apps, liveness/readiness/startup probe configuration, ConfigMap and Secret volume mounts, resource limits and OOMKilled diagnosis, HPA and KEDA scaling, Ingress with NGINX and cert-manager, RBAC for Pod service accounts, PersistentVolume for session state, and Helm chart creation for .NET services.',
  geoLine: 'Supporting .NET Kubernetes developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Kubernetes: Deployments · Health probes · ConfigMaps · Secrets · RBAC · Ingress · KEDA · Helm · PersistentVolumes.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Kubernetes', 'deployments, health probes, ConfigMap/Secret management, RBAC, Ingress, and KEDA autoscaling'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'AKS .NET Job Support', href: '/aks-dotnet-job-support/' },
      { label: 'Docker .NET Job Support', href: '/docker-dotnet-job-support/' },
      { label: 'Dapr .NET Job Support', href: '/dapr-dotnet-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Kubernetes Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Kubernetes help — deployments, health probes, RBAC, Ingress, KEDA, Helm. WhatsApp or Call: +91 96606 14469.',
};

export const daprDotnetJobSupport: LandingPageConfig = {
  slug: 'dapr-dotnet-job-support',
  title: 'Dapr .NET Job Support | Real-Time Expert Help',
  description: 'Real-time Dapr .NET job support. Service invocation, pub/sub, state management, actors, bindings, secrets, Dapr sidecar, and Dapr .NET interview proxy support.',
  canonical: `${BASE_URL}/dapr-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Dapr .NET job support', 'Dapr developer help', 'Dapr .NET production support',
    'Dapr interview proxy', 'Dapr pub/sub .NET support', 'Dapr state management .NET',
  ],
  heroEyebrow: 'Dapr .NET Job Support',
  h1: 'Dapr .NET Job Support — Real-Time Expert Help',
  tagline: 'Dapr sidecar not injecting, pub/sub subscription not receiving messages, state management returning stale data, or actor reminder not firing? Our Dapr .NET experts resolve it now.',
  painIntro: 'Dapr adds distributed systems building blocks to .NET — but sidecar injection configuration, component YAML design (state store, pub/sub, bindings, secrets), DaprClient vs HTTP API, actor lifecycle and reminder management, and Dapr in Azure Container Apps vs Kubernetes all have specific patterns.',
  heroVariant: 'We help with Dapr CLI and sidecar configuration, DaprClient for service invocation and pub/sub, state management (Redis, Cosmos DB state stores), actor implementation with IActor and ActorBase, timer and reminder registration, bindings (input/output), Dapr secrets component, and Dapr with .NET Aspire.',
  geoLine: 'Supporting Dapr .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Dapr: Sidecar · Service invocation · Pub/sub · State management · Actors · Reminders · Bindings · Secrets · Azure Container Apps.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('Dapr .NET', 'sidecar configuration, pub/sub, state management, actors, reminders, and bindings'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Azure Container Apps .NET Job Support', href: '/azure-container-apps-dotnet-job-support/' },
      { label: '.NET Kubernetes Job Support', href: '/dotnet-kubernetes-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Dapr .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Dapr help — sidecar, pub/sub, state management, actors, reminders, bindings. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetOpenTelemetryJobSupport: LandingPageConfig = {
  slug: 'dotnet-opentelemetry-job-support',
  title: '.NET OpenTelemetry Job Support | Real-Time Observability Expert Help',
  description: 'Real-time .NET OpenTelemetry job support. Traces, metrics, logs, OTLP exporter, Application Insights, Jaeger, Prometheus, and .NET OpenTelemetry interview proxy support.',
  canonical: `${BASE_URL}/dotnet-opentelemetry-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET OpenTelemetry job support', 'OpenTelemetry .NET developer help', '.NET observability support',
    'OpenTelemetry interview proxy', '.NET distributed tracing support', 'OTLP .NET exporter support',
  ],
  heroEyebrow: '.NET OpenTelemetry Job Support',
  h1: '.NET OpenTelemetry Job Support — Real-Time Observability Expert Help',
  tagline: '.NET OpenTelemetry traces not appearing in Jaeger, Activity spans not propagating across services, OTLP exporter connection refused, or metrics not showing in Prometheus? Our experts resolve it now.',
  painIntro: 'OpenTelemetry is the observability standard for cloud-native .NET — but Activity API vs ActivitySource, trace propagation across HTTP and messaging, OTLP exporter configuration, Prometheus metrics collection, Application Insights as backend, and sampling strategy all require platform-specific knowledge.',
  heroVariant: 'We help with OpenTelemetry .NET SDK configuration (AddOpenTelemetry, AddTracing, AddMetrics, AddLogging), ActivitySource and Activity span creation, trace context propagation (W3C TraceContext, Baggage), OTLP exporter for Jaeger/Zipkin/OTEL Collector, Prometheus exporter, Application Insights OpenTelemetry SDK, and .NET Aspire OpenTelemetry integration.',
  geoLine: 'Supporting .NET OpenTelemetry developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET OpenTelemetry: ActivitySource · Trace propagation · OTLP exporter · Prometheus · Application Insights · Sampling · .NET Aspire.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET OpenTelemetry', 'ActivitySource, trace propagation, OTLP exporter, Prometheus metrics, and Application Insights backend'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: '.NET Kubernetes Job Support', href: '/dotnet-kubernetes-job-support/' },
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET OpenTelemetry Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time OpenTelemetry help — traces, metrics, logs, OTLP exporter, Application Insights, Prometheus. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetMicroservicesJobSupport: LandingPageConfig = {
  slug: 'dotnet-microservices-job-support',
  title: '.NET Microservices Job Support | Real-Time Expert Help',
  description: 'Real-time .NET microservices job support. Service decomposition, inter-service communication, saga pattern, outbox, health checks, circuit breaker, and microservices interview proxy.',
  canonical: `${BASE_URL}/dotnet-microservices-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET microservices job support', '.NET microservices developer help', 'microservices .NET production support',
    '.NET microservices interview proxy', 'saga pattern .NET support', 'outbox pattern .NET help',
  ],
  heroEyebrow: '.NET Microservices Job Support',
  h1: '.NET Microservices Job Support — Real-Time Expert Help',
  tagline: '.NET microservice failing silently across service boundaries, saga transaction stuck in intermediate state, outbox not publishing events, or circuit breaker opening prematurely? Our experts resolve it now.',
  painIntro: '.NET microservices architectures involve inter-service communication (HTTP, gRPC, messaging), distributed transactions (saga, outbox), service discovery, circuit breakers, health checks, API gateway patterns, and distributed tracing — all significantly harder to debug than monolithic applications.',
  heroVariant: 'We help with .NET microservices inter-service communication (HTTP with HttpClientFactory, gRPC, Service Bus), saga choreography and orchestration, outbox pattern with EF Core and Service Bus, health check design, Polly-based circuit breakers and retry policies, API gateway with YARP or Azure APIM, service discovery, and distributed tracing with OpenTelemetry.',
  geoLine: 'Supporting .NET microservices developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Microservices: HttpClientFactory · gRPC · Saga · Outbox · Circuit breaker (Polly) · YARP · Health checks · OpenTelemetry.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Microservices', 'inter-service communication, saga pattern, outbox, circuit breakers, API gateway, and distributed tracing'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: 'Dapr .NET Job Support', href: '/dapr-dotnet-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
      { label: '.NET OpenTelemetry Job Support', href: '/dotnet-opentelemetry-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Microservices Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET microservices help — saga, outbox, circuit breaker, API gateway, distributed tracing. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetEventDrivenArchitectureJobSupport: LandingPageConfig = {
  slug: 'dotnet-event-driven-architecture-job-support',
  title: '.NET Event-Driven Architecture Job Support | Real-Time Expert Help',
  description: 'Real-time .NET event-driven architecture job support. Domain events, integration events, event sourcing, CQRS, outbox, MassTransit, NServiceBus, and EDA interview proxy support.',
  canonical: `${BASE_URL}/dotnet-event-driven-architecture-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET event-driven architecture job support', '.NET EDA developer help', 'CQRS .NET support',
    'event sourcing .NET support', 'MassTransit .NET help', '.NET EDA interview proxy',
  ],
  heroEyebrow: '.NET Event-Driven Architecture Job Support',
  h1: '.NET Event-Driven Architecture Job Support — Real-Time Expert Help',
  tagline: '.NET domain events not dispatching, MassTransit consumer throwing unhandled exception, event sourcing snapshot causing replay issues, or CQRS query returning stale projection? Our experts resolve it now.',
  painIntro: '.NET event-driven architectures involve domain events, integration events via messaging, CQRS with read model projections, event sourcing with EventStoreDB or Marten, outbox pattern for at-least-once delivery, and messaging framework configuration — all with production-specific failure modes.',
  heroVariant: 'We help with domain event patterns (INotification, MediatR), integration event publishing via outbox, CQRS with separate read/write models, event sourcing (EventStoreDB, Marten, Azure Event Hubs), MassTransit configuration (consumers, sagas, routing slips), NServiceBus saga configuration, and event schema versioning strategies.',
  geoLine: 'Supporting .NET EDA developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET EDA: Domain events · MediatR · MassTransit · NServiceBus · CQRS · Event sourcing · Outbox · Saga orchestration.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Event-Driven Architecture', 'domain events, MassTransit, NServiceBus, CQRS, event sourcing, and outbox pattern'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Azure Service Bus .NET Job Support', href: '/azure-service-bus-dotnet-job-support/' },
      { label: 'Azure Event Hubs .NET Job Support', href: '/azure-event-hubs-dotnet-job-support/' },
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Event-Driven Architecture Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET EDA help — domain events, MassTransit, CQRS, event sourcing, outbox, saga. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetResilienceJobSupport: LandingPageConfig = {
  slug: 'dotnet-resilience-job-support',
  title: '.NET Resilience Job Support | Real-Time Polly & Resilience4j Expert Help',
  description: 'Real-time .NET resilience job support. Polly v8, Microsoft.Extensions.Resilience, retry, circuit breaker, timeout, bulkhead, fallback, and resilience interview proxy support.',
  canonical: `${BASE_URL}/dotnet-resilience-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET resilience job support', 'Polly v8 .NET support', '.NET resilience developer help',
    '.NET resilience interview proxy', 'Microsoft.Extensions.Resilience support', 'circuit breaker .NET help',
  ],
  heroEyebrow: '.NET Resilience Job Support',
  h1: '.NET Resilience Job Support — Real-Time Expert Help',
  tagline: 'Polly circuit breaker opening too aggressively, retry policy causing thundering herd, timeout not cancelling downstream call, or resilience pipeline not applying to HttpClient? Our experts resolve it now.',
  painIntro: '.NET resilience with Polly v8 and Microsoft.Extensions.Resilience requires understanding retry with exponential backoff and jitter, circuit breaker state machine and thresholds, timeout CancellationToken propagation, bulkhead isolation, fallback responses, and AddResiliencePipeline integration with HttpClientFactory.',
  heroVariant: 'We help with Polly v8 ResiliencePipelineBuilder configuration, Microsoft.Extensions.Resilience AddResiliencePipeline and HttpClientFactory integration, retry with jitter (ExponentialBackoff.Jitter), circuit breaker thresholds and break duration, timeout with CancellationToken, bulkhead limiting, hedging for latency-sensitive calls, and Polly v7 to v8 migration.',
  geoLine: 'Supporting .NET resilience developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Resilience: Polly v8 · ResiliencePipeline · Retry + jitter · Circuit breaker · Timeout · Bulkhead · Hedging · HttpClientFactory.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Resilience (Polly)', 'retry with jitter, circuit breaker, timeout CancellationToken, bulkhead, and HttpClientFactory integration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Resilience Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Polly/resilience help — retry, circuit breaker, timeout, bulkhead, HttpClientFactory. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetSecurityJobSupport: LandingPageConfig = {
  slug: 'dotnet-security-job-support',
  title: '.NET Security Job Support | Real-Time Expert Help',
  description: 'Real-time .NET security job support. Authentication, authorization, JWT, OAuth/OIDC, Data Protection, HTTPS, CSP, CORS, secrets management, and .NET security interview proxy.',
  canonical: `${BASE_URL}/dotnet-security-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET security job support', '.NET security developer help', 'ASP.NET Core security support',
    '.NET security interview proxy', 'JWT .NET production support', 'OAuth OIDC .NET help',
  ],
  heroEyebrow: '.NET Security Job Support',
  h1: '.NET Security Job Support — Real-Time Expert Help',
  tagline: 'ASP.NET Core JWT validation returning 401, CORS policy blocking legitimate requests, Data Protection key rotation failing, or OAuth consent flow not completing? Our experts resolve it now.',
  painIntro: '.NET application security spans JWT bearer authentication, OAuth 2.0 and OIDC with Entra ID or Auth0, ASP.NET Core authorization policies, Data Protection API for token/cookie encryption, HTTPS certificate management, CORS policy configuration, CSP headers, and secrets management with Key Vault.',
  heroVariant: 'We help with AddAuthentication/AddJwtBearer configuration, OAuth2/OIDC with AddMicrosoftIdentityWebApp, authorization policies and requirements, Data Protection API for anti-forgery and cookie protection, HTTPS and HSTS configuration, CORS policy design, Content Security Policy with Nwebsec, secrets rotation, and OWASP Top 10 remediation in .NET.',
  geoLine: 'Supporting .NET security developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Security: JWT · OAuth/OIDC · Authorization policies · Data Protection · HTTPS · CORS · CSP · Key Vault · OWASP remediation.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Security', 'JWT authentication, OAuth/OIDC, authorization policies, Data Protection, CORS, and Key Vault secrets'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Azure Entra ID .NET Job Support', href: '/azure-entra-id-dotnet-job-support/' },
      { label: 'Azure Key Vault .NET Job Support', href: '/azure-key-vault-dotnet-job-support/' },
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Security Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET security help — JWT, OAuth/OIDC, authorization, Data Protection, CORS, OWASP. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetAuthenticationAuthorizationJobSupport: LandingPageConfig = {
  slug: 'dotnet-authentication-authorization-job-support',
  title: '.NET Authentication Authorization Job Support | Real-Time Expert Help',
  description: 'Real-time .NET authentication and authorization job support. Cookie auth, JWT, OAuth/OIDC, policy-based authorization, role claims, multi-scheme, and interview proxy support.',
  canonical: `${BASE_URL}/dotnet-authentication-authorization-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET authentication authorization job support', 'ASP.NET Core auth developer help', '.NET auth production support',
    '.NET auth interview proxy', 'policy-based authorization .NET', 'JWT bearer .NET support',
  ],
  heroEyebrow: '.NET Authentication Authorization Job Support',
  h1: '.NET Authentication Authorization Job Support — Real-Time Expert Help',
  tagline: 'ASP.NET Core authentication scheme not matching, policy-based authorization always returning 403, role claims missing from JWT, or multi-scheme auth causing redirect loops? Our experts resolve it now.',
  painIntro: 'ASP.NET Core authentication and authorization are deeply configurable — but authentication scheme pipeline ordering, JWT claim mapping, cookie authentication with remember-me and sliding expiration, custom authorization policy requirements, resource-based authorization, and multi-scheme configurations all require expertise.',
  heroVariant: 'We help with AddAuthentication scheme configuration, JWT bearer token validation (AddJwtBearer), cookie authentication (AddCookie), OAuth/OIDC (AddMicrosoftIdentityWebApp, AddOpenIdConnect), policy-based authorization (AddAuthorization with policies and requirements), role and claims-based authorization, IAuthorizationHandler for resource-based auth, and multi-tenant auth patterns.',
  geoLine: 'Supporting .NET authentication developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Auth: Cookie auth · JWT bearer · OAuth/OIDC · Policy-based authorization · Role claims · Resource-based auth · Multi-scheme.',
  highlights: cloudNativeDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Authentication Authorization', 'cookie auth, JWT bearer, OAuth/OIDC, policy-based authorization, and resource-based authorization'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Security Job Support', href: '/dotnet-security-job-support/' },
      { label: 'Azure Entra ID .NET Job Support', href: '/azure-entra-id-dotnet-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'Azure API Management .NET Job Support', href: '/azure-api-management-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Auth Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET auth help — JWT, cookie, OAuth/OIDC, policy-based authorization, resource-based auth. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseGPages: LandingPageConfig[] = [
  dotnetAspireJobSupport,
  dockerDotnetJobSupport,
  dotnetKubernetesJobSupport,
  daprDotnetJobSupport,
  dotnetOpenTelemetryJobSupport,
  dotnetMicroservicesJobSupport,
  dotnetEventDrivenArchitectureJobSupport,
  dotnetResilienceJobSupport,
  dotnetSecurityJobSupport,
  dotnetAuthenticationAuthorizationJobSupport,
];

// ─── PHASE H: Architecture Pages ─────────────────────────────────────────────

const architectureDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET Architecture Support',
    description:
      'Live expert help for Clean Architecture, DDD, CQRS, vertical slice, hexagonal architecture, and production pattern implementation in .NET enterprise applications.',
  },
  {
    title: 'Architecture Design & Code Review',
    description:
      'Hands-on guidance for designing .NET application architecture — bounded contexts, aggregate design, repository patterns, unit of work, and dependency injection patterns.',
  },
  {
    title: '.NET Architecture Interview Proxy',
    description:
      'Real-time guidance during live .NET architecture technical interviews — Clean Architecture, DDD, CQRS, system design, and enterprise pattern questions.',
  },
];

export const dotnetArchitecturePatternsJobSupport: LandingPageConfig = {
  slug: 'dotnet-architecture-patterns-job-support',
  title: '.NET Architecture Patterns Job Support | Real-Time Expert Help',
  description: 'Real-time .NET architecture patterns job support. Clean Architecture, DDD, CQRS, vertical slice, hexagonal, repository, unit of work, and architecture interview proxy.',
  canonical: `${BASE_URL}/dotnet-architecture-patterns-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET architecture patterns job support', '.NET architecture developer help', 'Clean Architecture .NET support',
    '.NET architecture interview proxy', 'DDD .NET support', 'CQRS .NET architecture help',
  ],
  heroEyebrow: '.NET Architecture Patterns Job Support',
  h1: '.NET Architecture Patterns Job Support — Real-Time Expert Help',
  tagline: 'Clean Architecture dependency inversion breaking, DDD aggregate not enforcing invariants, CQRS query returning stale data, or vertical slice boundaries causing coupling? Our experts resolve it now.',
  painIntro: '.NET enterprise applications adopt Clean Architecture, DDD, CQRS, and vertical slice architecture — but boundary definition, dependency direction, aggregate design, projection consistency, and practical implementation across a real codebase are genuinely difficult to get right.',
  heroVariant: 'We help with Clean Architecture layer dependency rules, DDD aggregate, entity, and value object design, CQRS with MediatR (commands/queries/handlers), vertical slice architecture with feature folders, hexagonal (ports and adapters) pattern, repository and unit of work with EF Core, specification pattern, and rich domain model vs anemic model tradeoffs.',
  geoLine: 'Supporting .NET architecture developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Architecture: Clean Architecture · DDD · CQRS/MediatR · Vertical slice · Hexagonal · Repository · Unit of work · Specification.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Architecture', 'Clean Architecture, DDD, CQRS, vertical slice, repository pattern, and unit of work'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET DDD Job Support', href: '/dotnet-ddd-job-support/' },
      { label: '.NET CQRS MediatR Job Support', href: '/dotnet-cqrs-mediatr-job-support/' },
      { label: '.NET Clean Architecture Job Support', href: '/dotnet-clean-architecture-job-support/' },
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Architecture Patterns Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET architecture help — Clean Architecture, DDD, CQRS, vertical slice, repository. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetCleanArchitectureJobSupport: LandingPageConfig = {
  slug: 'dotnet-clean-architecture-job-support',
  title: '.NET Clean Architecture Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Clean Architecture job support. Domain, Application, Infrastructure, Presentation layers, dependency inversion, MediatR, EF Core, and interview proxy support.',
  canonical: `${BASE_URL}/dotnet-clean-architecture-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Clean Architecture job support', 'Clean Architecture .NET developer help', 'Clean Architecture .NET support',
    'Clean Architecture interview proxy', 'Clean Architecture MediatR EF Core support',
  ],
  heroEyebrow: '.NET Clean Architecture Job Support',
  h1: '.NET Clean Architecture Job Support — Real-Time Expert Help',
  tagline: 'Clean Architecture dependency direction wrong, Domain layer referencing Infrastructure, Application layer too thin or too thick, or layer boundaries leaking? Our experts resolve it now.',
  painIntro: 'Clean Architecture in .NET enforces separation between Domain, Application, Infrastructure, and Presentation layers — but dependency inversion with interfaces, mapping strategies between layers, EF Core in Infrastructure, MediatR in Application, and balancing pragmatism vs purity all require real-world experience.',
  heroVariant: 'We help with Clean Architecture project structure (Domain, Application, Infrastructure, Presentation/API), dependency inversion with interfaces and DI, domain entities and value objects, application services with MediatR (IRequest/IRequestHandler), Infrastructure EF Core repositories, mapping (AutoMapper vs manual), and testing each layer independently.',
  geoLine: 'Supporting .NET Clean Architecture developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Clean Architecture: Domain · Application · Infrastructure · Presentation · Dependency inversion · MediatR · EF Core · Layer testing.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Clean Architecture', 'layer dependencies, domain/application/infrastructure separation, MediatR, EF Core repositories, and mapping'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
      { label: '.NET DDD Job Support', href: '/dotnet-ddd-job-support/' },
      { label: '.NET CQRS MediatR Job Support', href: '/dotnet-cqrs-mediatr-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Clean Architecture Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Clean Architecture help — layers, dependency inversion, MediatR, EF Core, layer testing. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetDddJobSupport: LandingPageConfig = {
  slug: 'dotnet-ddd-job-support',
  title: '.NET DDD Job Support | Real-Time Domain-Driven Design Expert Help',
  description: 'Real-time .NET DDD job support. Aggregates, entities, value objects, domain events, bounded contexts, ubiquitous language, repositories, and DDD interview proxy support.',
  canonical: `${BASE_URL}/dotnet-ddd-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET DDD job support', 'domain-driven design .NET support', 'DDD .NET developer help',
    '.NET DDD interview proxy', 'aggregate root .NET support', 'bounded context .NET DDD',
  ],
  heroEyebrow: '.NET DDD Job Support',
  h1: '.NET DDD Job Support — Real-Time Domain-Driven Design Expert Help',
  tagline: 'Aggregate not enforcing invariants, domain event not dispatching after persistence, bounded context boundary leaking, or value object equality comparison failing? Our DDD .NET experts resolve it now.',
  painIntro: 'Domain-Driven Design in .NET requires precise aggregate root design, value object equality by value, domain event dispatching after persistence (not before), bounded context boundary enforcement, ubiquitous language implementation in code, and anti-corruption layer for integration with external systems.',
  heroVariant: 'We help with aggregate root and entity design, value object implementation (record, IEquatable), domain event collection and dispatch (after EF Core SaveChanges), bounded context mapping (shared kernel, customer-supplier, anti-corruption layer), repository per aggregate root, domain service vs application service distinction, and specification pattern for domain queries.',
  geoLine: 'Supporting .NET DDD developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET DDD: Aggregates · Value objects · Domain events · Bounded contexts · Repositories · Domain services · Anti-corruption layer.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET DDD', 'aggregate design, value objects, domain event dispatch, bounded contexts, and anti-corruption layer'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
      { label: '.NET Clean Architecture Job Support', href: '/dotnet-clean-architecture-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
      { label: '.NET CQRS MediatR Job Support', href: '/dotnet-cqrs-mediatr-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET DDD Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time DDD help — aggregates, value objects, domain events, bounded contexts, repositories. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetCqrsMediatRJobSupport: LandingPageConfig = {
  slug: 'dotnet-cqrs-mediatr-job-support',
  title: '.NET CQRS MediatR Job Support | Real-Time Expert Help',
  description: 'Real-time .NET CQRS MediatR job support. Commands, queries, handlers, pipeline behaviors, notifications, validation, and CQRS MediatR interview proxy support.',
  canonical: `${BASE_URL}/dotnet-cqrs-mediatr-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET CQRS MediatR job support', 'MediatR .NET developer help', 'CQRS MediatR production support',
    'MediatR interview proxy', 'MediatR pipeline behavior support', 'CQRS query handler .NET',
  ],
  heroEyebrow: '.NET CQRS MediatR Job Support',
  h1: '.NET CQRS MediatR Job Support — Real-Time Expert Help',
  tagline: 'MediatR handler not resolving from DI, pipeline behavior not executing in correct order, validation behavior swallowing exceptions, or CQRS read model returning stale data? Our experts resolve it now.',
  painIntro: 'MediatR is the CQRS implementation backbone in .NET — but handler DI registration, pipeline behavior ordering (validation, logging, transaction, caching), notification handlers for domain events, and maintaining read/write model consistency all have specific production patterns.',
  heroVariant: 'We help with IRequest/IRequestHandler for commands and queries, INotification/INotificationHandler for domain events, IPipelineBehavior for cross-cutting concerns (validation with FluentValidation, logging, transaction, caching), MediatR DI registration with AddMediatR, and CQRS read model projection design.',
  geoLine: 'Supporting .NET CQRS MediatR developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET CQRS/MediatR: Commands · Queries · Handlers · Pipeline behaviors · Notifications · Validation · Transaction · Caching.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET CQRS MediatR', 'commands/queries, pipeline behaviors, notifications, FluentValidation, and read model projection'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
      { label: '.NET Clean Architecture Job Support', href: '/dotnet-clean-architecture-job-support/' },
      { label: '.NET DDD Job Support', href: '/dotnet-ddd-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET CQRS MediatR Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time CQRS MediatR help — commands, queries, pipeline behaviors, notifications, validation. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPerformanceJobSupport: LandingPageConfig = {
  slug: 'dotnet-performance-job-support',
  title: '.NET Performance Job Support | Real-Time Expert Help',
  description: 'Real-time .NET performance job support. Memory allocation, GC pressure, Span/Memory, async/await deadlocks, EF Core N+1, profiling, benchmarking, and interview proxy support.',
  canonical: `${BASE_URL}/dotnet-performance-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET performance job support', '.NET performance developer help', '.NET performance tuning support',
    '.NET performance interview proxy', '.NET memory allocation fix', 'async await deadlock .NET help',
  ],
  heroEyebrow: '.NET Performance Job Support',
  h1: '.NET Performance Job Support — Real-Time Expert Help',
  tagline: '.NET API latency spiking, GC Gen2 collections happening too often, async/await deadlock in production, or EF Core N+1 killing database? Our .NET performance experts resolve it now.',
  painIntro: '.NET performance problems range from allocation-heavy hot paths causing GC pressure, async/await deadlock from .Result or .Wait(), EF Core N+1 queries, HttpClient connection pool exhaustion, thread pool starvation, and memory leaks from event handler registration — all requiring profiling and deep framework knowledge.',
  heroVariant: 'We help with BenchmarkDotNet profiling, dotnet-trace and dotnet-counters analysis, Span<T>/Memory<T>/ArrayPool for allocation reduction, async/await deadlock diagnosis (ConfigureAwait, SynchronizationContext), EF Core N+1 fix with Include/projection, HttpClient/HttpClientFactory optimization, ValueTask vs Task selection, and production memory dump analysis.',
  geoLine: 'Supporting .NET performance developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Performance: BenchmarkDotNet · Span/Memory · Async deadlock · EF Core N+1 · GC analysis · dotnet-trace · HttpClient pooling.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Performance', 'memory allocation, GC pressure, async deadlock, EF Core N+1, HttpClient pooling, and profiling'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Performance Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET performance help — GC, async deadlock, EF Core N+1, BenchmarkDotNet, dotnet-trace. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetTestingJobSupport: LandingPageConfig = {
  slug: 'dotnet-testing-job-support',
  title: '.NET Testing Job Support | Real-Time Expert Help',
  description: 'Real-time .NET testing job support. xUnit, NUnit, Moq, FluentAssertions, integration tests, test containers, WebApplicationFactory, architecture tests, and testing interview proxy.',
  canonical: `${BASE_URL}/dotnet-testing-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET testing job support', '.NET testing developer help', 'xUnit .NET test support',
    '.NET testing interview proxy', 'Moq .NET support', 'integration testing .NET WebApplicationFactory',
  ],
  heroEyebrow: '.NET Testing Job Support',
  h1: '.NET Testing Job Support — Real-Time Expert Help',
  tagline: 'xUnit test not isolating correctly, Moq setup not matching call, WebApplicationFactory integration test failing, or test coverage missing critical paths? Our experts resolve it now.',
  painIntro: '.NET testing spans unit tests with xUnit and Moq, integration tests with WebApplicationFactory and real databases, architecture tests with NetArchTest, snapshot testing, performance benchmarks, and test data management — all requiring framework-specific knowledge to implement correctly.',
  heroVariant: 'We help with xUnit test organization (Facts, Theories, IClassFixture, ICollectionFixture), Moq setup (mock, setup, verify, it.IsAny), FluentAssertions readable assertions, WebApplicationFactory for integration tests with real HTTP, Testcontainers for real database testing, NetArchTest for architecture rule enforcement, and test data builders.',
  geoLine: 'Supporting .NET testing developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Testing: xUnit · NUnit · Moq · FluentAssertions · WebApplicationFactory · Testcontainers · NetArchTest · Test data builders.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Testing', 'xUnit, Moq, FluentAssertions, WebApplicationFactory, Testcontainers, and architecture tests'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Clean Architecture Job Support', href: '/dotnet-clean-architecture-job-support/' },
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Testing Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET testing help — xUnit, Moq, WebApplicationFactory, Testcontainers, architecture tests. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetWorkerServicesJobSupport: LandingPageConfig = {
  slug: 'dotnet-worker-services-job-support',
  title: '.NET Worker Services Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Worker Services job support. IHostedService, BackgroundService, hosted service lifecycle, health checks, graceful shutdown, and Worker Services interview proxy.',
  canonical: `${BASE_URL}/dotnet-worker-services-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Worker Services job support', 'BackgroundService .NET support', 'IHostedService .NET developer help',
    '.NET Worker Services interview proxy', '.NET background jobs support', 'hosted service .NET help',
  ],
  heroEyebrow: '.NET Worker Services Job Support',
  h1: '.NET Worker Services Job Support — Real-Time Expert Help',
  tagline: '.NET BackgroundService not stopping gracefully, IHostedService executing before dependencies ready, Kubernetes liveness probe not working with worker, or hosted service throwing unhandled exception silently? Our experts resolve it now.',
  painIntro: '.NET Worker Services and IHostedService/BackgroundService power background processing, long-running jobs, and service bus consumers — but lifecycle management, graceful shutdown with CancellationToken, health check reporting, Kubernetes probe configuration, and error handling for background exceptions all require specific patterns.',
  heroVariant: 'We help with BackgroundService ExecuteAsync implementation, CancellationToken for graceful shutdown, IHostedService StartAsync/StopAsync lifecycle, scoped services from singleton background service (IServiceScopeFactory), health check reporting from worker, Kubernetes liveness/readiness probe configuration, periodic timer with PeriodicTimer, and worker service deployment to AKS.',
  geoLine: 'Supporting .NET Worker Services developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Workers: BackgroundService · IHostedService · CancellationToken · IServiceScopeFactory · PeriodicTimer · Health checks · K8s probes.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Worker Services', 'BackgroundService, IHostedService, graceful shutdown, scoped services, health checks, and Kubernetes probes'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Azure Service Bus .NET Job Support', href: '/azure-service-bus-dotnet-job-support/' },
      { label: 'Azure Functions .NET Job Support', href: '/azure-functions-dotnet-job-support/' },
      { label: '.NET Kubernetes Job Support', href: '/dotnet-kubernetes-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Worker Services Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Worker Services help — BackgroundService, graceful shutdown, health checks, K8s probes. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetCachingJobSupport: LandingPageConfig = {
  slug: 'dotnet-caching-job-support',
  title: '.NET Caching Job Support | Real-Time Expert Help',
  description: 'Real-time .NET caching job support. IMemoryCache, IDistributedCache, Redis, cache invalidation, cache-aside pattern, HybridCache, and .NET caching interview proxy support.',
  canonical: `${BASE_URL}/dotnet-caching-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET caching job support', '.NET Redis caching support', 'IDistributedCache .NET help',
    '.NET caching interview proxy', 'cache invalidation .NET', 'HybridCache .NET support',
  ],
  heroEyebrow: '.NET Caching Job Support',
  h1: '.NET Caching Job Support — Real-Time Expert Help',
  tagline: 'IDistributedCache not serializing correctly, Redis connection pool exhausted, cache invalidation race condition, or HybridCache L1/L2 not synchronizing? Our experts resolve it now.',
  painIntro: '.NET caching with IMemoryCache, IDistributedCache (Redis), and the new HybridCache (L1+L2) requires careful design — serialization format, cache key design, expiry strategy, stampede prevention, invalidation patterns, and Redis connection pool sizing all directly impact performance and correctness.',
  heroVariant: 'We help with IMemoryCache sliding vs absolute expiry, IDistributedCache with StackExchange.Redis configuration, Redis connection pool sizing (ConnectionMultiplexer), serialization (JSON vs MessagePack), cache-aside pattern, HybridCache L1+L2 configuration (new in .NET 9), cache stampede prevention with semaphore or GetOrCreateAsync, and output caching in ASP.NET Core.',
  geoLine: 'Supporting .NET caching developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Caching: IMemoryCache · IDistributedCache · Redis · HybridCache · Cache-aside · Stampede prevention · Output caching.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Caching', 'IMemoryCache, IDistributedCache, Redis, HybridCache, cache invalidation, and stampede prevention'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Performance Job Support', href: '/dotnet-performance-job-support/' },
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Caching Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET caching help — IMemoryCache, Redis, HybridCache, stampede prevention, output caching. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetApiDesignJobSupport: LandingPageConfig = {
  slug: 'dotnet-api-design-job-support',
  title: '.NET API Design Job Support | Real-Time Expert Help',
  description: 'Real-time .NET API design job support. REST conventions, versioning, pagination, problem details, OpenAPI/Swagger, rate limiting, idempotency, and API design interview proxy.',
  canonical: `${BASE_URL}/dotnet-api-design-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET API design job support', 'REST API .NET developer help', '.NET API versioning support',
    '.NET API design interview proxy', 'OpenAPI Swagger .NET support', 'problem details .NET API',
  ],
  heroEyebrow: '.NET API Design Job Support',
  h1: '.NET API Design Job Support — Real-Time Expert Help',
  tagline: '.NET REST API returning inconsistent error responses, versioning breaking client compatibility, pagination not cursor-stable, or OpenAPI schema missing nullable types? Our experts resolve it now.',
  painIntro: '.NET REST API design involves HTTP verb and status code correctness, ProblemDetails error responses (RFC 9457), API versioning strategies, cursor vs offset pagination, OpenAPI schema generation accuracy, rate limiting, idempotency keys, and hypermedia — all affecting API quality and consumer experience.',
  heroVariant: 'We help with ASP.NET Core REST conventions, ProblemDetails and IProblemDetailsService, API versioning (Asp.Versioning.Http), cursor-based and offset pagination patterns, Swashbuckle and Microsoft.AspNetCore.OpenApi schema generation, rate limiting (AddRateLimiter with sliding window, token bucket), idempotency key middleware, and API gateway design.',
  geoLine: 'Supporting .NET API design developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET API Design: ProblemDetails · API versioning · Pagination · OpenAPI · Rate limiting · Idempotency · REST conventions.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET API Design', 'ProblemDetails, API versioning, pagination, OpenAPI schema, rate limiting, and idempotency'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: 'ASP.NET Core Minimal API Job Support', href: '/aspnet-core-minimal-api-job-support/' },
      { label: 'Azure API Management .NET Job Support', href: '/azure-api-management-dotnet-job-support/' },
      { label: '.NET Security Job Support', href: '/dotnet-security-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET API Design Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET API design help — ProblemDetails, versioning, pagination, OpenAPI, rate limiting. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetDependencyInjectionJobSupport: LandingPageConfig = {
  slug: 'dotnet-dependency-injection-job-support',
  title: '.NET Dependency Injection Job Support | Real-Time Expert Help',
  description: 'Real-time .NET dependency injection job support. DI container configuration, service lifetimes, scope validation, keyed services, decorator pattern, and DI interview proxy.',
  canonical: `${BASE_URL}/dotnet-dependency-injection-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET dependency injection job support', '.NET DI developer help', 'ASP.NET Core DI support',
    '.NET DI interview proxy', 'service lifetime .NET DI', 'keyed services .NET 8 DI',
  ],
  heroEyebrow: '.NET Dependency Injection Job Support',
  h1: '.NET Dependency Injection Job Support — Real-Time Expert Help',
  tagline: '.NET DI resolving wrong service lifetime, captive dependency causing stale state, keyed service not resolving correctly, or decorator pattern breaking DI? Our experts resolve it now.',
  painIntro: '.NET built-in DI container requires understanding service lifetimes (singleton/scoped/transient), captive dependency errors, scope validation, open generic registrations, keyed services (new in .NET 8), factory delegates, IServiceProviderFactory, decorator pattern with Scrutor, and DI in Azure Functions or Worker Services.',
  heroVariant: 'We help with AddSingleton/AddScoped/AddTransient lifetime design, captive dependency detection and fix, scope validation in development, open generic registration, keyed services (AddKeyedSingleton, GetRequiredKeyedService), factory registration with Func<T>, decorator pattern with Scrutor, IServiceCollectionExtensions for module registration, and DI in minimal API and Worker Services.',
  geoLine: 'Supporting .NET DI developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET DI: Service lifetimes · Captive dependencies · Scope validation · Keyed services · Factory delegates · Decorator (Scrutor) · Modules.',
  highlights: architectureDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Dependency Injection', 'service lifetimes, captive dependencies, keyed services, factory delegates, and decorator pattern'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
      { label: '.NET Clean Architecture Job Support', href: '/dotnet-clean-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET DI Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET DI help — service lifetimes, captive dependencies, keyed services, decorator pattern. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseHPages: LandingPageConfig[] = [
  dotnetArchitecturePatternsJobSupport,
  dotnetCleanArchitectureJobSupport,
  dotnetDddJobSupport,
  dotnetCqrsMediatRJobSupport,
  dotnetPerformanceJobSupport,
  dotnetTestingJobSupport,
  dotnetWorkerServicesJobSupport,
  dotnetCachingJobSupport,
  dotnetApiDesignJobSupport,
  dotnetDependencyInjectionJobSupport,
];

// ─── PHASE I: Full-Stack .NET Pages ──────────────────────────────────────────

const fullStackDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Full-Stack .NET Support',
    description:
      'Live expert help for Blazor, React with .NET API, Angular with ASP.NET Core, real-time SignalR, full-stack deployment, and production full-stack .NET debugging.',
  },
  {
    title: 'Full-Stack Architecture & Design',
    description:
      'Hands-on guidance for full-stack .NET application design — frontend-backend contract, state management, authentication flows, real-time updates, and API integration patterns.',
  },
  {
    title: '.NET Full-Stack Interview Proxy',
    description:
      'Real-time guidance during live full-stack .NET technical interviews — Blazor architecture, React/.NET integration, SignalR, API design, and system design questions.',
  },
];

export const dotnetReactJobSupport: LandingPageConfig = {
  slug: 'dotnet-react-job-support',
  title: '.NET React Job Support | Real-Time Full-Stack Expert Help',
  description: 'Real-time .NET React full-stack job support. ASP.NET Core Web API backend, React frontend, CORS, JWT auth, OpenAPI, proxying, deployment, and full-stack interview proxy.',
  canonical: `${BASE_URL}/dotnet-react-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET React job support', 'ASP.NET Core React full-stack support', '.NET React developer help',
    '.NET React interview proxy', 'React ASP.NET Core CORS fix', 'React .NET JWT auth support',
  ],
  heroEyebrow: '.NET React Job Support',
  h1: '.NET React Job Support — Real-Time Full-Stack Expert Help',
  tagline: 'React app getting CORS error from ASP.NET Core API, JWT not being sent in request headers, React proxy configuration broken in development, or React router conflicting with .NET static file serving? Our experts resolve it now.',
  painIntro: 'Full-stack .NET + React development involves ASP.NET Core Web API CORS configuration, JWT authentication flow between React and .NET API, OpenAPI client generation, Vite/CRA dev proxy to backend, deployment (React static assets served from .NET or CDN), and refresh token handling.',
  heroVariant: 'We help with ASP.NET Core CORS policy for React, JWT authentication from React (storing tokens safely, refreshing), OpenAPI client generation (NSwag, Kiota), Vite dev proxy to ASP.NET Core, serving React static files from .NET, CI/CD with Azure DevOps for full-stack deployment, and React with SignalR for real-time features.',
  geoLine: 'Supporting .NET React full-stack developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET + React: CORS · JWT auth flow · OpenAPI client gen · Vite proxy · Static file serving · SignalR · CI/CD deployment.',
  highlights: fullStackDotnetHighlights,
  faqs: dotnetTechFaqs('.NET React Full-Stack', 'CORS configuration, JWT auth flow, OpenAPI client generation, dev proxy, and deployment'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: 'SignalR Job Support', href: '/signalr-job-support/' },
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET React Full-Stack Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET React help — CORS, JWT, OpenAPI client gen, proxy, SignalR. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetAngularJobSupport: LandingPageConfig = {
  slug: 'dotnet-angular-job-support',
  title: '.NET Angular Job Support | Real-Time Full-Stack Expert Help',
  description: 'Real-time .NET Angular full-stack job support. ASP.NET Core API, Angular HTTP client, JWT interceptors, CORS, OpenAPI client gen, and .NET Angular interview proxy support.',
  canonical: `${BASE_URL}/dotnet-angular-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Angular job support', 'ASP.NET Core Angular support', '.NET Angular full-stack developer help',
    '.NET Angular interview proxy', 'Angular JWT interceptor .NET API', 'Angular ASP.NET Core CORS',
  ],
  heroEyebrow: '.NET Angular Job Support',
  h1: '.NET Angular Job Support — Real-Time Full-Stack Expert Help',
  tagline: 'Angular HttpClient getting CORS error, JWT interceptor not refreshing token, Angular standalone component breaking lazy loading, or Angular app not connecting to ASP.NET Core SignalR? Our experts resolve it now.',
  painIntro: 'Full-stack .NET + Angular involves ASP.NET Core API CORS for Angular dev server, Angular HTTP interceptor for JWT token management (including refresh), OpenAPI client generation with NSwag/openapi-generator, Angular lazy loading with feature modules or standalone components, and SignalR @microsoft/signalr integration.',
  heroVariant: 'We help with ASP.NET Core CORS policy for Angular origin, Angular HTTP interceptor for JWT (attach, refresh, retry), NSwag or openapi-generator-cli client generation from .NET OpenAPI spec, Angular proxy.conf.json for development, Angular router vs .NET route conflict, SignalR with @microsoft/signalr from Angular, and Azure Static Web Apps for .NET API + Angular.',
  geoLine: 'Supporting .NET Angular full-stack developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET + Angular: CORS · JWT interceptor · Token refresh · OpenAPI client gen · proxy.conf · SignalR · Azure Static Web Apps.',
  highlights: fullStackDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Angular Full-Stack', 'CORS, JWT interceptor, token refresh, OpenAPI client gen, and SignalR integration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
      { label: 'SignalR Job Support', href: '/signalr-job-support/' },
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Angular Full-Stack Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Angular help — CORS, JWT interceptor, token refresh, OpenAPI client gen, SignalR. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetRazorPagesJobSupport: LandingPageConfig = {
  slug: 'dotnet-razor-pages-job-support',
  title: '.NET Razor Pages Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Razor Pages job support. PageModel, model binding, tag helpers, anti-forgery, authentication, routing, partial views, view components, and Razor Pages interview proxy.',
  canonical: `${BASE_URL}/dotnet-razor-pages-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Razor Pages job support', 'Razor Pages developer help', 'ASP.NET Core Razor Pages support',
    'Razor Pages interview proxy', 'PageModel .NET support', 'Razor Pages model binding help',
  ],
  heroEyebrow: '.NET Razor Pages Job Support',
  h1: '.NET Razor Pages Job Support — Real-Time Expert Help',
  tagline: 'Razor Pages anti-forgery token failing, model binding not populating complex types, OnPost handler not routing correctly, or TempData not persisting across redirect? Our experts resolve it now.',
  painIntro: 'ASP.NET Core Razor Pages powers server-rendered .NET web applications — but PageModel handler method routing, complex type model binding, anti-forgery validation, TempData and ViewData lifetime, partial views vs view components, custom tag helpers, and Razor Pages with authentication all require specific knowledge.',
  heroVariant: 'We help with PageModel OnGet/OnPost/OnPut handler routing, model binding (complex types, collections, custom binders), anti-forgery token configuration, TempData for redirect-post-get, view components and partial views, custom tag helpers, area routing, Razor Pages authorization (Authorize attribute, AuthorizeFolder), and razor compilation in .NET 8.',
  geoLine: 'Supporting .NET Razor Pages developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Razor Pages: PageModel · Handler routing · Model binding · Anti-forgery · TempData · View components · Tag helpers · Auth.',
  highlights: fullStackDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Razor Pages', 'handler routing, model binding, anti-forgery, TempData, view components, and authorization'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Razor Pages Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Razor Pages help — handler routing, model binding, anti-forgery, TempData, view components. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetMvcJobSupport: LandingPageConfig = {
  slug: 'dotnet-mvc-job-support',
  title: '.NET MVC Job Support | Real-Time ASP.NET MVC Expert Help',
  description: 'Real-time .NET MVC job support. Controllers, views, model binding, filters, areas, routing, TempData, validation, and ASP.NET Core MVC interview proxy support.',
  canonical: `${BASE_URL}/dotnet-mvc-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET MVC job support', 'ASP.NET Core MVC developer help', '.NET MVC production support',
    '.NET MVC interview proxy', 'ASP.NET MVC controller support', '.NET MVC routing help',
  ],
  heroEyebrow: '.NET MVC Job Support',
  h1: '.NET MVC Job Support — Real-Time ASP.NET MVC Expert Help',
  tagline: 'ASP.NET Core MVC controller action routing incorrect, model binding failing for nested objects, action filter not executing in right order, or area routing conflicting with default route? Our experts resolve it now.',
  painIntro: 'ASP.NET Core MVC powers server-rendered and hybrid .NET web applications — but controller action routing, model binding for complex types and collections, action filter pipeline ordering, area routing, custom model binders, view components, partial views, and Razor view compilation all require specific knowledge.',
  heroVariant: 'We help with controller routing (attribute routing, conventional routing, areas), model binding for complex types, IActionFilter/IAsyncActionFilter pipeline, custom model binders and value providers, view components, partial views and AJAX, output caching, TempData and ViewBag lifetime, and .NET 8 minimal API migration from MVC.',
  geoLine: 'Supporting .NET MVC developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET MVC: Controller routing · Model binding · Action filters · Areas · View components · Partial views · TempData · Output caching.',
  highlights: fullStackDotnetHighlights,
  faqs: dotnetTechFaqs('.NET MVC', 'controller routing, model binding, action filters, areas, view components, and TempData'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET Razor Pages Job Support', href: '/dotnet-razor-pages-job-support/' },
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET MVC Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET MVC help — controller routing, model binding, action filters, areas, view components. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetIdentityJobSupport: LandingPageConfig = {
  slug: 'dotnet-identity-job-support',
  title: '.NET Identity Job Support | Real-Time ASP.NET Core Identity Expert Help',
  description: 'Real-time ASP.NET Core Identity job support. User management, roles, claims, custom user store, email confirmation, two-factor auth, and Identity interview proxy support.',
  canonical: `${BASE_URL}/dotnet-identity-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Identity job support', 'ASP.NET Core Identity developer help', 'ASP.NET Identity production support',
    '.NET Identity interview proxy', 'custom user store .NET Identity', 'ASP.NET Identity roles claims',
  ],
  heroEyebrow: '.NET Identity Job Support',
  h1: '.NET Identity Job Support — Real-Time ASP.NET Core Identity Expert Help',
  tagline: 'ASP.NET Core Identity UserManager.CreateAsync failing, email confirmation not working, two-factor authentication not sending code, or custom claims not appearing in principal? Our experts resolve it now.',
  painIntro: 'ASP.NET Core Identity manages user accounts, passwords, roles, claims, and external logins — but custom user store implementation, PasswordHasher configuration, email/SMS confirmation, two-factor authentication, external OAuth login (Google, Microsoft), custom claim transformation, and Identity with EF Core migrations all require specific expertise.',
  heroVariant: 'We help with AddIdentity configuration, UserManager and RoleManager operations, custom ApplicationUser fields with EF Core, email confirmation and password reset flow, two-factor authentication (authenticator app, SMS), external login (Google, Microsoft Entra ID), custom IUserClaimsPrincipalFactory for additional claims, and Identity migration from older .NET versions.',
  geoLine: 'Supporting .NET Identity developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Identity: UserManager · RoleManager · Custom user store · Email confirmation · 2FA · External login · Claims transformation · EF Core.',
  highlights: fullStackDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Identity', 'UserManager, email confirmation, two-factor auth, external login, custom claims, and EF Core integration'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Authentication Authorization Job Support', href: '/dotnet-authentication-authorization-job-support/' },
      { label: 'Azure Entra ID .NET Job Support', href: '/azure-entra-id-dotnet-job-support/' },
      { label: '.NET Security Job Support', href: '/dotnet-security-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Identity Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time ASP.NET Core Identity help — UserManager, email confirmation, 2FA, external login, claims. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetSignalRRealTimeJobSupport: LandingPageConfig = {
  slug: 'dotnet-signalr-realtime-job-support',
  title: '.NET SignalR Real-Time Job Support | Real-Time Expert Help',
  description: 'Real-time .NET SignalR job support. Hub methods, groups, Azure SignalR Service, connection management, scale-out, JavaScript/React/Angular clients, and SignalR interview proxy.',
  canonical: `${BASE_URL}/dotnet-signalr-realtime-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET SignalR real-time job support', 'SignalR .NET developer help', 'Azure SignalR Service support',
    'SignalR interview proxy', 'SignalR hub .NET support', 'SignalR scale-out .NET',
  ],
  heroEyebrow: '.NET SignalR Real-Time Job Support',
  h1: '.NET SignalR Real-Time Job Support — Real-Time Expert Help',
  tagline: 'SignalR hub method not being called from client, connection dropping after 30 seconds, Azure SignalR Service not scaling messages, or JavaScript client reconnecting in a loop? Our experts resolve it now.',
  painIntro: 'SignalR real-time features in .NET require hub method design, group management, connection lifecycle, sticky sessions for server-side state, Azure SignalR Service for scale-out, JavaScript/React/Angular client reconnection logic, and backpressure handling for high-throughput scenarios.',
  heroVariant: 'We help with Hub method design (server-to-client, client-to-server, bidirectional), group management (AddToGroupAsync), connection lifecycle and reconnection, Azure SignalR Service integration (AddAzureSignalR), sticky sessions vs Azure SignalR Service, @microsoft/signalr JavaScript client configuration (withAutomaticReconnect), and SignalR with Blazor Server.',
  geoLine: 'Supporting .NET SignalR developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET SignalR: Hub methods · Groups · Connection lifecycle · Azure SignalR Service · Reconnection · JS client · Blazor Server.',
  highlights: fullStackDotnetHighlights,
  faqs: dotnetTechFaqs('.NET SignalR Real-Time', 'hub methods, groups, connection lifecycle, Azure SignalR Service scale-out, and JavaScript client reconnection'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'SignalR Job Support', href: '/signalr-job-support/' },
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
      { label: '.NET React Job Support', href: '/dotnet-react-job-support/' },
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET SignalR Real-Time Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time SignalR help — hub methods, groups, Azure SignalR Service, reconnection, JavaScript client. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetFullStackInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-fullstack-interview-proxy-support',
  title: '.NET Full-Stack Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET full-stack interview proxy support. Blazor, React/.NET, Angular/.NET, API design, SignalR, auth, system design, and live technical interview guidance.',
  canonical: `${BASE_URL}/dotnet-fullstack-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET full-stack interview proxy support', '.NET full-stack interview help', 'Blazor interview proxy',
    '.NET React Angular interview proxy', 'full-stack .NET technical interview support',
  ],
  heroEyebrow: '.NET Full-Stack Interview Proxy Support',
  h1: '.NET Full-Stack Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a Senior Full-Stack .NET Developer interview covering Blazor, React/.NET, Angular/.NET, API design, or real-time features? Our experts provide live real-time guidance during your interview.',
  painIntro: 'Full-stack .NET technical interviews cover frontend framework selection and integration (Blazor vs React vs Angular), API design and contract, real-time features with SignalR, authentication flows, state management, performance optimization, and system design for full-stack .NET applications.',
  heroVariant: 'Our proxy support covers Blazor component architecture and render mode selection, React or Angular integration with ASP.NET Core API, SignalR real-time patterns, JWT authentication flow end-to-end, API design and versioning, full-stack deployment on Azure, system design for high-traffic .NET web applications, and live coding challenges.',
  geoLine: 'Supporting .NET full-stack interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Full-Stack Interview: Blazor · React/.NET · Angular/.NET · SignalR · JWT auth · API design · Azure deployment · System design.',
  highlights: fullStackDotnetHighlights,
  faqs: [
    { question: 'What does .NET full-stack interview proxy support cover?', answer: 'We provide real-time guidance during your live interview covering Blazor, React/.NET, Angular/.NET, ASP.NET Core API design, SignalR, JWT authentication, Azure deployment, and system design for full-stack .NET applications.' },
    { question: 'How does .NET full-stack interview proxy work?', answer: 'You share your screen and audio with our expert. We listen to the interviewer\'s questions and guide you with typed messages or voice, covering both frontend (Blazor/React/Angular) and backend (.NET API, auth, Azure) questions in real time.' },
    { question: 'Which full-stack .NET interview formats do you support?', answer: 'We support all formats — live coding in browser IDEs, system design whiteboarding, take-home assignments reviewed live, architecture discussion rounds, and behavioral/scenario questions about full-stack .NET development.' },
    { question: 'How quickly can I get .NET full-stack interview proxy support?', answer: 'Contact us via WhatsApp (+91 96606 14469) as soon as your interview is scheduled. We can often arrange support with as little as 2 hours notice.' },
    { question: 'What .NET versions and frameworks are covered?', answer: 'We cover all current versions — .NET 8/9/10, ASP.NET Core, Blazor (Server, WASM, Web App), React with .NET API, Angular with ASP.NET Core, SignalR, and Azure deployment patterns.' },
  ],
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
      { label: '.NET React Job Support', href: '/dotnet-react-job-support/' },
      { label: '.NET Angular Job Support', href: '/dotnet-angular-job-support/' },
      { label: 'SignalR Job Support', href: '/signalr-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Full-Stack Interview Proxy Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET full-stack interview guidance — Blazor, React/.NET, Angular/.NET, SignalR, API design. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseIPages: LandingPageConfig[] = [
  dotnetReactJobSupport,
  dotnetAngularJobSupport,
  dotnetRazorPagesJobSupport,
  dotnetMvcJobSupport,
  dotnetIdentityJobSupport,
  dotnetSignalRRealTimeJobSupport,
  dotnetFullStackInterviewProxyJobSupport,
];

// ─── PHASE J: Database .NET Pages ────────────────────────────────────────────

const dbDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET Database Support',
    description:
      'Live expert help for EF Core, Dapper, SQL Server, PostgreSQL, Cosmos DB, Redis, MongoDB, and database performance tuning in .NET production applications.',
  },
  {
    title: 'Database Architecture & Query Tuning',
    description:
      'Hands-on guidance for .NET database design — EF Core migrations, N+1 query elimination, index optimization, connection pooling, and distributed data patterns.',
  },
  {
    title: '.NET Database Interview Proxy',
    description:
      'Real-time guidance during live .NET database technical interviews — EF Core design, SQL Server internals, data modeling, performance, and database interview questions.',
  },
];

export const efCoreMigrationsJobSupport: LandingPageConfig = {
  slug: 'ef-core-migrations-job-support',
  title: 'EF Core Migrations Job Support | Real-Time Expert Help',
  description: 'Real-time EF Core Migrations job support. Migration generation, applying, rollback, seeding, multi-tenancy, custom SQL, and EF Core Migrations interview proxy support.',
  canonical: `${BASE_URL}/ef-core-migrations-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'EF Core Migrations job support', 'EF Core Migrations developer help', 'Entity Framework Core migration support',
    'EF Core Migrations interview proxy', 'EF Core migration production', 'EF Core seed data help',
  ],
  heroEyebrow: 'EF Core Migrations Job Support',
  h1: 'EF Core Migrations Job Support — Real-Time Expert Help',
  tagline: 'EF Core migration failing in production, migration not detecting model changes, seed data running on every startup, or multi-tenant migration running on wrong schema? Our experts resolve it now.',
  painIntro: 'EF Core Migrations manage database schema changes — but migration conflict resolution (multiple developers), applying migrations at startup vs deploy time, seed data with HasData vs IHostedService, multi-tenant migrations per schema, custom migration SQL for stored procedures/views/indexes, and migration rollback all require expertise.',
  heroVariant: 'We help with migration generation and conflict resolution, applying migrations (Database.MigrateAsync at startup vs CLI at deploy), HasData seed data vs runtime seeding, custom SQL in migrations (migrationBuilder.Sql), multi-tenant schema migrations, migration idempotency, rolling back with Down methods, and EF Core bundles for deployment.',
  geoLine: 'Supporting EF Core Migrations developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'EF Core Migrations: Migration generation · Apply at startup/deploy · Seed data · Custom SQL · Multi-tenant · Rollback · EF bundles.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('EF Core Migrations', 'migration generation, apply at startup vs deploy, seed data, custom SQL, multi-tenant, and rollback'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'Azure SQL .NET Job Support', href: '/azure-sql-dotnet-job-support/' },
      { label: 'SQL Server .NET Job Support', href: '/sql-server-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need EF Core Migrations Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time EF Core Migrations help — generation, apply, seed data, custom SQL, multi-tenant. WhatsApp or Call: +91 96606 14469.',
};

export const sqlServerDotnetJobSupport: LandingPageConfig = {
  slug: 'sql-server-dotnet-job-support',
  title: 'SQL Server .NET Job Support | Real-Time Expert Help',
  description: 'Real-time SQL Server .NET job support. EF Core, Dapper, stored procedures, query optimization, indexing, connection pooling, Always On, and SQL Server interview proxy.',
  canonical: `${BASE_URL}/sql-server-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'SQL Server .NET job support', 'SQL Server developer help', 'SQL Server .NET production support',
    'SQL Server .NET interview proxy', 'SQL Server query optimization .NET', 'SQL Server EF Core support',
  ],
  heroEyebrow: 'SQL Server .NET Job Support',
  h1: 'SQL Server .NET Job Support — Real-Time Expert Help',
  tagline: 'SQL Server query timing out under load, EF Core generating inefficient SQL, connection pool exhausted, or Always On AG failover breaking .NET app? Our experts resolve it now.',
  painIntro: 'SQL Server with .NET involves EF Core query generation analysis, Dapper stored procedure integration, query plan analysis, missing index recommendations, connection pool sizing, Always On availability group connection string configuration, and temporal table usage in .NET.',
  heroVariant: 'We help with EF Core SQL Server provider configuration, EF Core query analysis (logging generated SQL), Dapper stored procedure and multi-mapping, SQL Server query plan analysis and index creation, connection pool sizing (Max Pool Size), Always On AG connection string (MultiSubnetFailover), temporal tables with EF Core, and SQL Server on Azure (Managed Instance).',
  geoLine: 'Supporting SQL Server .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'SQL Server .NET: EF Core queries · Dapper · Query plans · Index optimization · Connection pooling · Always On AG · Temporal tables.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('SQL Server .NET', 'EF Core query generation, Dapper, query plan analysis, index optimization, connection pooling, and Always On AG'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'Azure SQL .NET Job Support', href: '/azure-sql-dotnet-job-support/' },
      { label: 'Dapper .NET Job Support', href: '/dapper-dotnet-job-support/' },
      { label: 'EF Core Migrations Job Support', href: '/ef-core-migrations-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need SQL Server .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time SQL Server .NET help — EF Core, Dapper, query optimization, connection pooling, Always On. WhatsApp or Call: +91 96606 14469.',
};

export const postgresqlDotnetJobSupport: LandingPageConfig = {
  slug: 'postgresql-dotnet-job-support',
  title: 'PostgreSQL .NET Job Support | Real-Time Npgsql Expert Help',
  description: 'Real-time PostgreSQL .NET job support. Npgsql, EF Core PostgreSQL provider, JSONB, full-text search, partitioning, connection pooling with PgBouncer, and interview proxy.',
  canonical: `${BASE_URL}/postgresql-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'PostgreSQL .NET job support', 'Npgsql .NET support', 'EF Core PostgreSQL support',
    'PostgreSQL .NET interview proxy', 'PostgreSQL .NET production support', 'Npgsql Dapper support',
  ],
  heroEyebrow: 'PostgreSQL .NET Job Support',
  h1: 'PostgreSQL .NET Job Support — Real-Time Npgsql Expert Help',
  tagline: 'Npgsql connection pool exhausted, EF Core PostgreSQL provider generating incorrect SQL for JSONB, full-text search not returning expected results, or PgBouncer transaction pooling breaking prepared statements? Our experts resolve it now.',
  painIntro: 'PostgreSQL with .NET via Npgsql and EF Core PostgreSQL provider involves JSONB storage and querying, full-text search with tsvector/tsquery, table partitioning, ENUM types, uuid-ossp, connection pooling with Pgpool-II or PgBouncer, and prepared statements compatibility.',
  heroVariant: 'We help with Npgsql and EF Core PostgreSQL (Npgsql.EntityFrameworkCore.PostgreSQL) configuration, JSONB property mapping, full-text search (NpgsqlTsVector, ToTsQuery), PostgreSQL ENUM types in .NET, table partitioning with EF Core, PgBouncer transaction pooling compatibility (prepared statements), and PostgreSQL on Azure Database.',
  geoLine: 'Supporting PostgreSQL .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'PostgreSQL .NET: Npgsql · EF Core PG provider · JSONB · Full-text search · ENUM types · PgBouncer · Table partitioning.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('PostgreSQL .NET', 'Npgsql, EF Core PostgreSQL provider, JSONB, full-text search, ENUM types, and PgBouncer'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'Dapper .NET Job Support', href: '/dapper-dotnet-job-support/' },
      { label: 'EF Core Migrations Job Support', href: '/ef-core-migrations-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need PostgreSQL .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time PostgreSQL .NET help — Npgsql, EF Core provider, JSONB, full-text search, PgBouncer. WhatsApp or Call: +91 96606 14469.',
};

export const mongoDbDotnetJobSupport: LandingPageConfig = {
  slug: 'mongodb-dotnet-job-support',
  title: 'MongoDB .NET Job Support | Real-Time Expert Help',
  description: 'Real-time MongoDB .NET job support. MongoDB .NET driver, aggregation pipeline, BSON mapping, transactions, Atlas Search, and MongoDB .NET interview proxy support.',
  canonical: `${BASE_URL}/mongodb-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'MongoDB .NET job support', 'MongoDB .NET developer help', 'MongoDB C# driver support',
    'MongoDB .NET interview proxy', 'MongoDB aggregation .NET', 'MongoDB Atlas Search .NET',
  ],
  heroEyebrow: 'MongoDB .NET Job Support',
  h1: 'MongoDB .NET Job Support — Real-Time Expert Help',
  tagline: 'MongoDB aggregation pipeline returning wrong results, BSON class mapping failing for nested types, multi-document transaction timing out, or Atlas Search not indexing new documents? Our experts resolve it now.',
  painIntro: 'MongoDB with .NET involves MongoDB.Driver configuration, BsonClassMap for type mapping, aggregation pipeline design, multi-document transaction coordination, Atlas Search index configuration, GridFS for file storage, Change Streams for real-time updates, and MongoDB Atlas connection string management.',
  heroVariant: 'We help with MongoClient and IMongoDatabase configuration, BSON class mapping (BsonClassMap, BsonElement, BsonId), aggregation pipeline with fluent API, multi-document transactions, Atlas Search (text, vector), GridFS for large files, Change Streams for event-driven patterns, and MongoDB with dependency injection in ASP.NET Core.',
  geoLine: 'Supporting MongoDB .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'MongoDB .NET: MongoClient · BSON mapping · Aggregation pipeline · Transactions · Atlas Search · GridFS · Change Streams.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('MongoDB .NET', 'BSON class mapping, aggregation pipeline, transactions, Atlas Search, and Change Streams'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Cosmos DB .NET Job Support', href: '/cosmos-db-dotnet-job-support/' },
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need MongoDB .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time MongoDB .NET help — BSON mapping, aggregation pipeline, transactions, Atlas Search. WhatsApp or Call: +91 96606 14469.',
};

export const redisDotnetJobSupport: LandingPageConfig = {
  slug: 'redis-dotnet-job-support',
  title: 'Redis .NET Job Support | Real-Time StackExchange.Redis Expert Help',
  description: 'Real-time Redis .NET job support. StackExchange.Redis, IDistributedCache, connection pool, pub/sub, sorted sets, streams, Azure Cache for Redis, and Redis interview proxy.',
  canonical: `${BASE_URL}/redis-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'Redis .NET job support', 'StackExchange.Redis support', 'Redis .NET developer help',
    'Redis .NET interview proxy', 'IDistributedCache Redis .NET', 'Azure Cache for Redis .NET',
  ],
  heroEyebrow: 'Redis .NET Job Support',
  h1: 'Redis .NET Job Support — Real-Time StackExchange.Redis Expert Help',
  tagline: 'Redis connection pool exhausted under load, StackExchange.Redis throwing timeout, pub/sub subscriber not receiving messages, or Redis sorted set query returning wrong rank? Our experts resolve it now.',
  painIntro: 'Redis with .NET via StackExchange.Redis involves connection multiplexer configuration (connection pool, reconnect policy), IDistributedCache serialization, pub/sub subscriber registration, sorted set and stream data structures, Redis transaction (MULTI/EXEC) design, and Azure Cache for Redis with Entra ID.',
  heroVariant: 'We help with ConnectionMultiplexer configuration (abortConnect, connectTimeout, reconnectRetryPolicy), IDistributedCache with StackExchange.Redis (AddStackExchangeRedisCache), custom serialization (JSON vs MessagePack), pub/sub with ISubscriber, sorted set operations for leaderboards/rate limiting, Redis Streams for event sourcing, and Azure Cache for Redis with Managed Identity.',
  geoLine: 'Supporting Redis .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Redis .NET: ConnectionMultiplexer · IDistributedCache · Pub/Sub · Sorted sets · Streams · Azure Cache · Managed Identity.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('Redis .NET', 'ConnectionMultiplexer, IDistributedCache, pub/sub, sorted sets, Redis Streams, and Azure Cache for Redis'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Caching Job Support', href: '/dotnet-caching-job-support/' },
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need Redis .NET Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Redis .NET help — ConnectionMultiplexer, IDistributedCache, pub/sub, sorted sets, Streams. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetDataAccessJobSupport: LandingPageConfig = {
  slug: 'dotnet-data-access-job-support',
  title: '.NET Data Access Job Support | Real-Time Expert Help',
  description: 'Real-time .NET data access job support. EF Core vs Dapper decision, repository pattern, unit of work, connection management, N+1 prevention, and data access interview proxy.',
  canonical: `${BASE_URL}/dotnet-data-access-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET data access job support', '.NET ORM developer help', 'EF Core vs Dapper .NET',
    '.NET data access interview proxy', 'repository pattern .NET support', 'N+1 .NET fix help',
  ],
  heroEyebrow: '.NET Data Access Job Support',
  h1: '.NET Data Access Job Support — Real-Time Expert Help',
  tagline: '.NET data access causing N+1 queries, repository pattern over-abstracted with EF Core, Dapper and EF Core used inconsistently, or connection not being disposed causing pool exhaustion? Our experts resolve it now.',
  painIntro: '.NET data access patterns span EF Core for rich domain queries and migrations, Dapper for high-performance SQL, repository pattern design, unit of work, bulk operations, connection lifetime management, and the decision of when to use each tool.',
  heroVariant: 'We help with EF Core vs Dapper decision framework, repository pattern implementation (generic vs specific), unit of work with DbContext, N+1 prevention with Include/AsSplitQuery/projection, bulk operations (EF Core bulk extensions, Dapper multi-row insert), connection lifetime management (scoped DbContext), and ADO.NET for maximum control.',
  geoLine: 'Supporting .NET data access developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Data Access: EF Core · Dapper · Repository pattern · Unit of work · N+1 prevention · Bulk operations · Connection lifecycle.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Data Access', 'EF Core vs Dapper, repository pattern, unit of work, N+1 prevention, bulk operations, and connection lifecycle'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'Dapper .NET Job Support', href: '/dapper-dotnet-job-support/' },
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Data Access Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET data access help — EF Core, Dapper, repository pattern, N+1, bulk operations. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetDatabaseInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-database-interview-proxy-support',
  title: '.NET Database Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET database interview proxy support. EF Core design, SQL Server/PostgreSQL internals, Cosmos DB, data modeling, performance, and live interview guidance.',
  canonical: `${BASE_URL}/dotnet-database-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET database interview proxy support', '.NET database interview help', 'EF Core interview proxy',
    'SQL Server .NET interview proxy', '.NET database technical interview support',
  ],
  heroEyebrow: '.NET Database Interview Proxy Support',
  h1: '.NET Database Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a Senior .NET Developer interview with deep database questions about EF Core internals, SQL Server performance, Cosmos DB design, or data modeling? Our experts provide real-time live guidance.',
  painIntro: '.NET database technical interviews cover EF Core internals (change tracking, query generation, migrations), SQL Server query plans and indexing, Cosmos DB partition key strategy, data normalization vs denormalization tradeoffs, connection pool management, and distributed data patterns.',
  heroVariant: 'Our proxy support covers EF Core change tracking and query generation, SQL Server index design and query plan analysis, Cosmos DB partition key and RU optimization, PostgreSQL JSONB and full-text search, Redis data structure selection, repository pattern design, N+1 query scenarios, and database scalability tradeoffs.',
  geoLine: 'Supporting .NET database interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET DB Interview: EF Core internals · SQL Server perf · Cosmos DB design · PostgreSQL · Redis · Repository pattern · N+1 · Scalability.',
  highlights: dbDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Database Interview Proxy', 'EF Core internals, SQL Server performance, Cosmos DB design, data modeling, and distributed data patterns'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'SQL Server .NET Job Support', href: '/sql-server-dotnet-job-support/' },
      { label: 'Cosmos DB .NET Job Support', href: '/cosmos-db-dotnet-job-support/' },
      { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Database Interview Proxy? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET database interview guidance — EF Core, SQL Server, Cosmos DB, PostgreSQL, Redis. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseJPages: LandingPageConfig[] = [
  efCoreMigrationsJobSupport,
  sqlServerDotnetJobSupport,
  postgresqlDotnetJobSupport,
  mongoDbDotnetJobSupport,
  redisDotnetJobSupport,
  dotnetDataAccessJobSupport,
  dotnetDatabaseInterviewProxyJobSupport,
];

// ─── PHASE K: Legacy Modernization Pages ─────────────────────────────────────

const legacyDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET Legacy Modernization Support',
    description:
      'Live expert help for .NET Framework to .NET 8/9 migration, WCF to gRPC/Web API, IIS to cloud deployment, WebForms to Blazor, and monolith to microservices transitions.',
  },
  {
    title: 'Migration Strategy & Risk Assessment',
    description:
      'Hands-on guidance for .NET modernization strategy — migration approach selection, strangler fig pattern, big bang vs incremental, breaking changes assessment, and deployment risk mitigation.',
  },
  {
    title: '.NET Modernization Interview Proxy',
    description:
      'Real-time guidance during live .NET modernization technical interviews — migration patterns, breaking change analysis, cloud-native transformation, and legacy .NET architecture questions.',
  },
];

export const dotnetFrameworkMigrationJobSupport: LandingPageConfig = {
  slug: 'dotnet-framework-migration-job-support',
  title: '.NET Framework to .NET Migration Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Framework to .NET 8/9 migration job support. Breaking changes, TFM update, compatibility shims, NuGet upgrades, testing, and migration interview proxy support.',
  canonical: `${BASE_URL}/dotnet-framework-migration-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Framework migration job support', '.NET Framework to .NET 8 migration support', '.NET upgrade developer help',
    '.NET migration interview proxy', 'NET Framework .NET Core migration help',
  ],
  heroEyebrow: '.NET Framework to .NET Migration Job Support',
  h1: '.NET Framework to .NET Migration Job Support — Real-Time Expert Help',
  tagline: '.NET Framework to .NET 8 migration hitting breaking change, NuGet package missing .NET 8 TFM, Assembly.GetEntryAssembly() returning null, or System.Web dependency blocking upgrade? Our experts resolve it now.',
  painIntro: 'Migrating from .NET Framework 4.x to modern .NET 8/9 involves TFM changes, System.Web dependency removal, NuGet package compatibility gaps, HttpContext migration, Global.asax to startup migration, Windows-only APIs, assembly binding redirect removal, and test project migration.',
  heroVariant: 'We help with .NET Upgrade Assistant strategy, TFM targeting (net8.0 vs net8.0-windows), System.Web.HttpContext replacement with IHttpContextAccessor, Global.asax to Program.cs/Startup migration, Windows-only API alternatives, NuGet package compatibility (compatibility shims, replacements), test project migration, and parallel running old and new apps.',
  geoLine: 'Supporting .NET Framework migration developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Framework Migration: TFM update · System.Web removal · Startup migration · NuGet compat · .NET Upgrade Assistant · Test migration.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Framework to .NET Migration', 'TFM changes, System.Web removal, startup migration, NuGet compatibility, and .NET Upgrade Assistant'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'WCF to .NET Migration Job Support', href: '/wcf-to-dotnet-migration-job-support/' },
      { label: 'IIS to Azure App Service Migration', href: '/iis-to-azure-app-service-migration-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET 10 Job Support', href: '/dotnet-10-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Framework Migration Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Framework to .NET 8 migration help — TFM, System.Web, startup, NuGet. WhatsApp or Call: +91 96606 14469.',
};

export const wcfToDotnetMigrationJobSupport: LandingPageConfig = {
  slug: 'wcf-to-dotnet-migration-job-support',
  title: 'WCF to .NET Migration Job Support | Real-Time Expert Help',
  description: 'Real-time WCF to .NET migration job support. WCF to gRPC, WCF to Web API, CoreWCF, contract migration, binding replacement, and WCF migration interview proxy support.',
  canonical: `${BASE_URL}/wcf-to-dotnet-migration-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'WCF to .NET migration job support', 'WCF migration developer help', 'WCF to gRPC migration .NET',
    'WCF to Web API migration', 'CoreWCF .NET support', 'WCF migration interview proxy',
  ],
  heroEyebrow: 'WCF to .NET Migration Job Support',
  h1: 'WCF to .NET Migration Job Support — Real-Time Expert Help',
  tagline: 'WCF service migration to gRPC failing on contract differences, Web API replacement losing WCF security behaviors, or CoreWCF compatibility gap blocking migration? Our experts resolve it now.',
  painIntro: 'WCF service modernization involves choosing the right replacement (gRPC for typed binary, Web API for REST, CoreWCF for minimal changes), migrating service contracts and data contracts, replacing WCF behaviors (message security, transaction, reliable messaging), and managing client migration.',
  heroVariant: 'We help with WCF to gRPC migration (contract-first, Protobuf schema, streaming), WCF to ASP.NET Core Web API (REST contract design, authentication migration), CoreWCF for minimal-change migration, WCF data contract to DTO mapping, WCF behavior to ASP.NET Core middleware, and managing dual WCF/new service operation during migration.',
  geoLine: 'Supporting WCF migration .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'WCF Migration: WCF → gRPC · WCF → Web API · CoreWCF · Contract migration · Security behaviors · Client migration.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('WCF to .NET Migration', 'WCF to gRPC, WCF to Web API, CoreWCF, contract migration, and security behavior replacement'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Framework Migration Job Support', href: '/dotnet-framework-migration-job-support/' },
      { label: 'gRPC .NET Job Support', href: '/grpc-dotnet-job-support/' },
      { label: '.NET Web API Job Support', href: '/dotnet-web-api-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need WCF to .NET Migration Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time WCF migration help — WCF to gRPC, Web API, CoreWCF, contract migration. WhatsApp or Call: +91 96606 14469.',
};

export const iisToAzureAppServiceMigrationSupport: LandingPageConfig = {
  slug: 'iis-to-azure-app-service-migration-support',
  title: 'IIS to Azure App Service Migration Support | Real-Time Expert Help',
  description: 'Real-time IIS to Azure App Service migration support. App settings, connection strings, HTTP modules to middleware, file storage to Azure Blob, and migration interview proxy.',
  canonical: `${BASE_URL}/iis-to-azure-app-service-migration-support/`,
  lastmod: LASTMOD,
  keywords: [
    'IIS to Azure App Service migration support', 'IIS to Azure migration developer help', 'Azure App Service migration support',
    'IIS migration interview proxy', 'IIS HTTP modules to middleware migration', 'IIS to cloud .NET migration',
  ],
  heroEyebrow: 'IIS to Azure App Service Migration Support',
  h1: 'IIS to Azure App Service Migration Support — Real-Time Expert Help',
  tagline: 'IIS app failing after Azure App Service migration, HTTP modules not translating to middleware, file system access broken on cloud, or connection strings not loading from App Service config? Our experts resolve it now.',
  painIntro: 'Migrating .NET applications from IIS to Azure App Service involves app settings/connection string migration, HTTP modules to ASP.NET Core middleware conversion, file system access to Azure Blob Storage, session state migration, Windows authentication alternatives, application pool identity to Managed Identity, and custom domain/TLS.',
  heroVariant: 'We help with App Service application settings and connection strings (Key Vault references), HTTP module to ASP.NET Core middleware migration, file system access to Azure Blob Storage, session state (Redis-backed), Windows auth to Entra ID, application pool identity to Managed Identity, custom domain binding and TLS certificates, and deployment from IIS (FTP/WebDeploy) to Azure DevOps pipelines.',
  geoLine: 'Supporting IIS to Azure migration .NET developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'IIS to Azure: App settings · HTTP modules → middleware · File system → Blob · Session state · Windows auth → Entra ID · Managed Identity.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('IIS to Azure App Service Migration', 'app settings migration, HTTP modules, file system, session state, and Windows auth to Entra ID'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Azure App Service .NET Job Support', href: '/azure-app-service-dotnet-job-support/' },
      { label: '.NET Framework Migration Job Support', href: '/dotnet-framework-migration-job-support/' },
      { label: 'Azure Entra ID .NET Job Support', href: '/azure-entra-id-dotnet-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need IIS to Azure Migration Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time IIS to Azure App Service migration help — app settings, middleware, Blob storage, Managed Identity. WhatsApp or Call: +91 96606 14469.',
};

export const webFormsToBlazorMigrationJobSupport: LandingPageConfig = {
  slug: 'webforms-to-blazor-migration-job-support',
  title: 'WebForms to Blazor Migration Job Support | Real-Time Expert Help',
  description: 'Real-time WebForms to Blazor migration job support. Page-to-component migration, code-behind to code-behind, ViewState replacement, postback to event callbacks, and interview proxy.',
  canonical: `${BASE_URL}/webforms-to-blazor-migration-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'WebForms to Blazor migration job support', 'ASP.NET WebForms to Blazor support', 'WebForms migration developer help',
    'WebForms Blazor interview proxy', 'ViewState Blazor migration',
  ],
  heroEyebrow: 'WebForms to Blazor Migration Job Support',
  h1: 'WebForms to Blazor Migration Job Support — Real-Time Expert Help',
  tagline: 'WebForms page migration to Blazor component complex, ViewState logic not translating, GridView to Blazor component uncertain, or code-behind business logic mixed with UI? Our experts resolve it now.',
  painIntro: 'Migrating ASP.NET WebForms to Blazor requires translating page-to-component architecture, ViewState to component state, postback event model to EventCallback, GridView/Repeater to Blazor components, code-behind to @code block, and MasterPage to Blazor layout.',
  heroVariant: 'We help with WebForms page-to-Blazor-component mapping, ViewState replacement with component parameters and cascading state, postback events to EventCallback and async event handlers, GridView migration to Blazor QuickGrid or custom table components, MasterPage to MainLayout, code-behind separation, and incremental migration using iframe embedding or strangler fig.',
  geoLine: 'Supporting WebForms to Blazor migration developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'WebForms → Blazor: Page → Component · ViewState → State · Postback → EventCallback · GridView → QuickGrid · MasterPage → Layout.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('WebForms to Blazor Migration', 'page-to-component, ViewState replacement, postback to EventCallback, GridView migration, and MasterPage to layout'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
      { label: '.NET Framework Migration Job Support', href: '/dotnet-framework-migration-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need WebForms to Blazor Migration Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time WebForms to Blazor migration help — components, ViewState, EventCallback, GridView, layout. WhatsApp or Call: +91 96606 14469.',
};

export const monolithToMicroservicesDotnetJobSupport: LandingPageConfig = {
  slug: 'monolith-to-microservices-dotnet-job-support',
  title: '.NET Monolith to Microservices Job Support | Real-Time Expert Help',
  description: 'Real-time .NET monolith to microservices migration support. Strangler fig pattern, bounded context extraction, data decomposition, event-driven integration, and interview proxy.',
  canonical: `${BASE_URL}/monolith-to-microservices-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET monolith to microservices job support', 'monolith decomposition .NET support', '.NET microservices migration help',
    'strangler fig pattern .NET', 'bounded context extraction .NET', '.NET modernization interview proxy',
  ],
  heroEyebrow: '.NET Monolith to Microservices Job Support',
  h1: '.NET Monolith to Microservices Job Support — Real-Time Expert Help',
  tagline: 'Monolith decomposition causing circular dependencies, bounded context boundaries unclear, shared database preventing independent deployment, or event integration creating more coupling? Our experts resolve it now.',
  painIntro: 'Decomposing .NET monoliths into microservices requires bounded context identification, strangler fig pattern implementation, database decomposition strategy, inter-service communication design (sync vs async), data consistency across services, and deployment independence — all while keeping the monolith functional.',
  heroVariant: 'We help with bounded context identification and service boundary design, strangler fig pattern with YARP or API gateway routing, database decomposition (shared database → per-service database), event-driven integration with Service Bus for data synchronization, saga pattern for distributed transactions, and incremental extraction without stopping the monolith.',
  geoLine: 'Supporting .NET monolith to microservices developers globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Monolith → Microservices: Bounded contexts · Strangler fig · DB decomposition · Event integration · Saga · YARP routing.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Monolith to Microservices', 'bounded context extraction, strangler fig, database decomposition, event integration, and saga pattern'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Microservices Job Support', href: '/dotnet-microservices-job-support/' },
      { label: '.NET DDD Job Support', href: '/dotnet-ddd-job-support/' },
      { label: '.NET Event Driven Architecture Job Support', href: '/dotnet-event-driven-architecture-job-support/' },
      { label: '.NET Framework Migration Job Support', href: '/dotnet-framework-migration-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Monolith to Microservices Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time monolith decomposition help — bounded contexts, strangler fig, DB decomposition, event integration. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetUpgradeAssistantJobSupport: LandingPageConfig = {
  slug: 'dotnet-upgrade-assistant-job-support',
  title: '.NET Upgrade Assistant Job Support | Real-Time Expert Help',
  description: 'Real-time .NET Upgrade Assistant job support. Upgrade plan, TFM migration, package compatibility, System.Web removal, breaking change resolution, and upgrade interview proxy.',
  canonical: `${BASE_URL}/dotnet-upgrade-assistant-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Upgrade Assistant job support', '.NET Upgrade Assistant developer help', 'upgrade-assistant .NET support',
    '.NET Upgrade Assistant interview proxy', 'dotnet upgrade-assistant help',
  ],
  heroEyebrow: '.NET Upgrade Assistant Job Support',
  h1: '.NET Upgrade Assistant Job Support — Real-Time Expert Help',
  tagline: '.NET Upgrade Assistant stuck mid-migration, TFM change breaking unexpected dependencies, upgrade-assistant not detecting all issues, or post-upgrade app failing at runtime? Our experts resolve it now.',
  painIntro: 'The .NET Upgrade Assistant automates much of the .NET Framework to .NET 8/9 migration — but its analysis misses runtime-only breaking changes, Windows-only API substitutions, third-party NuGet package gaps, and post-migration System.Web.HttpContext patterns that require manual resolution.',
  heroVariant: 'We help with upgrade-assistant analyze output interpretation, TFM-by-TFM upgrade planning, NuGet package compatibility gap resolution (find replacements, use compatibility shims), System.Web pattern replacement, manual breaking change resolution, post-upgrade integration test failures, and CI/CD pipeline update after .NET version change.',
  geoLine: 'Supporting .NET Upgrade Assistant users globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Upgrade Assistant: Analysis · TFM planning · Package compatibility · System.Web removal · Breaking change resolution · Post-upgrade testing.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Upgrade Assistant', 'analysis output, TFM planning, NuGet compatibility, System.Web removal, and post-upgrade testing'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Framework Migration Job Support', href: '/dotnet-framework-migration-job-support/' },
      { label: '.NET 10 Job Support', href: '/dotnet-10-job-support/' },
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Upgrade Assistant Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time Upgrade Assistant help — TFM planning, package compatibility, System.Web removal, breaking changes. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetModernizationInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-modernization-interview-proxy-support',
  title: '.NET Modernization Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET modernization interview proxy support. Framework migration, WCF to gRPC, IIS to cloud, WebForms to Blazor, monolith decomposition, and live interview guidance.',
  canonical: `${BASE_URL}/dotnet-modernization-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET modernization interview proxy support', '.NET migration interview help', '.NET legacy modernization interview proxy',
    '.NET Framework migration interview proxy', '.NET upgrade interview support',
  ],
  heroEyebrow: '.NET Modernization Interview Proxy Support',
  h1: '.NET Modernization Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a .NET modernization or migration architecture interview covering .NET Framework upgrade, WCF migration, monolith decomposition, or cloud-native transformation? Our experts provide real-time live guidance.',
  painIntro: '.NET modernization technical interviews cover .NET Framework to .NET 8/9 migration strategy, WCF to gRPC/Web API migration patterns, IIS to Azure cloud deployment, WebForms to Blazor transformation, strangler fig pattern, bounded context extraction, and risk assessment for legacy .NET systems.',
  heroVariant: 'Our proxy support covers .NET Upgrade Assistant strategy and output interpretation, TFM migration breaking change analysis, WCF service replacement decision (gRPC vs REST), cloud migration pattern selection, monolith decomposition strategy, strangler fig implementation, data consistency across services, and legacy .NET system risk assessment.',
  geoLine: 'Supporting .NET modernization interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Modernization Interview: Framework migration · WCF → gRPC · IIS → Azure · WebForms → Blazor · Strangler fig · Monolith decomposition.',
  highlights: legacyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Modernization Interview Proxy', 'Framework migration, WCF to gRPC, IIS to Azure, WebForms to Blazor, and monolith decomposition strategy'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Framework Migration Job Support', href: '/dotnet-framework-migration-job-support/' },
      { label: 'WCF to .NET Migration Job Support', href: '/wcf-to-dotnet-migration-job-support/' },
      { label: '.NET Monolith to Microservices Job Support', href: '/monolith-to-microservices-dotnet-job-support/' },
      { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Modernization Interview Proxy? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET modernization interview guidance — Framework migration, WCF, IIS to Azure, WebForms, monolith. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseKPages: LandingPageConfig[] = [
  dotnetFrameworkMigrationJobSupport,
  wcfToDotnetMigrationJobSupport,
  iisToAzureAppServiceMigrationSupport,
  webFormsToBlazorMigrationJobSupport,
  monolithToMicroservicesDotnetJobSupport,
  dotnetUpgradeAssistantJobSupport,
  dotnetModernizationInterviewProxyJobSupport,
];

// ─── PHASE L: Interview Proxy Pages ──────────────────────────────────────────

const interviewProxyDotnetHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time .NET Interview Proxy Support',
    description:
      'Live expert guidance during your .NET technical interview — we hear the question, you hear our answer. WhatsApp audio, screen share, or typed hints — whatever works best for your setup.',
  },
  {
    title: 'All .NET Interview Formats Covered',
    description:
      'Live coding, system design, architecture whiteboard, take-home review, behavioral/scenario, and all-day virtual onsite formats covered for .NET Developer, Senior Engineer, and Architect roles.',
  },
  {
    title: 'Proven Track Record',
    description:
      'Our experts have helped .NET developers pass interviews at FAANG, Fortune 500, financial services, healthcare, and consulting firms across USA, UK, Canada, Europe, Australia, UAE, and Singapore.',
  },
];

export const dotnetAzureInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-azure-interview-proxy-support',
  title: '.NET Azure Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET Azure interview proxy support. Azure architecture, App Service, AKS, Functions, Service Bus, security, DevOps, and live technical .NET Azure interview guidance.',
  canonical: `${BASE_URL}/dotnet-azure-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET Azure interview proxy support', '.NET Azure interview help', 'Azure .NET live interview guidance',
    '.NET Azure technical interview proxy', 'Azure architect .NET interview proxy',
  ],
  heroEyebrow: '.NET Azure Interview Proxy Support',
  h1: '.NET Azure Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a Senior .NET Azure Developer or Azure Solutions Architect interview? Our experts provide real-time live guidance on Azure architecture, cloud design, security, DevOps, and .NET deployment questions.',
  painIntro: '.NET Azure technical interviews are deeply technical — Azure service selection decisions, Managed Identity and security architecture, App Service vs AKS vs Container Apps trade-offs, Service Bus vs Event Grid, Cosmos DB partition key, DevOps pipeline design, and cost optimization all in a high-pressure live format.',
  heroVariant: 'Our proxy support covers the full Azure .NET stack: App Service, Functions, AKS, Container Apps, Service Bus, Event Grid, Event Hubs, Key Vault, Entra ID, Cosmos DB, Azure SQL, APIM, Azure DevOps, and infrastructure-as-code (Bicep/Terraform). We also cover Azure AI Foundry, Azure OpenAI, and RAG architecture questions.',
  geoLine: 'Supporting .NET Azure interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Azure Interview: App Service · AKS · Functions · Service Bus · Key Vault · Entra ID · Cosmos DB · DevOps · AI Foundry.',
  highlights: interviewProxyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Azure Interview Proxy', 'Azure architecture, Managed Identity, service selection decisions, DevOps, and Azure AI/ML questions'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/' },
      { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
      { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Azure Interview Proxy Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Azure interview guidance — architecture, security, DevOps, AI. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetAiInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-ai-interview-proxy-support',
  title: '.NET AI Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET AI interview proxy support. Semantic Kernel, Azure OpenAI, RAG, vector search, AI agents, Azure AI Foundry, and live .NET AI technical interview guidance.',
  canonical: `${BASE_URL}/dotnet-ai-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET AI interview proxy support', '.NET AI interview help', 'Semantic Kernel interview proxy',
    'Azure OpenAI .NET interview proxy', 'RAG .NET interview proxy', '.NET AI technical interview support',
  ],
  heroEyebrow: '.NET AI Interview Proxy Support',
  h1: '.NET AI Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a Senior .NET AI Engineer or Azure AI Solutions Architect interview? Our experts provide real-time live guidance on AI architecture, LLM integration, RAG design, and agent patterns.',
  painIntro: '.NET AI technical interviews are cutting-edge and complex — Semantic Kernel plugin design, Azure OpenAI function calling, RAG pipeline chunking and retrieval strategy, vector database selection, AI agent orchestration, Azure AI Foundry evaluation, and production AI safety patterns all in one live interview.',
  heroVariant: 'Our proxy support covers the full .NET AI stack: Semantic Kernel, Microsoft.Extensions.AI, Azure AI Foundry, Azure OpenAI SDK, RAG architecture, vector search (Azure AI Search, Cosmos DB, Qdrant), AI agents (Microsoft Agent Framework, SK Agents), ML.NET, ONNX Runtime, and Ollama for local inference.',
  geoLine: 'Supporting .NET AI interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET AI Interview: Semantic Kernel · Azure OpenAI · RAG · Vector search · AI agents · Azure AI Foundry · ML.NET · ONNX.',
  highlights: interviewProxyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET AI Interview Proxy', 'Semantic Kernel, RAG design, vector database selection, AI agent patterns, and Azure AI Foundry'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/' },
      { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
      { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET AI Interview Proxy Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET AI interview guidance — Semantic Kernel, RAG, vector search, AI agents, Azure AI Foundry. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetArchitectureInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-architecture-interview-proxy-support',
  title: '.NET Architecture Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET architecture interview proxy support. Clean Architecture, DDD, CQRS, microservices, system design, and live .NET senior engineer architecture interview guidance.',
  canonical: `${BASE_URL}/dotnet-architecture-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET architecture interview proxy support', '.NET architecture interview help', 'Clean Architecture .NET interview proxy',
    'DDD .NET interview proxy', 'system design .NET interview proxy', '.NET senior engineer interview support',
  ],
  heroEyebrow: '.NET Architecture Interview Proxy Support',
  h1: '.NET Architecture Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a Principal .NET Engineer or Solution Architect interview covering Clean Architecture, DDD, CQRS, microservices, or system design? Our experts provide real-time live guidance.',
  painIntro: '.NET architecture technical interviews test deep design thinking — Clean Architecture dependency direction, DDD aggregate design under business constraint, CQRS consistency tradeoffs, microservices decomposition rationale, event sourcing vs regular CRUD, performance bottleneck diagnosis, and large-scale system design.',
  heroVariant: 'Our proxy support covers Clean Architecture layering decisions, DDD strategic and tactical patterns, CQRS with MediatR pipeline, vertical slice architecture, event-driven design (MassTransit, NServiceBus), .NET performance optimization strategies, distributed caching, API design, and system design scenarios for high-traffic .NET applications.',
  geoLine: 'Supporting .NET architecture interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Architecture Interview: Clean Architecture · DDD · CQRS · Microservices · Event-driven · Performance · System design.',
  highlights: interviewProxyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Architecture Interview Proxy', 'Clean Architecture, DDD, CQRS, microservices design, event-driven patterns, and system design'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Architecture Patterns Job Support', href: '/dotnet-architecture-patterns-job-support/' },
      { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
      { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Architecture Interview Proxy? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET architecture interview guidance — Clean Architecture, DDD, CQRS, microservices, system design. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetCloudNativeInterviewProxyJobSupport: LandingPageConfig = {
  slug: 'dotnet-cloud-native-interview-proxy-support',
  title: '.NET Cloud-Native Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time .NET cloud-native interview proxy support. .NET Aspire, Docker, Kubernetes, Dapr, OpenTelemetry, service mesh, and live .NET cloud-native technical interview guidance.',
  canonical: `${BASE_URL}/dotnet-cloud-native-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET cloud-native interview proxy support', '.NET Kubernetes interview proxy', '.NET Docker interview proxy',
    '.NET cloud-native interview help', 'Dapr .NET interview proxy', '.NET Aspire interview proxy',
  ],
  heroEyebrow: '.NET Cloud-Native Interview Proxy Support',
  h1: '.NET Cloud-Native Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing a Senior .NET Cloud-Native Developer or SRE interview covering .NET Aspire, Kubernetes, Dapr, service mesh, or observability? Our experts provide real-time live guidance.',
  painIntro: '.NET cloud-native technical interviews cover .NET Aspire architecture, Kubernetes deployment and scaling, Docker optimization, Dapr building blocks, service mesh (Istio/Linkerd), OpenTelemetry distributed tracing, resiliency patterns, and cloud-native security — all requiring hands-on production experience to answer well.',
  heroVariant: 'Our proxy support covers .NET Aspire AppHost and service defaults, Docker multi-stage build optimization, Kubernetes deployments, health probes, KEDA, Dapr pub/sub and state management, OpenTelemetry instrumentation, Polly resilience patterns, microservices event-driven design, and cloud-native .NET security (Managed Identity, secret injection).',
  geoLine: 'Supporting .NET cloud-native interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Cloud-Native Interview: Aspire · Docker · Kubernetes · Dapr · OpenTelemetry · Polly · Service mesh · Managed Identity.',
  highlights: interviewProxyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Cloud-Native Interview Proxy', '.NET Aspire, Kubernetes, Dapr, OpenTelemetry, Polly, and cloud-native security patterns'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/' },
      { label: '.NET Kubernetes Job Support', href: '/dotnet-kubernetes-job-support/' },
      { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
      { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need .NET Cloud-Native Interview Proxy? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET cloud-native interview guidance — Aspire, Kubernetes, Dapr, OpenTelemetry, Polly. WhatsApp or Call: +91 96606 14469.',
};

export const aspnetCoreInterviewProxySupport: LandingPageConfig = {
  slug: 'aspnet-core-interview-proxy-support',
  title: 'ASP.NET Core Interview Proxy Support | Real-Time Expert Help',
  description: 'Real-time ASP.NET Core interview proxy support. Middleware, minimal APIs, Razor Pages, Blazor, dependency injection, JWT auth, EF Core, SignalR, and live technical interview guidance.',
  canonical: `${BASE_URL}/aspnet-core-interview-proxy-support/`,
  lastmod: LASTMOD,
  keywords: [
    'ASP.NET Core interview proxy support', 'ASP.NET Core interview help', 'ASP.NET Core live interview guidance',
    'C# ASP.NET Core interview proxy', 'ASP.NET Core technical interview support', '.NET Core interview proxy',
  ],
  heroEyebrow: 'ASP.NET Core Interview Proxy Support',
  h1: 'ASP.NET Core Interview Proxy Support — Real-Time Expert Help',
  tagline: 'Facing an ASP.NET Core Developer or Senior .NET Web Developer interview? Our experts provide real-time live guidance on middleware pipelines, minimal APIs, auth, EF Core, Blazor, SignalR, and system design.',
  painIntro: 'ASP.NET Core technical interviews go deep — middleware ordering, dependency injection scope, minimal API vs controller design, authentication/authorization pipeline, EF Core query optimization, Blazor render modes (.NET 8/9/10), SignalR hub design, and background worker services all under live interview pressure.',
  heroVariant: 'We cover ASP.NET Core 8/9/10: middleware pipeline, minimal APIs, Razor Pages, controller pattern, model binding, filters, background services (IHostedService/Worker), Blazor Server vs WASM vs .NET 8 Unified mode, SignalR, EF Core migrations, JWT/OIDC auth, IDistributedCache, health checks, and Docker deployment.',
  geoLine: 'Supporting ASP.NET Core interview candidates globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'ASP.NET Core Interview: Middleware · Minimal APIs · Blazor · EF Core · JWT · SignalR · Docker · Worker Services.',
  highlights: interviewProxyDotnetHighlights,
  faqs: dotnetTechFaqs('ASP.NET Core Interview Proxy', 'middleware pipeline, minimal APIs, Blazor render modes, authentication/authorization, EF Core, and SignalR hub design'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: 'C# Job Support', href: '/csharp-job-support/' },
      { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
  },
  bottomCTAHeading: 'Need ASP.NET Core Interview Proxy Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time ASP.NET Core interview guidance — middleware, minimal APIs, Blazor, EF Core, auth. WhatsApp or Call: +91 96606 14469.',
};

export const fullStackDotnetJobSupport: LandingPageConfig = {
  slug: 'full-stack-dotnet-job-support',
  title: 'Full Stack .NET Job Support | ASP.NET Core + React/Blazor Real-Time Help',
  description: 'Real-time full stack .NET job support. ASP.NET Core Web API backend with React, Angular, or Blazor frontend — JWT auth, CORS, NSwag codegen, CI/CD, Azure deployment, and production debugging.',
  canonical: `${BASE_URL}/full-stack-dotnet-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    'full stack .NET job support', 'ASP.NET Core React job support', '.NET full stack developer support',
    'ASP.NET Core Angular job support', '.NET Blazor full stack support', 'full stack .NET developer help',
  ],
  heroEyebrow: 'Full Stack .NET Job Support',
  h1: 'Full Stack .NET Job Support — ASP.NET Core API + React, Angular & Blazor',
  tagline: 'Building full stack .NET applications under pressure? Our experts support the complete stack: ASP.NET Core Web API, EF Core, React/Angular/Blazor frontend, JWT auth, Azure deployment, and CI/CD pipeline issues.',
  painIntro: 'Full stack .NET projects combine backend complexity (ASP.NET Core, EF Core, authentication) with frontend challenges (React state management, Angular HTTP interceptors, Blazor WASM CORS). Production issues span both layers — CORS misconfigurations, JWT token refresh, API versioning breaks, and real-time SignalR management.',
  heroVariant: 'We cover ASP.NET Core 8/9/10 Web API, EF Core migrations, JWT/OAuth2/OIDC auth, React with NSwag codegen, Angular with OpenAPI, Blazor Server and WASM, SignalR real-time features, Azure App Service + Static Web Apps deployment, Azure DevOps CI/CD pipelines, and Docker multi-stage builds.',
  geoLine: 'Supporting full stack .NET developers across USA, UK, Canada, and globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: 'Full Stack .NET: ASP.NET Core API · EF Core · React · Angular · Blazor · JWT · SignalR · Azure · CI/CD.',
  highlights: dotnetHighlights,
  faqs: dotnetTechFaqs('Full Stack .NET', 'ASP.NET Core API design, EF Core, React/Angular/Blazor integration, JWT auth flow, CORS, SignalR, and Azure deployment'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'ASP.NET Core Job Support', href: '/aspnet-core-job-support/' },
      { label: '.NET + React Job Support', href: '/dotnet-react-job-support/' },
      { label: '.NET + Angular Job Support', href: '/dotnet-angular-job-support/' },
      { label: 'Blazor Job Support', href: '/blazor-job-support/' },
      { label: 'EF Core Migrations', href: '/ef-core-migrations-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need Full Stack .NET Job Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time full stack .NET support — ASP.NET Core API, React/Angular/Blazor, EF Core, auth, Azure. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetRepositoryPatternJobSupport: LandingPageConfig = {
  slug: 'dotnet-repository-pattern-job-support',
  title: '.NET Repository Pattern Job Support | Generic Repository, UoW & EF Core',
  description: 'Real-time .NET Repository Pattern job support. Generic repository, Unit of Work, specification pattern, EF Core abstraction, testable data access layers, and production debugging.',
  canonical: `${BASE_URL}/dotnet-repository-pattern-job-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET repository pattern job support', 'generic repository .NET help', 'Unit of Work .NET support',
    'EF Core repository pattern', '.NET data access layer support', 'specification pattern .NET',
  ],
  heroEyebrow: '.NET Repository Pattern Job Support',
  h1: '.NET Repository Pattern Job Support — Generic Repository, Unit of Work & EF Core',
  tagline: 'Struggling with Repository Pattern, Generic Repository, or Unit of Work in your .NET project? Our experts provide real-time guidance on EF Core abstraction layers, specification pattern, and testable data access design.',
  painIntro: '.NET Repository Pattern issues include leaky abstractions exposing IQueryable through the repository interface, incorrect Unit of Work transaction scope, spec pattern complexity vs. direct EF Core usage trade-offs, and testing challenges when mocking repositories vs using in-memory EF Core.',
  heroVariant: 'We cover Generic Repository with EF Core DbContext, Unit of Work wrapping multiple repositories, Specification Pattern (Ardalis.Specification), Repository vs. direct DbSet trade-offs, async repository methods, pagination, filtering, and clean integration testing with TestContainers.',
  geoLine: 'Supporting .NET developers with data access architecture globally.',
  timezoneNote: 'Available 24/7 across all time zones.',
  techSnippet: '.NET Repository Pattern: Generic Repository · Unit of Work · Specification · EF Core · Ardalis.Specification · TestContainers.',
  highlights: dotnetHighlights,
  faqs: dotnetTechFaqs('.NET Repository Pattern', 'Generic Repository design, Unit of Work scope, EF Core abstraction decisions, specification pattern, and testable data access'),
  relatedLinks: {
    geoLinks: [{ label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' }, { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' }],
    techLinks: [
      { label: 'Entity Framework Core Job Support', href: '/entity-framework-core-job-support/' },
      { label: 'EF Core Migrations', href: '/ef-core-migrations-job-support/' },
      { label: '.NET Clean Architecture', href: '/dotnet-clean-architecture-job-support/' },
      { label: '.NET Testing Job Support', href: '/dotnet-testing-job-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: '.NET Proxy Interview Support', href: '/dotnet-proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need .NET Repository Pattern Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET Repository Pattern guidance — Generic Repository, Unit of Work, EF Core, specification pattern. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetProxyInterviewSupport: LandingPageConfig = {
  slug: 'dotnet-proxy-interview-support',
  title: '.NET Proxy Interview Support | Real-Time C# & ASP.NET Core Interview Help',
  description: 'Real-time .NET proxy interview support for C#, ASP.NET Core, Azure, AI/ML, architecture, and cloud-native roles. Expert live guidance during your .NET technical interview — available 24/7.',
  canonical: `${BASE_URL}/dotnet-proxy-interview-support/`,
  lastmod: LASTMOD,
  keywords: [
    '.NET proxy interview support', '.NET interview proxy', 'C# proxy interview support',
    'ASP.NET Core interview proxy', '.NET developer interview help', '.NET technical interview support',
    '.NET interview proxy service', 'live .NET interview assistance', '.NET Azure interview proxy',
  ],
  heroEyebrow: '.NET Proxy Interview Support',
  h1: '.NET Proxy Interview Support — Real-Time Expert Help for C#, ASP.NET Core & Azure Roles',
  tagline: 'Facing a .NET Developer, Senior C# Engineer, Azure .NET Architect, or AI/ML .NET Engineer interview? Our experts provide real-time live guidance across every .NET domain — from core C# through Azure, AI, cloud-native, and architecture rounds.',
  painIntro: '.NET technical interviews are broad and deep — C# language internals, ASP.NET Core middleware, EF Core design, Azure service selection, Semantic Kernel and RAG architecture, Clean Architecture trade-offs, CQRS, Kubernetes deployment, and distributed system design all in a single high-pressure live session.',
  heroVariant: 'We cover the full modern .NET stack: C# 12/13, ASP.NET Core 8/9/10, Entity Framework Core, Blazor, Azure App Service, AKS, Functions, Service Bus, Cosmos DB, Semantic Kernel, Azure OpenAI, RAG pipelines, .NET Aspire, Dapr, Clean Architecture, DDD, CQRS, MediatR, and microservices patterns.',
  heroPostUrgency: 'Available 24/7 across all time zones — same-day onboarding for urgent interview support.',
  geoLine: 'Supporting .NET interview candidates across USA, UK, Canada, Australia, Germany, Ireland, and Singapore.',
  timezoneNote: 'Available 24/7 — EST, GMT, IST, AEST, CET, SGT.',
  techSnippet: '.NET Interview Coverage: C# · ASP.NET Core · EF Core · Azure · Semantic Kernel · RAG · Aspire · Dapr · Clean Architecture · CQRS · DDD · Microservices.',
  highlights: interviewProxyDotnetHighlights,
  faqs: dotnetTechFaqs('.NET Proxy Interview', 'C#, ASP.NET Core, Azure architecture, AI/ML, Clean Architecture, CQRS, and cloud-native .NET design decisions'),
  relatedLinks: {
    geoLinks: [
      { label: '.NET Job Support USA', href: '/usa-dotnet-job-support/' },
      { label: '.NET Job Support UK', href: '/uk-dotnet-job-support/' },
      { label: 'Modern .NET Azure AI Job Support', href: '/modern-dotnet-azure-ai-job-support/' },
    ],
    techLinks: [
      { label: '.NET Azure Interview Proxy', href: '/dotnet-azure-interview-proxy-support/' },
      { label: '.NET AI Interview Proxy', href: '/dotnet-ai-interview-proxy-support/' },
      { label: '.NET Architecture Interview Proxy', href: '/dotnet-architecture-interview-proxy-support/' },
      { label: '.NET Cloud-Native Interview Proxy', href: '/dotnet-cloud-native-interview-proxy-support/' },
      { label: '.NET Full-Stack Interview Proxy', href: '/dotnet-fullstack-interview-proxy-support/' },
      { label: '.NET Database Interview Proxy', href: '/dotnet-database-interview-proxy-support/' },
      { label: '.NET Modernization Interview Proxy', href: '/dotnet-modernization-interview-proxy-support/' },
    ],
    problemLink: { label: 'Struggling in your .NET job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'Proxy Interview Support', href: '/proxy-interview-support/' },
  },
  bottomCTAHeading: 'Need .NET Proxy Interview Support? Get Expert Help Now.',
  bottomCTABody: 'Real-time .NET interview guidance — C#, ASP.NET Core, Azure, AI/ML, architecture, and cloud-native. Available 24/7. WhatsApp or Call: +91 96606 14469.',
};

export const dotnetPhaseLFlatPages: LandingPageConfig[] = [
  dotnetProxyInterviewSupport,
  aspnetCoreInterviewProxySupport,
  fullStackDotnetJobSupport,
  dotnetRepositoryPatternJobSupport,
  dotnetAzureInterviewProxyJobSupport,
  dotnetAiInterviewProxyJobSupport,
  dotnetArchitectureInterviewProxyJobSupport,
  dotnetCloudNativeInterviewProxyJobSupport,
];

// ─── Master export (will grow as phases are added) ────────────────────────────

export const allDotnetClusterPages: LandingPageConfig[] = [
  ...dotnetPhaseAPages,
  ...dotnetPhaseBPages,
  ...dotnetPhaseCPages,
  ...dotnetPhaseDPages,
  ...dotnetPhaseEPages,
  ...dotnetPhaseFPages,
  ...dotnetPhaseGPages,
  ...dotnetPhaseHPages,
  ...dotnetPhaseIPages,
  ...dotnetPhaseJPages,
  ...dotnetPhaseKPages,
  ...dotnetPhaseLFlatPages,
];
