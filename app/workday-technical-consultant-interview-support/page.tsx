import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayTechnicalConsultantInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayTechnicalConsultantInterviewSupport);

export default function WorkdayTechnicalConsultantInterviewSupportPage() {
  return <LandingPageTemplate config={workdayTechnicalConsultantInterviewSupport} />;
}
