import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';
import { SITE_NAME, defaultOgImage } from '@/lib/site-seo';

export const metadata: Metadata = {
  title: 'Job Application & Candidate Marketing Services | Proxy Tech Support',
  description:
    'Stop waiting for interview calls. Our Job Application & Candidate Marketing service helps candidates apply to relevant jobs, reach recruiters, follow up professionally, and keep their profile active in today\'s AI-disrupted job market.',
  keywords: [
    'job application service',
    'candidate marketing service',
    'job application support',
    'apply jobs on behalf of candidate',
    'job search marketing',
    'resume marketing service',
    'recruiter outreach service',
    'job application tracking',
    'candidate profile marketing',
    'job search support service',
    'AI job market support',
    'ATS job application support',
    'interview calls support',
    'get interview calls',
    'profile marketing for jobs',
    'IT job marketing service',
  ],
  alternates: {
    canonical: 'https://proxytechsupport.com/job-application-candidate-marketing/',
  },
  openGraph: {
    title: 'Job Application & Candidate Marketing Services | Proxy Tech Support',
    description:
      'Stop waiting for interview calls. We help candidates apply to relevant jobs, reach recruiters, follow up professionally, and keep their profile active in today\'s AI-disrupted job market.',
    url: 'https://proxytechsupport.com/job-application-candidate-marketing/',
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Application & Candidate Marketing | Proxy Tech Support',
    description:
      'Stop waiting for interview calls. We apply to relevant jobs on your behalf, reach recruiters, follow up professionally, and keep your profile active.',
    images: [defaultOgImage.url],
  },
};

const CALL_LINK = 'tel:+919660614469';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
    { '@type': 'ListItem', position: 2, name: 'Job Application & Candidate Marketing', item: 'https://proxytechsupport.com/job-application-candidate-marketing/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Job Application & Candidate Marketing',
  description:
    'We help candidates apply to relevant jobs, reach recruiters, follow up professionally, track applications, and keep their profile active in the market through a structured job search campaign.',
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
  areaServed: ['US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'DE', 'NL', 'SE', 'SG', 'HK', 'AE'],
  serviceType: 'Job Application and Candidate Marketing Service',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a job application and candidate marketing service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a structured job search campaign service where we apply to relevant jobs on your behalf, contact recruiters and vendors, follow up professionally, track every application, and send weekly progress updates. It keeps your profile consistently active in the market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you apply for jobs on behalf of candidates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We apply to relevant jobs based on your profile, target role, location, work authorization, and salary or rate expectations. We focus on quality and relevance, not mass spray.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you contact recruiters directly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Where possible we reach out to recruiters, staffing agencies, vendors, and job posters with a professional outreach message on your behalf.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from uploading a resume to job boards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Job boards are passive — your profile sits and waits. We run an active campaign: applying to relevant roles, reaching recruiters directly, following up at the right time, and tracking all activity. Your profile is moving, not idle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I receive weekly from this service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every week you receive a structured progress update covering applications submitted, recruiter outreach activity, follow-up status, and any interview opportunities that came in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries and cities do you cover for job application support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover USA (all major cities), Canada (Toronto, Vancouver, Calgary, Montreal, Ottawa), UK (London, Manchester, Birmingham), Ireland (Dublin, Cork), Germany (Berlin, Munich, Frankfurt, Hamburg), Australia (Sydney, Melbourne, Brisbane, Perth), Europe, Singapore, Hong Kong, and UAE (Dubai, Abu Dhabi).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which technology roles do you support for candidate marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support AI/ML Engineers, DevOps Engineers, SRE Engineers, Cloud Engineers, Data Engineers, Python Developers, Java Developers, Full Stack Developers, React Developers, .NET Developers, QA Automation Engineers, Salesforce Developers, Workday Consultants, Cybersecurity Analysts, ServiceNow Developers, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the IT job market so competitive in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI screening tools, widespread tech layoffs, and mass application platforms have fundamentally shifted how hiring works. A single job posting can attract hundreds to thousands of applicants within 24 hours. ATS systems automatically filter most profiles before a recruiter sees them. Candidates without consistent outreach, follow-ups, and daily applications lose momentum to those who are actively moving in the market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is uploading a resume to job boards not enough anymore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Job boards are passive. Your profile sits and waits while other candidates are actively applying daily, reaching recruiters directly, and following up consistently. ATS filters eliminate most passive applications before a human reviewer sees them. Without consistent active outreach, your profile gets buried even if your skills are strong.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do IT professionals not get interview calls despite strong skills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong skills alone do not generate interview calls in a competitive market. The most common reasons are: applying too infrequently, profile not aligned to ATS keyword requirements, no direct recruiter outreach, and no follow-up after applications. Market visibility requires daily consistent action — not occasional uploads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I use a job application service instead of applying myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Running a consistent job search campaign is time-consuming — especially when you are managing current work at the same time. A job application service runs the campaign for you: daily applications to relevant roles, direct recruiter outreach, professional follow-ups, and full application tracking. In a competitive market, consistent daily activity is the difference between generating calls and going weeks without a response.',
      },
    },
  ],
};

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

export default function JobApplicationCandidateMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <style>{`
        .jcm-btn-wa {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:#25D366; color:#fff; font-weight:700; font-size:0.97rem;
          padding:0.9rem 1.8rem; border-radius:50px; text-decoration:none;
          transition:filter .2s,transform .2s; white-space:nowrap;
        }
        .jcm-btn-wa:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .jcm-btn-ghost {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:transparent; color:#fff; font-weight:600; font-size:0.92rem;
          padding:0.85rem 1.6rem; border-radius:50px; text-decoration:none;
          border:1.5px solid rgba(255,255,255,0.55);
          transition:background .2s,border-color .2s,transform .2s; white-space:nowrap;
        }
        .jcm-btn-ghost:hover { background:rgba(255,255,255,0.1); border-color:#fff; transform:translateY(-1px); }
        .jcm-btn-forest {
          display:inline-flex; align-items:center; gap:0.5rem;
          background:var(--pts-forest); color:#fff; font-weight:700; font-size:0.97rem;
          padding:0.9rem 1.8rem; border-radius:50px; text-decoration:none;
          transition:background .2s,transform .2s; white-space:nowrap;
        }
        .jcm-btn-forest:hover { background:var(--pts-forest-hover); transform:translateY(-1px); }
        .jcm-cta-row { display:flex; flex-wrap:wrap; gap:0.85rem; align-items:center; }

        .jcm-hero {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 65% 50% at 5% 8%,  rgba(0,223,130,.13) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 92%, rgba(3,98,76,.22)   0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #091416 60%, #030f0f 100%);
          padding:clamp(3.5rem,7vw,6rem) 1rem clamp(3rem,6vw,5.5rem);
        }
        .jcm-section-alt   { background:var(--pts-section-alt);  padding:clamp(3rem,6vw,5rem) 1rem; }
        .jcm-section-white { background:var(--pts-bg);            padding:clamp(3rem,6vw,5rem) 1rem; }
        .jcm-section-mint  {
          background:var(--pts-tech-header);
          border-top:1px solid rgba(0,223,130,.2); border-bottom:1px solid rgba(0,223,130,.2);
          padding:clamp(2.5rem,5vw,4.5rem) 1rem;
        }
        .jcm-section-dark  {
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding:clamp(3.5rem,7vw,5.5rem) 1rem;
        }
        .jcm-inner         { width:100%; max-width:var(--pts-content-max); margin:0 auto; }

        .jcm-eyebrow {
          display:inline-flex; align-items:center; gap:.45rem;
          font-size:.72rem; font-weight:700; letter-spacing:.18em;
          text-transform:uppercase; color:var(--pts-accent); margin-bottom:1.1rem;
        }
        .jcm-h1 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.9rem,4.5vw,3.1rem); font-weight:700; color:#fff;
          line-height:1.15; margin-bottom:1.15rem; max-width:760px;
        }
        .jcm-hero-lead {
          font-size:clamp(1rem,1.9vw,1.15rem); color:rgba(255,255,255,.8);
          line-height:1.65; margin-bottom:.6rem; max-width:680px;
        }
        .jcm-hero-body {
          font-size:clamp(.95rem,1.7vw,1.05rem); color:rgba(255,255,255,.65);
          line-height:1.75; margin-bottom:1.35rem; max-width:660px;
        }
        .jcm-trust-line {
          margin-top:1.5rem; font-size:.82rem; font-weight:600;
          color:rgba(255,255,255,.45); letter-spacing:.12em; text-transform:uppercase;
        }
        .jcm-hero-split {
          display:grid; grid-template-columns:1fr; gap:clamp(1.35rem,3vw,2.25rem); align-items:start;
        }
        @media(min-width:1024px){
          .jcm-hero-split { grid-template-columns:minmax(0,1fr) minmax(268px,355px); column-gap:clamp(1.75rem,3vw,2.75rem); }
        }
        .jcm-metrics-card {
          display:grid; grid-template-columns:1fr 1fr; gap:.75rem;
          padding:1.2rem 1rem; border-radius:16px;
          border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.05);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.07); align-self:start;
        }
        @media(min-width:1024px){
          .jcm-metrics-card { position:sticky; top:calc(var(--pts-sticky-header-offset) + 0.5rem); padding:1.35rem 1.15rem; gap:.85rem; }
        }
        .jcm-metric-cell {
          text-align:center; display:flex; flex-direction:column; align-items:center;
          justify-content:center; padding:.7rem .4rem; border-radius:10px;
          background:rgba(0,0,0,.22); border:1px solid rgba(255,255,255,.08);
        }
        @media(min-width:1024px){ .jcm-metric-cell { min-height:5.25rem; padding:1.05rem .55rem; } }
        .jcm-metric-stat  { font-size:1.32rem; font-weight:800; color:var(--pts-accent); line-height:1.15; }
        .jcm-metric-label { font-size:.7rem; color:rgba(255,255,255,.5); font-weight:500; line-height:1.25; margin-top:.35rem; letter-spacing:.02em; }

        .jcm-section-eyebrow { font-size:.72rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:.6rem; }
        .jcm-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.45rem,2.8vw,2.1rem); font-weight:700;
          color:var(--pts-text); line-height:1.25; margin-bottom:.65rem;
        }
        .jcm-h2--white { color:#fff; }
        .jcm-lead { font-size:.98rem; color:var(--pts-text-subtle); line-height:1.7; margin-bottom:2rem; max-width:580px; }

        .jcm-pain-list { display:flex; flex-direction:column; gap:.85rem; }
        .jcm-pain-item {
          display:flex; gap:.8rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.1rem 1.35rem;
          font-size:.93rem; color:var(--pts-text-muted); line-height:1.6;
          box-shadow:var(--pts-shadow-lp);
        }
        .jcm-pain-dot {
          width:20px; height:20px; border-radius:50%; flex-shrink:0;
          background:rgba(239,68,68,.12); color:#ef4444;
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }

        .jcm-step-list { display:flex; flex-direction:column; gap:1.1rem; }
        .jcm-step {
          display:flex; gap:1.25rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem; box-shadow:var(--pts-shadow-lp);
        }
        .jcm-step-num {
          width:42px; height:42px; border-radius:50%; flex-shrink:0;
          background:var(--pts-forest); color:#fff;
          display:flex; align-items:center; justify-content:center; font-size:1.05rem; font-weight:800;
        }
        .jcm-step-title { font-size:1rem; font-weight:700; color:var(--pts-text); margin-bottom:.35rem; }
        .jcm-step-desc  { font-size:.9rem; color:var(--pts-text-muted); line-height:1.7; }

        .jcm-check-list { display:flex; flex-direction:column; gap:.75rem; }
        .jcm-check-item { display:flex; gap:.65rem; align-items:flex-start; font-size:.93rem; color:var(--pts-text-muted); line-height:1.55; }
        .jcm-check-icon { width:22px; height:22px; border-radius:6px; flex-shrink:0; background:rgba(0,223,130,.12); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }


        .jcm-scope-grid { display:grid; gap:1.5rem; }
        @media(min-width:768px){ .jcm-scope-grid { grid-template-columns:1fr 1fr; } }
        .jcm-scope-card {
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem 1.75rem; box-shadow:var(--pts-shadow-lp);
        }
        .jcm-scope-title { font-size:1rem; font-weight:800; color:var(--pts-text); margin-bottom:1.1rem; display:flex; align-items:center; gap:.55rem; }
        .jcm-scope-list { display:flex; flex-direction:column; gap:.65rem; }
        .jcm-scope-item { display:flex; gap:.6rem; align-items:flex-start; font-size:.9rem; color:var(--pts-text-muted); line-height:1.55; }
        .jcm-scope-icon-do   { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(0,223,130,.15); color:var(--pts-forest); display:flex; align-items:center; justify-content:center; margin-top:1px; }
        .jcm-scope-icon-dont { width:20px; height:20px; border-radius:50%; flex-shrink:0; background:rgba(239,68,68,.12); color:#ef4444; display:flex; align-items:center; justify-content:center; margin-top:1px; }

        .jcm-disclaimer {
          background:rgba(239,68,68,.04); border:1px solid rgba(239,68,68,.15);
          border-radius:var(--pts-card-radius); padding:1.5rem 1.75rem;
          font-size:.88rem; color:var(--pts-text-muted); line-height:1.8; margin-top:2rem;
        }
        .jcm-disclaimer strong { color:var(--pts-text); }

        .jcm-faq-list { display:flex; flex-direction:column; gap:0; border:1px solid var(--pts-border); border-radius:12px; overflow:hidden; }
        .jcm-faq-item { border-bottom:1px solid var(--pts-border); }
        .jcm-faq-item:last-child { border-bottom:none; }
        .jcm-faq-q { width:100%; text-align:left; background:none; border:none; padding:1.2rem 1.5rem; font-family:inherit; font-size:.97rem; font-weight:600; color:var(--pts-text); cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:1rem; transition:background .15s; }
        .jcm-faq-q:hover { background:var(--pts-section-alt); }
        .jcm-faq-a { padding:0 1.5rem 1.2rem; font-size:.9rem; color:var(--pts-text-muted); line-height:1.75; }

        .jcm-funnel-flow { display:flex; flex-wrap:wrap; gap:.6rem; align-items:center; margin-top:2rem; padding:1.25rem 1.5rem; background:var(--pts-card-bg); border:1px solid var(--pts-border); border-radius:var(--pts-card-radius); box-shadow:var(--pts-shadow-lp); }
        .jcm-funnel-step { font-size:.88rem; font-weight:700; color:var(--pts-forest); background:rgba(0,223,130,.1); border:1px solid rgba(0,223,130,.2); border-radius:6px; padding:.3rem .75rem; }
        .jcm-funnel-arrow { color:var(--pts-text-subtle); font-size:1rem; font-weight:700; }

        .jcm-related { background:var(--pts-section-alt); padding:1.75rem 1rem; border-top:1px solid var(--pts-border); }
        .jcm-related-label { font-size:.75rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--pts-text-subtle); margin-bottom:.85rem; }
        .jcm-related-row { display:flex; flex-wrap:wrap; gap:.5rem; }
        .jcm-related-link { font-size:.82rem; color:var(--pts-forest); text-decoration:none; font-weight:600; border:1px solid var(--pts-border); border-radius:6px; padding:.3rem .65rem; background:var(--pts-card-bg); transition:border-color .15s,color .15s; }
        .jcm-related-link:hover { border-color:var(--pts-accent); color:var(--pts-forest-hover); }

        .jcm-seo-block { background:var(--pts-section-alt); padding:clamp(2rem,4vw,3rem) 1rem; border-top:1px solid var(--pts-border); }
        .jcm-seo-text { font-size:.88rem; color:var(--pts-text-subtle); line-height:1.85; max-width:860px; margin:0 auto; }

        .jcm-bottom-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; text-align:center; }
        .jcm-bottom-eyebrow { font-size:.72rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:1rem; }
        .jcm-bottom-h2 { font-family:Georgia,'Times New Roman',serif; font-size:clamp(1.5rem,3vw,2.3rem); font-weight:700; color:#fff; line-height:1.22; margin-bottom:.75rem; max-width:680px; margin-left:auto; margin-right:auto; }
        .jcm-section-dark .jcm-cta-row { justify-content:center; }

        .jcm-role-tags { display:flex; flex-wrap:wrap; gap:.45rem; margin-bottom:1.5rem; }
        .jcm-role-tag { font-size:.82rem; font-weight:600; color:var(--pts-forest); background:rgba(0,223,130,.07); border:1px solid rgba(0,223,130,.22); border-radius:6px; padding:.28rem .65rem; }

        .jcm-profile-check {
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-left:4px solid var(--pts-accent);
          border-radius:var(--pts-card-radius); padding:1.75rem 2rem;
          box-shadow:var(--pts-shadow-lp); margin-top:1.5rem;
        }
        .jcm-profile-check-title { font-size:1.05rem; font-weight:700; color:var(--pts-text); margin-bottom:.75rem; }

        @media(max-width:768px){
          .jcm-hero { padding:1.25rem 1rem 2.5rem !important; }
          .jcm-cta-row { flex-direction:column; gap:.55rem; }
          .jcm-btn-wa,.jcm-btn-ghost,.jcm-btn-forest { width:100%; justify-content:center; min-height:52px; font-size:1rem; border-radius:12px; }
          .jcm-section-alt,.jcm-section-white,.jcm-section-mint { padding:2.25rem 1rem; }
          .jcm-section-dark { padding:2.5rem 1rem; }
          .jcm-h2 { font-size:clamp(1.3rem,5.5vw,1.65rem); }
        }
      `}</style>

      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="jcm-hero">
        <div className="jcm-inner">
          <div className="jcm-hero-split">
            <div>
              <p className="jcm-eyebrow"><span aria-hidden>✦</span> Job Application &amp; Candidate Marketing</p>
              <h1 className="jcm-h1">Still Waiting for Interview Calls While Others Are Getting Noticed Daily?</h1>
              <p className="jcm-hero-lead">AI screening, layoffs, and thousands of applicants per job have made the market harder than ever.</p>
              <p className="jcm-hero-body">
                A resume alone will not move your job search.<br /><br />
                We help candidates apply to relevant jobs, reach recruiters, follow up professionally, and keep their profile active in the market.<br /><br />
                Your profile should not sit idle. It should move daily.
              </p>
              <div className="jcm-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcm-btn-wa">
                  <WAIcon />
                  Start Job Marketing
                </a>
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcm-btn-ghost">Talk on WhatsApp</a>
              </div>
              <p className="jcm-trust-line">Confidential &nbsp;•&nbsp; Professional &nbsp;•&nbsp; Structured Campaign</p>
            </div>
            <aside className="jcm-metrics-card" aria-label="Trust indicators">
              {[
                { stat: 'Daily', label: 'Applications & Outreach' },
                { stat: 'Weekly', label: 'Progress Updates' },
                { stat: '24/7', label: 'Support Available' },
                { stat: '20+', label: 'Markets Covered' },
              ].map((m) => (
                <div key={m.stat} className="jcm-metric-cell">
                  <span className="jcm-metric-stat">{m.stat}</span>
                  <span className="jcm-metric-label">{m.label}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* FEAR / URGENCY — THE MARKET */}
      <section className="jcm-section-alt">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">The Market Reality in 2026</p>
          <h2 className="jcm-h2">The Job Market Has Changed. Waiting Does Not Work Anymore.</h2>
          <p style={{ fontSize: 'clamp(.97rem,1.7vw,1.05rem)', color: 'var(--pts-text-muted)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '700px' }}>
            AI screening tools, widespread tech layoffs, and mass application platforms have fundamentally shifted how hiring works in 2026. A single job posting can attract hundreds to thousands of applicants within 24 hours. Recruiters are overloaded. ATS systems filter quickly. Most profiles never reach a human reviewer.
          </p>
          <div className="jcm-pain-list">
            {[
              'Hundreds of candidates apply to the same job within hours of posting.',
              'ATS and AI screening tools eliminate most resumes before a recruiter sees them.',
              'Recruiters receive too many messages to reply to unprepared outreach.',
              'Uploading a resume and waiting is no longer a strategy — it is inaction.',
              'Candidates without consistent outreach, follow-ups, and applications lose momentum.',
              'Market visibility requires daily action, not occasional uploads.',
              'Professionals with strong skills are being passed over because their profile is not moving.',
            ].map((item) => (
              <div key={item} className="jcm-pain-item">
                <span className="jcm-pain-dot" aria-hidden>
                  <svg width={10} height={10} viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="4" /></svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DREAM OUTCOME */}
      <section className="jcm-section-mint">
        <div className="jcm-inner" style={{ maxWidth: 720, textAlign: 'center' }}>
          <p className="jcm-section-eyebrow">What Should Be Happening</p>
          <h2 className="jcm-h2" style={{ color: 'var(--pts-text)' }}>Your Profile Should Be Moving Every Day — Not Sitting Idle</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-subtle)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            While you are focused on your daily work, your profile should be working for you. Applications going out. Recruiters being contacted. Follow-ups happening. Opportunities tracked and handed off.
          </p>
          <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.65 }}>
            That is what a structured job search campaign looks like — and that is what we run for you.
          </p>
        </div>
      </section>

      {/* WE RUN YOUR CAMPAIGN */}
      <section className="jcm-section-white">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">Our Service</p>
          <h2 className="jcm-h2">We Run a Structured Job Search Campaign on Your Behalf</h2>
          <p className="jcm-lead">We do not just forward resumes. We run a complete, organized job search effort on your behalf — so your profile is consistently active in the market.</p>
          <div className="jcm-step-list">
            {[
              { num: 1, title: 'Targeted Job Search', desc: 'We identify relevant job openings based on your profile, target role, location, work authorization, experience level, and salary or rate expectations. No random applications.' },
              { num: 2, title: 'Applications on Your Behalf', desc: 'We apply to suitable roles using your profile and resume. Applications are relevant, not mass-spray. Quality over volume.' },
              { num: 3, title: 'Recruiter & Vendor Outreach', desc: 'Where possible, we contact recruiters, staffing agencies, vendors, and job posters directly with a professional outreach message on your behalf.' },
              { num: 4, title: 'Professional Follow-Ups', desc: 'We follow up on submitted applications and recruiter outreach professionally and at appropriate intervals — keeping your name visible without being intrusive.' },
              { num: 5, title: 'Application Tracking', desc: 'Every application, recruiter contact, and follow-up is tracked. You always know what is happening with your job search.' },
              { num: 6, title: 'Weekly Progress Updates', desc: 'Every week, you receive a structured update on applications submitted, recruiter responses, follow-up status, and any interview opportunities identified.' },
              { num: 7, title: 'Interview Opportunity Handoff', desc: 'When interview calls are scheduled, we hand them off to you for preparation. At that point, our Interview Proxy Support and Job Support services can also help you succeed.' },
            ].map((step) => (
              <div key={step.num} className="jcm-step">
                <div className="jcm-step-num" aria-hidden>{step.num}</div>
                <div>
                  <h3 className="jcm-step-title">{step.title}</h3>
                  <p className="jcm-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="jcm-section-dark">
        <div className="jcm-bottom-inner">
          <p className="jcm-bottom-eyebrow">Start Moving Your Profile</p>
          <h2 className="jcm-bottom-h2">Ready to Stop Waiting and Start Applying?</h2>
          <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,.68)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Talk to us today. We will review your situation, understand your target role, and start planning your job search campaign.
          </p>
          <div className="jcm-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcm-btn-wa"><WAIcon />Start Job Marketing on WhatsApp</a>
            <a href={CALL_LINK} className="jcm-btn-ghost">+91 96606 14469</a>
          </div>
        </div>
      </section>

      {/* HOW WE HELP COMPETE */}
      <section className="jcm-section-alt">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">The Competition Problem</p>
          <h2 className="jcm-h2">How We Help You Compete When Hundreds of Candidates Apply</h2>
          <p className="jcm-lead">High competition does not mean your search is hopeless. It means your search needs to be smarter, more consistent, and more visible.</p>
          <div className="jcm-check-list">
            {[
              'We apply to relevant, targeted roles — not every job posted anywhere.',
              'We craft professional outreach that gets attention, not automated spam.',
              'We follow up at the right time — not too soon, not forgotten.',
              'We keep your profile visible across multiple channels and platforms.',
              'We track every application so no opportunity falls through the cracks.',
              'We hand off interview opportunities immediately so you can prepare fast.',
              'We work consistently — not in bursts that stop when you get busy.',
            ].map((item) => (
              <div key={item} className="jcm-check-item">
                <span className="jcm-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE CHECK SECTION */}
      <section className="jcm-section-white">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">Profile Engineering</p>
          <h2 className="jcm-h2">Before We Start, We Check If Your Profile Can Compete</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: '680px' }}>
            Marketing a weak profile wastes applications.
          </p>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: '680px' }}>
            Before starting, we review your resume, LinkedIn, target role, keywords, project story, and recruiter readability. If your profile is ready, we start the campaign immediately.
          </p>
          <p style={{ fontSize: '.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1rem', maxWidth: '680px' }}>
            If it needs improvement, we recommend profile readiness work before or along with marketing.
          </p>
          <div className="jcm-profile-check">
            <p className="jcm-profile-check-title">A weak profile wastes applications. A ready profile gives marketing a better chance.</p>
            <p style={{ fontSize: '.9rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, margin: 0 }}>
              We will tell you honestly if your profile is ready — and what needs to change if it is not.
            </p>
          </div>
          <p style={{ fontSize: '.9rem', color: 'var(--pts-text-subtle)', lineHeight: 1.7, marginTop: '1.5rem' }}>
            Need your resume and LinkedIn engineered before applying?{' '}
            <a href="/get-interview-scheduled/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>
              See our Get Interview Scheduled — Profile Engineering service →
            </a>
          </p>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="jcm-section-alt">
        <div className="jcm-inner" style={{ maxWidth: 780 }}>
          <p className="jcm-section-eyebrow">What Is Included</p>
          <h2 className="jcm-h2">What We Do for Your Job Search</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: 600 }}>
            Talk to us on WhatsApp to understand which scope fits your situation. Pricing and scope are discussed on a direct call.
          </p>
          <div style={{
            background: 'var(--pts-card-bg)', border: '1px solid var(--pts-border)',
            borderLeft: '4px solid var(--pts-accent)',
            borderRadius: 'var(--pts-card-radius)', padding: '1.75rem 2rem',
            boxShadow: 'var(--pts-shadow-lp)',
          }}>
            <div style={{ display: 'grid', gap: '.7rem', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
              {[
                'Targeted job search',
                'Applications on your behalf',
                'Recruiter outreach',
                'Vendor outreach',
                'Professional follow-ups',
                'Application tracking',
                'Weekly progress update',
                'Interview opportunity handoff',
                'Resume improvement (if needed)',
                'LinkedIn improvement (if needed)',
                'ATS keyword alignment (if needed)',
                'Role and skills positioning (if needed)',
                'Project story correction (if needed)',
                'Interview-ready profile preparation (if needed)',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', gap: '.55rem', alignItems: 'flex-start', fontSize: '.93rem', color: 'var(--pts-text-muted)', lineHeight: 1.5 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, background: 'rgba(0,223,130,.15)', color: 'var(--pts-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <CheckIcon size={11} />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--pts-border)' }}>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcm-btn-wa" style={{ display: 'inline-flex' }}>
                <WAIcon size={16} />Talk to Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="jcm-section-white">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">Fit Check</p>
          <h2 className="jcm-h2">Who This Service Is For — and Who It Is Not For</h2>
          <div className="jcm-scope-grid">
            <div className="jcm-scope-card">
              <p className="jcm-scope-title" style={{ color: 'var(--pts-forest)' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,223,130,.15)', color: 'var(--pts-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CheckIcon /></span>
                This service is for you if:
              </p>
              <div className="jcm-scope-list">
                {[
                  'You are actively searching for a new IT role.',
                  'You have been applying but not getting enough interview calls.',
                  'You want someone to manage the application and outreach process.',
                  'Your target role, location, and authorization are clear.',
                  'You want a structured, tracked job search campaign.',
                  'You need consistent daily market activity, not just occasional uploads.',
                ].map((item) => (
                  <div key={item} className="jcm-scope-item">
                    <span className="jcm-scope-icon-do"><CheckIcon size={12} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="jcm-scope-card">
              <p className="jcm-scope-title" style={{ color: '#ef4444' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(239,68,68,.12)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CrossIcon /></span>
                This service is not for you if:
              </p>
              <div className="jcm-scope-list">
                {[
                  'You expect a guaranteed job offer or guaranteed interview calls.',
                  'Your target role, location, or work authorization is completely unclear.',
                  'You want us to falsify experience or misrepresent your background.',
                  'You expect instant results without allowing time for a proper campaign.',
                  'You are looking for a job placement agency with guaranteed placement fees.',
                ].map((item) => (
                  <div key={item} className="jcm-scope-item">
                    <span className="jcm-scope-icon-dont"><CrossIcon size={12} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED ROLES */}
      <section className="jcm-section-alt">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">Supported Roles</p>
          <h2 className="jcm-h2">Technology Roles We Support</h2>
          <p className="jcm-lead">We run campaigns for professionals across the full range of IT and technology roles.</p>
          <div className="jcm-role-tags" aria-label="Supported technology roles">
            {[
              'AI / ML Engineer', 'DevOps Engineer', 'SRE Engineer', 'Cloud Engineer',
              'AWS Engineer', 'Azure Engineer', 'GCP Engineer', 'Data Engineer',
              'Python Developer', 'Java Developer', 'Full Stack Developer', 'React Developer',
              'Node.js Developer', '.NET Developer', 'Angular Developer', 'Cybersecurity Analyst',
              'QA Automation Engineer', 'Salesforce Developer', 'Workday Consultant',
              'ServiceNow Developer', 'Business Analyst', 'Scrum Master / Product Owner',
              'Tableau Developer', 'UiPath / RPA Developer',
            ].map((role) => (
              <span key={role} className="jcm-role-tag">{role}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jcm-section-alt">
        <div className="jcm-inner">
          <div style={{ display: 'grid', gap: '2.5rem', alignItems: 'start' }}>
            <div style={{ maxWidth: 420 }}>
              <p className="jcm-section-eyebrow">FAQ</p>
              <h2 className="jcm-h2">Frequently Asked Questions</h2>
              <p style={{ fontSize: '.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Everything you need to know before getting started.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcm-btn-wa" style={{ display: 'inline-flex', fontSize: '.9rem' }}>
                <WAIcon size={15} />Ask on WhatsApp
              </a>
            </div>
            <div className="jcm-faq-list">
              {[
                { q: 'What is a job application and candidate marketing service?', a: 'It is a structured job search campaign service where we apply to relevant jobs on your behalf, contact recruiters and vendors, follow up professionally, track every application, and send you weekly progress updates. It keeps your profile consistently active in the market instead of sitting idle after a single upload.' },
                { q: 'Do you apply for jobs on behalf of candidates?', a: "Yes. We apply to relevant jobs based on your profile, target role, location, work authorization, and salary or rate expectations. We focus on quality and relevance — not mass spray." },
                { q: 'Do you contact recruiters directly?', a: 'Yes. Where possible we reach out to recruiters, staffing agencies, vendors, and job posters with a professional outreach message on your behalf.' },
                { q: 'How is this different from uploading my resume to job boards?', a: 'Job boards are passive — your profile sits there and waits. We run an active campaign: applying to relevant roles daily, reaching recruiters directly, following up at the right time, and tracking all activity. Your profile is moving, not idle.' },
                { q: 'Do I need my profile ready before starting?', a: 'If your resume, LinkedIn, and project story are already market-ready, we can start the campaign immediately. If your profile needs improvement first, we recommend profile readiness work before or alongside marketing — because a weak profile wastes applications.' },
                { q: 'What do I receive weekly?', a: 'Every week you receive a structured progress update covering applications submitted, recruiter outreach activity, follow-up status, and any interview opportunities that came in.' },
                { q: 'Which countries and cities do you cover?', a: 'We cover USA (all major cities), Canada (Toronto, Vancouver, Calgary, Montreal, Ottawa), UK (London, Manchester, Birmingham), Ireland (Dublin, Cork), Germany (Berlin, Munich, Frankfurt, Hamburg), Australia (Sydney, Melbourne, Brisbane, Perth), Europe, Singapore, Hong Kong, and UAE (Dubai, Abu Dhabi).' },
                { q: 'Which technology roles do you support?', a: 'We support AI/ML Engineers, DevOps Engineers, SRE Engineers, Cloud Engineers, Data Engineers, Python Developers, Java Developers, Full Stack Developers, React Developers, .NET Developers, QA Automation Engineers, Salesforce Developers, Workday Consultants, Cybersecurity Analysts, ServiceNow Developers, and more.' },
                { q: 'How do I get started?', a: 'Contact us on WhatsApp. We will review your profile, understand your target role and market, and discuss the right scope for your job search campaign.' },
                { q: 'Why is the IT job market so competitive in 2026?', a: 'AI screening tools, widespread tech layoffs, and mass application platforms have fundamentally shifted hiring. A single job posting can attract hundreds to thousands of applicants within 24 hours. ATS systems automatically filter most profiles before a recruiter sees them. Without consistent outreach, follow-ups, and daily applications, your profile loses to candidates who are actively moving in the market.' },
                { q: 'Why is uploading a resume to job boards not enough anymore?', a: 'Job boards are passive. Your profile sits and waits while others apply daily, reach recruiters directly, and follow up consistently. ATS filters eliminate most passive applications before a human sees them. Without active daily outreach, your profile gets buried regardless of how strong your skills are.' },
                { q: 'Why do IT professionals not get interview calls despite having strong skills?', a: 'Strong skills do not generate interview calls on their own. The most common reasons are: applying too infrequently, profile not aligned to ATS keyword requirements, no direct recruiter outreach, and no follow-up after applications. Market visibility requires daily consistent action — not occasional uploads.' },
                { q: 'Why should I use a job application service instead of applying myself?', a: 'Running a consistent job search campaign while managing current work is time-consuming and easy to let slip. A job application service keeps the campaign running every day — applications to relevant roles, direct recruiter outreach, professional follow-ups, and full tracking. In a competitive market, that consistency is the difference between generating calls and going weeks without a response.' },
              ].map((f, i) => (
                <details key={i} className="jcm-faq-item" style={{ listStyle: 'none' }}>
                  <summary className="jcm-faq-q">{f.q} <span aria-hidden style={{ flexShrink: 0, fontSize: '1.1rem' }}>+</span></summary>
                  <p className="jcm-faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES FUNNEL */}
      <section className="jcm-section-white">
        <div className="jcm-inner">
          <p className="jcm-section-eyebrow">Full Career Funnel</p>
          <h2 className="jcm-h2">How This Fits With Our Other Services</h2>
          <p className="jcm-lead">Each service handles a different stage of your career journey.</p>
          <div className="jcm-check-list" style={{ maxWidth: 640 }}>
            {[
              {
                label: 'Profile Engineering',
                desc: 'Engineers your resume, LinkedIn, and positioning before marketing.',
                links: [
                  { text: 'Get Interview Scheduled', href: '/get-interview-scheduled/' },
                  { text: 'USA', href: '/get-interview-scheduled-usa/' },
                  { text: 'Canada', href: '/get-interview-scheduled-canada/' },
                  { text: 'UK', href: '/get-interview-scheduled-uk/' },
                ],
              },
              {
                label: 'Candidate Marketing',
                desc: 'Moves your profile through applications, outreach, and follow-ups.',
                links: [],
              },
              {
                label: 'Interview Proxy Support',
                desc: 'Assists during interviews once you are scheduled.',
                links: [
                  { text: 'Interview Proxy Support', href: '/proxy-interview-support/' },
                  { text: 'USA', href: '/proxy-interview-usa/' },
                  { text: 'Canada', href: '/proxy-interview-canada/' },
                  { text: 'UK', href: '/proxy-interview-uk/' },
                ],
              },
              {
                label: 'Job Support',
                desc: 'Helps after joining with production issues, tasks, and daily delivery.',
                links: [
                  { text: 'Job Support USA', href: '/job-support-usa/' },
                  { text: 'Canada', href: '/job-support-canada/' },
                  { text: 'UK', href: '/job-support-uk/' },
                ],
              },
            ].map((item) => (
              <div key={item.label} className="jcm-check-item" style={{ alignItems: 'flex-start', flexDirection: 'column', gap: '.35rem' }}>
                <div style={{ display: 'flex', gap: '.65rem', alignItems: 'flex-start' }}>
                  <span className="jcm-check-icon" style={{ marginTop: 4 }}><ArrowRight /></span>
                  <span><strong style={{ color: 'var(--pts-text)' }}>{item.label}</strong> — {item.desc}</span>
                </div>
                {item.links.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem', paddingLeft: '1.65rem' }}>
                    {item.links.map((l) => (
                      <a key={l.href} href={l.href} style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--pts-forest)', textDecoration: 'none', border: '1px solid var(--pts-border)', borderRadius: 6, padding: '.2rem .55rem', background: 'var(--pts-card-bg)', transition: 'border-color .15s' }}>
                        {l.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="jcm-funnel-flow" aria-label="Career support funnel">
            <span className="jcm-funnel-step">Profile Engineering</span>
            <span className="jcm-funnel-arrow" aria-hidden>›</span>
            <span className="jcm-funnel-step">Profile Moving</span>
            <span className="jcm-funnel-arrow" aria-hidden>›</span>
            <span className="jcm-funnel-step">Interview Cleared</span>
            <span className="jcm-funnel-arrow" aria-hidden>›</span>
            <span className="jcm-funnel-step">Job Handled</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="jcm-section-dark">
        <div className="jcm-bottom-inner">
          <p className="jcm-bottom-eyebrow">Stop Waiting. Start Moving.</p>
          <h2 className="jcm-bottom-h2">Stop Waiting for Calls. Start Moving Your Profile.</h2>
          <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,.68)', lineHeight: 1.75, marginBottom: '1rem', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            The market is crowded. Recruiters are busy. AI screening is fast.
          </p>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.65, marginBottom: '1.75rem', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            Your profile needs daily action. Let us help you apply, reach recruiters, follow up, and track your job search professionally.
          </p>
          <div className="jcm-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcm-btn-wa"><WAIcon />Start Job Marketing on WhatsApp</a>
            <a href={CALL_LINK} className="jcm-btn-ghost">+91 96606 14469</a>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <nav className="jcm-related" aria-label="Related pages">
        <div className="jcm-inner">
          <p className="jcm-related-label">Related Services &amp; Pages</p>
          <div className="jcm-related-row">
            {[
              { label: 'Get Interview Scheduled — Profile Engineering', href: '/get-interview-scheduled/' },
              { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
              { label: 'Job Support USA', href: '/job-support-usa/' },
              { label: 'Job Support UK', href: '/job-support-uk/' },
              { label: 'Job Support Canada', href: '/job-support-canada/' },
              { label: 'Job Support Australia', href: '/job-support-australia/' },
              { label: 'Candidate Marketing — USA', href: '/job-application-candidate-marketing-usa/' },
              { label: 'Candidate Marketing — Canada', href: '/job-application-candidate-marketing-canada/' },
              { label: 'Candidate Marketing — UK', href: '/job-application-candidate-marketing-uk/' },
              { label: 'Candidate Marketing — Germany', href: '/job-application-candidate-marketing-germany/' },
              { label: 'Candidate Marketing — Australia', href: '/job-application-candidate-marketing-australia/' },
              { label: 'Candidate Marketing — Ireland', href: '/job-application-candidate-marketing-ireland/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="jcm-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* SEO BLOCK */}
      <div className="jcm-seo-block">
        <div className="jcm-inner">
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1rem,1.8vw,1.2rem)', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem' }}>
            Job Application &amp; Candidate Marketing Service
          </h2>
          <p className="jcm-seo-text">
            Proxy Tech Support provides a structured Job Application &amp; Candidate Marketing service for IT professionals across USA, Canada, UK, Ireland, Germany, Australia, Europe, Singapore, Hong Kong, and UAE. We apply to relevant jobs on behalf of candidates, contact recruiters and vendors, follow up professionally, track applications, and deliver weekly progress updates.
          </p>
          <p className="jcm-seo-text" style={{ marginTop: '.85rem' }}>
            This service is separate from our <a href="/get-interview-scheduled/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>profile engineering and interview scheduling service</a>, our <a href="/proxy-interview-support/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>interview proxy support</a>, and our <a href="/job-support-usa/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>real-time IT job support</a>. Together, these services cover the full career journey — from profile readiness and candidate marketing to interview success and job delivery.
          </p>
          <p className="jcm-seo-text" style={{ marginTop: '.85rem' }}>
            Contact Proxy Tech Support — WhatsApp: +91 96606 14469 &nbsp;|&nbsp; Website: proxytechsupport.com
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
