import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathProxyInterviewEurope } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathProxyInterviewEurope);

export default function UiPathProxyInterviewEuropePage() {
  return <LandingPageTemplate config={uipathProxyInterviewEurope} />;
}
