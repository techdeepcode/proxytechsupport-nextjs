import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureSqlDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureSqlDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureSqlDotnetJobSupport} />;
}
