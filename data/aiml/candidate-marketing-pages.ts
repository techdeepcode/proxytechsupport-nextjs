import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  marketingHighlights,
  marketingFaqs,
  EXISTING,
  HUB_LINK,
  PROFILE_LINK,
  GET_SCHEDULED_LINK,
} from './shared';

// ─── Phase 12: AI/ML candidate marketing & profile positioning pages ────────

interface MarketingInput {
  slug: string;
  subject: string;
  titleShort: string;
  who: string;
  situations: [string, string, string, string, string, string];
  getScheduledLink: LandingRelatedLink;
  roleLinks: LandingRelatedLink[];
  extraLinks?: LandingRelatedLink[];
}

function buildMarketingPage(i: MarketingInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: `${i.titleShort} — Get Found & Get Interviews`,
    description: `${i.titleShort}: profile engineering, keyword targeting, and recruiter outreach so ${i.who} get found and get AI/ML interview calls. GenAI, LLM & MLOps roles.`.slice(0, 154),
    keywords: [
      `${i.subject}`, `${i.subject} service`, 'AI ML candidate marketing',
      'AI ML profile positioning', 'AI ML recruiter outreach', 'get AI ML interview calls',
    ],
    h1: `${i.titleShort} — Positioning & Marketing That Gets AI/ML Interviews`,
    tagline: `We position and actively market ${i.who} so AI/ML recruiters find you and the interview calls start coming.`,
    heroEyebrow: 'AI/ML Candidate Marketing — 2026',
    painIntro: `A strong background is not enough if recruiters never see it. If ${i.who} are applying and hearing nothing, the profile is not surfacing in searches or passing ATS filters for the AI/ML roles you want.`,
    heroVariant:
      'AI/ML recruiters search very specifically — frameworks, model names, deployment signals, and domain keywords. We rebuild your resume and LinkedIn around what actually gets you found, quantify your production impact, and then market you actively to hiring managers and staffing firms.',
    geoLine: `Positioning and candidate marketing for ${i.who} targeting AI/ML roles worldwide.`,
    timezoneNote: 'Profile support and outreach aligned to your target market and time zone.',
    highlights: marketingHighlights,
    faqs: marketingFaqs(i.who),
    useCasesSection: {
      title: 'Positioning Situations We Fix',
      cases: [...i.situations],
    },
    proxySection: {
      title: 'From Positioning to Offer',
      intro:
        'Positioning gets the calls; interview support converts them. We connect candidate marketing, profile positioning, and proxy interview support into one pipeline.',
      points: [
        'AI/ML keyword engineering for resume, LinkedIn, and job-board profiles',
        'Measurable-impact rewriting so your AI/ML work stands out',
        'Active candidate marketing and recruiter/hiring-manager outreach',
        'Get-interview-scheduled support for a managed pipeline of calls',
        'Proxy interview support and ongoing job support to convert and keep offers',
      ],
    },
    bottomCTAHeading: `Get Your AI/ML Profile Positioned and Marketed Now`,
    bottomCTABody:
      'Stop getting filtered out. We engineer your AI/ML profile for recruiter visibility and market you actively. Contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, PROFILE_LINK],
      techLinks: i.roleLinks.slice(0, 2),
      problemLink: { label: 'Why your AI/ML resume gets no calls', href: '/why-ai-ml-resume-gets-no-calls/' },
      proxyLink: EXISTING.candidateMarketing,
      additionalLinks: [
        EXISTING.candidateMarketing,
        PROFILE_LINK,
        i.getScheduledLink,
        GET_SCHEDULED_LINK,
        ...i.roleLinks.slice(2),
        ...(i.extraLinks ?? []),
        HUB_LINK,
      ],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });
const roleAiEng = L('AI Engineer job support', '/ai-engineer-job-support/');
const roleMlEng = L('ML Engineer job support', '/machine-learning-engineer-job-support/');
const roleGenai = L('GenAI Engineer job support', '/genai-engineer-job-support/');
const roleMlops = L('MLOps Engineer job support', '/mlops-engineer-job-support/');
const roleDs = L('Data Scientist job support', '/data-scientist-job-support/');
const roleLlm = L('LLM Engineer job support', '/llm-engineer-job-support/');
const roleArch = L('AI Solutions Architect job support', '/ai-solutions-architect-job-support/');

const countrySituations = (m: string): [string, string, string, string, string, string] => [
  `A capable AI/ML engineer in ${m} applying widely with no recruiter responses`,
  `A profile that reads like a generic data or software engineer, not an AI/ML specialist`,
  `Impact buried under vague bullets instead of measurable model and production outcomes`,
  `Missing GenAI, LLM, RAG, and MLOps keywords recruiters and ATS filters screen for`,
  `A LinkedIn headline recruiters scroll past for the ${m} AI/ML market`,
  `A candidate not positioned for the specific ${m} roles they are targeting`,
];

const M = (
  slug: string, subject: string, titleShort: string, who: string,
  getScheduledLink: LandingRelatedLink, roleLinks: LandingRelatedLink[],
  situations?: [string, string, string, string, string, string], extraLinks?: LandingRelatedLink[],
): LandingPageConfig =>
  buildMarketingPage({ slug, subject, titleShort, who, getScheduledLink, roleLinks, extraLinks, situations: situations ?? countrySituations(who) });

const schedGeneric = L('Get AI/ML interview scheduled', '/get-ai-ml-interview-scheduled/');

export const aiMlCandidateMarketing = M(
  'ai-ml-candidate-marketing', 'AI/ML candidate marketing', 'AI/ML Candidate Marketing', 'AI/ML professionals',
  schedGeneric, [roleAiEng, roleMlEng, roleGenai, roleMlops, roleDs],
  undefined, [EXISTING.candidateMarketing],
);
export const aiMlCandidateMarketingUsa = M(
  'ai-ml-candidate-marketing-usa', 'AI/ML candidate marketing USA', 'AI/ML Candidate Marketing USA', 'US AI/ML professionals',
  L('Get AI/ML interview scheduled USA', '/get-ai-ml-interview-scheduled-usa/'), [roleAiEng, roleMlEng, roleGenai],
  undefined, [L('Candidate marketing USA', '/job-application-candidate-marketing-usa/'), L('AI/ML job support USA', '/usa-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingCanada = M(
  'ai-ml-candidate-marketing-canada', 'AI/ML candidate marketing Canada', 'AI/ML Candidate Marketing Canada', 'Canadian AI/ML professionals',
  L('Get AI/ML interview scheduled Canada', '/get-ai-ml-interview-scheduled-canada/'), [roleAiEng, roleMlEng, roleDs],
  undefined, [L('Candidate marketing Canada', '/job-application-candidate-marketing-canada/'), L('AI/ML job support Canada', '/canada-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingUk = M(
  'ai-ml-candidate-marketing-uk', 'AI/ML candidate marketing UK', 'AI/ML Candidate Marketing UK', 'UK AI/ML professionals',
  L('Get AI/ML interview scheduled UK', '/get-ai-ml-interview-scheduled-uk/'), [roleAiEng, roleMlEng, roleGenai],
  undefined, [L('Candidate marketing UK', '/job-application-candidate-marketing-uk/'), L('AI/ML job support UK', '/uk-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingAustralia = M(
  'ai-ml-candidate-marketing-australia', 'AI/ML candidate marketing Australia', 'AI/ML Candidate Marketing Australia', 'Australian AI/ML professionals',
  L('Get AI/ML interview scheduled Australia', '/get-ai-ml-interview-scheduled-australia/'), [roleAiEng, roleMlEng, roleDs],
  undefined, [L('Candidate marketing Australia', '/job-application-candidate-marketing-australia/'), L('AI/ML job support Australia', '/australia-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingGermany = M(
  'ai-ml-candidate-marketing-germany', 'AI/ML candidate marketing Germany', 'AI/ML Candidate Marketing Germany', 'German AI/ML professionals',
  L('Get AI/ML interview scheduled Germany', '/get-ai-ml-interview-scheduled-germany/'), [roleAiEng, roleMlEng, roleMlops],
  undefined, [L('Candidate marketing Germany', '/job-application-candidate-marketing-germany/'), L('AI/ML job support Germany', '/germany-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingIreland = M(
  'ai-ml-candidate-marketing-ireland', 'AI/ML candidate marketing Ireland', 'AI/ML Candidate Marketing Ireland', 'Irish AI/ML professionals',
  L('Get AI/ML interview scheduled Ireland', '/get-ai-ml-interview-scheduled-ireland/'), [roleAiEng, roleMlEng, roleGenai],
  undefined, [L('Candidate marketing Ireland', '/job-application-candidate-marketing-ireland/'), L('AI/ML job support Ireland', '/ireland-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingSingapore = M(
  'ai-ml-candidate-marketing-singapore', 'AI/ML candidate marketing Singapore', 'AI/ML Candidate Marketing Singapore', 'Singapore AI/ML professionals',
  L('Get AI/ML interview scheduled Singapore', '/get-ai-ml-interview-scheduled-singapore/'), [roleAiEng, roleMlEng, roleMlops],
  undefined, [L('Candidate marketing Singapore', '/job-application-candidate-marketing-singapore/'), L('AI/ML job support Singapore', '/singapore-ai-ml-job-support/')],
);
export const aiMlCandidateMarketingUae = M(
  'ai-ml-candidate-marketing-uae', 'AI/ML candidate marketing UAE', 'AI/ML Candidate Marketing UAE', 'UAE AI/ML professionals',
  L('Get AI/ML interview scheduled UAE', '/get-ai-ml-interview-scheduled-uae/'), [roleAiEng, roleMlEng, roleDs],
  undefined, [L('Candidate marketing UAE', '/job-application-candidate-marketing-uae/'), L('AI/ML job support UAE', '/uae-ai-ml-job-support/')],
);
export const genaiCandidateMarketing = M(
  'genai-candidate-marketing', 'GenAI candidate marketing', 'GenAI Candidate Marketing', 'GenAI professionals',
  L('Get GenAI interview scheduled', '/get-genai-interview-scheduled/'), [roleGenai, roleAiEng, roleLlm],
  [
    'A GenAI builder whose resume reads like a generic software engineer',
    'Shipped LLM/RAG features not translated into recruiter-facing impact',
    'Missing GenAI, LLM, RAG, and agent keywords recruiters filter on',
    'A profile that does not surface for GenAI Engineer searches',
    'A LinkedIn headline that hides real GenAI production work',
    'No GenAI calls despite a strong GenAI portfolio',
  ],
  [L('AI Engineer profile positioning', '/ai-engineer-profile-positioning/')],
);
export const mlopsCandidateMarketing = M(
  'mlops-candidate-marketing', 'MLOps candidate marketing', 'MLOps Candidate Marketing', 'MLOps professionals',
  L('Get MLOps interview scheduled', '/get-mlops-interview-scheduled/'), [roleMlops, roleMlEng],
  [
    'A DevOps/platform engineer moving into MLOps but not positioned for it',
    'A profile missing CI/CD, monitoring, registry, and reliability keywords',
    'Impact framed as tasks instead of delivery and reliability outcomes',
    'A resume that does not surface for MLOps recruiter searches',
    'A LinkedIn profile that undersells ML platform ownership',
    'No MLOps calls despite strong platform experience',
  ],
);
export const dataScienceCandidateMarketing = M(
  'data-science-candidate-marketing', 'Data science candidate marketing', 'Data Science Candidate Marketing', 'data science professionals',
  L('Get data science interview scheduled', '/get-data-science-interview-scheduled/'), [roleDs, roleMlEng],
  [
    'An analyst moving into data science but not positioned for DS roles',
    'A profile missing modeling, experimentation, and impact keywords',
    'Projects described as tasks instead of measurable outcomes',
    'A resume that does not pass ATS filters for data science roles',
    'A LinkedIn headline recruiters scroll past for DS positions',
    'No DS calls despite solid modeling and analysis work',
  ],
);
export const aiEngineerProfilePositioning = M(
  'ai-engineer-profile-positioning', 'AI Engineer profile positioning', 'AI Engineer Profile Positioning', 'AI Engineers',
  L('Get AI/ML interview scheduled', '/get-ai-ml-interview-scheduled/'), [roleAiEng, roleGenai, roleLlm],
  [
    'A developer who builds AI apps but is not positioned as an AI Engineer',
    'A profile missing LLM, RAG, and evaluation signals',
    'AI production impact hidden instead of quantified',
    'A resume that does not surface for AI Engineer searches',
    'A LinkedIn headline that undersells real AI application work',
    'No AI Engineer calls despite shipped AI features',
  ],
);
export const mlEngineerProfilePositioning = M(
  'ml-engineer-profile-positioning', 'ML Engineer profile positioning', 'ML Engineer Profile Positioning', 'ML Engineers',
  L('Get AI/ML interview scheduled', '/get-ai-ml-interview-scheduled/'), [roleMlEng, roleMlops, roleDs],
  [
    'A data scientist or developer not positioned as an ML Engineer',
    'A profile missing training, deployment, and MLOps keywords',
    'Model impact described vaguely instead of with metrics',
    'A resume that does not surface for ML Engineer searches',
    'A LinkedIn headline that undersells production ML work',
    'No ML Engineer calls despite strong modeling and deployment work',
  ],
);
export const llmEngineerProfilePositioning = M(
  'llm-engineer-profile-positioning', 'LLM Engineer profile positioning', 'LLM Engineer Profile Positioning', 'LLM Engineers',
  L('Get LLM engineer interview scheduled', '/get-llm-engineer-interview-scheduled/'), [roleLlm, roleGenai, roleAiEng],
  [
    'A GenAI developer not positioned specifically for LLM Engineer roles',
    'A profile missing fine-tuning, RAG, and evaluation keywords',
    'LLM production impact hidden instead of quantified',
    'A resume that does not surface for LLM Engineer searches',
    'A LinkedIn headline that undersells real LLM system work',
    'No LLM Engineer calls despite shipped LLM applications',
  ],
);
export const aiArchitectProfilePositioning = M(
  'ai-architect-profile-positioning', 'AI Architect profile positioning', 'AI Architect Profile Positioning', 'AI Architects',
  L('Get AI architect interview scheduled', '/get-ai-architect-interview-scheduled/'), [roleArch, roleMlops],
  [
    'A senior engineer not positioned as an AI Solutions Architect',
    'A profile missing platform, governance, and system-design signals',
    'Architecture leadership described as tasks instead of outcomes',
    'A resume that does not surface for AI Architect searches',
    'A LinkedIn headline that hides real architecture leadership',
    'No architect calls despite leading AI platforms and designs',
  ],
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlCandidateMarketingPages: LandingPageConfig[] = [
  aiMlCandidateMarketing, aiMlCandidateMarketingUsa, aiMlCandidateMarketingCanada, aiMlCandidateMarketingUk,
  aiMlCandidateMarketingAustralia, aiMlCandidateMarketingGermany, aiMlCandidateMarketingIreland,
  aiMlCandidateMarketingSingapore, aiMlCandidateMarketingUae, genaiCandidateMarketing, mlopsCandidateMarketing,
  dataScienceCandidateMarketing, aiEngineerProfilePositioning, mlEngineerProfilePositioning,
  llmEngineerProfilePositioning, aiArchitectProfilePositioning,
];
