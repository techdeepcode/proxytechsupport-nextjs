import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-core-web-vitals-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_core_web_vitals_support() {
  return <LandingPageTemplate config={config} />;
}
