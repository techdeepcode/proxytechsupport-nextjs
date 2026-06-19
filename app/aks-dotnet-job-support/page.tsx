import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aksDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aksDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={aksDotnetJobSupport} />;
}
