import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetResilienceJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetResilienceJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetResilienceJobSupport} />;
}
