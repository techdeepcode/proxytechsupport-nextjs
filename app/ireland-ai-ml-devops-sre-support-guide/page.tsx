import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Ireland AI/ML, DevOps & SRE Job Support Guide — Expert Help for Dublin Tech Roles | Proxy Tech Support',
  description: 'Real-time job support for AI/ML engineers, DevOps engineers, and SREs in Ireland — cloud platforms, Kubernetes, MLOps, LLM systems, and SRE practices for Dublin and Irish remote roles.',
  canonical: 'https://proxytechsupport.com/ireland-ai-ml-devops-sre-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Ireland AI/ML, DevOps & SRE Job Support Guide: Expert Help for Dublin Tech Roles"
      intro="Dublin has become a significant European hub for AI/ML, cloud engineering, and platform engineering roles — driven by the concentration of US tech multinationals with European AI and infrastructure teams based in Ireland. This guide covers the technology areas where IT professionals at Irish employers most frequently seek expert support."
      sections={[
        { heading: 'AI/ML Engineering Support for Irish Roles', body: 'AI and ML engineering roles at Dublin tech companies cover:', bullets: ['LLM integration — OpenAI, Anthropic, Gemini API usage', 'RAG system design — vector databases (Pinecone, Weaviate, Qdrant), retrieval pipelines', 'LangChain, LlamaIndex, and agentic AI frameworks', 'MLflow and model lifecycle management', 'SageMaker, Vertex AI, Azure ML platform deployment', 'Fine-tuning and evaluation pipelines', 'ML model monitoring in production (drift detection, performance metrics)'] },
        { heading: 'DevOps and Platform Engineering Support in Ireland', body: 'DevOps and platform engineering roles at Dublin employers involve:', bullets: ['Terraform and CloudFormation IaC at scale', 'EKS, AKS, GKE Kubernetes cluster management', 'GitHub Actions, GitLab CI, Jenkins pipeline design', 'ArgoCD and GitOps workflows', 'Helm chart development and management', 'Vault and external secrets operator for secrets management', 'AWS and Azure multi-region, multi-account architectures'] },
        { heading: 'SRE Support for Irish Tech Companies', body: 'Site Reliability Engineering roles at Irish employers — particularly at Shopify Dublin, multinational tech offices, and growing Irish SaaS companies — focus on: SLI/SLO definition and error budget management, observability stack design and implementation, Kubernetes platform reliability and capacity management, chaos engineering and game days, and on-call rotation management. SRE is a distinct discipline from DevOps — support covers the reliability engineering approach specifically.' },
        { heading: 'GDPR-Compliant AI System Design', body: 'AI systems at Irish and EU-serving companies must comply with GDPR, which creates specific design requirements. Support covers: identifying and minimising personal data in training datasets, designing AI pipelines with data subject rights (access, erasure, portability) in mind, implementing audit logging for AI decisions where required, and navigating the EU AI Act compliance requirements that are increasingly relevant for AI systems deployed in the European market.' },
        { heading: 'Cloud Platform Support — AWS and Azure in Ireland', body: 'Ireland is one of the primary EU cloud regions for both AWS (eu-west-1, Dublin) and Azure (Ireland). IT professionals at Irish employers often work on EU-West region infrastructure. Common support scenarios include: multi-region failover between eu-west-1 (Dublin) and eu-west-2 (London) or eu-central-1 (Frankfurt), GDPR data residency enforcement at the cloud platform layer, AWS Organisation and Control Tower setup for regulated workloads, and Azure Policy and Defender for Cloud configuration.' },
        { heading: 'Performance and Reliability Engineering Support', body: 'Reliability challenges at Irish tech companies follow standard patterns but with European scale context. Support covers: load testing design for European traffic patterns, identifying bottlenecks in distributed systems serving EU users, database performance optimisation (PostgreSQL, Aurora, CosmosDB), CDN configuration for European content delivery, and Kubernetes resource management for cost-efficient and reliable operation at Irish employer scale.' },
      ]}
      relatedLinks={[
        { href: '/job-support-usa/', label: 'IT Job Support' },
        { href: '/devops-job-support-usa/', label: 'DevOps Job Support' },
        { href: '/ireland-it-job-support-guide/', label: 'Ireland IT Job Support Guide' },
      ]}
      relatedGuides={[
        { href: '/ireland-it-job-support-guide/', label: 'Ireland IT Job Support Guide' },
        { href: '/ireland-interview-proxy-support-guide/', label: 'Ireland Interview Proxy Support Guide' },
        { href: '/devops-job-support-guide/', label: 'DevOps Job Support Guide' },
      ]}
      faqs={[
        { q: 'What AI/ML roles are available in Dublin?', a: 'Dublin has a growing concentration of AI/ML engineering roles at multinational tech companies (Google, Meta, Amazon, Microsoft), Irish fintechs building AI-powered products, and AI-native startups. Roles include ML engineers, applied scientists, AI platform engineers, and MLOps specialists. Demand is particularly strong for LLM integration and RAG system expertise.' },
        { q: 'How does the EU AI Act affect AI engineers in Ireland?', a: 'The EU AI Act classifies AI systems by risk level and imposes documentation, testing, and transparency requirements for high-risk AI systems. Engineers building AI systems in Ireland (or deployed to EU users) need to understand: risk classification for their system, required technical documentation, human oversight requirements for high-risk systems, and prohibited AI practices under the Act.' },
        { q: 'What cloud certifications are valued for DevOps roles in Ireland?', a: 'AWS Certified Solutions Architect Professional, AWS DevOps Professional, and Azure DevOps Engineer Expert are the most valued certifications for Irish DevOps roles. Certified Kubernetes Administrator (CKA) is highly regarded for platform engineering roles. HashiCorp Terraform Associate and Vault Associate are also valued.' },
        { q: 'How do SRE roles at Dublin multinationals differ from DevOps roles?', a: 'SRE roles at Dublin multinationals (Google SRE is the archetype) focus on reliability engineering — SLO definition, error budget management, capacity planning, and reliability automation. DevOps roles focus more on CI/CD pipeline management, deployment automation, and developer tooling. In practice, many Irish employers use the terms interchangeably, but Google, LinkedIn, and Salesforce maintain the distinction.' },
        { q: 'What is the AWS eu-west-1 region and why does it matter for Irish IT roles?', a: 'eu-west-1 is the AWS Dublin region — one of the oldest and most widely used AWS regions in Europe. Many US tech companies use eu-west-1 as their primary European region, making it the default for Irish-based cloud engineers. Understanding the specific services available in eu-west-1 (some features launch in US regions first) and GDPR data residency requirements for EU data is important for Irish cloud engineering roles.' },
      ]}
      ctaHref="/job-support-usa/"
      ctaLabel="Get IT Job Support"
    />
  );
}
