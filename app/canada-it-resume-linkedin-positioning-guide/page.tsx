import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Canada IT Resume & LinkedIn Positioning Guide for Developers | Proxy Tech Support',
  description: 'A practical guide to positioning your IT resume and LinkedIn profile for the Canadian job market — headline optimization, skills section, project bullet points, ATS keywords, and recruiter-facing visibility.',
  canonical: 'https://proxytechsupport.com/canada-it-resume-linkedin-positioning-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Canada IT Resume & LinkedIn Positioning Guide"
      intro="Your resume and LinkedIn profile are the primary signals that determine whether Canadian IT recruiters contact you. This guide covers how to position each section specifically for the Canadian IT market — from the headline that appears in recruiter searches to the project bullets that convert profile views into interview calls."
      sections={[
        { heading: 'The LinkedIn Headline: Your Most Important Real Estate', body: 'Your LinkedIn headline appears in every recruiter search result and connection request. It must communicate your role, technology, and value in under 120 characters. Format: "[Role Title] | [Key Technology 1] | [Key Technology 2] | [Key Technology 3] | [Open to: Location/Remote]". Example: "Java Backend Developer | Spring Boot | Microservices | AWS | Open to Toronto/Vancouver Remote". This headline is searchable and immediately tells a recruiter whether to click.' },
        { heading: 'The About Section', body: 'The LinkedIn About section should lead with your current role, years of experience, and top 2–3 technologies — then expand into the types of projects you have worked on and what makes you effective. Avoid generic phrases like "passionate developer" or "team player." Instead: "8 years of Java development experience on high-volume financial systems, most recently building Spring Boot microservices processing 100K+ daily transactions for Canadian banking clients."' },
        { heading: 'Skills Section', body: 'The Skills section on LinkedIn is indexed for search. Add the maximum 50 skills, prioritising the most searched-for terms in your specialty. For a Java developer: Java, Spring Boot, Spring Cloud, Microservices, REST APIs, Kafka, JPA, Hibernate, AWS, Docker, Kubernetes, SQL, PostgreSQL, Oracle, Maven, Gradle, CI/CD, Jenkins, GitHub Actions. Endorsements from colleagues add credibility.' },
        { heading: 'Project Bullet Points on Your Resume', body: 'Canadian employers respond to project bullets that describe what you built, the technology you used, the scale you worked at, and the outcome. Structure: [Action verb] + [technology/system] + [scale/context] + [result if quantifiable]. Example: "Refactored legacy Oracle-based reporting service to microservices architecture using Spring Boot 3 and Kafka, reducing report generation time from 45 minutes to under 2 minutes for 12 business units."' },
        { heading: 'ATS Keyword Optimisation', body: 'For each role you apply to, compare your resume to the job description. If the job description uses "ReactJS" and your resume says "React.js" or "React," standardise. If they list specific AWS services (S3, Lambda, RDS) and your resume says "cloud storage" and "serverless functions," your ATS score will be low. Mirror the exact terminology of the job posting wherever truthful.' },
        { heading: 'Canadian Market Positioning', body: 'Certain terms signal Canadian market familiarity: mention PIPEDA-compliant systems for privacy-sensitive roles, reference Canadian financial sector experience (CRA, OSFI standards) for banking roles, and use phrases like "distributed team," "EST/PST timezone," or "Canadian client" to signal you understand the market context.' },
      ]}
      relatedLinks={[
        { href: '/get-interview-scheduled-canada/', label: 'Get Interview Scheduled Canada' },
        { href: '/resume-linkedin-optimization-for-developers/', label: 'Resume & LinkedIn Optimization' },
        { href: '/job-support-canada/', label: 'IT Job Support Canada' },
      ]}
      relatedGuides={[
        { href: '/why-canada-it-resume-gets-no-calls/', label: 'Why Your Canada IT Resume Gets No Calls' },
        { href: '/how-to-get-it-interviews-scheduled-in-canada/', label: 'How to Get IT Interviews in Canada' },
        { href: '/recruiter-keywords-for-canada-it-jobs/', label: 'Recruiter Keywords for Canada IT Jobs' },
      ]}
      faqs={[
        { q: 'How should a Java developer write their LinkedIn headline for Canada?', a: '"Java Backend Developer | Spring Boot | Microservices | AWS/Azure | Open to Toronto/Remote" — specific, technology-forward, location-aware.' },
        { q: 'What project descriptions do Canadian employers actually read?', a: 'Employers read descriptions that include technology names, scale indicators (transaction volume, user count, data size), and outcome. Generic descriptions are skipped.' },
        { q: 'Should you list every technology on your resume or just the main ones?', a: 'List technologies you can discuss in an interview. Do not list things you used once three years ago. For the skills section on LinkedIn, list everything you know well — it expands your searchability.' },
        { q: 'How do you write an About section on LinkedIn that attracts Canadian recruiters?', a: 'Lead with years of experience, core technology, and industry context. Be specific: "8 years Java, primarily financial services and insurance, currently building Kafka-based microservices." Avoid corporate buzzwords. Canadian recruiters respond to technical specificity.' },
        { q: 'What is the ideal IT resume length for Canada applications?', a: '2 pages for 5+ years experience. 1 page for under 5 years. Canadian employers expect concise resumes — 3+ page resumes are often not read fully. Keep every line substantive.' },
      ]}
      ctaHref="/get-interview-scheduled-canada/"
      ctaLabel="Get Interview Scheduled in Canada"
    />
  );
}
