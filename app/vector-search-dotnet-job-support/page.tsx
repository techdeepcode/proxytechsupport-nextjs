import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { vectorSearchDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(vectorSearchDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={vectorSearchDotnetJobSupport} />;
}
