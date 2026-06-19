import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureOpenAiDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureOpenAiDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureOpenAiDotnetJobSupport} />;
}
