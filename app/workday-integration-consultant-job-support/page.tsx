import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayIntegrationConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayIntegrationConsultantJobSupport);

export default function WorkdayIntegrationConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayIntegrationConsultantJobSupport} />;
}
