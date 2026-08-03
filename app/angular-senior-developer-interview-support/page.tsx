import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-senior-developer-interview-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_senior_developer_interview_support() {
  return <LandingPageTemplate config={config} />;
}
