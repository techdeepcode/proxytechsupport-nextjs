import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { daprDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(daprDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={daprDotnetJobSupport} />;
}
