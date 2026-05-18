'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  knowledgeBaseGuides,
  KB_CATEGORIES,
  KB_SECTION_ORDER,
  KB_SECTION_LABELS,
  CATEGORY_COLORS,
  FEATURED_HREFS,
  type KBCategoryKey,
} from '@/data/knowledgeBaseGuides';

type ActiveCat = 'all' | KBCategoryKey | 'production';

function GuideCard({ guide }: { guide: (typeof knowledgeBaseGuides)[number] }) {
  const colors = CATEGORY_COLORS[guide.category] ?? { bg: '#f3f4f6', text: '#374151', border: '#e5e7eb' };
  return (
    <Link href={guide.href} className="kb-guide-card">
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          padding: '0.18rem 0.5rem',
          borderRadius: '20px',
          background: colors.bg,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          marginBottom: '0.55rem',
        }}
      >
        {guide.category}
      </span>
      <h3
        style={{
          fontSize: '0.93rem',
          fontWeight: 700,
          color: '#030f0f',
          lineHeight: 1.35,
          marginBottom: '0.4rem',
        }}
      >
        {guide.title}
      </h3>
      <p
        style={{
          fontSize: '0.83rem',
          color: '#6b7280',
          lineHeight: 1.55,
          marginBottom: '0.7rem',
          flexGrow: 1,
        }}
      >
        {guide.description}
      </p>
      <span
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#00874a',
        }}
      >
        Read guide →
      </span>
    </Link>
  );
}

export default function KnowledgeBaseExplorer() {
  const [activeCat, setActiveCat] = useState<ActiveCat>('all');
  const [search, setSearch] = useState('');

  const isDefault = activeCat === 'all' && search.trim() === '';

  const filtered = useMemo(() => {
    let guides = knowledgeBaseGuides;
    if (activeCat !== 'all') {
      guides =
        activeCat === 'production'
          ? guides.filter((g) => g.tags.includes('production'))
          : guides.filter((g) => g.categoryKey === activeCat);
    }
    const q = search.trim().toLowerCase();
    if (q) {
      guides = guides.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return guides;
  }, [activeCat, search]);

  const featuredGuides = useMemo(
    () =>
      FEATURED_HREFS.map((href) => knowledgeBaseGuides.find((g) => g.href === href)).filter(
        Boolean,
      ) as (typeof knowledgeBaseGuides)[number][],
    [],
  );

  return (
    <div>
      <style>{`
        .kb-guide-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1rem 1.125rem;
          text-decoration: none;
          transition: box-shadow 0.18s, transform 0.18s, border-color 0.18s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .kb-guide-card:hover {
          box-shadow: 0 4px 18px rgba(0,0,0,0.1);
          transform: translateY(-2px);
          border-color: #bbf7d0;
        }
        .kb-chip {
          cursor: pointer;
          white-space: nowrap;
          border: 1.5px solid #e5e7eb;
          border-radius: 20px;
          padding: 0.42rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 500;
          background: #ffffff;
          color: #374151;
          transition: all 0.15s;
          line-height: 1.4;
        }
        .kb-chip:hover {
          border-color: #00df82;
          color: #030f0f;
        }
        .kb-chip--active {
          border-color: #00df82 !important;
          background: #00df82 !important;
          color: #030f0f !important;
          font-weight: 700 !important;
        }
        .kb-search {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          background: #ffffff;
          color: #030f0f;
          box-sizing: border-box;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .kb-search:focus {
          outline: none;
          border-color: #00df82;
          box-shadow: 0 0 0 3px rgba(0,223,130,0.12);
        }
        .kb-chips-row {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .kb-chips-row::-webkit-scrollbar { display: none; }
        .kb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
        }
        @media (min-width: 600px) {
          .kb-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .kb-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .kb-funnel-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .kb-funnel-link {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          background: #030f0f;
          color: #00df82;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .kb-funnel-link:hover {
          background: #0f2722;
        }
        @media (max-width: 599px) {
          .kb-funnel-link {
            flex: 1 1 calc(50% - 0.3rem);
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      {/* Search */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="search"
          className="kb-search"
          placeholder="Search guides by technology, country, interview, job support..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search knowledge base guides"
        />
      </div>

      {/* Category chips */}
      <div
        className="kb-chips-row"
        style={{ marginBottom: '1.75rem' }}
        role="tablist"
        aria-label="Filter by category"
      >
        {KB_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`kb-chip${activeCat === cat.key ? ' kb-chip--active' : ''}`}
            role="tab"
            aria-selected={activeCat === cat.key}
            onClick={() => setActiveCat(cat.key as ActiveCat)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {isDefault ? (
        <>
          {/* Featured guides */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#030f0f',
                marginBottom: '0.85rem',
                letterSpacing: '-0.01em',
              }}
            >
              Featured Guides
            </h2>
            <div className="kb-grid">
              {featuredGuides.map((guide) => (
                <GuideCard key={guide.href} guide={guide} />
              ))}
            </div>
          </div>

          {/* All category sections */}
          {KB_SECTION_ORDER.map((catKey) => {
            const sectionGuides = knowledgeBaseGuides.filter((g) => g.categoryKey === catKey);
            return (
              <section key={catKey} style={{ marginBottom: '2.5rem' }}>
                <h2
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#030f0f',
                    marginBottom: '0.3rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {KB_SECTION_LABELS[catKey]}
                </h2>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#9ca3af',
                    marginBottom: '0.85rem',
                  }}
                >
                  {sectionGuides.length} guide{sectionGuides.length !== 1 ? 's' : ''}
                </p>
                <div className="kb-grid">
                  {sectionGuides.map((guide) => (
                    <GuideCard key={guide.href} guide={guide} />
                  ))}
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <div>
          {filtered.length === 0 ? (
            <p
              style={{
                color: '#6b7280',
                fontSize: '0.95rem',
                padding: '2.5rem 0',
                textAlign: 'center',
              }}
            >
              No guides found. Try a different search term or select a different category.
            </p>
          ) : (
            <>
              <p style={{ fontSize: '0.83rem', color: '#9ca3af', marginBottom: '0.85rem' }}>
                {filtered.length} guide{filtered.length !== 1 ? 's' : ''} found
              </p>
              <div className="kb-grid">
                {filtered.map((guide) => (
                  <GuideCard key={guide.href} guide={guide} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Funnel CTA */}
      <section
        style={{
          marginTop: '3.5rem',
          padding: '1.75rem 1.5rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '14px',
        }}
      >
        <h2
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#030f0f',
            marginBottom: '0.65rem',
          }}
        >
          Need Help Beyond Reading Guides?
        </h2>
        <p
          style={{
            fontSize: '0.92rem',
            color: '#4b5563',
            lineHeight: 1.65,
            marginBottom: '1.25rem',
            maxWidth: '640px',
          }}
        >
          If you are stuck in an interview, production issue, client call, project onboarding, or
          job delivery pressure, use the relevant support page to contact Proxy Tech Support.
        </p>
        <div className="kb-funnel-links">
          {[
            { label: 'USA IT Job Support', href: '/job-support-usa/' },
            { label: 'Proxy Job Support', href: '/proxy-job-support/' },
            { label: 'USA Interview Support', href: '/proxy-interview-usa/' },
            { label: 'Canada Interview Scheduling', href: '/get-interview-scheduled-canada/' },
            { label: 'Canada Job Support', href: '/job-support-canada/' },
            { label: 'Ireland Job Support', href: '/job-support-ireland/' },
            { label: 'Germany Job Support', href: '/job-support-germany/' },
            { label: 'Australia Job Support', href: '/job-support-australia/' },
            { label: 'Europe Job Support', href: '/job-support-europe/' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="kb-funnel-link">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
