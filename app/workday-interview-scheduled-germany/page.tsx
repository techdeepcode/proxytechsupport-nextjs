import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledGermany } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledGermany);

export default function WorkdayInterviewScheduledGermanyPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledGermany} />;
}
