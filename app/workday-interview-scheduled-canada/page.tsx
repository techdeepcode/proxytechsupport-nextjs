import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledCanada } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledCanada);

export default function WorkdayInterviewScheduledCanadaPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledCanada} />;
}
