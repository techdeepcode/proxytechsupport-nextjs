import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'why-angular-interviews-are-failing')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_why_angular_interviews_are_failing() {
  return <LandingPageTemplate config={config} />;
}
