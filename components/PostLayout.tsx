import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBottomCTA from '@/components/PageBottomCTA';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Sidebar from '@/components/Sidebar';

interface PostLayoutProps {
  title: string;
  content: string;
  date?: string;
}

export default function PostLayout({ title, content, date }: PostLayoutProps) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main style={{ background: 'var(--pts-bg)', minHeight: '60vh' }}>
        <div
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
            <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
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
