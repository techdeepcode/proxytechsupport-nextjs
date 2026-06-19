import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetOpenTelemetryJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetOpenTelemetryJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetOpenTelemetryJobSupport} />;
}
