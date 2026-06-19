import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { germanyDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(germanyDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={germanyDotnetJobSupport} />;
}
