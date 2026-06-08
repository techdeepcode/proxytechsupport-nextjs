import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['austin'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Austin TX | Proxy Tech Support',
  description: 'Austin tech market is competitive. We apply to relevant Austin IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the Austin tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
