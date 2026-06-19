import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetTestingJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetTestingJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetTestingJobSupport} />;
}
