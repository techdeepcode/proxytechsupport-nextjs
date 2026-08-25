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
  MLOPS_HUB_LINK,
  KB_RAG_HUB_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

interface CountryInput {
  slug: string;
  country: string;
  demonym: string;
  title: string;
  description: string;
  h1: string;
  heroEyebrow: string;
  localContext: string; // tech hubs + industries + hiring context (real, differentiated)
  timezoneNote: string;
  cityLinks: LandingRelatedLink[];
}

function awsCountryPage(input: CountryInput): LandingPageConfig {
  const { slug, country, demonym, cityLinks } = input;
  return awsPage({
    slug,
    title: input.title,
    description: input.description,
    keywords: [
      `AWS AI ML job support ${country}`, `Amazon Bedrock support ${country}`,
      `SageMaker support ${country}`, `AWS GenAI job support ${country}`,
      `AWS AI production support ${country}`, `AWS AI interview support ${country}`,
    ],
    h1: input.h1,
    tagline: `Real-time AWS AI/ML job support, production help, interview assistance, and candidate marketing for Amazon Bedrock, AgentCore, SageMaker, and GenAI professionals across ${country}.`,
    heroEyebrow: input.heroEyebrow,
    painIntro: `Working on AWS AI in ${country} and stuck on a Bedrock, RAG, AgentCore, or SageMaker problem — or facing an AWS AI interview? Get an experienced AWS AI engineer beside you, aligned to your hours.`,
    heroVariant: input.localContext,
    geoLine: `Supporting AWS AI/ML professionals across ${country} — remote and hybrid, aligned to local business hours.`,
    timezoneNote: input.timezoneNote,
    techSnippet:
      'We cover Amazon Bedrock, Bedrock AgentCore, Amazon Nova, SageMaker AI, AWS MLOps, RAG on OpenSearch and pgvector, and AWS AI security and cost — all current through August 2026.',
    highlights: jobSupportHighlights,
    faqs: awsJobFaqs(`${demonym} AWS AI professionals`, `Bedrock applications, RAG, AgentCore agents, SageMaker training and inference, and AWS MLOps aligned to ${country} working hours`),
    useCasesSection: {
      title: `AWS AI Situations We Help ${demonym} Professionals With`,
      cases: [
        'A Bedrock application failing with AccessDenied or throttling in production',
        'A Knowledge Base or RAG pipeline returning wrong answers before a release',
        'An AgentCore agent failing in Runtime or blocked by a Gateway Policy',
        'A SageMaker endpoint or training job failing under deadline',
        `An AWS AI/ML interview for a ${country} role — Bedrock, RAG, or SageMaker system design`,
        `A strong profile getting no ${country} AWS AI recruiter calls`,
      ],
    },
    bottomCTAHeading: `Need AWS AI/ML Job Support or Interview Help in ${country}?`,
    bottomCTABody:
      `In-house Amazon Bedrock, AgentCore, and SageMaker experts aligned to ${country} hours — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AWS_HUB_LINK, AWS_INTERVIEW_HUB_LINK],
      techLinks: [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
      problemLink: { label: 'AWS AI production support', href: '/aws-ai-ml-production-support/' },
      proxyLink: AWS_INTERVIEW_HUB_LINK,
      additionalLinks: [
        ...cityLinks,
        AGENTCORE_HUB_LINK, KB_RAG_HUB_LINK, MLOPS_HUB_LINK, AWS_HUB_LINK,
        EXISTING.awsBedrockJobSupport, EXISTING.aimlHub,
      ],
    }),
  });
}

const USA_CITY_LINKS: LandingRelatedLink[] = [
  { label: 'New York AWS AI/ML', href: '/new-york-aws-ai-ml-job-support/' },
  { label: 'San Francisco AWS AI/ML', href: '/san-francisco-aws-ai-ml-job-support/' },
  { label: 'Seattle AWS AI/ML', href: '/seattle-aws-ai-ml-job-support/' },
  { label: 'Dallas AWS AI/ML', href: '/dallas-aws-ai-ml-job-support/' },
  { label: 'Austin AWS AI/ML', href: '/austin-aws-ai-ml-job-support/' },
  { label: 'Boston AWS AI/ML', href: '/boston-aws-ai-ml-job-support/' },
  { label: 'Chicago AWS AI/ML', href: '/chicago-aws-ai-ml-job-support/' },
  { label: 'Washington DC AWS AI/ML', href: '/washington-dc-aws-ai-ml-job-support/' },
];

export const usaAwsAiMl = awsCountryPage({
  slug: 'usa-aws-ai-ml-job-support',
  country: 'the USA',
  demonym: 'US',
  title: 'USA AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in the USA: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across New York, San Francisco, Seattle, Austin, Dallas, and beyond. Same-day, confidential.',
  h1: 'USA AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'USA AWS AI/ML Support — Updated August 2026',
  localContext:
    'The USA is the deepest AWS AI market — hyperscaler-adjacent teams in Seattle, AI startups and enterprises across San Francisco and the Bay Area, financial services in New York and Charlotte, healthcare and biotech in Boston, and fast-growing hubs in Austin, Dallas, and Atlanta. US employers push hard on production Bedrock, RAG, and agent systems, SageMaker MLOps at scale, and strict IAM/KMS/VPC security and cost governance. We support US AWS AI professionals across all of it — contract (C2C/W2/1099) and full-time — aligned to US time zones.',
  timezoneNote: 'Available across ET, CT, MT, and PT business hours, plus 24/7 for urgent production incidents.',
  cityLinks: [...USA_CITY_LINKS, { label: 'USA Amazon Bedrock support', href: '/usa-amazon-bedrock-job-support/' }],
});

export const canadaAwsAiMl = awsCountryPage({
  slug: 'canada-aws-ai-ml-job-support',
  country: 'Canada',
  demonym: 'Canadian',
  title: 'Canada AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in Canada: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Toronto, Vancouver, Montreal, and Ottawa. Same-day, confidential.',
  h1: 'Canada AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Canada AWS AI/ML Support — Updated August 2026',
  localContext:
    'Canada has a strong AI research and engineering base — Toronto and the Vector Institute, Montreal’s deep-learning community, Waterloo’s engineering pipeline, and growing cloud adoption in banking (the big five), insurance, and public sector. Canadian employers value data-residency-aware architecture (often ca-central regions), Bedrock and SageMaker on governed data, and bilingual and cross-border considerations. We support Canadian AWS AI professionals — contract and full-time — aligned to Canadian time zones.',
  timezoneNote: 'Available across ET, CT, MT, and PT business hours for Canadian clients.',
  cityLinks: [
    { label: 'Toronto AWS AI/ML', href: '/toronto-aws-ai-ml-job-support/' },
    { label: 'Vancouver AWS AI/ML', href: '/vancouver-aws-ai-ml-job-support/' },
  ],
});

export const ukAwsAiMl = awsCountryPage({
  slug: 'uk-aws-ai-ml-job-support',
  country: 'the UK',
  demonym: 'UK',
  title: 'UK AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in the UK: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across London, Manchester, Edinburgh, and beyond. Same-day, confidential.',
  h1: 'UK AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'UK AWS AI/ML Support — Updated August 2026',
  localContext:
    'The UK is a leading European AWS AI market — London fintech and banking, insurance and legal in the City, retail and media, and strong research hubs in Cambridge, Oxford, and Edinburgh. UK employers emphasise GDPR-aware data handling, London-region (eu-west-2) deployment, Bedrock and RAG for regulated content, and cost governance. We support UK AWS AI professionals — contract (inside/outside IR35) and permanent — aligned to GMT/BST.',
  timezoneNote: 'Available across GMT/BST business hours for UK clients.',
  cityLinks: [
    { label: 'London AWS AI/ML', href: '/london-aws-ai-ml-job-support/' },
    { label: 'Manchester AWS AI/ML', href: '/manchester-aws-ai-ml-job-support/' },
  ],
});

export const irelandAwsAiMl = awsCountryPage({
  slug: 'ireland-aws-ai-ml-job-support',
  country: 'Ireland',
  demonym: 'Irish',
  title: 'Ireland AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in Ireland: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Dublin, Cork, and Galway. Same-day, confidential.',
  h1: 'Ireland AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Ireland AWS AI/ML Support — Updated August 2026',
  localContext:
    'Ireland is a European tech capital — Dublin hosts EMEA engineering hubs for global tech and SaaS firms, strong pharma and medtech in Cork, and AWS has significant infrastructure presence (eu-west-1). Irish employers value multinational-grade Bedrock and SageMaker delivery, GDPR compliance, and English-language EMEA support. We support Irish AWS AI professionals — contract and permanent — aligned to GMT/IST.',
  timezoneNote: 'Available across GMT/IST business hours for Irish clients.',
  cityLinks: [{ label: 'Dublin AWS AI/ML', href: '/dublin-aws-ai-ml-job-support/' }],
});

export const germanyAwsAiMl = awsCountryPage({
  slug: 'germany-aws-ai-ml-job-support',
  country: 'Germany',
  demonym: 'German',
  title: 'Germany AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in Germany: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Berlin, Munich, and Frankfurt. Same-day, confidential.',
  h1: 'Germany AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Germany AWS AI/ML Support — Updated August 2026',
  localContext:
    'Germany combines automotive and industrial engineering with a strong Berlin startup scene, Munich enterprise and DAX firms, and Frankfurt finance. German employers emphasise data protection (GDPR, often Frankfurt eu-central-1), on-prem-to-cloud migration, and rigorous engineering — Bedrock and SageMaker with strict security and governance. We support German AWS AI professionals — contract and permanent — aligned to CET/CEST.',
  timezoneNote: 'Available across CET/CEST business hours for German clients.',
  cityLinks: [
    { label: 'Berlin AWS AI/ML', href: '/berlin-aws-ai-ml-job-support/' },
    { label: 'Munich AWS AI/ML', href: '/munich-aws-ai-ml-job-support/' },
  ],
});

export const netherlandsAwsAiMl = awsCountryPage({
  slug: 'netherlands-aws-ai-ml-job-support',
  country: 'the Netherlands',
  demonym: 'Dutch',
  title: 'Netherlands AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in the Netherlands: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Amsterdam, Rotterdam, and Eindhoven. Same-day, confidential.',
  h1: 'Netherlands AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Netherlands AWS AI/ML Support — Updated August 2026',
  localContext:
    'The Netherlands is a digital-first market — Amsterdam’s tech and scale-up scene, strong logistics and fintech, and high English fluency. Dutch employers value pragmatic Bedrock and RAG delivery, GDPR compliance, and cloud-native architecture. We support Dutch AWS AI professionals — contract and permanent — aligned to CET/CEST.',
  timezoneNote: 'Available across CET/CEST business hours for Netherlands clients.',
  cityLinks: [{ label: 'Amsterdam AWS AI/ML', href: '/amsterdam-aws-ai-ml-job-support/' }],
});

export const australiaAwsAiMl = awsCountryPage({
  slug: 'australia-aws-ai-ml-job-support',
  country: 'Australia',
  demonym: 'Australian',
  title: 'Australia AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in Australia: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Sydney, Melbourne, Brisbane, and Perth. Same-day, confidential.',
  h1: 'Australia AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Australia AWS AI/ML Support — Updated August 2026',
  localContext:
    'Australia has strong cloud adoption in banking, mining and resources, government, and a growing Sydney/Melbourne startup scene, with AWS regions in Sydney (ap-southeast-2) and Melbourne. Australian employers value data-sovereignty-aware Bedrock and SageMaker delivery and production reliability. We support Australian AWS AI professionals — contract and permanent — aligned to AEST/AEDT and AWST.',
  timezoneNote: 'Available across AEST/AEDT and AWST business hours for Australian clients.',
  cityLinks: [
    { label: 'Sydney AWS AI/ML', href: '/sydney-aws-ai-ml-job-support/' },
    { label: 'Melbourne AWS AI/ML', href: '/melbourne-aws-ai-ml-job-support/' },
  ],
});

export const singaporeAwsAiMl = awsCountryPage({
  slug: 'singapore-aws-ai-ml-job-support',
  country: 'Singapore',
  demonym: 'Singapore',
  title: 'Singapore AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in Singapore: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Singapore’s finance and tech sector. Same-day, confidential.',
  h1: 'Singapore AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Singapore AWS AI/ML Support — Updated August 2026',
  localContext:
    'Singapore is the APAC hub for finance, fintech, and regional tech HQs, with strong MAS-aligned governance and an AWS region (ap-southeast-1). Singapore employers push production GenAI in banking and insurance, Bedrock and RAG on regulated data, and enterprise security. We support Singapore AWS AI professionals — contract and permanent — aligned to SGT and broader APAC hours.',
  timezoneNote: 'Available across SGT and APAC business hours for Singapore clients.',
  cityLinks: [
    { label: 'Amazon Bedrock support', href: '/amazon-bedrock-job-support/' },
    { label: 'Amazon SageMaker support', href: '/amazon-sagemaker-job-support/' },
  ],
});

export const uaeAwsAiMl = awsCountryPage({
  slug: 'uae-aws-ai-ml-job-support',
  country: 'the UAE',
  demonym: 'UAE',
  title: 'UAE AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support in the UAE: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers across Dubai and Abu Dhabi. Same-day, confidential.',
  h1: 'UAE AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'UAE AWS AI/ML Support — Updated August 2026',
  localContext:
    'The UAE is investing heavily in AI across government, finance, and smart-city initiatives, with an AWS region in the UAE (me-central-1) and strong Dubai and Abu Dhabi tech growth. UAE employers value data-residency-aware Bedrock and SageMaker delivery and rapid production rollout. We support UAE AWS AI professionals — contract and permanent — aligned to GST.',
  timezoneNote: 'Available across GST business hours for UAE clients.',
  cityLinks: [{ label: 'Dubai AWS AI/ML', href: '/dubai-aws-ai-ml-job-support/' }],
});

export const europeAwsAiMl = awsCountryPage({
  slug: 'europe-aws-ai-ml-job-support',
  country: 'Europe',
  demonym: 'European',
  title: 'Europe AWS AI/ML Job Support — Bedrock, SageMaker & AgentCore',
  description:
    'Real-time AWS AI/ML job support across Europe: Amazon Bedrock, SageMaker AI, AgentCore, RAG, and MLOps for engineers in the UK, Ireland, Germany, Netherlands, France, and the Nordics. Same-day, confidential.',
  h1: 'Europe AWS AI/ML Job Support — Amazon Bedrock, SageMaker & AgentCore',
  heroEyebrow: 'Europe AWS AI/ML Support — Updated August 2026',
  localContext:
    'Europe spans many strong AWS AI markets — UK and Ireland, Germany and the DACH region, the Netherlands, France, and the Nordics — with a shared emphasis on GDPR, EU AI Act awareness, data residency across EU regions, and enterprise governance. We support European AWS AI professionals across countries and time zones with Bedrock, SageMaker, AgentCore, and MLOps delivery.',
  timezoneNote: 'Available across GMT/BST and CET/CEST business hours for European clients.',
  cityLinks: [
    { label: 'AWS AI/ML job support UK', href: '/uk-aws-ai-ml-job-support/' },
    { label: 'AWS AI/ML job support Germany', href: '/germany-aws-ai-ml-job-support/' },
    { label: 'AWS AI/ML job support Ireland', href: '/ireland-aws-ai-ml-job-support/' },
    { label: 'AWS AI/ML job support Netherlands', href: '/netherlands-aws-ai-ml-job-support/' },
  ],
});

// ─── Tier-1 country-service page (USA Amazon Bedrock) ────────────────────────

export const usaAmazonBedrock: LandingPageConfig = awsPage({
  slug: 'usa-amazon-bedrock-job-support',
  title: 'USA Amazon Bedrock Job Support — GenAI Apps, RAG & Guardrails',
  description:
    'Real-time Amazon Bedrock job support in the USA: GenAI application development, RAG on Knowledge Bases, Guardrails, inference, and production Bedrock incidents for US teams. Same-day, confidential.',
  keywords: [
    'USA Amazon Bedrock job support', 'Bedrock support USA', 'Amazon Bedrock production USA',
    'Bedrock RAG support USA', 'Bedrock developer USA', 'AWS GenAI Bedrock USA',
  ],
  h1: 'USA Amazon Bedrock Job Support — Build & Fix Production GenAI',
  tagline:
    'Dedicated Amazon Bedrock support for US teams — application development, RAG, Guardrails, inference, and production incidents aligned to US hours.',
  heroEyebrow: 'USA Amazon Bedrock Support',
  painIntro:
    'A US Bedrock project hitting AccessDenied, throttling, or RAG quality problems in production, or a Bedrock interview for a US role? Get a US-hours-aligned Bedrock expert on the call.',
  heroVariant:
    'US employers lead on production Amazon Bedrock — GenAI applications, RAG on Knowledge Bases, Guardrails and responsible AI, AgentCore agents, and strict IAM/KMS/VPC security and cost governance across finance, healthcare, retail, media, and tech. We provide dedicated Bedrock job support for US teams: the Converse API, model selection, inference design (provisioned throughput, inference profiles, cross-region inference, intelligent prompt routing), Knowledge Bases and RAG, Guardrails, and production incident response — aligned to ET/CT/MT/PT.',
  geoLine: 'Amazon Bedrock support for US teams across New York, San Francisco, Seattle, Austin, Dallas, Boston, Chicago, and beyond.',
  timezoneNote: 'Available across ET, CT, MT, and PT business hours, plus 24/7 for urgent production incidents.',
  techSnippet:
    'We cover the Bedrock Converse API, inference profiles, cross-region inference, Knowledge Bases, Guardrails, Flows, Data Automation, and Bedrock security with IAM, KMS, and PrivateLink.',
  highlights: jobSupportHighlights,
  faqs: awsJobFaqs('US Amazon Bedrock teams', 'Bedrock application development, RAG, Guardrails, inference design, and production incident response aligned to US working hours'),
  useCasesSection: {
    title: 'USA Amazon Bedrock Situations We Help With',
    cases: [
      'A Bedrock app failing with AccessDenied or ThrottlingException in production',
      'Designing a production RAG assistant on Bedrock Knowledge Bases',
      'Adding Guardrails without blocking legitimate output',
      'Choosing provisioned throughput vs on-demand for US-scale traffic',
      'Cutting Bedrock token cost with intelligent prompt routing',
      'A Bedrock or AWS GenAI interview for a US role',
    ],
  },
  bottomCTAHeading: 'Need USA Amazon Bedrock Job Support or a Production Fix Now?',
  bottomCTABody:
    'In-house Amazon Bedrock experts aligned to US hours — application development, RAG, Guardrails, and production incidents. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [{ label: 'USA AWS AI/ML job support', href: '/usa-aws-ai-ml-job-support/' }, AWS_HUB_LINK],
    techLinks: [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      BEDROCK_HUB_LINK, KB_RAG_HUB_LINK, AGENTCORE_HUB_LINK,
      { label: 'New York AWS AI/ML', href: '/new-york-aws-ai-ml-job-support/' },
      { label: 'San Francisco AWS AI/ML', href: '/san-francisco-aws-ai-ml-job-support/' },
      EXISTING.awsBedrockJobSupport, EXISTING.genai,
    ],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsCountryPages: LandingPageConfig[] = [
  usaAwsAiMl,
  canadaAwsAiMl,
  ukAwsAiMl,
  irelandAwsAiMl,
  germanyAwsAiMl,
  netherlandsAwsAiMl,
  australiaAwsAiMl,
  singaporeAwsAiMl,
  uaeAwsAiMl,
  europeAwsAiMl,
  usaAmazonBedrock,
];
