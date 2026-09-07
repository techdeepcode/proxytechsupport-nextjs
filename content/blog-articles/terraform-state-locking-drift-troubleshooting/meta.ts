export const meta = {
  slug: "terraform-state-locking-drift-troubleshooting",
  permalink: "/blog/terraform-state-locking-drift-troubleshooting/",
  title: "Terraform State Locking and Drift: Diagnosis and Recovery",
  description: "How Terraform state locking works, why you get 'Error acquiring the state lock', when force-unlock is safe, and a disciplined method to detect and reconcile configuration drift without destroying live infrastructure.",
  date: "2026-09-07",
  keywords: "terraform state lock, error acquiring the state lock, terraform force-unlock, terraform drift, terraform refresh, terraform plan drift, dynamodb lock table, s3 backend, terraform import, remote state",
  about: "Terraform state locking and drift troubleshooting",
  faqs: [
    { q: "What causes 'Error acquiring the state lock' in Terraform?", a: "The backend already holds a lock for that state and Terraform will not proceed until it is released. Usual causes: a concurrent apply from a teammate or CI job, or a previous run that crashed / was killed before it could release the lock (a stale lock). The error shows the Lock Info — ID, Who, Created, and the operation — so you can tell a live run from an abandoned one." },
    { q: "Is terraform force-unlock safe?", a: "Only when you are certain no other Terraform process is actually running against that state. force-unlock removes the lock without checking; if you unlock while a real apply is mid-flight, two applies can write the same state and corrupt it. Confirm no CI job or colleague is running, verify the lock's Created timestamp is old and the owning process is dead, then force-unlock with the exact Lock ID." },
    { q: "What is Terraform drift and how do I detect it?", a: "Drift is when real infrastructure no longer matches what state records — someone changed a resource in the console, another tool modified it, or a provider default shifted. Detect it with `terraform plan` (which refreshes and shows changes) or `terraform plan -refresh-only` to see drift without proposing config changes. The plan output marks drifted attributes; decide per resource whether to reconcile config to reality or re-apply to push config back." },
    { q: "How do I fix drift without destroying resources?", a: "Never blindly apply. First run a refresh-only plan to understand exactly what changed. If the manual change should stay, update your Terraform configuration to match it (and `terraform import` anything created out of band). If the change was unwanted, a normal apply restores the declared state. Watch for resources whose plan shows replace/destroy — those need targeted review before you proceed." },
  ],
} as const;
