import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import BusinessDisclaimer from '@/components/BusinessDisclaimer';
import { landingPageMetadata } from '@/lib/site-seo';

// NOTE (source-only, not rendered): Insert the registered legal entity name,
// jurisdiction and registered address here once confirmed by the business owner.

export const metadata: Metadata = landingPageMetadata({
  title: 'Disclaimer | Proxy Tech Support',
  description:
    'Proxy Tech Support provides paid IT career support, technical support, profile services and interview support. We are not an employer, do not sell jobs, and do not guarantee interviews, employment or salary outcomes.',
  canonical: 'https://proxytechsupport.com/disclaimer/',
});

const LAST_UPDATED = 'August 8, 2026';

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      breadcrumbLabel="Disclaimer"
      lastUpdated={LAST_UPDATED}
      intro="This disclaimer explains the nature and limits of the services provided by Proxy Tech Support. Please read it carefully before purchasing or using any of our services."
    >
      <BusinessDisclaimer variant="full" style={{ margin: '1.25rem 0 1.75rem' }} />

      <h2>Nature of our services</h2>
      <p>
        Proxy Tech Support provides paid IT career support, technical support, profile services and
        interview support to IT professionals. Our services include real-time job support, proxy
        interview support, profile engineering, interview mentoring, and job application &amp;
        candidate marketing. These are advisory, preparatory and technical-support services.
      </p>

      <h2>We are not an employer and do not sell jobs</h2>
      <p>
        We are not an employer, a recruitment agency, or a staffing firm, and we do not publish job
        vacancies or sell employment. We do not sell jobs, vacancies, interview calls, recruiter
        responses, offers or placements. Employment decisions are made solely by employers.
      </p>

      <h2>What service fees cover</h2>
      <p>
        Service fees are charged only for the agreed support services, sessions, engagements or
        support periods. Fees are not placement fees and are not payments in exchange for a job, a
        vacancy, an interview call, a recruiter response, an offer, a salary or any employment
        outcome.
      </p>

      <h2>No guarantee of outcomes</h2>
      <p>
        We do not guarantee interviews, selection, recruiter responses, employment, compensation,
        promotions or career outcomes. Any results described on this website reflect individual
        experiences and are not promises of similar results. Career and employment outcomes depend on
        each customer&rsquo;s skills, experience, preparation, effort, market conditions and
        independent employer decisions.
      </p>

      <h2>Salary and market information</h2>
      <p>
        Any salary or compensation figures shown on this website are indicative market benchmarks
        based on published industry data. They are informational only, vary by experience,
        specialization, location, employer and market conditions, and do not represent a guaranteed
        salary, job offer or employment outcome.
      </p>

      <h2>Professional and ethical boundaries</h2>
      <p>
        We provide preparation, guidance and technical support. We do not impersonate candidates,
        fabricate experience, create fake documents, or claim false employer affiliations. Customers
        remain responsible for their own applications, assessments, interviews and professional
        decisions.
      </p>

      <h2>External links and third parties</h2>
      <p>
        Company, product and technology names referenced on this site are the property of their
        respective owners and are used for identification and descriptive purposes only. Reference to
        them does not imply any affiliation with or endorsement by those parties.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer can be sent to{' '}
        <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a>.
      </p>
    </LegalPageLayout>
  );
}
