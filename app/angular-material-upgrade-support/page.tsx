import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-material-upgrade-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_material_upgrade_support() {
  return <LandingPageTemplate config={config} />;
}
