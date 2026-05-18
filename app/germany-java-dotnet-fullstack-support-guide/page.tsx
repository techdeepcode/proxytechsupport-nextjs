import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Germany Java, .NET & Full-Stack Job Support Guide — Backend & Frontend Help for German IT Roles | Proxy Tech Support',
  description: 'Real-time job support for Java, .NET, and full-stack developers in Germany — Spring Boot, C#, Angular, React, and enterprise backend development help for Berlin, Munich, and German remote roles.',
  canonical: 'https://proxytechsupport.com/germany-java-dotnet-fullstack-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Germany Java, .NET & Full-Stack Job Support Guide: Backend and Frontend Help for German IT Roles"
      intro="Java and .NET are the dominant enterprise backend technologies in Germany. Germany's strong manufacturing, automotive, banking, and insurance sectors all run large Java and .NET codebases. Full-stack development with Angular and React is in high demand at German product companies and startups. This guide covers real-time job support for developers working in these technology stacks at German employers."
      sections={[
        { heading: 'Java Development in German Enterprise', body: 'Java is the dominant backend language in German enterprise IT. Common environments include:', bullets: ['Spring Boot 3 and Spring Framework microservices at banks and insurance companies', 'Java EE and Jakarta EE in legacy enterprise applications (still widely maintained)', 'Quarkus and Micronaut adoption growing at newer German tech companies', 'Java 17 and Java 21 LTS versions standard in new development', 'SAP Java applications and SAP integration middleware', 'Event-driven systems with Kafka and ActiveMQ in German financial services'] },
        { heading: '.NET and C# in Germany', body: '.NET is widely used in German enterprise, particularly at companies in the Microsoft ecosystem:', bullets: ['ASP.NET Core for web APIs and microservices', '.NET 8 LTS as the current standard', 'Entity Framework Core for data access', 'Azure integration — Azure Service Bus, Azure Functions, Cosmos DB', 'WinForms and WPF legacy applications still maintained at German enterprises', 'Blazor adoption growing for internal tooling and enterprise web applications'] },
        { heading: 'Angular vs React in German Frontend Development', body: 'Germany has higher Angular adoption than most other European markets:', bullets: ['Angular is dominant in German banking, insurance, and SAP-ecosystem companies', 'React is dominant at Berlin startups and US-influenced tech companies', 'Angular 17+ with standalone components and signals architecture in new development', 'Vue.js has a presence at smaller German companies', 'TypeScript is standard across all German frontend development', 'Material Design and German enterprise UI component libraries (Ant Design, PrimeNG) are common'] },
        { heading: 'Common Support Scenarios for Java Developers in Germany', body: 'Frequent Java support scenarios at German employers:', bullets: ['Spring Boot application context loading issues and auto-configuration debugging', 'Hibernate N+1 query problems and JPA fetch strategy optimisation', 'Kafka consumer group rebalancing and offset management', 'JVM heap and GC tuning for high-throughput German banking applications', 'Integration testing setup with Testcontainers', 'Database migration with Flyway or Liquibase', 'Spring Security OAuth2 configuration for enterprise SSO'] },
        { heading: 'Full-Stack Development Support for German Product Companies', body: 'German product companies and startups (Personio, Sumup, Billie, Flixbus tech) build full-stack applications with React or Angular on the frontend and Java, Node.js, or Go on the backend. Support covers: API design between frontend and backend, authentication integration (Keycloak is widely used in Germany), state management patterns in React and Angular, GraphQL implementation, and end-to-end testing with Playwright or Cypress.' },
        { heading: 'German Enterprise Architecture Patterns', body: 'German enterprise IT favours certain architectural patterns: domain-driven design and modular monolith architectures are more common than at US tech companies, event sourcing and CQRS patterns at financial institutions, service mesh implementations (Istio) at larger companies, SOA legacy integration with modern microservices (strangler fig pattern), and strong emphasis on documentation — German enterprise projects produce significant architecture documentation that engineers are expected to maintain.' },
      ]}
      relatedLinks={[
        { href: '/job-support-usa/', label: 'IT Job Support' },
        { href: '/germany-it-job-support-guide/', label: 'Germany IT Job Support Guide' },
        { href: '/java-job-support-guide/', label: 'Java Job Support Guide' },
      ]}
      relatedGuides={[
        { href: '/germany-it-job-support-guide/', label: 'Germany IT Job Support Guide' },
        { href: '/germany-devops-cloud-job-support-guide/', label: 'Germany DevOps & Cloud Job Support' },
        { href: '/dotnet-job-support-guide/', label: '.NET Job Support Guide' },
      ]}
      faqs={[
        { q: 'Is Java or .NET more in demand for backend roles in Germany?', a: 'Java has higher absolute demand, particularly in banking, insurance, automotive, and SAP-ecosystem companies. .NET is strong at companies in the Microsoft ecosystem and in certain industrial sectors. Both are in healthy demand — the choice depends on the target employer segment. Java experience is broader-applicable in Germany.' },
        { q: 'What Java version do German enterprise companies use?', a: 'Java 17 LTS is the most common production version in German enterprise (2025–2026). Java 21 LTS adoption is growing, particularly at newer projects. Some legacy systems still run Java 11 or older versions. New development at modern German companies targets Java 21. Knowledge of current LTS versions and their features (records, sealed classes, virtual threads) is valued.' },
        { q: 'What is Keycloak and why is it widely used in Germany?', a: 'Keycloak is an open-source identity and access management solution widely used across German enterprise IT for SSO, OAuth2, and OpenID Connect implementations. German enterprises favour open-source, self-hosted identity solutions over cloud-native IAM services for data sovereignty reasons. Experience with Keycloak configuration, realm management, and Spring Security Keycloak integration is a significant advantage for Java developers in Germany.' },
        { q: 'Is Angular knowledge necessary for frontend roles at German enterprises?', a: 'For traditional German enterprise employers (banking, insurance, manufacturing), Angular knowledge is often expected or required. For Berlin startups and international companies, React is the dominant choice. Senior frontend developers with both React and Angular experience are highly competitive in the German market. TypeScript expertise is required regardless of framework.' },
        { q: 'What full-stack German tech companies are good employers?', a: 'Personio (HR software, Munich), Sumup (fintech, Berlin), Billie (B2B payments, Berlin), Flixbus tech, Westwing (home e-commerce), and Idealo (price comparison) are well-regarded German product tech employers with modern stacks. Delivery Hero, HelloFresh, and Zalando offer larger engineering teams with significant technical investment.' },
      ]}
      ctaHref="/job-support-usa/"
      ctaLabel="Get IT Job Support"
    />
  );
}
