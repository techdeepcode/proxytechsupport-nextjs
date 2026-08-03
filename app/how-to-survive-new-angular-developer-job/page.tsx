import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'how-to-survive-new-angular-developer-job')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_how_to_survive_new_angular_developer_job() {
  return <LandingPageTemplate config={config} />;
}
