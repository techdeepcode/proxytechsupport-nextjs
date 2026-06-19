import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetWebApiJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetWebApiJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetWebApiJobSupport} />;
}
