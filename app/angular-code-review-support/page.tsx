import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-code-review-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_code_review_support() {
  return <LandingPageTemplate config={config} />;
}
