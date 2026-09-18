'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  companies,
  featuredCompanies,
  COMPANY_CATEGORIES,
  companyLetter,
  ALPHABET,
  type Company,
  type CategoryKey,
  type SupportStatus,
} from '@/data/companies/registry';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

type ActiveCat = 'all' | CategoryKey;

const STATUS_META: Record<SupportStatus, { label: string; bg: string; text: string; border: string }> = {
  supported: { label: 'Supported', bg: '#dcfce7', text: '#166534', border: '#bbf7d0' },
  'dedicated-cluster': { label: 'Dedicated Cluster', bg: '#dbeafe', text: '#1e40af', border: '#bfdbfe' },
  limited: { label: 'Limited Coverage', bg: '#fef9c3', text: '#854d0e', border: '#fde68a' },
  'coming-soon': { label: 'Coming Soon', bg: '#f3f4f6', text: '#4b5563', border: '#e5e7eb' },
};

function CompanyCard({ company }: { company: Company }) {
  // Single, consistent "Supported" badge everywhere — mixed statuses confuse visitors.
  const status = STATUS_META.supported;
  const chips = company.supportTypes.slice(0, 6);
  const cta = `View ${company.name} support`;
  return (
    <Link href={company.primaryUrl} className="tc-card" aria-label={`${company.name} — Supported`}>
      <div className="tc-card-head">
        <h3 className="tc-card-name">{company.name}</h3>
        <span
          className="tc-badge"
          style={{ background: status.bg, color: status.text, border: `1px solid ${status.border}` }}
        >
          {status.label}
        </span>
      </div>
      <p className="tc-card-industry">{company.industry}</p>
      <p className="tc-card-blurb">{company.blurb}</p>
      <div className="tc-chips">
        {chips.map((t) => (
          <span key={t} className="tc-type-chip">
            {t}
          </span>
        ))}
      </div>
      <span className="tc-card-cta">{cta} →</span>
    </Link>
  );
}

export default function TechCompaniesDashboard() {
  const [activeCat, setActiveCat] = useState<ActiveCat>('all');
  const [letter, setLetter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const isDefault = activeCat === 'all' && !letter && search.trim() === '';

  const availableLetters = useMemo(() => {
    const s = new Set<string>();
    companies.forEach((c) => s.add(companyLetter(c)));
    return s;
  }, []);

  const filtered = useMemo(() => {
    let list = companies;
    if (activeCat !== 'all') list = list.filter((c) => c.category === activeCat);
    if (letter) list = list.filter((c) => companyLetter(c) === letter);
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q) ||
          c.aliases.some((a) => a.toLowerCase().includes(q)) ||
          c.supportTypes.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [activeCat, letter, search]);

  // A–Z grouping for the default (fully crawlable) view.
  const grouped = useMemo(() => {
    const map = new Map<string, Company[]>();
    for (const c of companies) {
      const l = companyLetter(c);
      if (!map.has(l)) map.set(l, []);
      map.get(l)!.push(c);
    }
    const order = [...ALPHABET, '#'].filter((l) => map.has(l));
    return order.map((l) => ({ letter: l, items: map.get(l)!.sort((a, b) => a.name.localeCompare(b.name)) }));
  }, []);

  return (
    <div>
      <style>{`
        .tc-search { width: 100%; padding: 0.85rem 1rem; font-size: 1rem; border: 1.5px solid #e5e7eb; border-radius: 10px; background: #fff; color: #030f0f; box-sizing: border-box; transition: border-color .15s, box-shadow .15s; }
        .tc-search:focus { outline: none; border-color: #00df82; box-shadow: 0 0 0 3px rgba(0,223,130,0.12); }
        .tc-chips-row { display: flex; flex-wrap: wrap; gap: 0.5rem; padding-bottom: 0.3rem; }
        .tc-chip { cursor: pointer; white-space: nowrap; border: 1.5px solid #e5e7eb; border-radius: 20px; padding: 0.42rem 0.9rem; font-size: 0.85rem; font-weight: 500; background: #fff; color: #374151; transition: all .15s; line-height: 1.4; }
        .tc-chip:hover { border-color: #00df82; color: #030f0f; }
        .tc-chip--active { border-color: #00df82 !important; background: #00df82 !important; color: #030f0f !important; font-weight: 700 !important; }
        .tc-az { display: flex; flex-wrap: wrap; gap: 0.25rem; margin: 1rem 0 0.5rem; }
        .tc-az button { min-width: 30px; height: 30px; border: 1px solid #e5e7eb; background: #fff; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #374151; cursor: pointer; transition: all .12s; }
        .tc-az button:hover:not(:disabled) { border-color: #00df82; color: #030f0f; }
        .tc-az button:disabled { opacity: 0.3; cursor: default; }
        .tc-az .tc-az-active { border-color: #00df82; background: #00df82; color: #030f0f; }
        .tc-grid { display: grid; grid-template-columns: 1fr; gap: 0.85rem; }
        @media (min-width: 640px) { .tc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .tc-grid { grid-template-columns: repeat(3, 1fr); } }
        .tc-card { display: flex; flex-direction: column; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem 1.125rem; text-decoration: none; transition: box-shadow .18s, transform .18s, border-color .18s; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
        .tc-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.1); transform: translateY(-2px); border-color: #bbf7d0; }
        .tc-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem; }
        .tc-card-name { font-size: 1rem; font-weight: 700; color: #030f0f; line-height: 1.3; }
        .tc-badge { flex-shrink: 0; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.02em; padding: 0.16rem 0.45rem; border-radius: 20px; white-space: nowrap; }
        .tc-card-industry { font-size: 0.76rem; color: #00874a; font-weight: 600; margin-bottom: 0.5rem; }
        .tc-card-blurb { font-size: 0.83rem; color: #6b7280; line-height: 1.5; margin-bottom: 0.7rem; flex-grow: 1; }
        .tc-chips { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 0.75rem; }
        .tc-type-chip { font-size: 0.68rem; font-weight: 600; color: #374151; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; padding: 0.12rem 0.4rem; }
        .tc-card-cta { font-size: 0.8rem; font-weight: 700; color: #00874a; }
        .tc-section-h2 { font-size: 1.05rem; font-weight: 700; color: #030f0f; margin-bottom: 0.2rem; letter-spacing: -0.01em; }
        .tc-count { font-size: 0.82rem; color: #9ca3af; margin-bottom: 0.85rem; }
        .tc-noresult { color: #6b7280; font-size: 0.95rem; padding: 2rem 0; text-align: center; }
        .tc-contact { display: inline-flex; align-items: center; padding: 0.7rem 1.4rem; border-radius: 50px; background: #00df82; color: #030f0f; font-weight: 700; font-size: 0.9rem; text-decoration: none; margin-top: 0.75rem; }
      `}</style>

      {/* Search */}
      <div style={{ marginBottom: '0.9rem' }}>
        <input
          type="search"
          className="tc-search"
          placeholder="Search Microsoft, Google, NVIDIA, Netflix, Salesforce..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setLetter(null);
          }}
          aria-label="Search supported companies"
        />
      </div>

      {/* Industry filters */}
      <div className="tc-chips-row" role="tablist" aria-label="Filter by industry">
        <button
          className={`tc-chip${activeCat === 'all' ? ' tc-chip--active' : ''}`}
          role="tab"
          aria-selected={activeCat === 'all'}
          onClick={() => setActiveCat('all')}
        >
          All Companies
        </button>
        {COMPANY_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`tc-chip${activeCat === cat.key ? ' tc-chip--active' : ''}`}
            role="tab"
            aria-selected={activeCat === cat.key}
            onClick={() => setActiveCat(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* A–Z navigation */}
      <div className="tc-az" role="group" aria-label="Jump to letter">
        {ALPHABET.map((l) => (
          <button
            key={l}
            className={letter === l ? 'tc-az-active' : ''}
            disabled={!availableLetters.has(l)}
            aria-pressed={letter === l}
            onClick={() => setLetter(letter === l ? null : l)}
          >
            {l}
          </button>
        ))}
        {letter && (
          <button onClick={() => setLetter(null)} aria-label="Clear letter filter">
            Clear
          </button>
        )}
      </div>

      {isDefault ? (
        <>
          {/* Featured */}
          <section style={{ margin: '1.5rem 0 2.5rem' }}>
            <h2 className="tc-section-h2">Featured Companies</h2>
            <p className="tc-count">High-demand employers with dedicated support hubs.</p>
            <div className="tc-grid">
              {featuredCompanies.map((c) => (
                <CompanyCard key={c.slug} company={c} />
              ))}
            </div>
          </section>

          {/* All companies grouped A–Z (fully crawlable) */}
          <h2 className="tc-section-h2">All Companies</h2>
          <p className="tc-count">{companies.length} major employers — browse A–Z or search above.</p>
          {grouped.map((g) => (
            <section key={g.letter} id={`letter-${g.letter}`} style={{ marginBottom: '2rem' }}>
              <h3
                style={{ fontSize: '0.95rem', fontWeight: 800, color: '#00874a', margin: '0.5rem 0 0.75rem' }}
              >
                {g.letter}
              </h3>
              <div className="tc-grid">
                {g.items.map((c) => (
                  <CompanyCard key={c.slug} company={c} />
                ))}
              </div>
            </section>
          ))}
        </>
      ) : (
        <div style={{ marginTop: '1.25rem' }}>
          {filtered.length === 0 ? (
            <div className="tc-noresult">
              <p style={{ fontWeight: 700, color: '#030f0f', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                Company not listed? You&apos;re still covered.
              </p>
              <p style={{ maxWidth: '620px', margin: '0 auto' }}>
                Our interview and job support is built around your <strong>technology, stack and role</strong> — not
                whether a company happens to be in this list. If you&apos;re interviewing anywhere or working on any
                project, we can help.
              </p>
              <p style={{ maxWidth: '620px', margin: '0.5rem auto 0' }}>
                Share your job description and we&apos;ll match you with an in-house expert who knows exactly the skills,
                coding rounds and system-design topics your interview or project needs.
              </p>
              <a href={WHATSAPP_ME_URL} className="tc-contact" target="_blank" rel="noopener noreferrer">
                Share your JD on WhatsApp — we&apos;ll help
              </a>
            </div>
          ) : (
            <>
              <p className="tc-count">
                {filtered.length} compan{filtered.length !== 1 ? 'ies' : 'y'} found
              </p>
              <div className="tc-grid">
                {filtered.map((c) => (
                  <CompanyCard key={c.slug} company={c} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
