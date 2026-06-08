import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['melbourne'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Melbourne Australia | Proxy Tech Support',
  description: 'Melbourne enterprise tech roles are competitive. We apply to relevant Melbourne IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the Melbourne market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
