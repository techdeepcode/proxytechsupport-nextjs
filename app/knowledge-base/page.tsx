import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import KnowledgeBaseExplorer from '@/components/KnowledgeBaseExplorer';
import { knowledgeBaseGuides } from '@/data/knowledgeBaseGuides';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Knowledge Base | IT Job Support, Interview Support & Proxy Support Guides',
  description:
    'Explore guides on proxy job support, real-time IT job support, technical interview support, production issue help, DevOps, AI/ML, cloud, Canada interview scheduling, Ireland, Germany, Australia, and Europe IT support.',
  canonical: 'https://proxytechsupport.com/knowledge-base/',
  ogTitle: 'Knowledge Base | IT Job Support, Interview Support & Proxy Support Guides',
  ogDescription:
    'Explore practical guides on proxy job support, live interview support, DevOps, AI/ML, cloud, and country-specific IT support for Canada, Ireland, Germany, Australia, and Europe.',
});

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Knowledge Base | IT Job Support, Interview Support & Proxy Support Guides',
  description:
    'Explore guides on proxy job support, real-time IT job support, technical interview support, production issue help, DevOps, AI/ML, cloud, and country-specific IT support.',
  url: 'https://proxytechsupport.com/knowledge-base/',
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: 'Proxy Tech Support',
    url: 'https://proxytechsupport.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: knowledgeBaseGuides.map((guide, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: guide.title,
      url: `https://proxytechsupport.com${guide.href}`,
    })),
  },
};

export default function KnowledgeBasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <style>{`
        .kb-page-hero {
          background: linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(2.5rem, 6vw, 4.5rem) 1rem clamp(2rem, 5vw, 3.5rem);
        }
        .kb-page-inner {
          width: 100%;
          max-width: var(--pts-content-max, 1200px);
          margin: 0 auto;
        }
        .kb-page-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.6rem, 3.8vw, 2.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 0.85rem;
          max-width: 760px;
        }
        .kb-page-intro {
          font-size: clamp(0.93rem, 1.6vw, 1.05rem);
          color: rgba(255,255,255,0.72);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          max-width: 680px;
        }
        .kb-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }
        .kb-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          background: #00df82;
          color: #030f0f;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .kb-btn-primary:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }
        .kb-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          background: transparent;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.92rem;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.6);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .kb-btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: #ffffff;
          transform: translateY(-1px);
        }
        .kb-content-section {
          background: var(--pts-section-alt, #f9fafb);
          padding: clamp(2rem, 5vw, 3.5rem) 1rem;
        }
        @media (max-width: 599px) {
          .kb-cta-row { flex-direction: column; }
          .kb-btn-primary, .kb-btn-secondary {
            width: 100%;
            justify-content: center;
            border-radius: 12px;
            min-height: 52px;
          }
        }
      `}</style>

      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="kb-page-hero">
        <div className="kb-page-inner">
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#00df82',
              marginBottom: '1rem',
            }}
          >
            Knowledge Base
          </p>
          <h1 className="kb-page-h1">
            Knowledge Base for IT Job Support, Interview Support &amp; Career Help
          </h1>
          <p className="kb-page-intro">
            Explore practical guides on real-time IT job support, proxy job support, technical
            interview support, production issue help, DevOps/SRE/cloud support, AI/ML/RAG/MLOps
            support, and interview scheduling guidance for USA, Canada, Ireland, Germany, Australia,
            and Europe.
          </p>
          <div className="kb-cta-row">
            <Link href="/job-support-usa/" className="kb-btn-primary">
              Need Real-Time Support?
            </Link>
            <Link href="/get-interview-scheduled-canada/" className="kb-btn-secondary">
              Get Interview Scheduled in Canada
            </Link>
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="kb-content-section">
        <div className="kb-page-inner">
          <KnowledgeBaseExplorer />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
