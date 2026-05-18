import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'SRE Job Support Guide — Incident Response, Observability & Reliability Help | Proxy Tech Support',
  description: 'Real-time SRE support for engineers on incident bridges, observability gaps, Prometheus/Grafana alerts, ELK log analysis, SLO/SLI design, on-call pressure, and production reliability challenges.',
  canonical: 'https://proxytechsupport.com/sre-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="SRE Job Support Guide: Help with Incidents, Observability, and Reliability Engineering"
      intro="Site Reliability Engineering combines software engineering depth with operational discipline. SRE professionals face production incidents, observability gaps, on-call burnout, and the challenge of translating reliability requirements into measurable SLOs. This guide covers the most common SRE job support scenarios."
      sections={[
        { heading: 'Incident Response Support', body: 'An incident bridge with senior SRE support changes the dynamics of a production crisis. Expert guidance during an active incident helps with:', bullets: ['Structured initial triage (blast radius, severity classification)', 'Systematic diagnosis rather than reactive thrashing', 'Stakeholder communication templates that buy time without losing trust', 'Real-time runbook review to avoid missing steps under pressure', 'Blameless postmortem structure after the incident resolves'] },
        { heading: 'Observability Stack Setup and Troubleshooting', body: 'Setting up meaningful observability is harder than it looks. Prometheus metrics collection requires careful label design to avoid cardinality explosions. Grafana dashboards need to tell a clear story at a glance rather than displaying every available metric. OpenTelemetry traces need to be sampled intelligently to control cost while preserving visibility into errors and slow requests.' },
        { heading: 'SLO and SLI Design', body: 'Defining good SLOs is one of the hardest SRE skills. Common mistakes include defining SLOs on metrics that do not reflect user experience, setting targets that are either too aggressive (always breached) or too conservative (no operational signal), and not connecting error budgets to actual engineering decisions. Expert support helps design SLOs that drive real reliability improvements.' },
        { heading: 'Alert Fatigue Reduction', body: 'Alert fatigue is the enemy of on-call reliability. When every alert fires too frequently or for non-actionable conditions, engineers begin ignoring pages — including the ones that matter. Support covers alert tuning, multi-window burn-rate alerting for error budgets, routing alerts to the right channels, and creating clear escalation paths.' },
        { heading: 'On-Call Pressure and Burnout', body: 'On-call pressure is a genuine health risk in SRE roles. When incidents are frequent, postmortems are not improving reliability, and the same systems page the same engineers repeatedly, burnout follows. Expert support can review your on-call structure, identify systemic reliability issues, and help prioritise toil reduction work.' },
        { heading: 'Chaos Engineering Basics', body: 'Chaos engineering — deliberately injecting failure to test system resilience — is a growing SRE practice. Getting started with tools like Chaos Monkey, Gremlin, or LitmusChaos requires understanding fault injection types, defining steady-state hypotheses, and designing experiments that are safe to run in production.' },
      ]}
      relatedLinks={[
        { href: '/sre-job-support-usa/', label: 'SRE Job Support USA' },
        { href: '/sre-proxy-interview-support/', label: 'SRE Proxy Interview Support' },
        { href: '/production-issue-support/', label: 'Production Issue Support' },
      ]}
      relatedGuides={[
        { href: '/devops-job-support-guide/', label: 'DevOps Job Support Guide' },
        { href: '/production-issue-support-for-it-professionals/', label: 'Production Issue Support Guide' },
        { href: '/kubernetes-job-support-guide/', label: 'Kubernetes Job Support Guide' },
      ]}
      faqs={[
        { q: 'What is the difference between DevOps and SRE in terms of job support needs?', a: 'DevOps support focuses on build and deployment infrastructure. SRE support focuses on production reliability, incident management, observability, and the engineering practices that keep systems stable — SLOs, error budgets, chaos engineering, and toil reduction.' },
        { q: 'How do you handle on-call burnout when incidents keep happening?', a: 'Address the systemic cause, not the symptom. Identify the top three recurring incident types. Prioritise reliability work on those systems above new feature work. If the same alerts fire repeatedly, they are signalling unresolved reliability debt.' },
        { q: 'What metrics should an SLO cover?', a: 'SLOs should cover what users actually care about: availability (can they access the service?), latency (is it fast enough?), correctness (is the result right?), and freshness (is data recent enough?). Not every internal metric deserves an SLO.' },
        { q: 'How do you set up meaningful Prometheus alerts?', a: 'Use multi-window burn-rate alerting for error budgets. For symptom-based alerts, alert on user-visible impact (high error rate, high latency) rather than cause-based metrics (high CPU). Every alert should have a clear action — if there is no action, delete the alert.' },
        { q: 'What do you do in the first 5 minutes of a production incident?', a: 'Acknowledge the alert. Assess blast radius. Check recent deployments. Assign roles (incident commander, scribe, communication lead). Open the incident channel. Post the first status update. Only then start technical investigation.' },
      ]}
      ctaHref="/sre-job-support-usa/"
      ctaLabel="Get SRE Job Support"
    />
  );
}
