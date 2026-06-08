import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['manchester'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Manchester | Proxy Tech Support',
  description: 'Manchester tech roles are growing. We apply to relevant Manchester IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the Manchester tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
