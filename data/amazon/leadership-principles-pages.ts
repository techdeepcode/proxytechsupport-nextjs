import type { LandingPageConfig } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  roleInfoHighlights,
  amazonLpFaqs,
  amazonInfoFaqs,
  AMAZON_HUB_LINK,
  AMAZON_LP_HUB_LINK,
  AMAZON_STAR_LINK,
  AMAZON_BEHAVIORAL_LINK,
  AMAZON_INTERVIEW_PROCESS_LINK,
  AMAZON_PROXY_INTERVIEW_LINK,
  AMAZON_BAR_RAISER_LINK,
} from './shared';

/**
 * Amazon Leadership Principles cluster — one hub + individual principle pages.
 * INFORMATIONAL type (clean URLs, no "proxy" in the slug). Behavioral content is
 * grounded in Amazon's published Leadership Principles as summarized in the plan's
 * source material. Each page routes to Amazon proxy interview support + STAR method.
 */

interface LpInput {
  slug: string;
  name: string;
  themes: string; // core behavioral themes (what the principle is about)
  evaluates: string; // what strong evidence looks like
  roles: string; // which roles emphasize this LP
  related: { label: string; href: string }[]; // 2 related LP links
}

function lpPage(input: LpInput): LandingPageConfig {
  const { slug, name, themes, evaluates, roles, related } = input;
  return amazonServicePage({
    slug,
    title: `Amazon "${name}" Leadership Principle: Interview Questions & STAR Examples`,
    description: `How Amazon evaluates the "${name}" Leadership Principle in interviews — what it means, strong vs. weak evidence, sample behavioral questions, STAR story guidance, and common mistakes. Independent Amazon interview preparation.`,
    keywords: [
      `amazon ${name.toLowerCase()} interview`, `${name.toLowerCase()} leadership principle`,
      `amazon ${name.toLowerCase()} questions`, `amazon ${name.toLowerCase()} star`,
      'amazon leadership principles interview', 'amazon behavioral interview',
    ],
    h1: `Amazon "${name}" — Leadership Principle Interview Guide`,
    tagline: `What the "${name}" Leadership Principle means at Amazon, what interviewers look for, and how to build a truthful STAR story that demonstrates it.`,
    heroEyebrow: `Amazon Leadership Principle — ${name}`,
    painIntro: `Preparing a story for "${name}"? Amazon assesses this principle across the whole loop with specific past examples and deep follow-ups. This guide explains what strong evidence looks like and how to structure your answer so it survives the probes.`,
    heroVariant: `"${name}" is about ${themes} In interviews, strong evidence looks like ${evaluates} Weak answers stay abstract, use "we" with no personal ownership, skip the result, or collapse under follow-up. Build your example as STAR — brief Situation, your Task/ownership, a detailed Action (reasoning, alternatives, trade-offs, what YOU did), and a measurable Result plus a learning. This principle is often emphasized for ${roles}. We help you select and structure truthful stories; we never fabricate experience or metrics, and you attend your own interview.`,
    highlights: roleInfoHighlights,
    faqs: amazonLpFaqs(name),
    useCasesSection: {
      title: `Building a Strong "${name}" Story`,
      cases: [
        'Pick a real example where you personally owned the decision or outcome',
        'Keep the Situation brief — set just enough context',
        'Make the Action the largest part: reasoning, alternatives, trade-offs, what YOU did',
        'Quantify the Result honestly — no invented metrics',
        'Prepare for follow-ups: why this approach, what were the alternatives, what would you change',
        'Add a short learning that shows growth',
      ],
    },
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_LP_HUB_LINK, AMAZON_HUB_LINK],
      techLinks: related,
      problemLink: AMAZON_STAR_LINK,
      proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
      additionalLinks: [AMAZON_BEHAVIORAL_LINK, AMAZON_BAR_RAISER_LINK, AMAZON_INTERVIEW_PROCESS_LINK],
    }),
  });
}

// ─── LP hub ──────────────────────────────────────────────────────────────────

export const amazonLeadershipPrinciplesHub: LandingPageConfig = amazonServicePage({
  slug: 'amazon-leadership-principles-interview',
  title: 'Amazon Leadership Principles Interview: All 16 Principles & STAR Guide',
  description:
    'A complete guide to the Amazon Leadership Principles interview — what each of the 16 principles means, what interviewers evaluate, sample behavioral questions, and how to structure STAR answers. Independent Amazon interview preparation.',
  keywords: [
    'amazon leadership principles interview', 'amazon leadership principles', 'amazon behavioral interview',
    'amazon lp interview', 'amazon leadership principles questions', 'amazon star method',
  ],
  h1: 'The Amazon Leadership Principles Interview',
  tagline:
    'How Amazon uses its Leadership Principles to evaluate candidates across the loop — plus a link to a detailed guide for each principle and how to build STAR stories.',
  heroEyebrow: 'Amazon Leadership Principles — Updated August 2026',
  painIntro:
    'The Leadership Principles are the backbone of every Amazon interview. Behavioral questions run throughout the loop, and a trained Bar Raiser checks whether your examples meet the bar. This hub explains how they are assessed and links to a guide for each principle.',
  heroVariant:
    'Amazon evaluates its Leadership Principles through specific past examples and deep follow-up questions — testing ownership, judgment, customer focus, and measurable results, not rehearsed slogans. This hub links to individual guides for Customer Obsession, Ownership, Invent and Simplify, Are Right A Lot, Learn and Be Curious, Hire and Develop the Best, Insist on the Highest Standards, Think Big, Bias for Action, Frugality, Earn Trust, Dive Deep, Have Backbone Disagree and Commit, Deliver Results, Strive to Be Earth’s Best Employer, and Success and Scale Bring Broad Responsibility. Prepare each with a truthful STAR story; then rehearse with Amazon proxy interview support.',
  highlights: roleInfoHighlights,
  faqs: amazonInfoFaqs('Amazon Leadership Principles interview', 'Amazon evaluates its Leadership Principles across the whole interview loop through specific past examples and follow-up questions, testing ownership, judgment, customer focus and measurable results.'),
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_INTERVIEW_PROCESS_LINK],
    techLinks: [AMAZON_STAR_LINK, AMAZON_BEHAVIORAL_LINK],
    problemLink: AMAZON_BAR_RAISER_LINK,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [
      { label: 'Customer Obsession', href: '/amazon-customer-obsession-interview/' },
      { label: 'Ownership', href: '/amazon-ownership-interview/' },
      { label: 'Dive Deep', href: '/amazon-dive-deep-interview/' },
      { label: 'Deliver Results', href: '/amazon-deliver-results-interview/' },
      { label: 'Have Backbone; Disagree and Commit', href: '/amazon-have-backbone-disagree-and-commit-interview/' },
      { label: 'Bias for Action', href: '/amazon-bias-for-action-interview/' },
    ],
  }),
});

// ─── Individual Leadership Principles ────────────────────────────────────────

const LP = (l: string, h: string) => ({ label: l, href: h });

export const amazonLpPages: LandingPageConfig[] = [
  lpPage({
    slug: 'amazon-customer-obsession-interview', name: 'Customer Obsession',
    themes: 'starting with customers and working backwards, earning and keeping their trust, putting customer value first, and building sustainable economics from real customer feedback.',
    evaluates: 'a decision where you worked backwards from a real customer need, made a trade-off that favored long-term customer value, and can show the measurable outcome.',
    roles: 'SDE, Solutions Architect, Product and TPM roles',
    related: [LP('Ownership', '/amazon-ownership-interview/'), LP('Deliver Results', '/amazon-deliver-results-interview/')],
  }),
  lpPage({
    slug: 'amazon-ownership-interview', name: 'Ownership',
    themes: 'thinking long-term, acting beyond your own team boundaries, never saying "that’s not my job", and driving problems to resolution so every issue has an owner.',
    evaluates: 'a time you took end-to-end responsibility for something outside your strict remit, thought company-wide, and drove it to a durable resolution.',
    roles: 'every technical role, especially SDE II/III and Senior SDE',
    related: [LP('Dive Deep', '/amazon-dive-deep-interview/'), LP('Deliver Results', '/amazon-deliver-results-interview/')],
  }),
  lpPage({
    slug: 'amazon-invent-and-simplify-interview', name: 'Invent and Simplify',
    themes: 'innovation and external awareness, continuous reinvention, and simplifying — not being limited by "not invented here".',
    evaluates: 'an invention or simplification you drove, why the simpler design was better, and the impact it had on customers or the team.',
    roles: 'SDE, Applied Scientist and Solutions Architect roles',
    related: [LP('Think Big', '/amazon-think-big-interview/'), LP('Are Right, A Lot', '/amazon-are-right-a-lot-interview/')],
  }),
  lpPage({
    slug: 'amazon-are-right-a-lot-interview', name: 'Are Right, A Lot',
    themes: 'judgment and good instincts, working through ambiguity, seeking diverse perspectives, actively disconfirming your own beliefs, and separating signal from noise.',
    evaluates: 'a hard call under ambiguity where you sought disconfirming evidence, changed your mind when the data warranted it, and were ultimately right for the right reasons.',
    roles: 'Senior SDE, SDM, Solutions Architect and Applied Scientist roles',
    related: [LP('Dive Deep', '/amazon-dive-deep-interview/'), LP('Have Backbone; Disagree and Commit', '/amazon-have-backbone-disagree-and-commit-interview/')],
  }),
  lpPage({
    slug: 'amazon-learn-and-be-curious-interview', name: 'Learn and Be Curious',
    themes: 'continuous learning, self-awareness, identifying your own development areas, building a plan, and actually changing.',
    evaluates: 'a concrete example where you identified a gap, learned a new domain or skill deliberately, and applied it to real work.',
    roles: 'Applied Scientist, Research Scientist and early-career SDE roles',
    related: [LP('Dive Deep', '/amazon-dive-deep-interview/'), LP('Invent and Simplify', '/amazon-invent-and-simplify-interview/')],
  }),
  lpPage({
    slug: 'amazon-hire-and-develop-the-best-interview', name: 'Hire and Develop the Best',
    themes: 'raising the hiring bar, recognizing talent, developing and coaching people, and taking management responsibility for growth.',
    evaluates: 'a time you raised the bar in hiring or meaningfully developed someone — with the outcome for the person and the team.',
    roles: 'SDM and senior/lead roles',
    related: [LP('Earn Trust', '/amazon-earn-trust-interview/'), LP('Insist on the Highest Standards', '/amazon-insist-on-the-highest-standards-interview/')],
  }),
  lpPage({
    slug: 'amazon-insist-on-the-highest-standards-interview', name: 'Insist on the Highest Standards',
    themes: 'high expectations and quality, preventing defects from moving downstream, and fixing root causes permanently.',
    evaluates: 'a time you held a high bar under pressure, refused to ship a defect, and fixed the underlying cause so it stayed fixed.',
    roles: 'SDE, SDM and QAE roles',
    related: [LP('Dive Deep', '/amazon-dive-deep-interview/'), LP('Deliver Results', '/amazon-deliver-results-interview/')],
  }),
  lpPage({
    slug: 'amazon-think-big-interview', name: 'Think Big',
    themes: 'setting bold direction, looking around corners, anticipating technology and customer change, and pursuing large-scale outcomes.',
    evaluates: 'a bold direction you set or influenced, how you looked around corners, and the large-scale outcome it enabled.',
    roles: 'Senior SDE, SDE III, Solutions Architect and TPM roles',
    related: [LP('Invent and Simplify', '/amazon-invent-and-simplify-interview/'), LP('Deliver Results', '/amazon-deliver-results-interview/')],
  }),
  lpPage({
    slug: 'amazon-bias-for-action-interview', name: 'Bias for Action',
    themes: 'speed and calculated risk, distinguishing one-way from two-way doors, making fast reversible decisions, and balancing speed with standards.',
    evaluates: 'a moment you moved fast on a reversible (two-way door) decision, took a calculated risk, and delivered — without cutting the standards that mattered.',
    roles: 'SDE II, startup-style teams, and on-call/operational roles',
    related: [LP('Ownership', '/amazon-ownership-interview/'), LP('Deliver Results', '/amazon-deliver-results-interview/')],
  }),
  lpPage({
    slug: 'amazon-frugality-interview', name: 'Frugality',
    themes: 'accomplishing more with less, using constraints to fuel invention, and avoiding unnecessary cost and headcount.',
    evaluates: 'a time a constraint forced a more inventive, cheaper solution that still delivered the outcome.',
    roles: 'SDE, Solutions Architect (cost) and Data roles',
    related: [LP('Invent and Simplify', '/amazon-invent-and-simplify-interview/'), LP('Deliver Results', '/amazon-deliver-results-interview/')],
  }),
  lpPage({
    slug: 'amazon-earn-trust-interview', name: 'Earn Trust',
    themes: 'listening, speaking candidly, respectfully challenging, being self-critical, using data, and delivering on commitments.',
    evaluates: 'a time you earned trust by being candid and self-critical, backing a position with data, and delivering what you promised.',
    roles: 'SDM, TPM, Solutions Architect and senior roles',
    related: [LP('Have Backbone; Disagree and Commit', '/amazon-have-backbone-disagree-and-commit-interview/'), LP('Are Right, A Lot', '/amazon-are-right-a-lot-interview/')],
  }),
  lpPage({
    slug: 'amazon-dive-deep-interview', name: 'Dive Deep',
    themes: 'operating at all levels, inspecting details, auditing, favoring metrics over anecdotes, and running root-cause investigations.',
    evaluates: 'a deep investigation where you went past the surface, used metrics and data, and found and fixed the true root cause.',
    roles: 'SDE II/III, Applied Scientist, Data Engineer and SRE-style roles',
    related: [LP('Ownership', '/amazon-ownership-interview/'), LP('Insist on the Highest Standards', '/amazon-insist-on-the-highest-standards-interview/')],
  }),
  lpPage({
    slug: 'amazon-have-backbone-disagree-and-commit-interview', name: 'Have Backbone; Disagree and Commit',
    themes: 'respectfully challenging decisions, truth-seeking, avoiding social-compromise decisions, and fully committing once a decision is made.',
    evaluates: 'a time you respectfully disagreed with a decision, made your case with data, and then committed fully to the chosen path.',
    roles: 'Senior SDE, SDM, TPM and Solutions Architect roles',
    related: [LP('Earn Trust', '/amazon-earn-trust-interview/'), LP('Are Right, A Lot', '/amazon-are-right-a-lot-interview/')],
  }),
  lpPage({
    slug: 'amazon-deliver-results-interview', name: 'Deliver Results',
    themes: 'managing key inputs, delivering with quality and timeliness, persisting through setbacks, and following delivery with iteration.',
    evaluates: 'a time you delivered a hard result on time and quality by managing the right inputs and pushing through obstacles.',
    roles: 'every technical role',
    related: [LP('Ownership', '/amazon-ownership-interview/'), LP('Bias for Action', '/amazon-bias-for-action-interview/')],
  }),
  lpPage({
    slug: 'amazon-earths-best-employer-interview', name: 'Strive to Be Earth’s Best Employer',
    themes: 'safety, performance, employee growth and empowerment, and taking management responsibility for people.',
    evaluates: 'a time you improved safety, growth, or empowerment for the people around you, with a concrete outcome.',
    roles: 'SDM and people-leadership roles',
    related: [LP('Hire and Develop the Best', '/amazon-hire-and-develop-the-best-interview/'), LP('Earn Trust', '/amazon-earn-trust-interview/')],
  }),
  lpPage({
    slug: 'amazon-broad-responsibility-interview', name: 'Success and Scale Bring Broad Responsibility',
    themes: 'considering secondary impacts, community and responsibility at scale, and leaving things better than you found them.',
    evaluates: 'a decision where you weighed second-order effects and broader responsibility, not just the immediate result.',
    roles: 'senior, principal and leadership roles',
    related: [LP('Think Big', '/amazon-think-big-interview/'), LP('Ownership', '/amazon-ownership-interview/')],
  }),
];

// ─── Category export ─────────────────────────────────────────────────────────

export const amazonLeadershipPrinciplesPages: LandingPageConfig[] = [
  amazonLeadershipPrinciplesHub,
  ...amazonLpPages,
];
