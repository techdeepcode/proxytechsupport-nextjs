import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayFinancialsConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayFinancialsConsultantJobSupport);

export default function WorkdayFinancialsConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayFinancialsConsultantJobSupport} />;
}
