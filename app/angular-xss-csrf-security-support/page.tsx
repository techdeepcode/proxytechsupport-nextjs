import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-xss-csrf-security-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_xss_csrf_security_support() {
  return <LandingPageTemplate config={config} />;
}
