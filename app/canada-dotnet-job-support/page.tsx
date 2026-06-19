import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { canadaDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(canadaDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={canadaDotnetJobSupport} />;
}
