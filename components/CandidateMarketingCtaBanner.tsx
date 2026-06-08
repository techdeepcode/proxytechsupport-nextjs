type Variant = 'jobsupport' | 'interview';

const CONTENT: Record<Variant, { heading: string; body: string; cta: string }> = {
  jobsupport: {
    heading: 'Looking for More Interviews Before Job Support Starts?',
    body: 'Our Job Application & Candidate Marketing service helps candidates apply to relevant jobs, reach recruiters, and keep their profile moving in the market.',
    cta: 'Explore Job Application & Candidate Marketing',
  },
  interview: {
    heading: 'Need More Interview Opportunities Scheduled?',
    body: 'Our Job Application & Candidate Marketing service helps keep your profile active through targeted applications, recruiter outreach, and follow-ups.',
    cta: 'Start Candidate Marketing',
  },
};

export default function CandidateMarketingCtaBanner({
  variant,
  geoHref,
}: {
  variant: Variant;
  geoHref?: string;
}) {
  const c = CONTENT[variant];
  const href = geoHref ?? '/job-application-candidate-marketing/';
  return (
    <section style={{ background: 'var(--pts-section-alt)', borderTop: '1px solid var(--pts-border)', padding: 'clamp(2rem,4vw,3rem) 1rem' }}>
      <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' as const, color: 'var(--pts-accent)', marginBottom: '.6rem' }}>
          Related Service
        </p>
        <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1.15rem,2vw,1.55rem)', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.3, marginBottom: '.75rem', maxWidth: 580 }}>
          {c.heading}
        </h2>
        <p style={{ fontSize: '.93rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: 560 }}>
          {c.body}
        </p>
        <a
          href={href}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', background: 'var(--pts-forest)', color: '#fff', fontWeight: 700, fontSize: '.92rem', padding: '.75rem 1.5rem', borderRadius: '50px', textDecoration: 'none' }}
        >
          {c.cta} →
        </a>
      </div>
    </section>
  );
}
