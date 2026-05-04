export type TechIconId =
  | 'code'
  | 'server'
  | 'database'
  | 'cloud'
  | 'gear'
  | 'test'
  | 'cpu'
  | 'chart'
  | 'shield'
  | 'crm'
  | 'java'
  | 'brain'
  | 'flask'
  | 'pipeline';

export type Technology = {
  id: string;
  title: string;
  icon: TechIconId;
  tags: string[];
  description?: string;
  href?: string;
  hidden?: boolean;
};

export const technologies: Technology[] = [
  {
    id: 'agentic-ai',
    icon: 'brain',
    href: '/agentic-ai-ml-job-support/',
    title: 'Agentic AI & Machine Learning',
    description: 'Production-grade support for agentic AI systems, RAG pipelines, LLMs, and deep learning infrastructure in 2026.',
    tags: [
      'LangGraph & AutoGen Agents',
      'CrewAI & OpenAI Agents SDK',
      'RAG — Advanced & Agentic',
      'GPT-5.5 / GPT-5.4 / o3 / o4-mini',
      'Claude Opus 4.7 / Gemini 3.1 Pro',
      'Llama 4 Maverick & Scout',
      'PyTorch 2.5 & Hugging Face',
      'Fine-Tuning: LoRA / QLoRA / DPO',
      'vLLM / TensorRT-LLM / Ollama',
      'MLflow 2.x / W&B / DVC',
      'Vector DBs: Pinecone / Qdrant / Weaviate',
      'RAGAS / DeepEval / LangSmith',
    ],
  },
  {
    id: 'ai-workflow',
    icon: 'pipeline',
    href: '/ai-workflow-automation-pipeline-job-support/',
    title: 'AI Workflow Automation & Pipeline Engineering',
    description: 'Expert support for AI-powered CI/CD, MLOps pipelines, AIOps, GitOps, and LLMOps DevOps toolchains in 2026.',
    tags: [
      'Airflow 2.10 / Prefect 3 / Dagster 1',
      'Temporal.io Durable Workflows',
      'Dagger.io Programmable CI/CD',
      'GitHub Actions AI / GitLab Duo',
      'ArgoCD 2.12 / Flux CD 2 GitOps',
      'Kubeflow Pipelines 2 / ZenML',
      'AIOps: Datadog Bits AI / Dynatrace Davis',
      'Kubernetes 1.32 + KEDA + Karpenter',
      'Terraform / OpenTofu / Pulumi AI',
      'Platform Engineering: Backstage / Port',
      'LLMOps: LangServe / Ray Serve / BentoML',
      'DevSecOps AI: Snyk / GitHub Copilot Autofix',
    ],
  },
  {
    id: 'data-science',
    icon: 'flask',
    href: '/data-science-job-support/',
    title: 'Data Science (AI-Era)',
    description: 'Deep data science support covering Python stack, classical ML, big data, causal inference, and AI-integrated analytics.',
    tags: [
      'pandas 2.x & Polars 1.x',
      'scikit-learn 1.5 / XGBoost / LightGBM',
      'Feature Engineering & SHAP',
      'EDA & Statistical Testing',
      'Spark 3.5 & Databricks 15.x',
      'Time Series: Prophet / statsforecast',
      'Causal Inference: DoWhy / EconML',
      'NLP: spaCy / BERTopic / BERT',
      'dbt / Airflow / Prefect',
      'Tableau / Power BI / Superset',
      'AutoML: AutoGluon / FLAML',
      'Synthetic Data: CTGAN / ydata',
    ],
  },
  {
    id: 'ai',
    icon: 'cpu',
    hidden: true,
    title: 'AI / Machine Learning & Data',
    tags: [
      'AI Engineer',
      'Machine Learning',
      'Data Science',
      'Python',
      'Model Training & Deployment',
      'NLP / LLMs',
      'Predictive Analytics',
    ],
  },
  {
    id: 'devops',
    icon: 'gear',
    title: 'DevOps & Automation',
    tags: [
      'Terraform',
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines (GitHub Actions, Azure DevOps, GitLab CI)',
      'Kafka',
      'Infrastructure as Code (IaC)',
      'Monitoring & Logging (Prometheus, Grafana)',
    ],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Cloud Technologies',
    tags: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud Platform (GCP)',
      'Serverless (Lambda / Azure Functions / Cloud Functions)',
      'Cloud Architecture & Migration',
    ],
  },
  {
    id: 'frontend',
    icon: 'code',
    title: 'Front-End / Full-Stack Development',
    tags: [
      'React.js',
      'Angular',
      'Vue.js',
      'Next.js',
      'Svelte',
      'Lit',
      'Stencil JS',
      'TypeScript',
      'JavaScript',
      'HTML5 / CSS3',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    id: 'backend',
    icon: 'server',
    title: 'Backend & Enterprise (.NET + Node)',
    tags: [
      'ASP.NET',
      'ASP.NET Core',
      'MVC .NET',
      'WPF',
      'C# / .NET APIs',
      '.NET MAUI',
      'VB.NET',
      'WinForms',
      'Blazor',
      'Razor Pages',
      'SignalR',
      'Node.js',
      'Express.js',
      'NestJS',
      'Microservices Architecture',
    ],
  },
  {
    id: 'java',
    icon: 'java',
    title: 'Java Technology Stack',
    tags: [
      'Core Java (Java 8+)',
      'Spring',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Cloud',
      'Hibernate / JPA',
      'REST APIs',
      'Microservices Architecture',
      'Kafka / RabbitMQ',
      'Maven / Gradle',
      'JUnit / Mockito',
      'JDBC',
      'Docker (Java Apps)',
      'Kubernetes (Spring Boot)',
      'OAuth2 / JWT',
    ],
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Cybersecurity & AppSec',
    tags: [
      'Application Security',
      'API Security',
      'OWASP Top 10',
      'Secure Code Review',
      'Vulnerability Assessment',
      'Cloud Security',
    ],
  },
  {
    id: 'databases',
    icon: 'database',
    title: 'Databases & Data Platforms',
    tags: [
      'SQL Server',
      'MySQL',
      'PostgreSQL',
      'Oracle',
      'MongoDB',
      'DynamoDB',
      'Snowflake',
      'Redis',
      'Data Modeling & Optimization',
    ],
  },
  {
    id: 'testing',
    icon: 'test',
    title: 'Testing & Quality Engineering',
    tags: [
      'Unit Testing',
      'Integration Testing',
      'Automation Testing',
      'Playwright',
      'Cypress',
      'Selenium',
      'Jest',
      'Postman',
      'API Automation',
    ],
  },
  {
    id: 'analytics',
    icon: 'chart',
    title: 'Digital Analytics & Marketing Tech',
    tags: [
      'Google Analytics (GA4)',
      'Google Tag Manager',
      'Conversion Tracking',
      'Funnel & Event Analytics',
      'Performance Monitoring',
    ],
  },
  {
    id: 'crm',
    icon: 'crm',
    title: 'CRM & Business Platforms',
    description: 'End-to-end CRM customization, integration, and production support.',
    tags: [
      'Salesforce',
      'Microsoft Dynamics 365',
      'Odoo',
      'Zoho CRM',
      'HubSpot CRM',
      'SAP CRM',
      'Custom CRM Solutions',
    ],
  },
];
