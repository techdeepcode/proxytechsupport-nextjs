import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['canada'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services Canada | Proxy Tech Support',
  description: 'Struggling to get IT interview calls in Canada? We apply to relevant Canadian jobs on your behalf, reach recruiters and staffing agencies, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
