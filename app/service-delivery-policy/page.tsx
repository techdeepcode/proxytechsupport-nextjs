import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import BusinessDisclaimer from '@/components/BusinessDisclaimer';
import { landingPageMetadata } from '@/lib/site-seo';

// NOTE (source-only, not rendered): Insert the registered legal entity name,
// jurisdiction and registered address here once confirmed by the business owner.

export const metadata: Metadata = landingPageMetadata({
  title: 'Service Delivery Policy | Proxy Tech Support',
  description:
    'How Proxy Tech Support delivers paid IT career-support, technical-support, profile and interview-support services — scope, engagement, timelines and customer responsibilities.',
  canonical: 'https://proxytechsupport.com/service-delivery-policy/',
});

const LAST_UPDATED = 'August 8, 2026';

export default function ServiceDeliveryPolicyPage() {
  return (
    <LegalPageLayout
      title="Service Delivery Policy"
      breadcrumbLabel="Service Delivery Policy"
      lastUpdated={LAST_UPDATED}
      intro="This policy explains how our paid support services are scoped, agreed and delivered. It applies to all Proxy Tech Support services."
    >
      <h2>Services we deliver</h2>
      <p>
        Proxy Tech Support provides paid IT career support, technical support, profile services and
        interview support. Depending on what you request, an engagement may include real-time job
        support, proxy interview support, interview mentoring, profile engineering, or job
        application &amp; candidate marketing. The specific scope is agreed with each customer before
        the engagement begins.
      </p>

      <h2>How delivery works</h2>
      <ul>
        <li>You share your requirement, technology stack, schedule and support expectations.</li>
        <li>We discuss the scope, confirm the specific service, and agree the engagement or session.</li>
        <li>An experienced professional is assigned to your engagement.</li>
        <li>Support is delivered live or asynchronously as agreed, within the agreed engagement period.</li>
      </ul>

      <h2>Timelines and availability</h2>
      <p>
        We aim to begin as quickly as possible, and same-day start may be available for urgent
        requirements, subject to expert availability, technology stack and scheduling. Timelines are
        estimates and are not guarantees.
      </p>

      <h2>Customer responsibilities</h2>
      <p>
        Our services support your own effort — they do not replace it. Customers are responsible for
        contributing their own skills, experience, preparation and effort, for providing accurate
        information, for their own applications, assessments and interviews, and for their
        professional and employment decisions.
      </p>

      <h2>Scope of outcomes</h2>
      <p>
        We deliver the agreed support services only. We do not sell jobs or vacancies, and we do not
        guarantee interviews, selection, recruiter responses, employment, compensation, promotions or
        salary outcomes. Employment decisions are made solely by employers, and results vary by
        individual and market conditions.
      </p>

      <h2>Changes to an engagement</h2>
      <p>
        If your requirements change during an engagement, contact us and we will discuss adjusting the
        scope where feasible. Material changes may affect fees, timelines and availability, and will
        be agreed with you before they take effect.
      </p>

      <BusinessDisclaimer variant="full" style={{ margin: '1.75rem 0 0.5rem' }} />

      <h2>Contact</h2>
      <p>For questions about service delivery, contact us:</p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a>
        <br />
        <strong>Phone/WhatsApp:</strong> +91 96606 14469
        <br />
        <strong>Website:</strong> https://proxytechsupport.com/
      </p>
    </LegalPageLayout>
  );
}
