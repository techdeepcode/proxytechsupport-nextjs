import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { cosmosDbDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(cosmosDbDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={cosmosDbDotnetJobSupport} />;
}
