import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAngularClusterPages } from '@/data/angular';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAngularClusterPages.find((p) => p.slug === 'angular-java-spring-boot-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AngularPage_angular_java_spring_boot_job_support() {
  return <LandingPageTemplate config={config} />;
}
