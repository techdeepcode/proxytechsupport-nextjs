import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { productionSupportHelpTexas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(productionSupportHelpTexas);

export default function ProductionSupportHelpTexasPage() {
  return <LandingPageTemplate config={productionSupportHelpTexas} />;
}
