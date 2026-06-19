import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { microsoftExtensionsAiJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(microsoftExtensionsAiJobSupport);

export default function Page() {
  return <LandingPageTemplate config={microsoftExtensionsAiJobSupport} />;
}
