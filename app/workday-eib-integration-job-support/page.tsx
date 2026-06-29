import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayEibIntegrationJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayEibIntegrationJobSupport);

export default function WorkdayEibIntegrationJobSupportPage() {
  return <LandingPageTemplate config={workdayEibIntegrationJobSupport} />;
}
