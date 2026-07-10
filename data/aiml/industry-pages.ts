import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  jobSupportHighlights,
  jobFaqs,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
} from './shared';

// ─── Phase 13: Industry AI/ML pages ─────────────────────────────────────────

interface IndustryInput {
  slug: string;
  industry: string;
  titleShort: string;
  useCases: string; // "forecasting, fraud detection, and personalization"
  problems: [string, string, string];
  topics: [string, string];
  techLinks: LandingRelatedLink[];
  roleLinks: LandingRelatedLink[];
}

function buildIndustryPage(i: IndustryInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: `${i.titleShort} AI/ML Job Support — Real-Time Help`,
    description: `Real-time AI/ML job support for ${i.industry} — ${i.useCases}. Project help, production fixes, and interview support. Same-day help for AI/ML professionals.`.slice(0, 154),
    keywords: [
      `${i.industry} AI ML job support`, `${i.industry} machine learning support`, `${i.industry} GenAI support`,
      `${i.industry} AI production support`, `${i.industry} AI interview support`, `${i.industry} MLOps support`,
    ],
    h1: `${i.titleShort} AI/ML Job Support — Project, Production & Interview Help`,
    tagline: `Real-time AI/ML support for ${i.industry} — ${i.useCases}. Project help, production firefighting, and live interview assistance.`,
    heroEyebrow: `${i.titleShort} AI/ML Support — 2026`,
    painIntro: `Working on AI/ML in ${i.industry} and hitting domain-specific walls? ${i.industry} AI has particular constraints — data sensitivity, regulation, and reliability — that make problems harder than a generic ML tutorial admits.`,
    heroVariant: `Our experts have shipped AI/ML in ${i.industry}: ${i.useCases}. We help with real project work, production incidents, and interviews — respecting the compliance, data, and reliability constraints specific to ${i.industry}. Same-day and confidential.`,
    geoLine: `Supporting ${i.industry} AI/ML professionals across the USA, Canada, UK, Europe, Australia, Singapore, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    highlights: jobSupportHighlights,
    faqs: [
      ...jobFaqs(`${i.industry} teams`, `${i.useCases} in production`),
      {
        question: `Do you understand ${i.industry}-specific AI/ML constraints?`,
        answer: `Yes. ${i.titleShort} AI/ML work carries domain-specific requirements — data sensitivity, regulation, auditability, and reliability. Our experts have delivered ${i.useCases} in ${i.industry} settings and help you build solutions that meet those constraints, not just pass a demo.`,
      },
    ],
    useCasesSection: {
      title: `${i.titleShort} AI/ML Situations We Resolve`,
      cases: [
        i.problems[0],
        i.problems[1],
        i.problems[2],
        `A ${i.industry} AI/ML interview covering ${i.topics[0]} and ${i.topics[1]}`,
        `Onboarding onto a ${i.industry} AI/ML platform with strict data and compliance rules`,
        `Positioning a profile for ${i.industry} AI/ML roles so recruiters call`,
      ],
    },
    proxySection: {
      title: `${i.titleShort} AI/ML Interview & Profile Support`,
      intro: `${i.titleShort} AI/ML interviews test both ML depth and domain judgment. We prepare you for ${i.topics[0]} and ${i.topics[1]}, provide live proxy interview support, and position your profile for ${i.industry} AI/ML roles.`,
      points: [
        `Live guidance during ${i.industry} AI/ML technical and system-design rounds`,
        `Coverage of ${i.topics[0]} and ${i.topics[1]} with real ${i.industry} examples`,
        `Profile positioning for ${i.industry} AI/ML roles and recruiter searches`,
        'Candidate marketing and recruiter outreach to build an interview pipeline',
        'Ongoing job support so you deliver confidently in the domain',
      ],
    },
    bottomCTAHeading: `Need ${i.titleShort} AI/ML Job Support or Interview Help Now?`,
    bottomCTABody: `In-house experts with ${i.industry} AI/ML experience — project work, production fixes, or live interview guidance. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, { label: 'Enterprise AI/ML job support', href: '/enterprise-ai-ml-job-support/' }],
      techLinks: i.techLinks.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: EXISTING.aimlProxy,
      additionalLinks: [
        ...i.techLinks.slice(2),
        ...i.roleLinks,
        HUB_LINK,
        PRODUCTION_LINK,
        EXISTING.aimlGuide,
        EXISTING.mlopsGuide,
        { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' },
      ],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });
const roleAiEng = L('AI Engineer job support', '/ai-engineer-job-support/');
const roleMlEng = L('ML Engineer job support', '/machine-learning-engineer-job-support/');
const roleDs = L('Data Scientist job support', '/data-scientist-job-support/');
const roleMlops = L('MLOps Engineer job support', '/mlops-engineer-job-support/');
const roleGenai = L('GenAI Engineer job support', '/genai-engineer-job-support/');

const tGenai = L('Generative AI job support', '/generative-ai-job-support/');
const tRag = L('RAG job support', '/rag-job-support/');
const tMlops = L('MLOps job support', '/mlops-job-support/');
const tCv = L('Computer vision job support', '/computer-vision-job-support/');
const tNlp = L('NLP job support', '/nlp-job-support/');
const tForecast = L('Time series forecasting job support', '/time-series-forecasting-job-support/');
const tRec = L('Recommendation system job support', '/recommendation-system-job-support/');
const tSec = L('AI security & governance job support', '/ai-security-governance-job-support/');
const tResp = L('Responsible AI job support', '/responsible-ai-job-support/');

const IND = (
  slug: string, industry: string, titleShort: string, useCases: string,
  problems: [string, string, string], topics: [string, string],
  techLinks: LandingRelatedLink[], roleLinks: LandingRelatedLink[],
): LandingPageConfig =>
  buildIndustryPage({ slug, industry, titleShort, useCases, problems, topics, techLinks, roleLinks });

export const healthcareAiMlJobSupport = IND(
  'healthcare-ai-ml-job-support', 'healthcare', 'Healthcare',
  'clinical NLP, medical imaging, and patient-risk prediction',
  [
    'A clinical NLP or imaging model with accuracy or bias issues on real patient data',
    'HIPAA/PHI data-handling constraints blocking a model from production',
    'A patient-risk or triage model needing validation and auditability',
  ],
  ['clinical ML and evaluation', 'PHI handling and responsible AI'],
  [tNlp, tCv, tResp], [roleDs, roleMlEng, roleAiEng],
);
export const fintechAiMlJobSupport = IND(
  'fintech-ai-ml-job-support', 'fintech', 'Fintech',
  'fraud detection, credit scoring, and GenAI assistants',
  [
    'A fraud or risk model with drift, false positives, or explainability gaps',
    'A credit or underwriting model needing fairness and regulatory validation',
    'A GenAI assistant for finance that must be accurate and compliant',
  ],
  ['fraud/risk modeling', 'model explainability and compliance'],
  [tGenai, tRag, tResp], [roleMlEng, roleDs, roleAiEng],
);
export const bankingAiMlJobSupport = IND(
  'banking-ai-ml-job-support', 'banking', 'Banking',
  'risk modeling, AML, and GenAI back-office automation',
  [
    'A risk or AML model with drift, alerts noise, or audit-trail gaps',
    'A GenAI document/automation feature needing accuracy and governance',
    'A model-risk-management (SR 11-7) validation and documentation need',
  ],
  ['risk and AML modeling', 'model risk management and governance'],
  [tGenai, tRag, tSec], [roleMlEng, roleDs, roleMlops],
);
export const insuranceAiMlJobSupport = IND(
  'insurance-ai-ml-job-support', 'insurance', 'Insurance',
  'claims automation, pricing, and risk models',
  [
    'A claims or pricing model with accuracy, fairness, or drift issues',
    'A GenAI claims/underwriting assistant needing accuracy and auditability',
    'A risk model needing validation, explainability, and documentation',
  ],
  ['actuarial/risk ML', 'fairness and explainability'],
  [tGenai, tForecast, tResp], [roleDs, roleMlEng, roleAiEng],
);
export const retailAiMlJobSupport = IND(
  'retail-ai-ml-job-support', 'retail', 'Retail',
  'demand forecasting, recommendations, and GenAI shopping assistants',
  [
    'A demand-forecasting model with poor accuracy or seasonality handling',
    'A recommendation system with relevance, cold-start, or scaling issues',
    'A GenAI shopping assistant needing reliable, on-brand answers',
  ],
  ['forecasting and recommendations', 'GenAI product experiences'],
  [tForecast, tRec, tGenai], [roleDs, roleMlEng, roleGenai],
);
export const ecommerceAiMlJobSupport = IND(
  'ecommerce-ai-ml-job-support', 'e-commerce', 'E-commerce',
  'search, ranking, personalization, and GenAI assistants',
  [
    'A search/ranking model with relevance and conversion problems',
    'A personalization or recommendation system underperforming at scale',
    'A GenAI product-discovery or support assistant needing reliability',
  ],
  ['search, ranking, and personalization', 'GenAI and RAG for commerce'],
  [tRec, tRag, tGenai], [roleMlEng, roleDs, roleGenai],
);
export const telecomAiMlJobSupport = IND(
  'telecom-ai-ml-job-support', 'telecom', 'Telecom',
  'churn prediction, network optimization, and GenAI support',
  [
    'A churn or network model with drift or accuracy problems at scale',
    'An anomaly-detection or optimization model for network operations',
    'A GenAI customer-support assistant needing accuracy and scale',
  ],
  ['churn and network ML', 'anomaly detection and GenAI'],
  [tForecast, tGenai, tMlops], [roleDs, roleMlEng, roleMlops],
);
export const manufacturingAiMlJobSupport = IND(
  'manufacturing-ai-ml-job-support', 'manufacturing', 'Manufacturing',
  'predictive maintenance, quality vision, and optimization',
  [
    'A predictive-maintenance model with false alarms or missed failures',
    'A computer-vision quality-inspection model underperforming on the line',
    'An optimization or forecasting model for production planning',
  ],
  ['predictive maintenance and CV', 'edge deployment and optimization'],
  [tCv, tForecast, tMlops], [roleMlEng, roleDs, roleAiEng],
);
export const pharmaAiMlJobSupport = IND(
  'pharma-ai-ml-job-support', 'pharma', 'Pharma',
  'drug-discovery ML, clinical NLP, and GxP-compliant models',
  [
    'A drug-discovery or bioinformatics model needing validation',
    'A clinical/scientific NLP pipeline with accuracy or data issues',
    'A GxP/validated-environment model needing documentation and reproducibility',
  ],
  ['scientific ML and NLP', 'GxP validation and reproducibility'],
  [tNlp, tResp, tMlops], [roleDs, roleMlEng, roleAiEng],
);
export const supplyChainAiMlJobSupport = IND(
  'supply-chain-ai-ml-job-support', 'supply chain', 'Supply Chain',
  'demand forecasting, inventory optimization, and logistics ML',
  [
    'A demand or inventory model with poor accuracy or volatility handling',
    'A logistics/routing optimization model needing tuning at scale',
    'A forecasting pipeline whose accuracy has degraded with market shifts',
  ],
  ['forecasting and optimization', 'pipeline reliability and monitoring'],
  [tForecast, tMlops, tGenai], [roleDs, roleMlEng, roleMlops],
);
export const cybersecurityAiMlJobSupport = IND(
  'cybersecurity-ai-ml-job-support', 'cybersecurity', 'Cybersecurity',
  'threat detection, anomaly detection, and GenAI security tooling',
  [
    'A threat/anomaly-detection model with false positives or evasion issues',
    'A model needing robustness against adversarial and drifting inputs',
    'A GenAI security-analyst assistant needing accuracy and guardrails',
  ],
  ['anomaly and threat detection', 'adversarial robustness and AI security'],
  [tSec, tNlp, tGenai], [roleMlEng, roleDs, roleAiEng],
);
export const enterpriseAiMlJobSupport = IND(
  'enterprise-ai-ml-job-support', 'enterprise', 'Enterprise',
  'internal GenAI copilots, RAG over corporate data, and MLOps at scale',
  [
    'An enterprise GenAI copilot or RAG assistant with accuracy and governance gaps',
    'An ML platform serving many teams with reliability and cost problems',
    'A GenAI rollout blocked by security, governance, and compliance review',
  ],
  ['enterprise GenAI and RAG', 'MLOps, governance, and scale'],
  [tRag, tGenai, tSec], [roleMlops, roleAiEng, roleMlEng],
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlIndustryPages: LandingPageConfig[] = [
  healthcareAiMlJobSupport, fintechAiMlJobSupport, bankingAiMlJobSupport, insuranceAiMlJobSupport,
  retailAiMlJobSupport, ecommerceAiMlJobSupport, telecomAiMlJobSupport, manufacturingAiMlJobSupport,
  pharmaAiMlJobSupport, supplyChainAiMlJobSupport, cybersecurityAiMlJobSupport, enterpriseAiMlJobSupport,
];
