import { faqs } from '@/data/faqs';
import { SITE_NAME, SITE_URL } from '@/lib/site-seo';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'Professional IT job support and interview assistance services for USA, UK, Canada, and worldwide',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-96606-14469',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/proxy-tech-support/',
    'https://www.facebook.com/proxytechsupport',
    'https://x.com/proxyjobsupport',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Job Support and Interview Assistance Services',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  areaServed: ['US', 'GB', 'CA'],
  description:
    'Real-time IT job support and interview assistance for roles like React, Angular, Java, Python, AWS, DevOps, and more',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE_URL,
      servicePhone: '+91-96606-14469',
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
