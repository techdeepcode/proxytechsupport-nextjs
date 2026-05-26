import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayIntegrationJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayIntegrationJobSupport);

export default function WorkdayIntegrationJobSupportPage() {
  return <LandingPageTemplate config={workdayIntegrationJobSupport} />;
}
