import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-multi-tenant-application-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_multi_tenant_application_support() {
  return <LandingPageTemplate config={config} />;
}
