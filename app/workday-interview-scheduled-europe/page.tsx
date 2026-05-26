import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledEurope } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledEurope);

export default function WorkdayInterviewScheduledEuropePage() {
  return <LandingPageTemplate config={workdayInterviewScheduledEurope} />;
}
