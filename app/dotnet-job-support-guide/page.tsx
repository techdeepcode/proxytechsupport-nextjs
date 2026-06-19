import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: '.NET Job Support Guide — ASP.NET Core, C#, EF Core & Production Help | Proxy Tech Support',
  description: 'Real-time .NET support for developers dealing with ASP.NET Core issues, C# bugs, Entity Framework Core problems, Web API failures, SQL Server production issues, microservices, and Azure deployment.',
  canonical: 'https://proxytechsupport.com/dotnet-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1=".NET Job Support Guide: Real-Time Help for ASP.NET Core, C#, and EF Core"
      intro=".NET is the backbone of US enterprise software — banking systems, healthcare applications, insurance platforms, and government projects run on ASP.NET Core and C#. This guide covers the most common .NET production issues and how real-time expert support helps developers resolve them under delivery pressure."
      sections={[
        { heading: 'ASP.NET Core Middleware and Configuration Issues', body: 'ASP.NET Core middleware issues often stem from incorrect pipeline ordering. Authentication before routing, exception handling middleware not catching all errors, CORS middleware not applying correctly to all routes, and custom middleware introducing unexpected behaviour are common support scenarios. Configuration problems — where appsettings.json values are not being read correctly, or environment-specific overrides are not applying — are another frequent source of production issues.' },
        { heading: 'C# Async/Await Problems', body: 'Async/await issues in C# are subtle and dangerous:', bullets: ['Async deadlocks — using .Result or .Wait() in ASP.NET context where SynchronisationContext causes thread starvation', 'Fire-and-forget tasks not being awaited causing exceptions to be swallowed', 'CancellationToken not being propagated through the async call chain', 'Async in constructors (not supported — use factory pattern)', 'ConfigureAwait(false) missing in library code running in ASP.NET context'] },
        { heading: 'Entity Framework Core Debugging', body: 'EF Core issues in production include N+1 query problems (navigation properties loading related data in loops), translation failures for complex LINQ expressions, migration failures in production due to data conflicts, connection pool exhaustion under load, and lazy loading triggering at unexpected points.' },
        { heading: 'Web API Failures', body: 'ASP.NET Core Web API failures cover request validation errors not returning correct HTTP status codes, JSON serialisation issues with complex object graphs, model binding failures for non-standard content types, versioning conflicts between API consumers and producers, and global exception handler not covering all error types.' },
        { heading: '.NET on Azure', body: '.NET applications on Azure App Service or AKS have specific deployment considerations: deployment slot swap health check failures, Managed Identity credential configuration for Key Vault access, always-on setting and warm-up requirements for App Service, and container optimisation for .NET in Docker (publish-trimmed builds, single-file executables for smaller images).' },
        { heading: '.NET Microservices', body: 'Microservices in .NET commonly use gRPC or HTTP clients with Polly resilience policies. Common issues include HttpClientFactory misconfiguration causing connection pool exhaustion, Polly circuit breaker opening unexpectedly, gRPC streaming issues, and Dapr integration errors in Kubernetes-hosted .NET services.' },
      ]}
      relatedLinks={[
        { href: '/dotnet-job-support-usa/', label: '.NET Job Support USA' },
        { href: '/dotnet-job-support/', label: '.NET Job Support' },
        { href: '/backend-enterprise-job-support/', label: 'Backend & Enterprise Job Support' },
        { href: '/modern-dotnet-azure-ai-job-support/', label: 'Modern .NET Azure AI Job Support Hub' },
        { href: '/csharp-job-support/', label: 'C# Job Support' },
        { href: '/aspnet-core-job-support/', label: 'ASP.NET Core Job Support' },
        { href: '/dotnet-azure-job-support/', label: '.NET Azure Job Support' },
        { href: '/ef-core-migrations-job-support/', label: 'EF Core Migrations Job Support' },
        { href: '/dotnet-microservices-job-support/', label: '.NET Microservices Job Support' },
        { href: '/dotnet-aspire-job-support/', label: '.NET Aspire Job Support' },
        { href: '/dotnet-cqrs-mediatr-job-support/', label: 'CQRS + MediatR .NET Job Support' },
        { href: '/dotnet-testing-job-support/', label: '.NET Testing Job Support' },
        { href: '/dotnet-performance-job-support/', label: '.NET Performance Job Support' },
      ]}
      relatedGuides={[
        { href: '/java-job-support-guide/', label: 'Java Job Support Guide' },
        { href: '/full-stack-job-support-guide/', label: 'Full-Stack Job Support Guide' },
        { href: '/azure-job-support-guide/', label: 'Azure Job Support Guide' },
      ]}
      faqs={[
        { q: 'What are the most common ASP.NET Core production issues?', a: 'Middleware ordering problems, async deadlocks from blocking on async operations, EF Core N+1 queries degrading performance, connection pool exhaustion under load, and configuration not applying correctly in different environments.' },
        { q: 'How do you debug Entity Framework Core N+1 query problems?', a: 'Enable EF Core query logging to see all SQL being generated. Look for the same table being queried repeatedly in a loop. Fix by using Include() to eager load related data, or by restructuring the query to load data in fewer round trips.' },
        { q: 'What causes async deadlocks in C# and how do you fix them?', a: 'Deadlocks occur when code running in an ASP.NET synchronisation context calls .Result or .Wait() on a Task, which tries to resume on the same thread that is blocked waiting. Fix by using await throughout the call chain and never blocking on async code with .Result or .Wait().' },
        { q: 'How do you handle EF Core migration failures in production?', a: 'Check the migration SQL script before applying. Use transactional migrations where possible. For data-related failures, write a custom migration with manual rollback logic. Never run migrations directly — use a deployment pipeline that can be reviewed and rolled back.' },
        { q: 'What is the difference between .NET job support and general C# help?', a: '.NET job support is specific to your production application — your architecture, your EF Core context, your Azure deployment configuration. General C# help is language-level. Production issues require someone who understands the full stack context, not just the language.' },
      ]}
      ctaHref="/dotnet-job-support-usa/"
      ctaLabel="Get .NET Job Support"
    />
  );
}
