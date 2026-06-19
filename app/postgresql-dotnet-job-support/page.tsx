import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { postgresqlDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(postgresqlDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={postgresqlDotnetJobSupport} />;
}
