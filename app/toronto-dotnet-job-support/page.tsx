import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { torontoDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(torontoDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={torontoDotnetJobSupport} />;
}
