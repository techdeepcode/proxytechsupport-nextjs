import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetWorkerServicesJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetWorkerServicesJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetWorkerServicesJobSupport} />;
}
