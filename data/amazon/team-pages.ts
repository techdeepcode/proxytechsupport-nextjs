import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  roleInfoHighlights,
  amazonInfoFaqs,
  EXISTING,
  AMAZON_HUB_LINK,
  AMAZON_INTERVIEW_PROCESS_LINK,
  AMAZON_CODING_LINK,
  AMAZON_SYSTEM_DESIGN_LINK,
  AMAZON_LP_HUB_LINK,
  AMAZON_PROXY_INTERVIEW_LINK,
} from './shared';

/**
 * Amazon TEAM / business-unit interview cluster — informational guides for hiring
 * into specific Amazon orgs. Clean URLs. Content describes the general engineering
 * focus of each org (publicly documented) without fabricating internal detail, and
 * routes to the standard technical rounds + Amazon proxy interview support.
 */

interface TeamInput {
  slug: string;
  team: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  tagline: string;
  painIntro: string;
  heroVariant: string;
  sequenceLine: string;
  cases: string[];
  techLinks: LandingRelatedLink[];
}

function teamPage(input: TeamInput): LandingPageConfig {
  return amazonServicePage({
    slug: input.slug,
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    h1: input.h1,
    tagline: input.tagline,
    heroEyebrow: `Amazon ${input.team} Interview — Updated August 2026`,
    painIntro: input.painIntro,
    heroVariant: input.heroVariant,
    highlights: roleInfoHighlights,
    faqs: amazonInfoFaqs(`Amazon ${input.team} interview`, input.sequenceLine),
    useCasesSection: { title: `Inside the Amazon ${input.team} Interview`, cases: input.cases },
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_HUB_LINK, AMAZON_INTERVIEW_PROCESS_LINK],
      techLinks: input.techLinks,
      problemLink: AMAZON_LP_HUB_LINK,
      proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
      additionalLinks: [AMAZON_CODING_LINK, { label: 'Amazon SDE interview', href: '/amazon-sde-interview/' }],
    }),
  });
}

const SYSDESIGN = AMAZON_SYSTEM_DESIGN_LINK;

export const amazonTeamPages: LandingPageConfig[] = [
  teamPage({
    slug: 'amazon-ads-interview', team: 'Ads',
    title: 'Amazon Ads Interview: Scale, Systems, ML & Leadership Principles',
    description: 'Interviewing with Amazon Ads — large-scale systems, real-time serving, measurement and ML, plus the standard coding, system design and behavioral Leadership Principles rounds.',
    keywords: ['amazon ads interview', 'amazon advertising interview', 'amazon ads sde interview', 'amazon ads engineer interview', 'amazon ads system design', 'amazon ads ml interview'],
    h1: 'The Amazon Ads Interview',
    tagline: 'Amazon Ads — high-scale, low-latency ad systems, measurement and ML, on the standard SDE loop.',
    painIntro: 'Amazon Ads builds high-scale, low-latency advertising systems. Interviews use the standard loop, with design and (for some roles) ML questions flavored by real-time serving and measurement at scale.',
    heroVariant: 'Amazon Ads engineering spans ad serving and auctions, bidding, targeting and relevance, measurement and attribution, and large-scale data and ML — all at very high throughput and low latency. Interviews follow the standard Amazon loop: coding, system design (often flavored by real-time serving, scale and data), and behavioral Leadership Principles, with ML rounds for applied/ML roles. The exact loop varies by team, role and level. Prepare the standard rounds plus scale-oriented design.',
    sequenceLine: 'The Amazon Ads interview follows the standard loop — coding, system design (scale/real-time flavored) and behavioral Leadership Principles, with ML rounds for applicable roles.',
    cases: ['High-scale, low-latency system design', 'Ad serving, auctions and bidding concepts', 'Measurement, attribution and data at scale', 'ML rounds for applied/ML roles', 'Coding and data structures', 'Behavioral Leadership Principles'],
    techLinks: [SYSDESIGN, { label: 'Amazon distributed systems interview', href: '/amazon-distributed-systems-interview/' }],
  }),
  teamPage({
    slug: 'amazon-alexa-interview', team: 'Alexa',
    title: 'Amazon Alexa Interview: Devices, Speech, AI & Leadership Principles',
    description: 'Interviewing with Amazon Alexa — voice and conversational AI, devices and embedded systems, large-scale services, and increasingly LLMs, on the standard coding, design and behavioral loop.',
    keywords: ['amazon alexa interview', 'amazon alexa ai interview', 'amazon alexa engineer interview', 'amazon alexa sde interview', 'amazon voice ai interview', 'amazon alexa system design'],
    h1: 'The Amazon Alexa Interview',
    tagline: 'Amazon Alexa — voice and conversational AI, devices and services, increasingly LLM-driven.',
    painIntro: 'Alexa spans devices, speech and conversational AI, and huge backend services — now increasingly LLM-driven. Interviews use the standard loop, flavored by the org’s focus.',
    heroVariant: 'Amazon Alexa engineering spans speech and natural-language understanding, conversational AI (increasingly LLM-driven), devices and embedded systems, and large-scale backend services. Interviews follow the standard Amazon loop — coding, system design, and behavioral Leadership Principles — with ML/science or embedded flavor depending on the role. The exact loop varies by team, role and level. Prepare the standard rounds plus the relevant specialization.',
    sequenceLine: 'The Amazon Alexa interview follows the standard loop — coding, system design and behavioral Leadership Principles — flavored by speech/AI, devices or LLMs depending on the role.',
    cases: ['Large-scale service design', 'Speech and conversational AI concepts', 'LLM-driven experiences (for AI roles)', 'Devices and embedded systems (for device roles)', 'Coding and data structures', 'Behavioral Leadership Principles'],
    techLinks: [SYSDESIGN, { label: 'Amazon Generative AI interview', href: '/amazon-generative-ai-interview/' }],
  }),
  teamPage({
    slug: 'amazon-robotics-interview', team: 'Robotics',
    title: 'Amazon Robotics Interview: Systems, Controls, ML & Leadership Principles',
    description: 'Interviewing with Amazon Robotics — robotics systems, controls and perception, real-time and embedded software, and large-scale coordination, on the standard coding, design and behavioral loop.',
    keywords: ['amazon robotics interview', 'amazon robotics engineer interview', 'amazon robotics sde interview', 'amazon robotics ml interview', 'amazon robotics system design', 'amazon robotics questions'],
    h1: 'The Amazon Robotics Interview',
    tagline: 'Amazon Robotics — robotics systems, perception and controls, real-time software and coordination at scale.',
    painIntro: 'Amazon Robotics builds the automation behind fulfillment. Interviews use the standard loop, flavored by robotics systems, real-time software, and (for some roles) perception and ML.',
    heroVariant: 'Amazon Robotics engineering spans robotics systems and controls, perception, real-time and embedded software, fleet coordination, and large-scale orchestration. Interviews follow the standard Amazon loop — coding, system design (often real-time/coordination flavored), and behavioral Leadership Principles — with ML/perception rounds for applicable roles. The exact loop varies by team, role and level. Prepare the standard rounds plus your specialization.',
    sequenceLine: 'The Amazon Robotics interview follows the standard loop — coding, system design and behavioral Leadership Principles — flavored by robotics/real-time systems and perception/ML for applicable roles.',
    cases: ['Real-time and embedded software concepts', 'Fleet coordination and orchestration design', 'Perception and ML (for applicable roles)', 'Coding and data structures', 'System design at scale', 'Behavioral Leadership Principles'],
    techLinks: [SYSDESIGN, { label: 'Amazon C++ interview', href: '/amazon-cpp-interview/' }],
  }),
  teamPage({
    slug: 'amazon-prime-video-interview', team: 'Prime Video',
    title: 'Amazon Prime Video Interview: Streaming, Scale & Leadership Principles',
    description: 'Interviewing with Amazon Prime Video — video streaming at scale, playback and delivery, personalization, and large-scale services, on the standard coding, system design and behavioral loop.',
    keywords: ['amazon prime video interview', 'prime video engineer interview', 'amazon prime video sde interview', 'amazon streaming interview', 'prime video system design', 'amazon prime video questions'],
    h1: 'The Amazon Prime Video Interview',
    tagline: 'Amazon Prime Video — streaming, playback and delivery at scale, personalization and services.',
    painIntro: 'Prime Video delivers video to a global audience. Interviews use the standard loop, with system design flavored by streaming, delivery and scale.',
    heroVariant: 'Amazon Prime Video engineering spans video streaming and playback, content delivery and CDNs, encoding and QoE, personalization and recommendations, and large-scale services. Interviews follow the standard Amazon loop — coding, system design (often streaming/delivery flavored), and behavioral Leadership Principles. The exact loop varies by team, role and level. Prepare the standard rounds plus streaming-oriented design.',
    sequenceLine: 'The Amazon Prime Video interview follows the standard loop — coding, system design (streaming/delivery flavored) and behavioral Leadership Principles.',
    cases: ['Streaming and playback system design', 'Content delivery and CDN concepts', 'Encoding and quality of experience', 'Personalization and recommendations', 'Coding and data structures', 'Behavioral Leadership Principles'],
    techLinks: [SYSDESIGN, { label: 'Amazon distributed systems interview', href: '/amazon-distributed-systems-interview/' }],
  }),
  teamPage({
    slug: 'amazon-kuiper-interview', team: 'Kuiper',
    title: 'Amazon Kuiper Interview: Systems, Networking, Embedded & Leadership Principles',
    description: 'Interviewing with Amazon’s Project Kuiper — satellite and ground systems, networking, embedded and real-time software, and large-scale infrastructure, on the standard coding, design and behavioral loop.',
    keywords: ['amazon kuiper interview', 'project kuiper interview', 'amazon kuiper engineer interview', 'kuiper sde interview', 'amazon kuiper system design', 'amazon kuiper questions'],
    h1: 'The Amazon Kuiper Interview',
    tagline: 'Project Kuiper — satellite and ground systems, networking, embedded and real-time software at scale.',
    painIntro: 'Project Kuiper builds satellite broadband systems. Interviews use the standard loop, flavored by networking, embedded/real-time software and large-scale infrastructure.',
    heroVariant: 'Amazon Project Kuiper engineering spans satellite and ground systems, networking and protocols, embedded and real-time software, and large-scale infrastructure and services. Interviews follow the standard Amazon loop — coding, system design (networking/real-time flavored), and behavioral Leadership Principles — with embedded/systems depth for applicable roles. The exact loop varies by team, role and level. Prepare the standard rounds plus your specialization.',
    sequenceLine: 'The Amazon Kuiper interview follows the standard loop — coding, system design (networking/real-time flavored) and behavioral Leadership Principles — with embedded/systems depth for applicable roles.',
    cases: ['Networking and protocols', 'Embedded and real-time software', 'Large-scale infrastructure design', 'Systems depth for applicable roles', 'Coding and data structures', 'Behavioral Leadership Principles'],
    techLinks: [SYSDESIGN, { label: 'Amazon Network Development Engineer interview', href: '/amazon-network-development-engineer-interview/' }],
  }),
  teamPage({
    slug: 'amazon-devices-interview', team: 'Devices',
    title: 'Amazon Devices Interview: Embedded, Firmware, Systems & Leadership Principles',
    description: 'Interviewing with Amazon Devices — embedded and firmware, connectivity, systems and services behind Echo, Fire and Kindle, on the standard coding, system design and behavioral loop.',
    keywords: ['amazon devices interview', 'amazon devices engineer interview', 'amazon embedded interview', 'amazon firmware interview', 'amazon devices sde interview', 'amazon devices system design'],
    h1: 'The Amazon Devices Interview',
    tagline: 'Amazon Devices — embedded and firmware, connectivity, and the services behind Echo, Fire and Kindle.',
    painIntro: 'Amazon Devices builds hardware and the software that powers it. Interviews use the standard loop, flavored by embedded/firmware and device-connected services.',
    heroVariant: 'Amazon Devices engineering spans embedded software and firmware, connectivity and protocols, low-level systems, and the cloud services behind devices like Echo, Fire TV and Kindle. Interviews follow the standard Amazon loop — coding, system design, and behavioral Leadership Principles — with embedded/C++ depth for device-software roles. The exact loop varies by team, role and level. Prepare the standard rounds plus your specialization.',
    sequenceLine: 'The Amazon Devices interview follows the standard loop — coding, system design and behavioral Leadership Principles — with embedded/firmware depth for device-software roles.',
    cases: ['Embedded software and firmware concepts', 'Connectivity and protocols', 'Low-level systems and memory', 'Cloud services behind devices', 'Coding and data structures', 'Behavioral Leadership Principles'],
    techLinks: [{ label: 'Amazon C++ interview', href: '/amazon-cpp-interview/' }, SYSDESIGN],
  }),
];
