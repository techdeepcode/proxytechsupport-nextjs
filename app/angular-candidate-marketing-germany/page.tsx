import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-candidate-marketing-germany')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_candidate_marketing_germany() {
  return <LandingPageTemplate config={config} />;
}
