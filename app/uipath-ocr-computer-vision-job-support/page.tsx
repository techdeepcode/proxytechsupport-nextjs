import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'UiPath OCR & Computer Vision Support',
  description: 'Stuck on UiPath OCR, Computer Vision, or Citrix automation? Real-time expert support for CV activities and remote desktop UI. Same-day start.',
  canonical: 'https://proxytechsupport.com/uipath-ocr-computer-vision-job-support/',
  keywords: ['UiPath Computer Vision support', 'UiPath Citrix automation help', 'UiPath OCR support', 'UiPath CV activities', 'Citrix automation UiPath', 'remote desktop automation UiPath'],
  ogTitle: 'UiPath OCR & Computer Vision — Expert Help',
  ogDescription: 'Real-time OCR, CV activities, Citrix automation support — dynamic selectors, anchors, remote desktop UI issues. Same-day.',
  lastmod: '2026-05-28T10:00:00.000Z',
});
const PAGE_FAQS = [
{
          q: 'What UiPath Citrix automation and CV support do you provide?',
          a: 'We provide real-time support for Citrix automation strategy, CV Activities configuration, Citrix Extension setup, image-based automation, dynamic selector design, anchor selector patterns, Check App State with CV, and Retry Scope for Citrix stability. Citrix and CV automation are common interview topics and we also provide proxy interview guidance.',
        },
        {
          q: 'How do you automate Epic Hyperspace running inside Citrix?',
          a: 'Epic Hyperspace in Citrix requires either the Citrix Extension for native component interaction, or Computer Vision activities for pure visual automation. We help design stable automation for Epic screens using CV Anchor patterns, Check App State validation, and retry logic — while ensuring automation safety for patient data interactions.',
        },
        {
          q: 'Why do my Citrix selectors keep failing in production?',
          a: 'Common Citrix selector failures include: screen resolution differences between dev and production, Citrix session rendering delays, session reconnection events, Epic application version updates changing UI attributes. We diagnose the root cause and implement stable CV-based or anchor-based alternatives.',
        },
        {
          q: 'How do I handle dynamic selectors in UiPath?',
          a: 'Dynamic selectors use wildcard (*) characters for variable attribute portions, or build the selector string programmatically using variables. We help identify which selector attributes are stable vs dynamic, implement the right wildcard strategy, and add validation to confirm the correct element was found.',
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
  name: 'UiPath OCR & Computer Vision Support: Citrix and Remote Desktop Automation Help',
  description: 'Stuck on UiPath OCR, Computer Vision, or Citrix automation? Real-time expert support for CV activities and remote desktop UI. Same-day start.',
  url: 'https://proxytechsupport.com/uipath-ocr-computer-vision-job-support/',
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
    { '@type': 'ListItem', position: 2, name: 'UiPath Job Support', item: 'https://proxytechsupport.com/uipath-job-support/' },
    { '@type': 'ListItem', position: 3, name: 'UiPath OCR & Computer Vision Support: Citrix and Remote Desktop Automation Help', item: 'https://proxytechsupport.com/uipath-ocr-computer-vision-job-support/' },
  ],
};

export default function UiPathOCRComputerVisionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <KnowledgeGuidePage
      h1="UiPath OCR & Computer Vision Support: Citrix and Remote Desktop Automation Help"
      intro="Citrix automation and Computer Vision (CV) are among the most technically challenging areas of UiPath development — and among the most common interview and production support topics. If you are dealing with Citrix selector instability, CV activity failures, image-based automation fragility, or remote desktop UI automation challenges, our in-house UiPath experts provide real-time support."
      sections={[
        {
          heading: 'UiPath Computer Vision (CV) Activities',
          body: 'CV Activities use AI-based visual recognition to automate UI elements that standard selectors cannot reliably target.',
          bullets: [
            'CV Screen Scope — the container activity that enables CV-based automation in a target window/Citrix session',
            'CV Click, CV Type, CV Get Text — CV counterparts to standard UI automation activities',
            'CV Anchor — using a stable nearby element to locate a dynamic target element',
            'CV Check App State — visual confirmation of UI state in Citrix environments',
            'CV Extract Table — extracting grid/table data from Citrix screens',
            'CV activity timeout configuration — handling slow Citrix rendering delays',
          ],
        },
        {
          heading: 'Citrix Automation Strategy',
          body: 'Citrix automation requires a fundamentally different approach than standard Windows or browser automation.',
          bullets: [
            'Why Citrix is hard — no native accessibility APIs, all interaction via pixel/image/Citrix extension',
            'Citrix Extension for UiPath — required installation for Citrix Receiver/Workspace automation',
            'UiPath Citrix tech support — direct Citrix component (requires Citrix extension vs CV as fallback)',
            'CV for Citrix — pure visual recognition without Citrix extension requirement',
            'Anchor selectors in Citrix — using relative element positioning for fragile screens',
            'Healthcare use case — Epic Hyperspace running inside Citrix, standard selectors unavailable',
          ],
        },
        {
          heading: 'Image-Based Selectors and Anchors',
          body: 'When neither standard selectors nor CV Activities are available, image-based automation provides a fallback.',
          bullets: [
            'Find Image activity — locating UI elements using screenshot pattern matching',
            'Click Image — clicking based on image recognition rather than selector',
            'Image accuracy settings — adjusting accuracy threshold to balance reliability vs speed',
            'Anchor elements — using a stable element as positional reference for dynamic targets',
            'Screen coordinate fragility — why absolute coordinates fail across screen resolutions',
            'Resolution-aware automation — designing for multiple screen sizes and DPI settings',
          ],
        },
        {
          heading: 'Dynamic Selectors',
          body: 'Dynamic selectors handle UI elements whose attributes change at runtime.',
          bullets: [
            'Wildcard selectors — using * in attribute values for partially dynamic attributes',
            'Variable selectors — building selector strings programmatically from runtime values',
            'Selector Editor — UiPath Studio tool for inspecting and modifying selector attributes',
            'UiExplorer — deep selector inspection and attribute analysis tool',
            'Selector stability testing — verifying selectors across multiple runs and data scenarios',
            'Fallback strategies — when to escalate from selector to image/CV for dynamic UI',
          ],
        },
        {
          heading: 'Fallback and Recovery Strategies',
          body: 'Production-grade Citrix and CV automation requires robust fallback and recovery logic.',
          bullets: [
            'CV primary + selector fallback — try selector first, fall back to CV on failure',
            'Image recognition + CV hybrid — layered approach for maximum reliability',
            'Check App State with CV — validating expected visual state before proceeding',
            'Retry Scope with CV activities — automatic retry for Citrix rendering delays',
            'Screenshot-based diagnostics — capturing CV failure screenshots for production analysis',
            'Healthcare screen automation safety — extra validation steps for Epic screens before committing data',
          ],
        },
      ]}
      relatedLinks={[
        { href: '/uipath-job-support/', label: 'UiPath Job Support Hub' },
        { href: '/uipath-document-understanding-job-support/', label: 'Document Understanding Support' },
        { href: '/uipath-exception-handling-job-support/', label: 'Exception Handling Support' },
        { href: '/epic-hyperspace-uipath-automation-support/', label: 'Epic Hyperspace Automation' },
        { href: '/uipath-proxy-interview-support/', label: 'UiPath Proxy Interview Support' },
        { href: '/uipath-healthcare-job-support/', label: 'UiPath Healthcare Support' },
      ]}
      relatedGuides={[
        { href: '/uipath-studio-job-support/', label: 'UiPath Studio Support' },
        { href: '/rpa-job-support/', label: 'RPA Job Support' },
      ]}
      faqs={PAGE_FAQS}
      ctaHref="/uipath-job-support/"
      ctaLabel="Get Citrix & CV Automation Support"
    />
    </>
  );
}
