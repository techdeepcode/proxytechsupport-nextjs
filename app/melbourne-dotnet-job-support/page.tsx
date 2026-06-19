import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { melbourneDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(melbourneDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={melbourneDotnetJobSupport} />;
}
