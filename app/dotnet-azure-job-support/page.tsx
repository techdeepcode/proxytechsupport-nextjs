import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetAzureJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetAzureJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetAzureJobSupport} />;
}
