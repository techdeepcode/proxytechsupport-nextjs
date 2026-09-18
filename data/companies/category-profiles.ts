import type { LandingRelatedLink } from '../landing-pages';
import { EX } from './shared';
import type { CategoryKey } from './registry';

/**
 * Per-industry engineering profiles used to build company hubs for Tier B/C employers
 * that do not have a hand-written rich fact set. Each hub still leads with the company's
 * own unique blurb, industry line and aliases (from the registry) + unique metadata and
 * internal links; the category profile supplies accurate, industry-appropriate role,
 * technology and interview-focus context so the page is genuinely useful rather than a
 * token-swap. Tier A marquee employers use hand-written facts in ./hub-pages.ts.
 */
export interface CategoryProfile {
  products: string[];
  disciplines: string[];
  roles: string[];
  technologies: string[];
  interviewFocus: string[];
  links: LandingRelatedLink[];
}

export const CATEGORY_PROFILE: Record<CategoryKey, CategoryProfile> = {
  'big-tech': {
    products: ['large-scale consumer & cloud products', 'distributed platforms', 'mobile & web apps', 'AI features', 'data infrastructure'],
    disciplines: ['distributed systems', 'backend', 'mobile/web', 'data engineering', 'machine learning', 'site reliability engineering'],
    roles: ['Software Engineer', 'Senior Software Engineer', 'Data Engineer', 'Machine Learning Engineer', 'Site Reliability Engineer', 'Engineering Manager'],
    technologies: ['Java', 'C++', 'Python', 'Go', 'JavaScript/TypeScript', 'Kubernetes', 'cloud (AWS/Azure/GCP)', 'distributed systems'],
    interviewFocus: ['data structures & algorithms', 'large-scale system design', 'coding under time pressure', 'domain depth', 'behavioral'],
    links: [EX.cloudUsa, EX.kubernetes, EX.dataEng, EX.aimlProxy],
  },
  ai: {
    products: ['foundation models & LLM APIs', 'ML platforms', 'inference & serving', 'RAG & agents', 'evaluation'],
    disciplines: ['applied AI/LLM engineering', 'ML systems & infrastructure', 'backend & distributed systems', 'data engineering', 'MLOps'],
    roles: ['Applied AI Engineer', 'Machine Learning Engineer', 'Software Engineer', 'ML Infrastructure Engineer', 'Data Engineer'],
    technologies: ['Python', 'PyTorch', 'LLM APIs', 'RAG & vector databases', 'agents & tool use', 'distributed systems', 'MLOps'],
    interviewFocus: ['coding & data structures', 'LLM application & agent design', 'ML/inference systems', 'evaluation & reliability', 'behavioral'],
    links: [EX.aimlProxy, EX.rag, EX.llm, EX.agentic],
  },
  cloud: {
    products: ['cloud infrastructure & compute', 'networking & storage', 'Kubernetes platforms', 'edge & CDN', 'observability'],
    disciplines: ['cloud & distributed systems', 'platform engineering', 'reliability (SRE)', 'networking', 'security'],
    roles: ['Software Engineer', 'Cloud Engineer', 'Platform Engineer', 'Site Reliability Engineer', 'DevOps Engineer'],
    technologies: ['Go', 'Python', 'Java', 'Kubernetes', 'Terraform', 'cloud (AWS/Azure/GCP)', 'networking', 'Linux'],
    interviewFocus: ['coding & data structures', 'distributed system design', 'networking & reliability', 'debugging & performance', 'behavioral'],
    links: [EX.cloudUsa, EX.kubernetes, EX.devopsUsa, EX.sreUsa],
  },
  saas: {
    products: ['multi-tenant SaaS platform', 'APIs & integrations', 'web & mobile apps', 'analytics', 'AI features'],
    disciplines: ['backend & distributed systems', 'full-stack', 'data engineering', 'platform', 'reliability'],
    roles: ['Software Engineer', 'Full-Stack Engineer', 'Backend Engineer', 'Data Engineer', 'Platform Engineer'],
    technologies: ['Java', 'JavaScript/TypeScript', 'React', 'Python', 'Go', 'SQL/NoSQL', 'cloud', 'REST/GraphQL APIs'],
    interviewFocus: ['coding & data structures', 'system & API design', 'full-stack depth', 'debugging', 'behavioral'],
    links: [EX.reactGuide, EX.cloudUsa, EX.dataEng, EX.aimlProxy],
  },
  enterprise: {
    products: ['enterprise applications', 'cloud platforms', 'data & integration', 'workflow/automation', 'AI features'],
    disciplines: ['backend & distributed systems', 'enterprise integration', 'cloud platform', 'data engineering', 'full-stack'],
    roles: ['Software Engineer', 'Platform Engineer', 'Integration Engineer', 'Data Engineer', 'Cloud Engineer'],
    technologies: ['Java', 'C#/.NET', 'SQL', 'JavaScript', 'cloud', 'microservices', 'REST APIs'],
    interviewFocus: ['data structures & algorithms', 'system & integration design', 'OOP & platform depth', 'SQL/data', 'behavioral'],
    links: [EX.javaGuide, EX.cloudUsa, EX.dataEng, EX.azure],
  },
  devtools: {
    products: ['developer platforms & tooling', 'CI/CD', 'SDKs & APIs', 'open-source projects', 'AI dev tools'],
    disciplines: ['distributed systems & platform', 'developer experience', 'backend', 'reliability', 'full-stack'],
    roles: ['Software Engineer', 'Backend/Platform Engineer', 'Developer Experience Engineer', 'Site Reliability Engineer', 'Full-Stack Engineer'],
    technologies: ['Go', 'Rust', 'TypeScript', 'Python', 'Kubernetes', 'Git', 'cloud', 'APIs'],
    interviewFocus: ['coding & data structures', 'system & API design', 'developer-tooling depth', 'reliability', 'behavioral'],
    links: [EX.devopsUsa, EX.kubernetes, EX.cloudUsa, EX.reactGuide],
  },
  data: {
    products: ['data platforms & warehouses', 'streaming & pipelines', 'analytics/BI', 'governance & catalogs', 'AI/ML features'],
    disciplines: ['data engineering', 'distributed data systems', 'query & storage engines', 'analytics', 'platform'],
    roles: ['Data Engineer', 'Software Engineer', 'Distributed Systems Engineer', 'Analytics Engineer', 'ML Engineer'],
    technologies: ['Python', 'Java', 'Scala', 'SQL', 'Spark', 'Kafka', 'cloud', 'distributed systems'],
    interviewFocus: ['data structures & algorithms', 'data modeling & SQL', 'distributed data system design', 'pipeline & streaming design', 'behavioral'],
    links: [EX.dataEng, EX.cloudUsa, EX.aimlProxy, EX.kubernetes],
  },
  cybersecurity: {
    products: ['security platforms', 'detection & response', 'cloud & network security', 'identity', 'threat intelligence'],
    disciplines: ['security engineering', 'cloud & distributed systems', 'detection engineering', 'backend', 'data'],
    roles: ['Security Engineer', 'Software Engineer', 'Detection Engineer', 'Cloud/Backend Engineer', 'Data Engineer'],
    technologies: ['Go', 'Python', 'C/C++', 'Java', 'cloud', 'Kubernetes', 'networking & security'],
    interviewFocus: ['coding & data structures', 'security concepts & threat modeling', 'distributed system design', 'debugging', 'behavioral'],
    links: [EX.cyber, EX.cloudUsa, EX.devopsUsa, EX.dataEng],
  },
  fintech: {
    products: ['payments & financial APIs', 'banking/ledger systems', 'risk & fraud (ML)', 'platform', 'mobile apps'],
    disciplines: ['backend & distributed systems', 'payments/ledger', 'data & ML (risk)', 'reliability & correctness', 'full-stack'],
    roles: ['Software Engineer', 'Backend Engineer', 'Data/ML Engineer', 'Platform Engineer', 'Reliability Engineer'],
    technologies: ['Java', 'Go', 'Python', 'Scala', 'SQL', 'cloud', 'distributed systems', 'APIs'],
    interviewFocus: ['coding & data structures', 'system & API design', 'reliability & correctness (money movement)', 'data/risk', 'behavioral'],
    links: [EX.dataEng, EX.cloudUsa, EX.aimlProxy, EX.javaGuide],
  },
  finance: {
    products: ['trading & markets systems', 'banking platforms', 'risk & analytics', 'low-latency systems', 'data platforms'],
    disciplines: ['backend & distributed systems', 'low-latency engineering', 'data & analytics', 'risk', 'full-stack'],
    roles: ['Software Engineer', 'Quant/Platform Engineer', 'Data Engineer', 'Backend Engineer', 'Reliability Engineer'],
    technologies: ['Java', 'C++', 'Python', 'SQL', 'low-latency systems', 'cloud', 'distributed systems'],
    interviewFocus: ['data structures & algorithms', 'low-latency / system design', 'concurrency & performance', 'SQL/data', 'behavioral'],
    links: [EX.javaGuide, EX.dataEng, EX.cloudUsa, EX.aimlProxy],
  },
  semiconductors: {
    products: ['silicon (CPU/GPU/SoC)', 'firmware & drivers', 'EDA/verification', 'embedded software', 'AI accelerators'],
    disciplines: ['systems & firmware software', 'computer architecture', 'verification', 'embedded', 'performance'],
    roles: ['Software Engineer', 'Firmware/Embedded Engineer', 'Silicon Design/Verification Engineer', 'Systems Engineer', 'Compiler Engineer'],
    technologies: ['C', 'C++', 'Python', 'SystemVerilog', 'assembly', 'computer architecture', 'Linux', 'RTOS'],
    interviewFocus: ['C/C++ & data structures', 'computer architecture & OS', 'low-level debugging', 'domain deep dives', 'behavioral'],
    links: [EX.cloudUsa, EX.aimlProxy, EX.proxyInterview, EX.knowledgeBase],
  },
  hardware: {
    products: ['hardware systems & devices', 'storage', 'firmware', 'embedded software', 'management/cloud software'],
    disciplines: ['embedded & firmware', 'systems software', 'hardware/software integration', 'platform', 'reliability'],
    roles: ['Software Engineer', 'Firmware/Embedded Engineer', 'Systems Engineer', 'Platform Engineer', 'Test/Automation Engineer'],
    technologies: ['C', 'C++', 'Python', 'embedded systems', 'Linux', 'firmware', 'cloud'],
    interviewFocus: ['C/C++ & data structures', 'embedded & systems', 'hardware/software debugging', 'domain depth', 'behavioral'],
    links: [EX.cloudUsa, EX.proxyInterview, EX.devopsUsa, EX.knowledgeBase],
  },
  ecommerce: {
    products: ['marketplace & commerce platform', 'search & recommendations', 'payments & logistics', 'mobile & web', 'data/ML'],
    disciplines: ['distributed systems & microservices', 'data engineering', 'machine learning', 'mobile/full-stack', 'reliability'],
    roles: ['Software Engineer', 'Backend Engineer', 'Data Engineer', 'Machine Learning Engineer', 'Full-Stack Engineer'],
    technologies: ['Java', 'Go', 'Python', 'React', 'Kafka', 'Spark', 'cloud', 'microservices'],
    interviewFocus: ['coding & data structures', 'large-scale system design', 'data/ML (role-specific)', 'debugging & scale', 'behavioral'],
    links: [EX.dataEng, EX.reactGuide, EX.cloudUsa, EX.aimlProxy],
  },
  streaming: {
    products: ['streaming/media & social platforms', 'video & real-time systems', 'recommendations (ML)', 'ads', 'mobile & web'],
    disciplines: ['distributed systems', 'video/real-time engineering', 'machine learning', 'data engineering', 'mobile/full-stack'],
    roles: ['Software Engineer', 'Backend Engineer', 'Machine Learning Engineer', 'Data Engineer', 'Full-Stack Engineer'],
    technologies: ['Java', 'C++', 'Go', 'Python', 'React', 'Kafka', 'cloud', 'distributed systems'],
    interviewFocus: ['coding & data structures', 'large-scale / real-time system design', 'recommendations/ML (role-specific)', 'debugging & scale', 'behavioral'],
    links: [EX.dataEng, EX.reactGuide, EX.aimlProxy, EX.cloudUsa],
  },
  telecom: {
    products: ['network infrastructure & 5G', 'routing/switching software', 'OSS/BSS platforms', 'edge', 'embedded'],
    disciplines: ['networking & protocols', 'distributed systems', 'embedded/systems software', 'platform', 'reliability'],
    roles: ['Software Engineer', 'Network Software Engineer', 'Systems Engineer', 'Platform Engineer', 'Backend Engineer'],
    technologies: ['C/C++', 'Go', 'Java', 'Python', 'networking (TCP/IP)', 'Kubernetes', 'Linux'],
    interviewFocus: ['coding & data structures', 'networking & protocols', 'distributed / system design', 'debugging', 'behavioral'],
    links: [EX.cloudUsa, EX.kubernetes, EX.devopsUsa, EX.cyber],
  },
  healthtech: {
    products: ['clinical & health platforms', 'EHR/interoperability', 'health data & analytics', 'devices/embedded', 'AI/ML'],
    disciplines: ['backend & platform', 'health-data engineering', 'interoperability (FHIR/HL7)', 'machine learning', 'embedded (devices)'],
    roles: ['Software Engineer', 'Data Engineer', 'Backend Engineer', 'ML/AI Engineer', 'Embedded Engineer'],
    technologies: ['Java', 'C#/.NET', 'Python', 'SQL', 'FHIR/HL7', 'cloud', 'microservices'],
    interviewFocus: ['coding & data structures', 'system & data design', 'healthcare interoperability', 'SQL/data', 'behavioral'],
    links: [EX.dataEng, EX.cloudUsa, EX.aimlProxy, EX.javaGuide],
  },
  pharma: {
    products: ['research & clinical platforms', 'bioinformatics/genomics', 'data & analytics', 'AI/ML for discovery', 'lab systems'],
    disciplines: ['data engineering & bioinformatics', 'backend & platform', 'machine learning', 'cloud', 'scientific computing'],
    roles: ['Software Engineer', 'Data Engineer', 'Bioinformatics/ML Engineer', 'Cloud/Platform Engineer', 'Backend Engineer'],
    technologies: ['Python', 'R', 'SQL', 'Spark', 'cloud', 'ML/AI', 'distributed systems'],
    interviewFocus: ['coding & data structures', 'data & pipeline design', 'ML/scientific computing', 'SQL/data', 'behavioral'],
    links: [EX.dataEng, EX.aimlProxy, EX.cloudUsa, EX.mlops],
  },
  automotive: {
    products: ['software-defined vehicle', 'embedded/ECU software', 'autonomy & ADAS (ML)', 'connected-car cloud', 'infotainment'],
    disciplines: ['embedded & real-time systems', 'autonomy/computer vision', 'cloud & connected services', 'systems software', 'safety-critical'],
    roles: ['Software Engineer', 'Embedded/Firmware Engineer', 'Autonomy/ML Engineer', 'Cloud/Backend Engineer', 'Systems Engineer'],
    technologies: ['C', 'C++', 'Python', 'AUTOSAR/RTOS', 'computer vision', 'Linux', 'cloud'],
    interviewFocus: ['C/C++ & data structures', 'embedded & real-time systems', 'autonomy/ML (role-specific)', 'safety & debugging', 'behavioral'],
    links: [EX.aimlProxy, EX.cloudUsa, EX.proxyInterview, EX.mlops],
  },
  aerospace: {
    products: ['mission & defense systems', 'avionics/embedded', 'C4ISR & data', 'simulation', 'autonomy'],
    disciplines: ['embedded & real-time systems', 'systems software', 'safety-critical engineering', 'data & AI', 'platform'],
    roles: ['Software Engineer', 'Embedded/Systems Engineer', 'Systems Engineer', 'Data/AI Engineer', 'DevOps Engineer'],
    technologies: ['C', 'C++', 'Java', 'Python', 'real-time systems', 'Linux', 'cloud'],
    interviewFocus: ['C/C++ & data structures', 'embedded & real-time systems', 'systems design', 'safety & debugging', 'behavioral'],
    links: [EX.cloudUsa, EX.cyber, EX.proxyInterview, EX.devopsUsa],
  },
  space: {
    products: ['flight & ground software', 'avionics/embedded', 'satellite systems', 'simulation', 'data pipelines'],
    disciplines: ['flight & embedded software', 'real-time systems', 'systems software', 'ground data systems', 'reliability'],
    roles: ['Software Engineer', 'Flight/Embedded Software Engineer', 'Systems Engineer', 'Ground Software Engineer', 'Data Engineer'],
    technologies: ['C', 'C++', 'Python', 'real-time systems', 'Linux', 'distributed systems', 'cloud'],
    interviewFocus: ['C/C++ & data structures', 'embedded & real-time systems', 'systems design', 'debugging & reliability', 'behavioral'],
    links: [EX.cloudUsa, EX.dataEng, EX.proxyInterview, EX.devopsUsa],
  },
  consulting: {
    products: ['client engineering delivery', 'cloud & data migrations', 'custom applications', 'AI/analytics solutions', 'managed services'],
    disciplines: ['full-stack & backend', 'cloud & DevOps', 'data engineering', 'AI/ML', 'enterprise integration'],
    roles: ['Software Engineer', 'Cloud Engineer', 'Data Engineer', 'Full-Stack Developer', 'DevOps Engineer'],
    technologies: ['Java', 'C#/.NET', 'Python', 'JavaScript/React', 'cloud (AWS/Azure/GCP)', 'SQL', 'Kubernetes'],
    interviewFocus: ['coding & data structures', 'system & solution design', 'cloud/data depth', 'client scenario reasoning', 'behavioral'],
    links: [EX.cloudUsa, EX.azure, EX.dataEng, EX.reactGuide],
  },
  logistics: {
    products: ['logistics & supply-chain platforms', 'routing/optimization', 'tracking & operations', 'mobile & web', 'data/ML'],
    disciplines: ['backend & distributed systems', 'data engineering', 'optimization/ML', 'platform', 'reliability'],
    roles: ['Software Engineer', 'Backend Engineer', 'Data Engineer', 'Machine Learning Engineer', 'Platform Engineer'],
    technologies: ['Java', 'Go', 'Python', 'SQL', 'cloud', 'Kafka', 'microservices'],
    interviewFocus: ['coding & data structures', 'system design', 'data & optimization', 'debugging & scale', 'behavioral'],
    links: [EX.dataEng, EX.cloudUsa, EX.aimlProxy, EX.devopsUsa],
  },
  cpg: {
    products: ['digital & e-commerce platforms', 'mobile & loyalty apps', 'supply-chain & data', 'marketing tech', 'AI/analytics'],
    disciplines: ['full-stack & backend', 'data engineering', 'cloud & platform', 'machine learning', 'mobile'],
    roles: ['Software Engineer', 'Full-Stack Engineer', 'Data Engineer', 'Cloud Engineer', 'ML Engineer'],
    technologies: ['Java', 'JavaScript/React', 'Python', 'SQL', 'cloud', 'microservices', 'data platforms'],
    interviewFocus: ['coding & data structures', 'system design', 'data & analytics', 'full-stack depth', 'behavioral'],
    links: [EX.reactGuide, EX.dataEng, EX.cloudUsa, EX.aimlProxy],
  },
};
