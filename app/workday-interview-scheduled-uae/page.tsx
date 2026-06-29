import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledUAE } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledUAE);

export default function WorkdayInterviewScheduledUAEPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledUAE} />;
}
