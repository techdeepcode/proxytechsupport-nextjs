import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-cypress-vs-playwright')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_cypress_vs_playwright() {
  return <LandingPageTemplate config={config} />;
}
