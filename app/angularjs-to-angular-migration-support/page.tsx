import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angularjs-to-angular-migration-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angularjs_to_angular_migration_support() {
  return <LandingPageTemplate config={config} />;
}
