import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureEventGridDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureEventGridDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureEventGridDotnetJobSupport} />;
}
