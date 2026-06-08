import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['usa'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services USA | Proxy Tech Support',
  description: 'Stop waiting for USA interview calls. We apply to relevant US jobs on your behalf, reach recruiters, follow up professionally, and keep your profile active in the AI-disrupted US job market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
