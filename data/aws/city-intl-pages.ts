import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import { awsCityPage } from './city-usa-pages';

const CANADA_HUB: LandingRelatedLink = { label: 'Canada AWS AI/ML job support', href: '/canada-aws-ai-ml-job-support/' };
const UK_HUB: LandingRelatedLink = { label: 'UK AWS AI/ML job support', href: '/uk-aws-ai-ml-job-support/' };
const IRELAND_HUB: LandingRelatedLink = { label: 'Ireland AWS AI/ML job support', href: '/ireland-aws-ai-ml-job-support/' };
const GERMANY_HUB: LandingRelatedLink = { label: 'Germany AWS AI/ML job support', href: '/germany-aws-ai-ml-job-support/' };
const NETHERLANDS_HUB: LandingRelatedLink = { label: 'Netherlands AWS AI/ML job support', href: '/netherlands-aws-ai-ml-job-support/' };
const AUSTRALIA_HUB: LandingRelatedLink = { label: 'Australia AWS AI/ML job support', href: '/australia-aws-ai-ml-job-support/' };
const UAE_HUB: LandingRelatedLink = { label: 'UAE AWS AI/ML job support', href: '/uae-aws-ai-ml-job-support/' };

export const torontoAws = awsCityPage({
  slug: 'toronto-aws-ai-ml-job-support',
  city: 'Toronto',
  country: 'Canada',
  countryHub: CANADA_HUB,
  localContext:
    'Toronto is Canada’s largest tech and financial hub, home to the big-five banks, a strong AI research community (Vector Institute), and growing SaaS. Toronto employers run Bedrock and SageMaker on ca-central regions with data-residency awareness, banking-grade governance, and production RAG. We support Toronto AWS AI professionals across finance, SaaS, and enterprise.',
  timezoneNote: 'Available across ET business hours for Toronto clients.',
});

export const vancouverAws = awsCityPage({
  slug: 'vancouver-aws-ai-ml-job-support',
  city: 'Vancouver',
  country: 'Canada',
  countryHub: CANADA_HUB,
  localContext:
    'Vancouver has a strong gaming, film-tech, and startup scene plus West Coast tech offices. Vancouver employers build Bedrock GenAI products and SageMaker ML, often bridging US Pacific time zones. We support Vancouver AWS AI professionals across product, media-tech, and startups.',
  timezoneNote: 'Available across PT business hours for Vancouver clients.',
});

export const londonAws = awsCityPage({
  slug: 'london-aws-ai-ml-job-support',
  city: 'London',
  country: 'the UK',
  countryHub: UK_HUB,
  localContext:
    'London is Europe’s financial and fintech capital with deep enterprise, insurance, legal, and media sectors. London employers run Bedrock and RAG on regulated content in eu-west-2, SageMaker for risk and fraud models, and AgentCore agents — with GDPR and strong governance. We support London AWS AI professionals across finance, insurance, and tech.',
  timezoneNote: 'Available across GMT/BST business hours for London clients.',
});

export const manchesterAws = awsCityPage({
  slug: 'manchester-aws-ai-ml-job-support',
  city: 'Manchester',
  country: 'the UK',
  countryHub: UK_HUB,
  localContext:
    'Manchester is the UK’s largest regional tech hub with media, e-commerce, and digital services. Manchester employers adopt Bedrock GenAI and SageMaker ML with a strong contract market and pragmatic delivery. We support Manchester AWS AI professionals across digital, retail, and enterprise.',
  timezoneNote: 'Available across GMT/BST business hours for Manchester clients.',
});

export const dublinAws = awsCityPage({
  slug: 'dublin-aws-ai-ml-job-support',
  city: 'Dublin',
  country: 'Ireland',
  countryHub: IRELAND_HUB,
  localContext:
    'Dublin hosts EMEA engineering hubs for many global tech and SaaS firms, with significant AWS presence (eu-west-1). Dublin employers expect multinational-grade Bedrock and SageMaker delivery, GDPR compliance, and English-language EMEA support. We support Dublin AWS AI professionals across multinationals, SaaS, and fintech.',
  timezoneNote: 'Available across GMT/IST business hours for Dublin clients.',
});

export const berlinAws = awsCityPage({
  slug: 'berlin-aws-ai-ml-job-support',
  city: 'Berlin',
  country: 'Germany',
  countryHub: GERMANY_HUB,
  localContext:
    'Berlin is Germany’s startup capital with a vibrant scale-up and product scene. Berlin employers build Bedrock GenAI products and SageMaker ML with GDPR awareness and pragmatic, English-friendly engineering. We support Berlin AWS AI professionals across startups, scale-ups, and product companies.',
  timezoneNote: 'Available across CET/CEST business hours for Berlin clients.',
});

export const munichAws = awsCityPage({
  slug: 'munich-aws-ai-ml-job-support',
  city: 'Munich',
  country: 'Germany',
  countryHub: GERMANY_HUB,
  localContext:
    'Munich concentrates enterprise, automotive, insurance, and DAX-listed firms. Munich employers run Bedrock and SageMaker with rigorous security, data protection (often eu-central-1), and enterprise governance. We support Munich AWS AI professionals across automotive, insurance, and enterprise.',
  timezoneNote: 'Available across CET/CEST business hours for Munich clients.',
});

export const amsterdamAws = awsCityPage({
  slug: 'amsterdam-aws-ai-ml-job-support',
  city: 'Amsterdam',
  country: 'the Netherlands',
  countryHub: NETHERLANDS_HUB,
  localContext:
    'Amsterdam is a digital-first hub with fintech, logistics, and scale-ups, and high English fluency. Amsterdam employers value pragmatic Bedrock and RAG delivery, GDPR compliance, and cloud-native architecture. We support Amsterdam AWS AI professionals across fintech, logistics, and product companies.',
  timezoneNote: 'Available across CET/CEST business hours for Amsterdam clients.',
});

export const sydneyAws = awsCityPage({
  slug: 'sydney-aws-ai-ml-job-support',
  city: 'Sydney',
  country: 'Australia',
  countryHub: AUSTRALIA_HUB,
  localContext:
    'Sydney is Australia’s financial and tech centre with major banks, insurers, and an AWS region (ap-southeast-2). Sydney employers run Bedrock and SageMaker with data-sovereignty awareness and production reliability. We support Sydney AWS AI professionals across finance, insurance, and tech.',
  timezoneNote: 'Available across AEST/AEDT business hours for Sydney clients.',
});

export const melbourneAws = awsCityPage({
  slug: 'melbourne-aws-ai-ml-job-support',
  city: 'Melbourne',
  country: 'Australia',
  countryHub: AUSTRALIA_HUB,
  localContext:
    'Melbourne has a strong enterprise, government, education, and startup mix with a new AWS region. Melbourne employers adopt Bedrock GenAI and SageMaker ML with governance and data-residency focus. We support Melbourne AWS AI professionals across enterprise, government, and startups.',
  timezoneNote: 'Available across AEST/AEDT business hours for Melbourne clients.',
});

export const dubaiAws = awsCityPage({
  slug: 'dubai-aws-ai-ml-job-support',
  city: 'Dubai',
  country: 'the UAE',
  countryHub: UAE_HUB,
  localContext:
    'Dubai is a fast-growing tech and finance hub with major smart-city and government AI initiatives, served by the UAE AWS region (me-central-1). Dubai employers value data-residency-aware Bedrock and SageMaker delivery and rapid production rollout. We support Dubai AWS AI professionals across finance, government, and enterprise.',
  timezoneNote: 'Available across GST business hours for Dubai clients.',
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsIntlCityPages: LandingPageConfig[] = [
  torontoAws,
  vancouverAws,
  londonAws,
  manchesterAws,
  dublinAws,
  berlinAws,
  munichAws,
  amsterdamAws,
  sydneyAws,
  melbourneAws,
  dubaiAws,
];
