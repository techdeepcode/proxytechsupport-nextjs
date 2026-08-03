import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-jest-vs-jasmine')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_jest_vs_jasmine() {
  return <LandingPageTemplate config={config} />;
}
