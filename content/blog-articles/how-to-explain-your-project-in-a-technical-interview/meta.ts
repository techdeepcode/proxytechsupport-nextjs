export const meta = {
  slug: "how-to-explain-your-project-in-a-technical-interview",
  permalink: "/blog/how-to-explain-your-project-in-a-technical-interview/",
  title: "How to Explain a Complex Project in a Technical Interview",
  description: "A structure for the project deep-dive round — context, your role, architecture, key decisions and trade-offs, failure and recovery, results — and how to survive the follow-up questions that separate owners from observers.",
  date: "2026-09-07",
  keywords: "how to explain project in interview, project deep dive interview, technical interview project walkthrough, architecture interview questions, follow-up questions interview, senior engineer interview project, STAR for engineers",
  about: "Explaining an engineering project in a technical interview",
  faqs: [
    { q: "How should I structure explaining a project in an interview?", a: "Use a layered structure: one-sentence context (what the system did and who used it), your specific role and scope, the architecture at a high level, the two or three decisions that mattered and the trade-offs behind them, a real problem or failure and how you handled it, and the measurable result. Lead with the shape of the system, then go deep only where the interviewer pulls — don't narrate the whole history linearly." },
    { q: "How do I handle deep follow-up questions about my project?", a: "Expect the interviewer to probe every claim: why that database, what broke, what you'd change, how you'd scale it 10x. The way to survive is to only present projects you genuinely owned and can defend three levels deep. When you hit the edge of your knowledge, say so honestly and reason from first principles rather than bluffing — interviewers detect fabricated depth quickly and it costs more than admitting a boundary." },
    { q: "What makes a project explanation impressive versus forgettable?", a: "Specific decisions and trade-offs, not features. 'We used Kafka' is forgettable; 'we chose Kafka over a queue because we needed replay and multiple consumers, accepting the operational overhead' shows judgment. Impressive answers name the alternative you rejected and why, describe a real failure and what you learned, and tie the work to a measurable outcome. Judgment and ownership are the signal, not the size of the system." },
    { q: "Should I pick my biggest project or the one I know best?", a: "The one you know best. The deep-dive round rewards depth of ownership, and an interviewer probing a huge project you only touched at the edges will quickly expose the gap. A smaller system you designed, debugged and operated end to end gives you defensible depth on every follow-up, which reads as far stronger than name-dropping a flagship project you can't explain at the component level." },
  ],
} as const;
