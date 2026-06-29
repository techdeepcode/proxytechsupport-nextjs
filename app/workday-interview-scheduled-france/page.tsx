import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledFrance } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledFrance);

export default function WorkdayInterviewScheduledFrancePage() {
  return <LandingPageTemplate config={workdayInterviewScheduledFrance} />;
}
