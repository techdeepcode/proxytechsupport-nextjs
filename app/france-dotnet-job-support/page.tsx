import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { franceDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(franceDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={franceDotnetJobSupport} />;
}
