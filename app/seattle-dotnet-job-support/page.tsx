import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { seattleDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(seattleDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={seattleDotnetJobSupport} />;
}
