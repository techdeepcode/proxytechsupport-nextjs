import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetAspireJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetAspireJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetAspireJobSupport} />;
}
