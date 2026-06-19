import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { webFormsToBlazorMigrationJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(webFormsToBlazorMigrationJobSupport);

export default function Page() {
  return <LandingPageTemplate config={webFormsToBlazorMigrationJobSupport} />;
}
