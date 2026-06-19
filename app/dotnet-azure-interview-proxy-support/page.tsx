import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetAzureInterviewProxyJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetAzureInterviewProxyJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetAzureInterviewProxyJobSupport} />;
}
