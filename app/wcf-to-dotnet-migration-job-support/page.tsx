import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { wcfToDotnetMigrationJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(wcfToDotnetMigrationJobSupport);

export default function Page() {
  return <LandingPageTemplate config={wcfToDotnetMigrationJobSupport} />;
}
