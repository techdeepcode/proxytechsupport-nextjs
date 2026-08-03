import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'how-to-get-angular-interviews-scheduled')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_how_to_get_angular_interviews_scheduled() {
  return <LandingPageTemplate config={config} />;
}
