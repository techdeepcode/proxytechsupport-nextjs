/** Canonical SEO strings aligned with legacy Jekyll `index.html` and layouts. */
export const SITE_URL = 'https://proxytechsupport.com';
export const SITE_NAME = 'Proxy Tech Support';

/** `<title>` / default HTML title (legacy primary meta) */
export const HOME_HTML_TITLE =
  'IT Job Support & Interview Assistance – USA, UK, Canada | Resume & LinkedIn Optimization | Interview Mentoring';

/** `meta name="description"` — legacy long description */
export const HOME_META_DESCRIPTION =
  'Get real-time IT job support and interview assistance for roles like React, Angular, .NET, Java, Python, AWS, DevOps, and more. Serving USA, UK, Canada with expert-backed support. Resume & LinkedIn optimization, interview mentoring, live interview proxy.';

/** Open Graph `og:title` (legacy differs from HTML title) */
export const HOME_OG_TITLE =
  'IT Job Support & Proxy Interviews | Live Expert Assistance for USA, UK & Canada | Resume & LinkedIn Optimization | Interview Mentoring';

/** Open Graph `og:description` */
export const HOME_OG_DESCRIPTION =
  'Real-time IT job support and interview assistance for professionals in the USA, UK, Canada, and worldwide. Expert support for React, Angular, .NET, Java, Cyber Security, Salesforce, Dynamics 365, Odoo, Zoho CRM, HubSpot CRM, SAP CRM, Custom CRM Solutions, Python, AWS, DevOps, Digital Analytics, Marketing Tech, and enterprise technologies. Resume & LinkedIn optimization, interview mentoring, live interview proxy.';

/** Twitter `twitter:title` */
export const HOME_TWITTER_TITLE =
  'Live Job Support & Interview Proxy | IT Experts | React, Angular, .NET, Java, AWS, DevOps | Resume & LinkedIn Optimization | Interview Mentoring';

/** Twitter `twitter:description` */
export const HOME_TWITTER_DESCRIPTION =
  'Real-time help for developers & testers working on global projects. 1000+ successful proxy interviews & job support cases. Resume & LinkedIn optimization, interview mentoring, live interview proxy.';

/** Legacy `meta name="keywords"` (homepage) */
export const HOME_KEYWORDS =
  'IT job support, interview assistance, interview preparation, real-time job support, React job support, Angular job support, .NET job support, Java job support, Cyber Security job support, Salesforce job support, Dynamics 365 job support, Odoo job support, Zoho CRM job support, HubSpot CRM job support, SAP CRM job support, Custom CRM Solutions job support, Python job support, AWS support, DevOps support, remote IT support, Digital Analytics job support, Marketing Tech job support, Testing job support, Quality Engineering job support, AI job support, Machine Learning job support, Data job support, full stack development job support, backend development job support, frontend development job support, database development job support, cloud development job support, DevOps job support, QA job support, software development job support, software testing job support, software engineering job support, software architecture job support, software development life cycle job support, software development process job support, software development methodology job support, software development tools job support, software development frameworks job support, software development libraries job support, software development platforms job support, software development languages job support, resume builder, resume optimization, ATS resume, ATS-friendly resume, LinkedIn optimization, LinkedIn profile optimization, interview mentoring, technical interview mentoring, mock interview, live interview proxy, interview proxy service, career support';

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
  alt: `${SITE_NAME} — IT job support and interview assistance`,
};
