import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetAngularJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetAngularJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetAngularJobSupport} />;
}
