import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledSwitzerland } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledSwitzerland);

export default function WorkdayInterviewScheduledSwitzerlandPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledSwitzerland} />;
}
