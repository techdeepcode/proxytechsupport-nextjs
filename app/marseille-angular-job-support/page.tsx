import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'marseille-angular-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_marseille_angular_job_support() {
  return <LandingPageTemplate config={config} />;
}
