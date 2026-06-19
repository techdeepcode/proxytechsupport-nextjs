import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jerseyCityDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jerseyCityDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={jerseyCityDotnetJobSupport} />;
}
