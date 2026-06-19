import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetCqrsMediatRJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetCqrsMediatRJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetCqrsMediatRJobSupport} />;
}
