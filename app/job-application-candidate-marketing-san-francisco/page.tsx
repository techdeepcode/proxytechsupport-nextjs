import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['san-francisco'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing San Francisco | Proxy Tech Support',
  description: 'San Francisco Bay Area tech market is still competitive despite layoffs. We apply to relevant SF tech jobs, reach Bay Area recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
