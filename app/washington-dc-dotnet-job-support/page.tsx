import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { washingtonDcDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(washingtonDcDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={washingtonDcDotnetJobSupport} />;
}
