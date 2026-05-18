import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: '10 Canada IT Job Search Mistakes Costing You Interviews | Proxy Tech Support',
  description: 'Common Canada IT job search mistakes — generic resume, weak LinkedIn profile, missing Canada-specific terms, poor keyword alignment, mismatched roles, and how to fix each one.',
  canonical: 'https://proxytechsupport.com/canada-it-job-search-mistakes/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="10 Canada IT Job Search Mistakes That Are Costing You Interviews"
      intro="The IT job market in Canada is competitive but navigable. Most professionals who struggle are making a small number of correctable mistakes — not facing an insurmountable barrier. This guide identifies the 10 most common mistakes and explains how to fix each one."
      sections={[
        { heading: 'Mistake 1: Generic Resume Not Tailored to Each Role', body: 'Sending the same resume to every role means your ATS keyword match is low for most applications. Fix: maintain a master resume and create a tailored version for each application by adjusting keywords to match the specific job description. This takes 10 minutes per application and dramatically improves response rates.' },
        { heading: 'Mistake 2: Weak LinkedIn Headline and About Section', body: 'A LinkedIn headline that says "Software Developer" or lists your current employer is essentially invisible to recruiters. Fix: use a keyword-rich headline with role, top technologies, and location preference. Update your About section to be specific about your technology depth and the type of projects you handle.' },
        { heading: 'Mistake 3: Missing Canadian Market Terms', body: 'Resumes that do not reference Canadian-relevant context signal that the candidate may not understand the market. Fix: mention Canadian financial sector experience (if applicable), reference Canadian regulatory context (PIPEDA, OSFI) where relevant, and use the same terminology Canadian employers use in their job postings.' },
        { heading: 'Mistake 4: Applying to Too Many Roles Simultaneously Without Focus', body: 'Spraying applications across every available role without targeting is exhausting and ineffective. Fix: identify 15–20 target companies whose tech stack matches yours. Apply selectively and follow up actively rather than applying to 100 roles and waiting passively.' },
        { heading: 'Mistake 5: No Strategy for the Referral Channel', body: 'In Canada, referrals drive a significant share of IT hires at major employers. Fix: identify 2–3 people at each of your target companies, connect authentically over time, and let them know when you are actively looking. Direct messaging strangers asking for referrals rarely works — genuine networking over weeks does.' },
        { heading: 'Mistake 6: Wrong Role Level Targeting', body: 'Applying to senior or lead roles when you have 2 years of experience, or to junior roles when you have 10 years, both generate rejections. Fix: target roles that match your actual experience level. Stretch by one level at most, and compensate with a strong cover letter that addresses the gap explicitly.' },
        { heading: 'Mistake 7: Not Listing Specific Technology Versions', body: 'Writing "Java development experience" instead of "Java 17, Spring Boot 3.2, Kafka 3.5" misses the search terms recruiters use. Fix: always list specific technology names and versions where you know them — this is how your resume becomes discoverable.' },
        { heading: 'Mistake 8: Outdated or Irrelevant Skills at the Top', body: 'Leading with technologies from 8–10 years ago (J2EE, JSP, Struts) before listing modern skills buries your current relevance. Fix: list your most recent and most in-demand skills first. Move legacy experience to a brief note or remove it if it is genuinely not relevant to the roles you are targeting.' },
        { heading: 'Mistake 9: No Quantified Impact in Project Descriptions', body: 'Descriptions without scale or outcome ("developed features for an e-commerce application") are less compelling than descriptions with context ("built checkout API handling CAD $2M+ daily transactions for a Toronto-based fintech"). Fix: add scale, volume, or outcome to each significant project bullet.' },
        { heading: 'Mistake 10: Ignoring Follow-Up', body: 'Most candidates apply and wait. Following up with a brief, professional message 5–7 days after applying (where the recruiter is identifiable) demonstrates initiative and keeps your application visible. This is standard practice in the Canadian market and rarely considered pushy when done professionally.' },
      ]}
      relatedLinks={[
        { href: '/get-interview-scheduled-canada/', label: 'Get Interview Scheduled Canada' },
        { href: '/blog/indian-masters-graduates-canada-it-career-breakthrough-2026/', label: 'Canada IT Career Breakthrough Guide' },
        { href: '/job-support-canada/', label: 'IT Job Support Canada' },
      ]}
      relatedGuides={[
        { href: '/why-canada-it-resume-gets-no-calls/', label: 'Why Your Canada IT Resume Gets No Calls' },
        { href: '/canada-it-resume-linkedin-positioning-guide/', label: 'Canada IT Resume & LinkedIn Guide' },
        { href: '/recruiter-keywords-for-canada-it-jobs/', label: 'Recruiter Keywords for Canada IT Jobs' },
      ]}
      faqs={[
        { q: 'Why do highly qualified IT professionals in Canada struggle to get interviews?', a: 'Usually it is a positioning problem, not a skills problem. The skills are there but the resume does not communicate them in the way Canadian recruiters search for them. Keyword mismatch and weak LinkedIn profiles are the most common causes.' },
        { q: 'What is the most common mistake in IT resumes for Canada?', a: 'Using generic technology descriptions instead of specific technology names. "Cloud experience" is invisible. "AWS EC2, EKS, Lambda, RDS" is searchable.' },
        { q: 'Does applying to too many jobs hurt your chances?', a: 'Not directly, but high-volume low-quality applications waste time that could be spent on 20 high-quality targeted applications. Quality of targeting matters more than volume.' },
        { q: 'How do new immigrants to Canada compete with local candidates?', a: 'By emphasising transferable technical skills, international project scale, and Canadian-market-relevant context in project descriptions. Canadian employers hire globally — the barrier is usually positioning, not origin of experience.' },
        { q: 'What role does networking play in Canada IT job search?', a: 'A large role. The Canadian IT market is relationship-driven at the senior level. Building genuine connections with professionals at target companies over weeks and months opens referral channels that bypass ATS filtering entirely.' },
      ]}
      ctaHref="/get-interview-scheduled-canada/"
      ctaLabel="Get Interview Scheduled in Canada"
    />
  );
}
