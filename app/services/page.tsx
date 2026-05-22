import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Proxy Tech Support Services | Job Support, Interview Support & Interview Scheduling',
  description:
    'Explore Proxy Tech Support services including real-time IT job support, proxy interview support, and interview scheduling support for IT professionals across USA, UK, Canada, Australia, Ireland, Europe, Singapore, Hong Kong, and more.',
  canonical: 'https://proxytechsupport.com/services/',
  ogTitle: 'Proxy Tech Support Services | Job Support, Interview Support & Interview Scheduling',
  ogDescription:
    'Three core services for IT professionals globally: Proxy Job Support, Proxy Interview Support, and Get Interview Scheduled. Available across USA, UK, Canada, Australia, Ireland, Germany, Europe, Singapore, and more.',
});

const PHONE = '+919660614469';
const WA_LINK = `https://wa.me/${PHONE}`;

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Proxy Tech Support Services',
  description: 'IT job support, proxy interview support, and interview scheduling services for IT professionals globally.',
  url: 'https://proxytechsupport.com/services/',
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: 'Proxy Tech Support',
    url: 'https://proxytechsupport.com',
    telephone: '+919660614469',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://proxytechsupport.com/services/' },
  ],
};

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

const coreServices: ServiceCard[] = [
  {
    title: 'Proxy Job Support / IT Job Support',
    description:
      'Real-time expert assistance on your live IT job — writing code, debugging production issues, handling client calls and standups, solving urgent technical problems, and navigating complex project delivery. Available same-day across all major timezones. 50+ technologies covered.',
    href: '/proxy-job-support/',
    cta: 'Learn About Job Support',
  },
  {
    title: 'Proxy Interview Support',
    description:
      'Live, discreet real-time guidance during your actual technical interview — coding rounds, system design sessions, DevOps and cloud assessments, AI/ML interviews, full-stack technical panels, and more. Confidential. Same-day availability. Available for interviews at companies globally.',
    href: '/proxy-interview-support/',
    cta: 'Learn About Interview Support',
  },
  {
    title: 'Get Interview Scheduled',
    description:
      'Interview scheduling assistance for IT professionals — profile positioning, outreach support, recruiter engagement, and help securing interviews with target companies in your country. Available for USA, UK, Canada, Australia, Ireland, Germany, Europe, and more.',
    href: '/get-interview-scheduled/',
    cta: 'Get Interview Scheduled',
  },
];

type CountryServiceGroup = {
  country: string;
  links: { label: string; href: string }[];
};

const countryServices: CountryServiceGroup[] = [
  {
    country: 'USA',
    links: [
      { label: 'IT Job Support USA', href: '/job-support-usa/' },
      { label: 'Proxy Interview USA', href: '/proxy-interview-usa/' },
      { label: 'Get Interview Scheduled USA', href: '/get-interview-scheduled-usa/' },
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
    country: 'Ireland',
    links: [
      { label: 'IT Job Support Ireland', href: '/job-support-ireland/' },
      { label: 'Proxy Interview Support Ireland', href: '/interview-proxy-support-ireland/' },
      { label: 'Get Interview Scheduled Ireland', href: '/get-interview-scheduled-ireland/' },
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
    country: 'Germany',
    links: [
      { label: 'IT Job Support Germany', href: '/job-support-germany/' },
      { label: 'Proxy Interview Germany', href: '/proxy-interview-germany/' },
      { label: 'Get Interview Scheduled Germany', href: '/get-interview-scheduled-germany/' },
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
];

const resourceLinks = [
  { label: 'Technologies We Support', href: '/technologies/' },
  { label: 'Knowledge Base', href: '/knowledge-base/' },
  { label: 'All Locations', href: '/locations/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Our Legacy', href: '/our-legacy/' },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .svc-page { background: #030f0f; min-height: 100vh; color: #e8eaec; font-family: system-ui, -apple-system, sans-serif; }
        .svc-hero { background: linear-gradient(160deg, #030f0f 0%, #0a1a18 60%, #030f0f 100%); padding: clamp(2.5rem,6vw,4.5rem) 1rem clamp(2rem,5vw,3.5rem); }
        .svc-inner { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .svc-h1 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.6rem,3.8vw,2.5rem); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 0.85rem; max-width: 800px; }
        .svc-intro { font-size: clamp(0.93rem,1.6vw,1.05rem); color: rgba(255,255,255,0.72); line-height: 1.65; margin-bottom: 1.5rem; max-width: 720px; }
        .svc-cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; }
        .svc-btn-wa { display: inline-flex; align-items: center; gap: 0.5rem; background: #25D366; color: #fff; font-weight: 700; padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-size: 0.95rem; }
        .svc-btn-wa:hover { background: #1ebe5a; }
        .svc-btn-sec { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; color: #4fc3a1; border: 1.5px solid #4fc3a1; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-size: 0.95rem; }
        .svc-btn-sec:hover { background: rgba(79,195,161,0.08); }
        .svc-section-title { font-size: clamp(1.2rem,2.5vw,1.6rem); font-weight: 700; color: #fff; margin: 2.5rem 0 1.25rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .svc-core-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 1.25rem; }
        .svc-core-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(79,195,161,0.18); border-radius: 12px; padding: 1.5rem 1.75rem; display: flex; flex-direction: column; }
        .svc-core-card h2 { font-size: 1.05rem; font-weight: 700; color: #4fc3a1; margin-bottom: 0.75rem; }
        .svc-core-card p { font-size: 0.9rem; color: rgba(255,255,255,0.72); line-height: 1.65; flex: 1; margin-bottom: 1.25rem; }
        .svc-core-card a.svc-card-link { display: inline-block; color: #fff; background: rgba(79,195,161,0.12); border: 1px solid rgba(79,195,161,0.3); border-radius: 5px; padding: 0.5rem 1rem; font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: background 0.15s; }
        .svc-core-card a.svc-card-link:hover { background: rgba(79,195,161,0.22); }
        .svc-country-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 1rem; }
        .svc-country-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1rem 1.25rem; }
        .svc-country-name { font-size: 0.9rem; font-weight: 700; color: #4fc3a1; margin-bottom: 0.6rem; }
        .svc-country-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.35rem; }
        .svc-country-card ul li a { font-size: 0.85rem; color: rgba(255,255,255,0.75); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; }
        .svc-country-card ul li a::before { content: '→'; color: #4fc3a1; font-size: 0.72rem; }
        .svc-country-card ul li a:hover { color: #4fc3a1; }
        .svc-resource-row { display: flex; flex-wrap: wrap; gap: 0.65rem; margin: 2rem 0; }
        .svc-resource-row a { font-size: 0.85rem; color: #4fc3a1; text-decoration: none; border: 1px solid rgba(79,195,161,0.25); border-radius: 4px; padding: 0.3rem 0.65rem; }
        .svc-resource-row a:hover { background: rgba(79,195,161,0.1); }
        .svc-bottom-cta { background: linear-gradient(135deg, #0a1f1c 0%, #051510 100%); border: 1px solid rgba(79,195,161,0.2); border-radius: 12px; padding: clamp(1.5rem,4vw,2.5rem); margin: 3rem 0; text-align: center; }
        .svc-bottom-cta h2 { font-size: clamp(1.2rem,2.5vw,1.6rem); font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
        .svc-bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.72); margin-bottom: 1.25rem; max-width: 640px; margin-left: auto; margin-right: auto; }
        @media (max-width: 600px) {
          .svc-core-grid { grid-template-columns: 1fr; }
          .svc-country-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <TopBar />
      <Navbar />

      <main className="svc-page">
        <section className="svc-hero">
          <div className="svc-inner">
            <h1 className="svc-h1">Proxy Tech Support Services — IT Job Support, Interview Support &amp; Interview Scheduling</h1>
            <p className="svc-intro">
              Three core services for IT professionals worldwide. Real-time job support when you are stuck on your project.
              Live interview guidance when you are in a technical round. Interview scheduling support when you need to get in
              front of the right companies. Available same-day, confidential, and aligned to your timezone.
            </p>
            <div className="svc-cta-row">
              <a href={WA_LINK} className="svc-btn-wa" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 96606 14469
              </a>
              <Link href="/locations/" className="svc-btn-sec">Browse by Location</Link>
            </div>
          </div>
        </section>

        <div className="svc-inner" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
          <h2 className="svc-section-title">Our Three Core Services</h2>
          <div className="svc-core-grid">
            {coreServices.map((svc) => (
              <div className="svc-core-card" key={svc.href}>
                <h2>{svc.title}</h2>
                <p>{svc.description}</p>
                <Link href={svc.href} className="svc-card-link">{svc.cta} →</Link>
              </div>
            ))}
          </div>

          <h2 className="svc-section-title">Services by Country</h2>
          <div className="svc-country-grid">
            {countryServices.map((group) => (
              <div className="svc-country-card" key={group.country}>
                <div className="svc-country-name">{group.country}</div>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
            We also serve Netherlands, Sweden, Denmark, Finland, Norway, Switzerland, Austria, Belgium, Spain,
            Portugal, Singapore, Hong Kong, New Zealand, and all of Europe.{' '}
            <Link href="/locations/" style={{ color: '#4fc3a1', textDecoration: 'none' }}>See all locations →</Link>
          </p>

          <h2 className="svc-section-title">Explore More Resources</h2>
          <div className="svc-resource-row">
            {resourceLinks.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </div>

          <div className="svc-bottom-cta">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us on WhatsApp with your country, technology stack, and what you need — job support, interview support,
              or interview scheduling. We respond quickly and can start same-day.
            </p>
            <div className="svc-cta-row" style={{ justifyContent: 'center' }}>
              <a href={WA_LINK} className="svc-btn-wa" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 96606 14469
              </a>
              <Link href="/get-interview-scheduled/" className="svc-btn-sec">Get Interview Scheduled</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
