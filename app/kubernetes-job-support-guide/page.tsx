import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Kubernetes Job Support Guide — Pods, Helm, ArgoCD & Cluster Troubleshooting | Proxy Tech Support',
  description: 'Real-time Kubernetes support for engineers dealing with pod failures, deployment rollouts, Helm chart errors, ArgoCD sync issues, ingress problems, cluster networking, and DevOps/SRE delivery pressure.',
  canonical: 'https://proxytechsupport.com/kubernetes-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Kubernetes Job Support Guide: Debugging Pods, Deployments, and Cluster Issues"
      intro="Kubernetes is the operational backbone of modern cloud-native applications — and its complexity means that even experienced engineers regularly hit issues that require expert guidance to resolve quickly. This guide covers the most common Kubernetes production failures and the diagnostic approaches that resolve them."
      sections={[
        { heading: 'Pod Failure Diagnosis', body: 'Pod failures have distinct patterns that map to specific root causes:', bullets: ['CrashLoopBackOff — application is crashing on startup; check container logs for the startup error', 'OOMKilled — pod exceeded memory limit; check memory usage and increase limits or optimise the application', 'ImagePullBackOff — image cannot be pulled; verify image tag exists and registry credentials are valid', 'Pending — pod cannot be scheduled; check node resources, taints/tolerations, and affinity rules', 'Error — container exited with non-zero code; check logs for the specific error'] },
        { heading: 'Deployment and Rollout Issues', body: 'Deployment rollouts fail or stall for several reasons: readiness probe failures preventing the new version from receiving traffic, insufficient cluster resources for new replica sets, PodDisruptionBudget constraints preventing old pod termination, and ConfigMap or Secret changes not propagating to running pods.' },
        { heading: 'Helm Chart Debugging', body: 'Helm issues typically fall into three categories: template rendering errors (chart syntax issues, missing values), hook execution failures (pre-install or post-upgrade hooks timing out), and upgrade failures due to immutable field changes. Helm diff and helm template are essential debugging tools.' },
        { heading: 'ArgoCD GitOps Sync Failures', body: 'ArgoCD sync failures are usually caused by: resource health check failures (application is Degraded rather than Healthy), RBAC permissions preventing ArgoCD from managing certain resource types, OutOfSync status despite applying changes (annotation differences, server-side apply conflicts), or sync hooks that are timing out.' },
        { heading: 'Ingress and Networking Problems', body: 'Ingress issues include: 503 errors from the backend (service selector mismatch or pods not ready), certificate errors (TLS secret missing or cert-manager certificate not yet issued), path-based routing not matching (regex vs prefix path types), and CORS issues in ingress annotations.' },
        { heading: 'Cluster Troubleshooting Approaches', body: 'Systematic cluster troubleshooting starts with the application layer (pod logs, events), then the scheduling layer (node resources, taints, affinity), then the networking layer (service endpoints, DNS resolution, network policies), then the storage layer (PVC binding, storage class provisioner). Working through these layers in order is faster than jumping between them randomly.' },
      ]}
      relatedLinks={[
        { href: '/devops-job-support-usa/', label: 'DevOps Job Support USA' },
        { href: '/sre-job-support-usa/', label: 'SRE Job Support USA' },
        { href: '/cloud-job-support-usa/', label: 'Cloud Job Support USA' },
      ]}
      relatedGuides={[
        { href: '/devops-job-support-guide/', label: 'DevOps Job Support Guide' },
        { href: '/sre-job-support-guide/', label: 'SRE Job Support Guide' },
        { href: '/aws-job-support-guide/', label: 'AWS Job Support Guide' },
      ]}
      faqs={[
        { q: 'What does CrashLoopBackOff mean and how do you fix it?', a: 'The container is starting, crashing, and Kubernetes is restarting it repeatedly. Check kubectl logs [pod-name] --previous to see the logs from the failed container. The application is throwing an error on startup — fix the error in the application or its configuration.' },
        { q: 'How do you debug an ArgoCD sync that keeps failing?', a: 'Check the Application resource events in ArgoCD UI. Look at the sync operation details for the specific resource failing. Common causes: resource health check failing (readiness probe), RBAC permission issue, or immutable field change requiring delete and recreate.' },
        { q: 'What causes Helm chart deployment failures?', a: 'Template rendering errors (run helm template first), hook timeout (pre-install job exceeding timeout), upgrade failing due to immutable field (spec.selector cannot be changed on existing Deployment), and values not overriding correctly (wrong value path in values.yaml).' },
        { q: 'How do you diagnose Kubernetes networking issues?', a: 'Test DNS resolution with kubectl exec. Check NetworkPolicy resources that might be blocking traffic. Verify Service endpoints with kubectl get endpoints. Use kubectl port-forward to test directly to a pod, bypassing the Service layer.' },
        { q: 'When should you restart vs. rebuild a pod?', a: 'Restart (delete pod to trigger recreation) when the pod is in a bad state but the underlying configuration is correct. Rebuild (update the Deployment or apply a new image) when you have made a configuration or code change. Do not delete a pod without understanding why it is in a bad state.' },
      ]}
      ctaHref="/devops-job-support-usa/"
      ctaLabel="Get Kubernetes Support"
    />
  );
}
