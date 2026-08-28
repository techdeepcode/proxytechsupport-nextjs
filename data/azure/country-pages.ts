import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  relatedLinks,
  jobSupportHighlights,
  azureJobFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  OPENAI_SUPP_LINK,
  AZUREML_HUB_LINK,
  AGENT_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
  AZURE_INTERVIEW_HUB_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

interface Country {
  slug: string;
  country: string;
  timezone: string;
  regions: string;
  heroVariant: string;
  cases: string[];
  cityLinks?: { label: string; href: string }[];
}

const countries: Country[] = [
  {
    slug: 'usa-azure-ai-proxy-job-support', country: 'USA', timezone: 'US Eastern, Central, Mountain, and Pacific',
    regions: 'East US, East US 2, South Central US, and West US 3',
    heroVariant:
      'The USA is the largest Microsoft Foundry and Azure OpenAI market, with heavy enterprise adoption across financial services (NYC), big tech and SaaS (Bay Area, Seattle), healthcare, and government. Azure OpenAI and Foundry capacity is broad across US regions, and demand for Azure AI Engineers, Foundry engineers, and Azure ML/MLOps roles is strong across product companies, banks, and consulting/SI firms. We support US teams and candidates on real Foundry, Azure OpenAI, RAG, and Azure ML work — including HIPAA and financial-services compliance patterns, private networking, and data residency.',
    cases: [
      'A US bank or insurer needing HIPAA/SOC 2-aligned Azure OpenAI with private endpoints and no data exfiltration',
      'A Bay Area / Seattle SaaS team scaling a Foundry agent or RAG feature to production',
      'A healthcare org building document RAG with Document Intelligence and Azure AI Search under PHI constraints',
      'A US Azure AI/ML interview at a product company or bank in a few days',
    ],
    cityLinks: [
      A('New York Azure AI/ML job support', 'new-york-azure-ai-proxy-job-support'),
      A('San Francisco Azure AI/ML job support', 'san-francisco-azure-ai-proxy-job-support'),
      A('Seattle Azure AI/ML job support', 'seattle-azure-ai-proxy-job-support'),
      A('Dallas Azure AI/ML job support', 'dallas-azure-ai-proxy-job-support'),
      A('Boston Azure AI/ML job support', 'boston-azure-ai-proxy-job-support'),
      A('Austin Azure AI/ML job support', 'austin-azure-ai-proxy-job-support'),
      A('Chicago Azure AI/ML job support', 'chicago-azure-ai-proxy-job-support'),
      A('Atlanta Azure AI/ML job support', 'atlanta-azure-ai-proxy-job-support'),
    ],
  },
  {
    slug: 'canada-azure-ai-proxy-job-support', country: 'Canada', timezone: 'Eastern, Central, Mountain, and Pacific (Canada)',
    regions: 'Canada Central (Toronto) and Canada East (Quebec City)',
    heroVariant:
      'Canada has strong Azure adoption in banking (Toronto’s Bay Street), insurance, government, and a growing AI scene in Toronto, Montreal, and Vancouver. Data residency matters — PIPEDA, provincial privacy laws, OSFI guidelines for financial institutions, and public-sector data-residency requirements make Canada Central/East regions and private networking important. We support Canadian teams on Foundry, Azure OpenAI, and Azure ML with compliance-aware architecture, and prepare candidates for Azure AI interviews across Canadian banks, insurers, and consultancies.',
    cases: [
      'A Toronto bank or insurer needing OSFI/PIPEDA-aligned Azure OpenAI in Canada Central with data residency',
      'A Montreal or Vancouver AI team productionizing a Foundry agent or RAG system',
      'A Canadian public-sector project with strict data-residency and private-networking requirements',
      'A Canadian Azure AI/ML interview at a bank, insurer, or consultancy',
    ],
    cityLinks: [
      A('Toronto Azure AI/ML job support', 'toronto-azure-ai-proxy-job-support'),
      A('Vancouver Azure AI/ML job support', 'vancouver-azure-ai-proxy-job-support'),
    ],
  },
  {
    slug: 'uk-azure-ai-proxy-job-support', country: 'UK', timezone: 'GMT/BST (UK)',
    regions: 'UK South (London) and UK West (Cardiff)',
    heroVariant:
      'The UK is a major Azure AI market, led by financial services and insurance in London, plus retail, telecom, public sector, and a strong consulting/SI presence. UK data residency (UK South/West), GDPR/UK-GDPR, and FCA expectations shape financial AI. Contract roles are common (inside/outside IR35). We support UK teams on Foundry, Azure OpenAI, Azure AI Search, and Azure ML, and prepare candidates for interviews across banks, insurers, and consultancies.',
    cases: [
      'A London bank or insurer building FCA/GDPR-aligned Azure OpenAI with UK data residency',
      'A UK retailer or telecom scaling a RAG or agent feature on Foundry',
      'A contractor (inside/outside IR35) needing daily Azure AI job support to deliver',
      'A UK Azure AI/ML interview at a bank, consultancy, or product company',
    ],
    cityLinks: [
      A('London Azure AI/ML job support', 'london-azure-ai-proxy-job-support'),
      A('Manchester Azure AI/ML job support', 'manchester-azure-ai-proxy-job-support'),
    ],
  },
  {
    slug: 'ireland-azure-ai-proxy-job-support', country: 'Ireland', timezone: 'GMT/IST (Ireland)',
    regions: 'North Europe (Dublin)',
    heroVariant:
      'Ireland hosts the North Europe Azure region (Dublin) and a dense concentration of multinational tech, pharma, medtech, and financial-services EMEA HQs. Many global Azure AI deployments run through Dublin, and demand for Azure AI and ML engineers is high across multinationals and consultancies. GDPR and EU data residency are central. We support Irish teams on Foundry, Azure OpenAI, and Azure ML, and prepare candidates for interviews at multinationals and SIs.',
    cases: [
      'A multinational EMEA HQ in Dublin building GDPR-aligned Azure OpenAI in North Europe',
      'A pharma/medtech org building document RAG under regulatory constraints',
      'A financial-services team scaling a Foundry agent to EU production',
      'An Irish Azure AI/ML interview at a multinational or consultancy',
    ],
    cityLinks: [A('Dublin Azure AI/ML job support', 'dublin-azure-ai-proxy-job-support')],
  },
  {
    slug: 'germany-azure-ai-proxy-job-support', country: 'Germany', timezone: 'CET/CEST (Germany)',
    regions: 'Germany West Central (Frankfurt)',
    heroVariant:
      'Germany is Europe’s largest economy with strict data-protection expectations (GDPR, BDSG) and demand for data residency and sovereignty. Azure adoption is strong in manufacturing/Industrie 4.0, automotive, financial services (Frankfurt), and enterprise SaaS. The Germany West Central region and EU Data Zone deployments matter for sovereignty. We support German teams on Foundry, Azure OpenAI, and Azure ML with data-residency-aware architecture, and prepare candidates for interviews across enterprises and Mittelstand.',
    cases: [
      'A German manufacturer or automotive firm building Azure AI with data residency in Frankfurt',
      'A Frankfurt financial-services team needing EU Data Zone Azure OpenAI and private networking',
      'An enterprise adopting Foundry agents under strict GDPR/BDSG constraints',
      'A German Azure AI/ML interview at an enterprise or consultancy',
    ],
    cityLinks: [
      A('Berlin Azure AI/ML job support', 'berlin-azure-ai-proxy-job-support'),
      A('Munich Azure AI/ML job support', 'munich-azure-ai-proxy-job-support'),
    ],
  },
  {
    slug: 'netherlands-azure-ai-proxy-job-support', country: 'Netherlands', timezone: 'CET/CEST (Netherlands)',
    regions: 'West Europe (Amsterdam)',
    heroVariant:
      'The Netherlands hosts the West Europe Azure region (Amsterdam) — a core EU location for Azure AI. Strong adoption in financial services, logistics, tech, and a highly digital public sector, with English-fluent teams and heavy EU data-residency focus. We support Dutch teams on Foundry, Azure OpenAI, and Azure ML with EU-compliant architecture, and prepare candidates for interviews across banks, scale-ups, and consultancies.',
    cases: [
      'An Amsterdam bank or fintech building GDPR-aligned Azure OpenAI in West Europe',
      'A logistics or tech scale-up productionizing a RAG or agent feature',
      'A public-sector project needing EU data residency and private networking',
      'A Dutch Azure AI/ML interview at a bank, scale-up, or consultancy',
    ],
    cityLinks: [A('Amsterdam Azure AI/ML job support', 'amsterdam-azure-ai-proxy-job-support')],
  },
  {
    slug: 'france-azure-ai-proxy-job-support', country: 'France', timezone: 'CET/CEST (France)',
    regions: 'France Central (Paris)',
    heroVariant:
      'France has a strong AI ecosystem and the France Central region (Paris), with adoption across banking, luxury/retail, telecom, aerospace, and the public sector. Data sovereignty and GDPR are prominent, and French-language NLP is a common requirement. We support French teams on Foundry, Azure OpenAI, and Azure ML with sovereignty-aware design and multilingual patterns, and prepare candidates for interviews across enterprises and consultancies.',
    cases: [
      'A Paris bank or enterprise building sovereignty-aware Azure OpenAI in France Central',
      'A retail/luxury or telecom team building French-language RAG and agents',
      'An aerospace or public-sector project with strict data-residency needs',
      'A French Azure AI/ML interview at an enterprise or consultancy',
    ],
    cityLinks: [A('Paris Azure AI/ML job support', 'paris-azure-ai-proxy-job-support')],
  },
  {
    slug: 'sweden-azure-ai-proxy-job-support', country: 'Sweden', timezone: 'CET/CEST (Sweden)',
    regions: 'Sweden Central (Gävle/Sandviken)',
    heroVariant:
      'Sweden hosts the Sweden Central region and a highly digital economy — strong in fintech, gaming, industrial tech, and telecom, with high AI maturity and English-fluent teams. EU data residency and sustainability are priorities. We support Swedish teams on Foundry, Azure OpenAI, and Azure ML, and prepare candidates for interviews across scale-ups and enterprises.',
    cases: [
      'A Stockholm fintech or gaming company scaling a Foundry agent or RAG feature',
      'An industrial-tech firm building Azure ML pipelines with EU data residency',
      'A telecom or enterprise adopting Azure OpenAI in Sweden Central',
      'A Swedish Azure AI/ML interview at a scale-up or enterprise',
    ],
  },
  {
    slug: 'switzerland-azure-ai-proxy-job-support', country: 'Switzerland', timezone: 'CET/CEST (Switzerland)',
    regions: 'Switzerland North (Zurich) and Switzerland West (Geneva)',
    heroVariant:
      'Switzerland has stringent data-protection expectations (revFADP) and demand for in-country data residency, led by banking/wealth management (Zurich), pharma (Basel), and insurance. The Switzerland North/West regions and private networking are important for regulated workloads. We support Swiss teams on Foundry, Azure OpenAI, and Azure ML with strict residency and confidentiality patterns, and prepare candidates for interviews across banks and pharma.',
    cases: [
      'A Zurich private bank needing Swiss-resident Azure OpenAI with strict confidentiality',
      'A Basel pharma org building document RAG under regulatory constraints',
      'An insurer adopting Foundry agents with in-country data residency',
      'A Swiss Azure AI/ML interview at a bank, pharma, or consultancy',
    ],
    cityLinks: [A('Zurich Azure AI/ML job support', 'zurich-azure-ai-proxy-job-support')],
  },
  {
    slug: 'australia-azure-ai-proxy-job-support', country: 'Australia', timezone: 'AEST/AEDT and AWST (Australia)',
    regions: 'Australia East (Sydney) and Australia Southeast (Melbourne)',
    heroVariant:
      'Australia has strong Azure adoption in banking, government (with IRAP/Essential Eight expectations), mining/resources, and retail, centered in Sydney and Melbourne. Data residency in Australia East/Southeast and government security frameworks shape regulated AI. We support Australian teams on Foundry, Azure OpenAI, and Azure ML with residency- and IRAP-aware design, aligned to APAC business hours, and prepare candidates for interviews across banks and government.',
    cases: [
      'A Sydney bank building APRA/IRAP-aligned Azure OpenAI with Australian data residency',
      'A government agency needing Essential Eight-aligned Azure AI with private networking',
      'A Melbourne retailer or resources firm scaling a RAG or agent feature',
      'An Australian Azure AI/ML interview at a bank, government agency, or consultancy',
    ],
    cityLinks: [
      A('Sydney Azure AI/ML job support', 'sydney-azure-ai-proxy-job-support'),
      A('Melbourne Azure AI/ML job support', 'melbourne-azure-ai-proxy-job-support'),
    ],
  },
  {
    slug: 'new-zealand-azure-ai-proxy-job-support', country: 'New Zealand', timezone: 'NZST/NZDT (New Zealand)',
    regions: 'New Zealand North (Auckland)',
    heroVariant:
      'New Zealand now has the New Zealand North region (Auckland), enabling local data residency for government, banking, and enterprise. Adoption is growing across financial services, agritech, and the public sector. We support NZ teams on Foundry, Azure OpenAI, and Azure ML with local-residency design, aligned to NZ/APAC hours, and prepare candidates for interviews across banks and government.',
    cases: [
      'An Auckland bank or government agency needing NZ-resident Azure OpenAI',
      'An agritech or enterprise building RAG or Azure ML pipelines',
      'A public-sector project with local data-residency requirements',
      'A New Zealand Azure AI/ML interview at a bank, agency, or enterprise',
    ],
  },
  {
    slug: 'singapore-azure-ai-proxy-job-support', country: 'Singapore', timezone: 'SGT (Singapore)',
    regions: 'Southeast Asia (Singapore)',
    heroVariant:
      'Singapore is the APAC hub for Azure AI — the Southeast Asia region (Singapore), strong banking/fintech, government (with MAS TRM and IMDA expectations), and regional HQs. The APAC Data Zone supports data-processing boundaries. We support Singapore teams on Foundry, Azure OpenAI, and Azure ML with MAS-aware and residency-conscious design, and prepare candidates for interviews across banks, fintechs, and regional HQs.',
    cases: [
      'A Singapore bank building MAS TRM-aligned Azure OpenAI with APAC data-zone processing',
      'A fintech or regional HQ scaling a Foundry agent or RAG feature across APAC',
      'A government-linked project with data-residency and security requirements',
      'A Singapore Azure AI/ML interview at a bank, fintech, or regional HQ',
    ],
  },
  {
    slug: 'hong-kong-azure-ai-proxy-job-support', country: 'Hong Kong', timezone: 'HKT (Hong Kong)',
    regions: 'East Asia (Hong Kong)',
    heroVariant:
      'Hong Kong is a major financial center with the East Asia Azure region, strong in banking, wealth management, insurance, and trading, plus regional HQs. HKMA expectations and data-handling requirements shape financial AI. We support Hong Kong teams on Foundry, Azure OpenAI, and Azure ML with finance-grade security and residency patterns, and prepare candidates for interviews across banks and insurers.',
    cases: [
      'A Hong Kong bank or insurer building HKMA-aligned Azure OpenAI with private networking',
      'A trading or wealth-management firm scaling a RAG or agent feature',
      'A regional HQ standardizing Azure AI across APAC markets',
      'A Hong Kong Azure AI/ML interview at a bank, insurer, or trading firm',
    ],
  },
  {
    slug: 'uae-azure-ai-proxy-job-support', country: 'UAE', timezone: 'GST (UAE)',
    regions: 'UAE North (Dubai)',
    heroVariant:
      'The UAE is a fast-growing AI market with the UAE North region (Dubai), a national AI strategy, and heavy investment across government, banking, energy, and smart-city projects. Data residency and Arabic-language NLP are common requirements. We support UAE teams on Foundry, Azure OpenAI, and Azure ML with residency-aware and multilingual design, aligned to Gulf hours, and prepare candidates for interviews across government, banks, and enterprises.',
    cases: [
      'A Dubai or Abu Dhabi government/smart-city project building Azure AI with UAE data residency',
      'A UAE bank or energy firm scaling a Foundry agent or RAG feature',
      'An enterprise building Arabic + English multilingual AI experiences',
      'A UAE Azure AI/ML interview at a government entity, bank, or enterprise',
    ],
    cityLinks: [A('Dubai Azure AI/ML job support', 'dubai-azure-ai-proxy-job-support')],
  },
  {
    slug: 'saudi-arabia-azure-ai-proxy-job-support', country: 'Saudi Arabia', timezone: 'AST (Saudi Arabia)',
    regions: 'Saudi Arabia (Microsoft cloud region, Riyadh area)',
    heroVariant:
      'Saudi Arabia is investing heavily in AI under Vision 2030, with a Microsoft cloud region enabling local data residency, and large government, energy, banking, and giga-project programs (e.g. NEOM). Data residency and Arabic-language AI are central. We support Saudi teams on Foundry, Azure OpenAI, and Azure ML with residency-aware and Arabic-first design, aligned to Gulf hours, and prepare candidates for interviews across government and enterprise programs.',
    cases: [
      'A Riyadh government or giga-project program building Azure AI with in-Kingdom data residency',
      'A Saudi bank or energy firm scaling a Foundry agent or RAG feature',
      'An enterprise building Arabic-first multilingual AI experiences',
      'A Saudi Azure AI/ML interview at a government program, bank, or enterprise',
    ],
  },
  {
    slug: 'europe-azure-ai-proxy-job-support', country: 'Europe', timezone: 'European (CET/CEST, GMT/BST)',
    regions: 'West Europe, North Europe, Germany West Central, France Central, Sweden Central, and Switzerland North',
    heroVariant:
      'Across Europe, Azure AI adoption is strong but shaped by GDPR, the EU AI Act, and data-sovereignty expectations. EU Data Zone deployments keep data processing within Europe, and multiple in-region datacenters (West/North Europe, Germany, France, Sweden, Switzerland) support residency. We support pan-European teams on Foundry, Azure OpenAI, and Azure ML with EU-compliant, sovereignty-aware architecture, and prepare candidates for interviews across European enterprises and consultancies.',
    cases: [
      'A pan-European enterprise standardizing Azure OpenAI on EU Data Zone deployments',
      'A team aligning Azure AI to GDPR and the EU AI Act with documentation and controls',
      'A multi-country rollout needing consistent residency, security, and cost governance',
      'A European Azure AI/ML interview at an enterprise or consultancy',
    ],
  },
];

export const azureCountryPages: LandingPageConfig[] = countries.map((c) =>
  azurePage({
    slug: c.slug,
    title: `${c.country} Azure AI Proxy Job Support | Foundry, OpenAI & Azure ML`,
    description: `${c.country} Azure AI proxy job support and proxy interview support: Microsoft Foundry, Azure OpenAI, Foundry agents, Azure AI Search RAG, and Azure ML — real-time technical help aligned to ${c.country} hours and data residency. Mentoring, not replacing you.`,
    keywords: [
      `${c.country} Azure AI proxy job support`, `Azure AI proxy job support ${c.country}`,
      `Microsoft Foundry proxy job support ${c.country}`, `Azure ML proxy job support ${c.country}`, `Azure AI proxy interview support ${c.country}`,
    ],
    h1: `${c.country} Azure AI Proxy Job Support — Foundry, Azure OpenAI & Azure ML`,
    tagline: `Real-time Azure AI proxy job support and proxy interview support for engineers and candidates across ${c.country}.`,
    heroEyebrow: `${c.country} Azure AI Proxy Support`,
    painIntro: `Looking for ${c.country} Azure AI proxy job support for a live Microsoft Foundry, Azure OpenAI or Azure ML project — or ${c.country} Azure AI proxy interview support for an upcoming interview? Our in-house Azure AI experts back you in your working hours. Proxy here means expert technical support and mentoring, not replacing you.`,
    heroVariant: c.heroVariant,
    geoLine: `Serving Azure AI/ML professionals across ${c.country} and worldwide, aligned to ${c.timezone} business hours.`,
    timezoneNote: `Aligned to ${c.timezone} business hours, with 24/7 availability for urgent production and interview needs. Common Azure regions: ${c.regions}.`,
    highlights: jobSupportHighlights,
    faqs: azureJobFaqs(`${c.country} Azure AI`, `Microsoft Foundry apps, Azure OpenAI integration, Foundry agents, Azure AI Search RAG, and Azure ML — with ${c.country} data-residency and compliance patterns`),
    useCasesSection: { title: `Common ${c.country} Azure AI Proxy Support Situations We Help With`, cases: c.cases },
    bottomCTAHeading: `Need ${c.country} Azure AI Proxy Job Support or Proxy Interview Support?`,
    bottomCTABody: `In-house Microsoft Foundry, Azure OpenAI, and Azure ML experts available in ${c.country} hours — proxy job support for live projects and production issues, or proxy interview support (technical preparation; you attend your own interview). Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AZURE_HUB_LINK, AZURE_INTERVIEW_HUB_LINK],
      techLinks: [FOUNDRY_HUB_LINK, AZUREML_HUB_LINK],
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: [OPENAI_SUPP_LINK, AGENT_HUB_LINK, EXISTING.azureOpenAiJobSupport, EXISTING.aimlHub, ...(c.cityLinks ?? [])],
    }),
  }),
);

export const azureCountryCitySlugs: string[] = countries.flatMap((c) => (c.cityLinks ?? []).map((l) => l.href.replace(/\//g, '')));
