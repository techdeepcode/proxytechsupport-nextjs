import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  techHighlights,
  kbFaqs,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
  CANDIDATE_MARKETING_LINK,
  GET_SCHEDULED_LINK,
} from './shared';

// ─── Phase 14: AI/ML knowledge-base & guide pages (educational) ─────────────

interface KbInput {
  slug: string;
  topic: string;
  titleShort: string;
  metaDesc: string;
  intro: string;
  learn: [string, string, string, string, string, string];
  commercialLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
}

function buildKbPage(i: KbInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: `${i.titleShort} — Practical Guide`,
    description: i.metaDesc.slice(0, 154),
    keywords: [
      `${i.topic}`, `${i.topic} guide`, `${i.topic} explained`,
      'AI ML job support', 'AI ML interview guide', 'AI ML career guide',
    ],
    h1: `${i.titleShort} — A Practical Guide`,
    tagline: `A clear, practical guide to ${i.topic} for working AI/ML professionals and candidates.`,
    heroEyebrow: 'AI/ML Knowledge Base',
    painIntro: i.intro,
    heroVariant:
      'This guide is written for people doing the work — practical, honest, and focused on what actually matters. Where hands-on help makes sense, we point you to real-time AI/ML support, but the guide stands on its own.',
    geoLine: 'Guidance for AI/ML professionals across the USA, Canada, UK, Europe, Australia, and worldwide.',
    timezoneNote: 'Support available across all major business hours if you want hands-on help.',
    highlights: techHighlights,
    faqs: kbFaqs(i.topic),
    useCasesSection: {
      title: 'What This Guide Covers',
      cases: [...i.learn],
    },
    proxySection: {
      title: 'When You Want Hands-On Help',
      intro:
        'Reading is a start; sometimes you need an expert beside you. If this topic is blocking a deliverable, an incident, or an interview, we can help in real time.',
      points: [
        'Real-time AI/ML job support on your actual project',
        'Production issue support when something is broken now',
        'Proxy interview support and mock interviews for AI/ML rounds',
        'Profile positioning and candidate marketing to get more calls',
        'Confidential, in-house experts — same-day, NDAs available',
      ],
    },
    bottomCTAHeading: 'Want Hands-On AI/ML Help, Not Just a Guide?',
    bottomCTABody:
      'Real-time job support, production fixes, interview guidance, or profile positioning — contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, i.commercialLinks[0] ?? HUB_LINK],
      techLinks: i.commercialLinks.slice(1, 3),
      problemLink: i.problemLink,
      proxyLink: i.proxyLink,
      additionalLinks: [
        ...i.commercialLinks.slice(3),
        HUB_LINK,
        PRODUCTION_LINK,
        EXISTING.aimlGuide,
        EXISTING.mlopsGuide,
        EXISTING.ragGuide,
        EXISTING.genaiGuide,
      ],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });
const K = (
  slug: string, topic: string, titleShort: string, metaDesc: string, intro: string,
  learn: [string, string, string, string, string, string], commercialLinks: LandingRelatedLink[],
  problemLink: LandingRelatedLink, proxyLink: LandingRelatedLink,
): LandingPageConfig =>
  buildKbPage({ slug, topic, titleShort, metaDesc, intro, learn, commercialLinks, problemLink, proxyLink });

export const whatIsAiMlJobSupport = K(
  'what-is-ai-ml-job-support', 'AI/ML job support', 'What Is AI/ML Job Support',
  'What is AI/ML job support? A practical explanation of real-time help for AI, ML, GenAI, and MLOps professionals — how it works, who it is for, and what to expect.',
  'You have heard of “job support” but are not sure what AI/ML job support actually involves, how it works, or whether it is right for your situation.',
  [
    'What AI/ML job support is and how it differs from training or consulting',
    'How real-time support works during your working hours',
    'What kinds of AI/ML problems it covers — project, production, and interviews',
    'Who benefits most, from new joiners to senior engineers',
    'How confidentiality and NDAs work',
    'How to get started and what to expect on day one',
  ],
  [HUB_LINK, PRODUCTION_LINK, L('LLM job support', '/llm-job-support/'), L('AI/ML project onboarding support', '/ai-ml-project-onboarding-support/')],
  PRODUCTION_LINK, EXISTING.aimlProxy,
);
export const howAiMlJobSupportWorks = K(
  'how-ai-ml-job-support-works', 'how AI/ML job support works', 'How AI/ML Job Support Works',
  'How does AI/ML job support work? A step-by-step guide to getting real-time expert help on your AI, ML, GenAI, or MLOps project — from first message to daily delivery.',
  'You are considering AI/ML job support but want to understand exactly how it works before reaching out.',
  [
    'The step-by-step process from first contact to ongoing support',
    'How experts are matched to your stack and problem',
    'What a typical working-hours support session looks like',
    'How production incidents and urgent help are handled',
    'How communication and confidentiality are managed',
    'How pricing, scheduling, and time zones are handled',
  ],
  [HUB_LINK, L('AI/ML project onboarding support', '/ai-ml-project-onboarding-support/'), L('MLOps job support', '/mlops-job-support/'), EXISTING.realtimeGuide],
  PRODUCTION_LINK, EXISTING.aimlProxy,
);
export const aiMlProductionIssueSupportGuide = K(
  'ai-ml-production-issue-support-guide', 'AI/ML production issue support', 'AI/ML Production Issue Support Guide',
  'A practical guide to handling AI/ML production issues — model drift, latency, RAG hallucinations, and pipeline failures — plus when to get real-time expert help.',
  'AI systems fail in production in ways that are hard to debug alone, and the pressure is high when the business is affected.',
  [
    'The most common AI/ML production failure modes and their signals',
    'How to triage model-quality vs infrastructure vs data issues',
    'Debugging RAG and LLM answer-quality problems',
    'Handling latency, cost, and scaling incidents',
    'Safe rollback and recovery practices',
    'When and how to get real-time production support',
  ],
  [PRODUCTION_LINK, L('AI production debugging support', '/ai-production-debugging-support/'), L('Model monitoring job support', '/model-monitoring-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  PRODUCTION_LINK, EXISTING.mlopsProxy,
);
export const aiMlProjectOnboardingGuide = K(
  'ai-ml-project-onboarding-guide', 'AI/ML project onboarding', 'AI/ML Project Onboarding Guide',
  'How to ramp up fast on a new AI/ML project — understanding the codebase, data, and pipelines, delivering early, and building credibility in your first weeks.',
  'The first weeks on a new AI/ML project decide how you are perceived, and the codebase is rarely as clean as you hoped.',
  [
    'How to read and navigate an unfamiliar ML codebase',
    'Understanding the data and feature pipelines before changing them',
    'Reproducing results and getting your environment working',
    'Delivering your first tickets safely and passing review',
    'Handling early standups, client calls, and design reviews',
    'When onboarding support makes the difference',
  ],
  [L('AI/ML project onboarding support', '/ai-ml-project-onboarding-support/'), L('AI/ML client call & standup support', '/ai-ml-client-call-standup-support/'), HUB_LINK, EXISTING.clientCall],
  PRODUCTION_LINK, EXISTING.aimlProxy,
);
export const ragProductionSupportGuide = K(
  'rag-production-support-guide', 'RAG production support', 'RAG Production Support Guide',
  'A practical guide to running RAG in production — fixing retrieval quality, hallucinations, latency, and cost — plus when to get expert help.',
  'RAG systems look great in demos and then degrade in production as data, embeddings, and usage change.',
  [
    'Why RAG answer quality degrades over time',
    'Diagnosing retrieval vs generation vs data problems',
    'Chunking, embedding, and index tuning that actually helps',
    'Evaluation and hallucination mitigation',
    'Latency and cost optimization for RAG',
    'When to bring in RAG production support',
  ],
  [L('RAG job support', '/rag-job-support/'), L('Vector database job support', '/vector-database-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/'), PRODUCTION_LINK],
  PRODUCTION_LINK, L('RAG interview proxy support', '/rag-interview-proxy-support/'),
);
export const llmApplicationSupportGuide = K(
  'llm-application-support-guide', 'LLM application support', 'LLM Application Support Guide',
  'A practical guide to building and running LLM applications — architecture, prompting, evaluation, cost, and reliability — plus when to get expert help.',
  'LLM apps are easy to prototype and hard to make reliable, consistent, and cost-effective in production.',
  [
    'LLM application architecture patterns that scale',
    'Prompting and structured output for reliability',
    'Evaluation harnesses that catch regressions',
    'Cost, latency, and context-window management',
    'Guardrails, safety, and monitoring',
    'When LLM application support helps',
  ],
  [L('LLM job support', '/llm-job-support/'), L('Prompt engineering job support', '/prompt-engineering-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/'), L('Generative AI job support', '/generative-ai-job-support/')],
  PRODUCTION_LINK, L('LLM interview proxy support', '/llm-interview-proxy-support/'),
);
export const mlopsProductionSupportGuide = K(
  'mlops-production-support-guide', 'MLOps production support', 'MLOps Production Support Guide',
  'A practical guide to MLOps in production — CI/CD, deployment, monitoring, and reliability — plus when to get real-time expert help.',
  'MLOps is where models meet reality, and gaps in pipelines, monitoring, or reproducibility become production incidents.',
  [
    'What a healthy ML CI/CD and deployment pipeline looks like',
    'Model registry, versioning, and reproducibility practices',
    'Monitoring for drift, quality, and data issues',
    'Incident response and rollback for ML systems',
    'Cost and scaling of ML serving',
    'When MLOps production support helps',
  ],
  [L('MLOps job support', '/mlops-job-support/'), L('Model deployment job support', '/model-deployment-job-support/'), L('Model monitoring job support', '/model-monitoring-job-support/'), PRODUCTION_LINK],
  PRODUCTION_LINK, L('MLOps interview proxy support', '/mlops-interview-proxy-support/'),
);
export const aiModelDeploymentSupportGuide = K(
  'ai-model-deployment-support-guide', 'AI model deployment', 'AI Model Deployment Support Guide',
  'A practical guide to deploying AI/ML models — serving architectures, scaling, batching, hardware, and cost — plus when to get expert help.',
  'A model that trains well can still be hard to serve reliably, quickly, and affordably in production.',
  [
    'Model serving architectures and when to use each',
    'Packaging, dependencies, and hardware/GPU considerations',
    'Autoscaling, batching, and latency optimization',
    'Cost control for model serving',
    'Rollout, canary, and rollback strategies',
    'When model deployment support helps',
  ],
  [L('Model deployment job support', '/model-deployment-job-support/'), L('MLOps job support', '/mlops-job-support/'), L('Model monitoring job support', '/model-monitoring-job-support/'), PRODUCTION_LINK],
  PRODUCTION_LINK, L('MLOps interview proxy support', '/mlops-interview-proxy-support/'),
);
export const aiModelMonitoringSupportGuide = K(
  'ai-model-monitoring-support-guide', 'AI model monitoring', 'AI Model Monitoring Support Guide',
  'A practical guide to monitoring AI/ML models in production — drift, quality, data, and alerting — so regressions are caught before users notice.',
  'Without good monitoring, model regressions surface as business impact instead of an alert you can act on.',
  [
    'What to monitor: model quality, drift, data, and latency',
    'Designing meaningful alerts without noise',
    'Data-quality and feature monitoring upstream of the model',
    'Evaluation harnesses as a production gate',
    'Observability tooling and dashboards',
    'When model monitoring support helps',
  ],
  [L('Model monitoring job support', '/model-monitoring-job-support/'), L('AI production debugging support', '/ai-production-debugging-support/'), L('MLOps job support', '/mlops-job-support/'), PRODUCTION_LINK],
  PRODUCTION_LINK, L('MLOps interview proxy support', '/mlops-interview-proxy-support/'),
);
export const aiMlInterviewPreparationGuide = K(
  'ai-ml-interview-preparation-guide', 'AI/ML interview preparation', 'AI/ML Interview Preparation Guide',
  'A practical guide to preparing for AI/ML interviews — coding, ML system design, GenAI/RAG, and behavioral rounds — plus when to get live support.',
  'AI/ML interviews span coding, system design, and GenAI depth, and it is hard to know where to focus your preparation.',
  [
    'The structure of modern AI/ML interview loops',
    'How to prepare for coding and ML system design',
    'GenAI, LLM, and RAG topics interviewers probe',
    'MLOps and deployment scenario questions',
    'Behavioral rounds and project storytelling',
    'When proxy interview support and mocks help',
  ],
  [L('AI/ML interview proxy USA', '/ai-ml-interview-proxy-support-usa/'), L('GenAI interview proxy support', '/genai-interview-proxy-support/'), L('MLOps interview proxy support', '/mlops-interview-proxy-support/'), GET_SCHEDULED_LINK],
  L('Why AI/ML interviews are failing', '/why-ai-ml-interviews-are-failing/'), EXISTING.aimlProxy,
);
export const genaiSystemDesignInterviewGuide = K(
  'genai-system-design-interview-guide', 'GenAI system design interview', 'GenAI System Design Interview Guide',
  'A practical guide to GenAI system design interviews — designing LLM apps, RAG, and agents end to end, with trade-offs interviewers expect.',
  'GenAI system design rounds ask you to architect an LLM system live, balancing quality, cost, latency, and safety.',
  [
    'A framework for approaching GenAI system design questions',
    'Designing an LLM application end to end',
    'RAG architecture and retrieval trade-offs',
    'Agent and tool-use design decisions',
    'Cost, latency, safety, and evaluation trade-offs',
    'When live interview support helps',
  ],
  [L('GenAI interview proxy support', '/genai-interview-proxy-support/'), L('Generative AI job support', '/generative-ai-job-support/'), L('RAG job support', '/rag-job-support/'), L('Get GenAI interview scheduled', '/get-genai-interview-scheduled/')],
  L('How to explain a GenAI project in interview', '/how-to-explain-genai-project-in-interview/'), EXISTING.aimlProxy,
);
export const ragSystemDesignInterviewGuide = K(
  'rag-system-design-interview-guide', 'RAG system design interview', 'RAG System Design Interview Guide',
  'A practical guide to RAG system design interviews — retrieval, chunking, embeddings, evaluation, and scaling — with the trade-offs interviewers expect.',
  'RAG system design rounds test whether you can architect a reliable retrieval pipeline, not just call an API.',
  [
    'A framework for RAG system design questions',
    'Chunking and embedding strategy trade-offs',
    'Vector-database selection and indexing',
    'Retrieval quality, re-ranking, and evaluation',
    'Latency, cost, and freshness trade-offs',
    'When live interview support helps',
  ],
  [L('RAG interview proxy support', '/rag-interview-proxy-support/'), L('RAG job support', '/rag-job-support/'), L('Vector database job support', '/vector-database-job-support/'), L('RAG Engineer job support', '/rag-engineer-job-support/')],
  L('How to explain a RAG project in interview', '/how-to-explain-rag-project-in-interview/'), EXISTING.aimlProxy,
);
export const mlopsSystemDesignInterviewGuide = K(
  'mlops-system-design-interview-guide', 'MLOps system design interview', 'MLOps System Design Interview Guide',
  'A practical guide to MLOps system design interviews — pipelines, deployment, monitoring, and reliability — with the trade-offs interviewers expect.',
  'MLOps system design rounds ask you to design the platform and pipelines that keep models running in production.',
  [
    'A framework for MLOps system design questions',
    'Training-to-deployment pipeline design',
    'Model registry, versioning, and reproducibility',
    'Monitoring, drift detection, and alerting',
    'Scaling, cost, and reliability trade-offs',
    'When live interview support helps',
  ],
  [L('MLOps interview proxy support', '/mlops-interview-proxy-support/'), L('MLOps job support', '/mlops-job-support/'), L('Model deployment job support', '/model-deployment-job-support/'), L('MLOps Engineer job support', '/mlops-engineer-job-support/')],
  L('How to explain an MLOps project in interview', '/how-to-explain-mlops-project-in-interview/'), EXISTING.mlopsProxy,
);
export const aiMlResumeProfilePositioningGuide = K(
  'ai-ml-resume-profile-positioning-guide', 'AI/ML resume and profile positioning', 'AI/ML Resume & Profile Positioning Guide',
  'A practical guide to positioning your AI/ML resume and LinkedIn so recruiters find you — keywords, impact framing, and ATS-friendly structure.',
  'A strong AI/ML background gets no calls if the profile does not surface in searches or pass ATS filters.',
  [
    'Why AI/ML resumes get filtered out',
    'The keywords recruiters actually search for',
    'Framing impact with metrics (accuracy, latency, cost, scale)',
    'ATS-friendly resume structure',
    'LinkedIn headline and summary that get you found',
    'When candidate marketing and positioning support help',
  ],
  [L('AI/ML profile positioning support', '/ai-ml-profile-positioning-support/'), CANDIDATE_MARKETING_LINK, GET_SCHEDULED_LINK, EXISTING.candidateMarketing],
  L('Why your AI/ML resume gets no calls', '/why-ai-ml-resume-gets-no-calls/'), EXISTING.candidateMarketing,
);
export const aiEngineerJobSearchGuide = K(
  'ai-engineer-job-search-guide', 'AI Engineer job search', 'AI Engineer Job Search Guide',
  'A practical guide to the AI Engineer job search — positioning, portfolio, interviews, and landing the role in a competitive 2026 market.',
  'The AI Engineer market is competitive, and a scattershot job search wastes months.',
  [
    'What employers expect from AI Engineers in 2026',
    'Positioning your profile and portfolio',
    'Where the roles are and how to target them',
    'Preparing for AI Engineer interviews',
    'Converting interviews into offers',
    'When support accelerates the search',
  ],
  [L('AI Engineer job support', '/ai-engineer-job-support/'), L('AI Engineer profile positioning', '/ai-engineer-profile-positioning/'), L('GenAI interview proxy support', '/genai-interview-proxy-support/'), GET_SCHEDULED_LINK],
  L('How to get AI/ML interviews scheduled', '/how-to-get-ai-ml-interviews-scheduled/'), EXISTING.aimlProxy,
);
export const mlEngineerJobSearchGuide = K(
  'ml-engineer-job-search-guide', 'ML Engineer job search', 'ML Engineer Job Search Guide',
  'A practical guide to the ML Engineer job search — positioning, interviews, and landing the role, from transitioning-in to senior.',
  'ML Engineer hiring bars are high and the search rewards focus and positioning.',
  [
    'What employers expect from ML Engineers in 2026',
    'Positioning your profile for ML Engineer roles',
    'Targeting the right companies and teams',
    'Preparing for ML system design and coding rounds',
    'Converting interviews into offers',
    'When support accelerates the search',
  ],
  [L('ML Engineer job support', '/machine-learning-engineer-job-support/'), L('ML Engineer profile positioning', '/ml-engineer-profile-positioning/'), L('ML Engineer interview proxy support', '/machine-learning-engineer-interview-proxy-support/'), GET_SCHEDULED_LINK],
  L('How to get AI/ML interviews scheduled', '/how-to-get-ai-ml-interviews-scheduled/'), EXISTING.aimlProxy,
);
export const genaiEngineerJobSearchGuide = K(
  'genai-engineer-job-search-guide', 'GenAI Engineer job search', 'GenAI Engineer Job Search Guide',
  'A practical guide to the GenAI Engineer job search — positioning, portfolio, interviews, and landing GenAI roles in a fast-moving market.',
  'GenAI hiring is booming but noisy, and standing out takes clear positioning and real depth.',
  [
    'What employers expect from GenAI Engineers in 2026',
    'Positioning your GenAI portfolio and profile',
    'Targeting GenAI-native and enterprise roles',
    'Preparing for GenAI system design and coding rounds',
    'Converting interviews into offers',
    'When support accelerates the search',
  ],
  [L('GenAI Engineer job support', '/genai-engineer-job-support/'), L('GenAI candidate marketing', '/genai-candidate-marketing/'), L('GenAI interview proxy support', '/genai-interview-proxy-support/'), L('Get GenAI interview scheduled', '/get-genai-interview-scheduled/')],
  L('How to get AI/ML interviews scheduled', '/how-to-get-ai-ml-interviews-scheduled/'), EXISTING.aimlProxy,
);
export const dataScientistJobSearchGuide = K(
  'data-scientist-job-search-guide', 'data scientist job search', 'Data Scientist Job Search Guide',
  'A practical guide to the data scientist job search — positioning, portfolio, interviews, and landing the role in a competitive market.',
  'Data science roles are competitive and increasingly overlap with ML engineering, so positioning matters more than ever.',
  [
    'What employers expect from data scientists in 2026',
    'Positioning your profile and project portfolio',
    'Targeting the right roles as the field shifts',
    'Preparing for modeling, stats, and case interviews',
    'Converting interviews into offers',
    'When support accelerates the search',
  ],
  [L('Data Scientist job support', '/data-scientist-job-support/'), L('Data science candidate marketing', '/data-science-candidate-marketing/'), L('Data science interview proxy support', '/data-science-interview-proxy-support/'), L('Get data science interview scheduled', '/get-data-science-interview-scheduled/')],
  L('How to get AI/ML interviews scheduled', '/how-to-get-ai-ml-interviews-scheduled/'), EXISTING.aimlProxy,
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlKbPages: LandingPageConfig[] = [
  whatIsAiMlJobSupport, howAiMlJobSupportWorks, aiMlProductionIssueSupportGuide, aiMlProjectOnboardingGuide,
  ragProductionSupportGuide, llmApplicationSupportGuide, mlopsProductionSupportGuide,
  aiModelDeploymentSupportGuide, aiModelMonitoringSupportGuide, aiMlInterviewPreparationGuide,
  genaiSystemDesignInterviewGuide, ragSystemDesignInterviewGuide, mlopsSystemDesignInterviewGuide,
  aiMlResumeProfilePositioningGuide, aiEngineerJobSearchGuide, mlEngineerJobSearchGuide,
  genaiEngineerJobSearchGuide, dataScientistJobSearchGuide,
];
