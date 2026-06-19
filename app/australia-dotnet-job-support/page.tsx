import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { australiaDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(australiaDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={australiaDotnetJobSupport} />;
}
