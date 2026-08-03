import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'how-angular-job-support-works')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_how_angular_job_support_works() {
  return <LandingPageTemplate config={config} />;
}
