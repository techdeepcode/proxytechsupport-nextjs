import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-state-management-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_state_management_guide() {
  return <LandingPageTemplate config={config} />;
}
