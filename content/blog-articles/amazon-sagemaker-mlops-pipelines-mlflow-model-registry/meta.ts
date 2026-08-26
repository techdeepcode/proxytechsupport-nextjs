export const meta = {
  slug: "amazon-sagemaker-mlops-pipelines-mlflow-model-registry",
  title: "Amazon SageMaker MLOps Architecture: Pipelines, MLflow & Model Registry in Production",
  description: "How SageMaker Pipelines, Managed MLflow and the Model Registry fit together for production MLOps — orchestration, experiment tracking, model versioning and approval gates, CI/CD, and common failure modes.",
  date: "2026-08-26",
  keywords: "sagemaker mlops, sagemaker pipelines, sagemaker mlflow, model registry, model approval workflow, ml cicd aws, sagemaker mlops architecture, ml model versioning",
  permalink: "/blog/amazon-sagemaker-mlops-pipelines-mlflow-model-registry/",
  about: "Amazon SageMaker MLOps architecture",
  faqs: [
    { q: "What is SageMaker MLflow?", a: "SageMaker Managed MLflow is a fully managed MLflow tracking server integrated with SageMaker. It records experiment runs, parameters, metrics, tags and artifacts so training is reproducible and models are comparable, without you operating an MLflow server. It complements the Model Registry, which handles versioning and deployment approval." },
    { q: "What does the SageMaker Model Registry do?", a: "The Model Registry versions trained models into model package groups, stores their metadata and lineage, and carries an approval status (Pending, Approved, Rejected) that gates deployment. CI/CD deploys only Approved versions, giving you an auditable path from a training run to what is live in production." },
    { q: "How do Pipelines, MLflow and Model Registry work together?", a: "A SageMaker Pipeline orchestrates the steps (process, train, evaluate, register, deploy). Each training step logs to MLflow for experiment tracking; if evaluation passes, the pipeline registers a new version in the Model Registry as Pending; an approval step (manual or automated) flips it to Approved, which triggers CI/CD deployment. Together they give reproducibility, governance and automation." },
  ],
} as const;
