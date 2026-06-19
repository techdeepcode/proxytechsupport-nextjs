import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetCleanArchitectureJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetCleanArchitectureJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetCleanArchitectureJobSupport} />;
}
