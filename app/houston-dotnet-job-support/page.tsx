import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { houstonDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(houstonDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={houstonDotnetJobSupport} />;
}
