import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { getPostPublicHref } from '@/lib/post-canonical';
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
  alternates: {
    canonical,
    languages: {
      'en-US': canonical,
      'en-CA': canonical,
      'en-GB': canonical,
      'en-AU': canonical,
      'x-default': canonical,
    },
  },
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

/** Uses each post's permalink when set (matches indexed URLs). */
function getPostUrl(post: Awaited<ReturnType<typeof getAllPosts>>[number]) {
  return getPostPublicHref(post);
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

        {/* Featured cluster: AWS AI/ML — Amazon Bedrock & SageMaker */}
        <section className="card" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.35rem' }}>
            AWS AI/ML — Amazon Bedrock &amp; SageMaker
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--pts-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
            Deep technical guides on Amazon Bedrock, RAG and AgentCore, and Amazon SageMaker training,
            MLOps and inference — plus interview preparation for AWS GenAI and ML engineer roles.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              { label: 'Bedrock production architecture', href: '/blog/amazon-bedrock-production-architecture-2026/' },
              { label: 'Build & troubleshoot Bedrock RAG', href: '/blog/amazon-bedrock-rag-knowledge-bases-troubleshooting/' },
              { label: 'AgentCore architecture & troubleshooting', href: '/blog/amazon-bedrock-agentcore-architecture-troubleshooting/' },
              { label: 'Bedrock interview questions', href: '/blog/amazon-bedrock-interview-questions-2026/' },
              { label: 'Explain a Bedrock project in an interview', href: '/blog/how-to-explain-amazon-bedrock-project-in-interview/' },
              { label: 'SageMaker production architecture', href: '/blog/amazon-sagemaker-production-architecture-2026/' },
              { label: 'SageMaker MLOps: Pipelines, MLflow & Registry', href: '/blog/amazon-sagemaker-mlops-pipelines-mlflow-model-registry/' },
              { label: 'SageMaker inference troubleshooting', href: '/blog/amazon-sagemaker-inference-troubleshooting-guide/' },
              { label: 'SageMaker interview questions', href: '/blog/amazon-sagemaker-interview-questions-2026/' },
              { label: 'Explain a SageMaker MLOps project', href: '/blog/how-to-explain-sagemaker-mlops-project-in-interview/' },
              { label: 'Bedrock vs SageMaker AI', href: '/blog/amazon-bedrock-vs-sagemaker-ai-architecture-guide/' },
              { label: 'OpenSearch vs pgvector for RAG', href: '/blog/opensearch-vs-pgvector-bedrock-rag-guide/' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: '0.82rem', color: 'var(--pts-forest)', textDecoration: 'none', fontWeight: 600, border: '1px solid var(--pts-border)', borderRadius: '6px', padding: '0.35rem 0.7rem', background: 'var(--pts-card-bg)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
            <Link href="/aws-ai-ml-job-support/" style={{ color: 'var(--pts-accent)', fontWeight: 600 }}>
              AWS AI/ML job support hub →
            </Link>
          </div>
        </section>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => {
            const href = getPostUrl(post);
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
