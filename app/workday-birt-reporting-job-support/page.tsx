import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayBirtReportingJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayBirtReportingJobSupport);

export default function WorkdayBirtReportingJobSupportPage() {
  return <LandingPageTemplate config={workdayBirtReportingJobSupport} />;
}
