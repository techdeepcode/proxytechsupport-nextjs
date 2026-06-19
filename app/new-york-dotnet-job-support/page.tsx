import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { newYorkDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(newYorkDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={newYorkDotnetJobSupport} />;
}
