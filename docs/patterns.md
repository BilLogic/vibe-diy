# Patterns and Guardrails

## Contents

- [Critical Rules](#critical-rules)
- [Import Aliases](#import-aliases)
- [Token Mapping Pattern](#token-mapping-pattern)
- [Common Implementation Patterns](#common-implementation-patterns)
- [Avoid These Pitfalls](#avoid-these-pitfalls)

## Critical Rules

1. Use SDS components; avoid direct `@react-aria` or `@react-stately` imports.
2. Use design tokens; avoid hardcoded colors, spacing, and typography values.
3. Use `Flex`, `Section`, and `Grid` for layout rather than ad hoc layout CSS.
4. Preserve accessibility semantics and keyboard support.

## Import Aliases

```tsx
import { Footer, Header } from "compositions";
import { useAuth, usePricing, useProducts } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { Flex, Grid, Section } from "layout";
import { Button, Input, Text } from "primitives";
```

## Token Mapping Pattern

Numeric props map to CSS custom properties.

```tsx
<Section padding="400" />
<Flex gap="600" />
```

```css
padding: var(--sds-size-space-400);
gap: var(--sds-size-space-600);
```

## Common Implementation Patterns

- Responsive composition with `useMediaQuery`
- Forms built from primitives plus layout components
- Iteration variants using shared token scales

## Avoid These Pitfalls

- Hardcoded design values
- Custom layout CSS where SDS layout components are enough
- Skipping component API inspection before implementation
