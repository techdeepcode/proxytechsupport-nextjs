// ─── Technology job support links (existing — used in Navbar + Sidebar) ────

export const jobSupportLinks = [
  { label: 'AI / Machine Learning & Data', href: '/ai-ml-job-support/' },
  { label: 'DevOps & Automation', href: '/devops-job-support/' },
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
];

// ─── Location links (new — used in Navbar Locations dropdown + Footer) ─────

/** Top 5 geo pages for the nav dropdown (keep concise). */
export const locationNavLinks = [
  { label: 'Job Support USA', href: '/job-support-usa/' },
  { label: 'Job Support UK', href: '/job-support-uk/' },
  { label: 'Job Support Canada', href: '/job-support-canada/' },
  { label: 'Job Support Australia', href: '/job-support-australia/' },
  { label: 'Job Support Europe', href: '/job-support-europe/' },
];

/** All 8 geo pages — used in Footer and internal links. */
export const allLocationLinks = [
  { label: 'Job Support USA', href: '/job-support-usa/' },
  { label: 'Job Support UK', href: '/job-support-uk/' },
  { label: 'Job Support Canada', href: '/job-support-canada/' },
  { label: 'Job Support Australia', href: '/job-support-australia/' },
  { label: 'Job Support Europe', href: '/job-support-europe/' },
  { label: 'Job Support Germany', href: '/job-support-germany/' },
  { label: 'Job Support Singapore', href: '/job-support-singapore/' },
  { label: 'Job Support New Zealand', href: '/job-support-newzealand/' },
];

// ─── Main navigation ────────────────────────────────────────────────────────

/**
 * Main nav items. `dropdownType` signals the Navbar to render a dropdown.
 * The Navbar imports jobSupportLinks / locationNavLinks directly.
 */
export const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Job Support', href: '#', dropdownType: 'jobSupport' as const },
  { label: 'Locations', href: '#', dropdownType: 'locations' as const },
  { label: 'Interview Questions', href: '/interviews/' },
  { label: 'Technologies', href: '/#tech' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/#contact' },
];
