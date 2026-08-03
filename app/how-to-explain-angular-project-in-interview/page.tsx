import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'how-to-explain-angular-project-in-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_how_to_explain_angular_project_in_interview() {
  return <LandingPageTemplate config={config} />;
}
