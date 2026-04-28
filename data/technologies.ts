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
  | 'java';

export type Technology = {
  id: string;
  title: string;
  icon: TechIconId;
  tags: string[];
  description?: string;
};

export const technologies: Technology[] = [
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
    id: 'ai',
    icon: 'cpu',
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
];
