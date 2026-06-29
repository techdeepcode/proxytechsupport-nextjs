import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayStudioIntegrationJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayStudioIntegrationJobSupport);

export default function WorkdayStudioIntegrationJobSupportPage() {
  return <LandingPageTemplate config={workdayStudioIntegrationJobSupport} />;
}
