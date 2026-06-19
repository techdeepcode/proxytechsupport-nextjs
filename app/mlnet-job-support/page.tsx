import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { mlnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(mlnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={mlnetJobSupport} />;
}
