import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'saudi-arabia-angular-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_saudi_arabia_angular_job_support() {
  return <LandingPageTemplate config={config} />;
}
