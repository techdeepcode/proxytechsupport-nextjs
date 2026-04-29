import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { productionIssueSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(productionIssueSupport);

export default function ProductionIssueSupportPage() {
  return <LandingPageTemplate config={productionIssueSupport} />;
}
