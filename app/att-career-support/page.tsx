import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allCompanyClusterPages } from '@/data/companies';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allCompanyClusterPages.find((p) => p.slug === 'att-career-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function CompanyHub_att_career_support() {
  return <LandingPageTemplate config={config} />;
}
