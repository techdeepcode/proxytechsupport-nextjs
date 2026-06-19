import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureEventHubsDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureEventHubsDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureEventHubsDotnetJobSupport} />;
}
