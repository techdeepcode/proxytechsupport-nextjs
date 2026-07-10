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

// ─── Reusable city-page builder (shared by USA + international city batches) ──

export interface CityInput {
  slug: string;
  city: string;
  region: string;
  /** short industry phrase, e.g. 'finance, media, and startups' */
  industry: string;
  title: string;
  description: string;
  keywords: string[];
  heroEyebrow: string;
  painIntro: string;
  heroVariant: string;
  timezoneNote: string;
  marketFaqAnswer: string;
  countryHub: LandingRelatedLink;
  interviewLink: LandingRelatedLink;
  marketingLink: LandingRelatedLink;
  extraLinks?: LandingRelatedLink[];
}

const defaultTech = (): LandingRelatedLink[] => [
  { label: 'Python AI/ML job support', href: '/python-ai-ml-job-support/' },
  { label: 'LLM job support', href: '/llm-job-support/' },
  { label: 'RAG job support', href: '/rag-job-support/' },
  { label: 'Generative AI job support', href: '/generative-ai-job-support/' },
  { label: 'MLOps job support', href: '/mlops-job-support/' },
  { label: 'Vector database job support', href: '/vector-database-job-support/' },
];

const defaultRoles = (): LandingRelatedLink[] => [
  { label: 'AI Engineer job support', href: '/ai-engineer-job-support/' },
  { label: 'ML Engineer job support', href: '/machine-learning-engineer-job-support/' },
  { label: 'GenAI Engineer job support', href: '/genai-engineer-job-support/' },
  { label: 'MLOps Engineer job support', href: '/mlops-engineer-job-support/' },
  { label: 'Data Scientist job support', href: '/data-scientist-job-support/' },
];

export function buildCityPage(i: CityInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: i.title,
    description: i.description,
    keywords: i.keywords,
    h1: `AI/ML Job Support in ${i.city} — Real-Time Help for AI, GenAI, LLM & MLOps`,
    tagline: `Real-time AI/ML job support, production help, interview assistance, and candidate marketing for AI, ML, GenAI, LLM, RAG, and MLOps professionals in ${i.city}.`,
    heroEyebrow: i.heroEyebrow,
    painIntro: i.painIntro,
    heroVariant: i.heroVariant,
    geoLine: `Supporting AI/ML professionals across ${i.city} and ${i.region} — ${i.industry}.`,
    timezoneNote: i.timezoneNote,
    techSnippet:
      'Coverage across GenAI, LLMs, RAG, agentic AI, classical ML, deep learning, NLP, computer vision, data science, MLOps, and cloud AI on AWS, Azure, and GCP.',
    highlights: jobSupportHighlights,
    faqs: [
      ...jobFaqs(`professionals in ${i.city}`, 'their live AI/ML projects during local business hours'),
      {
        question: `Do you understand the ${i.city} AI/ML job market?`,
        answer: i.marketFaqAnswer,
      },
    ],
    useCasesSection: {
      title: `AI/ML Situations We Resolve for ${i.city} Professionals`,
      cases: [
        `A GenAI feature for a ${i.city} employer (${i.industry}) slipping before a launch`,
        `A RAG assistant returning wrong answers on a ${i.city} company knowledge base`,
        `An inference endpoint failing SLAs or overspending for a ${i.city} team`,
        `A ${i.city} AI/ML interview — coding, ML system design, or GenAI depth — coming up soon`,
        `Onboarding onto a ${i.city} employer’s ML platform with an unfamiliar stack`,
        `A strong engineer in ${i.city} getting no recruiter calls despite real AI/ML experience`,
      ],
    },
    proxySection: {
      title: `AI/ML Interview & Candidate Marketing in ${i.city}`,
      intro: `Getting and keeping AI/ML roles in ${i.city} takes interview readiness and a profile recruiters find. We provide live proxy interview support and candidate marketing for ${i.city} AI/ML professionals.`,
      points: [
        `Live, discreet guidance during ${i.city} AI Engineer, ML Engineer, GenAI, and MLOps interviews`,
        'Calibrated mock interviews for coding, ML system design, and GenAI/RAG architecture rounds',
        `Profile positioning for the ${i.city} market — the keywords and titles local recruiters search`,
        'Active candidate marketing and recruiter outreach to build a real interview pipeline',
        'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
      ],
    },
    bottomCTAHeading: `Need AI/ML Job Support in ${i.city}? Talk to ProxyTechSupport Now`,
    bottomCTABody: `In-house AI, GenAI, LLM, RAG, and MLOps experts available same-day for ${i.city} professionals — project support, production fixes, live interview guidance, or profile positioning. Contact us on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [i.countryHub, HUB_LINK],
      techLinks: defaultTech().slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: i.interviewLink,
      additionalLinks: [
        ...defaultTech().slice(2),
        ...defaultRoles(),
        i.interviewLink,
        i.marketingLink,
        ...(i.extraLinks ?? []),
        HUB_LINK,
        PRODUCTION_LINK,
        EXISTING.aimlGuide,
      ],
    }),
  });
}

// ─── Phase 3: USA city pages ─────────────────────────────────────────────────

const US_TZ_ET = 'Available across US Eastern business hours (and other US time zones on request).';
const US_TZ_CT = 'Available across US Central business hours (and other US time zones on request).';
const US_TZ_PT = 'Available across US Pacific business hours (and other US time zones on request).';
const US_TZ_MT = 'Available across US Mountain business hours (and other US time zones on request).';

const usaHub: LandingRelatedLink = { label: 'AI/ML job support USA', href: '/usa-ai-ml-job-support/' };
const usaInterview: LandingRelatedLink = { label: 'AI/ML interview proxy USA', href: '/ai-ml-interview-proxy-support-usa/' };
const usaMarketing: LandingRelatedLink = { label: 'AI/ML candidate marketing USA', href: '/ai-ml-candidate-marketing-usa/' };

function usCity(
  slug: string, city: string, region: string, industry: string, tz: string,
  painIntro: string, heroVariant: string, marketFaqAnswer: string,
  extraLinks?: LandingRelatedLink[],
): LandingPageConfig {
  const short = city.length > 14 ? city : city;
  return buildCityPage({
    slug, city, region, industry, timezoneNote: tz,
    title: `AI/ML Job Support ${short} — GenAI, LLM & MLOps Help`,
    description: `Real-time AI/ML job support in ${city} — GenAI, LLM, RAG, MLOps & data science. Production help, interview support, and candidate marketing for ${city} AI professionals.`,
    keywords: [
      `AI ML job support ${city}`, `GenAI job support ${city}`, `MLOps job support ${city}`,
      `machine learning job support ${city}`, `AI engineer support ${city}`, `LLM job support ${city}`,
    ],
    heroEyebrow: `AI/ML Job Support ${city} — 2026`,
    painIntro, heroVariant, marketFaqAnswer,
    countryHub: usaHub, interviewLink: usaInterview, marketingLink: usaMarketing,
    extraLinks: [usaHub, usaMarketing, EXISTING.candidateMarketing, ...(extraLinks ?? [])],
  });
}

export const newYorkAiMlJobSupport = usCity(
  'new-york-ai-ml-job-support', 'New York', 'the tri-state area',
  'finance, media, adtech, and startups', US_TZ_ET,
  'On an AI/ML project for a New York bank, media company, or startup and stuck on a model, a GenAI feature, a production incident, or a demanding NYC interview?',
  'New York’s AI/ML demand is driven by Wall Street, adtech, media, and a dense startup scene — where production reliability and speed both matter. Our experts cover US Eastern hours and support live work, production incidents, interviews, and NYC-market profile positioning.',
  'Yes. New York AI/ML roles span banks and hedge funds, adtech, media, and startups, with a high hiring bar. We calibrate job support and interview prep to NYC expectations and position profiles for local recruiter searches.',
);

export const sanFranciscoAiMlJobSupport = usCity(
  'san-francisco-ai-ml-job-support', 'San Francisco', 'the Bay Area',
  'AI-native startups, big tech, and venture-backed scale-ups', US_TZ_PT,
  'On an AI/ML project for a San Francisco AI startup or big-tech team and stuck on a model, a GenAI feature, a production incident, or a Bay Area interview loop?',
  'San Francisco is the epicenter of the GenAI boom — AI-native startups and big tech expect frontier LLM, RAG, and agentic work at a high bar. Our experts cover US Pacific hours and support live work, production incidents, interviews, and Bay-Area profile positioning.',
  'Yes. The Bay Area sets the pace for GenAI — the interview bar and expectations are the highest anywhere. We calibrate support to frontier LLM/RAG/agentic work and position profiles for SF recruiter searches.',
);

export const sanJoseAiMlJobSupport = usCity(
  'san-jose-ai-ml-job-support', 'San Jose', 'Silicon Valley',
  'semiconductors, hardware AI, and enterprise tech', US_TZ_PT,
  'On an AI/ML project for a San Jose or Silicon Valley tech company and stuck on a model, a GenAI feature, a production incident, or a Valley interview?',
  'San Jose and Silicon Valley combine semiconductor, hardware-AI, and enterprise software demand — from model optimization to edge inference. Our experts cover US Pacific hours and support live work, production incidents, interviews, and Valley profile positioning.',
  'Yes. Silicon Valley AI/ML roles range from ML systems and model optimization to enterprise GenAI. We calibrate support to these environments and position profiles for San Jose / Valley recruiter searches.',
);

export const seattleAiMlJobSupport = usCity(
  'seattle-ai-ml-job-support', 'Seattle', 'the Pacific Northwest',
  'cloud, big tech, e-commerce, and enterprise AI', US_TZ_PT,
  'On an AI/ML project for a Seattle cloud or e-commerce team and stuck on a model, a GenAI feature, a production incident, or a Seattle big-tech interview?',
  'Seattle is a cloud and big-tech hub — AWS and Azure ecosystems, e-commerce, and enterprise AI at scale. Our experts cover US Pacific hours and support live work, production incidents, interviews, and Seattle-market profile positioning.',
  'Yes. Seattle AI/ML roles are heavy on cloud-scale ML, GenAI on AWS/Azure, and e-commerce. We calibrate support to these environments and position profiles for Seattle recruiter searches.',
);

export const bostonAiMlJobSupport = usCity(
  'boston-ai-ml-job-support', 'Boston', 'the Greater Boston area',
  'biotech, healthcare AI, robotics, and academia', US_TZ_ET,
  'On an AI/ML project for a Boston biotech, healthcare, or robotics company and stuck on a model, a GenAI feature, a production incident, or a Boston interview?',
  'Boston’s AI/ML demand is strong in biotech, healthcare, robotics, and research-driven startups spun out of MIT and Harvard. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Boston-market profile positioning.',
  'Yes. Boston AI/ML roles skew toward biotech, healthcare, and robotics with a research-oriented bar. We calibrate support to these domains and position profiles for Boston recruiter searches.',
);

export const dallasAiMlJobSupport = usCity(
  'dallas-ai-ml-job-support', 'Dallas', 'the DFW metroplex',
  'finance, telecom, enterprise IT, and healthcare', US_TZ_CT,
  'On an AI/ML project for a Dallas finance, telecom, or enterprise team and stuck on a model, a GenAI feature, a production incident, or a DFW interview?',
  'Dallas–Fort Worth has a large enterprise IT, finance, telecom, and healthcare base adopting GenAI and MLOps. Our experts cover US Central hours and support live work, production incidents, interviews, and DFW-market profile positioning.',
  'Yes. Dallas AI/ML roles are enterprise-heavy — finance, telecom, and healthcare adopting GenAI. We calibrate support to these environments and position profiles for DFW recruiter searches. See our existing Texas AI/ML DevOps SRE page.',
  [{ label: 'AI/ML DevOps SRE job support Texas', href: '/ai-ml-devops-sre-job-support-texas/' }],
);

export const austinAiMlJobSupport = usCity(
  'austin-ai-ml-job-support', 'Austin', 'Central Texas',
  'startups, big-tech satellites, and semiconductors', US_TZ_CT,
  'On an AI/ML project for an Austin startup or tech company and stuck on a model, a GenAI feature, a production incident, or an Austin interview?',
  'Austin has become a major tech hub — startups, big-tech satellite offices, and semiconductors, with fast-growing GenAI adoption. Our experts cover US Central hours and support live work, production incidents, interviews, and Austin-market profile positioning.',
  'Yes. Austin AI/ML roles span startups, big-tech satellites, and hardware. We calibrate support to these environments and position profiles for Austin recruiter searches.',
  [{ label: 'AI/ML DevOps SRE job support Texas', href: '/ai-ml-devops-sre-job-support-texas/' }],
);

export const chicagoAiMlJobSupport = usCity(
  'chicago-ai-ml-job-support', 'Chicago', 'the Midwest',
  'trading, finance, logistics, and enterprise', US_TZ_CT,
  'On an AI/ML project for a Chicago trading firm, logistics company, or enterprise and stuck on a model, a GenAI feature, a production incident, or a Chicago interview?',
  'Chicago’s AI/ML demand centers on trading and finance, logistics, and large enterprises adopting GenAI and MLOps. Our experts cover US Central hours and support live work, production incidents, interviews, and Chicago-market profile positioning.',
  'Yes. Chicago AI/ML roles include quant/trading, logistics, and enterprise GenAI. We calibrate support to these environments and position profiles for Chicago recruiter searches.',
);

export const atlantaAiMlJobSupport = usCity(
  'atlanta-ai-ml-job-support', 'Atlanta', 'the Southeast',
  'fintech, payments, logistics, and media', US_TZ_ET,
  'On an AI/ML project for an Atlanta fintech, payments, or logistics company and stuck on a model, a GenAI feature, a production incident, or an Atlanta interview?',
  'Atlanta is a fintech and payments hub with strong logistics and media presence, increasingly adopting GenAI. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Atlanta-market profile positioning.',
  'Yes. Atlanta AI/ML roles are strong in fintech, payments, and logistics. We calibrate support to these environments and position profiles for Atlanta recruiter searches.',
);

export const houstonAiMlJobSupport = usCity(
  'houston-ai-ml-job-support', 'Houston', 'the Gulf Coast',
  'energy, healthcare, and industrial AI', US_TZ_CT,
  'On an AI/ML project for a Houston energy, healthcare, or industrial company and stuck on a model, a GenAI feature, a production incident, or a Houston interview?',
  'Houston’s AI/ML demand is anchored in energy, healthcare, and industrial applications — forecasting, optimization, and increasingly GenAI. Our experts cover US Central hours and support live work, production incidents, interviews, and Houston-market profile positioning.',
  'Yes. Houston AI/ML roles skew toward energy, healthcare, and industrial optimization. We calibrate support to these domains and position profiles for Houston recruiter searches.',
  [{ label: 'AI/ML DevOps SRE job support Texas', href: '/ai-ml-devops-sre-job-support-texas/' }],
);

export const losAngelesAiMlJobSupport = usCity(
  'los-angeles-ai-ml-job-support', 'Los Angeles', 'Southern California',
  'media, entertainment, gaming, and aerospace', US_TZ_PT,
  'On an AI/ML project for an LA media, entertainment, gaming, or aerospace company and stuck on a model, a GenAI feature, a production incident, or an LA interview?',
  'Los Angeles combines media and entertainment, gaming, and aerospace AI demand — generative media, recommendation, and computer vision. Our experts cover US Pacific hours and support live work, production incidents, interviews, and LA-market profile positioning.',
  'Yes. LA AI/ML roles span media/entertainment GenAI, gaming, and aerospace. We calibrate support to these domains and position profiles for LA recruiter searches.',
);

export const washingtonDcAiMlJobSupport = usCity(
  'washington-dc-ai-ml-job-support', 'Washington DC', 'the DMV area',
  'government, defense, and public-sector AI', US_TZ_ET,
  'On an AI/ML project for a Washington DC government, defense, or contractor team and stuck on a model, a GenAI feature, a production incident, or a DC-area interview?',
  'The DC area’s AI/ML demand is driven by government, defense, and contractors — with emphasis on security, compliance, and responsible AI. Our experts cover US Eastern hours and support live work, production incidents, interviews, and DMV-market profile positioning.',
  'Yes. DC-area AI/ML roles emphasize government, defense, and compliance-heavy environments. We calibrate support to these domains and position profiles for DMV recruiter searches.',
);

export const jerseyCityAiMlJobSupport = usCity(
  'jersey-city-ai-ml-job-support', 'Jersey City', 'the New York metro',
  'banking, financial services, and back-office tech', US_TZ_ET,
  'On an AI/ML project for a Jersey City bank or financial-services firm and stuck on a model, a GenAI feature, a production incident, or a metro-area interview?',
  'Jersey City hosts major banking and financial-services technology centers across the river from Manhattan. Demand is strong for risk, fraud, and GenAI back-office automation. Our experts cover US Eastern hours and support live work, production incidents, interviews, and metro-market profile positioning.',
  'Yes. Jersey City AI/ML roles are concentrated in banking and financial-services tech. We calibrate support to these environments and position profiles for NY-metro recruiter searches.',
);

export const charlotteAiMlJobSupport = usCity(
  'charlotte-ai-ml-job-support', 'Charlotte', 'the Carolinas',
  'banking, fintech, and enterprise IT', US_TZ_ET,
  'On an AI/ML project for a Charlotte bank or fintech and stuck on a model, a GenAI feature, a production incident, or a Charlotte interview?',
  'Charlotte is a major US banking center with growing fintech and enterprise IT demand for GenAI and MLOps. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Charlotte-market profile positioning.',
  'Yes. Charlotte AI/ML roles are banking- and fintech-heavy. We calibrate support to these environments and position profiles for Charlotte recruiter searches.',
);

export const phoenixAiMlJobSupport = usCity(
  'phoenix-ai-ml-job-support', 'Phoenix', 'the Valley of the Sun',
  'semiconductors, fintech, and enterprise', US_TZ_MT,
  'On an AI/ML project for a Phoenix semiconductor, fintech, or enterprise team and stuck on a model, a GenAI feature, a production incident, or a Phoenix interview?',
  'Phoenix is growing fast in semiconductors, fintech, and enterprise operations, with expanding GenAI adoption. Our experts cover US Mountain hours and support live work, production incidents, interviews, and Phoenix-market profile positioning.',
  'Yes. Phoenix AI/ML roles span semiconductors, fintech, and enterprise. We calibrate support to these environments and position profiles for Phoenix recruiter searches.',
);

export const tampaAiMlJobSupport = usCity(
  'tampa-ai-ml-job-support', 'Tampa', 'the Tampa Bay area',
  'finance, healthcare, and enterprise services', US_TZ_ET,
  'On an AI/ML project for a Tampa finance, healthcare, or services company and stuck on a model, a GenAI feature, a production incident, or a Tampa interview?',
  'Tampa Bay has a growing finance, healthcare, and enterprise-services base adopting GenAI and MLOps. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Tampa-market profile positioning.',
  'Yes. Tampa AI/ML roles span finance, healthcare, and enterprise services. We calibrate support to these environments and position profiles for Tampa recruiter searches.',
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlUsaCityPages: LandingPageConfig[] = [
  newYorkAiMlJobSupport,
  sanFranciscoAiMlJobSupport,
  sanJoseAiMlJobSupport,
  seattleAiMlJobSupport,
  bostonAiMlJobSupport,
  dallasAiMlJobSupport,
  austinAiMlJobSupport,
  chicagoAiMlJobSupport,
  atlantaAiMlJobSupport,
  houstonAiMlJobSupport,
  losAngelesAiMlJobSupport,
  washingtonDcAiMlJobSupport,
  jerseyCityAiMlJobSupport,
  charlotteAiMlJobSupport,
  phoenixAiMlJobSupport,
  tampaAiMlJobSupport,
];
