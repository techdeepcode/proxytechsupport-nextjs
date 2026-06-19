import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { atlantaDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(atlantaDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={atlantaDotnetJobSupport} />;
}
