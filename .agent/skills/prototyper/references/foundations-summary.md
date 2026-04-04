# Foundations Summary

Compact reference for layout, principles, and accessibility.

## 5 Design Principles

1. **Clarity over decoration** — every element serves a purpose
2. **Consistency builds trust** — same components and tokens everywhere
3. **Accessible by default** — WCAG 2.1 AA from the start
4. **Content-first hierarchy** — typography and spacing create hierarchy
5. **Progressive disclosure** — show what's needed now, reveal details on demand

## Layout System

| Component | Use for | Import |
|-----------|---------|--------|
| `Section` | Top-level page regions with padding | `import { Section } from "layout"` |
| `Grid` | Multi-column layouts | `import { Grid } from "layout"` |
| `Flex` | Inline arrangements, stacking | `import { Flex } from "layout"` |

Never use ad hoc CSS for layout. Always use these three components.

## Spacing Scale

Use numeric props: `<Section padding="400" />` → `var(--sds-size-space-400)` = 1rem

Common values: 200 (8px), 300 (12px), 400 (16px), 600 (24px), 800 (32px), 1200 (48px)

## Accessibility Requirements

- **Contrast**: 4.5:1 normal text, 3:1 large text
- **Keyboard**: all interactive elements reachable via Tab, triggerable via Enter/Space
- **Focus**: 2px focus ring (`--sds-size-stroke-focus-ring`)
- **Touch targets**: minimum 44x44px
- **Alt text**: all images need meaningful alt text
- **Motion**: respect `prefers-reduced-motion`, transitions under 300ms

## Responsive Design

```tsx
import { useMediaQuery } from "hooks";
const isMobile = useMediaQuery("(max-width: 768px)");
```

## Import Aliases

```tsx
import { Button, Text } from "primitives";
import { Flex, Section, Grid } from "layout";
import { Header, Footer } from "compositions";
import { IconArrowRight } from "icons";
import { useMediaQuery } from "hooks";
```
