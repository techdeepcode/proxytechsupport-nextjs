import { testimonials } from '@/data/testimonials';

const AVATAR_BG = 'rgba(var(--pts-accent-rgb), 0.16)';
const AVATAR_TEXT = 'var(--pts-forest)';

function getInitials(name: string): string {
  const cleaned = name.replace(/\./g, ' ').trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="pts-section-mint">
      <style>{`
        .testimonials-wrap {
          width: 100%;
          max-width: var(--pts-content-max);
          margin: 0 auto;
        }
        .testimonials-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 3rem;
        }
        .testimonials-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pts-accent);
          margin-bottom: 0.85rem;
        }
        .testimonials-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.65rem, 3vw, 2.25rem);
          font-weight: 700;
          color: var(--pts-text);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .testimonials-sub {
          font-size: 1rem;
          color: var(--pts-text-subtle);
          line-height: 1.6;
        }

        .testimonials-grid {
          display: grid;
          gap: 1.5rem;
          width: 100%;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .testimonial-card {
          position: relative;
          padding: 1.5rem 1.5rem 1.35rem;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .testimonial-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .testimonial-stars {
          font-size: 0.9rem;
          color: #fbbf24;
          letter-spacing: 0.08em;
        }
        .testimonial-quote-deco {
          font-family: Georgia, serif;
          font-size: 3.25rem;
          line-height: 1;
          color: rgba(var(--pts-accent-rgb), 0.2);
          user-select: none;
          margin: -0.25rem -0.15rem 0 0;
        }

        .testimonial-quote-row {
          display: flex;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .testimonial-accent-bar {
          width: 3px;
          flex-shrink: 0;
          border-radius: 3px;
          background: linear-gradient(
            180deg,
            var(--pts-accent),
            rgba(var(--pts-accent-rgb), 0.45)
          );
          margin-top: 0.2rem;
          margin-bottom: 0.35rem;
        }
        .testimonial-quote-text {
          font-size: 0.92rem;
          color: var(--pts-text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .testimonial-divider {
          border: none;
          border-top: 1px solid rgba(var(--pts-forest-rgb), 0.12);
          margin: 0 0 1.1rem;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: ${AVATAR_BG};
          color: ${AVATAR_TEXT};
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }
        .testimonial-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--pts-text);
        }
        .testimonial-role {
          font-size: 0.82rem;
          color: var(--pts-text-subtle);
          margin-top: 0.15rem;
        }
      `}</style>

      <div className="testimonials-wrap pts-section-mint-inner">
        <div className="testimonials-header">
          <p className="testimonials-eyebrow">What our clients say</p>
          <h2 className="testimonials-title">Trusted by IT professionals worldwide</h2>
          <p className="testimonials-sub">Real results from developers and engineers across USA, UK, and Canada.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="pts-card-glass testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-stars" aria-hidden>
                  ★★★★★
                </div>
                <span className="testimonial-quote-deco" aria-hidden>
                  &ldquo;
                </span>
              </div>

              <div className="testimonial-quote-row">
                <div className="testimonial-accent-bar" aria-hidden />
                <p className="testimonial-quote-text">{t.quote}</p>
              </div>

              <hr className="testimonial-divider" />

              <div className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden>
                  {getInitials(t.name)}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
