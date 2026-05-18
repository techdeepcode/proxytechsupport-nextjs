import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Why Your Canada IT Resume Gets No Recruiter Calls — And How to Fix It | Proxy Tech Support',
  description: 'Understand why IT professionals in Canada apply daily but get no recruiter calls — resume keyword mismatch, weak LinkedIn headline, ATS filtering, wrong role targeting, and how to fix it.',
  canonical: 'https://proxytechsupport.com/why-canada-it-resume-gets-no-calls/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Why Your Canada IT Resume Gets No Recruiter Calls"
      intro="Hundreds of applications. No responses. This is the daily reality for many qualified IT professionals in Canada — and the problem is almost never a lack of skills. The real issue is how Canadian recruiters search for candidates, how ATS systems filter applications, and how most IT resumes fail to appear in the searches that matter. This guide explains why it happens and what to do about it."
      sections={[
        { heading: 'How Canadian Recruiters Actually Search for Candidates', body: 'Canadian IT recruiters do not read every application they receive. They use Boolean search strings on LinkedIn, job boards, and their own ATS to find candidates who match specific keyword combinations. A recruiter hiring a Java developer at RBC is searching for terms like "Spring Boot Java Developer Toronto remote" — not browsing resumes hoping to find someone good. If your profile does not contain those exact terms, you will not appear in their search.' },
        { heading: 'The ATS Filtering Problem', body: 'Most Canadian employers with more than 50 employees use an ATS (Applicant Tracking System) — Workday, Taleo, Greenhouse, or Lever. These systems parse your resume and rank it for keyword match before any human sees it. Resumes that do not match the job description keywords are automatically filtered out. Applying with the same generic resume to every job guarantees low ATS scores across all of them.' },
        { heading: 'Resume Keyword Mismatch', body: 'The most common resume failure in Canada is keyword mismatch — the candidate has the skill but uses different terminology than the employer. A Java developer who lists "J2EE" instead of "Java EE" or "enterprise Java." A DevOps engineer who writes "infrastructure automation" instead of "Terraform" and "Kubernetes." A React developer who writes "JavaScript development" without explicitly listing "React," "TypeScript," or "Next.js."', bullets: ['Use the exact technology names, not category descriptions', 'Check the job description for the specific tools they use and mirror that language', 'List version numbers where relevant (Java 17, React 18, Python 3.12)'] },
        { heading: 'Weak LinkedIn Headline', body: 'Your LinkedIn headline is the most visible line in recruiter search results. A headline that says "Software Engineer at [Company]" gives recruiters no reason to click. A headline that says "Java Backend Developer | Spring Boot | Microservices | AWS | Open to Toronto/Remote" immediately communicates role, skills, and availability. This single change can dramatically improve profile visibility.' },
        { heading: 'Generic Project Descriptions', body: 'Project bullet points that say "Developed features for a web application using Java and Spring" are invisible to recruiters. The same experience described as "Built RESTful APIs using Spring Boot 3.2 and PostgreSQL for a Canadian financial services platform processing 50K daily transactions" contains multiple searchable keywords and demonstrates scale — two things that matter to Canadian recruiters.' },
        { heading: 'Wrong Role Targeting', body: 'Applying to roles that are two levels above or below your experience, or to companies where your tech stack is not used, generates rejections that damage your confidence but produce no useful information. Research the target company\'s tech stack (LinkedIn, Glassdoor, their engineering blog) before applying.' },
      ]}
      relatedLinks={[
        { href: '/get-interview-scheduled-canada/', label: 'Get Interview Scheduled Canada' },
        { href: '/job-support-canada/', label: 'IT Job Support Canada' },
        { href: '/resume-linkedin-optimization-for-developers/', label: 'Resume & LinkedIn Optimization' },
        { href: '/blog/indian-masters-graduates-canada-it-career-breakthrough-2026/', label: 'Canada IT Career Breakthrough Guide' },
      ]}
      relatedGuides={[
        { href: '/how-to-get-it-interviews-scheduled-in-canada/', label: 'How to Get IT Interviews in Canada' },
        { href: '/canada-it-resume-linkedin-positioning-guide/', label: 'Canada IT Resume & LinkedIn Guide' },
        { href: '/canada-it-job-search-mistakes/', label: 'Canada IT Job Search Mistakes' },
      ]}
      faqs={[
        { q: 'How do Canadian recruiters search for IT candidates?', a: 'Most use Boolean search on LinkedIn Recruiter or their ATS — combining job title, specific technologies, and location. Your profile must contain these exact terms to appear in searches.' },
        { q: 'What ATS systems do Canadian employers use?', a: 'Workday (banks and large enterprises), Greenhouse (tech companies), Taleo (government and finance), and Lever (startups and mid-size tech) are the most common. Each parses resumes differently, but all rank by keyword match.' },
        { q: 'What keywords are missing from most Canadian IT resumes?', a: 'Specific technology version names, cloud platform certifications (AWS Certified, Azure Associate), Canadian-specific terms ("PIPEDA-compliant architecture," "Open Banking Canada"), and role-level indicators ("senior," "lead," "principal").' },
        { q: 'Why does experience from outside Canada hurt resume visibility?', a: 'It does not hurt visibility if described correctly. The issue is that experience at unfamiliar company names requires stronger keyword signals to compensate. Describe projects in terms of technology and scale, not just employer name.' },
        { q: 'How do you make your LinkedIn profile visible to Toronto/Vancouver recruiters?', a: 'Set your location to the city you are targeting (or "Open to work in Toronto"). Add the city name to your headline. Include Canadian-specific terms in your About section. Connect with recruiters at target companies.' },
      ]}
      ctaHref="/get-interview-scheduled-canada/"
      ctaLabel="Get Interview Scheduled in Canada"
    />
  );
}
