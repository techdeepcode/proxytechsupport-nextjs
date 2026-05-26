import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayReportingAnalyticsJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayReportingAnalyticsJobSupport);

export default function WorkdayReportingAnalyticsJobSupportPage() {
  return <LandingPageTemplate config={workdayReportingAnalyticsJobSupport} />;
}
