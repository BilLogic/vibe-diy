# AI Workflows

> **Note:** Workflow orchestration has moved to [`.agent/AGENT.md`](../.agent/AGENT.md), which includes the double diamond design process and 4-skill routing (Consultant, Prototyper, Critic, Compounder). The legacy routing policy below is preserved for reference.

---

## Contents

- [Learn Workflow](#learn-workflow)
- [Build Workflow](#build-workflow)
- [Maintain Workflow](#maintain-workflow)
- [Routing Policy](#routing-policy)

This project uses mutually exclusive workflow routing based on primary user intent.

## Learn Workflow

Use for explanation, orientation, and documentation requests.

Typical prompts:
- "How does X work?"
- "What components exist?"
- "Where should this file go?"

Expected output:
- references, explanation, and decision guidance

## Build Workflow

Use for UI implementation and exploration.

Sub-modes:
- Consulting: structure-first concepts
- Iteration: multiple options and tradeoffs
- Finalization: production-ready implementation

Constraints:
- Output React `.tsx` in this repo
- Use SDS components and tokens
- Avoid standalone HTML/CSS output

## Maintain Workflow

Use for design-system and integration maintenance.

Includes:
- token sync
- icon generation
- component metadata updates
- dev resources and Code Connect updates

## Routing Policy

1. Explain/document intent -> Learn
2. Build/prototype intent -> Build
3. Sync/system maintenance intent -> Maintain
4. Mixed prompts -> complete primary output first, then explicit handoff
