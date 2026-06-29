import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayFunctionalConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayFunctionalConsultantJobSupport);

export default function WorkdayFunctionalConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayFunctionalConsultantJobSupport} />;
}
