import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'AWS Job Support Guide — EC2, ECS/EKS, Lambda, CloudWatch & IAM Help | Proxy Tech Support',
  description: 'Real-time AWS support for engineers dealing with EC2, ECS/EKS, Lambda, S3, IAM permissions, CloudWatch, VPC networking, deployment failures, and production AWS troubleshooting.',
  canonical: 'https://proxytechsupport.com/aws-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="AWS Job Support Guide: Real-Time Help for AWS Engineers and Cloud Developers"
      intro="AWS is the dominant cloud platform in the US market, and its breadth means engineers regularly encounter services and configurations outside their daily experience. This guide covers the most common AWS production issues across compute, networking, storage, and serverless — and how expert support resolves them quickly."
      sections={[
        { heading: 'IAM Permission Issues', body: 'IAM is responsible for a surprisingly large share of AWS production issues. Permission denied errors are often the first sign of a misconfigured IAM role or policy. Common scenarios include Lambda functions that cannot access S3 buckets (missing resource-level permissions), ECS tasks that cannot pull from ECR (missing AmazonEC2ContainerRegistryReadOnly), and cross-account access failures in multi-account architectures.' },
        { heading: 'EC2 and Autoscaling Issues', body: 'EC2 issues range from instance launch failures (service quota limits, AMI availability) to autoscaling not triggering as expected (CloudWatch alarm thresholds, cooldown periods, lifecycle hooks). For ECS on EC2, insufficient ECS container instance capacity preventing task placement is a common production bottleneck.' },
        { heading: 'ECS and EKS Container Deployment', body: 'ECS task failures are usually one of: task definition configuration errors, IAM role issues on the task, insufficient memory/CPU in the cluster, or networking failures (security group, VPC routing). EKS adds Kubernetes-level complexity on top — pod scheduling failures, node group autoscaling, and CNI networking issues are the most common EKS support requests.' },
        { heading: 'Lambda Functions', body: 'Lambda issues in production include cold start latency spikes (provisioned concurrency, container reuse), timeout errors (default 3-second timeout insufficient for workload), memory-related failures (Lambda allocated memory affects both RAM and CPU), and VPC-related networking issues (Lambda in VPC cannot reach internet without NAT gateway).' },
        { heading: 'CloudWatch Monitoring and Alerting', body: 'CloudWatch is AWS\'s native observability service, but setting it up meaningfully requires understanding metric namespaces, alarm dimensions, and log insight queries. Common issues include alarms in INSUFFICIENT_DATA state (metric not yet published), log groups not retaining logs as expected, and Lambda logs not appearing (execution role missing CloudWatch Logs permissions).' },
        { heading: 'VPC Networking and S3', body: 'VPC networking issues are among the hardest to debug without systematic tools. Security group rule conflicts, route table misconfigurations, and subnet CIDR exhaustion each manifest as connection failures that can look identical from the application side. S3 issues most commonly involve bucket policies, object ACLs, CORS configuration for web applications, and presigned URL expiry.' },
      ]}
      relatedLinks={[
        { href: '/aws-job-support/', label: 'AWS Job Support' },
        { href: '/cloud-job-support-usa/', label: 'Cloud Job Support USA' },
        { href: '/cloud-technologies-job-support/', label: 'Cloud Technologies Job Support' },
      ]}
      relatedGuides={[
        { href: '/devops-job-support-guide/', label: 'DevOps Job Support Guide' },
        { href: '/kubernetes-job-support-guide/', label: 'Kubernetes Job Support Guide' },
        { href: '/azure-job-support-guide/', label: 'Azure Job Support Guide' },
      ]}
      faqs={[
        { q: 'What are the most common AWS production issues?', a: 'IAM permission errors, ECS task placement failures, Lambda timeouts, VPC networking misconfigurations, and S3 bucket policy issues are the most frequent AWS production problems.' },
        { q: 'How do you debug an IAM permission denied error?', a: 'Use IAM Policy Simulator to test the exact permission. Check the resource-based policy (S3 bucket policy, KMS key policy) in addition to the identity-based policy. Look for explicit deny statements that override allows. Check whether the action requires a condition (MFA, VPC endpoint, etc.).' },
        { q: 'What causes Lambda timeouts and how do you fix them?', a: 'The most common causes are: default timeout (3 seconds) too short for the workload, VPC cold start latency, synchronous downstream API calls that are slow, and memory pressure causing slower execution. Increase the timeout, use provisioned concurrency for latency-sensitive functions, and profile execution time with X-Ray.' },
        { q: 'How do you troubleshoot EKS pod failures?', a: 'kubectl describe pod gives events. kubectl logs gives container output. Common EKS-specific issues include node group not having capacity, IAM roles for service accounts (IRSA) misconfigured, and aws-vpc-cni networking issues causing IP address exhaustion.' },
        { q: 'What AWS networking issues come up most in production?', a: 'Security group rules blocking expected traffic, route tables missing routes to internet gateway or NAT gateway, and VPC peering routes not bidirectionally configured are the most common AWS networking production issues.' },
      ]}
      ctaHref="/aws-job-support/"
      ctaLabel="Get AWS Job Support"
    />
  );
}
