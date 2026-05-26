import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledUSA } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledUSA);

export default function WorkdayInterviewScheduledUSAPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledUSA} />;
}
