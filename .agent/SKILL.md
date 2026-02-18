---
name: Simple Design System (SDS) Development Skill
description: A skill for building prototypes and features using the Simple Design System with support for multiple use-case modes including learning, maintaining, consulting, iteration, and finalization.
---

# Simple Design System (SDS) Development Skill

## 🚨 START HERE: Quick Routing Guide

**Before doing ANYTHING, determine which mode this request falls into.**

### Pattern Matching Examples

| User Request Pattern | Mode | Reference |
|---------------------|------|-----------|
| "How do I use component X?" | **Learning** | [`references/learning.md`](references/learning.md) |
| "What components are available?" | **Learning** | [`references/learning.md`](references/learning.md) |
| "Add a new primitive/token to SDS" | **Maintaining** | [`references/maintaining.md`](references/maintaining.md) |
| "Create wireframes for feature X" | **Consulting** | [`references/consulting.md`](references/consulting.md) |
| **"Redesign/explore variations/try different approaches"** | **Iteration** | [`references/iteration.md`](references/iteration.md) |
| "Implement this Figma design exactly" | **Finalization** | [`references/finalization.md`](references/finalization.md) |

### Routing Questions (Choose ONE mode)

Answer these questions in order:

1. Is the user asking **"how does X work?"** or requesting documentation? → **Learning Mode**
2. Is the user **updating the design system itself** (adding primitives, syncing tokens)? → **Maintaining Mode**
3. Is the user requesting **greyscale wireframes/structure only**? → **Consulting Mode**
4. **Is the user asking to explore/compare multiple design options?** → **Iteration Mode**
5. Is the user requesting **production-ready implementation** from approved designs? → **Finalization Mode**

**🎯 After identifying the mode, immediately read the corresponding reference file and follow its instructions.**

---

## Purpose

This skill enables AI coding agents to effectively work with the Simple Design System (SDS) repository - a React-based design system with comprehensive component library, design tokens, and Storybook documentation. The skill supports multiple coding agents (Cursor, Windsurf, Claude Code, etc.) and provides context-aware assistance based on five distinct use-case modes.

## Five Use-Case Modes

These modes are **mutually exclusive**. Determine which mode applies before proceeding with any implementation.

### 1. Learning Mode - Understanding the Design System

**Reference**: [`references/learning.md`](references/learning.md)

**Quick Summary**: Designer exploring components, asking "how does X work?" or "what components are available?"

**Signal words/phrases in user requests:**
- "how do I use", "how does X work", "what components"
- "show me examples", "explain", "understand"
- "documentation", "API reference", "props available"

**When to use**: User is asking questions about the design system, wants to understand component APIs, or needs examples of usage patterns.

---

### 2. Maintaining Mode - Updating the Design System

**Reference**: [`references/maintaining.md`](references/maintaining.md)

**Quick Summary**: For design system contributors adding/updating components, syncing tokens, or managing the component library itself.

**Signal words/phrases in user requests:**
- "add a new primitive", "update design tokens", "sync from Figma"
- "create a new component", "update the design system"
- "add to the component library", "maintain SDS"

**When to use**: User is adding new primitives, updating design tokens, managing icons, or working on the design system infrastructure.

**Note**: This is for design system contributors, not product developers building with the system.

---

### 3. Consulting Mode - Early Concept Exploration

**Reference**: [`references/consulting.md`](references/consulting.md)

**Quick Summary**: Greyscale wireframes, structure over style, layout-focused prototypes.

**Signal words/phrases in user requests:**
- "wireframe", "structure", "layout exploration"
- "information architecture", "early concept"
- "greyscale", "sketch out", "rough draft"

**When to use**: Early-stage concept exploration, information architecture work, or structural planning before visual design.

**Constraints**: Greyscale only, no brand colors, focus on semantic HTML and layout hierarchy.

---

### 4. Iteration Mode - Exploring Variations

**Reference**: [`references/iteration.md`](references/iteration.md)

**Quick Summary**: Generate 3-5 design options, use design tokens, explain tradeoffs between approaches.

**Signal words/phrases in user requests:**
- **"redesign"**, **"explore options"**, **"try different approaches"**
- "show me variations", "compare designs", "what are my options"
- "iterate on", "A/B test", "multiple ways to solve"
- **"align with brand"** (when starting fresh)

**When to use**: User wants to explore different ways to solve the same design problem or see multiple implementation options.

**Constraints**: Use design tokens, create variations, provide clear rationale for differences.

**⚠️ Pre-flight checklist — confirm before writing any code:**
- [ ] Output is React `.tsx` files (never standalone HTML/CSS)
- [ ] All components imported from `primitives`, `layout`, `compositions`, or `hooks`
- [ ] Files placed in `src/examples/iterations/<feature-name>/`
- [ ] No hardcoded colors, spacing, or typography — design tokens only
- [ ] `ComparisonView` component created to switch between variations

---

### 5. Finalization Mode - Production-Ready Implementation

**Reference**: [`references/finalization.md`](references/finalization.md)

**Quick Summary**: Pixel-perfect implementation with all interactive states, accessibility compliance, and production-ready code.

**Signal words/phrases in user requests:**
- "implement exactly", "production-ready", "pixel-perfect"
- "approved design", "final implementation"
- "all states", "full accessibility", "ship this"

**When to use**: Implementing approved designs for production, building final features, or refining existing implementations to production quality.

**Constraints**: Strict token enforcement, all states (hover, focus, disabled, loading), full accessibility compliance.

---

## Critical Routing Behavior

**Before generating any code**, you MUST ask clarifying questions to determine the correct mode:

1. **Which scenario are we in: learning, maintaining, consulting, iteration, or finalization?**
2. **Are you implementing from a Figma design, or building from scratch?**
3. **What fidelity do you need: structure only, mid-fidelity exploration, or production-ready?**

Based on the answers, route to the appropriate reference file and follow its specific instructions.

## Available Tools and Resources

### Storybook
- **Local**: `npm run storybook` (runs at localhost:6006)
- **Live**: https://figma.github.io/sds/storybook
- **Use for**: Component API documentation, interactive examples, visual reference

### Figma MCP Tools
- `get_image` - Get visual representation of Figma designs
- `get_code` - Extract component information and structure from Figma selections
- `get_code_connect_map` - Get mappings between Figma components and React components
- `get_variable_defs` - Get design token and variable definitions
- **Full guide**: See [`assets/figma-integration.md`](assets/figma-integration.md)

### Stitch MCP
- Generate UI screens from text prompts
- Iterate on designs quickly with visual feedback
- Use for structural planning in Consulting or Iteration modes

### Reference Files
- **Component library**: [`assets/components.md`](assets/components.md)
- **Code examples**: [`assets/code-examples.md`](assets/code-examples.md)
- **Figma integration**: [`assets/figma-integration.md`](assets/figma-integration.md)
- **Best practices**: [`assets/best-practices.md`](assets/best-practices.md)

## Import Aliases

SDS uses path aliases defined in `vite.config.ts`. **Always use these aliases**:

```tsx
import { Footer, Header } from "compositions";
import { useAuth, usePricing, useProducts, AuthProvider } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { placeholder } from "images";
import { Flex, Section, Grid } from "layout";
import { Button, Input, Text } from "primitives";
```

## Critical Rules

### ❌ Never Do These Things

1. **Never import from `@react-aria` or `@react-stately` directly** - Always use SDS components from `primitives`
2. **Never hardcode colors, spacing, or typography** - Always use CSS variables from `src/theme.css`
3. **Never write custom Flexbox/Grid CSS** - Always use `Flex`, `Section`, or `Grid` layout components
4. **Never create new components** - Always use existing SDS primitives and compositions
5. **Never skip accessibility** - All interactive elements must have proper ARIA labels and keyboard support

### ✅ Always Do These Things

1. **Check component APIs** - Read the TypeScript files to understand available props
2. **Use design tokens** - Reference `src/theme.css` for all CSS variable values
3. **Use layout components** - `Flex` and `Section` handle all positioning and spacing
4. **Follow responsive patterns** - Use `useMediaQuery` hook for breakpoint detection
5. **Reference Storybook** - Check `src/stories/` for usage examples

## Token Mapping Pattern

Numeric prop values in SDS components map to CSS variables:

```tsx
// Component prop notation
<Section padding="400" />
<Flex gap="600" />

// Maps to CSS
padding: var(--sds-size-space-400)
gap: var(--sds-size-space-600)
```

## Quick Reference Structure

```
.agent/
├── references/          # Detailed mode-specific instructions
│   ├── learning.md     # Component exploration
│   ├── maintaining.md  # Design system maintenance
│   ├── consulting.md   # Concept exploration
│   ├── iteration.md    # Design variations
│   └── finalization.md # Production implementation
├── assets/             # Component docs and examples
│   ├── components.md   # Full component library reference
│   ├── figma-links.md  # Design system resources
│   ├── code-examples.md # Common implementation patterns
│   └── examples/       # Full implementation examples
└── scripts/            # Design system maintenance scripts
    └── README.md       # Script documentation
```

## Next Steps

1. Identify which mode applies to the current request
2. Open the corresponding reference file in `references/`
3. Follow the mode-specific instructions
4. Reference `assets/` documentation as needed
5. Use available tools (Storybook, Figma MCP, Stitch MCP) appropriately
