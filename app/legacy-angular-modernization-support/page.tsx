import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'legacy-angular-modernization-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_legacy_angular_modernization_support() {
  return <LandingPageTemplate config={config} />;
}
