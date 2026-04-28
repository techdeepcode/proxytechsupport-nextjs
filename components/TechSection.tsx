import { technologies } from '@/data/technologies';
import TechCategoryIcon from '@/components/TechCategoryIcons';

export default function TechSection() {
  return (
    <section id="tech" className="pts-section-mint">
      <style>{`
        .tech-card-glass__head {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          padding: 0.9rem 1.15rem;
          border-bottom: 1px solid rgba(var(--pts-forest-rgb), 0.12);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 255, 255, 0.2) 100%
          );
        }
        .tech-card-glass__title {
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: var(--pts-forest);
          margin: 0;
          line-height: 1.35;
        }
        .tech-card-glass__body {
          padding: 1rem 1.15rem 1.2rem;
          background: rgba(255, 255, 255, 0.22);
        }
        .tech-card-glass__desc {
          font-size: 0.84rem;
          color: var(--pts-text-muted);
          line-height: 1.55;
          margin: 0 0 0.85rem;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-content: flex-start;
        }
        .tech-pill {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          box-sizing: border-box;
          padding: 0.3rem 0.72rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--pts-text-muted);
          background: rgba(255, 255, 255, 0.52);
          border: 1px solid rgba(var(--pts-forest-rgb), 0.28);
          border-radius: 9999px;
          line-height: 1.4;
          word-break: break-word;
          overflow-wrap: anywhere;
          hyphens: auto;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
        }
        .tech-pill:hover {
          border-color: rgba(var(--pts-forest-rgb), 0.45);
          background: rgba(255, 255, 255, 0.75);
          color: var(--pts-forest);
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.75);
        }

        .tech-grid {
          display: grid;
          width: 100%;
          gap: 1.25rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .tech-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .tech-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
      <div className="pts-section-mint-inner" style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="pts-landing-title pts-landing-title--center" style={{ color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
            Technologies <span className="pts-landing-title__accent">We</span> Support
          </h2>
          <p style={{ color: 'var(--pts-text-subtle)', fontSize: '1.05rem' }}>
            Expert support across all major IT technologies and frameworks
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <article key={tech.id} className="pts-card-glass">
              <div className="tech-card-glass__head">
                <div style={{ flexShrink: 0, marginTop: '0.08rem' }}>
                  <TechCategoryIcon id={tech.icon} />
                </div>
                <h3 className="tech-card-glass__title">{tech.title}</h3>
              </div>

              <div className="tech-card-glass__body">
                {tech.description && <p className="tech-card-glass__desc">{tech.description}</p>}
                <div className="tech-pills">
                  {tech.tags.map((tag, i) => (
                    <span key={`${tech.id}-${i}-${tag}`} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
