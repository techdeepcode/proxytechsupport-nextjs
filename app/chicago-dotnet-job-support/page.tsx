import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { chicagoDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(chicagoDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={chicagoDotnetJobSupport} />;
}
