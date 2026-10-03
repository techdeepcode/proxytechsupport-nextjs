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
  EKS_AGENTIC_LINK,
  AKS_AGENTIC_LINK,
  GKE_AGENTIC_LINK,
} from './shared';

interface CityCtx {
  slug: string;
  city: string;
  country: string;
  countrySlug: string; // parent country page slug (for breadcrumb + link)
  europe?: boolean;
  timezone: string;
  /** Unique 2–3 sentence local tech-scene context. */
  cityContext: string;
  painHook: string;
  industries: string;
  cloudFocus: string;
  marketLinks: LandingRelatedLink[];
}

function cityFaqs(ctx: CityCtx): LandingFaqItem[] {
  return [
    {
      question: `Do you provide Kubernetes AI job support in ${ctx.city}?`,
      answer: `Yes. We provide real-time Kubernetes AI infrastructure job support for engineers and teams in ${ctx.city}, ${ctx.country} — LLM inference (vLLM, KServe, NVIDIA Dynamo), GPU scheduling and DRA, agent runtimes and MCP, autoscaling, observability, security, and cost — aligned to ${ctx.timezone} and available 24/7 for production incidents. Same-day start, fully confidential.`,
    },
    {
      question: `Which ${ctx.city} industries and clouds do you cover?`,
      answer: `${ctx.city} work spans ${ctx.industries}, on ${ctx.cloudFocus} We tailor the architecture — private vs managed inference, GPU scheduling, and scaling — to each team’s reliability, governance, and cost needs.`,
    },
    {
      question: `Can you help with live production AI incidents for ${ctx.city} teams?`,
      answer: `Yes. We provide 24/7 incident support — GPU Pods Pending, vLLM OOM, high TTFT, model-loading failures, autoscaling failures, agent loops, and MCP errors — with an engineer on the call reading your events, logs, and metrics until the system is stable, then hardening it against a repeat.`,
    },
    {
      question: `Is the support confidential and how do I start?`,
      answer: `Every engagement is confidential with NDAs available on request. Message us on WhatsApp with your cluster, cloud, and situation (job support, production incident, interview, or profile) — we match you with the right expert for ${ctx.city}, usually the same day. We do not guarantee interview selection or employment; hiring decisions are made solely by employers.`,
    },
  ];
}

export const kubernetesCityBreadcrumbMap: Record<string, { city: string; country: string; countrySlug: string; europe: boolean }> = {};

function cityPage(ctx: CityCtx): LandingPageConfig {
  kubernetesCityBreadcrumbMap[ctx.slug] = {
    city: ctx.city,
    country: ctx.country,
    countrySlug: ctx.countrySlug,
    europe: !!ctx.europe,
  };
  const countryLink: LandingRelatedLink = { label: `${ctx.country} Kubernetes AI`, href: `/${ctx.countrySlug}/` };
  return k8sPage({
    slug: ctx.slug,
    title: `Kubernetes AI Job Support ${ctx.city} — Agents, GPU & Inference Infrastructure`,
    description: `Real-time Kubernetes AI job support, production incident help, and interview support in ${ctx.city}, ${ctx.country}: agentic AI, LLM inference (vLLM, KServe, Dynamo), GPU scheduling, MCP, AI SRE, security & FinOps across EKS, AKS, GKE, OpenShift & on-prem. ${ctx.timezone}, 24/7 incidents.`,
    keywords: [
      `Kubernetes AI job support ${ctx.city}`, `AI infrastructure support ${ctx.city}`, `GPU Kubernetes ${ctx.city}`,
      `LLM inference ${ctx.city}`, `platform engineer ${ctx.city}`, `MLOps support ${ctx.city}`,
    ],
    h1: `Kubernetes AI Job Support in ${ctx.city} — Production AI, Agents, GPU & Inference`,
    tagline: `Real-time job support, production incident help, and interview assistance for operating production AI and autonomous agents on Kubernetes across ${ctx.city}, ${ctx.country}.`,
    heroEyebrow: `Kubernetes AI Support — ${ctx.city}`,
    painIntro: ctx.painHook,
    heroVariant: `${ctx.cityContext} We support ${ctx.city} teams across the full stack — Kubernetes v1.37 scheduling (DRA, gang scheduling), GPU/NVIDIA operators, LLM serving (vLLM, KServe, NVIDIA Dynamo, SGLang, TensorRT-LLM, NIM), agent runtimes and sandboxes, MCP, AI observability, security, and FinOps — on ${ctx.cloudFocus} From daily job support to 24/7 production firefighting, live interview guidance, and profile positioning, this is your ${ctx.city} entry point, nested under our ${ctx.country} coverage and the global Kubernetes AI knowledge graph.`,
    geoLine: `Real-time Kubernetes AI infrastructure support for engineers and teams in and around ${ctx.city}, ${ctx.country}, aligned to ${ctx.timezone}.`,
    timezoneNote: `Aligned to ${ctx.timezone} business hours and available 24/7 for urgent production incidents.`,
    highlights: jobSupportHighlights,
    faqs: cityFaqs(ctx),
    useCasesSection: {
      title: `What We Help ${ctx.city} Teams With`,
      cases: [
        `Running production LLM inference (vLLM, KServe, Dynamo) on EKS, AKS, GKE, or OpenShift in ${ctx.city}`,
        `GPU scheduling, DRA, and gang scheduling so training and multi-node inference stay reliable and affordable`,
        `Agent runtimes, sandboxes, and MCP secured with least-privilege identity and egress control`,
        `AI observability and SRE so a healthy Pod actually means a healthy AI application`,
        `Cost/FinOps work to reclaim idle GPU and scale agents to zero`,
        `24/7 production incident firefighting and live interview support for ${ctx.city} roles`,
      ],
    },
    bottomCTAHeading: `Need Kubernetes AI Support in ${ctx.city} Right Now?`,
    bottomCTABody: `In-house Kubernetes, GPU, inference, and agent-platform experts aligned to ${ctx.timezone} and available 24/7 for incidents — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [countryLink, K8S_HUB_LINK],
      techLinks: [K8S_INFERENCE_HUB_LINK, K8S_AGENTIC_HUB_LINK],
      problemLink: K8S_PRODUCTION_LINK,
      proxyLink: K8S_INTERVIEW_LINK,
      additionalLinks: [
        countryLink, EKS_AGENTIC_LINK, AKS_AGENTIC_LINK, GKE_AGENTIC_LINK,
        K8S_GPU_LINK, K8S_SRE_LINK, K8S_SECURITY_LINK, K8S_PRIVATE_AI_LINK,
        ...ctx.marketLinks,
        EXISTING.awsAiMl, EXISTING.azureAiMl, EXISTING.agenticAi,
      ],
    }),
  });
}

const BANKING: LandingRelatedLink = { label: 'Banking & financial services AI', href: '/kubernetes-ai-banking-financial-services-job-support/' };
const HEALTHCARE: LandingRelatedLink = { label: 'Healthcare AI on Kubernetes', href: '/kubernetes-ai-healthcare-job-support/' };
const TELECOM: LandingRelatedLink = { label: 'Telecom AI on Kubernetes', href: '/kubernetes-ai-telecom-job-support/' };
const MANUFACTURING: LandingRelatedLink = { label: 'Manufacturing AI on Kubernetes', href: '/kubernetes-ai-manufacturing-job-support/' };
const AUTOMOTIVE: LandingRelatedLink = { label: 'Automotive AI on Kubernetes', href: '/kubernetes-ai-automotive-job-support/' };
const RETAIL: LandingRelatedLink = { label: 'Retail & e-commerce AI', href: '/kubernetes-ai-retail-ecommerce-job-support/' };
const GOVERNMENT: LandingRelatedLink = { label: 'Government & public sector AI', href: '/kubernetes-ai-government-public-sector-job-support/' };
const INSURANCE: LandingRelatedLink = { label: 'Insurance AI on Kubernetes', href: '/kubernetes-ai-insurance-job-support/' };

// ─── USA cities ─────────────────────────────────────────────────────────────

const sanFrancisco = cityPage({
  slug: 'kubernetes-ai-job-support-san-francisco',
  city: 'San Francisco Bay Area', country: 'USA', countrySlug: 'kubernetes-ai-job-support-usa',
  timezone: 'US Pacific time',
  painHook: 'The Bay Area ships frontier agentic AI and LLM serving on Kubernetes at a pace that breaks GPU scheduling, inference latency, and reliability in ways few teams have seen before.',
  cityContext: 'The San Francisco Bay Area is the global epicentre of frontier AI — foundation-model labs, AI-native startups, and hyperscaler teams running the largest GPU fleets and the most aggressive agentic-AI deployments on EKS, GKE, and bare-metal.',
  industries: 'foundation-model labs, AI-native startups, enterprise SaaS, and fintech',
  cloudFocus: 'Amazon EKS, Google GKE, and large on-prem/colo GPU clusters.',
  marketLinks: [BANKING, RETAIL],
});

const newYork = cityPage({
  slug: 'kubernetes-ai-job-support-new-york',
  city: 'New York', country: 'USA', countrySlug: 'kubernetes-ai-job-support-usa',
  timezone: 'US Eastern time',
  painHook: 'New York finance, media, and enterprise teams run regulated, low-latency AI on Kubernetes — where governance and reliability expectations are as high as the GPU bill.',
  cityContext: 'New York pairs Wall Street and fintech with a deep media, advertising, and enterprise-tech scene. AI infrastructure here emphasises governance, low latency, and regulated/private deployment across the major clouds.',
  industries: 'banking and capital markets, fintech, media and advertising, and enterprise SaaS',
  cloudFocus: 'Amazon EKS, Azure AKS, and OpenShift with US East cloud regions.',
  marketLinks: [BANKING, RETAIL, INSURANCE],
});

const seattle = cityPage({
  slug: 'kubernetes-ai-job-support-seattle',
  city: 'Seattle', country: 'USA', countrySlug: 'kubernetes-ai-job-support-usa',
  timezone: 'US Pacific time',
  painHook: 'Seattle is a cloud-and-AI engineering hub where teams run AI infrastructure at hyperscaler-grade depth — and expect that same depth from their support.',
  cityContext: 'Seattle is home to major cloud providers and a dense ecosystem of cloud-native and AI engineering teams. Expectations here are deeply technical — large-scale inference, GPU efficiency, and platform engineering on EKS and GKE.',
  industries: 'cloud and hyperscaler ecosystems, enterprise SaaS, e-commerce, and aerospace',
  cloudFocus: 'Amazon EKS, Google GKE, and large on-prem GPU clusters.',
  marketLinks: [RETAIL, MANUFACTURING],
});

const austin = cityPage({
  slug: 'kubernetes-ai-job-support-austin',
  city: 'Austin', country: 'USA', countrySlug: 'kubernetes-ai-job-support-usa',
  timezone: 'US Central time',
  painHook: 'Austin’s fast-growing tech and semiconductor scene is scaling AI on Kubernetes quickly — and needs senior infrastructure depth on demand.',
  cityContext: 'Austin has become a major US tech hub with strong semiconductor, startup, and enterprise-relocation presence. Teams here build modern AI platforms on the major clouds with a pragmatic, cost-aware approach.',
  industries: 'semiconductors and hardware, startups and SaaS, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, and Google GKE with US Central cloud regions.',
  marketLinks: [MANUFACTURING, RETAIL],
});

const toronto = cityPage({
  slug: 'kubernetes-ai-job-support-toronto',
  city: 'Toronto', country: 'Canada', countrySlug: 'kubernetes-ai-job-support-canada',
  timezone: 'Canadian Eastern time',
  painHook: 'Toronto’s banking core and deep AI-research ecosystem run AI on Kubernetes under data-residency expectations and a tight senior-talent market.',
  cityContext: 'Toronto combines Canada’s banking capital with one of the world’s strongest AI-research communities. Demand centres on reliable, often in-region AI infrastructure for financial services and enterprise.',
  industries: 'banking and financial services, insurance, AI research, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, and Google GKE with Canadian cloud regions.',
  marketLinks: [BANKING, INSURANCE],
});

// ─── UK / Ireland ─────────────────────────────────────────────────────────────

const london = cityPage({
  slug: 'kubernetes-ai-job-support-london',
  city: 'London', country: 'United Kingdom', countrySlug: 'kubernetes-ai-job-support-uk',
  timezone: 'UK (GMT/BST)',
  painHook: 'London’s financial, fintech, and AI-startup density means production AI on Kubernetes under FCA-grade governance — and little tolerance for downtime.',
  cityContext: 'London is Europe’s largest financial and fintech centre with a thriving AI-startup scene. AI infrastructure here emphasises governance, reliability, and increasingly private or in-region deployment.',
  industries: 'banking and capital markets, fintech, insurance, retail, and media',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with UK cloud regions.',
  marketLinks: [BANKING, INSURANCE, RETAIL],
});

const dublin = cityPage({
  slug: 'kubernetes-ai-job-support-dublin',
  city: 'Dublin', country: 'Ireland', countrySlug: 'kubernetes-ai-job-support-ireland', europe: true,
  timezone: 'Irish Standard Time (GMT/IST)',
  painHook: 'Dublin runs the European operations of most hyperscalers and SaaS giants — so teams here operate AI on Kubernetes at multinational, multi-cloud scale.',
  cityContext: 'Dublin is the European base for AWS, Microsoft, Google, and countless multinational SaaS and pharma companies, and a major cloud-operations and SRE hub. Demand centres on multi-cloud AI infrastructure and reliability at scale.',
  industries: 'cloud operations and SaaS, pharma and life sciences, and financial services',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Irish/EU cloud regions.',
  marketLinks: [BANKING, HEALTHCARE],
});

// ─── Germany ────────────────────────────────────────────────────────────────

const berlin = cityPage({
  slug: 'kubernetes-ai-job-support-berlin',
  city: 'Berlin', country: 'Germany', countrySlug: 'kubernetes-ai-job-support-germany', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Berlin’s startup and scale-up scene builds agentic AI on Kubernetes fast — under EU data-residency expectations and strong engineering standards.',
  cityContext: 'Berlin is Germany’s startup capital with a dense scale-up, fintech, and enterprise-SaaS ecosystem. Teams here run modern, often multi-cloud AI platforms with EU data residency in mind.',
  industries: 'startups and scale-ups, fintech, enterprise SaaS, and mobility',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift in EU regions.',
  marketLinks: [BANKING, AUTOMOTIVE, RETAIL],
});

const frankfurt = cityPage({
  slug: 'kubernetes-ai-job-support-frankfurt',
  city: 'Frankfurt', country: 'Germany', countrySlug: 'kubernetes-ai-job-support-germany', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Frankfurt’s banking core and the continent’s largest data-centre hub run regulated, private AI on Kubernetes — frequently on OpenShift and in-region.',
  cityContext: 'Frankfurt is Germany’s financial capital and one of Europe’s biggest data-centre and cloud-region hubs. Demand centres on regulated, private/hybrid AI infrastructure with strict EU data residency.',
  industries: 'banking and financial services, insurance, and data-centre/cloud infrastructure',
  cloudFocus: 'OpenShift and private/hybrid clusters alongside EKS, AKS, and GKE in Frankfurt/EU regions.',
  marketLinks: [BANKING, INSURANCE],
});

const munich = cityPage({
  slug: 'kubernetes-ai-job-support-munich',
  city: 'Munich', country: 'Germany', countrySlug: 'kubernetes-ai-job-support-germany', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Munich’s automotive, industrial, and insurance base runs AI on Kubernetes with rigorous engineering and data-residency standards — often private and hybrid.',
  cityContext: 'Munich is a powerhouse of automotive, industrial engineering, insurance, and deep-tech. AI infrastructure here leans private/hybrid (often OpenShift), with heavy emphasis on manufacturing and automotive AI.',
  industries: 'automotive, manufacturing and Industrie 4.0, insurance, and deep-tech',
  cloudFocus: 'OpenShift and private/hybrid clusters alongside EKS, AKS, and GKE in EU regions.',
  marketLinks: [AUTOMOTIVE, MANUFACTURING, INSURANCE],
});

// ─── Other European cities ──────────────────────────────────────────────────

const amsterdam = cityPage({
  slug: 'kubernetes-ai-job-support-amsterdam',
  city: 'Amsterdam', country: 'Netherlands', countrySlug: 'kubernetes-ai-job-support-netherlands', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Amsterdam’s cloud-native, fintech, and data-centre density means multi-cloud agentic AI on Kubernetes at serious scale.',
  cityContext: 'Amsterdam is one of Europe’s most cloud-native cities, with a strong fintech, enterprise-SaaS, and data-centre presence and a major internet exchange. Teams here lean into multi-cloud and agent infrastructure.',
  industries: 'fintech and financial services, enterprise SaaS, logistics, and data-centre infrastructure',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Dutch/EU cloud regions.',
  marketLinks: [BANKING, RETAIL],
});

const paris = cityPage({
  slug: 'kubernetes-ai-job-support-paris',
  city: 'Paris', country: 'France', countrySlug: 'kubernetes-ai-job-support-france', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Paris — home to leading open-model labs and a strong sovereign-AI agenda — builds private and sovereign AI on Kubernetes across banking, telecom, and the public sector.',
  cityContext: 'Paris anchors France’s AI ecosystem, including leading open-weight model labs and a strong sovereign-AI push. Demand centres on sovereign and private AI, often on EU/French cloud regions or on-prem.',
  industries: 'banking and financial services, telecom, aerospace and defence, and public sector',
  cloudFocus: 'OpenShift and sovereign/EU cloud regions alongside EKS, AKS, and GKE.',
  marketLinks: [BANKING, TELECOM, GOVERNMENT],
});

const zurich = cityPage({
  slug: 'kubernetes-ai-job-support-zurich',
  city: 'Zurich', country: 'Switzerland', countrySlug: 'kubernetes-ai-job-support-switzerland', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Zurich’s banking, insurance, and pharma base demands the strictest private and regulated AI on Kubernetes — frequently on-prem or in Swiss data centres.',
  cityContext: 'Zurich is Switzerland’s financial and tech capital, with banking, insurance, pharma, and a strong research presence. Regulated and private AI on Kubernetes — on-prem or in Swiss data centres — is the dominant pattern.',
  industries: 'banking and wealth management, insurance, pharma, and regulated enterprise',
  cloudFocus: 'OpenShift and private/on-prem clusters alongside EKS, AKS, and GKE in Swiss/EU regions.',
  marketLinks: [BANKING, INSURANCE, HEALTHCARE],
});

const stockholm = cityPage({
  slug: 'kubernetes-ai-job-support-stockholm',
  city: 'Stockholm', country: 'Sweden', countrySlug: 'kubernetes-ai-job-support-sweden', europe: true,
  timezone: 'Central European Time (CET/CEST)',
  painHook: 'Stockholm’s telecom, fintech, and product-engineering scene runs AI on Kubernetes with high standards and green-powered Nordic data centres.',
  cityContext: 'Stockholm is a Nordic tech capital with deep telecom, fintech, gaming, and product-engineering roots, backed by green-energy data centres. Teams here value efficient, reliable, well-architected AI infrastructure.',
  industries: 'telecom, fintech, gaming, and cloud-native product companies',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Nordic/EU cloud regions.',
  marketLinks: [TELECOM, BANKING],
});

// ─── Australia / UAE ──────────────────────────────────────────────────────────

const sydney = cityPage({
  slug: 'kubernetes-ai-job-support-sydney',
  city: 'Sydney', country: 'Australia', countrySlug: 'kubernetes-ai-job-support-australia',
  timezone: 'Australian Eastern time',
  painHook: 'Sydney’s banking, government, and tech teams run AI on Kubernetes under strict data-sovereignty rules and APAC-wide latency expectations.',
  cityContext: 'Sydney is Australia’s financial and tech capital, with strong banking, government, and cloud-native sectors and a focus on data sovereignty. AI infrastructure often runs in Australian cloud regions.',
  industries: 'banking and financial services, government, healthcare, and technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Australian cloud regions.',
  marketLinks: [BANKING, GOVERNMENT, HEALTHCARE],
});

const melbourne = cityPage({
  slug: 'kubernetes-ai-job-support-melbourne',
  city: 'Melbourne', country: 'Australia', countrySlug: 'kubernetes-ai-job-support-australia',
  timezone: 'Australian Eastern time',
  painHook: 'Melbourne’s finance, healthcare, and research teams scale AI on Kubernetes with strong governance and data-sovereignty expectations.',
  cityContext: 'Melbourne pairs financial services and insurance with a strong healthcare, university-research, and enterprise-tech base. Demand centres on governed, often in-region AI infrastructure.',
  industries: 'financial services and insurance, healthcare, research, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, and OpenShift with Australian cloud regions.',
  marketLinks: [BANKING, HEALTHCARE, INSURANCE],
});

const dubai = cityPage({
  slug: 'kubernetes-ai-job-support-dubai',
  city: 'Dubai', country: 'UAE', countrySlug: 'kubernetes-ai-job-support-uae',
  timezone: 'Gulf Standard Time (GST)',
  painHook: 'Dubai’s government, banking, and smart-city programmes invest heavily in sovereign AI and GPU infrastructure on Kubernetes — with in-country data expectations.',
  cityContext: 'Dubai is a regional hub for smart-government, banking, and enterprise AI, with major investment in sovereign AI and national GPU capacity. Demand centres on sovereign/private AI with in-country data residency.',
  industries: 'government and smart-city, banking and financial services, logistics, and enterprise technology',
  cloudFocus: 'Amazon EKS, Azure AKS, Google GKE, OpenShift, and sovereign on-prem GPU clusters in the UAE.',
  marketLinks: [GOVERNMENT, BANKING],
});

export const kubernetesCityPages: LandingPageConfig[] = [
  // USA
  sanFrancisco, newYork, seattle, austin,
  // Canada
  toronto,
  // UK / Ireland
  london, dublin,
  // Germany
  berlin, frankfurt, munich,
  // Other Europe
  amsterdam, paris, zurich, stockholm,
  // Australia / UAE
  sydney, melbourne, dubai,
];
