import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureAiSearchDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureAiSearchDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureAiSearchDotnetJobSupport} />;
}
