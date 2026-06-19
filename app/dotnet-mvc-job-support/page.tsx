import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetMvcJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetMvcJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetMvcJobSupport} />;
}
