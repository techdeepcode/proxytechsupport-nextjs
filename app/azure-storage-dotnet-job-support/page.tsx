import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureStorageDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureStorageDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureStorageDotnetJobSupport} />;
}
