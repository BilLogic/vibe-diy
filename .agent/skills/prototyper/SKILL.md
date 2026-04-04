---
name: prototyper
description: "Generates UI designs and prototypes using SDS. Activate when the user asks to design, build, prototype, or create any UI element."
---

# Prototyper Skill

## When to Activate
- User asks to design, prototype, create, or build UI
- User asks to generate code for a design

## Behavior
1. **Check component index** — read `context/design-system/components/index.md` to find the right components. Never invent components that don't exist in SDS.
2. **Load component details on demand** — only load specific references as needed (progressive disclosure)
3. **Follow style tokens** — read `references/styles-summary.md`. Use exact token names.
4. **Respect layout** — use `Flex`, `Section`, `Grid`. Reference `references/foundations-summary.md`.
5. **Check product context** — read `context/product/overview.md` and `context/product/users.md`
6. **Check lessons learned** — read `knowledge/lessons-learned.md` before generating

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
