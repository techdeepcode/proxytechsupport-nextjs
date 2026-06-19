import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetProxyInterviewSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetProxyInterviewSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetProxyInterviewSupport} />;
}
