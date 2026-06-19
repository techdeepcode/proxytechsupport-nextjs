import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { monolithToMicroservicesDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(monolithToMicroservicesDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={monolithToMicroservicesDotnetJobSupport} />;
}
