You are working inside the existing ProxyTechSupport codebase for:

https://proxytechsupport.com/

Use this live research source as your primary discovery source:

https://arxiv.org/

Your job is NOT to create a generic arXiv summary section.

Your job is to:

1. Inspect arXiv.
2. Find fresh, high-value technical research connected to recent real-world incidents.
3. Identify one strong research theme with meaningful search demand.
4. Build an original, in-depth ProxyTech research publication cluster around it.
5. Implement the complete research UI, content, SEO, diagrams, references, and internal linking inside the existing ProxyTechSupport site.

==================================================
FIRST: RESEARCH BEFORE IMPLEMENTATION
=====================================

Before touching the website code, browse:

https://arxiv.org/

Inspect relevant recent papers, especially from the latest available period.

Focus heavily on:

cs.AI
cs.LG
cs.CL
cs.CR
cs.SE
cs.DC
cs.DB
cs.NI
cs.OS
cs.MA

Also search arXiv for recent research connected to:

AI agents
autonomous agents
cybersecurity
AI agent security
sandbox escape
containment
prompt injection
agentic AI attacks
LLM security
zero-day exploitation
AI coding agents
AI infrastructure
AI IAM
agent identity
RAG security
MCP security
cloud security
Kubernetes security
DevOps automation
AIOps
LLMOps
distributed systems
database agents
text-to-SQL agents
tool-using agents
multi-agent systems

Do NOT limit discovery to these exact phrases.

Follow promising references, related papers, authors, and newer papers.

==================================================
SECOND: CONNECT RESEARCH TO RECENT INCIDENTS
============================================

For each promising research area, search for recent real-world incidents from authoritative sources.

Prioritize:

official company disclosures
security advisories
incident reports
major security vendors
Google Threat Intelligence
Microsoft Security
AWS Security
Cloudflare
OpenAI
Anthropic
Hugging Face
GitHub
CISA
NIST
major reputable news organizations

The ideal cluster has BOTH:

RECENT INCIDENT / ACTIVE PROBLEM

*

STRONG arXiv RESEARCH

Do not create an incident connection unless there is evidence.

==================================================
CONTENT OPPORTUNITY SCORING
===========================

Score each candidate theme out of 10 for:

Freshness
Research depth
Search-interest potential
Technical depth
Engineering relevance
Longevity
ProxyTech relevance
Commercial adjacency
Number of credible sources
Ability to create multiple non-overlapping publications

Example:

Theme:
Autonomous AI Agent Security

Freshness: 10
Research depth: 9
Search potential: 10
Engineering relevance: 10
Longevity: 10
ProxyTech relevance: 10
Source quality: 10
Cluster expansion potential: 10

Do this analysis internally.

Select the strongest ONE.

Do not create five weak clusters.

==================================================
STRONG PREFERENCE
=================

If current evidence still supports it, prioritize investigation around:

AUTONOMOUS AI AGENT SECURITY

Potential angles:

AI agent sandbox escape
agent containment
tool permissions
agent identity
IAM for AI agents
prompt injection
agent-to-agent attacks
zero-day exploitation
cybersecurity benchmarks
runtime isolation
network egress
human approval
short-lived credentials
secure agent architecture

But DO NOT force this topic if fresher or stronger arXiv-backed evidence points to a better opportunity.

Research first.

==================================================
CRITICAL CONTENT RULE
=====================

DO NOT produce:

paper summaries
abstract rewrites
“latest arXiv papers”
news summaries
generic AI articles
basic “what is” content
thin SEO pages

The research should be used as raw evidence.

The final ProxyTech publication must answer:

What new problem does this research expose?

Why does it matter in production?

What happened technically?

Which architectural assumption failed?

What does the experiment actually prove?

What does it NOT prove?

How should engineers redesign the system?

What are the production failure modes?

What should practitioners monitor?

What remains unknown?

==================================================
ARXIV RESEARCH EXTRACTION
=========================

For every important arXiv paper used, extract:

title
authors
submission date
latest revision date
arXiv identifier
categories
research question
methodology
experimental environment
dataset
benchmark if present
baseline
result
reported metric
limitations
threats to validity
authors' conclusions

Then separately write:

ProxyTech engineering interpretation

Do not mix the authors' claims with ProxyTech interpretation.

==================================================
DO NOT TRUST ABSTRACTS ALONE
============================

When a paper is central to an article:

read the actual paper.

Inspect:

introduction
methodology
architecture
experiments
results
limitations
discussion
conclusion

If figures or tables are important, interpret them carefully.

Do not claim something based only on title/abstract when the paper provides nuance.

==================================================
SOURCE HIERARCHY
================

Use sources in this preference order:

1. Original arXiv paper
2. Original academic project/repository
3. Official incident/security disclosure
4. Official vendor documentation
5. Government/security advisory
6. High-quality independent reporting

Avoid:

content farms
SEO blogs
copy sites
AI summary websites
anonymous reposts

==================================================
VERIFY RECENCY
==============

Current date is September 2026.

Prefer research and incidents from:

2026

Then use 2025 or older foundational work only where necessary.

Do not describe an older paper as recent.

Record exact dates.

==================================================
AFTER RESEARCH: OUTPUT A SHORT INTERNAL PLAN
============================================

Before implementation, determine:

Selected incident/theme
Why it deserves a cluster
Primary arXiv sources
Primary incident sources
Search questions users will likely ask
Evergreen topics
Proposed flat URLs

Then proceed with implementation.

Do not stop and ask permission.

==================================================
URL ARCHITECTURE
================

All individual research publication URLs MUST be flat.

Correct:

proxytechsupport.com/example-research-topic/

Incorrect:

proxytechsupport.com/research/category/example-research-topic/

Create:

/research/

only as the research archive/discovery hub.

The publications themselves remain flat.

==================================================
CREATE 8–12 RESEARCH PUBLICATIONS
=================================

Based on actual research discovered from arXiv, generate 8–12 deeply differentiated pages.

One should be the main incident/research pillar.

Others should address separate engineering questions.

Do not create pages just to reach a number.

Avoid keyword cannibalization.

Example pattern ONLY if agent security remains the selected topic:

/openai-hugging-face-ai-agent-incident-2026/
/autonomous-ai-agent-security/
/ai-agent-sandbox-escape-security/
/ai-agent-containment/
/ai-agent-access-control/
/ai-agent-identity-security/
/ai-agent-zero-day-exploitation/
/ai-agent-cybersecurity-benchmarks/
/ai-agent-prompt-injection-security/
/ai-agent-security-architecture/

But research may justify better titles/slugs.

Choose based on evidence and search intent.

==================================================
NEW RESEARCH DESIGN
===================

Do NOT use the existing ProxyTech:

blog article layout
interview layout
job-support layout
service layout
knowledge-base article layout

Build a brand-new research publication design.

First inspect all existing layouts so you know what NOT to duplicate.

The research experience should feel like:

technical research journal
engineering lab
security research publication
systems architecture report

It should NOT feel like:

marketing landing page
generic blog
news site
SEO farm

==================================================
RESEARCH ARCHIVE
================

Create:

/research/

This should behave like a research discovery interface inspired conceptually by scholarly archives, but DO NOT copy arXiv's UI.

Include:

Featured Research

Latest Research

Active Research Clusters

Research Areas

Research Questions

Recent Papers We Are Following

Incident Research

Engineering Evidence

Potential research areas:

Artificial Intelligence
AI Agents
Cybersecurity
Cloud Systems
DevOps / SRE
Data Engineering
Software Engineering
Distributed Systems
LLMOps / RAG

==================================================
FLAGSHIP ARTICLE STRUCTURE
==========================

The main incident article must feel like a technical investigation.

Use a narrative such as:

Research Thesis

Incident Timeline

System Architecture Before Failure

Boundary That Failed

Mechanism

Evidence

Relevant Academic Research

Architecture Reconstruction

Counterfactual Secure Architecture

Detection Opportunities

Engineering Controls

Remaining Unknowns

What This Changes for Production AI

References

Do NOT use this exact structure mechanically.

Use whatever structure best fits the evidence.

==================================================
ENGAGING READING PATTERN
========================

Long-form research must NOT become walls of text.

Use a consistent reading rhythm:

deep narrative
↓
evidence
↓
visual architecture
↓
technical interpretation
↓
research result
↓
failure scenario
↓
engineering decision
↓
next question

Every 300–600 words, give the reader a meaningful visual or evidence interruption.

Not decorative filler.

==================================================
CREATE THESE NEW RESEARCH COMPONENT TYPES
=========================================

Implement reusable components such as:

ResearchMasthead
ResearchMeta
ResearchBadge
ResearchAbstract
ResearchTOC
ResearchProgress
ResearchTimeline
ResearchPaperCard
ResearchEvidenceCard
ResearchFinding
ResearchMetric
ResearchQuestion
ResearchArchitecture
ResearchFailureMode
ResearchDecision
ResearchCounterfactual
ResearchLimitations
ResearchReferenceList
ResearchSeriesNav
ResearchRelated
ResearchArchiveCard

Use naming conventions appropriate to the existing framework.

==================================================
RESEARCH METADATA
=================

Every publication should visibly show:

Research Area
Publication Type
Published
Updated
Evidence Review Date
Evidence Confidence
Reading Time
Authors
Primary Evidence Types

Example:

RESEARCH PROFILE

Research Area
AI Agent Security

Publication Type
Technical Research Analysis

Evidence Base
Academic Research
Primary Security Disclosure
Threat Intelligence

Evidence Reviewed
September 2026

Evidence Confidence
High

==================================================
EVIDENCE LABELS
===============

Create understated evidence labels:

INCIDENT
PRIMARY SOURCE
RESEARCH
EXPERIMENTAL
ANALYSIS
OPEN QUESTION

Definitions:

INCIDENT
Verified incident observation.

PRIMARY SOURCE
First-party disclosure.

RESEARCH
Academic finding.

EXPERIMENTAL
Result from a specific controlled study.

ANALYSIS
ProxyTech engineering interpretation.

OPEN QUESTION
Insufficient evidence for firm conclusion.

==================================================
ARXIV PAPER CARDS
=================

Each important arXiv source should be represented using a proper research component.

Show:

Paper title
Authors
Date
arXiv ID
Categories

Research question

Method

Key finding

Important metric

Limitations

Why it matters to this publication

Link:
Read original paper

Do NOT reproduce entire abstracts.

==================================================
RESEARCH DEPTH
==============

Each major page should normally be 2500–4500+ meaningful words where evidence supports it.

Do not pad.

Go deep into:

architecture
protocol
permissions
runtime behavior
identity
networking
credentials
execution
failure modes
detection
observability
evaluation
benchmarks
tradeoffs
limitations

==================================================
NATIVE TECHNICAL DIAGRAMS
=========================

Create diagrams using:

HTML
CSS
SVG
existing lightweight project primitives

Avoid screenshots.

Examples:

Trust boundaries

Agent execution flow

Tool invocation

Network escape path

IAM delegation

Prompt injection propagation

Secure agent architecture

Human approval boundaries

Incident timeline

Benchmark ladder

Attack/defense model

Every visual needs a text equivalent for accessibility.

==================================================
FAILURE MODE ANALYSIS
=====================

Every relevant page should have concrete production failure modes.

Example format:

FAILURE MODE

Agent gains unintended outbound network access.

MECHANISM

Execution environment permits DNS and arbitrary HTTPS traffic.

WHY EXISTING CONTROL FAILED

Sandbox isolated filesystem/processes but did not enforce destination-aware egress policy.

SIGNALS

unexpected DNS
new external destination
tool-created network client
credential use outside expected service
unusual data transfer

CONTROL

deny-by-default egress
allowlisted proxy
destination policy
short-lived credentials
behavior monitoring

==================================================
ENGINEERING DECISION ANALYSIS
=============================

Include real architectural tradeoffs.

Example:

Should agents receive a normal shared service account?

OPTION A
Shared service identity

OPTION B
Per-agent identity

OPTION C
Context-bound delegated identity

Compare:

security
blast radius
auditability
operational complexity
revocation
scalability

Then provide an evidence-aware recommendation.

==================================================
LIMITATIONS ARE REQUIRED
========================

Every article must clearly state limitations.

Examples:

small benchmark
synthetic evaluation
closed-source model
no reproduction
limited environment
vendor-selected incidents
unknown system details
correlation rather than causation

Do not hide uncertainty.

That is part of what makes this a serious research publication.

==================================================
NO SENSATIONALISM
=================

Avoid:

AI went rogue
AI escaped into the internet
AI hacker takeover
AI is uncontrollable
AI apocalypse

unless directly quoting and critiquing external framing.

Use technical language.

==================================================
CITATIONS
=========

Use numbered references.

Inline:

The evaluation found a measurable increase in exploitation capability [4].

At bottom:

REFERENCES

[4]
Authors
Paper title
arXiv ID
Year
Original source

Every major factual claim should be traceable.

==================================================
SEO
===

Each publication requires:

unique SEO title
unique meta description
canonical
Open Graph
Twitter/X metadata
TechArticle or Article schema
BreadcrumbList
datePublished
dateModified
author
publisher
headline
description
mainEntityOfPage

Do NOT claim:

peer review
journal publication
arXiv affiliation
university affiliation

ProxyTech is publishing an independent engineering research analysis that REFERENCES academic papers.

==================================================
FLAT URL INTERNAL CLUSTERING
============================

Even though URLs are flat, maintain strong topical relationships using:

Research Series
Breadcrumbs
Contextual Links
Topic Metadata
Related Research
Cluster Navigation
Schema
Archive discovery

Example:

RESEARCH SERIES
Autonomous AI Agent Security

03 / 10

Previous:
AI Agent Security

Next:
AI Agent Containment

==================================================
COMMERCIAL RESTRAINT
====================

Research pages are primarily educational.

Do not insert aggressive sales CTAs.

At the end only, use a restrained section:

ENGINEERING ASSISTANCE

ProxyTech works with engineers and teams implementing production AI, cloud, security, data and distributed systems.

Link to relevant existing services only where contextually appropriate.

==================================================
DO NOT COPY EXISTING PAGE DESIGN
================================

Before building, inspect:

existing blog
interviews
job-support
service pages
knowledge pages

Explicitly avoid their:

hero
cards
sidebar
CTA blocks
spacing rhythm
content widths
heading system
article styling

Build a separate research visual system.

==================================================
PERFORMANCE
===========

Keep it lightweight.

Prefer native CSS/SVG over large visualization libraries.

Do not introduce a heavy dependency for:

timeline
progress
diagrams
badges
cards

Maintain good Core Web Vitals.

==================================================
ACCESSIBILITY
=============

Support:

keyboard navigation
screen readers
mobile
zoom
reduced motion

Evidence must never be represented using color alone.

==================================================
MOBILE EXPERIENCE
=================

Desktop can use:

left TOC
center narrative
right evidence rail

Mobile must become:

single-column
inline evidence blocks
collapsible TOC
readable diagrams
no horizontal overflow

==================================================
DISCOVERY PAGE FILTERING
========================

Research archive filtering should not generate thin indexable pages.

Use client-side filtering unless a strong SEO reason exists.

Avoid URL explosions.

==================================================
SITEMAP
=======

Include:

/research/

and every new flat research publication.

Correct last-modified dates.

No duplicate entries.

==================================================
AUTHORSHIP
==========

Use factual author information available in the codebase/site.

Do not fabricate:

PhD
research affiliations
security certifications
academic positions

==================================================
BUILD SEQUENCE
==============

1. Research arXiv deeply.
2. Research the associated incident/problem.
3. Select one strongest cluster.
4. Inspect current site architecture.
5. Design research data model.
6. Build new research components.
7. Build /research/.
8. Build flagship publication.
9. Build remaining cluster publications.
10. Add diagrams.
11. Add source citations.
12. Add internal links.
13. Add SEO/schema.
14. Update sitemap.
15. Run lint/typecheck/tests/build.
16. Inspect desktop/tablet/mobile.
17. Fix weak content and weak UX.
18. Validate every factual claim.

==================================================
QUALITY GATE
============

Before finishing, ask:

Did the research start from live arXiv evidence?

Did I read important papers beyond their abstracts?

Does each article answer a distinct research question?

Would an experienced engineer learn something?

Are limitations visible?

Can readers distinguish paper findings from ProxyTech interpretation?

Is the incident explained technically rather than sensationally?

Does every major page have meaningful architecture/failure analysis?

Are URLs flat?

Is the research design completely distinct from the existing site?

Does /research/ feel like a serious publication archive?

Could this page still attract useful search traffic 12 months after the incident?

If not, improve it.

==================================================
FINAL RESPONSE
==============

When implementation is complete, return:

1. Selected research cluster.
2. Why it was selected.
3. arXiv papers used.
4. Incident/primary sources used.
5. URLs created.
6. Components created.
7. Files modified.
8. Diagrams implemented.
9. SEO/schema changes.
10. Internal-link structure.
11. Build/test results.
12. Important limitations or unverifiable claims.
13. Any opportunities discovered for the NEXT research cluster.

Do not merely say:

“Done.”

Show the actual implementation and research decisions.
