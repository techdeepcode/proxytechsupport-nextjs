import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allCompanyClusterPages } from '@/data/companies';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allCompanyClusterPages.find((p) => p.slug === 'dbt-labs-career-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function CompanyHub_dbt_labs_career_support() {
  return <LandingPageTemplate config={config} />;
}
