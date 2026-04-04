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

- **No plan yet?** → Hand off to the **Consultant** skill first. Say: "Let me bring in the Consultant to define requirements before we prototype." The Consultant will research, analyze, and produce a plan. Come back here when the plan is ready.
- **Plan exists?** → Proceed to Step 2.

### Step 2: Check for an Existing Prototype

- **Starting from scratch?** → Use **Stitch MCP** to generate an initial design from the plan. Present the Stitch output to the user for review. Once approved, proceed to code implementation.
- **Existing prototype?** → Review it against the plan and proceed to refinement.

### Step 3: Implement in Code

1. **Check component index** — read `context/design-system/components/index.md`. Never invent components that don't exist in SDS.
2. **Load references on demand** — only load specific references as needed (progressive disclosure)
3. **Follow style tokens** — read `references/styles-summary.md`. Use exact `--sds-*` token names.
4. **Respect layout** — use `Flex`, `Section`, `Grid`. Reference `references/foundations-summary.md`.
5. **Check product context** — read `context/product/overview.md` and `context/product/users.md`
6. **Check lessons learned** — read `knowledge/lessons-learned.md` before generating

### Step 4: Present and Review

1. Present the implementation on localhost (`npm run app:dev`)
2. Walk the user through the design decisions
3. Suggest using the **Critic** skill to evaluate the result

### Step 5: Figma Sync (Optional)

If the user wants to refine the design visually:
1. Use **Figma MCP** to replicate the design into a Figma file
2. User can fine-tune layout, spacing, and visual details in Figma
3. Read the updated Figma file back via Figma MCP and apply changes to code

## Output Format
- React/TypeScript using SDS imports:
  ```tsx
  import { Button, Text, Input } from "primitives";
  import { Flex, Section, Grid } from "layout";
  import { IconArrowRight } from "icons";
  ```
- Token mapping: `<Section padding="400" />` → `var(--sds-size-space-400)`
- Include comments noting component and token choices

## References (load on demand — not all at once)
- `references/component-index.md` — compact component list
- `references/styles-summary.md` — all style token values
- `references/foundations-summary.md` — layout, spacing, accessibility
- `references/interaction-patterns.md` — common UI patterns

## Canonical Sources
- Component code: `src/ui/primitives/`, `src/ui/compositions/`, `src/ui/layout/`
- Full token definitions: `src/theme.css`
- Storybook: https://figma.github.io/sds/storybook
