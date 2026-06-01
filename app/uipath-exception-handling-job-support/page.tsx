import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'UiPath Exception Handling Support — Real-Time Help',
  description: 'Stuck on Try Catch, Retry Scope, Global Exception Handler, or business vs system exceptions in UiPath? Real-time expert support. Same-day start.',
  canonical: 'https://proxytechsupport.com/uipath-exception-handling-job-support/',
  keywords: ['UiPath exception handling support', 'UiPath Try Catch help', 'Retry Scope support', 'Check App State UiPath', 'UiPath Global Exception Handler', 'business exception system exception UiPath'],
  ogTitle: 'UiPath Exception Handling Support — Expert Help',
  ogDescription: 'Real-time exception handling support — Try Catch, Retry Scope, business vs system exceptions, bot stability design. Same-day.',
  lastmod: '2026-05-28T10:00:00.000Z',
});
const PAGE_FAQS = [
{
          q: 'What UiPath exception handling support do you provide?',
          a: 'We provide real-time support for Try Catch design, Retry Scope configuration, Check App State usage, business vs system exception classification, Global Exception Handler implementation, and production bot recovery patterns. We also provide proxy interview support for exception handling scenario questions.',
        },
        {
          q: 'When should I use Retry Scope vs Try Catch?',
          a: 'Retry Scope is ideal for transient failures — selector instability, UI load timing, network flakiness — where the same activity should automatically retry with a condition check. Try Catch is for business logic exceptions where you need to capture the exception, log it, perform cleanup, and potentially re-throw or handle differently based on exception type.',
        },
        {
          q: 'How does exception handling work in REFramework?',
          a: 'REFramework has a specific exception handling pattern: BusinessRuleException thrown in Process Transaction marks the queue item as BusinessException (no retry). Any other System.Exception triggers the ApplicationException path — Orchestrator retries the item up to MaxRetryNumber, with a re-Init step before each retry to restore application state. We help implement this correctly for your specific business process.',
        },
        {
          q: 'Can you help with production bot instability caused by exception handling issues?',
          a: 'Yes. Production exception handling support includes analyzing failure patterns, identifying misclassified exceptions, fixing Retry Scope configurations, implementing missing Check App State validations, and adding Global Exception Handler logging for better production diagnostics.',
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
  name: 'UiPath Exception Handling Support: Try Catch, Retry Scope, and Recovery Design',
  description: 'Stuck on Try Catch, Retry Scope, Global Exception Handler, or business vs system exceptions in UiPath? Real-time expert support. Same-day start.',
  url: 'https://proxytechsupport.com/uipath-exception-handling-job-support/',
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
    { '@type': 'ListItem', position: 3, name: 'UiPath Exception Handling Support: Try Catch, Retry Scope, and Recovery Design', item: 'https://proxytechsupport.com/uipath-exception-handling-job-support/' },
  ],
};

export default function UiPathExceptionHandlingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <KnowledgeGuidePage
      h1="UiPath Exception Handling Support: Try Catch, Retry Scope, and Recovery Design"
      intro="Exception handling is what separates unstable demo bots from production-grade automation. Correct Try Catch placement, Retry Scope configuration, Check App State usage, business vs system exception classification, and Global Exception Handler design all determine bot reliability under real-world conditions. Our in-house UiPath experts provide real-time exception handling support and proxy interview guidance."
      sections={[
        {
          heading: 'Try Catch Activity',
          body: 'The Try Catch activity is UiPath\'s primary scoped exception handling mechanism.',
          bullets: [
            'Try block — the activities you want to protect from unhandled exceptions',
            'Catches block — specific exception types to catch: System.Exception, BusinessRuleException, SelectorNotFoundException, ImageNotFoundException',
            'Finally block — always-executed cleanup (closing files, logging, resetting state)',
            'Nested Try Catch — inner catches for specific activities, outer catch for workflow-level recovery',
            'Re-throw pattern — catching, logging, and re-throwing for upstream handling',
            'Exception message extraction — using exception.Message and exception.Source for structured logging',
          ],
        },
        {
          heading: 'Retry Scope Activity',
          body: 'Retry Scope provides automatic retry for flaky activities without requiring explicit exception handling code.',
          bullets: [
            'Action section — the activity or sequence to retry on failure',
            'Condition section — the Check App State or other condition that must be true to stop retrying',
            'NumberOfRetries property — how many times to retry before throwing the exception',
            'RetryInterval property — wait time between retries',
            'Ideal use cases — selector instability, network flakiness, UI load timing issues',
            'Retry Scope vs Try Catch — Retry Scope for transient failures, Try Catch for business logic exceptions',
          ],
        },
        {
          heading: 'Check App State Activity',
          body: 'Check App State verifies the UI is in the expected state before proceeding — essential for selector-dependent automation.',
          bullets: [
            'Target element — the UI element that indicates the expected application state',
            'WaitForReady property — ensuring the element is interactive, not just visible',
            'Timeout configuration — how long to wait before declaring state not reached',
            'Usage inside Retry Scope — Check App State as the Condition that stops retrying',
            'Usage for navigation validation — confirming page loads, modal appearances, element readiness',
            'Fallback strategy — what to do when Check App State fails after max retries',
          ],
        },
        {
          heading: 'Business vs System Exception Classification',
          body: 'Correct exception classification determines retry behavior and failure reporting in REFramework.',
          bullets: [
            'BusinessRuleException — expected, data-driven failure; throw when business validation fails (invalid record, missing required field, out-of-range value)',
            'System.Exception (ApplicationException) — unexpected, infrastructure failure; selector not found, app crashed, network error',
            'Classification design — business rules that determine BusinessRuleException at the process level',
            'REFramework integration — BusinessException → no retry, ApplicationException → retry up to MaxRetryNumber',
            'Custom exception types — extending Exception for domain-specific failure categorization',
            'Exception hierarchy — catching specific exception types before generic System.Exception',
          ],
        },
        {
          heading: 'Global Exception Handler',
          body: 'The Global Exception Handler provides a last-resort fallback for exceptions not caught by any Try Catch in the workflow.',
          bullets: [
            'Global Exception Handler workflow — set in Project Settings, receives all uncaught exceptions',
            'ErrorInfo object — exception type, message, and the activity that threw it',
            'Action variable — setting to Retry, Ignore, Abort, or Continue',
            'Logging pattern — always log exception details in Global Exception Handler',
            'Screenshot capture in Global Exception Handler for production diagnostics',
            'Interaction with REFramework — Global Exception Handler vs REFramework\'s own exception handling',
          ],
        },
      ]}
      relatedLinks={[
        { href: '/uipath-job-support/', label: 'UiPath Job Support Hub' },
        { href: '/uipath-reframework-job-support/', label: 'REFramework Job Support' },
        { href: '/uipath-queues-dispatcher-performer-support/', label: 'Queues & Dispatcher/Performer' },
        { href: '/uipath-production-support/', label: 'UiPath Production Support' },
        { href: '/uipath-proxy-interview-support/', label: 'UiPath Proxy Interview Support' },
        { href: '/uipath-studio-job-support/', label: 'UiPath Studio Support' },
      ]}
      relatedGuides={[
        { href: '/uipath-framework-design-support/', label: 'Framework Design Support' },
        { href: '/rpa-job-support/', label: 'RPA Job Support' },
      ]}
      faqs={PAGE_FAQS}
      ctaHref="/uipath-job-support/"
      ctaLabel="Get Exception Handling Support"
    />
    </>
  );
}
