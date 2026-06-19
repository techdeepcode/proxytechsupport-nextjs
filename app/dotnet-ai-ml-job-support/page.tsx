import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetAiMlJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetAiMlJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetAiMlJobSupport} />;
}
