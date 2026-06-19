import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetPerformanceJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetPerformanceJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetPerformanceJobSupport} />;
}
