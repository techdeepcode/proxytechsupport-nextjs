'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  SERIES_NAME,
  SERIES_TOTAL,
  getRelated,
  seriesNeighbors,
  type ResearchPublication,
} from '@/data/research/cluster';
import { ResearchBadgeRow } from '@/components/research/primitives';
import ResearchStyles from '@/components/research/ResearchStyles';

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  pub: ResearchPublication;
  toc: TocItem[];
  /** Optional custom evidence-rail content (desktop right column). */
  rail?: ReactNode;
  children: ReactNode;
}

const PROFILE_CELLS = (p: ResearchPublication): { k: string; v: ReactNode }[] => [
  { k: 'Research Area', v: p.area },
  { k: 'Publication Type', v: p.type },
  { k: 'Published', v: fmt(p.published) },
  { k: 'Updated', v: fmt(p.updated) },
  { k: 'Evidence Reviewed', v: p.evidenceReviewed },
  { k: 'Evidence Confidence', v: p.evidenceConfidence },
  { k: 'Reading Time', v: p.readingTime },
  {
    k: 'Primary Evidence',
    v: (
      <>
        {p.primaryEvidence[0]}
        {p.primaryEvidence.length > 1 ? <small>+ {p.primaryEvidence.slice(1).join(', ')}</small> : null}
      </>
    ),
  },
];

function fmt(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export default function ResearchLayout({ pub, toc, rail, children }: Props) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? '');
  const [tocOpen, setTocOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const { prev, next } = seriesNeighbors(pub.slug);
  const related = getRelated(pub.slug);

  useEffect(() => {
    const article = document.getElementById('rx-article');
    const bar = progressRef.current;
    if (!article || !bar) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = article.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        bar.style.width = `${(scrolled / Math.max(total, 1)) * 100}%`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const headings = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!headings.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-88px 0px -70% 0px', threshold: 0 },
    );
    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [toc]);

  return (
    <div className="rx-root">
      <ResearchStyles />
      <div className="rx-progress" ref={progressRef} aria-hidden="true" />

      {/* Masthead */}
      <header className="rx-masthead">
        <div className="rx-mast-inner">
          <p className="rx-eyebrow">
            <span className="rx-dot" />
            <Link href="/research/" style={{ color: '#6fe4b6', textDecoration: 'none' }}>
              ProxyTech Research
            </Link>
            <span aria-hidden style={{ opacity: 0.5 }}>/</span>
            <span>{pub.area}</span>
            <span aria-hidden style={{ opacity: 0.5 }}>/</span>
            <span>
              Series {String(pub.seriesIndex).padStart(2, '0')} of {String(SERIES_TOTAL).padStart(2, '0')}
            </span>
          </p>
          <h1 className="rx-h1">{pub.title}</h1>
          <p className="rx-dek">{pub.summary}</p>
          <ResearchBadgeRow labels={pub.labels} />
          <section className="rx-profile" aria-label="Research profile">
            {PROFILE_CELLS(pub).map((c) => (
              <div className="rx-profile-cell" key={c.k}>
                <p className="rx-profile-k">{c.k}</p>
                <div className="rx-profile-v">{c.v}</div>
              </div>
            ))}
          </section>
        </div>
      </header>

      {/* Body grid */}
      <div className="rx-shell">
        <div className="rx-grid">
          {/* TOC */}
          <nav className="rx-toc" aria-label="Table of contents" data-open={tocOpen ? 'true' : 'false'}>
            <button
              type="button"
              className="rx-toc-toggle"
              aria-expanded={tocOpen}
              onClick={() => setTocOpen((v) => !v)}
            >
              <span>On this page</span>
              <span aria-hidden>{tocOpen ? '−' : '+'}</span>
            </button>
            <div className="rx-toc-panel">
              <p className="rx-toc-title">On this page</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className={activeId === t.id ? 'is-active' : ''}
                      onClick={() => setTocOpen(false)}
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Article body */}
          <article className="rx-body" id="rx-article">
            {children}

            {/* Series navigation */}
            <nav className="rx-series rx-full" aria-label="Research series navigation">
              <div className="rx-series-top">
                <span className="rx-series-name">Research Series · {SERIES_NAME}</span>
                <span className="rx-series-count">
                  {String(pub.seriesIndex).padStart(2, '0')} / {String(SERIES_TOTAL).padStart(2, '0')}
                </span>
              </div>
              <div className="rx-series-links">
                {prev ? (
                  <Link className="rx-series-link" href={`/${prev.slug}/`}>
                    <span className="rx-sl-dir">← Previous</span>
                    <span className="rx-sl-title">{prev.navTitle}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link className="rx-series-link rx-next" href={`/${next.slug}/`}>
                    <span className="rx-sl-dir">Next →</span>
                    <span className="rx-sl-title">{next.navTitle}</span>
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </nav>

            {/* Related research */}
            {related.length > 0 && (
              <section className="rx-related rx-full" aria-label="Related research">
                <div className="rx-sec-head" style={{ margin: '1.5rem 0 1rem' }}>
                  <span className="rx-sec-kicker">Related research</span>
                </div>
                <div className="rx-related-grid">
                  {related.map((r) => (
                    <Link className="rx-card" key={r.slug} href={`/${r.slug}/`}>
                      <span className="rx-card-area">{r.area}</span>
                      <span className="rx-card-title">{r.navTitle}</span>
                      <span className="rx-card-sum">{r.researchQuestion}</span>
                      <span className="rx-card-foot">
                        <span className="rx-card-meta">{r.type}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Restrained engineering assistance */}
            <section className="rx-assist rx-full" aria-label="Engineering assistance">
              <h2>Engineering assistance</h2>
              <p>
                ProxyTech works with engineers and teams building production AI, cloud, security,
                data and distributed systems. If this analysis maps to a system you are designing or
                operating, we provide hands-on support and interview preparation for these domains.
              </p>
              <div className="rx-assist-links">
                <Link href="/ai-security-governance-job-support/">AI security &amp; governance support</Link>
                <Link href="/agentic-ai-job-support/">Agentic AI engineering support</Link>
                <Link href="/cybersecurity-devsecops-job-support-guide/">Cybersecurity / DevSecOps</Link>
                <Link href="/research/">Back to the research archive</Link>
              </div>
            </section>

            <p className="rx-meta-note rx-full">
              This is an independent ProxyTech engineering-research analysis that references public
              academic papers and primary security disclosures. It is not peer-reviewed, is not
              affiliated with arXiv or any university, and does not represent the cited authors.
              Evidence reviewed {pub.evidenceReviewed}; interpretations are ProxyTech&rsquo;s own.
            </p>
          </article>

          {/* Evidence rail */}
          {rail ? (
            <aside className="rx-rail" aria-label="Evidence and key figures">
              {rail}
            </aside>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
