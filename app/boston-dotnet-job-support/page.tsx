import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { bostonDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(bostonDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={bostonDotnetJobSupport} />;
}
