import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dapperDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dapperDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dapperDotnetJobSupport} />;
}
