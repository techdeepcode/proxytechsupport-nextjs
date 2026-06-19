import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetCachingJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetCachingJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetCachingJobSupport} />;
}
