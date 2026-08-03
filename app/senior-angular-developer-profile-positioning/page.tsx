import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'senior-angular-developer-profile-positioning')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_senior_angular_developer_profile_positioning() {
  return <LandingPageTemplate config={config} />;
}
