import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['cork'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Cork Ireland | Proxy Tech Support',
  description: 'Cork tech and pharma IT roles require targeted marketing. We apply to relevant Cork jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the Cork market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
