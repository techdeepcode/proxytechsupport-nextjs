import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { saudiArabiaDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(saudiArabiaDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={saudiArabiaDotnetJobSupport} />;
}
