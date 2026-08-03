import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-vs-react-enterprise-development')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_vs_react_enterprise_development() {
  return <LandingPageTemplate config={config} />;
}
