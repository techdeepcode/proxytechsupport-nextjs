import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { ollamaDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(ollamaDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={ollamaDotnetJobSupport} />;
}
