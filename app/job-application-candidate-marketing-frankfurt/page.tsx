import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['frankfurt'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Frankfurt Germany | Proxy Tech Support',
  description: 'Frankfurt FinTech and banking tech roles are competitive. We apply to relevant Frankfurt IT jobs, reach local recruiters, follow up professionally, and keep your profile active in the Frankfurt market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
