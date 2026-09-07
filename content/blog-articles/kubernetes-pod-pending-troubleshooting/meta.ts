export const meta = {
  slug: "kubernetes-pod-pending-troubleshooting",
  permalink: "/blog/kubernetes-pod-pending-troubleshooting/",
  title: "Kubernetes Pod Pending: A Production Troubleshooting Decision Tree",
  description: "A senior engineer's decision tree for a Kubernetes pod stuck in Pending — separating scheduler failures from resource, volume, affinity, taint and autoscaler causes using kubectl describe, events and node conditions.",
  date: "2026-09-07",
  keywords: "kubernetes pod pending, pod stuck pending, kubectl describe pod, FailedScheduling, insufficient cpu memory, node selector affinity taints, pvc pending, cluster autoscaler, kubernetes troubleshooting",
  about: "Kubernetes pod scheduling troubleshooting",
  faqs: [
    { q: "Why is my Kubernetes pod stuck in Pending?", a: "Pending means the pod is accepted by the API server but not yet running on a node. The cause is almost always one of: the scheduler cannot find a node that fits the pod's resource requests, a node selector / affinity / taint rule excludes every node, a PersistentVolumeClaim has not bound, or the cluster is at capacity and waiting on the autoscaler. Run `kubectl describe pod <name>` and read the Events at the bottom — a FailedScheduling event names the exact reason." },
    { q: "How do I see why the scheduler rejected a pod?", a: "`kubectl describe pod <name>` shows a FailedScheduling event with a per-node breakdown, e.g. '3 Insufficient cpu, 2 node(s) had untolerated taint'. That message tells you whether it is a resource, affinity, or taint problem. `kubectl get events --sort-by=.lastTimestamp` gives the cluster-wide view including autoscaler activity." },
    { q: "Does Pending mean the image failed to pull?", a: "No. An image pull problem shows the pod as ContainerCreating or ImagePullBackOff, not Pending — the pod has already been scheduled to a node by then. Pending is specifically a pre-scheduling / pre-binding state, so image and registry issues are a separate branch of the tree." },
    { q: "How long should a pod stay Pending before I worry?", a: "On a cluster with spare capacity, scheduling is sub-second. A few seconds to a couple of minutes is normal when the cluster autoscaler has to add a node. Beyond that, or if the FailedScheduling event repeats with no autoscaler scale-up, treat it as stuck and work the decision tree." },
  ],
} as const;
