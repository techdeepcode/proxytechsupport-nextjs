import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetAiInterviewProxyJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetAiInterviewProxyJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetAiInterviewProxyJobSupport} />;
}
