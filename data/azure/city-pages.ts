import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  jobSupportHighlights,
  azureJobFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AZUREML_HUB_LINK,
  OPENAI_SUPP_LINK,
  AGENT_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
  AZURE_INTERVIEW_HUB_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

interface City {
  slug: string;
  city: string;
  country: string;
  countrySlug: string;
  timezone: string;
  industries: string;
  local: string; // one-line local context for heroVariant
}

const cities: City[] = [
  { slug: 'new-york-azure-ai-proxy-job-support', city: 'New York', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Eastern', industries: 'investment banking, insurance, media, and enterprise SaaS', local: 'New York’s Azure AI demand is led by Wall Street banks, insurers, and media — heavy on secure Azure OpenAI, document RAG over financial and legal content, and compliance (private endpoints, data residency).' },
  { slug: 'san-francisco-azure-ai-proxy-job-support', city: 'San Francisco', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Pacific', industries: 'big tech, AI startups, SaaS, and fintech', local: 'The Bay Area sets the pace for GenAI — Foundry agents, RAG, and evaluation at product companies and startups, with high bars in system-design interviews.' },
  { slug: 'seattle-azure-ai-proxy-job-support', city: 'Seattle', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Pacific', industries: 'cloud, e-commerce, enterprise software, and aerospace', local: 'Seattle is a Microsoft and cloud heartland — deep Azure OpenAI, Foundry, and Azure ML work at big tech and enterprise software firms, with rigorous technical interviews.' },
  { slug: 'boston-azure-ai-proxy-job-support', city: 'Boston', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Eastern', industries: 'biotech, healthcare, robotics, and higher education', local: 'Boston’s Azure AI demand centers on biotech, healthcare, and robotics — document RAG over research and clinical content, PHI-aware architecture, and Azure ML.' },
  { slug: 'dallas-azure-ai-proxy-job-support', city: 'Dallas', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Central', industries: 'financial services, telecom, airlines, and enterprise IT', local: 'Dallas–Fort Worth hosts major banks, telecoms, and airlines — enterprise Azure OpenAI, RAG, and Azure ML with strong contract and full-time demand.' },
  { slug: 'austin-azure-ai-proxy-job-support', city: 'Austin', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Central', industries: 'tech, semiconductors, and startups', local: 'Austin’s growing tech scene drives Foundry agent and RAG work at product companies and startups, plus Azure ML at semiconductor and enterprise firms.' },
  { slug: 'chicago-azure-ai-proxy-job-support', city: 'Chicago', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Central', industries: 'finance/trading, insurance, manufacturing, and logistics', local: 'Chicago’s trading firms, insurers, and manufacturers drive secure Azure OpenAI, RAG, and Azure ML — with an emphasis on reliability and compliance.' },
  { slug: 'atlanta-azure-ai-proxy-job-support', city: 'Atlanta', country: 'USA', countrySlug: 'usa-azure-ai-proxy-job-support', timezone: 'US Eastern', industries: 'fintech/payments, logistics, telecom, and healthcare', local: 'Atlanta’s payments and logistics leaders drive Azure OpenAI and RAG for fraud, support, and document workflows, plus Azure ML at healthcare and telecom firms.' },
  { slug: 'toronto-azure-ai-proxy-job-support', city: 'Toronto', country: 'Canada', countrySlug: 'canada-azure-ai-proxy-job-support', timezone: 'US Eastern', industries: 'banking, insurance, and a strong AI research scene', local: 'Toronto’s Bay Street banks and insurers drive OSFI/PIPEDA-aligned Azure OpenAI in Canada Central, document RAG, and Azure ML, backed by a deep AI talent pool.' },
  { slug: 'vancouver-azure-ai-proxy-job-support', city: 'Vancouver', country: 'Canada', countrySlug: 'canada-azure-ai-proxy-job-support', timezone: 'US Pacific', industries: 'tech, gaming, film/VFX, and clean tech', local: 'Vancouver’s tech, gaming, and VFX studios drive Foundry agent and RAG work, with Azure ML across clean-tech and enterprise firms.' },
  { slug: 'london-azure-ai-proxy-job-support', city: 'London', country: 'UK', countrySlug: 'uk-azure-ai-proxy-job-support', timezone: 'GMT/BST', industries: 'banking, insurance, fintech, and consulting', local: 'London’s financial sector drives FCA/GDPR-aligned Azure OpenAI in UK South, document RAG, and Azure ML, with heavy contract (IR35) and consulting demand.' },
  { slug: 'manchester-azure-ai-proxy-job-support', city: 'Manchester', country: 'UK', countrySlug: 'uk-azure-ai-proxy-job-support', timezone: 'GMT/BST', industries: 'digital/media, e-commerce, and enterprise IT', local: 'Manchester’s growing digital and e-commerce scene drives Foundry agent and RAG work, plus Azure ML at enterprise and public-sector organizations.' },
  { slug: 'dublin-azure-ai-proxy-job-support', city: 'Dublin', country: 'Ireland', countrySlug: 'ireland-azure-ai-proxy-job-support', timezone: 'GMT/IST', industries: 'multinational tech, pharma, and financial services', local: 'Dublin hosts the North Europe region and multinational EMEA HQs — large GDPR-aligned Azure OpenAI, RAG, and Azure ML deployments across tech, pharma, and finance.' },
  { slug: 'berlin-azure-ai-proxy-job-support', city: 'Berlin', country: 'Germany', countrySlug: 'germany-azure-ai-proxy-job-support', timezone: 'CET/CEST', industries: 'startups, e-commerce, and enterprise tech', local: 'Berlin’s startup and e-commerce scene drives Foundry agent and RAG work with strong GDPR/data-residency focus, alongside Azure ML at enterprises.' },
  { slug: 'munich-azure-ai-proxy-job-support', city: 'Munich', country: 'Germany', countrySlug: 'germany-azure-ai-proxy-job-support', timezone: 'CET/CEST', industries: 'automotive, manufacturing, insurance, and enterprise tech', local: 'Munich’s automotive, manufacturing, and insurance leaders drive data-residency-aware Azure OpenAI and Azure ML in Germany West Central, with rigorous engineering standards.' },
  { slug: 'amsterdam-azure-ai-proxy-job-support', city: 'Amsterdam', country: 'Netherlands', countrySlug: 'netherlands-azure-ai-proxy-job-support', timezone: 'CET/CEST', industries: 'banking, logistics, and tech scale-ups', local: 'Amsterdam hosts the West Europe region — banks, logistics, and scale-ups drive GDPR-aligned Azure OpenAI, RAG, and Azure ML with English-fluent teams.' },
  { slug: 'paris-azure-ai-proxy-job-support', city: 'Paris', country: 'France', countrySlug: 'france-azure-ai-proxy-job-support', timezone: 'CET/CEST', industries: 'banking, luxury/retail, telecom, and aerospace', local: 'Paris drives sovereignty-aware Azure OpenAI in France Central, French-language RAG and agents, and Azure ML across banking, luxury, and aerospace.' },
  { slug: 'zurich-azure-ai-proxy-job-support', city: 'Zurich', country: 'Switzerland', countrySlug: 'switzerland-azure-ai-proxy-job-support', timezone: 'CET/CEST', industries: 'banking, wealth management, and insurance', local: 'Zurich’s banks and insurers demand Swiss-resident Azure OpenAI with strict confidentiality, document RAG, and Azure ML in Switzerland North.' },
  { slug: 'sydney-azure-ai-proxy-job-support', city: 'Sydney', country: 'Australia', countrySlug: 'australia-azure-ai-proxy-job-support', timezone: 'AEST/AEDT', industries: 'banking, government, and enterprise tech', local: 'Sydney’s banks and government drive APRA/IRAP-aligned Azure OpenAI in Australia East, RAG, and Azure ML, with strong APAC-hours demand.' },
  { slug: 'melbourne-azure-ai-proxy-job-support', city: 'Melbourne', country: 'Australia', countrySlug: 'australia-azure-ai-proxy-job-support', timezone: 'AEST/AEDT', industries: 'finance, retail, healthcare, and government', local: 'Melbourne’s finance, retail, and healthcare organizations drive Azure OpenAI, RAG, and Azure ML with data-residency and government-security awareness.' },
  { slug: 'dubai-azure-ai-proxy-job-support', city: 'Dubai', country: 'UAE', countrySlug: 'uae-azure-ai-proxy-job-support', timezone: 'GST', industries: 'government/smart city, banking, and energy', local: 'Dubai’s government, smart-city, and banking programs drive UAE-resident Azure OpenAI in UAE North, Arabic + English multilingual AI, and Azure ML.' },
];

export const azureCityPages: LandingPageConfig[] = cities.map((c) =>
  azurePage({
    slug: c.slug,
    title: `Azure AI Proxy Job Support in ${c.city} | Foundry, OpenAI & Azure ML`,
    description: `Azure AI proxy job support and proxy interview support in ${c.city}: Microsoft Foundry, Azure OpenAI, Foundry agents, Azure AI Search RAG, and Azure ML — real-time technical help aligned to ${c.city} (${c.timezone}) hours. Mentoring, not replacing you.`,
    keywords: [
      `Azure AI proxy job support ${c.city}`, `Microsoft Foundry proxy job support ${c.city}`,
      `Azure OpenAI proxy job support ${c.city}`, `Azure ML proxy job support ${c.city}`, `Azure AI proxy interview support ${c.city}`,
    ],
    h1: `Azure AI Proxy Job Support in ${c.city} — Foundry, Azure OpenAI & Azure ML`,
    tagline: `Real-time Azure AI proxy job support and proxy interview support for engineers and candidates in ${c.city}.`,
    heroEyebrow: `Azure AI Proxy Support — ${c.city}`,
    painIntro: `Looking for Azure AI proxy job support in ${c.city} for a live Microsoft Foundry, Azure OpenAI or Azure ML project — or Azure AI proxy interview support for an upcoming interview? Our in-house Azure AI experts back you in ${c.city} hours. Proxy means expert technical support and mentoring, not replacing you.`,
    heroVariant: `${c.local} We provide ${c.city} Azure AI proxy job support and proxy interview support on real Foundry, Azure OpenAI, Foundry agent, Azure AI Search RAG, and Azure ML work — day-to-day delivery, production incidents, and proxy interview support across ${c.industries}.`,
    geoLine: `Serving Azure AI/ML professionals in ${c.city}, across ${c.country}, and worldwide, aligned to ${c.timezone} business hours.`,
    timezoneNote: `Aligned to ${c.timezone} business hours, with 24/7 availability for urgent production and interview needs.`,
    highlights: jobSupportHighlights,
    faqs: azureJobFaqs(`${c.city} Azure AI`, `Microsoft Foundry, Azure OpenAI, Foundry agents, Azure AI Search RAG, and Azure ML for ${c.industries} teams in ${c.city}`),
    bottomCTAHeading: `Need Azure AI Proxy Job Support or Proxy Interview Support in ${c.city}?`,
    bottomCTABody: `In-house Microsoft Foundry, Azure OpenAI, and Azure ML experts available in ${c.city} hours — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [A(`${c.country} Azure AI proxy job support`, c.countrySlug), AZURE_HUB_LINK],
      techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: [OPENAI_SUPP_LINK, AGENT_HUB_LINK, EXISTING.azureOpenAiJobSupport, EXISTING.aimlHub],
    }),
  }),
);

export const azureCitySlugs: string[] = cities.map((c) => c.slug);
