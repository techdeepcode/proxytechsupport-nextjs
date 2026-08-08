import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

/**
 * Shared shell for legal / trust pages (privacy, terms, refund, service delivery,
 * disclaimer). Keeps these pages visually consistent with the rest of the site and
 * routes through the standard Navbar + Footer so navigation and SEO structure match.
 */
export default function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  breadcrumbLabel,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro?: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: breadcrumbLabel }]} />
      <main
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '2rem 1.15rem 3.5rem',
          lineHeight: 1.75,
          color: 'var(--pts-text, #1e293b)',
        }}
      >
        <article className="legal-article">
          <style>{`
            .legal-article h1 { font-size: 1.9rem; font-weight: 800; margin-bottom: 0.5rem; line-height: 1.2; }
            .legal-article h2 { font-size: 1.2rem; font-weight: 700; margin: 2rem 0 0.6rem; }
            .legal-article h3 { font-size: 1.02rem; font-weight: 700; margin: 1.3rem 0 0.4rem; }
            .legal-article p, .legal-article li { font-size: 0.95rem; color: var(--pts-muted-text, #475569); }
            .legal-article ul { padding-left: 1.25rem; margin: 0.5rem 0 1rem; display: flex; flex-direction: column; gap: 0.35rem; }
            .legal-article a { color: var(--pts-link, #2563eb); }
            .legal-updated { font-size: 0.82rem; color: var(--pts-text-subtle, #64748b); margin-bottom: 1.5rem; }
          `}</style>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {lastUpdated}</p>
          {intro && <p>{intro}</p>}
          {children}
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
