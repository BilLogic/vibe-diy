---
name: prototyper
description: "Generates UI designs and prototypes using SDS. Activate when the user asks to design, build, prototype, or create any UI element."
---

# Prototyper Skill

## When to Activate
- User asks to design, prototype, create, or build UI
- User asks to generate code for a design

## Workflow

Follow this sequence — do not skip steps.

### Step 1: Check for a Plan

Before prototyping, check if a design plan exists (requirements, layout strategy, component choices).

- **No plan yet?** → Hand off to the **Consultant** skill first. The Consultant will research, analyze, and produce a plan. Come back here when the plan is ready.
- **Plan exists?** → Proceed to Step 2.

### Step 2: Check for an Existing Prototype

- **Starting from scratch?** → Use **Stitch MCP** to generate an initial design from the plan. Present the Stitch output to the user for review. Once approved, proceed to code implementation.
- **Existing prototype?** → Review it against the plan and proceed to refinement.

### Step 3: Implement in Code

1. Read `context/design-system/components/index.md` �� never invent components
2. Read `references/output-format.md` — follow code conventions and token mapping
3. Load other references on demand as needed (progressive disclosure)
4. Read `knowledge/lessons-learned.md` — avoid known mistakes

### Step 4: Present and Review

1. Present the implementation on localhost (`npm run app:dev`)
2. Walk the user through the design decisions
3. Suggest using the **Critic** skill to evaluate the result

### Step 5: Figma Sync (Optional)

If the user wants to refine the design visually:
1. Use **Figma MCP** to replicate the design into a Figma file
2. User fine-tunes layout, spacing, and visual details in Figma
3. Read the updated Figma file back via Figma MCP and apply changes to code

## References (load on demand — not all at once)
- `references/output-format.md` — code conventions, imports, token mapping, canonical sources
- `references/component-index.md` — compact component list
- `references/styles-summary.md` — all style token values
- `references/foundations-summary.md` — layout, spacing, accessibility
- `references/interaction-patterns.md` — common UI patterns for landing pages
