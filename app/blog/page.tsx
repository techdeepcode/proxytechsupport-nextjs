import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBottomCTA from '@/components/PageBottomCTA';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ActionBanner from '@/components/ActionBanner';
import { defaultOgImage } from '@/lib/site-seo';

const canonical = 'https://proxytechsupport.com/blog/';
const blogTitle = 'IT Job Support Blog – Tips, Guides & Interview Advice';
const blogDescription =
  'Expert articles on IT job support, interview preparation, and real-time developer assistance. Serving USA, UK, Canada, Australia, Europe & Singapore.';

export const metadata: Metadata = {
  title: blogTitle,
  description: blogDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: blogTitle,
    description: blogDescription,
    url: canonical,
    siteName: 'Proxy Tech Support',
    locale: 'en_US',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: blogTitle,
    description: blogDescription,
    images: [defaultOgImage.url],
  },
  other: {
    language: 'English',
    'revisit-after': '7 days',
  },
};

/**
 * Job-support service pages live at their root canonical URL /:slug/.
 * Pure blog articles (no "job-support" in slug) live at /blog/:slug/.
 */
function getPostUrl(slug: string) {
  const isJobSupport = slug.includes('job-support') || slug.includes('job-help');
  return isJobSupport ? `/${slug}/` : `/blog/${slug}/`;
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <TopBar />
      <Navbar />
      <main style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto', padding: '3rem 1rem', background: 'var(--pts-bg)', minHeight: '60vh' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
          Blog
        </h1>
        <p style={{ color: 'var(--pts-text-muted)', marginBottom: '1.25rem', fontSize: '1rem' }}>
          Insights on IT job support, interview preparation, and real-time project assistance — for developers in USA, UK, Canada, Australia, Europe, Germany, Singapore, and New Zealand.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <a href="/job-support-usa/" style={{ fontSize:'0.82rem', color:'var(--pts-forest)', textDecoration:'none', fontWeight:600, border:'1px solid var(--pts-border)', borderRadius:'6px', padding:'0.3rem 0.65rem', background:'var(--pts-card-bg)' }}>Job Support USA</a>
          <a href="/job-support-uk/" style={{ fontSize:'0.82rem', color:'var(--pts-forest)', textDecoration:'none', fontWeight:600, border:'1px solid var(--pts-border)', borderRadius:'6px', padding:'0.3rem 0.65rem', background:'var(--pts-card-bg)' }}>Job Support UK</a>
          <a href="/interview-support-global/" style={{ fontSize:'0.82rem', color:'var(--pts-forest)', textDecoration:'none', fontWeight:600, border:'1px solid var(--pts-border)', borderRadius:'6px', padding:'0.3rem 0.65rem', background:'var(--pts-card-bg)' }}>Interview Support</a>
          <a href="/struggling-in-job-developer-help/" style={{ fontSize:'0.82rem', color:'var(--pts-forest)', textDecoration:'none', fontWeight:600, border:'1px solid var(--pts-border)', borderRadius:'6px', padding:'0.3rem 0.65rem', background:'var(--pts-card-bg)' }}>Struggling in Your Job?</a>
        </div>

        {/* Action trigger banner */}
        <div style={{ marginBottom: '2.5rem' }}>
          <ActionBanner
            headline="Need real-time IT job support or interview help? Our experts are available 24/7 — USA, UK, Canada & worldwide."
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => {
            const href = getPostUrl(post.slug);
            return (
              <article
                key={post.slug}
                className="card"
                style={{ padding: '1.5rem' }}
              >
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.4rem' }}>
                  <Link href={href} style={{ color: 'var(--pts-text)', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                {post.date && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--pts-text-subtle)', marginBottom: '0.5rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                )}
                {post.description && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--pts-text-muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                    {post.description}
                  </p>
                )}
                <Link
                  href={href}
                  style={{ color: 'var(--pts-accent)', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Read More →
                </Link>
              </article>
            );
          })}
        </div>
      </main>
      <PageBottomCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
