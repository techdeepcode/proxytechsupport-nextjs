import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayFinalRoundInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayFinalRoundInterviewSupport);

export default function WorkdayFinalRoundInterviewSupportPage() {
  return <LandingPageTemplate config={workdayFinalRoundInterviewSupport} />;
}
