import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetFrameworkMigrationJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetFrameworkMigrationJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetFrameworkMigrationJobSupport} />;
}
