import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aiAgentsDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aiAgentsDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={aiAgentsDotnetJobSupport} />;
}
