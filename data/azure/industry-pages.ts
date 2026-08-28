import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  RAG_HUB_LINK,
  SEARCH_HUB_LINK,
  SECURITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
  AZURE_INTERVIEW_HUB_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

interface Industry {
  slug: string;
  name: string;
  heroVariant: string;
  cases: string[];
}

const industries: Industry[] = [
  {
    slug: 'healthcare-azure-ai-job-support', name: 'Healthcare',
    heroVariant:
      'Healthcare Azure AI runs under strict PHI and HIPAA constraints. We help build compliant solutions on Azure Health Data Services and FHIR, clinical and healthcare document RAG with Document Intelligence and Azure AI Search, Speech for clinical documentation, and Azure OpenAI/Foundry agents — all with private endpoints, Managed Identity, content safety, and de-identification. We keep PHI protected while shipping real clinical and operational AI.',
    cases: [
      'Document RAG over clinical notes and guidelines with PHI-safe retrieval and citations',
      'Azure Health Data Services / FHIR integration for healthcare AI workloads',
      'Clinical documentation with Azure AI Speech and summarization under HIPAA',
      'Private-endpoint, Managed Identity, and content-safety architecture for PHI',
    ],
  },
  {
    slug: 'financial-services-azure-ai-job-support', name: 'Financial Services',
    heroVariant:
      'Financial-services Azure AI must satisfy regulators, security, and auditability. We help build secure Azure OpenAI and Foundry apps, document RAG over financial and regulatory content, agent workflows for research and operations, and Azure ML for risk and fraud — with private networking, data residency, RBAC, content safety, and full auditability aligned to FCA/OSFI/MAS/APRA-style expectations.',
    cases: [
      'Secure Azure OpenAI with private endpoints, data residency, and audit for a regulated firm',
      'Document RAG over research, filings, and policy content with grounding and citations',
      'Agent workflows for analyst research, operations, and customer support',
      'Azure ML for risk, fraud, and forecasting with MLOps governance',
    ],
  },
  {
    slug: 'banking-azure-ai-job-support', name: 'Banking',
    heroVariant:
      'Banks adopt Azure AI for support, operations, risk, and document processing under heavy regulation. We help build compliant Azure OpenAI and Foundry agents, RAG over policies and customer documents, and Azure ML for credit and fraud — with in-region data residency, private networking, RBAC, content safety, and auditability that satisfies banking regulators.',
    cases: [
      'A banking assistant or agent grounded in policies and customer documents, safely and compliantly',
      'Document processing and RAG over KYC, loan, and operations documents',
      'Azure ML for credit risk and fraud with MLOps governance and monitoring',
      'Private-networking, RBAC, and audit architecture for regulated banking AI',
    ],
  },
  {
    slug: 'insurance-azure-ai-job-support', name: 'Insurance',
    heroVariant:
      'Insurers use Azure AI for claims, underwriting, and customer service. We help build Azure OpenAI and Foundry agents for claims and underwriting support, document RAG and Document Intelligence over policies and claims documents, and Azure ML for pricing and risk — with data residency, security, content safety, and auditability.',
    cases: [
      'Claims and underwriting agents grounded in policy and claims documents',
      'Document Intelligence + RAG over policies, forms, and claims paperwork',
      'Azure ML for pricing, risk, and fraud detection with MLOps',
      'Security, residency, and content-safety architecture for regulated insurance AI',
    ],
  },
  {
    slug: 'pharma-azure-ai-job-support', name: 'Pharma',
    heroVariant:
      'Pharma and life-sciences Azure AI spans R&D, regulatory, and commercial under GxP and data-integrity expectations. We help build document RAG over research, trial, and regulatory content, Azure OpenAI/Foundry agents for scientific and medical-affairs support, and Azure ML — with validated, auditable, compliant architecture and strict data governance.',
    cases: [
      'Document RAG over research papers, trial protocols, and regulatory submissions',
      'Medical-affairs and scientific assistant agents with grounding and citations',
      'Azure ML for research and commercial analytics under GxP-aware governance',
      'Validated, auditable, compliant architecture with strict data governance',
    ],
  },
  {
    slug: 'retail-azure-ai-job-support', name: 'Retail',
    heroVariant:
      'Retail and e-commerce use Azure AI for search, recommendations, support, and content. We help build product-catalog RAG and semantic search with Azure AI Search, Azure OpenAI/Foundry agents for shopping and support, multimodal product understanding, and Azure ML for demand and personalization — scaled cost-efficiently for high traffic.',
    cases: [
      'Product-catalog semantic search and RAG with Azure AI Search',
      'Shopping and customer-support agents on Foundry, at retail scale and cost',
      'Multimodal product understanding (Vision, Content Understanding) for catalogs',
      'Azure ML for demand forecasting, personalization, and recommendations',
    ],
  },
  {
    slug: 'government-azure-ai-job-support', name: 'Government',
    heroVariant:
      'Government and public-sector Azure AI demand data residency, sovereignty, and strict security frameworks (e.g. IRAP, Essential Eight, FedRAMP-style controls). We help build compliant Azure OpenAI and Foundry agents, citizen-service and document RAG, and Azure ML — with in-country residency, private networking, RBAC, content safety, accessibility, and auditability, including disconnected/sovereign options via Foundry Local on Azure Local.',
    cases: [
      'Citizen-service assistants and document RAG with data residency and accessibility',
      'Sovereign or disconnected AI via Foundry Local on Azure Local for sensitive workloads',
      'Private-networking, RBAC, and audit architecture meeting government frameworks',
      'Azure ML and analytics for public-sector programs under strict governance',
    ],
  },
];

export const azureIndustryPages: LandingPageConfig[] = industries.map((ind) =>
  azurePage({
    slug: ind.slug,
    title: `${ind.name} Azure AI Proxy Job Support — Compliant Foundry, OpenAI & RAG`,
    description: `Real-time ${ind.name} Azure AI job support: build compliant, secure ${ind.name} solutions on Microsoft Foundry, Azure OpenAI, Azure AI Search RAG, and Azure ML — with data residency, security, and auditability.`,
    keywords: [
      `${ind.name} Azure AI job support`, `${ind.name} Azure OpenAI`, `${ind.name} RAG Azure`,
      `${ind.name} Microsoft Foundry`, `${ind.name} Azure ML`,
    ],
    h1: `${ind.name} Azure AI Proxy Job Support — Secure, Compliant AI Delivery`,
    tagline: `Real-time Azure AI job support for ${ind.name} teams — compliant, secure Foundry, Azure OpenAI, RAG, and Azure ML delivery.`,
    heroEyebrow: `${ind.name} Azure AI Support`,
    painIntro: `Building Azure AI in ${ind.name} means balancing real capability with compliance, security, and data residency. Our experts help you ship AI that satisfies both.`,
    heroVariant: ind.heroVariant,
    geoLine: `${ind.name} Azure AI support for teams across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    highlights: jobSupportHighlights,
    faqs: azureServiceFaqs(`${ind.name} Azure AI`, `We build compliant ${ind.name} solutions on Microsoft Foundry, Azure OpenAI, Azure AI Search RAG, and Azure ML with data residency, security, and auditability.`),
    useCasesSection: { title: `Common Azure AI Situations We Help With in ${ind.name}`, cases: ind.cases },
    bottomCTAHeading: `Need ${ind.name} Azure AI Support?`,
    bottomCTABody: `In-house Azure AI experts help ${ind.name} teams ship compliant, secure Foundry, Azure OpenAI, and Azure ML solutions. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK],
      techLinks: [FOUNDRY_HUB_LINK, RAG_HUB_LINK],
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: [SEARCH_HUB_LINK, SECURITY_HUB_LINK, A('Azure AI governance job support', 'azure-ai-governance-job-support'), EXISTING.azureOpenAiJobSupport],
    }),
  }),
);
