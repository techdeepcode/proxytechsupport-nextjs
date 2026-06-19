import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { netherlandsDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(netherlandsDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={netherlandsDotnetJobSupport} />;
}
