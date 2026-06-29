import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayAdvancedReportingJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayAdvancedReportingJobSupport);

export default function WorkdayAdvancedReportingJobSupportPage() {
  return <LandingPageTemplate config={workdayAdvancedReportingJobSupport} />;
}
