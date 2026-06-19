import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { vancouverDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(vancouverDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={vancouverDotnetJobSupport} />;
}
