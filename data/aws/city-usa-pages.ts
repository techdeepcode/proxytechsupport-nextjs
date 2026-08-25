import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  awsPage,
  relatedLinks,
  jobSupportHighlights,
  awsJobFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  KB_RAG_HUB_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

interface CityInput {
  slug: string;
  city: string;
  country: string;
  countryHub: LandingRelatedLink;
  localContext: string;
  timezoneNote: string;
}

export function awsCityPage(input: CityInput): LandingPageConfig {
  const { slug, city, country, countryHub } = input;
  return awsPage({
    slug,
    title: `${city} AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore`,
    description: `Real-time AWS AI/ML job support in ${city}: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps — project support, production help, and interview assistance. Same-day, confidential.`,
    keywords: [
      `AWS AI ML job support ${city}`, `Amazon Bedrock support ${city}`,
      `SageMaker support ${city}`, `AWS GenAI job support ${city}`,
      `AWS AI interview support ${city}`, `${city} AWS AI engineer support`,
    ],
    h1: `${city} AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore`,
    tagline: `Real-time AWS AI/ML job support, production help, and interview assistance for Amazon Bedrock, AgentCore, SageMaker, and GenAI professionals in ${city}.`,
    heroEyebrow: `${city} AWS AI/ML Support`,
    painIntro: `Working on AWS AI in ${city} and stuck on a Bedrock, RAG, AgentCore, or SageMaker problem — or facing an AWS AI interview for a ${city} role? Get an experienced AWS AI engineer beside you, aligned to your hours.`,
    heroVariant: input.localContext,
    geoLine: `Supporting AWS AI/ML professionals in ${city} and across ${country} — remote and hybrid, aligned to local business hours.`,
    timezoneNote: input.timezoneNote,
    techSnippet:
      'We cover Amazon Bedrock, Bedrock AgentCore, Amazon Nova, SageMaker AI, AWS MLOps, RAG on OpenSearch and pgvector, and AWS AI security and cost.',
    highlights: jobSupportHighlights,
    faqs: awsJobFaqs(`AWS AI professionals in ${city}`, `Bedrock applications, RAG, AgentCore agents, SageMaker training and inference, and AWS MLOps aligned to ${city} working hours`),
    useCasesSection: {
      title: `AWS AI Situations We Help ${city} Professionals With`,
      cases: [
        'A Bedrock application failing with AccessDenied or throttling in production',
        'A Knowledge Base or RAG pipeline returning wrong answers before a release',
        'An AgentCore agent failing in Runtime or blocked by a Gateway Policy',
        'A SageMaker endpoint or training job failing under deadline',
        `An AWS AI/ML interview for a ${city} role — Bedrock, RAG, or SageMaker system design`,
        `Onboarding onto a new AWS AI project at a ${city} employer`,
      ],
    },
    bottomCTAHeading: `Need AWS AI/ML Job Support or Interview Help in ${city}?`,
    bottomCTABody: `In-house Amazon Bedrock, AgentCore, and SageMaker experts aligned to ${city} hours. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [countryHub, AWS_HUB_LINK],
      techLinks: [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
      problemLink: { label: 'AWS AI production support', href: '/aws-ai-ml-production-support/' },
      proxyLink: AWS_INTERVIEW_HUB_LINK,
      additionalLinks: [countryHub, AGENTCORE_HUB_LINK, KB_RAG_HUB_LINK, AWS_INTERVIEW_HUB_LINK, EXISTING.awsBedrockJobSupport],
    }),
  });
}

const USA_HUB: LandingRelatedLink = { label: 'USA AWS AI/ML job support', href: '/usa-aws-ai-ml-job-support/' };

export const newYorkAws = awsCityPage({
  slug: 'new-york-aws-ai-ml-job-support',
  city: 'New York',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'New York pairs Wall Street finance with a large tech and media scene. NYC employers run Bedrock and RAG on regulated financial and legal content, SageMaker for risk and trading models, and AgentCore for customer and back-office agents — with heavy emphasis on IAM, KMS, audit, and low-latency inference. We support NYC AWS AI professionals across banking, insurance, media, and startups.',
  timezoneNote: 'Available across ET business hours, plus 24/7 for urgent production incidents.',
});

export const sanFranciscoAws = awsCityPage({
  slug: 'san-francisco-aws-ai-ml-job-support',
  city: 'San Francisco',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'San Francisco and the Bay Area are the epicentre of AI product companies and startups. SF employers push the frontier of Bedrock, AgentCore agents, RAG, and evaluation, often at high scale and with aggressive timelines. We support SF AWS AI professionals building production GenAI, agent platforms, and SageMaker ML at product companies and startups.',
  timezoneNote: 'Available across PT business hours, plus 24/7 for urgent production incidents.',
});

export const seattleAws = awsCityPage({
  slug: 'seattle-aws-ai-ml-job-support',
  city: 'Seattle',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'Seattle is AWS’s home turf, with deep cloud and ML talent across commerce, cloud, and enterprise. Seattle employers expect strong SageMaker MLOps, Bedrock production engineering, and rigorous AWS-native architecture. We support Seattle AWS AI professionals across large tech, enterprise, and startups.',
  timezoneNote: 'Available across PT business hours, plus 24/7 for urgent production incidents.',
});

export const dallasAws = awsCityPage({
  slug: 'dallas-aws-ai-ml-job-support',
  city: 'Dallas',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'Dallas–Fort Worth is a fast-growing enterprise and financial-services hub with major corporate IT. Dallas employers adopt Bedrock and SageMaker for enterprise automation, customer service agents, and analytics, with a strong contract market. We support Dallas AWS AI professionals across finance, telecom, retail, and enterprise IT.',
  timezoneNote: 'Available across CT business hours, plus 24/7 for urgent production incidents.',
});

export const austinAws = awsCityPage({
  slug: 'austin-aws-ai-ml-job-support',
  city: 'Austin',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'Austin is a booming tech hub with major relocations, startups, and semiconductor and product engineering. Austin employers build Bedrock GenAI products, AgentCore agents, and SageMaker ML with a startup-to-enterprise mix. We support Austin AWS AI professionals across product, enterprise, and startups.',
  timezoneNote: 'Available across CT business hours, plus 24/7 for urgent production incidents.',
});

export const bostonAws = awsCityPage({
  slug: 'boston-aws-ai-ml-job-support',
  city: 'Boston',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'Boston is strong in biotech, healthcare, robotics, and enterprise software, with world-class research. Boston employers run Bedrock and SageMaker on healthcare and life-sciences data with strict HIPAA/PHI handling, clinical RAG, and rigorous evaluation. We support Boston AWS AI professionals across biotech, healthcare, and enterprise.',
  timezoneNote: 'Available across ET business hours, plus 24/7 for urgent production incidents.',
});

export const chicagoAws = awsCityPage({
  slug: 'chicago-aws-ai-ml-job-support',
  city: 'Chicago',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'Chicago blends finance and trading, insurance, logistics, and enterprise IT. Chicago employers deploy Bedrock and SageMaker for risk, claims, supply chain, and customer service, with strong governance. We support Chicago AWS AI professionals across finance, insurance, and enterprise.',
  timezoneNote: 'Available across CT business hours, plus 24/7 for urgent production incidents.',
});

export const washingtonDcAws = awsCityPage({
  slug: 'washington-dc-aws-ai-ml-job-support',
  city: 'Washington DC',
  country: 'the USA',
  countryHub: USA_HUB,
  localContext:
    'Washington DC and the DMV area centre on government, public sector, defense, and consulting. DC employers value security-first Bedrock and SageMaker architecture, GovCloud awareness (AgentCore is available in AWS GovCloud US-West), compliance, and audit. We support DC AWS AI professionals across public sector and consulting.',
  timezoneNote: 'Available across ET business hours, plus 24/7 for urgent production incidents.',
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsUsaCityPages: LandingPageConfig[] = [
  newYorkAws,
  sanFranciscoAws,
  seattleAws,
  dallasAws,
  austinAws,
  bostonAws,
  chicagoAws,
  washingtonDcAws,
];
