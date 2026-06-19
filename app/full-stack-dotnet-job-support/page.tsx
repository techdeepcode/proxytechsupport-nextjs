import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { fullStackDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(fullStackDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={fullStackDotnetJobSupport} />;
}
