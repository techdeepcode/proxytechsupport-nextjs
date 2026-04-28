export type ServiceOfferIconId = 'interview' | 'briefcase' | 'robot';

export type ServiceOffer = {
  id: string;
  icon: ServiceOfferIconId;
  title: string;
  description: string;
  features: string[];
};

/** Primary “What We Offer” cards (legacy layout: icon, copy, checklist). */
export const whatWeOffer: ServiceOffer[] = [
  {
    id: 'interview',
    icon: 'interview',
    title: 'Interview Assistance & Preparation',
    description:
      'Expert-led interview preparation, mock interviews, and real-time technical guidance to help you confidently clear technical and HR interview rounds.',
    features: ['Technical Interviews', 'HR Rounds', 'All IT Technologies'],
  },
  {
    id: 'realtime',
    icon: 'briefcase',
    title: 'Real-Time IT Job Support',
    description:
      'Get daily job help in your current project — live support, debugging, architecture guidance & task delivery. Available during your working hours.',
    features: ['Live Coding Help', 'Debugging Support', 'Project Guidance'],
  },
  {
    id: 'aiml',
    icon: 'robot',
    title: 'AI / ML Engineer IT Job Support',
    description:
      'Hands-on project & interview support for Machine Learning, Deep Learning, NLP, LLMs, MLOps, Data Science & more.',
    features: ['ML/DL Projects', 'Data Science', 'LLM & NLP'],
  },
];

export type CareerServiceIconId = 'document' | 'chat';

export const careerServices = [
  {
    id: 'resume',
    title: 'Resume + LinkedIn Optimization',
    description:
      'ATS-optimized resumes and LinkedIn profiles crafted by industry experts to maximize your visibility to recruiters and hiring managers.',
    icon: 'document' as CareerServiceIconId,
    features: [
      'ATS-friendly resume formatting',
      'Keyword optimization for your domain',
      'LinkedIn headline & summary rewrite',
      'Profile visibility improvements',
    ],
  },
  {
    id: 'mentoring',
    title: 'Interview Mentoring',
    description:
      'Structured, personalized interview coaching covering technical rounds, system design, behavioral questions, and mock interviews.',
    icon: 'chat' as CareerServiceIconId,
    features: [
      'Mock technical & HR rounds',
      'System design walkthroughs',
      'Behavioral question prep',
      'Real-time feedback',
    ],
  },
];

export const careerFlowSteps = [
  { id: 'resume', label: 'Resume Builder / Optimization', icon: 'editDoc' as const },
  { id: 'linkedin', label: 'LinkedIn Optimization', icon: 'linkedin' as const },
  { id: 'mentoring', label: 'Interview Mentoring', icon: 'mentoring' as const },
  { id: 'proxy', label: 'Live Interview Proxy During Call', icon: 'headset' as const },
  { id: 'job', label: 'Job Support', icon: 'briefcase' as const },
];

export const howItWorksSteps = [
  {
    number: 1,
    title: 'Contact Us',
    description: 'Reach out via WhatsApp or email with your requirements and technology stack.',
  },
  {
    number: 2,
    title: 'Discussion',
    description: 'We discuss your needs, timeline, and match you with the right expert.',
  },
  {
    number: 3,
    title: 'Expert Assignment',
    description: 'An experienced professional is assigned to handle your interview or job support.',
  },
  {
    number: 4,
    title: 'Success',
    description: 'Get the results you need with our professional and reliable service.',
  },
];
