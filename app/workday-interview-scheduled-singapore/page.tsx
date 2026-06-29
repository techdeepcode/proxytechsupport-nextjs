import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledSingapore } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledSingapore);

export default function WorkdayInterviewScheduledSingaporePage() {
  return <LandingPageTemplate config={workdayInterviewScheduledSingapore} />;
}
