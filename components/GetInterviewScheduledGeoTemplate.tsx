import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

/* ── Config interface ─────────────────────────────────────────────────────── */

export interface GeoInterviewScheduledConfig {
  country: string;
  countryCode: string;
  slug: string;
  canonical: string;
  /* Hero */
  heroHeadline: string;
  heroSub: string;
  heroBody: string;
  /* Market */
  marketIntro: string;
  marketContext: string;
  /* Pain */
  painPoints: string[];
  /* Country-specific positioning */
  uniquePoints: string[];
  rolesNote: string;
  /* SEO */
  localKeywords: string[];
  /* FAQ */
  faqItems: { q: string; a: string }[];
  /* Bottom CTA */
  ctaText: string;
}

/* ── Constants ────────────────────────────────────────────────────────────── */

const CALL_LINK = 'tel:+919660614469';

const ROLES = [
  { badge: 'AI Engineer',       desc: 'LLM workflows, RAG systems, AI automation, business-driven AI adoption — positioned for real implementation, not just theory.' },
  { badge: 'ML Engineer',       desc: 'ML pipelines, model development, feature engineering, model evaluation, and end-to-end ML delivery for production systems.' },
  { badge: 'MLOps Engineer',    desc: 'Model deployment, CI/CD for ML, monitoring, containerization, and full production model lifecycle management.' },
  { badge: 'DevOps Engineer',   desc: 'CI/CD, Kubernetes, Docker, Terraform, monitoring, automation, cloud deployments, and production reliability.' },
  { badge: 'Cloud Engineer',    desc: 'AWS, Azure, GCP, infrastructure design, cloud migration, security, scalability, cost optimization, and operational ownership.' },
  { badge: 'Backend Engineer',  desc: 'APIs, microservices, databases, authentication, performance, scalability, production debugging, and enterprise backend systems.' },
  { badge: 'Full-Stack Engineer', desc: 'End-to-end product delivery, frontend frameworks, backend APIs, databases, cloud deployment, and real business features.' },
];

const PROCESS_STEPS = [
  { num: 1, title: 'Role Targeting',                desc: 'We identify which role direction — AI, ML, MLOps, DevOps, Cloud, Backend, or Full-Stack — gives you the strongest positioning given your background and target market.' },
  { num: 2, title: 'Industry Targeting',            desc: 'We map your experience to the industries actively hiring in your target country. Your profile starts speaking the language of companies you want to reach.' },
  { num: 3, title: 'Profile Engineering',           desc: 'We rebuild how your profile communicates skills, experience, projects, tools, and business impact. No generic wording. No weak positioning. No copy-paste structure.' },
  { num: 4, title: 'Recruiter Visibility Optimization', desc: 'We align your profile with recruiter search behavior, hiring keywords, and role-specific filters used in your target country — improving discovery and shortlisting chances.' },
  { num: 5, title: 'Real-World Project Mapping',    desc: 'Because we support professionals in real-time IT jobs, we understand actual production work. We use that to position your project experience closer to what hiring teams expect.' },
  { num: 6, title: 'Interview Pipeline Readiness',  desc: 'Once your profile is engineered correctly, you are better positioned to attract interview opportunities for relevant, high-paying roles in your target market.' },
];

const SCOPE_DO = [
  'Engineer your professional profile for IT hiring visibility.',
  'Align your profile with high-paying role requirements.',
  'Create industry-specific positioning for your target market.',
  'Improve recruiter search relevance in your target country.',
  'Help you communicate real project experience more clearly.',
  'Prepare your profile for better shortlist chances.',
];

const SCOPE_DONT = [
  'We do not present ourselves as a job placement agency.',
  'We do not mass-apply to jobs on your behalf.',
  'We do not sell basic resume writing.',
  'We do not make fake job guarantees.',
  'We do not promise interviews from specific companies.',
];

/* ── SVG helpers ──────────────────────────────────────────────────────────── */

function WAIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function CrossIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 3 }}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────────────────────── */

interface Props { config: GeoInterviewScheduledConfig; }

export default function GetInterviewScheduledGeoTemplate({ config }: Props) {

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Get IT Interview Scheduled in ${config.country} — Profile Engineering`,
    description: config.heroSub,
    provider: {
      '@type': 'Organization',
      name: 'Proxy Tech Support',
      url: 'https://proxytechsupport.com',
      contactPoint: { '@type': 'ContactPoint', telephone: '+91-96606-14469', contactType: 'customer service', availableLanguage: 'English' },
    },
    areaServed: config.countryCode,
    serviceType: 'IT Profile Engineering and Recruiter Visibility Optimization',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <style>{`
        .gg-btn-wa {
          display:inline-flex; align-items:center; gap:.5rem;
          background:#25D366; color:#fff; font-weight:700; font-size:.97rem;
          padding:.9rem 1.8rem; border-radius:50px; text-decoration:none;
          transition:filter .2s,transform .2s; white-space:nowrap;
        }
        .gg-btn-wa:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .gg-btn-ghost {
          display:inline-flex; align-items:center; gap:.5rem;
          background:transparent; color:#fff; font-weight:600; font-size:.92rem;
          padding:.85rem 1.6rem; border-radius:50px; text-decoration:none;
          border:1.5px solid rgba(255,255,255,.55);
          transition:background .2s,border-color .2s,transform .2s; white-space:nowrap;
        }
        .gg-btn-ghost:hover { background:rgba(255,255,255,.1); border-color:#fff; transform:translateY(-1px); }
        .gg-btn-forest {
          display:inline-flex; align-items:center; gap:.5rem;
          background:var(--pts-forest); color:#fff; font-weight:700; font-size:.97rem;
          padding:.9rem 1.8rem; border-radius:50px; text-decoration:none;
          transition:background .2s,transform .2s; white-space:nowrap;
        }
        .gg-btn-forest:hover { background:var(--pts-forest-hover); transform:translateY(-1px); }
        .gg-cta-row { display:flex; flex-wrap:wrap; gap:.85rem; align-items:center; }

        .gg-hero {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 65% 50% at 5% 8%,  rgba(0,223,130,.13) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 92%, rgba(3,98,76,.22)   0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #091416 60%, #030f0f 100%);
          padding:clamp(3.5rem,7vw,6rem) 1rem clamp(3rem,6vw,5rem);
        }
        .gg-section-alt   { position:relative; z-index:0; background:var(--pts-section-alt);  padding:clamp(3rem,6vw,5rem) 1rem; }
        .gg-section-white { position:relative; z-index:0; background:var(--pts-bg);            padding:clamp(3rem,6vw,5rem) 1rem; }
        .gg-section-mint  {
          position:relative; z-index:0; background:var(--pts-tech-header);
          border-top:1px solid rgba(0,223,130,.2); border-bottom:1px solid rgba(0,223,130,.2);
          padding:clamp(2.5rem,5vw,4.5rem) 1rem;
        }
        .gg-section-dark  {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 70% 55% at 0%   0%,   rgba(0,223,130,.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,.18)   0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding:clamp(3.5rem,7vw,5.5rem) 1rem;
        }
        .gg-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; }

        .gg-eyebrow {
          display:inline-flex; align-items:center; gap:.45rem;
          font-size:.72rem; font-weight:700; letter-spacing:.18em;
          text-transform:uppercase; color:var(--pts-accent); margin-bottom:1.1rem;
        }
        .gg-h1 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.85rem,4.2vw,3rem); font-weight:700; color:#fff;
          line-height:1.17; margin-bottom:1.1rem; max-width:760px;
        }
        .gg-hero-sub  { font-size:clamp(1rem,1.9vw,1.12rem); color:rgba(255,255,255,.8);  line-height:1.65; margin-bottom:.6rem; max-width:680px; }
        .gg-hero-body { font-size:clamp(.95rem,1.7vw,1.03rem); color:rgba(255,255,255,.65); line-height:1.78; margin-bottom:1.5rem; max-width:660px; }
        .gg-role-tags { display:flex; flex-wrap:wrap; gap:.45rem; margin-bottom:2rem; }
        .gg-role-tag  { font-size:.78rem; font-weight:700; letter-spacing:.06em; color:var(--pts-accent); background:rgba(0,223,130,.1); border:1px solid rgba(0,223,130,.25); border-radius:6px; padding:.25rem .65rem; }
        .gg-trust-line { margin-top:1.5rem; font-size:.82rem; font-weight:600; color:rgba(255,255,255,.4); letter-spacing:.12em; text-transform:uppercase; }

        /* ── Hero split (copy left, metrics card right) ───────────────────── */
        .gg-hero-split {
          display:grid;
          grid-template-columns:1fr;
          gap:clamp(1.35rem,3vw,2.25rem);
          align-items:start;
        }
        @media(min-width:1024px){
          .gg-hero-split {
            grid-template-columns:minmax(0,1fr) minmax(268px,355px);
            column-gap:clamp(1.75rem,3vw,2.75rem);
          }
          .gg-hero-split .gg-h1        { max-width:none; }
          .gg-hero-split .gg-hero-sub,
          .gg-hero-split .gg-hero-body { max-width:42rem; }
        }
        .gg-metrics-card {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:.75rem;
          padding:1.2rem 1rem;
          border-radius:16px;
          border:1px solid rgba(255,255,255,.14);
          background:rgba(255,255,255,.05);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.07);
          align-self:start;
        }
        @media(min-width:1024px){
          .gg-metrics-card {
            position:sticky;
            top:calc(var(--pts-sticky-header-offset) + 0.5rem);
            padding:1.35rem 1.15rem;
            gap:.85rem;
          }
        }
        .gg-metric-cell {
          text-align:center;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          padding:.7rem .4rem;
          border-radius:10px;
          background:rgba(0,0,0,.22);
          border:1px solid rgba(255,255,255,.08);
        }
        @media(min-width:1024px){
          .gg-metric-cell { min-height:5.25rem; padding:1.05rem .55rem; }
        }
        .gg-metric-stat  { font-size:1.32rem; font-weight:800; color:var(--pts-accent); line-height:1.15; }
        .gg-metric-label { font-size:.7rem; color:rgba(255,255,255,.5); font-weight:500; line-height:1.25; margin-top:.35rem; letter-spacing:.02em; }

        .gg-section-eyebrow { font-size:.72rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:.6rem; }
        .gg-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.45rem,2.8vw,2.1rem); font-weight:700;
          color:var(--pts-text); line-height:1.25; margin-bottom:.65rem;
        }
        .gg-h2--white { color:#fff; }
        .gg-lead { font-size:.97rem; color:var(--pts-text-subtle); line-height:1.72; margin-bottom:2rem; max-width:580px; }

        /* pain */
        .gg-pain-list { display:flex; flex-direction:column; gap:.85rem; }
        .gg-pain-item {
          display:flex; gap:.8rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.1rem 1.35rem;
          font-size:.93rem; color:var(--pts-text-muted); line-height:1.6;
          box-shadow:var(--pts-shadow-lp);
        }
        .gg-pain-dot { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(239,68,68,.12); color:#ef4444; display:flex; align-items:center; justify-content:center; margin-top:1px; }

        /* market context */
        .gg-market-box {
          font-size:.97rem; color:var(--pts-text); line-height:1.8;
          border-left:4px solid var(--pts-accent); padding:1.25rem 1.5rem;
          background:var(--pts-section-alt); border-radius:0 10px 10px 0;
          margin-bottom:1.5rem;
        }
        .gg-local-tags { display:flex; flex-wrap:wrap; gap:.45rem; margin-top:1.1rem; }
        .gg-local-tag  { font-size:.8rem; font-weight:600; color:var(--pts-forest); background:rgba(0,223,130,.08); border:1px solid rgba(0,223,130,.22); border-radius:6px; padding:.26rem .62rem; }

        /* positioning */
        .gg-pos-grid { display:grid; gap:2.5rem; align-items:start; }
        @media(min-width:1024px){ .gg-pos-grid{ grid-template-columns:1fr 1fr; gap:3.5rem; } }
        .gg-pos-quote { font-family:Georgia,'Times New Roman',serif; font-size:clamp(1.02rem,1.9vw,1.28rem); color:var(--pts-text); line-height:1.65; font-style:italic; border-left:4px solid var(--pts-accent); padding:1.2rem 1.5rem; background:var(--pts-section-alt); border-radius:0 10px 10px 0; margin-bottom:1.35rem; }
        .gg-pos-list { display:flex; flex-direction:column; gap:.72rem; }
        .gg-pos-item { display:flex; gap:.65rem; align-items:flex-start; font-size:.93rem; color:var(--pts-text-muted); line-height:1.55; }
        .gg-pos-icon { width:22px; height:22px; border-radius:6px; flex-shrink:0; background:rgba(0,223,130,.12); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }

        /* unique points */
        .gg-unique-list { display:flex; flex-direction:column; gap:.75rem; }
        .gg-unique-item { display:flex; gap:.65rem; align-items:flex-start; font-size:.93rem; color:var(--pts-text-muted); line-height:1.58; }
        .gg-unique-icon { width:22px; height:22px; border-radius:6px; flex-shrink:0; background:rgba(0,223,130,.12); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }

        /* roles */
        .gg-role-grid { display:grid; gap:1.1rem; grid-template-columns:1fr; }
        @media(min-width:640px){  .gg-role-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1024px){ .gg-role-grid{ grid-template-columns:repeat(3,1fr); } }
        .gg-role-card { background:var(--pts-card-bg); border:1px solid var(--pts-border); border-radius:var(--pts-card-radius); padding:1.4rem; box-shadow:var(--pts-shadow-lp); transition:box-shadow .2s,transform .2s; display:flex; flex-direction:column; gap:.6rem; }
        .gg-role-card:hover { box-shadow:var(--pts-shadow-lp-hover); transform:translateY(-2px); }
        .gg-role-badge { display:inline-flex; align-items:center; font-size:.72rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:var(--pts-forest); background:rgba(0,223,130,.1); border:1px solid rgba(0,223,130,.22); border-radius:6px; padding:.25rem .65rem; width:fit-content; }
        .gg-role-desc  { font-size:.9rem; color:var(--pts-text-muted); line-height:1.7; }

        /* process */
        .gg-process-list { display:flex; flex-direction:column; gap:1rem; }
        .gg-process-step { display:flex; gap:1.2rem; align-items:flex-start; background:var(--pts-card-bg); border:1px solid var(--pts-border); border-radius:var(--pts-card-radius); padding:1.4rem; box-shadow:var(--pts-shadow-lp); }
        .gg-step-num { width:40px; height:40px; border-radius:50%; flex-shrink:0; background:var(--pts-forest); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1rem; font-weight:800; }
        .gg-step-title { font-size:.97rem; font-weight:700; color:var(--pts-text); margin-bottom:.3rem; }
        .gg-step-desc  { font-size:.9rem; color:var(--pts-text-muted); line-height:1.7; }

        /* scope */
        .gg-scope-grid { display:grid; gap:1.5rem; }
        @media(min-width:768px){ .gg-scope-grid{ grid-template-columns:1fr 1fr; } }
        .gg-scope-card { background:var(--pts-card-bg); border:1px solid var(--pts-border); border-radius:var(--pts-card-radius); padding:1.5rem 1.75rem; box-shadow:var(--pts-shadow-lp); }
        .gg-scope-title { font-size:1rem; font-weight:800; margin-bottom:1rem; display:flex; align-items:center; gap:.5rem; }
        .gg-scope-title--do   { color:var(--pts-forest); }
        .gg-scope-title--dont { color:#ef4444; }
        .gg-scope-list { display:flex; flex-direction:column; gap:.6rem; }
        .gg-scope-item { display:flex; gap:.55rem; align-items:flex-start; font-size:.9rem; color:var(--pts-text-muted); line-height:1.55; }
        .gg-scope-icon-do   { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(0,223,130,.15); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }
        .gg-scope-icon-dont { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(239,68,68,.12); color:#ef4444; display:flex; align-items:center; justify-content:center; margin-top:1px; }

        /* faq */
        .gg-faq-list { display:flex; flex-direction:column; gap:0; border:1px solid var(--pts-border); border-radius:12px; overflow:hidden; }
        .gg-faq-item { border-bottom:1px solid var(--pts-border); }
        .gg-faq-item:last-child { border-bottom:none; }
        .gg-faq-q { width:100%; text-align:left; background:none; border:none; padding:1.15rem 1.5rem; font-family:inherit; font-size:.97rem; font-weight:600; color:var(--pts-text); cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:1rem; transition:background .15s; }
        .gg-faq-q:hover { background:var(--pts-section-alt); }
        .gg-faq-a { padding:0 1.5rem 1.2rem; font-size:.9rem; color:var(--pts-text-muted); line-height:1.75; }

        /* funnel */
        .gg-funnel-list { display:flex; flex-direction:column; gap:.7rem; max-width:520px; }
        .gg-funnel-item { display:flex; gap:.65rem; align-items:flex-start; font-size:.92rem; color:var(--pts-text-muted); line-height:1.55; }
        .gg-funnel-icon { width:22px; height:22px; border-radius:6px; flex-shrink:0; background:rgba(0,223,130,.12); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }
        .gg-funnel-flow { display:flex; flex-wrap:wrap; gap:.6rem; align-items:center; margin-top:2rem; padding:1.2rem 1.5rem; background:var(--pts-card-bg); border:1px solid var(--pts-border); border-radius:var(--pts-card-radius); box-shadow:var(--pts-shadow-lp); }
        .gg-funnel-step { font-size:.88rem; font-weight:700; color:var(--pts-forest); background:rgba(0,223,130,.1); border:1px solid rgba(0,223,130,.2); border-radius:6px; padding:.3rem .75rem; }
        .gg-funnel-arrow { color:var(--pts-text-subtle); font-size:1rem; font-weight:700; }

        /* related */
        .gg-related { background:var(--pts-section-alt); padding:1.75rem 1rem; border-top:1px solid var(--pts-border); }
        .gg-related-label { font-size:.75rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--pts-text-subtle); margin-bottom:.85rem; }
        .gg-related-row { display:flex; flex-wrap:wrap; gap:.5rem; }
        .gg-related-link { font-size:.82rem; color:var(--pts-forest); text-decoration:none; font-weight:600; border:1px solid var(--pts-border); border-radius:6px; padding:.3rem .65rem; background:var(--pts-card-bg); transition:border-color .15s,color .15s; }
        .gg-related-link:hover { border-color:var(--pts-accent); color:var(--pts-forest-hover); }

        /* bottom */
        .gg-bottom-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; text-align:center; }
        .gg-bottom-eyebrow { font-size:.72rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:1rem; }
        .gg-bottom-h2 { font-family:Georgia,'Times New Roman',serif; font-size:clamp(1.45rem,3vw,2.15rem); font-weight:700; color:#fff; line-height:1.22; margin-bottom:.75rem; max-width:660px; margin-left:auto; margin-right:auto; }
        .gg-bottom-tags { display:flex; flex-wrap:wrap; gap:.45rem; justify-content:center; margin:1.1rem 0 1.75rem; }
        .gg-bottom-tag { font-size:.8rem; font-weight:700; color:#fff; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2); border-radius:6px; padding:.26rem .68rem; }
        .gg-section-dark .gg-cta-row { justify-content:center; }

        /* seo block */
        .gg-seo-block { background:var(--pts-section-alt); padding:clamp(2rem,4vw,3rem) 1rem; border-top:1px solid var(--pts-border); }
        .gg-seo-text { font-size:.88rem; color:var(--pts-text-subtle); line-height:1.85; max-width:860px; margin:0 auto; }

        /* mobile */
        @media(max-width:768px){
          .gg-hero { padding:1.25rem 1rem 2.5rem !important; }
          .gg-cta-row { flex-direction:column; gap:.55rem; }
          .gg-btn-wa,.gg-btn-ghost,.gg-btn-forest { width:100%; justify-content:center; min-height:52px; font-size:1rem; border-radius:12px; }
          .gg-section-alt,.gg-section-white,.gg-section-mint { padding:2.25rem 1rem; }
          .gg-section-dark { padding:2.5rem 1rem; }
          .gg-h2 { font-size:clamp(1.28rem,5.5vw,1.6rem); }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Get Interview Scheduled', href: '/get-interview-scheduled/' }, { label: config.country }]} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="gg-hero">
        <div className="gg-inner">
          <div className="gg-hero-split">

            {/* ── Left: copy ── */}
            <div>
              <p className="gg-eyebrow"><span aria-hidden>✦</span> Profile Engineering — {config.country}</p>
              <h1 className="gg-h1">{config.heroHeadline}</h1>
              <p className="gg-hero-sub">{config.heroSub}</p>
              <p className="gg-hero-body">{config.heroBody}</p>
              <div className="gg-role-tags" aria-label="Roles we target">
                {['AI', 'ML', 'MLOps', 'DevOps', 'Cloud', 'Backend', 'Full-Stack'].map((t) => (
                  <span key={t} className="gg-role-tag">{t}</span>
                ))}
              </div>
              <div className="gg-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gg-btn-wa"><WAIcon />Get Interview Scheduled on WhatsApp</a>
                <a href={CALL_LINK} className="gg-btn-ghost">Start Profile Engineering Review</a>
              </div>
              <p className="gg-trust-line">Confidential &nbsp;•&nbsp; Professional &nbsp;•&nbsp; Result-Oriented</p>
            </div>

            {/* ── Right: metrics card ── */}
            <aside className="gg-metrics-card" aria-label="Trust indicators">
              {[
                { stat: '1000+', label: 'IT Professionals Helped' },
                { stat: '24/7',  label: 'Support Available' },
                { stat: '95%',   label: 'Success Rate' },
                { stat: '50+',   label: 'Technologies Covered' },
              ].map((m) => (
                <div key={m.stat} className="gg-metric-cell">
                  <span className="gg-metric-stat">{m.stat}</span>
                  <span className="gg-metric-label">{m.label}</span>
                </div>
              ))}
            </aside>

          </div>
        </div>
      </section>

      {/* ── WHY NOT GETTING CALLS ─────────────────────────────────────────────── */}
      <section className="gg-section-alt">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">The Real Problem</p>
          <h2 className="gg-h2">Why You Are Not Getting IT Interview Calls in {config.country}</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-muted)', lineHeight: 1.78, marginBottom: '2rem', maxWidth: 680 }}>
            {config.marketIntro}
          </p>
          <div className="gg-pain-list">
            {config.painPoints.map((item) => (
              <div key={item} className="gg-pain-item">
                <span className="gg-pain-dot" aria-hidden>
                  <svg width={10} height={10} viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="4" /></svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET CONTEXT ────────────────────────────────────────────────────── */}
      <section className="gg-section-white">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">{config.country} Job Market</p>
          <h2 className="gg-h2">Understanding the {config.country} IT Hiring Market</h2>
          <div className="gg-market-box">{config.marketContext}</div>
          <div className="gg-local-tags">
            {config.localKeywords.map((kw) => (<span key={kw} className="gg-local-tag">{kw}</span>))}
          </div>
        </div>
      </section>

      {/* ── PROFILE ENGINEERING — NOT RESUME WRITING ──────────────────────────── */}
      <section className="gg-section-alt">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">Our Philosophy</p>
          <h2 className="gg-h2">This Is Not Resume Writing. This Is Profile Engineering.</h2>
          <div className="gg-pos-grid">
            <div>
              <div className="gg-pos-quote">
                We do not position this as basic resume writing, CV formatting, or document editing. That is a low-value service. We focus on <strong>Profile Engineering</strong> — building positioning that matches how {config.country} recruiters actually search, filter, and shortlist.
              </div>
              <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.1rem' }}>
                The goal is simple: make your profile look like the exact person a {config.country} company is trying to hire.
              </p>
              <p style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.6 }}>
                Confidential &nbsp;•&nbsp; Professional &nbsp;•&nbsp; Result-Oriented
              </p>
            </div>
            <div>
              <p style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                Profile Engineering means matching:
              </p>
              <div className="gg-pos-list">
                {[
                  `${config.country} recruiter search patterns and Boolean filters`,
                  'Role-specific hiring requirements for your target tech stack',
                  'Industry-specific project expectations',
                  'High-paying IT job demand in your target market',
                  'Real-world implementation language and terminology',
                  'Shortlisting behavior in today\'s competitive IT market',
                ].map((item) => (
                  <div key={item} className="gg-pos-item">
                    <span className="gg-pos-icon"><CheckIcon /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTRY-SPECIFIC POSITIONING ─────────────────────────────────────── */}
      <section className="gg-section-white">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">Localized for {config.country}</p>
          <h2 className="gg-h2">What We Do Differently for {config.country}</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: 620 }}>
            {config.rolesNote}
          </p>
          <div className="gg-unique-list" style={{ maxWidth: 760 }}>
            {config.uniquePoints.map((point) => (
              <div key={point} className="gg-unique-item">
                <span className="gg-unique-icon"><CheckIcon /></span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROLES WE TARGET ───────────────────────────────────────────────────── */}
      <section className="gg-section-alt">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">Technology Targeting</p>
          <h2 className="gg-h2">Roles We Target in {config.country}</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-subtle)', lineHeight: 1.72, marginBottom: '1.75rem', maxWidth: 560 }}>
            We engineer profiles specifically for each technology track — not generic IT positioning.
          </p>
          <div className="gg-role-grid">
            {ROLES.map((role) => (
              <div key={role.badge} className="gg-role-card">
                <span className="gg-role-badge">{role.badge}</span>
                <p className="gg-role-desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────────── */}
      <section className="gg-section-white">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">Our Process</p>
          <h2 className="gg-h2">How We Help You Get Interview Scheduled in {config.country}</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: 620 }}>
            We do not apply randomly. We do not act like a recruitment agency. We help you fix the foundation: your profile positioning.
          </p>
          <div className="gg-process-list">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="gg-process-step">
                <div className="gg-step-num" aria-hidden>{step.num}</div>
                <div>
                  <h3 className="gg-step-title">{step.title}</h3>
                  <p className="gg-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPE DO / DON'T ──────────────────────────────────────────────────── */}
      <section className="gg-section-alt">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">Clear Scope</p>
          <h2 className="gg-h2">What We Do &amp; What We Do Not Do</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.72, marginBottom: '1.75rem', maxWidth: 580 }}>
            This is a strategic profile engineering service designed to improve visibility, relevance, and interview scheduling chances in {config.country}.
          </p>
          <div className="gg-scope-grid">
            <div className="gg-scope-card">
              <p className="gg-scope-title gg-scope-title--do">
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,223,130,.15)', color: 'var(--pts-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CheckIcon /></span>
                What We Do
              </p>
              <div className="gg-scope-list">
                {SCOPE_DO.map((item) => (
                  <div key={item} className="gg-scope-item">
                    <span className="gg-scope-icon-do"><CheckIcon size={12} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gg-scope-card">
              <p className="gg-scope-title gg-scope-title--dont">
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(239,68,68,.12)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CrossIcon /></span>
                What We Do Not Do
              </p>
              <div className="gg-scope-list">
                {SCOPE_DONT.map((item) => (
                  <div key={item} className="gg-scope-item">
                    <span className="gg-scope-icon-dont"><CrossIcon size={12} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID CTA ───────────────────────────────────────────────────────────── */}
      <section className="gg-section-mint">
        <div style={{ width: '100%', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.3, marginBottom: '.65rem' }}>
            Ready to Start Getting Interview Calls in {config.country}?
          </h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-subtle)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
            Talk to us on WhatsApp. We will review your current positioning and tell you exactly what needs to change.
          </p>
          <div className="gg-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gg-btn-wa"><WAIcon />Get Interview Scheduled on WhatsApp</a>
            <a href={CALL_LINK} className="gg-btn-forest">Call +91 96606 14469</a>
          </div>
        </div>
      </section>

      {/* ── AFTER SCHEDULING ──────────────────────────────────────────────────── */}
      <section className="gg-section-white">
        <div className="gg-inner">
          <p className="gg-section-eyebrow">Full Career Path</p>
          <h2 className="gg-h2">After You Get Interview Scheduled, We Can Support You Further</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.72, marginBottom: '1.5rem', maxWidth: 560 }}>
            Getting the interview scheduled is the first step. Once you start getting calls, we can also help with:
          </p>
          <div className="gg-funnel-list">
            {['Interview preparation', 'Technical interview support', 'Proxy interview assistance', 'Live coding round support', 'System design discussion support', 'Real-time IT job support after joining', 'Production issue guidance', 'Task delivery support'].map((item) => (
              <div key={item} className="gg-funnel-item">
                <span className="gg-funnel-icon"><ArrowRight /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="gg-funnel-flow" aria-label="Career support flow">
            <span className="gg-funnel-step">Get Scheduled</span>
            <span className="gg-funnel-arrow" aria-hidden>›</span>
            <span className="gg-funnel-step">Clear Interview</span>
            <span className="gg-funnel-arrow" aria-hidden>›</span>
            <span className="gg-funnel-step">Handle Job Successfully</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="gg-section-alt">
        <div className="gg-inner">
          <div style={{ display: 'grid', gap: '2.5rem', alignItems: 'start' }}>
            <div style={{ maxWidth: 420 }}>
              <p className="gg-section-eyebrow">FAQ</p>
              <h2 className="gg-h2">Frequently Asked Questions</h2>
              <p style={{ fontSize: '.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Common questions about profile engineering and getting IT interview calls in {config.country}.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gg-btn-wa" style={{ display: 'inline-flex', fontSize: '.9rem' }}>
                <WAIcon size={15} />Ask on WhatsApp
              </a>
            </div>
            <div className="gg-faq-list">
              {config.faqItems.map((f, i) => (
                <details key={i} className="gg-faq-item" style={{ listStyle: 'none' }}>
                  <summary className="gg-faq-q">{f.q}<span aria-hidden style={{ flexShrink: 0, fontSize: '1.1rem' }}>+</span></summary>
                  <p className="gg-faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ─────────────────────────────────────────────────────── */}
      <nav className="gg-related" aria-label="Related pages">
        <div className="gg-inner">
          <p className="gg-related-label">Related Services &amp; Pages</p>
          <div className="gg-related-row">
            {[
              { label: 'Get Interview Scheduled', href: '/get-interview-scheduled/' },
              { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
              { label: 'Job Support USA', href: '/job-support-usa/' },
              { label: 'Job Support UK', href: '/job-support-uk/' },
              { label: 'Job Support Canada', href: '/job-support-canada/' },
              { label: 'Job Support Australia', href: '/job-support-australia/' },
              { label: 'Job Support Europe', href: '/job-support-europe/' },
              { label: 'Interview Questions', href: '/interviews/' },
              { label: 'Blog', href: '/blog/' },
            ].map((l) => (<a key={l.href} href={l.href} className="gg-related-link">{l.label}</a>))}
          </div>
        </div>
      </nav>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="gg-section-dark">
        <div className="gg-bottom-inner">
          <p className="gg-bottom-eyebrow">Get Started Today</p>
          <h2 className="gg-bottom-h2">{config.ctaText}</h2>
          <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.72, marginBottom: 0, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Profile engineering and recruiter visibility optimization for AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals targeting {config.country}.
          </p>
          <div className="gg-bottom-tags">
            {['AI', 'ML', 'MLOps', 'DevOps', 'Cloud', 'Backend', 'Full-Stack'].map((t) => (
              <span key={t} className="gg-bottom-tag">{t}</span>
            ))}
          </div>
          <div className="gg-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gg-btn-wa"><WAIcon />WhatsApp Us Now</a>
            <a href={CALL_LINK} className="gg-btn-ghost">+91 96606 14469</a>
          </div>
        </div>
      </section>

      {/* ── SEO BLOCK ─────────────────────────────────────────────────────────── */}
      <div className="gg-seo-block">
        <div className="gg-inner">
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1rem,1.8vw,1.18rem)', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem' }}>
            Get IT Interview Scheduled in {config.country} With Profile Engineering
          </h2>
          <p className="gg-seo-text">
            Proxy Tech Support helps IT professionals get interview scheduled for high-paying technology roles in {config.country} through industry-specific profile engineering and recruiter visibility optimization. Our service supports AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals targeting {config.country} job opportunities.
          </p>
          <p className="gg-seo-text" style={{ marginTop: '.85rem' }}>
            We also provide <a href="/proxy-interview-support/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>interview proxy support</a> and <a href="/job-support-usa/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>real-time IT job support</a> for professionals who need technical assistance during interviews, project work, production support, and daily job responsibilities.
          </p>
          <p className="gg-seo-text" style={{ marginTop: '.85rem' }}>
            Contact Proxy Tech Support — WhatsApp: +91 96606 14469 &nbsp;|&nbsp; Website: proxytechsupport.com
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
