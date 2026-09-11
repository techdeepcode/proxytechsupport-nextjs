'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PUBLICATIONS } from '@/data/research/cluster';

/**
 * Client-side archive explorer. Filtering happens in the browser only — no query
 * params, no generated filter routes — so the archive never spawns thin indexable
 * pages (see research spec: "Discovery page filtering").
 */
export default function ResearchArchiveExplorer() {
  const areas = useMemo(() => {
    const set = new Set<string>();
    PUBLICATIONS.forEach((p) => set.add(p.area));
    return ['All areas', ...Array.from(set)];
  }, []);
  const [area, setArea] = useState('All areas');
  const [q, setQ] = useState('');

  const ordered = useMemo(() => [...PUBLICATIONS].sort((a, b) => a.seriesIndex - b.seriesIndex), []);

  const filtered = ordered.filter((p) => {
    const areaOk = area === 'All areas' || p.area === area;
    const needle = q.trim().toLowerCase();
    const qOk =
      !needle ||
      p.title.toLowerCase().includes(needle) ||
      p.summary.toLowerCase().includes(needle) ||
      p.researchQuestion.toLowerCase().includes(needle) ||
      p.area.toLowerCase().includes(needle);
    return areaOk && qOk;
  });

  return (
    <div>
      <style>{`
        .rx-ax-controls { display:flex; flex-wrap:wrap; gap:0.9rem; align-items:center; justify-content:space-between; margin-bottom:1.2rem; }
        .rx-ax-filters { display:flex; flex-wrap:wrap; gap:0.4rem; }
        .rx-ax-chip { font-family: var(--rx-mono); font-size:0.72rem; letter-spacing:0.04em; padding:0.34rem 0.7rem; border-radius:50px; border:1px solid var(--rx-line-strong); background:var(--rx-panel); color:var(--rx-muted); cursor:pointer; transition:all .15s; }
        .rx-ax-chip:hover { border-color: var(--rx-accent); color: var(--rx-ink); }
        .rx-ax-chip[aria-pressed="true"] { background: var(--rx-accent); border-color: var(--rx-accent); color:#fff; }
        .rx-ax-search { font-family: var(--rx-sans); font-size:0.86rem; padding:0.5rem 0.8rem; border:1px solid var(--rx-line-strong); border-radius:8px; background:var(--rx-panel); color:var(--rx-ink); min-width: 210px; }
        .rx-ax-count { font-family: var(--rx-mono); font-size:0.72rem; color: var(--rx-subtle); margin-bottom:0.8rem; }
      `}</style>

      <div className="rx-ax-controls">
        <div className="rx-ax-filters" role="group" aria-label="Filter by research area">
          {areas.map((a) => (
            <button
              key={a}
              type="button"
              className="rx-ax-chip"
              aria-pressed={area === a}
              onClick={() => setArea(a)}
            >
              {a}
            </button>
          ))}
        </div>
        <input
          type="search"
          className="rx-ax-search"
          placeholder="Search publications…"
          aria-label="Search research publications"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <p className="rx-ax-count" aria-live="polite">
        {filtered.length} publication{filtered.length === 1 ? '' : 's'}
      </p>

      <div className="rx-related-grid">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/${p.slug}/`} className="rx-card">
            <span className="rx-card-area">
              {p.area}
              {p.isFlagship ? ' · Flagship' : ''}
            </span>
            <span className="rx-card-title">{p.navTitle}</span>
            <span className="rx-card-sum">{p.summary}</span>
            <span className="rx-card-foot">
              {p.labels.slice(0, 2).map((l) => (
                <span key={l} className="rx-badge" data-k={l} style={{ fontSize: '0.6rem' }}>
                  {l}
                </span>
              ))}
              <span className="rx-card-meta">{p.readingTime}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
