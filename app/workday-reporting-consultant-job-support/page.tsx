import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayReportingConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayReportingConsultantJobSupport);

export default function WorkdayReportingConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayReportingConsultantJobSupport} />;
}
