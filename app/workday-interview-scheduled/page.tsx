import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduled } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduled);

export default function WorkdayInterviewScheduledPage() {
  return <LandingPageTemplate config={workdayInterviewScheduled} />;
}
