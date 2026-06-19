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
  { label: 'Modern .NET Azure AI Hub', href: '/modern-dotnet-azure-ai-job-support/' },
  { label: '.NET Azure Job Support', href: '/dotnet-azure-job-support/', hidden: true },
  { label: 'Semantic Kernel Job Support', href: '/semantic-kernel-job-support/', hidden: true },
  { label: '.NET AI/ML Job Support', href: '/dotnet-ai-ml-job-support/', hidden: true },
  { label: '.NET Aspire Job Support', href: '/dotnet-aspire-job-support/', hidden: true },
  { label: '.NET Framework Migration', href: '/dotnet-framework-migration-job-support/', hidden: true },
  { label: 'Java Technology Stack', href: '/java-technologies-job-support/' },
  { label: 'Cybersecurity & AppSec', href: '/cybersecurity-job-support/' },
  { label: 'Databases & Data Platforms', href: '/databases-data-platforms-job-support/' },
  { label: 'Testing & Quality Engineering', href: '/testing-quality-engineering-job-support/' },
  { label: 'Angular Job Support', href: '/angular-job-support/' },
  { label: 'React Native Job Support', href: '/react-native-job-support/' },
  { label: 'Digital Analytics & Marketing Tech', href: '/digital-analytics-job-support/' },
  { label: 'UiPath / RPA Job Support', href: '/uipath-job-support/' },
  { label: 'Workday Job Support', href: '/workday-job-support/' },
  { label: 'Workday HRIS Job Support', href: '/workday-hris-job-support/' },
  { label: 'Workday HCM Job Support', href: '/workday-hcm-job-support/' },
  { label: 'Workday Payroll Job Support', href: '/workday-payroll-job-support/' },
  { label: 'Workday Integration Job Support', href: '/workday-integration-job-support/' },
  { label: 'Workday 2026R1 Release Support', href: '/workday-2026r1-release-support/' },
];

// ─── Location links (new — used in Navbar Locations dropdown + Footer) ─────

export type NavLink = { label: string; href: string; divider?: never; groupLabel?: never } | { divider: true; groupLabel: string; label?: never; href?: never };

/** Geo pages for the nav dropdown — job support + proxy interview + candidate marketing locations. */
export const locationNavLinks: NavLink[] = [
  { divider: true, groupLabel: 'Job Support' },
  { label: 'Job Support USA', href: '/job-support-usa/' },
  { label: 'Job Support Canada', href: '/job-support-canada/' },
  { label: 'Job Support UK', href: '/job-support-uk/' },
  { label: 'Job Support Europe', href: '/job-support-europe/' },
  { label: 'Job Support Australia', href: '/job-support-australia/' },
  { label: 'Job Support Singapore', href: '/job-support-singapore/' },
  { label: 'Job Support Ireland', href: '/job-support-ireland/' },
  { label: 'Job Support Germany', href: '/job-support-germany/' },
  { divider: true, groupLabel: 'Proxy Interview' },
  { label: 'Proxy Interview USA', href: '/proxy-interview-usa/' },
  { label: 'Proxy Interview Canada', href: '/proxy-interview-canada/' },
  { label: 'Proxy Interview UK', href: '/proxy-interview-uk/' },
  { label: 'Proxy Interview Europe', href: '/proxy-interview-europe/' },
  { label: 'Proxy Interview Australia', href: '/proxy-interview-australia/' },
  { label: 'Proxy Interview Singapore', href: '/proxy-interview-singapore/' },
  { label: 'Proxy Interview Ireland', href: '/interview-proxy-support-ireland/' },
  { label: 'Proxy Interview Germany', href: '/proxy-interview-germany/' },
  { divider: true, groupLabel: 'Candidate Marketing' },
  { label: 'Candidate Marketing USA', href: '/job-application-candidate-marketing-usa/' },
  { label: 'Candidate Marketing Canada', href: '/job-application-candidate-marketing-canada/' },
  { label: 'Candidate Marketing UK', href: '/job-application-candidate-marketing-uk/' },
  { label: 'Candidate Marketing Ireland', href: '/job-application-candidate-marketing-ireland/' },
  { label: 'Candidate Marketing Germany', href: '/job-application-candidate-marketing-germany/' },
  { label: 'Candidate Marketing Australia', href: '/job-application-candidate-marketing-australia/' },
  { label: 'Candidate Marketing Singapore', href: '/job-application-candidate-marketing-singapore/' },
  { label: 'Candidate Marketing UAE', href: '/job-application-candidate-marketing-uae/' },
  { label: 'Candidate Marketing Europe', href: '/job-application-candidate-marketing-europe/' },
  { label: 'Candidate Marketing Hong Kong', href: '/job-application-candidate-marketing-hong-kong/' },
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

export const interviewNavLinks: NavLink[] = [
  { divider: true, groupLabel: 'Core Services' },
  { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
  { label: 'Get Interview Scheduled', href: '/get-interview-scheduled/' },
  { label: 'Candidate Marketing', href: '/job-application-candidate-marketing/' },
  { divider: true, groupLabel: 'Profile Engineering' },
  { label: 'Profile Engineering USA', href: '/get-interview-scheduled-usa/' },
  { label: 'Profile Engineering Canada', href: '/get-interview-scheduled-canada/' },
  { label: 'Profile Engineering UK', href: '/get-interview-scheduled-uk/' },
  { label: 'Profile Engineering Ireland', href: '/get-interview-scheduled-ireland/' },
  { label: 'Profile Engineering Germany', href: '/get-interview-scheduled-germany/' },
  { label: 'Profile Engineering Australia', href: '/get-interview-scheduled-australia/' },
  { label: 'Profile Engineering Singapore', href: '/get-interview-scheduled-singapore/' },
  { divider: true, groupLabel: 'Candidate Marketing' },
  { label: 'Candidate Marketing USA', href: '/job-application-candidate-marketing-usa/' },
  { label: 'Candidate Marketing Canada', href: '/job-application-candidate-marketing-canada/' },
  { label: 'Candidate Marketing UK', href: '/job-application-candidate-marketing-uk/' },
  { label: 'Candidate Marketing Ireland', href: '/job-application-candidate-marketing-ireland/' },
  { label: 'Candidate Marketing Germany', href: '/job-application-candidate-marketing-germany/' },
  { label: 'Candidate Marketing Australia', href: '/job-application-candidate-marketing-australia/' },
  { label: 'Candidate Marketing Singapore', href: '/job-application-candidate-marketing-singapore/' },
  { label: 'Candidate Marketing UAE', href: '/job-application-candidate-marketing-uae/' },
  { label: 'Candidate Marketing Europe', href: '/job-application-candidate-marketing-europe/' },
  { divider: true, groupLabel: 'By Technology' },
  { label: 'AI/ML Proxy Interview', href: '/ai-ml-proxy-interview-support/' },
  { label: 'MLOps Proxy Interview', href: '/mlops-proxy-interview-support/' },
  { label: 'DevOps Proxy Interview', href: '/devops-proxy-interview-support/' },
  { label: 'SRE Proxy Interview', href: '/sre-proxy-interview-support/' },
  { label: 'Java Proxy Interview', href: '/java-proxy-interview-support/' },
  { label: '.NET Azure Proxy Interview', href: '/dotnet-azure-interview-proxy-support/' },
  { label: '.NET Architecture Interview', href: '/dotnet-architecture-interview-proxy-support/' },
  { label: '.NET Cloud-Native Interview', href: '/dotnet-cloud-native-interview-proxy-support/' },
  { label: 'Workday Proxy Interview', href: '/workday-proxy-interview-support/' },
  { label: 'Workday HRIS Proxy Interview', href: '/workday-hris-proxy-interview-support/' },
  { label: 'GenAI Interview Support', href: '/genai-interview-support-guide/' },
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
