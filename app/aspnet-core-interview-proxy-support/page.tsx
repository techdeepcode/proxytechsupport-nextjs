import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aspnetCoreInterviewProxySupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aspnetCoreInterviewProxySupport);

export default function Page() {
  return <LandingPageTemplate config={aspnetCoreInterviewProxySupport} />;
}
