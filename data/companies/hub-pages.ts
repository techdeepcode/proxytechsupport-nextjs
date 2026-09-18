import type { LandingPageConfig } from '../landing-pages';
import { companyHub, EX, type CompanyHubFacts } from './shared';
import { companies, type Company } from './registry';
import { CATEGORY_PROFILE } from './category-profiles';

/**
 * Tier A company authority HUBS — /{company}-career-support/.
 *
 * Each entry supplies verified, company-specific engineering facts (September 2026).
 * The builder in ./shared.ts weaves them into unique highlights, use-cases, proxy
 * section and FAQs. Informational + navigational intent; commercial proxy intent is a
 * labelled section that links to the site's existing proxy interview / job support.
 *
 * ProxyTechSupport is independent and not affiliated with any listed employer.
 */

export const companyHubFactsList: CompanyHubFacts[] = [
  {
    slug: 'google',
    name: 'Google',
    categoryLine: 'Big Tech • Cloud (GCP) • AI • Search',
    overview:
      'Google (Alphabet) engineers build planet-scale products across Search, Ads, Android, YouTube, Google Cloud and DeepMind AI. Interviews emphasise strong data structures and algorithms, large-scale system design, and Googleyness/leadership signals.',
    products: ['Google Cloud (GCP)', 'Vertex AI & Gemini', 'Kubernetes/GKE', 'BigQuery', 'Android', 'YouTube', 'Search & Ads'],
    disciplines: ['distributed systems', 'site reliability engineering (SRE)', 'machine learning', 'data engineering', 'platform engineering', 'security'],
    roles: ['Software Engineer (L3–L6)', 'Site Reliability Engineer', 'Machine Learning Engineer', 'Data Engineer', 'Cloud Engineer', 'Engineering Manager'],
    technologies: ['C++', 'Java', 'Go', 'Python', 'Kubernetes', 'GCP', 'BigQuery', 'TensorFlow/JAX', 'gRPC/Protobuf'],
    interviewFocus: ['data structures & algorithms', 'large-scale system design', 'coding under time pressure', 'Google Cloud & distributed systems depth', 'behavioral / Googleyness'],
    locations: ['Mountain View', 'New York', 'Seattle', 'Bangalore', 'London', 'Zurich'],
    existingLinks: [EX.googleVertex, EX.kubernetes, EX.sreUsa, EX.cloudUsa],
    extraKeywords: ['Google SWE interview support', 'Google SRE interview', 'Google system design interview support'],
  },
  {
    slug: 'microsoft',
    name: 'Microsoft',
    categoryLine: 'Big Tech • Cloud (Azure) • Enterprise • AI',
    overview:
      'Microsoft engineers build Azure, Microsoft 365, Windows, GitHub, and the Foundry/Copilot AI stack. Technical interviews focus on coding, cloud & distributed system design, and role-specific depth in Azure, .NET or AI.',
    products: ['Azure', 'Microsoft Foundry & Copilot', 'Microsoft 365', 'Windows', 'GitHub', 'Fabric', 'Dynamics 365'],
    disciplines: ['cloud platform engineering', 'distributed systems', 'AI/ML & applied science', 'data engineering', 'developer tools', 'security'],
    roles: ['Software Engineer (SDE / Senior)', 'Cloud Solution Architect', 'Data Engineer', 'AI/ML Engineer', 'Site Reliability Engineer', 'Engineering Manager'],
    technologies: ['C#/.NET', 'Azure', 'TypeScript', 'C++', 'AKS/Kubernetes', 'Azure OpenAI & Foundry', 'Semantic Kernel', 'Cosmos DB'],
    interviewFocus: ['coding & data structures', 'cloud / distributed system design', 'Azure & .NET depth', 'AI/ML application design', 'behavioral (growth mindset)'],
    locations: ['Redmond', 'Seattle', 'Hyderabad', 'Bangalore', 'Dublin', 'London'],
    existingLinks: [EX.azure, EX.dotnetGuide, EX.kubernetes, EX.aimlProxy],
    extraKeywords: ['Microsoft Azure interview support', 'Microsoft SDE interview', 'Microsoft .NET interview support'],
  },
  {
    slug: 'apple',
    name: 'Apple',
    categoryLine: 'Big Tech • Devices • Silicon • Services',
    overview:
      'Apple engineers build iOS/macOS, Apple silicon, and services across a tightly integrated hardware/software stack. Interviews are team-specific and go deep on fundamentals, low-level systems, and the exact domain of the role.',
    products: ['iOS & macOS', 'Apple silicon (M-series)', 'iCloud & Services', 'Swift & SwiftUI', 'Xcode', 'Apple Intelligence'],
    disciplines: ['systems & embedded engineering', 'application & frameworks engineering', 'silicon/hardware software', 'machine learning', 'security & privacy'],
    roles: ['Software Engineer', 'Embedded / Systems Engineer', 'iOS/macOS Engineer', 'Machine Learning Engineer', 'Silicon Software Engineer'],
    technologies: ['Swift', 'Objective-C', 'C++', 'C', 'Metal', 'Core ML', 'low-level systems', 'concurrency'],
    interviewFocus: ['data structures & algorithms', 'low-level systems & memory', 'domain-specific deep dives', 'concurrency & performance', 'behavioral / collaboration'],
    locations: ['Cupertino', 'Austin', 'Seattle', 'San Diego', 'Munich', 'Bangalore'],
    existingLinks: [EX.aimlProxy, EX.proxyInterview, EX.cloudUsa, EX.knowledgeBase],
    extraKeywords: ['Apple iOS interview support', 'Apple software engineer interview', 'Apple systems interview support'],
  },
  {
    slug: 'meta',
    name: 'Meta',
    categoryLine: 'Big Tech • Social • AI • AR/VR',
    overview:
      'Meta (Facebook, Instagram, WhatsApp, Reality Labs) engineers build products for billions of users and lead open AI with Llama and PyTorch. The E-series loop tests coding, system design at social scale, and behavioral signal.',
    products: ['Facebook & Instagram', 'WhatsApp & Messenger', 'PyTorch', 'Llama models', 'Reality Labs (Quest)', 'Ads infrastructure'],
    disciplines: ['distributed systems', 'machine learning & recommendations', 'data engineering', 'mobile & product infrastructure', 'AI research engineering'],
    roles: ['Software Engineer (E3–E6)', 'Machine Learning Engineer', 'Production Engineer', 'Data Engineer', 'Research Engineer'],
    technologies: ['Python', 'C++', 'Hack/PHP', 'React', 'PyTorch', 'GraphQL', 'Presto/Spark'],
    interviewFocus: ['coding (Ninja rounds)', 'system design at scale', 'ML system design', 'behavioral (Meta signals)', 'product/data reasoning'],
    locations: ['Menlo Park', 'New York', 'Seattle', 'London', 'Bangalore', 'Tel Aviv'],
    existingLinks: [EX.aimlProxy, EX.reactGuide, EX.dataEng, EX.mlops],
    extraKeywords: ['Meta E5 interview support', 'Meta ML interview', 'Meta system design interview support'],
  },
  {
    slug: 'nvidia',
    name: 'NVIDIA',
    categoryLine: 'AI • GPU • Semiconductors',
    overview:
      'NVIDIA builds the GPUs, CUDA software and full AI stack powering modern machine learning. Interviews are deeply technical — C++/CUDA, GPU architecture, parallel computing, and ML systems depending on the role.',
    products: ['CUDA & CUDA-X', 'GPUs (Blackwell/Hopper)', 'TensorRT & Triton', 'NeMo & NIM microservices', 'DGX & Omniverse', 'cuDNN'],
    disciplines: ['GPU & systems software', 'deep learning & CUDA kernels', 'compiler & performance engineering', 'MLOps & inference', 'distributed AI'],
    roles: ['Deep Learning Engineer', 'CUDA / GPU Software Engineer', 'Systems Software Engineer', 'ML Infrastructure Engineer', 'Compiler Engineer'],
    technologies: ['C++', 'CUDA', 'Python', 'PyTorch', 'TensorRT', 'Triton Inference Server', 'NCCL', 'parallel algorithms'],
    interviewFocus: ['C++ & data structures', 'CUDA / parallel computing', 'GPU architecture & performance', 'ML systems & inference', 'low-level optimization'],
    locations: ['Santa Clara', 'Austin', 'Seattle', 'Pune', 'Bangalore', 'Tel Aviv'],
    existingLinks: [EX.aimlProxy, EX.mlops, EX.llm, EX.cloudUsa],
    extraKeywords: ['NVIDIA CUDA interview support', 'NVIDIA deep learning interview', 'NVIDIA GPU systems interview support'],
  },
  {
    slug: 'netflix',
    name: 'Netflix',
    categoryLine: 'Streaming • Media • Cloud-native',
    overview:
      'Netflix runs one of the largest cloud-native, microservices platforms on AWS, streaming to hundreds of millions. Senior-heavy hiring emphasises deep system design, JVM/backend depth, data, and strong ownership.',
    products: ['Streaming platform', 'Content delivery (Open Connect)', 'Studio & production tech', 'Personalization/ML', 'Ads platform'],
    disciplines: ['distributed systems & microservices', 'data engineering & platform', 'machine learning / recommendations', 'reliability & performance', 'streaming/video engineering'],
    roles: ['Senior Software Engineer', 'Data Engineer', 'Machine Learning Engineer', 'Platform/Reliability Engineer', 'Full-Stack Engineer'],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'AWS', 'Kafka', 'Cassandra', 'Spark/Flink', 'GraphQL'],
    interviewFocus: ['large-scale system design', 'backend/JVM coding depth', 'data & streaming design', 'reliability & performance', 'behavioral (culture memo)'],
    locations: ['Los Gatos', 'Los Angeles', 'Remote (US)'],
    existingLinks: [EX.aws, EX.dataEng, EX.sreUsa, EX.aimlProxy],
    extraKeywords: ['Netflix system design interview support', 'Netflix senior engineer interview', 'Netflix backend interview support'],
  },
  {
    slug: 'oracle',
    name: 'Oracle',
    categoryLine: 'Enterprise Software • Cloud (OCI) • Database',
    overview:
      'Oracle builds the Oracle Database, Oracle Cloud Infrastructure (OCI) and a broad enterprise-applications portfolio. Interviews focus on data structures, SQL/database internals, and distributed cloud systems.',
    products: ['Oracle Database & Autonomous DB', 'Oracle Cloud Infrastructure (OCI)', 'Fusion Applications', 'Java (OpenJDK)', 'MySQL/HeatWave', 'NetSuite'],
    disciplines: ['database engineering', 'cloud infrastructure (OCI)', 'distributed systems', 'enterprise applications', 'Java platform'],
    roles: ['Software Engineer (MTS/Senior)', 'Cloud Engineer (OCI)', 'Database Engineer', 'Data Engineer', 'Applications Developer'],
    technologies: ['Java', 'SQL / PL/SQL', 'Oracle Database', 'OCI', 'C/C++', 'Kubernetes', 'Terraform'],
    interviewFocus: ['data structures & algorithms', 'SQL & database internals', 'cloud/distributed system design', 'Java depth', 'behavioral'],
    locations: ['Austin', 'Redwood Shores', 'Seattle', 'Bangalore', 'Hyderabad'],
    existingLinks: [EX.javaGuide, EX.cloudUsa, EX.dataEng, EX.kubernetes],
    extraKeywords: ['Oracle OCI interview support', 'Oracle database interview', 'Oracle Java interview support'],
  },
  {
    slug: 'ibm',
    name: 'IBM',
    categoryLine: 'Enterprise Software • Hybrid Cloud • AI (watsonx)',
    overview:
      'IBM focuses on hybrid cloud (Red Hat/OpenShift), watsonx AI, data, security and consulting. Interviews blend coding fundamentals with cloud, data and AI depth relevant to enterprise delivery.',
    products: ['watsonx (AI)', 'Red Hat OpenShift', 'IBM Cloud', 'Db2', 'Instana/Turbonomic', 'Consulting (IBM Consulting)'],
    disciplines: ['hybrid cloud & Kubernetes', 'AI/ML (watsonx)', 'data & analytics', 'security', 'enterprise software & consulting'],
    roles: ['Software Engineer', 'Cloud Engineer', 'Data Engineer', 'AI/ML Engineer', 'DevOps/SRE Engineer', 'Consultant (Engineering)'],
    technologies: ['Java', 'Python', 'OpenShift/Kubernetes', 'watsonx', 'Db2/SQL', 'Ansible', 'Terraform'],
    interviewFocus: ['coding & data structures', 'cloud & Kubernetes design', 'AI/ML & data depth', 'system design', 'behavioral'],
    locations: ['Armonk', 'Austin', 'Bangalore', 'Dublin', 'Toronto'],
    existingLinks: [EX.kubernetes, EX.aimlProxy, EX.dataEng, EX.cloudUsa],
    extraKeywords: ['IBM watsonx interview support', 'IBM cloud interview', 'IBM OpenShift interview support'],
  },
  {
    slug: 'salesforce',
    name: 'Salesforce',
    categoryLine: 'SaaS • CRM • Platform • AI (Agentforce)',
    overview:
      'Salesforce builds the leading CRM plus the Data Cloud and Agentforce AI platform, along with Slack, Tableau and MuleSoft. Interviews cover coding fundamentals, platform/Apex depth, and integration/AI design.',
    products: ['Sales/Service Cloud', 'Data Cloud', 'Agentforce (AI agents)', 'Apex & Lightning', 'Slack', 'Tableau', 'MuleSoft'],
    disciplines: ['platform engineering (Apex/Lightning)', 'backend & distributed systems', 'data & integration', 'AI/agents (Agentforce)', 'full-stack'],
    roles: ['Software Engineer (SMTS/LMTS)', 'Platform / Apex Developer', 'Integration Engineer', 'Data/AI Engineer', 'Full-Stack Engineer'],
    technologies: ['Apex', 'Lightning Web Components', 'Java', 'JavaScript', 'SOQL', 'Data Cloud', 'MuleSoft'],
    interviewFocus: ['data structures & algorithms', 'Salesforce platform & Apex depth', 'integration & system design', 'AI/agent design', 'behavioral (V2MOM/values)'],
    locations: ['San Francisco', 'Indianapolis', 'Bellevue', 'Hyderabad', 'Dublin'],
    existingLinks: [EX.javaGuide, EX.aimlProxy, EX.agentic, EX.dataEng],
    extraKeywords: ['Salesforce Apex interview support', 'Salesforce platform interview', 'Agentforce interview support'],
  },
  {
    slug: 'adobe',
    name: 'Adobe',
    categoryLine: 'SaaS • Creative • Experience Cloud • AI',
    overview:
      'Adobe builds Creative Cloud, Document Cloud and Experience Cloud, with generative AI across Firefly and Acrobat. Interviews emphasise strong CS fundamentals, system design and role-specific depth (C++, Java or ML).',
    products: ['Creative Cloud (Photoshop, etc.)', 'Firefly (GenAI)', 'Document Cloud / Acrobat', 'Experience Cloud (AEM)', 'Adobe Express'],
    disciplines: ['application & graphics engineering', 'cloud services & platform', 'machine learning / GenAI', 'data engineering', 'full-stack'],
    roles: ['Software Engineer (Computer Scientist)', 'Machine Learning Engineer', 'Cloud/Backend Engineer', 'Full-Stack Engineer', 'Data Engineer'],
    technologies: ['C++', 'Java', 'JavaScript/React', 'Python', 'AWS/Azure', 'GenAI/Firefly', 'microservices'],
    interviewFocus: ['data structures & algorithms', 'system & API design', 'domain depth (graphics / cloud / ML)', 'coding quality', 'behavioral'],
    locations: ['San Jose', 'Seattle', 'Bangalore', 'Noida', 'San Francisco'],
    existingLinks: [EX.aimlProxy, EX.reactGuide, EX.genai, EX.cloudUsa],
    extraKeywords: ['Adobe software engineer interview support', 'Adobe Firefly AI interview', 'Adobe system design interview support'],
  },
  {
    slug: 'cisco',
    name: 'Cisco',
    categoryLine: 'Networking • Security • Enterprise',
    overview:
      'Cisco builds networking, security (including Splunk) and collaboration platforms that run much of the internet. Interviews cover coding fundamentals, networking/protocols and distributed-systems design.',
    products: ['Networking (Catalyst, Nexus)', 'Security (Cisco/Splunk)', 'Meraki', 'Webex', 'ThousandEyes', 'IOS XR / NX-OS'],
    disciplines: ['networking & protocols', 'platform & distributed systems', 'security engineering', 'cloud & observability', 'embedded/systems'],
    roles: ['Software Engineer', 'Network Software Engineer', 'Security Engineer', 'Cloud/Platform Engineer', 'Systems Engineer'],
    technologies: ['C/C++', 'Python', 'Go', 'Java', 'networking (TCP/IP, BGP)', 'Kubernetes', 'gRPC'],
    interviewFocus: ['data structures & algorithms', 'networking & protocol depth', 'distributed system design', 'debugging & systems', 'behavioral'],
    locations: ['San Jose', 'Research Triangle Park', 'Bangalore', 'Krakow'],
    existingLinks: [EX.cyber, EX.kubernetes, EX.cloudUsa, EX.devopsUsa],
    extraKeywords: ['Cisco software engineer interview support', 'Cisco networking interview', 'Cisco security interview support'],
  },
  {
    slug: 'intel',
    name: 'Intel',
    categoryLine: 'Semiconductors • Silicon • Software',
    overview:
      'Intel designs and manufactures CPUs, GPUs and accelerators alongside a large systems-software and tools organisation. Interviews go deep on C/C++, computer architecture, operating systems and the role domain.',
    products: ['Core & Xeon CPUs', 'Gaudi AI accelerators', 'oneAPI', 'Intel Foundry', 'OpenVINO', 'firmware & drivers'],
    disciplines: ['systems & firmware software', 'compiler & performance', 'silicon design/verification', 'AI software (oneAPI/OpenVINO)', 'operating systems'],
    roles: ['Software Engineer', 'Firmware/Systems Engineer', 'Silicon Design/Verification Engineer', 'Compiler Engineer', 'AI Software Engineer'],
    technologies: ['C', 'C++', 'Python', 'assembly', 'computer architecture', 'oneAPI', 'Linux internals', 'SystemVerilog'],
    interviewFocus: ['C/C++ & data structures', 'computer architecture & OS', 'low-level debugging', 'domain deep dives', 'behavioral'],
    locations: ['Santa Clara', 'Hillsboro', 'Austin', 'Bangalore', 'Haifa'],
    existingLinks: [EX.aimlProxy, EX.cloudUsa, EX.proxyInterview, EX.knowledgeBase],
    extraKeywords: ['Intel software engineer interview support', 'Intel firmware interview', 'Intel architecture interview support'],
  },
  {
    slug: 'amd',
    name: 'AMD',
    categoryLine: 'Semiconductors • CPU/GPU • AI',
    overview:
      'AMD builds Ryzen/EPYC CPUs, Instinct GPUs and the ROCm software stack for AI and HPC. Interviews focus on C/C++, computer architecture, parallel/GPU computing and systems software.',
    products: ['Ryzen & EPYC CPUs', 'Instinct GPUs (MI-series)', 'ROCm', 'Versal/Adaptive SoCs (Xilinx)', 'firmware & drivers'],
    disciplines: ['GPU & systems software', 'computer architecture', 'HPC & parallel computing', 'AI software (ROCm)', 'firmware'],
    roles: ['Software Engineer', 'GPU/Compute Software Engineer', 'Firmware Engineer', 'Silicon Design Engineer', 'AI/ML Software Engineer'],
    technologies: ['C', 'C++', 'HIP/ROCm', 'Python', 'computer architecture', 'parallel algorithms', 'Linux'],
    interviewFocus: ['C/C++ & data structures', 'computer architecture', 'parallel/GPU computing', 'systems & performance', 'behavioral'],
    locations: ['Santa Clara', 'Austin', 'Markham', 'Bangalore', 'Shanghai'],
    existingLinks: [EX.aimlProxy, EX.mlops, EX.cloudUsa, EX.proxyInterview],
    extraKeywords: ['AMD software engineer interview support', 'AMD ROCm interview', 'AMD GPU interview support'],
  },
  {
    slug: 'servicenow',
    name: 'ServiceNow',
    categoryLine: 'Enterprise SaaS • Workflow • AI',
    overview:
      'ServiceNow builds the Now Platform for enterprise workflows across IT, HR and operations, with Now Assist generative AI. Interviews cover coding fundamentals, platform/Java depth and system design.',
    products: ['Now Platform', 'ITSM / ITOM', 'Now Assist (GenAI)', 'App Engine', 'Workflow Data Fabric', 'Virtual Agent'],
    disciplines: ['platform engineering', 'backend & distributed systems', 'AI/ML (Now Assist)', 'full-stack', 'data & integration'],
    roles: ['Software Engineer', 'Platform Engineer', 'Full-Stack Engineer', 'AI/ML Engineer', 'Data Engineer'],
    technologies: ['Java', 'JavaScript', 'Now Platform (Glide)', 'SQL', 'REST APIs', 'AI/LLM integration'],
    interviewFocus: ['data structures & algorithms', 'OOP & platform design', 'system & API design', 'AI feature design', 'behavioral'],
    locations: ['Santa Clara', 'San Diego', 'Hyderabad', 'Dublin', 'London'],
    existingLinks: [EX.javaGuide, EX.aimlProxy, EX.agentic, EX.cloudUsa],
    extraKeywords: ['ServiceNow developer interview support', 'ServiceNow platform interview', 'Now Assist AI interview support'],
  },
  {
    slug: 'snowflake',
    name: 'Snowflake',
    categoryLine: 'Data Cloud • Analytics • AI (Cortex)',
    overview:
      'Snowflake runs the AI Data Cloud — an elastic, multi-cloud data platform with Snowpark and Cortex AI. Interviews emphasise strong coding, database/distributed-systems design, and data engineering depth.',
    products: ['Snowflake Data Cloud', 'Snowpark', 'Cortex AI', 'Streamlit', 'Iceberg tables', 'Snowpipe'],
    disciplines: ['database & distributed systems', 'data engineering', 'query & storage engines', 'AI/ML (Cortex)', 'cloud platform'],
    roles: ['Software Engineer', 'Data Engineer', 'Distributed Systems Engineer', 'ML/AI Engineer', 'Cloud/Platform Engineer'],
    technologies: ['Java', 'C++', 'Python', 'SQL', 'Snowpark', 'Spark', 'AWS/Azure/GCP', 'distributed systems'],
    interviewFocus: ['data structures & algorithms', 'database internals & SQL', 'distributed system design', 'data engineering depth', 'behavioral'],
    locations: ['San Mateo', 'Bellevue', 'Berlin', 'Toronto', 'Pune'],
    existingLinks: [EX.snowflakeCortex, EX.dataEng, EX.aimlProxy, EX.cloudUsa],
    extraKeywords: ['Snowflake data engineer interview support', 'Snowflake SQL interview', 'Snowpark Cortex interview support'],
  },
  {
    slug: 'cloudflare',
    name: 'Cloudflare',
    categoryLine: 'Edge • CDN • Security • Developer Platform',
    overview:
      'Cloudflare runs a global edge network for performance, security and the Workers developer platform. Interviews focus on systems programming, networking and distributed-systems design at the edge.',
    products: ['CDN & network', 'Workers & Workers AI', 'Zero Trust', 'R2 / D1 / Durable Objects', 'DDoS protection', 'DNS (1.1.1.1)'],
    disciplines: ['edge & distributed systems', 'networking & security', 'developer platform', 'systems programming', 'reliability'],
    roles: ['Software Engineer', 'Systems Engineer', 'Security Engineer', 'Reliability Engineer', 'Platform Engineer'],
    technologies: ['Rust', 'Go', 'C', 'TypeScript', 'networking (TCP/IP, TLS)', 'WebAssembly', 'distributed systems'],
    interviewFocus: ['coding & data structures', 'systems & networking depth', 'distributed / edge system design', 'debugging & performance', 'behavioral'],
    locations: ['San Francisco', 'Austin', 'Lisbon', 'London', 'Bangalore'],
    existingLinks: [EX.cyber, EX.sreUsa, EX.cloudUsa, EX.devopsUsa],
    extraKeywords: ['Cloudflare software engineer interview support', 'Cloudflare Workers interview', 'Cloudflare systems interview support'],
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    categoryLine: 'Database • Developer Data Platform • AI',
    overview:
      'MongoDB builds a document database and the Atlas developer data platform, including vector search for AI. Interviews cover coding, database/distributed-systems design and data-modeling depth.',
    products: ['MongoDB Atlas', 'Document database', 'Atlas Vector Search', 'Atlas Search', 'Realm/Device Sync'],
    disciplines: ['database & distributed systems', 'developer platform', 'data engineering', 'AI/vector search', 'cloud infrastructure'],
    roles: ['Software Engineer', 'Distributed Systems Engineer', 'Data Engineer', 'Cloud/Platform Engineer', 'Solutions/Field Engineer'],
    technologies: ['C++', 'Java', 'Go', 'Python', 'MongoDB', 'distributed systems', 'AWS/Azure/GCP'],
    interviewFocus: ['data structures & algorithms', 'database internals', 'distributed system design', 'data modeling', 'behavioral'],
    locations: ['New York', 'Austin', 'Dublin', 'Sydney', 'Bangalore'],
    existingLinks: [EX.dataEng, EX.aimlProxy, EX.rag, EX.cloudUsa],
    extraKeywords: ['MongoDB engineer interview support', 'MongoDB Atlas interview', 'MongoDB data modeling interview support'],
  },
  {
    slug: 'palantir',
    name: 'Palantir',
    categoryLine: 'Data & AI Platforms • Government • Commercial',
    overview:
      'Palantir builds Foundry, Gotham and the AIP platform for data integration and applied AI in government and commercial settings. Interviews emphasise strong problem-solving, system design and product-engineering judgment.',
    products: ['Foundry', 'AIP (AI Platform)', 'Gotham', 'Apollo', 'Ontology'],
    disciplines: ['data integration & platforms', 'applied AI/LLM', 'distributed systems', 'forward-deployed engineering', 'full-stack'],
    roles: ['Software Engineer', 'Forward Deployed Engineer', 'Data Engineer', 'AI/ML Engineer', 'Infrastructure Engineer'],
    technologies: ['Java', 'TypeScript/React', 'Python', 'Spark', 'distributed systems', 'LLMs/AIP'],
    interviewFocus: ['coding & problem solving', 'system & data-model design', 'applied AI design', 'product/decision reasoning', 'behavioral'],
    locations: ['Denver', 'Palo Alto', 'New York', 'Washington DC', 'London'],
    existingLinks: [EX.dataEng, EX.aimlProxy, EX.rag, EX.agentic],
    extraKeywords: ['Palantir software engineer interview support', 'Palantir FDE interview', 'Palantir Foundry AIP interview support'],
  },
  {
    slug: 'crowdstrike',
    name: 'CrowdStrike',
    categoryLine: 'Cybersecurity • Endpoint • Cloud',
    overview:
      'CrowdStrike runs the Falcon platform for cloud-native endpoint and cloud security, processing trillions of security events. Interviews cover coding, distributed/data systems and security-engineering depth.',
    products: ['Falcon platform', 'Endpoint (EDR/XDR)', 'Cloud Security', 'Identity Protection', 'Threat Intelligence', 'Charlotte AI'],
    disciplines: ['cloud & distributed systems', 'big-data & streaming', 'detection/security engineering', 'backend', 'reliability'],
    roles: ['Software Engineer', 'Backend/Distributed Systems Engineer', 'Security/Detection Engineer', 'Data Engineer', 'Cloud Engineer'],
    technologies: ['Go', 'C++', 'Python', 'Kafka', 'Cassandra/ScyllaDB', 'AWS', 'Kubernetes'],
    interviewFocus: ['coding & data structures', 'distributed / data-intensive system design', 'security concepts', 'debugging & scale', 'behavioral'],
    locations: ['Austin', 'Sunnyvale', 'Remote (US)', 'Bangalore', 'Bucharest'],
    existingLinks: [EX.cyber, EX.dataEng, EX.cloudUsa, EX.devopsUsa],
    extraKeywords: ['CrowdStrike software engineer interview support', 'CrowdStrike Falcon interview', 'CrowdStrike security interview support'],
  },
  {
    slug: 'palo-alto-networks',
    name: 'Palo Alto Networks',
    categoryLine: 'Cybersecurity • Network • Cloud • AI',
    overview:
      'Palo Alto Networks builds network security (Strata), cloud security (Prisma) and AI-driven SecOps (Cortex). Interviews cover coding, distributed/cloud system design and security-engineering depth.',
    products: ['Strata (NGFW)', 'Prisma Cloud', 'Cortex XSIAM/XDR', 'Prisma SASE', 'Unit 42', 'Precision AI'],
    disciplines: ['cloud & distributed systems', 'network security', 'detection/SecOps engineering', 'data & AI', 'backend'],
    roles: ['Software Engineer', 'Cloud/Backend Engineer', 'Security Engineer', 'Data/ML Engineer', 'DevOps/SRE Engineer'],
    technologies: ['Go', 'Java', 'Python', 'C/C++', 'Kubernetes', 'AWS/GCP', 'networking & security'],
    interviewFocus: ['coding & data structures', 'cloud / distributed system design', 'security & networking concepts', 'debugging & scale', 'behavioral'],
    locations: ['Santa Clara', 'Bangalore', 'Tel Aviv', 'Amsterdam'],
    existingLinks: [EX.cyber, EX.cloudUsa, EX.kubernetes, EX.aimlProxy],
    extraKeywords: ['Palo Alto Networks interview support', 'Prisma Cloud interview', 'Cortex XSIAM interview support'],
  },
  {
    slug: 'github',
    name: 'GitHub',
    categoryLine: 'Developer Platform • CI/CD • AI (Copilot)',
    overview:
      'GitHub runs the world’s largest developer platform, GitHub Actions CI/CD, and Copilot AI. Interviews focus on coding, distributed-systems and API design, and product-engineering judgment.',
    products: ['GitHub platform', 'Actions (CI/CD)', 'Copilot & Copilot agents', 'Codespaces', 'Advanced Security', 'Packages'],
    disciplines: ['distributed systems & platform', 'developer tools', 'AI/Copilot', 'reliability & scale', 'full-stack'],
    roles: ['Software Engineer', 'Backend/Platform Engineer', 'Full-Stack Engineer', 'AI/ML Engineer', 'Site Reliability Engineer'],
    technologies: ['Ruby', 'Go', 'TypeScript', 'C', 'MySQL', 'Kubernetes', 'LLMs (Copilot)'],
    interviewFocus: ['coding & data structures', 'system & API design at scale', 'reliability', 'product reasoning', 'behavioral'],
    locations: ['Remote-first (US)', 'San Francisco', 'Remote (global)'],
    existingLinks: [EX.devopsUsa, EX.kubernetes, EX.aimlProxy, EX.agentic],
    peerLinks: [{ label: 'Microsoft interview & career support', href: '/microsoft-career-support/' }],
    extraKeywords: ['GitHub software engineer interview support', 'GitHub Copilot interview', 'GitHub platform interview support'],
  },
  {
    slug: 'tesla',
    name: 'Tesla',
    categoryLine: 'Automotive • Autonomy • Energy • AI',
    overview:
      'Tesla builds electric vehicles, Autopilot/FSD autonomy, energy products and the AI/robotics behind them. Interviews are practical and role-specific, going deep on coding, real-time/embedded systems or ML.',
    products: ['Autopilot / FSD', 'Vehicle software', 'Energy (Powerwall/Megapack)', 'Dojo & AI training', 'Optimus (robotics)'],
    disciplines: ['embedded & real-time systems', 'autonomy & computer vision', 'full-stack & backend', 'firmware', 'ML infrastructure'],
    roles: ['Software Engineer', 'Embedded / Firmware Engineer', 'Autopilot / ML Engineer', 'Full-Stack Engineer', 'Systems Engineer'],
    technologies: ['C++', 'C', 'Python', 'real-time systems', 'computer vision', 'PyTorch', 'Linux'],
    interviewFocus: ['coding & data structures', 'embedded / real-time systems', 'computer vision / ML (role-specific)', 'practical debugging', 'behavioral'],
    locations: ['Palo Alto', 'Austin', 'Fremont', 'Bangalore'],
    existingLinks: [EX.aimlProxy, EX.mlops, EX.cloudUsa, EX.proxyInterview],
    extraKeywords: ['Tesla software engineer interview support', 'Tesla Autopilot interview', 'Tesla embedded interview support'],
  },
  {
    slug: 'uber',
    name: 'Uber',
    categoryLine: 'Mobility • Marketplace • Data • ML',
    overview:
      'Uber runs global mobility and delivery marketplaces on a large microservices platform with heavy data and ML. Interviews test coding, marketplace/system design at scale, and (for ML roles) ML system design.',
    products: ['Rides & Eats marketplaces', 'Michelangelo (ML platform)', 'Maps & routing', 'Payments', 'Uber Freight'],
    disciplines: ['distributed systems & microservices', 'data engineering & real-time', 'machine learning', 'mobile & backend', 'reliability'],
    roles: ['Software Engineer', 'Machine Learning Engineer', 'Data Engineer', 'Backend Engineer', 'Site Reliability Engineer'],
    technologies: ['Go', 'Java', 'Python', 'Kafka', 'Spark/Flink', 'Cassandra', 'Kubernetes'],
    interviewFocus: ['coding & data structures', 'large-scale system design', 'ML system design (role-specific)', 'data & real-time design', 'behavioral'],
    locations: ['San Francisco', 'Seattle', 'New York', 'Bangalore', 'Amsterdam'],
    existingLinks: [EX.dataEng, EX.aimlProxy, EX.sreUsa, EX.kubernetes],
    extraKeywords: ['Uber software engineer interview support', 'Uber system design interview', 'Uber ML interview support'],
  },
  {
    slug: 'airbnb',
    name: 'Airbnb',
    categoryLine: 'Marketplace • Travel • Data • ML',
    overview:
      'Airbnb runs a global travel marketplace with a strong product-engineering and design-systems culture. Interviews emphasise coding, system design, and (notably) frontend/full-stack and behavioral depth.',
    products: ['Marketplace platform', 'Search & ranking', 'Payments', 'Trust & Safety', 'Design system (React)'],
    disciplines: ['full-stack & product engineering', 'distributed systems', 'data engineering', 'machine learning', 'reliability'],
    roles: ['Software Engineer', 'Full-Stack Engineer', 'Frontend Engineer', 'Data Engineer', 'Machine Learning Engineer'],
    technologies: ['Java', 'Kotlin', 'React', 'TypeScript', 'Ruby', 'Spark', 'AWS'],
    interviewFocus: ['coding & data structures', 'system design', 'frontend/full-stack depth', 'cross-functional collaboration', 'behavioral (core values)'],
    locations: ['San Francisco', 'Seattle', 'Remote (US)'],
    existingLinks: [EX.reactGuide, EX.dataEng, EX.aimlProxy, EX.cloudUsa],
    extraKeywords: ['Airbnb software engineer interview support', 'Airbnb frontend interview', 'Airbnb system design interview support'],
  },
  {
    slug: 'stripe',
    name: 'Stripe',
    categoryLine: 'FinTech • Payments • Developer Platform',
    overview:
      'Stripe builds payments and financial infrastructure APIs used by millions of businesses. Interviews are pragmatic and rigorous — real-world coding, API/system design, and correctness/reliability for money movement.',
    products: ['Payments APIs', 'Billing & Invoicing', 'Connect', 'Radar (fraud/ML)', 'Financial Connections', 'Terminal'],
    disciplines: ['backend & distributed systems', 'API & platform engineering', 'data & ML (fraud)', 'reliability & correctness', 'full-stack'],
    roles: ['Software Engineer', 'Backend Engineer', 'API/Platform Engineer', 'Data/ML Engineer', 'Reliability Engineer'],
    technologies: ['Ruby', 'Java', 'Scala', 'Go', 'TypeScript', 'MongoDB', 'distributed systems'],
    interviewFocus: ['practical coding (real-world)', 'API & system design', 'reliability & correctness', 'debugging & integration', 'behavioral'],
    locations: ['San Francisco', 'Seattle', 'New York', 'Dublin', 'Bangalore'],
    existingLinks: [EX.dataEng, EX.aimlProxy, EX.cloudUsa, EX.proxyInterview],
    extraKeywords: ['Stripe software engineer interview support', 'Stripe API interview', 'Stripe backend interview support'],
  },
  {
    slug: 'databricks',
    name: 'Databricks',
    categoryLine: 'Data + AI • Lakehouse • ML',
    overview:
      'Databricks builds the Data Intelligence Platform (lakehouse) with Spark, Delta Lake, Unity Catalog, MLflow and Mosaic AI. Interviews emphasise strong coding, distributed-systems/data design and applied ML.',
    products: ['Lakehouse Platform', 'Apache Spark', 'Delta Lake', 'Unity Catalog', 'MLflow', 'Mosaic AI', 'Databricks SQL'],
    disciplines: ['distributed data systems', 'data engineering', 'machine learning / GenAI', 'query & compute engines', 'cloud platform'],
    roles: ['Software Engineer', 'Data Engineer', 'ML/AI Engineer', 'Distributed Systems Engineer', 'Solutions Architect'],
    technologies: ['Scala', 'Java', 'Python', 'Spark', 'SQL', 'MLflow', 'AWS/Azure/GCP'],
    interviewFocus: ['data structures & algorithms', 'distributed system & data design', 'Spark / big-data depth', 'ML system design', 'behavioral'],
    locations: ['San Francisco', 'Mountain View', 'Bellevue', 'Amsterdam', 'Bangalore'],
    existingLinks: [EX.databricksMl, EX.dataEng, EX.mlops, EX.aimlProxy],
    extraKeywords: ['Databricks data engineer interview support', 'Databricks Spark interview', 'Databricks ML interview support'],
  },
  {
    slug: 'openai',
    name: 'OpenAI',
    categoryLine: 'AI • Foundation Models • API',
    overview:
      'OpenAI builds frontier models and the ChatGPT and API products used to ship AI applications and agents. Interviews cover strong coding, ML/LLM systems, and building reliable applications on model APIs.',
    products: ['ChatGPT', 'OpenAI API', 'GPT models', 'Realtime & Agents', 'Assistants/Responses API', 'Evals'],
    disciplines: ['applied AI / LLM engineering', 'ML systems & infrastructure', 'backend & distributed systems', 'data engineering', 'safety/evaluation'],
    roles: ['Software Engineer', 'Applied AI Engineer', 'ML Engineer', 'Backend/Infra Engineer', 'Data Engineer'],
    technologies: ['Python', 'LLM APIs', 'RAG & agents', 'PyTorch', 'distributed systems', 'vector databases', 'evals'],
    interviewFocus: ['coding & data structures', 'LLM application & agent design', 'ML/inference systems', 'reliability & evaluation', 'behavioral'],
    locations: ['San Francisco', 'Remote (US)'],
    existingLinks: [EX.openaiApi, EX.rag, EX.agentic, EX.llm],
    peerLinks: [{ label: 'Anthropic interview & career support', href: '/anthropic-career-support/' }],
    extraKeywords: ['OpenAI engineer interview support', 'OpenAI applied AI interview', 'LLM application interview support'],
  },
  {
    slug: 'anthropic',
    name: 'Anthropic',
    categoryLine: 'AI • Foundation Models • Safety',
    overview:
      'Anthropic builds the Claude family of models with a focus on AI safety, and tools like the Model Context Protocol (MCP) and Claude Code. Interviews emphasise strong engineering, LLM systems, and building safe, reliable AI applications.',
    products: ['Claude models', 'Claude API', 'Claude Code', 'Model Context Protocol (MCP)', 'Agents & tool use'],
    disciplines: ['applied AI / LLM engineering', 'ML systems & infrastructure', 'backend & distributed systems', 'safety & evaluation', 'developer tools'],
    roles: ['Software Engineer', 'Applied AI Engineer', 'ML Engineer', 'Backend/Infra Engineer', 'Research Engineer'],
    technologies: ['Python', 'TypeScript', 'Claude API', 'MCP', 'RAG & agents', 'distributed systems', 'evals'],
    interviewFocus: ['coding & data structures', 'LLM application, agents & tool use', 'ML/inference systems', 'reliability & evaluation', 'behavioral'],
    locations: ['San Francisco', 'Remote (US)', 'London'],
    existingLinks: [EX.rag, EX.agentic, EX.llm, EX.aimlProxy],
    peerLinks: [{ label: 'OpenAI interview & career support', href: '/openai-career-support/' }],
    extraKeywords: ['Anthropic engineer interview support', 'Claude API interview', 'MCP agent interview support'],
  },
  // <<HUBS>>
];

// ─── Registry-driven "lite" hubs for Tier B/C employers without hand facts ───

/** Deterministic left-rotation so sibling same-category pages don't lead with an
 *  identical list (reduces near-duplicate copy without inventing false facts). */
function seed(slug: string): number {
  let s = 0;
  for (let i = 0; i < slug.length; i++) s = (s + slug.charCodeAt(i)) % 997;
  return s;
}
function rotate<T>(arr: T[], n: number): T[] {
  if (arr.length <= 1) return arr.slice();
  const k = n % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

/** Cleaner brand name for hub H1/title (drops legal/geo suffixes, keeps the brand). */
function brand(c: Company): string {
  let n = c.name.replace(/\s*\([^)]*\)\s*/g, ' ').trim();
  n = n.replace(/,?\s+(Inc\.?|Corp\.?|Corporation|LP|LLC)$/i, '').trim();
  n = n.replace(/\s+(USA|US|North America|Group of America)$/i, '').trim();
  return n || c.name;
}

function liteFacts(c: Company): CompanyHubFacts {
  const p = CATEGORY_PROFILE[c.category];
  const n = seed(c.slug);
  const name = brand(c);
  return {
    slug: c.slug,
    name,
    categoryLine: c.industry,
    overview: `${c.blurb} ${name} hires engineers across ${p.disciplines.slice(0, 3).join(', ')} and related areas; this hub summarises that landscape and the interview and job support we offer for it.`,
    products: rotate(p.products, n),
    disciplines: rotate(p.disciplines, n),
    roles: rotate(p.roles, n),
    technologies: rotate(p.technologies, n),
    interviewFocus: p.interviewFocus, // keep a coherent, ordered interview narrative
    existingLinks: p.links,
    extraKeywords: (c.aliases || []).slice(0, 2).map((a) => `${a} interview support`),
  };
}

const richBySlug = new Map(companyHubFactsList.map((f) => [f.slug, f]));

/** One hub per company with hasHub === true. Hand-written rich facts take precedence;
 *  everything else is built from the registry + its industry profile. */
export const companyHubPages: LandingPageConfig[] = companies
  .filter((c) => c.hasHub)
  .map((c) => companyHub(richBySlug.get(c.slug) ?? liteFacts(c)));
