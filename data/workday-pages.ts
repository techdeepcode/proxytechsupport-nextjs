import type { LandingPageConfig, LandingHighlight, LandingFaqItem, LandingRelatedLink } from './landing-pages';

const BASE_URL = 'https://proxytechsupport.com';
const LASTMOD = '2026-05-26T12:00:00.000Z';

// ─── Workday-specific highlights ────────────────────────────────────────────

const workdayHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Workday Job Support',
    description:
      'Live expert assistance during your working hours — tenant configuration, business process issues, integration failures, payroll problems, security access, and release regression support.',
  },
  {
    title: 'Workday Proxy Interview Assistance',
    description:
      'Expert-backed mock interviews and real-time live guidance during Workday HCM, integration, financials, payroll, reporting, and security consultant interviews.',
  },
  {
    title: 'Workday Interview Scheduling Support',
    description:
      'Profile engineering, Workday keyword targeting, LinkedIn optimization, and recruiter outreach to generate Workday consultant interview calls across USA, Canada, UK, and Europe.',
  },
];

// ─── FAQ generators ──────────────────────────────────────────────────────────

function workdayJobSupportFaqs(context: string): LandingFaqItem[] {
  return [
    {
      question: `What Workday job support do you provide${context ? ' for ' + context + ' roles' : ''}?`,
      answer: `We provide real-time Workday job support for active consultants and employees${context ? ' in ' + context : ''}. Our in-house Workday experts join your working hours and help with tenant configuration, HCM business process setup, security role issues, integration failures (EIB, Core Connector, Studio, REST/SOAP), payroll problems, reporting and calculated fields, Prism Analytics, Adaptive Planning, release regression testing, and daily production support. We cover Workday 2026R1 release impact across all modules. Same-day start available.`,
    },
    {
      question: 'Can you help with Workday production incidents and tenant issues?',
      answer:
        'Yes. Production firefighting is one of our core strengths. We have helped Workday consultants resolve critical tenant configuration errors, broken business processes, security access failures, integration connector issues, payroll calculation problems, and reporting breakdowns — often within the same working session. We support hypercare, SIT, UAT, and go-live periods.',
    },
    {
      question: 'Do you cover Workday 2026R1 release regression support?',
      answer:
        'Yes. Workday 2026R1 introduced changes across HCM, Payroll, Recruiting, Adaptive Planning, Integrations, and Reporting. We help consultants with regression testing, identifying breaking changes in business processes and integrations, validating payroll and time calculations post-release, and resolving issues introduced by the 2026R1 tenant update.',
    },
    {
      question: 'Is the service confidential?',
      answer:
        'Absolutely. All Workday job support sessions are completely confidential. We do not share client or employer information with any third party. NDAs are available on request. We treat every engagement — whether job support, interview assistance, or scheduling support — with full professional discretion.',
    },
    {
      question: 'How quickly can I get Workday support started?',
      answer:
        'In most cases we can start the same day you contact us. We maintain an in-house Workday expert team — no sub-contracting. Reach out via WhatsApp and we will match you with the right Workday module expert immediately.',
    },
  ];
}

function workdayProxyFaqs(context: string): LandingFaqItem[] {
  return [
    {
      question: `What Workday proxy interview support do you provide${context ? ' for ' + context : ''}?`,
      answer: `We provide real-time, discreet Workday proxy interview support${context ? ' for ' + context + ' interviews' : ''}. Our in-house Workday experts join your live interview session and guide you through technical and functional questions covering HCM business processes, integration architecture, payroll configuration, security role design, reporting, Adaptive Planning, and 2026R1 release workflows. We cover scenario-based questions, tenant-level technical discussions, and real-world implementation walkthroughs expected by Workday hiring panels.`,
    },
    {
      question: 'What Workday interview formats do you support?',
      answer:
        'We support all Workday interview formats: technical functional panels, configuration walkthroughs, scenario-based discussions, integration architecture reviews, system design sessions, live configuration demos, and behavioral rounds. Whether you are interviewing for a Workday HCM consultant, integration consultant, financials consultant, payroll analyst, or reporting specialist role — we have the right expert to guide you.',
    },
    {
      question: 'Can you help with Workday HCM, integration, and financials interview preparation?',
      answer:
        'Yes. We cover Workday HCM (Core HR, Staffing, Absence, Benefits, Compensation, Talent), Integration (EIB, Core Connector, Studio, PECI, REST/SOAP, Workday Extend), Financial Management (AP, AR, General Ledger, Procurement, Projects), Payroll, Reporting (Advanced, Matrix, Composite, Prism), and Security (domain security, role-based access, business process security). Our experts have real project experience in each module area.',
    },
    {
      question: 'Is Workday proxy interview support confidential?',
      answer:
        'Yes. All proxy interview sessions are fully confidential. We never disclose client identities, employer names, or interview details. Our experts provide discreet real-time guidance through audio or chat — calibrated to the format of your specific interview.',
    },
    {
      question: 'How do I get started with Workday proxy interview support?',
      answer:
        'Contact us on WhatsApp with your interview date, the role (e.g. Workday HCM Consultant, Integration Consultant, Financials Analyst), employer type, and the modules/topics likely to be covered. We will assign the right Workday expert and align on your background before the interview.',
    },
  ];
}

function workdayScheduledFaqs(context: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help Workday professionals get interview calls${context ? ' in ' + context : ''}?`,
      answer: `We help Workday consultants and professionals${context ? ' in ' + context : ''} get interview calls through profile engineering, Workday keyword targeting, LinkedIn positioning, and recruiter outreach. We optimize your resume and LinkedIn profile for Workday HCM, Integration, Financials, Payroll, Reporting, and Security roles — using the exact keywords Workday-focused recruiters and staffing firms search for. We also support active job portal optimization and follow-up outreach strategy.`,
    },
    {
      question: 'What Workday profiles and specializations do you support?',
      answer:
        'We support all Workday functional and technical profiles: HCM Consultant, Integration Consultant, Financials Consultant, Payroll Analyst, Reporting Specialist, Security Administrator, Adaptive Planning Consultant, Recruiting Consultant, and Testing/Release Support specialist. We position your profile against the current 2026 Workday job market demand.',
    },
    {
      question: 'Can you help me if I have limited Workday experience?',
      answer:
        'Yes. We work with professionals at all stages — from those transitioning into Workday consulting, to experienced consultants moving between modules, to senior architects looking for principal or lead roles. We align your existing skills with Workday terminology and job market expectations to maximize recruiter visibility.',
    },
    {
      question: 'Do you help with Workday contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099) and full-time employment searches. We understand the staffing landscape for Workday consulting — including direct client roles, Big 4 consulting positions, and boutique Workday partner firms — and position your profile accordingly.',
    },
    {
      question: 'How quickly can I start getting Workday interview calls?',
      answer:
        'Profile changes and outreach can begin the same day. Most clients start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current Workday job market in their region and specialization.',
    },
  ];
}

function workdayModuleFaqs(module: string, topics: string): LandingFaqItem[] {
  return [
    {
      question: `What ${module} job support do you provide?`,
      answer: `We provide real-time ${module} job support for active Workday consultants and employees. Our experts help with ${topics} — during your working hours, same-day. We cover production issues, tenant configuration problems, business process failures, integration errors, and release regression support including Workday 2026R1 changes specific to ${module}.`,
    },
    {
      question: `Can you help with ${module} production issues?`,
      answer: `Yes. ${module} production support is one of our core capabilities. We help resolve critical ${module} configuration errors, broken workflows, data integrity issues, integration failures affecting ${module}, and calculation or reporting problems — often within the same session you contact us.`,
    },
    {
      question: `Do you offer proxy interview support for ${module} roles?`,
      answer: `Yes. We provide real-time expert guidance during live ${module} technical and functional interviews. Our in-house experts help you navigate configuration scenario questions, business process design discussions, integration architecture points, and real-world implementation walkthroughs expected in ${module} consultant interviews.`,
    },
    {
      question: 'How much does Workday job support cost?',
      answer:
        'Pricing is flexible and depends on the module, hours needed, and engagement type (daily ongoing support vs. per-incident). Contact us on WhatsApp for a quick quote — we offer affordable plans for both freshers building Workday experience and senior consultants handling complex enterprise deliverables.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp or call us. Share your Workday module, current challenge or issue, and timeline. We will assign the right in-house Workday expert and you can be up and running the same day.',
    },
  ];
}

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY CORE HUB PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupport: LandingPageConfig = {
  slug: 'workday-job-support',
  title: 'Workday Job Support — Real-Time Workday HCM, Finance & Integration Help',
  description:
    'Struggling with Workday tenant issues, integration failures, or payroll problems? Get real-time Workday job support from in-house experts. HCM, Financials, Payroll, Integrations, Reporting, Security, Adaptive Planning. 2026R1 release support. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support/`,
  keywords: [
    'Workday job support', 'Workday proxy job support', 'Workday real-time support',
    'Workday HCM support', 'Workday HRIS job support', 'Workday HRIS support',
    'Workday production support', 'Workday tenant support',
    'Workday integration support', 'Workday consultant help', '2026R1 Workday support',
  ],
  h1: 'Workday Job Support — Real-Time Expert Help for HCM, Finance & Integrations',
  tagline: 'Live Workday support during your working hours — tenant issues, business process configuration, integration failures, payroll problems, reporting, security, and 2026R1 release regression support.',
  heroEyebrow: 'Workday Job Support — Updated for 2026R1',
  painIntro:
    'Stuck in a Workday production ticket with no resolution in sight? Tenant configuration broken after the 2026R1 update? Integration connector failing before a client deadline? Payroll off-cycle breaking before month-end? You need a Workday expert — not a ticket queue.',
  heroVariant:
    'Workday environments are complex — HCM business processes, EIB/Studio integrations, security domain configurations, Adaptive Planning models, and Prism Analytics dashboards all interact in ways that take deep tenant-level experience to resolve quickly. Our in-house Workday experts join your session and provide hands-on real-time help — no sub-contracting, same-day available, all time zones covered. Updated for Workday 2026R1 release impact, AI-driven workflow changes, and current enterprise market demand.',
  geoLine: 'Supporting Workday consultants and employees across USA, Canada, UK, Europe, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asian Pacific business hours.',
  techSnippet: 'We support all Workday modules: HCM, HRIS, Financial Management, Payroll, Integrations (EIB, Core Connector, Studio, REST/SOAP), Adaptive Planning, Recruiting, Reporting, Prism Analytics, Security, Absence, Time Tracking, Benefits, Compensation, Workday Extend, and Workday 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs(''),
  useCasesSection: {
    title: 'Workday Situations We Help Resolve',
    cases: [
      'Business process stuck or broken after Workday 2026R1 tenant update — immediate configuration review and fix',
      'EIB or Core Connector integration failing before a client go-live or payroll run cutover',
      'Security role misconfiguration blocking users from critical HCM or Finance tasks',
      'Workday Payroll calculation errors or off-cycle payroll failures before month-end close',
      'Adaptive Planning model errors, driver-based assumptions broken, or reporting not reconciling',
      'Prism Analytics data source failures, dashboard errors, or calculated field issues blocking reporting deadlines',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support',
    intro:
      'Workday consultant interviews require deep module knowledge, real implementation experience, and the ability to walk through configuration scenarios confidently. Our experts provide real-time, discreet guidance during your live Workday interview — covering HCM, Integration, Financials, Payroll, Reporting, Security, and 2026R1 release topics.',
    points: [
      'Real-time guidance during Workday HCM and Integration consultant technical panels',
      'Live support for Workday Financials, Payroll, and Reporting specialist interviews',
      'Expert coaching through scenario-based configuration walkthroughs and tenant design questions',
      'Help navigating Workday 2026R1 release impact questions in interviews',
      'Mock Workday interviews calibrated to Big 4, boutique partner, and direct client hiring formats',
    ],
  },
  bottomCTAHeading: 'Need Real-Time Workday Job Support or Interview Help Now?',
  bottomCTABody: 'Our in-house Workday experts are available same-day — tenant issues, integration failures, payroll problems, release regression, or live interview guidance. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'Workday job support Canada', href: '/workday-job-support-canada/' },
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
      { label: 'Workday HRIS proxy interview', href: '/workday-hris-proxy-interview-support/' },
      { label: 'Workday production support', href: '/workday-production-support/' },
      { label: 'Workday implementation support', href: '/workday-implementation-support/' },
      { label: 'Workday Business Analyst job support', href: '/workday-business-analyst-job-support/' },
      { label: 'Workday Integration Consultant job support', href: '/workday-integration-consultant-job-support/' },
      { label: 'Workday HCM Consultant job support', href: '/workday-hcm-consultant-job-support/' },
      { label: 'Workday job support New York', href: '/new-york-workday-job-support/' },
      { label: 'Workday job support London', href: '/london-workday-job-support/' },
      { label: 'Workday job support Toronto', href: '/toronto-workday-job-support/' },
      { label: 'Workday job support Dublin', href: '/dublin-workday-job-support/' },
      { label: 'Workday job support Sydney', href: '/sydney-workday-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayProxyInterviewSupport: LandingPageConfig = {
  slug: 'workday-proxy-interview-support',
  title: 'Workday Proxy Interview Support — Real-Time Live Interview Guidance',
  description:
    'Workday interview coming up? Get real-time proxy interview support from in-house Workday experts. HCM, Integration, Financials, Payroll, Reporting, Security consultant roles. Live discreet guidance during your interview. Same-day available.',
  canonical: `${BASE_URL}/workday-proxy-interview-support/`,
  keywords: [
    'Workday proxy interview support', 'Workday proxy interview', 'Workday interview help',
    'Workday interview assistance', 'Workday HCM interview support', 'Workday integration interview',
    'live Workday interview guidance', 'Workday consultant interview',
    'Workday HRIS proxy interview support', 'HRIS Analyst interview support',
  ],
  h1: 'Workday Proxy Interview Support — Live Real-Time Guidance During Your Interview',
  tagline: 'Discreet real-time expert guidance during live Workday technical and functional interviews — HCM, Integration, Financials, Payroll, Reporting, Security, and 2026R1 topics covered.',
  heroEyebrow: 'Workday Interview Support — 2026 Updated',
  painIntro:
    'Workday interview scheduled but not confident about the deep configuration questions? HCM business process design, EIB/Studio integration architecture, security role setup, or Adaptive Planning model walkthroughs? Our experts join your live interview and guide you through it in real time.',
  heroVariant:
    'Workday interviews are rigorous — employers expect real tenant-level experience, module-specific configuration knowledge, and the ability to walk through business process design decisions on the spot. Whether you are interviewing for a Workday HCM Consultant, Integration Developer, Financials Analyst, Payroll Specialist, or Reporting expert role — at a Big 4 firm, a boutique Workday partner, or a direct enterprise client — our in-house experts provide live, discreet guidance throughout your session. Updated for 2026R1 release topics now common in Workday interviews.',
  geoLine: 'Supporting Workday interview candidates across USA, Canada, UK, Europe, Ireland, Germany, Netherlands, Australia, Singapore, and worldwide.',
  timezoneNote: 'Available for Workday interviews across all major time zones — EST, CST, PST, GMT, CET, AEST.',
  highlights: workdayHighlights,
  faqs: workdayProxyFaqs(''),
  useCasesSection: {
    title: 'Workday Interview Scenarios We Help Candidates Navigate',
    cases: [
      'Workday HCM Consultant panel — business process configuration, staffing models, absence and benefits setup',
      'Workday Integration Developer interview — EIB, Core Connector, Studio, PECI, REST/SOAP design questions',
      'Workday Financial Management interview — GL, AP/AR, procurement, project billing configuration scenarios',
      'Workday Payroll Consultant technical round — payroll calc rules, off-cycle, garnishments, year-end',
      'Workday Reporting Specialist — Advanced, Matrix, Composite report design, Prism Analytics, calculated fields',
      'Workday Security interview — domain security policies, role-based access, business process security design',
    ],
  },
  proxySection: {
    title: 'How Our Workday Proxy Interview Support Works',
    intro:
      'Our Workday proxy interview support is confidential, module-specific, and calibrated to employer expectations. Whether facing a Big 4 consulting firm panel, a Workday partner interview, or a direct enterprise client technical round — our expert joins your session and provides real-time guidance.',
    points: [
      'Share your interview date, role, employer type, and likely topics via WhatsApp — we assign the right Workday module expert',
      'Pre-interview alignment session to understand your background and calibrate answers to your experience level',
      'Expert joins your live interview and provides discreet real-time guidance throughout the session',
      'Coverage for configuration scenario questions, architecture walkthroughs, and 2026R1 release impact topics',
      'Post-interview debrief and support for follow-up rounds or additional Workday interviews',
    ],
  },
  bottomCTAHeading: 'Workday Interview Coming Up? Get Expert Live Guidance Now',
  bottomCTABody: 'Real-time proxy support for Workday HCM, Integration, Financials, Payroll, Reporting, and Security interviews. Contact us on WhatsApp now — same-day available.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday proxy interview USA', href: '/workday-proxy-interview-usa/' },
      { label: 'Workday proxy interview Canada', href: '/workday-proxy-interview-canada/' },
    ],
    techLinks: [
      { label: 'Workday job support', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday proxy interview UK', href: '/workday-proxy-interview-uk/' },
      { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
      { label: 'Proxy interview support global', href: '/proxy-interview-support/' },
      { label: 'Workday HRIS proxy interview', href: '/workday-hris-proxy-interview-support/' },
      { label: 'Workday proxy interview Ireland', href: '/workday-proxy-interview-ireland/' },
      { label: 'Workday proxy interview Germany', href: '/workday-proxy-interview-germany/' },
      { label: 'Workday proxy interview Australia', href: '/workday-proxy-interview-australia/' },
      { label: 'Workday proxy interview Singapore', href: '/workday-proxy-interview-singapore/' },
      { label: 'Workday HCM interview support', href: '/workday-hcm-interview-support/' },
      { label: 'Workday integration interview support', href: '/workday-integration-interview-support/' },
      { label: 'Workday final round interview support', href: '/workday-final-round-interview-support/' },
      { label: 'Workday live technical interview support', href: '/workday-live-technical-interview-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayInterviewScheduled: LandingPageConfig = {
  slug: 'workday-interview-scheduled',
  title: 'Get Workday Interviews Scheduled — Profile Engineering & Recruiter Outreach',
  description:
    'Not getting Workday interview calls? We optimize your Workday resume, LinkedIn profile, and keyword targeting to generate interview calls from USA, Canada, UK, and Europe. HCM, Integration, Financials, Payroll, Reporting roles. Start today.',
  canonical: `${BASE_URL}/workday-interview-scheduled/`,
  keywords: [
    'get Workday interviews scheduled', 'Workday interview calls', 'Workday profile optimization',
    'Workday resume support', 'Workday LinkedIn optimization', 'Workday recruiter outreach',
    'Workday job search support', 'Workday interview scheduling',
    'Workday HRIS interview scheduling', 'HRIS Analyst Workday interviews',
  ],
  h1: 'Get Workday Interviews Scheduled — Profile Engineering & Recruiter Outreach',
  tagline: 'Stop waiting for interview calls. We engineer your Workday profile for maximum recruiter visibility — HCM, Integration, Financials, Payroll, Reporting, and Security consultant roles.',
  heroEyebrow: 'Workday Interview Scheduling — May 2026',
  painIntro:
    'You have Workday experience but the interview calls are not coming. Your resume may be missing the exact Workday keywords recruiters search for. Your LinkedIn might not reflect 2026R1 skills. Your job board profiles may not be positioned for current enterprise demand. We fix this.',
  heroVariant:
    'The Workday consulting job market in 2026 is highly competitive — hundreds of candidates apply for each role. The difference between getting 10 calls a week and getting none is often down to how your profile is positioned. We use current Workday recruiter search patterns, 2026R1 module keywords, and enterprise demand signals to engineer your profile for visibility — and then support active outreach to Workday staffing firms and hiring managers across USA, Canada, UK, and Europe.',
  geoLine: 'Helping Workday professionals get interviews across USA, Canada, UK, Europe, Ireland, Germany, Netherlands, Australia, Singapore, and worldwide.',
  timezoneNote: 'Profile support and outreach aligned to your target job market — US, Canadian, UK, European, or global.',
  highlights: workdayHighlights,
  faqs: workdayScheduledFaqs(''),
  useCasesSection: {
    title: 'Workday Profile Situations We Resolve',
    cases: [
      'Experienced Workday HCM consultant applying to 50+ jobs with zero recruiter responses — profile keyword mismatch',
      'Workday Integration Developer with Studio experience but LinkedIn not showing up in recruiter searches',
      'Workday Financials professional transitioning from one vertical (healthcare) to another (financial services) — positioning gap',
      'Fresh Workday-certified professional with no enterprise project history — entry-level positioning strategy',
      'Senior Workday consultant targeting USA remote roles from outside the US — geographic positioning strategy',
      'Workday contractor between engagements needing rapid interview pipeline across multiple Workday staffing firms',
    ],
  },
  proxySection: {
    title: 'From Zero Calls to Interview Pipeline — Our Workday Profile Engineering Approach',
    intro:
      'Workday recruiters search very specifically — they look for module names, version keywords, certification indicators, and domain-specific terminology. Generic IT resumes do not surface in these searches. We rebuild your profile around what Workday-focused recruiters actually search for in 2026.',
    points: [
      'Workday module keyword engineering — HCM, Integration, Financials, Payroll, Reporting, Security, Adaptive Planning',
      '2026R1 and current feature keyword integration — AI-driven workflows, Extend, Prism Analytics, Data Cloud',
      'LinkedIn headline and summary repositioning for maximum Workday recruiter search visibility',
      'Job board profile optimization — Dice, LinkedIn, Indeed, Hired — with ATS-friendly structure',
      'Active outreach to Workday staffing firms and hiring managers in your target market',
    ],
  },
  bottomCTAHeading: 'Ready to Start Getting Workday Interview Calls?',
  bottomCTABody: 'We engineer your Workday profile for recruiter visibility and support active outreach — HCM, Integration, Financials, Payroll, and Reporting roles across USA, Canada, UK, and Europe. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Get Workday interviews scheduled USA', href: '/workday-interview-scheduled-usa/' },
      { label: 'Get Workday interviews scheduled Canada', href: '/workday-interview-scheduled-canada/' },
    ],
    techLinks: [
      { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      { label: 'Workday job support', href: '/workday-job-support/' },
    ],
    problemLink: { label: 'Struggling in your IT job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'Global interview scheduling support', href: '/get-interview-scheduled/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Get Workday interviews scheduled UK', href: '/workday-interview-scheduled-uk/' },
      { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
      { label: 'Get Workday interviews scheduled Ireland', href: '/workday-interview-scheduled-ireland/' },
      { label: 'Get Workday interviews scheduled Germany', href: '/workday-interview-scheduled-germany/' },
      { label: 'Get Workday interviews scheduled Australia', href: '/workday-interview-scheduled-australia/' },
      { label: 'Get Workday interviews scheduled Singapore', href: '/workday-interview-scheduled-singapore/' },
      { label: 'Get Workday interviews scheduled UAE', href: '/workday-interview-scheduled-uae/' },
      { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' },
    ],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY MODULE PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayHcmJobSupport: LandingPageConfig = {
  slug: 'workday-hcm-job-support',
  title: 'Workday HCM Job Support — Real-Time Human Capital Management Help',
  description:
    'Struggling with Workday HCM configuration? Get real-time expert support for Core HR, Staffing, Absence, Benefits, Compensation, Talent, and Recruiting — business process issues, tenant problems, 2026R1 release impact. Same-day start.',
  canonical: `${BASE_URL}/workday-hcm-job-support/`,
  keywords: [
    'Workday HCM job support', 'Workday Human Capital Management support', 'Workday Core HR help',
    'Workday HCM consultant support', 'Workday business process support', 'Workday staffing configuration',
    'Workday absence management support', 'Workday benefits configuration help',
    'Workday HRIS job support', 'Workday HRIS Analyst support', 'HRIS production support',
  ],
  h1: 'Workday HCM Job Support — Real-Time Human Capital Management Expert Help',
  tagline: 'Live Workday HCM support during your working hours — Core HR, Staffing, Absence, Benefits, Compensation, Talent, and 2026R1 release regression coverage.',
  heroEyebrow: 'Workday HCM Support — Updated for 2026R1',
  painIntro:
    'Business process broken after a 2026R1 tenant update? Staffing model misconfigured causing hiring workflow failures? Absence accrual not calculating correctly? HCM security role blocking critical transactions? Our Workday HCM experts resolve it in real time.',
  heroVariant:
    'Workday HCM covers the entire employee lifecycle — from hiring and onboarding through compensation, absence, benefits, performance, and offboarding. Each module has interdependencies that require deep tenant-level experience to configure and troubleshoot. Workday 2026R1 introduced AI-driven enhancements to Staffing, Recruiting, and Talent modules — creating new regression scenarios for active implementations. Our in-house HCM experts cover all of it.',
  geoLine: 'Supporting Workday HCM consultants and employees across USA, Canada, UK, Europe, Ireland, Germany, Netherlands, and worldwide.',
  timezoneNote: 'Available across US, UK, European, and Asia Pacific business hours for Workday HCM support.',
  techSnippet: 'We cover all Workday HCM and HRIS modules: Core HR, Staffing, Absence Management, Benefits Administration, Compensation, Talent & Performance, Recruiting, Learning, Time Tracking, HRIS Analyst daily support, and 2026R1 AI-driven HCM workflow changes.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday HCM', 'Core HR configuration, staffing model setup, business process design, absence accrual rules, benefits eligibility, compensation plans, talent review cycles, and 2026R1 HCM release changes'),
  useCasesSection: {
    title: 'Workday HCM Issues We Resolve',
    cases: [
      'Business process workflow stuck or routing incorrectly after 2026R1 tenant update',
      'Staffing model configuration error causing hiring or job change transaction failures',
      'Absence accrual plan not calculating correctly for a specific employee population',
      'Benefits eligibility rule causing incorrect enrollment or open enrollment errors',
      'Compensation grade profile mismatch preventing merit cycle completion',
      'Talent review calibration session failing due to security or business process misconfiguration',
    ],
  },
  proxySection: {
    title: 'Workday HCM Proxy Interview Support',
    intro:
      'Workday HCM interviews expect hands-on configuration knowledge — business process design, staffing model architecture, compensation structure setup, absence rule configuration, and real-world implementation scenarios. Our experts guide you through every question in real time.',
    points: [
      'Business process design and approval chain configuration questions',
      'Staffing model, job management, and position management architecture discussions',
      'Absence and time tracking configuration scenario walkthroughs',
      'Benefits eligibility and enrollment rule design questions',
      'Compensation structure, grade profiles, and merit cycle configuration',
      'Workday 2026R1 HCM AI enhancements and their impact on existing configurations',
    ],
  },
  bottomCTAHeading: 'Workday HCM Issue? Get Expert Help Now',
  bottomCTABody: 'Real-time HCM support for business process issues, absence calculation errors, benefits failures, compensation problems, and 2026R1 regression. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    additionalLinks: [
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
      { label: 'Workday recruiting job support', href: '/workday-recruiting-job-support/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayFinancialManagementJobSupport: LandingPageConfig = {
  slug: 'workday-financial-management-job-support',
  title: 'Workday Financial Management Job Support — Real-Time Finance Help',
  description:
    'Real-time Workday Financial Management support — General Ledger, Accounts Payable, Accounts Receivable, Procurement, Projects, banking, and close cycle issues. In-house Workday Finance experts. Same-day start.',
  canonical: `${BASE_URL}/workday-financial-management-job-support/`,
  keywords: [
    'Workday Financial Management job support', 'Workday Finance support', 'Workday General Ledger help',
    'Workday AP AR support', 'Workday Financials consultant help', 'Workday accounting support',
    'Workday procurement support', 'Workday Finance configuration help',
  ],
  h1: 'Workday Financial Management Job Support — GL, AP, AR, Procurement & Projects',
  tagline: 'Live Workday Financials support — General Ledger, AP/AR, procurement workflows, banking, project billing, period close, and 2026R1 Finance module regression support.',
  heroEyebrow: 'Workday Financials Support — 2026R1 Ready',
  painIntro:
    'Period close blocked by a journal entry posting error? AP invoice matching rule broken? Procurement workflow failing before month-end? Workday Financial Management issues directly impact your financial close cycle — get expert help immediately.',
  heroVariant:
    'Workday Financial Management spans the full order-to-cash and procure-to-pay cycle — GL configuration, account posting rules, supplier invoice processing, customer payment application, project billing, banking reconciliation, and period close controls. Configuration errors compound quickly during close cycles. Workday 2026R1 introduced financial automation enhancements and AI-driven anomaly detection that affect existing posting rule configurations. Our in-house Finance module experts resolve issues before your deadlines.',
  geoLine: 'Supporting Workday Finance consultants and employees across USA, Canada, UK, Europe, Germany, Netherlands, Switzerland, and worldwide.',
  timezoneNote: 'Available across US, European, and UK business hours for Workday Financial Management support.',
  techSnippet: 'We cover: Workday GL, Accounts Payable, Accounts Receivable, Procurement, Inventory, Projects, Grants Management, Banking & Settlement, Financial Reporting, Period Close, and 2026R1 Finance automation changes.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Financial Management', 'GL account posting rules, AP invoice matching, AR payment applications, procurement approval workflows, project billing rules, period close processes, and 2026R1 Finance module changes'),
  useCasesSection: {
    title: 'Workday Finance Issues We Resolve',
    cases: [
      'Journal entry posting error blocking period close — account configuration or posting rule issue',
      'AP invoice matching failing for a supplier — tolerance rule or tax configuration problem',
      'AR customer payment not applying correctly — matching rule or deduction configuration error',
      'Procurement requisition workflow stuck in approval — business process or security configuration issue',
      'Project billing not generating correctly — billing schedule or service impact configuration',
      'Bank reconciliation failing — banking transaction matching rule or integration configuration problem',
    ],
  },
  proxySection: {
    title: 'Workday Financial Management Interview Support',
    intro:
      'Workday Finance interviews demand hands-on configuration knowledge — GL structure, supplier and customer setup, business process design for procurement and AP, close cycle management, and project accounting. Our experts guide you through every configuration scenario.',
    points: [
      'GL account structure, posting rules, and period close configuration questions',
      'AP and AR business process design and matching rule discussions',
      'Procurement workflow and approval chain architecture scenarios',
      'Project billing, revenue recognition, and cost management questions',
      'Workday 2026R1 Finance automation and AI anomaly detection impact',
    ],
  },
  bottomCTAHeading: 'Workday Finance Issue Holding Up Your Close Cycle?',
  bottomCTABody: 'Real-time Workday Financials expert help — GL, AP, AR, procurement, projects, close cycle. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday reporting analytics support', href: '/workday-reporting-analytics-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    additionalLinks: [
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayPayrollJobSupport: LandingPageConfig = {
  slug: 'workday-payroll-job-support',
  title: 'Workday Payroll Job Support — Real-Time Payroll Configuration & Fix Help',
  description:
    'Workday payroll calculation errors? Off-cycle failures? Tax configuration issues? Get real-time Workday Payroll job support from in-house experts. Payroll calc rules, garnishments, time tracking integration, year-end. Same-day start.',
  canonical: `${BASE_URL}/workday-payroll-job-support/`,
  keywords: [
    'Workday Payroll job support', 'Workday payroll help', 'Workday payroll calculation support',
    'Workday payroll consultant help', 'Workday payroll configuration', 'Workday off-cycle payroll support',
    'Workday tax configuration help', 'Workday payroll errors',
  ],
  h1: 'Workday Payroll Job Support — Payroll Calculation, Tax, Off-Cycle & Year-End Help',
  tagline: 'Real-time Workday Payroll support — calculation rule errors, off-cycle failures, garnishments, time tracking integration, tax configuration, and year-end processing issues.',
  heroEyebrow: 'Workday Payroll Support — 2026R1 Updated',
  painIntro:
    'Payroll running in 4 hours and the gross-to-net calculation is wrong? Off-cycle failing for a terminated employee? Tax configuration throwing errors after a 2026R1 update? Payroll issues cannot wait — our Workday Payroll experts resolve them immediately.',
  heroVariant:
    'Workday Payroll is one of the most sensitive modules in any implementation — calculation errors directly impact employee pay, tax filings, and compliance obligations. Workday 2026R1 introduced payroll compliance updates for multiple jurisdictions, changes to earning and deduction rule processing, and enhanced tax calculation logic that can break existing payroll configurations. Our in-house Workday Payroll experts have resolved hundreds of production payroll issues — from calc rule errors to year-end W-2 and T4 processing problems.',
  geoLine: 'Supporting Workday Payroll consultants and analysts across USA, Canada, UK, Ireland, and worldwide.',
  timezoneNote: 'Available across US, Canadian, and UK business hours for urgent Workday Payroll support.',
  techSnippet: 'We cover: Workday Payroll calculation rules, earning and deduction codes, payroll accounting, garnishments, off-cycle processing, time tracking integration, tax configuration, year-end (W-2, T4, P60), and 2026R1 payroll compliance changes.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Payroll', 'payroll calculation rule errors, earning/deduction code configuration, off-cycle processing, tax setup, garnishment management, time tracking integration, year-end W-2/T4 processing, and 2026R1 payroll compliance changes'),
  useCasesSection: {
    title: 'Workday Payroll Issues We Resolve',
    cases: [
      'Gross-to-net calculation incorrect for a specific employee population — earning or deduction rule error',
      'Off-cycle payroll failing for terminated employees — period setup or payroll run configuration issue',
      'Tax calculation errors after 2026R1 tenant update — jurisdiction configuration or rate table problem',
      'Garnishment not processing correctly — order configuration or withholding rule issue',
      'Time tracking integration not feeding into payroll correctly — integration setup or mapping problem',
      'Year-end W-2 or T4 box amounts incorrect — earnings code or tax mapping configuration error',
    ],
  },
  proxySection: {
    title: 'Workday Payroll Interview Support',
    intro:
      'Workday Payroll interviews test deep configuration knowledge — calc rule design, earning and deduction code structure, payroll accounting, tax setup, garnishment processing, and year-end workflows. Our experts guide you through every scenario question.',
    points: [
      'Payroll calculation rule design and override logic questions',
      'Earning and deduction code structure and setup scenarios',
      'Off-cycle processing, retro pay, and manual payment walkthroughs',
      'Tax configuration, multi-jurisdiction payroll, and compliance questions',
      'Garnishment order setup and withholding rule design',
      'Year-end processing and W-2/T4 configuration discussions',
    ],
  },
  bottomCTAHeading: 'Workday Payroll Issue Before Your Run? Get Expert Help Now',
  bottomCTABody: 'Real-time Workday Payroll support — calculation errors, off-cycle failures, tax issues, garnishments, year-end. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support Canada', href: '/workday-job-support-canada/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    additionalLinks: [
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayAdaptivePlanningJobSupport: LandingPageConfig = {
  slug: 'workday-adaptive-planning-job-support',
  title: 'Workday Adaptive Planning Job Support — Real-Time FP&A & Planning Help',
  description:
    'Workday Adaptive Planning model broken? Reporting not reconciling? Driver assumptions failing? Get real-time Workday Adaptive Planning job support from in-house experts. FP&A, budgeting, forecasting, workforce planning. Same-day.',
  canonical: `${BASE_URL}/workday-adaptive-planning-job-support/`,
  keywords: [
    'Workday Adaptive Planning job support', 'Workday Adaptive Planning help', 'Workday FP&A support',
    'Workday planning model support', 'Workday budgeting support', 'Workday forecasting help',
    'Workday Adaptive Planning consultant', 'Workday workforce planning support',
  ],
  h1: 'Workday Adaptive Planning Job Support — FP&A, Budgeting, Forecasting & Reporting Help',
  tagline: 'Real-time Workday Adaptive Planning support — model configuration errors, driver-based assumption failures, reporting reconciliation issues, workforce planning, and 2026R1 planning enhancements.',
  heroEyebrow: 'Workday Adaptive Planning Support — 2026R1',
  painIntro:
    'Adaptive Planning model not reconciling with actuals? Driver-based budget assumptions producing incorrect forecasts? Workforce planning headcount not matching HCM data? Board reporting package broken before the CFO review? Our Adaptive Planning experts fix it now.',
  heroVariant:
    'Workday Adaptive Planning (formerly Adaptive Insights) is the FP&A backbone for enterprise finance teams — covering operational budgeting, rolling forecasts, workforce planning, and board-level reporting. Model configuration errors, broken driver assumptions, and HCM data feed mismatches can derail entire planning cycles. Workday 2026R1 introduced enhanced Adaptive Planning AI forecasting features and updated HCM integration patterns that affect existing planning models.',
  geoLine: 'Supporting Workday Adaptive Planning consultants and FP&A teams across USA, Canada, UK, Europe, Germany, Switzerland, and worldwide.',
  timezoneNote: 'Available across US, UK, and European business hours for Workday Adaptive Planning support.',
  techSnippet: 'We cover: Workday Adaptive Planning model structure, driver-based budgeting, rolling forecasts, workforce planning, OfficeConnect, GL import/export, HCM integration, reporting packages, and 2026R1 AI forecasting enhancements.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Adaptive Planning', 'model configuration, driver-based assumptions, budget and forecast reconciliation, workforce planning, OfficeConnect reports, GL actuals import, HCM data feed integration, and 2026R1 AI forecasting changes'),
  useCasesSection: {
    title: 'Workday Adaptive Planning Issues We Resolve',
    cases: [
      'Budget model not reconciling with GL actuals — account mapping or import configuration error',
      'Driver-based assumption formulas producing incorrect forecast values — formula logic error',
      'Workforce planning headcount not matching Workday HCM data — integration feed or mapping issue',
      'OfficeConnect report layout broken or not refreshing correctly — template configuration problem',
      'Reporting package export not matching in-model values — sheet configuration or calculation issue',
      'Version management error — plan versus forecast versus actuals comparison not working correctly',
    ],
  },
  proxySection: {
    title: 'Workday Adaptive Planning Interview Support',
    intro:
      'Workday Adaptive Planning interviews test deep FP&A and model-building knowledge — model structure, driver design, workforce planning setup, and reporting configuration. Our experts guide you through every scenario question in real time.',
    points: [
      'Model architecture and version structure design questions',
      'Driver-based assumption configuration and formula design scenarios',
      'GL actuals import and reconciliation workflow questions',
      'Workforce planning setup and HCM integration discussions',
      'OfficeConnect and reporting package configuration walkthroughs',
      '2026R1 AI forecasting features and their impact on existing model designs',
    ],
  },
  bottomCTAHeading: 'Workday Adaptive Planning Issue? Get Expert Help Now',
  bottomCTABody: 'Real-time Adaptive Planning support — model errors, driver failures, forecast reconciliation, workforce planning, OfficeConnect. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday Financial Management support', href: '/workday-financial-management-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday reporting analytics support', href: '/workday-reporting-analytics-job-support/' },
    additionalLinks: [
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayIntegrationJobSupport: LandingPageConfig = {
  slug: 'workday-integration-job-support',
  title: 'Workday Integration Job Support — EIB, Core Connector, Studio & REST Help',
  description:
    'Workday integration failing? EIB errors, Core Connector issues, Studio faults, REST/SOAP failures? Get real-time Workday Integration job support from in-house experts. PECI, Extend, Workday API. Same-day start.',
  canonical: `${BASE_URL}/workday-integration-job-support/`,
  keywords: [
    'Workday integration job support', 'Workday EIB support', 'Workday Core Connector help',
    'Workday Studio support', 'Workday REST integration help', 'Workday SOAP integration support',
    'Workday integration consultant help', 'Workday PECI support',
  ],
  h1: 'Workday Integration Job Support — EIB, Core Connector, Studio, REST/SOAP & Extend',
  tagline: 'Live Workday Integration support — EIB data loads, Core Connector failures, Studio XSLT issues, REST/SOAP API errors, PECI problems, and Workday Extend integration development.',
  heroEyebrow: 'Workday Integration Support — 2026R1 Ready',
  painIntro:
    'EIB load failing with cryptic XSLT errors? Core Connector not triggering or delivering incorrectly? Studio integration throwing transformation exceptions? REST/SOAP API call returning unexpected errors? Workday integration failures cascade quickly — get expert help now.',
  heroVariant:
    'Workday Integration Cloud is the backbone connecting Workday to payroll providers, HR systems, benefits carriers, finance platforms, and custom enterprise applications. EIB, Core Connector, Studio, REST/SOAP Web Services, PECI, and Workday Extend each have distinct troubleshooting patterns that require deep platform experience. Workday 2026R1 updated several API endpoints, RAAS report structures, and Extend development patterns — creating new integration regression scenarios.',
  geoLine: 'Supporting Workday Integration consultants across USA, Canada, UK, Europe, Germany, Netherlands, Ireland, and worldwide.',
  timezoneNote: 'Available across US, UK, and European business hours for Workday Integration support.',
  techSnippet: 'We cover: EIB (inbound/outbound), Core Connector, Workday Studio, XSLT transformations, REST APIs, SOAP Web Services, PECI/PICOF, RAAS, Workday Extend, Document Transformation, and 2026R1 Integration Cloud updates.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Integration', 'EIB data load errors, Core Connector delivery failures, Studio XSLT transformation issues, REST/SOAP API call errors, PECI configuration problems, RAAS report output issues, and Workday Extend development challenges'),
  useCasesSection: {
    title: 'Workday Integration Issues We Resolve',
    cases: [
      'EIB inbound load failing — XSLT transformation error or data validation issue in the load file',
      'Core Connector not triggering on the expected schedule or delivering to the wrong endpoint',
      'Studio integration throwing an XSLT or XPath exception blocking a nightly payroll feed',
      'REST API call returning 400 or 403 errors after a 2026R1 API endpoint change',
      'PECI/PICOF integration to a third-party payroll provider delivering incorrect data structures',
      'Workday Extend custom app integration failing after a tenant update or API version change',
    ],
  },
  proxySection: {
    title: 'Workday Integration Interview Support',
    intro:
      'Workday Integration interviews expect detailed technical knowledge — EIB configuration, Core Connector architecture, Studio development, XSLT design, REST/SOAP API patterns, and Workday Extend fundamentals. Our experts guide you through every technical question in real time.',
    points: [
      'EIB inbound/outbound architecture and XSLT design questions',
      'Core Connector configuration and delivery endpoint scenarios',
      'Studio integration development — XSLT, XPath, transformation design discussions',
      'REST and SOAP Web Services design pattern questions',
      'PECI/PICOF payroll integration architecture walkthroughs',
      'Workday Extend custom app and REST API development questions',
    ],
  },
  bottomCTAHeading: 'Workday Integration Failing? Get Expert Help Now',
  bottomCTABody: 'Real-time Workday Integration support — EIB, Core Connector, Studio, REST/SOAP, PECI, Extend. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday security job support', href: '/workday-security-job-support/' },
    additionalLinks: [
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'Workday testing release support', href: '/workday-testing-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayReportingAnalyticsJobSupport: LandingPageConfig = {
  slug: 'workday-reporting-analytics-job-support',
  title: 'Workday Reporting & Analytics Job Support — Reports, Prism & Calculated Fields',
  description:
    'Workday report not returning correct data? Calculated field broken? Prism Analytics dashboard failing? Get real-time Workday Reporting and Analytics job support. Advanced, Matrix, Composite reports, BIRT, Prism. Same-day start.',
  canonical: `${BASE_URL}/workday-reporting-analytics-job-support/`,
  keywords: [
    'Workday reporting job support', 'Workday analytics support', 'Workday Prism Analytics help',
    'Workday calculated fields support', 'Workday report consultant help', 'Workday Advanced Report',
    'Workday BIRT reporting support', 'Workday Data Cloud help',
  ],
  h1: 'Workday Reporting & Analytics Job Support — Advanced Reports, Prism Analytics & Calculated Fields',
  tagline: 'Live Workday Reporting support — Advanced Reports, Matrix Reports, Composite Reports, BIRT layouts, Prism Analytics data sources, calculated fields, and 2026R1 reporting changes.',
  heroEyebrow: 'Workday Reporting Support — 2026R1 Ready',
  painIntro:
    'Advanced report not returning the right employee population? Calculated field logic broken? Prism Analytics data source throwing a load error? Dashboard showing incorrect data after a 2026R1 update? Workday reporting issues block critical business decisions — get expert help now.',
  heroVariant:
    'Workday Reporting is fundamental to every implementation — from HR operational reports and payroll reconciliation to executive dashboards and regulatory compliance extracts. Calculated fields, matrix report pivots, composite report structures, and Prism Analytics data pipelines each require deep Workday data model knowledge to build and troubleshoot. Workday 2026R1 updated the Data Cloud and Prism Analytics platform, creating new data source and pipeline compatibility scenarios.',
  geoLine: 'Supporting Workday Reporting consultants and analysts across USA, Canada, UK, Europe, Germany, Netherlands, and worldwide.',
  timezoneNote: 'Available across US, UK, and European business hours for Workday Reporting and Analytics support.',
  techSnippet: 'We cover: Workday Advanced Reports, Matrix Reports, Composite Reports, Dashboards, BIRT layouts, Calculated Fields, RAAS, Prism Analytics data sources, Workday Data Cloud pipelines, and 2026R1 Reporting and Analytics updates.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Reporting & Analytics', 'Advanced report data source configuration, calculated field logic, matrix report pivot design, composite report structure, BIRT layout customization, Prism Analytics data source setup, and 2026R1 Data Cloud changes'),
  useCasesSection: {
    title: 'Workday Reporting Issues We Resolve',
    cases: [
      'Advanced report returning an incorrect employee population — data source filter or prompt configuration error',
      'Calculated field logic broken after a 2026R1 tenant update — function syntax or data type change',
      'Matrix report pivot not aggregating correctly — cross-tab configuration or calculated column issue',
      'Composite report not combining sub-reports correctly — component layout or data alignment problem',
      'Prism Analytics data source failing to load — dataset schema or transformation pipeline error',
      'RAAS outbound report delivering incorrect data — filter, output configuration, or API integration issue',
    ],
  },
  proxySection: {
    title: 'Workday Reporting Interview Support',
    intro:
      'Workday Reporting interviews test deep report design knowledge — Advanced report structure, calculated field design, matrix and composite report architecture, Prism Analytics setup, and BIRT customization. Our experts guide you through every scenario.',
    points: [
      'Advanced report data source, filter, and column design questions',
      'Calculated field function design — conditional logic, date arithmetic, aggregation scenarios',
      'Matrix and composite report architecture discussions',
      'Prism Analytics data source, transformation, and dashboard configuration questions',
      'BIRT layout customization and template design walkthroughs',
      '2026R1 Data Cloud and reporting framework changes',
    ],
  },
  bottomCTAHeading: 'Workday Reporting Issue? Get Expert Help Now',
  bottomCTABody: 'Real-time Workday Reporting support — Advanced Reports, calculated fields, Prism Analytics, BIRT, Data Cloud. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday Financial Management support', href: '/workday-financial-management-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    additionalLinks: [
      { label: 'Workday Adaptive Planning support', href: '/workday-adaptive-planning-job-support/' },
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
      { label: 'Workday HRIS reporting support', href: '/workday-hris-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdaySecurityJobSupport: LandingPageConfig = {
  slug: 'workday-security-job-support',
  title: 'Workday Security Job Support — Domain Security, Role-Based Access & BP Security',
  description:
    'Workday security role misconfiguration? User locked out of a critical task? Domain security policy error? Get real-time Workday Security job support. Role-based access, business process security, integration security. Same-day.',
  canonical: `${BASE_URL}/workday-security-job-support/`,
  keywords: [
    'Workday security job support', 'Workday security configuration help', 'Workday domain security support',
    'Workday role-based access help', 'Workday security administrator support', 'Workday business process security',
    'Workday security consultant help', 'Workday user access issues',
  ],
  h1: 'Workday Security Job Support — Domain Security, Role-Based Access & Business Process Security',
  tagline: 'Real-time Workday Security support — domain security policy errors, role-based access misconfiguration, business process security failures, integration security, and security audit support.',
  heroEyebrow: 'Workday Security Support — 2026R1 Ready',
  painIntro:
    'User cannot complete a critical HCM or Finance transaction due to a security error? New domain security policy blocking an integration? Business process security step misconfigured after a 2026R1 update? Security issues in Workday block production work immediately — get expert help.',
  heroVariant:
    'Workday Security is one of the most complex and cross-cutting modules — security groups, domain security policies, role-based access, business process security policies, and integration system security all interact. A single misconfiguration can prevent entire user populations from completing transactions. Workday 2026R1 introduced enhanced security audit capabilities and updated integration security patterns that affect existing configurations.',
  geoLine: 'Supporting Workday Security administrators and consultants across USA, Canada, UK, Europe, and worldwide.',
  timezoneNote: 'Available across US, UK, and European business hours for Workday Security support.',
  techSnippet: 'We cover: Workday Security Groups, Domain Security Policies, Role-Based Access, Business Process Security Policies, Integration System Users, API Client Configuration, Security Audit Reports, and 2026R1 Security framework changes.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Security', 'domain security policy configuration, security group assignment, role-based access design, business process security step setup, integration system user permissions, and security audit configuration'),
  useCasesSection: {
    title: 'Workday Security Issues We Resolve',
    cases: [
      'User getting "You do not have access" error on a critical HCM task — domain security policy misconfiguration',
      'New hire cannot complete onboarding tasks — security group assignment or business process security error',
      'Integration system user receiving 401 or permission errors — API client or integration security configuration',
      'Business process approval step failing for a specific role — security policy or step participant configuration',
      'Manager cannot view their team in Workday — org-based security or role assignment error',
      'Security audit report showing unexpected access for a user population — role cleanup required',
    ],
  },
  proxySection: {
    title: 'Workday Security Interview Support',
    intro:
      'Workday Security interviews test deep configuration knowledge — security group design, domain policy architecture, role-based access modelling, business process security design, and integration security. Our experts guide you through every question.',
    points: [
      'Security group types and design patterns — intersection, role-based, aggregate',
      'Domain security policy configuration and permission set design',
      'Business process security policy design and step participant questions',
      'Integration system user and API client security configuration',
      'Security audit and compliance reporting design scenarios',
      '2026R1 Security framework changes and enhanced audit capabilities',
    ],
  },
  bottomCTAHeading: 'Workday Security Issue Blocking Production? Get Expert Help Now',
  bottomCTABody: 'Real-time Workday Security support — domain policies, role access, business process security, integration security. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    additionalLinks: [
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'Workday testing release support', href: '/workday-testing-release-support/' },
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayRecruitingJobSupport: LandingPageConfig = {
  slug: 'workday-recruiting-job-support',
  title: 'Workday Recruiting Job Support — Real-Time Talent Acquisition Help',
  description:
    'Workday Recruiting configuration issues? Job requisition workflow broken? Offer letter template failing? Get real-time Workday Recruiting job support. Candidate pipeline, background check integration, 2026R1 AI recruiting features. Same-day.',
  canonical: `${BASE_URL}/workday-recruiting-job-support/`,
  keywords: [
    'Workday Recruiting job support', 'Workday talent acquisition support', 'Workday Recruiting configuration help',
    'Workday job requisition support', 'Workday offer letter help', 'Workday ATS support',
    'Workday recruiting consultant help', 'Workday candidate pipeline support',
  ],
  h1: 'Workday Recruiting Job Support — Job Requisitions, Candidate Pipeline & Offer Management',
  tagline: 'Real-time Workday Recruiting support — job requisition workflow errors, candidate stage configuration, offer letter templates, background check integration, and 2026R1 AI recruiting feature support.',
  heroEyebrow: 'Workday Recruiting Support — 2026R1 AI Updated',
  painIntro:
    'Job requisition stuck in the approval workflow? Candidate not advancing through stages correctly? Offer letter template generating incorrectly? Background check integration failing? Workday 2026R1 introduced AI-powered recruiting features that may have changed your existing configuration — get expert help.',
  heroVariant:
    'Workday Recruiting is the talent acquisition hub for enterprise HR teams — covering job requisition management, candidate tracking, interview scheduling, offer management, and background check orchestration. Workday 2026R1 introduced significant AI-driven recruiting enhancements including AI-powered candidate matching, skill-based sourcing, and automated screening workflows. These 2026R1 changes created new configuration and regression scenarios for existing Recruiting implementations.',
  geoLine: 'Supporting Workday Recruiting consultants and HR technology teams across USA, Canada, UK, Europe, and worldwide.',
  timezoneNote: 'Available across US, UK, and European business hours for Workday Recruiting support.',
  techSnippet: 'We cover: Workday Recruiting requisition management, candidate pipeline, job posting, offer management, background check integration, interview scheduling, offer letter templates, Skills Cloud integration, and 2026R1 AI recruiting enhancements.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Recruiting', 'job requisition workflow configuration, candidate stage and pipeline setup, offer letter template design, background check integration, interview scheduling, recruiter workspace configuration, and 2026R1 AI recruiting changes'),
  useCasesSection: {
    title: 'Workday Recruiting Issues We Resolve',
    cases: [
      'Job requisition stuck in approval workflow — business process security or routing step configuration',
      'Candidate not advancing through pipeline stages correctly — disposition or stage configuration error',
      'Offer letter template generating with incorrect data — merge field or template design issue',
      'Background check integration not triggering or receiving status updates — integration configuration error',
      'Job posting not appearing on career site — posting rule or career site configuration problem',
      '2026R1 AI candidate matching producing unexpected results — Skills Cloud or matching rule configuration',
    ],
  },
  proxySection: {
    title: 'Workday Recruiting Interview Support',
    intro:
      'Workday Recruiting interviews cover requisition management design, candidate workflow configuration, offer management setup, and the new AI-driven recruiting features in 2026R1. Our experts guide you through every configuration scenario.',
    points: [
      'Job requisition type design and approval workflow configuration questions',
      'Candidate pipeline stage and disposition configuration discussions',
      'Offer management and letter template design walkthroughs',
      'Background check integration architecture and vendor setup questions',
      '2026R1 AI recruiting, Skills Cloud, and automated screening configuration',
    ],
  },
  bottomCTAHeading: 'Workday Recruiting Issue? Get Expert Help Now',
  bottomCTABody: 'Real-time Workday Recruiting support — requisitions, candidate pipeline, offers, background checks, 2026R1 AI features. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    additionalLinks: [
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayTestingReleaseSupport: LandingPageConfig = {
  slug: 'workday-testing-release-support',
  title: 'Workday Testing & Release Support — SIT, UAT, Regression & Hypercare Help',
  description:
    'Workday release regression issues? SIT or UAT defects blocking go-live? Hypercare incidents piling up? Get real-time Workday testing and release support from in-house experts. 2026R1 regression testing, production defects. Same-day.',
  canonical: `${BASE_URL}/workday-testing-release-support/`,
  keywords: [
    'Workday testing support', 'Workday release support', 'Workday regression testing help',
    'Workday SIT support', 'Workday UAT support', 'Workday hypercare help',
    'Workday production defect support', 'Workday go-live support',
  ],
  h1: 'Workday Testing & Release Support — SIT, UAT, Regression Testing & Hypercare',
  tagline: 'Real-time Workday testing and release support — SIT defect resolution, UAT issue triage, regression testing for 2026R1, hypercare incident support, and go-live production stabilization.',
  heroEyebrow: 'Workday Release & Testing Support — 2026R1',
  painIntro:
    'Workday 2026R1 release regression breaking existing configurations? SIT defects blocking your go-live schedule? UAT sign-off at risk? Hypercare incidents escalating after a recent release? Our in-house Workday experts join your release cycle and help resolve issues fast.',
  heroVariant:
    'Every Workday release cycle — whether a major feature release like 2026R1 or a tenant update — brings regression risk across HCM, Payroll, Integrations, Reporting, and Security. Testing teams must validate hundreds of business processes, integrations, and reports within tight release windows. Our in-house Workday experts have supported multiple release cycles across SIT, UAT, regression, hypercare, and post-go-live stabilization phases — resolving defects that would otherwise slip through to production.',
  geoLine: 'Supporting Workday testing teams and release managers across USA, Canada, UK, Europe, and worldwide.',
  timezoneNote: 'Available across all time zones for Workday release and testing support, including off-hours release windows.',
  techSnippet: 'We cover: Workday SIT testing, UAT sign-off, regression test execution, defect triage, 2026R1 release impact analysis, hypercare incident support, and post-go-live production stabilization across all Workday modules.',
  highlights: workdayHighlights,
  faqs: workdayModuleFaqs('Workday Testing & Release', 'SIT defect analysis and resolution, UAT sign-off blockers, regression test case failures, 2026R1 release impact assessment, hypercare incident triage, and post-go-live production stabilization'),
  useCasesSection: {
    title: 'Workday Testing & Release Situations We Help Resolve',
    cases: [
      '2026R1 regression testing revealing broken business processes — rapid triage and configuration fix',
      'SIT defect backlog growing before go-live deadline — prioritized resolution support',
      'UAT user population reporting unexpected behavior — root cause analysis and fix',
      'Hypercare production incidents after a go-live — rapid response and stabilization',
      'Integration regression after tenant update — EIB, Studio, or Core Connector failure analysis',
      'Payroll or reporting validation failing in SIT — calculation rule or report configuration fix',
    ],
  },
  proxySection: {
    title: 'Workday Testing & QA Interview Support',
    intro:
      'Workday testing and QA roles require knowledge of Workday test methodologies, defect management practices, regression patterns across modules, and the Workday release cycle. Our experts guide you through every interview scenario.',
    points: [
      'Workday test strategy and SIT/UAT planning questions',
      'Regression test coverage design for HCM, Payroll, and Integration modules',
      'Defect management and triage methodology discussions',
      '2026R1 release impact analysis and regression strategy questions',
      'Hypercare planning and production incident response scenarios',
    ],
  },
  bottomCTAHeading: 'Workday Release Regression or Testing Issue? Get Expert Help Now',
  bottomCTABody: 'Real-time Workday testing support — SIT defects, UAT blockers, 2026R1 regression, hypercare incidents. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    additionalLinks: [
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workday2026r1ReleaseSupport: LandingPageConfig = {
  slug: 'workday-2026r1-release-support',
  title: 'Workday 2026R1 Release Support — Regression, HCM, Finance & Integration Impact',
  description:
    'Workday 2026R1 breaking your existing configurations? Get real-time 2026R1 release support — HCM, Payroll, Financials, Integrations, Reporting, Security, Adaptive Planning. Regression analysis, fix support, hypercare. Same-day.',
  canonical: `${BASE_URL}/workday-2026r1-release-support/`,
  keywords: [
    'Workday 2026R1 release support', 'Workday 2026R1 help', 'Workday release regression support',
    'Workday 2026R1 regression testing', 'Workday release update support', 'Workday tenant update help',
    'Workday 2026R1 HCM changes', 'Workday 2026R1 integration impact',
  ],
  h1: 'Workday 2026R1 Release Support — Regression, HCM, Payroll, Finance & Integration Impact',
  tagline: 'Real-time expert support for Workday 2026R1 release impact — regression testing, broken configurations, HCM AI enhancements, payroll compliance changes, integration API updates, and Finance automation impacts.',
  heroEyebrow: 'Workday 2026R1 Release Support — May 2026',
  painIntro:
    'Workday 2026R1 has landed in your production tenant and something is broken. Business processes behaving differently. Integration payloads changed. Payroll calculations shifted. Reporting queries returning different results. Get expert help resolving 2026R1 impact immediately.',
  heroVariant:
    'Workday 2026R1 is one of the most impactful Workday releases — introducing AI-driven workflow automation across HCM, enhanced AI recruiting and Skills Cloud features, payroll compliance updates for multiple jurisdictions, Financial Management automation improvements, Integration Cloud API changes, Prism Analytics and Data Cloud platform updates, and significant Workday Security framework enhancements. Every active Workday implementation is affected. Our in-house experts have deep 2026R1 knowledge across all modules and help you navigate the release impact quickly.',
  geoLine: 'Supporting Workday implementations affected by the 2026R1 release across USA, Canada, UK, Europe, Australia, and worldwide.',
  timezoneNote: 'Available across all major time zones for urgent Workday 2026R1 release support.',
  techSnippet: 'We cover 2026R1 impact across: HCM AI workflows, Recruiting Skills Cloud, Payroll compliance, Financial Management automation, Integration API changes, Prism Analytics Data Cloud updates, Security framework enhancements, and Adaptive Planning AI forecasting.',
  highlights: workdayHighlights,
  faqs: [
    {
      question: 'What does Workday 2026R1 change and why might it break my configurations?',
      answer:
        'Workday 2026R1 introduces changes across all major modules. Key areas of impact include: AI-driven HCM workflow automation that can change business process routing behavior; enhanced Recruiting AI and Skills Cloud features that affect candidate matching and requisition workflows; payroll compliance updates affecting calculation rules for multiple jurisdictions; Financial Management automation changes that can affect GL posting and AP processing; Integration Cloud API endpoint and payload changes affecting EIB, Core Connector, and Studio integrations; Prism Analytics Data Cloud platform updates affecting data source schemas and pipeline behavior; and Security framework enhancements affecting domain policy and audit configurations.',
    },
    {
      question: 'How quickly can you help us resolve 2026R1 regression issues?',
      answer:
        'We can start the same day you contact us. Our in-house Workday experts have already analyzed the 2026R1 release notes and impact areas across all modules. We join your session immediately, triage the specific issue, identify whether it is a 2026R1 regression or a pre-existing configuration gap, and provide a fix path.',
    },
    {
      question: 'Do you support 2026R1 regression testing before production rollout?',
      answer:
        'Yes. We help Workday teams run structured regression testing after the 2026R1 tenant update — prioritizing high-risk areas including payroll calculations, integration connectors, HCM business processes, and reporting. We help create regression test coverage, execute scenarios, triage defects, and document fix paths.',
    },
    {
      question: 'Which 2026R1 modules are causing the most regression issues?',
      answer:
        'Based on the 2026R1 release scope, the highest regression risk areas are: Payroll (compliance rule changes), Integration Cloud (API endpoint and payload changes), HCM business processes (AI workflow changes), Recruiting (Skills Cloud and AI matching changes), and Prism Analytics (Data Cloud schema changes). Reporting and Security are also affected for implementations using advanced domain policy configurations.',
    },
    {
      question: 'Can you help with 2026R1 hypercare support after go-live?',
      answer:
        'Yes. Hypercare after a 2026R1-affected go-live is one of our most common engagements. We provide around-the-clock support during hypercare windows — triaging production incidents, resolving configuration issues exposed in production, and supporting business users through workflow and UI behavior changes introduced by 2026R1.',
    },
  ],
  useCasesSection: {
    title: 'Workday 2026R1 Impact Scenarios We Help Resolve',
    cases: [
      'HCM business process routing changed after 2026R1 — AI workflow automation triggering unexpected approvals',
      'EIB or Core Connector integration payload changed after 2026R1 API update — data structure mismatch',
      'Payroll calculation producing different results after 2026R1 compliance rule changes',
      'Prism Analytics data source failing to load after 2026R1 Data Cloud schema update',
      'Recruiting AI candidate matching returning unexpected results after Skills Cloud 2026R1 changes',
      'Security domain policy behavior changed after 2026R1 Security framework update — access issues',
    ],
  },
  proxySection: {
    title: 'Workday 2026R1 Interview Preparation',
    intro:
      'Workday interviews in 2026 increasingly test knowledge of 2026R1 changes — AI-driven features, integration API updates, payroll compliance changes, and Data Cloud enhancements. Our experts prepare you for these current-release questions.',
    points: [
      '2026R1 HCM AI workflow automation — what changed and how it affects configurations',
      '2026R1 Integration Cloud API changes — endpoint updates, payload changes, regression scenarios',
      '2026R1 Payroll compliance updates — jurisdictional changes and calculation rule impacts',
      '2026R1 Prism Analytics and Data Cloud platform changes',
      '2026R1 Recruiting AI and Skills Cloud enhancements',
      'How to approach regression testing planning for a 2026R1 release cycle',
    ],
  },
  bottomCTAHeading: 'Workday 2026R1 Breaking Your Configurations? Get Expert Help Now',
  bottomCTABody: 'Real-time 2026R1 release support across HCM, Payroll, Integrations, Reporting, Security, and Finance. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday testing release support', href: '/workday-testing-release-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    additionalLinks: [
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY USA PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupportUSA: LandingPageConfig = {
  slug: 'workday-job-support-usa',
  title: 'Workday Job Support USA — Real-Time HCM, Finance & Integration Help',
  description:
    'Struggling with Workday on a US project? Get real-time Workday job support for USA consultants — HCM, Payroll, Integrations, Reporting, Security. All US time zones. 2026R1 ready. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-usa/`,
  keywords: [
    'Workday job support USA', 'Workday support United States', 'Workday consultant help USA',
    'Workday HCM support USA', 'Workday integration support USA', 'Workday payroll help USA',
  ],
  h1: 'Workday Job Support USA — Real-Time Expert Help Across All US Time Zones',
  tagline: 'Live Workday job support for USA consultants — HCM, Financials, Payroll, Integrations, Reporting, Security, and 2026R1 release support. EST, CST, MST, PST covered.',
  heroEyebrow: 'Workday USA Support — All US Time Zones',
  painIntro:
    'On a US Workday project with production issues, a failing integration, or a payroll calculation error before month-end close? The US Workday consulting market is fast-paced — client SLAs are tight and 2026R1 regression issues are affecting live implementations right now.',
  heroVariant:
    'Workday is one of the most widely deployed HCM and Finance platforms in US enterprise — Fortune 500 healthcare, financial services, government, and mid-market technology. Our in-house US-aligned Workday experts provide same-day support across all US time zones. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across USA — EST, CST, MST, and PST time zones.',
  timezoneNote: 'Aligned with US Eastern, Central, Mountain, and Pacific working hours.',
  techSnippet: 'Full Workday module coverage: HCM, Financial Management, Payroll, Integrations, Adaptive Planning, Recruiting, Reporting, Prism Analytics, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('USA Workday'),
  useCasesSection: {
    title: 'Common USA Workday Situations We Help Resolve',
    cases: [
      'US enterprise Workday HCM tenant configuration breaking after 2026R1 release update',
      'EIB payroll integration to a US benefits carrier failing before payroll run',
      'Workday Financial Management period close blocked by GL posting rule error',
      'Workday Security role misconfiguration preventing US employees from completing HCM transactions',
      'Workday Adaptive Planning model not reconciling with US GAAP actuals before quarterly close',
      'US Workday go-live hypercare — production incidents requiring immediate resolution',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for USA Roles',
    intro:
      'US Workday consulting roles demand deep module-specific configuration knowledge. Our experts provide real-time discreet interview guidance calibrated to US hiring expectations at Big 4, boutique Workday partners, and direct enterprise clients.',
    points: [
      'Real-time guidance during US Workday HCM and Integration consultant technical panels',
      'Live support during Workday Financials, Payroll, and Reporting interviews at US firms',
      'Coaching through scenario-based configuration walkthroughs for US enterprise Workday roles',
      'Help navigating 2026R1 release questions common in current US Workday interviews',
      'Mock interview sessions calibrated to Big 4 and direct enterprise US client hiring formats',
    ],
  },
  bottomCTAHeading: 'USA Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday job support and proxy interview assistance for US projects — all US time zones. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Canada', href: '/workday-job-support-canada/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview USA', href: '/workday-proxy-interview-usa/' },
    proxyLink: { label: 'Get Workday interviews scheduled USA', href: '/workday-interview-scheduled-usa/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'IT job support USA', href: '/job-support-usa/' },
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayProxyInterviewUSA: LandingPageConfig = {
  slug: 'workday-proxy-interview-usa',
  title: 'Workday Proxy Interview Support USA — Live Interview Guidance for US Roles',
  description:
    'Workday interview at a US company? Get real-time proxy interview support from in-house Workday experts. HCM, Integration, Financials, Payroll, Reporting roles. Big 4, boutique partner, direct enterprise. All US time zones.',
  canonical: `${BASE_URL}/workday-proxy-interview-usa/`,
  keywords: [
    'Workday proxy interview USA', 'Workday interview help USA', 'Workday HCM interview USA',
    'Workday integration interview USA', 'live Workday interview guidance USA',
  ],
  h1: 'Workday Proxy Interview Support USA — Real-Time Live Guidance for US Workday Roles',
  tagline: 'Discreet real-time Workday interview support for US company interviews — Big 4 consulting, boutique Workday partners, and direct enterprise client roles. All US time zones covered.',
  heroEyebrow: 'Workday USA Interview Support',
  painIntro:
    'US Workday consulting interview coming up? Big 4 technical panel, boutique partner functional round, or direct enterprise client configuration walkthrough? US Workday employers run rigorous technical interviews — our experts join your session and guide you through every question.',
  heroVariant:
    'The US Workday market has active demand at Deloitte, Accenture, IBM, Mercer, Alight, Collaborative Solutions, Sierra-Cedar, and Kainos — plus hundreds of direct enterprise clients. US employers run rigorous technical rounds: real tenant configuration scenarios, module architecture questions, and implementation walkthroughs. Our in-house experts provide real-time discreet guidance. Updated for May 2026 and current US Workday hiring market.',
  geoLine: 'Supporting Workday interview candidates for US roles across EST, CST, MST, and PST time zones.',
  timezoneNote: 'Available across all US time zones for Workday interview support.',
  highlights: workdayHighlights,
  faqs: workdayProxyFaqs('USA Workday'),
  useCasesSection: {
    title: 'US Workday Interview Scenarios We Help Navigate',
    cases: [
      'Deloitte or Accenture Workday HCM Consultant panel — business process, staffing, compensation scenario questions',
      'Collaborative Solutions or Sierra-Cedar Integration Developer interview — EIB, Studio, PECI technical round',
      'Direct enterprise client Workday Financials interview — GL, AP/AR, close cycle configuration walkthrough',
      'Alight or Mercer Workday Payroll Specialist round — calculation rules, compliance, year-end questions',
      'Healthcare system Workday Reporting Specialist interview — Advanced reports, Prism Analytics',
      'US technology company Workday Security Administrator interview — domain policies, RBAC design',
    ],
  },
  proxySection: {
    title: 'How Our USA Workday Proxy Interview Support Works',
    intro:
      'US Workday interviews are calibrated to specific employer formats. Our US-market experts match your interview format and provide real-time guidance throughout.',
    points: [
      'Share your US employer, role, and interview format via WhatsApp — we assign the right Workday module expert',
      'Pre-interview brief aligned to US employer type (Big 4, boutique partner, direct enterprise)',
      'Expert joins your live interview and provides discreet real-time guidance',
      'Coverage for 2026R1 release topics increasingly common in US Workday interviews',
      'Post-interview debrief and next-round preparation',
    ],
  },
  bottomCTAHeading: 'USA Workday Interview Coming Up? Get Expert Live Guidance Now',
  bottomCTABody: 'Real-time proxy support for US Workday HCM, Integration, Financials, Payroll, and Reporting interviews. All US time zones. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday proxy interview Canada', href: '/workday-proxy-interview-canada/' },
    ],
    techLinks: [
      { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
    proxyLink: { label: 'Get Workday interviews scheduled USA', href: '/workday-interview-scheduled-usa/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Proxy interview USA', href: '/proxy-interview-usa/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayInterviewScheduledUSA: LandingPageConfig = {
  slug: 'workday-interview-scheduled-usa',
  title: 'Get Workday Interviews Scheduled USA — Profile Optimization & Recruiter Outreach',
  description:
    'Not getting Workday interview calls from US employers? We optimize your Workday profile and LinkedIn for US recruiter visibility — HCM, Integration, Financials, Payroll roles. Active outreach to US Workday staffing firms. Start today.',
  canonical: `${BASE_URL}/workday-interview-scheduled-usa/`,
  keywords: [
    'get Workday interviews scheduled USA', 'Workday interview calls USA', 'Workday profile optimization USA',
    'Workday resume USA', 'Workday LinkedIn USA', 'Workday recruiter USA',
  ],
  h1: 'Get Workday Interviews Scheduled in USA — Profile Engineering & US Recruiter Outreach',
  tagline: 'Stop missing US Workday interview calls. We engineer your profile for US recruiter visibility and drive active outreach to US Workday staffing firms.',
  heroEyebrow: 'Workday USA Interview Scheduling — May 2026',
  painIntro:
    'You have Workday experience but US recruiters are not calling. The US Workday market has hundreds of active roles but your profile is not surfacing in searches. We fix that with targeted keyword engineering and active outreach.',
  heroVariant:
    'The US Workday consulting market in May 2026 is highly active — enterprise HCM and Finance transformation programs, 2026R1 implementation projects, and AI-driven workflow initiatives generating strong demand. US recruiters search with very specific Workday terminology. We build your profile around those search patterns and get it in front of the right people. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday professionals targeting US roles — New York, Chicago, Dallas, San Francisco, Atlanta, and remote US positions.',
  timezoneNote: 'Profile support and outreach aligned to US market time zones.',
  highlights: workdayHighlights,
  faqs: workdayScheduledFaqs('USA'),
  useCasesSection: {
    title: 'US Workday Profile Situations We Resolve',
    cases: [
      'Experienced HCM consultant applying to US roles for months with no response — keyword targeting issue',
      'US-based Workday Integration Developer with Studio experience not showing in US recruiter searches',
      'Workday consultant transitioning from healthcare to financial services vertical in the US market',
      'India-based Workday professional targeting US remote roles — geographic positioning strategy',
      'Recent Workday certification holder with limited project history — entry-level US role positioning',
      'Senior Workday consultant targeting Big 4 or direct enterprise client roles in the US',
    ],
  },
  proxySection: {
    title: 'US Workday Job Market — What We Know About Getting Calls in 2026',
    intro:
      'US Workday recruiter search patterns have shifted with 2026R1. AI-workflow experience, Skills Cloud, and Workday Extend are now differentiators. We position your profile to reflect current US demand signals.',
    points: [
      'US Workday recruiter keyword mapping — exact terms used by US staffing firms in May 2026',
      '2026R1 module feature keywords that US employers are actively searching for',
      'LinkedIn positioning for US Workday recruiter visibility',
      'Active outreach to US Workday staffing firms — Apex Group, Randstad, TEKsystems',
      'US job board optimization — Dice, LinkedIn, Indeed, Hired',
    ],
  },
  bottomCTAHeading: 'Ready to Start Getting US Workday Interview Calls?',
  bottomCTABody: 'We engineer your Workday profile for US recruiter visibility and drive active outreach — HCM, Integration, Financials, Payroll roles. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Get Workday interviews scheduled Canada', href: '/workday-interview-scheduled-canada/' },
    ],
    techLinks: [
      { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
      { label: 'Workday proxy interview USA', href: '/workday-proxy-interview-usa/' },
    ],
    problemLink: { label: 'Struggling in your IT job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'Get interview scheduled USA', href: '/get-interview-scheduled-usa/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY CANADA PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupportCanada: LandingPageConfig = {
  slug: 'workday-job-support-canada',
  title: 'Workday Job Support Canada — Real-Time HCM, Finance & Integration Help',
  description:
    'Struggling with Workday on a Canadian project? Get real-time Workday job support for Canada consultants — HCM, Payroll, Integrations, Reporting, Security. EST to PST. 2026R1 ready. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-canada/`,
  keywords: [
    'Workday job support Canada', 'Workday support Canada', 'Workday consultant help Canada',
    'Workday HCM Canada', 'Workday payroll Canada', 'Workday integration Canada',
  ],
  h1: 'Workday Job Support Canada — Real-Time Expert Help Across Canadian Time Zones',
  tagline: 'Live Workday job support for Canadian consultants — HCM, Payroll, Integrations, Reporting, Security, and 2026R1 support. Toronto, Vancouver, Calgary, Montreal covered.',
  heroEyebrow: 'Workday Canada Support — EST to PST',
  painIntro:
    'On a Canadian Workday project with a failing integration, payroll errors, or a production incident? Canada has a growing Workday implementation market — banks, insurance, government, and enterprise technology organizations all running complex Workday environments.',
  heroVariant:
    'Canadian Workday implementations span major financial institutions (RBC, TD, Scotiabank, Sun Life, Manulife), insurance companies, government agencies, and enterprise technology organizations. Workday Payroll for Canada has unique compliance requirements — T4 processing, ROE generation, provincial tax rules, and CRA filing. Our Workday experts cover Canada-specific payroll compliance alongside all standard HCM, Integration, Finance, and Reporting modules. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across Canada — Toronto (EST), Vancouver (PST), Calgary (MST), Montreal (EST).',
  timezoneNote: 'Aligned with Canadian Eastern, Central, Mountain, and Pacific working hours.',
  techSnippet: 'Canada-specific Workday coverage: HCM, Payroll (T4/ROE/CRA), Integrations, Financial Management, Reporting, Security, and 2026R1 changes relevant to Canadian implementations.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Canada Workday'),
  useCasesSection: {
    title: 'Common Canada Workday Situations We Help Resolve',
    cases: [
      'Workday Payroll for Canada T4 processing error before year-end — earnings code or tax mapping issue',
      'EIB or Studio integration to a Canadian benefits carrier or pension provider failing',
      'Canadian bank HCM business process broken after 2026R1 tenant update',
      'Workday Security role misconfiguration at a Toronto or Vancouver enterprise client',
      'Workday Financial Management period close issue at a Canadian insurance or financial firm',
      'Provincial payroll tax calculation error — Quebec, Ontario, or BC payroll compliance issue',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Canada Roles',
    intro:
      'Canadian Workday consulting roles at major banks, consulting firms, and enterprise clients demand deep configuration knowledge. Our experts provide real-time discreet guidance for Canadian Workday interviews.',
    points: [
      'Real-time guidance for Workday HCM interviews at Canadian banks and financial institutions',
      'Support for Workday Integration interviews at Canadian consulting firms and direct clients',
      'Canada-specific payroll compliance knowledge for Workday Payroll specialist interviews',
      'Coverage for 2026R1 questions in Canadian Workday interviews',
      'Post-interview support for Canadian staffing firm and direct client follow-up rounds',
    ],
  },
  bottomCTAHeading: 'Canada Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday job support for Canadian projects — EST to PST. Canada payroll compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview Canada', href: '/workday-proxy-interview-canada/' },
    proxyLink: { label: 'Get Workday interviews scheduled Canada', href: '/workday-interview-scheduled-canada/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Canada', href: '/job-support-canada/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayProxyInterviewCanada: LandingPageConfig = {
  slug: 'workday-proxy-interview-canada',
  title: 'Workday Proxy Interview Support Canada — Live Interview Guidance for Canadian Roles',
  description:
    'Workday interview at a Canadian company? Get real-time proxy interview support from in-house Workday experts. HCM, Integration, Financials, Payroll roles. Banks, consulting firms, enterprise. EST to PST.',
  canonical: `${BASE_URL}/workday-proxy-interview-canada/`,
  keywords: [
    'Workday proxy interview Canada', 'Workday interview help Canada', 'Workday HCM interview Canada',
    'Workday integration interview Canada', 'Workday interview guidance Canada',
  ],
  h1: 'Workday Proxy Interview Support Canada — Real-Time Live Guidance for Canadian Workday Roles',
  tagline: 'Discreet real-time Workday interview support for Canadian company interviews — major banks, consulting firms, and direct enterprise clients. EST to PST covered.',
  heroEyebrow: 'Workday Canada Interview Support',
  painIntro:
    'Canadian Workday interview coming up? RBC, TD, Sun Life, or Manulife HCM implementation interview? Consulting firm technical panel? Direct enterprise configuration walkthrough? Our experts join your session and guide you through every question.',
  heroVariant:
    'Canada has strong Workday demand at major financial institutions, insurance companies, telecom organizations, and government agencies — all running complex Workday HCM, Finance, and Payroll implementations with Canada-specific compliance requirements. Canadian Workday interviews test module knowledge plus Canada-specific payroll (T4, ROE, CRA), provincial tax, and bilingual HR configuration awareness. Our in-house experts cover all of it. Updated for May 2026 Canadian Workday hiring market.',
  geoLine: 'Supporting Workday interview candidates for Canadian roles — Toronto, Vancouver, Calgary, Montreal, and remote Canada positions.',
  timezoneNote: 'Available across all Canadian time zones for Workday interview support.',
  highlights: workdayHighlights,
  faqs: workdayProxyFaqs('Canada Workday'),
  useCasesSection: {
    title: 'Canadian Workday Interview Scenarios We Help Navigate',
    cases: [
      'RBC or TD Workday HCM implementation interview — business process, staffing, Canada payroll compliance',
      'Sun Life or Manulife Workday Financials interview — GL, AP/AR, financial reporting configuration',
      'Canadian consulting firm Workday Integration Developer interview — EIB, Studio, PECI technical round',
      'Workday Payroll Specialist interview — T4 processing, ROE generation, provincial tax configuration',
      'Government of Canada Workday HCM interview — public sector HR processes and bilingual configuration',
      'Canadian telecom Workday Security Administrator interview — domain policies, role-based access',
    ],
  },
  proxySection: {
    title: 'How Our Canada Workday Proxy Interview Support Works',
    intro:
      'Canadian Workday interviews vary by employer — banks focus on financial compliance and data governance, consulting firms test technical depth, government clients test bilingual HR process knowledge. Our Canada-market experts match your format.',
    points: [
      'Share your Canadian employer, role, and format via WhatsApp — we assign the right Workday expert',
      'Pre-interview brief aligned to Canadian employer type and Canada-specific requirements',
      'Expert joins your live interview and provides discreet real-time guidance',
      'Canada payroll compliance knowledge — T4, ROE, provincial tax, CRA filing',
      'Post-interview debrief and follow-up round preparation',
    ],
  },
  bottomCTAHeading: 'Canada Workday Interview Coming Up? Get Expert Live Guidance Now',
  bottomCTABody: 'Real-time proxy support for Canadian Workday HCM, Integration, Financials, Payroll interviews. EST to PST. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Canada', href: '/workday-job-support-canada/' },
      { label: 'Workday proxy interview USA', href: '/workday-proxy-interview-usa/' },
    ],
    techLinks: [
      { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
    proxyLink: { label: 'Get Workday interviews scheduled Canada', href: '/workday-interview-scheduled-canada/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Proxy interview Canada', href: '/proxy-interview-canada/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayInterviewScheduledCanada: LandingPageConfig = {
  slug: 'workday-interview-scheduled-canada',
  title: 'Get Workday Interviews Scheduled Canada — Profile Optimization & Recruiter Outreach',
  description:
    'Not getting Workday interview calls from Canadian employers? We optimize your Workday profile for Canadian recruiter visibility — HCM, Integration, Payroll roles. Active outreach to Canadian Workday staffing firms. Start today.',
  canonical: `${BASE_URL}/workday-interview-scheduled-canada/`,
  keywords: [
    'get Workday interviews scheduled Canada', 'Workday interview calls Canada', 'Workday profile Canada',
    'Workday LinkedIn Canada', 'Workday recruiter Canada', 'Workday job search Canada',
  ],
  h1: 'Get Workday Interviews Scheduled in Canada — Profile Engineering & Canadian Recruiter Outreach',
  tagline: 'Stop missing Canadian Workday interview calls. We engineer your Workday profile for Canadian recruiter visibility and drive active outreach to Canadian Workday staffing firms.',
  heroEyebrow: 'Workday Canada Interview Scheduling — May 2026',
  painIntro:
    'You have Workday experience but Canadian recruiters are not calling. The Canadian Workday market has active roles — banks, insurance, government, consulting — but your profile is not surfacing in Canadian recruiter searches. We fix that.',
  heroVariant:
    'The Canadian Workday market in May 2026 is driven by financial institution HCM modernization, Canada payroll compliance upgrades, and 2026R1 implementation projects. Canadian recruiters search for very specific terminology — Canada payroll compliance terms, bilingual configuration indicators, and enterprise HR experience signals. We engineer your profile around those patterns and execute active outreach. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday professionals targeting Canadian roles — Toronto, Vancouver, Calgary, Montreal, and remote Canada.',
  timezoneNote: 'Profile support and outreach aligned to Canadian time zones.',
  highlights: workdayHighlights,
  faqs: workdayScheduledFaqs('Canada'),
  useCasesSection: {
    title: 'Canadian Workday Profile Situations We Resolve',
    cases: [
      'Workday HCM consultant applying to Canadian bank roles with zero recruiter response',
      'Workday Integration Developer not showing in Canadian recruiter searches',
      'Workday Payroll consultant without Canada-specific T4/ROE experience — positioning strategy',
      'New Canadian PR holder transitioning into Workday consulting from another country',
      'Senior Workday consultant targeting Ontario or BC government digital service roles',
      'Workday contractor between Canadian engagements needing rapid interview pipeline',
    ],
  },
  proxySection: {
    title: 'Canadian Workday Job Market — What Gets You Calls in 2026',
    intro:
      'Canadian Workday recruiters at major banks, staffing firms, and consulting houses search for very specific signals. We build your profile around those signals and get you in front of the right people.',
    points: [
      'Canadian Workday recruiter keyword mapping — exact terms used in 2026',
      'Canada payroll compliance keyword integration — T4, ROE, CRA, provincial tax',
      'LinkedIn positioning for Canadian Workday recruiter visibility',
      'Active outreach to Canadian Workday staffing firms and direct employers',
      'Job board optimization for Canadian job portals and LinkedIn',
    ],
  },
  bottomCTAHeading: 'Ready to Start Getting Canadian Workday Interview Calls?',
  bottomCTABody: 'We engineer your Workday profile for Canadian recruiter visibility — HCM, Integration, Payroll, Finance. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Canada', href: '/workday-job-support-canada/' },
      { label: 'Get Workday interviews scheduled USA', href: '/workday-interview-scheduled-usa/' },
    ],
    techLinks: [
      { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
      { label: 'Workday proxy interview Canada', href: '/workday-proxy-interview-canada/' },
    ],
    problemLink: { label: 'Struggling in your IT job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'Get interview scheduled Canada', href: '/get-interview-scheduled-canada/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY UK PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupportUK: LandingPageConfig = {
  slug: 'workday-job-support-uk',
  title: 'Workday Job Support UK — Real-Time HCM, Finance & Integration Help',
  description:
    'Struggling with Workday on a UK project? Get real-time Workday job support for UK consultants — HCM, Financial Management, Payroll, Integrations, Reporting, Security. GMT/BST aligned. 2026R1 ready. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-uk/`,
  keywords: [
    'Workday job support UK', 'Workday support United Kingdom', 'Workday consultant UK',
    'Workday HCM UK', 'Workday payroll UK', 'Workday integration UK',
  ],
  h1: 'Workday Job Support UK — Real-Time Expert Help for UK Workday Implementations',
  tagline: 'Live Workday job support for UK consultants — HCM, Financials, Payroll, Integrations, Reporting, Security, and 2026R1 support. GMT and BST aligned.',
  heroEyebrow: 'Workday UK Support — GMT/BST Aligned',
  painIntro:
    'On a UK Workday project with a production incident, a failing integration, or a business process broken after 2026R1? UK Workday implementations span FTSE 100 financial services, NHS digital transformation, retail, and consulting — all with tight client SLAs.',
  heroVariant:
    'UK Workday implementations cover financial services (Barclays, HSBC UK, Lloyd\'s, Aviva), public sector (NHS, HMRC digital), retail (Marks & Spencer, Tesco tech), and professional services. UK Workday Payroll has specific compliance requirements — P60 year-end, PAYE/NIC rules, Real Time Information (RTI) reporting to HMRC, and IR35 contractor handling. Our in-house Workday experts cover UK-specific payroll compliance alongside all standard HCM, Integration, Finance, and Reporting modules. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday consultants across UK — London, Manchester, Birmingham, Edinburgh, and remote UK roles.',
  timezoneNote: 'Aligned with UK GMT and BST working hours for Workday support.',
  techSnippet: 'UK-specific Workday coverage: HCM, Payroll (P60/PAYE/NIC/RTI), Integrations, Financial Management, Reporting, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('UK Workday'),
  useCasesSection: {
    title: 'Common UK Workday Situations We Help Resolve',
    cases: [
      'UK Workday Payroll PAYE/NIC calculation error before month-end payroll processing',
      'RTI submission to HMRC failing due to integration connector configuration issue',
      'UK financial services Workday HCM business process broken after 2026R1 update',
      'Workday Security role misconfiguration at a UK banking or NHS implementation',
      'EIB or Core Connector integration to UK HR system or benefits provider failing',
      'Workday Financials GL closing error at a UK professional services or retail organization',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for UK Roles',
    intro:
      'UK Workday consulting roles at Big 4 firms, boutique Workday partners, and direct enterprise clients require deep module knowledge and UK compliance expertise. Our experts provide real-time discreet guidance.',
    points: [
      'Real-time guidance for UK Workday HCM interviews at financial services and public sector organizations',
      'Support for Workday Integration interviews at UK consulting firms',
      'UK payroll compliance knowledge — P60, PAYE/NIC, RTI, IR35',
      'Coverage for 2026R1 questions in UK Workday interviews',
      'Post-interview support for UK follow-up rounds',
    ],
  },
  bottomCTAHeading: 'UK Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday job support for UK projects — GMT/BST aligned. UK payroll compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview UK', href: '/workday-proxy-interview-uk/' },
    proxyLink: { label: 'Get Workday interviews scheduled UK', href: '/workday-interview-scheduled-uk/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support UK', href: '/job-support-uk/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayProxyInterviewUK: LandingPageConfig = {
  slug: 'workday-proxy-interview-uk',
  title: 'Workday Proxy Interview Support UK — Live Interview Guidance for UK Roles',
  description:
    'Workday interview at a UK company? Get real-time proxy interview support from in-house Workday experts. HCM, Integration, Financials, Payroll roles. Financial services, NHS, consulting firms. GMT/BST aligned.',
  canonical: `${BASE_URL}/workday-proxy-interview-uk/`,
  keywords: [
    'Workday proxy interview UK', 'Workday interview help UK', 'Workday HCM interview UK',
    'Workday interview guidance UK', 'Workday consultant interview UK',
  ],
  h1: 'Workday Proxy Interview Support UK — Real-Time Live Guidance for UK Workday Roles',
  tagline: 'Discreet real-time Workday interview support for UK company interviews — financial services, NHS, consulting firms, and direct enterprise clients. GMT/BST aligned.',
  heroEyebrow: 'Workday UK Interview Support',
  painIntro:
    'UK Workday consulting interview coming up? Financial services HCM panel, NHS digital transformation round, or consulting firm technical interview? UK employers run rigorous Workday interviews — our experts join your session and guide you.',
  heroVariant:
    'The UK Workday consulting market has active demand at Deloitte UK, PwC, KPMG, Accenture UK, Mercer, Aon, and boutique Workday partners — plus direct enterprise clients in financial services, NHS, retail, and professional services. UK interviews test module depth plus UK-specific payroll knowledge. Our experts provide real-time discreet guidance throughout. Updated for May 2026 UK Workday hiring market.',
  geoLine: 'Supporting Workday interview candidates for UK roles — London, Manchester, Birmingham, Edinburgh, and remote UK.',
  timezoneNote: 'Available across UK GMT and BST hours for Workday interview support.',
  highlights: workdayHighlights,
  faqs: workdayProxyFaqs('UK Workday'),
  useCasesSection: {
    title: 'UK Workday Interview Scenarios We Help Navigate',
    cases: [
      'Deloitte UK or PwC Workday HCM Consultant panel — UK HR transformation, business process, compliance scenarios',
      'UK financial services Workday Integration interview — EIB, Studio, PECI integration architecture',
      'NHS or public sector Workday HCM interview — UK public sector HR processes, Agenda for Change',
      'UK Workday Payroll Specialist interview — PAYE/NIC, RTI, P60, IR35 questions',
      'UK retail or professional services Workday Financials interview — UK GAAP, close cycle',
      'UK Workday Security interview — domain policies, RBAC, GDPR-aligned access control',
    ],
  },
  proxySection: {
    title: 'How Our UK Workday Proxy Interview Support Works',
    intro:
      'UK Workday interviews vary by sector — financial services tests compliance depth, NHS tests public sector HR processes, consulting firms test technical configuration breadth. Our UK-market experts match your format.',
    points: [
      'Share your UK employer, role, and format via WhatsApp — we assign the right Workday expert',
      'Pre-interview brief aligned to UK employer type and UK-specific requirements',
      'Expert joins your live interview and provides discreet real-time guidance',
      'UK payroll compliance knowledge — P60, PAYE, RTI, IR35',
      'Post-interview debrief and follow-up round preparation',
    ],
  },
  bottomCTAHeading: 'UK Workday Interview Coming Up? Get Expert Live Guidance Now',
  bottomCTABody: 'Real-time proxy support for UK Workday HCM, Integration, Financials, Payroll interviews. GMT/BST. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
      { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
    ],
    techLinks: [
      { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
    proxyLink: { label: 'Get Workday interviews scheduled UK', href: '/workday-interview-scheduled-uk/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Proxy interview UK', href: '/proxy-interview-uk/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayInterviewScheduledUK: LandingPageConfig = {
  slug: 'workday-interview-scheduled-uk',
  title: 'Get Workday Interviews Scheduled UK — Profile Optimization & Recruiter Outreach',
  description:
    'Not getting Workday interview calls from UK employers? We optimize your Workday profile for UK recruiter visibility — HCM, Integration, Payroll roles. Active outreach to UK Workday staffing firms. Start today.',
  canonical: `${BASE_URL}/workday-interview-scheduled-uk/`,
  keywords: [
    'get Workday interviews scheduled UK', 'Workday interview calls UK', 'Workday profile UK',
    'Workday LinkedIn UK', 'Workday recruiter UK', 'Workday job search UK',
  ],
  h1: 'Get Workday Interviews Scheduled in UK — Profile Engineering & UK Recruiter Outreach',
  tagline: 'Stop missing UK Workday interview calls. We engineer your Workday profile for UK recruiter visibility and drive active outreach to UK Workday staffing firms.',
  heroEyebrow: 'Workday UK Interview Scheduling — May 2026',
  painIntro:
    'You have Workday experience but UK recruiters are not calling. The UK Workday market has active roles in financial services, NHS, and consulting — but your profile is not surfacing in UK recruiter searches.',
  heroVariant:
    'The UK Workday consulting market in May 2026 is driven by financial services HCM transformation, NHS digital modernization, and 2026R1 upgrade projects. UK recruiters search for UK payroll compliance experience, financial services sector knowledge, and current 2026R1 module awareness. We engineer your profile around those signals. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday professionals targeting UK roles — London, Manchester, Birmingham, Edinburgh, and remote UK.',
  timezoneNote: 'Profile support and outreach aligned to UK GMT/BST market.',
  highlights: workdayHighlights,
  faqs: workdayScheduledFaqs('UK'),
  useCasesSection: {
    title: 'UK Workday Profile Situations We Resolve',
    cases: [
      'Workday HCM consultant applying to UK financial services roles with no recruiter response',
      'Workday Integration Developer not surfacing in UK recruiter searches',
      'Workday consultant without UK payroll compliance experience — positioning strategy',
      'Overseas Workday professional targeting UK right-to-work eligible roles',
      'Senior Workday consultant targeting NHS or public sector digital transformation roles',
      'Workday contractor between UK engagements needing rapid interview pipeline',
    ],
  },
  proxySection: {
    title: 'UK Workday Job Market — What Gets You Calls in 2026',
    intro:
      'UK Workday recruiters at banks, consulting firms, and NHS procurement searches look for specific signals. We build your profile around what actually gets responses.',
    points: [
      'UK Workday recruiter keyword mapping for May 2026',
      'UK payroll compliance keyword integration — P60, PAYE, NIC, RTI, IR35',
      'LinkedIn positioning for UK Workday recruiter visibility',
      'Active outreach to UK Workday staffing firms and direct employers',
      'UK job board optimization — Reed, LinkedIn, CWJobs, Totaljobs',
    ],
  },
  bottomCTAHeading: 'Ready to Start Getting UK Workday Interview Calls?',
  bottomCTABody: 'We engineer your Workday profile for UK recruiter visibility — HCM, Integration, Payroll, Finance. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
      { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
    ],
    techLinks: [
      { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
      { label: 'Workday proxy interview UK', href: '/workday-proxy-interview-uk/' },
    ],
    problemLink: { label: 'Struggling in your IT job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'Get interview scheduled UK', href: '/get-interview-scheduled-uk/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY EUROPE + COUNTRY PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupportEurope: LandingPageConfig = {
  slug: 'workday-job-support-europe',
  title: 'Workday Job Support Europe — Real-Time HCM, Finance & Integration Help',
  description:
    'Workday job support for European consultants — HCM, Payroll, Integrations, Reporting, Security. Ireland, Germany, Netherlands, France, Sweden, Switzerland. CET/CEST aligned. 2026R1 ready. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-europe/`,
  keywords: [
    'Workday job support Europe', 'Workday support Europe', 'Workday consultant Europe',
    'Workday HCM Europe', 'Workday integration Europe', 'Workday Europe support',
  ],
  h1: 'Workday Job Support Europe — Real-Time Expert Help for European Workday Implementations',
  tagline: 'Live Workday job support for European consultants — HCM, Integrations, Financials, Reporting, Security, and 2026R1 support. Ireland, Germany, Netherlands, France, Sweden, Switzerland covered.',
  heroEyebrow: 'Workday Europe Support — CET/CEST/GMT',
  painIntro:
    'On a European Workday project with a production incident, integration failure, or 2026R1 regression? Pan-European Workday implementations have complex multi-country HCM and payroll requirements — local tax rules, works council configurations, GDPR compliance, and multi-currency Finance setups.',
  heroVariant:
    'European Workday demand spans enterprise technology companies (ASML, SAP ecosystem clients, Booking.com, Spotify), multinational financial services, pharmaceutical giants, and pan-European consulting engagements. Multi-country HCM, European payroll compliance (Germany social insurance, Dutch pension, French collective agreements), GDPR-aligned security configurations, and multi-currency Financial Management are all uniquely European challenges. Our Workday experts cover pan-European implementations. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across Europe — Ireland, Germany, Netherlands, France, Sweden, Switzerland, and pan-European remote roles.',
  timezoneNote: 'Aligned with CET/CEST, GMT/IST, and major European working hours for Workday support.',
  techSnippet: 'European Workday coverage: Multi-country HCM, European payroll compliance, GDPR-aligned security, multi-currency Finance, and 2026R1 impact across European implementations.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('European Workday'),
  useCasesSection: {
    title: 'European Workday Situations We Help Resolve',
    cases: [
      'Multi-country HCM configuration error — compensation rules or leave policies applying across wrong country contexts',
      'German Workday Payroll social insurance calculation failing — Krankenkasse or pension deduction error',
      'GDPR-aligned Workday Security domain policy misconfiguration — data access scope too wide',
      'Dutch or French payroll integration to local pension provider failing',
      'Pan-European Workday Financials multi-currency transaction posting error',
      'EIB or Core Connector integration breaking after 2026R1 API changes across European tenant',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for European Roles',
    intro:
      'European Workday consulting roles require module knowledge plus multi-country HCM experience, European payroll compliance, and GDPR awareness. Our experts provide real-time guidance for European Workday interviews.',
    points: [
      'Multi-country HCM configuration and global business process design questions',
      'European payroll compliance knowledge — German, Dutch, French, Swedish compliance specifics',
      'GDPR-aligned security configuration scenarios for European implementations',
      'Coverage for 2026R1 topics in European Workday interviews',
      'Support for consulting firm and direct enterprise European interviews',
    ],
  },
  bottomCTAHeading: 'European Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday job support for European projects — CET/GMT aligned. Multi-country and GDPR compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
    proxyLink: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday job support Ireland', href: '/workday-job-support-ireland/' },
      { label: 'Workday job support Germany', href: '/workday-job-support-germany/' },
      { label: 'IT job support Europe', href: '/job-support-europe/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayProxyInterviewEurope: LandingPageConfig = {
  slug: 'workday-proxy-interview-europe',
  title: 'Workday Proxy Interview Support Europe — Live Guidance for European Workday Roles',
  description:
    'Workday interview at a European company? Get real-time proxy interview support — HCM, Integration, Financials roles. Ireland, Germany, Netherlands, France, Sweden, Switzerland. CET/GMT aligned.',
  canonical: `${BASE_URL}/workday-proxy-interview-europe/`,
  keywords: [
    'Workday proxy interview Europe', 'Workday interview help Europe', 'Workday HCM interview Europe',
    'Workday Europe interview guidance', 'Workday consultant interview Europe',
  ],
  h1: 'Workday Proxy Interview Support Europe — Real-Time Live Guidance for European Workday Roles',
  tagline: 'Discreet real-time Workday interview support for European company interviews — Ireland, Germany, Netherlands, France, Sweden, Switzerland. CET/GMT aligned.',
  heroEyebrow: 'Workday Europe Interview Support',
  painIntro:
    'European Workday interview coming up? ASML, Booking.com, or Spotify HCM round? German enterprise Workday panel? Dutch financial services interview? Our experts join your session and guide you through every question.',
  heroVariant:
    'European Workday demand spans technology giants, multinationals, and consulting firms across Ireland, Germany, Netherlands, France, Sweden, and Switzerland. European interviews test module depth plus multi-country HCM experience, European payroll compliance, and GDPR-aligned security knowledge. Our in-house experts provide real-time discreet guidance. Updated for May 2026 European Workday market.',
  geoLine: 'Supporting Workday interview candidates across Europe — Dublin, Amsterdam, Frankfurt, Paris, Stockholm, Zurich, and remote European roles.',
  timezoneNote: 'Available across CET/CEST, GMT, and other European time zones for Workday interview support.',
  highlights: workdayHighlights,
  faqs: workdayProxyFaqs('European Workday'),
  useCasesSection: {
    title: 'European Workday Interview Scenarios We Help Navigate',
    cases: [
      'ASML or Booking.com Workday HCM interview — multi-country HR configuration, GDPR alignment',
      'German enterprise Workday Payroll interview — social insurance, works council, Betriebsrat integration',
      'Dutch financial services Workday Integration interview — EIB, Studio, pension fund PECI integration',
      'French multinational Workday HCM interview — collective agreements, French payroll compliance',
      'Spotify or Klarna Sweden Workday interview — Nordic HCM configurations, Swedish payroll',
      'Swiss banking Workday Financial Management interview — multi-currency, CHF, Swiss GAAP considerations',
    ],
  },
  proxySection: {
    title: 'How Our European Workday Proxy Interview Support Works',
    intro:
      'European Workday interviews vary by country and employer. Our Europe-savvy Workday experts match your specific interview format and country context.',
    points: [
      'Share your European employer, country, role, and format via WhatsApp',
      'Pre-interview brief covering country-specific Workday requirements and employer context',
      'Expert joins your live interview and provides discreet real-time guidance',
      'Multi-country HCM, European payroll, and GDPR knowledge available',
      'Post-interview debrief and follow-up round preparation',
    ],
  },
  bottomCTAHeading: 'European Workday Interview Coming Up? Get Expert Live Guidance Now',
  bottomCTABody: 'Real-time proxy support for European Workday HCM, Integration, Financials, Payroll interviews. CET/GMT aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday proxy interview UK', href: '/workday-proxy-interview-uk/' },
    ],
    techLinks: [
      { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
    proxyLink: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Proxy interview Europe', href: '/proxy-interview-europe/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayInterviewScheduledEurope: LandingPageConfig = {
  slug: 'workday-interview-scheduled-europe',
  title: 'Get Workday Interviews Scheduled Europe — Profile Optimization & Recruiter Outreach',
  description:
    'Not getting Workday interview calls from European employers? We optimize your Workday profile for European recruiter visibility — HCM, Integration, Financials roles. Active outreach to European Workday staffing firms. Start today.',
  canonical: `${BASE_URL}/workday-interview-scheduled-europe/`,
  keywords: [
    'get Workday interviews scheduled Europe', 'Workday interview calls Europe', 'Workday profile Europe',
    'Workday recruiter Europe', 'Workday job search Europe',
  ],
  h1: 'Get Workday Interviews Scheduled in Europe — Profile Engineering & European Recruiter Outreach',
  tagline: 'Stop missing European Workday interview calls. We engineer your profile for European recruiter visibility and drive active outreach across Ireland, Germany, Netherlands, France, Sweden, and Switzerland.',
  heroEyebrow: 'Workday Europe Interview Scheduling — May 2026',
  painIntro:
    'You have Workday experience but European recruiters are not calling. European Workday markets have active demand but require specific profile positioning — multi-country HCM experience, GDPR awareness, and European market signals.',
  heroVariant:
    'The European Workday market in May 2026 is driven by multinational HCM transformations, 2026R1 upgrade projects, and AI-driven workflow implementations across Ireland, Germany, Netherlands, France, Sweden, and Switzerland. European recruiters search for multi-country HCM experience, regional payroll compliance, and enterprise-scale implementation backgrounds. We engineer your profile for maximum European visibility. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday professionals targeting European roles — Dublin, Amsterdam, Frankfurt, Paris, Stockholm, Zurich.',
  timezoneNote: 'Profile support and outreach aligned to European market time zones.',
  highlights: workdayHighlights,
  faqs: workdayScheduledFaqs('Europe'),
  useCasesSection: {
    title: 'European Workday Profile Situations We Resolve',
    cases: [
      'Workday HCM consultant targeting Amsterdam or Dublin tech company roles with no response',
      'Workday Integration Developer not appearing in German enterprise recruiter searches',
      'Workday consultant without explicit multi-country HCM or GDPR experience — positioning strategy',
      'Non-EU Workday professional targeting European remote roles — geographic positioning',
      'Senior Workday consultant targeting Switzerland banking or pharma Workday roles',
      'Workday contractor between European engagements needing rapid pan-European interview pipeline',
    ],
  },
  proxySection: {
    title: 'European Workday Job Market — What Gets You Calls in 2026',
    intro:
      'European Workday recruiters search for multi-country HCM experience, European payroll compliance signals, and current 2026R1 knowledge. We build your profile around those signals.',
    points: [
      'European Workday recruiter keyword mapping for May 2026',
      'Multi-country HCM and GDPR keyword integration',
      'LinkedIn positioning for European Workday recruiter visibility',
      'Active outreach to European Workday staffing firms across key markets',
      'European job portal optimization — LinkedIn DACH, Reed.ie, StepStone, Jobteaser',
    ],
  },
  bottomCTAHeading: 'Ready to Start Getting European Workday Interview Calls?',
  bottomCTABody: 'We engineer your Workday profile for European recruiter visibility — HCM, Integration, Finance. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Get Workday interviews scheduled UK', href: '/workday-interview-scheduled-uk/' },
    ],
    techLinks: [
      { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
      { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
    ],
    problemLink: { label: 'Struggling in your IT job?', href: '/struggling-in-job-developer-help/' },
    proxyLink: { label: 'Get interview scheduled Europe', href: '/get-interview-scheduled-germany/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY COUNTRY-SPECIFIC JOB SUPPORT PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupportIreland: LandingPageConfig = {
  slug: 'workday-job-support-ireland',
  title: 'Workday Job Support Ireland — Real-Time HCM & Integration Help for Irish Roles',
  description:
    'Workday job support for Ireland consultants — HCM, Financials, Integrations, Security. Dublin tech hubs, multinationals, enterprise. IST/GMT aligned. 2026R1 ready. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-ireland/`,
  keywords: [
    'Workday job support Ireland', 'Workday Ireland', 'Workday consultant Ireland',
    'Workday HCM Ireland', 'Workday integration Ireland', 'Workday Dublin',
  ],
  h1: 'Workday Job Support Ireland — Real-Time HCM, Integrations & Finance Expert Help',
  tagline: 'Live Workday job support for Ireland-based consultants — HCM, Financials, Integrations, Reporting, Security. Dublin multinationals, IDA companies, and remote Irish roles. IST/GMT aligned.',
  heroEyebrow: 'Workday Ireland Support — IST/GMT',
  painIntro:
    'On an Ireland-based Workday project with a production incident or 2026R1 regression? Dublin is a major Workday hub — Google, Meta, Microsoft, Stripe, Salesforce, and dozens of IDA Ireland companies all run Workday HCM and Finance platforms here.',
  heroVariant:
    'Ireland\'s tech ecosystem in Dublin, Cork, and Galway hosts the EMEA headquarters of global technology companies that run enterprise Workday implementations at scale. Critical Skills employment permit holders, EEA professionals, and remote Irish consultants all work on complex Workday environments with demanding client SLAs. Our in-house experts provide same-day real-time support aligned to IST/GMT hours. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across Ireland — Dublin, Cork, Galway, Limerick, and remote Irish roles.',
  timezoneNote: 'Aligned with Irish Standard Time (IST) and GMT for Workday support.',
  techSnippet: 'Full Workday module support for Irish implementations: HCM, Integrations, Financial Management, Reporting, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Ireland Workday'),
  useCasesSection: {
    title: 'Ireland Workday Situations We Help Resolve',
    cases: [
      'Dublin tech company HCM business process breaking after 2026R1 tenant update',
      'EIB or Studio integration failing for a Dublin-based multinational before a payroll run',
      'Workday Security misconfiguration at an Irish IDA company preventing HR transactions',
      'Workday Financials multi-currency posting error at a Dublin EMEA finance hub',
      'Workday Reporting failing for an Irish enterprise compliance requirement',
      'Hypercare incidents at an Irish Workday go-live requiring immediate IST-hour resolution',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Ireland Roles',
    intro:
      'Irish Workday consulting roles at Dublin multinationals, IDA Ireland companies, and Irish consulting firms require module depth and enterprise-scale implementation experience. Our experts provide real-time discreet guidance.',
    points: [
      'Real-time guidance for Dublin multinational Workday HCM interviews',
      'Support for Irish consulting firm Workday Integration technical panels',
      'GDPR-aligned security knowledge relevant to Irish data protection requirements',
      'Coverage for 2026R1 topics in Irish Workday interviews',
    ],
  },
  bottomCTAHeading: 'Ireland Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday job support for Irish projects — IST/GMT aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Ireland', href: '/job-support-ireland/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportGermany: LandingPageConfig = {
  slug: 'workday-job-support-germany',
  title: 'Workday Job Support Germany — Real-Time HCM, Payroll & Integration Help',
  description:
    'Workday job support for Germany consultants — HCM, German payroll compliance, Integrations, Financials. Berlin, Munich, Frankfurt, Hamburg. CET/CEST aligned. 2026R1 ready. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-germany/`,
  keywords: [
    'Workday job support Germany', 'Workday Deutschland support', 'Workday consultant Germany',
    'Workday HCM Germany', 'Workday payroll Germany', 'Workday integration Germany',
  ],
  h1: 'Workday Job Support Germany — Real-Time HCM, German Payroll & Integration Expert Help',
  tagline: 'Live Workday job support for Germany-based consultants — HCM, German payroll compliance, Integrations, Financials, and 2026R1 support. Berlin, Munich, Frankfurt, Hamburg. CET/CEST aligned.',
  heroEyebrow: 'Workday Germany Support — CET/CEST',
  painIntro:
    'On a German Workday project with HCM configuration issues, German payroll social insurance calculation errors, or integration failures? German Workday implementations have unique compliance requirements — works councils (Betriebsrat), German social insurance, collective wage agreements, and Kurzarbeit scenarios.',
  heroVariant:
    'Germany has strong enterprise Workday demand at SAP ecosystem companies, automotive (BMW, Mercedes-Benz tech), financial services (Deutsche Bank, Allianz), industrial giants, and professional services firms. German Workday implementations require expertise in German HR law (works council consultation, Betriebsrat co-determination rights), German payroll social insurance (Krankenversicherung, Rentenversicherung, Arbeitslosenversicherung, Pflegeversicherung), and GDPR-compliant data governance. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday consultants across Germany — Berlin, Munich, Frankfurt, Hamburg, Cologne, and remote German roles.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) for Germany Workday support.',
  techSnippet: 'Germany-specific Workday coverage: HCM with Betriebsrat workflows, German payroll social insurance, Integrations, Financial Management, GDPR-aligned Security.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Germany Workday'),
  useCasesSection: {
    title: 'Germany Workday Situations We Help Resolve',
    cases: [
      'German Workday Payroll social insurance calculation error — Krankenkasse or pension deduction configuration',
      'Betriebsrat (works council) HCM workflow not routing correctly in Workday business process',
      'German collective wage agreement (Tarifvertrag) compensation rule not applying correctly',
      'EIB integration to German payroll provider (e.g. DATEV) failing before payroll run',
      'GDPR-aligned Workday Security domain policy issue at a German enterprise',
      'Workday Financials multi-currency error for EUR transactions at a German finance team',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Germany Roles',
    intro:
      'German Workday consulting roles require deep HCM knowledge plus German HR law, social insurance, and works council process understanding. Our experts provide real-time discreet guidance for German Workday interviews.',
    points: [
      'German HCM interview scenarios — Betriebsrat workflows, German HR law, collective agreements',
      'German payroll compliance questions — social insurance contributions, Lohnsteuer, ELSTER',
      'GDPR-aligned security design for German enterprise implementations',
      'Integration architecture for German payroll providers and HR systems',
    ],
  },
  bottomCTAHeading: 'Germany Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for German projects — CET/CEST. German payroll compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday job support Switzerland', href: '/workday-job-support-switzerland/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Germany', href: '/job-support-germany/' },
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportNetherlands: LandingPageConfig = {
  slug: 'workday-job-support-netherlands',
  title: 'Workday Job Support Netherlands — Real-Time HCM & Integration Help',
  description:
    'Workday job support for Netherlands consultants — HCM, Integrations, Financials, Reporting. Amsterdam, Rotterdam, Eindhoven. CET/CEST aligned. ASML, ING, Adyen, Booking.com ecosystem. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-netherlands/`,
  keywords: [
    'Workday job support Netherlands', 'Workday Nederland support', 'Workday consultant Netherlands',
    'Workday HCM Netherlands', 'Workday integration Netherlands', 'Workday Amsterdam',
  ],
  h1: 'Workday Job Support Netherlands — Real-Time HCM, Integrations & Finance Expert Help',
  tagline: 'Live Workday job support for Netherlands-based consultants — HCM, Integrations, Financials, Reporting, and 2026R1 support. Amsterdam, Rotterdam, Eindhoven. CET/CEST aligned.',
  heroEyebrow: 'Workday Netherlands Support — CET/CEST',
  painIntro:
    'On a Dutch Workday project with HCM configuration issues, integration failures, or reporting problems? Netherlands has major Workday implementations at ASML, ING, Adyen, Booking.com, Philips, bol.com, and ABN AMRO.',
  heroVariant:
    'The Netherlands is one of Europe\'s most active Workday markets — driven by international enterprise operations, complex multi-country HCM configurations, Dutch pension fund integrations (APG, PGGM), and GDPR-compliant HR and Finance platforms. Dutch Workday implementations often include pan-European scope covering multiple HCM countries. Our experts provide same-day real-time support aligned to Dutch CET/CEST hours. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday consultants across Netherlands — Amsterdam, Rotterdam, The Hague, Eindhoven, and remote Dutch roles.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) for Netherlands Workday support.',
  techSnippet: 'Netherlands Workday coverage: HCM, Dutch pension fund integrations, Integrations, Financial Management, GDPR-aligned Security, and multi-country HCM.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Netherlands Workday'),
  useCasesSection: {
    title: 'Netherlands Workday Situations We Help Resolve',
    cases: [
      'Dutch Workday HCM business process configuration error at an Amsterdam enterprise',
      'Pension fund integration (APG/PGGM) EIB or PECI failing before monthly contribution run',
      'Multi-country HCM configuration issue affecting Netherlands-based employees',
      'Workday Security domain policy misconfiguration at a Dutch financial services firm',
      'GDPR-compliant data access design review for a Netherlands Workday tenant',
      'Workday Financial Management multi-currency EUR transaction posting error',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Netherlands Roles',
    intro:
      'Dutch Workday consulting roles require module depth and international enterprise experience. Our experts provide real-time guidance for Netherlands Workday interviews.',
    points: [
      'Multi-country HCM configuration and global business process design questions',
      'Dutch pension and HR compliance integration knowledge',
      'GDPR-aligned security design for Dutch enterprise implementations',
      'Coverage for 2026R1 topics in Dutch Workday interviews',
    ],
  },
  bottomCTAHeading: 'Netherlands Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for Dutch projects — CET/CEST aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday job support Germany', href: '/workday-job-support-germany/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Netherlands', href: '/job-support-netherlands/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportFrance: LandingPageConfig = {
  slug: 'workday-job-support-france',
  title: 'Workday Job Support France — Real-Time HCM & Integration Help for French Roles',
  description:
    'Workday job support for France consultants — HCM, French payroll, Integrations, Financials. Paris, Lyon, Nice. CET/CEST aligned. French HR and compliance expertise. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-france/`,
  keywords: [
    'Workday job support France', 'Workday France support', 'Workday consultant France',
    'Workday HCM France', 'Workday payroll France', 'Workday Paris',
  ],
  h1: 'Workday Job Support France — Real-Time HCM, French Payroll & Integration Expert Help',
  tagline: 'Live Workday job support for France-based consultants — HCM, French collective agreements, Integrations, Financials, and 2026R1 support. Paris, Lyon, and remote French roles. CET/CEST aligned.',
  heroEyebrow: 'Workday France Support — CET/CEST',
  painIntro:
    'French Workday implementation issues? HCM configuration with French collective agreement rules, French payroll URSSAF contribution errors, or integration failures? French Workday implementations have specific compliance requirements — our experts cover all of it.',
  heroVariant:
    'France has active Workday demand at multinationals (L\'Oreal, Airbus, BNP Paribas, Total Energies), consulting firms, and technology companies. French Workday implementations require expertise in collective agreements (conventions collectives), French payroll URSSAF/AGIRC-ARRCO contributions, works council requirements (CSE — Comite Social et Economique), GDPR compliance, and French HR regulatory framework. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across France — Paris, Lyon, Nice, Bordeaux, and remote French roles.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) for France Workday support.',
  techSnippet: 'France-specific Workday coverage: HCM with French collective agreements, French payroll URSSAF/AGIRC-ARRCO, Integrations, Financial Management, GDPR-aligned Security.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('France Workday'),
  useCasesSection: {
    title: 'France Workday Situations We Help Resolve',
    cases: [
      'French Workday Payroll URSSAF or AGIRC-ARRCO calculation error before payroll run',
      'Collective agreement (convention collective) compensation rule not applying correctly in Workday',
      'CSE (Comite Social et Economique) HCM workflow configuration issue',
      'EIB integration to French payroll provider or social protection organization failing',
      'GDPR-compliant Workday Security domain policy issue at a French enterprise',
      'Workday HCM business process error at a Paris multinational after 2026R1',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for France Roles',
    intro:
      'French Workday consulting roles require module depth and French HR and payroll compliance expertise. Our experts provide real-time guidance for French Workday interviews.',
    points: [
      'French HCM interview scenarios — collective agreements, CSE workflows, French HR regulatory framework',
      'French payroll compliance — URSSAF, AGIRC-ARRCO, DSN, French social charges',
      'GDPR-aligned security design for French enterprise implementations',
      'Coverage for 2026R1 topics in French Workday interviews',
    ],
  },
  bottomCTAHeading: 'France Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for French projects — CET/CEST. French payroll and HR compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday job support Germany', href: '/workday-job-support-germany/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportSweden: LandingPageConfig = {
  slug: 'workday-job-support-sweden',
  title: 'Workday Job Support Sweden — Real-Time HCM & Integration Help for Swedish Roles',
  description:
    'Workday job support for Sweden consultants — HCM, Integrations, Reporting, Security. Stockholm, Gothenburg, Malmo. CET/CEST aligned. Spotify, Klarna, Ericsson, Volvo tech ecosystem. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-sweden/`,
  keywords: [
    'Workday job support Sweden', 'Workday Sweden support', 'Workday consultant Sweden',
    'Workday HCM Sweden', 'Workday integration Sweden', 'Workday Stockholm',
  ],
  h1: 'Workday Job Support Sweden — Real-Time HCM, Integrations & Reporting Expert Help',
  tagline: 'Live Workday job support for Sweden-based consultants — HCM, Integrations, Reporting, Security, and 2026R1 support. Stockholm, Gothenburg, Malmo. CET/CEST aligned.',
  heroEyebrow: 'Workday Sweden Support — CET/CEST',
  painIntro:
    'Swedish Workday project with HCM configuration issues, reporting failures, or integration problems? Sweden has major Workday implementations at Spotify, Klarna, Ericsson, Volvo Cars tech, H&M, and ABB — all demanding high-quality enterprise HR and Finance platforms.',
  heroVariant:
    'Sweden is one of Europe\'s most digitally mature Workday markets — companies like Spotify, Klarna, Ericsson, and Volvo run enterprise Workday HCM and Finance platforms with Swedish payroll compliance requirements, flexible working arrangements, union representation configurations, and pan-European HCM scope. Swedish implementations also demand strong Workday Reporting and Prism Analytics capability for HR analytics and workforce planning. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday consultants across Sweden — Stockholm, Gothenburg, Malmo, and remote Swedish roles.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) for Sweden Workday support.',
  techSnippet: 'Sweden Workday coverage: HCM with Swedish payroll compliance, Integrations, Reporting/Prism Analytics, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Sweden Workday'),
  useCasesSection: {
    title: 'Sweden Workday Situations We Help Resolve',
    cases: [
      'Swedish Workday HCM business process error after 2026R1 update at a Stockholm tech company',
      'Swedish payroll integration to Fortnox, Visma, or other Swedish payroll system failing',
      'Workday Reporting or Prism Analytics issue blocking Swedish HR analytics deadlines',
      'Multi-country HCM configuration issue affecting Swedish employees in a pan-European tenant',
      'Workday Security domain policy misconfiguration at a Swedish enterprise',
      'Workday Integration failing at a Swedish telco or technology company',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Sweden Roles',
    intro:
      'Swedish Workday consulting roles require module depth and Swedish market knowledge. Our experts provide real-time guidance for Swedish Workday interviews.',
    points: [
      'Swedish HCM interview scenarios — union configurations, flexible working, Swedish HR practices',
      'Swedish payroll and social insurance compliance knowledge',
      'Workday Reporting and Prism Analytics depth for Swedish HR analytics roles',
      'Coverage for 2026R1 topics in Swedish Workday interviews',
    ],
  },
  bottomCTAHeading: 'Sweden Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for Swedish projects — CET/CEST aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday job support Netherlands', href: '/workday-job-support-netherlands/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday reporting analytics support', href: '/workday-reporting-analytics-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Sweden', href: '/job-support-sweden/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportSwitzerland: LandingPageConfig = {
  slug: 'workday-job-support-switzerland',
  title: 'Workday Job Support Switzerland — Real-Time HCM, Finance & Security Help',
  description:
    'Workday job support for Switzerland consultants — HCM, Financial Management, Security, Integrations. Zurich, Geneva, Basel. CET/CEST. Banking, pharma, finance sector expertise. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-switzerland/`,
  keywords: [
    'Workday job support Switzerland', 'Workday Switzerland support', 'Workday consultant Switzerland',
    'Workday HCM Switzerland', 'Workday Financial Management Switzerland', 'Workday Zurich',
  ],
  h1: 'Workday Job Support Switzerland — Real-Time HCM, Finance & Security Expert Help',
  tagline: 'Live Workday job support for Switzerland-based consultants — HCM, Financial Management, Security, Integrations, and 2026R1 support. Zurich, Geneva, Basel. Banking and pharma expertise.',
  heroEyebrow: 'Workday Switzerland Support — CET/CEST',
  painIntro:
    'Swiss Workday project with HCM configuration issues, Financial Management errors, or security misconfigurations? Switzerland has major Workday implementations at UBS, ABB, Roche, Novartis, Nestle, and Credit Suisse successor entities — all demanding high-precision finance and HR platforms.',
  heroVariant:
    'Switzerland is one of Europe\'s most demanding Workday markets — driven by global banking (UBS, Julius Bar), pharmaceutical giants (Roche, Novartis), industrial conglomerates (ABB, Sulzer), and multinational FMCG (Nestle). Swiss implementations have specific requirements: multi-currency Financial Management (CHF/EUR/USD), Swiss payroll (AHV/ALV/BVG contributions), GDPR and Swiss Federal Act on Data Protection (nFADP) alignment, and Workday Security design for highly regulated financial and pharmaceutical environments. Updated for May 2026.',
  geoLine: 'Supporting Workday consultants across Switzerland — Zurich, Geneva, Basel, Bern, and remote Swiss roles.',
  timezoneNote: 'Aligned with Central European Time (CET/CEST) for Switzerland Workday support.',
  techSnippet: 'Switzerland Workday coverage: HCM with Swiss payroll compliance (AHV/BVG), Financial Management, Security, Integrations, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Switzerland Workday'),
  useCasesSection: {
    title: 'Switzerland Workday Situations We Help Resolve',
    cases: [
      'Swiss Workday Payroll AHV/ALV/BVG contribution calculation error before payroll run',
      'Multi-currency CHF/EUR Workday Financials posting error at a Zurich banking implementation',
      'Workday Security misconfiguration at a Swiss pharmaceutical or banking enterprise',
      'EIB integration to a Swiss pension fund (BVG) provider failing',
      'GDPR and nFADP (Swiss Data Protection Act) Workday data access audit requirements',
      'Workday Financial Management GL closing error at a Swiss multinational',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Switzerland Roles',
    intro:
      'Swiss Workday consulting roles require deep HCM and Finance module knowledge plus Swiss compliance and banking/pharma sector expertise. Our experts provide real-time guidance.',
    points: [
      'Swiss HCM interview scenarios — AHV/BVG payroll, Swiss HR practices',
      'Workday Financial Management depth for Swiss banking and finance roles',
      'nFADP and GDPR-aligned security design for Swiss enterprise implementations',
      'Coverage for 2026R1 topics in Swiss Workday interviews',
    ],
  },
  bottomCTAHeading: 'Switzerland Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for Swiss projects — CET/CEST. Swiss payroll and finance compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday job support Germany', href: '/workday-job-support-germany/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday Financial Management support', href: '/workday-financial-management-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Switzerland', href: '/job-support-switzerland/' },
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY GLOBAL PAGES: AUSTRALIA, NZ, SINGAPORE, UAE, SAUDI
// ═══════════════════════════════════════════════════════════════════════════

export const workdayJobSupportAustralia: LandingPageConfig = {
  slug: 'workday-job-support-australia',
  title: 'Workday Job Support Australia — Real-Time HCM & Integration Help',
  description:
    'Workday job support for Australia consultants — HCM, Payroll, Integrations, Reporting. Sydney, Melbourne, Brisbane. AEST/AEDT aligned. Banking, healthcare, enterprise. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-australia/`,
  keywords: [
    'Workday job support Australia', 'Workday Australia support', 'Workday consultant Australia',
    'Workday HCM Australia', 'Workday payroll Australia', 'Workday Sydney',
  ],
  h1: 'Workday Job Support Australia — Real-Time HCM, Payroll & Integration Expert Help',
  tagline: 'Live Workday job support for Australian consultants — HCM, Payroll, Integrations, Reporting, and 2026R1 support. Sydney, Melbourne, Brisbane. AEST/AEDT aligned.',
  heroEyebrow: 'Workday Australia Support — AEST/AEDT',
  painIntro:
    'Australian Workday project with HCM configuration issues, Australian payroll errors, or integration failures? Commonwealth Bank, ANZ, Westpac, Telstra, BHP, and Woolworths all run enterprise Workday platforms — get expert help now.',
  heroVariant:
    'Australia has a growing Workday market driven by banking (Commonwealth Bank, ANZ, NAB, Westpac), healthcare, retail (Woolworths, Coles tech), and mining/resources. Australian Workday Payroll has specific compliance requirements — STP2 (Single Touch Payroll Phase 2) reporting to the ATO, superannuation fund integrations, Award rate calculations, and PAYG withholding. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across Australia — Sydney, Melbourne, Brisbane, Perth, and remote Australian roles.',
  timezoneNote: 'Aligned with AEST and AEDT working hours for Australian Workday support.',
  techSnippet: 'Australia Workday coverage: HCM, Payroll (STP2/superannuation/Award rates), Integrations, Financial Management, Reporting, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Australia Workday'),
  useCasesSection: {
    title: 'Australia Workday Situations We Help Resolve',
    cases: [
      'Australian Workday Payroll STP2 submission error before pay run',
      'Superannuation fund integration (ATO, APRA-regulated fund) failing before quarterly contribution deadline',
      'Australian Award rate calculation error in Workday Time Tracking or Payroll',
      'Workday HCM business process breaking at an Australian bank or enterprise after 2026R1',
      'EIB or Core Connector integration failing at an Australian healthcare or retail organization',
      'Workday Security role misconfiguration preventing Australian employees from HCM transactions',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Australia Roles',
    intro:
      'Australian Workday consulting roles require module depth and Australian payroll compliance expertise. Our experts provide real-time guidance for Australian Workday interviews.',
    points: [
      'Australian payroll compliance knowledge — STP2, superannuation, Award rates, PAYG withholding',
      'HCM interview scenarios for Australian banking, healthcare, and enterprise organizations',
      'Coverage for 2026R1 topics in Australian Workday interviews',
      'Integration architecture for Australian payroll and HR systems',
    ],
  },
  bottomCTAHeading: 'Australia Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for Australian projects — AEST/AEDT aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
      { label: 'Workday job support Singapore', href: '/workday-job-support-singapore/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Australia', href: '/job-support-australia/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportNewZealand: LandingPageConfig = {
  slug: 'workday-job-support-new-zealand',
  title: 'Workday Job Support New Zealand — Real-Time HCM & Integration Help',
  description:
    'Workday job support for New Zealand consultants — HCM, Payroll, Integrations, Reporting. Auckland, Wellington. NZST/NZDT aligned. Enterprise and government. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-new-zealand/`,
  keywords: [
    'Workday job support New Zealand', 'Workday NZ support', 'Workday consultant New Zealand',
    'Workday HCM New Zealand', 'Workday Auckland', 'Workday Wellington',
  ],
  h1: 'Workday Job Support New Zealand — Real-Time HCM, Payroll & Integration Expert Help',
  tagline: 'Live Workday job support for New Zealand consultants — HCM, Payroll, Integrations, and 2026R1 support. Auckland, Wellington. NZST/NZDT aligned.',
  heroEyebrow: 'Workday New Zealand Support — NZST/NZDT',
  painIntro:
    'New Zealand Workday project with HCM issues or payroll errors? Xero ecosystem integrations, NZ government digital service implementations, or enterprise HR platforms — get expert real-time help.',
  heroVariant:
    'New Zealand has growing Workday demand in government digital services, healthcare, financial services, and enterprise organizations. NZ Workday Payroll requires KiwiSaver integration, PAYE/IRD compliance, and ACC contribution handling. Updated for May 2026 Workday market demand and current Workday release trends.',
  geoLine: 'Supporting Workday consultants across New Zealand — Auckland, Wellington, Christchurch, and remote NZ roles.',
  timezoneNote: 'Aligned with New Zealand Standard Time (NZST/NZDT) for Workday support.',
  techSnippet: 'New Zealand Workday coverage: HCM, Payroll (KiwiSaver/PAYE/IRD), Integrations, Reporting, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('New Zealand Workday'),
  useCasesSection: {
    title: 'New Zealand Workday Situations We Help Resolve',
    cases: [
      'NZ Workday Payroll KiwiSaver contribution calculation error',
      'PAYE/IRD payroll filing integration failure',
      'Workday HCM business process error at an Auckland enterprise after 2026R1',
      'EIB integration failure at a NZ government digital service organization',
      'Workday Security misconfiguration at a New Zealand financial services firm',
      'Workday Reporting issue blocking NZ compliance or regulatory reporting',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for New Zealand Roles',
    intro:
      'NZ Workday consulting roles require module depth and NZ payroll compliance knowledge. Our experts provide real-time guidance for New Zealand Workday interviews.',
    points: [
      'NZ payroll compliance — KiwiSaver, PAYE, IRD, ACC contributions',
      'HCM interview scenarios for NZ government, healthcare, and enterprise',
      'Coverage for 2026R1 topics in NZ Workday interviews',
    ],
  },
  bottomCTAHeading: 'New Zealand Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for NZ projects — NZST/NZDT aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Australia', href: '/workday-job-support-australia/' },
      { label: 'Workday job support Singapore', href: '/workday-job-support-singapore/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support New Zealand', href: '/job-support-newzealand/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportSingapore: LandingPageConfig = {
  slug: 'workday-job-support-singapore',
  title: 'Workday Job Support Singapore — Real-Time HCM & Integration Help',
  description:
    'Workday job support for Singapore consultants — HCM, Integrations, Financials, Reporting. SGT aligned. DBS, Grab, GovTech, MAS-regulated firms. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-singapore/`,
  keywords: [
    'Workday job support Singapore', 'Workday Singapore support', 'Workday consultant Singapore',
    'Workday HCM Singapore', 'Workday integration Singapore', 'Workday SGT',
  ],
  h1: 'Workday Job Support Singapore — Real-Time HCM, Integrations & Finance Expert Help',
  tagline: 'Live Workday job support for Singapore-based consultants — HCM, Integrations, Financials, Reporting, and 2026R1 support. DBS, Grab, GovTech, and MAS-regulated firm ecosystem. SGT aligned.',
  heroEyebrow: 'Workday Singapore Support — SGT',
  painIntro:
    'Singapore Workday project with HCM configuration issues, integration failures, or reporting problems? Singapore is a major APAC Workday hub — DBS, UOB, OCBC, Grab, Sea Group, and GovTech all run enterprise Workday platforms.',
  heroVariant:
    'Singapore is the APAC headquarters for many Workday implementations — covering multi-country APAC HCM, MAS-regulated financial services HR and Finance platforms, and government digital service implementations. Singapore CPF (Central Provident Fund) integration, Skills Development Levy compliance, and MOM regulatory requirements make Singapore Workday implementations uniquely complex. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday consultants in Singapore and APAC — aligned with Singapore Standard Time (SGT).',
  timezoneNote: 'Aligned with Singapore Standard Time (SGT +8) for Workday support.',
  techSnippet: 'Singapore Workday coverage: Multi-country APAC HCM, CPF integration, Integrations, Financial Management, PDPA-compliant Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Singapore Workday'),
  useCasesSection: {
    title: 'Singapore Workday Situations We Help Resolve',
    cases: [
      'Singapore CPF contribution integration failing before monthly payroll submission',
      'Multi-country APAC HCM configuration error affecting Singapore-based employees',
      'Workday Security misconfiguration at a Singapore MAS-regulated financial institution',
      'EIB or Core Connector integration failing at a Singapore tech or GovTech implementation',
      'Workday Financials multi-currency SGD/USD transaction posting error',
      'Workday HCM business process error at a Singapore enterprise after 2026R1',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Singapore Roles',
    intro:
      'Singapore Workday consulting roles require module depth, APAC multi-country HCM experience, and MAS/PDPA compliance awareness. Our experts provide real-time guidance.',
    points: [
      'Singapore and APAC HCM interview scenarios — CPF, multi-country configurations',
      'MAS-regulated financial services Workday security and compliance knowledge',
      'Coverage for 2026R1 topics in Singapore Workday interviews',
    ],
  },
  bottomCTAHeading: 'Singapore Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for Singapore projects — SGT aligned. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Australia', href: '/workday-job-support-australia/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday integration job support', href: '/workday-integration-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'IT job support Singapore', href: '/job-support-singapore/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportUAE: LandingPageConfig = {
  slug: 'workday-job-support-uae',
  title: 'Workday Job Support UAE — Real-Time HCM & Integration Help for Gulf Roles',
  description:
    'Workday job support for UAE consultants — HCM, Integrations, Financials, Reporting. Dubai, Abu Dhabi. GST aligned. Banking, oil & gas, government enterprise. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-uae/`,
  keywords: [
    'Workday job support UAE', 'Workday UAE support', 'Workday consultant UAE',
    'Workday HCM UAE', 'Workday Dubai', 'Workday Gulf support',
  ],
  h1: 'Workday Job Support UAE — Real-Time HCM, Integrations & Finance Expert Help',
  tagline: 'Live Workday job support for UAE-based consultants — HCM, Integrations, Financial Management, and 2026R1 support. Dubai, Abu Dhabi. Emirates-based organizations and multinationals.',
  heroEyebrow: 'Workday UAE Support — GST Aligned',
  painIntro:
    'UAE Workday project with HCM configuration issues, integration failures, or Financial Management errors? Dubai is the Gulf\'s enterprise technology hub — banks, government entities, oil & gas companies, and multinationals all run Workday platforms here.',
  heroVariant:
    'The UAE has significant Workday demand at ADNOC, Emirates Group, ENBD, FAB, Mubadala, Abu Dhabi Government entities, and large multinational FMCG and professional services firms in the DIFC. UAE Workday implementations have WPS (Wage Protection System) payroll compliance requirements, gratuity calculation rules, UAE national HR reporting (UAE Emiratization — Nafis), and multi-currency AED/USD Finance configurations. Updated for May 2026 Workday market demand.',
  geoLine: 'Supporting Workday consultants across UAE — Dubai, Abu Dhabi, Sharjah, and GCC remote roles.',
  timezoneNote: 'Aligned with Gulf Standard Time (GST +4) for UAE Workday support.',
  techSnippet: 'UAE Workday coverage: HCM with UAE WPS/gratuity/Emiratization, Integrations, Financial Management, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('UAE Workday'),
  useCasesSection: {
    title: 'UAE Workday Situations We Help Resolve',
    cases: [
      'UAE WPS (Wage Protection System) payroll submission failing before monthly pay run',
      'End-of-service gratuity calculation error for UAE-based employees',
      'Emiratization (Nafis quota) tracking and reporting configuration issue in Workday HCM',
      'Multi-currency AED/USD Workday Financial Management posting error',
      'EIB or Core Connector integration failing at a Dubai government or banking enterprise',
      'Workday Security misconfiguration at a UAE financial institution or government entity',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for UAE Roles',
    intro:
      'UAE Workday consulting roles require module depth, UAE labor law compliance, and GCC regional experience. Our experts provide real-time guidance for UAE Workday interviews.',
    points: [
      'UAE HCM interview scenarios — WPS compliance, gratuity, Emiratization, UAE HR law',
      'UAE Financial Management — multi-currency AED/USD, DIFC regulatory requirements',
      'Coverage for 2026R1 topics in UAE Workday interviews',
      'Integration architecture for UAE government systems and financial sector',
    ],
  },
  bottomCTAHeading: 'UAE Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for UAE projects — GST aligned. UAE compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support Saudi Arabia', href: '/workday-job-support-saudi-arabia/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

export const workdayJobSupportSaudiArabia: LandingPageConfig = {
  slug: 'workday-job-support-saudi-arabia',
  title: 'Workday Job Support Saudi Arabia — Real-Time HCM & Integration Help',
  description:
    'Workday job support for Saudi Arabia consultants — HCM, Integrations, Financials, Reporting. Riyadh, Jeddah. AST aligned. Vision 2030 enterprise transformation. GOSI compliance. Same-day start.',
  canonical: `${BASE_URL}/workday-job-support-saudi-arabia/`,
  keywords: [
    'Workday job support Saudi Arabia', 'Workday KSA support', 'Workday consultant Saudi Arabia',
    'Workday HCM Saudi Arabia', 'Workday Riyadh', 'Workday Vision 2030',
  ],
  h1: 'Workday Job Support Saudi Arabia — Real-Time HCM, Integrations & Finance Expert Help',
  tagline: 'Live Workday job support for Saudi Arabia-based consultants — HCM, Integrations, Financial Management, and 2026R1 support. Riyadh, Jeddah. Vision 2030 enterprise transformation covered.',
  heroEyebrow: 'Workday Saudi Arabia Support — AST Aligned',
  painIntro:
    'Saudi Arabia Workday project with HCM issues, GOSI integration failures, or Financial Management errors? Saudi Vision 2030 has driven massive enterprise HR and Finance transformation across ARAMCO, STC, SABIC, Saudi Electricity Company, and government entities.',
  heroVariant:
    'Saudi Arabia has significant and rapidly growing Workday demand driven by Vision 2030 digital transformation initiatives — ARAMCO, STC, SABIC, PIF-owned entities, and Saudi government modernization programs. Saudi Workday implementations have GOSI (General Organization for Social Insurance) integration requirements, Saudization (Nitaqat compliance) HCM tracking, Hijri calendar considerations, and multi-currency SAR/USD Financial Management configurations. Updated for May 2026.',
  geoLine: 'Supporting Workday consultants across Saudi Arabia — Riyadh, Jeddah, Dammam, and GCC remote roles.',
  timezoneNote: 'Aligned with Arabia Standard Time (AST +3) for Saudi Arabia Workday support.',
  techSnippet: 'Saudi Arabia Workday coverage: HCM with GOSI integration/Saudization/Hijri calendar, Integrations, Financial Management, Security, and 2026R1.',
  highlights: workdayHighlights,
  faqs: workdayJobSupportFaqs('Saudi Arabia Workday'),
  useCasesSection: {
    title: 'Saudi Arabia Workday Situations We Help Resolve',
    cases: [
      'GOSI (General Organization for Social Insurance) integration failing before monthly contribution deadline',
      'Saudization (Nitaqat compliance) tracking and reporting configuration issue in Workday HCM',
      'Hijri calendar business process configuration issue for Saudi-based employees',
      'Multi-currency SAR/USD Workday Financials posting or reconciliation error',
      'EIB or Core Connector integration failing at a Saudi government or ARAMCO subsidiary',
      'Workday Security misconfiguration at a Saudi financial institution or government entity',
    ],
  },
  proxySection: {
    title: 'Workday Proxy Interview Support for Saudi Arabia Roles',
    intro:
      'Saudi Arabia Workday consulting roles require module depth, Saudi labor law compliance, and Vision 2030 enterprise context. Our experts provide real-time guidance.',
    points: [
      'Saudi HCM interview scenarios — GOSI compliance, Saudization, Saudi HR law, Hijri calendar',
      'Saudi Financial Management — SAR currency, Saudi GAAP, Vision 2030 finance transformation',
      'Coverage for 2026R1 topics in Saudi Workday interviews',
      'Integration architecture for Saudi government systems and financial institutions',
    ],
  },
  bottomCTAHeading: 'Saudi Arabia Workday Issue? Get Real-Time Expert Help Now',
  bottomCTABody: 'Same-day Workday support for Saudi projects — AST aligned. GOSI and Saudization compliance covered. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support UAE', href: '/workday-job-support-uae/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday job support hub', href: '/workday-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY HRIS PAGES
// ═══════════════════════════════════════════════════════════════════════════

export const workdayHrisJobSupport: LandingPageConfig = {
  slug: 'workday-hris-job-support',
  title: 'Workday HRIS Job Support — Real-Time HRIS Analyst & People Systems Help',
  description:
    'Workday HRIS issue blocking your day? Get real-time Workday HRIS job support for HRIS Analysts, People Systems Analysts, and HR Systems Analysts. Employee data management, worker changes, supervisory org issues, business process support, HR reporting, security access, and production tickets. Same-day start.',
  canonical: `${BASE_URL}/workday-hris-job-support/`,
  keywords: [
    'Workday HRIS job support', 'Workday HRIS Analyst support', 'Workday People Systems Analyst support',
    'Workday Systems Analyst support', 'HRIS production support', 'Workday employee data support',
    'Workday HRIS reporting support', 'HRIS data management support', 'Workday worker data support',
    'Workday HRIS production issues', 'HRIS Analyst Workday help',
  ],
  h1: 'Workday HRIS Job Support — Real-Time Help for HRIS Analysts & People Systems Teams',
  tagline: 'Live Workday HRIS support during your working hours — employee data management, worker changes, supervisory org errors, business process issues, HR reporting, security access, and daily HRIS production ticket support.',
  heroEyebrow: 'Workday HRIS Support — 2026R1 Ready',
  painIntro:
    'Employee data change failing? Supervisory org misconfigured? Position or job profile data error blocking a hire or transfer? Business process routing incorrectly for an HR workflow? Our in-house Workday HRIS experts fix it in real time — during your working hours.',
  heroVariant:
    'Workday HRIS Analysts and People Systems Analysts are the operational backbone of any Workday deployment — managing worker data, business process configurations, security access requests, HR operational reporting, and day-to-day production tickets. These roles carry significant responsibility with tight SLAs. Workday 2026R1 introduced HCM AI enhancements that affect HRIS daily workflows. Our experts provide same-day, real-time support calibrated to HRIS Analyst workloads.',
  geoLine: 'Supporting Workday HRIS Analysts and People Systems teams across USA, Canada, UK, Europe, Australia, Singapore, and worldwide.',
  timezoneNote: 'Available across US, Canadian, UK, European, and Asia Pacific business hours for Workday HRIS support.',
  techSnippet: 'HRIS Analyst support areas: worker data changes, supervisory org management, position and job profile data, business process configuration, security group access, Workday HCM reporting, calculated fields, absence and time tracking, payroll and benefits coordination, and 2026R1 HRIS workflow changes.',
  highlights: workdayHighlights,
  faqs: [
    {
      question: 'What Workday HRIS job support do you provide for HRIS Analysts?',
      answer:
        'We provide real-time Workday HRIS job support for HRIS Analysts, People Systems Analysts, and HR Systems Analysts. Our in-house Workday experts help with employee data management — worker profile changes, supervisory org configuration, position and job profile data, business process troubleshooting, security access resolution, HR operational reporting, absence and time tracking issues, payroll and benefits coordination, and daily production ticket support. Same-day start, all time zones covered.',
    },
    {
      question: 'Can you help with Workday employee data and worker change issues?',
      answer:
        'Yes. Worker data management is one of the most common HRIS support areas. We help resolve worker data validation errors, business process routing failures for hires/transfers/terminations, supervisory organization configuration issues, position data mismatches, job profile assignment errors, effective date sequencing problems, and data integrity issues affecting downstream Payroll and Benefits.',
    },
    {
      question: 'Do you support Workday HRIS production tickets and daily operational support?',
      answer:
        'Yes. Daily HRIS production support is a core part of our service. HRIS Analyst roles often involve resolving a high volume of production incidents — security access requests, business process exceptions, worker data errors, report malfunctions, and system behavior questions from HR business partners. We provide expert backup during peak periods, go-live hypercare, or when your team is stuck on a complex issue.',
    },
    {
      question: 'Do you provide Workday HRIS proxy interview support?',
      answer:
        'Yes. We provide real-time, discreet guidance during live Workday HRIS Analyst and People Systems Analyst interviews — HCM configuration scenarios, worker data management questions, business process walkthroughs, security access design, HR reporting scenarios, and operational support questions. See our dedicated Workday HRIS proxy interview support page.',
    },
    {
      question: 'Do you support People Systems Analyst and Workday Systems Analyst roles?',
      answer:
        'Yes. People Systems Analysts, Workday Systems Analysts, and HR Systems Analysts all work within Workday HCM and HRIS environments. We provide support calibrated to each role — from operational HRIS data management through to system configuration, integrations with HR tools, and reporting. Whether in a purely functional HRIS role or a more technical people systems role, we have the right expert.',
    },
  ],
  useCasesSection: {
    title: 'Workday HRIS Issues We Help Resolve',
    cases: [
      'Employee worker data change failing — business process routing error or data validation issue',
      'Supervisory org misconfiguration causing hire or transfer transactions to fail',
      'Position or job profile data error blocking a workforce planning or compensation cycle',
      'Security access issue — user missing HRIS data access or receiving incorrect data in reports',
      'Absence plan accrual not calculating correctly for an employee population',
      'HR operational report returning incorrect employee population after a business process change',
    ],
  },
  proxySection: {
    title: 'Workday HRIS Proxy Interview Support',
    intro:
      'HRIS Analyst and People Systems Analyst interviews test practical Workday knowledge — worker data scenarios, business process design, security access questions, HR reporting, and operational troubleshooting. Our experts guide you in real time.',
    points: [
      'Worker data management and supervisory org scenario questions',
      'Business process design and approval chain configuration walkthroughs',
      'Security access and domain security policy questions for HRIS roles',
      'HR reporting — Advanced Report design, calculated fields, data source questions',
      'Absence, time tracking, and benefits coordination scenario discussions',
      'Workday 2026R1 HRIS workflow and AI-driven HCM change questions',
    ],
  },
  bottomCTAHeading: 'Workday HRIS Issue? Get Expert Help Now',
  bottomCTABody:
    'Real-time Workday HRIS job support for HRIS Analysts, People Systems Analysts, and HR Systems Analysts — worker data, business processes, security access, reporting, and production support. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday job support UK', href: '/workday-job-support-uk/' },
    ],
    techLinks: [
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
      { label: 'Workday job support hub', href: '/workday-job-support/' },
    ],
    problemLink: { label: 'Workday HRIS proxy interview', href: '/workday-hris-proxy-interview-support/' },
    proxyLink: { label: 'Workday reporting analytics support', href: '/workday-reporting-analytics-job-support/' },
    blogLink: { label: 'Read IT job support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
      { label: 'Workday payroll job support', href: '/workday-payroll-job-support/' },
      { label: 'Workday recruiting job support', href: '/workday-recruiting-job-support/' },
      { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ─────────────────────────────────────────────────────────────────────────────

export const workdayHrisProxyInterviewSupport: LandingPageConfig = {
  slug: 'workday-hris-proxy-interview-support',
  title: 'Workday HRIS Proxy Interview Support — HRIS Analyst & People Systems Interview Help',
  description:
    'Workday HRIS interview coming up? Get real-time proxy interview support for HRIS Analyst, People Systems Analyst, and Workday Systems Analyst roles. Worker data scenarios, business process questions, security access, HR reporting, and HRIS operations walkthroughs. Same-day available.',
  canonical: `${BASE_URL}/workday-hris-proxy-interview-support/`,
  keywords: [
    'Workday HRIS proxy interview support', 'HRIS Analyst interview support', 'Workday HRIS interview help',
    'People Systems Analyst interview support', 'Workday Systems Analyst interview help',
    'Workday HRIS Analyst proxy interview', 'HRIS interview assistance', 'Workday HCM HRIS interview',
    'HR systems analyst interview support', 'Workday HRIS interview guidance',
  ],
  h1: 'Workday HRIS Proxy Interview Support — Real-Time Help for HRIS Analyst & People Systems Roles',
  tagline: 'Discreet real-time interview guidance for Workday HRIS Analyst, People Systems Analyst, and Workday Systems Analyst interviews — worker data scenarios, business process questions, security access, HR reporting, and operational walkthroughs.',
  heroEyebrow: 'Workday HRIS Interview Support — 2026',
  painIntro:
    'HRIS Analyst or People Systems Analyst interview scheduled? Worried about Workday configuration scenario questions, employee data scenarios, or business process troubleshooting walkthroughs? Our in-house Workday HRIS experts join your interview and guide you through every question in real time.',
  heroVariant:
    'Workday HRIS and People Systems Analyst interviews test practical, operational Workday knowledge — not just theory. Interviewers ask about real business process configurations, worker data scenarios, security access troubleshooting, and HR reporting design. These roles are at major US, Canadian, and UK enterprises, and the interviews are conducted by senior Workday leads and HR operations managers. Our HRIS-specialized experts provide discreet real-time guidance calibrated to each interview format.',
  geoLine: 'Supporting HRIS Analyst and People Systems Analyst interview candidates across USA, Canada, UK, Europe, Australia, Singapore, and worldwide.',
  timezoneNote: 'Available for Workday HRIS interviews across all major time zones — EST, CST, PST, GMT, CET, AEST.',
  highlights: workdayHighlights,
  faqs: [
    {
      question: 'What Workday HRIS proxy interview support do you provide for HRIS Analyst roles?',
      answer:
        'We provide real-time, discreet proxy interview support for Workday HRIS Analyst, People Systems Analyst, HR Systems Analyst, and Workday Systems Analyst interviews. Our experts join your live interview and guide you through worker data scenarios, business process troubleshooting, security access design, HR reporting questions, absence and time tracking scenarios, and behavioral questions specific to HRIS operational roles. Available same-day.',
    },
    {
      question: 'What interview formats do HRIS Analyst roles use?',
      answer:
        'Workday HRIS Analyst interviews typically include scenario-based technical rounds (how would you resolve this worker data issue?), operational knowledge checks (how do you process a retroactive hire?), system configuration walkthroughs, HR reporting design questions, and behavioral rounds focused on stakeholder management. We guide you through all formats in real time.',
    },
    {
      question: 'Do you cover People Systems Analyst and Workday Systems Analyst interview questions?',
      answer:
        'Yes. People Systems Analyst and Workday Systems Analyst roles blend HRIS operational knowledge with more technical Workday configuration skills — business process design, security administration, integrations with other HR tools, and Workday reporting. Our experts cover both the operational HRIS side and the more technical people systems configuration side.',
    },
    {
      question: 'Do you support HRIS interview candidates at specific companies?',
      answer:
        'Yes. We prepare candidates for HRIS Analyst and People Systems Analyst interviews at US Fortune 500 companies, mid-market tech firms, financial services companies, healthcare systems, and Workday consulting partners. We calibrate guidance to the specific employer type, interview format, and Workday module scope. Contact us on WhatsApp with the job description and employer for tailored support.',
    },
    {
      question: 'Can you help with Workday HRIS job support after I get the role?',
      answer:
        'Yes. Once you start your HRIS Analyst or People Systems Analyst role, we provide ongoing real-time Workday HRIS job support during your working hours — daily production tickets, complex configuration questions, and escalated HRIS issues. Many clients use both our proxy interview support and post-hire HRIS job support. Same-day start, all time zones.',
    },
  ],
  useCasesSection: {
    title: 'HRIS Interview Scenarios We Help Candidates Navigate',
    cases: [
      'HRIS Analyst interview — worker data scenario: retroactive hire, data correction, effective date issue',
      'People Systems Analyst panel — business process configuration and approval chain design walkthrough',
      'Workday Systems Analyst interview — security access design and domain security policy questions',
      'HR reporting round — Advanced Report design, calculated fields, and data source configuration scenarios',
      'Absence and time tracking scenario — accrual plan configuration and employee exception handling',
      'HRIS production support scenario — resolving a business process stuck in queue or a bulk data load issue',
    ],
  },
  proxySection: {
    title: 'How Our Workday HRIS Proxy Interview Support Works',
    intro:
      'Our HRIS interview support is calibrated to the practical, operational nature of HRIS Analyst interviews — covering both the technical configuration knowledge and operational judgment questions these roles require.',
    points: [
      'Share your interview date, role (HRIS Analyst / People Systems Analyst), employer, and likely topics via WhatsApp',
      'Pre-interview alignment — we review your Workday background and calibrate answer depth to your experience',
      'Expert joins your live interview and provides discreet real-time guidance through each scenario',
      'Coverage for worker data, business process, security, reporting, and HRIS operations questions',
      'Post-interview support available for follow-up rounds or additional HRIS interviews',
    ],
  },
  bottomCTAHeading: 'Workday HRIS Interview Coming Up? Get Expert Support Now',
  bottomCTABody:
    'Real-time proxy interview guidance for HRIS Analyst, People Systems Analyst, and Workday Systems Analyst roles — same-day available. Contact us on WhatsApp now.',
  relatedLinks: {
    geoLinks: [
      { label: 'Workday proxy interview USA', href: '/workday-proxy-interview-usa/' },
      { label: 'Workday proxy interview Canada', href: '/workday-proxy-interview-canada/' },
    ],
    techLinks: [
      { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' },
      { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
    ],
    problemLink: { label: 'Workday job support hub', href: '/workday-job-support/' },
    proxyLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
    blogLink: { label: 'Read developer support articles', href: '/blog/' },
    additionalLinks: [
      { label: 'Workday reporting analytics support', href: '/workday-reporting-analytics-job-support/' },
      { label: 'Workday security job support', href: '/workday-security-job-support/' },
      { label: 'Proxy interview support global', href: '/proxy-interview-support/' },
    ],
  },
  lastmod: LASTMOD,
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT: ALL WORKDAY PAGES
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY COUNTRY PROXY INTERVIEW PAGES (Phase 1) — factory
// ═══════════════════════════════════════════════════════════════════════════

interface WorkdayCountryProxyOpts {
  country: string;
  countrySlug: string;
  tzShort: string;
  tzLong: string;
  cities: string;
  market: string;
  scenarios: string[];
  regionalProxy: LandingRelatedLink;
}

function workdayCountryProxyPage(o: WorkdayCountryProxyOpts): LandingPageConfig {
  return {
    slug: `workday-proxy-interview-${o.countrySlug}`,
    title: `Workday Proxy Interview Support ${o.country} — Live Interview Guidance`,
    description: `Workday interview at a ${o.country} company? Get real-time proxy interview support from in-house Workday experts — HCM, Integration, Financials, Payroll, Reporting, and Security consultant roles. ${o.tzShort} aligned. Updated for May 2026 Workday market demand and current Workday release trends.`,
    canonical: `${BASE_URL}/workday-proxy-interview-${o.countrySlug}/`,
    keywords: [
      `Workday proxy interview ${o.country}`, `Workday interview help ${o.country}`,
      `Workday HCM interview ${o.country}`, `Workday integration interview ${o.country}`,
      `live Workday interview guidance ${o.country}`, `Workday consultant interview ${o.country}`,
    ],
    h1: `Workday Proxy Interview Support ${o.country} — Real-Time Live Guidance for ${o.country} Workday Roles`,
    tagline: `Discreet real-time Workday interview support for ${o.country} company interviews — HCM, Integration, Financials, Payroll, Reporting, and Security consultant roles. ${o.tzLong} covered.`,
    heroEyebrow: `Workday ${o.country} Interview Support`,
    painIntro: `${o.country} Workday consulting interview coming up? Technical functional panel, configuration walkthrough, or scenario-based round? Employers in ${o.country} run rigorous Workday interviews — our in-house experts join your session and guide you through every question in real time.`,
    heroVariant: `${o.market} Our in-house Workday experts provide real-time, discreet guidance calibrated to ${o.country} hiring formats. Updated for May 2026 and current ${o.country} Workday hiring demand, including Workday 2026R1 release topics now common in interviews.`,
    geoLine: `Supporting Workday interview candidates for ${o.country} roles across ${o.cities} and remote ${o.country} positions.`,
    timezoneNote: `Available across ${o.tzLong} for Workday interview support.`,
    highlights: workdayHighlights,
    faqs: workdayProxyFaqs(`${o.country} Workday`),
    useCasesSection: {
      title: `${o.country} Workday Interview Scenarios We Help Navigate`,
      cases: o.scenarios,
    },
    proxySection: {
      title: `How Our ${o.country} Workday Proxy Interview Support Works`,
      intro: `${o.country} Workday interviews are calibrated to specific employer formats. Our experts match your interview format and provide real-time guidance throughout — covering HCM, Integration, Financials, Payroll, Reporting, Security, and 2026R1 release topics.`,
      points: [
        `Share your ${o.country} employer, role, and interview format via WhatsApp — we assign the right Workday module expert`,
        `Pre-interview brief aligned to your ${o.country} employer type and module focus`,
        'Expert joins your live interview and provides discreet real-time guidance',
        'Coverage for Workday 2026R1 release topics increasingly common in interviews',
        'Post-interview debrief and next-round preparation',
      ],
    },
    bottomCTAHeading: `${o.country} Workday Interview Coming Up? Get Expert Live Guidance Now`,
    bottomCTABody: `Real-time proxy support for ${o.country} Workday HCM, Integration, Financials, Payroll, and Reporting interviews. ${o.tzShort} aligned. Contact us on WhatsApp now.`,
    relatedLinks: {
      geoLinks: [
        { label: `Workday job support ${o.country}`, href: `/workday-job-support-${o.countrySlug}/` },
        o.regionalProxy,
      ],
      techLinks: [
        { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
        { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
      ],
      problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
      proxyLink: { label: `Get Workday interviews scheduled ${o.country}`, href: `/workday-interview-scheduled-${o.countrySlug}/` },
      blogLink: { label: 'Read developer support articles', href: '/blog/' },
      additionalLinks: [
        { label: 'Workday job support hub', href: '/workday-job-support/' },
        { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
        { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' },
      ],
    },
    lastmod: LASTMOD,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY COUNTRY INTERVIEW SCHEDULED PAGES (Phase 2) — factory
// ═══════════════════════════════════════════════════════════════════════════

interface WorkdayCountryScheduledOpts {
  country: string;
  countrySlug: string;
  tzShort: string;
  cities: string;
  marketScheduled: string;
  scenarios: string[];
  insightPoints: string[];
  regionalScheduled: LandingRelatedLink;
}

function workdayCountryScheduledPage(o: WorkdayCountryScheduledOpts): LandingPageConfig {
  return {
    slug: `workday-interview-scheduled-${o.countrySlug}`,
    title: `Get Workday Interviews Scheduled ${o.country} — Profile Optimization & Recruiter Outreach`,
    description: `Not getting Workday interview calls from ${o.country} employers? We engineer your Workday profile and LinkedIn for ${o.country} recruiter visibility — HCM, Integration, Financials, Payroll roles — and drive active outreach to ${o.country} Workday staffing firms. Updated for May 2026.`,
    canonical: `${BASE_URL}/workday-interview-scheduled-${o.countrySlug}/`,
    keywords: [
      `get Workday interviews scheduled ${o.country}`, `Workday interview calls ${o.country}`,
      `Workday profile optimization ${o.country}`, `Workday resume ${o.country}`,
      `Workday LinkedIn ${o.country}`, `Workday recruiter ${o.country}`,
    ],
    h1: `Get Workday Interviews Scheduled in ${o.country} — Profile Engineering & ${o.country} Recruiter Outreach`,
    tagline: `Stop missing ${o.country} Workday interview calls. We engineer your profile for ${o.country} recruiter visibility and drive active outreach to ${o.country} Workday staffing firms and direct clients.`,
    heroEyebrow: `Workday ${o.country} Interview Scheduling — May 2026`,
    painIntro: `You have Workday experience but ${o.country} recruiters are not calling. The ${o.country} Workday market has active roles, but your profile is not surfacing in searches. We fix that with targeted keyword engineering and active outreach.`,
    heroVariant: `${o.marketScheduled} ${o.country} recruiters search with very specific Workday terminology — we build your profile around those search patterns and get it in front of the right people. Updated for May 2026 Workday market demand and current Workday release trends.`,
    geoLine: `Supporting Workday professionals targeting ${o.country} roles across ${o.cities} and remote ${o.country} positions.`,
    timezoneNote: `Profile support and outreach aligned to ${o.country} market hours (${o.tzShort}).`,
    highlights: workdayHighlights,
    faqs: workdayScheduledFaqs(o.country),
    useCasesSection: {
      title: `${o.country} Workday Profile Situations We Resolve`,
      cases: o.scenarios,
    },
    proxySection: {
      title: `${o.country} Workday Job Market — What We Know About Getting Calls in 2026`,
      intro: `${o.country} Workday recruiter search patterns have shifted with 2026R1. We position your profile to reflect current ${o.country} demand signals — AI-workflow experience, Skills Cloud, and Workday Extend are now differentiators.`,
      points: o.insightPoints,
    },
    bottomCTAHeading: `Ready to Start Getting ${o.country} Workday Interview Calls?`,
    bottomCTABody: `We engineer your Workday profile for ${o.country} recruiter visibility and drive active outreach — HCM, Integration, Financials, Payroll roles. Contact us on WhatsApp now.`,
    relatedLinks: {
      geoLinks: [
        { label: `Workday job support ${o.country}`, href: `/workday-job-support-${o.countrySlug}/` },
        o.regionalScheduled,
      ],
      techLinks: [
        { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
        { label: `Workday proxy interview ${o.country}`, href: `/workday-proxy-interview-${o.countrySlug}/` },
      ],
      problemLink: { label: 'Struggling in your IT job?', href: '/struggling-in-job-developer-help/' },
      proxyLink: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' },
      blogLink: { label: 'Read developer support articles', href: '/blog/' },
      additionalLinks: [
        { label: 'Workday job support hub', href: '/workday-job-support/' },
        { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' },
      ],
    },
    lastmod: LASTMOD,
  };
}

// ─── Phase 1: Country proxy interview pages ──────────────────────────────────

export const workdayProxyInterviewIreland = workdayCountryProxyPage({
  country: 'Ireland', countrySlug: 'ireland', tzShort: 'IST/GMT',
  tzLong: 'Irish Standard Time (IST) and GMT', cities: 'Dublin, Cork, and Galway',
  market: "Ireland is one of the strongest Workday markets in EMEA — Workday's own EMEA headquarters is in Dublin, alongside Google, Meta, LinkedIn, Salesforce, and dozens of IDA-backed multinationals running Workday HCM and Financials, plus consultancies like Deloitte, Accenture, KPMG Ireland, and Kainos.",
  regionalProxy: { label: 'Workday proxy interview UK', href: '/workday-proxy-interview-uk/' },
  scenarios: [
    'Dublin multinational Workday HCM Consultant panel — Core HR, staffing, and absence scenario questions',
    'Kainos or Deloitte Ireland Workday Integration Developer round — EIB, Core Connector, Studio, PECI',
    'Irish enterprise Workday Financials interview — GL, AP/AR, and period close configuration walkthrough',
    'Dublin tech company Workday Reporting Specialist round — Advanced/Matrix reports, calculated fields, Prism',
    'Irish shared-service centre Workday Security Administrator interview — domain policies and role-based access',
    'GDPR-aware Workday data and security scenario questions common in Irish enterprise interviews',
  ],
});

export const workdayProxyInterviewGermany = workdayCountryProxyPage({
  country: 'Germany', countrySlug: 'germany', tzShort: 'CET/CEST',
  tzLong: 'Central European Time (CET/CEST)', cities: 'Berlin, Munich, Frankfurt, and Hamburg',
  market: 'Germany’s Workday market spans automotive, manufacturing, and enterprise (Siemens, Bosch, Deutsche Bank) plus large SAP-to-Workday migration programmes run by Deloitte, Accenture, and PwC.',
  regionalProxy: { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
  scenarios: [
    'German enterprise Workday HCM Consultant panel — Betriebsrat/works-council-aware business process design',
    'Workday Payroll interview with German social-insurance (Krankenkasse, pension) configuration questions',
    'Workday Integration Consultant round at a German automotive or manufacturing client — Studio, PECI, REST/SOAP',
    'SAP-to-Workday migration programme interview — data conversion, parallel run, and cutover scenarios',
    'Workday Financials interview at a German multinational — multi-entity GL, intercompany, and close cycle',
    'GDPR and data-residency security scenarios common in German Workday interviews',
  ],
});

export const workdayProxyInterviewNetherlands = workdayCountryProxyPage({
  country: 'Netherlands', countrySlug: 'netherlands', tzShort: 'CET/CEST',
  tzLong: 'Central European Time (CET/CEST)', cities: 'Amsterdam, Rotterdam, and Eindhoven',
  market: 'The Dutch Workday market is driven by ASML, ING, Adyen, Booking.com, Philips, and Shell, with strong demand for HCM, Integration, and Financials consultants and international shared-service operations.',
  regionalProxy: { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
  scenarios: [
    'Amsterdam multinational Workday HCM Consultant panel — multi-country Core HR and staffing scenarios',
    'Dutch pension-fund integration interview — EIB/Studio integration to pension and benefits providers',
    'Workday Integration Consultant round at ASML or a Dutch enterprise — Core Connector, PECI, REST/SOAP',
    'Workday Financials interview at a Dutch multinational — multi-currency GL and consolidation walkthrough',
    'Workday Reporting Specialist round — Advanced/Composite reports and Prism Analytics for Dutch operations',
    'GDPR-aligned Workday security and data scenarios common in Dutch enterprise interviews',
  ],
});

export const workdayProxyInterviewFrance = workdayCountryProxyPage({
  country: 'France', countrySlug: 'france', tzShort: 'CET/CEST',
  tzLong: 'Central European Time (CET/CEST)', cities: 'Paris, Lyon, and Toulouse',
  market: 'France’s Workday market centres on CAC 40 multinationals and consultancies running HR transformation and finance programmes, where collective-agreement-aware configuration and French payroll feature heavily.',
  regionalProxy: { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
  scenarios: [
    'Paris multinational Workday HCM Consultant panel — collective-agreement-aware business process design',
    'French payroll interview — URSSAF, AGIRC-ARRCO, and CSE-workflow configuration questions',
    'Workday Integration Consultant round at a French enterprise — EIB, Studio, Core Connector, REST/SOAP',
    'Workday Financials interview at a CAC 40 multinational — multi-entity GL and statutory reporting',
    'Workday Reporting Specialist round — Advanced reports and Prism Analytics for French operations',
    'GDPR and CNIL-aware Workday data/security scenarios common in French interviews',
  ],
});

export const workdayProxyInterviewSweden = workdayCountryProxyPage({
  country: 'Sweden', countrySlug: 'sweden', tzShort: 'CET/CEST',
  tzLong: 'Central European Time (CET/CEST)', cities: 'Stockholm, Gothenburg, and Malmö',
  market: 'Sweden’s Workday market is led by digital-first organizations like Spotify, Klarna, Ericsson, Volvo, and H&M, with demand for HCM, Reporting, Security, and integration consultants.',
  regionalProxy: { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
  scenarios: [
    'Stockholm tech company Workday HCM Consultant panel — Core HR, staffing, and talent scenarios',
    'Swedish payroll integration interview — collective-agreement and Skatteverket reporting configuration',
    'Workday Integration Consultant round at Ericsson or Volvo — Studio, Core Connector, PECI, REST/SOAP',
    'Workday Reporting Specialist round — Advanced/Matrix reports, calculated fields, and Prism Analytics',
    'Workday Security Administrator interview — domain policies and role-based access design',
    'GDPR-aligned Workday data and security scenarios common in Swedish enterprise interviews',
  ],
});

export const workdayProxyInterviewSwitzerland = workdayCountryProxyPage({
  country: 'Switzerland', countrySlug: 'switzerland', tzShort: 'CET/CEST',
  tzLong: 'Central European Time (CET/CEST)', cities: 'Zurich, Geneva, and Basel',
  market: 'Switzerland’s Workday market is anchored in banking (UBS), pharma (Roche, Novartis), and multinationals, with strong demand for Financials and Security consultants and multi-currency finance.',
  regionalProxy: { label: 'Workday proxy interview Europe', href: '/workday-proxy-interview-europe/' },
  scenarios: [
    'Zurich banking Workday Financials interview — multi-currency CHF/EUR GL, consolidation, and close cycle',
    'Swiss payroll interview — AHV/BVG social insurance and canton-level configuration questions',
    'Pharma (Roche/Novartis) Workday HCM Consultant panel — Core HR, staffing, and compensation scenarios',
    'Workday Security Administrator interview — audit-grade domain policies and segregation of duties',
    'Workday Integration Consultant round at a Swiss bank or pharma — Studio, Core Connector, REST/SOAP',
    'Workday Reporting Specialist round — Advanced/Composite reports and Prism Analytics for finance',
  ],
});

export const workdayProxyInterviewAustralia = workdayCountryProxyPage({
  country: 'Australia', countrySlug: 'australia', tzShort: 'AEST/AEDT',
  tzLong: 'Australian Eastern Time (AEST/AEDT)', cities: 'Sydney, Melbourne, Brisbane, and Perth',
  market: 'Australia’s Workday market spans banking (CBA, NAB, Westpac), government, mining, and retail, with STP2, superannuation, and Award-rate payroll complexity driving demand for HCM, Payroll, and Integration consultants.',
  regionalProxy: { label: 'Workday proxy interview New Zealand', href: '/workday-proxy-interview-new-zealand/' },
  scenarios: [
    'Sydney bank Workday HCM Consultant panel — Core HR, staffing, and enterprise interview (CBA, NAB, Westpac)',
    'Australian payroll interview — STP2, superannuation, and Award-rate configuration questions',
    'Workday Integration Consultant round at an Australian enterprise — EIB, Studio, Core Connector, PECI',
    'Government or mining Workday Financials interview — GL, procurement, and project costing walkthrough',
    'Workday Reporting Specialist round — Advanced/Matrix reports and Prism Analytics for AU operations',
    'Workday Security Administrator interview — domain policies and role-based access for regulated industries',
  ],
});

export const workdayProxyInterviewNewZealand = workdayCountryProxyPage({
  country: 'New Zealand', countrySlug: 'new-zealand', tzShort: 'NZST/NZDT',
  tzLong: 'New Zealand Time (NZST/NZDT)', cities: 'Auckland and Wellington',
  market: 'New Zealand’s Workday market includes banks, government agencies, and enterprise organizations, with KiwiSaver, PAYE/IRD, and ACC payroll requirements driving demand for HCM, Payroll, and Reporting consultants.',
  regionalProxy: { label: 'Workday proxy interview Australia', href: '/workday-proxy-interview-australia/' },
  scenarios: [
    'Auckland enterprise Workday HCM Consultant panel — Core HR, staffing, and absence scenarios',
    'New Zealand payroll interview — KiwiSaver, PAYE/IRD, and ACC configuration questions',
    'Workday Integration Consultant round at a NZ bank or agency — EIB, Studio, Core Connector, REST/SOAP',
    'Government Workday Financials interview — GL, procurement, and statutory reporting walkthrough',
    'Workday Reporting Specialist round — Advanced reports, calculated fields, and Prism Analytics',
    'Workday Security Administrator interview — domain policies and role-based access design',
  ],
});

export const workdayProxyInterviewSingapore = workdayCountryProxyPage({
  country: 'Singapore', countrySlug: 'singapore', tzShort: 'SGT',
  tzLong: 'Singapore Time (SGT)', cities: 'Singapore CBD, Jurong, and one-north',
  market: 'Singapore is the APAC Workday hub — regional shared-service centres, MAS-regulated finance, banking, and multinationals run multi-country HCM on Workday, driving strong demand for HCM, Integration, and Financials consultants.',
  regionalProxy: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
  scenarios: [
    'Singapore regional HQ Workday HCM Consultant panel — multi-country Core HR and staffing scenarios',
    'Singapore payroll interview — CPF integration and multi-country APAC payroll configuration',
    'Workday Integration Consultant round at a Singapore bank or MNC — EIB, Studio, Core Connector, PECI',
    'MAS-regulated Workday Financials interview — multi-entity GL, intercompany, and close cycle',
    'Workday Reporting Specialist round — Advanced/Composite reports and Prism Analytics for APAC',
    'PDPA-aware Workday security and data scenarios common in Singapore enterprise interviews',
  ],
});

export const workdayProxyInterviewUAE = workdayCountryProxyPage({
  country: 'UAE', countrySlug: 'uae', tzShort: 'GST',
  tzLong: 'Gulf Standard Time (GST)', cities: 'Dubai and Abu Dhabi',
  market: 'The UAE Workday market is growing fast across banking, aviation (Emirates), hospitality, and government, with WPS, gratuity, and Emiratization (Nafis) requirements driving demand for HCM, Payroll, and Finance consultants.',
  regionalProxy: { label: 'Workday proxy interview Saudi Arabia', href: '/workday-proxy-interview-saudi-arabia/' },
  scenarios: [
    'Dubai enterprise Workday HCM Consultant panel — Core HR, staffing, and Emiratization scenarios',
    'UAE payroll interview — WPS compliance, gratuity, and AED/USD multi-currency configuration',
    'Workday Integration Consultant round at a UAE bank or airline — EIB, Studio, Core Connector, REST/SOAP',
    'Workday Financials interview at a Gulf multinational — multi-currency GL and consolidation walkthrough',
    'Workday Reporting Specialist round — Advanced reports and Prism Analytics for UAE operations',
    'Workday Security Administrator interview — domain policies and role-based access for regulated sectors',
  ],
});

export const workdayProxyInterviewSaudiArabia = workdayCountryProxyPage({
  country: 'Saudi Arabia', countrySlug: 'saudi-arabia', tzShort: 'AST',
  tzLong: 'Arabian Standard Time (AST)', cities: 'Riyadh, Jeddah, and Dammam',
  market: 'Saudi Arabia’s Workday market is expanding rapidly with Vision 2030 — NEOM, PIF entities, banks, and government — with GOSI, Saudization/Nitaqat, and Hijri-calendar payroll requirements driving demand for HCM, Payroll, and Finance consultants.',
  regionalProxy: { label: 'Workday proxy interview UAE', href: '/workday-proxy-interview-uae/' },
  scenarios: [
    'Riyadh enterprise Workday HCM Consultant panel — Core HR, staffing, and Saudization (Nitaqat) scenarios',
    'Saudi payroll interview — GOSI integration, Hijri-calendar, and SAR configuration questions',
    'Vision 2030 programme Workday Integration round — EIB, Studio, Core Connector, REST/SOAP',
    'Workday Financials interview at a Saudi bank or PIF entity — multi-entity GL and close cycle',
    'Workday Reporting Specialist round — Advanced reports and Prism Analytics for KSA operations',
    'Workday Security Administrator interview — domain policies and role-based access for regulated sectors',
  ],
});

// ─── Phase 2: Country interview scheduled pages ──────────────────────────────

const euScheduledInsight = [
  'European Workday recruiter keyword mapping — exact terms used by EU staffing firms in May 2026',
  '2026R1 module feature keywords that European employers are actively searching for',
  'LinkedIn positioning for European Workday recruiter visibility, including multi-country HCM signals',
  'Active outreach to European Workday staffing firms and Big 4 / boutique partner recruiters',
  'GDPR and data-residency keywords that strengthen European enterprise profiles',
];

export const workdayInterviewScheduledIreland = workdayCountryScheduledPage({
  country: 'Ireland', countrySlug: 'ireland', tzShort: 'IST/GMT',
  cities: 'Dublin, Cork, and Galway',
  marketScheduled: 'The Irish Workday market in May 2026 is highly active — Workday’s EMEA HQ in Dublin, multinational shared-service centres, and consultancies (Kainos, Deloitte, Accenture) generate steady consultant demand.',
  regionalScheduled: { label: 'Get Workday interviews scheduled UK', href: '/workday-interview-scheduled-uk/' },
  scenarios: [
    'Experienced HCM consultant applying to Dublin roles for months with no response — keyword targeting issue',
    'Workday Integration Developer with Studio experience not surfacing in Irish recruiter searches',
    'Consultant transitioning into a Dublin multinational shared-service centre — positioning strategy',
    'Overseas Workday professional targeting Irish remote/hybrid roles — geographic positioning',
    'Recent Workday certification holder targeting entry-level Irish consultant roles',
    'Senior consultant targeting Kainos, Deloitte Ireland, or direct multinational roles',
  ],
  insightPoints: euScheduledInsight,
});

export const workdayInterviewScheduledGermany = workdayCountryScheduledPage({
  country: 'Germany', countrySlug: 'germany', tzShort: 'CET/CEST',
  cities: 'Berlin, Munich, Frankfurt, and Hamburg',
  marketScheduled: 'The German Workday market in May 2026 is driven by SAP-to-Workday migrations, enterprise HR transformation, and finance programmes across automotive, manufacturing, and banking.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
  scenarios: [
    'Experienced HCM consultant applying to German roles with no response — German-market keyword issue',
    'Workday Integration Developer not surfacing in German recruiter searches — Studio/PECI positioning',
    'Consultant with SAP HR background transitioning into Workday migration programmes in Germany',
    'Overseas Workday professional targeting German remote/hybrid roles — language and positioning strategy',
    'Workday Payroll specialist positioning for German social-insurance and works-council-aware roles',
    'Senior consultant targeting Deloitte, Accenture, or direct German enterprise roles',
  ],
  insightPoints: euScheduledInsight,
});

export const workdayInterviewScheduledNetherlands = workdayCountryScheduledPage({
  country: 'Netherlands', countrySlug: 'netherlands', tzShort: 'CET/CEST',
  cities: 'Amsterdam, Rotterdam, and Eindhoven',
  marketScheduled: 'The Dutch Workday market in May 2026 is led by ASML, ING, Adyen, Booking.com, and Philips, with strong demand for HCM, Integration, and Financials consultants in international operations.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
  scenarios: [
    'Experienced HCM consultant applying to Dutch roles with no response — keyword targeting issue',
    'Workday Integration Developer not surfacing in Dutch recruiter searches — Core Connector/PECI positioning',
    'Consultant targeting Amsterdam multinational shared-service centres — multi-country HCM positioning',
    'Overseas Workday professional targeting Dutch remote/hybrid roles — geographic positioning',
    'Workday Reporting specialist positioning for Dutch enterprise and finance roles',
    'Senior consultant targeting ASML, ING, or direct Dutch enterprise roles',
  ],
  insightPoints: euScheduledInsight,
});

export const workdayInterviewScheduledFrance = workdayCountryScheduledPage({
  country: 'France', countrySlug: 'france', tzShort: 'CET/CEST',
  cities: 'Paris, Lyon, and Toulouse',
  marketScheduled: 'The French Workday market in May 2026 is centred on CAC 40 multinationals and consultancies running HR transformation and finance programmes.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
  scenarios: [
    'Experienced HCM consultant applying to French roles with no response — French-market keyword issue',
    'Workday Integration Developer not surfacing in French recruiter searches — Studio/PECI positioning',
    'Consultant positioning for collective-agreement-aware French HR transformation programmes',
    'Overseas Workday professional targeting French remote/hybrid roles — language and positioning strategy',
    'Workday Payroll specialist positioning for URSSAF and CSE-workflow-aware French roles',
    'Senior consultant targeting CAC 40 multinationals or French consultancy roles',
  ],
  insightPoints: euScheduledInsight,
});

export const workdayInterviewScheduledSweden = workdayCountryScheduledPage({
  country: 'Sweden', countrySlug: 'sweden', tzShort: 'CET/CEST',
  cities: 'Stockholm, Gothenburg, and Malmö',
  marketScheduled: 'The Swedish Workday market in May 2026 is led by digital-first organizations like Spotify, Klarna, Ericsson, and Volvo.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
  scenarios: [
    'Experienced HCM consultant applying to Swedish roles with no response — keyword targeting issue',
    'Workday Integration Developer not surfacing in Swedish recruiter searches — Studio positioning',
    'Consultant targeting Stockholm tech companies — digital HR and Reporting positioning',
    'Overseas Workday professional targeting Swedish remote/hybrid roles — geographic positioning',
    'Workday Reporting and Security specialist positioning for Swedish enterprise roles',
    'Senior consultant targeting Ericsson, Volvo, or direct Swedish enterprise roles',
  ],
  insightPoints: euScheduledInsight,
});

export const workdayInterviewScheduledSwitzerland = workdayCountryScheduledPage({
  country: 'Switzerland', countrySlug: 'switzerland', tzShort: 'CET/CEST',
  cities: 'Zurich, Geneva, and Basel',
  marketScheduled: 'The Swiss Workday market in May 2026 is anchored in banking (UBS), pharma (Roche, Novartis), and multinationals, with strong demand for Financials and Security consultants.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Europe', href: '/workday-interview-scheduled-europe/' },
  scenarios: [
    'Experienced Financials consultant applying to Swiss banking roles with no response — keyword issue',
    'Workday Integration Developer not surfacing in Swiss recruiter searches — Studio positioning',
    'Consultant targeting Zurich/Basel pharma and banking — multi-currency finance positioning',
    'Overseas Workday professional targeting Swiss remote/hybrid roles — geographic positioning',
    'Workday Security specialist positioning for audit-grade Swiss banking and pharma roles',
    'Senior consultant targeting UBS, Roche, Novartis, or direct Swiss enterprise roles',
  ],
  insightPoints: euScheduledInsight,
});

export const workdayInterviewScheduledAustralia = workdayCountryScheduledPage({
  country: 'Australia', countrySlug: 'australia', tzShort: 'AEST/AEDT',
  cities: 'Sydney, Melbourne, Brisbane, and Perth',
  marketScheduled: 'The Australian Workday market in May 2026 is active across banking, government, mining, and retail, with STP2, superannuation, and Award-rate payroll complexity driving consultant demand.',
  regionalScheduled: { label: 'Get Workday interviews scheduled New Zealand', href: '/workday-interview-scheduled-new-zealand/' },
  scenarios: [
    'Experienced HCM consultant applying to Australian roles with no response — keyword targeting issue',
    'Workday Payroll specialist not surfacing in AU recruiter searches — STP2/superannuation positioning',
    'Consultant targeting Sydney/Melbourne banks and government — enterprise positioning',
    'Overseas Workday professional targeting Australian remote/hybrid roles — geographic positioning',
    'Workday Integration Developer positioning for Australian enterprise and government roles',
    'Senior consultant targeting CBA, NAB, Westpac, or direct Australian enterprise roles',
  ],
  insightPoints: [
    'Australian Workday recruiter keyword mapping — exact terms used by AU staffing firms in May 2026',
    '2026R1 and STP2/superannuation keywords that Australian employers are actively searching for',
    'LinkedIn positioning for Australian Workday recruiter visibility',
    'Active outreach to Australian Workday staffing firms — Hays, Robert Half, Talent International',
    'Australian job board optimization — Seek, LinkedIn, and Indeed',
  ],
});

export const workdayInterviewScheduledNewZealand = workdayCountryScheduledPage({
  country: 'New Zealand', countrySlug: 'new-zealand', tzShort: 'NZST/NZDT',
  cities: 'Auckland and Wellington',
  marketScheduled: 'The New Zealand Workday market in May 2026 spans banks, government agencies, and enterprise, with KiwiSaver, PAYE/IRD, and ACC payroll requirements.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Australia', href: '/workday-interview-scheduled-australia/' },
  scenarios: [
    'Experienced HCM consultant applying to NZ roles with no response — keyword targeting issue',
    'Workday Payroll specialist not surfacing in NZ recruiter searches — KiwiSaver/PAYE positioning',
    'Consultant targeting Auckland/Wellington enterprise and government — positioning strategy',
    'Overseas Workday professional targeting NZ remote/hybrid roles — geographic positioning',
    'Workday Reporting specialist positioning for New Zealand enterprise roles',
    'Senior consultant targeting NZ banks, agencies, or direct enterprise roles',
  ],
  insightPoints: [
    'New Zealand Workday recruiter keyword mapping — exact terms used by NZ staffing firms in May 2026',
    '2026R1 and KiwiSaver/PAYE keywords that NZ employers are actively searching for',
    'LinkedIn positioning for New Zealand Workday recruiter visibility',
    'Active outreach to New Zealand Workday staffing firms — Hays, Robert Walters, Talent',
    'New Zealand job board optimization — Seek, LinkedIn, and Trade Me Jobs',
  ],
});

export const workdayInterviewScheduledSingapore = workdayCountryScheduledPage({
  country: 'Singapore', countrySlug: 'singapore', tzShort: 'SGT',
  cities: 'Singapore CBD, Jurong, and one-north',
  marketScheduled: 'The Singapore Workday market in May 2026 is the APAC hub — regional shared-service centres, MAS-regulated finance, and multinationals running multi-country HCM.',
  regionalScheduled: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
  scenarios: [
    'Experienced HCM consultant applying to Singapore roles with no response — keyword targeting issue',
    'Workday Integration Developer not surfacing in Singapore recruiter searches — PECI/Studio positioning',
    'Consultant targeting Singapore regional HQs — multi-country APAC HCM positioning',
    'Overseas Workday professional targeting Singapore roles — Employment Pass and positioning strategy',
    'Workday Financials specialist positioning for MAS-regulated finance roles',
    'Senior consultant targeting Singapore banks, MNCs, or direct enterprise roles',
  ],
  insightPoints: [
    'Singapore Workday recruiter keyword mapping — exact terms used by SG staffing firms in May 2026',
    '2026R1 and multi-country HCM keywords that Singapore employers are actively searching for',
    'LinkedIn positioning for Singapore and APAC Workday recruiter visibility',
    'Active outreach to Singapore Workday staffing firms — Robert Walters, Michael Page, Randstad',
    'Singapore job board optimization — LinkedIn, JobStreet, and MyCareersFuture.sg',
  ],
});

export const workdayInterviewScheduledUAE = workdayCountryScheduledPage({
  country: 'UAE', countrySlug: 'uae', tzShort: 'GST',
  cities: 'Dubai and Abu Dhabi',
  marketScheduled: 'The UAE Workday market in May 2026 is growing across banking, aviation, hospitality, and government, with WPS, gratuity, and Emiratization (Nafis) requirements.',
  regionalScheduled: { label: 'Get Workday interviews scheduled Saudi Arabia', href: '/workday-interview-scheduled-saudi-arabia/' },
  scenarios: [
    'Experienced HCM consultant applying to UAE roles with no response — keyword targeting issue',
    'Workday Payroll specialist not surfacing in UAE recruiter searches — WPS/gratuity positioning',
    'Consultant targeting Dubai/Abu Dhabi enterprise — Emiratization-aware positioning',
    'Overseas Workday professional targeting UAE roles — visa and geographic positioning strategy',
    'Workday Integration Developer positioning for UAE banking and aviation roles',
    'Senior consultant targeting Emirates, UAE banks, or direct enterprise roles',
  ],
  insightPoints: [
    'UAE Workday recruiter keyword mapping — exact terms used by Gulf staffing firms in May 2026',
    '2026R1 and WPS/Emiratization keywords that UAE employers are actively searching for',
    'LinkedIn positioning for UAE and Gulf Workday recruiter visibility',
    'Active outreach to UAE Workday staffing firms — Michael Page, Robert Half, Hays Gulf',
    'UAE job board optimization — LinkedIn, Bayt, and Naukrigulf',
  ],
});

export const workdayInterviewScheduledSaudiArabia = workdayCountryScheduledPage({
  country: 'Saudi Arabia', countrySlug: 'saudi-arabia', tzShort: 'AST',
  cities: 'Riyadh, Jeddah, and Dammam',
  marketScheduled: 'The Saudi Workday market in May 2026 is expanding rapidly with Vision 2030 — NEOM, PIF entities, banks, and government — with GOSI, Saudization/Nitaqat, and Hijri-calendar payroll requirements.',
  regionalScheduled: { label: 'Get Workday interviews scheduled UAE', href: '/workday-interview-scheduled-uae/' },
  scenarios: [
    'Experienced HCM consultant applying to Saudi roles with no response — keyword targeting issue',
    'Workday Payroll specialist not surfacing in KSA recruiter searches — GOSI/Nitaqat positioning',
    'Consultant targeting Riyadh/Jeddah enterprise and Vision 2030 programmes — positioning strategy',
    'Overseas Workday professional targeting Saudi roles — visa and geographic positioning strategy',
    'Workday Integration Developer positioning for Saudi banking and government roles',
    'Senior consultant targeting PIF entities, Saudi banks, or direct enterprise roles',
  ],
  insightPoints: [
    'Saudi Workday recruiter keyword mapping — exact terms used by KSA staffing firms in May 2026',
    '2026R1 and GOSI/Saudization keywords that Saudi employers are actively searching for',
    'LinkedIn positioning for Saudi Arabia and Gulf Workday recruiter visibility',
    'Active outreach to Saudi Workday staffing firms — Michael Page, Hays Gulf, Cooper Fitch',
    'Saudi job board optimization — LinkedIn, Bayt, and Naukrigulf',
  ],
});

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY CITY JOB SUPPORT PAGES (Phases 3–9) — factory
// ═══════════════════════════════════════════════════════════════════════════

interface WorkdayRegionConfig {
  country: string;
  countryJobHref: string;
  proxyHref: string;
  proxyLabel: string;
  scheduledHref: string;
  scheduledLabel: string;
  generalSupport: LandingRelatedLink;
  tzNote: string;
}

interface WorkdayCityOpts {
  slug: string;
  city: string;
  area: string;
  localAngle: string;
  useCases: string[];
  region: WorkdayRegionConfig;
  geoExtra?: LandingRelatedLink;
}

function workdayCityPage(o: WorkdayCityOpts): LandingPageConfig {
  const r = o.region;
  return {
    slug: o.slug,
    title: `${o.city} Workday Job Support — Real-Time HCM, Finance & Integration Help`,
    description: `Workday job support in ${o.city}, ${o.area}. Real-time help with tenant configuration, HCM, Payroll, Integrations, Reporting, Security, and 2026R1 release issues — plus Workday proxy interview support for ${o.city} roles. Same-day start. Updated for May 2026.`,
    canonical: `${BASE_URL}/${o.slug}/`,
    keywords: [
      `Workday job support ${o.city}`, `Workday support ${o.city}`, `Workday consultant help ${o.city}`,
      `Workday HCM support ${o.city}`, `Workday proxy interview ${o.city}`, `real-time Workday support ${o.city}`,
    ],
    h1: `Workday Job Support in ${o.city} — Real-Time Expert Help for HCM, Finance & Integrations`,
    tagline: `Live Workday job support for ${o.city} consultants and employees — tenant issues, business process configuration, integration failures, payroll, reporting, security, and 2026R1 release regression support.`,
    heroEyebrow: `Workday Job Support — ${o.city}, ${o.area}`,
    painIntro: `Stuck on a Workday issue in ${o.city}? A broken business process after the 2026R1 update, a failing EIB or Studio integration, payroll errors before a deadline, or a production ticket with no resolution? You need a Workday expert — not a ticket queue.`,
    heroVariant: `${o.localAngle} Our in-house Workday experts join your session and provide hands-on real-time help — HCM, Financials, Payroll, Integrations (EIB, Core Connector, Studio, REST/SOAP), Adaptive Planning, Reporting, Prism Analytics, and Security. ${r.tzNote} Updated for Workday 2026R1 release impact and current ${r.country} enterprise market demand.`,
    geoLine: `Supporting Workday consultants and employees in ${o.city} and across ${r.country}.`,
    timezoneNote: r.tzNote,
    techSnippet: `${o.city} Workday coverage: HCM, HRIS, Financial Management, Payroll, Integrations (EIB/Core Connector/Studio/PECI/REST/SOAP), Adaptive Planning, Recruiting, Reporting, Prism Analytics, Security, and Workday 2026R1.`,
    highlights: workdayHighlights,
    faqs: workdayJobSupportFaqs(`${o.city} Workday`),
    useCasesSection: {
      title: `${o.city} Workday Situations We Help Resolve`,
      cases: o.useCases,
    },
    proxySection: {
      title: `Workday Proxy Interview Support for ${o.city} Roles`,
      intro: `Workday consultant interviews for ${o.city} employers require deep module knowledge and real implementation experience. Our experts provide real-time, discreet guidance for ${o.city} Workday interviews — HCM, Integration, Financials, Payroll, Reporting, and Security.`,
      points: [
        `Real-time guidance during Workday HCM and Integration interviews for ${o.city} employers`,
        'Support for Workday Financials, Payroll, and Reporting specialist interviews',
        'Expert coaching through scenario-based configuration walkthroughs and tenant design questions',
        'Coverage for Workday 2026R1 release topics now common in interviews',
        `Mock Workday interviews calibrated to ${o.city} consulting and direct-client hiring formats`,
      ],
    },
    bottomCTAHeading: `Need Real-Time Workday Support in ${o.city}? Get Expert Help Now`,
    bottomCTABody: `Same-day Workday job support and proxy interview help for ${o.city} — tenant issues, integrations, payroll, reporting, security, or live interview guidance. Contact us on WhatsApp now.`,
    relatedLinks: {
      geoLinks: [
        { label: `Workday job support ${r.country}`, href: r.countryJobHref },
        { label: r.proxyLabel, href: r.proxyHref },
      ],
      techLinks: [
        { label: 'Workday job support hub', href: '/workday-job-support/' },
        { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' },
      ],
      problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      proxyLink: { label: r.scheduledLabel, href: r.scheduledHref },
      blogLink: { label: 'Read IT job support articles', href: '/blog/' },
      additionalLinks: [
        { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
        r.generalSupport,
        { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' },
        ...(o.geoExtra ? [o.geoExtra] : []),
      ],
    },
    lastmod: LASTMOD,
  };
}

// ─── Region configs ──────────────────────────────────────────────────────────

const WD_REGION_USA: WorkdayRegionConfig = {
  country: 'USA', countryJobHref: '/workday-job-support-usa/',
  proxyHref: '/workday-proxy-interview-usa/', proxyLabel: 'Workday proxy interview USA',
  scheduledHref: '/workday-interview-scheduled-usa/', scheduledLabel: 'Get Workday interviews scheduled USA',
  generalSupport: { label: 'IT job support USA', href: '/job-support-usa/' },
  tzNote: 'Available across all US time zones (EST, CST, MST, PST).',
};

// ─── Phase 3: USA city pages ─────────────────────────────────────────────────

export const newYorkWorkdayJobSupport = workdayCityPage({
  slug: 'new-york-workday-job-support', city: 'New York', area: 'NY',
  localAngle: 'New York runs some of the largest Workday tenants in the world — Wall Street banks, asset managers, media, advertising, and healthcare systems all depend on Workday HCM, Financials, and Payroll.',
  useCases: [
    'Wall Street firm Workday Financials issue — multi-entity GL, intercompany, or period close before month-end',
    'NYC enterprise Workday HCM business process broken after the 2026R1 tenant update',
    'Media or advertising firm Workday Payroll error — off-cycle, bonus, or commission calculation issue',
    'NYC healthcare system Workday Integration failure — EIB/Studio to a benefits or pension provider',
    'New York Workday Reporting deadline — Advanced/Matrix reports, calculated fields, or a Prism dashboard',
  ],
  region: WD_REGION_USA,
  geoExtra: { label: 'Workday job support Jersey City', href: '/jersey-city-workday-job-support/' },
});

export const dallasWorkdayJobSupport = workdayCityPage({
  slug: 'dallas-workday-job-support', city: 'Dallas', area: 'TX',
  localAngle: 'Dallas–Fort Worth is a major Workday market — telecom, airlines, insurance, and healthcare enterprises run large Workday HCM, Payroll, and Financials deployments.',
  useCases: [
    'Dallas telecom or airline Workday HCM business process or staffing configuration issue',
    'DFW insurance firm Workday Payroll calculation error before a pay run',
    'Dallas enterprise Workday Integration failure — Core Connector to a benefits or payroll vendor',
    'Texas healthcare system Workday Financials period close or procurement issue',
    'Dallas Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_USA,
  geoExtra: { label: 'Workday job support Houston', href: '/houston-workday-job-support/' },
});

export const chicagoWorkdayJobSupport = workdayCityPage({
  slug: 'chicago-workday-job-support', city: 'Chicago', area: 'IL',
  localAngle: 'Chicago is a Workday hub for insurance, manufacturing, finance, and healthcare enterprises running complex HCM, Finance, and Payroll tenants.',
  useCases: [
    'Chicago insurance firm Workday HCM or Benefits configuration issue before open enrollment',
    'Manufacturing enterprise Workday Financials period close or procurement issue',
    'Chicago Workday Payroll off-cycle or garnishment calculation error',
    'Chicago enterprise Workday Integration failure — EIB/Studio to a third-party vendor',
    'Chicago Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_USA,
});

export const atlantaWorkdayJobSupport = workdayCityPage({
  slug: 'atlanta-workday-job-support', city: 'Atlanta', area: 'GA',
  localAngle: 'Atlanta hosts Fortune 500 headquarters, fintech, and healthcare systems — many running Workday HCM, Financials, and Payroll at scale.',
  useCases: [
    'Atlanta Fortune 500 Workday HCM business process broken after the 2026R1 update',
    'Atlanta fintech Workday Financials issue — GL, AP/AR, or revenue recognition',
    'Atlanta healthcare system Workday Payroll or Time Tracking calculation error',
    'Atlanta enterprise Workday Integration failure — Core Connector or Studio',
    'Atlanta Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
  geoExtra: { label: 'Workday job support Charlotte', href: '/charlotte-workday-job-support/' },
});

export const houstonWorkdayJobSupport = workdayCityPage({
  slug: 'houston-workday-job-support', city: 'Houston', area: 'TX',
  localAngle: 'Houston’s energy, healthcare, and industrial enterprises run large Workday Financials, HCM, and Payroll tenants with complex cost and project structures.',
  useCases: [
    'Houston energy enterprise Workday Financials issue — project costing, GL, or close cycle',
    'Houston healthcare system Workday HCM or staffing configuration issue',
    'Houston Workday Payroll calculation or off-cycle error before a pay run',
    'Houston enterprise Workday Integration failure — EIB/Studio to a vendor system',
    'Houston Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_USA,
});

export const austinWorkdayJobSupport = workdayCityPage({
  slug: 'austin-workday-job-support', city: 'Austin', area: 'TX',
  localAngle: 'Austin’s tech companies, semiconductor firms, and fast-growing enterprises run modern Workday HCM, Financials, and Adaptive Planning environments.',
  useCases: [
    'Austin tech company Workday HCM business process or Skills Cloud configuration issue',
    'Austin enterprise Workday Adaptive Planning model error or forecast reconciliation issue',
    'Austin Workday Financials issue — GL, intercompany, or period close',
    'Austin Workday Integration failure — Core Connector, Studio, or REST/SOAP',
    'Austin Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
});

export const charlotteWorkdayJobSupport = workdayCityPage({
  slug: 'charlotte-workday-job-support', city: 'Charlotte', area: 'NC',
  localAngle: 'Charlotte is a major banking and financial-services centre — Bank of America, Wells Fargo, Truist, and insurers run large Workday HCM, Financials, and Payroll tenants.',
  useCases: [
    'Charlotte bank Workday Financials issue — multi-entity GL, intercompany, or close cycle',
    'Charlotte financial-services Workday Security role or segregation-of-duties issue',
    'Charlotte Workday Payroll calculation or off-cycle error before a pay run',
    'Charlotte enterprise Workday Integration failure — Core Connector or Studio',
    'Charlotte Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_USA,
});

export const phoenixWorkdayJobSupport = workdayCityPage({
  slug: 'phoenix-workday-job-support', city: 'Phoenix', area: 'AZ',
  localAngle: 'Phoenix’s healthcare, fintech, insurance, and semiconductor enterprises run Workday HCM, Financials, and Payroll across multi-state operations.',
  useCases: [
    'Phoenix healthcare system Workday HCM or staffing configuration issue',
    'Phoenix fintech Workday Financials issue — GL, AP/AR, or revenue recognition',
    'Phoenix Workday Payroll multi-state calculation or tax configuration error',
    'Phoenix enterprise Workday Integration failure — EIB/Studio to a vendor system',
    'Phoenix Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
});

export const seattleWorkdayJobSupport = workdayCityPage({
  slug: 'seattle-workday-job-support', city: 'Seattle', area: 'WA',
  localAngle: 'Seattle’s technology, aerospace, and retail enterprises run advanced Workday HCM, Skills Cloud, Adaptive Planning, and Financials environments.',
  useCases: [
    'Seattle tech company Workday HCM, Skills Cloud, or Talent configuration issue',
    'Seattle enterprise Workday Adaptive Planning model or workforce-planning error',
    'Seattle Workday Financials issue — GL, intercompany, or period close',
    'Seattle Workday Integration failure — Core Connector, Studio, or Workday Extend',
    'Seattle Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
  geoExtra: { label: 'Workday job support San Francisco', href: '/san-francisco-workday-job-support/' },
});

export const sanFranciscoWorkdayJobSupport = workdayCityPage({
  slug: 'san-francisco-workday-job-support', city: 'San Francisco', area: 'CA',
  localAngle: 'San Francisco and the Bay Area run some of the most advanced Workday tenants — tech companies, fintech, and healthcare using Skills Cloud, Workday AI, and Extend.',
  useCases: [
    'SF tech company Workday HCM, Skills Cloud, or Workday AI workflow configuration issue',
    'Bay Area fintech Workday Financials issue — GL, revenue recognition, or close cycle',
    'SF Workday Payroll or equity/RSU-related earnings configuration error',
    'SF enterprise Workday Integration failure — Workday Extend, Core Connector, or Studio',
    'SF Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
  geoExtra: { label: 'Workday job support San Jose', href: '/san-jose-workday-job-support/' },
});

export const sanJoseWorkdayJobSupport = workdayCityPage({
  slug: 'san-jose-workday-job-support', city: 'San Jose', area: 'CA',
  localAngle: 'San Jose and Silicon Valley enterprises run modern Workday HCM, Skills Cloud, Adaptive Planning, and Financials with heavy integration and equity-compensation needs.',
  useCases: [
    'Silicon Valley tech company Workday HCM, Skills Cloud, or Talent configuration issue',
    'San Jose Workday Compensation issue — equity, RSU, or bonus plan configuration',
    'San Jose Workday Adaptive Planning model or headcount-planning error',
    'San Jose enterprise Workday Integration failure — Workday Extend, Core Connector, or Studio',
    'San Jose Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
});

export const losAngelesWorkdayJobSupport = workdayCityPage({
  slug: 'los-angeles-workday-job-support', city: 'Los Angeles', area: 'CA',
  localAngle: 'Los Angeles entertainment, media, healthcare, and aerospace enterprises run large Workday HCM, Payroll, and Financials tenants with complex union and project structures.',
  useCases: [
    'LA entertainment/media Workday Payroll issue — union, residual, or off-cycle calculation',
    'LA enterprise Workday HCM business process broken after the 2026R1 update',
    'LA healthcare system Workday Financials period close or procurement issue',
    'LA Workday Integration failure — EIB/Studio to a benefits or payroll vendor',
    'LA Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_USA,
});

export const bostonWorkdayJobSupport = workdayCityPage({
  slug: 'boston-workday-job-support', city: 'Boston', area: 'MA',
  localAngle: 'Boston’s biotech, healthcare, higher-education, and financial-services enterprises run Workday HCM, Financials, Grants, and Payroll tenants.',
  useCases: [
    'Boston biotech or higher-ed Workday Financials issue — grants, GL, or period close',
    'Boston healthcare system Workday HCM or staffing configuration issue',
    'Boston Workday Payroll calculation or off-cycle error before a pay run',
    'Boston enterprise Workday Integration failure — Core Connector or Studio',
    'Boston Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
});

export const washingtonDcWorkdayJobSupport = workdayCityPage({
  slug: 'washington-dc-workday-job-support', city: 'Washington DC', area: 'DC',
  localAngle: 'Washington DC’s federal contractors, nonprofits, associations, and public-sector enterprises run Workday HCM, Financials, and Grants with strict compliance and audit needs.',
  useCases: [
    'DC federal contractor Workday Financials issue — project costing, grants, or close cycle',
    'DC nonprofit or association Workday HCM or Benefits configuration issue',
    'DC Workday Security role or audit/segregation-of-duties configuration issue',
    'DC enterprise Workday Integration failure — Core Connector or Studio',
    'DC Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_USA,
});

export const jerseyCityWorkdayJobSupport = workdayCityPage({
  slug: 'jersey-city-workday-job-support', city: 'Jersey City', area: 'NJ',
  localAngle: 'Jersey City and northern New Jersey host Wall-Street-adjacent banks, asset managers, and pharma enterprises running large Workday Financials, HCM, and Payroll tenants.',
  useCases: [
    'Jersey City bank Workday Financials issue — multi-entity GL, intercompany, or close cycle',
    'NJ pharma enterprise Workday HCM or staffing configuration issue',
    'Jersey City Workday Payroll calculation or off-cycle error before a pay run',
    'NJ enterprise Workday Integration failure — Core Connector or Studio',
    'Jersey City Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_USA,
  geoExtra: { label: 'Workday job support New York', href: '/new-york-workday-job-support/' },
});

export const tampaWorkdayJobSupport = workdayCityPage({
  slug: 'tampa-workday-job-support', city: 'Tampa', area: 'FL',
  localAngle: 'Tampa’s financial-services, healthcare, and insurance enterprises run Workday HCM, Financials, and Payroll across multi-state operations.',
  useCases: [
    'Tampa financial-services Workday Financials issue — GL, AP/AR, or close cycle',
    'Tampa healthcare system Workday HCM or staffing configuration issue',
    'Tampa Workday Payroll multi-state calculation or tax configuration error',
    'Tampa enterprise Workday Integration failure — EIB/Studio to a vendor system',
    'Tampa Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_USA,
});

// ─── Phase 4: Canada city pages ──────────────────────────────────────────────

const WD_REGION_CANADA: WorkdayRegionConfig = {
  country: 'Canada', countryJobHref: '/workday-job-support-canada/',
  proxyHref: '/workday-proxy-interview-canada/', proxyLabel: 'Workday proxy interview Canada',
  scheduledHref: '/workday-interview-scheduled-canada/', scheduledLabel: 'Get Workday interviews scheduled Canada',
  generalSupport: { label: 'IT job support Canada', href: '/job-support-canada/' },
  tzNote: 'Aligned with Canadian Eastern, Central, Mountain, and Pacific working hours.',
};

export const torontoWorkdayJobSupport = workdayCityPage({
  slug: 'toronto-workday-job-support', city: 'Toronto', area: 'Ontario',
  localAngle: 'Toronto is Canada’s largest Workday market — the big banks (RBC, TD, Scotiabank, BMO, CIBC), insurers (Sun Life, Manulife), and enterprises run major Workday HCM, Financials, and Canada Payroll tenants.',
  useCases: [
    'Toronto bank Workday Financials issue — multi-entity GL, intercompany, or close cycle',
    'Workday Payroll for Canada T4/ROE error before year-end at a Toronto enterprise',
    'Toronto enterprise Workday HCM business process broken after the 2026R1 update',
    'Toronto Workday Integration failure — EIB/Studio to a benefits or pension provider',
    'Toronto Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_CANADA,
  geoExtra: { label: 'Workday job support Ottawa', href: '/ottawa-workday-job-support/' },
});

export const vancouverWorkdayJobSupport = workdayCityPage({
  slug: 'vancouver-workday-job-support', city: 'Vancouver', area: 'British Columbia',
  localAngle: 'Vancouver’s technology, film, mining, and public-sector enterprises run Workday HCM, Financials, and Canada Payroll with BC-specific compliance.',
  useCases: [
    'Vancouver enterprise Workday HCM or staffing configuration issue',
    'Workday Payroll for Canada — BC provincial tax or ROE error before a pay run',
    'Vancouver tech company Workday Integration failure — Core Connector or Studio',
    'Vancouver Workday Financials period close or procurement issue',
    'Vancouver Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_CANADA,
});

export const calgaryWorkdayJobSupport = workdayCityPage({
  slug: 'calgary-workday-job-support', city: 'Calgary', area: 'Alberta',
  localAngle: 'Calgary’s energy and enterprise sector runs large Workday Financials, HCM, and Canada Payroll tenants with complex cost and project structures.',
  useCases: [
    'Calgary energy enterprise Workday Financials issue — project costing, GL, or close cycle',
    'Workday Payroll for Canada — Alberta provincial tax or T4 error before year-end',
    'Calgary enterprise Workday HCM business process or staffing configuration issue',
    'Calgary Workday Integration failure — EIB/Studio to a vendor system',
    'Calgary Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_CANADA,
});

export const montrealWorkdayJobSupport = workdayCityPage({
  slug: 'montreal-workday-job-support', city: 'Montreal', area: 'Quebec',
  localAngle: 'Montreal enterprises run Workday HCM, Financials, and Canada Payroll with Quebec-specific compliance — provincial tax, RL-1, and bilingual operations.',
  useCases: [
    'Montreal enterprise Workday Payroll — Quebec provincial tax, RL-1, or QPP configuration error',
    'Montreal Workday HCM business process or bilingual configuration issue',
    'Montreal enterprise Workday Financials period close or procurement issue',
    'Montreal Workday Integration failure — EIB/Studio to a benefits or pension provider',
    'Montreal Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_CANADA,
});

export const ottawaWorkdayJobSupport = workdayCityPage({
  slug: 'ottawa-workday-job-support', city: 'Ottawa', area: 'Ontario',
  localAngle: 'Ottawa’s public-sector, technology, and enterprise organizations run Workday HCM, Financials, and Canada Payroll with strict compliance and audit needs.',
  useCases: [
    'Ottawa public-sector Workday Financials issue — GL, procurement, or close cycle',
    'Workday Payroll for Canada — Ontario provincial tax or ROE error before a pay run',
    'Ottawa enterprise Workday HCM or staffing configuration issue',
    'Ottawa Workday Security role or audit/segregation-of-duties configuration issue',
    'Ottawa Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_CANADA,
  geoExtra: { label: 'Workday job support Toronto', href: '/toronto-workday-job-support/' },
});

// ─── Phase 5: UK city pages ──────────────────────────────────────────────────

const WD_REGION_UK: WorkdayRegionConfig = {
  country: 'UK', countryJobHref: '/workday-job-support-uk/',
  proxyHref: '/workday-proxy-interview-uk/', proxyLabel: 'Workday proxy interview UK',
  scheduledHref: '/workday-interview-scheduled-uk/', scheduledLabel: 'Get Workday interviews scheduled UK',
  generalSupport: { label: 'IT job support UK', href: '/job-support-uk/' },
  tzNote: 'Aligned with UK working hours (GMT/BST).',
};

export const londonWorkdayJobSupport = workdayCityPage({
  slug: 'london-workday-job-support', city: 'London', area: 'England',
  localAngle: 'London is the UK’s largest Workday market — financial services, professional services, retail, and media enterprises run major Workday HCM, Financials, and UK Payroll tenants.',
  useCases: [
    'London financial-services Workday Financials issue — multi-entity GL, intercompany, or close cycle',
    'UK Payroll error — PAYE, NIC, RTI, or pension auto-enrolment before a London pay run',
    'London enterprise Workday HCM business process broken after the 2026R1 update',
    'London Workday Integration failure — EIB/Studio to a benefits or pension provider',
    'London Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_UK,
  geoExtra: { label: 'Workday job support Manchester', href: '/manchester-workday-job-support/' },
});

export const manchesterWorkdayJobSupport = workdayCityPage({
  slug: 'manchester-workday-job-support', city: 'Manchester', area: 'England',
  localAngle: 'Manchester’s growing technology, financial-services, and enterprise sector runs Workday HCM, Financials, and UK Payroll across the North West.',
  useCases: [
    'Manchester enterprise Workday HCM or staffing configuration issue',
    'UK Payroll error — PAYE, NIC, or RTI before a Manchester pay run',
    'Manchester Workday Financials period close or procurement issue',
    'Manchester Workday Integration failure — Core Connector or Studio',
    'Manchester Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_UK,
});

export const birminghamWorkdayJobSupport = workdayCityPage({
  slug: 'birmingham-workday-job-support', city: 'Birmingham', area: 'England',
  localAngle: 'Birmingham and the Midlands run Workday HCM, Financials, and UK Payroll across manufacturing, professional services, and public-sector enterprises.',
  useCases: [
    'Birmingham enterprise Workday HCM business process or staffing configuration issue',
    'UK Payroll error — PAYE, NIC, RTI, or pension auto-enrolment before a pay run',
    'Birmingham Workday Financials period close or procurement issue',
    'Birmingham Workday Integration failure — EIB/Studio to a vendor system',
    'Birmingham Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_UK,
});

export const leedsWorkdayJobSupport = workdayCityPage({
  slug: 'leeds-workday-job-support', city: 'Leeds', area: 'England',
  localAngle: 'Leeds is a UK financial-services and digital hub — banks, insurers, and enterprises run Workday HCM, Financials, and UK Payroll tenants.',
  useCases: [
    'Leeds financial-services Workday Financials issue — GL, AP/AR, or close cycle',
    'UK Payroll error — PAYE, NIC, or RTI before a Leeds pay run',
    'Leeds enterprise Workday HCM or staffing configuration issue',
    'Leeds Workday Integration failure — Core Connector or Studio',
    'Leeds Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_UK,
});

export const glasgowWorkdayJobSupport = workdayCityPage({
  slug: 'glasgow-workday-job-support', city: 'Glasgow', area: 'Scotland',
  localAngle: 'Glasgow’s financial-services, public-sector, and enterprise organizations run Workday HCM, Financials, and UK Payroll across Scotland.',
  useCases: [
    'Glasgow financial-services Workday Financials issue — GL, intercompany, or close cycle',
    'UK Payroll error — PAYE, NIC, RTI, or Scottish income tax before a pay run',
    'Glasgow enterprise Workday HCM or staffing configuration issue',
    'Glasgow Workday Integration failure — EIB/Studio to a benefits or pension provider',
    'Glasgow Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_UK,
});

// ─── Phase 6: Ireland city pages ─────────────────────────────────────────────

const WD_REGION_IRELAND: WorkdayRegionConfig = {
  country: 'Ireland', countryJobHref: '/workday-job-support-ireland/',
  proxyHref: '/workday-proxy-interview-ireland/', proxyLabel: 'Workday proxy interview Ireland',
  scheduledHref: '/workday-interview-scheduled-ireland/', scheduledLabel: 'Get Workday interviews scheduled Ireland',
  generalSupport: { label: 'IT job support Ireland', href: '/job-support-ireland/' },
  tzNote: 'Aligned with Irish working hours (IST/GMT).',
};

export const dublinWorkdayJobSupport = workdayCityPage({
  slug: 'dublin-workday-job-support', city: 'Dublin', area: 'Ireland',
  localAngle: 'Dublin is a premier Workday city — Workday’s own EMEA HQ, plus Google, Meta, LinkedIn, and dozens of multinational shared-service centres run Workday HCM, Financials, and multi-country Payroll.',
  useCases: [
    'Dublin multinational Workday HCM business process or multi-country configuration issue',
    'Dublin shared-service centre Workday Payroll or multi-country integration error',
    'Dublin enterprise Workday Financials period close or intercompany issue',
    'Dublin Workday Integration failure — EIB/Studio/Core Connector to a vendor system',
    'Dublin Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_IRELAND,
  geoExtra: { label: 'Workday job support Cork', href: '/cork-workday-job-support/' },
});

export const corkWorkdayJobSupport = workdayCityPage({
  slug: 'cork-workday-job-support', city: 'Cork', area: 'Ireland',
  localAngle: 'Cork hosts major pharma, technology, and shared-service operations running Workday HCM, Financials, and multi-country Payroll.',
  useCases: [
    'Cork pharma or tech enterprise Workday HCM or staffing configuration issue',
    'Cork shared-service centre Workday Payroll or multi-country integration error',
    'Cork enterprise Workday Financials period close or procurement issue',
    'Cork Workday Integration failure — EIB/Studio to a vendor system',
    'Cork Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_IRELAND,
});

export const galwayWorkdayJobSupport = workdayCityPage({
  slug: 'galway-workday-job-support', city: 'Galway', area: 'Ireland',
  localAngle: 'Galway’s medtech, technology, and shared-service enterprises run Workday HCM, Financials, and multi-country Payroll.',
  useCases: [
    'Galway medtech or tech enterprise Workday HCM or staffing configuration issue',
    'Galway shared-service centre Workday Payroll or multi-country integration error',
    'Galway enterprise Workday Financials period close or procurement issue',
    'Galway Workday Integration failure — EIB/Studio to a vendor system',
    'Galway Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_IRELAND,
  geoExtra: { label: 'Workday job support Dublin', href: '/dublin-workday-job-support/' },
});

// ─── Phase 7: Europe city pages ──────────────────────────────────────────────

const WD_REGION_GERMANY: WorkdayRegionConfig = {
  country: 'Germany', countryJobHref: '/workday-job-support-germany/',
  proxyHref: '/workday-proxy-interview-germany/', proxyLabel: 'Workday proxy interview Germany',
  scheduledHref: '/workday-interview-scheduled-germany/', scheduledLabel: 'Get Workday interviews scheduled Germany',
  generalSupport: { label: 'IT job support Germany', href: '/job-support-germany/' },
  tzNote: 'Aligned with Central European Time (CET/CEST) working hours.',
};

const WD_REGION_NETHERLANDS: WorkdayRegionConfig = {
  country: 'Netherlands', countryJobHref: '/workday-job-support-netherlands/',
  proxyHref: '/workday-proxy-interview-netherlands/', proxyLabel: 'Workday proxy interview Netherlands',
  scheduledHref: '/workday-interview-scheduled-netherlands/', scheduledLabel: 'Get Workday interviews scheduled Netherlands',
  generalSupport: { label: 'IT job support Netherlands', href: '/job-support-netherlands/' },
  tzNote: 'Aligned with Central European Time (CET/CEST) working hours.',
};

const WD_REGION_FRANCE: WorkdayRegionConfig = {
  country: 'France', countryJobHref: '/workday-job-support-france/',
  proxyHref: '/workday-proxy-interview-france/', proxyLabel: 'Workday proxy interview France',
  scheduledHref: '/workday-interview-scheduled-france/', scheduledLabel: 'Get Workday interviews scheduled France',
  generalSupport: { label: 'IT job support Europe', href: '/job-support-europe/' },
  tzNote: 'Aligned with Central European Time (CET/CEST) working hours.',
};

const WD_REGION_SWEDEN: WorkdayRegionConfig = {
  country: 'Sweden', countryJobHref: '/workday-job-support-sweden/',
  proxyHref: '/workday-proxy-interview-sweden/', proxyLabel: 'Workday proxy interview Sweden',
  scheduledHref: '/workday-interview-scheduled-sweden/', scheduledLabel: 'Get Workday interviews scheduled Sweden',
  generalSupport: { label: 'IT job support Sweden', href: '/job-support-sweden/' },
  tzNote: 'Aligned with Central European Time (CET/CEST) working hours.',
};

const WD_REGION_SWITZERLAND: WorkdayRegionConfig = {
  country: 'Switzerland', countryJobHref: '/workday-job-support-switzerland/',
  proxyHref: '/workday-proxy-interview-switzerland/', proxyLabel: 'Workday proxy interview Switzerland',
  scheduledHref: '/workday-interview-scheduled-switzerland/', scheduledLabel: 'Get Workday interviews scheduled Switzerland',
  generalSupport: { label: 'IT job support Switzerland', href: '/job-support-switzerland/' },
  tzNote: 'Aligned with Central European Time (CET/CEST) working hours.',
};

export const berlinWorkdayJobSupport = workdayCityPage({
  slug: 'berlin-workday-job-support', city: 'Berlin', area: 'Germany',
  localAngle: 'Berlin’s technology, startup, and enterprise sector runs modern Workday HCM, Financials, and German Payroll with works-council-aware configuration.',
  useCases: [
    'Berlin enterprise Workday HCM business process — works-council (Betriebsrat) aware configuration issue',
    'Berlin Workday Payroll — German social-insurance (Krankenkasse, pension) configuration error',
    'Berlin tech company Workday Integration failure — Studio, Core Connector, or REST/SOAP',
    'Berlin enterprise Workday Financials period close or intercompany issue',
    'Berlin Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_GERMANY,
  geoExtra: { label: 'Workday job support Munich', href: '/munich-workday-job-support/' },
});

export const munichWorkdayJobSupport = workdayCityPage({
  slug: 'munich-workday-job-support', city: 'Munich', area: 'Germany',
  localAngle: 'Munich’s automotive, insurance, and technology enterprises run large Workday HCM, Financials, and German Payroll tenants — many migrating from SAP HR.',
  useCases: [
    'Munich enterprise SAP-to-Workday migration — data conversion, parallel run, or cutover issue',
    'Munich Workday Payroll — German social-insurance or works-council-aware configuration error',
    'Munich automotive/insurance Workday Financials period close or intercompany issue',
    'Munich Workday Integration failure — Studio, Core Connector, PECI, or REST/SOAP',
    'Munich Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_GERMANY,
});

export const frankfurtWorkdayJobSupport = workdayCityPage({
  slug: 'frankfurt-workday-job-support', city: 'Frankfurt', area: 'Germany',
  localAngle: 'Frankfurt’s banking and financial-services sector runs Workday HCM, Financials, and German Payroll with strict audit and compliance needs.',
  useCases: [
    'Frankfurt bank Workday Financials issue — multi-entity GL, intercompany, or close cycle',
    'Frankfurt Workday Security role or audit/segregation-of-duties configuration issue',
    'Frankfurt Workday Payroll — German social-insurance configuration error',
    'Frankfurt Workday Integration failure — Studio, Core Connector, or REST/SOAP',
    'Frankfurt Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_GERMANY,
});

export const hamburgWorkdayJobSupport = workdayCityPage({
  slug: 'hamburg-workday-job-support', city: 'Hamburg', area: 'Germany',
  localAngle: 'Hamburg’s logistics, media, and enterprise organizations run Workday HCM, Financials, and German Payroll across multi-entity operations.',
  useCases: [
    'Hamburg enterprise Workday HCM business process or works-council-aware configuration issue',
    'Hamburg Workday Payroll — German social-insurance configuration error',
    'Hamburg logistics/media Workday Financials period close or intercompany issue',
    'Hamburg Workday Integration failure — Studio, Core Connector, or REST/SOAP',
    'Hamburg Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_GERMANY,
});

export const amsterdamWorkdayJobSupport = workdayCityPage({
  slug: 'amsterdam-workday-job-support', city: 'Amsterdam', area: 'Netherlands',
  localAngle: 'Amsterdam is a major Workday hub — ASML, ING, Adyen, Booking.com, and Philips run multi-country HCM, Financials, and Dutch Payroll on Workday.',
  useCases: [
    'Amsterdam multinational Workday HCM — multi-country Core HR or staffing configuration issue',
    'Amsterdam Workday Payroll or Dutch pension-fund integration error',
    'Amsterdam enterprise Workday Financials — multi-currency GL or consolidation issue',
    'Amsterdam Workday Integration failure — Core Connector, Studio, PECI, or REST/SOAP',
    'Amsterdam Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_NETHERLANDS,
  geoExtra: { label: 'Workday job support Rotterdam', href: '/rotterdam-workday-job-support/' },
});

export const rotterdamWorkdayJobSupport = workdayCityPage({
  slug: 'rotterdam-workday-job-support', city: 'Rotterdam', area: 'Netherlands',
  localAngle: 'Rotterdam’s logistics, energy, and enterprise organizations run Workday HCM, Financials, and Dutch Payroll across international operations.',
  useCases: [
    'Rotterdam enterprise Workday HCM or staffing configuration issue',
    'Rotterdam Workday Payroll or Dutch pension-fund integration error',
    'Rotterdam logistics/energy Workday Financials period close or procurement issue',
    'Rotterdam Workday Integration failure — Core Connector, Studio, or REST/SOAP',
    'Rotterdam Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_NETHERLANDS,
});

export const parisWorkdayJobSupport = workdayCityPage({
  slug: 'paris-workday-job-support', city: 'Paris', area: 'France',
  localAngle: 'Paris hosts CAC 40 multinationals and consultancies running Workday HCM, Financials, and French Payroll with collective-agreement-aware configuration.',
  useCases: [
    'Paris multinational Workday HCM — collective-agreement-aware business process issue',
    'Paris Workday Payroll — URSSAF, AGIRC-ARRCO, or CSE-workflow configuration error',
    'Paris enterprise Workday Financials — multi-entity GL or statutory reporting issue',
    'Paris Workday Integration failure — EIB, Studio, Core Connector, or REST/SOAP',
    'Paris Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_FRANCE,
  geoExtra: { label: 'Workday job support Lyon', href: '/lyon-workday-job-support/' },
});

export const lyonWorkdayJobSupport = workdayCityPage({
  slug: 'lyon-workday-job-support', city: 'Lyon', area: 'France',
  localAngle: 'Lyon’s pharma, industrial, and enterprise organizations run Workday HCM, Financials, and French Payroll with collective-agreement-aware configuration.',
  useCases: [
    'Lyon enterprise Workday HCM — collective-agreement-aware business process issue',
    'Lyon Workday Payroll — URSSAF or CSE-workflow configuration error',
    'Lyon pharma/industrial Workday Financials period close or procurement issue',
    'Lyon Workday Integration failure — EIB, Studio, Core Connector, or REST/SOAP',
    'Lyon Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_FRANCE,
});

export const stockholmWorkdayJobSupport = workdayCityPage({
  slug: 'stockholm-workday-job-support', city: 'Stockholm', area: 'Sweden',
  localAngle: 'Stockholm’s digital-first organizations — Spotify, Klarna, Ericsson — run modern Workday HCM, Reporting, Security, and Swedish Payroll integrations.',
  useCases: [
    'Stockholm tech company Workday HCM, Talent, or staffing configuration issue',
    'Stockholm Workday Payroll — collective-agreement or Skatteverket reporting configuration error',
    'Stockholm enterprise Workday Financials period close or intercompany issue',
    'Stockholm Workday Integration failure — Studio, Core Connector, PECI, or REST/SOAP',
    'Stockholm Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_SWEDEN,
});

export const zurichWorkdayJobSupport = workdayCityPage({
  slug: 'zurich-workday-job-support', city: 'Zurich', area: 'Switzerland',
  localAngle: 'Zurich’s banking, insurance, and enterprise sector runs Workday Financials, HCM, and Swiss Payroll with multi-currency and audit-grade security needs.',
  useCases: [
    'Zurich bank Workday Financials issue — multi-currency CHF/EUR GL, consolidation, or close cycle',
    'Zurich Workday Payroll — AHV/BVG social-insurance or canton-level configuration error',
    'Zurich Workday Security role or audit/segregation-of-duties configuration issue',
    'Zurich enterprise Workday Integration failure — Studio, Core Connector, or REST/SOAP',
    'Zurich Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_SWITZERLAND,
  geoExtra: { label: 'Workday job support Geneva', href: '/geneva-workday-job-support/' },
});

export const genevaWorkdayJobSupport = workdayCityPage({
  slug: 'geneva-workday-job-support', city: 'Geneva', area: 'Switzerland',
  localAngle: 'Geneva’s banking, international-organization, and enterprise sector runs Workday Financials, HCM, and Swiss Payroll with multi-currency and compliance needs.',
  useCases: [
    'Geneva bank or international-organization Workday Financials issue — multi-currency GL or close cycle',
    'Geneva Workday Payroll — AHV/BVG social-insurance or canton-level configuration error',
    'Geneva Workday Security role or audit/segregation-of-duties configuration issue',
    'Geneva enterprise Workday Integration failure — Studio, Core Connector, or REST/SOAP',
    'Geneva Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_SWITZERLAND,
});

// ─── Phase 8: Australia & New Zealand city pages ─────────────────────────────

const WD_REGION_AUSTRALIA: WorkdayRegionConfig = {
  country: 'Australia', countryJobHref: '/workday-job-support-australia/',
  proxyHref: '/workday-proxy-interview-australia/', proxyLabel: 'Workday proxy interview Australia',
  scheduledHref: '/workday-interview-scheduled-australia/', scheduledLabel: 'Get Workday interviews scheduled Australia',
  generalSupport: { label: 'IT job support Australia', href: '/job-support-australia/' },
  tzNote: 'Aligned with Australian Eastern Time (AEST/AEDT) working hours.',
};

const WD_REGION_NEW_ZEALAND: WorkdayRegionConfig = {
  country: 'New Zealand', countryJobHref: '/workday-job-support-new-zealand/',
  proxyHref: '/workday-proxy-interview-new-zealand/', proxyLabel: 'Workday proxy interview New Zealand',
  scheduledHref: '/workday-interview-scheduled-new-zealand/', scheduledLabel: 'Get Workday interviews scheduled New Zealand',
  generalSupport: { label: 'IT job support New Zealand', href: '/job-support-newzealand/' },
  tzNote: 'Aligned with New Zealand Time (NZST/NZDT) working hours.',
};

const WD_REGION_SINGAPORE: WorkdayRegionConfig = {
  country: 'Singapore', countryJobHref: '/workday-job-support-singapore/',
  proxyHref: '/workday-proxy-interview-singapore/', proxyLabel: 'Workday proxy interview Singapore',
  scheduledHref: '/workday-interview-scheduled-singapore/', scheduledLabel: 'Get Workday interviews scheduled Singapore',
  generalSupport: { label: 'IT job support Singapore', href: '/job-support-singapore/' },
  tzNote: 'Aligned with Singapore Time (SGT) working hours.',
};

const WD_REGION_UAE: WorkdayRegionConfig = {
  country: 'UAE', countryJobHref: '/workday-job-support-uae/',
  proxyHref: '/workday-proxy-interview-uae/', proxyLabel: 'Workday proxy interview UAE',
  scheduledHref: '/workday-interview-scheduled-uae/', scheduledLabel: 'Get Workday interviews scheduled UAE',
  generalSupport: { label: 'Proxy & real-time IT job support', href: '/proxy-job-support/' },
  tzNote: 'Aligned with Gulf Standard Time (GST) working hours.',
};

const WD_REGION_SAUDI: WorkdayRegionConfig = {
  country: 'Saudi Arabia', countryJobHref: '/workday-job-support-saudi-arabia/',
  proxyHref: '/workday-proxy-interview-saudi-arabia/', proxyLabel: 'Workday proxy interview Saudi Arabia',
  scheduledHref: '/workday-interview-scheduled-saudi-arabia/', scheduledLabel: 'Get Workday interviews scheduled Saudi Arabia',
  generalSupport: { label: 'Proxy & real-time IT job support', href: '/proxy-job-support/' },
  tzNote: 'Aligned with Arabian Standard Time (AST) working hours.',
};

export const sydneyWorkdayJobSupport = workdayCityPage({
  slug: 'sydney-workday-job-support', city: 'Sydney', area: 'Australia',
  localAngle: 'Sydney is Australia’s largest Workday market — banks (CBA, NAB, Westpac), government, and enterprise run major Workday HCM, Financials, and Australian Payroll (STP2) tenants.',
  useCases: [
    'Sydney bank Workday HCM business process or staffing configuration issue',
    'Sydney Workday Payroll — STP2, superannuation, or Award-rate configuration error',
    'Sydney enterprise Workday Financials period close or procurement issue',
    'Sydney Workday Integration failure — EIB, Studio, Core Connector, or PECI',
    'Sydney Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_AUSTRALIA,
  geoExtra: { label: 'Workday job support Melbourne', href: '/melbourne-workday-job-support/' },
});

export const melbourneWorkdayJobSupport = workdayCityPage({
  slug: 'melbourne-workday-job-support', city: 'Melbourne', area: 'Australia',
  localAngle: 'Melbourne’s financial-services, healthcare, retail, and government enterprises run large Workday HCM, Financials, and Australian Payroll (STP2) tenants.',
  useCases: [
    'Melbourne enterprise Workday HCM business process or staffing configuration issue',
    'Melbourne Workday Payroll — STP2, superannuation, or Award-rate configuration error',
    'Melbourne Workday Financials period close or procurement issue',
    'Melbourne Workday Integration failure — EIB, Studio, Core Connector, or PECI',
    'Melbourne Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_AUSTRALIA,
});

export const brisbaneWorkdayJobSupport = workdayCityPage({
  slug: 'brisbane-workday-job-support', city: 'Brisbane', area: 'Australia',
  localAngle: 'Brisbane’s government, resources, and enterprise organizations run Workday HCM, Financials, and Australian Payroll (STP2) across Queensland.',
  useCases: [
    'Brisbane government or resources Workday HCM or staffing configuration issue',
    'Brisbane Workday Payroll — STP2, superannuation, or Award-rate configuration error',
    'Brisbane enterprise Workday Financials period close or procurement issue',
    'Brisbane Workday Integration failure — EIB, Studio, or Core Connector',
    'Brisbane Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_AUSTRALIA,
});

export const perthWorkdayJobSupport = workdayCityPage({
  slug: 'perth-workday-job-support', city: 'Perth', area: 'Australia',
  localAngle: 'Perth’s mining, resources, and enterprise sector runs Workday HCM, Financials, and Australian Payroll (STP2) with complex roster and cost structures.',
  useCases: [
    'Perth mining/resources Workday HCM, rostering, or staffing configuration issue',
    'Perth Workday Payroll — STP2, superannuation, or Award-rate configuration error',
    'Perth enterprise Workday Financials — project costing, GL, or close cycle issue',
    'Perth Workday Integration failure — EIB, Studio, or Core Connector',
    'Perth Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_AUSTRALIA,
});

export const aucklandWorkdayJobSupport = workdayCityPage({
  slug: 'auckland-workday-job-support', city: 'Auckland', area: 'New Zealand',
  localAngle: 'Auckland is New Zealand’s largest Workday market — banks, enterprise, and government run Workday HCM, Financials, and NZ Payroll (KiwiSaver, PAYE/IRD) tenants.',
  useCases: [
    'Auckland enterprise Workday HCM or staffing configuration issue',
    'Auckland Workday Payroll — KiwiSaver, PAYE/IRD, or ACC configuration error',
    'Auckland Workday Financials period close or procurement issue',
    'Auckland Workday Integration failure — EIB, Studio, or Core Connector',
    'Auckland Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_NEW_ZEALAND,
  geoExtra: { label: 'Workday job support Wellington', href: '/wellington-workday-job-support/' },
});

export const wellingtonWorkdayJobSupport = workdayCityPage({
  slug: 'wellington-workday-job-support', city: 'Wellington', area: 'New Zealand',
  localAngle: 'Wellington’s government, public-sector, and enterprise organizations run Workday HCM, Financials, and NZ Payroll (KiwiSaver, PAYE/IRD) with strict compliance needs.',
  useCases: [
    'Wellington government Workday Financials issue — GL, procurement, or close cycle',
    'Wellington Workday Payroll — KiwiSaver, PAYE/IRD, or ACC configuration error',
    'Wellington enterprise Workday HCM or staffing configuration issue',
    'Wellington Workday Integration failure — EIB, Studio, or Core Connector',
    'Wellington Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_NEW_ZEALAND,
});

// ─── Phase 9: Singapore & Gulf city pages ────────────────────────────────────

export const singaporeWorkdayJobSupport = workdayCityPage({
  slug: 'singapore-workday-job-support', city: 'Singapore', area: 'Singapore',
  localAngle: 'Singapore is the APAC Workday hub — regional shared-service centres, MAS-regulated finance, banks, and multinationals run multi-country HCM, Financials, and Payroll on Workday.',
  useCases: [
    'Singapore regional HQ Workday HCM — multi-country Core HR or staffing configuration issue',
    'Singapore Workday Payroll — CPF integration or multi-country APAC payroll error',
    'Singapore MAS-regulated Workday Financials — multi-entity GL, intercompany, or close cycle',
    'Singapore Workday Integration failure — EIB, Studio, Core Connector, or PECI',
    'Singapore Workday Reporting / Prism Analytics deadline — Advanced or Composite reports',
  ],
  region: WD_REGION_SINGAPORE,
});

export const dubaiWorkdayJobSupport = workdayCityPage({
  slug: 'dubai-workday-job-support', city: 'Dubai', area: 'UAE',
  localAngle: 'Dubai’s banking, aviation (Emirates), hospitality, and government enterprises run Workday HCM, Financials, and UAE Payroll (WPS, gratuity, Emiratization).',
  useCases: [
    'Dubai enterprise Workday HCM — Emiratization (Nafis) or staffing configuration issue',
    'Dubai Workday Payroll — WPS compliance, gratuity, or AED/USD multi-currency error',
    'Dubai bank or airline Workday Financials — multi-currency GL or close cycle issue',
    'Dubai Workday Integration failure — EIB, Studio, Core Connector, or REST/SOAP',
    'Dubai Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_UAE,
  geoExtra: { label: 'Workday job support Abu Dhabi', href: '/abu-dhabi-workday-job-support/' },
});

export const abuDhabiWorkdayJobSupport = workdayCityPage({
  slug: 'abu-dhabi-workday-job-support', city: 'Abu Dhabi', area: 'UAE',
  localAngle: 'Abu Dhabi’s government, energy, and enterprise organizations run Workday HCM, Financials, and UAE Payroll (WPS, gratuity, Emiratization).',
  useCases: [
    'Abu Dhabi government or energy Workday Financials — GL, project costing, or close cycle',
    'Abu Dhabi Workday Payroll — WPS compliance, gratuity, or Emiratization configuration error',
    'Abu Dhabi enterprise Workday HCM or staffing configuration issue',
    'Abu Dhabi Workday Integration failure — EIB, Studio, Core Connector, or REST/SOAP',
    'Abu Dhabi Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_UAE,
});

export const riyadhWorkdayJobSupport = workdayCityPage({
  slug: 'riyadh-workday-job-support', city: 'Riyadh', area: 'Saudi Arabia',
  localAngle: 'Riyadh leads Saudi Arabia’s Vision 2030 Workday demand — PIF entities, banks, and government run Workday HCM, Financials, and Saudi Payroll (GOSI, Saudization/Nitaqat).',
  useCases: [
    'Riyadh enterprise Workday HCM — Saudization (Nitaqat) or staffing configuration issue',
    'Riyadh Workday Payroll — GOSI integration, Hijri-calendar, or SAR configuration error',
    'Riyadh bank or PIF-entity Workday Financials — multi-entity GL or close cycle issue',
    'Riyadh Workday Integration failure — EIB, Studio, Core Connector, or REST/SOAP',
    'Riyadh Workday Reporting / Prism Analytics deadline — Advanced reports or calculated fields',
  ],
  region: WD_REGION_SAUDI,
  geoExtra: { label: 'Workday job support Jeddah', href: '/jeddah-workday-job-support/' },
});

export const jeddahWorkdayJobSupport = workdayCityPage({
  slug: 'jeddah-workday-job-support', city: 'Jeddah', area: 'Saudi Arabia',
  localAngle: 'Jeddah’s commercial, logistics, and enterprise organizations run Workday HCM, Financials, and Saudi Payroll (GOSI, Saudization/Nitaqat) across the Western Region.',
  useCases: [
    'Jeddah enterprise Workday HCM — Saudization (Nitaqat) or staffing configuration issue',
    'Jeddah Workday Payroll — GOSI integration, Hijri-calendar, or SAR configuration error',
    'Jeddah commercial/logistics Workday Financials period close or procurement issue',
    'Jeddah Workday Integration failure — EIB, Studio, Core Connector, or REST/SOAP',
    'Jeddah Workday Reporting / Prism Analytics deadline — calculated fields or dashboards',
  ],
  region: WD_REGION_SAUDI,
});

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY MODULE & ROLE PAGES (Phase 10) — factory
// ═══════════════════════════════════════════════════════════════════════════

interface WorkdayModuleOpts {
  slug: string;
  title: string;
  h1?: string;
  label: string;            // subject used in body copy (e.g. 'Workday Business Analyst')
  description: string;
  keywords: string[];
  heroEyebrow: string;
  tagline: string;
  painIntro: string;
  heroVariant: string;
  techSnippet: string;
  coverageTitle: string;
  coverage: string[];
  faqTopics: string;
  proxyIntro: string;
  proxyPoints: string[];
  techLinks: LandingRelatedLink[];
  extraLinks?: LandingRelatedLink[];
  bottomCTAHeading: string;
  bottomCTABody: string;
}

function workdayModulePage(o: WorkdayModuleOpts): LandingPageConfig {
  const self = `/${o.slug}/`;
  const notSelf = (l: LandingRelatedLink) => l.href !== self;
  const additional = [
    { label: 'Workday production support', href: '/workday-production-support/' },
    ...(o.extraLinks ?? []),
    { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' },
  ].filter(notSelf);
  return {
    slug: o.slug,
    title: o.title,
    description: o.description,
    canonical: `${BASE_URL}/${o.slug}/`,
    keywords: o.keywords,
    h1: o.h1 ?? o.title,
    tagline: o.tagline,
    heroEyebrow: o.heroEyebrow,
    painIntro: o.painIntro,
    heroVariant: o.heroVariant,
    geoLine: `Supporting ${o.label} professionals across USA, Canada, UK, Europe, Ireland, Australia, New Zealand, Singapore, UAE, Saudi Arabia, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asian Pacific business hours.',
    techSnippet: o.techSnippet,
    highlights: workdayHighlights,
    faqs: workdayModuleFaqs(o.label, o.faqTopics),
    useCasesSection: { title: o.coverageTitle, cases: o.coverage },
    proxySection: {
      title: `${o.label} Interview Support`,
      intro: o.proxyIntro,
      points: o.proxyPoints,
    },
    bottomCTAHeading: o.bottomCTAHeading,
    bottomCTABody: o.bottomCTABody,
    relatedLinks: {
      geoLinks: [
        { label: 'Workday job support hub', href: '/workday-job-support/' },
        { label: 'Workday job support USA', href: '/workday-job-support-usa/' },
      ].filter(notSelf),
      techLinks: o.techLinks.filter(notSelf),
      problemLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
      proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
      blogLink: { label: 'Read IT job support articles', href: '/blog/' },
      additionalLinks: additional,
    },
    lastmod: LASTMOD,
  };
}

const HCM_LINK = { label: 'Workday HCM job support', href: '/workday-hcm-job-support/' };
const FIN_LINK = { label: 'Workday Financial Management job support', href: '/workday-financial-management-job-support/' };
const PAY_LINK = { label: 'Workday Payroll job support', href: '/workday-payroll-job-support/' };
const INT_LINK = { label: 'Workday Integration job support', href: '/workday-integration-job-support/' };
const REP_LINK = { label: 'Workday Reporting & Analytics job support', href: '/workday-reporting-analytics-job-support/' };
const SEC_LINK = { label: 'Workday Security job support', href: '/workday-security-job-support/' };
const ADP_LINK = { label: 'Workday Adaptive Planning job support', href: '/workday-adaptive-planning-job-support/' };
const HRIS_LINK = { label: 'Workday HRIS job support', href: '/workday-hris-job-support/' };
const TEST_LINK = { label: 'Workday Testing & Release support', href: '/workday-testing-release-support/' };
const R1_LINK = { label: 'Workday 2026R1 release support', href: '/workday-2026r1-release-support/' };
const PROD_LINK = { label: 'Workday production support', href: '/workday-production-support/' };
const IMPL_LINK = { label: 'Workday implementation support', href: '/workday-implementation-support/' };
const TENANT_LINK = { label: 'Workday tenant configuration support', href: '/workday-tenant-configuration-support/' };
const EIB_LINK = { label: 'Workday EIB integration job support', href: '/workday-eib-integration-job-support/' };
const STUDIO_LINK = { label: 'Workday Studio integration job support', href: '/workday-studio-integration-job-support/' };
const CC_LINK = { label: 'Workday Core Connectors job support', href: '/workday-core-connectors-job-support/' };
const PECI_LINK = { label: 'Workday PECI integration job support', href: '/workday-peci-integration-job-support/' };
const ADVREP_LINK = { label: 'Workday Advanced Reporting job support', href: '/workday-advanced-reporting-job-support/' };
const CALC_LINK = { label: 'Workday calculated fields job support', href: '/workday-calculated-fields-job-support/' };

// ─── Phase 10: Module & role pages ───────────────────────────────────────────

export const workdayBusinessAnalystJobSupport = workdayModulePage({
  slug: 'workday-business-analyst-job-support', label: 'Workday Business Analyst',
  title: 'Workday Business Analyst Job Support — Real-Time BA Project & Production Help',
  description: 'Real-time Workday Business Analyst job support — requirements, business process design, fit-gap analysis, configuration, testing coordination, and stakeholder demos. HCM, Financials, Payroll. 2026R1 ready. Same-day start.',
  keywords: ['Workday Business Analyst job support', 'Workday BA support', 'Workday business process analysis', 'Workday requirements gathering', 'Workday fit-gap analysis', 'Workday BA interview support'],
  heroEyebrow: 'Workday BA Support — Updated for 2026R1',
  tagline: 'Live Workday Business Analyst support — requirements gathering, business process design, fit-gap analysis, configuration validation, and stakeholder demos across HCM, Financials, and Payroll.',
  painIntro: 'Stuck translating business requirements into Workday configuration? Fit-gap analysis stalling, a business process design under review, or a demo to stakeholders tomorrow? Our Workday BA experts join your working hours and help you deliver.',
  heroVariant: 'We help Workday Business Analysts with requirements workshops, business process (BP) design, fit-gap analysis, configuration workbooks, functional specs for integrations and reports, test scenario design, defect triage, and stakeholder demos. Updated for Workday 2026R1 release impact and AI-driven workflow changes across modules.',
  techSnippet: 'Workday BA coverage: requirements, BP design, fit-gap, configuration workbooks, functional specs, test scenarios, UAT coordination, and 2026R1 release impact analysis across HCM, Financials, and Payroll.',
  coverageTitle: 'Workday BA Situations We Help Resolve',
  coverage: [
    'Translating business requirements into Workday business process and configuration designs',
    'Fit-gap analysis across HCM, Financials, or Payroll for a new module rollout',
    'Writing functional specifications for integrations, EIBs, and custom reports',
    'Designing UAT test scenarios and coordinating defect triage during testing cycles',
    'Preparing and walking stakeholders through configuration demos and 2026R1 change impact',
  ],
  faqTopics: 'requirements gathering, business process design, fit-gap analysis, functional specifications, and UAT coordination',
  proxyIntro: 'Workday BA interviews test functional knowledge, business process design, and the ability to translate requirements. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday BA functional and scenario-based interview rounds',
    'Support explaining business process design and fit-gap analysis approaches',
    'Coaching on requirements-to-configuration translation questions',
    'Coverage for 2026R1 release impact questions',
    'Mock Workday BA interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [HCM_LINK, REP_LINK],
  extraLinks: [{ label: 'Workday business process configuration support', href: '/workday-business-process-configuration-support/' }, FIN_LINK],
  bottomCTAHeading: 'Need Real-Time Workday BA Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Business Analyst support — requirements, BP design, fit-gap, functional specs, and UAT coordination. Contact us on WhatsApp now.',
});

export const workdayFunctionalConsultantJobSupport = workdayModulePage({
  slug: 'workday-functional-consultant-job-support', label: 'Workday Functional Consultant',
  title: 'Workday Functional Consultant Job Support — Real-Time Configuration Help',
  description: 'Real-time Workday Functional Consultant job support — HCM, Financials, Payroll configuration, business processes, security, and testing. Production and project delivery help. 2026R1 ready. Same-day start.',
  keywords: ['Workday Functional Consultant job support', 'Workday functional consultant help', 'Workday HCM functional support', 'Workday configuration support', 'Workday functional interview support', 'Workday consultant support'],
  heroEyebrow: 'Workday Functional Consultant Support — 2026R1',
  tagline: 'Live Workday Functional Consultant support — HCM, Financials, and Payroll configuration, business processes, security, and testing across project and production work.',
  painIntro: 'A Workday functional configuration not behaving as expected? Business process condition rules failing, a security domain blocking a task, or a client deadline closing in? Our functional consultants join your session and help you deliver.',
  heroVariant: 'We help Workday Functional Consultants across Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, Financials, and Payroll — business process configuration, condition rules, security, calculated fields, EIB data loads, and testing. Updated for Workday 2026R1 release impact and AI-driven workflow changes.',
  techSnippet: 'Workday functional coverage: HCM, Financials, Payroll configuration, business processes, condition rules, security, calculated fields, EIB loads, and 2026R1 release impact.',
  coverageTitle: 'Workday Functional Consultant Situations We Help Resolve',
  coverage: [
    'Business process configuration, condition rules, and approval routing not behaving as designed',
    'Module configuration across Core HR, Compensation, Benefits, Absence, or Time Tracking',
    'Security domain and business process security troubleshooting',
    'EIB data loads, calculated fields, and custom report configuration',
    'Project delivery and production-support tasks under a client deadline',
  ],
  faqTopics: 'business process configuration, condition rules, module setup, security, and EIB data loads',
  proxyIntro: 'Workday functional interviews test configuration depth and real-world implementation experience. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday functional configuration and scenario interviews',
    'Support explaining business process and security configuration approaches',
    'Coaching on module-specific configuration questions across HCM, Financials, Payroll',
    'Coverage for 2026R1 release impact questions',
    'Mock Workday functional interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [HCM_LINK, FIN_LINK],
  extraLinks: [PAY_LINK, { label: 'Workday business process configuration support', href: '/workday-business-process-configuration-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Functional Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Functional Consultant support — configuration, business processes, security, and testing. Contact us on WhatsApp now.',
});

export const workdayTechnicalConsultantJobSupport = workdayModulePage({
  slug: 'workday-technical-consultant-job-support', label: 'Workday Technical Consultant',
  title: 'Workday Technical Consultant Job Support — Integrations, Reporting & Extend',
  description: 'Real-time Workday Technical Consultant job support — integrations (EIB, Studio, Core Connector, PECI), reporting, calculated fields, Workday Extend, and RaaS. Production and project delivery help. 2026R1 ready.',
  keywords: ['Workday Technical Consultant job support', 'Workday technical consultant help', 'Workday integration developer support', 'Workday Extend support', 'Workday RaaS support', 'Workday technical interview support'],
  heroEyebrow: 'Workday Technical Consultant Support — 2026R1',
  tagline: 'Live Workday Technical Consultant support — integrations (EIB, Studio, Core Connector, PECI), reporting, calculated fields, Workday Extend, and RaaS web services.',
  painIntro: 'A Workday integration failing in production? Studio assembly throwing an error, an EIB transformation not mapping, or a calculated field returning the wrong value? Our technical consultants join your session and help you fix it fast.',
  heroVariant: 'We help Workday Technical Consultants with EIB transformations, Studio assemblies, Core Connectors, PECI/PICOF, REST/SOAP web services, RaaS, calculated fields, advanced/BIRT reports, and Workday Extend apps. Updated for Workday 2026R1 API and release changes.',
  techSnippet: 'Workday technical coverage: EIB, Studio, Core Connector, PECI/PICOF, REST/SOAP, RaaS, calculated fields, advanced/BIRT reporting, Workday Extend, and 2026R1 API changes.',
  coverageTitle: 'Workday Technical Consultant Situations We Help Resolve',
  coverage: [
    'EIB transformation or Studio assembly failing in production before a deadline',
    'Core Connector or PECI integration mapping or error-handling issue',
    'REST/SOAP web service or RaaS report-as-a-service integration troubleshooting',
    'Complex calculated fields, advanced reports, or BIRT layout debugging',
    'Workday Extend app build or orchestration issue',
  ],
  faqTopics: 'EIB, Studio, Core Connector, PECI, web services, calculated fields, and Workday Extend',
  proxyIntro: 'Workday technical interviews test integration architecture and hands-on development depth. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday integration and technical interview rounds',
    'Support explaining EIB, Studio, Core Connector, and PECI architecture',
    'Coaching on calculated fields, RaaS, and Workday Extend questions',
    'Coverage for 2026R1 API and release-change questions',
    'Mock Workday technical interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [INT_LINK, REP_LINK],
  extraLinks: [STUDIO_LINK, EIB_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Technical Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Technical Consultant support — integrations, reporting, calculated fields, and Workday Extend. Contact us on WhatsApp now.',
});

export const workdayIntegrationConsultantJobSupport = workdayModulePage({
  slug: 'workday-integration-consultant-job-support', label: 'Workday Integration Consultant',
  title: 'Workday Integration Consultant Job Support — EIB, Studio, Core Connector, PECI',
  description: 'Real-time Workday Integration Consultant job support — EIB, Studio, Core Connectors, PECI/PICOF, REST/SOAP, RaaS, and error handling. Production firefighting and project delivery. 2026R1 ready. Same-day start.',
  keywords: ['Workday Integration Consultant job support', 'Workday integration support', 'Workday EIB support', 'Workday Studio support', 'Workday Core Connector support', 'Workday integration interview support'],
  heroEyebrow: 'Workday Integration Consultant Support — 2026R1',
  tagline: 'Live Workday Integration Consultant support — EIB, Studio, Core Connectors, PECI/PICOF, REST/SOAP, RaaS, and integration error handling.',
  painIntro: 'A Workday integration breaking before a payroll cutover or go-live? Studio assembly erroring, a Core Connector field mapping wrong, or a PECI failing to deliver? Our integration consultants join your session and fix it fast.',
  heroVariant: 'We help Workday Integration Consultants design and troubleshoot EIBs, Studio assemblies, Core Connectors, PECI/PICOF, REST/SOAP web services, and RaaS — including error handling, retry logic, security, and launch parameters. Updated for Workday 2026R1 API and release changes.',
  techSnippet: 'Workday integration coverage: EIB, Studio, Core Connector, PECI/PICOF, REST/SOAP, RaaS, XSLT, error handling, integration security, and 2026R1 API changes.',
  coverageTitle: 'Workday Integration Consultant Situations We Help Resolve',
  coverage: [
    'EIB or Studio integration failing before a payroll cutover or go-live',
    'Core Connector field mapping, transformation, or output format issue',
    'PECI/PICOF integration to a payroll or benefits provider failing',
    'REST/SOAP web service or RaaS integration authentication or payload issue',
    'Integration error handling, retry logic, and security configuration',
  ],
  faqTopics: 'EIB, Studio, Core Connector, PECI/PICOF, web services, and integration error handling',
  proxyIntro: 'Workday integration interviews test integration architecture and hands-on development. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday integration technical interview rounds',
    'Support explaining EIB, Studio, Core Connector, and PECI architecture and trade-offs',
    'Coaching on integration security, error handling, and launch-parameter questions',
    'Coverage for 2026R1 API and release-change questions',
    'Mock Workday integration interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [INT_LINK, STUDIO_LINK],
  extraLinks: [EIB_LINK, CC_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Integration Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Integration Consultant support — EIB, Studio, Core Connector, PECI, and web services. Contact us on WhatsApp now.',
});

export const workdayHcmConsultantJobSupport = workdayModulePage({
  slug: 'workday-hcm-consultant-job-support', label: 'Workday HCM Consultant',
  title: 'Workday HCM Consultant Job Support — Core HR, Staffing, Comp & Benefits',
  description: 'Real-time Workday HCM Consultant job support — Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, Talent, and Skills Cloud. Production and project delivery help. 2026R1 ready. Same-day start.',
  keywords: ['Workday HCM Consultant job support', 'Workday HCM support', 'Workday Core HR support', 'Workday compensation support', 'Workday benefits support', 'Workday HCM interview support'],
  heroEyebrow: 'Workday HCM Consultant Support — 2026R1',
  tagline: 'Live Workday HCM Consultant support — Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, Talent, and Skills Cloud.',
  painIntro: 'A Workday HCM business process or staffing configuration not working? Compensation grid issue, benefits open-enrollment event failing, or absence accrual miscalculating? Our HCM consultants join your session and help you deliver.',
  heroVariant: 'We help Workday HCM Consultants across Core HR, Staffing, Job and Position Management, Compensation, Benefits, Absence, Time Tracking, Talent, and Skills Cloud — business processes, eligibility rules, condition rules, and reporting. Updated for Workday 2026R1 HCM AI workflow changes.',
  techSnippet: 'Workday HCM coverage: Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, Talent, Skills Cloud, business processes, and 2026R1 HCM changes.',
  coverageTitle: 'Workday HCM Consultant Situations We Help Resolve',
  coverage: [
    'Core HR or staffing business process configuration not behaving as designed',
    'Compensation grid, plan, or eligibility rule configuration issue',
    'Benefits open-enrollment event or eligibility rule failure',
    'Absence accrual or Time Tracking calculation error',
    'Talent, Skills Cloud, or 2026R1 HCM AI workflow configuration',
  ],
  faqTopics: 'Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, and Skills Cloud',
  proxyIntro: 'Workday HCM interviews test functional configuration depth and real implementation experience. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday HCM functional and scenario interview rounds',
    'Support explaining business process, eligibility, and condition rule design',
    'Coaching on Compensation, Benefits, Absence, and Skills Cloud questions',
    'Coverage for 2026R1 HCM AI workflow questions',
    'Mock Workday HCM interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [HCM_LINK, HRIS_LINK],
  extraLinks: [{ label: 'Workday HCM interview support', href: '/workday-hcm-interview-support/' }, REP_LINK],
  bottomCTAHeading: 'Need Real-Time Workday HCM Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday HCM Consultant support — Core HR, Compensation, Benefits, Absence, and Skills Cloud. Contact us on WhatsApp now.',
});

export const workdayFinancialsConsultantJobSupport = workdayModulePage({
  slug: 'workday-financials-consultant-job-support', label: 'Workday Financials Consultant',
  title: 'Workday Financials Consultant Job Support — GL, AP, AR, Procurement & Close',
  description: 'Real-time Workday Financials Consultant job support — GL, AP, AR, Procurement, Projects, Banking, and period close. Production and project delivery help. 2026R1 ready. Same-day start.',
  keywords: ['Workday Financials Consultant job support', 'Workday Financial Management support', 'Workday GL support', 'Workday Procurement support', 'Workday financials interview support', 'Workday finance consultant support'],
  heroEyebrow: 'Workday Financials Consultant Support — 2026R1',
  tagline: 'Live Workday Financials Consultant support — GL, AP, AR, Procurement, Projects, Banking, and period close.',
  painIntro: 'A Workday Financials period close stuck? GL account posting rules misfiring, AP supplier invoice failing, or intercompany not balancing before month-end? Our Financials consultants join your session and help you close on time.',
  heroVariant: 'We help Workday Financials Consultants across the General Ledger, Accounting, AP, AR, Procurement, Projects, Banking, Business Assets, and period close — account posting rules, allocations, intercompany, and statutory reporting. Updated for Workday 2026R1 Finance automation changes.',
  techSnippet: 'Workday Financials coverage: GL, Accounting, AP, AR, Procurement, Projects, Banking, period close, account posting rules, allocations, and 2026R1 Finance changes.',
  coverageTitle: 'Workday Financials Consultant Situations We Help Resolve',
  coverage: [
    'Period close stuck — account posting rules, allocations, or intercompany not balancing',
    'AP supplier invoice, payment, or settlement run failing',
    'AR customer invoice, billing, or revenue configuration issue',
    'Procurement, requisition, or supplier contract configuration problem',
    'Projects costing, capitalization, or statutory reporting issue',
  ],
  faqTopics: 'General Ledger, AP, AR, Procurement, Projects, and period close',
  proxyIntro: 'Workday Financials interviews test configuration depth and accounting knowledge. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Financials functional and scenario interview rounds',
    'Support explaining account posting rules, allocations, and close-cycle design',
    'Coaching on AP, AR, Procurement, and Projects configuration questions',
    'Coverage for 2026R1 Finance automation questions',
    'Mock Workday Financials interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [FIN_LINK, ADP_LINK],
  extraLinks: [{ label: 'Workday Financials interview support', href: '/workday-financials-interview-support/' }, REP_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Financials Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Financials Consultant support — GL, AP, AR, Procurement, Projects, and period close. Contact us on WhatsApp now.',
});

export const workdayPayrollConsultantJobSupport = workdayModulePage({
  slug: 'workday-payroll-consultant-job-support', label: 'Workday Payroll Consultant',
  title: 'Workday Payroll Consultant Job Support — Calculations, Compliance & Year-End',
  description: 'Real-time Workday Payroll Consultant job support — pay calculations, earnings/deductions, taxes, off-cycle, garnishments, and year-end (W-2/T4/P60). USA, Canada, UK payroll. 2026R1 ready. Same-day start.',
  keywords: ['Workday Payroll Consultant job support', 'Workday Payroll support', 'Workday payroll calculation support', 'Workday payroll compliance support', 'Workday payroll interview support', 'Workday year-end support'],
  heroEyebrow: 'Workday Payroll Consultant Support — 2026R1',
  tagline: 'Live Workday Payroll Consultant support — pay calculations, earnings/deductions, taxes, off-cycle runs, garnishments, and year-end (W-2/T4/P60).',
  painIntro: 'A Workday Payroll calculation off before a pay run? Earnings or deduction code mapping wrong, an off-cycle failing, or year-end W-2/T4 not reconciling? Our Payroll consultants join your session and help you run clean payroll.',
  heroVariant: 'We help Workday Payroll Consultants with pay calculation rules, earnings and deductions, run categories, taxes, off-cycle and on-demand payments, garnishments, retro processing, and year-end (W-2, T4, P60). USA, Canada, and UK payroll expertise. Updated for Workday 2026R1 payroll compliance changes.',
  techSnippet: 'Workday Payroll coverage: pay calculation rules, earnings/deductions, run categories, taxes, off-cycle, garnishments, retro, year-end, and 2026R1 payroll changes.',
  coverageTitle: 'Workday Payroll Consultant Situations We Help Resolve',
  coverage: [
    'Pay calculation rule, earnings, or deduction code returning the wrong result',
    'Off-cycle or on-demand payment failing before a deadline',
    'Tax setup, garnishment, or retro-processing configuration issue',
    'Year-end W-2, T4, or P60 reconciliation problem',
    'Country-specific payroll compliance (USA, Canada T4/ROE, UK PAYE/RTI)',
  ],
  faqTopics: 'pay calculations, earnings/deductions, taxes, off-cycle, garnishments, and year-end',
  proxyIntro: 'Workday Payroll interviews test calculation logic and compliance knowledge. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Payroll functional and scenario interview rounds',
    'Support explaining pay calculation, run category, and earnings/deduction design',
    'Coaching on tax, garnishment, retro, and year-end questions',
    'Coverage for 2026R1 payroll compliance questions',
    'Mock Workday Payroll interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [PAY_LINK, HCM_LINK],
  extraLinks: [{ label: 'Workday Payroll interview support', href: '/workday-payroll-interview-support/' }, PECI_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Payroll Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Payroll Consultant support — calculations, taxes, off-cycle, garnishments, and year-end. Contact us on WhatsApp now.',
});

export const workdaySecurityConsultantJobSupport = workdayModulePage({
  slug: 'workday-security-consultant-job-support', label: 'Workday Security Consultant',
  title: 'Workday Security Consultant Job Support — Domains, Roles & Business Process Security',
  description: 'Real-time Workday Security Consultant job support — domain security policies, role-based security, business process security, segregation of duties, and audit. Production and project help. 2026R1 ready.',
  keywords: ['Workday Security Consultant job support', 'Workday Security support', 'Workday domain security support', 'Workday role-based security support', 'Workday security interview support', 'Workday segregation of duties'],
  heroEyebrow: 'Workday Security Consultant Support — 2026R1',
  tagline: 'Live Workday Security Consultant support — domain security policies, role-based security, business process security, segregation of duties, and audit.',
  painIntro: 'A Workday security configuration blocking users or failing an audit? A domain security policy too tight or too loose, a business process security policy misfiring, or a segregation-of-duties conflict flagged? Our Security consultants join your session and help.',
  heroVariant: 'We help Workday Security Consultants with domain security policies, role-based and user-based security, business process security, integration security, segregation of duties, and audit/compliance reporting. Updated for Workday 2026R1 Security framework changes.',
  techSnippet: 'Workday Security coverage: domain security policies, role-based security, business process security, integration security, segregation of duties, audit, and 2026R1 Security changes.',
  coverageTitle: 'Workday Security Consultant Situations We Help Resolve',
  coverage: [
    'Domain security policy too restrictive or too permissive — access troubleshooting',
    'Business process security policy blocking an action or approval',
    'Role-based vs. user-based security assignment design issue',
    'Integration system security and ISU/ISSG configuration problem',
    'Segregation-of-duties conflict, audit finding, or compliance reporting need',
  ],
  faqTopics: 'domain security policies, role-based security, business process security, and segregation of duties',
  proxyIntro: 'Workday Security interviews test security model depth and audit awareness. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Security functional and scenario interview rounds',
    'Support explaining domain, role-based, and business process security design',
    'Coaching on integration security and segregation-of-duties questions',
    'Coverage for 2026R1 Security framework questions',
    'Mock Workday Security interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [SEC_LINK, INT_LINK],
  extraLinks: [{ label: 'Workday Security interview support', href: '/workday-security-interview-support/' }, TENANT_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Security Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Security Consultant support — domains, roles, business process security, and audit. Contact us on WhatsApp now.',
});

export const workdayReportingConsultantJobSupport = workdayModulePage({
  slug: 'workday-reporting-consultant-job-support', label: 'Workday Reporting Consultant',
  title: 'Workday Reporting Consultant Job Support — Advanced, Matrix, Composite & Prism',
  description: 'Real-time Workday Reporting Consultant job support — Advanced, Matrix, Composite reports, calculated fields, BIRT, Prism Analytics, and Data Cloud. Production and project help. 2026R1 ready. Same-day start.',
  keywords: ['Workday Reporting Consultant job support', 'Workday Reporting support', 'Workday advanced reporting support', 'Workday Prism Analytics support', 'Workday calculated fields support', 'Workday reporting interview support'],
  heroEyebrow: 'Workday Reporting Consultant Support — 2026R1',
  tagline: 'Live Workday Reporting Consultant support — Advanced, Matrix, Composite reports, calculated fields, BIRT layouts, Prism Analytics, and Data Cloud.',
  painIntro: 'A Workday report not returning the right data before a deadline? A calculated field misfiring, a Composite report not aggregating, or a Prism data source failing? Our Reporting consultants join your session and help you deliver.',
  heroVariant: 'We help Workday Reporting Consultants build and debug Advanced, Matrix, and Composite reports, calculated fields, BIRT layouts, Prism Analytics pipelines, and Data Cloud datasets — including report security and performance. Updated for Workday 2026R1 reporting framework changes.',
  techSnippet: 'Workday Reporting coverage: Advanced, Matrix, Composite reports, calculated fields, BIRT, Prism Analytics, Data Cloud, report security, and 2026R1 reporting changes.',
  coverageTitle: 'Workday Reporting Consultant Situations We Help Resolve',
  coverage: [
    'Advanced or Matrix report not returning the expected data set',
    'Calculated field returning the wrong value or failing to evaluate',
    'Composite report aggregation or sub-report configuration issue',
    'BIRT layout formatting or Prism Analytics data-source failure',
    'Report performance, security, or 2026R1 reporting-framework change impact',
  ],
  faqTopics: 'Advanced, Matrix, Composite reports, calculated fields, BIRT, and Prism Analytics',
  proxyIntro: 'Workday Reporting interviews test report-building depth and calculated-field logic. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Reporting functional and scenario interview rounds',
    'Support explaining report types, calculated fields, and data-source design',
    'Coaching on Prism Analytics and BIRT questions',
    'Coverage for 2026R1 reporting-framework questions',
    'Mock Workday Reporting interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [REP_LINK, ADVREP_LINK],
  extraLinks: [CALC_LINK, { label: 'Workday Reporting interview support', href: '/workday-reporting-interview-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Reporting Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Reporting Consultant support — Advanced, Matrix, Composite reports, calculated fields, and Prism. Contact us on WhatsApp now.',
});

export const workdayImplementationSupport = workdayModulePage({
  slug: 'workday-implementation-support', label: 'Workday Implementation',
  title: 'Workday Implementation Support — Real-Time Deployment & Configuration Help',
  description: 'Real-time Workday implementation support across all phases — Plan, Architect, Configure & Prototype, Test, Deploy. HCM, Financials, Payroll, Integrations. 2026R1 ready. Same-day expert help.',
  keywords: ['Workday implementation support', 'Workday deployment support', 'Workday project support', 'Workday configuration support', 'Workday implementation help', 'Workday rollout support'],
  heroEyebrow: 'Workday Implementation Support — 2026R1',
  tagline: 'Live Workday implementation support across all deployment phases — Plan, Architect, Configure & Prototype, Test, and Deploy — for HCM, Financials, Payroll, and Integrations.',
  painIntro: 'On a Workday implementation under pressure? Configure-and-prototype tenant behind schedule, a customer confirmation session approaching, or a deployment milestone slipping? Our implementation experts join your session and help you stay on track.',
  heroVariant: 'We support Workday implementations across the deployment methodology — discovery and design workshops, tenant configuration, prototype builds, data conversion, integration build, testing cycles, and deployment. HCM, Financials, Payroll, and Integrations. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday implementation coverage: design workshops, tenant configuration, prototype builds, data conversion, integration build, testing, deployment, and 2026R1 impact.',
  coverageTitle: 'Workday Implementation Situations We Help Resolve',
  coverage: [
    'Configure-and-prototype tenant build behind schedule before a customer confirmation session',
    'Data conversion (iLoads/EIB) mapping or validation issues during a build phase',
    'Integration build slipping against the deployment timeline',
    'Testing cycle (unit, SIT, UAT) defect backlog threatening a milestone',
    'Deployment / cutover planning and go-live readiness gaps',
  ],
  faqTopics: 'design workshops, tenant configuration, prototype builds, data conversion, and deployment',
  proxyIntro: 'Workday implementation interviews test methodology knowledge and hands-on delivery experience. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday implementation methodology and scenario interviews',
    'Support explaining deployment phases, design decisions, and delivery approaches',
    'Coaching on data conversion, testing, and cutover questions',
    'Coverage for 2026R1 release impact questions',
    'Mock Workday implementation interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [TENANT_LINK, TEST_LINK],
  extraLinks: [{ label: 'Workday data conversion & migration support', href: '/workday-data-conversion-migration-support/' }, { label: 'Workday go-live & hypercare support', href: '/workday-go-live-hypercare-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Implementation Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday implementation support — configuration, prototype, data conversion, testing, and deployment. Contact us on WhatsApp now.',
});

export const workdayProductionSupport = workdayModulePage({
  slug: 'workday-production-support', label: 'Workday Production Support',
  title: 'Workday Production Support — Real-Time Tickets, Defects & Incident Help',
  description: 'Real-time Workday production support — incident firefighting, defect resolution, ticket backlog, business process fixes, integration failures, and post-release stabilization. HCM, Financials, Payroll. 2026R1 ready.',
  keywords: ['Workday production support', 'Workday incident support', 'Workday defect resolution', 'Workday ticket support', 'Workday post-production support', 'Workday support analyst help'],
  heroEyebrow: 'Workday Production Support — 2026R1',
  tagline: 'Live Workday production support — incident firefighting, defect resolution, ticket backlog, business process fixes, integration failures, and post-release stabilization.',
  painIntro: 'A Workday production incident with users blocked and an SLA ticking? A failed integration, a broken business process, or a defect backlog after the latest release? Our production-support experts join your session and help you resolve it fast.',
  heroVariant: 'We provide Workday production support for live tenants — incident triage, root-cause analysis, defect resolution, business process fixes, integration failure recovery, security access issues, and post-release stabilization. HCM, Financials, Payroll, Integrations. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday production coverage: incident triage, root-cause analysis, defect resolution, business process fixes, integration recovery, security access, and 2026R1 stabilization.',
  coverageTitle: 'Workday Production Support Situations We Help Resolve',
  coverage: [
    'Production incident with users blocked and an SLA at risk',
    'Failed integration (EIB/Studio/Core Connector) in a live tenant',
    'Broken business process or condition rule affecting daily operations',
    'Defect backlog or regression issues after a release or 2026R1 update',
    'Security access incident blocking critical HCM or Finance tasks',
  ],
  faqTopics: 'incident triage, defect resolution, business process fixes, and integration recovery',
  proxyIntro: 'Workday production-support interviews test troubleshooting depth and incident-management experience. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday production-support and troubleshooting interviews',
    'Support explaining incident triage, root-cause analysis, and resolution approaches',
    'Coaching on integration recovery and business process fix questions',
    'Coverage for 2026R1 release-stabilization questions',
    'Mock Workday production-support interviews calibrated to enterprise formats',
  ],
  techLinks: [TEST_LINK, R1_LINK],
  extraLinks: [{ label: 'Workday go-live & hypercare support', href: '/workday-go-live-hypercare-support/' }, INT_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Production Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday production support — incidents, defects, integration failures, and post-release stabilization. Contact us on WhatsApp now.',
});

export const workdayTenantConfigurationSupport = workdayModulePage({
  slug: 'workday-tenant-configuration-support', label: 'Workday Tenant Configuration',
  title: 'Workday Tenant Configuration Support — Setup, Migration & Tenant Management',
  description: 'Real-time Workday tenant configuration support — tenant setup, configuration migration, foundation data, business processes, security, and tenant refresh. HCM, Financials, Payroll. 2026R1 ready.',
  keywords: ['Workday tenant configuration support', 'Workday tenant setup support', 'Workday configuration migration', 'Workday tenant management', 'Workday foundation data support', 'Workday tenant refresh'],
  heroEyebrow: 'Workday Tenant Configuration Support — 2026R1',
  tagline: 'Live Workday tenant configuration support — tenant setup, configuration migration, foundation data, business processes, security, and tenant refresh.',
  painIntro: 'Wrestling with Workday tenant configuration? A configuration migration between tenants failing, foundation data inconsistent, or a tenant refresh wiping changes? Our tenant-configuration experts join your session and help.',
  heroVariant: 'We help with Workday tenant configuration — foundation data setup, organization structures, business processes, security, configuration migration between Sandbox/Implementation/Production tenants, and tenant refresh planning. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday tenant coverage: foundation data, organization structures, business processes, security, configuration migration, tenant refresh, and 2026R1 impact.',
  coverageTitle: 'Workday Tenant Configuration Situations We Help Resolve',
  coverage: [
    'Configuration migration between Sandbox, Implementation, and Production tenants failing',
    'Foundation data or organization-structure inconsistency across tenants',
    'Business process or security configuration not migrating cleanly',
    'Tenant refresh planning to avoid losing in-flight configuration',
    'Post-2026R1 tenant update configuration review and remediation',
  ],
  faqTopics: 'foundation data, organization structures, configuration migration, and tenant refresh',
  proxyIntro: 'Workday tenant-configuration interviews test environment-management and configuration depth. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday tenant-configuration and scenario interviews',
    'Support explaining configuration migration and tenant-management strategy',
    'Coaching on foundation data and organization-structure questions',
    'Coverage for 2026R1 tenant-update questions',
    'Mock Workday tenant-configuration interviews calibrated to enterprise formats',
  ],
  techLinks: [SEC_LINK, IMPL_LINK],
  extraLinks: [HCM_LINK, { label: 'Workday business process configuration support', href: '/workday-business-process-configuration-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Tenant Configuration Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday tenant configuration support — setup, migration, foundation data, and tenant refresh. Contact us on WhatsApp now.',
});

export const workdayEibIntegrationJobSupport = workdayModulePage({
  slug: 'workday-eib-integration-job-support', label: 'Workday EIB Integration',
  title: 'Workday EIB Integration Job Support — Inbound/Outbound EIB & Transformations',
  description: 'Real-time Workday EIB integration job support — inbound and outbound EIBs, spreadsheet templates, XSLT transformations, error handling, and scheduling. Production and project help. 2026R1 ready.',
  keywords: ['Workday EIB integration job support', 'Workday EIB support', 'Workday inbound EIB', 'Workday outbound EIB', 'Workday EIB transformation', 'Workday EIB interview support'],
  heroEyebrow: 'Workday EIB Integration Support — 2026R1',
  tagline: 'Live Workday EIB integration support — inbound and outbound EIBs, spreadsheet templates, XSLT transformations, error handling, and scheduling.',
  painIntro: 'A Workday EIB failing to load or deliver? Inbound spreadsheet template erroring, an outbound transformation mapping wrong, or a scheduled EIB not running? Our EIB experts join your session and fix it fast.',
  heroVariant: 'We help with Workday inbound and outbound EIBs — spreadsheet and XML templates, XSLT transformations, custom report integrations, delivery (SFTP/email), error handling, and scheduling. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday EIB coverage: inbound/outbound EIBs, spreadsheet/XML templates, XSLT transformations, RaaS sources, delivery, error handling, scheduling, and 2026R1 impact.',
  coverageTitle: 'Workday EIB Integration Situations We Help Resolve',
  coverage: [
    'Inbound EIB spreadsheet template load erroring or rejecting records',
    'Outbound EIB transformation (XSLT) mapping the wrong fields or format',
    'EIB delivery (SFTP/email) or scheduling failure',
    'EIB error handling and reprocessing of failed records',
    'Converting a manual data load into a repeatable, scheduled EIB',
  ],
  faqTopics: 'inbound/outbound EIBs, spreadsheet templates, XSLT transformations, and scheduling',
  proxyIntro: 'Workday EIB interviews test integration-development depth and transformation logic. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday EIB and integration interview rounds',
    'Support explaining inbound/outbound EIB design and XSLT transformations',
    'Coaching on delivery, scheduling, and error-handling questions',
    'Coverage for 2026R1 integration-change questions',
    'Mock Workday EIB interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [INT_LINK, STUDIO_LINK],
  extraLinks: [CC_LINK, { label: 'Workday Integration Consultant job support', href: '/workday-integration-consultant-job-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday EIB Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday EIB integration support — inbound/outbound EIBs, transformations, delivery, and scheduling. Contact us on WhatsApp now.',
});

export const workdayStudioIntegrationJobSupport = workdayModulePage({
  slug: 'workday-studio-integration-job-support', label: 'Workday Studio Integration',
  title: 'Workday Studio Integration Job Support — Assemblies, Orchestration & Debugging',
  description: 'Real-time Workday Studio integration job support — Studio assemblies, orchestration, transformations, web service calls, error handling, and debugging. Production and project help. 2026R1 ready.',
  keywords: ['Workday Studio integration job support', 'Workday Studio support', 'Workday Studio assembly', 'Workday Studio orchestration', 'Workday Studio debugging', 'Workday Studio interview support'],
  heroEyebrow: 'Workday Studio Integration Support — 2026R1',
  tagline: 'Live Workday Studio integration support — Studio assemblies, orchestration, transformations, web service calls, error handling, and debugging.',
  painIntro: 'A Workday Studio integration throwing an error in production? An assembly step failing, a web service call timing out, or a transformation not parsing? Our Studio experts join your session and debug it with you.',
  heroVariant: 'We help with complex Workday Studio integrations — multi-step assemblies, orchestration, MVEL expressions, XSLT/XPath transformations, REST/SOAP web service calls, looping and routing, error handling, and debugging. Updated for Workday 2026R1 API changes.',
  techSnippet: 'Workday Studio coverage: assemblies, orchestration, MVEL, XSLT/XPath, REST/SOAP calls, routing, error handling, debugging, and 2026R1 API changes.',
  coverageTitle: 'Workday Studio Integration Situations We Help Resolve',
  coverage: [
    'Studio assembly step failing or producing the wrong output in production',
    'Web service (REST/SOAP) call timing out, authenticating, or returning an error',
    'XSLT/XPath transformation or MVEL expression not evaluating correctly',
    'Looping, routing, or conditional logic in a complex assembly misbehaving',
    'Studio integration error handling, logging, and debugging',
  ],
  faqTopics: 'Studio assemblies, orchestration, transformations, web service calls, and debugging',
  proxyIntro: 'Workday Studio interviews test advanced integration-development depth. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Studio and advanced integration interviews',
    'Support explaining assembly design, orchestration, and transformation logic',
    'Coaching on web service, error-handling, and debugging questions',
    'Coverage for 2026R1 API and integration-change questions',
    'Mock Workday Studio interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [INT_LINK, EIB_LINK],
  extraLinks: [CC_LINK, { label: 'Workday Integration Consultant job support', href: '/workday-integration-consultant-job-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Studio Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Studio integration support — assemblies, orchestration, web service calls, and debugging. Contact us on WhatsApp now.',
});

export const workdayCoreConnectorsJobSupport = workdayModulePage({
  slug: 'workday-core-connectors-job-support', label: 'Workday Core Connectors',
  title: 'Workday Core Connectors Job Support — Connector Templates & Field Mapping',
  description: 'Real-time Workday Core Connectors job support — connector templates, field mapping, integration attributes, document transformations, and error handling. Production and project help. 2026R1 ready.',
  keywords: ['Workday Core Connectors job support', 'Workday Core Connector support', 'Workday connector template', 'Workday integration field mapping', 'Workday PICOF support', 'Workday Core Connector interview support'],
  heroEyebrow: 'Workday Core Connectors Support — 2026R1',
  tagline: 'Live Workday Core Connectors support — connector templates, field mapping, integration attributes, document transformations, and error handling.',
  painIntro: 'A Workday Core Connector not delivering the right data? Field mapping incomplete, an integration attribute misconfigured, or a document transformation failing? Our Core Connector experts join your session and help.',
  heroVariant: 'We help with Workday Core Connectors — connector templates (Worker, Benefits, Payroll), field mapping and overrides, integration attributes and maps, integration services, document transformations, and error handling. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday Core Connector coverage: connector templates, field mapping, integration attributes/maps, services, document transformations, error handling, and 2026R1 impact.',
  coverageTitle: 'Workday Core Connectors Situations We Help Resolve',
  coverage: [
    'Core Connector delivering incomplete or incorrect field data',
    'Integration attribute, map, or override configuration issue',
    'Document transformation on top of a connector failing',
    'Connector template selection and enabling the right integration services',
    'Connector error handling and reprocessing',
  ],
  faqTopics: 'connector templates, field mapping, integration attributes, and document transformations',
  proxyIntro: 'Workday Core Connector interviews test integration-template depth and mapping logic. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Core Connector and integration interviews',
    'Support explaining connector templates, field mapping, and integration attributes',
    'Coaching on document transformation and error-handling questions',
    'Coverage for 2026R1 integration-change questions',
    'Mock Workday Core Connector interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [INT_LINK, PECI_LINK],
  extraLinks: [EIB_LINK, STUDIO_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Core Connector Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Core Connectors support — templates, field mapping, attributes, and document transformations. Contact us on WhatsApp now.',
});

export const workdayPeciIntegrationJobSupport = workdayModulePage({
  slug: 'workday-peci-integration-job-support', label: 'Workday PECI Integration',
  title: 'Workday PECI Integration Job Support — Payroll Effective Change Interface',
  description: 'Real-time Workday PECI integration job support — Payroll Effective Change Interface configuration, change detection, field mapping, transformations, and payroll-vendor delivery. Production help. 2026R1 ready.',
  keywords: ['Workday PECI integration job support', 'Workday PECI support', 'Workday Payroll Effective Change Interface', 'Workday PICOF support', 'Workday payroll integration support', 'Workday PECI interview support'],
  heroEyebrow: 'Workday PECI Integration Support — 2026R1',
  tagline: 'Live Workday PECI integration support — Payroll Effective Change Interface configuration, change detection, field mapping, transformations, and payroll-vendor delivery.',
  painIntro: 'A Workday PECI not sending the right payroll changes to your vendor? Change detection missing records, field mapping wrong, or a transformation failing before a payroll cutover? Our PECI experts join your session and help.',
  heroVariant: 'We help with Workday PECI (and legacy PICOF) integrations to payroll providers — change detection configuration, field mapping, effective-dating, transformations, and delivery to ADP, Alight, and other payroll vendors. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday PECI coverage: change detection, field mapping, effective-dating, transformations, payroll-vendor delivery (ADP/Alight), error handling, and 2026R1 impact.',
  coverageTitle: 'Workday PECI Integration Situations We Help Resolve',
  coverage: [
    'PECI change detection missing or duplicating worker change records',
    'Field mapping or effective-dating sending incorrect payroll data',
    'Transformation to a payroll vendor format (ADP, Alight) failing',
    'PECI integration failing before a payroll cutover or go-live',
    'PECI error handling and reconciliation with the payroll provider',
  ],
  faqTopics: 'change detection, field mapping, effective-dating, transformations, and payroll-vendor delivery',
  proxyIntro: 'Workday PECI interviews test payroll-integration depth and change-detection logic. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday PECI and payroll-integration interviews',
    'Support explaining change detection, field mapping, and effective-dating',
    'Coaching on payroll-vendor delivery and reconciliation questions',
    'Coverage for 2026R1 integration-change questions',
    'Mock Workday PECI interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [INT_LINK, PAY_LINK],
  extraLinks: [CC_LINK, { label: 'Workday Integration Consultant job support', href: '/workday-integration-consultant-job-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday PECI Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday PECI integration support — change detection, field mapping, transformations, and vendor delivery. Contact us on WhatsApp now.',
});

export const workdayBirtReportingJobSupport = workdayModulePage({
  slug: 'workday-birt-reporting-job-support', label: 'Workday BIRT Reporting',
  title: 'Workday BIRT Reporting Job Support — Layouts, Print & Pixel-Perfect Reports',
  description: 'Real-time Workday BIRT reporting job support — BIRT layouts, pixel-perfect print reports, payslips, purchase orders, data binding, and troubleshooting. Production and project help. 2026R1 ready.',
  keywords: ['Workday BIRT reporting job support', 'Workday BIRT support', 'Workday BIRT layout', 'Workday print reports', 'Workday payslip BIRT', 'Workday BIRT interview support'],
  heroEyebrow: 'Workday BIRT Reporting Support — 2026R1',
  tagline: 'Live Workday BIRT reporting support — BIRT layouts, pixel-perfect print reports, payslips, purchase orders, data binding, and troubleshooting.',
  painIntro: 'A Workday BIRT report not rendering correctly? A payslip or purchase-order layout misaligned, data binding failing, or a print run producing blank pages? Our BIRT experts join your session and help.',
  heroVariant: 'We help with Workday BIRT report layouts — pixel-perfect print documents (payslips, purchase orders, offer letters), data binding to custom reports, conditional formatting, page layout, and rendering troubleshooting. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday BIRT coverage: layouts, pixel-perfect print documents, data binding, conditional formatting, page layout, rendering, and 2026R1 impact.',
  coverageTitle: 'Workday BIRT Reporting Situations We Help Resolve',
  coverage: [
    'Payslip, purchase-order, or offer-letter BIRT layout misaligned',
    'BIRT data binding to a custom report not returning data',
    'Conditional formatting or grouping in a BIRT layout not working',
    'Print run producing blank pages or rendering errors',
    'Converting a custom report into a pixel-perfect BIRT document',
  ],
  faqTopics: 'BIRT layouts, print documents, data binding, and rendering troubleshooting',
  proxyIntro: 'Workday BIRT interviews test layout-design and data-binding depth. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday BIRT and reporting interview rounds',
    'Support explaining BIRT layout design and data binding',
    'Coaching on conditional formatting and print-document questions',
    'Coverage for 2026R1 reporting-change questions',
    'Mock Workday BIRT interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [REP_LINK, ADVREP_LINK],
  extraLinks: [CALC_LINK, { label: 'Workday Reporting interview support', href: '/workday-reporting-interview-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday BIRT Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday BIRT reporting support — layouts, print documents, data binding, and rendering. Contact us on WhatsApp now.',
});

export const workdayAdvancedReportingJobSupport = workdayModulePage({
  slug: 'workday-advanced-reporting-job-support', label: 'Workday Advanced Reporting',
  title: 'Workday Advanced Reporting Job Support — Advanced, Matrix & Composite Reports',
  description: 'Real-time Workday Advanced Reporting job support — Advanced, Matrix, and Composite reports, data sources, filters, prompts, sub-filters, and report security. Production and project help. 2026R1 ready.',
  keywords: ['Workday Advanced Reporting job support', 'Workday advanced report support', 'Workday matrix report', 'Workday composite report', 'Workday report data source', 'Workday reporting interview support'],
  heroEyebrow: 'Workday Advanced Reporting Support — 2026R1',
  tagline: 'Live Workday Advanced Reporting support — Advanced, Matrix, and Composite reports, data sources, filters, prompts, sub-filters, and report security.',
  painIntro: 'A Workday advanced report not returning the right rows? A data source missing fields, a filter or prompt not behaving, or a Matrix report not summarizing? Our reporting experts join your session and help.',
  heroVariant: 'We help build and debug Workday Advanced, Matrix, and Composite reports — choosing data sources, related business objects, filters, sub-filters, prompts, grouping, charting, and report security. Updated for Workday 2026R1 reporting framework changes.',
  techSnippet: 'Workday Advanced Reporting coverage: data sources, related business objects, filters, sub-filters, prompts, Matrix/Composite reports, security, and 2026R1 changes.',
  coverageTitle: 'Workday Advanced Reporting Situations We Help Resolve',
  coverage: [
    'Advanced report not returning expected rows — data source or filter issue',
    'Matrix report grouping or summarization not working',
    'Composite report combining multiple data sources incorrectly',
    'Prompt, sub-filter, or related-business-object configuration problem',
    'Report security or sharing not behaving as intended',
  ],
  faqTopics: 'data sources, filters, prompts, Matrix reports, and Composite reports',
  proxyIntro: 'Workday Advanced Reporting interviews test report-building depth and data-source knowledge. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday Advanced Reporting interview rounds',
    'Support explaining data sources, related business objects, and filters',
    'Coaching on Matrix and Composite report questions',
    'Coverage for 2026R1 reporting-framework questions',
    'Mock Workday Advanced Reporting interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [REP_LINK, CALC_LINK],
  extraLinks: [{ label: 'Workday BIRT reporting job support', href: '/workday-birt-reporting-job-support/' }, { label: 'Workday Reporting interview support', href: '/workday-reporting-interview-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Advanced Reporting Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday Advanced Reporting support — Advanced, Matrix, Composite reports, data sources, and filters. Contact us on WhatsApp now.',
});

export const workdayCalculatedFieldsJobSupport = workdayModulePage({
  slug: 'workday-calculated-fields-job-support', label: 'Workday Calculated Fields',
  title: 'Workday Calculated Fields Job Support — Logic, Functions & Troubleshooting',
  description: 'Real-time Workday calculated fields job support — calculated field types, functions, lookups, evaluate expressions, instance retrieval, and troubleshooting. Reporting, integrations, business processes. 2026R1 ready.',
  keywords: ['Workday calculated fields job support', 'Workday calculated field support', 'Workday calc field logic', 'Workday evaluate expression', 'Workday lookup related value', 'Workday calculated fields interview support'],
  heroEyebrow: 'Workday Calculated Fields Support — 2026R1',
  tagline: 'Live Workday calculated fields support — calculated field types, functions, lookups, evaluate expressions, instance retrieval, and troubleshooting.',
  painIntro: 'A Workday calculated field returning the wrong value or a blank? An evaluate-expression condition misfiring, a lookup-related-value returning nothing, or a date-calc off by a day? Our experts join your session and help you fix the logic.',
  heroVariant: 'We help build and debug Workday calculated fields — Extract Single/Multi Instance, Lookup Related Value, Evaluate Expression, Arithmetic, Date Calculation, Text/Format, and Aggregation — used across reports, integrations, business processes, and condition rules. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday calculated fields coverage: instance retrieval, lookup related value, evaluate expression, arithmetic, date calc, text/format, aggregation, and 2026R1 impact.',
  coverageTitle: 'Workday Calculated Fields Situations We Help Resolve',
  coverage: [
    'Calculated field returning the wrong value or a blank result',
    'Evaluate Expression condition logic not behaving as designed',
    'Lookup Related Value or instance-retrieval calc returning nothing',
    'Date calculation off, or text/format calc producing the wrong string',
    'Nesting and chaining calculated fields for reports, integrations, or business processes',
  ],
  faqTopics: 'calculated field types, functions, lookups, evaluate expressions, and instance retrieval',
  proxyIntro: 'Workday calculated-fields interviews test functional logic depth. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday calculated-fields and reporting interviews',
    'Support explaining calculated field types and function selection',
    'Coaching on evaluate-expression and lookup-related-value questions',
    'Coverage for 2026R1 reporting/integration-change questions',
    'Mock Workday calculated-fields interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [REP_LINK, ADVREP_LINK],
  extraLinks: [{ label: 'Workday Reporting Consultant job support', href: '/workday-reporting-consultant-job-support/' }, INT_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Calculated Fields Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday calculated fields support — logic, functions, lookups, and troubleshooting. Contact us on WhatsApp now.',
});

export const workdayBusinessProcessConfigurationSupport = workdayModulePage({
  slug: 'workday-business-process-configuration-support', label: 'Workday Business Process Configuration',
  title: 'Workday Business Process Configuration Support — BP Design, Steps & Security',
  description: 'Real-time Workday business process configuration support — BP definitions, steps, conditions, approvals, routing, notifications, and BP security. HCM, Financials, Payroll. 2026R1 ready. Same-day start.',
  keywords: ['Workday business process configuration support', 'Workday BP configuration', 'Workday business process support', 'Workday condition rules', 'Workday approval routing', 'Workday business process security'],
  heroEyebrow: 'Workday Business Process Support — 2026R1',
  tagline: 'Live Workday business process configuration support — BP definitions, steps, condition rules, approvals, routing, notifications, and business process security.',
  painIntro: 'A Workday business process not routing correctly? An approval step skipped, a condition rule not triggering, or a notification not firing? Our BP experts join your session and help you configure it right.',
  heroVariant: 'We help configure and debug Workday business processes — BP definitions, steps and step order, condition rules, approval and approval-chain steps, to-dos, checklists, notifications, routing restrictions, and business process security. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday BP coverage: definitions, steps, condition rules, approvals, routing, notifications, checklists, business process security, and 2026R1 impact.',
  coverageTitle: 'Workday Business Process Configuration Situations We Help Resolve',
  coverage: [
    'Business process not routing to the right approver or skipping a step',
    'Condition rule not triggering or evaluating incorrectly',
    'Approval chain, to-do, or checklist step misconfigured',
    'Notification or alert not firing on a business process event',
    'Business process security policy blocking an action',
  ],
  faqTopics: 'BP definitions, steps, condition rules, approvals, and business process security',
  proxyIntro: 'Workday business-process interviews test configuration depth and design judgment. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday business-process configuration interviews',
    'Support explaining BP step design, condition rules, and routing',
    'Coaching on approval-chain and business-process-security questions',
    'Coverage for 2026R1 release-impact questions',
    'Mock Workday business-process interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [HCM_LINK, SEC_LINK],
  extraLinks: [{ label: 'Workday Functional Consultant job support', href: '/workday-functional-consultant-job-support/' }, TENANT_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Business Process Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday business process configuration support — steps, conditions, approvals, routing, and security. Contact us on WhatsApp now.',
});

export const workdayDataConversionMigrationSupport = workdayModulePage({
  slug: 'workday-data-conversion-migration-support', label: 'Workday Data Conversion & Migration',
  title: 'Workday Data Conversion & Migration Support — iLoads, EIB & Validation',
  description: 'Real-time Workday data conversion and migration support — iLoads, EIB data loads, conversion templates, data mapping, validation, reconciliation, and legacy migration. 2026R1 ready. Same-day start.',
  keywords: ['Workday data conversion support', 'Workday data migration support', 'Workday iLoads support', 'Workday data load support', 'Workday conversion templates', 'Workday data validation support'],
  heroEyebrow: 'Workday Data Conversion Support — 2026R1',
  tagline: 'Live Workday data conversion and migration support — iLoads, EIB data loads, conversion templates, data mapping, validation, and reconciliation.',
  painIntro: 'A Workday data conversion load failing or loading bad data? An iLoad rejecting records, a conversion template mapping wrong, or post-load validation not reconciling? Our data-conversion experts join your session and help.',
  heroVariant: 'We help with Workday data conversion and migration — iLoads, EIB data loads, customer and Workday-delivered conversion templates, data mapping and cleansing, sequencing, validation, reconciliation, and legacy-to-Workday migration. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday data conversion coverage: iLoads, EIB loads, conversion templates, data mapping, cleansing, sequencing, validation, reconciliation, and 2026R1 impact.',
  coverageTitle: 'Workday Data Conversion & Migration Situations We Help Resolve',
  coverage: [
    'iLoad or EIB data load rejecting records or loading incorrect values',
    'Conversion template mapping, sequencing, or dependency issue',
    'Foundation, worker, or financial data conversion not validating',
    'Post-load reconciliation between legacy source and Workday',
    'Legacy-to-Workday migration cutover data strategy',
  ],
  faqTopics: 'iLoads, EIB loads, conversion templates, data mapping, and validation',
  proxyIntro: 'Workday data-conversion interviews test load-tooling and data-mapping depth. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday data-conversion and migration interviews',
    'Support explaining iLoads, EIB loads, and conversion-template sequencing',
    'Coaching on data mapping, validation, and reconciliation questions',
    'Coverage for 2026R1 release-impact questions',
    'Mock Workday data-conversion interviews calibrated to implementation formats',
  ],
  techLinks: [INT_LINK, IMPL_LINK],
  extraLinks: [EIB_LINK, { label: 'Workday testing & UAT support', href: '/workday-testing-uat-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Data Conversion Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday data conversion and migration support — iLoads, EIB loads, mapping, validation, and reconciliation. Contact us on WhatsApp now.',
});

export const workdayTestingUatSupport = workdayModulePage({
  slug: 'workday-testing-uat-support', label: 'Workday Testing & UAT',
  title: 'Workday Testing & UAT Support — Test Planning, Execution & Defect Triage',
  description: 'Real-time Workday testing and UAT support — test planning, scenario design, unit/SIT/UAT execution, defect triage, regression testing, and automation. 2026R1 regression ready. Same-day start.',
  keywords: ['Workday testing support', 'Workday UAT support', 'Workday test planning', 'Workday SIT support', 'Workday regression testing', 'Workday test automation support'],
  heroEyebrow: 'Workday Testing & UAT Support — 2026R1',
  tagline: 'Live Workday testing and UAT support — test planning, scenario design, unit/SIT/UAT execution, defect triage, regression testing, and automation.',
  painIntro: 'A Workday testing cycle slipping or a UAT defect backlog growing? Test scenarios incomplete, SIT failing, or 2026R1 regression overwhelming the team? Our testing experts join your session and help you get coverage and clear defects.',
  heroVariant: 'We help with Workday testing across unit, SIT, UAT, and regression — test planning, scenario and test-case design, execution coordination, defect triage and retest, and 2026R1 release regression testing. We also advise on Workday test automation. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday testing coverage: test planning, scenario/test-case design, unit/SIT/UAT execution, defect triage, regression testing, automation, and 2026R1 regression.',
  coverageTitle: 'Workday Testing & UAT Situations We Help Resolve',
  coverage: [
    'Test scenario and test-case design gaps across HCM, Financials, or Payroll',
    'SIT or UAT execution coordination and defect backlog management',
    'Defect triage, root-cause, and retest cycles under a deadline',
    'Workday 2026R1 release regression testing and impact validation',
    'Workday test automation strategy and tooling guidance',
  ],
  faqTopics: 'test planning, scenario design, SIT/UAT execution, defect triage, and regression testing',
  proxyIntro: 'Workday testing/UAT interviews test QA methodology and regression knowledge. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday testing and QA interview rounds',
    'Support explaining test planning, scenario design, and defect-triage approaches',
    'Coaching on SIT/UAT and regression-testing questions',
    'Coverage for 2026R1 regression-testing questions',
    'Mock Workday testing interviews calibrated to consulting and direct-client formats',
  ],
  techLinks: [TEST_LINK, R1_LINK],
  extraLinks: [{ label: 'Workday go-live & hypercare support', href: '/workday-go-live-hypercare-support/' }, PROD_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Testing & UAT Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday testing and UAT support — planning, execution, defect triage, and 2026R1 regression. Contact us on WhatsApp now.',
});

export const workdayGoLiveHypercareSupport = workdayModulePage({
  slug: 'workday-go-live-hypercare-support', label: 'Workday Go-Live & Hypercare',
  title: 'Workday Go-Live & Hypercare Support — Cutover, Stabilization & Daily Help',
  description: 'Real-time Workday go-live and hypercare support — cutover execution, go-live readiness, post-go-live stabilization, incident triage, and daily hypercare. HCM, Financials, Payroll. 2026R1 ready.',
  keywords: ['Workday go-live support', 'Workday hypercare support', 'Workday cutover support', 'Workday stabilization support', 'Workday post go-live support', 'Workday go-live readiness'],
  heroEyebrow: 'Workday Go-Live & Hypercare Support — 2026R1',
  tagline: 'Live Workday go-live and hypercare support — cutover execution, go-live readiness, post-go-live stabilization, incident triage, and daily hypercare.',
  painIntro: 'A Workday go-live approaching or a hypercare period overwhelming the team? Cutover steps slipping, first payroll after go-live at risk, or an incident queue building during hypercare? Our experts join your session and help you stabilize.',
  heroVariant: 'We provide Workday go-live and hypercare support — cutover planning and execution, go-live readiness checks, first-pay-run and first-close stabilization, incident triage and resolution, and daily hypercare coverage. HCM, Financials, Payroll, Integrations. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday go-live coverage: cutover planning/execution, readiness checks, first pay-run/close stabilization, incident triage, daily hypercare, and 2026R1 impact.',
  coverageTitle: 'Workday Go-Live & Hypercare Situations We Help Resolve',
  coverage: [
    'Cutover plan execution slipping in the final days before go-live',
    'First payroll run or first period close after go-live at risk',
    'Incident queue building during the hypercare window',
    'Integration or business process failures surfacing post-go-live',
    'Go-live readiness gaps and stabilization planning',
  ],
  faqTopics: 'cutover, go-live readiness, post-go-live stabilization, and hypercare',
  proxyIntro: 'Workday go-live/hypercare interviews test delivery and stabilization experience. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during Workday go-live and hypercare scenario interviews',
    'Support explaining cutover planning, readiness, and stabilization approaches',
    'Coaching on hypercare incident-management questions',
    'Coverage for 2026R1 release-impact questions',
    'Mock Workday go-live interviews calibrated to implementation formats',
  ],
  techLinks: [PROD_LINK, TEST_LINK],
  extraLinks: [IMPL_LINK, R1_LINK],
  bottomCTAHeading: 'Need Real-Time Workday Go-Live & Hypercare Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday go-live and hypercare support — cutover, stabilization, incident triage, and daily coverage. Contact us on WhatsApp now.',
});

export const workdayClientCallStandupSupport = workdayModulePage({
  slug: 'workday-client-call-standup-support', label: 'Workday Client Call & Standup',
  title: 'Workday Client Call & Standup Support — Meeting, Demo & Daily Task Help',
  description: 'Real-time Workday client call and standup support — meeting preparation, live call backup, demo support, daily standup updates, and task delivery. Discreet expert backup during your working hours. 2026R1 ready.',
  keywords: ['Workday client call support', 'Workday standup support', 'Workday meeting support', 'Workday demo support', 'Workday daily task support', 'Workday office hours support'],
  heroEyebrow: 'Workday Client Call & Standup Support — 2026R1',
  tagline: 'Live Workday client call and standup support — meeting preparation, live call backup, demo support, daily standup updates, and task delivery.',
  painIntro: 'A Workday client call or demo you are not fully confident about? A daily standup where you need the right status and next steps, or a configuration demo to a client tomorrow? Our experts prepare you and provide discreet real-time backup.',
  heroVariant: 'We provide discreet Workday client-call and standup support — preparing talking points and status updates, backing you up live during client calls and configuration demos, helping you answer technical questions in the moment, and helping you plan and deliver daily tasks. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday client-call coverage: meeting prep, live call backup, configuration demos, standup status/next steps, daily task planning, and 2026R1 talking points.',
  coverageTitle: 'Workday Client Call & Standup Situations We Help With',
  coverage: [
    'Preparing status, blockers, and next steps for a daily standup',
    'Live discreet backup during a client call or status meeting',
    'Walking a client through a Workday configuration demo',
    'Answering unexpected technical or functional questions during a call',
    'Planning and prioritizing daily Workday tasks to hit commitments',
  ],
  faqTopics: 'meeting preparation, live call backup, configuration demos, and daily standup updates',
  proxyIntro: 'Client-facing Workday interviews and presentations test communication and configuration confidence. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during client-facing Workday interview and presentation rounds',
    'Support structuring status updates and demo walkthroughs',
    'Coaching on answering live technical and functional questions',
    'Coverage for 2026R1 talking points in client conversations',
    'Mock client-call and demo rehearsals calibrated to your project',
  ],
  techLinks: [PROD_LINK, { label: 'Workday Functional Consultant job support', href: '/workday-functional-consultant-job-support/' }],
  extraLinks: [{ label: 'Client call & standup support guide', href: '/client-call-and-standup-support-guide/' }, { label: 'Workday project onboarding support', href: '/workday-project-onboarding-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Client Call Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday client call and standup support — meeting prep, live backup, demos, and daily task delivery. Contact us on WhatsApp now.',
});

export const workdayProjectOnboardingSupport = workdayModulePage({
  slug: 'workday-project-onboarding-support', label: 'Workday Project Onboarding',
  title: 'Workday Project Onboarding Support — Ramp-Up, Tenant Orientation & First Tasks',
  description: 'Real-time Workday project onboarding support — fast ramp-up on a new Workday project, tenant orientation, tooling setup, first-task delivery, and module orientation. HCM, Financials, Payroll. 2026R1 ready.',
  keywords: ['Workday project onboarding support', 'Workday onboarding help', 'Workday ramp-up support', 'Workday new project support', 'Workday tenant orientation', 'Workday first task support'],
  heroEyebrow: 'Workday Project Onboarding Support — 2026R1',
  tagline: 'Live Workday project onboarding support — fast ramp-up on a new project, tenant orientation, tooling setup, first-task delivery, and module orientation.',
  painIntro: 'Just started a new Workday project and need to ramp up fast? Unfamiliar tenant, new tooling, and first deliverables due before you have your bearings? Our experts join your session and help you onboard and deliver from day one.',
  heroVariant: 'We help you onboard onto a new Workday project — orienting you in the tenant and configuration, setting up tools and access, understanding the implementation methodology and team processes, and delivering your first tasks confidently across HCM, Financials, Payroll, or Integrations. Updated for Workday 2026R1 release impact.',
  techSnippet: 'Workday onboarding coverage: tenant orientation, tooling/access setup, methodology orientation, module ramp-up, first-task delivery, and 2026R1 context.',
  coverageTitle: 'Workday Project Onboarding Situations We Help With',
  coverage: [
    'Ramping up quickly on an unfamiliar Workday tenant and configuration',
    'Setting up tools, access, and understanding team processes',
    'Orientation to the implementation methodology and project phase',
    'Delivering your first configuration, report, or integration task',
    'Module ramp-up across HCM, Financials, Payroll, or Integrations',
  ],
  faqTopics: 'tenant orientation, tooling setup, methodology orientation, and first-task delivery',
  proxyIntro: 'New-project Workday interviews and onboarding assessments test breadth and adaptability. Our experts provide real-time, discreet guidance.',
  proxyPoints: [
    'Real-time guidance during onboarding assessments and early project reviews',
    'Support orienting to a new tenant, methodology, and toolset',
    'Coaching on first-task delivery and team-process questions',
    'Coverage for 2026R1 context relevant to your new project',
    'Mock onboarding and ramp-up sessions calibrated to your role',
  ],
  techLinks: [IMPL_LINK, { label: 'Workday Functional Consultant job support', href: '/workday-functional-consultant-job-support/' }],
  extraLinks: [{ label: 'Project onboarding help (Ireland)', href: '/project-onboarding-help-ireland/' }, { label: 'Workday client call & standup support', href: '/workday-client-call-standup-support/' }],
  bottomCTAHeading: 'Need Real-Time Workday Onboarding Support? Get Expert Help Now',
  bottomCTABody: 'Same-day Workday project onboarding support — tenant orientation, tooling, methodology, and first-task delivery. Contact us on WhatsApp now.',
});

// ═══════════════════════════════════════════════════════════════════════════
// WORKDAY INTERVIEW-FOCUSED TECHNICAL PAGES (Phase 11) — factory
// ═══════════════════════════════════════════════════════════════════════════

interface WorkdayInterviewOpts {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  heroEyebrow: string;
  tagline: string;
  painIntro: string;
  heroVariant: string;
  scenariosTitle: string;
  scenarios: string[];
  prepTitle: string;
  prepIntro: string;
  prepPoints: string[];
  faqContext: string;
  moduleLink: LandingRelatedLink;
  extraLinks?: LandingRelatedLink[];
  bottomCTAHeading: string;
  bottomCTABody: string;
}

function workdayInterviewSupportPage(o: WorkdayInterviewOpts): LandingPageConfig {
  const self = `/${o.slug}/`;
  const notSelf = (l: LandingRelatedLink) => l.href !== self;
  return {
    slug: o.slug,
    title: o.title,
    description: o.description,
    canonical: `${BASE_URL}/${o.slug}/`,
    keywords: o.keywords,
    h1: o.title,
    tagline: o.tagline,
    heroEyebrow: o.heroEyebrow,
    painIntro: o.painIntro,
    heroVariant: o.heroVariant,
    geoLine: 'Supporting Workday interview candidates across USA, Canada, UK, Europe, Ireland, Australia, New Zealand, Singapore, UAE, Saudi Arabia, and worldwide.',
    timezoneNote: 'Available across all time zones for live Workday interview support.',
    highlights: workdayHighlights,
    faqs: workdayProxyFaqs(o.faqContext),
    useCasesSection: { title: o.scenariosTitle, cases: o.scenarios },
    proxySection: { title: o.prepTitle, intro: o.prepIntro, points: o.prepPoints },
    bottomCTAHeading: o.bottomCTAHeading,
    bottomCTABody: o.bottomCTABody,
    relatedLinks: {
      geoLinks: [
        { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
        { label: 'Workday proxy interview USA', href: '/workday-proxy-interview-usa/' },
      ].filter(notSelf),
      techLinks: [
        o.moduleLink,
        { label: 'Workday job support hub', href: '/workday-job-support/' },
      ].filter(notSelf),
      problemLink: { label: 'Failed an interview?', href: '/failed-interview-help/' },
      proxyLink: { label: 'Get Workday interviews scheduled', href: '/workday-interview-scheduled/' },
      blogLink: { label: 'Read developer support articles', href: '/blog/' },
      additionalLinks: [
        ...(o.extraLinks ?? []),
        { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' },
      ].filter(notSelf),
    },
    lastmod: LASTMOD,
  };
}

// ─── Phase 11: Interview-focused technical pages ─────────────────────────────

export const workdayHcmInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-hcm-interview-support',
  title: 'Workday HCM Interview Support — Live Guidance for HCM Consultant Rounds',
  description: 'Real-time Workday HCM interview support — live guidance for Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, and Skills Cloud interview rounds. Scenario and configuration questions. All time zones.',
  keywords: ['Workday HCM interview support', 'Workday HCM proxy interview', 'Workday HCM consultant interview', 'Workday Core HR interview', 'Workday compensation interview', 'Workday benefits interview'],
  heroEyebrow: 'Workday HCM Interview Support',
  tagline: 'Live, discreet Workday HCM interview support — Core HR, Staffing, Compensation, Benefits, Absence, Time Tracking, Talent, and Skills Cloud rounds.',
  painIntro: 'Workday HCM consultant interview scheduled and unsure about scenario or configuration questions? Business process design, eligibility rules, or Skills Cloud topics likely to come up? Our HCM experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday HCM interview support covering Core HR, Staffing, Job/Position Management, Compensation, Benefits, Absence, Time Tracking, Talent, and Skills Cloud — including business process design, eligibility/condition rules, and 2026R1 HCM AI workflow questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday HCM Interview Scenarios We Help Navigate',
  scenarios: [
    'Business process design and condition-rule scenario questions',
    'Compensation grid, plan, and eligibility configuration questions',
    'Benefits open-enrollment and eligibility-rule scenarios',
    'Absence accrual and Time Tracking calculation questions',
    'Talent, Skills Cloud, and 2026R1 HCM AI workflow questions',
  ],
  prepTitle: 'How Our Workday HCM Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time HCM guidance throughout — from functional panels to configuration walkthroughs.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign an HCM expert',
    'Pre-interview brief on likely HCM scenario and configuration topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 HCM AI workflow questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday HCM',
  moduleLink: HCM_LINK,
  extraLinks: [{ label: 'Workday HCM Consultant job support', href: '/workday-hcm-consultant-job-support/' }],
  bottomCTAHeading: 'Workday HCM Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday HCM interview support — Core HR, Compensation, Benefits, Absence, and Skills Cloud. Contact us on WhatsApp now.',
});

export const workdayIntegrationInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-integration-interview-support',
  title: 'Workday Integration Interview Support — Live Guidance for Integration Rounds',
  description: 'Real-time Workday integration interview support — live guidance for EIB, Studio, Core Connector, PECI, web services, and integration architecture rounds. Technical and scenario questions. All time zones.',
  keywords: ['Workday integration interview support', 'Workday integration proxy interview', 'Workday EIB interview', 'Workday Studio interview', 'Workday Core Connector interview', 'Workday PECI interview'],
  heroEyebrow: 'Workday Integration Interview Support',
  tagline: 'Live, discreet Workday integration interview support — EIB, Studio, Core Connector, PECI/PICOF, REST/SOAP, RaaS, and integration architecture rounds.',
  painIntro: 'Workday integration interview scheduled and unsure about architecture or hands-on questions? Studio assemblies, Core Connector mapping, or PECI change detection likely to come up? Our integration experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday integration interview support covering EIB, Studio, Core Connectors, PECI/PICOF, REST/SOAP web services, RaaS, error handling, and integration security — including architecture trade-offs and 2026R1 API-change questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Integration Interview Scenarios We Help Navigate',
  scenarios: [
    'EIB inbound/outbound and XSLT transformation questions',
    'Studio assembly, orchestration, and web service call questions',
    'Core Connector template, field mapping, and integration-attribute questions',
    'PECI/PICOF change detection and payroll-vendor delivery questions',
    'Integration security, error handling, and 2026R1 API-change questions',
  ],
  prepTitle: 'How Our Workday Integration Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time integration guidance throughout — from technical panels to architecture reviews.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign an integration expert',
    'Pre-interview brief on likely integration architecture and hands-on topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 API and integration-change questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday integration',
  moduleLink: INT_LINK,
  extraLinks: [{ label: 'Workday Integration Consultant job support', href: '/workday-integration-consultant-job-support/' }, STUDIO_LINK],
  bottomCTAHeading: 'Workday Integration Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday integration interview support — EIB, Studio, Core Connector, PECI, and web services. Contact us on WhatsApp now.',
});

export const workdayFinancialsInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-financials-interview-support',
  title: 'Workday Financials Interview Support — Live Guidance for Finance Rounds',
  description: 'Real-time Workday Financials interview support — live guidance for GL, AP, AR, Procurement, Projects, Banking, and period close interview rounds. Configuration and accounting scenario questions. All time zones.',
  keywords: ['Workday Financials interview support', 'Workday finance proxy interview', 'Workday GL interview', 'Workday Procurement interview', 'Workday financials consultant interview', 'Workday accounting interview'],
  heroEyebrow: 'Workday Financials Interview Support',
  tagline: 'Live, discreet Workday Financials interview support — GL, AP, AR, Procurement, Projects, Banking, and period close rounds.',
  painIntro: 'Workday Financials interview scheduled and unsure about configuration or accounting questions? Account posting rules, allocations, or close-cycle design likely to come up? Our Financials experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Financials interview support covering the General Ledger, Accounting, AP, AR, Procurement, Projects, Banking, and period close — including account posting rules, allocations, intercompany, and 2026R1 Finance automation questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Financials Interview Scenarios We Help Navigate',
  scenarios: [
    'Account posting rules, ledger account, and allocation questions',
    'AP supplier invoice, payment, and settlement scenario questions',
    'AR billing, customer invoice, and revenue questions',
    'Procurement and Projects costing/capitalization questions',
    'Period close, intercompany, and 2026R1 Finance automation questions',
  ],
  prepTitle: 'How Our Workday Financials Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time Financials guidance throughout — from functional panels to configuration walkthroughs.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a Financials expert',
    'Pre-interview brief on likely Financials configuration and accounting topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 Finance automation questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday Financials',
  moduleLink: FIN_LINK,
  extraLinks: [{ label: 'Workday Financials Consultant job support', href: '/workday-financials-consultant-job-support/' }],
  bottomCTAHeading: 'Workday Financials Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Financials interview support — GL, AP, AR, Procurement, Projects, and period close. Contact us on WhatsApp now.',
});

export const workdayPayrollInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-payroll-interview-support',
  title: 'Workday Payroll Interview Support — Live Guidance for Payroll Rounds',
  description: 'Real-time Workday Payroll interview support — live guidance for pay calculations, earnings/deductions, taxes, off-cycle, garnishments, and year-end interview rounds. USA, Canada, UK payroll. All time zones.',
  keywords: ['Workday Payroll interview support', 'Workday payroll proxy interview', 'Workday payroll calculation interview', 'Workday payroll consultant interview', 'Workday year-end interview', 'Workday payroll compliance interview'],
  heroEyebrow: 'Workday Payroll Interview Support',
  tagline: 'Live, discreet Workday Payroll interview support — pay calculations, earnings/deductions, taxes, off-cycle, garnishments, and year-end rounds.',
  painIntro: 'Workday Payroll interview scheduled and unsure about calculation logic or compliance questions? Run categories, earnings/deductions, or year-end processing likely to come up? Our Payroll experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Payroll interview support covering pay calculation rules, earnings and deductions, run categories, taxes, off-cycle and retro processing, garnishments, and year-end (W-2/T4/P60) — including USA, Canada, and UK payroll compliance and 2026R1 changes. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Payroll Interview Scenarios We Help Navigate',
  scenarios: [
    'Pay calculation rule, run category, and earnings/deduction questions',
    'Tax setup, garnishment, and retro-processing questions',
    'Off-cycle and on-demand payment scenario questions',
    'Year-end (W-2/T4/P60) and compliance questions',
    'Country-specific payroll (USA, Canada T4/ROE, UK PAYE/RTI) questions',
  ],
  prepTitle: 'How Our Workday Payroll Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time Payroll guidance throughout — from calculation logic to compliance discussions.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a Payroll expert',
    'Pre-interview brief on likely Payroll calculation and compliance topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 payroll compliance questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday Payroll',
  moduleLink: PAY_LINK,
  extraLinks: [{ label: 'Workday Payroll Consultant job support', href: '/workday-payroll-consultant-job-support/' }],
  bottomCTAHeading: 'Workday Payroll Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Payroll interview support — calculations, taxes, off-cycle, garnishments, and year-end. Contact us on WhatsApp now.',
});

export const workdaySecurityInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-security-interview-support',
  title: 'Workday Security Interview Support — Live Guidance for Security Rounds',
  description: 'Real-time Workday Security interview support — live guidance for domain security, role-based security, business process security, segregation of duties, and audit interview rounds. All time zones.',
  keywords: ['Workday Security interview support', 'Workday security proxy interview', 'Workday domain security interview', 'Workday role-based security interview', 'Workday security consultant interview', 'Workday segregation of duties interview'],
  heroEyebrow: 'Workday Security Interview Support',
  tagline: 'Live, discreet Workday Security interview support — domain security, role-based security, business process security, segregation of duties, and audit rounds.',
  painIntro: 'Workday Security interview scheduled and unsure about the security model questions? Domain vs. business process security, role-based design, or segregation of duties likely to come up? Our Security experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Security interview support covering domain security policies, role-based and user-based security, business process security, integration security, segregation of duties, and audit/compliance — including 2026R1 Security framework questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Security Interview Scenarios We Help Navigate',
  scenarios: [
    'Domain security policy vs. business process security questions',
    'Role-based vs. user-based security assignment design questions',
    'Integration system security (ISU/ISSG) questions',
    'Segregation-of-duties and audit/compliance scenario questions',
    'Security configuration migration and 2026R1 Security framework questions',
  ],
  prepTitle: 'How Our Workday Security Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time Security guidance throughout — from model-design panels to scenario discussions.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a Security expert',
    'Pre-interview brief on likely Security model and audit topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 Security framework questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday Security',
  moduleLink: SEC_LINK,
  extraLinks: [{ label: 'Workday Security Consultant job support', href: '/workday-security-consultant-job-support/' }],
  bottomCTAHeading: 'Workday Security Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Security interview support — domains, roles, business process security, and segregation of duties. Contact us on WhatsApp now.',
});

export const workdayReportingInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-reporting-interview-support',
  title: 'Workday Reporting Interview Support — Live Guidance for Reporting Rounds',
  description: 'Real-time Workday Reporting interview support — live guidance for Advanced, Matrix, Composite reports, calculated fields, BIRT, and Prism Analytics interview rounds. All time zones.',
  keywords: ['Workday Reporting interview support', 'Workday reporting proxy interview', 'Workday advanced reporting interview', 'Workday calculated fields interview', 'Workday Prism interview', 'Workday reporting consultant interview'],
  heroEyebrow: 'Workday Reporting Interview Support',
  tagline: 'Live, discreet Workday Reporting interview support — Advanced, Matrix, Composite reports, calculated fields, BIRT, and Prism Analytics rounds.',
  painIntro: 'Workday Reporting interview scheduled and unsure about report-building or calculated-field questions? Data sources, Matrix/Composite reports, or Prism likely to come up? Our Reporting experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Reporting interview support covering Advanced, Matrix, and Composite reports, calculated fields, BIRT layouts, Prism Analytics, Data Cloud, and report security — including 2026R1 reporting-framework questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Reporting Interview Scenarios We Help Navigate',
  scenarios: [
    'Report type selection, data source, and related-business-object questions',
    'Calculated field type and function-selection questions',
    'Matrix and Composite report design questions',
    'BIRT layout and Prism Analytics questions',
    'Report security, performance, and 2026R1 reporting-framework questions',
  ],
  prepTitle: 'How Our Workday Reporting Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time Reporting guidance throughout — from report-building panels to scenario discussions.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a Reporting expert',
    'Pre-interview brief on likely report-building and calculated-field topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 reporting-framework questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday Reporting',
  moduleLink: REP_LINK,
  extraLinks: [{ label: 'Workday Reporting Consultant job support', href: '/workday-reporting-consultant-job-support/' }],
  bottomCTAHeading: 'Workday Reporting Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Reporting interview support — Advanced, Matrix, Composite reports, calculated fields, and Prism. Contact us on WhatsApp now.',
});

export const workdayBusinessAnalystInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-business-analyst-interview-support',
  title: 'Workday Business Analyst Interview Support — Live Guidance for BA Rounds',
  description: 'Real-time Workday Business Analyst interview support — live guidance for requirements, business process design, fit-gap analysis, and functional specification interview rounds. All time zones.',
  keywords: ['Workday Business Analyst interview support', 'Workday BA proxy interview', 'Workday business analyst interview', 'Workday requirements interview', 'Workday fit-gap interview', 'Workday BA scenario interview'],
  heroEyebrow: 'Workday BA Interview Support',
  tagline: 'Live, discreet Workday Business Analyst interview support — requirements, business process design, fit-gap analysis, and functional-spec rounds.',
  painIntro: 'Workday BA interview scheduled and unsure about functional or process-design questions? Requirements-to-configuration translation, fit-gap, or UAT coordination likely to come up? Our BA experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Business Analyst interview support covering requirements gathering, business process design, fit-gap analysis, functional specifications, and UAT coordination — across HCM, Financials, and Payroll, including 2026R1 release-impact questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday BA Interview Scenarios We Help Navigate',
  scenarios: [
    'Requirements-gathering and stakeholder-workshop scenario questions',
    'Business process design and fit-gap analysis questions',
    'Requirements-to-configuration translation questions',
    'Functional specification and UAT-coordination questions',
    'Cross-module (HCM/Financials/Payroll) and 2026R1 impact questions',
  ],
  prepTitle: 'How Our Workday BA Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time BA guidance throughout — from functional panels to scenario discussions.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a BA expert',
    'Pre-interview brief on likely BA functional and process-design topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 release-impact questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday Business Analyst',
  moduleLink: { label: 'Workday Business Analyst job support', href: '/workday-business-analyst-job-support/' },
  extraLinks: [{ label: 'Workday business process configuration support', href: '/workday-business-process-configuration-support/' }],
  bottomCTAHeading: 'Workday BA Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Business Analyst interview support — requirements, business process design, fit-gap, and functional specs. Contact us on WhatsApp now.',
});

export const workdayFunctionalConsultantInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-functional-consultant-interview-support',
  title: 'Workday Functional Consultant Interview Support — Live Configuration Guidance',
  description: 'Real-time Workday Functional Consultant interview support — live guidance for HCM, Financials, and Payroll configuration, business process, and scenario interview rounds. All time zones.',
  keywords: ['Workday Functional Consultant interview support', 'Workday functional proxy interview', 'Workday functional consultant interview', 'Workday configuration interview', 'Workday HCM functional interview', 'Workday scenario interview'],
  heroEyebrow: 'Workday Functional Consultant Interview Support',
  tagline: 'Live, discreet Workday Functional Consultant interview support — HCM, Financials, and Payroll configuration and scenario rounds.',
  painIntro: 'Workday functional interview scheduled and unsure about configuration depth or scenario questions? Business processes, condition rules, or module setup likely to come up? Our functional experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Functional Consultant interview support across Core HR, Compensation, Benefits, Absence, Time Tracking, Financials, and Payroll — business process configuration, condition rules, security, calculated fields, and 2026R1 release-impact questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Functional Interview Scenarios We Help Navigate',
  scenarios: [
    'Business process and condition-rule configuration scenario questions',
    'Module configuration questions across HCM, Financials, and Payroll',
    'Security and calculated-field configuration questions',
    'Real-world implementation and tenant-design walkthroughs',
    'Cross-module integration touchpoints and 2026R1 impact questions',
  ],
  prepTitle: 'How Our Workday Functional Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time functional guidance throughout — from configuration panels to scenario discussions.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a functional expert',
    'Pre-interview brief on likely configuration and scenario topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 release-impact questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday functional consultant',
  moduleLink: { label: 'Workday Functional Consultant job support', href: '/workday-functional-consultant-job-support/' },
  extraLinks: [HCM_LINK, { label: 'Workday HCM interview support', href: '/workday-hcm-interview-support/' }],
  bottomCTAHeading: 'Workday Functional Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Functional Consultant interview support — configuration, business processes, security, and scenarios. Contact us on WhatsApp now.',
});

export const workdayTechnicalConsultantInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-technical-consultant-interview-support',
  title: 'Workday Technical Consultant Interview Support — Live Integration & Reporting Guidance',
  description: 'Real-time Workday Technical Consultant interview support — live guidance for integrations (EIB, Studio, Core Connector, PECI), reporting, calculated fields, and Workday Extend interview rounds. All time zones.',
  keywords: ['Workday Technical Consultant interview support', 'Workday technical proxy interview', 'Workday technical consultant interview', 'Workday integration developer interview', 'Workday Extend interview', 'Workday RaaS interview'],
  heroEyebrow: 'Workday Technical Consultant Interview Support',
  tagline: 'Live, discreet Workday Technical Consultant interview support — integrations, reporting, calculated fields, and Workday Extend rounds.',
  painIntro: 'Workday technical interview scheduled and unsure about integration or development questions? Studio assemblies, calculated fields, or Workday Extend likely to come up? Our technical experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday Technical Consultant interview support covering EIB, Studio, Core Connector, PECI, REST/SOAP web services, RaaS, calculated fields, advanced/BIRT reporting, and Workday Extend — including architecture trade-offs and 2026R1 API-change questions. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Technical Interview Scenarios We Help Navigate',
  scenarios: [
    'EIB, Studio, and Core Connector technical and architecture questions',
    'PECI and web service (REST/SOAP, RaaS) questions',
    'Complex calculated field and advanced/BIRT reporting questions',
    'Workday Extend app and orchestration questions',
    'Integration security, error handling, and 2026R1 API-change questions',
  ],
  prepTitle: 'How Our Workday Technical Interview Support Works',
  prepIntro: 'We align to your interview format and provide real-time technical guidance throughout — from coding/configuration panels to architecture reviews.',
  prepPoints: [
    'Share the employer, role, and interview format via WhatsApp — we assign a technical expert',
    'Pre-interview brief on likely integration, reporting, and Extend topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 API and release-change questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday technical consultant',
  moduleLink: { label: 'Workday Technical Consultant job support', href: '/workday-technical-consultant-job-support/' },
  extraLinks: [{ label: 'Workday integration interview support', href: '/workday-integration-interview-support/' }, STUDIO_LINK],
  bottomCTAHeading: 'Workday Technical Interview Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday Technical Consultant interview support — integrations, reporting, calculated fields, and Workday Extend. Contact us on WhatsApp now.',
});

export const workdayFinalRoundInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-final-round-interview-support',
  title: 'Workday Final Round Interview Support — Live Guidance for Final Workday Interviews',
  description: 'Real-time Workday final round interview support — live guidance for final-stage technical, functional, and client-facing Workday interview rounds. HCM, Integration, Financials, Payroll, Reporting, Security. All time zones.',
  keywords: ['Workday final round interview support', 'Workday final interview proxy', 'Workday final round proxy interview', 'Workday final stage interview', 'Workday client final round', 'Workday final technical interview'],
  heroEyebrow: 'Workday Final Round Interview Support',
  tagline: 'Live, discreet Workday final round interview support — final-stage technical, functional, and client-facing rounds across all Workday modules.',
  painIntro: 'Workday final round coming up and need to perform at your best? A panel, a client-facing discussion, or a deep-dive on your strongest module — the final round decides the offer. Our experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday final round interview support across HCM, Integration, Financials, Payroll, Reporting, and Security — calibrated to the depth and client-facing nature of final-stage rounds, including scenario walkthroughs and 2026R1 topics. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Final Round Scenarios We Help Navigate',
  scenarios: [
    'Final-stage technical deep-dive on your strongest Workday module',
    'Client-facing or hiring-manager final discussion',
    'Scenario and tenant-design walkthrough questions',
    'Behavioral and project-experience questions tied to Workday delivery',
    'Cross-module and 2026R1 release-impact questions',
  ],
  prepTitle: 'How Our Workday Final Round Support Works',
  prepIntro: 'We align to your final-round format and provide real-time guidance throughout — from deep-dives to client-facing discussions.',
  prepPoints: [
    'Share the employer, role, and final-round format via WhatsApp — we assign the right module expert',
    'Pre-interview brief on likely final-round topics and your background alignment',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 release-impact questions',
    'Post-interview debrief and offer-stage preparation',
  ],
  faqContext: 'Workday final round',
  moduleLink: { label: 'Workday proxy interview support', href: '/workday-proxy-interview-support/' },
  extraLinks: [{ label: 'Final round interview support guide', href: '/final-round-interview-support-guide/' }],
  bottomCTAHeading: 'Workday Final Round Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday final round interview support — technical deep-dives, client-facing discussions, and scenario walkthroughs. Contact us on WhatsApp now.',
});

export const workdayLiveTechnicalInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-live-technical-interview-support',
  title: 'Workday Live Technical Interview Support — Real-Time Guidance During Live Rounds',
  description: 'Real-time Workday live technical interview support — discreet expert guidance during live configuration, integration, and reporting Workday interview rounds. Audio or chat. All time zones.',
  keywords: ['Workday live technical interview support', 'Workday live interview proxy', 'Workday live technical proxy interview', 'Workday live configuration interview', 'Workday real-time interview support', 'Workday live coding interview'],
  heroEyebrow: 'Workday Live Technical Interview Support',
  tagline: 'Discreet real-time Workday support during live technical rounds — configuration, integration, and reporting walkthroughs while you interview.',
  painIntro: 'Facing a live Workday technical round where you have to configure or explain in real time? A live tenant walkthrough, an integration design on the spot, or a reporting exercise? Our experts provide discreet real-time guidance as it happens.',
  heroVariant: 'We provide real-time Workday support during live technical interviews — live configuration walkthroughs, integration design discussions, calculated-field and reporting exercises, and scenario questions — with discreet audio or chat guidance calibrated to the live format. Updated for 2026R1 topics.',
  scenariosTitle: 'Workday Live Technical Interview Scenarios We Help Navigate',
  scenarios: [
    'Live tenant configuration walkthrough during the interview',
    'On-the-spot integration design or troubleshooting discussion',
    'Live calculated-field or reporting exercise',
    'Real-time scenario and tenant-design questions',
    'Live 2026R1 release-impact discussion',
  ],
  prepTitle: 'How Our Workday Live Technical Support Works',
  prepIntro: 'We calibrate to your live-interview format and provide discreet real-time guidance throughout — keeping pace with live exercises.',
  prepPoints: [
    'Share the employer, role, and live-interview format via WhatsApp — we assign the right expert',
    'Pre-interview brief on likely live exercises and topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 release-impact discussion',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday live technical',
  moduleLink: { label: 'Workday Technical Consultant job support', href: '/workday-technical-consultant-job-support/' },
  extraLinks: [{ label: 'How live technical interview support works', href: '/how-live-technical-interview-support-works/' }],
  bottomCTAHeading: 'Live Workday Technical Round Coming Up? Get Real-Time Guidance Now',
  bottomCTABody: 'Discreet real-time Workday support during live technical interviews — configuration, integration, and reporting. Contact us on WhatsApp now.',
});

export const workdayClientRoundInterviewSupport = workdayInterviewSupportPage({
  slug: 'workday-client-round-interview-support',
  title: 'Workday Client Round Interview Support — Live Guidance for Client-Facing Rounds',
  description: 'Real-time Workday client round interview support — live guidance for client-facing Workday consultant interview rounds at Big 4, boutique partners, and direct enterprise clients. All time zones.',
  keywords: ['Workday client round interview support', 'Workday client interview proxy', 'Workday client-facing interview', 'Workday consulting client round', 'Workday client interview support', 'Workday partner interview support'],
  heroEyebrow: 'Workday Client Round Interview Support',
  tagline: 'Live, discreet Workday client round interview support — client-facing consultant rounds at Big 4, boutique Workday partners, and direct enterprise clients.',
  painIntro: 'A Workday client round where you have to impress the end client, not just the panel? Client-facing communication, configuration confidence, and the right consulting presence all matter. Our experts join your session and guide you live.',
  heroVariant: 'We provide real-time Workday client round interview support — client-facing communication, configuration walkthroughs, scenario discussions, and consulting presence for Big 4, boutique Workday partner, and direct enterprise client rounds across all modules, including 2026R1 topics. Discreet audio or chat guidance.',
  scenariosTitle: 'Workday Client Round Scenarios We Help Navigate',
  scenarios: [
    'Client-facing communication and consulting-presence questions',
    'Configuration walkthrough and tenant-design discussion with the client',
    'Scenario and requirements-clarification questions from the client',
    'Module deep-dive aligned to the client’s Workday landscape',
    'Cross-module and 2026R1 release-impact questions',
  ],
  prepTitle: 'How Our Workday Client Round Support Works',
  prepIntro: 'We align to the client-round format and provide real-time guidance throughout — balancing technical depth and client-facing presence.',
  prepPoints: [
    'Share the employer/client, role, and round format via WhatsApp — we assign the right expert',
    'Pre-interview brief on the client’s landscape and likely topics',
    'Expert joins your live interview and provides discreet real-time guidance',
    'Coverage for 2026R1 release-impact questions',
    'Post-interview debrief and next-round preparation',
  ],
  faqContext: 'Workday client round',
  moduleLink: { label: 'Workday Functional Consultant job support', href: '/workday-functional-consultant-job-support/' },
  extraLinks: [{ label: 'Workday client call & standup support', href: '/workday-client-call-standup-support/' }],
  bottomCTAHeading: 'Workday Client Round Coming Up? Get Live Expert Guidance Now',
  bottomCTABody: 'Real-time Workday client round interview support — client-facing communication, configuration walkthroughs, and scenarios. Contact us on WhatsApp now.',
});

export const allWorkdayPages = [
  // Core hub + service pages
  workdayJobSupport,
  workdayProxyInterviewSupport,
  workdayInterviewScheduled,
  // HRIS pages
  workdayHrisJobSupport,
  workdayHrisProxyInterviewSupport,
  // Module pages
  workdayHcmJobSupport,
  workdayFinancialManagementJobSupport,
  workdayPayrollJobSupport,
  workdayAdaptivePlanningJobSupport,
  workdayIntegrationJobSupport,
  workdayReportingAnalyticsJobSupport,
  workdaySecurityJobSupport,
  workdayRecruitingJobSupport,
  workdayTestingReleaseSupport,
  workday2026r1ReleaseSupport,
  // USA pages
  workdayJobSupportUSA,
  workdayProxyInterviewUSA,
  workdayInterviewScheduledUSA,
  // Canada pages
  workdayJobSupportCanada,
  workdayProxyInterviewCanada,
  workdayInterviewScheduledCanada,
  // UK pages
  workdayJobSupportUK,
  workdayProxyInterviewUK,
  workdayInterviewScheduledUK,
  // Europe pages
  workdayJobSupportEurope,
  workdayProxyInterviewEurope,
  workdayInterviewScheduledEurope,
  // Country-specific pages
  workdayJobSupportIreland,
  workdayJobSupportGermany,
  workdayJobSupportNetherlands,
  workdayJobSupportFrance,
  workdayJobSupportSweden,
  workdayJobSupportSwitzerland,
  workdayJobSupportAustralia,
  workdayJobSupportNewZealand,
  workdayJobSupportSingapore,
  workdayJobSupportUAE,
  workdayJobSupportSaudiArabia,
  // ── Phase 1: Country proxy interview pages ──────────────────────────────────
  workdayProxyInterviewIreland,
  workdayProxyInterviewGermany,
  workdayProxyInterviewNetherlands,
  workdayProxyInterviewFrance,
  workdayProxyInterviewSweden,
  workdayProxyInterviewSwitzerland,
  workdayProxyInterviewAustralia,
  workdayProxyInterviewNewZealand,
  workdayProxyInterviewSingapore,
  workdayProxyInterviewUAE,
  workdayProxyInterviewSaudiArabia,
  // ── Phase 2: Country interview scheduled pages ──────────────────────────────
  workdayInterviewScheduledIreland,
  workdayInterviewScheduledGermany,
  workdayInterviewScheduledNetherlands,
  workdayInterviewScheduledFrance,
  workdayInterviewScheduledSweden,
  workdayInterviewScheduledSwitzerland,
  workdayInterviewScheduledAustralia,
  workdayInterviewScheduledNewZealand,
  workdayInterviewScheduledSingapore,
  workdayInterviewScheduledUAE,
  workdayInterviewScheduledSaudiArabia,
  // ── Phase 3: USA city pages ─────────────────────────────────────────────────
  newYorkWorkdayJobSupport,
  dallasWorkdayJobSupport,
  chicagoWorkdayJobSupport,
  atlantaWorkdayJobSupport,
  houstonWorkdayJobSupport,
  austinWorkdayJobSupport,
  charlotteWorkdayJobSupport,
  phoenixWorkdayJobSupport,
  seattleWorkdayJobSupport,
  sanFranciscoWorkdayJobSupport,
  sanJoseWorkdayJobSupport,
  losAngelesWorkdayJobSupport,
  bostonWorkdayJobSupport,
  washingtonDcWorkdayJobSupport,
  jerseyCityWorkdayJobSupport,
  tampaWorkdayJobSupport,
  // ── Phase 4: Canada city pages ──────────────────────────────────────────────
  torontoWorkdayJobSupport,
  vancouverWorkdayJobSupport,
  calgaryWorkdayJobSupport,
  montrealWorkdayJobSupport,
  ottawaWorkdayJobSupport,
  // ── Phase 5: UK city pages ──────────────────────────────────────────────────
  londonWorkdayJobSupport,
  manchesterWorkdayJobSupport,
  birminghamWorkdayJobSupport,
  leedsWorkdayJobSupport,
  glasgowWorkdayJobSupport,
  // ── Phase 6: Ireland city pages ─────────────────────────────────────────────
  dublinWorkdayJobSupport,
  corkWorkdayJobSupport,
  galwayWorkdayJobSupport,
  // ── Phase 7: Europe city pages ──────────────────────────────────────────────
  berlinWorkdayJobSupport,
  munichWorkdayJobSupport,
  frankfurtWorkdayJobSupport,
  hamburgWorkdayJobSupport,
  amsterdamWorkdayJobSupport,
  rotterdamWorkdayJobSupport,
  parisWorkdayJobSupport,
  lyonWorkdayJobSupport,
  stockholmWorkdayJobSupport,
  zurichWorkdayJobSupport,
  genevaWorkdayJobSupport,
  // ── Phase 8: Australia & New Zealand city pages ─────────────────────────────
  sydneyWorkdayJobSupport,
  melbourneWorkdayJobSupport,
  brisbaneWorkdayJobSupport,
  perthWorkdayJobSupport,
  aucklandWorkdayJobSupport,
  wellingtonWorkdayJobSupport,
  // ── Phase 9: Singapore & Gulf city pages ────────────────────────────────────
  singaporeWorkdayJobSupport,
  dubaiWorkdayJobSupport,
  abuDhabiWorkdayJobSupport,
  riyadhWorkdayJobSupport,
  jeddahWorkdayJobSupport,
  // ── Phase 10: Module & role pages ───────────────────────────────────────────
  workdayBusinessAnalystJobSupport,
  workdayFunctionalConsultantJobSupport,
  workdayTechnicalConsultantJobSupport,
  workdayIntegrationConsultantJobSupport,
  workdayHcmConsultantJobSupport,
  workdayFinancialsConsultantJobSupport,
  workdayPayrollConsultantJobSupport,
  workdaySecurityConsultantJobSupport,
  workdayReportingConsultantJobSupport,
  workdayImplementationSupport,
  workdayProductionSupport,
  workdayTenantConfigurationSupport,
  workdayEibIntegrationJobSupport,
  workdayStudioIntegrationJobSupport,
  workdayCoreConnectorsJobSupport,
  workdayPeciIntegrationJobSupport,
  workdayBirtReportingJobSupport,
  workdayAdvancedReportingJobSupport,
  workdayCalculatedFieldsJobSupport,
  workdayBusinessProcessConfigurationSupport,
  workdayDataConversionMigrationSupport,
  workdayTestingUatSupport,
  workdayGoLiveHypercareSupport,
  workdayClientCallStandupSupport,
  workdayProjectOnboardingSupport,
  // ── Phase 11: Interview-focused technical pages ─────────────────────────────
  workdayHcmInterviewSupport,
  workdayIntegrationInterviewSupport,
  workdayFinancialsInterviewSupport,
  workdayPayrollInterviewSupport,
  workdaySecurityInterviewSupport,
  workdayReportingInterviewSupport,
  workdayBusinessAnalystInterviewSupport,
  workdayFunctionalConsultantInterviewSupport,
  workdayTechnicalConsultantInterviewSupport,
  workdayFinalRoundInterviewSupport,
  workdayLiveTechnicalInterviewSupport,
  workdayClientRoundInterviewSupport,
];
