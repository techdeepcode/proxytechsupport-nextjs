import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aspnetCoreJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aspnetCoreJobSupport);

export default function Page() {
  return <LandingPageTemplate config={aspnetCoreJobSupport} />;
}
