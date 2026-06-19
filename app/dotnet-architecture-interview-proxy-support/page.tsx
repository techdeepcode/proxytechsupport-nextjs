import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetArchitectureInterviewProxyJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetArchitectureInterviewProxyJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetArchitectureInterviewProxyJobSupport} />;
}
