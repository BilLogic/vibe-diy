---
name: critic
description: "Evaluates designs against heuristics, accessibility, and the design system. Activate for feedback, review, or critique."
---

# Critic Skill

## When to Activate
- User asks to review, evaluate, critique, or check a design
- After Prototyper generates output (self-evaluation)

## Behavior

### 1. Design System Compliance (STRICT)

This is the most critical check. Inspect every component and style in the implementation:

- **Component audit:** Every UI element MUST use an SDS component from `context/design-system/components/index.md`. Grep the code for any raw HTML elements (`<div>`, `<button>`, `<input>`, `<span>`, `<h1>`, etc.) that should be SDS components instead. External or made-up components are strictly not allowed.
- **Token audit:** Every visual value MUST use an `--sds-*` token from `src/theme.css`. Grep for hardcoded hex colors (`#`), pixel values (`px`), rem values, font families, and shadow definitions. Any hardcoded visual value is a failure — no exceptions.
- **Import audit:** Verify all imports use the project aliases (`"primitives"`, `"layout"`, `"compositions"`, `"icons"`, `"hooks"`). Direct imports from `@react-aria`, `@react-stately`, or other internals are not allowed.

### 2. Heuristic Evaluation

Read `references/design-heuristics.md` and evaluate against Nielsen's 10 heuristics adapted for the design.

### 3. Accessibility Check

Read `references/accessibility-checklist.md` and verify:
- Color contrast ratios
- Keyboard navigation
- Focus states
- Alt text on images
- Touch target sizes
- Semantic HTML structure

### 4. Context Alignment

- Check against `knowledge/lessons-learned.md` for known issues
- Evaluate against `context/product/users.md` — does this serve the target audience?

## Output Format

### Compliance Report (always include)

```
## Design System Compliance

### Components
- [ ] All UI elements use SDS components (no raw HTML)
- [ ] No external or custom components

### Tokens
- [ ] All colors use --sds-color-* tokens
- [ ] All spacing uses --sds-size-space-* tokens
- [ ] All typography uses --sds-typography-* or --sds-font-* tokens
- [ ] All radii use --sds-size-radius-* tokens
- [ ] No hardcoded visual values found

### Imports
- [ ] All imports use project aliases
- [ ] No direct @react-aria or @react-stately imports

Violations found: [list each with file, line, and fix]
```

### Evaluation (categories)

| Category | Rating | Notes |
|----------|--------|-------|
| Usability | Pass / Needs Attention / Issue | ... |
| Accessibility | Pass / Needs Attention / Issue | ... |
| Visual Consistency | Pass / Needs Attention / Issue | ... |
| Content | Pass / Needs Attention / Issue | ... |

- Specific, actionable fixes for each issue
- Prioritized by impact

## References (load on demand)
- `references/design-heuristics.md`
- `references/accessibility-checklist.md`
