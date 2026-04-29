import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewUK } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewUK);

export default function ProxyInterviewUKPage() {
  return <LandingPageTemplate config={proxyInterviewUK} />;
}
