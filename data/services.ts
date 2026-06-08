export type ServiceOfferIconId = 'interview' | 'briefcase' | 'robot' | 'target' | 'megaphone';

export type ServiceOffer = {
  id: string;
  icon: ServiceOfferIconId;
  title: string;
  description: string;
  features: string[];
  href?: string;
  hrefLabel?: string;
};

/** Primary "What We Offer" cards (legacy layout: icon, copy, checklist). */
export const whatWeOffer: ServiceOffer[] = [
  {
    id: 'interview',
    icon: 'interview',
    title: 'High-Stakes Interview Proxy Support & Assistance',
    description:
      'Final interview approaching? Get expert-led interview preparation, mock interviews, real-time technical assistance, and proxy interview support for coding rounds, system design discussions, client-facing interviews, and high-pressure technical evaluations.',
    features: [
      'Technical Interviews',
      'HR Rounds',
      'Interview Proxy Support',
      'System Design Prep',
      'Coding Round Assistance',
      'Final Round Support',
    ],
    href: '/proxy-interview-support/',
    hrefLabel: 'Explore Interview Proxy Support →',
  },
  {
    id: 'realtime',
    icon: 'briefcase',
    title: 'Real-Time IT Job Support & Proxy Assistance',
    description:
      'Falling behind in project delivery, client meetings, production work, or daily standups? Get live real-time job support for debugging, task handling, architecture discussions, technical blockers, and high-pressure enterprise delivery situations.',
    features: [
      'Live Coding Help',
      'Production Support',
      'Debugging Assistance',
      'Task Delivery',
      'Client Meeting Support',
      'Proxy Job Support',
    ],
    href: '/job-support-usa/',
    hrefLabel: 'Explore Job Support →',
  },
  {
    id: 'aiml',
    icon: 'robot',
    title: 'AI / ML Engineer Proxy Job Support',
    description:
      'Struggling with complex AI/ML projects, LLM workflows, MLOps deployments, data pipelines, or production AI systems? Get hands-on proxy support for Machine Learning, NLP, RAG pipelines, Deep Learning, Data Science, LLMOps, and enterprise AI architecture.',
    features: [
      'ML/DL Projects',
      'LLM & NLP Support',
      'RAG Pipelines',
      'MLOps Support',
      'Data Science',
      'AI Proxy Support',
    ],
    href: '/ai-ml-proxy-interview-support/',
    hrefLabel: 'Explore AI/ML Support →',
  },
  {
    id: 'profile-engineering',
    icon: 'target',
    title: 'Profile Engineering & Get Interview Scheduled',
    description:
      'Not getting interview calls despite applying repeatedly? We engineer your resume, LinkedIn, and professional positioning to match recruiter search patterns, ATS keyword requirements, and high-paying IT role expectations — so your profile gets noticed and shortlisted.',
    features: [
      'Resume Engineering',
      'LinkedIn Optimization',
      'ATS Keyword Alignment',
      'Role Positioning',
      'Recruiter Visibility',
      'Industry-Specific Targeting',
    ],
    href: '/get-interview-scheduled/',
    hrefLabel: 'Get Interview Scheduled →',
  },
  {
    id: 'candidate-marketing',
    icon: 'megaphone',
    title: 'Job Application & Candidate Marketing',
    description:
      'Profile ready but your job search is stalling? We run a structured job search campaign — applying to relevant roles daily, reaching recruiters and vendors, following up professionally, tracking every application, and sending weekly progress updates.',
    features: [
      'Daily Applications',
      'Recruiter Outreach',
      'Vendor Outreach',
      'Follow-Up Campaign',
      'Application Tracking',
      'Weekly Progress Updates',
    ],
    href: '/job-application-candidate-marketing/',
    hrefLabel: 'Start Job Marketing →',
  },
];

export type CareerServiceIconId = 'document' | 'chat' | 'megaphone';

export const careerServices = [
  {
    id: 'resume',
    title: 'Profile Engineering + LinkedIn Optimization',
    description:
      'We do not offer basic profile writing. We focus on profile engineering and recruiter visibility optimization to help professionals get interview calls. Industry-specific positioning crafted to maximize your visibility to recruiters and hiring managers.',
    icon: 'document' as CareerServiceIconId,
    features: [
      'Industry-specific profile positioning',
      'High-intent keyword alignment for your domain',
      'LinkedIn headline & summary engineering',
      'Recruiter visibility optimization',
      'ATS-friendly resume structuring',
      'USA market-oriented profile positioning',
    ],
  },
  {
    id: 'candidate-marketing',
    title: 'Job Application & Candidate Marketing',
    description:
      'Profile engineered but still not getting enough interview calls? We run a structured job search campaign on your behalf — daily applications to relevant roles, direct recruiter and vendor outreach, professional follow-ups, application tracking, and weekly progress updates so your profile stays active in the market.',
    icon: 'megaphone' as CareerServiceIconId,
    features: [
      'Targeted daily job applications',
      'Recruiter & vendor outreach',
      'Professional follow-up campaign',
      'Application tracker',
      'Weekly progress updates',
      'Interview opportunity handoff',
    ],
  },
  {
    id: 'mentoring',
    title: 'Interview Mentoring',
    description:
      'Structured, personalized interview coaching covering technical rounds, system design, behavioral questions, and mock interviews — for developers, DevOps engineers, cloud professionals, and AI engineers preparing for high-pressure final rounds.',
    icon: 'chat' as CareerServiceIconId,
    features: [
      'Mock technical & HR rounds',
      'System design walkthroughs',
      'Behavioral question prep',
      'Real-time feedback',
      'Coding round preparation',
      'Final-round confidence building',
    ],
  },
];

export const careerFlowSteps = [
  { id: 'resume', label: 'Profile Engineering', icon: 'editDoc' as const },
  { id: 'linkedin', label: 'LinkedIn Optimization', icon: 'linkedin' as const },
  { id: 'marketing', label: 'Job Application & Candidate Marketing', icon: 'megaphone' as const },
  { id: 'mentoring', label: 'Interview Mentoring', icon: 'mentoring' as const },
  { id: 'proxy', label: 'Interview Proxy Support', icon: 'headset' as const },
  { id: 'job', label: 'Job Support After Joining', icon: 'briefcase' as const },
];

export const howItWorksSteps = [
  {
    number: 1,
    title: 'Contact Us',
    description:
      'Share your interview schedule, production issue, project requirements, or technology stack through WhatsApp or email for quick evaluation.',
  },
  {
    number: 2,
    title: 'Discussion',
    description:
      'We understand your technical challenges, timeline, project pressure, interview situation, and support expectations to identify the right expert for your case.',
  },
  {
    number: 3,
    title: 'Expert Assignment',
    description:
      'An experienced professional with relevant enterprise project exposure is assigned for proxy interview support, real-time job support, profile engineering, or production issue handling.',
  },
  {
    number: 4,
    title: 'Real-Time Support & Delivery',
    description:
      'Get live technical support during interviews, standups, production issues, client discussions, coding tasks, architecture reviews, and critical project delivery situations.',
  },
];
