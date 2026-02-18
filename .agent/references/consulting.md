# Consulting Mode - Early Concept Exploration

## When to Use This Mode

- Early-stage concept exploration
- Information architecture planning
- Structural wireframing before visual design
- User flow mapping
- Layout hierarchy planning

**Focus**: Structure over style, content hierarchy over visual polish.

## Constraints

### Greyscale Only
- Use only neutral colors: black, white, greys
- No brand colors or theming
- Focus on contrast and hierarchy through typography and spacing

### Structure Over Style
- Prioritize semantic HTML
- Focus on content hierarchy
- Use layout components (Flex, Section) for structure
- Minimal styling - just enough to show structure

### Layout-Focused
- Demonstrate information architecture
- Show responsive behavior
- Indicate content zones and relationships
- Use spacing to show hierarchy

## What to Load

1. **Layout Examples**
   - Location: `assets/examples/`
   - Shows common layout patterns

2. **Layout Components**
   - `Flex` from `layout` - Flexbox layouts
   - `Section` from `layout` - Page sections
   - `Grid` from `layout` - Grid layouts (when needed)

3. **Basic Text Components**
   - `Text`, `TextHeading`, `TextTitle` from `primitives`
   - For content hierarchy

4. **Wireframe Patterns**
   - Simple boxes and placeholder content
   - Semantic HTML elements

## Behavior in This Mode

### Generate Structural Wireframes

Focus on:
1. **Content hierarchy** - What's most important?
2. **Layout structure** - How is content organized?
3. **Responsive behavior** - How does it adapt?
4. **User flow** - What's the navigation path?

Example wireframe structure:
```tsx
import { Flex, Section } from "layout";
import { Text, TextHeading } from "primitives";

export function ConceptWireframe() {
  return (
    <Section padding="800">
      <Flex direction="column" gap="600" container>
        {/* Header */}
        <Flex direction="row" alignPrimary="space-between">
          <TextHeading>Site Name</TextHeading>
          <Flex direction="row" gap="400">
            <Text>Nav Item 1</Text>
            <Text>Nav Item 2</Text>
            <Text>Nav Item 3</Text>
          </Flex>
        </Flex>

        {/* Hero */}
        <Section variant="stroke" padding="1200">
          <Flex direction="column" gap="400" alignPrimary="center">
            <TextHeading>Main Headline</TextHeading>
            <Text>Supporting text explaining the value proposition</Text>
          </Flex>
        </Section>

        {/* Content Grid */}
        <Flex direction="row" gap="600" type="third">
          <Section variant="stroke" padding="600">
            <Flex direction="column" gap="300">
              <TextHeading>Feature 1</TextHeading>
              <Text>Description of feature</Text>
            </Flex>
          </Section>
          {/* Repeat for features 2-3 */}
        </Flex>
      </Flex>
    </Section>
  );
}
```

### Use Semantic HTML

Emphasize proper HTML semantics:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Proper heading hierarchy (`<h1>`, `<h2>`, `<h3>`)
- Lists (`<ul>`, `<ol>`) for navigation and grouped content
- `<figure>` for images with captions

### Show Layout Hierarchy

Use spacing and layout to indicate:
- Primary vs secondary content
- Related content groups
- Navigation zones
- Content vs UI chrome

### Responsive Patterns

Use `useMediaQuery` to show mobile/desktop variations:
```tsx
import { useMediaQuery } from "hooks";

function ResponsiveLayout() {
  const { isMobile } = useMediaQuery();

  return (
    <Flex 
      direction={isMobile ? "column" : "row"}
      gap={isMobile ? "400" : "800"}
    >
      {/* Content adapts to viewport */}
    </Flex>
  );
}
```

## Greyscale Styling

Use only neutral design tokens:
```css
/* Backgrounds */
background: var(--sds-color-background-default-default);  /* White */
background: var(--sds-color-background-subtle-default);   /* Light grey */

/* Text */
color: var(--sds-color-text-default-default);  /* Black */
color: var(--sds-color-text-subtle-default);   /* Dark grey */

/* Borders */
border: 1px solid var(--sds-color-border-subtle-default);  /* Grey border */
```

## Available Tools

### Stitch MCP
- Generate wireframes from PRDs
- Extract structure from requirements
- Use for initial layout planning

### Layout Components
- **Flex**: For most layout needs
  - `direction`: row/column
  - `gap`: spacing between items
  - `type`: "half"/"third" for automatic responsive grids
- **Section**: For page sections
  - `padding`: consistent spacing
  - `variant`: "stroke" for visual boundaries
- **Grid**: For complex grid layouts

## Example Patterns

### Header Wireframe
```tsx
<Flex direction="row" alignPrimary="space-between" gap="600">
  <Text>Logo</Text>
  <Flex direction="row" gap="400">
    <Text>Link 1</Text>
    <Text>Link 2</Text>
    <Text>Link 3</Text>
  </Flex>
</Flex>
```

### Card Grid Wireframe
```tsx
<Flex direction="row" gap="600" type="third">
  {[1, 2, 3].map(n => (
    <Section key={n} variant="stroke" padding="600">
      <Flex direction="column" gap="300">
        <TextHeading>Card {n}</TextHeading>
        <Text>Card description placeholder</Text>
      </Flex>
    </Section>
  ))}
</Flex>
```

### Form Wireframe
```tsx
<Section variant="stroke" padding="800">
  <Flex direction="column" gap="600">
    <TextHeading>Form Title</TextHeading>
    
    <Flex direction="column" gap="400">
      <Text>Field Label 1</Text>
      <Section variant="stroke" padding="300">
        <Text>[Input Field]</Text>
      </Section>
    </Flex>
    
    <Flex direction="column" gap="400">
      <Text>Field Label 2</Text>
      <Section variant="stroke" padding="300">
        <Text>[Input Field]</Text>
      </Section>
    </Flex>
    
    <Text>[Submit Button]</Text>
  </Flex>
</Section>
```

## Do's and Don'ts

### ✅ Do

- Focus on content structure and hierarchy
- Use semantic HTML elements
- Show responsive behavior with useMediaQuery
- Use Flex and Section for all layout
- Keep styling minimal - just structure
- Use placeholder text to indicate content type
- Document the information architecture
- **Use SDS components exclusively** - Never write raw HTML/CSS
- **Deploy prototypes locally** for validation before finalizing

### ❌ Don't

- Apply brand colors or theming
- Add visual polish or decorative elements
- Use actual component variants (buttons, inputs, etc.)
- Skip responsive considerations
- Create custom CSS styles
- Focus on pixel-perfect aesthetics
- Include real content or copy
- **Write raw HTML or custom styles** - Always use SDS primitives and layouts
- **Skip local deployment testing** - Always validate on local server

---

## Component Usage Requirements

### Critical Rule: Always Use SDS Components

Even in Consulting mode (wireframing), all code MUST use SDS components. Never write:
- Raw HTML without SDS wrapper components
- Custom CSS for layout (use `Flex`, `Section`, `Grid` instead)
- Inline styles or hardcoded values

### Approved Component Set for Consulting Mode

**Layout components** (required for all structural work):
- `Flex` from `layout` - All flexbox layouts
- `Section` from `layout` - Page sections, cards, containers
- `Grid` from `layout` - Complex grid layouts

**Typography components** (for content hierarchy):
- `Text` from `primitives` - Body text
- `TextHeading` from `primitives` - Section headings
- `TextTitle` from `primitives` - Page titles
- `TextSmall` from `primitives` - Captions, labels

**Minimal interactive elements** (only if needed for flow demonstration):
- Basic `Button` from `primitives` - Use greyscale variant
- `Link` from `primitives` - Navigation placeholders

### Example: Correct vs Incorrect

❌ **WRONG** - Raw HTML:
```tsx
function Wireframe() {
  return (
    <div className="container">
      <div className="header">
        <h1>Logo</h1>
        <nav>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </nav>
      </div>
    </div>
  );
}
```

✅ **CORRECT** - SDS Components:
```tsx
import { Flex, Section } from "layout";
import { Text, TextHeading } from "primitives";

function Wireframe() {
  return (
    <Section padding="800">
      <Flex direction="row" alignPrimary="space-between" container>
        <TextHeading>Logo</TextHeading>
        <Flex direction="row" gap="400">
          <Text>Link 1</Text>
          <Text>Link 2</Text>
        </Flex>
      </Flex>
    </Section>
  );
}
```

---

## Deployment and Validation

### Local Deployment Workflow

All prototypes created in Consulting mode MUST be deployed locally for validation before being considered complete.

#### Step 1: Organize Prototype Files

Create prototypes in structured directories:
```
src/examples/
└── prototypes/
    └── [project-name]/
        ├── index.tsx        # Main component
        ├── components/      # Sub-components
        └── README.md        # Prototype documentation
```

#### Step 2: Register in App Router

Add route to `src/App.tsx` or create dedicated prototype index:
```tsx
// In src/App.tsx or src/examples/prototypes/index.tsx
import { YourPrototype } from "./examples/prototypes/project-name";

// Add to routing or navigation
<Route path="/prototypes/project-name" element={<YourPrototype />} />
```

#### Step 3: Start Local Development Server

```bash
# From SDS repository root
npm run app:dev
```

Server runs at: `http://localhost:8000`

#### Step 4: Validate in Browser

Navigate to your prototype route and verify:
- [ ] Layout structure matches wireframe intent
- [ ] Responsive behavior works (resize browser window)
- [ ] Content hierarchy is clear
- [ ] Navigation flow is logical
- [ ] No console errors
- [ ] All components render correctly

#### Step 5: Document Prototype

Create `README.md` in prototype directory:
```markdown
# [Prototype Name]

## Purpose
Brief description of what this wireframe demonstrates

## Route
`/prototypes/project-name`

## Key Features
- Feature 1
- Feature 2

## Responsive Behavior
- Mobile: Single column, stacked layout
- Desktop: Multi-column grid

## Next Steps
What should happen after this wireframe is approved
```

### Validation Checklist

Before considering a consulting mode prototype complete, verify:

- [ ] **Uses SDS components only** - No raw HTML/CSS
- [ ] **Deployed locally** - Running on `localhost:8000`
- [ ] **Responsive tested** - Works on mobile and desktop breakpoints
- [ ] **Structure is clear** - Content hierarchy is evident
- [ ] **Documented** - README.md explains purpose and features
- [ ] **No errors** - Console is clean, no warnings
- [ ] **Organized properly** - Files in `src/examples/prototypes/[name]/`

---

## Deliverable

Consulting mode should produce:
1. **Structural wireframes** showing layout and hierarchy
2. **Responsive behavior** documented with useMediaQuery
3. **Content zones** clearly defined
4. **Navigation flow** indicated
5. **Semantic HTML** structure
6. **Comments** explaining information architecture decisions
7. **Deployed prototype** running on local development server
8. **README documentation** explaining the prototype's purpose and features

