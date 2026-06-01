import type { LandingPageConfig, LandingHighlight, LandingFaqItem } from './landing-pages';

const BASE_URL = 'https://proxytechsupport.com';
const LASTMOD = '2026-05-28T10:00:00.000Z';

// ─── UiPath-specific highlights ─────────────────────────────────────────────

const uipathHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time UiPath Job Support',
    description:
      'Live expert assistance during your working hours — Studio workflows, Orchestrator issues, REFramework debugging, queue problems, Document Understanding, and production bot failures resolved alongside you.',
  },
  {
    title: 'UiPath Proxy Interview Assistance',
    description:
      'Expert-backed mock interviews and real-time live guidance during UiPath Developer, RPA Developer, and healthcare automation consultant interviews — scenario questions, REFramework design, Citrix, queues, APIs.',
  },
  {
    title: 'UiPath Interview Scheduling Support',
    description:
      'Profile engineering, UiPath keyword targeting, LinkedIn optimization, and recruiter outreach to generate UiPath and RPA developer interview calls across USA, Canada, UK, and Europe.',
  },
];

const uipathHealthcareHighlights: LandingHighlight[] = [
  {
    title: 'UiPath Healthcare Automation Support',
    description:
      'Real-time expert help for UiPath developers working on Epic, clinical workflows, patient data automation, PHI-safe logging, and healthcare RPA production support.',
  },
  {
    title: 'Epic Automation Interview Guidance',
    description:
      'Live interview support for UiPath roles involving Epic Hyperspace, Hyperdrive, FHIR APIs, Interconnect, ClinDoc, MyChart, and healthcare document processing scenario questions.',
  },
  {
    title: 'HIPAA / PHI Compliance Awareness',
    description:
      'Support for building HIPAA-aware RPA bots — secure logging, data masking, credential management, audit trails, and PHI leak prevention in UiPath workflows.',
  },
];

// ─── FAQ generators ──────────────────────────────────────────────────────────

function uipathJobSupportFaqs(context: string): LandingFaqItem[] {
  return [
    {
      question: `What UiPath job support do you provide${context ? ' for ' + context + ' roles' : ''}?`,
      answer: `We provide real-time UiPath job support for RPA developers and automation professionals${context ? ' in ' + context : ''}. Our in-house UiPath experts join your working hours and help with Studio workflows, Orchestrator configuration, REFramework state machine issues, queue dispatcher/performer design, Document Understanding pipelines, Citrix automation, API integrations, exception handling, and production bot failures. We cover UiPath 2026 platform including agentic automation, Maestro, and Test Cloud. Same-day start available.`,
    },
    {
      question: 'Can you help with UiPath production bot failures and Orchestrator issues?',
      answer:
        'Yes. Production RPA support is one of our core strengths. We help resolve critical bot failures, queue backlogs, Orchestrator job errors, selector instability, transaction processing failures, and performance degradation — often within the same working session. We support SIT, UAT, hypercare, and ongoing production maintenance.',
    },
    {
      question: 'Do you cover REFramework, queues, and dispatcher/performer design?',
      answer:
        'Yes. REFramework is a core part of our UiPath support. We help with state machine design (Init, Get Transaction Data, Process Transaction, End Process), queue architecture, dispatcher/performer splitting, retry logic, business vs system exception handling, config file management, and production-stable REFramework implementations.',
    },
    {
      question: 'Is the service confidential?',
      answer:
        'Absolutely. All UiPath job support sessions are completely confidential. We do not share client or employer information with any third party. NDAs are available on request. We treat every engagement with full professional discretion.',
    },
    {
      question: 'How quickly can I get UiPath support started?',
      answer:
        'In most cases we can start the same day you contact us. We maintain an in-house UiPath expert team — no sub-contracting. Reach out via WhatsApp and we will match you with the right RPA expert immediately.',
    },
  ];
}

function uipathProxyFaqs(context: string): LandingFaqItem[] {
  return [
    {
      question: `What UiPath proxy interview support do you provide${context ? ' for ' + context : ''}?`,
      answer: `We provide real-time, discreet UiPath proxy interview support${context ? ' for ' + context + ' interviews' : ''}. Our in-house UiPath experts join your live interview session and guide you through scenario-based questions covering REFramework design, dispatcher/performer architecture, queue retries, exception handling, Citrix automation, dynamic selectors, Document Understanding, API vs UI strategy, Epic/healthcare workflows, and agentic automation with Maestro. We cover UiPath Developer, Senior UiPath Developer, RPA Solution Designer, and healthcare automation roles.`,
    },
    {
      question: 'What UiPath interview scenarios do you cover?',
      answer:
        'We cover all common UiPath scenario questions: How do you design dispatcher/performer? How do you handle queue retries? How do you debug failed Orchestrator jobs? How do you automate Citrix applications? How do you handle dynamic selectors? When do you use API instead of UI automation? How do you protect PHI in healthcare bots? How do you use Document Understanding? How do you design human validation? How do you stabilize production bots? How do you explain agentic automation in UiPath?',
    },
    {
      question: 'Can you help with UiPath healthcare and Epic automation interview questions?',
      answer:
        'Yes. We cover UiPath roles involving Epic Hyperspace, Hyperdrive, FHIR APIs, Interconnect, ClinDoc, MyChart, patient chart automation, healthcare document classification, PHI/HIPAA awareness, and API vs UI strategy for Epic workflows. These are increasingly common in healthcare RPA interviews.',
    },
    {
      question: 'Is UiPath proxy interview support confidential?',
      answer:
        'Yes. All proxy interview sessions are fully confidential. We never disclose client identities, employer names, or interview details. Our experts provide discreet real-time guidance calibrated to your specific interview format.',
    },
    {
      question: 'How do I get started with UiPath proxy interview support?',
      answer:
        'Contact us on WhatsApp with your interview date, the role (e.g. UiPath Developer, RPA Solution Designer, Healthcare Automation Developer), employer type, and the modules/topics likely to be covered. We will assign the right UiPath expert and align on your background before the interview.',
    },
  ];
}

function uipathScheduledFaqs(context: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help UiPath professionals get interview calls${context ? ' in ' + context : ''}?`,
      answer: `We help UiPath developers and RPA professionals${context ? ' in ' + context : ''} get interview calls through profile engineering, UiPath keyword targeting, LinkedIn positioning, and recruiter outreach. We optimize your resume and LinkedIn profile for UiPath Developer, Senior RPA Developer, RPA Solution Designer, UiPath Healthcare Developer, and UiPath Production Support roles — using the exact keywords UiPath-focused recruiters search for. We also support active job portal optimization and follow-up outreach strategy.`,
    },
    {
      question: 'What UiPath profiles and specializations do you support?',
      answer:
        'We support all UiPath and RPA profiles: UiPath Developer, Senior UiPath Developer, RPA Developer, RPA Solution Designer, UiPath Healthcare Automation Developer, UiPath Epic Developer, UiPath Document Understanding Developer, UiPath Production Support Engineer, UiPath Automation Tester, UiPath Integration Developer, and UiPath Agentic Automation Consultant. We position your profile against the 2026 RPA job market demand.',
    },
    {
      question: 'Can you help me if I have limited UiPath experience?',
      answer:
        'Yes. We work with professionals at all stages — from those entering RPA consulting, to experienced developers moving into agentic automation or healthcare, to senior architects looking for lead roles. We align your existing skills with UiPath terminology and current job market expectations.',
    },
    {
      question: 'Do you help with contract and full-time UiPath roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099) and full-time employment searches across USA, Canada, UK, and Europe. We understand the RPA staffing landscape — including direct client roles, consulting positions, and UiPath partner firms — and position your profile accordingly.',
    },
    {
      question: 'How quickly can I start getting UiPath interview calls?',
      answer:
        'Profile changes and outreach can begin the same day. Most clients start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current UiPath job market in their region.',
    },
  ];
}

function uipathGeoFaqs(country: string, timezone: string): LandingFaqItem[] {
  return [
    {
      question: `What UiPath job support and proxy interview assistance do you provide for developers in ${country}?`,
      answer: `We provide real-time UiPath job support and proxy interview assistance for RPA professionals in ${country}. Our experts join your working hours and help with Studio, Orchestrator, REFramework, queues, Document Understanding, Citrix, API integrations, Epic/healthcare workflows, and production bot failures. We also provide live interview guidance during UiPath and RPA Developer interviews for roles in ${country}. Same-day start available.`,
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases we can start the same day you contact us. We maintain an in-house UiPath and RPA expert team with no sub-contracting. Reach out on WhatsApp and we will assign the right expert immediately.',
    },
    {
      question: 'Do you provide UiPath proxy interview support for live interviews?',
      answer: `Yes. Our proxy interview support provides real-time, discreet guidance during your live UiPath technical interview. Our expert joins your session and helps with REFramework design, dispatcher/performer questions, queue architecture, Citrix automation, Document Understanding, API vs UI strategy, Epic/healthcare scenarios, and agentic automation. This service has helped RPA professionals land roles across ${country}, USA, UK, and globally.`,
    },
    {
      question: 'Is the service confidential?',
      answer:
        'Absolutely. All sessions are completely confidential. We never share your details with third parties. We sign NDAs on request and treat every engagement with full professional discretion.',
    },
    {
      question: `What hours do you work for ${country} clients?`,
      answer: `We align with ${timezone} business hours and are also available 24/7 for urgent requirements. Whether you need early-morning UiPath support before a standup, real-time interview guidance during a scheduled interview, or late-evening help before a production release, we are always available.`,
    },
  ];
}

// ─── Core Hub Pages ──────────────────────────────────────────────────────────

export const uipathJobSupport: LandingPageConfig = {
  slug: 'uipath-job-support',
  title: 'UiPath Job Support — Real-Time RPA Developer Assistance',
  description:
    'Stuck on UiPath Studio, Orchestrator, REFramework, or production bots? Real-time UiPath job support from expert RPA developers. Healthcare, Citrix, agentic workflows. Same-day start.',
  canonical: `${BASE_URL}/uipath-job-support/`,
  keywords: [
    'UiPath job support', 'RPA job support', 'UiPath real-time support', 'UiPath production support',
    'UiPath developer support', 'UiPath Studio support', 'Orchestrator support', 'REFramework support',
    'UiPath Document Understanding support', 'UiPath Citrix automation help', 'UiPath proxy job support',
    'UiPath office hour support', 'RPA production support', 'UiPath healthcare automation support',
  ],
  ogTitle: 'UiPath Job Support — Real-Time RPA & Automation Expert Help',
  ogDescription: 'Expert UiPath job support for Studio, Orchestrator, REFramework, queues, Document Understanding, Epic healthcare automation, and agentic workflows. Same-day start.',
  h1: 'UiPath Job Support: Real-Time RPA Developer Assistance',
  tagline: 'Expert UiPath support during your working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, Citrix, healthcare/Epic automation, and modern agentic workflows.',
  heroEyebrow: 'UiPath Agentic Automation, Maestro & Healthcare RPA',
  painIntro:
    'Stuck in UiPath production issues during office hours? Dealing with failing REFramework bots, queue backlogs, selector instability, or Orchestrator job failures with no one to turn to? Real-time UiPath job support from our in-house RPA experts means you are never blocked alone.',
  heroVariant:
    'UiPath development in 2026 spans far more than basic Studio workflows. Enterprise RPA now requires REFramework mastery, queue dispatcher/performer architecture, Document Understanding pipelines, Citrix automation strategies, Epic/healthcare workflow awareness, REST API integrations with OAuth, and increasingly — agentic automation with UiPath Maestro and AI agents. Whether you are fighting a production bot failure, designing a scalable transaction architecture, or navigating a healthcare automation project with PHI compliance requirements, our in-house UiPath experts work alongside you in real time.',
  geoLine: 'Supporting UiPath and RPA developers across USA, Canada, UK, Europe, Germany, Netherlands, France, Sweden, Switzerland, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across all US, UK, Canada, Europe, and Asia-Pacific time zones.',
  techSnippet: 'We support UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Test Suite, Test Cloud, UiPath Apps, Maestro, agentic automation, Epic Hyperspace/Hyperdrive, FHIR APIs, Citrix automation, and REST API integrations.',
  highlights: uipathHighlights,
  faqs: uipathJobSupportFaqs(''),
  useCasesSection: {
    title: 'Common UiPath Situations We Help With',
    cases: [
      'Debugging REFramework state machine failures, unexpected Init or End Process state transitions',
      'Fixing queue dispatcher/performer design issues and transaction retry logic problems',
      'Resolving Orchestrator job failures, robot disconnections, and asset/credential access errors',
      'Handling Document Understanding classification, extraction, and human validation pipeline issues',
      'Fixing Citrix automation selector instability, CV activity failures, and remote desktop UI issues',
      'Supporting production bot stability, SLA monitoring, failed transaction analysis, and hypercare',
      'Building API-first automation strategies with REST APIs, OAuth, and HTTP Request activity',
      'Navigating Epic Hyperspace/Hyperdrive automation constraints and PHI/HIPAA compliance requirements',
    ],
  },
  proxySection: {
    title: 'UiPath Proxy Interview Support — Live Interview Guidance',
    intro:
      'UiPath Developer interviews in 2026 are scenario-heavy — covering REFramework design, queue architecture, Citrix automation, Document Understanding, API vs UI strategy, Epic healthcare workflows, and agentic automation. Our experts provide real-time, discreet guidance during your live interview so you can demonstrate the depth enterprise UiPath teams expect.',
    points: [
      'Live guidance during REFramework, dispatcher/performer, and queue architecture scenario questions',
      'Real-time support during Citrix automation, dynamic selectors, and CV activities discussions',
      'Help explaining Document Understanding, classification, extraction, and human validation design',
      'Support for healthcare/Epic automation interview scenarios including PHI/HIPAA awareness',
      'Guidance on agentic automation, Maestro orchestration, and UiPath AI agent design questions',
      'Mock interview sessions for UiPath Developer, Senior RPA Developer, and Solution Designer roles',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
      { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
    ],
    techLinks: [
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'RPA job support', href: '/rpa-job-support/' },
      { label: 'UiPath REFramework support', href: '/uipath-reframework-job-support/' },
      { label: 'UiPath Document Understanding support', href: '/uipath-document-understanding-job-support/' },
    ],
    problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
    proxyLink: { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    additionalLinks: [
      { label: 'UiPath healthcare job support', href: '/uipath-healthcare-job-support/' },
      { label: 'UiPath agentic automation support', href: '/uipath-agentic-automation-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const uipathProxyInterviewSupport: LandingPageConfig = {
  slug: 'uipath-proxy-interview-support',
  title: 'UiPath Proxy Interview Support — Live RPA Interview Assistance',
  description:
    'UiPath interview scheduled? Real-time proxy support for Developer, RPA Solution Designer, and healthcare roles. REFramework, queues, Citrix, Document Understanding, Epic. Confidential.',
  canonical: `${BASE_URL}/uipath-proxy-interview-support/`,
  keywords: [
    'UiPath proxy interview support', 'UiPath proxy interview', 'RPA proxy interview', 'UiPath interview help',
    'UiPath interview assistance', 'RPA interview support', 'UiPath live interview support',
    'UiPath developer interview help', 'UiPath scenario interview support', 'REFramework interview help',
    'UiPath healthcare interview support', 'UiPath Epic automation interview help',
  ],
  ogTitle: 'UiPath Proxy Interview Support — Real-Time RPA Interview Guidance',
  ogDescription: 'Expert live guidance during UiPath and RPA Developer interviews. REFramework, queues, Citrix, Document Understanding, Epic healthcare, agentic automation. Confidential. Same-day.',
  h1: 'UiPath Proxy Interview Support: Real-Time RPA Interview Assistance',
  tagline: 'Expert real-time guidance during your live UiPath interview — REFramework, dispatcher/performer, queues, Citrix, Document Understanding, Epic healthcare workflows, and agentic automation questions answered live.',
  heroEyebrow: 'UiPath Interview Support — Scenario Coverage',
  painIntro:
    'UiPath interview scheduled but not confident with scenario questions? Facing REFramework design walkthroughs, dispatcher/performer architecture questions, or Epic/healthcare automation scenarios you have not encountered before? Our experts join your live interview and guide you through every question in real time.',
  heroVariant:
    'UiPath Developer interviews in 2026 go deep — hiring panels ask about REFramework state transitions, queue retry strategies, Citrix automation with dynamic selectors, Document Understanding confidence scoring and human validation, API vs UI automation decision logic, Epic Hyperspace/Hyperdrive constraints, PHI/HIPAA compliance in bots, and increasingly — agentic automation with Maestro and AI agent integration. Our in-house UiPath experts provide discreet real-time support during your live interview so you can confidently navigate every scenario.',
  geoLine: 'Proxy interview support for UiPath and RPA professionals across USA, Canada, UK, Europe, Ireland, Germany, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available 24/7 for interview support — all time zones covered.',
  techSnippet: 'Interview coverage: UiPath Studio, Orchestrator, REFramework, Queues, Dispatcher/Performer, Document Understanding, Citrix, CV Activities, Dynamic Selectors, API integrations, Epic Hyperspace, Hyperdrive, FHIR, UiPath Maestro, agentic automation, UiPath Test Suite.',
  highlights: uipathHighlights,
  faqs: uipathProxyFaqs(''),
  useCasesSection: {
    title: 'UiPath Interview Scenarios We Cover',
    cases: [
      'Designing REFramework dispatcher/performer for high-volume queue processing',
      'Explaining exception handling — business vs system exceptions, retry logic, global exception handler',
      'Handling Citrix automation — CV activities, anchor selectors, image-based fallback strategies',
      'Document Understanding pipeline design — classification, extraction, validation, confidence scoring',
      'API vs UI automation decision making — when to use HTTP Request vs UI selectors in Epic',
      'Epic Hyperspace and Hyperdrive automation constraints and safe bot design strategy',
      'Agentic automation in UiPath — Maestro orchestration, AI agents, human-in-the-loop workflows',
      'Production bot stability — monitoring, alerting, SLA management, RCA, and hypercare support',
    ],
  },
  proxySection: {
    title: 'Who We Support — UiPath Interview Roles',
    intro:
      'We provide live proxy interview support for professionals interviewing for these UiPath and RPA roles:',
    points: [
      'UiPath Developer — Studio workflows, Orchestrator, REFramework, queues, exception handling',
      'Senior UiPath Developer — scalable architecture, framework design, reusable components, production stability',
      'RPA Developer — platform-agnostic RPA concepts plus UiPath-specific implementation depth',
      'RPA Solution Designer — process assessment, automation architecture, ROI framing, governance',
      'UiPath Healthcare Automation Developer — Epic, PHI/HIPAA, clinical workflows, Document Understanding',
      'UiPath Epic Automation Developer — Hyperspace, Hyperdrive, FHIR API, Interconnect, EHR workflows',
      'UiPath Document Understanding Developer — OCR, ML Classifier, extraction pipelines, human validation',
      'UiPath Production Support Engineer — monitoring, failure analysis, retry design, hypercare',
      'UiPath Automation Tester — Test Suite, Test Cloud, regression, SIT, UAT, agentic testing',
      'UiPath Agentic Automation Consultant — Maestro, AI agents, multi-agent workflows, governance',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
      { label: 'UiPath proxy interview Canada', href: '/uipath-proxy-interview-canada/' },
      { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'RPA proxy interview support', href: '/rpa-proxy-interview-support/' },
      { label: 'UiPath Epic proxy interview support', href: '/uipath-epic-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath interview scheduled support', href: '/uipath-interview-scheduled/' },
    proxyLink: { label: 'UiPath job support', href: '/uipath-job-support/' },
    additionalLinks: [
      { label: 'UiPath healthcare job support', href: '/uipath-healthcare-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const uipathInterviewScheduled: LandingPageConfig = {
  slug: 'uipath-interview-scheduled',
  title: 'Get UiPath Interviews Scheduled — RPA Profile Marketing',
  description:
    'Not getting UiPath interview calls? Expert profile engineering and recruiter outreach for UiPath Developer and RPA consultant roles across USA, Canada, UK, and Europe.',
  canonical: `${BASE_URL}/uipath-interview-scheduled/`,
  keywords: [
    'get UiPath interviews scheduled', 'UiPath profile marketing', 'RPA interview calls',
    'UiPath resume support', 'UiPath job search support', 'UiPath interview scheduling',
    'RPA job search help', 'UiPath LinkedIn optimization', 'UiPath recruiter outreach',
    'UiPath developer profile engineering', 'RPA profile optimization',
  ],
  ogTitle: 'Get UiPath Interviews Scheduled — Profile Marketing',
  ogDescription: 'Expert UiPath profile engineering and recruiter outreach for interview calls across USA, Canada, UK, and Europe.',
  h1: 'Get UiPath Interviews Scheduled: RPA Profile Marketing & Job Search Support',
  tagline: 'Profile engineering, LinkedIn optimization, and recruiter outreach to generate UiPath and RPA developer interview calls across USA, Canada, UK, and Europe.',
  heroEyebrow: 'UiPath Job Search Support — Market Positioning',
  painIntro:
    'Not getting UiPath interview calls despite having solid RPA experience? The problem is often profile positioning — not your skills. Our UiPath profile marketing service gets your resume and LinkedIn in front of the right recruiters and generates interview calls.',
  heroVariant:
    'The 2026 UiPath job market rewards specific keyword positioning. Roles now ask for REFramework, Document Understanding, Citrix automation, API integrations, Epic/healthcare automation, agentic workflows, and UiPath Test Suite — but most developer profiles list generic RPA bullets that fail recruiter ATS filters. We engineer your profile for the exact keywords, project framing, and technology depth that UiPath-focused recruiters and staffing firms actively search for.',
  geoLine: 'UiPath interview scheduling support for professionals targeting roles in USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, Singapore, UAE, and Saudi Arabia.',
  timezoneNote: 'Profile work and outreach strategy can begin same-day across all time zones.',
  techSnippet: 'Profile keyword coverage: UiPath Studio, Orchestrator, REFramework, Queues, Dispatcher/Performer, Document Understanding, Test Suite, Maestro, agentic automation, Epic, FHIR, Citrix, API automation.',
  highlights: [
    {
      title: 'UiPath Profile Engineering',
      description: 'Resume and LinkedIn optimization with UiPath-specific keyword targeting — REFramework, Document Understanding, Orchestrator, queues, Citrix, API integrations, agentic automation, and Epic healthcare keywords that recruiters actively search for.',
    },
    {
      title: 'Recruiter Outreach & Job Portal Optimization',
      description: 'Active outreach to UiPath-focused recruiters, staffing firms, and direct employers. Job portal profile optimization for Dice, LinkedIn, Indeed, and Workday talent portals with UiPath role-specific positioning.',
    },
    {
      title: 'Country-Specific UiPath Job Targeting',
      description: 'Market-specific positioning for UiPath roles in USA (healthcare, finance, insurance), Canada (banking, telecom), UK (financial services), and Europe (manufacturing, shared services, healthcare).',
    },
  ],
  faqs: uipathScheduledFaqs(''),
  useCasesSection: {
    title: 'What We Do to Get Your UiPath Interviews',
    cases: [
      'Engineering your resume to match UiPath Developer, Senior RPA Developer, and Solution Designer job descriptions',
      'LinkedIn headline and summary rewrite with UiPath, REFramework, Document Understanding, and Maestro keywords',
      'Positioning healthcare automation experience for Epic Hyperspace, FHIR, and clinical workflow roles',
      'Targeting UiPath staffing firms and direct employers across your preferred geography',
      'Optimizing job portal profiles on Dice, LinkedIn, and other platforms for UiPath role visibility',
      'Follow-up messaging strategy and interview scheduling workflow guidance',
    ],
  },
  proxySection: {
    title: 'End-to-End UiPath Career Support',
    intro: 'From profile to placement — we support the full UiPath job search journey:',
    points: [
      'UiPath resume/profile engineering with technology-specific keyword depth',
      'LinkedIn optimization for UiPath Developer and RPA Consultant recruiter visibility',
      'Country-specific UiPath job targeting — USA, Canada, UK, Europe, Australia, Singapore',
      'Recruiter outreach to UiPath staffing firms and direct employers',
      'Interview preparation and proxy interview support once calls come in',
      'Post-interview job support once you land the UiPath role',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath interview scheduled USA', href: '/uipath-interview-scheduled-usa/' },
      { label: 'UiPath interview scheduled Canada', href: '/uipath-interview-scheduled-canada/' },
      { label: 'UiPath interview scheduled UK', href: '/uipath-interview-scheduled-uk/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    ],
    problemLink: { label: 'RPA job support', href: '/rpa-job-support/' },
    proxyLink: { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
  },
  lastmod: LASTMOD,
};

export const rpaJobSupport: LandingPageConfig = {
  slug: 'rpa-job-support',
  title: 'RPA Job Support — Real-Time Robotic Process Automation Help',
  description:
    'Stuck on RPA development or production bot failures? Real-time RPA job support from expert developers — UiPath, Power Automate, Automation Anywhere. Same-day start.',
  canonical: `${BASE_URL}/rpa-job-support/`,
  keywords: [
    'RPA job support', 'robotic process automation job support', 'RPA developer support',
    'RPA production support', 'UiPath job support', 'RPA real-time support', 'RPA bot support',
    'process automation support', 'RPA proxy job support', 'RPA office hour support',
  ],
  ogTitle: 'RPA Job Support — Real-Time Developer Help',
  ogDescription: 'Real-time RPA job support for production bot failures and automation delivery — UiPath, Power Automate, Automation Anywhere. Same-day start.',
  h1: 'RPA Job Support: Real-Time Robotic Process Automation Developer Assistance',
  tagline: 'Expert RPA job support for production bot issues, automation project delivery, and real-time developer assistance — UiPath-first, with broad RPA platform coverage.',
  heroEyebrow: 'RPA Support — UiPath, Agentic Automation & Production RPA',
  painIntro:
    'Stuck in RPA development or production bot failures during office hours? Whether you are dealing with UiPath Studio issues, Orchestrator failures, queue backlogs, or complex automation architecture decisions, our in-house RPA experts provide real-time help during your working hours.',
  heroVariant:
    'RPA in 2026 is no longer just rule-based automation. Enterprise RPA now includes Document Understanding, API integrations, agentic workflows, healthcare automation, and complex framework design. Whether your challenge is a failing UiPath REFramework bot, a Power Automate flow error, or an Automation Anywhere process issue, our experts cover the full RPA landscape — with deepest expertise in UiPath Studio, Orchestrator, REFramework, queues, Citrix automation, and healthcare/Epic workflows.',
  geoLine: 'RPA job support for developers across USA, Canada, UK, Europe, Australia, Singapore, and worldwide.',
  timezoneNote: 'Available across all US, UK, Canada, Europe, and Asia-Pacific time zones.',
  techSnippet: 'RPA support covering UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Test Suite, Maestro, Citrix automation, API integrations, and production bot monitoring.',
  highlights: uipathHighlights,
  faqs: uipathJobSupportFaqs(''),
  useCasesSection: {
    title: 'RPA Situations We Help With',
    cases: [
      'UiPath REFramework failures, state machine issues, and production bot instability',
      'Orchestrator queue backlogs, job failures, robot connection issues, and credential errors',
      'Document Understanding pipeline failures — OCR, classification, extraction, and validation issues',
      'RPA process architecture — dispatcher/performer design, transaction retry logic, SLA management',
      'Power Automate flow errors, connector issues, and business process automation problems',
      'Automation Anywhere bot failures, control room issues, and process development help',
      'Healthcare RPA — Epic automation constraints, PHI compliance, and clinical workflow design',
      'API-first RPA strategy — REST APIs, OAuth, HTTP Request activity, JSON handling in UiPath',
    ],
  },
  proxySection: {
    title: 'RPA Proxy Interview Support — Live Interview Guidance',
    intro:
      'RPA Developer interviews in 2026 are scenario-heavy across all platforms. Our experts provide real-time guidance during your live interview covering REFramework, dispatcher/performer architecture, queue design, exception handling, Citrix automation, Document Understanding, API vs UI strategy, healthcare workflows, and agentic automation.',
    points: [
      'UiPath Developer proxy interview support — REFramework, queues, Citrix, Document Understanding',
      'RPA Solution Designer interview guidance — process assessment, automation architecture, governance',
      'Healthcare RPA interview support — Epic, FHIR, PHI/HIPAA, clinical workflow automation',
      'Production support interview help — monitoring, RCA, SLA management, hypercare scenarios',
      'Agentic RPA interview guidance — UiPath Maestro, AI agents, multi-agent automation design',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'RPA proxy interview support', href: '/rpa-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
    proxyLink: { label: 'RPA proxy interview support', href: '/rpa-proxy-interview-support/' },
  },
  lastmod: LASTMOD,
};

export const rpaProxyInterviewSupport: LandingPageConfig = {
  slug: 'rpa-proxy-interview-support',
  title: 'RPA Proxy Interview Support — Live RPA Interview Help',
  description:
    'RPA interview scheduled? Real-time proxy support for UiPath Developer, RPA Developer, and Solution Designer roles. REFramework, queues, Citrix, Document Understanding. Confidential.',
  canonical: `${BASE_URL}/rpa-proxy-interview-support/`,
  keywords: [
    'RPA proxy interview support', 'RPA proxy interview', 'RPA interview help', 'RPA interview assistance',
    'UiPath proxy interview support', 'RPA live interview support', 'RPA developer interview help',
    'RPA scenario interview support', 'REFramework interview help', 'RPA interview guidance',
  ],
  ogTitle: 'RPA Proxy Interview Support — Live Interview Help',
  ogDescription: 'Live proxy support during RPA Developer and UiPath Developer interviews. REFramework, queues, Citrix, Document Understanding. Confidential.',
  h1: 'RPA Proxy Interview Support: Live Interview Assistance for RPA Developer Roles',
  tagline: 'Expert real-time guidance during your live RPA interview — REFramework, dispatcher/performer, queues, Citrix, Document Understanding, API automation, and agentic workflows.',
  heroEyebrow: 'RPA Interview Support — Scenario Coverage',
  painIntro:
    'RPA interview scheduled but not confident with scenario questions? Facing REFramework design walkthroughs, dispatcher/performer architecture questions, or healthcare automation scenarios you have not encountered before? Our RPA experts join your live interview and guide you through every question.',
  heroVariant:
    'RPA Developer interviews in 2026 test deep platform knowledge — hiring panels ask about REFramework state machine design, queue retry strategies, Citrix automation with dynamic selectors, Document Understanding confidence scoring, API vs UI automation decision logic, Epic/healthcare constraints, PHI/HIPAA compliance, and increasingly — agentic automation with UiPath Maestro. Our in-house UiPath and RPA experts provide discreet real-time support during your live interview.',
  geoLine: 'RPA proxy interview support for professionals across USA, Canada, UK, Europe, Ireland, Germany, Australia, Singapore, and worldwide.',
  timezoneNote: 'Available 24/7 for interview support — all time zones covered.',
  techSnippet: 'Interview coverage: UiPath Studio, Orchestrator, REFramework, Queues, Dispatcher/Performer, Document Understanding, Citrix automation, CV Activities, API integrations, Epic automation, PHI/HIPAA, UiPath Maestro, agentic automation.',
  highlights: uipathHighlights,
  faqs: uipathProxyFaqs(''),
  useCasesSection: {
    title: 'RPA Interview Scenarios We Cover',
    cases: [
      'Designing REFramework dispatcher/performer for high-volume queue processing',
      'Exception handling — business vs system exceptions, retry scope, global exception handler',
      'Citrix automation — CV activities, anchor selectors, image-based fallback strategies',
      'Document Understanding — classification, extraction, validation station, confidence scoring',
      'API vs UI automation decision making — when to use REST API vs UI selectors',
      'Epic automation constraints — Hyperspace vs Hyperdrive, PHI/HIPAA-safe bot design',
      'Agentic automation — Maestro orchestration, AI agents, human-in-the-loop workflows',
      'Production bot stability — monitoring, alerting, SLA management, RCA, hypercare support',
    ],
  },
  proxySection: {
    title: 'RPA Proxy Interview — Who We Support',
    intro: 'We provide live proxy interview support for all RPA and UiPath roles:',
    points: [
      'UiPath Developer — Studio, Orchestrator, REFramework, queues, exception handling',
      'Senior UiPath Developer — framework design, reusable components, production architecture',
      'RPA Developer — cross-platform RPA with UiPath-depth scenario coverage',
      'RPA Solution Designer — process assessment, automation design, governance, ROI framing',
      'UiPath Healthcare Developer — Epic, PHI/HIPAA, clinical workflows, Document Understanding',
      'UiPath Production Support Engineer — monitoring, failure analysis, retry design, SLA',
      'UiPath Automation Tester — Test Suite, Test Cloud, regression, SIT/UAT',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
      { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
    ],
    techLinks: [
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'RPA job support', href: '/rpa-job-support/' },
      { label: 'UiPath Epic proxy interview support', href: '/uipath-epic-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath interview scheduled', href: '/uipath-interview-scheduled/' },
    proxyLink: { label: 'UiPath job support', href: '/uipath-job-support/' },
  },
  lastmod: LASTMOD,
};

// ─── Country Pages ────────────────────────────────────────────────────────────

export const uipathJobSupportUSA: LandingPageConfig = {
  slug: 'uipath-job-support-usa',
  title: 'UiPath Job Support USA — Real-Time RPA Developer Help',
  description: 'Stuck on UiPath on a US project? Real-time UiPath job support across all US time zones. Healthcare/Epic, REFramework, queues, Document Understanding. Same-day start.',
  canonical: `${BASE_URL}/uipath-job-support-usa/`,
  keywords: ['UiPath job support USA', 'RPA job support USA', 'UiPath developer support USA', 'UiPath production support USA', 'UiPath Studio help USA', 'REFramework support USA'],
  ogTitle: 'UiPath Job Support USA — Expert RPA Help',
  ogDescription: 'Real-time UiPath job support for US projects — healthcare, financial services, enterprise. EST/CST/MST/PST coverage. Same-day start.',
  h1: 'UiPath Job Support USA: Real-Time RPA Expert Help for US Projects',
  tagline: 'Expert UiPath support during US working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, Citrix, healthcare/Epic automation. All US time zones.',
  heroEyebrow: 'UiPath Job Support USA — EST, CST, MST, PST Coverage',
  painIntro: 'Stuck in UiPath production issues during US office hours with no in-house RPA expert? Our in-house UiPath team covers all US time zones and provides real-time support the moment you need it.',
  heroVariant: 'The US RPA job market in 2026 demands deep UiPath expertise — REFramework, Document Understanding, healthcare/Epic automation, API integrations, Citrix automation, and increasingly agentic workflows. Whether you are supporting production bots for a US healthcare system, financial services firm, or enterprise client, our in-house experts work alongside you in real time during your US working hours.',
  geoLine: 'Supporting UiPath and RPA developers on US projects across EST, CST, MST, and PST time zones.',
  timezoneNote: 'Aligned with US Eastern, Central, Mountain, and Pacific working hours.',
  techSnippet: 'UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Test Suite, Maestro, Epic Hyperspace/Hyperdrive, FHIR, Citrix automation, REST API integrations.',
  highlights: uipathHighlights,
  faqs: uipathGeoFaqs('USA', 'US Eastern, Central, and Pacific'),
  useCasesSection: {
    title: 'Common UiPath Situations We Help With in USA',
    cases: [
      'Handling UiPath production bot failures for US healthcare, finance, and enterprise clients',
      'REFramework debugging, queue backlog resolution, and dispatcher/performer architecture in US projects',
      'Epic Hyperspace/Hyperdrive automation support for US healthcare organizations',
      'Document Understanding pipeline issues — OCR, extraction, human validation in US insurance/healthcare',
      'Preparing for UiPath Developer interviews at US healthcare systems, banks, and consulting firms',
      'Real-time proxy interview guidance during live UiPath scenario interviews for US roles',
    ],
  },
  proxySection: {
    title: 'UiPath Proxy Interview Support for US Roles',
    intro: 'US enterprise UiPath interviews test deep scenario knowledge — REFramework, healthcare automation, API strategy, and agentic workflows. Our experts provide real-time live guidance during your US company interview.',
    points: [
      'Live guidance during REFramework, queue, and exception handling scenario walkthroughs',
      'Support for healthcare/Epic automation questions common in US hospital and health system interviews',
      'Help explaining API vs UI automation strategy, OAuth, and REST API integrations',
      'Mock interview sessions for UiPath Developer, RPA Solution Designer, and healthcare automation roles',
      'Proxy interview support for FAANG-adjacent tech, Big 4 consulting, and US staffing firm interviews',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
    ],
    problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
    proxyLink: { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
  },
  lastmod: LASTMOD,
};

export const uipathProxyInterviewUSA: LandingPageConfig = {
  slug: 'uipath-proxy-interview-usa',
  title: 'UiPath Proxy Interview Support USA — Live RPA Interview Help',
  description: 'UiPath interview for a US role? Real-time proxy support from expert RPA developers. REFramework, queues, Document Understanding, Epic healthcare. All US time zones. Confidential.',
  canonical: `${BASE_URL}/uipath-proxy-interview-usa/`,
  keywords: ['UiPath proxy interview USA', 'RPA proxy interview USA', 'UiPath interview help USA', 'UiPath live interview support USA', 'RPA interview assistance USA'],
  ogTitle: 'UiPath Proxy Interview USA — Live Help',
  ogDescription: 'Live proxy support during UiPath interviews for US roles. REFramework, Document Understanding, Epic healthcare. All US time zones. Confidential.',
  h1: 'UiPath Proxy Interview Support USA: Live RPA Interview Guidance',
  tagline: 'Expert real-time guidance during your live UiPath interview for US roles — REFramework, queues, Citrix, Document Understanding, Epic healthcare, and agentic automation.',
  heroEyebrow: 'UiPath Interview Support USA — All US Time Zones',
  painIntro: 'UiPath interview scheduled for a US healthcare system, consulting firm, or enterprise tech company? Get real-time expert guidance during your live interview — REFramework, queues, Citrix, Document Understanding, Epic, and Maestro covered.',
  heroVariant: 'US enterprise UiPath interviews in 2026 are scenario-heavy — hiring panels at healthcare systems, financial services firms, insurance companies, and consulting practices test deep REFramework knowledge, healthcare/Epic automation awareness, Document Understanding design, API vs UI strategy, and increasingly agentic automation concepts. Our in-house UiPath experts provide discreet live guidance during your interview across all US time zones.',
  geoLine: 'UiPath proxy interview support for US roles across EST, CST, MST, and PST.',
  timezoneNote: 'Available 24/7 — all US time zones covered for interview support.',
  techSnippet: 'Interview coverage: REFramework, Orchestrator, queues, dispatcher/performer, Document Understanding, Citrix, Epic Hyperspace/Hyperdrive, FHIR, Maestro, agentic automation, UiPath Test Suite.',
  highlights: uipathHighlights,
  faqs: uipathProxyFaqs('USA'),
  useCasesSection: {
    title: 'UiPath US Interview Scenarios We Cover',
    cases: [
      'REFramework dispatcher/performer design for US healthcare insurance claims processing',
      'Epic Hyperspace/Hyperdrive automation strategy for US hospital system interviews',
      'Document Understanding pipeline design for US insurance, finance, and healthcare document processing',
      'API vs UI automation decision making for Epic FHIR vs UI scraping scenarios',
      'Production bot stability — monitoring, SLA, RCA, and hypercare for US enterprise deployments',
      'Agentic automation and Maestro orchestration for US tech company senior UiPath roles',
    ],
  },
  proxySection: {
    title: 'UiPath US Interview Roles We Support',
    intro: 'Live proxy interview support for US UiPath and RPA roles:',
    points: [
      'UiPath Developer at US healthcare systems, hospitals, and health insurance companies',
      'Senior UiPath Developer at US consulting firms and enterprise technology companies',
      'RPA Solution Designer at Big 4, boutique RPA firms, and US financial services',
      'UiPath Healthcare Automation Developer at US health systems and EHR vendors',
      'UiPath Production Support Engineer at US enterprise and healthcare clients',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
      { label: 'UiPath proxy interview Canada', href: '/uipath-proxy-interview-canada/' },
    ],
    techLinks: [
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'UiPath Epic proxy interview support', href: '/uipath-epic-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath interview scheduled USA', href: '/uipath-interview-scheduled-usa/' },
    proxyLink: { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
  },
  lastmod: LASTMOD,
};

export const uipathInterviewScheduledUSA: LandingPageConfig = {
  slug: 'uipath-interview-scheduled-usa',
  title: 'Get UiPath Interviews Scheduled USA — RPA Profile Marketing',
  description: 'Not getting UiPath calls for US roles? Expert profile engineering and recruiter outreach for UiPath Developer and RPA consultant roles across USA. Start generating calls.',
  canonical: `${BASE_URL}/uipath-interview-scheduled-usa/`,
  keywords: ['get UiPath interviews USA', 'UiPath profile marketing USA', 'RPA interview calls USA', 'UiPath resume support USA', 'UiPath job search USA'],
  ogTitle: 'Get UiPath Interviews in USA — Profile Help',
  ogDescription: 'Expert UiPath profile engineering and recruiter outreach for US RPA roles. Healthcare, finance, consulting. Same-day start.',
  h1: 'Get UiPath Interviews Scheduled in USA: RPA Profile Marketing & Job Search Support',
  tagline: 'Profile engineering, LinkedIn optimization, and recruiter outreach to generate UiPath and RPA developer interview calls across all US markets.',
  heroEyebrow: 'UiPath Job Search Support USA — 2026 Market Positioning',
  painIntro: 'Applying to UiPath Developer and RPA roles in the US but not hearing back? The US RPA market is active in 2026 but competitive — profile positioning for the right UiPath keywords makes the difference.',
  heroVariant: 'US RPA roles in 2026 are concentrated in healthcare, financial services, insurance, and enterprise operations. Recruiters search for specific terms: REFramework, Document Understanding, Orchestrator, Epic automation, Maestro, agentic automation. We engineer your profile and run targeted outreach to get your resume in front of the right US hiring managers and staffing firms.',
  geoLine: 'UiPath interview scheduling support for professionals targeting roles across all US states.',
  timezoneNote: 'Profile work and outreach begin same-day.',
  techSnippet: 'Profile keyword coverage: UiPath Studio, Orchestrator, REFramework, Document Understanding, Citrix, API integrations, Epic automation, Maestro, agentic automation, Test Suite.',
  highlights: uipathHighlights,
  faqs: uipathScheduledFaqs('USA'),
  useCasesSection: {
    title: 'How We Get You UiPath Interview Calls in USA',
    cases: [
      'Engineering your resume for US UiPath Developer, RPA Solution Designer, and healthcare automation JDs',
      'LinkedIn optimization with REFramework, Document Understanding, Epic, and Maestro keyword targeting',
      'Outreach to UiPath staffing firms, health system recruiting teams, and US consulting practices',
      'Positioning healthcare RPA experience for Epic Hyperspace, FHIR, and clinical workflow roles',
      'Targeting US UiPath partner firms, Big 4 consulting, and direct enterprise employer channels',
    ],
  },
  proxySection: {
    title: 'Full US UiPath Career Support',
    intro: 'We support the full journey from job search to placement:',
    points: [
      'UiPath resume engineering for US ATS and recruiter keyword filtering',
      'LinkedIn positioning for US UiPath Developer and RPA Consultant recruiter visibility',
      'Targeted outreach to US UiPath staffing firms and direct employers',
      'Interview preparation and proxy support once calls come in',
      'Post-placement UiPath job support once you land the role',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
      { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
    ],
    techLinks: [
      { label: 'UiPath interview scheduled', href: '/uipath-interview-scheduled/' },
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
    proxyLink: { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
  },
  lastmod: LASTMOD,
};

export const uipathJobSupportCanada: LandingPageConfig = {
  slug: 'uipath-job-support-canada',
  title: 'UiPath Job Support Canada — Real-Time RPA Developer Help',
  description: 'Real-time UiPath job support for Canadian RPA developers — Studio, Orchestrator, REFramework, queues, production bots. Banking, healthcare, telecom. EST to PST covered.',
  canonical: `${BASE_URL}/uipath-job-support-canada/`,
  keywords: ['UiPath job support Canada', 'RPA job support Canada', 'UiPath developer support Canada', 'UiPath production support Canada', 'REFramework support Canada'],
  ogTitle: 'UiPath Job Support Canada — Expert RPA Help',
  ogDescription: 'Real-time UiPath job support for Canadian banking, healthcare, and telecom RPA projects. EST to PST coverage. Same-day start.',
  h1: 'UiPath Job Support Canada: Real-Time RPA Expert Help for Canadian Projects',
  tagline: 'Expert UiPath support during Canadian working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, healthcare automation. EST to PST.',
  heroEyebrow: 'UiPath Job Support Canada — EST to PST Coverage',
  painIntro: 'Stuck in UiPath production issues on a Canadian banking, healthcare, or telecom RPA project? Our in-house UiPath experts cover EST to PST time zones and provide real-time support during your Canadian working hours.',
  heroVariant: 'Canadian enterprises in 2026 are deploying UiPath across banking (RBC, TD, Scotiabank), healthcare, telecom (Rogers, Bell), and government digital services. RPA projects here often involve complex REFramework architectures, healthcare document automation, API integrations, and production-critical workflows. Our in-house experts join your Canadian working hours and help resolve issues in real time.',
  geoLine: 'UiPath support for Canadian developers across Toronto (EST), Vancouver (PST), Calgary (MST), and Montreal (EST).',
  timezoneNote: 'Aligned with Canadian Eastern, Central, Mountain, and Pacific working hours.',
  techSnippet: 'UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Test Suite, Citrix automation, REST APIs, healthcare/banking automation workflows.',
  highlights: uipathHighlights,
  faqs: uipathGeoFaqs('Canada', 'Canadian Eastern and Pacific'),
  useCasesSection: {
    title: 'Common UiPath Situations We Help With in Canada',
    cases: [
      'UiPath production support for Canadian banking automation — RBC, TD, Scotiabank RPA projects',
      'Healthcare RPA debugging for Canadian health systems and insurance providers',
      'REFramework design and queue architecture for Canadian enterprise automation projects',
      'Document Understanding support for Canadian insurance and financial document processing',
      'Interview preparation for UiPath Developer roles at Canadian banks, fintechs, and consulting firms',
      'Proxy interview guidance for UiPath and RPA interviews at Canadian employers',
    ],
  },
  proxySection: {
    title: 'UiPath Proxy Interview Support for Canadian Roles',
    intro: 'Canadian UiPath interviews often test banking, healthcare, and enterprise automation scenarios. Our experts provide real-time live guidance during your interview.',
    points: [
      'REFramework, queues, and exception handling scenario support for Canadian RPA interviews',
      'Document Understanding and healthcare automation guidance for Canadian health system roles',
      'Banking/financial services RPA interview support — process automation, compliance awareness',
      'Mock sessions for UiPath Developer, Solution Designer, and Production Support roles in Canada',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'UiPath proxy interview Canada', href: '/uipath-proxy-interview-canada/' },
    ],
    problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
    proxyLink: { label: 'UiPath proxy interview Canada', href: '/uipath-proxy-interview-canada/' },
  },
  lastmod: LASTMOD,
};

export const uipathProxyInterviewCanada: LandingPageConfig = {
  slug: 'uipath-proxy-interview-canada',
  title: 'UiPath Proxy Interview Support Canada — Live RPA Interview Help',
  description: 'UiPath interview for a Canadian role? Real-time proxy support for REFramework, queues, Document Understanding, banking RPA. EST to PST. Confidential.',
  canonical: `${BASE_URL}/uipath-proxy-interview-canada/`,
  keywords: ['UiPath proxy interview Canada', 'RPA proxy interview Canada', 'UiPath interview help Canada', 'UiPath live interview support Canada'],
  ogTitle: 'UiPath Proxy Interview Canada — Live Help',
  ogDescription: 'Live proxy support during UiPath interviews for Canadian roles — banking, health systems. EST to PST. Confidential.',
  h1: 'UiPath Proxy Interview Support Canada: Live RPA Interview Guidance',
  tagline: 'Real-time expert guidance during your live UiPath interview for Canadian roles — banking, healthcare, and enterprise RPA scenario support. EST to PST.',
  heroEyebrow: 'UiPath Interview Support Canada — EST to PST',
  painIntro: 'UiPath interview scheduled for a Canadian bank, health system, or consulting firm? Get live expert guidance during your interview — REFramework, queues, Document Understanding, and healthcare automation covered.',
  heroVariant: 'Canadian UiPath interviews in 2026 test deep knowledge of banking and healthcare RPA — REFramework architecture for high-volume transaction processing, Document Understanding for financial and medical documents, PIPEDA-aware bot design, API integrations, and increasingly agentic automation concepts. Our experts provide discreet real-time guidance during your interview.',
  geoLine: 'UiPath proxy interview support for Canadian roles — Toronto, Vancouver, Calgary, Montreal. EST to PST.',
  timezoneNote: 'Available 24/7 for Canadian interview support across all time zones.',
  techSnippet: 'Interview coverage: REFramework, Orchestrator, queues, Document Understanding, Citrix, API integrations, healthcare automation, banking RPA, agentic automation.',
  highlights: uipathHighlights,
  faqs: uipathProxyFaqs('Canada'),
  useCasesSection: {
    title: 'Canadian UiPath Interview Scenarios We Cover',
    cases: [
      'REFramework dispatcher/performer design for Canadian banking transaction processing',
      'Document Understanding for Canadian insurance, banking, and healthcare document workflows',
      'Healthcare automation scenarios for Canadian health systems and provincial insurance plans',
      'API vs UI strategy for Canadian banking integration RPA (Open Banking, SWIFT, internal APIs)',
      'PIPEDA and data privacy awareness in Canadian healthcare and banking RPA contexts',
    ],
  },
  proxySection: {
    title: 'Canadian UiPath Interview Roles We Support',
    intro: 'Live proxy interview support for UiPath and RPA roles at Canadian employers:',
    points: [
      'UiPath Developer at Canadian banks — RBC, TD, Scotiabank, CIBC, BMO, Sun Life, Manulife',
      'RPA Consultant at Big 4 and boutique RPA firms with Canadian practices',
      'UiPath Developer at Canadian health systems and provincial health authorities',
      'Senior UiPath Developer at Canadian telecom and enterprise automation programs',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
      { label: 'UiPath proxy interview USA', href: '/uipath-proxy-interview-usa/' },
    ],
    techLinks: [
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
    ],
    problemLink: { label: 'UiPath interview scheduled Canada', href: '/uipath-interview-scheduled-canada/' },
    proxyLink: { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
  },
  lastmod: LASTMOD,
};

export const uipathInterviewScheduledCanada: LandingPageConfig = {
  slug: 'uipath-interview-scheduled-canada',
  title: 'Get UiPath Interviews Scheduled Canada — RPA Profile Marketing',
  description: 'Not getting UiPath calls for Canadian roles? Expert profile engineering for UiPath Developer roles across Canada. Banking, healthcare, telecom. Start getting calls.',
  canonical: `${BASE_URL}/uipath-interview-scheduled-canada/`,
  keywords: ['get UiPath interviews Canada', 'UiPath profile marketing Canada', 'RPA interview calls Canada', 'UiPath job search Canada'],
  ogTitle: 'Get UiPath Interviews in Canada — Profile Help',
  ogDescription: 'Expert UiPath profile engineering for Canadian RPA roles. Banking, healthcare, telecom. Start getting calls.',
  h1: 'Get UiPath Interviews Scheduled in Canada: RPA Profile & Job Search Support',
  tagline: 'Profile engineering, LinkedIn optimization, and recruiter outreach for UiPath and RPA roles at Canadian banks, health systems, telecom companies, and consulting firms.',
  heroEyebrow: 'UiPath Job Search Canada — 2026 Market Positioning',
  painIntro: 'Not getting UiPath calls for Canadian banking, healthcare, or consulting roles? Profile positioning for the Canadian RPA market — banking keywords, PIPEDA awareness, healthcare terms — drives recruiter visibility.',
  heroVariant: 'Canadian RPA hiring in 2026 is concentrated in banking (Big 5 banks, Sun Life, Manulife), healthcare (provincial health authorities, Telus Health), telecom (Rogers, Bell), and Big 4 consulting. We position your profile for the exact UiPath keywords and project framing that Canadian recruiters and staffing firms actively search for.',
  geoLine: 'UiPath profile marketing for Canadian roles across Toronto, Vancouver, Calgary, Ottawa, and Montreal.',
  timezoneNote: 'Profile work and outreach begin same-day from EST to PST.',
  techSnippet: 'Profile keyword coverage: UiPath Studio, Orchestrator, REFramework, Document Understanding, Citrix, banking RPA, healthcare automation, PIPEDA-aware design, API integrations.',
  highlights: uipathHighlights,
  faqs: uipathScheduledFaqs('Canada'),
  useCasesSection: {
    title: 'How We Get You UiPath Interview Calls in Canada',
    cases: [
      'Resume engineering for Canadian banking RPA — Big 5 banks, insurance, and fintech JDs',
      'LinkedIn optimization with Canadian UiPath recruiter keyword targeting',
      'Positioning healthcare RPA experience for Canadian provincial health system roles',
      'Outreach to Canadian UiPath staffing firms and Big 4 consulting practices',
    ],
  },
  proxySection: {
    title: 'Full Canadian UiPath Career Support',
    intro: 'We support the complete Canadian UiPath job search journey:',
    points: [
      'UiPath resume engineering for Canadian ATS and recruiter keyword filtering',
      'LinkedIn positioning for Canadian UiPath Developer and RPA Consultant visibility',
      'Targeted outreach to Canadian UiPath staffing firms and direct employers',
      'Interview preparation and proxy support once calls come in',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
      { label: 'UiPath proxy interview Canada', href: '/uipath-proxy-interview-canada/' },
    ],
    techLinks: [
      { label: 'UiPath interview scheduled', href: '/uipath-interview-scheduled/' },
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath job support Canada', href: '/uipath-job-support-canada/' },
    proxyLink: { label: 'UiPath proxy interview Canada', href: '/uipath-proxy-interview-canada/' },
  },
  lastmod: LASTMOD,
};

export const uipathJobSupportUK: LandingPageConfig = {
  slug: 'uipath-job-support-uk',
  title: 'UiPath Job Support UK — Real-Time RPA Developer Help',
  description: 'Real-time UiPath job support for UK RPA developers — Studio, Orchestrator, REFramework, queues, production bots. Financial services, NHS, enterprise RPA. GMT/BST.',
  canonical: `${BASE_URL}/uipath-job-support-uk/`,
  keywords: ['UiPath job support UK', 'RPA job support UK', 'UiPath developer support UK', 'UiPath production support UK', 'REFramework support UK'],
  ogTitle: 'UiPath Job Support UK — Expert RPA Help',
  ogDescription: 'Real-time UiPath job support for UK financial services, NHS, and enterprise RPA projects. GMT/BST aligned. Same-day start.',
  h1: 'UiPath Job Support UK: Real-Time RPA Expert Help for UK Projects',
  tagline: 'Expert UiPath support during UK working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, financial services and NHS RPA. GMT/BST aligned.',
  heroEyebrow: 'UiPath Job Support UK — GMT/BST Coverage',
  painIntro: 'Dealing with UiPath production failures on a UK financial services, NHS, or enterprise RPA project? Our in-house UiPath experts cover GMT/BST hours and join your working session immediately.',
  heroVariant: 'UK enterprise UiPath deployments in 2026 span financial services (Lloyds, Barclays, HSBC, Aviva), NHS trusts, government digital services, and global consulting practices with UK offices. UK RPA projects often demand GDPR-aware bot design, healthcare data handling (NHS CRS, EPR), financial document automation, and complex REFramework architectures. Our in-house experts provide real-time support during your GMT/BST working hours.',
  geoLine: 'UiPath support for UK developers in London, Manchester, Edinburgh, Birmingham, and remote UK roles.',
  timezoneNote: 'Aligned with UK GMT and BST working hours.',
  techSnippet: 'UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Citrix automation, financial services automation, NHS/healthcare RPA, GDPR-aware bot design, REST API integrations.',
  highlights: uipathHighlights,
  faqs: uipathGeoFaqs('UK', 'UK GMT and BST'),
  useCasesSection: {
    title: 'Common UiPath Situations We Help With in UK',
    cases: [
      'UiPath production support for UK financial services — banking, insurance, wealth management automation',
      'NHS and healthcare RPA support — patient data automation, clinical document processing, EPR integration',
      'REFramework debugging for UK enterprise automation projects',
      'GDPR-aware bot design and PHI-safe logging for UK healthcare and financial RPA',
      'Interview preparation for UiPath Developer roles at UK banks, consulting firms, and NHS digital programmes',
    ],
  },
  proxySection: {
    title: 'UiPath Proxy Interview Support for UK Roles',
    intro: 'UK UiPath interviews test financial services automation, NHS/healthcare RPA, GDPR awareness, and enterprise framework design. Our experts provide real-time live guidance during your UK company interview.',
    points: [
      'REFramework and queue architecture guidance for UK financial services RPA interviews',
      'NHS healthcare automation scenario support for UK health system and EPR vendor interviews',
      'GDPR data handling awareness for UK banking and healthcare RPA roles',
      'Mock sessions for UiPath Developer and Solution Designer roles at UK employers',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
      { label: 'UiPath job support Europe', href: '/uipath-job-support-europe/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
    ],
    problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
    proxyLink: { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
  },
  lastmod: LASTMOD,
};

export const uipathProxyInterviewUK: LandingPageConfig = {
  slug: 'uipath-proxy-interview-uk',
  title: 'UiPath Proxy Interview Support UK — Live RPA Interview Help',
  description: 'UiPath interview for a UK role? Real-time proxy support for REFramework, queues, financial services, and NHS healthcare automation. GMT/BST. Confidential.',
  canonical: `${BASE_URL}/uipath-proxy-interview-uk/`,
  keywords: ['UiPath proxy interview UK', 'RPA proxy interview UK', 'UiPath interview help UK', 'UiPath live interview support UK'],
  ogTitle: 'UiPath Proxy Interview UK — Live Help',
  ogDescription: 'Live proxy support during UiPath interviews for UK roles — financial services, NHS. GMT/BST. Confidential.',
  h1: 'UiPath Proxy Interview Support UK: Live RPA Interview Guidance',
  tagline: 'Real-time expert guidance during your live UiPath interview for UK roles — financial services, NHS healthcare, and enterprise RPA scenario support. GMT/BST.',
  heroEyebrow: 'UiPath Interview Support UK — GMT/BST',
  painIntro: 'UiPath interview for a UK bank, NHS trust, consulting firm, or enterprise tech company? Get live expert guidance during your interview — REFramework, Document Understanding, financial services automation, and NHS healthcare scenarios covered.',
  heroVariant: 'UK UiPath interviews in 2026 test sector-specific knowledge — financial services automation (reconciliation, compliance reporting, claims), NHS healthcare automation (patient record processing, clinical workflows), GDPR-aware design, and enterprise REFramework architecture. Our in-house experts provide discreet real-time guidance during your UK interview.',
  geoLine: 'UiPath proxy interview support for UK roles — London, Manchester, Edinburgh, Birmingham.',
  timezoneNote: 'Available 24/7 — GMT/BST time zones covered.',
  techSnippet: 'REFramework, queues, Document Understanding, financial services automation, NHS healthcare RPA, GDPR-aware design, API integrations, Citrix automation.',
  highlights: uipathHighlights,
  faqs: uipathProxyFaqs('UK'),
  useCasesSection: {
    title: 'UK UiPath Interview Scenarios We Cover',
    cases: [
      'Financial services automation — bank reconciliation, claims processing, compliance reporting in UiPath',
      'NHS and healthcare automation — patient data workflows, clinical document processing, EPR integration',
      'GDPR-aware bot design — data masking, secure logging, consent-aware automation',
      'REFramework architecture for high-volume UK financial services transaction processing',
    ],
  },
  proxySection: {
    title: 'UK UiPath Interview Roles We Support',
    intro: 'Live proxy support for UiPath roles at UK employers:',
    points: [
      'UiPath Developer at UK banks — Lloyds, Barclays, HSBC, NatWest, Aviva, Legal & General',
      'RPA Consultant at UK Big 4 and boutique RPA firms',
      'UiPath Developer at NHS trusts and UK digital health programmes',
      'Senior UiPath Developer at UK government digital services and enterprise automation programmes',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
      { label: 'UiPath proxy interview Europe', href: '/uipath-proxy-interview-europe/' },
    ],
    techLinks: [
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
    ],
    problemLink: { label: 'UiPath interview scheduled UK', href: '/uipath-interview-scheduled-uk/' },
    proxyLink: { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
  },
  lastmod: LASTMOD,
};

export const uipathInterviewScheduledUK: LandingPageConfig = {
  slug: 'uipath-interview-scheduled-uk',
  title: 'Get UiPath Interviews Scheduled UK — RPA Profile Marketing',
  description: 'Not getting UiPath calls for UK roles? Expert profile engineering for UiPath Developer roles across UK financial services, NHS, and consulting. Start getting calls.',
  canonical: `${BASE_URL}/uipath-interview-scheduled-uk/`,
  keywords: ['get UiPath interviews UK', 'UiPath profile marketing UK', 'RPA interview calls UK', 'UiPath job search UK'],
  ogTitle: 'Get UiPath Interviews in UK — Profile Help',
  ogDescription: 'Expert UiPath profile engineering for UK financial services, NHS, and consulting roles. Start getting calls.',
  h1: 'Get UiPath Interviews Scheduled in UK: RPA Profile & Job Search Support',
  tagline: 'Profile engineering and recruiter outreach to generate UiPath and RPA interview calls across UK financial services, NHS digital programmes, and consulting firms.',
  heroEyebrow: 'UiPath Job Search UK — 2026 Market Positioning',
  painIntro: 'Not getting UiPath calls for UK financial services, NHS, or consulting roles? Profile positioning for the UK RPA market — financial services keywords, GDPR awareness, healthcare automation terms — drives recruiter visibility.',
  heroVariant: 'UK RPA hiring in 2026 is concentrated in financial services (Big UK banks, insurance, wealth management), NHS digital transformation programmes, government automation initiatives, and Big 4 consulting practices. We position your profile for the exact UiPath keywords and sector-specific framing that UK recruiters search for.',
  geoLine: 'UiPath profile marketing for UK roles across London, Manchester, Edinburgh, Birmingham, and remote UK.',
  timezoneNote: 'Profile work and outreach begin same-day. GMT/BST aligned.',
  techSnippet: 'Profile keyword coverage: UiPath Studio, Orchestrator, REFramework, Document Understanding, financial services automation, NHS healthcare RPA, GDPR-aware design, API integrations.',
  highlights: uipathHighlights,
  faqs: uipathScheduledFaqs('UK'),
  useCasesSection: {
    title: 'How We Get You UiPath Calls in UK',
    cases: [
      'Resume engineering for UK financial services and NHS UiPath Developer JDs',
      'LinkedIn optimization with UK UiPath recruiter and sector-specific keyword targeting',
      'Positioning healthcare RPA experience for UK NHS digital programme roles',
      'Outreach to UK UiPath staffing firms and Big 4 consulting practices',
    ],
  },
  proxySection: {
    title: 'Full UK UiPath Career Support',
    intro: 'We support the complete UK UiPath job search journey:',
    points: [
      'UiPath resume engineering for UK ATS and recruiter keyword filtering',
      'LinkedIn positioning for UK UiPath Developer and RPA Consultant visibility',
      'Targeted outreach to UK UiPath staffing firms and direct employers',
      'Interview preparation and proxy support once calls come in',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
      { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
    ],
    techLinks: [
      { label: 'UiPath interview scheduled', href: '/uipath-interview-scheduled/' },
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
    proxyLink: { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
  },
  lastmod: LASTMOD,
};

export const uipathJobSupportEurope: LandingPageConfig = {
  slug: 'uipath-job-support-europe',
  title: 'UiPath Job Support Europe — Real-Time RPA Developer Help',
  description: 'Real-time UiPath job support for European RPA developers — Studio, Orchestrator, REFramework, queues, production bots. Manufacturing, banking, shared services. CET/CEST.',
  canonical: `${BASE_URL}/uipath-job-support-europe/`,
  keywords: ['UiPath job support Europe', 'RPA job support Europe', 'UiPath developer support Europe', 'UiPath production support Europe', 'REFramework support Europe'],
  ogTitle: 'UiPath Job Support Europe — Expert RPA Help',
  ogDescription: 'Real-time UiPath job support for European manufacturing, banking, and shared services automation. CET/CEST. Same-day.',
  h1: 'UiPath Job Support Europe: Real-Time RPA Expert Help for European Projects',
  tagline: 'Expert UiPath support during European working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, manufacturing, banking, and shared services automation. CET/CEST aligned.',
  heroEyebrow: 'UiPath Job Support Europe — CET/CEST Coverage',
  painIntro: 'Dealing with UiPath production failures on a European manufacturing, banking, or shared services RPA project? Our in-house UiPath experts cover CET/CEST hours and provide real-time support during your European working hours.',
  heroVariant: 'European enterprise UiPath deployments in 2026 span manufacturing (Germany, Netherlands), financial services (Switzerland, Netherlands, Germany), healthcare (Sweden, Germany, France), and large shared services automation programmes. EU GDPR requirements, multi-language document processing, and cross-border process automation add unique complexity. Our in-house UiPath experts provide real-time support aligned with your CET/CEST working hours.',
  geoLine: 'UiPath support for European developers in Germany, Netherlands, France, Ireland, Sweden, Switzerland, and other EU countries.',
  timezoneNote: 'Aligned with CET and CEST (Central European Time) working hours.',
  techSnippet: 'UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Citrix, GDPR-aware automation, multi-language OCR, manufacturing RPA, banking automation, REST APIs.',
  highlights: uipathHighlights,
  faqs: uipathGeoFaqs('Europe', 'CET and CEST'),
  useCasesSection: {
    title: 'Common UiPath Situations We Help With in Europe',
    cases: [
      'UiPath production support for European manufacturing and ERP automation (SAP, Oracle)',
      'Banking and financial services RPA — European compliance, GDPR-aware document automation',
      'Multi-language Document Understanding for European insurance, banking, and healthcare documents',
      'REFramework and queue architecture for European shared services centre automation',
      'Interview preparation and proxy support for UiPath Developer roles at European employers',
    ],
  },
  proxySection: {
    title: 'UiPath Proxy Interview Support for European Roles',
    intro: 'European UiPath interviews test manufacturing ERP automation, GDPR compliance awareness, and enterprise framework design. Our experts provide real-time live guidance during your European company interview.',
    points: [
      'REFramework and queue architecture guidance for European enterprise RPA interviews',
      'GDPR-aware automation design and data handling questions for EU employer interviews',
      'Manufacturing and ERP automation scenario support for European manufacturing sector roles',
      'Mock sessions for UiPath Developer and Solution Designer roles at European employers',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support Germany', href: '/uipath-job-support-germany/' },
      { label: 'UiPath job support Netherlands', href: '/uipath-job-support-netherlands/' },
    ],
    techLinks: [
      { label: 'UiPath job support', href: '/uipath-job-support/' },
      { label: 'UiPath proxy interview Europe', href: '/uipath-proxy-interview-europe/' },
    ],
    problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
    proxyLink: { label: 'UiPath proxy interview Europe', href: '/uipath-proxy-interview-europe/' },
  },
  lastmod: LASTMOD,
};

export const uipathProxyInterviewEurope: LandingPageConfig = {
  slug: 'uipath-proxy-interview-europe',
  title: 'UiPath Proxy Interview Support Europe — Live RPA Interview Help',
  description: 'UiPath interview for a European role? Real-time proxy support for REFramework, manufacturing RPA, and GDPR-aware automation scenarios. CET/CEST. Confidential.',
  canonical: `${BASE_URL}/uipath-proxy-interview-europe/`,
  keywords: ['UiPath proxy interview Europe', 'RPA proxy interview Europe', 'UiPath interview help Europe', 'UiPath live interview support Europe'],
  ogTitle: 'UiPath Proxy Interview Europe — Live Help',
  ogDescription: 'Live proxy support during UiPath interviews for European manufacturing, banking, and consulting roles. CET/CEST. Confidential.',
  h1: 'UiPath Proxy Interview Support Europe: Live RPA Interview Guidance',
  tagline: 'Real-time expert guidance during your live UiPath interview for European roles — manufacturing, banking, shared services, and GDPR-aware automation scenarios. CET/CEST.',
  heroEyebrow: 'UiPath Interview Support Europe — CET/CEST',
  painIntro: 'UiPath interview for a European manufacturing firm, bank, or consulting practice? Get live expert guidance — REFramework, Document Understanding, GDPR awareness, and enterprise automation scenarios covered.',
  heroVariant: 'European UiPath interviews in 2026 test sector-specific knowledge — manufacturing ERP automation, European banking and insurance document processing, GDPR-compliant data handling in bots, and enterprise REFramework architecture. Our experts provide discreet real-time guidance during your European interview.',
  geoLine: 'UiPath proxy interview support for European roles across Germany, Netherlands, France, Ireland, Sweden, Switzerland.',
  timezoneNote: 'Available 24/7 — CET/CEST time zones covered.',
  techSnippet: 'REFramework, queues, Document Understanding, manufacturing automation, banking RPA, GDPR-aware design, API integrations, Citrix automation.',
  highlights: uipathHighlights,
  faqs: uipathProxyFaqs('Europe'),
  useCasesSection: {
    title: 'European UiPath Interview Scenarios We Cover',
    cases: [
      'Manufacturing and ERP automation — SAP, Oracle process automation in UiPath',
      'European banking and insurance document automation with GDPR data handling',
      'Shared services automation — invoice processing, HR workflows, multi-language document handling',
      'REFramework design for high-volume European enterprise transaction processing',
    ],
  },
  proxySection: {
    title: 'European UiPath Interview Roles We Support',
    intro: 'Live proxy support for UiPath roles at European employers:',
    points: [
      'UiPath Developer at European manufacturing and automotive companies',
      'RPA Consultant at European Big 4 and boutique RPA firms',
      'UiPath Developer at European banks, insurance, and financial services firms',
      'Senior UiPath Developer at European shared services and BPO organizations',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support Europe', href: '/uipath-job-support-europe/' },
      { label: 'UiPath proxy interview UK', href: '/uipath-proxy-interview-uk/' },
    ],
    techLinks: [
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      { label: 'UiPath job support Europe', href: '/uipath-job-support-europe/' },
    ],
    problemLink: { label: 'UiPath interview scheduled Europe', href: '/uipath-interview-scheduled-europe/' },
    proxyLink: { label: 'UiPath job support Europe', href: '/uipath-job-support-europe/' },
  },
  lastmod: LASTMOD,
};

export const uipathInterviewScheduledEurope: LandingPageConfig = {
  slug: 'uipath-interview-scheduled-europe',
  title: 'Get UiPath Interviews Scheduled Europe — RPA Profile Marketing',
  description: 'Not getting UiPath calls for European roles? Expert profile engineering for UiPath Developer roles across Germany, Netherlands, France, Sweden, Switzerland. Start getting calls.',
  canonical: `${BASE_URL}/uipath-interview-scheduled-europe/`,
  keywords: ['get UiPath interviews Europe', 'UiPath profile marketing Europe', 'RPA interview calls Europe', 'UiPath job search Europe'],
  ogTitle: 'Get UiPath Interviews in Europe — Profile Help',
  ogDescription: 'Expert UiPath profile engineering for European RPA roles across Germany, Netherlands, France, Sweden, Switzerland.',
  h1: 'Get UiPath Interviews Scheduled in Europe: RPA Profile & Job Search Support',
  tagline: 'Profile engineering and recruiter outreach to generate UiPath and RPA interview calls across Germany, Netherlands, France, Ireland, Sweden, Switzerland, and broader Europe.',
  heroEyebrow: 'UiPath Job Search Europe — 2026 Market Positioning',
  painIntro: 'Not getting UiPath calls for European manufacturing, banking, or consulting roles? Profile positioning for European RPA markets requires sector-specific keywords and GDPR-aware framing.',
  heroVariant: 'European UiPath hiring in 2026 spans manufacturing (Germany, Netherlands), financial services (Zurich, Amsterdam, Frankfurt), healthcare (Sweden, Germany), and large shared services automation programmes. We position your profile for the exact UiPath keywords and sector framing that European recruiters search for.',
  geoLine: 'UiPath profile marketing for roles across Germany, Netherlands, France, Ireland, Sweden, Switzerland, and wider Europe.',
  timezoneNote: 'Profile work and outreach begin same-day. CET/CEST aligned.',
  techSnippet: 'Profile keyword coverage: UiPath Studio, Orchestrator, REFramework, Document Understanding, manufacturing automation, European banking RPA, GDPR-aware design.',
  highlights: uipathHighlights,
  faqs: uipathScheduledFaqs('Europe'),
  useCasesSection: {
    title: 'How We Get You UiPath Calls in Europe',
    cases: [
      'Resume engineering for European manufacturing and banking UiPath Developer JDs',
      'LinkedIn optimization with European UiPath recruiter and sector-specific keyword targeting',
      'Positioning automation experience for European financial services and shared services roles',
      'Outreach to European UiPath staffing firms and Big 4 consulting practices',
    ],
  },
  proxySection: {
    title: 'Full European UiPath Career Support',
    intro: 'We support the complete European UiPath job search journey:',
    points: [
      'UiPath resume engineering for European ATS and recruiter keyword filtering',
      'LinkedIn positioning for European UiPath Developer and RPA Consultant visibility',
      'Targeted outreach to European UiPath staffing firms and direct employers',
      'Interview preparation and proxy support once calls come in',
    ],
  },
  relatedLinks: {
    geoLinks: [
      { label: 'UiPath job support Europe', href: '/uipath-job-support-europe/' },
      { label: 'UiPath proxy interview Europe', href: '/uipath-proxy-interview-europe/' },
    ],
    techLinks: [
      { label: 'UiPath interview scheduled', href: '/uipath-interview-scheduled/' },
      { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    ],
    problemLink: { label: 'UiPath job support Europe', href: '/uipath-job-support-europe/' },
    proxyLink: { label: 'UiPath proxy interview Europe', href: '/uipath-proxy-interview-europe/' },
  },
  lastmod: LASTMOD,
};

// ─── European Country Pages ──────────────────────────────────────────────────

function euCountryJobSupportPage(
  slug: string,
  country: string,
  timezone: string,
  context: string,
  sector: string,
): LandingPageConfig {
  return {
    slug,
    title: `UiPath Job Support ${country} — Real-Time RPA Developer Help`,
    description: `Real-time UiPath job support for ${country} RPA developers. Studio, Orchestrator, REFramework, queues, Document Understanding, production bot support. ${timezone}. ${sector}.`,
    canonical: `${BASE_URL}/${slug}/`,
    keywords: [`UiPath job support ${country}`, `RPA job support ${country}`, `UiPath developer support ${country}`, `UiPath production support ${country}`],
    h1: `UiPath Job Support ${country}: Real-Time RPA Expert Help`,
    tagline: `Expert UiPath support during ${country} working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, and ${sector.toLowerCase()} automation. ${timezone}.`,
    heroEyebrow: `UiPath Job Support ${country} — ${timezone}`,
    painIntro: `Stuck in UiPath production issues on a ${country} ${sector.toLowerCase()} or enterprise RPA project? Our in-house UiPath experts cover ${timezone} and provide real-time support during your ${country} working hours.`,
    heroVariant: `${country} enterprise UiPath deployments in 2026 span ${context}. Our in-house experts provide real-time UiPath support during your working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, and production bot stability.`,
    geoLine: `UiPath support for ${country} developers and RPA professionals. Also covering nearby European countries and remote roles.`,
    timezoneNote: `Aligned with ${timezone} working hours.`,
    techSnippet: `UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Citrix automation, REST APIs, GDPR-aware automation, ${sector} automation.`,
    highlights: uipathHighlights,
    faqs: uipathGeoFaqs(country, timezone),
    useCasesSection: {
      title: `Common UiPath Situations We Help With in ${country}`,
      cases: [
        `UiPath production support for ${country} ${sector.toLowerCase()} automation projects`,
        `REFramework debugging and queue architecture for ${country} enterprise deployments`,
        `Document Understanding support for ${country} document processing workflows`,
        `GDPR-aware bot design and secure logging for ${country} data protection compliance`,
        `Interview preparation and proxy support for UiPath Developer roles at ${country} employers`,
      ],
    },
    proxySection: {
      title: `UiPath Proxy Interview Support for ${country} Roles`,
      intro: `${country} UiPath interviews test sector-specific automation knowledge and enterprise framework design. Our experts provide real-time live guidance during your ${country} company interview.`,
      points: [
        `REFramework and queue architecture guidance for ${country} enterprise RPA interviews`,
        `GDPR-aware automation and data handling questions for ${country} employer interviews`,
        `${sector} automation scenario support for ${country} sector-specific roles`,
        `Mock sessions for UiPath Developer and Solution Designer roles at ${country} employers`,
      ],
    },
    relatedLinks: {
      geoLinks: [
        { label: `UiPath job support Europe`, href: `/uipath-job-support-europe/` },
        { label: `UiPath job support UK`, href: `/uipath-job-support-uk/` },
      ],
      techLinks: [
        { label: 'UiPath job support', href: '/uipath-job-support/' },
        { label: 'UiPath proxy interview Europe', href: '/uipath-proxy-interview-europe/' },
      ],
      problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
      proxyLink: { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    },
    lastmod: LASTMOD,
  };
}

export const uipathJobSupportIreland = euCountryJobSupportPage(
  'uipath-job-support-ireland',
  'Ireland',
  'IST (Irish Standard Time)',
  'financial services (AIB, Bank of Ireland, Zurich Insurance), tech MNCs (Google, Meta, Apple, Microsoft Dublin campuses), and pharma/medtech automation',
  'Financial Services',
);

export const uipathJobSupportGermany = euCountryJobSupportPage(
  'uipath-job-support-germany',
  'Germany',
  'CET/CEST',
  'manufacturing (Volkswagen, BMW, Siemens, Bosch, BASF), banking (Deutsche Bank, Commerzbank), insurance (Allianz, Munich Re), and SAP-heavy enterprise automation',
  'Manufacturing',
);

export const uipathJobSupportNetherlands = euCountryJobSupportPage(
  'uipath-job-support-netherlands',
  'Netherlands',
  'CET/CEST',
  'financial services (ING, ABN AMRO, Rabobank, NN Group), logistics and supply chain automation, energy sector (Shell), and shared services centre automation',
  'Financial Services',
);

export const uipathJobSupportFrance = euCountryJobSupportPage(
  'uipath-job-support-france',
  'France',
  'CET/CEST',
  'banking (BNP Paribas, Société Générale, Crédit Agricole), insurance, telecom (Orange, Bouygues), and government digital transformation',
  'Banking',
);

export const uipathJobSupportSweden = euCountryJobSupportPage(
  'uipath-job-support-sweden',
  'Sweden',
  'CET/CEST',
  'financial services (Nordea, SEB, Handelsbanken, Swedbank), healthcare (SAS, Karolinska systems), manufacturing (Volvo, IKEA, Ericsson), and public sector digital automation',
  'Healthcare',
);

export const uipathJobSupportSwitzerland = euCountryJobSupportPage(
  'uipath-job-support-switzerland',
  'Switzerland',
  'CET/CEST',
  'banking and wealth management (UBS, Credit Suisse/UBS, Julius Baer), pharma (Novartis, Roche, Lonza), insurance (Zurich Insurance, Swiss Re), and private banking automation',
  'Banking',
);

// ─── Optional global country pages ───────────────────────────────────────────

function globalCountryJobSupportPage(
  slug: string,
  country: string,
  timezone: string,
  context: string,
  sector: string,
): LandingPageConfig {
  return {
    slug,
    title: `UiPath Job Support ${country} — Real-Time RPA Developer Help`,
    description: `Real-time UiPath job support for ${country} RPA developers. Studio, Orchestrator, REFramework, queues, Document Understanding, production bot support. ${timezone}. ${sector}.`,
    canonical: `${BASE_URL}/${slug}/`,
    keywords: [`UiPath job support ${country}`, `RPA job support ${country}`, `UiPath developer support ${country}`, `UiPath production support ${country}`],
    h1: `UiPath Job Support ${country}: Real-Time RPA Expert Help`,
    tagline: `Expert UiPath support during ${country} working hours — Studio, Orchestrator, REFramework, queues, Document Understanding, and ${sector.toLowerCase()} automation. ${timezone}.`,
    heroEyebrow: `UiPath Job Support ${country} — ${timezone}`,
    painIntro: `Stuck in UiPath production issues on a ${country} RPA project? Our in-house UiPath experts cover ${timezone} and provide real-time support during your ${country} working hours.`,
    heroVariant: `${country} enterprise UiPath deployments in 2026 span ${context}. Our in-house experts provide real-time UiPath support — Studio, Orchestrator, REFramework, queues, Document Understanding, and production bot stability.`,
    geoLine: `UiPath support for ${country} developers and RPA professionals. Also covering other global regions.`,
    timezoneNote: `Aligned with ${timezone} working hours.`,
    techSnippet: `UiPath Studio, Orchestrator, REFramework, Queues, Document Understanding, Citrix automation, REST APIs, ${sector} automation.`,
    highlights: uipathHighlights,
    faqs: uipathGeoFaqs(country, timezone),
    useCasesSection: {
      title: `Common UiPath Situations We Help With in ${country}`,
      cases: [
        `UiPath production support for ${country} ${sector.toLowerCase()} automation projects`,
        `REFramework debugging and queue architecture for ${country} enterprise deployments`,
        `Document Understanding support for ${country} document processing workflows`,
        `Interview preparation and proxy support for UiPath Developer roles at ${country} employers`,
      ],
    },
    proxySection: {
      title: `UiPath Proxy Interview Support for ${country} Roles`,
      intro: `Our experts provide real-time live guidance during your live UiPath interview for ${country} company roles.`,
      points: [
        `REFramework and queue architecture guidance for ${country} enterprise RPA interviews`,
        `${sector} automation scenario support for ${country} sector-specific roles`,
        `Mock sessions for UiPath Developer and Solution Designer roles at ${country} employers`,
      ],
    },
    relatedLinks: {
      geoLinks: [
        { label: 'UiPath job support USA', href: '/uipath-job-support-usa/' },
        { label: 'UiPath job support UK', href: '/uipath-job-support-uk/' },
      ],
      techLinks: [
        { label: 'UiPath job support', href: '/uipath-job-support/' },
        { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
      ],
      problemLink: { label: 'UiPath production support', href: '/uipath-production-support/' },
      proxyLink: { label: 'UiPath proxy interview support', href: '/uipath-proxy-interview-support/' },
    },
    lastmod: LASTMOD,
  };
}

export const uipathJobSupportAustralia = globalCountryJobSupportPage(
  'uipath-job-support-australia',
  'Australia',
  'AEST/AEDT',
  'banking (CBA, ANZ, NAB, Westpac), insurance, government digital services, healthcare, and mining/energy operations automation',
  'Banking',
);

export const uipathJobSupportNewZealand = globalCountryJobSupportPage(
  'uipath-job-support-new-zealand',
  'New Zealand',
  'NZST/NZDT',
  'banking, government digital services, healthcare, and utility automation',
  'Banking',
);

export const uipathJobSupportSingapore = globalCountryJobSupportPage(
  'uipath-job-support-singapore',
  'Singapore',
  'SGT (UTC+8)',
  'banking (DBS, OCBC, UOB, MAS-regulated fintechs), logistics (PSA, ST Engineering), healthcare, government digital services, and APAC shared services centres',
  'Banking',
);

export const uipathJobSupportUAE = globalCountryJobSupportPage(
  'uipath-job-support-uae',
  'UAE',
  'GST (UTC+4)',
  'banking and finance (Emirates NBD, ADCB, FAB), government digital transformation (UAE Smart Government), oil and gas automation, and shared services centre automation',
  'Banking',
);

export const uipathJobSupportSaudiArabia = globalCountryJobSupportPage(
  'uipath-job-support-saudi-arabia',
  'Saudi Arabia',
  'AST (UTC+3)',
  'banking (Al Rajhi, Saudi Aramco finance), government Vision 2030 digital transformation, oil and gas (Aramco, SABIC), and healthcare automation',
  'Banking',
);

// ─── All UiPath pages array ───────────────────────────────────────────────────

export const allUiPathPages: LandingPageConfig[] = [
  uipathJobSupport,
  uipathProxyInterviewSupport,
  uipathInterviewScheduled,
  rpaJobSupport,
  rpaProxyInterviewSupport,
  uipathJobSupportUSA,
  uipathProxyInterviewUSA,
  uipathInterviewScheduledUSA,
  uipathJobSupportCanada,
  uipathProxyInterviewCanada,
  uipathInterviewScheduledCanada,
  uipathJobSupportUK,
  uipathProxyInterviewUK,
  uipathInterviewScheduledUK,
  uipathJobSupportEurope,
  uipathProxyInterviewEurope,
  uipathInterviewScheduledEurope,
  uipathJobSupportIreland,
  uipathJobSupportGermany,
  uipathJobSupportNetherlands,
  uipathJobSupportFrance,
  uipathJobSupportSweden,
  uipathJobSupportSwitzerland,
  uipathJobSupportAustralia,
  uipathJobSupportNewZealand,
  uipathJobSupportSingapore,
  uipathJobSupportUAE,
  uipathJobSupportSaudiArabia,
];
