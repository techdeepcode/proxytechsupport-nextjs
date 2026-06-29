import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledNetherlands } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledNetherlands);

export default function WorkdayInterviewScheduledNetherlandsPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledNetherlands} />;
}
