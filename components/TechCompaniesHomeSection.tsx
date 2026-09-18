import Link from 'next/link';
import { companies, featuredCompanies } from '@/data/companies/registry';

/**
 * Additive homepage discovery funnel → /tech-companies/. Server-rendered, lightweight
 * (text links only, no client JS, no logos). Does not alter the rest of the homepage.
 */
export default function TechCompaniesHomeSection() {
  const featured = featuredCompanies.slice(0, 16);
  return (
    <section className="tch-home" aria-labelledby="tch-home-h2">
      <style>{`
        .tch-home { background: #030f0f; padding: clamp(2.5rem, 6vw, 4rem) 1rem; }
        .tch-home-inner { max-width: var(--pts-content-max, 1200px); margin: 0 auto; }
        .tch-home-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #00df82; margin-bottom: 0.6rem; }
        .tch-home-h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 3.4vw, 2.2rem); font-weight: 700; color: #fff; line-height: 1.22; margin-bottom: 0.85rem; max-width: 760px; }
        .tch-home-p { font-size: clamp(0.93rem, 1.5vw, 1.05rem); color: rgba(255,255,255,0.72); line-height: 1.65; margin-bottom: 1.5rem; max-width: 720px; }
        .tch-home-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem; }
        .tch-home-chip { display: inline-flex; align-items: center; padding: 0.4rem 0.85rem; border-radius: 20px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); color: rgba(255,255,255,0.9); font-size: 0.82rem; font-weight: 600; text-decoration: none; transition: background .15s, border-color .15s; }
        .tch-home-chip:hover { background: rgba(0,223,130,0.14); border-color: #00df82; color: #fff; }
        .tch-home-cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
        .tch-home-btn { display: inline-flex; align-items: center; padding: 0.8rem 1.6rem; border-radius: 50px; background: #00df82; color: #030f0f; font-weight: 700; font-size: 0.92rem; text-decoration: none; transition: filter .2s, transform .2s; }
        .tch-home-btn:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .tch-home-note { font-size: 0.85rem; color: rgba(255,255,255,0.55); }
        @media (max-width: 560px) { .tch-home-btn { width: 100%; justify-content: center; } }
      `}</style>
      <div className="tch-home-inner">
        <p className="tch-home-eyebrow">Tech Companies</p>
        <h2 id="tch-home-h2" className="tch-home-h2">
          Interview &amp; Job Support for Major Tech Companies
        </h2>
        <p className="tch-home-p">
          Search {companies.length}+ major technology and technology-driven employers to see available technical
          interview, proxy interview, job support, cloud, DevOps, AI/ML, data engineering and software engineering
          support. Independent support — we are not affiliated with any listed employer.
        </p>
        <div className="tch-home-chips">
          {featured.map((c) => (
            <Link key={c.slug} href={c.primaryUrl} className="tch-home-chip">
              {c.name}
            </Link>
          ))}
        </div>
        <div className="tch-home-cta-row">
          <Link href="/tech-companies/" className="tch-home-btn">
            Browse all companies →
          </Link>
          <span className="tch-home-note">Which company are you interviewing with? Search {companies.length}+ employers.</span>
        </div>
      </div>
    </section>
  );
}
