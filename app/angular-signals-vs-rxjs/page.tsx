import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-signals-vs-rxjs')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_signals_vs_rxjs() {
  return <LandingPageTemplate config={config} />;
}
