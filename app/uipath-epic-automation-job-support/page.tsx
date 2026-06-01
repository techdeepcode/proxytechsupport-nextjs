import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'UiPath Epic Automation Support — EHR Job Help',
  description: 'Stuck on UiPath Epic automation — Hyperspace, Hyperdrive, patient charts, or API vs UI strategy? Real-time expert support. Same-day start.',
  canonical: 'https://proxytechsupport.com/uipath-epic-automation-job-support/',
  keywords: ['UiPath Epic automation support', 'UiPath Epic job support', 'Epic Hyperspace automation UiPath', 'Epic Hyperdrive automation', 'Epic EHR RPA support', 'UiPath clinical automation help'],
  ogTitle: 'UiPath Epic Automation — Expert Help Now',
  ogDescription: 'Real-time Epic automation support — Hyperspace, Hyperdrive, patient charts, FHIR API strategy. Same-day.',
  lastmod: '2026-05-28T10:00:00.000Z',
});
const PAGE_FAQS = [
{
          q: 'What UiPath Epic automation support do you provide?',
          a: 'We provide real-time support for Epic Hyperspace and Hyperdrive automation — Citrix/CV strategy for Hyperspace, web selector design for Hyperdrive, clinical workflow automation (HIM, ClinDoc, MyChart, patient charts), API vs UI strategy for Epic FHIR, PHI-safe bot design, and Epic production support. We support professionals working on Epic-related automation.',
        },
        {
          q: 'How do you automate Epic Hyperspace with UiPath?',
          a: 'Epic Hyperspace typically runs in Citrix and requires CV Activities or Citrix Extension for automation. We help design stable automation using CV Anchor patterns, Check App State validation for screen confirmation, dynamic selector strategies for Epic elements, Retry Scope for Citrix rendering delays, and safety validations before entering patient data.',
        },
        {
          q: 'What is the difference between Epic Hyperspace and Hyperdrive for automation?',
          a: 'Hyperspace is Epic\'s legacy thick client — runs in Citrix, requires CV/image automation, fragile selectors. Hyperdrive is Epic\'s modern web-based client (Chromium) — standard web selectors are available, more stable for automation, but still has dynamic React components. Many US health systems are migrating to Hyperdrive in 2026, requiring automation teams to refactor Hyperspace bots.',
        },
        {
          q: 'How do I handle PHI safety in Epic automation?',
          a: 'PHI safety in Epic automation requires: no PHI in log messages or screenshots, dedicated service account credentials, minimum-necessary Epic security roles, audit trail logging of all bot Epic actions, and blurring/avoiding screenshots of patient records. We help implement all of these in your specific Epic automation context.',
        },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map((f: { q: string; a: string }) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UiPath Epic Automation Support: Hyperspace, Hyperdrive, EHR Workflows & PHI Compliance',
  description: 'Stuck on UiPath Epic automation — Hyperspace, Hyperdrive, patient charts, or API vs UI strategy? Real-time expert support. Same-day start.',
  url: 'https://proxytechsupport.com/uipath-epic-automation-job-support/',
  provider: {
    '@type': 'Organization',
    name: 'Proxy Tech Support',
    url: 'https://proxytechsupport.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-96606-14469',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  },
  areaServed: ['US', 'GB', 'CA', 'AU', 'DE', 'IE', 'SG', 'NL', 'SE', 'CH', 'AE', 'SA', 'NZ'],
  serviceType: 'IT Job Support and Proxy Interview Assistance',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
    { '@type': 'ListItem', position: 2, name: 'UiPath Job Support', item: 'https://proxytechsupport.com/uipath-healthcare-job-support/' },
    { '@type': 'ListItem', position: 3, name: 'UiPath Epic Automation Support: Hyperspace, Hyperdrive, EHR Workflows & PHI Compliance', item: 'https://proxytechsupport.com/uipath-epic-automation-job-support/' },
  ],
};

export default function UiPathEpicAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <KnowledgeGuidePage
      h1="UiPath Epic Automation Support: Hyperspace, Hyperdrive, EHR Workflows & PHI Compliance"
      intro="Epic is the dominant EHR in the US healthcare market — and automating Epic workflows with UiPath requires specialized knowledge of Hyperspace, Hyperdrive, Citrix automation patterns, FHIR API availability, PHI safety requirements, and clinical workflow constraints. If you are working on Epic automation and need real-time support for development, debugging, or production issues — our experts provide hands-on help during your working hours. We support professionals working on Epic-related automation, not an official Epic partner."
      sections={[
        {
          heading: 'Epic Hyperspace Automation',
          body: 'Epic Hyperspace is the traditional thick-client EHR — automation requires Citrix or native Windows approaches.',
          bullets: [
            'Hyperspace UI characteristics — thick client, no standard web selectors, often running in Citrix',
            'Citrix Automation for Hyperspace — UiPath CV Activities, Citrix Extension, image-based fallbacks',
            'Selector strategy for Hyperspace — using Epic-specific accessible names, role attributes where available',
            'Patient chart navigation — automating chart opening, section navigation, document searches',
            'Screen-specific automation — SmartForms, FlowSheets, medication entry screens, order sets',
            'Session management — handling Hyperspace login, session timeout, reconnection scenarios',
          ],
        },
        {
          heading: 'Epic Hyperdrive Automation',
          body: 'Epic Hyperdrive is Epic\'s modern web-based client — introduces browser-like behavior with different automation challenges.',
          bullets: [
            'Hyperdrive vs Hyperspace — Hyperdrive is browser-based (Chromium), enabling standard web selectors in many cases',
            'UiPath web automation for Hyperdrive — Chrome extension, native browser selectors, improved reliability vs Hyperspace',
            'Dynamic elements in Hyperdrive — Epic Hyperdrive still has dynamic IDs and complex React components',
            'Migration impact — organizations moving from Hyperspace to Hyperdrive require automation updates',
            'Testing Hyperdrive automation — validating automation stability after Epic Hyperdrive upgrades',
            'May 2026 relevance — US health systems are actively migrating to Hyperdrive; automation teams face immediate refactoring pressure',
          ],
        },
        {
          heading: 'Clinical Workflow Areas',
          body: 'Key Epic workflow areas commonly targeted for UiPath automation.',
          bullets: [
            'HIM (Health Information Management) — document coding, chart review, ROI processing',
            'ClinDoc — clinical documentation review, sign-off automation, documentation deficiency workflows',
            'MyChart — patient portal data processing, message routing, request handling',
            'Patient chart entry — automating data entry into patient records from external sources',
            'Order management — order routing, status checking, result acknowledgment',
            'Scheduling — appointment creation, modification, and status management automation',
          ],
        },
        {
          heading: 'API vs UI Strategy for Epic',
          body: 'The decision between Epic FHIR API and Epic UI automation is a critical design choice.',
          bullets: [
            'Epic FHIR API availability — reading and writing patient data via HL7 FHIR R4 standards',
            'When to use FHIR API — patient demographics, clinical observations, medication lists, diagnostic reports',
            'When UI automation is necessary — administrative workflows with no FHIR equivalent, legacy Epic configurations',
            'Epic Interconnect (REST API) — Epic\'s proprietary API layer for health system-specific integrations',
            'API authentication — SMART on FHIR OAuth, Epic backend system authentication',
            'Hybrid approach — FHIR for data retrieval, UI automation for actions that have no API endpoint',
          ],
        },
        {
          heading: 'PHI Safety and Audit Requirements for Epic Automation',
          body: 'Epic automation handles the most sensitive patient data — PHI safety is mandatory.',
          bullets: [
            'PHI in Epic bot logs — never log MRN, SSN, DOB, patient name, diagnosis in bot log messages',
            'Screenshot PHI masking — blurring or avoiding screenshots of Epic screens containing patient data',
            'Minimum necessary PHI access — bots access only the Epic data fields required for their specific task',
            'Epic audit trail awareness — all Epic interactions are logged in Epic audit reports; bots appear as user actions',
            'Service account credentials — using dedicated Epic service accounts for automation, not staff credentials',
            'Access provisioning — Epic security role design for automation service accounts (minimum privilege)',
          ],
        },
      ]}
      relatedLinks={[
        { href: '/uipath-job-support/', label: 'UiPath Job Support Hub' },
        { href: '/uipath-healthcare-job-support/', label: 'UiPath Healthcare Support' },
        { href: '/epic-hyperspace-uipath-automation-support/', label: 'Epic Hyperspace Automation' },
        { href: '/epic-hyperdrive-uipath-automation-support/', label: 'Epic Hyperdrive Automation' },
        { href: '/epic-fhir-uipath-integration-support/', label: 'Epic FHIR Integration' },
        { href: '/uipath-epic-proxy-interview-support/', label: 'UiPath Epic Proxy Interview' },
      ]}
      relatedGuides={[
        { href: '/hipaa-phi-rpa-automation-support/', label: 'HIPAA & PHI RPA Support' },
        { href: '/healthcare-document-understanding-uipath-support/', label: 'Healthcare Document Understanding' },
        { href: '/rpa-job-support/', label: 'RPA Job Support' },
      ]}
      faqs={PAGE_FAQS}
      ctaHref="/uipath-job-support/"
      ctaLabel="Get UiPath Epic Automation Support"
    />
    </>
  );
}
