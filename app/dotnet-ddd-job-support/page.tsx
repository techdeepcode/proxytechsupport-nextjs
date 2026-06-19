import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetDddJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetDddJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetDddJobSupport} />;
}
