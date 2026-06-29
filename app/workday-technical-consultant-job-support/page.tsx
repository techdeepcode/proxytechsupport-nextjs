import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayTechnicalConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayTechnicalConsultantJobSupport);

export default function WorkdayTechnicalConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayTechnicalConsultantJobSupport} />;
}
