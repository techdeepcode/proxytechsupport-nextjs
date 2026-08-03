import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-role-based-dashboard-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_role_based_dashboard_support() {
  return <LandingPageTemplate config={config} />;
}
