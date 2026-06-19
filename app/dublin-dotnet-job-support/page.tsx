import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dublinDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dublinDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dublinDotnetJobSupport} />;
}
