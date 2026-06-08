import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['dubai'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Dubai UAE | Proxy Tech Support',
  description: 'Dubai tech and FinTech roles are competitive. We apply to relevant Dubai IT jobs on Bayt.com and LinkedIn, reach DIFC and Dubai Internet City recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
