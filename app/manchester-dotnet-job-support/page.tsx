import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { manchesterDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(manchesterDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={manchesterDotnetJobSupport} />;
}
