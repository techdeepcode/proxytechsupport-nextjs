import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['boston'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Boston MA | Proxy Tech Support',
  description: 'Boston BioTech, FinTech, and enterprise tech roles are competitive. We apply to relevant Boston IT jobs, reach Kendall Square and Route 128 recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
