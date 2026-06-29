import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayTenantConfigurationSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayTenantConfigurationSupport);

export default function WorkdayTenantConfigurationSupportPage() {
  return <LandingPageTemplate config={workdayTenantConfigurationSupport} />;
}
