import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { phoenixDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(phoenixDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={phoenixDotnetJobSupport} />;
}
