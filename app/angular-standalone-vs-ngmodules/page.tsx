import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-standalone-vs-ngmodules')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_standalone_vs_ngmodules() {
  return <LandingPageTemplate config={config} />;
}
