import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportMontreal } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportMontreal);

export default function ITJobSupportMontrealPage() {
  return <LandingPageTemplate config={itJobSupportMontreal} />;
}
