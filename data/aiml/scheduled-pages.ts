import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  marketingHighlights,
  marketingFaqs,
  EXISTING,
  HUB_LINK,
  PROFILE_LINK,
  CANDIDATE_MARKETING_LINK,
} from './shared';

// ─── Phase 11: Get-AI/ML-interview-scheduled funnel pages ───────────────────

interface SchedInput {
  slug: string;
  subject: string;
  titleShort: string;
  market: string;
  situations: [string, string, string, string, string, string];
  marketingLink: LandingRelatedLink;
  interviewLink: LandingRelatedLink;
  extraLinks?: LandingRelatedLink[];
}

function buildScheduledPage(i: SchedInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: `${i.titleShort} — Profile Engineering & Outreach`,
    description: `Getting no AI/ML interview calls? We engineer your profile and run recruiter outreach to get ${i.market} AI/ML interviews scheduled. GenAI, LLM, MLOps & data science roles.`.slice(0, 154),
    keywords: [
      `${i.subject}`, `get ${i.market} AI ML interviews`, 'AI ML interview calls',
      'AI ML profile optimization', 'AI ML recruiter outreach', 'AI ML candidate marketing',
    ],
    h1: `${i.titleShort} — Stop Waiting for Interview Calls`,
    tagline: `Not getting AI/ML interview calls? We engineer your profile for recruiter visibility and run active outreach to get ${i.market} interviews scheduled.`,
    heroEyebrow: 'AI/ML Interview Scheduling — 2026',
    painIntro: `You have real AI/ML skills but the ${i.market} interview calls are not coming. The problem is almost always positioning — your profile does not surface in recruiter searches or pass ATS filters for GenAI, LLM, RAG, and MLOps roles.`,
    heroVariant:
      'We rebuild your resume and LinkedIn around the exact terms AI/ML recruiters search for, quantify your production impact, and then run active outreach to hiring managers and staffing firms — turning a silent job search into a real interview pipeline.',
    geoLine: `Helping AI/ML professionals get interviews scheduled across ${i.market} and worldwide.`,
    timezoneNote: 'Profile support and outreach aligned to your target market and time zone.',
    highlights: marketingHighlights,
    faqs: marketingFaqs(`${i.market} AI/ML candidates`),
    useCasesSection: {
      title: 'Situations We Turn Into Interview Calls',
      cases: [...i.situations],
    },
    proxySection: {
      title: 'From Zero Calls to Interview Pipeline',
      intro:
        'Positioning gets the calls; our interview support converts them. We connect profile engineering, candidate marketing, and proxy interview support into one pipeline.',
      points: [
        'AI/ML keyword engineering for resume, LinkedIn, and job-board profiles',
        'Measurable-impact rewriting so your GenAI/LLM/MLOps work stands out',
        'Active candidate marketing and recruiter/hiring-manager outreach',
        'Proxy interview support to convert the interviews you land',
        'Ongoing job support so you keep the role once you start',
      ],
    },
    bottomCTAHeading: `Ready to Get ${i.market} AI/ML Interviews Scheduled?`,
    bottomCTABody:
      'We engineer your AI/ML profile for recruiter visibility and run active outreach. Contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, i.marketingLink],
      techLinks: [i.interviewLink, EXISTING.aimlProxy],
      problemLink: { label: 'Why your AI/ML resume gets no calls', href: '/why-ai-ml-resume-gets-no-calls/' },
      proxyLink: EXISTING.candidateMarketing,
      additionalLinks: [
        i.marketingLink,
        CANDIDATE_MARKETING_LINK,
        PROFILE_LINK,
        i.interviewLink,
        { label: 'How to get AI/ML interviews scheduled', href: '/how-to-get-ai-ml-interviews-scheduled/' },
        ...(i.extraLinks ?? []),
        HUB_LINK,
        EXISTING.getScheduled,
      ],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });

const genericSituations = (m: string): [string, string, string, string, string, string] => [
  `A capable AI/ML engineer in ${m} applying to dozens of roles with no responses`,
  `A software engineer transitioning into AI/ML whose profile still reads like a backend developer`,
  `A data scientist moving into GenAI/LLM roles but not surfacing in those searches`,
  `A strong profile buried under vague bullets instead of measurable AI/ML impact`,
  `A LinkedIn headline recruiters scroll past for AI Engineer and MLOps roles`,
  `A candidate targeting the ${m} market whose profile is not positioned for it`,
];

const S = (
  slug: string, subject: string, titleShort: string, market: string,
  marketingLink: LandingRelatedLink, interviewLink: LandingRelatedLink,
  situations?: [string, string, string, string, string, string], extraLinks?: LandingRelatedLink[],
): LandingPageConfig =>
  buildScheduledPage({ slug, subject, titleShort, market, marketingLink, interviewLink, extraLinks, situations: situations ?? genericSituations(market) });

const aimlMarketingGeneric = L('AI/ML candidate marketing', '/ai-ml-candidate-marketing/');

export const getAiMlInterviewScheduled = S(
  'get-ai-ml-interview-scheduled', 'get AI/ML interview scheduled', 'Get AI/ML Interviews Scheduled', 'global',
  aimlMarketingGeneric, L('AI/ML interview proxy USA', '/ai-ml-interview-proxy-support-usa/'),
);
export const getAiMlInterviewScheduledUsa = S(
  'get-ai-ml-interview-scheduled-usa', 'get AI/ML interview scheduled USA', 'Get AI/ML Interviews Scheduled USA', 'US',
  L('AI/ML candidate marketing USA', '/ai-ml-candidate-marketing-usa/'), L('AI/ML interview proxy USA', '/ai-ml-interview-proxy-support-usa/'),
  undefined, [L('Candidate marketing USA', '/job-application-candidate-marketing-usa/')],
);
export const getAiMlInterviewScheduledCanada = S(
  'get-ai-ml-interview-scheduled-canada', 'get AI/ML interview scheduled Canada', 'Get AI/ML Interviews Scheduled Canada', 'Canadian',
  L('AI/ML candidate marketing Canada', '/ai-ml-candidate-marketing-canada/'), L('AI/ML interview proxy Canada', '/ai-ml-interview-proxy-support-canada/'),
  undefined, [L('Candidate marketing Canada', '/job-application-candidate-marketing-canada/')],
);
export const getAiMlInterviewScheduledUk = S(
  'get-ai-ml-interview-scheduled-uk', 'get AI/ML interview scheduled UK', 'Get AI/ML Interviews Scheduled UK', 'UK',
  L('AI/ML candidate marketing UK', '/ai-ml-candidate-marketing-uk/'), L('AI/ML interview proxy UK', '/ai-ml-interview-proxy-support-uk/'),
  undefined, [L('Candidate marketing UK', '/job-application-candidate-marketing-uk/')],
);
export const getAiMlInterviewScheduledAustralia = S(
  'get-ai-ml-interview-scheduled-australia', 'get AI/ML interview scheduled Australia', 'Get AI/ML Interviews Scheduled Australia', 'Australian',
  L('AI/ML candidate marketing Australia', '/ai-ml-candidate-marketing-australia/'), L('AI/ML interview proxy Australia', '/ai-ml-interview-proxy-support-australia/'),
  undefined, [L('Candidate marketing Australia', '/job-application-candidate-marketing-australia/')],
);
export const getAiMlInterviewScheduledIreland = S(
  'get-ai-ml-interview-scheduled-ireland', 'get AI/ML interview scheduled Ireland', 'Get AI/ML Interviews Scheduled Ireland', 'Irish',
  L('AI/ML candidate marketing Ireland', '/ai-ml-candidate-marketing-ireland/'), EXISTING.aimlProxy,
  undefined, [L('Candidate marketing Ireland', '/job-application-candidate-marketing-ireland/')],
);
export const getAiMlInterviewScheduledGermany = S(
  'get-ai-ml-interview-scheduled-germany', 'get AI/ML interview scheduled Germany', 'Get AI/ML Interviews Scheduled Germany', 'German',
  L('AI/ML candidate marketing Germany', '/ai-ml-candidate-marketing-germany/'), L('AI/ML interview proxy Europe', '/ai-ml-interview-proxy-support-europe/'),
  undefined, [L('Candidate marketing Germany', '/job-application-candidate-marketing-germany/')],
);
export const getAiMlInterviewScheduledSingapore = S(
  'get-ai-ml-interview-scheduled-singapore', 'get AI/ML interview scheduled Singapore', 'Get AI/ML Interviews Scheduled Singapore', 'Singapore',
  L('AI/ML candidate marketing Singapore', '/ai-ml-candidate-marketing-singapore/'), L('AI/ML interview proxy Singapore', '/ai-ml-interview-proxy-support-singapore/'),
  undefined, [L('Candidate marketing Singapore', '/job-application-candidate-marketing-singapore/')],
);
export const getAiMlInterviewScheduledUae = S(
  'get-ai-ml-interview-scheduled-uae', 'get AI/ML interview scheduled UAE', 'Get AI/ML Interviews Scheduled UAE', 'UAE',
  L('AI/ML candidate marketing UAE', '/ai-ml-candidate-marketing-uae/'), EXISTING.aimlProxy,
  undefined, [L('Candidate marketing UAE', '/job-application-candidate-marketing-uae/')],
);
export const getGenaiInterviewScheduled = S(
  'get-genai-interview-scheduled', 'get GenAI interview scheduled', 'Get GenAI Interviews Scheduled', 'GenAI',
  L('GenAI candidate marketing', '/genai-candidate-marketing/'), L('GenAI interview proxy support', '/genai-interview-proxy-support/'),
  [
    'A strong GenAI builder whose resume reads like a generic software engineer',
    'An ML engineer pivoting to GenAI but not surfacing in GenAI searches',
    'A GenAI portfolio that is not translated into recruiter-facing impact',
    'A profile missing LLM, RAG, and agent keywords recruiters filter on',
    'A LinkedIn headline that hides real GenAI production experience',
    'A candidate getting no GenAI calls despite shipped GenAI features',
  ],
);
export const getMlopsInterviewScheduled = S(
  'get-mlops-interview-scheduled', 'get MLOps interview scheduled', 'Get MLOps Interviews Scheduled', 'MLOps',
  L('MLOps candidate marketing', '/mlops-candidate-marketing/'), L('MLOps interview proxy support', '/mlops-interview-proxy-support/'),
  [
    'A platform/DevOps engineer moving into MLOps but not positioned for it',
    'An MLOps profile missing CI/CD, monitoring, and registry keywords',
    'Impact buried instead of framed as reliability and delivery outcomes',
    'A resume that does not surface for MLOps recruiter searches',
    'A LinkedIn profile that undersells real ML platform ownership',
    'A candidate getting no MLOps calls despite strong platform experience',
  ],
);
export const getDataScienceInterviewScheduled = S(
  'get-data-science-interview-scheduled', 'get data science interview scheduled', 'Get Data Science Interviews Scheduled', 'data science',
  L('Data science candidate marketing', '/data-science-candidate-marketing/'), L('Data science interview proxy support', '/data-science-interview-proxy-support/'),
  [
    'An analyst moving into data science but not positioned for DS roles',
    'A DS profile missing modeling, experimentation, and impact keywords',
    'Projects framed as tasks instead of measurable business outcomes',
    'A resume that does not pass ATS filters for data science roles',
    'A LinkedIn headline recruiters scroll past for DS positions',
    'A candidate getting no DS calls despite solid modeling work',
  ],
);
export const getLlmEngineerInterviewScheduled = S(
  'get-llm-engineer-interview-scheduled', 'get LLM engineer interview scheduled', 'Get LLM Engineer Interviews Scheduled', 'LLM engineer',
  L('LLM Engineer profile positioning', '/llm-engineer-profile-positioning/'), L('LLM interview proxy support', '/llm-interview-proxy-support/'),
  [
    'A GenAI developer not positioned specifically for LLM Engineer roles',
    'A profile missing fine-tuning, RAG, and evaluation keywords',
    'LLM production impact hidden instead of quantified',
    'A resume that does not surface for LLM Engineer searches',
    'A LinkedIn headline that undersells real LLM system work',
    'A candidate getting no LLM Engineer calls despite shipped LLM apps',
  ],
);
export const getAiArchitectInterviewScheduled = S(
  'get-ai-architect-interview-scheduled', 'get AI architect interview scheduled', 'Get AI Architect Interviews Scheduled', 'AI architect',
  L('AI Architect profile positioning', '/ai-architect-profile-positioning/'), L('AI architect interview proxy support', '/ai-architect-interview-proxy-support/'),
  [
    'A senior engineer moving into AI architecture but not positioned as an architect',
    'A profile missing platform, governance, and system-design signals',
    'Architecture impact described as tasks instead of outcomes',
    'A resume that does not surface for AI Architect searches',
    'A LinkedIn headline that hides real architecture leadership',
    'A candidate getting no architect calls despite leading AI platforms',
  ],
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlScheduledPages: LandingPageConfig[] = [
  getAiMlInterviewScheduled, getAiMlInterviewScheduledUsa, getAiMlInterviewScheduledCanada,
  getAiMlInterviewScheduledUk, getAiMlInterviewScheduledAustralia, getAiMlInterviewScheduledIreland,
  getAiMlInterviewScheduledGermany, getAiMlInterviewScheduledSingapore, getAiMlInterviewScheduledUae,
  getGenaiInterviewScheduled, getMlopsInterviewScheduled, getDataScienceInterviewScheduled,
  getLlmEngineerInterviewScheduled, getAiArchitectInterviewScheduled,
];
