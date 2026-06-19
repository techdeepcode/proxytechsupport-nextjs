import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { openAiSdkDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(openAiSdkDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={openAiSdkDotnetJobSupport} />;
}
