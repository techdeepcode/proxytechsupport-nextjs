import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { genevaWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(genevaWorkdayJobSupport);

export default function GenevaWorkdayJobSupportPage() {
  return <LandingPageTemplate config={genevaWorkdayJobSupport} />;
}
