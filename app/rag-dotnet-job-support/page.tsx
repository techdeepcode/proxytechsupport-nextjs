import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { ragDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(ragDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={ragDotnetJobSupport} />;
}
