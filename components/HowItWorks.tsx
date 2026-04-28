import { howItWorksSteps } from '@/data/services';

export default function HowItWorks() {
  return (
    <section
      className="how-it-works-section"
      style={{
        padding: '5rem 1rem',
        borderTop: '1px solid var(--pts-border)',
        borderBottom: '1px solid var(--pts-border)',
      }}
    >
      <style>{`
        .how-it-works-section {
          background: linear-gradient(180deg, #fafefd 0%, var(--pts-tech-header) 42%, #f2f9f7 100%);
        }

        .how-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 3.5rem;
        }
        .how-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pts-accent);
          margin-bottom: 0.85rem;
        }
        .how-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.65rem, 3.5vw, 2.35rem);
          font-weight: 700;
          color: var(--pts-text);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .how-sub {
          font-size: 1rem;
          color: var(--pts-text-subtle);
          line-height: 1.6;
        }

        .how-timeline-wrap {
          position: relative;
          width: 100%;
          max-width: var(--pts-content-max);
          margin: 0 auto;
          isolation: isolate;
        }

        /* Line sits behind bubbles (z-index + opaque bubble fill masks the bar) */
        .how-timeline-line {
          display: none;
        }
        @media (min-width: 1024px) {
          /* Span only between 1st & 4th bubble centers (4 equal columns → 12.5% … 87.5%) */
          .how-timeline-line {
            display: block;
            position: absolute;
            left: 12.5%;
            width: 75%;
            right: auto;
            top: 28px;
            height: 2px;
            background: linear-gradient(
              90deg,
              rgba(var(--pts-accent-rgb), 0.45),
              var(--pts-accent),
              rgba(var(--pts-accent-rgb), 0.45)
            );
            z-index: 0;
            border-radius: 2px;
            pointer-events: none;
          }
        }

        .how-steps {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 1024px) {
          .how-steps {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 0;
          }
        }

        .how-step {
          flex: 1;
          text-align: center;
          max-width: 280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 1024px) {
          .how-step {
            max-width: none;
            padding: 0 0.5rem;
            box-sizing: border-box;
          }
        }

        .how-bubble {
          position: relative;
          z-index: 2;
          width: 56px;
          height: 56px;
          margin: 0 auto 1.15rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: default;
          border: 2px solid var(--pts-accent);
          /* Opaque fill so the horizontal line reads as running *behind* the circle */
          background: #ffffff;
          color: var(--pts-accent);
          box-shadow:
            0 0 0 3px rgba(var(--pts-accent-rgb), 0.14),
            0 0 0 1px rgba(var(--pts-accent-rgb), 0.2) inset;
          transition:
            background 0.35s ease,
            color 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.35s ease,
            border-color 0.35s ease;
        }
        .how-bubble:hover {
          background: var(--pts-accent);
          color: var(--pts-on-accent);
          border-color: var(--pts-accent);
          transform: scale(1.06);
          box-shadow:
            0 0 0 4px rgba(var(--pts-accent-rgb), 0.22),
            0 12px 28px rgba(var(--pts-accent-rgb), 0.35);
        }
        @media (prefers-reduced-motion: reduce) {
          .how-bubble {
            transition: background 0.2s ease, color 0.2s ease;
          }
          .how-bubble:hover {
            transform: none;
          }
        }

        .how-step-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--pts-text);
          margin-bottom: 0.55rem;
          line-height: 1.3;
        }
        .how-step-desc {
          font-size: 0.9rem;
          color: var(--pts-text-subtle);
          line-height: 1.65;
        }
      `}</style>

      <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <div className="how-header">
          <p className="how-eyebrow">How it works</p>
          <h2 className="how-title">Get started in 4 simple steps</h2>
          <p className="how-sub">From first contact to first session — measured in hours, not days.</p>
        </div>

        <div className="how-timeline-wrap">
          <div className="how-timeline-line" aria-hidden />
          <div className="how-steps">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="how-step">
                <div className="how-bubble" aria-hidden>
                  {step.number}
                </div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
