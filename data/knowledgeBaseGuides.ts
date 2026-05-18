export interface KBGuide {
  title: string;
  href: string;
  category: string;
  categoryKey: KBCategoryKey;
  description: string;
  tags: string[];
  featured?: boolean;
}

export type KBCategoryKey =
  | 'interview'
  | 'job-support'
  | 'technology'
  | 'canada'
  | 'ireland'
  | 'germany'
  | 'australia'
  | 'europe';

export interface KBCategory {
  key: 'all' | KBCategoryKey | 'production';
  label: string;
}

export const KB_CATEGORIES: KBCategory[] = [
  { key: 'all', label: 'All' },
  { key: 'interview', label: 'Interview Support' },
  { key: 'job-support', label: 'Proxy Job Support' },
  { key: 'technology', label: 'Trending Tech' },
  { key: 'canada', label: 'Canada' },
  { key: 'ireland', label: 'Ireland' },
  { key: 'germany', label: 'Germany' },
  { key: 'australia', label: 'Australia' },
  { key: 'europe', label: 'Europe' },
  { key: 'production', label: 'Production Help' },
];

export const KB_SECTION_ORDER: KBCategoryKey[] = [
  'interview',
  'job-support',
  'technology',
  'canada',
  'ireland',
  'germany',
  'australia',
  'europe',
];

export const KB_SECTION_LABELS: Record<KBCategoryKey, string> = {
  interview: 'Interview Support Guides',
  'job-support': 'Proxy Job Support Guides',
  technology: 'Trending Technology Support Guides',
  canada: 'Canada Knowledge Guides',
  ireland: 'Ireland Knowledge Guides',
  germany: 'Germany Knowledge Guides',
  australia: 'Australia Knowledge Guides',
  europe: 'Europe Knowledge Guides',
};

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Interview Support': { bg: '#e0f2fe', text: '#0369a1', border: '#bae6fd' },
  'Proxy Job Support': { bg: '#dcfce7', text: '#15803d', border: '#bbf7d0' },
  Technology: { bg: '#ede9fe', text: '#7c3aed', border: '#ddd6fe' },
  Canada: { bg: '#fee2e2', text: '#dc2626', border: '#fecaca' },
  Ireland: { bg: '#d1fae5', text: '#065f46', border: '#a7f3d0' },
  Germany: { bg: '#fef9c3', text: '#a16207', border: '#fef08a' },
  Australia: { bg: '#ffedd5', text: '#c2410c', border: '#fed7aa' },
  Europe: { bg: '#dbeafe', text: '#1d4ed8', border: '#bfdbfe' },
};

export const FEATURED_HREFS = [
  '/what-is-proxy-job-support/',
  '/how-proxy-job-support-works/',
  '/what-is-interview-proxy-support/',
  '/final-round-interview-support-guide/',
  '/why-canada-it-resume-gets-no-calls/',
  '/devops-job-support-guide/',
];

export const knowledgeBaseGuides: KBGuide[] = [
  // ── Interview Support ──────────────────────────────────────────────────────
  {
    title: 'What Is Interview Proxy Support?',
    href: '/what-is-interview-proxy-support/',
    category: 'Interview Support',
    categoryKey: 'interview',
    description:
      'Understand how real-time interview proxy support works, which formats it covers, and who benefits from expert live guidance during technical screens.',
    tags: ['interview', 'proxy'],
    featured: true,
  },
  {
    title: 'How Live Technical Interview Support Works',
    href: '/how-live-technical-interview-support-works/',
    category: 'Interview Support',
    categoryKey: 'interview',
    description:
      'Step-by-step walkthrough of how expert support is delivered during live coding and system design rounds without disrupting interview flow.',
    tags: ['interview', 'live-coding'],
  },
  {
    title: 'Final Round Interview Support Guide',
    href: '/final-round-interview-support-guide/',
    category: 'Interview Support',
    categoryKey: 'interview',
    description:
      'How to navigate panel interviews, hiring manager rounds, and executive-level final rounds — and how expert support improves final-round outcomes.',
    tags: ['interview', 'final-round'],
    featured: true,
  },
  {
    title: 'Technical Interview Support USA Guide',
    href: '/technical-interview-support-usa-guide/',
    category: 'Interview Support',
    categoryKey: 'interview',
    description:
      'USA-specific technical interview support covering FAANG, bank, startup, and enterprise formats — live coding, system design, and behavioural rounds.',
    tags: ['interview', 'usa'],
  },
  {
    title: 'Interview Proxy Support Risks & Expectations',
    href: '/interview-proxy-support-risks-expectations/',
    category: 'Interview Support',
    categoryKey: 'interview',
    description:
      'An honest guide to the risks, realistic expectations, and appropriate use of interview proxy support — what it can and cannot do.',
    tags: ['interview'],
  },

  // ── Proxy Job Support ──────────────────────────────────────────────────────
  {
    title: 'What Is Proxy Job Support?',
    href: '/what-is-proxy-job-support/',
    category: 'Proxy Job Support',
    categoryKey: 'job-support',
    description:
      'Understand how real-time IT job support helps professionals handle project blockers, debugging, production issues, client calls, and delivery pressure.',
    tags: ['job-support'],
    featured: true,
  },
  {
    title: 'How Proxy Job Support Works',
    href: '/how-proxy-job-support-works/',
    category: 'Proxy Job Support',
    categoryKey: 'job-support',
    description:
      'A clear process guide to setting up and using proxy job support for an active IT role — from initial assessment to day-to-day task sessions.',
    tags: ['job-support'],
    featured: true,
  },
  {
    title: 'Real-Time IT Job Support Guide',
    href: '/real-time-it-job-support-guide/',
    category: 'Proxy Job Support',
    categoryKey: 'job-support',
    description:
      'How synchronous, in-the-moment job support works during your working hours — what it covers and how to use it most effectively.',
    tags: ['job-support', 'real-time'],
  },
  {
    title: 'Production Issue Support for IT Professionals',
    href: '/production-issue-support-for-it-professionals/',
    category: 'Proxy Job Support',
    categoryKey: 'job-support',
    description:
      'How expert support helps during production incidents — rapid diagnosis, resolution guidance, and post-mortem documentation under time pressure.',
    tags: ['job-support', 'production'],
  },
  {
    title: 'Client Call & Standup Support Guide',
    href: '/client-call-and-standup-support-guide/',
    category: 'Proxy Job Support',
    categoryKey: 'job-support',
    description:
      'Preparation and communication support for IT professionals in client-facing roles — standups, demos, stakeholder calls, and written status updates.',
    tags: ['job-support', 'communication'],
  },

  // ── Technology ─────────────────────────────────────────────────────────────
  {
    title: 'AI/ML Job Support Guide',
    href: '/ai-ml-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Real-time job support for AI and ML engineers — model development, LLM integration, RAG pipelines, deployment, and production debugging.',
    tags: ['technology', 'ai-ml'],
  },
  {
    title: 'MLOps Job Support Guide',
    href: '/mlops-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Expert support for MLOps engineers working on ML pipelines, model monitoring, feature stores, MLflow, Kubeflow, and production model management.',
    tags: ['technology', 'mlops', 'ai-ml'],
  },
  {
    title: 'RAG & Agentic AI Job Support Guide',
    href: '/rag-agentic-ai-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Support for engineers building RAG systems and agentic AI applications — LangChain, LlamaIndex, vector databases, and agent orchestration.',
    tags: ['technology', 'ai-ml', 'rag'],
  },
  {
    title: 'GenAI Interview Support Guide',
    href: '/genai-interview-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Interview support guide for generative AI engineering roles — what to expect, what to prepare, and how real-time guidance improves GenAI interview performance.',
    tags: ['technology', 'ai-ml', 'interview'],
  },
  {
    title: 'DevOps Job Support Guide',
    href: '/devops-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Job support for DevOps engineers — CI/CD pipeline issues, Kubernetes, Terraform, AWS/Azure, observability, and incident response in real time.',
    tags: ['technology', 'devops'],
    featured: true,
  },
  {
    title: 'SRE Job Support Guide',
    href: '/sre-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Support for Site Reliability Engineers — SLO/SLI definition, error budget management, incident management, chaos engineering, and reliability automation.',
    tags: ['technology', 'sre', 'production'],
  },
  {
    title: 'AWS Job Support Guide',
    href: '/aws-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Real-time support for engineers working on AWS — EC2, EKS, Lambda, RDS, S3, IAM policy debugging, VPC networking, and CloudFormation issues.',
    tags: ['technology', 'aws', 'cloud'],
  },
  {
    title: 'Azure Job Support Guide',
    href: '/azure-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Expert help for Azure engineers — AKS, App Service, Azure DevOps pipelines, Azure ML, Cosmos DB, and Azure networking and IAM issues.',
    tags: ['technology', 'azure', 'cloud'],
  },
  {
    title: 'Kubernetes Job Support Guide',
    href: '/kubernetes-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Kubernetes job support for engineers dealing with pod failures, RBAC misconfiguration, networking policies, Helm, ArgoCD, and cluster management.',
    tags: ['technology', 'kubernetes', 'devops'],
  },
  {
    title: 'React Job Support Guide',
    href: '/react-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Support for React and frontend developers — React 18, Next.js, TypeScript, state management, performance issues, and component architecture.',
    tags: ['technology', 'react', 'frontend'],
  },
  {
    title: '.NET Job Support Guide',
    href: '/dotnet-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Job support for .NET and C# developers — ASP.NET Core, Entity Framework, Azure integration, microservices, and common runtime and deployment issues.',
    tags: ['technology', 'dotnet', 'backend'],
  },
  {
    title: 'Java Job Support Guide',
    href: '/java-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Expert help for Java developers — Spring Boot, Spring Security, JPA, Kafka, microservices architecture, JVM performance, and API design.',
    tags: ['technology', 'java', 'backend'],
  },
  {
    title: 'Node.js Job Support Guide',
    href: '/nodejs-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Support for Node.js developers — Express, NestJS, REST/GraphQL APIs, async debugging, streaming, WebSockets, and performance issues.',
    tags: ['technology', 'nodejs', 'backend'],
  },
  {
    title: 'Full-Stack Job Support Guide',
    href: '/full-stack-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Job support for full-stack developers spanning frontend, backend, API integration, database design, and deployment challenges.',
    tags: ['technology', 'fullstack'],
  },
  {
    title: 'QA Automation Job Support Guide',
    href: '/qa-automation-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Support for QA automation engineers — Selenium, Playwright, Cypress, API testing, test framework setup, and CI/CD integration.',
    tags: ['technology', 'qa'],
  },
  {
    title: 'Data Engineering Job Support Guide',
    href: '/data-engineering-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Expert support for data engineers — Spark, Databricks, dbt, Airflow, pipeline debugging, data quality issues, and lakehouse architecture.',
    tags: ['technology', 'data-engineering'],
  },
  {
    title: 'Cybersecurity & DevSecOps Job Support Guide',
    href: '/cybersecurity-devsecops-job-support-guide/',
    category: 'Technology',
    categoryKey: 'technology',
    description:
      'Support for cybersecurity and DevSecOps engineers — IAM misconfiguration, cloud security, SAST/DAST, OWASP remediation, and audit response.',
    tags: ['technology', 'cybersecurity', 'devsecops'],
  },

  // ── Canada ─────────────────────────────────────────────────────────────────
  {
    title: 'Why Your Canada IT Resume Gets No Calls',
    href: '/why-canada-it-resume-gets-no-calls/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Explains why qualified IT professionals in Canada get no recruiter calls — ATS filtering, keyword mismatch, weak LinkedIn headline, and how to fix each issue.',
    tags: ['canada', 'resume', 'job-search'],
    featured: true,
  },
  {
    title: 'How to Get IT Interviews Scheduled in Canada',
    href: '/how-to-get-it-interviews-scheduled-in-canada/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Step-by-step guide to improving your IT interview scheduling rate in Canada — resume keywords, LinkedIn, referral channels, and role targeting.',
    tags: ['canada', 'job-search', 'interview'],
  },
  {
    title: 'Canada IT Resume & LinkedIn Positioning Guide',
    href: '/canada-it-resume-linkedin-positioning-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'How to position your IT resume and LinkedIn profile for Canadian recruiter searches — headline, skills section, ATS keywords, and project bullet copy.',
    tags: ['canada', 'resume', 'linkedin'],
  },
  {
    title: 'Canada IT Job Search Mistakes',
    href: '/canada-it-job-search-mistakes/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'The 10 most common IT job search mistakes costing candidates interviews in Canada — generic resume, missing keywords, wrong role targeting, and more.',
    tags: ['canada', 'job-search'],
  },
  {
    title: 'Recruiter Keywords for Canada IT Jobs',
    href: '/recruiter-keywords-for-canada-it-jobs/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'The exact keywords Canadian IT recruiters search for — by role, technology, and sector, with specific examples for Java, DevOps, AI/ML, and React.',
    tags: ['canada', 'resume', 'keywords'],
  },
  {
    title: 'Canada Interview Proxy Support Guide',
    href: '/canada-interview-proxy-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'How real-time interview support works in the Canadian context — formats used by Canadian employers, behavioural expectations, and live guidance delivery.',
    tags: ['canada', 'interview'],
  },
  {
    title: 'Canada Technical Interview Support Guide',
    href: '/canada-technical-interview-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Live coding and system design interview support for Canadian IT roles — difficulty expectations by employer type, and how Canadian interviewers assess candidates.',
    tags: ['canada', 'interview', 'live-coding'],
  },
  {
    title: 'Canada Final Round Interview Support Guide',
    href: '/canada-final-round-interview-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Panel, hiring manager, and executive-level final round interview support for Canadian IT roles — what is assessed and how to perform confidently.',
    tags: ['canada', 'interview', 'final-round'],
  },
  {
    title: 'Canada Live Coding Interview Support Guide',
    href: '/canada-live-coding-interview-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'HackerRank, CoderPad, and take-home project support for Canadian IT interviews — difficulty levels, approach, and what Canadian employers actually look for.',
    tags: ['canada', 'interview', 'live-coding'],
  },
  {
    title: 'Canada DevOps & Cloud Interview Support Guide',
    href: '/canada-devops-cloud-interview-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Expert support for DevOps and cloud engineering interviews in Canada — AWS, Azure, Kubernetes, Terraform, and system design for Canadian banking and tech.',
    tags: ['canada', 'interview', 'devops', 'cloud'],
  },
  {
    title: 'Canada Proxy Job Support Guide',
    href: '/canada-proxy-job-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Real-time job support for IT professionals in Canadian roles — what it covers, how it works, and why it matters in Canadian banking and tech environments.',
    tags: ['canada', 'job-support'],
  },
  {
    title: 'How Proxy Job Support Works in Canada',
    href: '/how-proxy-job-support-works-in-canada/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'A step-by-step process guide for using proxy job support in Canadian IT roles — from initial assessment to daily standup and delivery session coverage.',
    tags: ['canada', 'job-support'],
  },
  {
    title: 'Canada Real-Time IT Job Support Guide',
    href: '/canada-real-time-it-job-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Live technical help for IT professionals at Canadian employers — how it works in banking, fintech, and tech environments across Canadian time zones.',
    tags: ['canada', 'job-support', 'real-time'],
  },
  {
    title: 'Canada Production Issue Support Guide',
    href: '/canada-production-issue-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Production incident support for Canadian banking and enterprise IT roles — P1 incident processes, RCA guidance, and post-mortem documentation.',
    tags: ['canada', 'job-support', 'production'],
  },
  {
    title: 'Canada Client Call & Standup Support Guide',
    href: '/canada-client-call-standup-support-guide/',
    category: 'Canada',
    categoryKey: 'canada',
    description:
      'Communication support for IT professionals in Canadian workplaces — standup preparation, client call guidance, and professional communication norms.',
    tags: ['canada', 'job-support', 'communication'],
  },

  // ── Ireland ────────────────────────────────────────────────────────────────
  {
    title: 'Ireland IT Job Support Guide',
    href: '/ireland-it-job-support-guide/',
    category: 'Ireland',
    categoryKey: 'ireland',
    description:
      'IT job support for professionals in Ireland — Dublin multinational offices, Irish banks, GDPR obligations, and remote Irish roles across major stacks.',
    tags: ['ireland', 'job-support'],
  },
  {
    title: 'Ireland Interview Proxy Support Guide',
    href: '/ireland-interview-proxy-support-guide/',
    category: 'Ireland',
    categoryKey: 'ireland',
    description:
      'Technical interview support for Dublin and Irish IT roles — FAANG Dublin offices, Irish bank competency interviews, and Irish fintech take-home assessments.',
    tags: ['ireland', 'interview'],
  },
  {
    title: 'Ireland Production Support Help Guide',
    href: '/ireland-production-support-help-guide/',
    category: 'Ireland',
    categoryKey: 'ireland',
    description:
      'Production incident support for Irish IT roles — GDPR breach response, AWS eu-west-1 issues, and on-call support during Irish and European business hours.',
    tags: ['ireland', 'job-support', 'production'],
  },
  {
    title: 'Ireland Project Onboarding Help Guide',
    href: '/ireland-project-onboarding-help-guide/',
    category: 'Ireland',
    categoryKey: 'ireland',
    description:
      'Onboarding and ramp-up support for IT professionals starting new roles in Ireland — codebase navigation, toolchain setup, and first-90-days delivery.',
    tags: ['ireland', 'job-support', 'onboarding'],
  },
  {
    title: 'Ireland AI/ML, DevOps & SRE Support Guide',
    href: '/ireland-ai-ml-devops-sre-support-guide/',
    category: 'Ireland',
    categoryKey: 'ireland',
    description:
      'AI/ML, DevOps, and SRE job support for Dublin tech roles — EU AI Act context, GDPR-compliant AI systems, and cloud engineering at Irish multinationals.',
    tags: ['ireland', 'job-support', 'ai-ml', 'devops'],
  },

  // ── Germany ────────────────────────────────────────────────────────────────
  {
    title: 'Germany IT Job Support Guide',
    href: '/germany-it-job-support-guide/',
    category: 'Germany',
    categoryKey: 'germany',
    description:
      'IT job support for professionals in Germany — Berlin startups, Munich enterprise tech, German banking, and the unique professional culture of German IT roles.',
    tags: ['germany', 'job-support'],
  },
  {
    title: 'Germany Interview Support Guide',
    href: '/germany-interview-support-guide/',
    category: 'Germany',
    categoryKey: 'germany',
    description:
      'Technical interview support for Berlin, Munich, and German IT roles — how German employers interview, the depth they expect, and how to perform confidently.',
    tags: ['germany', 'interview'],
  },
  {
    title: 'Germany DevOps & Cloud Job Support Guide',
    href: '/germany-devops-cloud-job-support-guide/',
    category: 'Germany',
    categoryKey: 'germany',
    description:
      'DevOps and cloud engineering job support for German IT roles — AWS eu-central-1 (Frankfurt), DSGVO infrastructure compliance, and BSI C5 requirements.',
    tags: ['germany', 'job-support', 'devops', 'cloud'],
  },
  {
    title: 'Germany Java, .NET & Full-Stack Support Guide',
    href: '/germany-java-dotnet-fullstack-support-guide/',
    category: 'Germany',
    categoryKey: 'germany',
    description:
      'Java, .NET, Angular, and React job support for German roles — Spring Boot in German banking, Keycloak SSO, and Angular in German enterprise environments.',
    tags: ['germany', 'job-support', 'java', 'dotnet', 'fullstack'],
  },
  {
    title: 'Germany AI/ML & Data Engineering Support Guide',
    href: '/germany-ai-ml-data-support-guide/',
    category: 'Germany',
    categoryKey: 'germany',
    description:
      'AI/ML and data engineering job support for German tech roles — EU AI Act compliance, DSGVO in ML pipelines, Databricks, and German automotive AI context.',
    tags: ['germany', 'job-support', 'ai-ml', 'data-engineering'],
  },

  // ── Australia ──────────────────────────────────────────────────────────────
  {
    title: 'Australia IT Job Support Guide',
    href: '/australia-it-job-support-guide/',
    category: 'Australia',
    categoryKey: 'australia',
    description:
      'IT job support for professionals in Australia — Sydney banks, Melbourne tech, Atlassian, Canva, and full AEST/AEDT/AWST time zone coverage.',
    tags: ['australia', 'job-support'],
  },
  {
    title: 'Australia Interview Proxy Support Guide',
    href: '/australia-interview-proxy-support-guide/',
    category: 'Australia',
    categoryKey: 'australia',
    description:
      'Technical interview support for Australian IT roles — Atlassian and Canva assessments, Big Four bank competency interviews, and FAANG Sydney office processes.',
    tags: ['australia', 'interview'],
  },
  {
    title: 'Australia Production Support Help Guide',
    href: '/australia-production-support-help-guide/',
    category: 'Australia',
    categoryKey: 'australia',
    description:
      'Production incident support for Australian IT roles — APRA CPS 234 incident obligations, NPP payment system issues, and on-call incident guidance.',
    tags: ['australia', 'job-support', 'production'],
  },
  {
    title: 'Australia DevOps, Cloud & SRE Support Guide',
    href: '/australia-devops-cloud-sre-support-guide/',
    category: 'Australia',
    categoryKey: 'australia',
    description:
      'DevOps, cloud, and SRE job support for Australian IT roles — AWS ap-southeast-2 (Sydney), Azure Australia, Atlassian toolchain, and Australian compliance.',
    tags: ['australia', 'job-support', 'devops', 'cloud', 'sre'],
  },
  {
    title: 'Australia Full-Stack, Java, .NET & React Support Guide',
    href: '/australia-fullstack-java-dotnet-react-support-guide/',
    category: 'Australia',
    categoryKey: 'australia',
    description:
      'Java, .NET, React, and full-stack job support for Australian IT roles — banking Java backends, React at Atlassian and Canva, and WCAG accessibility.',
    tags: ['australia', 'job-support', 'java', 'react', 'fullstack'],
  },

  // ── Europe ─────────────────────────────────────────────────────────────────
  {
    title: 'Europe IT Job Support Guide',
    href: '/europe-it-job-support-guide/',
    category: 'Europe',
    categoryKey: 'europe',
    description:
      'IT job support across European tech hubs — Amsterdam, Stockholm, Berlin, Paris, Warsaw, and remote European roles with CET/WET time zone coverage.',
    tags: ['europe', 'job-support'],
  },
  {
    title: 'Europe Interview Support Guide',
    href: '/europe-interview-support-guide/',
    category: 'Europe',
    categoryKey: 'europe',
    description:
      'Technical interview support for European IT roles — Booking.com, Adyen, Spotify, Klarna, and US multinational European office interview processes.',
    tags: ['europe', 'interview'],
  },
  {
    title: 'Europe DevOps, Cloud & SRE Support Guide',
    href: '/europe-devops-cloud-sre-support-guide/',
    category: 'Europe',
    categoryKey: 'europe',
    description:
      'DevOps, cloud, and SRE job support for European IT roles — AWS eu-central-1, GDPR data residency enforcement, GitLab CI adoption, and cloud compliance.',
    tags: ['europe', 'job-support', 'devops', 'cloud'],
  },
  {
    title: 'Europe AI/ML, RAG & MLOps Support Guide',
    href: '/europe-ai-ml-rag-mlops-support-guide/',
    category: 'Europe',
    categoryKey: 'europe',
    description:
      'AI/ML and data engineering job support for European tech roles — EU AI Act compliance, GDPR in ML pipelines, Mistral AI, and European AI engineering context.',
    tags: ['europe', 'job-support', 'ai-ml'],
  },
  {
    title: 'Europe Full-Stack, Backend & Frontend Support Guide',
    href: '/europe-fullstack-backend-frontend-support-guide/',
    category: 'Europe',
    categoryKey: 'europe',
    description:
      'Java, Python, TypeScript, React, and Angular job support for European IT roles — Keycloak SSO, PSD2 payment APIs, and GDPR-compliant development.',
    tags: ['europe', 'job-support', 'java', 'react', 'fullstack'],
  },
];
