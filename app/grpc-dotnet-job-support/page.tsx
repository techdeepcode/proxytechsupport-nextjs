import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { grpcDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(grpcDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={grpcDotnetJobSupport} />;
}
