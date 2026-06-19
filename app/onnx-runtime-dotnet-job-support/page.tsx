import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { onnxRuntimeDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(onnxRuntimeDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={onnxRuntimeDotnetJobSupport} />;
}
