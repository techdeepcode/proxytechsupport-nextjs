import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathProxyInterviewUK } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathProxyInterviewUK);

export default function UiPathProxyInterviewUKPage() {
  return <LandingPageTemplate config={uipathProxyInterviewUK} />;
}
