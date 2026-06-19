import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dallasDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dallasDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dallasDotnetJobSupport} />;
}
