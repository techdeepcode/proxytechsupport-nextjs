import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'why-angular-resume-gets-no-calls')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_why_angular_resume_gets_no_calls() {
  return <LandingPageTemplate config={config} />;
}
