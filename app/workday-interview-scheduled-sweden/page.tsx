import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledSweden } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledSweden);

export default function WorkdayInterviewScheduledSwedenPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledSweden} />;
}
