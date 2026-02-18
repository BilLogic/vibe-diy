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
| "Redesign/explore variations/try different approaches" | **Iteration** | [`references/iteration.md`](references/iteration.md) |
| "Implement this Figma design exactly" | **Finalization** | [`references/finalization.md`](references/finalization.md) |

### Routing Questions (Choose ONE mode)

Answer these questions in order:

1. Is the user asking **"how does X work?"** or requesting documentation? → **Learning Mode**
2. Is the user **updating the design system itself** (adding primitives, syncing tokens)? → **Maintaining Mode**
3. Is the user requesting **greyscale wireframes/structure only**? → **Consulting Mode**
4. Is the user asking to **explore/compare multiple design options**? → **Iteration Mode**
5. Is the user requesting **production-ready implementation** from approved designs? → **Finalization Mode**

**🎯 After identifying the mode, immediately read the corresponding reference file and follow its instructions.**

---

## Purpose

This skill enables AI coding agents to effectively work with the Simple Design System (SDS) repository — a React-based design system with a comprehensive component library, design tokens, and Storybook documentation. The skill supports multiple coding agents (Cursor, Windsurf, Claude Code, etc.) and provides context-aware assistance based on five distinct use-case modes.

---

## Five Use-Case Modes

These modes are **mutually exclusive**. Determine which mode applies before proceeding with any implementation.

### 1. Learning Mode — Understanding the Design System

**Reference**: [`references/learning.md`](references/learning.md)

**Quick Summary**: Designer or developer exploring components, asking "how does X work?" or "what components are available?"

**Signal words**: "how do I use", "how does X work", "what components", "show me examples", "explain", "documentation", "API reference"

---

### 2. Maintaining Mode — Updating the Design System

**Reference**: [`references/maintaining.md`](references/maintaining.md)

**Quick Summary**: For design system contributors adding/updating components, syncing tokens, or managing the component library itself.

**Signal words**: "add a new primitive", "update design tokens", "sync from Figma", "create a new component", "update the design system"

**Note**: This is for design system contributors, not product developers building with the system.

---

### 3. Consulting Mode — Early Concept Exploration

**Reference**: [`references/consulting.md`](references/consulting.md)

**Quick Summary**: Greyscale wireframes, structure over style, layout-focused prototypes.

**Signal words**: "wireframe", "structure", "layout exploration", "information architecture", "early concept", "greyscale", "rough draft"

**Constraints**: Greyscale only, no brand colors, focus on layout hierarchy.

---

### 4. Iteration Mode — Exploring Variations

**Reference**: [`references/iteration.md`](references/iteration.md)

**Quick Summary**: Generate 3-5 design options, use design tokens, explain tradeoffs between approaches.

**Signal words**: "redesign", "explore options", "try different approaches", "show me variations", "compare designs", "iterate on", "A/B test"

**⚠️ Pre-flight checklist — confirm before writing any code:**
- [ ] Output is React `.tsx` files (never standalone HTML/CSS)
- [ ] All components imported from `primitives`, `layout`, `compositions`, or `hooks`
- [ ] Files placed in `src/examples/iterations/<feature-name>/`
- [ ] No hardcoded colors, spacing, or typography — design tokens only
- [ ] `ComparisonView.tsx` planned to switch between variations

---

### 5. Finalization Mode — Production-Ready Implementation

**Reference**: [`references/finalization.md`](references/finalization.md)

**Quick Summary**: Pixel-perfect implementation with all interactive states, accessibility compliance, and production-ready code.

**Signal words**: "implement exactly", "production-ready", "pixel-perfect", "approved design", "final implementation", "all states", "ship this"

**Constraints**: Strict token enforcement, all states (hover, focus, disabled, loading), full accessibility compliance.

---

## Critical Routing Behavior

**Before generating any code**, ask clarifying questions if the mode is ambiguous:

1. **Which scenario are we in: learning, maintaining, consulting, iteration, or finalization?**
2. **Are you implementing from a Figma design, or building from scratch?**
3. **What fidelity do you need: structure only, mid-fidelity exploration, or production-ready?**

---

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

---

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

---

## Critical Rules

### ❌ Never Do These Things

1. **Never import from `@react-aria` or `@react-stately` directly** — Always use SDS components from `primitives`
2. **Never hardcode colors, spacing, or typography** — Always use CSS variables from `src/theme.css`
3. **Never write custom Flexbox/Grid CSS** — Always use `Flex`, `Section`, or `Grid` layout components
4. **Never skip accessibility** — All interactive elements must have proper ARIA labels and keyboard support

### ✅ Always Do These Things

1. **Check component APIs** — Read the TypeScript files to understand available props
2. **Use design tokens** — Reference `src/theme.css` for all CSS variable values
3. **Use layout components** — `Flex` and `Section` handle all positioning and spacing
4. **Follow responsive patterns** — Use `useMediaQuery` hook for breakpoint detection
5. **Reference Storybook** — Check `src/stories/` for usage examples

---

## Available Tools

### Storybook
- **Local**: `npm run storybook` (runs at localhost:6006)
- **Live**: https://figma.github.io/sds/storybook
- **Use for**: Component API documentation, interactive examples, visual reference

### Figma MCP Tools
- `get_image` — Visual representation of Figma designs
- `get_code` — Component structure and hierarchy from Figma selections
- `get_code_connect_map` — Mappings between Figma components and React components
- `get_variable_defs` — Design token and variable definitions

### Stitch MCP
- Generate UI screens from text prompts for structural planning in Consulting or Iteration modes

---

## File Structure

```
.agent/
├── SKILL.md                    # This file — routing and critical rules
├── references/                 # Behavioral instructions per mode
│   ├── learning.md             # How to behave in Learning Mode
│   ├── maintaining.md          # How to behave in Maintaining Mode
│   ├── consulting.md           # How to behave in Consulting Mode
│   ├── iteration.md            # How to behave in Iteration Mode
│   ├── finalization.md         # How to behave in Finalization Mode
│   └── tokens.md               # Design token reference and usage rules
└── assets/                     # SDS artifacts and documentation
    ├── components.md            # Full component library reference
    ├── code-examples.md         # Common implementation patterns
    ├── figma-links.md           # Design system resource links
    ├── best-practices.md        # General SDS best practices
    ├── figma-integration.md     # Figma MCP tool details
    └── examples/               # Full implementation examples
        └── README.md
```
