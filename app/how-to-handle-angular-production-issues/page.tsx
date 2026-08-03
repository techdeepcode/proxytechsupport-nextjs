import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'how-to-handle-angular-production-issues')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_how_to_handle_angular_production_issues() {
  return <LandingPageTemplate config={config} />;
}
