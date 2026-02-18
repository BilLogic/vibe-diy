# SDS Best Practices & Guidelines

Essential rules, common pitfalls, and conventions for working with SDS.

---

## Import Aliases

SDS uses path aliases defined in `vite.config.ts`. **Always use these aliases**:

```tsx
import { Footer, Header } from "compositions";
import {
  useAuth,
  usePricing,
  useProducts,
  AuthProvider,
  PricingProvider,
  ProductsProvider,
  AllProviders,
} from "data";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { placeholder } from "images";
import { Flex, Section, Grid } from "layout";
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Text,
  TextHeading,
  TextTitle,
} from "primitives";
```

**Never import with relative paths** like `../../ui/primitives/Button/Button`.

---

## Essential Rules

### ✅ Always Do

1. **Check component APIs** - Read TypeScript definitions before using components
2. **Use design tokens** - Reference `src/theme.css` for all CSS variable values
3. **Use layout components** - `Flex` and `Section` handle positioning and spacing
4. **Follow responsive patterns** - Use `useMediaQuery` hook for breakpoint detection
5. **Reference Storybook** - Check `src/stories/` for usage examples
6. **Read component files** - Understand available props and variants

### ❌ Never Do

1. **Never import from `@react-aria` or `@react-stately` directly** - Always use SDS components from `primitives`
2. **Never hardcode colors, spacing, or typography** - Always use CSS variables
3. **Never write custom Flexbox/Grid CSS** - Always use `Flex`, `Section`, or `Grid` layout components
4. **Never create new components** - Always use existing SDS primitives and compositions
5. **Never skip accessibility** - All interactive elements must have proper ARIA labels and keyboard support

---

## Component API Guidelines

### Semantic Prop Names

Use the correct prop names as defined in component TypeScript files:

- `isSelected` not `active`
- `isDisabled` not `disabled`
- `variant` not `type` (for most components)
- `onPress` not `onClick` (React Aria convention)

### Check Props Before Using

```tsx
// ❌ WRONG - Guessing prop names
<Button active={true} type="primary">Click Me</Button>

// ✅ CORRECT - Read the TypeScript file first
<Button isSelected variant="primary" onPress={handleClick}>
  Click Me
</Button>
```

### Leverage Composition

Combine primitives rather than creating custom components:

```tsx
// ✅ CORRECT - Compose existing components
<Section variant="stroke" padding="600">
  <Flex direction="column" gap="400">
    <TextHeading>Card Title</TextHeading>
    <Text>Card description text</Text>
    <Button variant="primary">Action</Button>
  </Flex>
</Section>
```

---

## Common Pitfalls & Solutions

### ❌ Pitfall 1: Hardcoding Design Values

```tsx
// WRONG
<div style={{ color: "#111111", padding: "16px", borderRadius: "8px" }}>
  Content
</div>
```

**Fix**: Use CSS variables via class names or SDS components:

```tsx
// CORRECT - Using SDS components
<Section padding="600">
  <Text>Content</Text>
</Section>

// CORRECT - Using CSS variables if custom styling needed
<div className="custom-element">
  Content
</div>

// In CSS file:
.custom-element {
  color: var(--sds-color-text-default-default);
  padding: var(--sds-size-space-600);
  border-radius: var(--sds-size-radius-200);
}
```

---

### ❌ Pitfall 2: Creating Custom Layout CSS

```tsx
// WRONG - Custom CSS classes
<div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**Fix**: Use layout components:

```tsx
// CORRECT
<Flex direction="row" gap="400" type="third">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

---

### ❌ Pitfall 3: Not Reading Component APIs

```tsx
// WRONG - Prop doesn't exist
<Button active={true} type="primary">Submit</Button>
```

**Fix**: Read the TypeScript file to understand available props:

```tsx
// CORRECT
<Button variant="primary" isSelected>Submit</Button>
```

---

### ❌ Pitfall 4: Importing from React Aria Directly

```tsx
// WRONG
import { Button } from "@react-aria/button";
import { useTextField } from "@react-aria/textfield";
```

**Fix**: Always use SDS components:

```tsx
// CORRECT
import { Button, Input } from "primitives";
```

---

### ❌ Pitfall 5: Skipping Responsive Behavior

```tsx
// WRONG - Fixed layout for all screen sizes
<Flex direction="row" gap="800">
  <div>Left</div>
  <div>Right</div>
</Flex>
```

**Fix**: Use responsive patterns:

```tsx
// CORRECT
import { useMediaQuery } from "hooks";

function ResponsiveLayout() {
  const { isMobile } = useMediaQuery();

  return (
    <Flex direction={isMobile ? "column" : "row"} gap={isMobile ? "400" : "800"}>
      <div>Left</div>
      <div>Right</div>
    </Flex>
  );
}
```

---

## Naming Conventions

### Components
- **PascalCase** for component names: `Button`, `TextHeading`, `PricingCard`

### Props
- **camelCase** for prop names: `variant`, `isSelected`, `onPress`
- Boolean props start with `is`, `has`, or `should`: `isDisabled`, `hasError`, `shouldAutoFocus`

### Event Handlers
- React Aria uses `onPress` instead of `onClick`
- Follow React Aria conventions: `onPress`, `onPressStart`, `onPressEnd`

---

## File Organization

### Prototypes and Examples

When building prototypes or iterations:

```
src/examples/
├── prototypes/          # Standalone prototypes
│   └── feature-name/
│       ├── index.tsx
│       ├── components/
│       └── README.md
└── iterations/          # Multiple variations
    └── feature-name/
        ├── VariationA.tsx
        ├── VariationB.tsx
        ├── ComparisonView.tsx
        └── README.md
```

### Component Structure

When understanding existing components:

```
src/ui/
├── primitives/          # Atomic components
├── compositions/        # Complex patterns
├── layout/             # Structural components
├── hooks/              # UI-specific hooks
├── icons/              # Auto-generated icons
└── images/             # Static images
```

---

## Accessibility Requirements

All interactive elements must have:

1. **Keyboard support** - Tab navigation, Enter/Space activation
2. **ARIA labels** - `aria-label` for icon buttons, `aria-describedby` for descriptions
3. **Focus management** - Visible focus indicators, logical tab order
4. **Screen reader support** - Semantic HTML, ARIA roles when needed

### Example: Icon Button

```tsx
// ❌ WRONG - Missing aria-label
<IconButton variant="subtle">
  <IconClose />
</IconButton>

// ✅ CORRECT
<IconButton variant="subtle" aria-label="Close dialog">
  <IconClose />
</IconButton>
```

---

## Development Commands

Quick reference for common tasks:

```bash
# Development
npm run app:dev           # Start dev server (localhost:8000)
npm run storybook         # Start Storybook (localhost:6006)

# Build
npm run app:build         # Build application
npm run storybook:build   # Build Storybook

# Design System Maintenance
npm run script:tokens     # Sync design tokens from Figma
npm run script:icons      # Sync icons from Figma
```

---

## Getting Help

### When Stuck

1. **Check Storybook** - Live examples at https://figma.github.io/sds/storybook
2. **Read component files** - TypeScript definitions in `src/ui/`
3. **Reference examples** - Code patterns in `.agent/assets/code-examples.md`
4. **Check stories** - Implementation examples in `src/stories/`

### When to Ask for Clarification

Ask the user before:
- Creating new components not in SDS
- Deviating from design tokens
- Implementing patterns not covered by existing components
- Making breaking changes to component APIs
