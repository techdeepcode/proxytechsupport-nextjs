import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayDataConversionMigrationSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayDataConversionMigrationSupport);

export default function WorkdayDataConversionMigrationSupportPage() {
  return <LandingPageTemplate config={workdayDataConversionMigrationSupport} />;
}
