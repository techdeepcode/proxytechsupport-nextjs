import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureServiceBusDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureServiceBusDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureServiceBusDotnetJobSupport} />;
}
