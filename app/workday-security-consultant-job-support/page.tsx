import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdaySecurityConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdaySecurityConsultantJobSupport);

export default function WorkdaySecurityConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdaySecurityConsultantJobSupport} />;
}
