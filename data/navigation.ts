// ─── Technology job support links (existing — used in Navbar + Sidebar) ────
// Items with hidden: true are kept for SEO / direct linking but excluded from menus.

export const jobSupportLinks = [
  { label: 'Agentic AI & Machine Learning Job Support', href: '/agentic-ai-ml-job-support/' },
  { label: 'AI Workflow Automation & Pipeline Engineering', href: '/ai-workflow-automation-pipeline-job-support/' },
  { label: 'Data Science Job Support', href: '/data-science-job-support/' },
  { label: 'AI / Machine Learning & Data', href: '/ai-ml-job-support/', hidden: true },
  { label: 'DevOps & Automation', href: '/devops-job-support/' },
  { label: 'SRE & Reliability Engineering', href: '/sre-job-support-usa/' },
  { label: 'Cloud Technologies', href: '/cloud-technologies-job-support/' },
  { label: 'AWS Job Support', href: '/aws-job-support/' },
  { label: 'Python Job Support', href: '/python-job-support/' },
  { label: 'Front-End / Full-Stack Development', href: '/frontend-fullstack-job-support/' },
  { label: 'React Job Support', href: '/react-job-support/' },
  { label: 'Backend & Enterprise (.NET + Node)', href: '/backend-enterprise-job-support/' },
  { label: 'Node.js Job Support', href: '/node-job-support/' },
  { label: '.NET Job Support', href: '/dotnet-job-support/' },
  { label: 'Java Technology Stack', href: '/java-technologies-job-support/' },
  { label: 'Cybersecurity & AppSec', href: '/cybersecurity-job-support/' },
  { label: 'Databases & Data Platforms', href: '/databases-data-platforms-job-support/' },
  { label: 'Testing & Quality Engineering', href: '/testing-quality-engineering-job-support/' },
  { label: 'Angular Job Support', href: '/angular-job-support/' },
  { label: 'React Native Job Support', href: '/react-native-job-support/' },
  { label: 'Digital Analytics & Marketing Tech', href: '/digital-analytics-job-support/' },
  { label: 'Workday Job Support', href: '/workday-job-support/' },
  { label: 'Workday HRIS Job Support', href: '/workday-hris-job-support/' },
  { label: 'Workday HCM Job Support', href: '/workday-hcm-job-support/' },
  { label: 'Workday Payroll Job Support', href: '/workday-payroll-job-support/' },
  { label: 'Workday Integration Job Support', href: '/workday-integration-job-support/' },
  { label: 'Workday 2026R1 Release Support', href: '/workday-2026r1-release-support/' },
];

// ─── Location links (new — used in Navbar Locations dropdown + Footer) ─────

/** Geo pages for the nav dropdown — job support + proxy interview locations. */
export const locationNavLinks = [
  { label: 'Job Support USA', href: '/job-support-usa/' },
  { label: 'Job Support Canada', href: '/job-support-canada/' },
  { label: 'Job Support UK', href: '/job-support-uk/' },
  { label: 'Job Support Europe', href: '/job-support-europe/' },
  { label: 'Job Support Australia', href: '/job-support-australia/' },
  { label: 'Job Support Singapore', href: '/job-support-singapore/' },
  { label: 'Job Support Ireland', href: '/job-support-ireland/' },
  { label: 'Job Support Germany', href: '/job-support-germany/' },
  { label: 'Proxy Interview USA', href: '/proxy-interview-usa/' },
  { label: 'Proxy Interview Canada', href: '/proxy-interview-canada/' },
  { label: 'Proxy Interview UK', href: '/proxy-interview-uk/' },
  { label: 'Proxy Interview Europe', href: '/proxy-interview-europe/' },
  { label: 'Proxy Interview Australia', href: '/proxy-interview-australia/' },
  { label: 'Proxy Interview Singapore', href: '/proxy-interview-singapore/' },
  { label: 'Proxy Interview Ireland', href: '/interview-proxy-support-ireland/' },
  { label: 'Proxy Interview Germany', href: '/proxy-interview-germany/' },
];

/** All geo pages — used in Footer and internal links. */
export const allLocationLinks = [
  { label: 'Job Support USA', href: '/job-support-usa/' },
  { label: 'Job Support UK', href: '/job-support-uk/' },
  { label: 'Job Support Canada', href: '/job-support-canada/' },
  { label: 'Job Support Australia', href: '/job-support-australia/' },
  { label: 'Job Support Europe', href: '/job-support-europe/' },
  { label: 'Job Support Germany', href: '/job-support-germany/' },
  { label: 'Job Support Ireland', href: '/job-support-ireland/' },
  { label: 'Job Support Singapore', href: '/job-support-singapore/' },
  { label: 'Job Support New Zealand', href: '/job-support-newzealand/' },
];

// ─── Interview nav links (used in Navbar Interview dropdown) ─────────────────

export const interviewNavLinks = [
  { label: 'Interview Proxy', href: '/proxy-interview-support/' },
  { label: 'Get Interview Scheduled', href: '/get-interview-scheduled/' },
  { label: 'AI/ML Proxy Interview', href: '/ai-ml-proxy-interview-support/' },
  { label: 'MLOps Proxy Interview', href: '/mlops-proxy-interview-support/' },
  { label: 'DevOps Proxy Interview', href: '/devops-proxy-interview-support/' },
  { label: 'SRE Proxy Interview', href: '/sre-proxy-interview-support/' },
  { label: 'Java Proxy Interview', href: '/java-proxy-interview-support/' },
  { label: 'Interview Questions', href: '/interview-questions/' },
];

// ─── Main navigation ────────────────────────────────────────────────────────

/**
 * Main nav items. `dropdownType` signals the Navbar to render a dropdown.
 * The Navbar imports jobSupportLinks / locationNavLinks / interviewNavLinks directly.
 */
export const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Job Support', href: '#', dropdownType: 'jobSupport' as const },
  { label: 'Locations', href: '#', dropdownType: 'locations' as const },
  { label: 'Interview', href: '#', dropdownType: 'interview' as const },
  { label: 'Technologies', href: '/#tech' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/#contact' },
];
