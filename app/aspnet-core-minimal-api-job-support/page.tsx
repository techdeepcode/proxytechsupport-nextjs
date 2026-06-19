import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aspnetCoreMinimalApiJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aspnetCoreMinimalApiJobSupport);

export default function Page() {
  return <LandingPageTemplate config={aspnetCoreMinimalApiJobSupport} />;
}
