import type { ReactNode } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb, { type BreadcrumbItem } from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import PageBottomCTA from '@/components/PageBottomCTA';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Sidebar from '@/components/Sidebar';
import ActionBanner from '@/components/ActionBanner';
import BlogArticleShell from '@/components/BlogArticleShell';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

interface PostLayoutProps {
  title: string;
  /** Legacy HTML string (unused when children are passed). */
  content?: string;
  /** Rich article body (preferred). */
  children?: ReactNode;
  date?: string;
  /** If true, shows an interview-specific monetization banner above the article. */
  showInterviewBanner?: boolean;
  /**
   * Interview listing pages use plain HTML Article components; wrap in the same card shell as blog posts.
   * Do not set for blog posts — their Article already includes BlogArticleShell when needed.
   */
  wrapWithBlogShell?: boolean;
  /** Breadcrumb trail for this page. If omitted no breadcrumb is rendered. */
  breadcrumbs?: BreadcrumbItem[];
}

function InlineInterviewCTA() {
  return (
    <div
      style={{
        border: '1px solid rgba(0,223,130,0.3)',
        borderLeft: '4px solid #00df82',
        borderRadius: '8px',
        padding: '1rem 1.25rem',
        margin: '2rem 0',
        background: 'rgba(0,223,130,0.04)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.75rem',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--pts-text)', fontWeight: 600, lineHeight: 1.4 }}>
        Need real-time interview support?{' '}
        <a href="/interview-support-global/" style={{ color: 'var(--pts-forest)', textDecoration: 'underline' }}>
          Explore our global interview assistance →
        </a>
      </p>
      <a
        href={WHATSAPP_ME_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          background: '#25D366',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.82rem',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Talk to Expert Now
      </a>
    </div>
  );
}

function BlogInternalLinks() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--pts-border)',
        paddingTop: '1.5rem',
        marginTop: '2rem',
      }}
    >
      <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pts-text-subtle)', marginBottom: '0.85rem' }}>
        Need real-time help?
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {[
          { label: 'Java Job Support', href: '/java-job-support-usa/' },
          { label: 'DevOps Job Support', href: '/devops-job-support-usa/' },
          { label: 'Node.js Job Support', href: '/nodejs-job-support-usa/' },
          { label: 'Interview Support', href: '/interview-support-global/' },
          { label: 'Struggling in Job?', href: '/struggling-in-job-developer-help/' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: '0.82rem',
              color: 'var(--pts-forest)',
              textDecoration: 'none',
              fontWeight: 600,
              border: '1px solid var(--pts-border)',
              borderRadius: '6px',
              padding: '0.3rem 0.65rem',
              background: 'var(--pts-card-bg)',
              transition: 'border-color 0.15s',
            }}
          >
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  );
}

export default function PostLayout({
  title,
  content,
  children,
  date,
  showInterviewBanner,
  wrapWithBlogShell,
  breadcrumbs,
}: PostLayoutProps) {
  return (
    <>
      <TopBar />
      <Navbar />
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
      <main className="post-layout-main" style={{ background: 'var(--pts-bg)', minHeight: '60vh' }}>
        <div
          className="post-layout-inner"
          style={{
            width: '100%',
            maxWidth: 'var(--pts-content-max)',
            margin: '0 auto',
            padding: '2rem 1rem',
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          <article>
            {showInterviewBanner && (
              <div className="post-layout-preface-banner">
                <ActionBanner />
              </div>
            )}

            <h1
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'var(--pts-text)',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}
            >
              {title}
            </h1>
            {date && (
              <p style={{ fontSize: '0.85rem', color: 'var(--pts-text-subtle)', marginBottom: '1.5rem' }}>
                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}

            <div className="post-content">
              {wrapWithBlogShell ? (
                <BlogArticleShell>
                  {children ?? <div dangerouslySetInnerHTML={{ __html: content || '' }} />}
                </BlogArticleShell>
              ) : (
                (children ?? <div dangerouslySetInnerHTML={{ __html: content || '' }} />)
              )}
            </div>

            {showInterviewBanner && <InlineInterviewCTA />}
            {!showInterviewBanner && <BlogInternalLinks />}
          </article>

          <aside className="post-sidebar">
            <Sidebar />
          </aside>
        </div>
      </main>
      <PageBottomCTA />
      <Footer />
      <WhatsAppFloat />

      <style>{`
        @media (max-width: 900px) {
          main > div {
            grid-template-columns: 1fr !important;
          }
          .post-sidebar {
            order: -1;
          }
        }
      `}</style>
    </>
  );
}
