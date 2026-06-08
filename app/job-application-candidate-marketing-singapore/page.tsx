import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['singapore'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services Singapore | Proxy Tech Support',
  description: 'Not getting IT interview calls in Singapore? We apply to relevant Singapore jobs on LinkedIn and JobsDB, reach recruiters professionally, follow up consistently, and keep your profile active in the Singapore market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
