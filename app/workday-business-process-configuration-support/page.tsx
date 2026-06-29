import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayBusinessProcessConfigurationSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayBusinessProcessConfigurationSupport);

export default function WorkdayBusinessProcessConfigurationSupportPage() {
  return <LandingPageTemplate config={workdayBusinessProcessConfigurationSupport} />;
}
