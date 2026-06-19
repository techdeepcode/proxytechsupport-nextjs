import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { signalrJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(signalrJobSupport);

export default function Page() {
  return <LandingPageTemplate config={signalrJobSupport} />;
}
