import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'get-angular-interview-scheduled-usa')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_get_angular_interview_scheduled_usa() {
  return <LandingPageTemplate config={config} />;
}
