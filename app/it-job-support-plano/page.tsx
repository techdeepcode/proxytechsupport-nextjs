import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportPlano } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportPlano);

export default function ItJobSupportPlanoPage() {
  return <LandingPageTemplate config={itJobSupportPlano} />;
}
