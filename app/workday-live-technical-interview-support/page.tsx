import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayLiveTechnicalInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayLiveTechnicalInterviewSupport);

export default function WorkdayLiveTechnicalInterviewSupportPage() {
  return <LandingPageTemplate config={workdayLiveTechnicalInterviewSupport} />;
}
