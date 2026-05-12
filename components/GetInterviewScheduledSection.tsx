import Link from 'next/link';

export default function GetInterviewScheduledSection() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 0,
        background:
          'radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.1) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.15) 0%, transparent 50%), linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%)',
        padding: 'clamp(3rem,6vw,5rem) 1rem',
      }}
    >
      <style>{`
        .gis-home-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; display:grid; gap:2.5rem; align-items:center; }
        @media(min-width:1024px){ .gis-home-inner{ grid-template-columns:minmax(0,1fr) minmax(280px,380px); gap:3.5rem; } }
        .gis-home-eyebrow { font-size:0.72rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:0.85rem; }
        .gis-home-h2 { font-family:Georgia,'Times New Roman',serif; font-size:clamp(1.65rem,3.5vw,2.4rem); font-weight:700; color:#ffffff; line-height:1.2; margin-bottom:1rem; }
        .gis-home-sub { font-size:clamp(0.95rem,1.8vw,1.05rem); color:rgba(255,255,255,0.72); line-height:1.7; margin-bottom:1.75rem; max-width:560px; }
        .gis-home-cta {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:var(--pts-accent); color:#1a1a1a; font-weight:800; font-size:0.97rem;
          padding:0.9rem 1.85rem; border-radius:50px; text-decoration:none;
          transition:filter 0.2s,transform 0.2s;
        }
        .gis-home-cta:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .gis-home-points { display:flex; flex-direction:column; gap:0.85rem; }
        .gis-home-point {
          display:flex; gap:0.65rem; align-items:flex-start;
          background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);
          border-radius:10px; padding:0.9rem 1.1rem;
          font-size:0.92rem; color:rgba(255,255,255,0.78); line-height:1.5;
          transition:background 0.2s;
        }
        .gis-home-point:hover { background:rgba(255,255,255,0.08); }
        .gis-home-point-icon {
          width:22px; height:22px; border-radius:6px; flex-shrink:0;
          background:rgba(0,223,130,0.15); color:var(--pts-accent);
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }
        @media(max-width:768px){
          .gis-home-cta { width:100%; justify-content:center; min-height:52px; border-radius:12px; }
        }
      `}</style>

      <div className="gis-home-inner">
        <div>
          <p className="gis-home-eyebrow">Profile Engineering & Recruiter Visibility</p>
          <h2 className="gis-home-h2">Get Interview Scheduled</h2>
          <p className="gis-home-sub">
            Not getting interview calls even after applying to hundreds of jobs? We help you build a high-visibility professional profile aligned with real hiring demand — so recruiters find you, not the other way around.
          </p>
          <Link href="/get-interview-scheduled/" className="gis-home-cta">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Get Interview Scheduled
          </Link>
        </div>

        <div className="gis-home-points">
          {[
            { icon: '🎯', text: 'Industry-specific profile positioning' },
            { icon: '🔍', text: 'Recruiter visibility optimization' },
            { icon: '🌍', text: 'USA, UK, Canada, Europe & Australia' },
            { icon: '⚡', text: 'Multi-profile strategy for different roles' },
            { icon: '📈', text: 'High-intent keyword alignment' },
            { icon: '🧠', text: 'ATS-Friendly Technical Resume Structuring' },
            { icon: '🚀', text: 'LinkedIn Search & Headline Optimization' },
            { icon: '💼', text: 'Domain-Specific Career Branding' },
          ].map((p) => (
            <div key={p.text} className="gis-home-point">
              <span className="gis-home-point-icon" aria-hidden>{p.icon}</span>
              <span>{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
