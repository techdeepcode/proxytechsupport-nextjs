import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'How Proxy Job Support Works in Canada — IT Job Assistance Process Explained | Proxy Tech Support',
  description: 'A step-by-step explanation of how proxy job support works for IT professionals in Canadian roles — session setup, real-time task help, communication support, and confidentiality.',
  canonical: 'https://proxytechsupport.com/how-proxy-job-support-works-in-canada/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="How Proxy Job Support Works in Canada: IT Job Assistance Process Explained"
      intro="Proxy job support for IT professionals in Canadian roles is a structured service that provides real-time technical and professional assistance during your working day. Understanding how it works — from initial setup through day-to-day session management — helps you use it effectively from the first day of engagement."
      sections={[
        { heading: 'Step 1: Initial Assessment Session', body: 'The engagement starts with a 30–45 minute assessment session. This covers: your current role and technology stack, the team structure and key stakeholders you work with, your current challenges and performance concerns, the types of tasks you need support with most, your employer\'s toolchain (Jira, Confluence, GitHub, ServiceNow), and your current timezone and working hours. This context allows support to be targeted and immediately relevant rather than generic.' },
        { heading: 'Step 2: Communication Channel Setup', body: 'A secure, discrete communication channel is established for real-time support. This channel is separate from your employer\'s communication tools. During working hours, you can share context through this channel — a task description, a Jira ticket, an error message, a PR comment — and receive guidance in real time. Response times for active support sessions are typically within minutes.' },
        { heading: 'Step 3: Daily Task Support', body: 'During your working day, support is available for:', bullets: ['Technical implementation questions — approach, API usage, debugging', 'Code review responses — understanding feedback and preparing replies', 'Architecture decisions — trade-off analysis for design questions', 'PR descriptions and technical documentation', 'Jira ticket writing and sprint planning contributions', 'Standup preparation — summarising yesterday\'s work and today\'s plan clearly'] },
        { heading: 'Step 4: Production Issue and Escalation Support', body: 'Production incidents and urgent escalations require fast, accurate responses. For Canadian banking and financial sector roles this is particularly critical — a production issue at a bank affects thousands of customers and carries significant operational pressure. Support for production incidents includes real-time diagnosis guidance, communication templates for status updates to stakeholders, and post-incident documentation preparation.' },
        { heading: 'Step 5: Client and Stakeholder Communication', body: 'Canadian IT professionals working in client-facing or cross-functional roles need to communicate clearly with non-technical stakeholders. Support covers: preparing for client calls (anticipating questions, structuring your response), drafting technical summaries for business stakeholders, responding to performance feedback professionally, and navigating difficult conversations with managers or leads.' },
        { heading: 'Confidentiality and Discretion', body: 'All support engagements are confidential. Information shared in sessions is used only to provide support and is not retained beyond the engagement. Support experts operate professionally and do not contact your employer or colleagues. The service is designed to help IT professionals perform confidently in their roles — all communication and support delivery is handled with that objective in mind.' },
      ]}
      relatedLinks={[
        { href: '/job-support-canada/', label: 'IT Job Support Canada' },
        { href: '/get-interview-scheduled-canada/', label: 'Get Interview Scheduled Canada' },
        { href: '/proxy-job-support-usa/', label: 'Proxy Job Support USA' },
      ]}
      relatedGuides={[
        { href: '/canada-proxy-job-support-guide/', label: 'Canada Proxy Job Support Guide' },
        { href: '/canada-real-time-it-job-support-guide/', label: 'Canada Real-Time IT Job Support' },
        { href: '/how-proxy-job-support-works/', label: 'How Proxy Job Support Works' },
      ]}
      faqs={[
        { q: 'How quickly can I get support during a production incident in Canada?', a: 'Active support sessions have response times of minutes. For production incidents, the channel is monitored and prioritised — you share the error or alert, and guidance begins immediately. Pre-scheduling a support session before high-risk deployments is recommended for planned work.' },
        { q: 'Does the support expert need access to my employer\'s systems?', a: 'No. Support works entirely through the communication channel — you share context (error messages, code snippets, Jira tickets, architecture diagrams) and receive guidance. The expert never requires direct access to your employer\'s systems, accounts, or infrastructure.' },
        { q: 'Can support help with non-technical communication at a Canadian employer?', a: 'Yes. Support covers professional communication — standup updates, PR descriptions, Jira tickets, client call preparation, and responding to feedback. Canadian professional communication standards differ from some international work cultures, and this is a common area where internationally-trained IT professionals benefit from guidance.' },
        { q: 'How is support scheduled for Canadian time zones?', a: 'Support is available across EST and PST business hours, covering both Toronto and Vancouver working days. Sessions can be scheduled in advance or activated on short notice. For roles with on-call requirements, after-hours support is also available for production incidents.' },
        { q: 'Is proxy job support legal for Canadian IT roles?', a: 'Seeking technical guidance and professional support is a normal practice — IT professionals use Stack Overflow, colleague consultation, and vendor support daily. Proxy job support is structured expert guidance that helps you perform your role competently. The work delivered is your own work, supported and guided by a subject-matter expert.' },
      ]}
      ctaHref="/job-support-canada/"
      ctaLabel="Get IT Job Support in Canada"
    />
  );
}
