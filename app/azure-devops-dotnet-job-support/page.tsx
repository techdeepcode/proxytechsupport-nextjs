import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureDevOpsDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureDevOpsDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureDevOpsDotnetJobSupport} />;
}
