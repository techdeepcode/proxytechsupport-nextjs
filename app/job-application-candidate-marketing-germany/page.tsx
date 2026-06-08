import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['germany'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services Germany | Proxy Tech Support',
  description: 'Struggling to get IT interview calls from German tech employers? We apply to relevant Germany jobs, reach Berlin, Munich, Frankfurt, and Hamburg recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
