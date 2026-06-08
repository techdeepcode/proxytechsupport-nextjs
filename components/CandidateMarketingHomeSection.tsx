import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CandidateMarketingHomeSection() {
  return (
    <>
      <style>{`
        .cmhs-section {
          background:
            radial-gradient(ellipse 60% 50% at 0% 50%, rgba(0,223,130,.07) 0%, transparent 60%),
            var(--pts-section-alt);
          border-top:1px solid var(--pts-border);
          border-bottom:1px solid var(--pts-border);
          padding:clamp(3rem,6vw,5rem) 1rem;
        }
        .cmhs-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; }
        .cmhs-grid {
          display:grid; grid-template-columns:1fr; gap:2rem; align-items:start;
        }
        @media(min-width:1024px){
          .cmhs-grid { grid-template-columns:minmax(0,1fr) minmax(300px,420px); column-gap:clamp(2rem,4vw,3.5rem); }
        }
        .cmhs-badge {
          display:inline-flex; align-items:center; gap:.5rem;
          font-size:.75rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase;
          color:var(--pts-forest); background:rgba(0,223,130,.1);
          border:1px solid rgba(0,223,130,.28); border-radius:50px;
          padding:.3rem .9rem; margin-bottom:1rem;
        }
        .cmhs-badge-dot { width:7px; height:7px; border-radius:50%; background:var(--pts-accent); flex-shrink:0; }
        .cmhs-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.45rem,3vw,2.2rem); font-weight:700;
          color:var(--pts-text); line-height:1.25; margin-bottom:1rem;
        }
        .cmhs-body { font-size:clamp(.93rem,1.6vw,1rem); color:var(--pts-text-muted); line-height:1.8; margin-bottom:1.25rem; }
        .cmhs-cta-row { display:flex; flex-wrap:wrap; gap:.85rem; align-items:center; margin-top:1.5rem; }
        .cmhs-btn-wa {
          display:inline-flex; align-items:center; gap:.5rem;
          background:#25D366; color:#fff; font-weight:700; font-size:.95rem;
          padding:.85rem 1.6rem; border-radius:50px; text-decoration:none;
          transition:filter .2s,transform .2s; white-space:nowrap;
        }
        .cmhs-btn-wa:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .cmhs-btn-link {
          display:inline-flex; align-items:center; gap:.4rem;
          font-size:.93rem; font-weight:700; color:var(--pts-forest);
          text-decoration:none; border-bottom:2px solid rgba(0,223,130,.3);
          padding-bottom:.1rem; transition:border-color .15s,color .15s;
        }
        .cmhs-btn-link:hover { border-color:var(--pts-accent); color:var(--pts-forest-hover); }
        .cmhs-features-card {
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem 1.75rem;
          box-shadow:var(--pts-shadow-lp);
        }
        .cmhs-features-title {
          font-size:.72rem; font-weight:700; letter-spacing:.16em; text-transform:uppercase;
          color:var(--pts-accent); margin-bottom:1rem;
        }
        .cmhs-feature-item {
          display:flex; gap:.6rem; align-items:flex-start;
          font-size:.92rem; color:var(--pts-text-muted); line-height:1.55;
          padding:.6rem 0; border-bottom:1px solid var(--pts-border);
        }
        .cmhs-feature-item:last-child { border-bottom:none; }
        .cmhs-feature-dot {
          width:20px; height:20px; border-radius:6px; flex-shrink:0; margin-top:1px;
          background:rgba(0,223,130,.12); color:var(--pts-forest);
          display:flex; align-items:center; justify-content:center;
        }
        @media(max-width:640px){
          .cmhs-cta-row { flex-direction:column; align-items:flex-start; }
          .cmhs-btn-wa { width:100%; justify-content:center; min-height:52px; border-radius:12px; }
        }
      `}</style>

      <section className="cmhs-section" aria-labelledby="cmhs-heading">
        <div className="cmhs-inner">
          <div className="cmhs-grid">

            {/* ── Left: copy ── */}
            <div>
              <p className="cmhs-badge">
                <span className="cmhs-badge-dot" aria-hidden />
                Job Application &amp; Candidate Marketing
              </p>
              <h2 className="cmhs-h2" id="cmhs-heading">
                Not Getting Interview Calls? Your Profile May Not Be Moving Enough.
              </h2>
              <p className="cmhs-body">
                AI screening, layoffs, and mass job applications have made the market more competitive. If your profile is not being applied, marketed, followed up, and pushed to recruiters consistently, it sits idle while others move ahead.
              </p>
              <p className="cmhs-body">
                Our Job Application &amp; Candidate Marketing service runs a structured daily campaign so your profile stays active in the market every week.
              </p>
              <div className="cmhs-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="cmhs-btn-wa">
                  <WAIcon />
                  Start Job Marketing
                </a>
                <a href="/job-application-candidate-marketing/" className="cmhs-btn-link">
                  Explore Candidate Marketing →
                </a>
              </div>
            </div>

            {/* ── Right: features card ── */}
            <aside className="cmhs-features-card" aria-label="What we do in candidate marketing">
              <p className="cmhs-features-title">What We Do for You</p>
              {[
                { icon: '🎯', text: 'Targeted job search — relevant roles only, not mass spray' },
                { icon: '📨', text: 'Applications submitted on your behalf daily' },
                { icon: '📞', text: 'Recruiter & vendor outreach — direct professional contact' },
                { icon: '🔁', text: 'Professional follow-ups at the right intervals' },
                { icon: '📊', text: 'Application tracker — full visibility every step' },
                { icon: '📋', text: 'Weekly progress report — what happened, what is next' },
                { icon: '🤝', text: 'Interview opportunity handoff — immediate when calls come in' },
              ].map((f) => (
                <div key={f.text} className="cmhs-feature-item">
                  <span className="cmhs-feature-dot" aria-hidden>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
