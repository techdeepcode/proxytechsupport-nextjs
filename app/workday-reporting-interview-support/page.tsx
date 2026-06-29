import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayReportingInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayReportingInterviewSupport);

export default function WorkdayReportingInterviewSupportPage() {
  return <LandingPageTemplate config={workdayReportingInterviewSupport} />;
}
