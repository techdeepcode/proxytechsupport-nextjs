import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetApiDesignJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetApiDesignJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetApiDesignJobSupport} />;
}
