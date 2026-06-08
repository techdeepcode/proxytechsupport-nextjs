import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['brisbane'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Brisbane Australia | Proxy Tech Support',
  description: 'Brisbane tech roles move fast. We apply to relevant Brisbane IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the growing Brisbane tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
