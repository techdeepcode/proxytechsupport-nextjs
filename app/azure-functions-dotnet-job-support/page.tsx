import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureFunctionsDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureFunctionsDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureFunctionsDotnetJobSupport} />;
}
