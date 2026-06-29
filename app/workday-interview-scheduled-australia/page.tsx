import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledAustralia } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledAustralia);

export default function WorkdayInterviewScheduledAustraliaPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledAustralia} />;
}
