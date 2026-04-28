import { stats } from '@/data/stats';

const PAGE_BG = 'var(--pts-dark)';
const BAR_BG = 'linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%)';
const TEAL = 'var(--pts-accent)';
const CAPTION = 'rgba(255, 255, 255, 0.72)';

export default function Stats() {
  return (
    <section
      style={{
        background: PAGE_BG,
        padding: '4rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <style>{`
          .stats-bar {
            display: grid;
            width: 100%;
            gap: 0;
            text-align: center;
            background: ${BAR_BG};
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            box-shadow:
              0 12px 40px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
            overflow: hidden;
            grid-template-columns: 1fr;
          }
          .stats-bar-cell {
            padding: 1.75rem 1.25rem;
          }
          .stats-bar-cell + .stats-bar-cell {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          @media (min-width: 1024px) {
            .stats-bar {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
            .stats-bar-cell + .stats-bar-cell {
              border-top: none;
              border-left: 1px solid rgba(255, 255, 255, 0.12);
            }
            .stats-bar-cell {
              padding: 2.25rem 1.5rem;
            }
          }
          .stats-num {
            font-size: clamp(1.85rem, 3.5vw, 2.75rem);
            font-weight: 800;
            color: ${TEAL};
            line-height: 1.1;
            margin-bottom: 0.65rem;
            letter-spacing: -0.02em;
          }
          .stats-caption {
            font-size: 0.875rem;
            color: ${CAPTION};
            line-height: 1.5;
            max-width: 280px;
            margin: 0 auto;
          }
          @media (min-width: 1024px) {
            .stats-caption {
              max-width: none;
            }
          }
        `}</style>

        <div className="stats-bar">
          {stats.map((stat) => (
            <div key={stat.number} className="stats-bar-cell">
              <div className="stats-num">{stat.number}</div>
              <div className="stats-caption">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
