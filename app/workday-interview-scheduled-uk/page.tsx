import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledUK } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledUK);

export default function WorkdayInterviewScheduledUKPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledUK} />;
}
