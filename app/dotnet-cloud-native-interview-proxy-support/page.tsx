import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetCloudNativeInterviewProxyJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetCloudNativeInterviewProxyJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetCloudNativeInterviewProxyJobSupport} />;
}
