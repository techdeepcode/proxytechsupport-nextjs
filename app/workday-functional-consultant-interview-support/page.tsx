import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayFunctionalConsultantInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayFunctionalConsultantInterviewSupport);

export default function WorkdayFunctionalConsultantInterviewSupportPage() {
  return <LandingPageTemplate config={workdayFunctionalConsultantInterviewSupport} />;
}
