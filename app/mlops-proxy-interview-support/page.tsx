import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { mlopsProxyInterviewSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(mlopsProxyInterviewSupport);

export default function MlopsProxyInterviewSupportPage() {
  return <LandingPageTemplate config={mlopsProxyInterviewSupport} />;
}
