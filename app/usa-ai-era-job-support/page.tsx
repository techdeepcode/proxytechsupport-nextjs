import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LandingFAQ from '@/components/LandingFAQ';
import { landingPageMetadata } from '@/lib/site-seo';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

export const metadata: Metadata = landingPageMetadata({
  title: 'USA AI Era Job Support for Developers Facing Automation & Layoff Pressure',
  description:
    'USA developer job support for the AI era. Get real-time help with project pressure, technical interviews, proxy interviews, production issues, AI automation fear, and career uncertainty.',
  canonical: 'https://proxytechsupport.com/usa-ai-era-job-support/',
  keywords: [
    'USA AI era job support', 'USA developer layoff support', 'AI automation fear USA developers',
    'USA real-time IT job support', 'USA technical interview help', 'USA proxy interview support',
    'USA job support for remote developers', 'AI era developer support USA',
    'USA developer career support AI era', 'AI layoff pressure USA IT',
  ],
  ogTitle: 'USA AI Era Job Support | Proxy Tech Support',
  ogDescription:
    'The AI era is changing USA hiring expectations. Proxy Tech Support helps USA developers deliver faster, survive deeper interviews, handle automation fear, and keep their career moving.',
});

const faqs = [
  {
    question: 'How is the AI era affecting USA IT job pressure?',
    answer:
      'The AI era is changing three things simultaneously for USA developers: hiring expectations (interviewers now ask about AI tool usage and AI-augmented workflows), delivery expectations (USA clients expect faster output with smaller teams), and job security (AI automation is replacing some roles while creating pressure on developers to justify their value against AI tools). Proxy Tech Support helps developers navigate all three dimensions — from real-time job support during delivery pressure to interview coaching for AI-era technical questions.',
  },
  {
    question: 'Do you help with USA technical interviews that include AI questions?',
    answer:
      'Yes. USA technical interviews in the AI era increasingly include questions about AI tools, ML systems, AI-augmented development, prompt engineering, and AI architecture. Proxy Tech Support provides real-time proxy interview guidance and pre-interview coaching that covers these AI-era technical topics across Java, Python, React, DevOps, cloud, and AI/ML stacks.',
  },
  {
    question: 'Can you help with production issues in AI-integrated systems?',
    answer:
      'Yes. Many USA developers now work with AI-integrated production systems — RAG pipelines, LLM APIs, ML inference services, AI workflow automation, and agentic AI systems. Proxy Tech Support provides real-time support for these systems including debugging, performance issues, integration failures, and deployment challenges.',
  },
  {
    question: 'I am afraid AI will replace my role. Can you help?',
    answer:
      'Yes. AI automation fear is one of the most common pressures USA developers contact us about. We help developers stay competitive by: supporting them during high-pressure delivery windows, helping them learn and use AI tools effectively, coaching them for AI-era technical interviews, and keeping their project work on track so they demonstrate value to their employer even in a changing environment.',
  },
  {
    question: 'What technologies do you cover for AI-era support?',
    answer:
      'We cover the full AI-era stack: Python, Java, .NET, React, Node.js for application development; AWS Bedrock, Azure OpenAI, GCP Vertex AI for cloud AI; LangChain, LlamaIndex, CrewAI, AutoGen for AI agents and RAG; DevOps and SRE for AI system reliability; and traditional enterprise technologies where AI is being integrated.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'USA AI Era Job Support for Developers Facing Automation & Layoff Pressure',
  description:
    'USA developer job support for the AI era. Get real-time help with project pressure, technical interviews, proxy interviews, production issues, AI automation fear, and career uncertainty.',
  url: 'https://proxytechsupport.com/usa-ai-era-job-support/',
  datePublished: '2008-01-01',
  dateModified: '2026-05-15',
  provider: {
    '@type': 'Organization',
    name: 'Proxy Tech Support',
    url: 'https://proxytechsupport.com',
    foundingDate: '2008',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'Australia' },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
    { '@type': 'ListItem', position: 2, name: 'USA IT Job Support', item: 'https://proxytechsupport.com/job-support-usa/' },
    { '@type': 'ListItem', position: 3, name: 'USA AI Era Job Support', item: 'https://proxytechsupport.com/usa-ai-era-job-support/' },
  ],
};

function WAIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const aiPressurePoints = [
  { title: 'Faster Delivery Expectations', body: 'USA clients and managers now expect AI-augmented delivery speeds. Developers who cannot match those expectations face performance pressure even when they are technically capable.' },
  { title: 'Deeper Technical Interviews', body: 'USA companies now test for AI tool knowledge, AI system design, and AI-augmented development in technical interviews — on top of traditional coding rounds.' },
  { title: 'AI Integration Complexity', body: 'Production systems increasingly integrate AI APIs, ML models, and AI workflows. Debugging and maintaining these systems requires skills many developers are still building.' },
  { title: 'Role Uncertainty', body: 'Automation is replacing some development tasks. USA developers face genuine uncertainty about which parts of their role are AI-proof and which are at risk.' },
  { title: 'Proxy Interview Pressure', body: 'With harder AI-era interview rounds, the pressure on candidates to perform under live technical interview conditions has never been higher.' },
  { title: 'Layoff-Era Job Hunting', body: 'Developers laid off during the AI transition now have to compete against AI-fluent candidates for fewer available USA roles.' },
];

export default function USAAIEraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .uai-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; }
        .uai-hero {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.2) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem, 7vw, 6rem) 1rem clamp(3rem, 6vw, 5rem);
        }
        .uai-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1.1rem;
        }
        .uai-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.75rem, 4vw, 2.85rem); font-weight: 700; color: #ffffff;
          line-height: 1.2; margin-bottom: 1rem; max-width: 820px;
        }
        .uai-hero-para { font-size: clamp(0.97rem, 1.8vw, 1.05rem); color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 0.85rem; max-width: 700px; }
        .uai-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center; margin-top: 2rem; }
        .uai-btn-wa {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: #25D366; color: #ffffff; font-weight: 700; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          transition: filter 0.2s, transform 0.2s; white-space: nowrap;
        }
        .uai-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .uai-btn-outline {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: transparent; color: #ffffff; font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.65);
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
        }
        .uai-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-1px); }

        .uai-section-alt  { position: relative; z-index: 0; background: var(--pts-section-alt); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .uai-section-white{ position: relative; z-index: 0; background: var(--pts-bg); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .uai-section-mint {
          position: relative; z-index: 0; background: var(--pts-tech-header);
          border-top: 1px solid rgba(0,223,130,0.2); border-bottom: 1px solid rgba(0,223,130,0.2);
          padding: clamp(2.5rem, 5vw, 4rem) 1rem;
        }
        .uai-section-dark {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding: clamp(3.5rem, 7vw, 5.5rem) 1rem;
        }
        .uai-section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 0.6rem; }
        .uai-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700;
          color: var(--pts-text); line-height: 1.25; margin-bottom: 0.75rem;
        }
        .uai-sub { font-size: 0.98rem; color: var(--pts-text-subtle); line-height: 1.65; margin-bottom: 2rem; max-width: 580px; }
        .uai-body { font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.8; margin-bottom: 1rem; }
        .uai-callout {
          background: rgba(0,223,130,0.06); border-left: 3px solid var(--pts-accent);
          border-radius: 0 10px 10px 0; padding: 1.25rem 1.5rem;
          font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.75; margin: 1.5rem 0;
        }
        .uai-callout strong { color: var(--pts-forest); }
        .uai-cards-grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
        @media(min-width: 640px) { .uai-cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width: 1024px) { .uai-cards-grid { grid-template-columns: repeat(3, 1fr); } }
        .uai-card {
          background: var(--pts-card-bg); border: 1px solid var(--pts-border);
          border-radius: var(--pts-card-radius); padding: 1.5rem;
          box-shadow: var(--pts-shadow-lp); transition: box-shadow 0.2s, transform 0.2s;
        }
        .uai-card:hover { box-shadow: var(--pts-shadow-lp-hover); transform: translateY(-2px); }
        .uai-card-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(0,223,130,0.12); color: var(--pts-forest);
          display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;
        }
        .uai-card-title { font-size: 1rem; font-weight: 700; color: var(--pts-text); margin-bottom: 0.5rem; line-height: 1.35; }
        .uai-card-body { font-size: 0.9rem; color: var(--pts-text-muted); line-height: 1.7; }
        .uai-checks { display: flex; flex-direction: column; gap: 0.65rem; margin-top: 1.25rem; }
        .uai-check-item { display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.95rem; color: var(--pts-text-muted); line-height: 1.55; }
        .uai-check-icon { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; background: rgba(0,223,130,0.12); color: var(--pts-forest); display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .uai-faq-grid { display: grid; gap: 2.5rem; align-items: start; }
        @media(min-width: 1024px) { .uai-faq-grid { grid-template-columns: minmax(240px, 340px) 1fr; gap: 3rem; } }
        .uai-related { background: var(--pts-section-alt); padding: 1.75rem 1rem; border-top: 1px solid var(--pts-border); }
        .uai-related-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pts-text-subtle); margin-bottom: 0.85rem; }
        .uai-related-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .uai-related-link { font-size: 0.82rem; color: var(--pts-forest); text-decoration: none; font-weight: 600; border: 1px solid var(--pts-border); border-radius: 6px; padding: 0.3rem 0.65rem; background: var(--pts-card-bg); transition: border-color 0.15s, color 0.15s; }
        .uai-related-link:hover { border-color: var(--pts-accent); color: var(--pts-forest-hover); }
        .uai-bottom-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; text-align: center; }
        .uai-bottom-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1rem; }
        .uai-bottom-h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem; max-width: 640px; margin-left: auto; margin-right: auto; }
        .uai-bottom-sub { font-size: 0.97rem; color: rgba(255,255,255,0.62); line-height: 1.65; margin-bottom: 2rem; max-width: 520px; margin-left: auto; margin-right: auto; }
        .uai-bottom-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; justify-content: center; }
        .uai-contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem 2rem; margin-top: 1.75rem; }
        .uai-contact-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; color: rgba(255,255,255,0.72); }
        .uai-contact-item a { color: inherit; text-decoration: none; }
        .uai-contact-item a:hover { color: var(--pts-accent); }
        /* ── Hero split (metrics card right on desktop) ── */
        .uai-hero-split { display: grid; grid-template-columns: 1fr; gap: clamp(1.35rem,3vw,2.25rem); align-items: start; }
        @media(min-width: 1024px) {
          .uai-hero-split { grid-template-columns: minmax(0,1fr) minmax(270px,360px); column-gap: clamp(1.75rem,3vw,2.75rem); }
        }
        .uai-hero-metrics-card {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
          padding: 1.2rem 1rem; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07); align-self: start;
        }
        @media(min-width: 1024px) {
          .uai-hero-metrics-card { position: sticky; top: calc(var(--pts-sticky-header-offset) + 0.5rem); padding: 1.35rem 1.15rem; gap: 0.85rem; }
        }
        .uai-metric-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 10px; padding: 0.85rem 0.75rem; display: flex; flex-direction: column; gap: 0.2rem; }
        .uai-metric-stat { font-size: 1.45rem; font-weight: 800; color: var(--pts-accent); line-height: 1; }
        .uai-metric-label { font-size: 0.73rem; color: rgba(255,255,255,0.52); font-weight: 500; letter-spacing: 0.03em; line-height: 1.3; }
        @media(max-width: 768px) {
          .uai-hero { padding: 0.95rem 1rem 2rem !important; }
          .uai-cta-row, .uai-bottom-cta-row { flex-direction: column; gap: 0.55rem; }
          .uai-btn-wa, .uai-btn-outline { width: 100%; justify-content: center; min-height: 52px; font-size: 1rem; border-radius: 12px; }
          .uai-section-alt, .uai-section-white, .uai-section-mint { padding: 2.25rem 1rem; }
          .uai-section-dark { padding: 2.5rem 1rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'USA IT Support', href: '/job-support-usa/' },
        { label: 'USA AI Era Job Support' },
      ]} />

      {/* ── HERO ── */}
      <section className="uai-hero">
        <div className="uai-inner">
          <div className="uai-hero-split">
            <div>
              <p className="uai-eyebrow"><span aria-hidden>✦</span> USA AI Era · Developer Support</p>
              <h1 className="uai-h1">USA Developer Job Support for the AI Era</h1>
              <p className="uai-hero-para">
                The AI era is not only changing tools. It is changing USA hiring expectations. USA developers are expected to deliver faster, debug faster, explain architecture better, learn AI tools faster, and survive deeper technical interviews.
              </p>
              <p className="uai-hero-para">
                Proxy Tech Support provides real-time USA developer job support for the AI era — from live project support to proxy interview guidance for AI-era technical rounds.
              </p>
              <div className="uai-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="uai-btn-wa">
                  <WAIcon />
                  Get AI Era Job Support
                </a>
                <a href="/proxy-interview-usa/" className="uai-btn-outline">Get Proxy Interview Help</a>
              </div>
            </div>
            <aside className="uai-hero-metrics-card" aria-label="Trust metrics">
              <div className="uai-metric-item">
                <span className="uai-metric-stat">Since 2008</span>
                <span className="uai-metric-label">USA IT Expertise</span>
              </div>
              <div className="uai-metric-item">
                <span className="uai-metric-stat">1000+</span>
                <span className="uai-metric-label">Developers Helped</span>
              </div>
              <div className="uai-metric-item">
                <span className="uai-metric-stat">AI-Era</span>
                <span className="uai-metric-label">Full Stack Coverage</span>
              </div>
              <div className="uai-metric-item">
                <span className="uai-metric-stat">50+</span>
                <span className="uai-metric-label">Technologies Covered</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── AI PRESSURE POINTS ── */}
      <section className="uai-section-alt">
        <div className="uai-inner">
          <p className="uai-section-eyebrow">What Changed</p>
          <h2 className="uai-h2">Six Ways the AI Era Is Increasing USA Developer Pressure</h2>
          <p className="uai-sub">
            The pressure is real. Here is what USA developers are dealing with in the AI era — and where Proxy Tech Support steps in.
          </p>
          <div className="uai-cards-grid">
            {aiPressurePoints.map((card) => (
              <div key={card.title} className="uai-card">
                <div className="uai-card-icon"><CheckIcon /></div>
                <h3 className="uai-card-title">{card.title}</h3>
                <p className="uai-card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ── */}
      <section className="uai-section-white">
        <div className="uai-inner" style={{ maxWidth: 820 }}>
          <p className="uai-section-eyebrow">How We Help</p>
          <h2 className="uai-h2">Real-Time USA AI Era Job Support That Actually Works</h2>
          <p className="uai-body">
            Proxy Tech Support does not teach AI courses. We provide live, in-the-moment support during the actual situations where USA developers face AI-era pressure.
          </p>
          <div className="uai-checks">
            {[
              'Real-time job support during AI-era delivery pressure — when USA clients expect AI-augmented output speeds.',
              'Proxy interview support for USA technical rounds that include AI system design, ML architecture, and AI tool questions.',
              'Production issue support for AI-integrated systems — RAG pipelines, LLM APIs, agentic AI workflows, ML inference.',
              'Interview coaching for AI-era coding rounds — Python, LangChain, AWS Bedrock, Azure OpenAI, GCP Vertex AI.',
              'Career confidence support for developers facing AI automation fear during USA layoff cycles.',
              'Daily office-hours support for developers working on USA client projects with AI integration requirements.',
            ].map((item) => (
              <div key={item} className="uai-check-item">
                <span className="uai-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TECH COVERAGE ── */}
      <section className="uai-section-alt">
        <div className="uai-inner" style={{ maxWidth: 820 }}>
          <p className="uai-section-eyebrow">Technologies We Cover</p>
          <h2 className="uai-h2">AI-Era Stack Support for USA Developers</h2>
          <p className="uai-body">
            We support the full AI-era technology stack that USA developers work with — from traditional enterprise technologies now integrating AI to purpose-built AI development frameworks.
          </p>
          <div className="uai-callout">
            <strong>AI/ML stack:</strong> Python, TensorFlow, PyTorch, Scikit-learn, LangChain, LlamaIndex, CrewAI, AutoGen, OpenAI API, Anthropic API, Hugging Face
            <br /><br />
            <strong>Cloud AI platforms:</strong> AWS Bedrock, AWS SageMaker, Azure OpenAI, Azure ML, GCP Vertex AI, GCP Gemini
            <br /><br />
            <strong>Application development:</strong> Java, .NET, React, Node.js, Python, Angular — integrating with AI services
            <br /><br />
            <strong>DevOps and SRE for AI:</strong> Kubernetes, Terraform, Docker, CI/CD for ML model deployment and AI system reliability
          </div>
          <p className="uai-body">
            For USA developers working on AI-integrated projects who need live production support, interview coaching, or project delivery backup — this is where Proxy Tech Support provides direct, expert-level help.
          </p>
        </div>
      </section>

      {/* ── LEGACY TRUST ── */}
      <section className="uai-section-mint">
        <div className="uai-inner" style={{ maxWidth: 820 }}>
          <p className="uai-section-eyebrow">Why Trust Us</p>
          <h2 className="uai-h2">Trusted Since 2008 for USA IT Job Pressure — Including the AI Era</h2>
          <p className="uai-body">
            Proxy Tech Support has helped USA IT professionals navigate every major technology shift since 2008 — from cloud adoption to DevOps transformation to COVID remote work to today&apos;s AI era.
          </p>
          <p className="uai-body">
            Every market cycle brought new pressure. Every time, USA developers needed a reliable partner who already understood both the technology and the stakes. We have been that partner through every shift. The AI era is not different — just the latest cycle in a long history of USA tech career pressure.
          </p>
          <a
            href="/usa-it-job-support-legacy/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.88rem', fontWeight: 600, color: 'var(--pts-forest)',
              textDecoration: 'none', border: '1px solid rgba(0,223,130,0.3)',
              borderRadius: '8px', padding: '0.6rem 1rem', marginTop: '0.75rem',
              background: 'rgba(0,223,130,0.04)',
            }}
          >
            → Read Our Full USA IT Support Legacy Since 2008
          </a>
        </div>
      </section>

      {/* ── ALSO SUPPORTING GLOBALLY ── */}
      <section style={{ background: 'var(--pts-bg)', padding: 'clamp(2.5rem,5vw,4rem) 1rem', borderTop: '1px solid var(--pts-border)' }}>
        <div style={{ width: '100%', maxWidth: '820px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pts-accent)', marginBottom: '0.6rem' }}>
            Global Reach
          </p>
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1.25rem,2.2vw,1.65rem)', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
            Also Supporting Canada, UK, Ireland, Australia and Global Remote Teams
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            AI-era job pressure is not exclusive to the USA. Proxy Tech Support supports developers in Canada, UK, Ireland, Australia, and global remote teams facing the same AI automation fear, hiring expectation shifts, and technical interview pressure.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              { label: 'IT Job Support Canada', href: '/job-support-canada/' },
              { label: 'IT Job Support UK', href: '/job-support-uk/' },
              { label: 'IT Job Support Ireland', href: '/job-support-ireland/' },
              { label: 'IT Job Support Australia', href: '/job-support-australia/' },
              { label: 'USA Legacy Since 2008', href: '/usa-it-job-support-legacy/' },
              { label: 'Our Global Legacy', href: '/our-legacy/' },
            ].map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: '0.82rem', color: 'var(--pts-forest)', textDecoration: 'none', fontWeight: 600, border: '1px solid var(--pts-border)', borderRadius: '6px', padding: '0.3rem 0.65rem', background: 'var(--pts-card-bg)' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="uai-section-white">
        <div className="uai-inner">
          <div className="uai-faq-grid">
            <div>
              <p className="uai-section-eyebrow">FAQ</p>
              <h2 className="uai-h2">Questions About USA AI Era Job Support</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Common questions from USA developers navigating AI-era career pressure.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="uai-btn-wa" style={{ display: 'inline-flex', fontSize: '0.9rem' }}>
                <WAIcon size={15} />
                Ask on WhatsApp
              </a>
            </div>
            <LandingFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <nav className="uai-related" aria-label="Related pages">
        <div className="uai-inner">
          <p className="uai-related-label">Related USA Support Pages</p>
          <div className="uai-related-row">
            {[
              { label: 'USA IT Job Support', href: '/job-support-usa/' },
              { label: 'USA Proxy Interview Support', href: '/proxy-interview-usa/' },
              { label: 'USA Legacy Since 2008', href: '/usa-it-job-support-legacy/' },
              { label: 'USA Career Crisis Support', href: '/usa-it-career-crisis-support/' },
              { label: 'USA Remote Work Support', href: '/usa-remote-work-it-support/' },
              { label: 'AI/ML Job Support USA', href: '/agentic-ai-ml-job-support-usa/' },
              { label: 'Agentic AI & RAG Support', href: '/agentic-ai-rag-mlops-job-support-usa/' },
              { label: 'DevOps Job Support USA', href: '/devops-job-support-usa/' },
              { label: 'SRE Job Support USA', href: '/sre-job-support-usa/' },
              { label: 'Cloud Job Support USA', href: '/cloud-job-support-usa/' },
              { label: 'Get Interview Scheduled', href: '/get-interview-scheduled-usa/' },
              { label: 'Read Our Blog', href: '/blog/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="uai-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── BOTTOM CTA ── */}
      <section className="uai-section-dark">
        <div className="uai-bottom-inner">
          <p className="uai-bottom-eyebrow">Get AI Era Support Now</p>
          <h2 className="uai-bottom-h2">
            USA Developer Job Support for Every AI Era Challenge
          </h2>
          <p className="uai-bottom-sub">
            Real-time job support, proxy interview assistance, production help, and AI-era career confidence. Available 24/7 for USA developers facing automation and hiring pressure.
          </p>
          <div className="uai-bottom-cta-row">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="uai-btn-wa">
              <WAIcon />
              Get USA Job Support Now
            </a>
            <a href="/proxy-interview-usa/" className="uai-btn-outline">Get Proxy Interview Help</a>
          </div>
          <div className="uai-contacts">
            <div className="uai-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+919660614469">+91 96606 14469</a>
            </div>
            <div className="uai-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
