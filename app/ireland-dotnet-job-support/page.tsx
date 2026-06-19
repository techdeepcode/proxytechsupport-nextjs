import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { irelandDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(irelandDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={irelandDotnetJobSupport} />;
}
