import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { semanticKernelJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(semanticKernelJobSupport);

export default function Page() {
  return <LandingPageTemplate config={semanticKernelJobSupport} />;
}
