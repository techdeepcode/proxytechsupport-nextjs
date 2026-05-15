import USALegacyTimeline from '@/components/USALegacyTimeline';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

function WAIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function USALegacySection() {
  return (
    <>
      <style>{`
        .uls-root {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.2) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem, 7vw, 6rem) 1rem;
        }
        .uls-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; }
        .uls-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1.1rem;
        }
        .uls-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.6rem, 3.5vw, 2.5rem); font-weight: 700; color: #ffffff;
          line-height: 1.2; margin-bottom: 1.25rem; max-width: 780px;
        }
        .uls-para {
          font-size: clamp(0.95rem, 1.6vw, 1.05rem); color: rgba(255,255,255,0.7);
          line-height: 1.75; margin-bottom: 0.85rem; max-width: 680px;
        }
        .uls-para-strong { color: rgba(255,255,255,0.9); font-weight: 600; }
        .uls-cta-row {
          display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center;
          margin-top: 2rem; margin-bottom: 3rem;
        }
        .uls-btn-wa {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: #25D366; color: #ffffff; font-weight: 700; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          transition: filter 0.2s, transform 0.2s; white-space: nowrap;
        }
        .uls-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .uls-btn-outline {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: transparent; color: #ffffff; font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.6);
          transition: background 0.2s, border-color 0.2s, transform 0.2s; white-space: nowrap;
        }
        .uls-btn-outline:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.9); transform: translateY(-1px); }
        .uls-timeline-label {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 1rem;
        }
        .uls-legacy-link {
          display: inline-block; margin-top: 1.75rem; font-size: 0.9rem;
          color: var(--pts-accent); font-weight: 600; text-decoration: none;
          transition: opacity 0.15s;
        }
        .uls-legacy-link:hover { opacity: 0.8; }
        @media(max-width: 768px) {
          .uls-cta-row { flex-direction: column; gap: 0.55rem; }
          .uls-btn-wa, .uls-btn-outline {
            width: 100%; justify-content: center; min-height: 52px;
            font-size: 1rem; border-radius: 12px;
          }
        }
      `}</style>
      <section className="uls-root" aria-label="USA legacy trust section">
        <div className="uls-inner">
          <p className="uls-eyebrow"><span aria-hidden>✦</span> Since 2008 · USA-First</p>
          <h2 className="uls-h2">Helping USA IT Professionals Survive Every Tech Crisis Since 2008</h2>
          <p className="uls-para">
            Since 2008, Proxy Tech Support has helped USA-based developers, consultants, contractors, OPT/CPT/H1B professionals, and remote IT workers handle real job pressure — from the Great Recession to COVID remote work to today&apos;s AI-era layoffs and interview competition.
          </p>
          <p className="uls-para">
            We support professionals facing USA client calls, production issues, sprint pressure, technical interviews, proxy interview needs, cloud and DevOps blockers, full-stack project pressure, and urgent office-hours support.
          </p>
          <p className="uls-para">
            <span className="uls-para-strong">We are not a new support desk.</span> We are a veteran IT job support partner built around real USA job pressure.
          </p>

          <div className="uls-cta-row">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="uls-btn-wa">
              <WAIcon />
              Get USA Job Support
            </a>
            <a href="/proxy-interview-usa/" className="uls-btn-outline">
              Get Proxy Interview Help
            </a>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="uls-btn-outline">
              <WAIcon />
              Talk on WhatsApp
            </a>
          </div>

          <p className="uls-timeline-label">USA Tech Career Crisis History — 2008 to Today</p>
          <USALegacyTimeline variant="compact" />

          <a href="/usa-it-job-support-legacy/" className="uls-legacy-link">
            → Our Full USA IT Support Legacy Since 2008
          </a>
        </div>
      </section>
    </>
  );
}
