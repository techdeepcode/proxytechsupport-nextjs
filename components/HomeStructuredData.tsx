import { faqs } from '@/data/faqs';
import { SITE_NAME, SITE_URL } from '@/lib/site-seo';

const professionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/previewimg.png`,
  description:
    'ProxyTechSupport provides real-time IT job support, proxy interview support, technical interview assistance, production issue help, and profile engineering for developers and IT professionals across global markets.',
  telephone: '+91-96606-14469',
  email: 'support@proxytechsupport.com',
  areaServed: [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'Singapore',
    'New Zealand',
    'Europe',
    'Ireland',
    'Netherlands',
    'Sweden',
    'Denmark',
    'Finland',
    'Norway',
    'Switzerland',
    'Austria',
    'Belgium',
    'Spain',
    'Portugal',
    'Hong Kong',
  ],
  serviceType: [
    'Proxy Interview Support',
    'Real-Time IT Job Support',
    'Proxy Job Support',
    'Interview Proxy Support',
    'Technical Interview Assistance',
    'Live Interview Proxy',
    'Interview Proxy Service',
    'Profile Engineering',
    'LinkedIn Optimization',
    'Recruiter Visibility Optimization',
    'Production Issue Support',
    'AI ML Job Support',
    'MLOps Support',
    'DevOps Support',
    'SRE Job Support',
    'Cloud Support',
    'Java Job Support',
    '.NET Job Support',
    'React Job Support',
    'Python Job Support',
    'AWS Support',
    'Full-Stack Development Support',
    'Data Science Support',
    'QA Automation Support',
    'Cybersecurity Support',
    'Salesforce Job Support',
    'Dynamics 365 Job Support',
  ],
  sameAs: [
    'https://www.linkedin.com/company/proxy-tech-support/',
    'https://www.facebook.com/proxytechsupport',
    'https://x.com/proxyjobsupport',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-96606-14469',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ProxyTechSupport Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Proxy Interview Support',
        itemOffered: {
          '@type': 'Service',
          name: 'Proxy Interview Support',
          description:
            'Real-time proxy interview support and technical interview assistance for coding rounds, system design discussions, client-facing interviews, and high-pressure final interview situations across USA, UK, Canada, and Australia.',
        },
      },
      {
        '@type': 'Offer',
        name: 'Real-Time IT Job Support',
        itemOffered: {
          '@type': 'Service',
          name: 'Real-Time IT Job Support',
          description:
            'Live technical support for production issues, debugging, project delivery, standups, client meetings, and enterprise technology challenges.',
        },
      },
      {
        '@type': 'Offer',
        name: 'Profile Engineering',
        itemOffered: {
          '@type': 'Service',
          name: 'Profile Engineering and Recruiter Visibility',
          description:
            'Resume, LinkedIn, ATS, and recruiter visibility optimization to improve interview opportunities and technical profile positioning for USA, UK, and Canada markets.',
        },
      },
      {
        '@type': 'Offer',
        name: 'AI ML MLOps Support',
        itemOffered: {
          '@type': 'Service',
          name: 'AI ML MLOps Job Support',
          description:
            'Support for AI, ML, Data Science, MLOps, LLMOps, RAG pipelines, model deployment, vector databases, and production AI systems.',
        },
      },
      {
        '@type': 'Offer',
        name: 'DevOps, SRE and Cloud Support',
        itemOffered: {
          '@type': 'Service',
          name: 'DevOps, SRE and Cloud Job Support',
          description:
            'Support for AWS, Azure, GCP, Kubernetes, Docker, Terraform, CI/CD, GitOps, SLO/SLI implementation, error budget tracking, incident management, chaos engineering, observability, and cloud-native infrastructure.',
        },
      },
    ],
  },
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

export default function HomeStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
