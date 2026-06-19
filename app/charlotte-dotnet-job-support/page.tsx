import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { charlotteDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(charlotteDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={charlotteDotnetJobSupport} />;
}
