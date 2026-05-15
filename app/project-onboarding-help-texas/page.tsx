import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { projectOnboardingHelpTexas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(projectOnboardingHelpTexas);

export default function ProjectOnboardingHelpTexasPage() {
  return <LandingPageTemplate config={projectOnboardingHelpTexas} />;
}
