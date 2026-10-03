import type { LandingPageConfig, LandingFaqItem, LandingRelatedLink } from '../landing-pages';
import {
  k8sPage,
  relatedLinks,
  jobSupportHighlights,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_INTERVIEW_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_GPU_LINK,
  K8S_PRIVATE_AI_LINK,
  K8S_OPENSHIFT_LINK,
  K8S_EUROPE_LINK,
  EKS_AGENTIC_LINK,
  AKS_AGENTIC_LINK,
  GKE_AGENTIC_LINK,
} from './shared';

interface CountryCtx {
  slug: string;
  country: string;
  timezone: string;
  /** Unique 2–3 sentence market context — industries, cloud regions, demand drivers, residency. */
  marketContext: string;
  /** Short pain hook mentioning the local market. */
  painHook: string;
  /** Key local industries for use-cases + FAQ. */
  industries: string;
  /** Cloud focus sentence. */
  cloudFocus: string;
  /** Related industry/topic links (cluster-internal) specific to the market. */
  marketLinks: LandingRelatedLink[];
  /** True for European countries (adds Europe hub as the primary regional parent). */
  europe?: boolean;
  /** Residency / sovereignty angle sentence (EU + regulated markets). */
  residencyNote?: string;
}

function countryFaqs(ctx: CountryCtx): LandingFaqItem[] {
  return [
    {
      question: `What Kubernetes AI job support do you provide in ${ctx.country}?`,
      answer: `We provide real-time Kubernetes AI infrastructure job support for engineers and teams in ${ctx.country} — running production AI and agents on Kubernetes across ${ctx.cloudFocus} We help with LLM inference (vLLM, KServe, NVIDIA Dynamo), GPU scheduling and Dynamic Resource Allocation, agent runtimes and MCP, autoscaling, observability, security, and cost — aligned to ${ctx.timezone} business hours, with 24/7 availability for production incidents.`,
    },
    {
      question: `Which industries do you support in ${ctx.country}?`,
      answer: `Our ${ctx.country} work spans ${ctx.industries}. ${ctx.residencyNote ?? 'We tailor the architecture — private vs managed inference, data isolation, and scaling — to each sector’s reliability and governance needs.'}`,
    },
    {
      question: `Can you help with production AI incidents for ${ctx.country} teams?`,
      answer: `Yes. We provide 24/7 incident support for teams in ${ctx.country} — GPU Pods Pending, vLLM OOM, high TTFT, model-loading failures, autoscaling failures, agent loops, and MCP errors — with an engineer on the call reading your events, logs, and metrics until the system is stable, then hardening it against a repeat.`,
    },
    {
      question: `Do you cover EKS, AKS, GKE, and OpenShift for ${ctx.country}?`,
      answer: `Yes. We support Amazon EKS, Azure AKS, Google GKE, Red Hat OpenShift / OpenShift AI, and on-prem/bare-metal Kubernetes for ${ctx.country} teams, including the relevant cloud regions and, where needed, private, sovereign, or air-gapped deployments. We advise honestly on managed services vs self-hosting for your constraints.`,
    },
    {
      question: `Is the support confidential and how do I start?`,
      answer: `Every engagement is fully confidential with NDAs available on request. Message us on WhatsApp with your cluster, cloud, and situation (job support, production incident, interview, or profile) — we match you with the right expert for ${ctx.country}, usually the same day. We do not guarantee interview selection or employment; hiring decisions are made solely by employers.`,
    },
  ];
}

// Peer global-market links so non-European country pages cross-link each other
// (guarantees ≥2 contextual inbound links per country, beyond the master hub).
const GLOBAL_MARKET_LINKS: LandingRelatedLink[] = [
  { label: 'USA Kubernetes AI', href: '/kubernetes-ai-job-support-usa/' },
  { label: 'Canada Kubernetes AI', href: '/kubernetes-ai-job-support-canada/' },
  { label: 'UK Kubernetes AI', href: '/kubernetes-ai-job-support-uk/' },
  { label: 'Australia Kubernetes AI', href: '/kubernetes-ai-job-support-australia/' },
  { label: 'New Zealand Kubernetes AI', href: '/kubernetes-ai-job-support-new-zealand/' },
  { label: 'Singapore Kubernetes AI', href: '/kubernetes-ai-job-support-singapore/' },
  { label: 'Hong Kong Kubernetes AI', href: '/kubernetes-ai-job-support-hong-kong/' },
  { label: 'UAE Kubernetes AI', href: '/kubernetes-ai-job-support-uae/' },
  { label: 'Saudi Arabia Kubernetes AI', href: '/kubernetes-ai-job-support-saudi-arabia/' },
];

function countryPage(ctx: CountryCtx): LandingPageConfig {
  const regional: LandingRelatedLink = ctx.europe ? K8S_EUROPE_LINK : K8S_HUB_LINK;
  // Non-European markets cross-link their peer global markets; European markets are
  // interlinked via the Europe hub. Self-link is filtered out.
  const peerMarketLinks: LandingRelatedLink[] = ctx.europe
    ? []
    : GLOBAL_MARKET_LINKS.filter((l) => l.href !== `/${ctx.slug}/`);
  return k8sPage({
    slug: ctx.slug,
    title: `Kubernetes AI Job Support ${ctx.country} — Agents, GPU & Inference Infrastructure`,
    description: `Real-time Kubernetes AI job support, production incident help, and interview support in ${ctx.country}: agentic AI, LLM inference (vLLM, KServe, Dynamo), GPU scheduling, MCP, AI SRE, security & FinOps across EKS, AKS, GKE, OpenShift & on-prem. ${ctx.timezone} hours, 24/7 incidents.`,
    keywords: [
      `Kubernetes AI job support ${ctx.country}`, `AI infrastructure support ${ctx.country}`,
      `GPU Kubernetes ${ctx.country}`, `LLM inference ${ctx.country}`, `platform engineer support ${ctx.country}`,
      `agentic AI ${ctx.country}`, `MLOps support ${ctx.country}`,
    ],
    h1: `Kubernetes AI Job Support in ${ctx.country} — Production AI, Agents, GPU & Inference`,
    tagline: `Real-time job support, production incident help, and interview assistance for operating production AI and autonomous agents on Kubernetes across ${ctx.country}.`,
    heroEyebrow: `Kubernetes AI Support — ${ctx.country}`,
    painIntro: ctx.painHook,
    heroVariant: `${ctx.marketContext} We support ${ctx.country} teams across the full stack — Kubernetes v1.37 scheduling (DRA, gang scheduling, CompositePodGroup), GPU/NVIDIA operators, LLM serving (vLLM, KServe, NVIDIA Dynamo, SGLang, TensorRT-LLM, NIM), agent runtimes and sandboxes, MCP, AI observability, security, and FinOps — on ${ctx.cloudFocus} From daily job support to 24/7 production firefighting, live interview guidance, and profile positioning, this is your ${ctx.country} entry point into the global Kubernetes AI knowledge graph.`,
    geoLine: `Real-time Kubernetes AI infrastructure support for engineers and teams across ${ctx.country}${ctx.europe ? ' and the wider European market' : ''}, aligned to ${ctx.timezone}.`,
    timezoneNote: `Aligned to ${ctx.timezone} business hours and available 24/7 for urgent production incidents.`,
    highlights: jobSupportHighlights,
    faqs: countryFaqs(ctx),
    useCasesSection: {
      title: `What We Help ${ctx.country} Teams With`,
      cases: [
        `Running production LLM inference (vLLM, KServe, Dynamo) on EKS, AKS, GKE, or OpenShift in ${ctx.country}`,
        `GPU scheduling, DRA, and gang scheduling so training and multi-node inference stay reliable and affordable`,
        `Agent runtimes, sandboxes, and MCP secured with least-privilege identity and egress control`,
        `AI observability and SRE so a healthy Pod actually means a healthy AI application`,
        ctx.residencyNote ? `Data-residency, private, and sovereign AI architecture for regulated ${ctx.country} sectors` : `Cost/FinOps work to reclaim idle GPU and scale agents to zero`,
        `24/7 production incident firefighting and live interview support for ${ctx.country} roles`,
      ],
    },
    bottomCTAHeading: `Need Kubernetes AI Support in ${ctx.country} Right Now?`,
    bottomCTABody: `In-house Kubernetes, GPU, inference, and agent-platform experts aligned to ${ctx.timezone} and available 24/7 for incidents — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: ctx.europe ? [K8S_EUROPE_LINK, K8S_HUB_LINK] : [K8S_HUB_LINK, K8S_EUROPE_LINK],
      techLinks: [K8S_INFERENCE_HUB_LINK, K8S_AGENTIC_HUB_LINK],
      problemLink: K8S_PRODUCTION_LINK,
      proxyLink: K8S_INTERVIEW_LINK,
      additionalLinks: [
        regional, EKS_AGENTIC_LINK, AKS_AGENTIC_LINK, GKE_AGENTIC_LINK, K8S_OPENSHIFT_LINK,
        K8S_GPU_LINK, K8S_SRE_LINK, K8S_SECURITY_LINK, K8S_PRIVATE_AI_LINK,
        ...ctx.marketLinks,
        ...peerMarketLinks,
        EXISTING.awsAiMl, EXISTING.azureAiMl, EXISTING.agenticAi,
      ],
    }),
  });
}

const BANKING: LandingRelatedLink = { label: 'Banking & financial services AI', href: '/kubernetes-ai-banking-financial-services-job-support/' };
const INSURANCE: LandingRelatedLink = { label: 'Insurance AI on Kubernetes', href: '/kubernetes-ai-insurance-job-support/' };
const HEALTHCARE: LandingRelatedLink = { label: 'Healthcare AI on Kubernetes', href: '/kubernetes-ai-healthcare-job-support/' };
const TELECOM: LandingRelatedLink = { label: 'Telecom AI on Kubernetes', href: '/kubernetes-ai-telecom-job-support/' };
const MANUFACTURING: LandingRelatedLink = { label: 'Manufacturing AI on Kubernetes', href: '/kubernetes-ai-manufacturing-job-support/' };
const AUTOMOTIVE: LandingRelatedLink = { label: 'Automotive AI on Kubernetes', href: '/kubernetes-ai-automotive-job-support/' };
const RETAIL: LandingRelatedLink = { label: 'Retail & e-commerce AI', href: '/kubernetes-ai-retail-ecommerce-job-support/' };
const GOVERNMENT: LandingRelatedLink = { label: 'Government & public sector AI', href: '/kubernetes-ai-government-public-sector-job-support/' };
const SOVEREIGN: LandingRelatedLink = { label: 'Sovereign AI on Kubernetes', href: '/sovereign-ai-kubernetes-job-support/' };

// ─── GLOBAL MARKETS ─────────────────────────────────────────────────────────

const usa = countryPage({
  slug: 'kubernetes-ai-job-support-usa',
  country: 'USA',
  timezone: 'US Eastern, Central, Mountain, and Pacific time',
  painHook:
    'US teams are shipping agentic AI and LLM serving to production on Kubernetes faster than almost anywhere — and hitting GPU, inference, and reliability problems at scale that are hard to debug alone.',
  marketContext:
    'The United States leads global demand for production AI infrastructure — hyperscaler-native teams on EKS, AKS, and GKE, large GPU fleets, and the most aggressive agentic-AI adoption across tech, finance, healthcare, and retail. US roles expect depth in GPU scheduling, LLM serving at scale, and SRE for AI.',
  industries: 'technology and SaaS, financial services and fintech, healthcare, retail and e-commerce, and public sector',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, OpenShift, and large on-prem GPU clusters.',
  marketLinks: [BANKING, HEALTHCARE, RETAIL],
});

const canada = countryPage({
  slug: 'kubernetes-ai-job-support-canada',
  country: 'Canada',
  timezone: 'Canadian Eastern, Central, Mountain, and Pacific time',
  painHook:
    'Canadian teams across Toronto, Vancouver, Montreal, and Calgary are scaling AI on Kubernetes under data-residency expectations and a tight talent market — and need senior infrastructure help on demand.',
  marketContext:
    'Canada combines strong cloud adoption with data-residency sensitivity, especially in banking, insurance, and public sector. Canadian cloud regions and a deep AI research ecosystem (Toronto, Montreal) drive demand for reliable, often in-region AI infrastructure on Kubernetes.',
  industries: 'banking and financial services, insurance, healthcare, public sector, and technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Canadian cloud regions.',
  marketLinks: [BANKING, INSURANCE, SOVEREIGN],
  residencyNote: 'Canadian banking, insurance, and public-sector workloads often require in-region data residency, so we emphasise regional inference, private endpoints, isolation, and audit.',
});

const uk = countryPage({
  slug: 'kubernetes-ai-job-support-uk',
  country: 'United Kingdom',
  timezone: 'UK (GMT/BST)',
  painHook:
    'UK teams in London fintech, banking, insurance, and retail are putting agentic AI and LLM serving into production on Kubernetes — under FCA-grade reliability and governance expectations.',
  marketContext:
    'The United Kingdom has one of Europe’s deepest AI and cloud-native ecosystems, led by London financial services, fintech, insurance, and retail. UK teams expect strong governance, reliability, and increasingly private or in-region AI infrastructure.',
  industries: 'financial services and fintech, insurance, retail, healthcare (NHS ecosystem), and technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with UK cloud regions.',
  marketLinks: [BANKING, INSURANCE, RETAIL],
  residencyNote: 'UK financial-services and public-sector workloads expect strong data governance, so we emphasise regional inference, private endpoints, isolation, and audit.',
});

const australia = countryPage({
  slug: 'kubernetes-ai-job-support-australia',
  country: 'Australia',
  timezone: 'Australian Eastern, Central, and Western time',
  painHook:
    'Australian teams across Sydney, Melbourne, and beyond are scaling AI on Kubernetes under strict data-sovereignty rules — in banking, government, healthcare, mining, and telecom.',
  marketContext:
    'Australia has strong cloud adoption and strict data-sovereignty expectations, especially in banking, government, and healthcare. Mining/industrial and telecom add demand for edge and large-scale AI infrastructure, often in Australian cloud regions.',
  industries: 'banking and financial services, government, healthcare, mining and industrial, and telecom',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Australian cloud regions.',
  marketLinks: [BANKING, GOVERNMENT, TELECOM],
  residencyNote: 'Australian banking, government, and healthcare workloads often require data sovereignty, so we emphasise in-region inference, private endpoints, isolation, and audit.',
});

const newZealand = countryPage({
  slug: 'kubernetes-ai-job-support-new-zealand',
  country: 'New Zealand',
  timezone: 'New Zealand time (NZST/NZDT)',
  painHook:
    'New Zealand teams in Auckland and Wellington are adopting AI on Kubernetes across public sector, banking, and cloud-native companies — with a small, senior talent pool that benefits from on-demand expertise.',
  marketContext:
    'New Zealand has growing cloud and platform-engineering maturity, led by public sector, financial services, and cloud-native companies. Data-sovereignty and a compact talent market make reliable, well-architected AI infrastructure especially valuable.',
  industries: 'public sector, banking and financial services, agritech, and cloud-native technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with regional cloud presence.',
  marketLinks: [GOVERNMENT, BANKING, SOVEREIGN],
  residencyNote: 'New Zealand public-sector and financial workloads value data sovereignty, so we emphasise in-region inference, private endpoints, isolation, and audit.',
});

const singapore = countryPage({
  slug: 'kubernetes-ai-job-support-singapore',
  country: 'Singapore',
  timezone: 'Singapore time (SGT)',
  painHook:
    'Singapore teams run regional AI platforms serving all of APAC on Kubernetes — under MAS-grade governance and multi-region, low-latency expectations.',
  marketContext:
    'Singapore is APAC’s regional hub for financial services, fintech, and enterprise AI, with strong regulation (MAS) and a multi-region architecture focus. Teams here design AI infrastructure that serves the wider region with low latency and strict governance.',
  industries: 'banking and financial services, fintech, telecom, and regional enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift across Singapore and regional APAC cloud regions.',
  marketLinks: [BANKING, TELECOM, SOVEREIGN],
  residencyNote: 'Singapore financial-services workloads operate under strong regulatory governance, so we emphasise regional inference, private endpoints, isolation, and audit.',
});

const hongKong = countryPage({
  slug: 'kubernetes-ai-job-support-hong-kong',
  country: 'Hong Kong',
  timezone: 'Hong Kong time (HKT)',
  painHook:
    'Hong Kong teams in banking, capital markets, and fintech are deploying AI on Kubernetes under strict financial-sector governance and low-latency trading expectations.',
  marketContext:
    'Hong Kong is a major financial and capital-markets centre with strong demand for low-latency, well-governed AI infrastructure in banking, insurance, and fintech, often with regional APAC architecture.',
  industries: 'banking and capital markets, insurance, fintech, and regional enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift across Hong Kong and regional APAC cloud regions.',
  marketLinks: [BANKING, INSURANCE, SOVEREIGN],
  residencyNote: 'Hong Kong financial-sector workloads expect strong governance, so we emphasise regional inference, private endpoints, isolation, and audit.',
});

const uae = countryPage({
  slug: 'kubernetes-ai-job-support-uae',
  country: 'UAE',
  timezone: 'Gulf Standard Time (GST)',
  painHook:
    'UAE teams in Dubai and Abu Dhabi are investing heavily in sovereign AI and GPU infrastructure on Kubernetes — across government, banking, and energy.',
  marketContext:
    'The UAE is investing aggressively in sovereign AI, national GPU capacity, and smart-government initiatives. Demand centres on sovereign and private AI infrastructure for government, banking, and energy, often with in-country data requirements.',
  industries: 'government and smart-city, banking and financial services, energy, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, OpenShift, and sovereign on-prem GPU clusters in the UAE.',
  marketLinks: [GOVERNMENT, BANKING, SOVEREIGN],
  residencyNote: 'UAE government and financial workloads increasingly require sovereign, in-country AI, so we emphasise sovereign/on-prem deployment, isolation, and audit.',
});

const saudi = countryPage({
  slug: 'kubernetes-ai-job-support-saudi-arabia',
  country: 'Saudi Arabia',
  timezone: 'Arabia Standard Time (AST)',
  painHook:
    'Saudi teams delivering Vision 2030 AI programmes are building sovereign GPU and AI infrastructure on Kubernetes at national scale — across government, energy, and finance.',
  marketContext:
    'Saudi Arabia is building sovereign AI and large-scale GPU infrastructure as part of Vision 2030, with major demand in government, energy, and financial services for in-country, sovereign AI platforms.',
  industries: 'government and giga-projects, energy, banking and financial services, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, OpenShift, and sovereign on-prem GPU clusters in Saudi Arabia.',
  marketLinks: [GOVERNMENT, BANKING, SOVEREIGN],
  residencyNote: 'Saudi government and energy workloads increasingly require sovereign, in-country AI, so we emphasise sovereign/on-prem deployment, isolation, and audit.',
});

// ─── EUROPE HUB ───────────────────────────────────────────────────────────────

const europeHub: LandingPageConfig = k8sPage({
  slug: 'kubernetes-ai-job-support-europe',
  title: 'Europe Kubernetes AI Job Support — Sovereign, Private & Regulated AI Infrastructure',
  description:
    'Real-time Kubernetes AI job support across Europe: data residency and sovereign AI, private/on-prem LLM serving, EU cloud regions, GPU and inference, agentic AI and MCP, and country-level coverage for Germany, Netherlands, France, the Nordics, and more.',
  keywords: [
    'Europe Kubernetes AI job support', 'EU AI infrastructure support', 'sovereign AI Europe', 'data residency AI Europe',
    'private AI Europe Kubernetes', 'GPU inference Europe', 'EU cloud AI support',
  ],
  h1: 'Europe Kubernetes AI Job Support — Sovereign, Private, and Regulated Production AI',
  tagline:
    'The European entry point into the Kubernetes AI knowledge graph — data residency, sovereign and private AI, EU cloud regions, and country-level depth across the continent.',
  heroEyebrow: 'Europe Kubernetes AI Hub',
  painIntro:
    'European AI on Kubernetes is differentiated by more than language — data residency, the EU AI Act context, GDPR, and sovereign-AI expectations shape the architecture as much as the technology does.',
  heroVariant:
    'Europe runs AI on Kubernetes under distinctive engineering constraints: data residency and regional inference, sovereign and private AI, GDPR-aware data flows, and the EU AI Act context — alongside strong sectors in financial services, manufacturing, automotive, telecom, healthcare, and public sector. We explain the engineering implications (regional inference, private endpoints, on-prem/private LLM deployment, audit logging, workload identity, model/data isolation, multi-region design) rather than giving legal conclusions. This hub links to country-level coverage — Germany, Netherlands, Ireland, France, Sweden, Switzerland, Denmark, Finland, Norway, Belgium, Austria, Spain, and Portugal — each with its own market context, plus the full technology, cloud, GPU, agentic, and production-incident clusters.',
  geoLine:
    'Real-time Kubernetes AI infrastructure support across Germany, Netherlands, Ireland, France, Sweden, Switzerland, Denmark, Finland, Norway, Belgium, Austria, Spain, Portugal, and the wider European market.',
  timezoneNote: 'Aligned to Central European and other European time zones, and available 24/7 for urgent production incidents.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'How is European AI on Kubernetes different?',
      answer:
        'The engineering is shaped by data residency, sovereign-AI expectations, GDPR-aware data flows, and the EU AI Act context — not just the choice of cloud or model. European teams more often need regional inference, private or on-prem LLM deployment, strict isolation, and audit. We design for those constraints while keeping the architecture practical.',
    },
    {
      question: 'Do you give legal advice on the EU AI Act or GDPR?',
      answer:
        'No. We explain the engineering and architecture implications — regional inference, private endpoints, data isolation, audit logging, workload identity, multi-region design — so your systems support your compliance posture. Legal conclusions are for your counsel and compliance teams; we build the infrastructure that makes their requirements achievable.',
    },
    {
      question: 'Which European countries do you cover individually?',
      answer:
        'Germany, Netherlands, Ireland, France, Sweden, Switzerland, Denmark, Finland, Norway, Belgium, Austria, Spain, and Portugal each have dedicated coverage with their own market context, and we support the wider European market. Each country page links to the cloud, GPU, agentic, inference, and production-incident clusters relevant to it.',
    },
    {
      question: 'Can you deliver sovereign and private AI in Europe?',
      answer:
        'Yes. We design sovereign and private AI on Kubernetes — EU cloud regions or on-prem/OpenShift, private endpoints, air-gapped where required, data-residency-aware flows, and audit — for regulated European sectors like financial services, healthcare, public sector, and automotive.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your country, cluster, cloud, and situation. We match you with the right expert for the European market and your constraints — usually the same day, and confidentially.',
    },
  ],
  useCasesSection: {
    title: 'What We Help European Teams With',
    cases: [
      'Data-residency and sovereign AI architecture — regional inference, private endpoints, isolation, and audit',
      'Private/on-prem LLM serving on OpenShift or EU cloud regions for regulated sectors',
      'GPU scheduling, LLM serving (vLLM, KServe, Dynamo), and agent/MCP infrastructure',
      'Manufacturing, automotive, financial-services, telecom, and public-sector AI on Kubernetes',
      'Multi-region design across European cloud regions with GDPR-aware data flows',
      '24/7 production incident firefighting and live interview support across Europe',
    ],
  },
  bottomCTAHeading: 'Need Kubernetes AI Support Anywhere in Europe?',
  bottomCTABody:
    'In-house Kubernetes, GPU, inference, and agent-platform experts across European time zones and 24/7 for incidents — sovereign and private AI, project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [K8S_HUB_LINK, { label: 'Germany Kubernetes AI', href: '/kubernetes-ai-job-support-germany/' }],
    techLinks: [K8S_PRIVATE_AI_LINK, K8S_OPENSHIFT_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_INFERENCE_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_GPU_LINK, K8S_SECURITY_LINK, SOVEREIGN,
      { label: 'Germany Kubernetes AI', href: '/kubernetes-ai-job-support-germany/' },
      { label: 'Netherlands Kubernetes AI', href: '/kubernetes-ai-job-support-netherlands/' },
      { label: 'Ireland Kubernetes AI', href: '/kubernetes-ai-job-support-ireland/' },
      { label: 'France Kubernetes AI', href: '/kubernetes-ai-job-support-france/' },
      { label: 'Sweden Kubernetes AI', href: '/kubernetes-ai-job-support-sweden/' },
      { label: 'Switzerland Kubernetes AI', href: '/kubernetes-ai-job-support-switzerland/' },
      { label: 'Denmark Kubernetes AI', href: '/kubernetes-ai-job-support-denmark/' },
      { label: 'Finland Kubernetes AI', href: '/kubernetes-ai-job-support-finland/' },
      { label: 'Norway Kubernetes AI', href: '/kubernetes-ai-job-support-norway/' },
      { label: 'Belgium Kubernetes AI', href: '/kubernetes-ai-job-support-belgium/' },
      { label: 'Austria Kubernetes AI', href: '/kubernetes-ai-job-support-austria/' },
      { label: 'Spain Kubernetes AI', href: '/kubernetes-ai-job-support-spain/' },
      { label: 'Portugal Kubernetes AI', href: '/kubernetes-ai-job-support-portugal/' },
      EXISTING.awsAiMl, EXISTING.azureAiMl,
    ],
  }),
});

// ─── IRELAND (special existing-cluster bridges) ──────────────────────────────

const ireland = countryPage({
  slug: 'kubernetes-ai-job-support-ireland',
  country: 'Ireland',
  timezone: 'Irish Standard Time (GMT/IST)',
  painHook:
    'Ireland hosts the European operations of most hyperscalers and SaaS giants — so Dublin teams run AI on Kubernetes at multinational scale across AWS, Azure, and GCP.',
  marketContext:
    'Ireland is the European base for AWS, Microsoft, Google, and countless multinational SaaS and pharma companies, with Dublin a major cloud-operations and SRE hub. Demand centres on multi-cloud AI infrastructure, platform engineering, and reliability at scale.',
  industries: 'cloud operations and SaaS, pharma and life sciences, financial services, and multinational technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Irish/EU cloud regions.',
  marketLinks: [BANKING, HEALTHCARE, SOVEREIGN],
  europe: true,
  residencyNote: 'Irish-hosted multinational and pharma workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

// ─── EUROPEAN COUNTRIES ─────────────────────────────────────────────────────

const germany = countryPage({
  slug: 'kubernetes-ai-job-support-germany',
  country: 'Germany',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'German teams in automotive, manufacturing, and financial services are deploying AI on Kubernetes under strict data-residency and engineering-quality expectations — often on OpenShift and private/hybrid infrastructure.',
  marketContext:
    'Germany is Europe’s industrial and engineering powerhouse, with automotive, manufacturing (Industrie 4.0), and financial services driving AI demand. German teams favour private, hybrid, and on-prem AI (often OpenShift) with EU data-residency and rigorous engineering standards.',
  industries: 'automotive, manufacturing and Industrie 4.0, financial services, and enterprise software',
  cloudFocus: 'OpenShift and private/hybrid clusters alongside Amazon EKS, Azure AKS, and Google GKE in EU regions.',
  marketLinks: [AUTOMOTIVE, MANUFACTURING, BANKING],
  europe: true,
  residencyNote: 'German automotive, manufacturing, and financial workloads emphasise EU data residency and private/on-prem AI, so we focus on regional/private inference, isolation, and audit.',
});

const netherlands = countryPage({
  slug: 'kubernetes-ai-job-support-netherlands',
  country: 'Netherlands',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Dutch teams — strong in cloud-native, fintech, and enterprise SaaS — are running multi-cloud agentic AI on Kubernetes and need senior infrastructure depth.',
  marketContext:
    'The Netherlands is one of Europe’s most cloud-native markets, with a thriving fintech, enterprise SaaS, and logistics sector and major data-centre presence. Dutch teams lean into multi-cloud, platform engineering, and agent infrastructure.',
  industries: 'fintech and financial services, enterprise SaaS, logistics and supply chain, and technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Dutch/EU cloud regions.',
  marketLinks: [BANKING, RETAIL, SOVEREIGN],
  europe: true,
  residencyNote: 'Dutch fintech and enterprise workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

const france = countryPage({
  slug: 'kubernetes-ai-job-support-france',
  country: 'France',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'French teams — backed by a strong sovereign-AI agenda and leading open-model labs — are building private and sovereign AI on Kubernetes across banking, telecom, and the public sector.',
  marketContext:
    'France has a strong sovereign-AI agenda, leading open-weight model labs, and sizeable banking, telecom, aerospace, and public-sector demand. French teams emphasise sovereign and private AI, often on EU/French cloud regions or on-prem.',
  industries: 'banking and financial services, telecom, aerospace and defence, and public sector',
  cloudFocus: 'OpenShift and sovereign/EU cloud regions alongside Amazon EKS, Azure AKS, and Google GKE.',
  marketLinks: [BANKING, TELECOM, SOVEREIGN],
  europe: true,
  residencyNote: 'French banking, defence, and public-sector workloads emphasise sovereignty, so we focus on sovereign/regional inference, private deployment, isolation, and audit.',
});

const sweden = countryPage({
  slug: 'kubernetes-ai-job-support-sweden',
  country: 'Sweden',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Swedish teams — strong in telecom, industrial systems, and cloud-native product companies — are scaling AI on Kubernetes with high engineering standards.',
  marketContext:
    'Sweden has a mature cloud-native and product-engineering culture, with telecom (a global telecom-equipment heritage), industrial systems, fintech, and gaming driving AI demand. Nordic data-centre capacity and green energy make it an AI-infrastructure hub.',
  industries: 'telecom, industrial systems, fintech, and cloud-native product companies',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Nordic/EU cloud regions.',
  marketLinks: [TELECOM, MANUFACTURING, BANKING],
  europe: true,
  residencyNote: 'Swedish telecom and financial workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

const switzerland = countryPage({
  slug: 'kubernetes-ai-job-support-switzerland',
  country: 'Switzerland',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Swiss teams in banking, insurance, and pharma demand the strictest private and regulated AI on Kubernetes — frequently on-prem or in Swiss data centres.',
  marketContext:
    'Switzerland’s banking, insurance, and pharmaceutical sectors demand exceptional data protection and often require AI to run privately, on-prem, or in Swiss data centres. Regulated and private AI on Kubernetes is the dominant pattern.',
  industries: 'banking and wealth management, insurance, pharma and life sciences, and regulated enterprise',
  cloudFocus: 'OpenShift and private/on-prem clusters alongside Amazon EKS, Azure AKS, and Google GKE in Swiss/EU regions.',
  marketLinks: [BANKING, INSURANCE, HEALTHCARE],
  europe: true,
  residencyNote: 'Swiss banking, insurance, and pharma workloads demand the strictest data protection, so we focus on private/on-prem inference, isolation, and audit.',
});

const denmark = countryPage({
  slug: 'kubernetes-ai-job-support-denmark',
  country: 'Denmark',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Danish teams — strong in life sciences, energy, and cloud-native companies — are putting AI on Kubernetes into production with Nordic engineering rigour.',
  marketContext:
    'Denmark pairs a strong cloud-native culture with leading life-sciences, renewable-energy, and logistics sectors. Danish teams favour pragmatic, reliable AI infrastructure, often with EU data residency and green-energy data centres.',
  industries: 'life sciences and pharma, energy and renewables, logistics, and cloud-native technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Nordic/EU cloud regions.',
  marketLinks: [HEALTHCARE, MANUFACTURING, SOVEREIGN],
  europe: true,
  residencyNote: 'Danish life-sciences and energy workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

const finland = countryPage({
  slug: 'kubernetes-ai-job-support-finland',
  country: 'Finland',
  timezone: 'Eastern European Time (EET/EEST)',
  painHook:
    'Finnish teams — strong in telecom, industrial, and gaming — run AI on Kubernetes backed by abundant Nordic data-centre and green-energy capacity.',
  marketContext:
    'Finland combines a deep telecom and industrial engineering heritage with a strong gaming and cloud-native sector, and significant data-centre capacity powered by green energy. Finnish teams value efficient, reliable AI infrastructure.',
  industries: 'telecom, industrial systems, gaming, and cloud-native technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Nordic/EU cloud regions.',
  marketLinks: [TELECOM, MANUFACTURING, SOVEREIGN],
  europe: true,
  residencyNote: 'Finnish telecom and industrial workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

const norway = countryPage({
  slug: 'kubernetes-ai-job-support-norway',
  country: 'Norway',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Norwegian teams in energy, maritime, and the public sector are adopting AI on Kubernetes with strong data-sovereignty and reliability expectations.',
  marketContext:
    'Norway’s energy (oil, gas, and renewables), maritime, and public sectors drive AI demand, backed by abundant green energy and growing data-centre capacity. Data sovereignty and reliability are priorities for Norwegian teams.',
  industries: 'energy and maritime, public sector, financial services, and industrial technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Nordic/EU cloud regions.',
  marketLinks: [GOVERNMENT, MANUFACTURING, SOVEREIGN],
  europe: true,
  residencyNote: 'Norwegian energy and public-sector workloads emphasise data sovereignty, so we focus on regional/sovereign inference, isolation, and audit.',
});

const belgium = countryPage({
  slug: 'kubernetes-ai-job-support-belgium',
  country: 'Belgium',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Belgian teams — serving EU institutions, financial services, and logistics — run AI on Kubernetes under strong governance and multilingual, multi-region needs.',
  marketContext:
    'Belgium hosts EU institutions, a strong financial-services and logistics sector, and significant public-sector IT. Demand centres on governed, often sovereign AI infrastructure with multilingual and multi-region requirements.',
  industries: 'public sector and EU institutions, financial services, logistics, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with EU cloud regions.',
  marketLinks: [GOVERNMENT, BANKING, SOVEREIGN],
  europe: true,
  residencyNote: 'Belgian public-sector and EU-institution workloads emphasise governance and residency, so we focus on regional/sovereign inference, isolation, and audit.',
});

const austria = countryPage({
  slug: 'kubernetes-ai-job-support-austria',
  country: 'Austria',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Austrian teams in banking, industrial, and public sector are deploying AI on Kubernetes with strong engineering and data-protection standards.',
  marketContext:
    'Austria pairs a solid industrial and banking base with a growing technology sector, and shares the DACH region’s emphasis on engineering quality and data protection. Private and hybrid AI on Kubernetes is common.',
  industries: 'banking and financial services, industrial and manufacturing, public sector, and enterprise technology',
  cloudFocus: 'OpenShift and private/hybrid clusters alongside Amazon EKS, Azure AKS, and Google GKE in EU regions.',
  marketLinks: [BANKING, MANUFACTURING, SOVEREIGN],
  europe: true,
  residencyNote: 'Austrian banking and industrial workloads emphasise EU data protection, so we focus on regional/private inference, isolation, and audit.',
});

const spain = countryPage({
  slug: 'kubernetes-ai-job-support-spain',
  country: 'Spain',
  timezone: 'Central European Time (CET/CEST)',
  painHook:
    'Spanish teams in banking, telecom, and tourism/retail are scaling AI on Kubernetes, with Madrid and Barcelona emerging as strong engineering hubs.',
  marketContext:
    'Spain has a fast-growing technology sector led by Madrid and Barcelona, with strong banking, telecom, tourism, and retail demand. Spanish teams increasingly run agentic AI and LLM serving on Kubernetes with EU data residency.',
  industries: 'banking and financial services, telecom, tourism and retail, and technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Spanish/EU cloud regions.',
  marketLinks: [BANKING, TELECOM, RETAIL],
  europe: true,
  residencyNote: 'Spanish banking and telecom workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

const portugal = countryPage({
  slug: 'kubernetes-ai-job-support-portugal',
  country: 'Portugal',
  timezone: 'Western European Time (WET/WEST)',
  painHook:
    'Portuguese teams — in a fast-growing Lisbon and Porto tech scene — are building AI on Kubernetes for local and nearshore European clients.',
  marketContext:
    'Portugal has a rapidly growing technology and startup ecosystem (Lisbon, Porto) and is a major nearshore engineering base for European companies. Demand spans SaaS, fintech, and enterprise AI infrastructure with EU data residency.',
  industries: 'SaaS and startups, fintech and financial services, nearshore enterprise engineering, and retail',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with EU cloud regions.',
  marketLinks: [BANKING, RETAIL, SOVEREIGN],
  europe: true,
  residencyNote: 'Portuguese fintech and nearshore workloads operate under EU data-protection expectations, so we emphasise regional inference, isolation, and audit.',
});

export const kubernetesCountryPages: LandingPageConfig[] = [
  // Global markets
  usa, canada, uk, australia, newZealand, singapore, hongKong, uae, saudi,
  // Europe hub + countries
  europeHub, ireland, germany, netherlands, france, sweden, switzerland,
  denmark, finland, norway, belgium, austria, spain, portugal,
];
