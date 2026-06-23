export const meta = {
  slug: "2026-06-22-primavera-p6-scheduler-interview-questions-critical-path-baseline-wbs",
  title: "Primavera P6 Scheduler Interview Questions and Answers — Critical Path, Float, Baseline & WBS",
  description: "Real Primavera P6 scheduler interview questions with short answers covering milestones, CPM, total float, free float, baselines, WBS, EVM, activity codes, out-of-sequence logic, and P6 task simulations.",
  date: "2026-06-22",
  keywords: "Primavera P6 interview questions, Primavera P6 scheduler interview, P6 planner interview questions, Primavera P6 critical path questions, P6 baseline interview questions, P6 WBS questions, Primavera P6 float questions, out of sequence progress P6, P6 schedule log, P6 Trace Logic, P6 data date, EVM in Primavera P6, project scheduler interview questions",
  layout: "interview-post",
  faqs: [
    {
      q: "What are the most common Primavera P6 interview topics?",
      a: "The most common topics are CPM, critical path, total float, free float, WBS, baselines, milestones, activity relationships, Data Date, schedule log, progress updates, and out-of-sequence progress.",
    },
    {
      q: "Is Primavera P6 based on CPM?",
      a: "Yes. Primavera P6 is primarily based on the Critical Path Method. It uses activities, durations, calendars, constraints, and relationships to calculate schedule dates and float.",
    },
    {
      q: "What is the difference between Total Float and Free Float in P6?",
      a: "Total Float is the delay allowed before the project finish is affected. Free Float is the delay allowed before the successor activity is affected.",
    },
    {
      q: "What is the purpose of a baseline in Primavera P6?",
      a: "A baseline is used to compare the current schedule against the original approved plan. It helps measure variance, slippage, and project performance.",
    },
    {
      q: "How do you identify out-of-sequence progress in P6?",
      a: "Run the scheduler and review the Schedule Log. You can also use filters and relationship analysis to find activities that started before their predecessors were complete.",
    },
    {
      q: "What is Trace Logic in Primavera P6?",
      a: "Trace Logic is a visual tool used to review predecessor and successor relationships for a selected activity. It helps identify driving logic and schedule issues.",
    },
    {
      q: "What does Data Date mean in Primavera P6?",
      a: "Data Date is the date from which Primavera P6 calculates remaining work and schedule status. It is critical during progress updates.",
    },
    {
      q: "How many baselines can be assigned in Primavera P6?",
      a: "Primavera P6 allows up to four assigned baselines: Project Baseline, Primary User Baseline, Secondary User Baseline, and Tertiary User Baseline.",
    },
    {
      q: "What is the best way to prepare for a Primavera P6 simulation test?",
      a: "Practice creating projects, adding activities, assigning relationships, creating baselines, assigning baselines, running the scheduler, reviewing schedule logs, and using Trace Logic.",
    },
    {
      q: "Does ProxyTechSupport provide real-time Primavera P6 interview support?",
      a: "Yes. ProxyTechSupport provides real-time Primavera P6 interview support, project scheduler preparation, technical interview assistance, and job support.",
    },
  ],
} as const;
