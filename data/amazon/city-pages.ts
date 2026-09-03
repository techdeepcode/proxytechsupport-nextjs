import type { LandingPageConfig } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  roleInfoHighlights,
  proxyInterviewHighlights,
  proxyJobHighlights,
  scheduledHighlights,
  amazonInfoFaqs,
  amazonProxyInterviewFaqs,
  amazonProxyJobFaqs,
  amazonMarketingFaqs,
  EXISTING,
  AMAZON_HUB_LINK,
  AMAZON_HIRING_PROCESS_LINK,
  AMAZON_INTERVIEW_PROCESS_LINK,
  AMAZON_LP_HUB_LINK,
  AMAZON_PROXY_INTERVIEW_LINK,
  AMAZON_PROXY_JOB_LINK,
  AMAZON_GET_SCHEDULED_LINK,
  AMAZON_CANDIDATE_MARKETING_LINK,
} from './shared';

/**
 * Amazon CITY cluster. Each city has an informational hiring page; major hubs also
 * get commercial proxy interview / proxy job / get-scheduled variants where local
 * intent is real. Every city page has genuine local Amazon context (real campuses,
 * teams and market) and links back to its country hub — never clone-and-swap.
 * "bengaluru" is used for informational hiring; "bangalore" for commercial proxy
 * pages to match real search demand (proxy interview support bangalore).
 */

interface City {
  key: string; // hiring slug fragment
  proxyKey: string; // commercial slug fragment (may differ, e.g. bengaluru→bangalore)
  name: string; // display name
  country: string; // country display
  countryKey: string; // country slug fragment for links
  timezone: string;
  context: string; // real local Amazon presence
}

const CITY: Record<string, City> = {
  seattle: { key: 'seattle', proxyKey: 'seattle', name: 'Seattle', country: 'the USA', countryKey: 'usa', timezone: 'PT business hours', context: 'Seattle is Amazon’s birthplace and largest hub — the South Lake Union and downtown campuses house AWS, retail and stores, devices, Alexa, Ads and applied science, hiring heavily for SDE (all levels), Applied Scientist, Data Engineer, Solutions Architect, Security and TPM roles. It is one of the densest software job markets in the world.' },
  bellevue: { key: 'bellevue', proxyKey: 'bellevue', name: 'Bellevue', country: 'the USA', countryKey: 'usa', timezone: 'PT business hours', context: 'Bellevue, across Lake Washington from Seattle, has become a major Amazon campus — home to worldwide operations, devices, and a growing share of Amazon’s engineering workforce. Bellevue teams hire across SDE, Data, Applied Science and operations technology, drawing from the same deep Puget Sound talent pool as Seattle.' },
  arlington: { key: 'arlington', proxyKey: 'arlington', name: 'Arlington', country: 'the USA', countryKey: 'usa', timezone: 'ET business hours', context: 'Arlington (National Landing, Northern Virginia) is Amazon’s HQ2 — a large and growing hub spanning AWS, security, operations technology, and public-sector-adjacent engineering. Arlington teams hire across SDE, Security, Data, Solutions Architect and TPM roles, with strong demand tied to the DC-area technology and government-adjacent market.' },
  austin: { key: 'austin', proxyKey: 'austin', name: 'Austin', country: 'the USA', countryKey: 'usa', timezone: 'CT business hours', context: 'Austin is one of Amazon’s fastest-growing US hubs — AWS, retail, hardware and devices engineering, plus operations technology. Austin teams hire across SDE, Data Engineer, Solutions Architect and hardware roles, benefiting from Texas’s expanding tech scene and no state income tax.' },
  'new-york': { key: 'new-york', proxyKey: 'new-york', name: 'New York', country: 'the USA', countryKey: 'usa', timezone: 'ET business hours', context: 'New York hosts major Amazon engineering in Ads, Prime Video, fashion and retail, and AWS, with strong applied-science and ML presence. NYC teams hire across SDE, Applied Scientist, Data and Solutions Architect roles, competing in one of the deepest and most competitive tech and finance-adjacent markets in the world.' },
  bengaluru: { key: 'bengaluru', proxyKey: 'bangalore', name: 'Bengaluru', country: 'India', countryKey: 'india', timezone: 'IST business hours', context: 'Bengaluru (Bangalore) is Amazon’s largest engineering center in India — vast teams across AWS, Alexa, Ads, retail and payments, and applied science and ML. It hires heavily for SDE (I/II/III), Data Engineer, BIE, Applied Scientist, Security and Support Engineer roles, and explicit "proxy interview support Bangalore" demand is among the strongest anywhere.' },
  hyderabad: { key: 'hyderabad', proxyKey: 'hyderabad', name: 'Hyderabad', country: 'India', countryKey: 'india', timezone: 'IST business hours', context: 'Hyderabad hosts one of Amazon’s biggest India campuses, spanning AWS, retail, machine learning and data engineering. Hyderabad teams hire across SDE, Data Engineer, BIE, Applied Scientist and Support Engineer roles, and the city has strong, explicit "proxy interview support Hyderabad" search demand.' },
  toronto: { key: 'toronto', proxyKey: 'toronto', name: 'Toronto', country: 'Canada', countryKey: 'canada', timezone: 'ET business hours', context: 'Toronto is Amazon’s largest Canadian tech hub — AWS, applied science (near the Vector Institute), retail and devices engineering. Toronto teams hire across SDE, Applied Scientist, Data Engineer, Solutions Architect and Security roles, drawing on the Toronto–Waterloo corridor’s deep talent pipeline.' },
  vancouver: { key: 'vancouver', proxyKey: 'vancouver', name: 'Vancouver', country: 'Canada', countryKey: 'canada', timezone: 'PT business hours', context: 'Vancouver hosts a large Amazon engineering center spanning AWS, retail and devices, benefiting from proximity to Seattle and a strong local and international talent pool. Vancouver teams hire across SDE, Data, Solutions Architect and applied-science roles on both full-time and contract terms.' },
  london: { key: 'london', proxyKey: 'london', name: 'London', country: 'the UK', countryKey: 'uk', timezone: 'GMT/BST business hours', context: 'London is Amazon’s largest European engineering hub — AWS, Ads, Prime Video, retail and applied science. London teams hire across SDE, Applied Scientist, Data Engineer, Solutions Architect, Security and TPM roles, and IR35/contract-vs-permanent considerations shape the local market.' },
  dublin: { key: 'dublin', proxyKey: 'dublin', name: 'Dublin', country: 'Ireland', countryKey: 'ireland', timezone: 'GMT/IST (Irish) business hours', context: 'Dublin is a major AWS and Amazon hub for Europe — AWS services and infrastructure, retail and operations technology, and support engineering. Dublin teams hire across SDE, Solutions Architect, Cloud Support Engineer, Data and Security roles, drawing candidates from across the EU.' },
  berlin: { key: 'berlin', proxyKey: 'berlin', name: 'Berlin', country: 'Germany', countryKey: 'germany', timezone: 'CET/CEST business hours', context: 'Berlin hosts one of Amazon’s largest continental-European development centers — AWS, applied and research science, retail and logistics technology. Berlin teams hire across SDE, Applied/Research Scientist, Data Engineer and Solutions Architect roles, in a vibrant international engineering market.' },
  munich: { key: 'munich', proxyKey: 'munich', name: 'Munich', country: 'Germany', countryKey: 'germany', timezone: 'CET/CEST business hours', context: 'Munich hosts Amazon and AWS engineering and science, with strength in hardware, systems and machine learning. Munich teams hire across SDE, Applied Scientist, Systems and Solutions Architect roles, in one of Germany’s strongest technology and research markets.' },
  sydney: { key: 'sydney', proxyKey: 'sydney', name: 'Sydney', country: 'Australia', countryKey: 'australia', timezone: 'AEST/AEDT business hours', context: 'Sydney is Amazon and AWS’s primary Australian hub — AWS services and infrastructure, retail systems, and cloud solutions architecture for APAC. Sydney teams hire across SDE, Solutions Architect, Data and Security roles, with strong AWS-centric demand.' },
  melbourne: { key: 'melbourne', proxyKey: 'melbourne', name: 'Melbourne', country: 'Australia', countryKey: 'australia', timezone: 'AEST/AEDT business hours', context: 'Melbourne hosts Amazon and AWS engineering spanning AWS services, retail and solutions architecture, complementing Sydney as an Australian technology hub. Melbourne teams hire across SDE, Solutions Architect and Data roles on both permanent and contract terms.' },
};

function countryLink(c: City) { return { label: `Amazon hiring ${c.country === 'the USA' ? 'USA' : c.country === 'the UK' ? 'UK' : c.country}`, href: `/amazon-hiring-${c.countryKey}/` }; }

function hiringCity(c: City): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-hiring-${c.key}`,
    title: `Amazon Hiring ${c.name}: Teams, Roles & Interview Process`,
    description: `Amazon and AWS hiring in ${c.name} — the local campuses, teams and role families, plus how the interview process works and how to get interview calls. Current as of August 2026; openings change frequently.`,
    keywords: [
      `amazon hiring ${c.name.toLowerCase()}`, `amazon jobs ${c.name.toLowerCase()}`, `aws hiring ${c.name.toLowerCase()}`,
      `amazon sde ${c.name.toLowerCase()}`, `amazon careers ${c.name.toLowerCase()}`, `amazon interview ${c.name.toLowerCase()}`,
    ],
    h1: `Amazon Hiring in ${c.name}`,
    tagline: `Where Amazon and AWS hire in ${c.name} — local teams, role families and how to get interview calls and clear the loop.`,
    heroEyebrow: `Amazon Hiring ${c.name} — Updated August 2026`,
    painIntro: `Targeting Amazon or AWS in ${c.name}? This guide covers the local Amazon presence — campuses, teams and role families — how the interview process works, and where our support fits. Openings change frequently, so treat volumes as direction.`,
    heroVariant: `${c.context} Amazon’s interview process is role-specific and varies by team and level. Use this page to understand the ${c.name} market, then move into role-specific interview guides, Amazon proxy interview support, Get Amazon Interview Scheduled, or candidate marketing. ProxyTechSupport is independent of Amazon and does not guarantee interviews or offers.`,
    highlights: roleInfoHighlights,
    faqs: amazonInfoFaqs(`Amazon hiring in ${c.name}`, `Amazon and AWS hire in ${c.name} across SDE, Applied Science, Data, Security, Solutions Architecture and TPM roles, using role-specific interview loops that vary by team and level.`),
    useCasesSection: {
      title: `Amazon in ${c.name} — What to Know`,
      cases: [
        `Local Amazon/AWS presence and campuses in ${c.name}`,
        'Role families hiring: SDE, Applied Scientist, Data Engineer, Solutions Architect, Security, TPM',
        'The interview process is role-specific and varies by level',
        'How to position your profile for the local market',
        'How to get relevant interview calls',
        'How to prepare for and clear the loop',
      ],
    },
    timezoneNote: `Available across ${c.timezone}.`,
    relatedLinks: relatedLinks({
      geoLinks: [countryLink(c), AMAZON_HIRING_PROCESS_LINK],
      techLinks: [{ label: `Amazon proxy interview support ${c.name}`, href: `/amazon-proxy-interview-support-${c.proxyKey}/` }, AMAZON_GET_SCHEDULED_LINK],
      problemLink: AMAZON_INTERVIEW_PROCESS_LINK,
      proxyLink: { label: `Amazon proxy interview support ${c.name}`, href: `/amazon-proxy-interview-support-${c.proxyKey}/` },
      additionalLinks: [{ label: 'Amazon SDE interview', href: '/amazon-sde-interview/' }, AMAZON_HUB_LINK, AMAZON_CANDIDATE_MARKETING_LINK],
    }),
  });
}

function proxyInterviewCity(c: City): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-proxy-interview-support-${c.proxyKey}`,
    title: `Amazon Proxy Interview Support ${c.name} | SDE, AWS & AI/ML`,
    description: `Amazon proxy interview support in ${c.name} — real-time expert support for SDE, AWS, AI/ML, Data and Security loops, aligned to local hours. You attend your own interview. Independent of Amazon.`,
    keywords: [
      `amazon proxy interview support ${c.proxyKey}`, `amazon interview proxy support ${c.proxyKey}`,
      `proxy interview support ${c.proxyKey}`, `amazon interview support ${c.proxyKey}`,
      'amazon proxy interview support', 'amazon technical proxy interview support',
    ],
    ogTitle: `Amazon Proxy Interview Support ${c.name}`,
    h1: `Amazon Proxy Interview Support in ${c.name}`,
    tagline: `Technical proxy interview support for Amazon loops in ${c.name} — coding, system design, AWS, AI/ML, data, security and Leadership Principles, aligned to local hours.`,
    heroEyebrow: `Amazon Proxy Interview Support ${c.name}`,
    painIntro: `Facing an Amazon interview in ${c.name}? Amazon proxy interview support (also searched as interview proxy support ${c.name}) gives you real-time expert support for the technical and behavioral rounds — aligned to your local hours.`,
    heroVariant: `We support Amazon candidates in ${c.name} across the rounds Amazon uses — Online Assessment, technical phone screen, coding and system design, SQL/data and ML where relevant, and the behavioral Leadership Principles loop and Bar Raiser. ${c.context} Proxy interview support means real-time expert technical help on the exact rounds your interview covers — you attend and complete your own interview. Independent of Amazon; no guarantee of selection.`,
    highlights: proxyInterviewHighlights,
    faqs: amazonProxyInterviewFaqs(`Amazon (${c.name})`),
    proxySection: {
      title: `What Amazon Proxy Interview Support Covers in ${c.name}`,
      intro: `Real-time, role-specific support for your Amazon loop in ${c.name}, aligned to local hours — you attend your own interview.`,
      points: [
        'Coding, data structures, algorithms and system design (LLD and HLD)',
        'SQL, data, AWS, AI/ML and security where the role requires it',
        'Leadership Principles behavioral rounds and the Bar Raiser',
        `Calibration to your role, level, team and format — aligned to ${c.timezone}`,
        'Independent of Amazon — no impersonation, no guarantee of selection',
      ],
    },
    timezoneNote: `Available across ${c.timezone}.`,
    bottomCTAHeading: `Get Amazon Proxy Interview Support in ${c.name}`,
    bottomCTABody: `In-house experts provide real-time Amazon interview support and Leadership Principles support for candidates in ${c.name}. You attend your own interview; we back you to perform. Independent of Amazon; no guarantee of selection. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [{ label: `Amazon hiring ${c.name}`, href: `/amazon-hiring-${c.key}/` }, countryLink(c)],
      techLinks: [{ label: 'Amazon SDE proxy interview support', href: '/amazon-sde-proxy-interview-support/' }, { label: 'Amazon system design interview', href: '/amazon-system-design-interview/' }],
      problemLink: AMAZON_LP_HUB_LINK,
      proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
      additionalLinks: [{ label: `Amazon proxy interview support ${c.country === 'the USA' ? 'USA' : c.country === 'the UK' ? 'UK' : c.country}`, href: `/amazon-proxy-interview-support-${c.countryKey}/` }, AMAZON_HUB_LINK],
    }),
  });
}

function proxyJobCity(c: City): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-proxy-job-support-${c.proxyKey}`,
    title: `Amazon Proxy Job Support ${c.name} | SDE, AWS, Data & AI/ML`,
    description: `Amazon proxy job support in ${c.name} — real-time technical help on live Amazon/AWS work across software, cloud, data, AI/ML and security, aligned to local hours. Not replacing you. Independent of Amazon.`,
    keywords: [
      `amazon proxy job support ${c.proxyKey}`, `amazon job support ${c.proxyKey}`,
      `aws proxy job support ${c.proxyKey}`, `proxy job support ${c.proxyKey}`,
      'amazon proxy job support', 'aws proxy job support',
    ],
    ogTitle: `Amazon Proxy Job Support ${c.name}`,
    h1: `Amazon Proxy Job Support in ${c.name}`,
    tagline: `Real-time proxy job support for Amazon/AWS work in ${c.name} — software, cloud, data, AI/ML and security, aligned to local hours.`,
    heroEyebrow: `Amazon Proxy Job Support ${c.name}`,
    painIntro: `In an Amazon or AWS-heavy role in ${c.name} and want an expert beside you on hard tickets and incidents? Amazon proxy job support gives you real-time help during your working hours — you remain the professional delivering the work.`,
    heroVariant: `We provide proxy job support for the real work: coding and debugging, architecture and code review, AWS, data, security, ML pipelines, RAG and GenAI, production incidents and on-call, CI/CD and deployment. ${c.context} "Proxy" means expert technical support and mentoring on your real deliverables — not replacing you. Bridges into our existing AWS, Bedrock, AgentCore and SageMaker support. Independent of Amazon.`,
    highlights: proxyJobHighlights,
    faqs: amazonProxyJobFaqs(`Amazon (${c.name})`, `live software, AWS, data, AI/ML and security tasks aligned to ${c.name} working hours`),
    proxySection: {
      title: `What Amazon Proxy Job Support Covers in ${c.name}`,
      intro: `Hands-on, real-time help on your actual Amazon/AWS tickets during ${c.name} working hours — you stay in control and remain the professional delivering the work.`,
      points: [
        'Coding, bug fixes, debugging, architecture and code review',
        'AWS, data, security, ML pipelines, RAG and GenAI',
        'Production incidents, on-call, CI/CD and deployment',
        `Aligned to ${c.timezone}`,
        'Expert technical support and mentoring — not replacing you. Independent of Amazon.',
      ],
    },
    timezoneNote: `Available across ${c.timezone}.`,
    bottomCTAHeading: `Need Amazon Proxy Job Support in ${c.name}?`,
    bottomCTABody: `In-house software, AWS, data, AI/ML and security experts available same-day in ${c.name}. Expert technical support — not replacing you. Independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [{ label: `Amazon hiring ${c.name}`, href: `/amazon-hiring-${c.key}/` }, countryLink(c)],
      techLinks: [EXISTING.awsHub, EXISTING.bedrock],
      problemLink: EXISTING.production,
      proxyLink: { label: `Amazon proxy interview support ${c.name}`, href: `/amazon-proxy-interview-support-${c.proxyKey}/` },
      additionalLinks: [AMAZON_PROXY_JOB_LINK, AMAZON_HUB_LINK],
    }),
  });
}

function getScheduledCity(c: City): LandingPageConfig {
  return amazonServicePage({
    slug: `get-amazon-interview-scheduled-${c.proxyKey}`,
    title: `Get Amazon Interview Scheduled ${c.name} | Role Targeting & Outreach`,
    description: `Get Amazon interview calls in ${c.name} — role targeting, current amazon.jobs research, resume and LinkedIn positioning, and compliant recruiter outreach. We improve positioning; no guarantees. Independent of Amazon.`,
    keywords: [
      `get amazon interview scheduled ${c.proxyKey}`, `how to get amazon interview ${c.proxyKey}`,
      `amazon interview calls ${c.proxyKey}`, `amazon recruiter ${c.proxyKey}`,
      'get amazon interview scheduled', 'amazon job search support',
    ],
    h1: `Get Amazon Interview Scheduled in ${c.name}`,
    tagline: `A structured Amazon job-search and recruiter-outreach campaign for candidates in ${c.name} to improve visibility for real, current Amazon openings.`,
    heroEyebrow: `Get Amazon Interview Scheduled ${c.name}`,
    painIntro: `Strong background but not getting Amazon interview calls in ${c.name}? We help you improve positioning and outreach for relevant local Amazon opportunities — role and level targeting, current amazon.jobs research, and a disciplined campaign.`,
    heroVariant: `We build a structured Amazon job-search and recruiter-outreach campaign for ${c.name}: target role family and level, current amazon.jobs research, resume and LinkedIn engineering, Amazon keyword alignment, application strategy, targeted outreach, follow-up and tracking — with a clean handoff into Amazon proxy interview support. ${c.context} We help improve recruiter visibility; we do not schedule or guarantee interviews, and we are independent of Amazon.`,
    highlights: scheduledHighlights,
    faqs: amazonMarketingFaqs(`Amazon candidates in ${c.name}`),
    timezoneNote: `Available across ${c.timezone}.`,
    bottomCTAHeading: `Ready to Get More Amazon Interview Calls in ${c.name}?`,
    bottomCTABody: `We build a structured Amazon job-search, profile and outreach campaign for candidates in ${c.name}. We improve positioning — no guarantees, independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [{ label: `Amazon hiring ${c.name}`, href: `/amazon-hiring-${c.key}/` }, countryLink(c)],
      techLinks: [AMAZON_CANDIDATE_MARKETING_LINK, { label: `Amazon proxy interview support ${c.name}`, href: `/amazon-proxy-interview-support-${c.proxyKey}/` }],
      problemLink: { label: 'Amazon current hiring', href: '/amazon-current-hiring/' },
      proxyLink: AMAZON_GET_SCHEDULED_LINK,
      additionalLinks: [AMAZON_HUB_LINK, EXISTING.getScheduled],
    }),
  });
}

// ─── Curated coverage per plan (major hubs only; no thin clones) ─────────────

const HIRING_CITIES = ['seattle', 'bellevue', 'arlington', 'austin', 'new-york', 'bengaluru', 'hyderabad', 'toronto', 'vancouver', 'london', 'dublin', 'berlin', 'munich', 'sydney', 'melbourne'];
const PROXY_INTERVIEW_CITIES = ['seattle', 'bellevue', 'arlington', 'austin', 'new-york', 'bengaluru', 'hyderabad', 'toronto', 'vancouver', 'london', 'dublin', 'berlin', 'munich', 'sydney', 'melbourne'];
const PROXY_JOB_CITIES = ['seattle', 'bengaluru', 'hyderabad', 'toronto', 'london'];
const GET_SCHEDULED_CITIES = ['seattle', 'bengaluru', 'hyderabad', 'toronto', 'vancouver', 'london', 'dublin', 'berlin', 'sydney'];

export const amazonCitySlugs: string[] = [
  ...HIRING_CITIES.map((k) => `amazon-hiring-${CITY[k].key}`),
  ...PROXY_INTERVIEW_CITIES.map((k) => `amazon-proxy-interview-support-${CITY[k].proxyKey}`),
  ...PROXY_JOB_CITIES.map((k) => `amazon-proxy-job-support-${CITY[k].proxyKey}`),
  ...GET_SCHEDULED_CITIES.map((k) => `get-amazon-interview-scheduled-${CITY[k].proxyKey}`),
];

export const amazonCityPages: LandingPageConfig[] = [
  ...HIRING_CITIES.map((k) => hiringCity(CITY[k])),
  ...PROXY_INTERVIEW_CITIES.map((k) => proxyInterviewCity(CITY[k])),
  ...PROXY_JOB_CITIES.map((k) => proxyJobCity(CITY[k])),
  ...GET_SCHEDULED_CITIES.map((k) => getScheduledCity(CITY[k])),
];
