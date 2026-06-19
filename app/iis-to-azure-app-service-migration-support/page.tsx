import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { iisToAzureAppServiceMigrationSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(iisToAzureAppServiceMigrationSupport);

export default function Page() {
  return <LandingPageTemplate config={iisToAzureAppServiceMigrationSupport} />;
}
