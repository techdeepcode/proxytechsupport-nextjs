import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { usaDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(usaDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={usaDotnetJobSupport} />;
}
