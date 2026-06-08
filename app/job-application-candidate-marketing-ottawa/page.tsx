import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['ottawa'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Ottawa | Proxy Tech Support',
  description: 'Ottawa government tech and telecom roles require targeted marketing. We apply to relevant Ottawa IT jobs, reach government tech recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
