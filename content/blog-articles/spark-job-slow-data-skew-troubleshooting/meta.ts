export const meta = {
  slug: "spark-job-slow-data-skew-troubleshooting",
  permalink: "/blog/spark-job-slow-data-skew-troubleshooting/",
  title: "Spark Job Running Slow: Data Skew and Shuffle Troubleshooting",
  description: "A production method for a slow Apache Spark job — reading the Spark UI to separate data skew from spill, shuffle and small-file problems, and the fixes (AQE, salting, broadcast joins, partitioning) that match each cause.",
  date: "2026-09-07",
  keywords: "spark job slow, spark data skew, spark shuffle, straggler task, spark ui stages, adaptive query execution, salting skew, broadcast join, spark spill, partition tuning, databricks performance",
  about: "Apache Spark performance and data skew troubleshooting",
  faqs: [
    { q: "Why is my Spark job slow when most tasks finish quickly?", a: "A few tasks running far longer than the rest is the classic signature of data skew — one or a handful of partitions hold most of the rows (often because a join or groupBy key is dominated by a few values like null or a default). Those tasks become stragglers that hold up the whole stage. Open the Spark UI, find the slow stage, and look at the task duration distribution and shuffle read size per task; a large max-vs-median gap confirms skew." },
    { q: "How do I fix data skew in Spark?", a: "Match the fix to the mechanism. Enable Adaptive Query Execution (AQE) so Spark can split skewed partitions at runtime. For skewed joins where one side is small, use a broadcast join to avoid the shuffle entirely. For skewed aggregations or large-large joins, salt the hot key (add a random suffix to spread it across partitions, then aggregate in two passes). Filtering out null/sentinel keys before the join often removes the dominant skew source." },
    { q: "What is shuffle spill and why does it slow Spark down?", a: "Spill happens when a task's data does not fit in execution memory and Spark writes it to disk during a shuffle or aggregation, then reads it back — turning fast in-memory work into slow disk I/O. In the Spark UI, spill (memory and disk) shows per stage. Causes include too few shuffle partitions (each too big), skew concentrating data in a task, or under-sized executors. Increasing parallelism, fixing skew, or right-sizing memory reduces spill." },
    { q: "How do I read the Spark UI to find a bottleneck?", a: "Start at the Stages tab and find the longest-running stage. Open it and look at the task summary metrics: if max task duration and shuffle read are far above the median, you have skew/stragglers. Large spill (memory/disk) means memory pressure. A huge number of tiny tasks or input files means a small-files problem. GC time dominating means memory tuning. Each pattern points to a different fix rather than blindly adding executors." },
  ],
} as const;
