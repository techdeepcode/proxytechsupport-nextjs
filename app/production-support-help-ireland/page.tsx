import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { productionSupportHelpIreland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(productionSupportHelpIreland);

export default function ProductionSupportHelpIrelandPage() {
  return <LandingPageTemplate config={productionSupportHelpIreland} />;
}
