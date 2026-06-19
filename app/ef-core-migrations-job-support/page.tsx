import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { efCoreMigrationsJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(efCoreMigrationsJobSupport);

export default function Page() {
  return <LandingPageTemplate config={efCoreMigrationsJobSupport} />;
}
