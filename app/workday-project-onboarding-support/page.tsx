import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProjectOnboardingSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProjectOnboardingSupport);

export default function WorkdayProjectOnboardingSupportPage() {
  return <LandingPageTemplate config={workdayProjectOnboardingSupport} />;
}
