import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Australia Full-Stack, Java, .NET & React Job Support Guide — Developer Help for Australian IT Roles | Proxy Tech Support',
  description: 'Real-time job support for full-stack, Java, .NET, and React developers in Australia — backend, frontend, and full-stack development help for Sydney, Melbourne, and remote Australian tech roles.',
  canonical: 'https://proxytechsupport.com/australia-fullstack-java-dotnet-react-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Australia Full-Stack, Java, .NET & React Job Support Guide: Developer Help for Australian IT Roles"
      intro="Australia's IT developer market spans Java-heavy banking systems, .NET enterprise applications at large corporations, React and TypeScript at product companies, and the full range of modern stacks at companies like Atlassian and Canva. This guide covers real-time job support for developers working across these technology stacks at Australian employers."
      sections={[
        { heading: 'Java Development in Australian Banking and Enterprise', body: 'Java is the dominant backend language in Australian financial services. Common environments:', bullets: ['Spring Boot 3 microservices at Australian banks undergoing cloud transformation', 'Legacy J2EE applications being modernised with strangler-fig patterns', 'Event-driven systems with Kafka and AWS SQS for payment processing', 'Java 17 and 21 LTS versions in new development', 'Oracle Database and PostgreSQL in financial sector Java applications', 'Microservices on Kubernetes (EKS) with Spring Cloud Gateway'] },
        { heading: '.NET and C# at Australian Enterprise Companies', body: '.NET has significant presence in Australian government, insurance, and enterprise IT:', bullets: ['ASP.NET Core microservices deployed to Azure or AWS', '.NET 8 LTS in new development at modern Australian enterprises', 'Entity Framework Core and Dapper for data access', 'Azure Service Bus and Azure Functions for event-driven workflows', 'WinForms and WPF legacy applications at insurance and government agencies', 'Microsoft Power Platform integration at large Australian government departments'] },
        { heading: 'React and TypeScript at Australian Product Companies', body: 'React is the dominant frontend framework at Australian product companies. Modern Australian frontend environments:', bullets: ['React 18 with TypeScript — standard at Atlassian, Canva, SEEK, REA Group', 'Next.js for full-stack applications at modern Australian startups', 'Tailwind CSS and company-specific design systems', 'GraphQL with Apollo Client at larger Australian product companies', 'React Testing Library and Playwright for automated testing', 'Storybook for component development and documentation'] },
        { heading: 'Common Support Scenarios for Java Developers in Australia', body: 'Frequent Java development support scenarios at Australian employers:', bullets: ['Spring Boot application startup failures and configuration issues', 'JPA and Hibernate performance issues at banking transaction volumes', 'Kafka consumer and producer configuration debugging', 'Integration test setup with Testcontainers for Australian CI/CD pipelines', 'API security implementation — Spring Security, OAuth2, JWT', 'Database migration with Flyway or Liquibase in banking change-managed environments', 'Code review preparation and response for Australian banking PR processes'] },
        { heading: 'Full-Stack Development at Australian Tech Companies', body: 'Full-stack developers at Australian product companies (Xero, Atlassian, SEEK, REA Group) work across the entire application stack. Support covers: API design between React frontend and backend services, authentication with AWS Cognito or Auth0, state management with Redux Toolkit or Zustand, performance optimisation for React applications, GraphQL schema design and resolver implementation, and end-to-end testing with Cypress or Playwright for Australian employer CI/CD processes.' },
        { heading: 'Australian Banking Frontend Development', body: 'Frontend development at Australian banks is an increasingly significant area as digital banking transformation drives investment in customer-facing applications and internal tooling. Banking frontend environments use: React or Angular (NAB, CBA, Westpac and ANZ all have active frontend engineering), accessibility compliance (WCAG 2.1 AA is required for Australian government and expected in banking), performance optimisation for mobile users on Australian mobile networks, and integration with Australian payment and identity systems.' },
      ]}
      relatedLinks={[
        { href: '/job-support-usa/', label: 'IT Job Support' },
        { href: '/australia-it-job-support-guide/', label: 'Australia IT Job Support Guide' },
        { href: '/java-job-support-guide/', label: 'Java Job Support Guide' },
      ]}
      relatedGuides={[
        { href: '/australia-it-job-support-guide/', label: 'Australia IT Job Support Guide' },
        { href: '/australia-devops-cloud-sre-support-guide/', label: 'Australia DevOps & Cloud SRE Support' },
        { href: '/react-job-support-guide/', label: 'React Job Support Guide' },
      ]}
      faqs={[
        { q: 'What Java frameworks are most common at Australian banks?', a: 'Spring Boot 3 is dominant for new development. Spring Cloud (Gateway, Config, Eureka) for microservices infrastructure. Many banks also have legacy Spring MVC and JPA applications being maintained and gradually modernised. Kafka integration is standard for event-driven banking systems. Understanding both modern Spring Boot 3 and legacy Spring patterns is valuable for Australian bank Java roles.' },
        { q: 'Is React or Angular more common at Australian product companies?', a: 'React is dominant at Australian product companies and startups (Atlassian, Canva, SEEK, REA Group, Xero all use React heavily). Angular is more common at traditional enterprises and some banking institutions. For most Australian product tech roles, React and TypeScript proficiency is the relevant skill.' },
        { q: 'What .NET version do Australian enterprises use?', a: '.NET 8 LTS is the current standard for new development. Many Australian enterprises (particularly government and insurance) still maintain .NET Framework 4.x applications. .NET 6 and .NET 7 codebases are also in active maintenance. The migration from .NET Framework to modern .NET is an active program at many large Australian organisations.' },
        { q: 'How important is accessibility (WCAG) knowledge for Australian frontend developers?', a: 'Very important for government and banking roles. The Disability Discrimination Act and Australian Government Digital Service Standard require WCAG 2.1 AA compliance for Australian government digital services. Banks and large enterprises are increasingly expected to meet the same standard. Frontend developers in these environments need practical accessibility knowledge — semantic HTML, ARIA attributes, keyboard navigation, and screen reader testing.' },
        { q: 'What are the best Australian companies for full-stack developers?', a: 'Atlassian, Canva, Xero, SEEK, REA Group (realestate.com.au), and Afterpay/Block are the most highly regarded Australian tech employers for full-stack developers. They offer competitive salaries, strong engineering culture, and modern technology stacks. Commonwealth Bank and Westpac\'s technology divisions are the best banking options for full-stack roles at scale with significant investment in engineering.' },
      ]}
      ctaHref="/job-support-usa/"
      ctaLabel="Get IT Job Support"
    />
  );
}
