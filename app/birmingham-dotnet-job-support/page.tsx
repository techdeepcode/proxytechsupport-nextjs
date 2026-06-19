import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { birminghamDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(birminghamDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={birminghamDotnetJobSupport} />;
}
