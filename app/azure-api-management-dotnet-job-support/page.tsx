import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureApiManagementDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureApiManagementDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureApiManagementDotnetJobSupport} />;
}
