# Iteration Mode - Exploring Design Variations

## When to Use This Mode

- User wants to see multiple ways to solve the same design problem
- Exploring different approaches before finalizing
- Comparing tradeoffs between design options
- A/B testing different layouts or component arrangements
- Mid-fidelity exploration with design system components

**Focus**: Generate 3-5 variations, use design tokens, explain tradeoffs.

## Constraints

### Use Design system Tokens
- All colors, spacing, typography from `src/theme.css`
- No hardcoded values
- Demonstrate token flexibility

### Generate 3-5 Variations
- Show meaningfully different approaches
- Not just minor tweaks
- Each variation should have a clear rationale

### Explain Tradeoffs
- What are the pros/cons of each option?
- When would you choose one over another?
- What user needs does each serve?

## What to Load

1. **Design Tokens**
   - Location: `src/theme.css`
   - All CSS custom properties for colors, spacing, typography

2. **Code Examples**
   - Location: `assets/code-examples.md`
   - Common patterns to build from

3. **Component Library**
   - Reference: `assets/components.md`
   - Available primitives and compositions

4. **Storybook**
   - Live examples: https://figma.github.io/sds/storybook
   - See components in action

## Behavior in This Mode

### Generate Variations

Create 3-5 distinct options that differ in:
- **Layout approach** (horizontal vs vertical, grid vs flex)
- **Visual hierarchy** (prominent hero vs equal weight cards)
- **Information density** (compact vs spacious)
- **Navigation pattern** (tabs vs pills vs buttons)
- **Content emphasis** (image-first vs text-first)

### Use Design Tokens

Show how tokens create flexibility:
```tsx
// Variation 1: Compact spacing
<Section padding="400">
  <Flex gap="300">
    {/* Content */}
  </Flex>
</Section>

// Variation 2: Generous spacing
<Section padding="1200">
  <Flex gap="800">
    {/* Same content, different feel */}
  </Flex>
</Section>

// Variation 3: Mixed spacing for hierarchy
<Section padding="800">
  <Flex gap="600">
    <Flex gap="200"> {/* Tight grouping */}
      {/* Related items */}
    </Flex>
    {/* Separated content */}
  </Flex>
</Section>
```

### Explain Each Option

For each variation, document:
1. **Name/Label**: "Option A: Card Grid", "Option B: List View", etc.
2. **Key characteristics**: What makes this unique?
3. **Best for**: What use cases or user needs?
4. **Tradeoffs**: Pros and cons
5. **When to choose**: Decision criteria

## Token Mapping Reference

Remember that numeric props map to CSS variables:

### Spacing Tokens
```tsx
<Section padding="200" />   // var(--sds-size-space-200) - Very tight
<Section padding="400" />   // var(--sds-size-space-400) - Compact
<Section padding="600" />   // var(--sds-size-space-600) - Standard
<Section padding="800" />   // var(--sds-size-space-800) - Comfortable
<Section padding="1200" />  // var(--sds-size-space-1200) - Generous
<Section padding="1600" />  // var(--sds-size-space-1600) - Spacious
```

### Gap Tokens
```tsx
<Flex gap="200" />   // Tight grouping
<Flex gap="400" />   // Standard grouping
<Flex gap="600" />   // Comfortable separation
<Flex gap="800" />   // Clear separation
<Flex gap="1200" />  // Distinct sections
```

## Example Iteration Set

### Scenario: Product Card Layout

**Variation 1: Grid with Images**
```tsx
// Pros: Visual impact, scannable
// Cons: Requires good imagery
// Best for: Visual products (fashion, food, art)

<Flex direction="row" gap="600" type="third">
  {products.map(product => (
    <Section key={product.id} variant="stroke">
      <Flex direction="column" gap="400">
        <Image src={product.image} />
        <Flex direction="column" gap="200" padding="400">
          <TextHeading>{product.name}</TextHeading>
          <Text>{product.price}</Text>
        </Flex>
      </Flex>
    </Section>
  ))}
</Flex>
```

**Variation 2: List View with Details**
```tsx
// Pros: Information-dense, comparative
// Cons: Less visual impact
// Best for: Spec-heavy products (electronics, tools)

<Flex direction="column" gap="400">
  {products.map(product => (
    <Section key={product.id} variant="stroke" padding="600">
      <Flex direction="row" gap="600" alignPrimary="space-between">
        <Flex direction="column" gap="200">
          <TextHeading>{product.name}</TextHeading>
          <Text>{product.description}</Text>
        </Flex>
        <Flex direction="column" gap="200" alignPrimary="flex-end">
          <Text>{product.price}</Text>
          <Button variant="primary">Add to Cart</Button>
        </Flex>
      </Flex>
    </Section>
  ))}
</Flex>
```

**Variation 3: Masonry Style**
```tsx
// Pros: Dynamic, visually interesting
// Cons: Less predictable layout
// Best for: Content with varying lengths

<Flex direction="row" gap="600" type="uneven">
  {products.map(product => (
    <Flex key={product.id} direction="column">
      <Section variant="stroke">
        <Flex direction="column" gap="400">
          <Image src={product.image} />
          <Flex direction="column" gap="200" padding="400">
            <TextHeading>{product.name}</TextHeading>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </Flex>
        </Flex>
      </Section>
    </Flex>
  ))}
</Flex>
```

## Responsive Variations

Show how each option adapts:
```tsx
import { useMediaQuery } from "hooks";

function ResponsiveVariation() {
  const { isMobile } = useMediaQuery();

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      gap={isMobile ? "400" : "800"}
      type={isMobile ? undefined : "third"}
    >
      {/* Content */}
    </Flex>
  );
}
```

## Documentation Template

For each variation, provide:

```markdown
## Option [A/B/C]: [Descriptive Name]

### Overview
[Brief description of the approach]

### Key Characteristics
- [Characteristic 1]
- [Characteristic 2]
- [Characteristic 3]

### Pros
- ✅ [Advantage 1]
- ✅ [Advantage 2]

### Cons
- ❌ [Limitation 1]
- ❌ [Limitation 2]

### Best For
- [Use case 1]
- [Use case 2]

### When to Choose
[Decision criteria - when would you pick this option?]

### Code
[Implementation]
```

## Available Tools

### Figma MCP
- Use `get_image` to see design reference
- Use `get_code` to extract structure from Figma variations
- Compare against Figma mockups

### Storybook
- Reference existing patterns
- See how components look in different configurations
- Test responsive behavior

## Do's and Don'ts

### ✅ Do

- Create meaningfully different options
- Use consistent design tokens across variations
- Explain the rationale for each approach
- Show responsive behavior for each
- Document tradeoffs clearly
- Consider user needs and use cases
- Use real SDS components
- **Deploy all variations locally** for side-by-side comparison
- **Stick to SDS components** - Never write custom layout CSS

### ❌ Don't

- Create minor tweaks as "variations"
- Mix different token systems
- Skip the explanation of tradeoffs
- Focus only on desktop layouts
- Choose arbitrary differences
- Use custom components or styles
- Forget accessibility considerations
- **Write raw HTML or custom CSS** - Always use SDS primitives
- **Skip local deployment** - Variations must be testable

---

## Component Usage Requirements

### Critical Rule: Always Use SDS Components

All variation implementations MUST use SDS components exclusively. This ensures:
- Consistent behavior across all variations
- Easy transition to production (any variation can be finalized)
- Design token compliance from day one
- Accessibility built-in

### Required Component Usage

**Layout** (use for all structural differences):
- `Flex` from `layout` - Primary layout tool
- `Section` from `layout` - Containers, cards, sections
- `Grid` from `layout` - Complex grid requirements

**Primitives** (use real components, not placeholders):
- `Button`, `Input`, `Select` from `primitives` - Fully functional
- `Text`, `TextHeading`, `TextTitle` from `primitives` - Typography
- `Card`, `Navigation`, `Tab` etc. - All SDS primitives available

**Data hooks** (if applicable):
- `useAuth`, `usePricing`, `useProducts` from `data` - Real data layer
- `useMediaQuery` from `hooks` - Responsive behavior

### Example: Correct Component Usage in Variations

Each variation should differ in **how SDS components are composed**, not in custom styling:

**Variation A**: Dense layout with small gaps
```tsx
<Section padding="400">
  <Flex direction="row" gap="300" type="third">
    <Card {...props} />
  </Flex>
</Section>
```

**Variation B**: Spacious layout with large gaps
```tsx
<Section padding="1200">
  <Flex direction="row" gap="800" type="third">
    <Card {...props} />
  </Flex>
</Section>
```

**Variation C**: List-style layout
```tsx
<Section padding="800">
  <Flex direction="column" gap="600">
    <Card {...props} />
  </Flex>
</Section>
```

---

## Deployment and Validation

### Local Deployment Workflow for Variations

All variations MUST be deployed locally to enable side-by-side comparison and user testing.

#### Step 1: Organize Variation Files

Create a structured variations directory:
```
src/examples/
└── iterations/
    └── [feature-name]/
        ├── VariationA.tsx
        ├── VariationB.tsx
        ├── VariationC.tsx
        ├── ComparisonView.tsx  # Shows all variations side-by-side
        └── README.md
```

#### Step 2: Create Comparison View

Build a comparison component that displays all variations:
```tsx
// ComparisonView.tsx
import { Flex, Section } from "layout";
import { TextHeading, Navigation, NavigationPill } from "primitives";
import { useState } from "react";
import { VariationA } from "./VariationA";
import { VariationB } from "./VariationB";
import { VariationC } from "./VariationC";

export function ComparisonView() {
  const [selected, setSelected] = useState("A");

  return (
    <Section padding="1200">
      <Flex direction="column" gap="800" container>
        <TextHeading>Feature Iterations</TextHeading>
        
        <Navigation direction="row">
          <NavigationPill 
            isSelected={selected === "A"}
            onPress={() => setSelected("A")}
          >
            Option A: [Name]
          </NavigationPill>
          <NavigationPill 
            isSelected={selected === "B"}
            onPress={() => setSelected("B")}
          >
            Option B: [Name]
          </NavigationPill>
          <NavigationPill 
            isSelected={selected === "C"}
            onPress={() => setSelected("C")}
          >
            Option C: [Name]
          </NavigationPill>
        </Navigation>

        {selected === "A" && <VariationA />}
        {selected === "B" && <VariationB />}
        {selected === "C" && <VariationC />}
      </Flex>
    </Section>
  );
}
```

#### Step 3: Register in App Router

Add route to enable local testing:
```tsx
// In src/App.tsx
import { ComparisonView } from "./examples/iterations/feature-name/ComparisonView";

<Route path="/iterations/feature-name" element={<ComparisonView />} />
```

#### Step 4: Start Local Development Server

```bash
npm run app:dev
```

Navigate to: `http://localhost:8000/iterations/feature-name`

#### Step 5: Validate All Variations

For each variation, verify:
- [ ] Uses SDS components exclusively
- [ ] Responsive behavior works correctly
- [ ] Design tokens are applied consistently
- [ ] Interactive elements function properly
- [ ] No console errors or warnings
- [ ] Tradeoffs documented in README

#### Step 6: Document Variations

Create comprehensive `README.md`:
```markdown
# [Feature Name] Iterations

## Purpose
Brief description of what we're iterating on

## Route
`/iterations/feature-name`

## Variations

### Option A: [Name]
**Key Characteristics**: Dense, information-heavy
**Best For**: Power users, dashboards
**Pros**: Shows more data per screen
**Cons**: Can feel cramped on mobile

### Option B: [Name]
**Key Characteristics**: Spacious, minimal
**Best For**: Content-focused experiences
**Pros**: Easy to scan, feels premium
**Cons**: Requires more scrolling

### Option C: [Name]
**Key Characteristics**: Balanced, flexible
**Best For**: General-purpose applications
**Pros**: Adapts well to different content
**Cons**: May lack strong visual identity

## Decision Criteria
How to choose between variations based on project requirements

## Next Steps
What happens after a variation is selected
```

### Validation Checklist

Before considering iteration mode complete:

- [ ] **All variations use SDS components** - No custom HTML/CSS
- [ ] **Deployed locally with comparison view** - Route accessible
- [ ] **Side-by-side comparison functional** - Navigation between variations works
- [ ] **Each variation is responsive** - Tested at mobile/tablet/desktop
- [ ] **Tradeoffs documented** - README explains pros/cons clearly
- [ ] **Design tokens consistent** - All variations use same token system
- [ ] **No errors** - Console clean for all variations
- [ ] **Organized properly** - Files in `src/examples/iterations/[name]/`

---

## Deliverable

Iteration mode should produce:
1. **3-5 distinct variations** of the same feature/layout
2. **Clear documentation** of each option's characteristics
3. **Tradeoff analysis** explaining pros/cons
4. **Decision criteria** for when to choose each
5. **Responsive behavior** for all variations
6. **Consistent use of design tokens** across all options
7. **Deployed comparison view** with navigation between variations
8. **README documentation** explaining variations, tradeoffs, and decision criteria

