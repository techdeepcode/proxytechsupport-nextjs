import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-developer-linkedin-optimization')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_developer_linkedin_optimization() {
  return <LandingPageTemplate config={config} />;
}
