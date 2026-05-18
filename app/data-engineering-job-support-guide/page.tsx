import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Data Engineering Job Support Guide — SQL, ETL, Snowflake, Databricks & Pipeline Help | Proxy Tech Support',
  description: 'Real-time data engineering support for dealing with SQL performance issues, ETL pipeline failures, Snowflake/Databricks problems, AWS Glue errors, Python data pipeline bugs, and production data validation.',
  canonical: 'https://proxytechsupport.com/data-engineering-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Data Engineering Job Support Guide: SQL, ETL, and Pipeline Debugging"
      intro="Data engineering is where production pressure meets data quality requirements. When a pipeline fails, downstream analytics, ML models, and business reports are all affected. This guide covers the most common data engineering job support scenarios across SQL, ETL, Snowflake, Databricks, and Python pipelines."
      sections={[
        { heading: 'SQL Query Performance and Optimization', body: 'SQL performance issues in production data environments include queries running significantly longer than expected (missing indexes, query planner choosing wrong join order), queries that run fine on small datasets but time out on production volumes (full table scans, Cartesian products), and window function performance in large datasets. Snowflake-specific issues include warehouse sizing, query spillage to disk, and result cache invalidation.' },
        { heading: 'ETL Pipeline Failures', body: 'ETL failures can be silent (data is processed but wrong) or hard (pipeline crashes). Common hard failure causes include:', bullets: ['AWS Glue job running out of memory on large datasets', 'dbt model failing due to SQL dialect incompatibility', 'Airflow DAG task timing out before data source is ready', 'Schema evolution breaking downstream transformations', 'Source system API rate limiting causing partial data pulls'] },
        { heading: 'Snowflake and Databricks Debugging', body: 'Snowflake debugging involves query profiling (identify slow operators), warehouse credit usage analysis (identify expensive queries), and data sharing permission issues. Databricks debugging focuses on Spark executor failures (OOM, disk space), Delta Lake transaction log conflicts, cluster autoscaling not triggering as expected, and notebook environment dependency management.' },
        { heading: 'Python Data Pipeline Bugs', body: 'Python data pipeline bugs include pandas DataFrames with unexpected dtypes causing downstream failures, PySpark transformations producing incorrect results due to null handling differences, Airflow XCom size limits exceeded when passing large objects between tasks, and environment dependency conflicts in data engineering Python environments.' },
        { heading: 'Data Validation and Quality Issues', body: 'Production data quality issues manifest as reports showing wrong numbers, ML models behaving unexpectedly due to training data changes, or downstream systems receiving malformed records. Root cause investigation involves checking source data for schema changes, transformation logic for edge case handling, and data type coercions that produce unexpected results.' },
        { heading: 'Orchestration Failures', body: 'Airflow DAG failures are one of the most frequent data engineering support requests. Common scenarios: task timeout (longer than DAG schedule interval), upstream task failure propagating via TriggerRule, XCom data not passing correctly between tasks, Airflow scheduler delay causing data freshness SLA failures, and Celery worker configuration causing tasks to queue indefinitely.' },
      ]}
      relatedLinks={[
        { href: '/data-engineer-python-job-support/', label: 'Data Engineer Python Job Support' },
        { href: '/databases-data-platforms-job-support/', label: 'Databases & Data Platforms Job Support' },
        { href: '/data-science-job-support/', label: 'Data Science Job Support' },
      ]}
      relatedGuides={[
        { href: '/ai-ml-job-support-guide/', label: 'AI/ML Job Support Guide' },
        { href: '/mlops-job-support-guide/', label: 'MLOps Job Support Guide' },
        { href: '/production-issue-support-for-it-professionals/', label: 'Production Issue Support Guide' },
      ]}
      faqs={[
        { q: 'What are the most common data pipeline failures?', a: 'Schema evolution breaking downstream transformations, source system rate limiting causing partial data pulls, memory exhaustion on large datasets, orchestration dependency failures (upstream task late), and silent data quality issues from null handling edge cases.' },
        { q: 'How do you debug a Snowflake query that is running slowly?', a: 'Use the Snowflake query profile to identify the slowest operators. Check for full table scans (missing clustering keys), large spill to disk (warehouse too small), and inefficient join order. Use EXPLAIN to see the query execution plan before running expensive queries.' },
        { q: 'What causes Airflow DAG failures and how do you fix them?', a: 'Task timeout (extend timeout or optimise the task), operator dependency missing from requirements, DAG import error in Python (syntax error in DAG file), scheduler performance issues (database connection pool exhausted), and XCom serialisation errors from passing non-JSON-serialisable objects.' },
        { q: 'How do you handle data quality issues in production pipelines?', a: 'Add data quality checks at pipeline entry points (Great Expectations, dbt tests, custom SQL assertions). Alert before bad data reaches production consumers. For existing bad data, implement quarantine tables to hold records that fail validation rather than failing the entire pipeline.' },
        { q: 'What is the difference between data engineering support and data science support?', a: 'Data engineering support focuses on pipelines, infrastructure, and data movement — ETL, orchestration, SQL performance, storage platforms. Data science support focuses on modelling, analysis, and insight generation — Python notebooks, statistical analysis, ML model evaluation.' },
      ]}
      ctaHref="/data-engineer-python-job-support/"
      ctaLabel="Get Data Engineering Support"
    />
  );
}
