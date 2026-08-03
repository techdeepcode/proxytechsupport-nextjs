import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-job-support-locations')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_job_support_locations() {
  return <LandingPageTemplate config={config} />;
}
