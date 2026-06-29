import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayPeciIntegrationJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayPeciIntegrationJobSupport);

export default function WorkdayPeciIntegrationJobSupportPage() {
  return <LandingPageTemplate config={workdayPeciIntegrationJobSupport} />;
}
