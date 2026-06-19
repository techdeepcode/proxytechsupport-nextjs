import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { ukDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(ukDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={ukDotnetJobSupport} />;
}
