import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Germany IT Job Support Guide — Real-Time Technical Help for Berlin & Munich Roles | Proxy Tech Support',
  description: 'Real-time IT job support for professionals in Germany — technical task help, production support, interview preparation, and job performance assistance for Berlin, Munich, and remote German IT roles.',
  canonical: 'https://proxytechsupport.com/germany-it-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Germany IT Job Support Guide: Real-Time Technical Help for Berlin and Munich Roles"
      intro="Germany is one of Europe's largest IT employment markets, with Berlin as a major tech startup hub, Munich as the centre of enterprise and automotive technology, Frankfurt as the European financial technology capital, and Hamburg and Cologne as significant regional markets. German IT roles carry specific workplace culture expectations, language requirements, and technical environment characteristics that internationally-trained professionals need to navigate."
      sections={[
        { heading: 'The German IT Employment Landscape', body: 'Germany\'s IT market is structured around distinct employer segments:', bullets: ['German tech companies — SAP, Deutsche Telekom, Siemens Digital, Bosch, Auto1 Group', 'US tech multinationals — Amazon Berlin, Zalando, Delivery Hero, HelloFresh tech teams', 'German automotive technology — BMW Group IT, Volkswagen Digital, Mercedes-Benz Tech', 'German banking and finance — Deutsche Bank Technology, Commerzbank, N26, Trade Republic', 'Industrial and manufacturing IT — Siemens, BASF, Bayer digital', 'Consulting and services — Capgemini Germany, Accenture Germany, ThoughtWorks Berlin'] },
        { heading: 'Language Requirements in German IT', body: 'German IT workplaces vary significantly by language requirement:', bullets: ['Berlin tech startups and international companies — English working language is standard', 'Traditional German employers (Deutsche Telekom, SAP, automotive) — German required', 'US multinationals in Germany — English primary, German helpful', 'Government and public sector — German required', 'Frankfurt financial sector — English common in capital markets, German in domestic finance'] },
        { heading: 'German IT Workplace Culture', body: 'German IT culture has distinct characteristics: high value placed on thoroughness and technical precision over speed, clear separation between work and personal life (overtime is not normalised in most German companies), direct communication style — feedback is given directly and received professionally, Works Council (Betriebsrat) involvement in significant employment matters, and strong employment protection regulations (AGG, KSchG) that affect how performance issues are handled.' },
        { heading: 'Common IT Roles in Demand in Germany (2025–2026)', body: 'High-demand IT roles in Germany include:', bullets: ['Backend developers — Java (dominant), Python, Go, TypeScript', 'Cloud and DevOps engineers — AWS, Azure, Kubernetes, Terraform', 'Data engineers and analytics engineers', 'AI and ML engineers — growing demand from automotive and industrial sectors', 'Platform and SRE engineers', 'Frontend developers — React, Angular (Angular still dominant in German enterprise)', 'Cybersecurity engineers — increasingly critical across all sectors'] },
        { heading: 'Job Support Coverage for German IT Roles', body: 'IT job support for German roles covers all major technology areas: Java and Spring Boot (dominant in German enterprise), Angular and React frontend development, AWS and Azure cloud platforms (both strong in Germany), DevOps tooling (Kubernetes, Terraform, Jenkins), data platform work (Spark, dbt, Airflow), and AI/ML engineering. Support sessions are available during German business hours (CET/CEST).' },
        { heading: 'Blue Card and Work Authorisation for IT in Germany', body: 'Germany\'s EU Blue Card is available to non-EU nationals with a degree and a job offer meeting the minimum salary threshold (approximately €45K for shortage occupations including IT in 2025–2026). Germany\'s Chancenkarte (Opportunity Card) allows qualified IT professionals to enter Germany to job search. Skilled immigration has been streamlined under the Fachkräfteeinwanderungsgesetz (FEG), making Germany increasingly accessible to internationally-trained IT professionals.' },
      ]}
      relatedLinks={[
        { href: '/job-support-usa/', label: 'IT Job Support' },
        { href: '/interview-support-usa/', label: 'Interview Support' },
        { href: '/devops-job-support-usa/', label: 'DevOps Job Support' },
      ]}
      relatedGuides={[
        { href: '/germany-interview-support-guide/', label: 'Germany Interview Support Guide' },
        { href: '/germany-devops-cloud-job-support-guide/', label: 'Germany DevOps & Cloud Job Support' },
        { href: '/germany-ai-ml-data-support-guide/', label: 'Germany AI/ML & Data Support Guide' },
      ]}
      faqs={[
        { q: 'Do German IT companies require German language skills?', a: 'It depends on the employer. Berlin tech startups and US multinationals operate in English. Traditional German companies (SAP, Deutsche Telekom, automotive IT) require German for day-to-day work. Frankfurt financial sector roles vary. Always check the job posting language — if it is written in German, German is almost certainly required.' },
        { q: 'What is the EU Blue Card and how does it help IT professionals in Germany?', a: 'The EU Blue Card is a work and residence permit for highly skilled non-EU nationals. For IT roles in shortage occupations, the minimum annual salary threshold is approximately €45,300 (2025–2026). The card allows the holder to work in Germany and eventually apply for permanent residence after 21 months (with B1 German) or 33 months.' },
        { q: 'What salary should an experienced IT professional expect in Germany?', a: 'Senior software engineers in Berlin and Munich earn €80K–€130K gross in 2025–2026. Note: German gross-to-net conversion is significant (approximately 40% of gross is deducted in taxes and social contributions). Total compensation at US multinationals may include RSU grants. Munich salaries tend to be slightly higher than Berlin for equivalent roles.' },
        { q: 'Is Angular still widely used in German enterprise IT?', a: 'Yes. Angular has stronger adoption in German enterprise environments than in US or UK markets. Large German companies (SAP ecosystem, banking, insurance, automotive) often have established Angular codebases. React is dominant in Berlin startups and international companies. Both are in demand, but Angular knowledge specifically helps in traditional German enterprise roles.' },
        { q: 'How does German employment law affect IT professionals?', a: 'Germany has strong employment protections. Probationary periods are typically 6 months, during which either party can terminate with 2 weeks notice. After probation, notice periods increase significantly. Works councils (Betriebsrat) have consultation rights for significant employment changes. Performance management processes are more structured and formal than in US tech company equivalents.' },
      ]}
      ctaHref="/job-support-usa/"
      ctaLabel="Get IT Job Support"
    />
  );
}
