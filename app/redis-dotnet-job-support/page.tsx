import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { redisDotnetJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(redisDotnetJobSupport);

export default function Page() {
  return <LandingPageTemplate config={redisDotnetJobSupport} />;
}
