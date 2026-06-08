import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['san-jose'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing San Jose Silicon Valley | Proxy Tech Support',
  description: 'Silicon Valley tech jobs in San Jose are highly competitive. We apply to relevant San Jose tech roles, reach Silicon Valley recruiters, follow up professionally, and keep your profile visible.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
