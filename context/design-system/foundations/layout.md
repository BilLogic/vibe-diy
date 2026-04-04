# Layout

SDS provides three layout components in `src/ui/layout/` plus a spacing scale for consistent rhythm.

## Components

### Flex

Wrapper around CSS flexbox. Use for one-dimensional layouts (rows or columns).

```tsx
import { Flex } from "layout";

<Flex gap="400" direction="column">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Flex>
```

### Grid

Wrapper around CSS grid. Use for two-dimensional layouts (multi-column content).

```tsx
import { Grid } from "layout";

<Grid columns={3} gap="600">
  <Card />
  <Card />
  <Card />
</Grid>
```

### Section

Semantic container with standardized vertical padding. Use to define page regions.

```tsx
import { Section } from "layout";

<Section padding="800">
  <Text variant="heading">Section Title</Text>
</Section>
```

## Spacing Scale

All spacing uses `--sds-size-space-*` tokens. Numeric props map to CSS custom properties.

| Token | Value | Common use |
|-------|-------|-----------|
| `--sds-size-space-0` | 0rem | Reset |
| `--sds-size-space-050` | 0.125rem (2px) | Hairline gaps |
| `--sds-size-space-100` | 0.25rem (4px) | Tight inline spacing |
| `--sds-size-space-150` | 0.375rem (6px) | Small padding |
| `--sds-size-space-200` | 0.5rem (8px) | Default inline gap |
| `--sds-size-space-300` | 0.75rem (12px) | Component internal padding |
| `--sds-size-space-400` | 1rem (16px) | Standard gap/padding |
| `--sds-size-space-600` | 1.5rem (24px) | Section internal spacing |
| `--sds-size-space-800` | 2rem (32px) | Between content blocks |
| `--sds-size-space-1200` | 3rem (48px) | Section padding |
| `--sds-size-space-1600` | 4rem (64px) | Large section padding |
| `--sds-size-space-2400` | 6rem (96px) | Hero spacing |
| `--sds-size-space-4000` | 10rem (160px) | Maximum spacing |

Negative variants (`--sds-size-space-negative-*`) are available for 100, 200, 300, 400, and 600.

## Token Mapping Pattern

Numeric props on layout components map to CSS custom properties:

```tsx
<Section padding="400" />   → padding: var(--sds-size-space-400)
<Flex gap="600" />           → gap: var(--sds-size-space-600)
```

## Responsive Design

Use the `useMediaQuery` hook for responsive composition:

```tsx
import { useMediaQuery } from "hooks";

const isMobile = useMediaQuery("(max-width: 768px)");
```

## Rules

- Always use `Flex`, `Grid`, or `Section` for layout — no ad hoc CSS
- Always use spacing tokens — never hardcode rem/px values
- Use `Section` for top-level page regions
- Use `Grid` for multi-column layouts
- Use `Flex` for inline arrangements and simple stacking
