import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { azureKeyVaultDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(azureKeyVaultDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={azureKeyVaultDotnetJobSupport} />;
}
