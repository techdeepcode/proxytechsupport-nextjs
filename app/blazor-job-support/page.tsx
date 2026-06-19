import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { blazorJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(blazorJobSupport);

export default function Page() {
  return <LandingPageTemplate config={blazorJobSupport} />;
}
