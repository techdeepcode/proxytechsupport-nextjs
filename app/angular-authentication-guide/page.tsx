import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-authentication-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_authentication_guide() {
  return <LandingPageTemplate config={config} />;
}
