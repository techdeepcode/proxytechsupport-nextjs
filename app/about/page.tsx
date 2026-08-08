import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import BusinessDisclaimer from '@/components/BusinessDisclaimer';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'About Proxy Tech Support | Paid IT Career & Technical Support',
  description:
    'Proxy Tech Support provides paid IT career support, profile services, interview support and hands-on technical guidance. We do not publish vacancies, sell employment or control employer hiring decisions.',
  canonical: 'https://proxytechsupport.com/about/',
});

const LAST_UPDATED = 'August 8, 2026';

export default function AboutPage() {
  return (
    <LegalPageLayout
      title="About Proxy Tech Support"
      breadcrumbLabel="About"
      lastUpdated={LAST_UPDATED}
      intro="Proxy Tech Support has supported IT professionals since 2008 with real-time job support, proxy interview support, profile services and hands-on technical guidance across USA, UK, Canada, Australia, Europe and worldwide."
    >
      <h2>What we provide</h2>
      <p>
        We provide paid IT career support, profile services, interview support and hands-on technical
        guidance. We do not publish job vacancies, sell employment or control employer hiring
        decisions. Customers pay only for the support services agreed with them.
      </p>
      <p>
        Career and employment outcomes depend on the customer&rsquo;s experience, skills, preparation,
        market conditions and independent employer decisions.
      </p>

      <h2>How we work</h2>
      <ul>
        <li>Real-time IT job support for coding, debugging, architecture, production issues and delivery pressure.</li>
        <li>Proxy interview support and interview mentoring to help you prepare and present your experience confidently.</li>
        <li>Profile engineering and recruiter-visibility optimization for your resume and LinkedIn.</li>
        <li>Job application &amp; candidate marketing to run a structured, active job-search process on your behalf.</li>
      </ul>

      <h2>Our professional and ethical boundaries</h2>
      <p>We hold to clear boundaries in everything we do:</p>
      <ul>
        <li>We do not impersonate candidates.</li>
        <li>We do not fabricate experience.</li>
        <li>We do not create fake documents.</li>
        <li>We do not claim fake employer affiliations.</li>
        <li>We do not sell jobs or vacancies.</li>
        <li>We do not promise interview selection.</li>
        <li>We do not guarantee recruiter responses.</li>
        <li>We do not guarantee employment or salary.</li>
        <li>Customers remain responsible for their applications, assessments, interviews and professional decisions.</li>
      </ul>

      <BusinessDisclaimer variant="full" showPolicyLinks style={{ margin: '1.75rem 0 0.5rem' }} />

      <h2>Contact</h2>
      <p>
        Reach us at{' '}
        <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a> or on WhatsApp at
        +91 96606 14469.
      </p>
    </LegalPageLayout>
  );
}
