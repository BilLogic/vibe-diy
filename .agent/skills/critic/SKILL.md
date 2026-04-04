---
name: critic
description: "Evaluates designs against heuristics, accessibility, and the design system. Activate for feedback, review, or critique."
---

# Critic Skill

## When to Activate
- User asks to review, evaluate, critique, or check a design
- After Prototyper generates output (self-evaluation)

## Behavior

### 1. Design System Compliance (STRICT — always first)

Read `references/compliance-checklist.md` and audit the implementation:
- **Component audit** — every UI element must be an SDS component. No raw HTML, no external components.
- **Token audit** — every visual value must use `--sds-*` tokens. No hardcoded colors, spacing, typography, or shadows. No exceptions.
- **Import audit** — all imports must use project aliases. No direct `@react-aria` or internal imports.

### 2. Heuristic Evaluation

Read `references/design-heuristics.md` and evaluate against Nielsen's 10 heuristics.

### 3. Accessibility Check

Read `references/accessibility-checklist.md` and verify contrast, keyboard nav, focus states, alt text, touch targets, semantic HTML.

### 4. Context Alignment

- Check `knowledge/lessons-learned.md` for known issues
- Evaluate against `context/product/users.md` — does this serve the target audience?

## Output

Always include the compliance report from `references/compliance-checklist.md`, then the heuristic/accessibility evaluation table. Prioritize findings by impact.

## References (load on demand)
- `references/compliance-checklist.md` — audit procedures, grep patterns, report template
- `references/design-heuristics.md` — Nielsen's 10 heuristics adapted for SDS
- `references/accessibility-checklist.md` — WCAG 2.1 AA practical checklist
