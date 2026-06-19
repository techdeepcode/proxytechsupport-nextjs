import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { austinDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(austinDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={austinDotnetJobSupport} />;
}
