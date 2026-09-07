export const meta = {
  slug: "cicd-pipeline-failure-troubleshooting",
  permalink: "/blog/cicd-pipeline-failure-troubleshooting/",
  title: "CI/CD Pipeline Failures: Application vs Infrastructure vs Runner",
  description: "A triage method for red pipelines — how to tell whether a CI/CD failure is your application, the pipeline infrastructure, or the runner/agent, so you fix the real layer instead of blindly re-running the job.",
  date: "2026-09-07",
  keywords: "ci cd pipeline failure, pipeline debugging, github actions failure, gitlab ci, jenkins agent, flaky pipeline, runner out of disk, docker build cache, deployment failure vs build failure",
  about: "CI/CD pipeline failure triage",
  faqs: [
    { q: "How do I tell if a pipeline failure is my code or the infrastructure?", a: "Ask whether the same commit failed before. If a previously-green commit now fails with no code change, suspect the environment — runner, cache, registry, credentials, or a moved dependency. If the failure appeared exactly on the commit that changed the relevant code and reproduces locally, it is the application. The failing stage also localises it: compile/test failures are usually application; checkout/dependency-fetch/push/deploy failures are usually infrastructure or runner." },
    { q: "Why does re-running the job sometimes fix it?", a: "Because the failure was non-deterministic — a flaky test, a network blip fetching a dependency, a race in parallel jobs, or a runner that was momentarily out of disk or memory. A re-run that passes does not mean the problem is gone; it means you have a flaky pipeline that will fail again. Treat a 'fixed by re-run' as a bug to root-cause, not a resolution." },
    { q: "What are the most common runner/agent causes of failure?", a: "Out of disk (Docker layers and build caches fill the agent), out of memory (parallel jobs or a heavy build OOM the agent), expired or missing credentials/secrets, a stale or poisoned build cache, clock skew breaking TLS, and version drift between the runner image and what the build expects. These fail regardless of your code and often affect many pipelines at once." },
    { q: "How should I structure a pipeline to make failures debuggable?", a: "Fail fast with clear stage boundaries (lint, build, test, package, deploy) so the failing stage names the layer; make steps idempotent and re-runnable; pin tool and base-image versions; separate application tests from infrastructure/deploy steps; surface logs and artifacts on failure; and quarantine known-flaky tests instead of letting them mask real regressions." },
  ],
} as const;
