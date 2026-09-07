export const meta = {
  slug: "kubernetes-oomkilled-troubleshooting",
  permalink: "/blog/kubernetes-oomkilled-troubleshooting/",
  title: "Kubernetes OOMKilled: Root-Cause Troubleshooting for Production Pods",
  description: "Why containers get OOMKilled with exit code 137, how the kernel OOM killer and cgroup memory limits interact, and a production methodology to find the real cause — limits, leaks, JVM/Node heap, page cache and node pressure.",
  date: "2026-09-07",
  keywords: "kubernetes oomkilled, exit code 137, container memory limit, cgroup oom, jvm container memory, node.js heap kubernetes, memory leak, node memory pressure eviction, requests limits",
  about: "Kubernetes container memory (OOMKilled) troubleshooting",
  faqs: [
    { q: "What does OOMKilled mean in Kubernetes?", a: "OOMKilled means the Linux kernel's out-of-memory killer terminated the container process because it tried to use more memory than its cgroup allowed. In Kubernetes that cgroup limit is the container's `resources.limits.memory`. The container shows `State: Terminated, Reason: OOMKilled, Exit Code: 137` (128 + signal 9). It is a hard kill, not a graceful shutdown." },
    { q: "What is exit code 137?", a: "Exit code 137 is 128 + 9, meaning the process received SIGKILL. In a container context the usual sender is the kernel OOM killer enforcing the cgroup memory limit, so 137 almost always means OOMKilled. Confirm with `kubectl describe pod` — the Last State reason will say OOMKilled if it was memory rather than a manual kill." },
    { q: "How do I stop a pod being OOMKilled?", a: "First decide whether the limit is too low or the app uses too much memory. Raise `limits.memory` only if the working set is genuinely that large; otherwise fix the real cause — a memory leak, an unbounded cache or query result, or a runtime (JVM, Node.js, Python) whose heap is not sized for the container limit. Setting requests == limits (Guaranteed QoS) prevents eviction under node pressure but does not fix a leak." },
    { q: "Is OOMKilled the same as node memory pressure eviction?", a: "No. OOMKilled is per-container: one container exceeded its own cgroup limit and the kernel killed it. Node MemoryPressure eviction is the kubelet reclaiming memory across the whole node by evicting whole pods (based on QoS and usage-above-requests) when the node itself is running out. They have different signals, different blast radius, and different fixes." },
  ],
} as const;
