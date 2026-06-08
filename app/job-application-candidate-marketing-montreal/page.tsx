import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['montreal'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Montreal | Proxy Tech Support',
  description: 'Montreal AI, gaming, and tech roles are competitive. We apply to relevant Montreal IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the Montreal market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
