import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { londonDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(londonDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={londonDotnetJobSupport} />;
}
