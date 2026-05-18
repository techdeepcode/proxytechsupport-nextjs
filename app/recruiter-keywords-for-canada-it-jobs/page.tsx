import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Recruiter Keywords for Canada IT Jobs — What Gets You Found | Proxy Tech Support',
  description: 'The exact recruiter keywords Canadian IT hiring managers search for — by role, technology, cloud platform, and sector. Use these terms in your resume and LinkedIn profile to improve visibility.',
  canonical: 'https://proxytechsupport.com/recruiter-keywords-for-canada-it-jobs/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Recruiter Keywords for Canada IT Jobs: What Gets You Found"
      intro="Canadian IT recruiters search LinkedIn and their ATS using Boolean keyword combinations. If your resume and profile do not contain the exact terms they search for, you are invisible — regardless of your actual qualifications. This guide lists the specific keywords that drive IT hiring searches in Canada, organised by role and technology area."
      sections={[
        { heading: 'Java / Backend Developer Keywords', body: 'For Java backend roles in Canada, the highest-value keywords are:', bullets: ['Java 17, Java 21, Spring Boot 3, Spring Cloud, Spring Security', 'Microservices, REST API, gRPC, API Gateway', 'Kafka, RabbitMQ, ActiveMQ', 'JPA, Hibernate, JDBC', 'PostgreSQL, Oracle, MySQL, MongoDB', 'Docker, Kubernetes, Helm', 'AWS (EC2, ECS, Lambda, RDS, S3), Azure (AKS, App Service)', 'Maven, Gradle, CI/CD, Jenkins, GitHub Actions', 'JUnit 5, Mockito, Testcontainers'] },
        { heading: 'DevOps / Cloud Engineer Keywords', body: 'DevOps and cloud engineering roles in Canada respond to:', bullets: ['Terraform, Pulumi, CloudFormation, CDK', 'Kubernetes, EKS, AKS, GKE, Helm, ArgoCD', 'Docker, container orchestration', 'CI/CD pipelines, Jenkins, GitLab CI, GitHub Actions', 'AWS Certified, Azure DevOps, GCP', 'Prometheus, Grafana, Datadog, New Relic', 'Linux, Bash scripting, Python automation', 'SRE, observability, incident response', 'Istio, service mesh, network policy'] },
        { heading: 'AI / ML Engineer Keywords', body: 'AI and ML engineering roles use these search terms:', bullets: ['Python, PyTorch, TensorFlow, Keras, Scikit-learn', 'LLM, RAG, vector database, Pinecone, Weaviate, ChromaDB', 'OpenAI API, LangChain, LlamaIndex', 'MLflow, Kubeflow, SageMaker, Azure ML, Vertex AI', 'Feature engineering, model training, model deployment', 'Spark, Databricks, data pipeline', 'NLP, computer vision, transformers', 'MLOps, model monitoring, A/B testing models'] },
        { heading: 'React / Frontend Developer Keywords', body: 'Frontend and React developer searches in Canada use:', bullets: ['React 18, Next.js 14/15, TypeScript', 'Redux, Zustand, React Query, TanStack Query', 'Tailwind CSS, Material UI, Chakra UI', 'GraphQL, Apollo Client, REST integration', 'Jest, React Testing Library, Cypress, Playwright', 'Webpack, Vite, Node.js', 'Accessibility (WCAG), responsive design', 'SSR, SSG, ISR, Web Vitals, Core Web Vitals'] },
        { heading: 'Canadian Market-Specific Terms', body: 'Adding Canadian market context to your profile improves relevance for domestic recruiters:', bullets: ['PIPEDA-compliant, privacy by design', 'Canadian banking, OSFI guidelines, open banking Canada', 'Ontario, British Columbia, Alberta, remote Canada', 'Bilingual (English/French) for Quebec and federal roles', 'Canadian security clearance, Reliability Status', 'EDI/API integration with Canadian financial networks', 'Toronto fintech, Vancouver tech, Ottawa government IT'] },
        { heading: 'Role-Level Keywords', body: 'Including seniority keywords increases match accuracy:', bullets: ['Senior, Lead, Principal, Staff Engineer', 'Tech Lead, Team Lead, Engineering Manager', 'Architect (Solution Architect, Cloud Architect, Data Architect)', 'Junior, Intermediate for appropriate experience levels', 'Contract, full-time, remote-first, hybrid'] },
      ]}
      relatedLinks={[
        { href: '/get-interview-scheduled-canada/', label: 'Get Interview Scheduled Canada' },
        { href: '/resume-linkedin-optimization-for-developers/', label: 'Resume & LinkedIn Optimization' },
        { href: '/job-support-canada/', label: 'IT Job Support Canada' },
      ]}
      relatedGuides={[
        { href: '/why-canada-it-resume-gets-no-calls/', label: 'Why Your Canada IT Resume Gets No Calls' },
        { href: '/canada-it-resume-linkedin-positioning-guide/', label: 'Canada IT Resume & LinkedIn Guide' },
        { href: '/canada-it-job-search-mistakes/', label: 'Canada IT Job Search Mistakes' },
      ]}
      faqs={[
        { q: 'What keywords do Canadian IT recruiters search for most?', a: 'Specific technology names (Spring Boot, Terraform, React), cloud platforms (AWS, Azure, GCP), and role-level qualifiers (Senior, Lead, Principal) are the highest-value search terms. Generic category descriptions like "cloud experience" or "web development" are rarely used in recruiter searches.' },
        { q: 'Should you include Canadian city names in your LinkedIn profile?', a: 'Yes. Including your target city (Toronto, Vancouver, Calgary) in your headline and location settings makes you appear in location-filtered searches. Add "Open to Toronto/Remote" or "Greater Toronto Area" to improve local recruiter visibility.' },
        { q: 'How many keywords should a Canadian IT resume include?', a: 'Your resume should include all technologies you can genuinely discuss in an interview — typically 20–40 specific terms for a senior engineer. The goal is completeness within truthfulness, not keyword stuffing. Every term on your resume is fair game in a technical interview.' },
        { q: 'Do Canadian employers care about AWS or Azure certifications in keywords?', a: 'Certifications appear in recruiter searches — "AWS Certified Solutions Architect" and "Azure Certified" are used as Boolean search terms by some recruiters. Include certification names exactly as they appear on the credential.' },
        { q: 'What Canadian-specific terms should appear on a financial sector IT resume?', a: '"PIPEDA-compliant," "OSFI guidelines," "open banking," "Canadian financial services," and specific Canadian bank names (RBC, TD, Scotiabank, BMO, CIBC) as employers or clients all signal Canadian market familiarity to financial sector recruiters.' },
      ]}
      ctaHref="/get-interview-scheduled-canada/"
      ctaLabel="Get Interview Scheduled in Canada"
    />
  );
}
