IMPORTANT CLAUDE EXECUTION SAFETY INSTRUCTIONS:

Do not try to generate the entire UiPath/RPA cluster in memory at once.

This is a large page cluster, so work incrementally and save files step by step.

Follow this execution approach:

1. First inspect the existing project structure.
2. Identify existing reusable templates, metadata helpers, schema helpers, sitemap logic, llms.txt logic, service card components, and page patterns.
3. Create a small implementation plan.
4. Then add pages in batches, not all at once.

Recommended batch order:

Batch 1:
- Core reusable data/config for UiPath/RPA cluster
- Shared content/data structure if the project uses one
- Shared internal linking map
- Shared CTA/content helpers if needed

Batch 2:
- Core pages:
  - /uipath-job-support/
  - /uipath-proxy-interview-support/
  - /uipath-interview-scheduled/
  - /rpa-job-support/
  - /rpa-proxy-interview-support/

Batch 3:
- UiPath technical module pages:
  - Studio
  - Orchestrator
  - REFramework
  - Queues
  - Exception Handling
  - Document Understanding
  - OCR / Computer Vision
  - Apps
  - Testing
  - API Integration
  - Agentic Automation
  - RAG / LLM Automation
  - Production Support
  - Framework Design

Batch 4:
- Healthcare / Epic pages:
  - UiPath Healthcare
  - UiPath Epic Automation
  - UiPath Epic Proxy Interview
  - Epic Hyperspace
  - Epic Hyperdrive
  - Epic FHIR
  - Healthcare Document Understanding
  - HIPAA / PHI RPA

Batch 5:
- Country/GEO pages:
  - USA
  - Canada
  - UK
  - Europe
  - Ireland
  - Germany
  - Netherlands
  - France
  - Sweden
  - Switzerland
  - Australia
  - New Zealand
  - Singapore
  - UAE
  - Saudi Arabia

Batch 6:
- Homepage service card
- Service index updates
- Technology index updates
- Country index updates
- Footer/internal explorer updates
- Related service links

Batch 7:
- Sitemap
- robots.txt verification
- llms.txt updates
- llms-full.txt / AI index updates
- JSON-LD validation
- metadata verification

IMPORTANT MEMORY RULE:
Do not hold all page content in memory before writing files.
Generate one page or one small batch at a time.
Immediately write/save the file after generating that page or batch.
Then continue to the next page.

IMPORTANT FILE WRITING RULE:
Prefer editing existing data/config/template files where the project already uses a data-driven pattern.
If the project uses individual page files, create each route file one by one.
Do not create a huge single file that contains all page content unless the project already uses that pattern and it is safe.

IMPORTANT ERROR AVOIDANCE:
Avoid large one-shot edits.
Avoid massive single responses.
Avoid generating 50 pages in one memory block.
Avoid putting all page body content into one giant variable.
Avoid replacing full files unless absolutely necessary.
Use small targeted patches.

IMPORTANT SAVE STRATEGY:
After each batch:
- save the files
- run a quick syntax/type check if available
- continue only after confirming no obvious error

IMPORTANT RECOVERY STRATEGY:
If Claude API context/memory/output limit issues occur:
- stop the current large generation
- continue from the last saved file
- do not restart the entire cluster
- do not regenerate already completed pages
- inspect what is already saved and continue with the next missing page

IMPORTANT BUILD STRATEGY:
Do not wait until the very end if the project is large.
Run lightweight validation after major batches if available.
Run full build only after all batches are complete.

CRITICAL:
The goal is safe incremental implementation, not one-shot generation.
Keep saving files one by one to avoid Claude API errors and context/memory failures.