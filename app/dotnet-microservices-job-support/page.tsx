import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetMicroservicesJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetMicroservicesJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetMicroservicesJobSupport} />;
}
