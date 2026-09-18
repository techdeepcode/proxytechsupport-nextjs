import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import TechCompaniesDashboard from '@/components/TechCompaniesDashboard';
import { companies } from '@/data/companies/registry';
import { landingPageMetadata, SITE_URL } from '@/lib/site-seo';

const CANONICAL = 'https://proxytechsupport.com/tech-companies/';

export const metadata: Metadata = landingPageMetadata({
  title: 'Tech Company Interview & Job Support Directory | 500+ Employers',
  description:
    'Search 500+ major technology and technology-driven employers to see available technical interview, proxy interview, job support, cloud, DevOps, AI/ML, data engineering and software engineering support — Microsoft, Google, NVIDIA, Netflix, Salesforce and more.',
  canonical: CANONICAL,
  keywords: [
    'company interview support',
    'technical interview support',
    'proxy interview support',
    'interview proxy',
    'company job support',
    'tech company interview support',
    'software engineer interview support',
    'cloud interview support',
    'DevOps interview support',
    'AI interview support',
    'data engineer interview support',
  ],
  ogTitle: 'Technical Interview & Job Support for 500+ Major Companies',
  ogDescription:
    'Browse and search 500+ employers — Microsoft, Google, NVIDIA, Netflix, Salesforce, Databricks and more — for technical interview, proxy interview and job support.',
});

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Tech Company Interview & Job Support Directory',
  description:
    'Searchable directory of 500+ major technology employers with available technical interview, proxy interview and job support from Proxy Tech Support.',
  url: CANONICAL,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', name: 'Proxy Tech Support', url: SITE_URL },
  publisher: { '@type': 'Organization', name: 'Proxy Tech Support', url: SITE_URL },
  mainEntity: {
    '@type': 'ItemList',
    name: '500 Major Tech Employers',
    numberOfItems: companies.length,
    itemListElement: companies.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: c.primaryUrl.startsWith('http') ? c.primaryUrl : `${SITE_URL}${c.primaryUrl}`,
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Tech Companies', item: CANONICAL },
  ],
};

export default function TechCompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{`
        .tcx-hero { background: linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%); padding: clamp(2.4rem, 6vw, 4.2rem) 1rem clamp(1.8rem, 5vw, 3rem); }
        .tcx-inner { width: 100%; max-width: var(--pts-content-max, 1200px); margin: 0 auto; }
        .tcx-crumbs { font-size: 0.8rem; color: rgba(255,255,255,0.55); margin-bottom: 1rem; }
        .tcx-crumbs a { color: rgba(255,255,255,0.75); text-decoration: none; }
        .tcx-crumbs a:hover { color: #00df82; }
        .tcx-h1 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 0.85rem; max-width: 820px; }
        .tcx-intro { font-size: clamp(0.95rem, 1.6vw, 1.08rem); color: rgba(255,255,255,0.75); line-height: 1.65; margin-bottom: 1.25rem; max-width: 720px; }
        .tcx-stats { display: flex; flex-wrap: wrap; gap: 1.25rem; }
        .tcx-stat b { display: block; font-size: 1.4rem; color: #00df82; font-weight: 800; line-height: 1; }
        .tcx-stat span { font-size: 0.78rem; color: rgba(255,255,255,0.6); }
        .tcx-content { background: var(--pts-section-alt, #f9fafb); padding: clamp(2rem, 5vw, 3.2rem) 1rem; }
      `}</style>
      <TopBar />
      <Navbar />
      <header className="tcx-hero">
        <div className="tcx-inner">
          <nav className="tcx-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> → <span>Tech Companies</span>
          </nav>
          <h1 className="tcx-h1">Technical Interview &amp; Job Support for 500+ Major Companies</h1>
          <p className="tcx-intro">
            Interviewing with — or already working at — a major tech employer? Search 500+ technology and
            technology-driven companies to see the technical interview, proxy interview, job support, cloud,
            DevOps, AI/ML, data engineering and software engineering help available from Proxy Tech Support.
            Independent support — we are not affiliated with any listed employer.
          </p>
          <div className="tcx-stats">
            <div className="tcx-stat">
              <b>500+</b>
              <span>Employers listed</span>
            </div>
            <div className="tcx-stat">
              <b>23</b>
              <span>Industries</span>
            </div>
            <div className="tcx-stat">
              <b>Same-day</b>
              <span>Expert support</span>
            </div>
          </div>
        </div>
      </header>
      <main className="tcx-content">
        <div className="tcx-inner">
          <TechCompaniesDashboard />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
