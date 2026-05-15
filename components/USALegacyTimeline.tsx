const timelineItems = [
  {
    years: '2008–2012',
    era: 'Great Recession & USA Job Survival',
    summary: 'USA companies cut jobs, hiring slowed down, and IT professionals faced heavy pressure to keep roles and clear interviews.',
    body: 'USA companies cut jobs, hiring slowed down, and IT professionals faced heavy pressure to keep roles and clear interviews. Proxy Tech Support helped developers and consultants handle technical pressure, project survival, and interview confidence.',
  },
  {
    years: '2013–2018',
    era: 'USA Consulting, Cloud & Full-Stack Delivery',
    summary: 'USA clients demanded faster delivery, cloud migration, DevOps adoption, agile delivery, and full-stack ownership.',
    body: 'USA clients started demanding faster delivery, cloud migration, DevOps adoption, APIs, agile delivery, and full-stack ownership. Proxy Tech Support supported engineers working with USA clients across Java, .NET, frontend, databases, cloud, production systems, and enterprise projects.',
  },
  {
    years: '2019–2021',
    era: 'COVID Remote Work & USA Office-Hours Pressure',
    summary: 'COVID changed USA work culture quickly. Remote meetings, distributed teams, and work-from-home delivery became the new normal.',
    body: 'COVID changed USA work culture quickly. Remote meetings, distributed teams, production ownership, video calls, and work-from-home delivery became normal. Proxy Tech Support helped developers stay confident during USA office-hours pressure.',
  },
  {
    years: '2022–2024',
    era: 'USA Tech Layoffs & Interview Competition',
    summary: 'The USA tech market became unstable. Layoffs increased and interviews became deeper across the board.',
    body: 'The USA tech market became unstable. Layoffs increased, interviews became deeper, and candidates had to prove project experience, architecture knowledge, coding confidence, cloud skills, and communication under pressure.',
  },
  {
    years: '2025–Today',
    era: 'AI Era, Automation Fear & USA Career Defense',
    summary: 'AI is changing USA hiring and performance expectations. Developers must deliver faster and defend their career against automation pressure.',
    body: 'AI is changing USA hiring, coding, automation, and performance expectations. Developers now need to deliver faster, explain better, debug faster, and protect their career against AI-driven competition and layoffs.',
  },
];

interface USALegacyTimelineProps {
  variant?: 'compact' | 'full';
}

export default function USALegacyTimeline({ variant = 'compact' }: USALegacyTimelineProps) {
  if (variant === 'full') {
    return (
      <>
        <style>{`
          .ult-full { display: flex; flex-direction: column; gap: 0; position: relative; }
          .ult-full::before {
            content: ''; position: absolute; left: 1.25rem; top: 0.5rem; bottom: 0.5rem;
            width: 2px; background: linear-gradient(180deg, var(--pts-accent) 0%, rgba(0,223,130,0.15) 100%);
          }
          @media(min-width: 768px) {
            .ult-full::before { left: 1.75rem; }
          }
          .ult-full-item {
            display: flex; gap: 1.25rem; align-items: flex-start;
            padding: 0 0 2.5rem 0; position: relative;
          }
          .ult-full-dot {
            width: 2.5rem; height: 2.5rem; border-radius: 50%; flex-shrink: 0;
            background: var(--pts-accent); display: flex; align-items: center; justify-content: center;
            position: relative; z-index: 1; margin-top: 0.15rem;
          }
          @media(min-width: 768px) {
            .ult-full-dot { width: 3.5rem; height: 3.5rem; }
          }
          .ult-full-dot-inner {
            width: 0.75rem; height: 0.75rem; border-radius: 50%;
            background: var(--pts-dark);
          }
          .ult-full-content { flex: 1; min-width: 0; }
          .ult-full-years {
            display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
            text-transform: uppercase; color: var(--pts-forest);
            background: rgba(0,223,130,0.1); border-radius: 4px;
            padding: 0.2rem 0.55rem; margin-bottom: 0.5rem;
          }
          .ult-full-era {
            font-size: 1.05rem; font-weight: 700; color: var(--pts-text);
            line-height: 1.3; margin-bottom: 0.5rem;
          }
          .ult-full-body { font-size: 0.95rem; color: var(--pts-text-muted); line-height: 1.75; }
          .ult-closing {
            font-size: 0.95rem; color: var(--pts-text-subtle); line-height: 1.7;
            font-style: italic; padding: 1.5rem;
            border-left: 3px solid var(--pts-accent);
            background: rgba(0,223,130,0.04); border-radius: 0 8px 8px 0;
            margin-top: 0.5rem;
          }
        `}</style>
        <div className="ult-full">
          {timelineItems.map((item) => (
            <div key={item.years} className="ult-full-item">
              <div className="ult-full-dot"><div className="ult-full-dot-inner" /></div>
              <div className="ult-full-content">
                <span className="ult-full-years">{item.years}</span>
                <p className="ult-full-era">{item.era}</p>
                <p className="ult-full-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="ult-closing">
          Through every USA tech crisis, our mission stayed the same: help IT professionals keep moving when the market becomes difficult.
        </p>
      </>
    );
  }

  return (
    <>
      <style>{`
        .ult-grid {
          display: grid; gap: 1rem;
          grid-template-columns: 1fr;
        }
        @media(min-width: 480px) { .ult-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width: 900px) { .ult-grid { grid-template-columns: repeat(3, 1fr); } }
        @media(min-width: 1200px) { .ult-grid { grid-template-columns: repeat(5, 1fr); } }
        .ult-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 1.15rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .ult-card:hover { border-color: rgba(0,223,130,0.3); background: rgba(255,255,255,0.08); }
        .ult-card-years {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--pts-accent);
          margin-bottom: 0.4rem;
        }
        .ult-card-era {
          font-size: 0.88rem; font-weight: 700; color: #ffffff;
          line-height: 1.35; margin-bottom: 0.45rem;
        }
        .ult-card-summary { font-size: 0.8rem; color: rgba(255,255,255,0.55); line-height: 1.6; }
      `}</style>
      <div className="ult-grid">
        {timelineItems.map((item) => (
          <div key={item.years} className="ult-card">
            <p className="ult-card-years">{item.years}</p>
            <p className="ult-card-era">{item.era}</p>
            <p className="ult-card-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
