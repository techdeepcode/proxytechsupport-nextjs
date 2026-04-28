import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBottomCTA from '@/components/PageBottomCTA';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { defaultOgImage } from '@/lib/site-seo';

const canonical = 'https://proxytechsupport.com/blog/';
const blogTitle = 'Blog | Proxy Tech Support';
const blogDescription =
  'Latest articles on IT job support, interview assistance, and real-time project help.';

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
        <p style={{ color: 'var(--pts-text-muted)', marginBottom: '2.5rem', fontSize: '1rem' }}>
          Insights on IT job support, interview preparation, and real-time project assistance.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card"
              style={{ padding: '1.5rem' }}
            >
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.4rem' }}>
                <Link href={`/${post.slug}/`} style={{ color: 'var(--pts-text)', textDecoration: 'none' }}>
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
                href={`/${post.slug}/`}
                style={{ color: 'var(--pts-accent)', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <PageBottomCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
