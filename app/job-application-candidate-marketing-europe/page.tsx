import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['europe'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services Europe | Proxy Tech Support',
  description: 'Struggling to get IT interview calls across European tech markets? We apply to relevant Europe jobs, reach recruiters in Germany, Netherlands, Ireland and beyond, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
