import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'What Is Proxy Job Support? Real-Time IT Project Help Explained | Proxy Tech Support',
  description:
    'Understand proxy job support — real-time expert help for IT professionals stuck in projects, dealing with production issues, client pressure, debugging, deployments, tickets, and delivery pressure.',
  canonical: 'https://proxytechsupport.com/what-is-proxy-job-support/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="What Is Proxy Job Support? A Plain-Language Explanation"
      intro="Proxy job support is real-time expert assistance for IT professionals who are already working in a project and need help getting things done. It is not tutoring, not general consulting, and not a replacement for doing your job — it is a way to get a senior expert alongside you when a task is blocking your delivery, a production issue is escalating, or a client meeting requires preparation you do not have time to do alone."
      sections={[
        {
          heading: 'The Core Situation',
          body: 'The typical proxy job support user is not a junior developer who does not know their technology. They are often a mid-to-senior engineer, consultant, or contractor who knows their stack but faces a task, system, or situation that is outside their immediate experience. A Java developer joining a project that uses unfamiliar AWS patterns. A .NET engineer suddenly responsible for Kubernetes deployments. A React developer whose new team is deep into a complex Redux architecture they have never worked with before.',
        },
        {
          heading: 'What It Covers',
          body: 'Proxy job support covers the full range of day-to-day delivery pressure:',
          bullets: [
            'Debugging — production errors, failed builds, unexpected API behaviour, database query issues',
            'Task delivery — implementing a feature or fixing a bug that requires knowledge you do not currently have',
            'Production issues — emergency support for outages, failed deployments, Kubernetes failures, cloud incidents',
            'Client calls and standups — preparation for technical discussions with stakeholders or clients',
            'Code reviews — understanding a review comment or knowing how to address feedback',
            'Project onboarding — getting up to speed on a new codebase, architecture, or team process',
          ],
        },
        {
          heading: 'Who Uses It',
          body: 'Proxy job support is most commonly used by:',
          bullets: [
            'IT consultants on W2 or C2C contracts, especially those who joined a role that is a technical stretch',
            'H1B, OPT, or GC/EAD professionals in the early months of a new role',
            'Developers who have changed tech stacks and are still bridging the gap',
            'Remote workers in isolated teams who do not have senior colleagues to turn to',
            'Contractors who cannot afford to look uncertain in front of clients',
          ],
        },
        {
          heading: 'What It Is Not',
          body: 'Proxy job support is not a permanent crutch. The model works best when you are using expert help to understand the approach, not just get the output. Every task handled with support teaches you something about the system or technology — gradually reducing your dependence on external help as your project knowledge grows.',
        },
        {
          heading: 'How It Differs From Stack Overflow and Forums',
          body: 'Stack Overflow and forums give generic answers to generic questions. Proxy job support gives specific answers to your specific codebase, your specific error, and your specific context. An expert who understands your architecture can tell you exactly why your Spring Boot application is throwing a NullPointerException in this particular service — not just explain NullPointerExceptions in general.',
        },
      ]}
      relatedLinks={[
        { href: '/proxy-job-support/', label: 'Proxy Job Support' },
        { href: '/job-support-usa/', label: 'IT Job Support USA' },
        { href: '/real-time-job-support-guide/', label: 'Real-Time Job Support Guide' },
        { href: '/struggling-in-job-developer-help/', label: 'Struggling in Your IT Job?' },
      ]}
      relatedGuides={[
        { href: '/how-proxy-job-support-works/', label: 'How Proxy Job Support Works' },
        { href: '/real-time-it-job-support-guide/', label: 'Real-Time IT Job Support Guide' },
        { href: '/production-issue-support-for-it-professionals/', label: 'Production Issue Support Guide' },
      ]}
      faqs={[
        {
          q: 'What exactly is proxy job support?',
          a: 'Real-time expert assistance for IT professionals dealing with project blockers, production issues, client pressure, or tasks that require knowledge they do not currently have. The expert works alongside you — not instead of you.',
        },
        {
          q: 'Who typically needs proxy job support?',
          a: 'Mid-to-senior IT professionals who are technically competent but face situations outside their immediate experience — a new tech stack, an unfamiliar production system, or delivery pressure that exceeds their current context on the project.',
        },
        {
          q: 'Is proxy job support different from just asking a colleague for help?',
          a: 'Yes. A colleague has context on your project but may not have the technical depth to solve the problem. A proxy support expert has deep technical expertise across the specific technology but needs you to share the project context. Together, the combination resolves issues faster than either alone.',
        },
        {
          q: 'What types of IT tasks does proxy job support cover?',
          a: 'Debugging, feature delivery, production incident resolution, code review responses, client call preparation, project onboarding, architecture decisions, deployment support, and standup preparation.',
        },
        {
          q: 'How quickly can you get help through proxy job support?',
          a: 'Same-day start is typical. For urgent production issues, response within minutes or hours is the standard expectation — not days.',
        },
      ]}
      ctaHref="/proxy-job-support/"
      ctaLabel="Get Proxy Job Support"
    />
  );
}
