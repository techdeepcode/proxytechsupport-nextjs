import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-ngrx-vs-signals-store')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_ngrx_vs_signals_store() {
  return <LandingPageTemplate config={config} />;
}
