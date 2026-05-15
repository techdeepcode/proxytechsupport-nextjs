export default function USALegacyTrustBanner() {
  return (
    <>
      <style>{`
        .ulb-root {
          background: var(--pts-tech-header);
          border-top: 1px solid rgba(0,223,130,0.2);
          border-bottom: 1px solid rgba(0,223,130,0.2);
          padding: 1.25rem 1rem;
        }
        .ulb-inner {
          width: 100%; max-width: var(--pts-content-max); margin: 0 auto;
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem 1.5rem;
        }
        .ulb-badge {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--pts-forest); white-space: nowrap; flex-shrink: 0;
        }
        .ulb-badge svg { flex-shrink: 0; }
        .ulb-copy { font-size: 0.88rem; color: var(--pts-text-muted); line-height: 1.55; flex: 1; min-width: 200px; }
        .ulb-link {
          font-size: 0.82rem; font-weight: 700; color: var(--pts-forest);
          text-decoration: underline; text-decoration-color: rgba(3,98,76,0.35);
          white-space: nowrap; flex-shrink: 0; transition: color 0.15s;
        }
        .ulb-link:hover { color: var(--pts-forest-hover); }
      `}</style>
      <div className="ulb-root">
        <div className="ulb-inner">
          <span className="ulb-badge">
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Trusted Since 2008 for USA IT Job Pressure
          </span>
          <p className="ulb-copy">
            From the Great Recession to COVID remote work to the AI era, Proxy Tech Support has helped USA IT professionals handle client calls, interviews, production issues, and real project pressure.
          </p>
          <a href="/usa-it-job-support-legacy/" className="ulb-link">Our USA Legacy →</a>
        </div>
      </div>
    </>
  );
}
