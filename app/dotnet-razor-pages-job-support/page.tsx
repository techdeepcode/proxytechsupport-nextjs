import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetRazorPagesJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetRazorPagesJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetRazorPagesJobSupport} />;
}
