import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'How Proxy Job Support Works — Step-by-Step for IT Professionals | Proxy Tech Support',
  description:
    'A step-by-step explanation of how proxy job support works — from sharing your task to expert analysis, debugging, deployment help, and client call preparation across Java, .NET, React, AWS, DevOps, and more.',
  canonical: 'https://proxytechsupport.com/how-proxy-job-support-works/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="How Proxy Job Support Works: From Stuck to Unblocked in Minutes"
      intro="The process is straightforward: you are blocked, you share the context, an expert understands your specific situation, and together you move forward. This guide walks through how that process works in practice — from the first message to the point where your task is delivered, your production issue is resolved, or your client call is prepared."
      sections={[
        {
          heading: 'Step 1: Share Your Blocker',
          body: 'The starting point is always a specific, concrete problem. Not "I am struggling with Java" — but "My Spring Boot service is returning a 500 error when processing a particular request and I cannot identify the root cause in the logs." The more specific the blocker, the faster the expert can help. Share the error message, the relevant code, the environment (local, staging, production), and what you have already tried.',
        },
        {
          heading: 'Step 2: The Expert Understands Your Context',
          body: 'A senior expert reviews your situation and asks targeted questions to fill in the context. They are not starting from scratch — they have seen similar issues hundreds of times across many different projects. What they need from you is the specifics of your environment: your architecture, your tech stack versions, your deployment setup, and any relevant codebase context.',
        },
        {
          heading: 'Step 3: Analysis, Debugging, or Explanation',
          body: 'The expert works through the problem with you — not for you. Depending on the situation:',
          bullets: [
            'Debugging: trace the error to its root cause, identify the fix, explain why it works',
            'Feature delivery: outline the implementation approach, highlight the key patterns, walk through edge cases',
            'Architecture decision: present the options with trade-offs and recommend the best fit for your context',
            'Deployment: review your pipeline, identify the failure point, guide the fix',
            'Production incident: prioritise diagnosis over analysis — get the system stable first, understand later',
          ],
        },
        {
          heading: 'Step 4: You Execute Better',
          body: 'The outcome is not just a fixed bug or a completed task — it is a professional who understands why the fix worked and can apply the same reasoning to the next similar problem. Every well-handled support session builds your project knowledge and technical depth.',
        },
        {
          heading: 'Technology Coverage',
          body: 'Proxy job support covers the full modern IT stack:',
          bullets: [
            'Backend: Java (Spring Boot, Kafka, JPA), .NET (ASP.NET Core, EF Core), Node.js (Express, NestJS), Python',
            'Frontend: React, Angular, Vue, Next.js, TypeScript',
            'Cloud: AWS (ECS, EKS, Lambda, RDS, CloudWatch), Azure (AKS, DevOps, App Services)',
            'DevOps: Kubernetes, Terraform, GitHub Actions, Jenkins, ArgoCD, Helm, Docker',
            'SRE: Prometheus, Grafana, OpenTelemetry, incident management, SLO/SLI',
            'AI/ML: Python, PyTorch, RAG systems, MLOps, LangChain, vector databases',
            'Data: SQL, Snowflake, Databricks, dbt, Airflow, PySpark',
            'QA: Selenium, Playwright, Cypress, REST API testing, SDET frameworks',
          ],
        },
        {
          heading: 'Client Call and Standup Preparation',
          body: 'Not all support sessions are about code. Preparing for a difficult client call — knowing how to explain a delayed delivery, how to respond to a technical question from a non-technical stakeholder, or how to present a sprint status clearly — is a legitimate and common support use case. Experts help you structure your talking points, anticipate the questions you will receive, and communicate with clarity and confidence.',
        },
      ]}
      relatedLinks={[
        { href: '/proxy-job-support/', label: 'Proxy Job Support' },
        { href: '/production-issue-support/', label: 'Production Issue Support' },
        { href: '/job-support-usa/', label: 'IT Job Support USA' },
      ]}
      relatedGuides={[
        { href: '/what-is-proxy-job-support/', label: 'What Is Proxy Job Support?' },
        { href: '/real-time-it-job-support-guide/', label: 'Real-Time IT Job Support Guide' },
        { href: '/client-call-and-standup-support-guide/', label: 'Client Call & Standup Support Guide' },
      ]}
      faqs={[
        {
          q: 'How do you share your issue with the support expert?',
          a: 'Via WhatsApp, screen share, or a structured message that includes the error, the relevant code, what you have tried, and the environment. The expert responds with targeted questions to fill in any gaps before diving into the solution.',
        },
        {
          q: 'How long does a typical support session take?',
          a: 'Simple debugging sessions take 30–60 minutes. Complex architecture discussions or production incident walkthroughs may take 2–3 hours. Client call preparation is typically 30–45 minutes of structured talking-point review.',
        },
        {
          q: 'Can you get help while on a client call?',
          a: 'Yes. For real-time support during a technical meeting, the expert provides live guidance via a separate channel while the call is in progress — answering questions you relay to them.',
        },
        {
          q: 'Does the expert need access to your codebase?',
          a: 'Not necessarily. Most issues can be resolved by sharing relevant code snippets, error logs, and configuration files. Full repository access is only needed for complex architecture reviews or deep debugging sessions.',
        },
        {
          q: 'What happens if the issue is more complex than expected?',
          a: 'The expert continues until the problem is resolved or a clear path forward is identified. Support is not time-boxed to a rigid session length for in-progress production issues — the goal is resolution.',
        },
      ]}
      ctaHref="/proxy-job-support/"
      ctaLabel="Get Proxy Job Support"
    />
  );
}
