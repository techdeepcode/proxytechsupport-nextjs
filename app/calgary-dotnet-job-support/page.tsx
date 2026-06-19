import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { calgaryDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(calgaryDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={calgaryDotnetJobSupport} />;
}
