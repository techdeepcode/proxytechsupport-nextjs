import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Global IT Job Support & Proxy Interview Support Locations | Proxy Tech Support',
  description:
    'Explore Proxy Tech Support services by country including IT job support, proxy interview support, and get interview scheduled support for USA, UK, Canada, Australia, Ireland, Germany, Netherlands, Sweden, Denmark, Finland, Norway, Switzerland, Austria, Belgium, Spain, Portugal, Singapore, Hong Kong, and New Zealand.',
  canonical: 'https://proxytechsupport.com/locations/',
  ogTitle: 'Global IT Job Support & Proxy Interview Support Locations',
  ogDescription:
    'Country-by-country explorer for IT job support, proxy interview support, and interview scheduling. USA, UK, Canada, Australia, Ireland, Germany, Europe, Singapore, Hong Kong, New Zealand, and more.',
});

const PHONE = '+919660614469';
const WA_LINK = `https://wa.me/${PHONE}`;

type CountryEntry = {
  country: string;
  links: { label: string; href: string }[];
};

const countries: CountryEntry[] = [
  {
    country: 'USA',
    links: [
      { label: 'IT Job Support USA', href: '/job-support-usa/' },
      { label: 'Proxy Interview USA', href: '/proxy-interview-usa/' },
      { label: 'Get Interview Scheduled USA', href: '/get-interview-scheduled-usa/' },
    ],
  },
  {
    country: 'UK',
    links: [
      { label: 'IT Job Support UK', href: '/job-support-uk/' },
      { label: 'Proxy Interview UK', href: '/proxy-interview-uk/' },
      { label: 'Get Interview Scheduled UK', href: '/get-interview-scheduled-uk/' },
    ],
  },
  {
    country: 'Canada',
    links: [
      { label: 'IT Job Support Canada', href: '/job-support-canada/' },
      { label: 'Proxy Interview Canada', href: '/proxy-interview-canada/' },
      { label: 'Get Interview Scheduled Canada', href: '/get-interview-scheduled-canada/' },
    ],
  },
  {
    country: 'Australia',
    links: [
      { label: 'IT Job Support Australia', href: '/job-support-australia/' },
      { label: 'Proxy Interview Australia', href: '/proxy-interview-australia/' },
      { label: 'Get Interview Scheduled Australia', href: '/get-interview-scheduled-australia/' },
    ],
  },
  {
    country: 'Ireland',
    links: [
      { label: 'IT Job Support Ireland', href: '/job-support-ireland/' },
      { label: 'Proxy Interview Support Ireland', href: '/interview-proxy-support-ireland/' },
      { label: 'Get Interview Scheduled Ireland', href: '/get-interview-scheduled-ireland/' },
    ],
  },
  {
    country: 'Germany',
    links: [
      { label: 'IT Job Support Germany', href: '/job-support-germany/' },
      { label: 'Proxy Interview Germany', href: '/proxy-interview-germany/' },
      { label: 'Get Interview Scheduled Germany', href: '/get-interview-scheduled-germany/' },
    ],
  },
  {
    country: 'Netherlands',
    links: [
      { label: 'IT Job Support Netherlands', href: '/job-support-netherlands/' },
      { label: 'Proxy Interview Netherlands', href: '/proxy-interview-netherlands/' },
      { label: 'Get Interview Scheduled Netherlands', href: '/get-interview-scheduled-netherlands/' },
    ],
  },
  {
    country: 'Sweden',
    links: [
      { label: 'IT Job Support Sweden', href: '/job-support-sweden/' },
      { label: 'Proxy Interview Sweden', href: '/proxy-interview-sweden/' },
      { label: 'Get Interview Scheduled Sweden', href: '/get-interview-scheduled-sweden/' },
    ],
  },
  {
    country: 'Denmark',
    links: [
      { label: 'IT Job Support Denmark', href: '/job-support-denmark/' },
      { label: 'Proxy Interview Denmark', href: '/proxy-interview-denmark/' },
      { label: 'Get Interview Scheduled Denmark', href: '/get-interview-scheduled-denmark/' },
    ],
  },
  {
    country: 'Finland',
    links: [
      { label: 'IT Job Support Finland', href: '/job-support-finland/' },
      { label: 'Proxy Interview Finland', href: '/proxy-interview-finland/' },
      { label: 'Get Interview Scheduled Finland', href: '/get-interview-scheduled-finland/' },
    ],
  },
  {
    country: 'Norway',
    links: [
      { label: 'IT Job Support Norway', href: '/job-support-norway/' },
      { label: 'Proxy Interview Norway', href: '/proxy-interview-norway/' },
      { label: 'Get Interview Scheduled Norway', href: '/get-interview-scheduled-norway/' },
    ],
  },
  {
    country: 'Switzerland',
    links: [
      { label: 'IT Job Support Switzerland', href: '/job-support-switzerland/' },
      { label: 'Proxy Interview Switzerland', href: '/proxy-interview-switzerland/' },
      { label: 'Get Interview Scheduled Switzerland', href: '/get-interview-scheduled-switzerland/' },
    ],
  },
  {
    country: 'Austria',
    links: [
      { label: 'IT Job Support Austria', href: '/job-support-austria/' },
      { label: 'Proxy Interview Austria', href: '/proxy-interview-austria/' },
      { label: 'Get Interview Scheduled Austria', href: '/get-interview-scheduled-austria/' },
    ],
  },
  {
    country: 'Belgium',
    links: [
      { label: 'IT Job Support Belgium', href: '/job-support-belgium/' },
      { label: 'Proxy Interview Belgium', href: '/proxy-interview-belgium/' },
      { label: 'Get Interview Scheduled Belgium', href: '/get-interview-scheduled-belgium/' },
    ],
  },
  {
    country: 'Spain',
    links: [
      { label: 'IT Job Support Spain', href: '/job-support-spain/' },
      { label: 'Proxy Interview Spain', href: '/proxy-interview-spain/' },
      { label: 'Get Interview Scheduled Spain', href: '/get-interview-scheduled-spain/' },
    ],
  },
  {
    country: 'Portugal',
    links: [
      { label: 'IT Job Support Portugal', href: '/job-support-portugal/' },
      { label: 'Proxy Interview Portugal', href: '/proxy-interview-portugal/' },
      { label: 'Get Interview Scheduled Portugal', href: '/get-interview-scheduled-portugal/' },
    ],
  },
  {
    country: 'Singapore',
    links: [
      { label: 'IT Job Support Singapore', href: '/job-support-singapore/' },
      { label: 'Proxy Interview Singapore', href: '/proxy-interview-singapore/' },
      { label: 'Get Interview Scheduled Singapore', href: '/get-interview-scheduled-singapore/' },
    ],
  },
  {
    country: 'Hong Kong',
    links: [
      { label: 'IT Job Support Hong Kong', href: '/job-support-hong-kong/' },
      { label: 'Proxy Interview Hong Kong', href: '/proxy-interview-hong-kong/' },
      { label: 'Get Interview Scheduled Hong Kong', href: '/get-interview-scheduled-hong-kong/' },
    ],
  },
  {
    country: 'New Zealand',
    links: [
      { label: 'IT Job Support New Zealand', href: '/job-support-newzealand/' },
      { label: 'Proxy Interview New Zealand', href: '/proxy-interview-new-zealand/' },
      { label: 'Get Interview Scheduled New Zealand', href: '/get-interview-scheduled-new-zealand/' },
    ],
  },
  {
    country: 'Europe (All Countries)',
    links: [
      { label: 'IT Job Support Europe', href: '/job-support-europe/' },
      { label: 'Proxy Interview Europe', href: '/proxy-interview-europe/' },
      { label: 'Get Interview Scheduled (Global)', href: '/get-interview-scheduled/' },
    ],
  },
];

type WorkdayCountryEntry = {
  country: string;
  links: { label: string; href: string }[];
};

const workdayCountries: WorkdayCountryEntry[] = [
  {
    country: 'Workday Hub',
    links: [
      { label: 'Workday Job Support', href: '/workday-job-support/' },
      { label: 'Workday Proxy Interview', href: '/workday-proxy-interview-support/' },
      { label: 'Workday Interview Scheduled', href: '/workday-interview-scheduled/' },
    ],
  },
  {
    country: 'USA',
    links: [
      { label: 'Workday Job Support USA', href: '/workday-job-support-usa/' },
      { label: 'Workday Proxy Interview USA', href: '/workday-proxy-interview-usa/' },
      { label: 'Workday Interview Scheduled USA', href: '/workday-interview-scheduled-usa/' },
    ],
  },
  {
    country: 'Canada',
    links: [
      { label: 'Workday Job Support Canada', href: '/workday-job-support-canada/' },
      { label: 'Workday Proxy Interview Canada', href: '/workday-proxy-interview-canada/' },
      { label: 'Workday Interview Scheduled Canada', href: '/workday-interview-scheduled-canada/' },
    ],
  },
  {
    country: 'UK',
    links: [
      { label: 'Workday Job Support UK', href: '/workday-job-support-uk/' },
      { label: 'Workday Proxy Interview UK', href: '/workday-proxy-interview-uk/' },
      { label: 'Workday Interview Scheduled UK', href: '/workday-interview-scheduled-uk/' },
    ],
  },
  {
    country: 'Europe',
    links: [
      { label: 'Workday Job Support Europe', href: '/workday-job-support-europe/' },
      { label: 'Workday Proxy Interview Europe', href: '/workday-proxy-interview-europe/' },
      { label: 'Workday Interview Scheduled Europe', href: '/workday-interview-scheduled-europe/' },
    ],
  },
  {
    country: 'Ireland',
    links: [
      { label: 'Workday Job Support Ireland', href: '/workday-job-support-ireland/' },
    ],
  },
  {
    country: 'Germany',
    links: [
      { label: 'Workday Job Support Germany', href: '/workday-job-support-germany/' },
    ],
  },
  {
    country: 'Netherlands',
    links: [
      { label: 'Workday Job Support Netherlands', href: '/workday-job-support-netherlands/' },
    ],
  },
  {
    country: 'Australia',
    links: [
      { label: 'Workday Job Support Australia', href: '/workday-job-support-australia/' },
    ],
  },
  {
    country: 'Singapore',
    links: [
      { label: 'Workday Job Support Singapore', href: '/workday-job-support-singapore/' },
    ],
  },
  {
    country: 'UAE',
    links: [
      { label: 'Workday Job Support UAE', href: '/workday-job-support-uae/' },
    ],
  },
  {
    country: 'Saudi Arabia',
    links: [
      { label: 'Workday Job Support Saudi Arabia', href: '/workday-job-support-saudi-arabia/' },
    ],
  },
];

const faqs = [
  {
    question: 'Do you provide IT job support for all countries listed on this page?',
    answer:
      'Yes. We provide real-time IT job support, proxy interview support, and interview scheduling assistance for IT professionals in all countries listed — USA, UK, Canada, Australia, Ireland, Germany, Netherlands, Sweden, Denmark, Finland, Norway, Switzerland, Austria, Belgium, Spain, Portugal, Singapore, Hong Kong, New Zealand, and Europe broadly. Our experts are distributed to cover major international timezones.',
  },
  {
    question: 'How do I get started with job support or proxy interview support?',
    answer:
      'Contact us on WhatsApp at +91 96606 14469. Share your country, technology stack, role, and what you need help with — whether that is real-time job support, a proxy interview, or interview scheduling assistance. We respond quickly and can start same-day for urgent needs.',
  },
  {
    question: 'What is the difference between Proxy Job Support, Proxy Interview Support, and Get Interview Scheduled?',
    answer:
      'Proxy Job Support (also called IT Job Support) means our expert helps you in real-time on your actual job — writing code, debugging, handling production issues, client calls, or standups. Proxy Interview Support means our expert joins your live technical interview and provides real-time guidance during the interview itself. Get Interview Scheduled is our interview scheduling assistance service — helping IT professionals get their profiles positioned and interviews set up with target companies.',
  },
  {
    question: 'Do your experts cover all technology stacks?',
    answer:
      'Yes. We cover 50+ technologies including Java, Spring Boot, Python, React, Node.js, .NET, AWS, Azure, GCP, Kubernetes, Terraform, DevOps, SRE, AI/ML, MLOps, RAG and Agentic AI, data engineering, QA automation, full-stack development, and more. Visit our Proxy Job Support page or Technologies section for the full list.',
  },
  {
    question: 'Is the service confidential?',
    answer:
      'Yes. All our services — proxy job support, proxy interview support, and interview scheduling — are completely confidential. We do not disclose client identities, employer names, or any details about your engagement to any third party.',
  },
  {
    question: 'What timezones do you cover?',
    answer:
      'We have experts covering USA (all US time zones), UK (GMT/BST), Canada (EST/PST), Australia (AEST/AEDT), Ireland (GMT/IST), Germany and most of Europe (CET/CEST), Nordic countries (CET/CEST and EET/EEST for Finland), Portugal (WET/WEST), Singapore and Hong Kong (SGT/HKT, UTC+8), and New Zealand (NZST/NZDT). Contact us on WhatsApp to confirm availability for your timezone.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://proxytechsupport.com/locations/' },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .loc-page { background: #030f0f; min-height: 100vh; color: #e8eaec; font-family: system-ui, -apple-system, sans-serif; }
        .loc-hero { background: linear-gradient(160deg, #030f0f 0%, #0a1a18 60%, #030f0f 100%); padding: clamp(2.5rem,6vw,4.5rem) 1rem clamp(2rem,5vw,3.5rem); }
        .loc-inner { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .loc-h1 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.6rem,3.8vw,2.5rem); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 0.85rem; max-width: 800px; }
        .loc-intro { font-size: clamp(0.93rem,1.6vw,1.05rem); color: rgba(255,255,255,0.72); line-height: 1.65; margin-bottom: 1.5rem; max-width: 720px; }
        .loc-cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; }
        .loc-btn-wa { display: inline-flex; align-items: center; gap: 0.5rem; background: #25D366; color: #fff; font-weight: 700; padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-size: 0.95rem; }
        .loc-btn-wa:hover { background: #1ebe5a; }
        .loc-btn-sec { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; color: #4fc3a1; border: 1.5px solid #4fc3a1; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-size: 0.95rem; }
        .loc-btn-sec:hover { background: rgba(79,195,161,0.08); }
        .loc-services-intro { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 1.5rem 1.75rem; margin: 2rem 0; }
        .loc-services-intro h2 { font-size: 1.2rem; font-weight: 700; color: #4fc3a1; margin-bottom: 1rem; }
        .loc-svc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 1rem; margin-top: 0.75rem; }
        .loc-svc-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem 1.25rem; }
        .loc-svc-card h3 { font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; }
        .loc-svc-card p { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.55; margin: 0; }
        .loc-section-title { font-size: clamp(1.3rem,2.5vw,1.8rem); font-weight: 700; color: #fff; margin: 2.5rem 0 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .loc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 1.25rem; }
        .loc-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.09); border-radius: 10px; padding: 1.25rem 1.5rem; transition: border-color 0.2s; }
        .loc-card:hover { border-color: rgba(79,195,161,0.4); }
        .loc-card-country { font-size: 1rem; font-weight: 700; color: #4fc3a1; margin-bottom: 0.75rem; }
        .loc-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
        .loc-card ul li a { font-size: 0.88rem; color: rgba(255,255,255,0.78); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; transition: color 0.15s; }
        .loc-card ul li a:hover { color: #4fc3a1; }
        .loc-card ul li a::before { content: '→'; color: #4fc3a1; font-size: 0.75rem; flex-shrink: 0; }
        .loc-faq-section { margin: 3rem 0; }
        .loc-faq-section h2 { font-size: clamp(1.2rem,2.5vw,1.6rem); font-weight: 700; color: #fff; margin-bottom: 1.5rem; }
        .loc-faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); padding: 1.25rem 0; }
        .loc-faq-item:last-child { border-bottom: none; }
        .loc-faq-q { font-size: 0.97rem; font-weight: 700; color: #fff; margin-bottom: 0.6rem; }
        .loc-faq-a { font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.65; margin: 0; }
        .loc-bottom-cta { background: linear-gradient(135deg, #0a1f1c 0%, #051510 100%); border: 1px solid rgba(79,195,161,0.2); border-radius: 12px; padding: clamp(1.5rem,4vw,2.5rem); margin: 3rem 0; text-align: center; }
        .loc-bottom-cta h2 { font-size: clamp(1.2rem,2.5vw,1.7rem); font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
        .loc-bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.72); margin-bottom: 1.25rem; }
        .loc-resource-links { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 1.25rem 1.5rem; margin: 2rem 0; }
        .loc-resource-links h3 { font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.6); margin-bottom: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .loc-resource-links-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .loc-resource-links-row a { font-size: 0.85rem; color: #4fc3a1; text-decoration: none; border: 1px solid rgba(79,195,161,0.25); border-radius: 4px; padding: 0.3rem 0.65rem; transition: background 0.15s; }
        .loc-resource-links-row a:hover { background: rgba(79,195,161,0.1); }
        @media (max-width: 600px) {
          .loc-grid { grid-template-columns: 1fr; }
          .loc-svc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <TopBar />
      <Navbar />

      <main className="loc-page">
        <section className="loc-hero">
          <div className="loc-inner">
            <h1 className="loc-h1">Global IT Job Support, Proxy Interview Support &amp; Interview Scheduling Locations</h1>
            <p className="loc-intro">
              Proxy Tech Support provides real-time IT job support, proxy interview support, and interview scheduling assistance
              for IT professionals across 20+ countries. Find your country below to access dedicated service pages for
              Job Support, Proxy Interview Support, and Get Interview Scheduled.
            </p>
            <div className="loc-cta-row">
              <a href={WA_LINK} className="loc-btn-wa" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 96606 14469
              </a>
              <Link href="/proxy-job-support/" className="loc-btn-sec">Proxy Job Support</Link>
              <Link href="/proxy-interview-support/" className="loc-btn-sec">Proxy Interview Support</Link>
            </div>
          </div>
        </section>

        <div className="loc-inner" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
          <div className="loc-services-intro">
            <h2>Our Three Core Services — Available Globally</h2>
            <div className="loc-svc-grid">
              <div className="loc-svc-card">
                <h3>Proxy Job Support / IT Job Support</h3>
                <p>Real-time expert assistance on your live IT job — coding, debugging, production issues, client calls, standups. Available same-day across all timezones.</p>
              </div>
              <div className="loc-svc-card">
                <h3>Proxy Interview Support</h3>
                <p>Live, discreet guidance during your actual technical interview — coding rounds, system design, DevOps, AI/ML, full-stack. Confidential and same-day available.</p>
              </div>
              <div className="loc-svc-card">
                <h3>Get Interview Scheduled</h3>
                <p>Profile positioning, outreach support, and interview scheduling assistance to help IT professionals secure interviews with target companies in their country.</p>
              </div>
            </div>
          </div>

          <h2 className="loc-section-title">Browse by Country</h2>

          <div className="loc-grid">
            {countries.map((entry) => (
              <div className="loc-card" key={entry.country}>
                <div className="loc-card-country">{entry.country}</div>
                <ul>
                  {entry.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="loc-section-title">Workday Support by Country</h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            Dedicated Workday HCM, Financial Management, Payroll, Integration, and proxy interview support by region.{' '}
            <Link href="/workday-job-support/" style={{ color: '#4fc3a1', textDecoration: 'none' }}>View Workday Hub →</Link>
          </p>
          <div className="loc-grid">
            {workdayCountries.map((entry) => (
              <div className="loc-card" key={entry.country}>
                <div className="loc-card-country">{entry.country}</div>
                <ul>
                  {entry.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="loc-resource-links">
            <h3>Explore More</h3>
            <div className="loc-resource-links-row">
              <Link href="/proxy-job-support/">Proxy Job Support</Link>
              <Link href="/proxy-interview-support/">Proxy Interview Support</Link>
              <Link href="/get-interview-scheduled/">Get Interview Scheduled</Link>
              <Link href="/technologies/">Technologies</Link>
              <Link href="/knowledge-base/">Knowledge Base</Link>
              <Link href="/services/">All Services</Link>
              <Link href="/blog/">Blog</Link>
            </div>
          </div>

          <div className="loc-faq-section">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq) => (
              <div className="loc-faq-item" key={faq.question}>
                <p className="loc-faq-q">{faq.question}</p>
                <p className="loc-faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="loc-bottom-cta">
            <h2>Need Help Right Now? Contact Us on WhatsApp</h2>
            <p>
              Real-time IT job support, proxy interview support, and interview scheduling for IT professionals
              across USA, UK, Canada, Australia, Ireland, Germany, Europe, Singapore, Hong Kong, New Zealand, and more.
              Available same-day. Confidential.
            </p>
            <div className="loc-cta-row" style={{ justifyContent: 'center' }}>
              <a href={WA_LINK} className="loc-btn-wa" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 96606 14469
              </a>
              <Link href="/get-interview-scheduled/" className="loc-btn-sec">Get Interview Scheduled</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
