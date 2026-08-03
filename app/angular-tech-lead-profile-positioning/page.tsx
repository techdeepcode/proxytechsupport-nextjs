import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-tech-lead-profile-positioning')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_tech_lead_profile_positioning() {
  return <LandingPageTemplate config={config} />;
}
