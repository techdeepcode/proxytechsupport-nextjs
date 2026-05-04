import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aiWorkflowAutomationJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aiWorkflowAutomationJobSupportUSA);

export default function AiWorkflowAutomationJobSupportUSAPage() {
  return <LandingPageTemplate config={aiWorkflowAutomationJobSupportUSA} />;
}
