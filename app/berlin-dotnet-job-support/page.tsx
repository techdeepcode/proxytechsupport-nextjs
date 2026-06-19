import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { berlinDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(berlinDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={berlinDotnetJobSupport} />;
}
