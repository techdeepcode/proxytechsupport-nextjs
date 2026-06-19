import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetIdentityJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetIdentityJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetIdentityJobSupport} />;
}
