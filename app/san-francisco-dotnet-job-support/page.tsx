import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sanFranciscoDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sanFranciscoDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={sanFranciscoDotnetJobSupport} />;
}
