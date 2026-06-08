import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['jersey-city'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Jersey City NJ | Proxy Tech Support',
  description: 'Jersey City FinTech and banking tech roles are competitive. We apply to relevant Jersey City IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
