import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetDatabaseInterviewProxyJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetDatabaseInterviewProxyJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetDatabaseInterviewProxyJobSupport} />;
}
