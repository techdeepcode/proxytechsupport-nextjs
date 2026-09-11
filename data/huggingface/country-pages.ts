import type { LandingPageConfig } from '../landing-pages';
import {
  hfPage,
  relatedLinks,
  jobSupportHighlights,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_ENGINEER_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_PEFT_LINK,
  HF_QLORA_LINK,
  HF_TRL_LINK,
  HF_RAG_HUB_LINK,
  HF_SERVING_LINK,
  HF_VLLM_LINK,
  HF_ENDPOINTS_LINK,
  HF_AWS_LINK,
  HF_AZURE_LINK,
  HF_GCP_LINK,
} from './shared';

// Geo pages are differentiated by real market context (dominant sectors, cloud
// mix, role terminology, tech hubs, and timezone coverage) — never a find/replace
// of one template. No fabricated statistics.

const USA_LINK = { label: 'Hugging Face job support USA', href: '/hugging-face-proxy-job-support-usa/' };
const CANADA_LINK = { label: 'Hugging Face job support Canada', href: '/hugging-face-proxy-job-support-canada/' };
const UK_LINK = { label: 'Hugging Face job support UK', href: '/hugging-face-proxy-job-support-uk/' };
const AUS_LINK = { label: 'Hugging Face job support Australia', href: '/hugging-face-proxy-job-support-australia/' };
const DE_LINK = { label: 'Hugging Face job support Germany', href: '/hugging-face-proxy-job-support-germany/' };
const SG_LINK = { label: 'Hugging Face job support Singapore', href: '/hugging-face-proxy-job-support-singapore/' };
const UAE_LINK = { label: 'Hugging Face job support UAE', href: '/hugging-face-proxy-job-support-uae/' };

// ─── USA ─────────────────────────────────────────────────────────────────────

export const usa: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-usa',
  title: 'Hugging Face Job Support USA | LLM & GenAI Proxy Support (US Hours)',
  description:
    'Hugging Face proxy job support and interview support for engineers in the USA — Transformers, PEFT/LoRA, TRL, RAG, and LLM serving, aligned to US business hours and the American AI hiring market (Bay Area, Seattle, NYC, Austin, Boston).',
  keywords: [
    'Hugging Face job support USA', 'LLM job support USA', 'GenAI proxy job support US', 'Hugging Face interview support USA',
    'AI engineer job support America', 'US timezone LLM support',
  ],
  h1: 'Hugging Face Proxy Job Support — USA',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers across the United States — aligned to PST/CST/EST working hours and the demands of the US GenAI market.',
  heroEyebrow: 'USA · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'Working on an LLM project at a US employer and need implementation-level help during your own working hours, or facing a GenAI interview at a Bay Area product company? We provide Hugging Face proxy job support and proxy interview support aligned to US time zones and the American hiring bar.',
  heroVariant:
    'The US market sets the pace for generative AI: frontier-model labs and AI-native startups concentrated in the San Francisco Bay Area, big-tech and cloud AI in Seattle, finance and media AI in New York, and fast-growing hubs in Austin, Boston, and Dallas. American teams lean heavily on AWS (SageMaker, Bedrock alongside open models), and increasingly self-host open Hugging Face models with vLLM on their own GPUs for cost and control. Roles are usually titled LLM Engineer, Generative AI Engineer, Applied AI Engineer, or ML Engineer, and interviews are demanding — live coding plus deep LLM system design. We provide proxy job support on the real stack (Transformers, PEFT/LoRA/QLoRA, TRL, RAG with Sentence Transformers, and serving) and proxy interview support calibrated to US formats, all during your working hours.',
  geoLine:
    'Supporting Hugging Face and LLM engineers across the USA — San Francisco Bay Area, Seattle, New York, Austin, Dallas, Boston, Chicago, and remote-first teams nationwide.',
  timezoneNote: 'Available across US business hours — Pacific, Mountain, Central, and Eastern.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you support US working hours and time zones?',
      answer:
        'Yes. Our engineers cover Pacific, Mountain, Central, and Eastern business hours, so proxy job support and production help happen live during your actual working day, whether you are in the Bay Area, Austin, or on the East Coast.',
    },
    {
      question: 'What does the US GenAI hiring market look for?',
      answer:
        'US interviews are among the most demanding — strong coding, plus LLM system design (serving at scale, RAG architecture, fine-tuning strategy, cost/latency trade-offs). Product companies and AI startups expect hands-on experience with the open-model stack (Transformers, vLLM, PEFT/TRL) and cloud (mostly AWS). We calibrate support to that bar.',
    },
    {
      question: 'Is the support confidential for US employers and contracts?',
      answer:
        'Completely. Every engagement — job support, production help, or interview support — is confidential, and NDAs are available. We do not disclose employer or client information, and we do not access your systems without your explicit direction.',
    },
  ],
  useCasesSection: {
    title: 'What We Help US-Based Engineers With',
    cases: [
      'Shipping sprint deliverables on a Transformers/PEFT/TRL stack during US working hours',
      'Self-hosting open models with vLLM on AWS EC2/EKS GPU instances for cost control',
      'RAG systems for enterprise search and support at US product companies and banks',
      'Preparing for demanding Bay Area / Seattle GenAI interviews (coding + LLM system design)',
      'Migrating a legacy TGI deployment to vLLM without regressing latency',
    ],
  },
  proxySection: {
    title: 'US GenAI Interview & Candidate Marketing Support',
    intro:
      'The US market is competitive and keyword-driven. We help you both clear demanding interviews and get found by American recruiters and staffing firms.',
    points: [
      'Live proxy interview support for coding and LLM system-design rounds at US companies',
      'Resume and LinkedIn positioning for the exact terms US GenAI recruiters and ATS screen for',
      'Support across full-time and C2C/W2 contract searches',
      'Real-time job support to deliver confidently once you are in the role',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in US Business Hours?',
  bottomCTABody:
    'In-house LLM engineers available across US time zones — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, CANADA_LINK],
    techLinks: [HF_AWS_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK, HF_RAG_HUB_LINK, HF_SERVING_LINK, HF_ENGINEER_LINK, UK_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.awsHub, EXISTING.getLlmScheduled,
    ],
  }),
});

// ─── Canada ──────────────────────────────────────────────────────────────────

export const canada: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-canada',
  title: 'Hugging Face Job Support Canada | LLM & GenAI Proxy Support (Toronto, Vancouver)',
  description:
    'Hugging Face proxy job support and interview support for engineers in Canada — Transformers, fine-tuning, RAG, and LLM serving, aligned to Canadian business hours and AI hubs in Toronto, Montreal, and Vancouver.',
  keywords: [
    'Hugging Face job support Canada', 'LLM job support Toronto', 'GenAI proxy support Canada', 'AI engineer support Vancouver',
    'Montreal AI job support', 'Canadian timezone LLM support',
  ],
  h1: 'Hugging Face Proxy Job Support — Canada',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers across Canada — aligned to Canadian working hours and the AI research and enterprise ecosystem in Toronto, Montreal, and Vancouver.',
  heroEyebrow: 'Canada · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'Building with Hugging Face at a Canadian employer, or interviewing for a GenAI role in Toronto or Vancouver? We provide proxy job support and proxy interview support aligned to Canadian time zones and the local market.',
  heroVariant:
    'Canada has a distinctive AI ecosystem anchored by deep research roots — the Vector Institute in Toronto, Mila in Montreal, and Amii in Edmonton — which feeds a strong applied-AI talent market. Toronto is the largest hub (finance, enterprise, and a dense startup scene), Montreal blends research and industry with a bilingual context, and Vancouver hosts gaming, film/VFX (a natural fit for Diffusers-based generative media), and West-Coast-adjacent tech. Canadian enterprises often care about data residency, so private Inference Endpoints and cloud regions in-country matter. Roles span ML Engineer, Applied AI/NLP Engineer, and LLM Engineer. We provide proxy job support on Transformers, PEFT/TRL fine-tuning, RAG, Diffusers, and serving, plus interview support calibrated to Canadian formats — all in your working hours.',
  geoLine:
    'Supporting Hugging Face and LLM engineers across Canada — Toronto, Montreal, Vancouver, Ottawa, Waterloo, and Calgary.',
  timezoneNote: 'Available across Canadian business hours — Pacific, Mountain, Central, Eastern, and Atlantic.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you cover Canadian time zones?',
      answer:
        'Yes — from Pacific (Vancouver) through Eastern (Toronto, Montreal, Ottawa) to Atlantic. Live proxy job support and production help run during your Canadian working hours.',
    },
    {
      question: 'Can you help with data-residency-sensitive deployments?',
      answer:
        'Yes. Many Canadian organisations need data to stay in-country. We help architect private/dedicated Inference Endpoints and cloud-region choices so open-model deployments meet data-residency expectations, and we advise on token/secret handling — without making legal or compliance guarantees.',
    },
    {
      question: 'Which roles and skills does the Canadian market emphasise?',
      answer:
        'ML Engineer, Applied AI/NLP Engineer, and LLM Engineer roles, with strong research influence from Vector, Mila, and Amii. Employers value solid fundamentals plus practical Hugging Face experience (fine-tuning, RAG, serving). We calibrate interview and job support accordingly.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Canada-Based Engineers With',
    cases: [
      'Delivering LLM/RAG features at Toronto finance and enterprise teams during EST hours',
      'Generative-media work with Diffusers in Vancouver’s gaming/VFX studios',
      'Data-residency-aware deployment with private Inference Endpoints and Canadian cloud regions',
      'Fine-tuning with PEFT/QLoRA on limited GPU budgets at startups and scale-ups',
      'Preparing for GenAI interviews across Toronto, Montreal, and Vancouver',
    ],
  },
  proxySection: {
    title: 'Canadian GenAI Interview & Candidate Marketing Support',
    intro:
      'We help Canadian candidates clear interviews and reach recruiters across the country’s AI hubs.',
    points: [
      'Live proxy interview support calibrated to Canadian company formats',
      'Profile positioning for Toronto, Montreal, and Vancouver GenAI roles',
      'Support for full-time and contract searches, including bilingual (Montreal) contexts',
      'Real-time job support to deliver confidently after you land the role',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in Canadian Hours?',
  bottomCTABody:
    'In-house LLM engineers available across Canadian time zones — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, USA_LINK],
    techLinks: [HF_RAG_HUB_LINK, HF_QLORA_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_TRL_LINK, HF_ENDPOINTS_LINK, HF_SERVING_LINK, HF_ENGINEER_LINK, UK_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.rag, EXISTING.getLlmScheduled,
    ],
  }),
});

// ─── UK ──────────────────────────────────────────────────────────────────────

export const uk: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-uk',
  title: 'Hugging Face Job Support UK | LLM & GenAI Proxy Support (London Hours)',
  description:
    'Hugging Face proxy job support and interview support for engineers in the UK — Transformers, fine-tuning, RAG, and LLM serving, aligned to UK business hours and the London, Manchester, Edinburgh AI market. IR35-aware contract support.',
  keywords: [
    'Hugging Face job support UK', 'LLM job support London', 'GenAI proxy support UK', 'AI engineer support Manchester',
    'IR35 contract AI support', 'UK timezone LLM support',
  ],
  h1: 'Hugging Face Proxy Job Support — United Kingdom',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers across the UK — aligned to GMT/BST working hours and the London-led AI, fintech, and consultancy market.',
  heroEyebrow: 'UK · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'On an LLM project at a UK employer or consultancy, or interviewing for a GenAI role in London? We provide Hugging Face proxy job support and proxy interview support aligned to UK working hours and the local hiring landscape.',
  heroVariant:
    'The UK’s AI economy is led by London — a global hub for fintech, banking, insurance, media, and a mature AI research and startup scene (DeepMind’s home city), with strong secondary hubs in Manchester, Cambridge, Edinburgh, and Bristol. UK enterprises and the large consultancies/SIs that serve them deploy across all three clouds, with notable Azure and AWS presence in regulated finance. A defining feature of the UK contract market is IR35, so many GenAI roles are inside/outside-IR35 contracts as well as permanent. Titles include Machine Learning Engineer, NLP Engineer, LLM/GenAI Engineer, and AI Consultant. We provide proxy job support on the Hugging Face stack (Transformers, PEFT/TRL, RAG, serving) and interview support tuned to UK formats and the consultancy interview style, during your working hours.',
  geoLine:
    'Supporting Hugging Face and LLM engineers across the UK — London, Manchester, Cambridge, Edinburgh, Bristol, Leeds, and remote teams.',
  timezoneNote: 'Available across UK business hours (GMT/BST) and aligned with European overlap.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you support UK working hours?',
      answer:
        'Yes — our engineers cover GMT/BST business hours, so proxy job support, production help, and interview support run live during your UK working day, with natural overlap into European hours.',
    },
    {
      question: 'Do you understand IR35 and UK contract structures?',
      answer:
        'Yes. The UK GenAI market has significant inside/outside-IR35 contracting alongside permanent roles. We support engineers in both, and position candidate profiles appropriately for contract and permanent GenAI searches — though we do not provide tax or legal advice.',
    },
    {
      question: 'What do UK GenAI interviews emphasise?',
      answer:
        'A mix of solid engineering fundamentals, practical Hugging Face experience (fine-tuning, RAG, serving), and — especially at consultancies and banks — clear communication and system-design reasoning. We calibrate interview support to the specific company and format, including consultancy case-style rounds.',
    },
  ],
  useCasesSection: {
    title: 'What We Help UK-Based Engineers With',
    cases: [
      'RAG and LLM features at London fintech, banking, and insurance teams during UK hours',
      'GenAI delivery on client engagements at UK consultancies and SIs',
      'Azure- and AWS-based deployment in regulated financial environments',
      'Inside/outside-IR35 contract delivery with confidential real-time support',
      'Preparing for London GenAI interviews, including consultancy case rounds',
    ],
  },
  proxySection: {
    title: 'UK GenAI Interview & Candidate Marketing Support',
    intro:
      'We help UK candidates clear interviews and reach recruiters across London and the regional hubs, for both permanent and contract roles.',
    points: [
      'Live proxy interview support calibrated to UK and consultancy formats',
      'Profile positioning for London and regional GenAI/AI-consulting roles',
      'Support for permanent and inside/outside-IR35 contract searches',
      'Real-time job support to deliver confidently on client and in-house projects',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in UK Business Hours?',
  bottomCTABody:
    'In-house LLM engineers available across GMT/BST — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, DE_LINK],
    techLinks: [HF_AZURE_LINK, HF_RAG_HUB_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK, HF_SERVING_LINK, HF_ENGINEER_LINK, USA_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.azureHub, EXISTING.getLlmScheduled,
    ],
  }),
});

// ─── Australia ──────────────────────────────────────────────────────────────

export const australia: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-australia',
  title: 'Hugging Face Job Support Australia | LLM & GenAI Proxy Support (Sydney, Melbourne)',
  description:
    'Hugging Face proxy job support and interview support for engineers in Australia — Transformers, fine-tuning, RAG, and LLM serving, aligned to AEST/AWST business hours and the Sydney/Melbourne AI market.',
  keywords: [
    'Hugging Face job support Australia', 'LLM job support Sydney', 'GenAI proxy support Melbourne', 'AI engineer support Australia',
    'AEST timezone LLM support', 'Australian AI job support',
  ],
  h1: 'Hugging Face Proxy Job Support — Australia',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers across Australia — aligned to AEST/AWST working hours and the Sydney- and Melbourne-led AI market.',
  heroEyebrow: 'Australia · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'Delivering an LLM project at an Australian employer, or interviewing for a GenAI role in Sydney or Melbourne? We provide proxy job support and proxy interview support aligned to Australian time zones — support that overlaps your real working day rather than the northern-hemisphere night.',
  heroVariant:
    'Australia’s AI market is concentrated in Sydney (finance, enterprise, and the largest startup scene) and Melbourne (research-strong, with universities and a growing tech sector), plus Brisbane, Perth, and Canberra (government and defence). Banking (the big four), telco, retail, mining, and the public sector are major AI adopters, and cloud usage is broad across AWS, Azure, and GCP, often with data-sovereignty requirements pushing toward in-region and private deployments. Roles are typically ML Engineer, Data Scientist moving into GenAI, and LLM/AI Engineer. A key practical issue is timezone: Australian engineers are poorly served by northern-hemisphere support hours, so we deliberately provide live proxy job support and interview support in AEST/AWST. We cover the Hugging Face stack — Transformers, PEFT/TRL, RAG, serving — end to end.',
  geoLine:
    'Supporting Hugging Face and LLM engineers across Australia — Sydney, Melbourne, Brisbane, Perth, Canberra, and Adelaide.',
  timezoneNote: 'Available across Australian business hours — AEST/AEDT and AWST.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you actually cover Australian time zones?',
      answer:
        'Yes — this is a core reason Australian engineers come to us. We provide live proxy job support, production help, and interview support during AEST/AEDT and AWST hours, so support lines up with your working day instead of the US/UK night.',
    },
    {
      question: 'Can you help with data-sovereignty deployments?',
      answer:
        'Yes. Australian banks, government, and enterprises often require data to stay in-region. We help architect private/dedicated Inference Endpoints and in-region cloud deployments so open-model workloads meet sovereignty expectations, and advise on secrets and access — without giving legal guarantees.',
    },
    {
      question: 'What does the Australian GenAI market look for?',
      answer:
        'Practical delivery on the open-model stack (fine-tuning, RAG, serving) plus cloud experience across AWS/Azure/GCP, with strong demand in banking, telco, retail, and government. We calibrate job and interview support to those sectors and to Australian company formats.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Australia-Based Engineers With',
    cases: [
      'Live LLM/RAG delivery at Sydney and Melbourne banks and enterprises in AEST hours',
      'Data-sovereignty-aware deployment with in-region cloud and private Inference Endpoints',
      'Fine-tuning with PEFT/QLoRA under local GPU and budget constraints',
      'Public-sector and defence GenAI work in Canberra with confidential support',
      'Preparing for Sydney/Melbourne GenAI interviews in your own timezone',
    ],
  },
  proxySection: {
    title: 'Australian GenAI Interview & Candidate Marketing Support',
    intro:
      'We help Australian candidates clear interviews and reach recruiters — all within your timezone.',
    points: [
      'Live proxy interview support in AEST/AWST for coding and system-design rounds',
      'Profile positioning for Sydney, Melbourne, Brisbane, and Perth GenAI roles',
      'Support for permanent and contract searches across finance, telco, and government',
      'Real-time job support during your working hours after you land the role',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in Australian Hours?',
  bottomCTABody:
    'In-house LLM engineers available in AEST/AWST — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, SG_LINK],
    techLinks: [HF_RAG_HUB_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_QLORA_LINK, HF_SERVING_LINK, HF_ENGINEER_LINK, UK_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.rag, EXISTING.getLlmScheduled,
    ],
  }),
});

// ─── Germany ──────────────────────────────────────────────────────────────────

export const germany: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-germany',
  title: 'Hugging Face Job Support Germany | LLM & GenAI Proxy Support (Berlin, Munich)',
  description:
    'Hugging Face proxy job support and interview support for engineers in Germany — Transformers, fine-tuning, RAG, and LLM serving, aligned to CET business hours and the Berlin/Munich AI and industrial-AI market. GDPR-aware.',
  keywords: [
    'Hugging Face job support Germany', 'LLM job support Berlin', 'GenAI proxy support Munich', 'AI engineer support Germany',
    'GDPR AI deployment', 'CET timezone LLM support',
  ],
  h1: 'Hugging Face Proxy Job Support — Germany',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers across Germany — aligned to CET working hours and the Berlin startup and Munich/industrial-AI market, with GDPR-aware deployment.',
  heroEyebrow: 'Germany · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'Building with Hugging Face at a German employer, or interviewing for a GenAI role in Berlin or Munich? We provide proxy job support and proxy interview support aligned to CET and to Germany’s industrial-strength, privacy-conscious AI market.',
  heroVariant:
    'Germany combines a vibrant Berlin startup scene with deep industrial and enterprise AI in Munich, Stuttgart, and the Rhine-Main/Rhine-Ruhr regions — automotive, manufacturing, engineering, insurance, and enterprise software (Germany is home to major open-model and enterprise-AI players). This gives a strong appetite for open, self-hosted models (data control matters) and for on-prem or EU-region cloud deployment. GDPR and data protection are first-class concerns, pushing teams toward private Inference Endpoints, EU regions, and careful data handling. Roles include Machine Learning Engineer, NLP Engineer, and increasingly LLM/GenAI Engineer, and many teams work in English. We provide proxy job support on Transformers, PEFT/TRL fine-tuning, RAG, and serving, plus interview support tuned to German company formats, during CET working hours.',
  geoLine:
    'Supporting Hugging Face and LLM engineers across Germany — Berlin, Munich, Stuttgart, Frankfurt, Hamburg, and Cologne — and the wider DACH region.',
  timezoneNote: 'Available across CET/CEST business hours, aligned with the wider European market.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you support CET working hours and English-speaking teams?',
      answer:
        'Yes. We deliver live proxy job support and interview support during CET/CEST business hours. Support is provided in English, which is the working language of most German GenAI teams, and covers the wider DACH region (Austria, Switzerland) too.',
    },
    {
      question: 'Can you help with GDPR-aware, self-hosted deployments?',
      answer:
        'Yes. German organisations frequently prefer self-hosted or EU-region open-model deployments for data protection. We help architect private/dedicated Inference Endpoints, EU cloud regions, and careful token/data handling for GDPR-conscious setups — without providing legal advice.',
    },
    {
      question: 'What does the German market emphasise?',
      answer:
        'Strong engineering rigour, practical open-model experience (fine-tuning, RAG, self-hosted serving), and data-protection awareness — especially in automotive, manufacturing, insurance, and enterprise software. We calibrate support to those sectors and to German interview formats.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Germany-Based Engineers With',
    cases: [
      'Self-hosted open-model serving (vLLM) for data-control-sensitive German enterprises',
      'RAG and LLM features in automotive, manufacturing, and insurance during CET hours',
      'GDPR-aware deployment with EU-region cloud and private Inference Endpoints',
      'Fine-tuning German/multilingual models with PEFT/QLoRA',
      'Preparing for Berlin and Munich GenAI interviews (in English)',
    ],
  },
  proxySection: {
    title: 'German / DACH GenAI Interview & Candidate Marketing Support',
    intro:
      'We help candidates across Germany and the DACH region clear interviews and reach recruiters, in English.',
    points: [
      'Live proxy interview support calibrated to German company formats',
      'Profile positioning for Berlin, Munich, and DACH GenAI roles',
      'Support for permanent and contract searches across industrial and enterprise sectors',
      'Real-time job support during CET hours once you are in the role',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in CET Business Hours?',
  bottomCTABody:
    'In-house LLM engineers available across CET/CEST — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, UK_LINK],
    techLinks: [HF_VLLM_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK, HF_RAG_HUB_LINK, HF_ENGINEER_LINK, USA_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.mlops, EXISTING.getLlmScheduled,
    ],
  }),
});

// ─── Singapore ─────────────────────────────────────────────────────────────────

export const singapore: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-singapore',
  title: 'Hugging Face Job Support Singapore | LLM & GenAI Proxy Support (SGT Hours)',
  description:
    'Hugging Face proxy job support and interview support for engineers in Singapore — Transformers, fine-tuning, RAG, and LLM serving, aligned to SGT business hours and the APAC finance, government, and startup AI market.',
  keywords: [
    'Hugging Face job support Singapore', 'LLM job support Singapore', 'GenAI proxy support APAC', 'AI engineer support Singapore',
    'SGT timezone LLM support', 'Singapore AI job support',
  ],
  h1: 'Hugging Face Proxy Job Support — Singapore',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers in Singapore — aligned to SGT working hours and the city-state’s role as APAC’s finance, government, and AI hub.',
  heroEyebrow: 'Singapore · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'On an LLM project at a Singapore employer or regional HQ, or interviewing for a GenAI role in the city-state? We provide proxy job support and proxy interview support aligned to SGT and to Singapore’s finance- and government-heavy AI market.',
  heroVariant:
    'Singapore is APAC’s AI hub: the regional headquarters for many global banks and tech firms, a strong government/public-sector AI push (Smart Nation), and a dense fintech and enterprise scene. Multinationals run regional AI teams here, cloud adoption spans AWS, Azure, and GCP, and financial-sector data-governance expectations (MAS guidance) push toward private and in-region deployments. English is the working language, and the market values engineers who can deliver production LLM systems — RAG for enterprise knowledge, fine-tuned models, and cost-efficient serving. Roles include ML Engineer, LLM/GenAI Engineer, and AI Engineer, often with a regional (SEA) remit. We provide proxy job support on the Hugging Face stack and interview support calibrated to Singapore’s competitive, finance-oriented formats, in SGT hours.',
  geoLine:
    'Supporting Hugging Face and LLM engineers in Singapore and across the wider Southeast Asia (SEA) region.',
  timezoneNote: 'Available across SGT business hours, aligned with the wider APAC/SEA market.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you support SGT / APAC working hours?',
      answer:
        'Yes. We provide live proxy job support, production help, and interview support during SGT business hours, aligned with the wider APAC/SEA market, so support matches your working day.',
    },
    {
      question: 'Can you help with finance-sector data-governance deployments?',
      answer:
        'Yes. Singapore’s financial sector has strong data-governance expectations. We help architect private/dedicated Inference Endpoints and in-region deployments, and advise on token/secret handling and access controls suited to regulated environments — without giving legal or compliance guarantees.',
    },
    {
      question: 'What does the Singapore GenAI market look for?',
      answer:
        'Production delivery on the open-model stack (RAG, fine-tuning, cost-efficient serving), multi-cloud experience, and often a regional (SEA) delivery remit, with strong demand from banks, government, and multinationals. We calibrate job and interview support to those contexts.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Singapore-Based Engineers With',
    cases: [
      'Enterprise RAG and LLM delivery at banks and regional HQs during SGT hours',
      'Finance-sector data-governance-aware deployment with private Inference Endpoints',
      'Cost-efficient serving (quantization, vLLM) under regional budget constraints',
      'Public-sector / Smart Nation GenAI work with confidential support',
      'Preparing for competitive Singapore GenAI interviews in your timezone',
    ],
  },
  proxySection: {
    title: 'Singapore / APAC GenAI Interview & Candidate Marketing Support',
    intro:
      'We help candidates in Singapore and across SEA clear interviews and reach recruiters.',
    points: [
      'Live proxy interview support in SGT for coding and system-design rounds',
      'Profile positioning for Singapore and regional (SEA) GenAI roles',
      'Support for permanent and contract searches across finance, government, and MNCs',
      'Real-time job support during APAC hours once you are in the role',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in SGT Business Hours?',
  bottomCTABody:
    'In-house LLM engineers available across SGT/APAC — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, AUS_LINK],
    techLinks: [HF_RAG_HUB_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_QLORA_LINK, HF_SERVING_LINK, HF_ENGINEER_LINK, UAE_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.rag, EXISTING.getLlmScheduled,
    ],
  }),
});

// ─── UAE ─────────────────────────────────────────────────────────────────────

export const uae: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support-uae',
  title: 'Hugging Face Job Support UAE | LLM & GenAI Proxy Support (Dubai, Abu Dhabi)',
  description:
    'Hugging Face proxy job support and interview support for engineers in the UAE — Transformers, fine-tuning, RAG, and LLM serving, aligned to GST business hours and the Dubai/Abu Dhabi AI, government, and enterprise market.',
  keywords: [
    'Hugging Face job support UAE', 'LLM job support Dubai', 'GenAI proxy support Abu Dhabi', 'AI engineer support UAE',
    'GST timezone LLM support', 'Middle East AI job support',
  ],
  h1: 'Hugging Face Proxy Job Support — UAE',
  tagline:
    'Real-time Hugging Face and LLM proxy job support for engineers in the UAE — aligned to GST working hours and the Dubai- and Abu Dhabi-led government, enterprise, and AI-investment market.',
  heroEyebrow: 'UAE · Hugging Face Proxy Job & Interview Support',
  painIntro:
    'Delivering an LLM project at a UAE employer or government entity, or interviewing for a GenAI role in Dubai or Abu Dhabi? We provide proxy job support and proxy interview support aligned to GST and to the region’s fast-growing, well-funded AI market.',
  heroVariant:
    'The UAE has made AI a national priority, with heavy investment in Abu Dhabi (sovereign AI initiatives, research institutes, and notable Arabic and open large-model development) and a dynamic Dubai business, fintech, and government-services scene. Demand spans government/public services, banking and finance, real estate, logistics, and energy, with a strong appetite for Arabic-capable and multilingual LLMs and for sovereign/in-region deployment. Cloud usage spans AWS, Azure, and increasingly regional providers, and data-localisation expectations favour private Inference Endpoints and in-region infrastructure. English is the working language, and the workforce is highly international. Roles include ML/AI Engineer, LLM/GenAI Engineer, and AI Solutions roles at consultancies. We provide proxy job support on the Hugging Face stack — including multilingual/Arabic fine-tuning, RAG, and serving — plus interview support in GST hours.',
  geoLine:
    'Supporting Hugging Face and LLM engineers across the UAE — Dubai, Abu Dhabi, and Sharjah — and the wider GCC region.',
  timezoneNote: 'Available across GST business hours, aligned with the wider Middle East/GCC market.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Do you support GST working hours?',
      answer:
        'Yes. We provide live proxy job support, production help, and interview support during GST business hours, aligned with the wider GCC region, so support matches your working day.',
    },
    {
      question: 'Can you help with Arabic / multilingual LLM work and sovereign deployment?',
      answer:
        'Yes. There is strong regional interest in Arabic-capable and multilingual models and in sovereign, in-region deployment. We help with multilingual/Arabic fine-tuning (PEFT/QLoRA), RAG over Arabic and mixed-language content, and private/in-region Inference Endpoint deployment — advising on data localisation and access, without legal guarantees.',
    },
    {
      question: 'What does the UAE GenAI market emphasise?',
      answer:
        'Practical delivery for government, finance, real estate, logistics, and energy; multilingual/Arabic capability; and sovereign/in-region deployment. The workforce is international and English-speaking. We calibrate job and interview support to those sectors and to UAE company and consultancy formats.',
    },
  ],
  useCasesSection: {
    title: 'What We Help UAE-Based Engineers With',
    cases: [
      'Government and enterprise LLM/RAG delivery in Dubai and Abu Dhabi during GST hours',
      'Arabic and multilingual fine-tuning with PEFT/QLoRA',
      'Sovereign / in-region deployment with private Inference Endpoints',
      'Cost- and performance-tuned serving (quantization, vLLM) for regional workloads',
      'Preparing for Dubai and Abu Dhabi GenAI interviews in your timezone',
    ],
  },
  proxySection: {
    title: 'UAE / GCC GenAI Interview & Candidate Marketing Support',
    intro:
      'We help candidates across the UAE and GCC clear interviews and reach recruiters, in English.',
    points: [
      'Live proxy interview support in GST for coding and system-design rounds',
      'Profile positioning for Dubai, Abu Dhabi, and wider GCC GenAI roles',
      'Support for permanent and contract searches across government, finance, and consultancy',
      'Real-time job support during GST hours once you are in the role',
    ],
  },
  bottomCTAHeading: 'Need Hugging Face Job Support in GST Business Hours?',
  bottomCTABody:
    'In-house LLM engineers available across GST/GCC — proxy job support for live projects and production issues, or proxy interview support (real-time technical help; you attend your own interview). Message ProxyTechSupport on WhatsApp.',
  relatedLinks: relatedLinks({
    geoLinks: [HF_HUB_LINK, SG_LINK],
    techLinks: [HF_QLORA_LINK, HF_RAG_HUB_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_TRANSFORMERS_TRAINING_LINK, HF_ENDPOINTS_LINK, HF_SERVING_LINK, HF_ENGINEER_LINK, UK_LINK,
      EXISTING.llmEngineer, EXISTING.genai, EXISTING.rag, EXISTING.getLlmScheduled,
    ],
  }),
});

export const huggingFaceCountryPages: LandingPageConfig[] = [
  usa,
  canada,
  uk,
  australia,
  germany,
  singapore,
  uae,
];
