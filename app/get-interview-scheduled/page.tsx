import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';
import { SITE_NAME, defaultOgImage } from '@/lib/site-seo';

export const metadata: Metadata = {
  title: 'Get IT Interview Scheduled for High-Paying Roles | Profile Engineering',
  description:
    'Not getting IT interview calls? Proxy Tech Support helps AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals get interview scheduled through industry-specific profile engineering and recruiter visibility optimization.',
  keywords: [
    'get interview scheduled',
    'get IT interview calls',
    'IT profile engineering',
    'profile engineering for IT jobs',
    'high paying IT roles',
    'AI job interview calls',
    'ML job interview calls',
    'MLOps jobs',
    'DevOps jobs',
    'Cloud jobs',
    'Backend jobs',
    'Full Stack jobs',
    'recruiter visibility optimization',
    'interview pipeline setup',
    'proxy interview support',
    'IT job support',
  ],
  alternates: {
    canonical: 'https://proxytechsupport.com/get-interview-scheduled/',
  },
  openGraph: {
    title: 'Get IT Interview Scheduled for High-Paying Roles | Profile Engineering',
    description:
      'Not getting IT interview calls? We help AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals get interview scheduled through industry-specific profile engineering.',
    url: 'https://proxytechsupport.com/get-interview-scheduled/',
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get IT Interview Scheduled | Profile Engineering | High-Paying IT Roles',
    description:
      'Not getting interview calls? We fix that through profile engineering and recruiter visibility optimization for AI, ML, DevOps, Cloud, Backend, and Full-Stack professionals.',
    images: [defaultOgImage.url],
  },
};

const CALL_LINK = 'tel:+919660614469';

/* ── Structured data ─────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you apply for jobs on my behalf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We are not a job application agency. We focus on profile engineering, recruiter visibility, and industry-specific positioning so your profile has a better chance of getting noticed and shortlisted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this resume writing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This is not basic resume writing. We call it Profile Engineering because the work is focused on positioning, role alignment, recruiter search behavior, and high-paying IT job requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this help me get interview calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the goal is to improve your visibility and shortlisting chances by making your profile more aligned with recruiter searches and job requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which roles do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries do you target?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support professionals targeting USA, UK, Canada, Australia, New Zealand, Ireland, Europe, Singapore, Hong Kong, and UAE job markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support high-paying IT roles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our positioning is built for competitive and high-paying IT roles where generic profiles usually fail to stand out.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide interview proxy support also?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once your interview is scheduled, we can also help with interview proxy support, technical interview assistance, and real-time job support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our process is confidential, professional, and handled privately over WhatsApp or direct communication.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Get IT Interview Scheduled — Profile Engineering & Recruiter Visibility',
  description:
    'Profile engineering and recruiter visibility optimization for AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals targeting high-paying IT roles globally.',
  provider: {
    '@type': 'Organization',
    name: 'Proxy Tech Support',
    url: 'https://proxytechsupport.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-96606-14469',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  },
  areaServed: ['US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'DE', 'NL', 'SE', 'DK', 'FI', 'NO', 'CH', 'AT', 'BE', 'FR', 'ES', 'PT', 'SG', 'HK', 'AE'],
  serviceType: 'IT Profile Engineering and Recruiter Visibility Optimization',
};

/* ── Inline SVG helpers ───────────────────────────────────────────────────── */

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

function CrossIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 3 }}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ── Page component ───────────────────────────────────────────────────────── */

export default function GetInterviewScheduledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <style>{`
        /* ── Buttons ─────────────────────────────────────────────────────── */
        .gis-btn-wa {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:#25D366; color:#fff; font-weight:700; font-size:0.97rem;
          padding:0.9rem 1.8rem; border-radius:50px; text-decoration:none;
          transition:filter .2s,transform .2s; white-space:nowrap;
        }
        .gis-btn-wa:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .gis-btn-ghost {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:transparent; color:#fff; font-weight:600; font-size:0.92rem;
          padding:0.85rem 1.6rem; border-radius:50px; text-decoration:none;
          border:1.5px solid rgba(255,255,255,0.55);
          transition:background .2s,border-color .2s,transform .2s; white-space:nowrap;
        }
        .gis-btn-ghost:hover { background:rgba(255,255,255,0.1); border-color:#fff; transform:translateY(-1px); }
        .gis-btn-forest {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:var(--pts-forest); color:#fff; font-weight:700; font-size:0.97rem;
          padding:0.9rem 1.8rem; border-radius:50px; text-decoration:none;
          transition:background .2s,transform .2s; white-space:nowrap;
        }
        .gis-btn-forest:hover { background:var(--pts-forest-hover); transform:translateY(-1px); }
        .gis-cta-row { display:flex; flex-wrap:wrap; gap:0.85rem; align-items:center; }

        /* ── Sections ────────────────────────────────────────────────────── */
        .gis-hero {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 65% 50% at 5% 8%,  rgba(0,223,130,.13) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 92%, rgba(3,98,76,.22)   0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #091416 60%, #030f0f 100%);
          padding:clamp(3.5rem,7vw,6rem) 1rem clamp(3rem,6vw,5.5rem);
        }
        .gis-section-alt   { position:relative; z-index:0; background:var(--pts-section-alt);  padding:clamp(3rem,6vw,5rem) 1rem; }
        .gis-section-white { position:relative; z-index:0; background:var(--pts-bg);            padding:clamp(3rem,6vw,5rem) 1rem; }
        .gis-section-mint  {
          position:relative; z-index:0; background:var(--pts-tech-header);
          border-top:1px solid rgba(0,223,130,.2); border-bottom:1px solid rgba(0,223,130,.2);
          padding:clamp(2.5rem,5vw,4.5rem) 1rem;
        }
        .gis-section-dark  {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 70% 55% at 0%   0%,   rgba(0,223,130,.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,.18)   0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding:clamp(3.5rem,7vw,5.5rem) 1rem;
        }
        .gis-inner        { width:100%; max-width:var(--pts-content-max); margin:0 auto; }
        .gis-inner--narrow{ width:100%; max-width:820px; margin:0 auto; }

        /* ── Typography ──────────────────────────────────────────────────── */
        .gis-eyebrow {
          display:inline-flex; align-items:center; gap:.45rem;
          font-size:.72rem; font-weight:700; letter-spacing:.18em;
          text-transform:uppercase; color:var(--pts-accent); margin-bottom:1.1rem;
        }
        .gis-h1 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.9rem,4.5vw,3.1rem); font-weight:700; color:#fff;
          line-height:1.15; margin-bottom:1.15rem; max-width:760px;
        }
        .gis-hero-lead {
          font-size:clamp(1rem,1.9vw,1.15rem); color:rgba(255,255,255,.8);
          line-height:1.65; margin-bottom:.6rem; max-width:680px;
        }
        .gis-hero-body {
          font-size:clamp(.95rem,1.7vw,1.05rem); color:rgba(255,255,255,.65);
          line-height:1.75; margin-bottom:1.35rem; max-width:660px;
        }
        .gis-hero-tags {
          display:flex; flex-wrap:wrap; gap:.45rem; margin-bottom:2rem;
        }
        .gis-hero-tag {
          font-size:.78rem; font-weight:700; letter-spacing:.06em;
          color:var(--pts-accent); background:rgba(0,223,130,.1);
          border:1px solid rgba(0,223,130,.25); border-radius:6px;
          padding:.25rem .65rem;
        }
        .gis-trust-line {
          margin-top:1.5rem; font-size:.82rem; font-weight:600;
          color:rgba(255,255,255,.45); letter-spacing:.12em; text-transform:uppercase;
        }

        /* ── Hero split (copy left, metrics card right) ───────────────────── */
        .gis-hero-split {
          display:grid;
          grid-template-columns:1fr;
          gap:clamp(1.35rem,3vw,2.25rem);
          align-items:start;
        }
        @media(min-width:1024px){
          .gis-hero-split {
            grid-template-columns:minmax(0,1fr) minmax(268px,355px);
            column-gap:clamp(1.75rem,3vw,2.75rem);
          }
          .gis-hero-split .gis-h1        { max-width:none; }
          .gis-hero-split .gis-hero-lead,
          .gis-hero-split .gis-hero-body { max-width:42rem; }
        }
        /* Metrics card */
        .gis-metrics-card {
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
          .gis-metrics-card {
            position:sticky;
            top:calc(var(--pts-sticky-header-offset) + 0.5rem);
            padding:1.35rem 1.15rem;
            gap:.85rem;
          }
        }
        .gis-metric-cell {
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
          .gis-metric-cell { min-height:5.25rem; padding:1.05rem .55rem; }
        }
        .gis-metric-stat  { font-size:1.32rem; font-weight:800; color:var(--pts-accent); line-height:1.15; }
        .gis-metric-label { font-size:.7rem; color:rgba(255,255,255,.5); font-weight:500; line-height:1.25; margin-top:.35rem; letter-spacing:.02em; }

        .gis-section-eyebrow { font-size:.72rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:.6rem; }
        .gis-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.45rem,2.8vw,2.1rem); font-weight:700;
          color:var(--pts-text); line-height:1.25; margin-bottom:.65rem;
        }
        .gis-h2--white { color:#fff; }
        .gis-lead { font-size:.98rem; color:var(--pts-text-subtle); line-height:1.7; margin-bottom:2rem; max-width:580px; }

        /* ── Pain list ───────────────────────────────────────────────────── */
        .gis-pain-intro {
          font-size:clamp(.97rem,1.7vw,1.05rem); color:var(--pts-text-muted); line-height:1.8;
          margin-bottom:2rem; max-width:680px;
        }
        .gis-pain-list { display:flex; flex-direction:column; gap:.85rem; }
        .gis-pain-item {
          display:flex; gap:.8rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.1rem 1.35rem;
          font-size:.93rem; color:var(--pts-text-muted); line-height:1.6;
          box-shadow:var(--pts-shadow-lp);
        }
        .gis-pain-dot {
          width:20px; height:20px; border-radius:50%; flex-shrink:0;
          background:rgba(239,68,68,.12); color:#ef4444;
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }

        /* ── Positioning block ───────────────────────────────────────────── */
        .gis-pos-grid { display:grid; gap:2.5rem; align-items:start; }
        @media(min-width:1024px){ .gis-pos-grid{ grid-template-columns:1fr 1fr; gap:3.5rem; } }
        .gis-pos-quote {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.05rem,2vw,1.35rem); color:var(--pts-text);
          line-height:1.65; font-style:italic;
          border-left:4px solid var(--pts-accent); padding:1.25rem 1.5rem;
          background:var(--pts-section-alt); border-radius:0 10px 10px 0;
          margin-bottom:1.5rem;
        }
        .gis-pos-list { display:flex; flex-direction:column; gap:.75rem; }
        .gis-pos-item {
          display:flex; gap:.65rem; align-items:flex-start;
          font-size:.93rem; color:var(--pts-text-muted); line-height:1.55;
        }
        .gis-pos-icon {
          width:22px; height:22px; border-radius:6px; flex-shrink:0;
          background:rgba(0,223,130,.12); color:var(--pts-forest);
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }

        /* ── High-paying roles ───────────────────────────────────────────── */
        .gis-hp-grid { display:grid; gap:1rem; grid-template-columns:1fr; }
        @media(min-width:640px){ .gis-hp-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1024px){ .gis-hp-grid{ grid-template-columns:repeat(4,1fr); } }
        .gis-hp-chip {
          display:flex; gap:.6rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.1rem 1.25rem;
          font-size:.9rem; color:var(--pts-text-muted); line-height:1.55;
          box-shadow:var(--pts-shadow-lp); transition:transform .2s;
        }
        .gis-hp-chip:hover { transform:translateY(-2px); }
        .gis-hp-chip-icon {
          width:22px; height:22px; border-radius:6px; flex-shrink:0;
          background:rgba(0,223,130,.12); color:var(--pts-forest);
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }

        /* ── Role cards ──────────────────────────────────────────────────── */
        .gis-role-grid { display:grid; gap:1.25rem; grid-template-columns:1fr; }
        @media(min-width:640px){ .gis-role-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1024px){ .gis-role-grid{ grid-template-columns:repeat(3,1fr); } }
        .gis-role-card {
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem;
          box-shadow:var(--pts-shadow-lp); transition:box-shadow .2s,transform .2s;
          display:flex; flex-direction:column; gap:.65rem;
        }
        .gis-role-card:hover { box-shadow:var(--pts-shadow-lp-hover); transform:translateY(-2px); }
        .gis-role-badge {
          display:inline-flex; align-items:center; gap:.4rem;
          font-size:.72rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase;
          color:var(--pts-forest); background:rgba(0,223,130,.1);
          border:1px solid rgba(0,223,130,.22); border-radius:6px; padding:.25rem .65rem;
          width:fit-content;
        }
        .gis-role-title { font-size:1.05rem; font-weight:700; color:var(--pts-text); line-height:1.3; }
        .gis-role-desc  { font-size:.9rem; color:var(--pts-text-muted); line-height:1.7; }

        /* ── Industry tags ───────────────────────────────────────────────── */
        .gis-industry-tags { display:flex; flex-wrap:wrap; gap:.45rem; margin-bottom:1.5rem; }
        .gis-industry-tag {
          font-size:.82rem; font-weight:600; color:var(--pts-forest);
          background:rgba(0,223,130,.07); border:1px solid rgba(0,223,130,.22);
          border-radius:6px; padding:.28rem .65rem;
        }
        .gis-industry-note {
          font-size:.93rem; color:var(--pts-text-muted); line-height:1.75;
          border-left:3px solid var(--pts-accent); padding-left:1.1rem;
          margin-top:1.5rem;
        }

        /* ── Process steps ───────────────────────────────────────────────── */
        .gis-process-list { display:flex; flex-direction:column; gap:1.1rem; }
        .gis-process-step {
          display:flex; gap:1.25rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem;
          box-shadow:var(--pts-shadow-lp);
        }
        .gis-step-num {
          width:42px; height:42px; border-radius:50%; flex-shrink:0;
          background:var(--pts-forest); color:#fff;
          display:flex; align-items:center; justify-content:center;
          font-size:1.05rem; font-weight:800;
        }
        .gis-step-title { font-size:1rem; font-weight:700; color:var(--pts-text); margin-bottom:.35rem; }
        .gis-step-desc  { font-size:.9rem; color:var(--pts-text-muted); line-height:1.7; }

        /* ── Differentiation ─────────────────────────────────────────────── */
        .gis-diff-list { display:flex; flex-direction:column; gap:.9rem; }
        .gis-diff-row {
          display:grid; grid-template-columns:1fr auto 1fr; gap:.75rem; align-items:center;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1rem 1.35rem;
          box-shadow:var(--pts-shadow-lp);
        }
        @media(max-width:640px){
          .gis-diff-row { grid-template-columns:1fr; gap:.35rem; }
          .gis-diff-arrow { display:none; }
        }
        .gis-diff-them { font-size:.9rem; color:var(--pts-text-subtle); line-height:1.5; }
        .gis-diff-us   { font-size:.9rem; font-weight:700; color:var(--pts-forest); line-height:1.5; }
        .gis-diff-arrow { text-align:center; color:var(--pts-accent); font-size:1.1rem; font-weight:700; }

        /* ── Do / Don't ──────────────────────────────────────────────────── */
        .gis-scope-grid { display:grid; gap:1.5rem; }
        @media(min-width:768px){ .gis-scope-grid{ grid-template-columns:1fr 1fr; } }
        .gis-scope-card {
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem 1.75rem;
          box-shadow:var(--pts-shadow-lp);
        }
        .gis-scope-title { font-size:1rem; font-weight:800; color:var(--pts-text); margin-bottom:1.1rem; display:flex; align-items:center; gap:.55rem; }
        .gis-scope-title--do   { color:var(--pts-forest); }
        .gis-scope-title--dont { color:#ef4444; }
        .gis-scope-list { display:flex; flex-direction:column; gap:.65rem; }
        .gis-scope-item { display:flex; gap:.6rem; align-items:flex-start; font-size:.9rem; color:var(--pts-text-muted); line-height:1.55; }
        .gis-scope-icon-do   { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(0,223,130,.15); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }
        .gis-scope-icon-dont { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(239,68,68,.12); color:#ef4444; display:flex; align-items:center; justify-content:center; margin-top:1px; }

        /* ── Country tags ────────────────────────────────────────────────── */
        .gis-country-tags { display:flex; flex-wrap:wrap; gap:.45rem; margin-top:1rem; }
        .gis-country-tag {
          font-size:.82rem; font-weight:600; color:var(--pts-forest);
          background:rgba(0,223,130,.08); border:1px solid rgba(0,223,130,.25);
          border-radius:6px; padding:.28rem .65rem;
        }

        /* ── Funnel ──────────────────────────────────────────────────────── */
        .gis-funnel-list { display:flex; flex-direction:column; gap:.75rem; max-width:520px; }
        .gis-funnel-item { display:flex; gap:.65rem; align-items:flex-start; font-size:.93rem; color:var(--pts-text-muted); line-height:1.55; }
        .gis-funnel-icon { width:22px; height:22px; border-radius:6px; flex-shrink:0; background:rgba(0,223,130,.12); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }
        .gis-funnel-flow {
          display:flex; flex-wrap:wrap; gap:.6rem; align-items:center;
          margin-top:2rem; padding:1.25rem 1.5rem;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); box-shadow:var(--pts-shadow-lp);
        }
        .gis-funnel-step {
          font-size:.88rem; font-weight:700; color:var(--pts-forest);
          background:rgba(0,223,130,.1); border:1px solid rgba(0,223,130,.2);
          border-radius:6px; padding:.3rem .75rem;
        }
        .gis-funnel-arrow { color:var(--pts-text-subtle); font-size:1rem; font-weight:700; }

        /* ── FAQ ─────────────────────────────────────────────────────────── */
        .gis-faq-list { display:flex; flex-direction:column; gap:0; border:1px solid var(--pts-border); border-radius:12px; overflow:hidden; }
        .gis-faq-item { border-bottom:1px solid var(--pts-border); }
        .gis-faq-item:last-child { border-bottom:none; }
        .gis-faq-q {
          width:100%; text-align:left; background:none; border:none;
          padding:1.2rem 1.5rem; font-family:inherit; font-size:.97rem;
          font-weight:600; color:var(--pts-text); cursor:pointer;
          display:flex; align-items:center; justify-content:space-between; gap:1rem;
          transition:background .15s;
        }
        .gis-faq-q:hover { background:var(--pts-section-alt); }
        .gis-faq-a { padding:0 1.5rem 1.2rem; font-size:.9rem; color:var(--pts-text-muted); line-height:1.75; }

        /* ── SEO block ───────────────────────────────────────────────────── */
        .gis-seo-block {
          background:var(--pts-section-alt); padding:clamp(2rem,4vw,3rem) 1rem;
          border-top:1px solid var(--pts-border);
        }
        .gis-seo-text {
          font-size:.88rem; color:var(--pts-text-subtle); line-height:1.85;
          max-width:860px; margin:0 auto;
        }

        /* ── Related links ───────────────────────────────────────────────── */
        .gis-related { background:var(--pts-section-alt); padding:1.75rem 1rem; border-top:1px solid var(--pts-border); }
        .gis-related-label { font-size:.75rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--pts-text-subtle); margin-bottom:.85rem; }
        .gis-related-row { display:flex; flex-wrap:wrap; gap:.5rem; }
        .gis-related-link {
          font-size:.82rem; color:var(--pts-forest); text-decoration:none;
          font-weight:600; border:1px solid var(--pts-border); border-radius:6px;
          padding:.3rem .65rem; background:var(--pts-card-bg);
          transition:border-color .15s,color .15s;
        }
        .gis-related-link:hover { border-color:var(--pts-accent); color:var(--pts-forest-hover); }

        /* ── Bottom CTA ──────────────────────────────────────────────────── */
        .gis-bottom-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; text-align:center; }
        .gis-bottom-eyebrow { font-size:.72rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:1rem; }
        .gis-bottom-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.5rem,3vw,2.3rem); font-weight:700;
          color:#fff; line-height:1.22; margin-bottom:.75rem;
          max-width:680px; margin-left:auto; margin-right:auto;
        }
        .gis-bottom-tags { display:flex; flex-wrap:wrap; gap:.45rem; justify-content:center; margin:1.25rem 0 1.75rem; }
        .gis-bottom-tag {
          font-size:.82rem; font-weight:700; color:#fff;
          background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2);
          border-radius:6px; padding:.28rem .7rem;
        }
        .gis-section-dark .gis-cta-row { justify-content:center; }
        .gis-contacts { display:flex; flex-wrap:wrap; justify-content:center; gap:1.25rem 2rem; margin-top:1.75rem; }
        .gis-contact-item { display:flex; align-items:center; gap:.4rem; font-size:.9rem; color:rgba(255,255,255,.72); }
        .gis-contact-item a { color:inherit; text-decoration:none; }
        .gis-contact-item a:hover { color:var(--pts-accent); }

        /* ── Mobile ──────────────────────────────────────────────────────── */
        @media(max-width:768px){
          .gis-hero { padding:1.25rem 1rem 2.5rem !important; }
          .gis-cta-row { flex-direction:column; gap:.55rem; }
          .gis-btn-wa,.gis-btn-ghost,.gis-btn-forest { width:100%; justify-content:center; min-height:52px; font-size:1rem; border-radius:12px; }
          .gis-section-alt,.gis-section-white,.gis-section-mint { padding:2.25rem 1rem; }
          .gis-section-dark { padding:2.5rem 1rem; }
          .gis-h2 { font-size:clamp(1.3rem,5.5vw,1.65rem); }
        }
      `}</style>

      <TopBar />
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-hero">
        <div className="gis-inner">
          <div className="gis-hero-split">

            {/* ── Left: copy ── */}
            <div>
              <p className="gis-eyebrow"><span aria-hidden>✦</span> Profile Engineering &amp; Recruiter Visibility</p>
              <h1 className="gis-h1">Get IT Interview Scheduled for High-Paying Roles</h1>
              <p className="gis-hero-lead">Not getting interview calls even after applying again and again?</p>
              <p className="gis-hero-body">
                Your skills may be strong.<br />
                Your experience may be real.<br />
                But if your profile is not matching what recruiters search, you will not get shortlisted.
              </p>
              <p className="gis-hero-body" style={{ marginBottom: '1.5rem' }}>
                We help IT professionals engineer industry-specific profiles aligned with real hiring demand, recruiter search behavior, and high-paying IT job requirements.
              </p>
              <div className="gis-hero-tags" aria-label="Technology roles we target">
                {['AI', 'ML', 'MLOps', 'DevOps', 'Cloud', 'Backend', 'Full-Stack'].map((t) => (
                  <span key={t} className="gis-hero-tag">{t}</span>
                ))}
              </div>
              <div className="gis-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gis-btn-wa">
                  <WAIcon />
                  Get Interview Scheduled on WhatsApp
                </a>
                <a href={CALL_LINK} className="gis-btn-ghost">Start Profile Engineering Review</a>
              </div>
              <p className="gis-trust-line">Confidential &nbsp;•&nbsp; Professional &nbsp;•&nbsp; Result-Oriented</p>
            </div>

            {/* ── Right: metrics card ── */}
            <aside className="gis-metrics-card" aria-label="Trust indicators">
              {[
                { stat: '1000+', label: 'IT Professionals Helped' },
                { stat: '24/7',  label: 'Support Available' },
                { stat: '95%',   label: 'Success Rate' },
                { stat: '50+',   label: 'Technologies Covered' },
              ].map((m) => (
                <div key={m.stat} className="gis-metric-cell">
                  <span className="gis-metric-stat">{m.stat}</span>
                  <span className="gis-metric-label">{m.label}</span>
                </div>
              ))}
            </aside>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAIN SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-alt">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">The Real Problem</p>
          <h2 className="gis-h2">Why You Are Not Getting IT Interview Calls</h2>
          <p className="gis-pain-intro">
            Most candidates think the problem is only competition.<br /><br />
            But the real problem is usually <strong>profile misalignment</strong>.<br /><br />
            Recruiters and hiring teams do not manually study every candidate in detail. They search, filter, scan, and shortlist based on very specific signals.<br /><br />
            If your profile is generic, unclear, or not aligned with the role, you may never appear in the right search.
          </p>
          <p style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem', letterSpacing: '.04em' }}>
            Common reasons professionals do not get shortlisted:
          </p>
          <div className="gis-pain-list">
            {[
              'Your profile looks too generic for the role.',
              'Your project experience does not directly match the job requirement.',
              'Your skills are listed, but not positioned around business impact.',
              'Your profile is not aligned with high-demand industry keywords.',
              'Your experience does not clearly show real-world implementation.',
              'Recruiters cannot quickly understand why you are the right fit.',
              'You are applying for high-paying roles, but your positioning looks average.',
            ].map((item) => (
              <div key={item} className="gis-pain-item">
                <span className="gis-pain-dot" aria-hidden>
                  <svg width={10} height={10} viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="4" /></svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          POSITIONING — NOT RESUME WRITING
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-white">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Our Philosophy</p>
          <h2 className="gis-h2">This Is Not Resume Writing. This Is Profile Engineering.</h2>
          <div className="gis-pos-grid">
            <div>
              <div className="gis-pos-quote">
                We do not position this as basic resume writing, CV formatting, or document editing. That is a low-value service. We focus on <strong>Profile Engineering</strong>.
              </div>
              <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Profile Engineering means building your professional positioning in a way that matches recruiter search patterns, role-specific hiring requirements, and high-paying IT job demand.
              </p>
              <p style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.6 }}>
                The goal is simple: make your profile look like the exact person the company is trying to hire.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                Profile Engineering means matching:
              </p>
              <div className="gis-pos-list">
                {[
                  'Recruiter search patterns',
                  'Role-specific hiring requirements',
                  'Industry-specific project expectations',
                  'High-paying IT job demand',
                  'Real-world implementation language',
                  'Shortlisting behavior in today\'s competitive market',
                ].map((item) => (
                  <div key={item} className="gis-pos-item">
                    <span className="gis-pos-icon"><CheckIcon /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HIGH-PAYING ROLES SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-alt">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">High-Paying Opportunities</p>
          <h2 className="gis-h2">Positioned for High-Paying IT Opportunities</h2>
          <p className="gis-lead">
            High-paying IT roles are more competitive. Companies hiring for AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack roles do not shortlist generic profiles. They look for specific combinations of experience, depth, and business impact.
          </p>
          <div className="gis-hp-grid">
            {[
              { icon: '⚙️', text: 'Technical depth and domain ownership' },
              { icon: '☁️', text: 'Cloud and deployment experience' },
              { icon: '🏗️', text: 'System design understanding' },
              { icon: '🤖', text: 'Automation and scalability exposure' },
              { icon: '🔥', text: 'Production troubleshooting experience' },
              { icon: '📦', text: 'Project ownership and delivery' },
              { icon: '💼', text: 'Real business impact demonstrated' },
              { icon: '🎯', text: 'Industry-specific experience positioning' },
            ].map((item) => (
              <div key={item.text} className="gis-hp-chip">
                <span className="gis-hp-chip-icon" aria-hidden>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.75rem', fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, maxWidth: '700px' }}>
            We help position your profile for serious IT opportunities where the hiring team wants someone who looks ready for the role from day one.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TECHNOLOGY TARGETING
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-white">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Technology Targeting</p>
          <h2 className="gis-h2">Roles We Target</h2>
          <p className="gis-lead">We engineer profiles specifically for each technology track — not generic IT positioning.</p>
          <div className="gis-role-grid">
            {[
              {
                badge: 'AI Engineer',
                desc: 'We position your profile around real AI implementation, LLM workflows, RAG systems, automation use cases, AI product thinking, and business-driven AI adoption.',
              },
              {
                badge: 'ML Engineer',
                desc: 'We align your profile with ML pipelines, model development, data workflows, feature engineering, model evaluation, and practical ML delivery.',
              },
              {
                badge: 'MLOps Engineer',
                desc: 'We position your experience around ML pipelines, model deployment, monitoring, CI/CD for ML, cloud infrastructure, containerization, and production model lifecycle.',
              },
              {
                badge: 'DevOps Engineer',
                desc: 'We align your profile with CI/CD, Kubernetes, Docker, Terraform, monitoring, automation, cloud deployments, and production reliability.',
              },
              {
                badge: 'Cloud Engineer',
                desc: 'We position your profile for AWS, Azure, GCP, infrastructure design, cloud migration, security, scalability, cost optimization, and operational ownership.',
              },
              {
                badge: 'Backend Engineer',
                desc: 'We align your profile with APIs, microservices, databases, authentication, performance, scalability, production debugging, and enterprise backend systems.',
              },
              {
                badge: 'Full-Stack Engineer',
                desc: 'We position your profile around end-to-end product delivery, frontend frameworks, backend APIs, databases, cloud deployment, and real business features.',
              },
            ].map((role) => (
              <div key={role.badge} className="gis-role-card">
                <span className="gis-role-badge">{role.badge}</span>
                <p className="gis-role-desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INDUSTRY-SPECIFIC
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-alt">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Industry Focus</p>
          <h2 className="gis-h2">Industry-Specific Profile Positioning</h2>
          <p className="gis-lead">A generic IT profile is weak. A profile aligned to an industry is stronger. We help position your experience based on the industries where companies are actively hiring and paying better.</p>
          <p style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '.85rem', letterSpacing: '.04em' }}>Industries we can target:</p>
          <div className="gis-industry-tags">
            {['FinTech', 'Healthcare', 'Banking', 'Insurance', 'SaaS', 'E-commerce', 'Retail', 'Logistics', 'Supply Chain', 'Manufacturing', 'Cybersecurity', 'Real Estate Tech', 'EdTech', 'Telecom', 'Data Platforms', 'AI Product Companies', 'Cloud Consulting', 'Enterprise Software'].map((ind) => (
              <span key={ind} className="gis-industry-tag">{ind}</span>
            ))}
          </div>
          <div className="gis-industry-note">
            <p style={{ margin: 0, fontSize: '.93rem', color: 'var(--pts-text-muted)', lineHeight: 1.8 }}>
              For example, a DevOps profile for a FinTech company should not look the same as a DevOps profile for a healthcare SaaS company.<br /><br />
              A Backend profile for banking should not look the same as a Backend profile for e-commerce.<br /><br />
              <strong style={{ color: 'var(--pts-text)' }}>Industry-specific positioning</strong> makes your experience feel more relevant, more searchable, and more valuable.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CORE SOLUTION — HOW WE HELP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-white">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Our Process</p>
          <h2 className="gis-h2">How We Help You Get Interview Scheduled</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '620px' }}>
            We do not apply randomly. We do not act like a recruitment agency. We do not promise fake guarantees.<br />
            <strong style={{ color: 'var(--pts-text)' }}>We help you fix the foundation: your profile positioning.</strong>
          </p>
          <div className="gis-process-list">
            {[
              {
                num: 1,
                title: 'Role Targeting',
                desc: 'We first understand what type of IT roles you want to target — AI, ML, MLOps, DevOps, Cloud, Backend, or Full-Stack. Then we identify which role direction gives you the strongest chance based on your background.',
              },
              {
                num: 2,
                title: 'Industry Targeting',
                desc: 'We map your experience to high-demand industries. This helps your profile speak the language of the companies you want to target.',
              },
              {
                num: 3,
                title: 'Profile Engineering',
                desc: 'We rebuild the way your professional profile communicates your skills, experience, projects, tools, and business impact. No generic wording. No weak positioning. No copy-paste structure.',
              },
              {
                num: 4,
                title: 'Recruiter Visibility Optimization',
                desc: 'We align your profile with recruiter search behavior, hiring keywords, and role-specific filters. This improves your chances of being discovered and shortlisted.',
              },
              {
                num: 5,
                title: 'Real-World Project Mapping',
                desc: 'Because we provide real-time IT job support, we understand how real projects work. We use that understanding to position your project experience closer to actual business and production requirements.',
              },
              {
                num: 6,
                title: 'Interview Pipeline Readiness',
                desc: 'Once your profile is positioned correctly, you are better prepared to attract interview opportunities for relevant, high-paying roles.',
              },
            ].map((step) => (
              <div key={step.num} className="gis-process-step">
                <div className="gis-step-num" aria-hidden>{step.num}</div>
                <div>
                  <h3 className="gis-step-title">{step.title}</h3>
                  <p className="gis-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MID-PAGE CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-mint">
        <div style={{ width: '100%', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.3, marginBottom: '.65rem' }}>
            Ready to Start Getting IT Interview Calls?
          </h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-subtle)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
            Talk to us on WhatsApp. We will review your current positioning and tell you what needs to change.
          </p>
          <div className="gis-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gis-btn-wa">
              <WAIcon />
              Get Interview Scheduled on WhatsApp
            </a>
            <a href={CALL_LINK} className="gis-btn-forest">Call +91 96606 14469</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DIFFERENTIATION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-alt">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Why Different</p>
          <h2 className="gis-h2">Why Our Approach Is Different</h2>
          <p className="gis-lead">Most services only polish words. We focus on positioning.</p>
          <div className="gis-diff-list">
            {[
              { them: 'Most services make your profile look clean.', us: 'We make your profile look relevant.' },
              { them: 'Most services talk about formatting.', us: 'We focus on recruiter visibility and shortlisting signals.' },
              { them: 'Most services write generic summaries.', us: 'We align your profile with real IT project requirements.' },
              { them: 'Most services do not understand production work.', us: 'We support professionals in real-time IT jobs, interviews, coding tasks, production issues, and project delivery. That gives us a practical understanding of what companies actually expect.' },
            ].map((row, i) => (
              <div key={i} className="gis-diff-row">
                <p className="gis-diff-them">{row.them}</p>
                <span className="gis-diff-arrow" aria-hidden>→</span>
                <p className="gis-diff-us">{row.us}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SCOPE — DO / DON'T
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-white">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Clear Scope</p>
          <h2 className="gis-h2">What We Do &amp; What We Do Not Do</h2>
          <p className="gis-lead">This is a strategic profile engineering service designed to improve visibility, relevance, and interview scheduling chances.</p>
          <div className="gis-scope-grid">
            <div className="gis-scope-card">
              <p className="gis-scope-title gis-scope-title--do">
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,223,130,.15)', color: 'var(--pts-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckIcon />
                </span>
                What We Do
              </p>
              <div className="gis-scope-list">
                {[
                  'Engineer your professional profile for IT hiring visibility.',
                  'Align your profile with high-paying role requirements.',
                  'Create industry-specific positioning.',
                  'Improve recruiter search relevance.',
                  'Help you communicate real project experience more clearly.',
                  'Prepare your profile for better shortlist chances.',
                ].map((item) => (
                  <div key={item} className="gis-scope-item">
                    <span className="gis-scope-icon-do"><CheckIcon size={12} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gis-scope-card">
              <p className="gis-scope-title gis-scope-title--dont">
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(239,68,68,.12)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CrossIcon />
                </span>
                What We Do Not Do
              </p>
              <div className="gis-scope-list">
                {[
                  'We do not present ourselves as a job placement agency.',
                  'We do not mass-apply to jobs on your behalf.',
                  'We do not sell basic resume writing.',
                  'We do not make fake job guarantees.',
                  'We do not promise interviews from specific companies.',
                ].map((item) => (
                  <div key={item} className="gis-scope-item">
                    <span className="gis-scope-icon-dont"><CrossIcon size={12} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COUNTRY TARGETING
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-alt" style={{ borderTop: '1px solid var(--pts-border)' }}>
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Global Coverage</p>
          <h2 className="gis-h2">Built for Global IT Job Markets</h2>
          <p className="gis-lead">We support IT professionals targeting high-paying opportunities across multiple countries. Each market has different recruiter behavior, job wording, and technology demand.</p>
          <div className="gis-country-tags">
            {['USA', 'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'Ireland', 'Germany', 'Netherlands', 'Sweden', 'Denmark', 'Finland', 'Norway', 'Switzerland', 'Austria', 'Belgium', 'France', 'Spain', 'Portugal', 'Singapore', 'Hong Kong', 'United Arab Emirates'].map((c) => (
              <span key={c} className="gis-country-tag">{c}</span>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, maxWidth: '680px' }}>
            We help position your profile so it speaks clearly to the role and region you want to target.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FUNNEL — AFTER SCHEDULING
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-white">
        <div className="gis-inner">
          <p className="gis-section-eyebrow">Full Career Path</p>
          <h2 className="gis-h2">After You Get Interview Scheduled, We Can Support You Further</h2>
          <p className="gis-lead">Getting the interview scheduled is the first step. After that, we can also help with:</p>
          <div className="gis-funnel-list">
            {[
              'Interview preparation',
              'Technical interview support',
              'Proxy interview assistance',
              'Live coding round support',
              'System design discussion support',
              'Real-time IT job support after joining',
              'Production issue guidance',
              'Task delivery support',
            ].map((item) => (
              <div key={item} className="gis-funnel-item">
                <span className="gis-funnel-icon"><ArrowRight /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="gis-funnel-flow" aria-label="Full career support flow">
            <span className="gis-funnel-step">Get Scheduled</span>
            <span className="gis-funnel-arrow" aria-hidden>›</span>
            <span className="gis-funnel-step">Clear Interview</span>
            <span className="gis-funnel-arrow" aria-hidden>›</span>
            <span className="gis-funnel-step">Handle Job Successfully</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STRONG CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-dark">
        <div className="gis-bottom-inner">
          <p className="gis-bottom-eyebrow">Ready to Get Started</p>
          <h2 className="gis-bottom-h2">Ready to Get IT Interview Calls?</h2>
          <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,.68)', lineHeight: 1.75, marginBottom: '.5rem', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            If you are applying but not getting shortlisted, the problem may not be your skill. The problem may be how your profile is positioned.
          </p>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.65, marginBottom: 0, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            Get Interview Scheduled via Profile Engineering
          </p>
          <div className="gis-bottom-tags" aria-label="Roles we serve">
            {['AI', 'ML', 'MLOps', 'DevOps', 'Cloud', 'Backend', 'Full-Stack'].map((t) => (
              <span key={t} className="gis-bottom-tag">{t}</span>
            ))}
          </div>
          <div className="gis-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gis-btn-wa">
              <WAIcon />
              WhatsApp Us Now
            </a>
            <a href={CALL_LINK} className="gis-btn-ghost">+91 96606 14469</a>
          </div>
          <div className="gis-contacts">
            <div className="gis-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href={CALL_LINK}>+91 96606 14469</a>
            </div>
            <div className="gis-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <a href="https://proxytechsupport.com" target="_blank" rel="noopener noreferrer">proxytechsupport.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="gis-section-white">
        <div className="gis-inner">
          <div style={{ display: 'grid', gap: '2.5rem', alignItems: 'start' }}>
            <div style={{ maxWidth: 420 }}>
              <p className="gis-section-eyebrow">FAQ</p>
              <h2 className="gis-h2">Frequently Asked Questions</h2>
              <p style={{ fontSize: '.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Everything you need to know before getting started.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="gis-btn-wa" style={{ display: 'inline-flex', fontSize: '.9rem' }}>
                <WAIcon size={15} />
                Ask on WhatsApp
              </a>
            </div>
            <div className="gis-faq-list">
              {[
                { q: 'Do you apply for jobs on my behalf?', a: 'No. We are not a job application agency. We focus on profile engineering, recruiter visibility, and industry-specific positioning so your profile has a better chance of getting noticed and shortlisted.' },
                { q: 'Is this resume writing?', a: 'No. This is not basic resume writing. We call it Profile Engineering because the work is focused on positioning, role alignment, recruiter search behavior, and high-paying IT job requirements.' },
                { q: 'Can this help me get interview calls?', a: 'Yes, the goal is to improve your visibility and shortlisting chances by making your profile more aligned with recruiter searches and job requirements.' },
                { q: 'Which roles do you support?', a: 'We support AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals.' },
                { q: 'Which countries do you target?', a: 'We support professionals targeting USA, UK, Canada, Australia, New Zealand, Ireland, Europe, Singapore, Hong Kong, and UAE job markets.' },
                { q: 'Do you support high-paying IT roles?', a: 'Yes. Our positioning is built for competitive and high-paying IT roles where generic profiles usually fail to stand out.' },
                { q: 'Do you provide interview proxy support also?', a: 'Yes. Once your interview is scheduled, we can also help with interview proxy support, technical interview assistance, and real-time job support.' },
                { q: 'Is this confidential?', a: 'Yes. Our process is confidential, professional, and handled privately over WhatsApp or direct communication.' },
              ].map((f, i) => (
                <details key={i} className="gis-faq-item" style={{ listStyle: 'none' }}>
                  <summary className="gis-faq-q">{f.q} <span aria-hidden style={{ flexShrink: 0, fontSize: '1.1rem' }}>+</span></summary>
                  <p className="gis-faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          RELATED LINKS
      ═══════════════════════════════════════════════════════════════════ */}
      <nav className="gis-related" aria-label="Related pages">
        <div className="gis-inner">
          <p className="gis-related-label">Related Services &amp; Pages</p>
          <div className="gis-related-row">
            {[
              { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
              { label: 'Job Support USA', href: '/job-support-usa/' },
              { label: 'Job Support UK', href: '/job-support-uk/' },
              { label: 'Job Support Canada', href: '/job-support-canada/' },
              { label: 'Job Support Australia', href: '/job-support-australia/' },
              { label: 'Interview Scheduled — USA', href: '/get-interview-scheduled-usa/' },
              { label: 'Interview Scheduled — UK', href: '/get-interview-scheduled-uk/' },
              { label: 'Interview Scheduled — Canada', href: '/get-interview-scheduled-canada/' },
              { label: 'Interview Scheduled — Germany', href: '/get-interview-scheduled-germany/' },
              { label: 'Interview Scheduled — Singapore', href: '/get-interview-scheduled-singapore/' },
              { label: 'Interview Questions', href: '/interviews/' },
              { label: 'Blog', href: '/blog/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="gis-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          SEO BLOCK
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="gis-seo-block">
        <div className="gis-inner">
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1rem,1.8vw,1.2rem)', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem' }}>
            Get Interview Scheduled With Profile Engineering
          </h2>
          <p className="gis-seo-text">
            Proxy Tech Support helps IT professionals improve profile visibility and get interview scheduled for high-paying technology roles across the USA, UK, Canada, Europe, Australia, New Zealand, Singapore, and Hong Kong. Our service is focused on industry-specific profile engineering for AI, ML, MLOps, DevOps, Cloud, Backend, and Full-Stack professionals.
          </p>
          <p className="gis-seo-text" style={{ marginTop: '.85rem' }}>
            We also provide <a href="/proxy-interview-support/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>interview proxy support</a> and <a href="/job-support-usa/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>real-time IT job support</a> for professionals who need technical assistance during interviews, project work, production support, coding tasks, and daily job responsibilities.
          </p>
          <p className="gis-seo-text" style={{ marginTop: '.85rem' }}>
            Contact Proxy Tech Support — WhatsApp: +91 96606 14469 &nbsp;|&nbsp; Website: proxytechsupport.com
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
