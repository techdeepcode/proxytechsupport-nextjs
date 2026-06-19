import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureAiFoundryDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureAiFoundryDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureAiFoundryDotnetJobSupport} />;
}
