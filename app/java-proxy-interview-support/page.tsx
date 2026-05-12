import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { javaProxyInterviewSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(javaProxyInterviewSupport);

export default function JavaProxyInterviewSupportPage() {
  return <LandingPageTemplate config={javaProxyInterviewSupport} />;
}
