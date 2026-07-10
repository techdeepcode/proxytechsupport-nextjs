import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import { buildCityPage } from './city-usa-pages';
import { EXISTING } from './shared';

/**
 * Phases 4–7: Canada, UK, Ireland, Europe, Australia, New Zealand, and Gulf city
 * AI/ML pages. Reuses buildCityPage from the USA city batch.
 *
 * NOTE: Singapore and Hong Kong "city" pages from the brief already exist as country
 * pages (data/aiml/country-pages.ts) — they are intentionally NOT recreated here, per
 * the add-only "do not recreate an existing route" rule.
 */

interface RegionPreset {
  region: string;
  timezoneNote: string;
  countryHub: LandingRelatedLink;
  interviewLink: LandingRelatedLink;
  marketingLink: LandingRelatedLink;
  extraLinks: LandingRelatedLink[];
}

function cityPage(
  preset: RegionPreset,
  slug: string, city: string, industry: string,
  painIntro: string, heroVariant: string, marketFaqAnswer: string,
  extraLinks: LandingRelatedLink[] = [],
): LandingPageConfig {
  return buildCityPage({
    slug, city, region: preset.region, industry, timezoneNote: preset.timezoneNote,
    title: `AI/ML Job Support ${city} — GenAI, LLM & MLOps Help`,
    description: `Real-time AI/ML job support in ${city} — GenAI, LLM, RAG, MLOps & data science. Production help, interview support, and candidate marketing for ${city} AI professionals.`,
    keywords: [
      `AI ML job support ${city}`, `GenAI job support ${city}`, `MLOps job support ${city}`,
      `machine learning job support ${city}`, `AI engineer support ${city}`, `LLM job support ${city}`,
    ],
    heroEyebrow: `AI/ML Job Support ${city} — 2026`,
    painIntro, heroVariant, marketFaqAnswer,
    countryHub: preset.countryHub,
    interviewLink: preset.interviewLink,
    marketingLink: preset.marketingLink,
    extraLinks: [preset.countryHub, ...preset.extraLinks, ...extraLinks],
  });
}

// ─── Region presets ──────────────────────────────────────────────────────────

const CANADA: RegionPreset = {
  region: 'Canada',
  timezoneNote: 'Available across Canadian Eastern, Central, Mountain, and Pacific business hours.',
  countryHub: { label: 'AI/ML job support Canada', href: '/canada-ai-ml-job-support/' },
  interviewLink: { label: 'AI/ML interview proxy Canada', href: '/ai-ml-interview-proxy-support-canada/' },
  marketingLink: { label: 'AI/ML candidate marketing Canada', href: '/ai-ml-candidate-marketing-canada/' },
  extraLinks: [
    { label: 'AI/ML job support Canada (existing)', href: '/ai-ml-job-support-canada/' },
    { label: 'Canada proxy job support guide', href: '/canada-proxy-job-support-guide/' },
    { label: 'Canada interview proxy support guide', href: '/canada-interview-proxy-support-guide/' },
    { label: 'Candidate marketing Canada', href: '/job-application-candidate-marketing-canada/' },
  ],
};

const UK: RegionPreset = {
  region: 'the UK',
  timezoneNote: 'Available across GMT/BST UK business hours.',
  countryHub: { label: 'AI/ML job support UK', href: '/uk-ai-ml-job-support/' },
  interviewLink: { label: 'AI/ML interview proxy UK', href: '/ai-ml-interview-proxy-support-uk/' },
  marketingLink: { label: 'AI/ML candidate marketing UK', href: '/ai-ml-candidate-marketing-uk/' },
  extraLinks: [
    { label: 'Candidate marketing UK', href: '/job-application-candidate-marketing-uk/' },
    { label: 'Get AI/ML interview scheduled UK', href: '/get-ai-ml-interview-scheduled-uk/' },
  ],
};

const IRELAND: RegionPreset = {
  region: 'Ireland',
  timezoneNote: 'Available across Irish Standard Time / GMT business hours.',
  countryHub: { label: 'AI/ML job support Ireland', href: '/ireland-ai-ml-job-support/' },
  interviewLink: EXISTING.aimlProxy,
  marketingLink: { label: 'AI/ML candidate marketing Ireland', href: '/ai-ml-candidate-marketing-ireland/' },
  extraLinks: [
    { label: 'Candidate marketing Ireland', href: '/job-application-candidate-marketing-ireland/' },
    { label: 'Get AI/ML interview scheduled Ireland', href: '/get-ai-ml-interview-scheduled-ireland/' },
    { label: 'Ireland AI/ML DevOps SRE support', href: '/ai-ml-devops-sre-job-support-ireland/' },
  ],
};

function europePreset(countryHub: LandingRelatedLink): RegionPreset {
  return {
    region: 'Europe',
    timezoneNote: 'Available across CET/CEST European business hours.',
    countryHub,
    interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
    marketingLink: { label: 'AI/ML candidate marketing Europe', href: '/ai-ml-candidate-marketing/' },
    extraLinks: [
      { label: 'AI/ML job support Europe', href: '/europe-ai-ml-job-support/' },
      EXISTING.europeGuide,
      { label: 'Candidate marketing Europe', href: '/job-application-candidate-marketing-europe/' },
    ],
  };
}

const GERMANY = europePreset({ label: 'AI/ML job support Germany', href: '/germany-ai-ml-job-support/' });
const NETHERLANDS = europePreset({ label: 'AI/ML job support Netherlands', href: '/netherlands-ai-ml-job-support/' });
const FRANCE = europePreset({ label: 'AI/ML job support France', href: '/france-ai-ml-job-support/' });
const SWEDEN = europePreset({ label: 'AI/ML job support Sweden', href: '/sweden-ai-ml-job-support/' });
const SWITZERLAND = europePreset({ label: 'AI/ML job support Switzerland', href: '/switzerland-ai-ml-job-support/' });

const AUSTRALIA: RegionPreset = {
  region: 'Australia',
  timezoneNote: 'Available across AEST/AEDT and Australian Western business hours.',
  countryHub: { label: 'AI/ML job support Australia', href: '/australia-ai-ml-job-support/' },
  interviewLink: { label: 'AI/ML interview proxy Australia', href: '/ai-ml-interview-proxy-support-australia/' },
  marketingLink: { label: 'AI/ML candidate marketing Australia', href: '/ai-ml-candidate-marketing-australia/' },
  extraLinks: [{ label: 'Candidate marketing Australia', href: '/job-application-candidate-marketing-australia/' }],
};

const NEW_ZEALAND: RegionPreset = {
  region: 'New Zealand',
  timezoneNote: 'Available across NZST/NZDT New Zealand business hours.',
  countryHub: { label: 'AI/ML job support New Zealand', href: '/new-zealand-ai-ml-job-support/' },
  interviewLink: { label: 'AI/ML interview proxy Australia', href: '/ai-ml-interview-proxy-support-australia/' },
  marketingLink: { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' },
  extraLinks: [],
};

const UAE: RegionPreset = {
  region: 'the UAE',
  timezoneNote: 'Available across GST (Gulf Standard Time) business hours.',
  countryHub: { label: 'AI/ML job support UAE', href: '/uae-ai-ml-job-support/' },
  interviewLink: EXISTING.aimlProxy,
  marketingLink: { label: 'AI/ML candidate marketing UAE', href: '/ai-ml-candidate-marketing-uae/' },
  extraLinks: [{ label: 'Candidate marketing UAE', href: '/job-application-candidate-marketing-uae/' }],
};

const SAUDI: RegionPreset = {
  region: 'Saudi Arabia',
  timezoneNote: 'Available across AST (Arabia Standard Time) business hours.',
  countryHub: { label: 'AI/ML job support Saudi Arabia', href: '/saudi-arabia-ai-ml-job-support/' },
  interviewLink: EXISTING.aimlProxy,
  marketingLink: { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' },
  extraLinks: [],
};

// ─── Canada cities ───────────────────────────────────────────────────────────

export const torontoAiMlJobSupport = cityPage(CANADA,
  'toronto-ai-ml-job-support', 'Toronto', 'banking, insurance, and a deep AI research scene',
  'On an AI/ML project for a Toronto bank, insurer, or AI startup and stuck on a model, a GenAI feature, a production incident, or a Toronto interview?',
  'Toronto is Canada’s largest AI hub — banks, insurers, the Vector Institute research ecosystem, and startups all hiring GenAI and MLOps talent. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Toronto-market profile positioning.',
  'Yes. Toronto AI/ML roles are strong in banking, insurance, and research-driven startups. We calibrate support to these environments and position profiles for Toronto recruiter searches.');

export const vancouverAiMlJobSupport = cityPage(CANADA,
  'vancouver-ai-ml-job-support', 'Vancouver', 'gaming, film/VFX, SaaS, and clean tech',
  'On an AI/ML project for a Vancouver gaming, SaaS, or tech company and stuck on a model, a GenAI feature, a production incident, or a Vancouver interview?',
  'Vancouver’s AI/ML demand spans gaming, film/VFX, SaaS, and clean tech, plus big-tech satellite offices. Our experts cover Canadian Pacific hours and support live work, production incidents, interviews, and Vancouver-market profile positioning.',
  'Yes. Vancouver AI/ML roles span gaming, VFX, and SaaS. We calibrate support to these environments and position profiles for Vancouver recruiter searches.');

export const calgaryAiMlJobSupport = cityPage(CANADA,
  'calgary-ai-ml-job-support', 'Calgary', 'energy, logistics, and enterprise data',
  'On an AI/ML project for a Calgary energy or enterprise company and stuck on a model, a GenAI feature, a production incident, or a Calgary interview?',
  'Calgary’s AI/ML demand is anchored in energy, logistics, and enterprise data — forecasting, optimization, and growing GenAI adoption. Our experts cover Canadian Mountain hours and support live work, production incidents, interviews, and Calgary-market profile positioning.',
  'Yes. Calgary AI/ML roles skew toward energy and enterprise optimization. We calibrate support to these domains and position profiles for Calgary recruiter searches.');

export const montrealAiMlJobSupport = cityPage(CANADA,
  'montreal-ai-ml-job-support', 'Montreal', 'deep-learning research, gaming, and aerospace',
  'On an AI/ML project for a Montreal AI lab, gaming, or aerospace company and stuck on a model, a GenAI feature, a production incident, or a Montreal interview?',
  'Montreal is a global deep-learning research capital (MILA ecosystem) with strong gaming and aerospace demand. Expectations run research-deep. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Montreal-market profile positioning.',
  'Yes. Montreal AI/ML roles are research-heavy — deep learning, gaming, and aerospace. We calibrate support to these environments and position profiles for Montreal recruiter searches.');

export const ottawaAiMlJobSupport = cityPage(CANADA,
  'ottawa-ai-ml-job-support', 'Ottawa', 'government, telecom, and cybersecurity',
  'On an AI/ML project for an Ottawa government, telecom, or security organization and stuck on a model, a GenAI feature, a production incident, or an Ottawa interview?',
  'Ottawa’s AI/ML demand centers on government, telecom, and cybersecurity, with strong emphasis on compliance and responsible AI. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Ottawa-market profile positioning.',
  'Yes. Ottawa AI/ML roles emphasize government, telecom, and security. We calibrate support to these domains and position profiles for Ottawa recruiter searches.');

// ─── UK cities ───────────────────────────────────────────────────────────────

export const londonAiMlJobSupport = cityPage(UK,
  'london-ai-ml-job-support', 'London', 'banking, fintech, and a dense AI startup scene',
  'On an AI/ML project for a London bank, fintech, or AI startup and stuck on a model, a GenAI feature, a production incident, or a London interview?',
  'London is Europe’s largest AI/ML market — banking, fintech, healthcare, and a dense startup ecosystem, all hiring GenAI and MLOps talent at a high bar. Our experts cover GMT/BST hours and support live work, production incidents, interviews, and London-market profile positioning.',
  'Yes. London AI/ML roles span banking, fintech, and startups with a high hiring bar. We calibrate support to these environments and position profiles for London recruiter searches.');

export const manchesterAiMlJobSupport = cityPage(UK,
  'manchester-ai-ml-job-support', 'Manchester', 'media, e-commerce, and enterprise tech',
  'On an AI/ML project for a Manchester media, e-commerce, or enterprise company and stuck on a model, a GenAI feature, a production incident, or a Manchester interview?',
  'Manchester is a growing northern UK tech hub — media, e-commerce, and enterprise IT increasingly adopting GenAI and MLOps. Our experts cover GMT/BST hours and support live work, production incidents, interviews, and Manchester-market profile positioning.',
  'Yes. Manchester AI/ML roles span media, e-commerce, and enterprise. We calibrate support to these environments and position profiles for Manchester recruiter searches.');

export const birminghamAiMlJobSupport = cityPage(UK,
  'birmingham-ai-ml-job-support', 'Birmingham', 'finance, manufacturing, and public sector',
  'On an AI/ML project for a Birmingham finance, manufacturing, or public-sector organization and stuck on a model, a GenAI feature, a production incident, or a Birmingham interview?',
  'Birmingham’s AI/ML demand spans finance, manufacturing, and public sector, with growing GenAI adoption. Our experts cover GMT/BST hours and support live work, production incidents, interviews, and Birmingham-market profile positioning.',
  'Yes. Birmingham AI/ML roles span finance, manufacturing, and public sector. We calibrate support to these domains and position profiles for Birmingham recruiter searches.');

// ─── Ireland cities ──────────────────────────────────────────────────────────

export const dublinAiMlJobSupport = cityPage(IRELAND,
  'dublin-ai-ml-job-support', 'Dublin', 'multinational tech HQs, pharma, and fintech',
  'On an AI/ML project for a Dublin multinational, pharma, or fintech company and stuck on a model, a GenAI feature, a production incident, or a Dublin interview?',
  'Dublin hosts the European HQs of major US tech and pharma companies plus a growing fintech and startup scene. Our experts cover Irish/GMT hours and support live work, production incidents, interviews, and Dublin-market profile positioning.',
  'Yes. Dublin AI/ML roles are concentrated in multinational tech HQs, pharma, and fintech. We calibrate support to these environments and position profiles for Dublin recruiter searches.');

export const corkAiMlJobSupport = cityPage(IRELAND,
  'cork-ai-ml-job-support', 'Cork', 'pharma, medtech, and enterprise tech',
  'On an AI/ML project for a Cork pharma, medtech, or enterprise company and stuck on a model, a GenAI feature, a production incident, or a Cork interview?',
  'Cork has a strong pharma, medtech, and enterprise-tech base with growing AI/ML demand. Our experts cover Irish/GMT hours and support live work, production incidents, interviews, and Cork-market profile positioning.',
  'Yes. Cork AI/ML roles skew toward pharma, medtech, and enterprise. We calibrate support to these domains and position profiles for Cork recruiter searches.');

// ─── Europe cities ───────────────────────────────────────────────────────────

export const berlinAiMlJobSupport = cityPage(GERMANY,
  'berlin-ai-ml-job-support', 'Berlin', 'startups, e-commerce, and enterprise AI',
  'On an AI/ML project for a Berlin startup or enterprise and stuck on a model, a GenAI feature, a production incident, or a Berlin interview?',
  'Berlin is Germany’s startup and AI capital — a dense scene of GenAI startups, e-commerce, and enterprise teams. Our experts cover CET hours and support live work, production incidents, interviews, and Berlin-market profile positioning.',
  'Yes. Berlin AI/ML roles are startup- and e-commerce-heavy with growing enterprise GenAI. We calibrate support to these environments and position profiles for Berlin recruiter searches.');

export const munichAiMlJobSupport = cityPage(GERMANY,
  'munich-ai-ml-job-support', 'Munich', 'automotive, industrial, and enterprise software',
  'On an AI/ML project for a Munich automotive, industrial, or enterprise company and stuck on a model, a GenAI feature, a production incident, or a Munich interview?',
  'Munich anchors Germany’s automotive and industrial AI — plus strong enterprise software and research. Standards are high. Our experts cover CET hours and support live work, production incidents, interviews, and Munich-market profile positioning.',
  'Yes. Munich AI/ML roles skew toward automotive, industrial, and enterprise software. We calibrate support to these domains and position profiles for Munich recruiter searches.');

export const frankfurtAiMlJobSupport = cityPage(GERMANY,
  'frankfurt-ai-ml-job-support', 'Frankfurt', 'banking, finance, and data centers',
  'On an AI/ML project for a Frankfurt bank or financial firm and stuck on a model, a GenAI feature, a production incident, or a Frankfurt interview?',
  'Frankfurt is Germany’s financial capital — banking, finance, and data-center AI with strict governance. Our experts cover CET hours and support live work, production incidents, interviews, and Frankfurt-market profile positioning.',
  'Yes. Frankfurt AI/ML roles are banking- and finance-heavy with strict governance. We calibrate support to these environments and position profiles for Frankfurt recruiter searches.');

export const hamburgAiMlJobSupport = cityPage(GERMANY,
  'hamburg-ai-ml-job-support', 'Hamburg', 'media, logistics, and e-commerce',
  'On an AI/ML project for a Hamburg media, logistics, or e-commerce company and stuck on a model, a GenAI feature, a production incident, or a Hamburg interview?',
  'Hamburg’s AI/ML demand spans media, logistics/port operations, and e-commerce. Our experts cover CET hours and support live work, production incidents, interviews, and Hamburg-market profile positioning.',
  'Yes. Hamburg AI/ML roles span media, logistics, and e-commerce. We calibrate support to these domains and position profiles for Hamburg recruiter searches.');

export const amsterdamAiMlJobSupport = cityPage(NETHERLANDS,
  'amsterdam-ai-ml-job-support', 'Amsterdam', 'fintech, scale-ups, and enterprise data',
  'On an AI/ML project for an Amsterdam fintech or scale-up and stuck on a model, a GenAI feature, a production incident, or an Amsterdam interview?',
  'Amsterdam is a leading European AI/ML hub — fintech, scale-ups, and enterprise data teams with strong engineering standards. Our experts cover CET hours and support live work, production incidents, interviews, and Amsterdam-market profile positioning.',
  'Yes. Amsterdam AI/ML roles are fintech- and scale-up-heavy. We calibrate support to these environments and position profiles for Amsterdam recruiter searches.');

export const rotterdamAiMlJobSupport = cityPage(NETHERLANDS,
  'rotterdam-ai-ml-job-support', 'Rotterdam', 'logistics, port tech, and enterprise',
  'On an AI/ML project for a Rotterdam logistics or enterprise company and stuck on a model, a GenAI feature, a production incident, or a Rotterdam interview?',
  'Rotterdam’s AI/ML demand centers on logistics, port technology, and enterprise operations — optimization, forecasting, and GenAI. Our experts cover CET hours and support live work, production incidents, interviews, and Rotterdam-market profile positioning.',
  'Yes. Rotterdam AI/ML roles skew toward logistics and enterprise optimization. We calibrate support to these domains and position profiles for Rotterdam recruiter searches.');

export const parisAiMlJobSupport = cityPage(FRANCE,
  'paris-ai-ml-job-support', 'Paris', 'AI research, LLM startups, and enterprise',
  'On an AI/ML project for a Paris AI company or enterprise and stuck on a model, a GenAI feature, a production incident, or a Paris interview?',
  'Paris is a European AI powerhouse — deep research, LLM/GenAI startups, and enterprise data teams across finance, luxury, and retail. Our experts cover CET hours and support live work, production incidents, interviews, and Paris-market profile positioning.',
  'Yes. Paris AI/ML roles span LLM/GenAI startups and enterprise. We calibrate support to these environments and position profiles for Paris recruiter searches.');

export const stockholmAiMlJobSupport = cityPage(SWEDEN,
  'stockholm-ai-ml-job-support', 'Stockholm', 'fintech, gaming, and streaming',
  'On an AI/ML project for a Stockholm fintech, gaming, or streaming company and stuck on a model, a GenAI feature, a production incident, or a Stockholm interview?',
  'Stockholm’s AI/ML demand spans fintech, gaming, and music/streaming, with high engineering standards. Our experts cover CET hours and support live work, production incidents, interviews, and Stockholm-market profile positioning.',
  'Yes. Stockholm AI/ML roles span fintech, gaming, and streaming. We calibrate support to these domains and position profiles for Stockholm recruiter searches.');

export const zurichAiMlJobSupport = cityPage(SWITZERLAND,
  'zurich-ai-ml-job-support', 'Zurich', 'banking, insurance, and top research',
  'On an AI/ML project for a Zurich bank, insurer, or tech company and stuck on a model, a GenAI feature, a production incident, or a Zurich interview?',
  'Zurich combines banking and insurance AI with world-class research (ETH). Standards and governance are high. Our experts cover CET hours and support live work, production incidents, interviews, and Zurich-market profile positioning.',
  'Yes. Zurich AI/ML roles are banking-, insurance-, and research-heavy. We calibrate support to these environments and position profiles for Zurich recruiter searches.');

export const genevaAiMlJobSupport = cityPage(SWITZERLAND,
  'geneva-ai-ml-job-support', 'Geneva', 'finance, international orgs, and life sciences',
  'On an AI/ML project for a Geneva finance, international organization, or life-sciences company and stuck on a model, a GenAI feature, a production incident, or a Geneva interview?',
  'Geneva’s AI/ML demand spans private banking, international organizations, and life sciences, with strong governance needs. Our experts cover CET hours and support live work, production incidents, interviews, and Geneva-market profile positioning.',
  'Yes. Geneva AI/ML roles span finance, international orgs, and life sciences. We calibrate support to these domains and position profiles for Geneva recruiter searches.');

// ─── Australia & New Zealand cities ──────────────────────────────────────────

export const sydneyAiMlJobSupport = cityPage(AUSTRALIA,
  'sydney-ai-ml-job-support', 'Sydney', 'banking, fintech, and enterprise SaaS',
  'On an AI/ML project for a Sydney bank, fintech, or SaaS company and stuck on a model, a GenAI feature, a production incident, or a Sydney interview?',
  'Sydney is Australia’s largest AI/ML market — banking, fintech, and enterprise SaaS hiring GenAI and MLOps talent. Our experts cover AEST/AEDT hours directly and support live work, production incidents, interviews, and Sydney-market profile positioning.',
  'Yes. Sydney AI/ML roles are banking-, fintech-, and SaaS-heavy. We cover Australian hours directly and position profiles for Sydney recruiter searches.');

export const melbourneAiMlJobSupport = cityPage(AUSTRALIA,
  'melbourne-ai-ml-job-support', 'Melbourne', 'retail, healthcare, and research',
  'On an AI/ML project for a Melbourne retail, healthcare, or research organization and stuck on a model, a GenAI feature, a production incident, or a Melbourne interview?',
  'Melbourne’s AI/ML demand spans retail, healthcare, government, and research. Our experts cover AEST/AEDT hours directly and support live work, production incidents, interviews, and Melbourne-market profile positioning.',
  'Yes. Melbourne AI/ML roles span retail, healthcare, and research. We cover Australian hours directly and position profiles for Melbourne recruiter searches.');

export const brisbaneAiMlJobSupport = cityPage(AUSTRALIA,
  'brisbane-ai-ml-job-support', 'Brisbane', 'resources, government, and enterprise',
  'On an AI/ML project for a Brisbane resources, government, or enterprise organization and stuck on a model, a GenAI feature, a production incident, or a Brisbane interview?',
  'Brisbane’s AI/ML demand centers on resources, government, and enterprise operations. Our experts cover AEST hours directly and support live work, production incidents, interviews, and Brisbane-market profile positioning.',
  'Yes. Brisbane AI/ML roles skew toward resources, government, and enterprise. We cover Australian hours directly and position profiles for Brisbane recruiter searches.');

export const perthAiMlJobSupport = cityPage(AUSTRALIA,
  'perth-ai-ml-job-support', 'Perth', 'mining, resources, and industrial AI',
  'On an AI/ML project for a Perth mining or resources company and stuck on a model, a GenAI feature, a production incident, or a Perth interview?',
  'Perth’s AI/ML demand is anchored in mining, resources, and industrial optimization. Our experts cover Australian Western hours directly and support live work, production incidents, interviews, and Perth-market profile positioning.',
  'Yes. Perth AI/ML roles are mining- and resources-heavy. We cover Australian Western hours directly and position profiles for Perth recruiter searches.');

export const aucklandAiMlJobSupport = cityPage(NEW_ZEALAND,
  'auckland-ai-ml-job-support', 'Auckland', 'banking, SaaS, and enterprise',
  'On an AI/ML project for an Auckland bank, SaaS, or enterprise company and stuck on a model, a GenAI feature, a production incident, or an Auckland interview?',
  'Auckland is New Zealand’s largest tech market — banking, SaaS, and enterprise adopting GenAI and MLOps, with limited local specialist help. Our experts cover NZST/NZDT hours and support live work, production incidents, interviews, and Auckland-market profile positioning.',
  'Yes. Auckland AI/ML roles span banking, SaaS, and enterprise. We cover NZ hours directly and position profiles for Auckland recruiter searches.');

export const wellingtonAiMlJobSupport = cityPage(NEW_ZEALAND,
  'wellington-ai-ml-job-support', 'Wellington', 'government, SaaS, and public sector',
  'On an AI/ML project for a Wellington government or SaaS organization and stuck on a model, a GenAI feature, a production incident, or a Wellington interview?',
  'Wellington’s AI/ML demand centers on government, public sector, and SaaS, with emphasis on responsible AI. Our experts cover NZST/NZDT hours and support live work, production incidents, interviews, and Wellington-market profile positioning.',
  'Yes. Wellington AI/ML roles emphasize government and SaaS. We cover NZ hours directly and position profiles for Wellington recruiter searches.');

// ─── Gulf cities ─────────────────────────────────────────────────────────────

export const dubaiAiMlJobSupport = cityPage(UAE,
  'dubai-ai-ml-job-support', 'Dubai', 'banking, smart-city, and enterprise AI',
  'On an AI/ML project for a Dubai bank, smart-city program, or enterprise and stuck on a model, a GenAI feature, a production incident, or a Dubai interview?',
  'Dubai is investing heavily in AI across banking, smart-city, and enterprise programs. Our experts cover GST hours and support live work, production incidents, interviews, and Dubai-market profile positioning.',
  'Yes. Dubai AI/ML roles span banking, smart-city, and enterprise. We calibrate support to these environments and position profiles for Dubai recruiter searches.');

export const abuDhabiAiMlJobSupport = cityPage(UAE,
  'abu-dhabi-ai-ml-job-support', 'Abu Dhabi', 'government, energy, and sovereign AI',
  'On an AI/ML project for an Abu Dhabi government, energy, or sovereign-AI program and stuck on a model, a GenAI feature, a production incident, or an interview?',
  'Abu Dhabi is home to major government, energy, and sovereign AI initiatives with large-scale GenAI ambitions. Our experts cover GST hours and support live work, production incidents, interviews, and Abu Dhabi-market profile positioning.',
  'Yes. Abu Dhabi AI/ML roles center on government, energy, and sovereign AI. We calibrate support to these environments and position profiles for Abu Dhabi recruiter searches.');

export const riyadhAiMlJobSupport = cityPage(SAUDI,
  'riyadh-ai-ml-job-support', 'Riyadh', 'government, banking, and Vision 2030 programs',
  'On an AI/ML project for a Riyadh government, banking, or Vision 2030 program and stuck on a model, a GenAI feature, a production incident, or a Riyadh interview?',
  'Riyadh anchors Saudi Arabia’s AI ambitions — government, banking, and Vision 2030 giga-projects investing heavily in GenAI and MLOps. Our experts cover AST hours and support live work, production incidents, interviews, and Riyadh-market profile positioning.',
  'Yes. Riyadh AI/ML roles tie to government, banking, and Vision 2030. We calibrate support to these environments and position profiles for Riyadh recruiter searches.');

export const jeddahAiMlJobSupport = cityPage(SAUDI,
  'jeddah-ai-ml-job-support', 'Jeddah', 'trade, logistics, and enterprise',
  'On an AI/ML project for a Jeddah trade, logistics, or enterprise company and stuck on a model, a GenAI feature, a production incident, or a Jeddah interview?',
  'Jeddah’s AI/ML demand spans trade, logistics, and enterprise operations, growing alongside national AI programs. Our experts cover AST hours and support live work, production incidents, interviews, and Jeddah-market profile positioning.',
  'Yes. Jeddah AI/ML roles span trade, logistics, and enterprise. We calibrate support to these domains and position profiles for Jeddah recruiter searches.');

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlIntlCityPages: LandingPageConfig[] = [
  // Canada
  torontoAiMlJobSupport, vancouverAiMlJobSupport, calgaryAiMlJobSupport, montrealAiMlJobSupport, ottawaAiMlJobSupport,
  // UK
  londonAiMlJobSupport, manchesterAiMlJobSupport, birminghamAiMlJobSupport,
  // Ireland
  dublinAiMlJobSupport, corkAiMlJobSupport,
  // Europe
  berlinAiMlJobSupport, munichAiMlJobSupport, frankfurtAiMlJobSupport, hamburgAiMlJobSupport,
  amsterdamAiMlJobSupport, rotterdamAiMlJobSupport, parisAiMlJobSupport, stockholmAiMlJobSupport,
  zurichAiMlJobSupport, genevaAiMlJobSupport,
  // Australia & NZ
  sydneyAiMlJobSupport, melbourneAiMlJobSupport, brisbaneAiMlJobSupport, perthAiMlJobSupport,
  aucklandAiMlJobSupport, wellingtonAiMlJobSupport,
  // Gulf
  dubaiAiMlJobSupport, abuDhabiAiMlJobSupport, riyadhAiMlJobSupport, jeddahAiMlJobSupport,
];
