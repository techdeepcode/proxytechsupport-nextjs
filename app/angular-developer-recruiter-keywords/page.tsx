import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-developer-recruiter-keywords')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_developer_recruiter_keywords() {
  return <LandingPageTemplate config={config} />;
}
