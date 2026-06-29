import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayHcmConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayHcmConsultantJobSupport);

export default function WorkdayHcmConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayHcmConsultantJobSupport} />;
}
