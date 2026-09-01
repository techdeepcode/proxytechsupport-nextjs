import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  roleInfoHighlights,
  proxyInterviewHighlights,
  proxyJobHighlights,
  scheduledHighlights,
  marketingHighlights,
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
 * Amazon COUNTRY cluster. Each country has an informational hiring hub plus the
 * commercial variants that carry real local intent (proxy interview support, proxy
 * job support, get-interview-scheduled, candidate marketing). Local context is real
 * and differentiated (Amazon/AWS presence, cities, teams) — never clone-and-swap.
 * Commercial variants keep "proxy" explicit in the URL/title/H1/hero.
 */

interface Country {
  key: string; // slug fragment, e.g. 'usa'
  name: string; // 'the USA'
  demonym: string; // 'US'
  timezone: string;
  cities: string; // main Amazon cities
  context: string; // real local Amazon presence / market context (2-3 sentences)
  cityLinks?: LandingRelatedLink[];
}

const C: Record<string, Country> = {
  usa: {
    key: 'usa', name: 'the USA', demonym: 'US',
    timezone: 'ET, CT, MT and PT business hours, plus 24/7 for urgent needs',
    cities: 'Seattle, Bellevue, Arlington, New York, Austin, Boston and the Bay Area',
    context: 'The USA is Amazon’s deepest market — the Seattle and Bellevue headquarters region, the Arlington (Northern Virginia) HQ2 hub, and major technology centers in New York, Austin, Boston, the San Francisco Bay Area, San Diego, Denver, Dallas, Chicago, Atlanta and Nashville. US teams span AWS, Generative AI and agentic AI, Alexa and Devices, Ads, Robotics, retail and stores, Prime and Prime Video, Supply Chain, Security and Project Kuiper, hiring across SDE, Applied Science, Data, Security, Solutions Architecture and TPM/PM.',
    cityLinks: [
      { label: 'Amazon hiring Seattle', href: '/amazon-hiring-seattle/' },
      { label: 'Amazon hiring New York', href: '/amazon-hiring-new-york/' },
      { label: 'Amazon hiring Austin', href: '/amazon-hiring-austin/' },
    ],
  },
  india: {
    key: 'india', name: 'India', demonym: 'Indian',
    timezone: 'IST business hours, plus early-morning and late-evening coverage',
    cities: 'Bengaluru, Hyderabad, Chennai, Pune, Gurugram, Noida and Delhi NCR',
    context: 'India is one of Amazon’s largest engineering bases outside the USA — major development centers in Bengaluru, Hyderabad and Chennai, plus Pune, Gurugram, Noida and Delhi NCR. Indian teams build for AWS, Alexa, Ads, retail and payments, and increasingly Generative AI and applied science, hiring heavily for SDE (I/II/III), Data Engineer, BIE, Applied Scientist, Security and Support Engineer roles. Explicit "proxy interview support" demand is especially strong across Bengaluru, Hyderabad and Pune.',
    cityLinks: [
      { label: 'Amazon hiring Bengaluru', href: '/amazon-hiring-bengaluru/' },
      { label: 'Amazon hiring Hyderabad', href: '/amazon-hiring-hyderabad/' },
    ],
  },
  canada: {
    key: 'canada', name: 'Canada', demonym: 'Canadian',
    timezone: 'ET, CT, MT and PT business hours',
    cities: 'Toronto, Vancouver, Montreal and Ottawa',
    context: 'Canada hosts a strong Amazon and AWS engineering presence — Toronto and Vancouver as the largest tech hubs, plus Montreal (a deep-learning and AI center) and Ottawa. Canadian teams work across AWS, applied science, retail systems and devices, with data-residency-aware architecture common. Hiring spans SDE, Applied Scientist, Data Engineer, Solutions Architect and Security roles, on both full-time and contract terms.',
    cityLinks: [
      { label: 'Amazon hiring Toronto', href: '/amazon-hiring-toronto/' },
      { label: 'Amazon hiring Vancouver', href: '/amazon-hiring-vancouver/' },
    ],
  },
  uk: {
    key: 'uk', name: 'the UK', demonym: 'UK',
    timezone: 'GMT/BST business hours',
    cities: 'London, Cambridge, Edinburgh and Manchester',
    context: 'The UK is Amazon’s largest European engineering base — London for AWS, Ads, Prime Video and retail; Cambridge as a hub for Alexa AI and applied science; and growing centers in Edinburgh and Manchester. UK teams hire across SDE, Applied Scientist and Research Scientist, Data Engineer, Solutions Architect, Security and TPM roles. IR35 and contract-vs-permanent considerations are common in the UK market.',
    cityLinks: [
      { label: 'Amazon hiring London', href: '/amazon-hiring-london/' },
    ],
  },
  germany: {
    key: 'germany', name: 'Germany', demonym: 'German',
    timezone: 'CET/CEST business hours',
    cities: 'Berlin, Munich, Dresden, Aachen and Tübingen',
    context: 'Germany hosts significant Amazon and AWS engineering and science — Berlin and Munich as major development centers, Dresden and Aachen for hardware and systems, and Tübingen as a machine-learning research hub. German teams work across AWS, applied and research science, devices, retail and logistics technology, hiring for SDE, Applied/Research Scientist, Data Engineer, Solutions Architect and Systems roles.',
    cityLinks: [
      { label: 'Amazon hiring Berlin', href: '/amazon-hiring-berlin/' },
      { label: 'Amazon hiring Munich', href: '/amazon-hiring-munich/' },
    ],
  },
  ireland: {
    key: 'ireland', name: 'Ireland', demonym: 'Irish',
    timezone: 'GMT/IST (Irish) business hours',
    cities: 'Dublin',
    context: 'Ireland — centered on Dublin — is a major AWS and Amazon hub for Europe, spanning AWS services and infrastructure, retail and operations technology, and support engineering. Dublin teams hire across SDE, Solutions Architect, Cloud Support Engineer, Data and Security roles, and the market draws candidates from across the EU on both permanent and contract terms.',
    cityLinks: [
      { label: 'Amazon hiring Dublin', href: '/amazon-hiring-dublin/' },
    ],
  },
  australia: {
    key: 'australia', name: 'Australia', demonym: 'Australian',
    timezone: 'AEST/AEDT and other Australian business hours',
    cities: 'Sydney and Melbourne',
    context: 'Australia hosts Amazon and AWS engineering primarily in Sydney and Melbourne, spanning AWS services, retail systems, and cloud solutions architecture for the APAC region. Australian teams hire across SDE, Solutions Architect, Data and Security roles, with strong AWS-centric demand and both full-time and contract arrangements.',
    cityLinks: [
      { label: 'Amazon hiring Sydney', href: '/amazon-hiring-sydney/' },
      { label: 'Amazon hiring Melbourne', href: '/amazon-hiring-melbourne/' },
    ],
  },
  singapore: {
    key: 'singapore', name: 'Singapore', demonym: 'Singapore-based',
    timezone: 'SGT business hours',
    cities: 'Singapore',
    context: 'Singapore is Amazon and AWS’s primary APAC hub, spanning AWS services and solutions architecture, retail and payments, advertising, and regional infrastructure. Singapore teams hire across SDE, Solutions Architect, Data Engineer, Security and TPM roles, and the market serves candidates across Southeast Asia on both permanent and contract terms.',
  },
};

// ─── Generators per page type ────────────────────────────────────────────────

function hiringHub(c: Country): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-hiring-${c.key}`,
    title: `Amazon Hiring in ${c.name === 'the USA' ? 'the USA' : c.name}: Roles, Teams, Cities & Interview Process`,
    description: `Amazon and AWS hiring in ${c.name} — the cities, teams, role families and technologies, plus how the interview process works and how to get interview calls. Current as of August 2026; openings change frequently.`,
    keywords: [
      `amazon hiring ${c.key}`, `amazon jobs ${c.key}`, `aws hiring ${c.key}`,
      `amazon careers ${c.key}`, `amazon sde ${c.key}`, `amazon interview ${c.key}`,
    ],
    h1: `Amazon Hiring in ${c.name === 'the USA' ? 'the USA' : c.name}`,
    tagline: `Where Amazon and AWS hire in ${c.name} — cities, teams, role families and technologies — and how to get interview calls and clear the loop.`,
    heroEyebrow: `Amazon Hiring ${c.demonym} — Updated August 2026`,
    painIntro: `Targeting Amazon or AWS in ${c.name}? This guide covers the local Amazon presence — cities, teams and role families — how the interview process works, and where our four support services fit. Openings change frequently, so treat volumes as direction.`,
    heroVariant: `${c.context} Amazon does not use one universal interview flow — the rounds vary by role, level and location. Use this hub to understand the ${c.demonym} market, then move into role-specific interview guides, Amazon proxy interview support, Get Amazon Interview Scheduled, or candidate marketing. ProxyTechSupport is independent of Amazon and does not guarantee interviews or offers.`,
    highlights: roleInfoHighlights,
    faqs: amazonInfoFaqs(`Amazon hiring process in ${c.name}`, `Amazon and AWS hire across ${c.cities} in ${c.name}, using role-specific interview loops that vary by team, level and location.`),
    useCasesSection: {
      title: `Amazon in ${c.name} — What to Know`,
      cases: [
        `Main Amazon/AWS cities: ${c.cities}`,
        'Role families: SDE, Applied Scientist, Data Engineer, BIE, Solutions Architect, Security, TPM',
        'Teams: AWS, GenAI/agentic AI, Alexa/Devices, Ads, retail, Prime Video and more',
        'The interview process is role-specific and varies by level and location',
        'How to improve positioning and get relevant interview calls',
        'How to prepare for and clear the loop',
      ],
    },
    timezoneNote: `Available across ${c.timezone}.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_HUB_LINK, AMAZON_HIRING_PROCESS_LINK],
      techLinks: [
        { label: `Amazon proxy interview support ${c.demonym}`, href: `/amazon-proxy-interview-support-${c.key}/` },
        AMAZON_GET_SCHEDULED_LINK,
      ],
      problemLink: AMAZON_INTERVIEW_PROCESS_LINK,
      proxyLink: { label: `Amazon proxy interview support ${c.demonym}`, href: `/amazon-proxy-interview-support-${c.key}/` },
      additionalLinks: [
        ...(c.cityLinks ?? []),
        { label: 'Amazon SDE interview', href: '/amazon-sde-interview/' },
        AMAZON_CANDIDATE_MARKETING_LINK, EXISTING.awsHub,
      ],
    }),
  });
}

function proxyInterview(c: Country): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-proxy-interview-support-${c.key}`,
    title: `Amazon Proxy Interview Support ${c.demonym} | SDE, AWS & AI/ML`,
    description: `Amazon proxy interview support in ${c.name} — technical preparation and mentoring for SDE, AWS, AI/ML, Data and Security loops, aligned to local hours. You attend your own interview. Independent of Amazon.`,
    keywords: [
      `amazon proxy interview support ${c.key}`, `amazon interview proxy support ${c.key}`,
      `amazon proxy interview ${c.key}`, `amazon interview support ${c.key}`,
      'amazon proxy interview support', 'amazon technical proxy interview support',
    ],
    ogTitle: `Amazon Proxy Interview Support ${c.demonym}`,
    h1: `Amazon Proxy Interview Support in ${c.name}`,
    tagline: `Technical proxy interview support for Amazon loops in ${c.name} — coding, system design, AWS, AI/ML, data, security and Leadership Principles, aligned to local hours.`,
    heroEyebrow: `Amazon Proxy Interview Support ${c.demonym}`,
    painIntro: `Facing an Amazon interview in ${c.name}? Amazon proxy interview support (also searched as interview proxy support) gives ${c.demonym} candidates calibrated mock interviews and mentoring for the technical and behavioral rounds — aligned to your local hours.`,
    heroVariant: `We support ${c.demonym} Amazon candidates across the rounds Amazon uses — Online Assessment, technical phone screen, coding and system design, SQL/data and ML where relevant, and the behavioral Leadership Principles loop and Bar Raiser. ${c.context} Proxy interview support means expert technical preparation and mentoring — you attend and complete your own interview. Independent of Amazon; no guarantee of selection.`,
    highlights: proxyInterviewHighlights,
    faqs: amazonProxyInterviewFaqs(`Amazon (${c.name})`),
    proxySection: {
      title: `What Amazon Proxy Interview Support Covers in ${c.name}`,
      intro: `Calibrated, role-specific preparation for your Amazon loop in ${c.name}, aligned to local hours — you attend your own interview.`,
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
    bottomCTABody: `In-house experts run calibrated Amazon mock interviews and Leadership Principles coaching for ${c.demonym} candidates. You attend your own interview; we prepare you to perform. Independent of Amazon; no guarantee of selection. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_PROXY_INTERVIEW_LINK, { label: `Amazon hiring ${c.demonym}`, href: `/amazon-hiring-${c.key}/` }],
      techLinks: [{ label: 'Amazon SDE proxy interview support', href: '/amazon-sde-proxy-interview-support/' }, { label: 'Amazon system design interview', href: '/amazon-system-design-interview/' }],
      problemLink: AMAZON_LP_HUB_LINK,
      proxyLink: AMAZON_PROXY_JOB_LINK,
      additionalLinks: [
        ...(c.cityLinks ?? []),
        { label: `Get Amazon interview scheduled ${c.demonym}`, href: `/get-amazon-interview-scheduled-${c.key}/` },
        AMAZON_HUB_LINK,
      ],
    }),
  });
}

function proxyJob(c: Country): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-proxy-job-support-${c.key}`,
    title: `Amazon Proxy Job Support ${c.demonym} | SDE, AWS, Data & AI/ML`,
    description: `Amazon proxy job support in ${c.name} — real-time technical help on live Amazon/AWS work across software, cloud, data, AI/ML and security, aligned to local hours. Not replacing you. Independent of Amazon.`,
    keywords: [
      `amazon proxy job support ${c.key}`, `amazon job support ${c.key}`,
      `aws proxy job support ${c.key}`, `amazon technical job support ${c.key}`,
      'amazon proxy job support', 'aws proxy job support',
    ],
    ogTitle: `Amazon Proxy Job Support ${c.demonym}`,
    h1: `Amazon Proxy Job Support in ${c.name}`,
    tagline: `Real-time proxy job support for Amazon/AWS work in ${c.name} — software, cloud, data, AI/ML and security, aligned to local hours.`,
    heroEyebrow: `Amazon Proxy Job Support ${c.demonym}`,
    painIntro: `In an Amazon or AWS-heavy role in ${c.name} and want an expert beside you on hard tickets and incidents? Amazon proxy job support gives ${c.demonym} professionals real-time help during your working hours — you remain the professional delivering the work.`,
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
    bottomCTABody: `In-house software, AWS, data, AI/ML and security experts available same-day for ${c.demonym} professionals. Expert technical support — not replacing you. Independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_PROXY_JOB_LINK, { label: `Amazon hiring ${c.demonym}`, href: `/amazon-hiring-${c.key}/` }],
      techLinks: [EXISTING.awsHub, EXISTING.bedrock],
      problemLink: EXISTING.production,
      proxyLink: { label: `Amazon proxy interview support ${c.demonym}`, href: `/amazon-proxy-interview-support-${c.key}/` },
      additionalLinks: [
        { label: 'Amazon SDE proxy job support', href: '/amazon-sde-proxy-job-support/' },
        EXISTING.sagemaker, AMAZON_HUB_LINK,
      ],
    }),
  });
}

function getScheduled(c: Country): LandingPageConfig {
  return amazonServicePage({
    slug: `get-amazon-interview-scheduled-${c.key}`,
    title: `Get Amazon Interview Scheduled ${c.demonym} | Role Targeting & Outreach`,
    description: `Get Amazon interview calls in ${c.name} — role targeting, current amazon.jobs research, resume and LinkedIn positioning, and compliant recruiter outreach. We improve positioning; no guarantees. Independent of Amazon.`,
    keywords: [
      `get amazon interview scheduled ${c.key}`, `how to get amazon interview ${c.key}`,
      `amazon interview calls ${c.key}`, `amazon recruiter ${c.key}`,
      'get amazon interview scheduled', 'amazon job search support',
    ],
    h1: `Get Amazon Interview Scheduled in ${c.name}`,
    tagline: `A structured Amazon job-search and recruiter-outreach campaign for ${c.demonym} candidates to improve visibility for real, current Amazon openings.`,
    heroEyebrow: `Get Amazon Interview Scheduled ${c.demonym}`,
    painIntro: `Strong background but not getting Amazon interview calls in ${c.name}? We help ${c.demonym} candidates improve positioning and outreach for relevant local Amazon opportunities — role and level targeting, current amazon.jobs research, and a disciplined campaign.`,
    heroVariant: `We build a structured Amazon job-search and recruiter-outreach campaign for ${c.name}: target role family and level, city selection, current amazon.jobs research, resume and LinkedIn engineering, Amazon keyword alignment, application strategy, targeted outreach, follow-up and tracking — with a clean handoff into Amazon proxy interview support. ${c.context} We help improve recruiter visibility; we do not schedule or guarantee interviews, and we are independent of Amazon.`,
    highlights: scheduledHighlights,
    faqs: amazonMarketingFaqs(`${c.demonym} Amazon candidates`),
    timezoneNote: `Available across ${c.timezone}.`,
    bottomCTAHeading: `Ready to Get More Amazon Interview Calls in ${c.name}?`,
    bottomCTABody: `We build a structured Amazon job-search, profile and outreach campaign for ${c.demonym} candidates. We improve positioning — no guarantees, independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_GET_SCHEDULED_LINK, { label: `Amazon hiring ${c.demonym}`, href: `/amazon-hiring-${c.key}/` }],
      techLinks: [AMAZON_CANDIDATE_MARKETING_LINK, { label: `Amazon proxy interview support ${c.demonym}`, href: `/amazon-proxy-interview-support-${c.key}/` }],
      problemLink: { label: 'Amazon current hiring', href: '/amazon-current-hiring/' },
      proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
      additionalLinks: [...(c.cityLinks ?? []), AMAZON_HUB_LINK, EXISTING.getScheduled],
    }),
  });
}

function candidateMarketing(c: Country): LandingPageConfig {
  return amazonServicePage({
    slug: `amazon-candidate-marketing-${c.key}`,
    title: `Amazon Candidate Marketing ${c.demonym} | Resume, LinkedIn & Visibility`,
    description: `Amazon candidate marketing in ${c.name} — resume and LinkedIn positioning, role-family and level targeting, keyword alignment and recruiter visibility for local Amazon and AWS roles. Independent of Amazon.`,
    keywords: [
      `amazon candidate marketing ${c.key}`, `amazon profile marketing ${c.key}`,
      `amazon resume ${c.key}`, `amazon linkedin ${c.key}`,
      'amazon candidate marketing', 'amazon recruiter visibility',
    ],
    h1: `Amazon Candidate Marketing in ${c.name}`,
    tagline: `Position your profile for Amazon in ${c.name} — resume, LinkedIn, role targeting and recruiter visibility for local technical roles.`,
    heroEyebrow: `Amazon Candidate Marketing ${c.demonym}`,
    painIntro: `Great engineer, wrong packaging for the ${c.name} Amazon market? Amazon candidate marketing rebuilds how your profile reads to Amazon recruiters and ATS filters and gets it in front of the right ${c.demonym} hiring teams for real openings.`,
    heroVariant: `Amazon candidate marketing for ${c.demonym} professionals includes resume positioning, LinkedIn optimization, profile engineering, Amazon role-keyword and role-family alignment, level and location targeting, current-vacancy targeting, applications, compliant recruiter outreach and follow-up. ${c.context} We improve positioning and visibility — we do not guarantee interviews or employment, and we are independent of Amazon.`,
    highlights: marketingHighlights,
    faqs: amazonMarketingFaqs(`${c.demonym} Amazon candidates`),
    timezoneNote: `Available across ${c.timezone}.`,
    bottomCTAHeading: `Position Your Profile for Amazon in ${c.name}`,
    bottomCTABody: `Resume, LinkedIn, role targeting and recruiter visibility engineered for the ${c.name} Amazon market. We improve positioning — no guarantees, independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_CANDIDATE_MARKETING_LINK, { label: `Amazon hiring ${c.demonym}`, href: `/amazon-hiring-${c.key}/` }],
      techLinks: [AMAZON_GET_SCHEDULED_LINK, { label: `Amazon proxy interview support ${c.demonym}`, href: `/amazon-proxy-interview-support-${c.key}/` }],
      problemLink: AMAZON_HIRING_PROCESS_LINK,
      proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
      additionalLinks: [AMAZON_HUB_LINK, EXISTING.candidateMarketing],
    }),
  });
}

// ─── Assemble per-country pages (curated coverage, not blind permutation) ─────

const HIRING = ['usa', 'india', 'canada', 'uk', 'germany', 'ireland', 'australia', 'singapore'];
const PROXY_INTERVIEW = ['usa', 'india', 'canada', 'uk', 'germany', 'ireland', 'australia', 'singapore'];
const PROXY_JOB = ['usa', 'india', 'canada', 'uk', 'germany', 'ireland', 'australia'];
const GET_SCHEDULED = ['usa', 'india', 'canada', 'uk', 'germany', 'ireland', 'australia', 'singapore'];
const CANDIDATE_MARKETING = ['usa', 'india', 'canada', 'uk', 'singapore'];

export const amazonCountryPages: LandingPageConfig[] = [
  ...HIRING.map((k) => hiringHub(C[k])),
  ...PROXY_INTERVIEW.map((k) => proxyInterview(C[k])),
  ...PROXY_JOB.map((k) => proxyJob(C[k])),
  ...GET_SCHEDULED.map((k) => getScheduled(C[k])),
  ...CANDIDATE_MARKETING.map((k) => candidateMarketing(C[k])),
];
