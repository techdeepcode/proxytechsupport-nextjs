import type { LandingPageConfig, LandingRelatedLink, LandingFaqItem } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  jobSupportHighlights,
  jobFaqs,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
} from './shared';

// ─── Phase 2: Country AI/ML job-support hubs ────────────────────────────────

interface CountryInput {
  slug: string;
  country: string;
  demonym: string;
  title: string;
  description: string;
  keywords: string[];
  heroEyebrow: string;
  painIntro: string;
  heroVariant: string;
  geoLine: string;
  timezoneNote: string;
  marketFaq: LandingFaqItem;
  useCases: string[];
  cityLinks: LandingRelatedLink[];
  interviewLink: LandingRelatedLink;
  marketingLink: LandingRelatedLink;
  techLinks: LandingRelatedLink[];
}

function buildCountryPage(i: CountryInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: i.title,
    description: i.description,
    keywords: i.keywords,
    h1: `AI/ML Job Support in ${i.country} — Real-Time Expert Help for AI, GenAI, LLM & MLOps`,
    tagline: `Real-time AI/ML job support, production help, interview assistance, and candidate marketing for ${i.demonym} AI, ML, GenAI, LLM, RAG, and MLOps professionals.`,
    heroEyebrow: i.heroEyebrow,
    painIntro: i.painIntro,
    heroVariant: i.heroVariant,
    geoLine: i.geoLine,
    timezoneNote: i.timezoneNote,
    techSnippet:
      'Coverage across GenAI, LLMs, RAG, agentic AI, classical ML, deep learning, NLP, computer vision, data science, MLOps, and cloud AI on AWS, Azure, and GCP.',
    highlights: jobSupportHighlights,
    faqs: [...jobFaqs(`professionals in ${i.country}`, 'their live AI/ML projects during local business hours'), i.marketFaq],
    useCasesSection: {
      title: `AI/ML Situations We Help ${i.demonym} Professionals Resolve`,
      cases: i.useCases,
    },
    proxySection: {
      title: `AI/ML Interview & Candidate Marketing in ${i.country}`,
      intro: `Landing and keeping AI/ML roles in ${i.country} takes interview readiness and a profile recruiters find. We provide live proxy interview support for ${i.demonym} AI/ML interviews and candidate marketing to generate the calls — GenAI, LLM, RAG, MLOps, and data science roles.`,
      points: [
        `Live, discreet guidance during ${i.demonym} AI Engineer, ML Engineer, GenAI, and MLOps interviews`,
        'Calibrated mock interviews for coding, ML system design, and GenAI/RAG architecture rounds',
        `Profile positioning for the ${i.country} AI/ML market — keywords, titles, and expectations that surface with local recruiters`,
        'Active candidate marketing and recruiter outreach to build a real interview pipeline',
        'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
      ],
    },
    bottomCTAHeading: `Need AI/ML Job Support in ${i.country}? Talk to ProxyTechSupport Now`,
    bottomCTABody: `In-house AI, GenAI, LLM, RAG, and MLOps experts available same-day for ${i.demonym} professionals — project support, production fixes, live interview guidance, or profile positioning. Contact us on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, i.cityLinks[0] ?? HUB_LINK],
      techLinks: i.techLinks.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: i.interviewLink,
      additionalLinks: [
        ...i.cityLinks,
        ...i.techLinks.slice(2),
        i.interviewLink,
        i.marketingLink,
        { label: 'AI Engineer job support', href: '/ai-engineer-job-support/' },
        { label: 'ML Engineer job support', href: '/machine-learning-engineer-job-support/' },
        { label: 'MLOps Engineer job support', href: '/mlops-engineer-job-support/' },
        HUB_LINK,
        PRODUCTION_LINK,
        EXISTING.aimlGuide,
        EXISTING.mlopsGuide,
      ],
    }),
  });
}

const commonTech = (): LandingRelatedLink[] => [
  { label: 'Python AI/ML job support', href: '/python-ai-ml-job-support/' },
  { label: 'LLM job support', href: '/llm-job-support/' },
  { label: 'RAG job support', href: '/rag-job-support/' },
  { label: 'Generative AI job support', href: '/generative-ai-job-support/' },
  { label: 'MLOps job support', href: '/mlops-job-support/' },
];

export const usaAiMlJobSupport = buildCountryPage({
  slug: 'usa-ai-ml-job-support',
  country: 'the USA',
  demonym: 'US',
  title: 'AI/ML Job Support USA — Real-Time GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in the USA — GenAI, LLM, RAG, MLOps, and data science. Production fixes, interview support, and candidate marketing across US time zones. Same-day help.',
  keywords: ['AI ML job support USA', 'GenAI job support USA', 'LLM job support USA', 'MLOps job support USA', 'machine learning job support USA', 'AI engineer support USA'],
  heroEyebrow: 'AI/ML Job Support USA — 2026',
  painIntro:
    'Working on an AI/ML project for a US employer or client and hitting walls — a model that will not ship, a RAG demo that fails, a production endpoint on fire, or an interview at a top US company you are not ready for?',
  heroVariant:
    'The US AI/ML market moves fast — FAANG and product companies, AI-native startups, and enterprises across finance, healthcare, and retail all expect production-grade GenAI, LLM, and MLOps delivery. Our in-house experts join your working hours across EST, CST, MST, and PST and help with real tickets, production incidents, live interviews, and profile positioning for the US market.',
  geoLine: 'Supporting AI/ML professionals across New York, San Francisco, Seattle, Boston, Austin, Dallas, and every US time zone.',
  timezoneNote: 'Available across EST, CST, MST, and PST US business hours.',
  marketFaq: {
    question: 'Do you understand the US AI/ML job market and interview bar?',
    answer:
      'Yes. We support candidates and employees targeting US roles — FAANG-style bar-raiser loops, AI-native startups, and enterprise teams. We calibrate job support and interview prep to US expectations for GenAI, LLM, RAG, MLOps, and data science, and position profiles for US recruiter searches.',
  },
  useCases: [
    'A GenAI feature due for a US product launch that is not production-ready',
    'A RAG assistant that hallucinates in front of US stakeholders or customers',
    'An inference service failing SLAs or blowing the cloud budget for a US team',
    'A FAANG or top-startup AI/ML interview loop in a few days',
    'Onboarding onto a US client’s ML platform with an unfamiliar stack',
    'A strong engineer getting no calls from US recruiters despite real AI/ML experience',
  ],
  cityLinks: [
    { label: 'AI/ML job support New York', href: '/new-york-ai-ml-job-support/' },
    { label: 'AI/ML job support San Francisco', href: '/san-francisco-ai-ml-job-support/' },
    { label: 'AI/ML job support San Jose', href: '/san-jose-ai-ml-job-support/' },
    { label: 'AI/ML job support Seattle', href: '/seattle-ai-ml-job-support/' },
    { label: 'AI/ML job support Boston', href: '/boston-ai-ml-job-support/' },
    { label: 'AI/ML job support Dallas', href: '/dallas-ai-ml-job-support/' },
    { label: 'AI/ML job support Austin', href: '/austin-ai-ml-job-support/' },
    { label: 'AI/ML job support Chicago', href: '/chicago-ai-ml-job-support/' },
    { label: 'AI/ML job support Atlanta', href: '/atlanta-ai-ml-job-support/' },
    { label: 'AI/ML job support Houston', href: '/houston-ai-ml-job-support/' },
    { label: 'AI/ML job support Los Angeles', href: '/los-angeles-ai-ml-job-support/' },
    { label: 'AI/ML job support Washington DC', href: '/washington-dc-ai-ml-job-support/' },
    { label: 'AI/ML job support Jersey City', href: '/jersey-city-ai-ml-job-support/' },
    { label: 'AI/ML job support Charlotte', href: '/charlotte-ai-ml-job-support/' },
    { label: 'AI/ML job support Phoenix', href: '/phoenix-ai-ml-job-support/' },
    { label: 'AI/ML job support Tampa', href: '/tampa-ai-ml-job-support/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy USA', href: '/ai-ml-interview-proxy-support-usa/' },
  marketingLink: { label: 'AI/ML candidate marketing USA', href: '/ai-ml-candidate-marketing-usa/' },
  techLinks: commonTech(),
});

export const canadaAiMlJobSupport = buildCountryPage({
  slug: 'canada-ai-ml-job-support',
  country: 'Canada',
  demonym: 'Canadian',
  title: 'AI/ML Job Support Canada — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in Canada — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Toronto, Vancouver & beyond.',
  keywords: ['AI ML job support Canada', 'GenAI job support Canada', 'MLOps job support Canada', 'machine learning job support Canada', 'AI engineer support Toronto', 'LLM job support Canada'],
  heroEyebrow: 'AI/ML Job Support Canada — 2026',
  painIntro:
    'On an AI/ML project for a Canadian employer and stuck — a model underperforming, a GenAI feature slipping, a production issue you cannot crack, or a Canadian AI/ML interview you need to clear?',
  heroVariant:
    'Canada’s AI ecosystem — Toronto, Vancouver, Montreal, and Waterloo — spans research-heavy labs, AI startups, banks, and enterprises. Employers expect solid ML fundamentals plus modern GenAI and MLOps delivery. Our in-house experts align to Canadian business hours and help with live project work, production incidents, interviews, and profile positioning for the Canadian market.',
  geoLine: 'Supporting AI/ML professionals across Toronto, Vancouver, Montreal, Calgary, Ottawa, and all Canadian time zones.',
  timezoneNote: 'Available across Eastern, Central, Mountain, and Pacific Canadian business hours.',
  marketFaq: {
    question: 'Do you support the Canadian AI/ML market specifically?',
    answer:
      'Yes. We support AI/ML professionals across Toronto, Vancouver, Montreal, Calgary, and Ottawa, and connect with our existing Canada support cluster. We calibrate interview prep and profile positioning to Canadian recruiter expectations and the local AI/ML job market.',
  },
  useCases: [
    'A GenAI or ML feature slipping before a Canadian client milestone',
    'A RAG or NLP pipeline returning poor results for a Canadian enterprise dataset',
    'A production model incident during Canadian business hours needing an expert on the call',
    'A Canadian AI/ML interview — bank, startup, or product company — coming up soon',
    'Onboarding onto a Canadian employer’s ML platform and codebase',
    'No recruiter calls in Canada despite strong AI/ML skills — a profile positioning gap',
  ],
  cityLinks: [
    { label: 'AI/ML job support Toronto', href: '/toronto-ai-ml-job-support/' },
    { label: 'AI/ML job support Vancouver', href: '/vancouver-ai-ml-job-support/' },
    { label: 'AI/ML job support Montreal', href: '/montreal-ai-ml-job-support/' },
    { label: 'AI/ML job support Calgary', href: '/calgary-ai-ml-job-support/' },
    { label: 'AI/ML job support Ottawa', href: '/ottawa-ai-ml-job-support/' },
    { label: 'AI/ML job support Canada (existing)', href: '/ai-ml-job-support-canada/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy Canada', href: '/ai-ml-interview-proxy-support-canada/' },
  marketingLink: { label: 'AI/ML candidate marketing Canada', href: '/ai-ml-candidate-marketing-canada/' },
  techLinks: commonTech(),
});

export const ukAiMlJobSupport = buildCountryPage({
  slug: 'uk-ai-ml-job-support',
  country: 'the UK',
  demonym: 'UK',
  title: 'AI/ML Job Support UK — GenAI, LLM & MLOps Expert Help',
  description:
    'Real-time AI/ML job support in the UK — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across London, Manchester & beyond.',
  keywords: ['AI ML job support UK', 'GenAI job support UK', 'MLOps job support UK', 'machine learning job support London', 'AI engineer support UK', 'LLM job support UK'],
  heroEyebrow: 'AI/ML Job Support UK — 2026',
  painIntro:
    'On an AI/ML project for a UK employer or client and hitting a wall — a model not delivering, a GenAI feature at risk, a production incident, or a UK AI/ML interview you must clear?',
  heroVariant:
    'The UK AI/ML market — London fintech and banking, AI startups, healthcare, and consultancies — expects production-grade delivery and strong communication. Our in-house experts align to GMT/BST business hours and help with live project work, production incidents, interviews, and profile positioning for the UK market.',
  geoLine: 'Supporting AI/ML professionals across London, Manchester, Birmingham, Edinburgh, and the UK.',
  timezoneNote: 'Available across GMT/BST UK business hours.',
  marketFaq: {
    question: 'Do you cover the UK AI/ML market and IR35 contract context?',
    answer:
      'Yes. We support both permanent and contract AI/ML professionals in the UK, and understand the London-heavy market across fintech, banking, healthcare, and startups. We calibrate interview prep and profile positioning to UK recruiter expectations for GenAI, LLM, and MLOps roles.',
  },
  useCases: [
    'A GenAI feature at risk before a UK client or product deadline',
    'A RAG assistant giving wrong answers on a UK enterprise knowledge base',
    'A production ML incident during UK business hours needing immediate help',
    'A UK AI/ML interview — bank, fintech, or product company — coming up',
    'Onboarding onto a UK employer’s ML or LLM platform',
    'No calls from UK recruiters despite real AI/ML experience',
  ],
  cityLinks: [
    { label: 'AI/ML job support London', href: '/london-ai-ml-job-support/' },
    { label: 'AI/ML job support Manchester', href: '/manchester-ai-ml-job-support/' },
    { label: 'AI/ML job support Birmingham', href: '/birmingham-ai-ml-job-support/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy UK', href: '/ai-ml-interview-proxy-support-uk/' },
  marketingLink: { label: 'AI/ML candidate marketing UK', href: '/ai-ml-candidate-marketing-uk/' },
  techLinks: commonTech(),
});

export const irelandAiMlJobSupport = buildCountryPage({
  slug: 'ireland-ai-ml-job-support',
  country: 'Ireland',
  demonym: 'Irish',
  title: 'AI/ML Job Support Ireland — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in Ireland — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Dublin, Cork & beyond.',
  keywords: ['AI ML job support Ireland', 'GenAI job support Dublin', 'MLOps job support Ireland', 'machine learning job support Ireland', 'AI engineer support Dublin', 'LLM job support Ireland'],
  heroEyebrow: 'AI/ML Job Support Ireland — 2026',
  painIntro:
    'On an AI/ML project for an Irish employer or a Dublin-based multinational and stuck on a model, a GenAI feature, a production issue, or an upcoming AI/ML interview?',
  heroVariant:
    'Ireland hosts the European bases of major US tech and pharma companies, plus a growing AI startup scene in Dublin and Cork. Teams expect production-grade GenAI and MLOps work. Our in-house experts align to Irish/GMT hours and support live project work, production incidents, interviews, and profile positioning — connecting with our existing Ireland support cluster.',
  geoLine: 'Supporting AI/ML professionals across Dublin, Cork, Galway, Limerick, and Ireland.',
  timezoneNote: 'Available across Irish Standard Time / GMT business hours.',
  marketFaq: {
    question: 'Do you support AI/ML roles at Dublin multinationals?',
    answer:
      'Yes. Many Irish AI/ML roles sit inside the European HQs of large US tech and pharma companies, alongside local startups. We calibrate support and interview prep to these environments and link with our existing Ireland IT support guides.',
  },
  useCases: [
    'A GenAI feature at a Dublin multinational slipping before a release',
    'A RAG pipeline underperforming on a European enterprise dataset',
    'A production ML incident during Irish business hours',
    'An AI/ML interview at a Dublin tech or pharma company coming up',
    'Onboarding onto an Irish employer’s ML or data platform',
    'No recruiter calls in Ireland despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Dublin', href: '/dublin-ai-ml-job-support/' },
    { label: 'AI/ML job support Cork', href: '/cork-ai-ml-job-support/' },
    { label: 'Ireland AI/ML DevOps SRE support', href: '/ai-ml-devops-sre-job-support-ireland/' },
  ],
  interviewLink: EXISTING.aimlProxy,
  marketingLink: { label: 'AI/ML candidate marketing Ireland', href: '/ai-ml-candidate-marketing-ireland/' },
  techLinks: commonTech(),
});

export const germanyAiMlJobSupport = buildCountryPage({
  slug: 'germany-ai-ml-job-support',
  country: 'Germany',
  demonym: 'German',
  title: 'AI/ML Job Support Germany — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in Germany — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Berlin, Munich, Frankfurt & beyond.',
  keywords: ['AI ML job support Germany', 'GenAI job support Berlin', 'MLOps job support Germany', 'machine learning job support Munich', 'AI engineer support Germany', 'LLM job support Germany'],
  heroEyebrow: 'AI/ML Job Support Germany — 2026',
  painIntro:
    'Working on an AI/ML project for a German employer — automotive, manufacturing, or a Berlin startup — and stuck on a model, a GenAI feature, a production issue, or an interview?',
  heroVariant:
    'Germany’s AI/ML demand spans automotive and Industry 4.0, manufacturing, enterprise software, and the Berlin startup scene. Teams value rigor, data protection, and production reliability. Our in-house experts align to CET business hours and support live project work, production incidents, interviews, and profile positioning — linking with our existing Germany AI/ML data guide.',
  geoLine: 'Supporting AI/ML professionals across Berlin, Munich, Frankfurt, Hamburg, Stuttgart, and Germany.',
  timezoneNote: 'Available across CET/CEST German business hours.',
  marketFaq: {
    question: 'Do you support German AI/ML roles including data protection expectations?',
    answer:
      'Yes. German AI/ML work often involves strict data governance and reliability requirements, especially in automotive, manufacturing, and enterprise settings. We support both the engineering and the compliance-aware delivery, and connect with our existing Germany AI/ML data support guide.',
  },
  useCases: [
    'An ML model for an automotive or manufacturing use case not meeting accuracy targets',
    'A GenAI feature for a German enterprise slipping before a milestone',
    'A production ML pipeline incident during German business hours',
    'An AI/ML interview at a German enterprise or Berlin startup coming up',
    'Onboarding onto a German employer’s ML platform with strict data governance',
    'No recruiter calls in Germany despite strong AI/ML experience',
  ],
  cityLinks: [
    { label: 'AI/ML job support Berlin', href: '/berlin-ai-ml-job-support/' },
    { label: 'AI/ML job support Munich', href: '/munich-ai-ml-job-support/' },
    { label: 'AI/ML job support Frankfurt', href: '/frankfurt-ai-ml-job-support/' },
    { label: 'AI/ML job support Hamburg', href: '/hamburg-ai-ml-job-support/' },
    EXISTING.germanyGuide,
  ],
  interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
  marketingLink: { label: 'AI/ML candidate marketing Germany', href: '/ai-ml-candidate-marketing-germany/' },
  techLinks: commonTech(),
});

export const netherlandsAiMlJobSupport = buildCountryPage({
  slug: 'netherlands-ai-ml-job-support',
  country: 'the Netherlands',
  demonym: 'Dutch',
  title: 'AI/ML Job Support Netherlands — GenAI & MLOps Help',
  description:
    'Real-time AI/ML job support in the Netherlands — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Amsterdam, Rotterdam & beyond.',
  keywords: ['AI ML job support Netherlands', 'GenAI job support Amsterdam', 'MLOps job support Netherlands', 'machine learning job support Amsterdam', 'AI engineer support Netherlands', 'LLM job support Netherlands'],
  heroEyebrow: 'AI/ML Job Support Netherlands — 2026',
  painIntro:
    'On an AI/ML project for a Dutch employer or an Amsterdam scale-up and stuck on a model, a GenAI feature, a production issue, or an AI/ML interview?',
  heroVariant:
    'The Netherlands has a strong AI ecosystem — Amsterdam scale-ups, fintech, logistics, and enterprise data teams. Teams expect clean engineering and production reliability. Our in-house experts align to CET business hours and support live project work, production incidents, interviews, and profile positioning for the Dutch market.',
  geoLine: 'Supporting AI/ML professionals across Amsterdam, Rotterdam, Utrecht, Eindhoven, and the Netherlands.',
  timezoneNote: 'Available across CET/CEST Dutch business hours.',
  marketFaq: {
    question: 'Do you support the Dutch AI/ML market?',
    answer:
      'Yes. We support AI/ML professionals across Amsterdam, Rotterdam, and Utrecht — fintech, logistics, and enterprise data teams — and calibrate interview prep and profile positioning to Dutch recruiter expectations.',
  },
  useCases: [
    'A GenAI or ML feature slipping before a Dutch client deadline',
    'A RAG or forecasting model underperforming for a logistics or fintech use case',
    'A production ML incident during Dutch business hours',
    'An AI/ML interview at an Amsterdam scale-up or enterprise coming up',
    'Onboarding onto a Dutch employer’s ML platform',
    'No recruiter calls in the Netherlands despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Amsterdam', href: '/amsterdam-ai-ml-job-support/' },
    { label: 'AI/ML job support Rotterdam', href: '/rotterdam-ai-ml-job-support/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
  marketingLink: { label: 'AI/ML candidate marketing Europe', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const franceAiMlJobSupport = buildCountryPage({
  slug: 'france-ai-ml-job-support',
  country: 'France',
  demonym: 'French',
  title: 'AI/ML Job Support France — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in France — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Paris, Lyon & beyond.',
  keywords: ['AI ML job support France', 'GenAI job support Paris', 'MLOps job support France', 'machine learning job support Paris', 'AI engineer support France', 'LLM job support France'],
  heroEyebrow: 'AI/ML Job Support France — 2026',
  painIntro:
    'On an AI/ML project for a French employer or a Paris AI company and stuck on a model, a GenAI feature, a production issue, or an AI/ML interview?',
  heroVariant:
    'France has a deep AI research and startup scene — Paris is a European AI hub with strong LLM and GenAI activity, alongside enterprise and luxury/retail data teams. Our in-house experts align to CET business hours and support live project work, production incidents, interviews, and profile positioning for the French market.',
  geoLine: 'Supporting AI/ML professionals across Paris, Lyon, Toulouse, Sophia Antipolis, and France.',
  timezoneNote: 'Available across CET/CEST French business hours.',
  marketFaq: {
    question: 'Do you support the French AI/ML market?',
    answer:
      'Yes. We support AI/ML professionals across Paris and beyond — from LLM/GenAI startups to enterprise data teams — and calibrate interview prep and profile positioning to French recruiter expectations.',
  },
  useCases: [
    'A GenAI or LLM feature slipping before a French client or product deadline',
    'A RAG assistant underperforming on French-language enterprise content',
    'A production ML incident during French business hours',
    'An AI/ML interview at a Paris AI company or enterprise coming up',
    'Onboarding onto a French employer’s ML or LLM platform',
    'No recruiter calls in France despite strong AI/ML skills',
  ],
  cityLinks: [{ label: 'AI/ML job support Paris', href: '/paris-ai-ml-job-support/' }],
  interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
  marketingLink: { label: 'AI/ML candidate marketing Europe', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const swedenAiMlJobSupport = buildCountryPage({
  slug: 'sweden-ai-ml-job-support',
  country: 'Sweden',
  demonym: 'Swedish',
  title: 'AI/ML Job Support Sweden — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in Sweden — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Stockholm & beyond.',
  keywords: ['AI ML job support Sweden', 'GenAI job support Stockholm', 'MLOps job support Sweden', 'machine learning job support Stockholm', 'AI engineer support Sweden', 'LLM job support Sweden'],
  heroEyebrow: 'AI/ML Job Support Sweden — 2026',
  painIntro:
    'On an AI/ML project for a Swedish employer or a Stockholm tech company and stuck on a model, a GenAI feature, a production issue, or an AI/ML interview?',
  heroVariant:
    'Sweden’s AI scene centers on Stockholm — fintech, gaming, music/streaming, and enterprise data teams with high engineering standards. Our in-house experts align to CET business hours and support live project work, production incidents, interviews, and profile positioning for the Swedish market.',
  geoLine: 'Supporting AI/ML professionals across Stockholm, Gothenburg, Malmö, and Sweden.',
  timezoneNote: 'Available across CET/CEST Swedish business hours.',
  marketFaq: {
    question: 'Do you support the Swedish AI/ML market?',
    answer:
      'Yes. We support AI/ML professionals across Stockholm and beyond — fintech, gaming, and enterprise data teams — and calibrate interview prep and profile positioning to Swedish recruiter expectations.',
  },
  useCases: [
    'A GenAI or ML feature slipping before a Swedish client deadline',
    'A recommendation or ranking model underperforming for a Stockholm product',
    'A production ML incident during Swedish business hours',
    'An AI/ML interview at a Stockholm tech company coming up',
    'Onboarding onto a Swedish employer’s ML platform',
    'No recruiter calls in Sweden despite strong AI/ML skills',
  ],
  cityLinks: [{ label: 'AI/ML job support Stockholm', href: '/stockholm-ai-ml-job-support/' }],
  interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
  marketingLink: { label: 'AI/ML candidate marketing Europe', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const switzerlandAiMlJobSupport = buildCountryPage({
  slug: 'switzerland-ai-ml-job-support',
  country: 'Switzerland',
  demonym: 'Swiss',
  title: 'AI/ML Job Support Switzerland — GenAI & MLOps Help',
  description:
    'Real-time AI/ML job support in Switzerland — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Zurich, Geneva & beyond.',
  keywords: ['AI ML job support Switzerland', 'GenAI job support Zurich', 'MLOps job support Switzerland', 'machine learning job support Zurich', 'AI engineer support Geneva', 'LLM job support Switzerland'],
  heroEyebrow: 'AI/ML Job Support Switzerland — 2026',
  painIntro:
    'On an AI/ML project for a Swiss employer — banking, pharma, or a Zurich tech company — and stuck on a model, a GenAI feature, a production issue, or an interview?',
  heroVariant:
    'Switzerland combines top research (ETH Zurich, EPFL) with banking, pharma, and enterprise AI demand in Zurich and Geneva. Standards are high and data governance is strict. Our in-house experts align to CET business hours and support live project work, production incidents, interviews, and profile positioning for the Swiss market.',
  geoLine: 'Supporting AI/ML professionals across Zurich, Geneva, Basel, Lausanne, and Switzerland.',
  timezoneNote: 'Available across CET/CEST Swiss business hours.',
  marketFaq: {
    question: 'Do you support Swiss AI/ML roles in banking and pharma?',
    answer:
      'Yes. Swiss AI/ML work is often in banking, pharma, and research settings with strict governance. We support the engineering and compliance-aware delivery, and calibrate interview prep and profile positioning to Swiss recruiter expectations.',
  },
  useCases: [
    'An ML model for a Swiss bank or pharma use case not meeting targets',
    'A GenAI feature for a Swiss enterprise slipping before a milestone',
    'A production ML incident during Swiss business hours',
    'An AI/ML interview at a Zurich or Geneva company coming up',
    'Onboarding onto a Swiss employer’s ML platform with strict governance',
    'No recruiter calls in Switzerland despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Zurich', href: '/zurich-ai-ml-job-support/' },
    { label: 'AI/ML job support Geneva', href: '/geneva-ai-ml-job-support/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
  marketingLink: { label: 'AI/ML candidate marketing Europe', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const australiaAiMlJobSupport = buildCountryPage({
  slug: 'australia-ai-ml-job-support',
  country: 'Australia',
  demonym: 'Australian',
  title: 'AI/ML Job Support Australia — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in Australia — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Sydney, Melbourne & beyond.',
  keywords: ['AI ML job support Australia', 'GenAI job support Sydney', 'MLOps job support Australia', 'machine learning job support Melbourne', 'AI engineer support Australia', 'LLM job support Australia'],
  heroEyebrow: 'AI/ML Job Support Australia — 2026',
  painIntro:
    'On an AI/ML project for an Australian employer and stuck on a model, a GenAI feature, a production issue, or an Australian AI/ML interview — with the timezone gap making help hard to find?',
  heroVariant:
    'Australia’s AI/ML demand spans banking, mining/resources, retail, and government, concentrated in Sydney and Melbourne. Our in-house experts cover AEST/AEDT business hours directly — no waiting for another region to wake up — and support live project work, production incidents, interviews, and profile positioning for the Australian market.',
  geoLine: 'Supporting AI/ML professionals across Sydney, Melbourne, Brisbane, Perth, and Australia.',
  timezoneNote: 'Available across AEST/AEDT and Australian Western business hours.',
  marketFaq: {
    question: 'Do you genuinely cover Australian business hours?',
    answer:
      'Yes. We provide AI/ML support directly across AEST/AEDT and Perth hours, so you are not stuck waiting for another timezone. We calibrate interview prep and profile positioning to the Australian AI/ML market — banking, resources, retail, and government.',
  },
  useCases: [
    'A GenAI or ML feature slipping before an Australian client deadline',
    'A RAG or forecasting model underperforming for a bank or resources use case',
    'A production ML incident during Australian business hours',
    'An Australian AI/ML interview — bank, product, or government — coming up',
    'Onboarding onto an Australian employer’s ML platform',
    'No recruiter calls in Australia despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Sydney', href: '/sydney-ai-ml-job-support/' },
    { label: 'AI/ML job support Melbourne', href: '/melbourne-ai-ml-job-support/' },
    { label: 'AI/ML job support Brisbane', href: '/brisbane-ai-ml-job-support/' },
    { label: 'AI/ML job support Perth', href: '/perth-ai-ml-job-support/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy Australia', href: '/ai-ml-interview-proxy-support-australia/' },
  marketingLink: { label: 'AI/ML candidate marketing Australia', href: '/ai-ml-candidate-marketing-australia/' },
  techLinks: commonTech(),
});

export const newZealandAiMlJobSupport = buildCountryPage({
  slug: 'new-zealand-ai-ml-job-support',
  country: 'New Zealand',
  demonym: 'New Zealand',
  title: 'AI/ML Job Support New Zealand — GenAI & MLOps Help',
  description:
    'Real-time AI/ML job support in New Zealand — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Auckland, Wellington & beyond.',
  keywords: ['AI ML job support New Zealand', 'GenAI job support Auckland', 'MLOps job support New Zealand', 'machine learning job support Wellington', 'AI engineer support NZ', 'LLM job support New Zealand'],
  heroEyebrow: 'AI/ML Job Support New Zealand — 2026',
  painIntro:
    'On an AI/ML project for a New Zealand employer and stuck on a model, a GenAI feature, a production issue, or an AI/ML interview — with limited local specialist help available?',
  heroVariant:
    'New Zealand’s AI/ML demand centers on Auckland and Wellington — banking, government, agritech, and SaaS. Specialist help can be scarce locally. Our in-house experts cover NZST/NZDT business hours and support live project work, production incidents, interviews, and profile positioning for the NZ market.',
  geoLine: 'Supporting AI/ML professionals across Auckland, Wellington, Christchurch, and New Zealand.',
  timezoneNote: 'Available across NZST/NZDT New Zealand business hours.',
  marketFaq: {
    question: 'Do you support the New Zealand AI/ML market and hours?',
    answer:
      'Yes. We cover NZST/NZDT business hours directly and support AI/ML professionals across Auckland and Wellington — banking, government, agritech, and SaaS — with interview prep and profile positioning calibrated to the NZ market.',
  },
  useCases: [
    'A GenAI or ML feature slipping before an NZ client deadline',
    'A forecasting or NLP model underperforming for an NZ use case',
    'A production ML incident during New Zealand business hours',
    'An NZ AI/ML interview — bank, government, or SaaS — coming up',
    'Onboarding onto an NZ employer’s ML platform',
    'No recruiter calls in New Zealand despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Auckland', href: '/auckland-ai-ml-job-support/' },
    { label: 'AI/ML job support Wellington', href: '/wellington-ai-ml-job-support/' },
  ],
  interviewLink: { label: 'AI/ML interview proxy Australia', href: '/ai-ml-interview-proxy-support-australia/' },
  marketingLink: { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const singaporeAiMlJobSupport = buildCountryPage({
  slug: 'singapore-ai-ml-job-support',
  country: 'Singapore',
  demonym: 'Singapore',
  title: 'AI/ML Job Support Singapore — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in Singapore — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Singapore and APAC.',
  keywords: ['AI ML job support Singapore', 'GenAI job support Singapore', 'MLOps job support Singapore', 'machine learning job support Singapore', 'AI engineer support Singapore', 'LLM job support Singapore'],
  heroEyebrow: 'AI/ML Job Support Singapore — 2026',
  painIntro:
    'On an AI/ML project for a Singapore employer — bank, fintech, or a regional tech HQ — and stuck on a model, a GenAI feature, a production issue, or an interview?',
  heroVariant:
    'Singapore is APAC’s financial and AI hub — banks, fintech, e-commerce, and regional tech HQs invest heavily in GenAI and MLOps. Standards and hiring bars are high. Our in-house experts cover SGT business hours and support live project work, production incidents, interviews, and profile positioning for the Singapore market.',
  geoLine: 'Supporting AI/ML professionals across Singapore and the broader APAC region.',
  timezoneNote: 'Available across SGT and APAC business hours.',
  marketFaq: {
    question: 'Do you support Singapore’s banking and fintech AI/ML roles?',
    answer:
      'Yes. Much of Singapore’s AI/ML demand is in banking, fintech, and regional tech HQs with high hiring bars. We calibrate job support and interview prep to these environments and position profiles for the Singapore and APAC market.',
  },
  useCases: [
    'A GenAI feature at a Singapore bank or fintech slipping before launch',
    'A RAG or fraud/risk model underperforming for a financial use case',
    'A production ML incident during SGT business hours',
    'A Singapore AI/ML interview — bank, fintech, or big tech APAC — coming up',
    'Onboarding onto a Singapore employer’s ML platform',
    'No recruiter calls in Singapore despite strong AI/ML skills',
  ],
  cityLinks: [{ label: 'AI/ML job support Singapore (city)', href: '/singapore-ai-ml-job-support/' }],
  interviewLink: { label: 'AI/ML interview proxy Singapore', href: '/ai-ml-interview-proxy-support-singapore/' },
  marketingLink: { label: 'AI/ML candidate marketing Singapore', href: '/ai-ml-candidate-marketing-singapore/' },
  techLinks: commonTech(),
});

export const hongKongAiMlJobSupport = buildCountryPage({
  slug: 'hong-kong-ai-ml-job-support',
  country: 'Hong Kong',
  demonym: 'Hong Kong',
  title: 'AI/ML Job Support Hong Kong — GenAI & MLOps Help',
  description:
    'Real-time AI/ML job support in Hong Kong — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Hong Kong and APAC.',
  keywords: ['AI ML job support Hong Kong', 'GenAI job support Hong Kong', 'MLOps job support Hong Kong', 'machine learning job support Hong Kong', 'AI engineer support Hong Kong', 'LLM job support Hong Kong'],
  heroEyebrow: 'AI/ML Job Support Hong Kong — 2026',
  painIntro:
    'On an AI/ML project for a Hong Kong employer — bank, asset manager, or fintech — and stuck on a model, a GenAI feature, a production issue, or an interview?',
  heroVariant:
    'Hong Kong’s AI/ML demand is concentrated in banking, asset management, and fintech, with strong regional tech presence. Our in-house experts cover HKT business hours and support live project work, production incidents, interviews, and profile positioning for the Hong Kong market.',
  geoLine: 'Supporting AI/ML professionals across Hong Kong and the broader APAC region.',
  timezoneNote: 'Available across HKT and APAC business hours.',
  marketFaq: {
    question: 'Do you support Hong Kong finance AI/ML roles?',
    answer:
      'Yes. Hong Kong AI/ML work is heavily finance-oriented — banks, asset managers, and fintech. We calibrate job support and interview prep to these environments and position profiles for the Hong Kong and APAC market.',
  },
  useCases: [
    'A GenAI feature at a Hong Kong bank or asset manager slipping before launch',
    'A risk, fraud, or trading model underperforming for a financial use case',
    'A production ML incident during HKT business hours',
    'A Hong Kong AI/ML interview — bank or fintech — coming up',
    'Onboarding onto a Hong Kong employer’s ML platform',
    'No recruiter calls in Hong Kong despite strong AI/ML skills',
  ],
  cityLinks: [{ label: 'AI/ML job support Hong Kong (city)', href: '/hong-kong-ai-ml-job-support/' }],
  interviewLink: { label: 'AI/ML interview proxy Singapore', href: '/ai-ml-interview-proxy-support-singapore/' },
  marketingLink: { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const uaeAiMlJobSupport = buildCountryPage({
  slug: 'uae-ai-ml-job-support',
  country: 'the UAE',
  demonym: 'UAE',
  title: 'AI/ML Job Support UAE — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support in the UAE — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Dubai, Abu Dhabi & beyond.',
  keywords: ['AI ML job support UAE', 'GenAI job support Dubai', 'MLOps job support UAE', 'machine learning job support Dubai', 'AI engineer support Abu Dhabi', 'LLM job support UAE'],
  heroEyebrow: 'AI/ML Job Support UAE — 2026',
  painIntro:
    'On an AI/ML project for a UAE employer — government, banking, or a Dubai tech company — and stuck on a model, a GenAI feature, a production issue, or an interview?',
  heroVariant:
    'The UAE is investing heavily in AI across government, banking, energy, and smart-city initiatives in Dubai and Abu Dhabi. Demand for GenAI and MLOps talent is high. Our in-house experts cover GST business hours and support live project work, production incidents, interviews, and profile positioning for the UAE market.',
  geoLine: 'Supporting AI/ML professionals across Dubai, Abu Dhabi, Sharjah, and the UAE.',
  timezoneNote: 'Available across GST (Gulf Standard Time) business hours.',
  marketFaq: {
    question: 'Do you support the UAE AI/ML market?',
    answer:
      'Yes. The UAE’s AI push spans government, banking, energy, and smart-city programs in Dubai and Abu Dhabi. We calibrate job support and interview prep to these environments and position profiles for the UAE market.',
  },
  useCases: [
    'A GenAI feature for a UAE government or banking program slipping before launch',
    'A RAG or forecasting model underperforming for a UAE enterprise use case',
    'A production ML incident during Gulf business hours',
    'A UAE AI/ML interview — government, bank, or tech — coming up',
    'Onboarding onto a UAE employer’s ML platform',
    'No recruiter calls in the UAE despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Dubai', href: '/dubai-ai-ml-job-support/' },
    { label: 'AI/ML job support Abu Dhabi', href: '/abu-dhabi-ai-ml-job-support/' },
  ],
  interviewLink: EXISTING.aimlProxy,
  marketingLink: { label: 'AI/ML candidate marketing UAE', href: '/ai-ml-candidate-marketing-uae/' },
  techLinks: commonTech(),
});

export const saudiArabiaAiMlJobSupport = buildCountryPage({
  slug: 'saudi-arabia-ai-ml-job-support',
  country: 'Saudi Arabia',
  demonym: 'Saudi',
  title: 'AI/ML Job Support Saudi Arabia — GenAI & MLOps Help',
  description:
    'Real-time AI/ML job support in Saudi Arabia — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing across Riyadh, Jeddah & beyond.',
  keywords: ['AI ML job support Saudi Arabia', 'GenAI job support Riyadh', 'MLOps job support Saudi Arabia', 'machine learning job support Jeddah', 'AI engineer support Saudi', 'LLM job support Saudi Arabia'],
  heroEyebrow: 'AI/ML Job Support Saudi Arabia — 2026',
  painIntro:
    'On an AI/ML project for a Saudi employer — a Vision 2030 program, bank, or energy company — and stuck on a model, a GenAI feature, a production issue, or an interview?',
  heroVariant:
    'Saudi Arabia is investing at scale in AI under Vision 2030 — giga-projects, banking, energy, and government. Demand for GenAI and MLOps talent is surging in Riyadh and Jeddah. Our in-house experts cover AST business hours and support live project work, production incidents, interviews, and profile positioning for the Saudi market.',
  geoLine: 'Supporting AI/ML professionals across Riyadh, Jeddah, Dammam, NEOM, and Saudi Arabia.',
  timezoneNote: 'Available across AST (Arabia Standard Time) business hours.',
  marketFaq: {
    question: 'Do you support Saudi Vision 2030 AI/ML programs?',
    answer:
      'Yes. Much of Saudi Arabia’s AI/ML demand ties to Vision 2030 giga-projects, banking, energy, and government. We calibrate job support and interview prep to these environments and position profiles for the Saudi market.',
  },
  useCases: [
    'A GenAI feature for a Vision 2030 or banking program slipping before launch',
    'A forecasting or optimization model underperforming for an energy use case',
    'A production ML incident during Saudi business hours',
    'A Saudi AI/ML interview — giga-project, bank, or government — coming up',
    'Onboarding onto a Saudi employer’s ML platform',
    'No recruiter calls in Saudi Arabia despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Riyadh', href: '/riyadh-ai-ml-job-support/' },
    { label: 'AI/ML job support Jeddah', href: '/jeddah-ai-ml-job-support/' },
  ],
  interviewLink: EXISTING.aimlProxy,
  marketingLink: { label: 'AI/ML candidate marketing', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

export const europeAiMlJobSupport = buildCountryPage({
  slug: 'europe-ai-ml-job-support',
  country: 'Europe',
  demonym: 'European',
  title: 'AI/ML Job Support Europe — GenAI, LLM & MLOps Help',
  description:
    'Real-time AI/ML job support across Europe — GenAI, LLM, RAG, MLOps, and data science. Production help, interview support, and candidate marketing in every major European market.',
  keywords: ['AI ML job support Europe', 'GenAI job support Europe', 'MLOps job support Europe', 'machine learning job support Europe', 'AI engineer support Europe', 'LLM job support Europe'],
  heroEyebrow: 'AI/ML Job Support Europe — 2026',
  painIntro:
    'On an AI/ML project for a European employer and stuck on a model, a GenAI feature, a production issue, or an interview — needing help that understands EU data rules and CET hours?',
  heroVariant:
    'Europe’s AI/ML market spans Germany, Netherlands, France, Sweden, Switzerland, Ireland, and beyond — with strong data-protection expectations (GDPR, EU AI Act) and production rigor. Our in-house experts cover CET/GMT hours and support live project work, production incidents, interviews, and profile positioning across European markets, linking with our existing Europe AI/ML RAG MLOps guide.',
  geoLine: 'Supporting AI/ML professionals across Germany, the Netherlands, France, Sweden, Switzerland, Ireland, and all of Europe.',
  timezoneNote: 'Available across CET/CEST and GMT/BST European business hours.',
  marketFaq: {
    question: 'Do you account for GDPR and the EU AI Act?',
    answer:
      'Yes. European AI/ML work must respect GDPR and increasingly the EU AI Act. We support compliance-aware delivery — data handling, documentation, and governance — alongside the engineering, and connect with our existing Europe AI/ML RAG MLOps support guide.',
  },
  useCases: [
    'A GenAI feature for a European enterprise slipping before a milestone',
    'A RAG or NLP pipeline underperforming across multiple European languages',
    'A production ML incident during CET business hours',
    'A European AI/ML interview at an enterprise or scale-up coming up',
    'Onboarding onto a European employer’s ML platform with GDPR constraints',
    'No recruiter calls across Europe despite strong AI/ML skills',
  ],
  cityLinks: [
    { label: 'AI/ML job support Berlin', href: '/berlin-ai-ml-job-support/' },
    { label: 'AI/ML job support Amsterdam', href: '/amsterdam-ai-ml-job-support/' },
    { label: 'AI/ML job support Paris', href: '/paris-ai-ml-job-support/' },
    { label: 'AI/ML job support Zurich', href: '/zurich-ai-ml-job-support/' },
    EXISTING.europeGuide,
  ],
  interviewLink: { label: 'AI/ML interview proxy Europe', href: '/ai-ml-interview-proxy-support-europe/' },
  marketingLink: { label: 'AI/ML candidate marketing Europe', href: '/ai-ml-candidate-marketing/' },
  techLinks: commonTech(),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlCountryPages: LandingPageConfig[] = [
  usaAiMlJobSupport,
  canadaAiMlJobSupport,
  ukAiMlJobSupport,
  irelandAiMlJobSupport,
  germanyAiMlJobSupport,
  netherlandsAiMlJobSupport,
  franceAiMlJobSupport,
  swedenAiMlJobSupport,
  switzerlandAiMlJobSupport,
  australiaAiMlJobSupport,
  newZealandAiMlJobSupport,
  singaporeAiMlJobSupport,
  hongKongAiMlJobSupport,
  uaeAiMlJobSupport,
  saudiArabiaAiMlJobSupport,
  europeAiMlJobSupport,
];
