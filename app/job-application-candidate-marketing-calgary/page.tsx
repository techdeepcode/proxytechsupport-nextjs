import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['calgary'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Calgary | Proxy Tech Support',
  description: 'Calgary energy tech and enterprise IT roles require targeted marketing. We apply to relevant Calgary jobs, reach local recruiters, follow up professionally, and keep your profile active in the Calgary market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
