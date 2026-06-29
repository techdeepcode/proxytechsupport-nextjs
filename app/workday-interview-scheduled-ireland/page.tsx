import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledIreland } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledIreland);

export default function WorkdayInterviewScheduledIrelandPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledIreland} />;
}
