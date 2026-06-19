import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetRepositoryPatternJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetRepositoryPatternJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetRepositoryPatternJobSupport} />;
}
