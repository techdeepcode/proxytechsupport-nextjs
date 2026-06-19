import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { amsterdamDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(amsterdamDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={amsterdamDotnetJobSupport} />;
}
