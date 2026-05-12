import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aiMlProxyInterviewSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aiMlProxyInterviewSupport);

export default function AiMlProxyInterviewSupportPage() {
  return <LandingPageTemplate config={aiMlProxyInterviewSupport} />;
}
