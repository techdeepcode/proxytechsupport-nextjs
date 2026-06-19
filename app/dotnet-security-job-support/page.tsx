import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetSecurityJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetSecurityJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetSecurityJobSupport} />;
}
