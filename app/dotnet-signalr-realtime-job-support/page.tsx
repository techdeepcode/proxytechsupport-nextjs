import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetSignalRRealTimeJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetSignalRRealTimeJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetSignalRRealTimeJobSupport} />;
}
