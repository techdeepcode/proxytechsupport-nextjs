import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { newZealandDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(newZealandDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={newZealandDotnetJobSupport} />;
}
