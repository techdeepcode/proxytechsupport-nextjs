import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayIntegrationInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayIntegrationInterviewSupport);

export default function WorkdayIntegrationInterviewSupportPage() {
  return <LandingPageTemplate config={workdayIntegrationInterviewSupport} />;
}
