import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureAppServiceDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureAppServiceDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureAppServiceDotnetJobSupport} />;
}
