import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sydneyDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sydneyDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={sydneyDotnetJobSupport} />;
}
