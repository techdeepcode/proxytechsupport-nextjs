/** Canonical SEO strings aligned with legacy Jekyll `index.html` and layouts. */
export const SITE_URL = 'https://proxytechsupport.com';
export const SITE_NAME = 'Proxy Tech Support';

/** `<title>` / default HTML title (legacy primary meta) */
export const HOME_HTML_TITLE =
  'Proxy Interview & Proxy Job Support | IT Career Services | Proxy Tech Support';

/** `meta name="description"` — commercially strong, no guarantee tone, key countries + technologies */
export const HOME_META_DESCRIPTION =
  'Proxy interview support, proxy job support, profile engineering, profile marketing and IT career support for tech professionals across the USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand and the Gulf. Deep expertise in AI/ML, Agentic AI, GenAI, Data Engineering, DevOps, Cloud, Cybersecurity, SRE, .NET, Java and Full Stack. We do not sell or guarantee jobs, interviews or salary outcomes.';

/** Open Graph `og:title` */
export const HOME_OG_TITLE =
  'Proxy Interview Support, Proxy Job Support & IT Career Services';

/** Open Graph `og:description` */
export const HOME_OG_DESCRIPTION =
  'Proxy interview support, proxy job support, profile engineering and profile marketing for IT professionals across the USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand and the Gulf — AI/ML, Agentic AI, GenAI, Data Engineering, DevOps, Cloud, Cybersecurity, SRE, .NET, Java and Full Stack. We do not guarantee employment, selection or salary outcomes.';

/** Twitter `twitter:title` */
export const HOME_TWITTER_TITLE =
  'Proxy Interview Support, Proxy Job Support & IT Career Services';

/** Twitter `twitter:description` */
export const HOME_TWITTER_DESCRIPTION =
  'Proxy interview support, proxy job support, profile engineering and profile marketing for IT professionals across the USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand and the Gulf — AI/ML, GenAI, Data Engineering, DevOps, Cloud, SRE, .NET, Java and Full Stack. We do not guarantee employment, selection or salary outcomes.';

/** Legacy `meta name="keywords"` (homepage) — new proxy terms prepended, all existing terms kept */
export const HOME_KEYWORDS =
  'proxy interview support, proxy job support, interview proxy support, interview support proxy, proxy support, proxy interview support usa, interview proxy, live interview proxy, interview proxy service, SRE proxy interview support, AI ML proxy interview support, MLOps proxy interview support, Java proxy interview support, DevOps proxy interview support, proxy interview australia, proxy interview uk, proxy interview canada, proxy interview europe, proxy interview singapore, IT job support, interview assistance, interview preparation, real-time job support, SRE job support, site reliability engineering job support, SRE support USA, React job support, Angular job support, .NET job support, Java job support, Cyber Security job support, Salesforce job support, Dynamics 365 job support, Odoo job support, Zoho CRM job support, HubSpot CRM job support, SAP CRM job support, Custom CRM Solutions job support, Python job support, AWS support, DevOps support, remote IT support, Digital Analytics job support, Marketing Tech job support, Testing job support, Quality Engineering job support, AI job support, Machine Learning job support, Data job support, full stack development job support, backend development job support, frontend development job support, database development job support, cloud development job support, DevOps job support, QA job support, software development job support, software testing job support, software engineering job support, software architecture job support, software development life cycle job support, software development process job support, software development methodology job support, software development tools job support, software development frameworks job support, software development libraries job support, software development platforms job support, software development languages job support, resume builder, resume optimization, ATS resume, ATS-friendly resume, LinkedIn optimization, LinkedIn profile optimization, interview mentoring, technical interview mentoring, mock interview, live interview proxy, interview proxy service, career support, IT job support UK, IT job support Canada, IT job support Australia, MLOps job support, Cloud job support, Node.js job support, profile engineering, recruiter visibility optimization, job application service, candidate marketing service, job application support, apply jobs on behalf of candidate, job search marketing, recruiter outreach service, job application tracking, candidate profile marketing, job search support service, AI job market support, ATS job application support, get interview calls, profile marketing for jobs, IT job marketing service, job application candidate marketing, proxy interview support Japan, proxy interview support Gulf, IT job support Japan, IT job support Gulf, IT career support, profile engineering, profile marketing, Agentic AI job support, GenAI job support, Data Engineering job support, Cybersecurity job support, SRE proxy interview support';

export const DEFAULT_OG_IMAGE_PATH = '/images/previewimg.png';

/** Suggested dimensions for `previewimg.png` (social crawlers); update if asset changes. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export const defaultOgImage = {
  url: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: `${SITE_NAME} — real-time IT job support and proxy interview support`,
};

/** Generate consistent Metadata for SEO landing pages from a config object. */
export function landingPageMetadata(config: {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  lastmod?: string;
}) {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: config.canonical,
      languages: {
        'en-US': config.canonical,
        'en-CA': config.canonical,
        'en-GB': config.canonical,
        'en-AU': config.canonical,
        'en-IE': config.canonical,
        'x-default': config.canonical,
      },
    },
    robots: { index: true, follow: true },
    ...(config.lastmod ? { other: { 'article:modified_time': config.lastmod } } : {}),
    openGraph: {
      type: 'website' as const,
      title: config.ogTitle ?? config.title,
      description: config.ogDescription ?? config.description,
      url: config.canonical,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: config.twitterTitle ?? config.title,
      description: config.twitterDescription ?? config.description,
      images: [defaultOgImage.url],
    },
  };
}
