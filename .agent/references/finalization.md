# Finalization Mode - Production-Ready Implementation

## When to Use This Mode

- Implementing approved designs for production
- Building final features with pixel-perfect accuracy
- Refining existing implementations to production quality
- Creating complete, accessible, production-ready components

**Focus**: Pixel-perfect, all interactive states, full accessibility compliance.

## Constraints

### Strict Token Enforcement
- All design values must use CSS variables from `src/theme.css`
- No hardcoded colors, spacing, or typography
- Match design tokens exactly as specified

### All Interactive States
Every interactive element must handle:
- **Default** - Initial state
- **Hover** - Mouse over
- **Focus** - Keyboard focus
- **Active/Pressed** - Click/tap
- **Disabled** - Non-interactive state
- **Loading** - Async operations
- **Error** - Validation failures (for forms)

### Accessibility Compliance
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Semantic HTML

## What to Load

1. **All References**
   - Component documentation: `assets/components.md`
   - Code examples: `assets/code-examples.md`
   - Design tokens: `src/theme.css`

2. **Storybook**
   - Live documentation: https://figma.github.io/sds/storybook
   - Component API reference
   - Interactive examples

3. **Component Source Files**
   - Check TypeScript interfaces for exact prop types
   - Review existing patterns in `src/ui/primitives/`
   - Reference stories in `src/stories/`

## Available Tools

### Figma MCP Tools
When implementing from Figma designs:

- **`get_image`**: Get visual representation of the design
- **`get_code`**: Extract component structure and props
- **`get_code_connect_map`**: See Figma→React component mappings
- **`get_variable_defs`**: Get design token values

**Important**: Always verify Figma data against actual SDS components. Figma might suggest components that don't exist or props that differ from the actual API.

### Stitch MCP
- Generate structural wireframes from PRDs
- Use for initial planning before detailed implementation

### Storybook
- Reference for component APIs
- Visual testing of variations
- Responsive behavior verification

## Behavior in This Mode

### Pixel-Perfect Implementation

Match the approved design exactly:
1. Use exact spacing tokens specified
2. Match typography scales precisely
3. Implement correct color tokens
4. Maintain proper visual hierarchy
5. Respect responsive breakpoints

### Token Mapping

Numeric props map to CSS variables:
```tsx
// Component notation
<Section padding="600" />
<Flex gap="800" />
<Section padding="1200" />

// Maps to CSS
padding: var(--sds-size-space-600)
gap: var(--sds-size-space-800)
padding: var(--sds-size-space-1200)
```

### Complete State Coverage

For every interactive element:

```tsx
<Button
  variant="primary"
  isDisabled={isLoading || isDisabled}
  onPress={handleClick}
>
  {isLoading ? "Loading..." : "Submit"}
</Button>
```

### Responsive Implementation

Use `useMediaQuery` for breakpoint-specific behavior:

```tsx
import { useMediaQuery } from "hooks";

function ResponsiveFeature() {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <Section padding={isMobile ? "400" : isTablet ? "800" : "1200"}>
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "400" : "800"}
        type={isDesktop ? "third" : undefined}
      >
        {/* Content */}
      </Flex>
    </Section>
  );
}
```

## Accessibility Requirements

### Keyboard Navigation
```tsx
// All interactive elements must be keyboard accessible
<Button onPress={handleClick}>
  Click Me
</Button>

// Custom interactions need keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }}
>
  Custom Button
</div>
```

### ARIA Labels
```tsx
// Descriptive labels for screen readers
<IconButton aria-label="Close dialog">
  <IconClose />
</IconButton>

// Form inputs with proper labels
<Input
  label="Email Address"
  type="email"
  isRequired
  errorMessage="Please enter a valid email"
/>
```

### Focus Management
```tsx
// Visible focus states (handled by SDS components)
<Button variant="primary">
  Focused button has visible outline
</Button>

// Focus trapping in modals
<Dialog>
  {/* Focus stays within dialog until closed */}
</Dialog>
```

### Semantic HTML
```tsx
// Use proper HTML elements
<nav>
  <Navigation>
    <NavigationPill>Home</NavigationPill>
  </Navigation>
</nav>

<main>
  <Section>
    <article>
      {/* Main content */}
    </article>
  </Section>
</main>

<footer>
  <Footer />
</footer>
```

## Responsive Patterns

### Mobile-First Approach
```tsx
function ResponsiveLayout() {
  const { isMobile } = useMediaQuery();

  return (
    <Section variant="stroke" padding={isMobile ? "600" : "1600"}>
      <Flex
        direction="column"
        gap={isMobile ? "600" : "1200"}
        container
        alignPrimary="center"
      >
        {/* Navigation */}
        <Navigation direction={isMobile ? "column" : "row"}>
          <NavigationPill isSelected>Active</NavigationPill>
          <NavigationPill>Inactive</NavigationPill>
        </Navigation>

        {/* Content Grid */}
        <Flex
          direction={isMobile ? "column" : "row"}
          gap="1600"
          type={isMobile ? undefined : "third"}
        >
          {content.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
```

### Breakpoint Usage
```tsx
const { isMobile, isTablet, isDesktop } = useMediaQuery();

// isMobile: < 768px
// isTablet: 768px - 1024px
// isDesktop: > 1024px
```

## Form Implementation

Production-ready forms require:

```tsx
import { Input, Button, Fieldset } from "primitives";
import { Flex, Section } from "layout";
import { useState } from "react";

function ProductionForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Validation, submission, error handling
  };

  return (
    <form onSubmit={handleSubmit}>
      <Section padding="800">
        <Flex direction="column" gap="600">
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            isRequired
            isInvalid={!!errors.email}
            errorMessage={errors.email}
          />

          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            isRequired
            isInvalid={!!errors.password}
            errorMessage={errors.password}
          />

          <Button
            type="submit"
            variant="primary"
            isDisabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </Flex>
      </Section>
    </form>
  );
}
```

## Data Integration

Use SDS data layer hooks:

```tsx
import { useAuth, usePricing, useProducts } from "data";

function ProductionFeature() {
  // Authentication
  const { user, login, logout, isLoading } = useAuth();

  // Pricing/billing
  const { plans, selectedPlan, updatePlan } = usePricing();

  // Products/catalog
  const { products, filters, applyFilter } = useProducts();

  // Use in implementation...
}
```

## Error Handling

Handle all error states:

```tsx
function RobustComponent() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (error) {
    return (
      <Section padding="800">
        <Notification variant="error">
          {error.message}
        </Notification>
      </Section>
    );
  }

  if (isLoading) {
    return (
      <Section padding="800">
        <Text>Loading...</Text>
      </Section>
    );
  }

  return <>{/* Main content */}</>;
}
```

## Testing Checklist

Before considering implementation complete:

### Functionality
- [ ] All features work as specified
- [ ] Form validation works correctly
- [ ] Error states display properly
- [ ] Loading states show during async operations
- [ ] Data fetching/mutations work

### Responsive Design
- [ ] Tested on mobile (< 768px)
- [ ] Tested on tablet (768px - 1024px)
- [ ] Tested on desktop (> 1024px)
- [ ] Breakpoints transition smoothly

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Semantic HTML used

### States
- [ ] Default state
- [ ] Hover state
- [ ] Focus state
- [ ] Active/pressed state
- [ ] Disabled state
- [ ] Loading state
- [ ] Error state

### Design Tokens
- [ ] No hardcoded colors
- [ ] No hardcoded spacing
- [ ] No hardcoded typography
- [ ] All values use CSS variables

## Do's and Don'ts

### ✅ Do

- Match design specifications exactly
- Implement all interactive states
- Ensure full accessibility compliance
- Use only design tokens, never hardcode
- Test across all breakpoints
- Handle all error cases
- Provide loading states
- Use semantic HTML
- Follow existing component patterns
- Reference Storybook for component APIs
- **Deploy prototypes locally** for comprehensive testing
- **Test on actual local server** before considering complete

### ❌ Don't

- Skip any interactive state
- Hardcode design values
- Ignore accessibility
- Skip responsive testing
- Forget keyboard navigation
- Create custom components unnecessarily
- Import from `@react-aria` directly
- Write custom layout CSS
- Skip error handling
- Assume desktop-only usage
- **Skip local deployment testing** - Always validate on actual server
- **Test only in dev environment** - Deploy to verify real behavior

---

## Deployment and Validation

### Local Deployment Workflow for Production Features

All production implementations MUST be deployed locally and comprehensively tested before being considered complete.

#### Step 1: Organize Production Files

Structure production features in appropriate directories:
```
src/examples/
└── production/
    └── [feature-name]/
        ├── index.tsx            # Main feature component
        ├── components/          # Feature-specific sub-components
        ├── hooks/              # Feature-specific hooks
        ├── types.ts            # TypeScript types
        ├── utils.ts            # Helper utilities
        └── README.md           # Feature documentation
```

#### Step 2: Register Feature Route

Add production feature to app routing:
```tsx
// In src/App.tsx
import { FeatureName } from "./examples/production/feature-name";

<Route path="/features/feature-name" element={<FeatureName />} />
```

#### Step 3: Start Local Development Server

```bash
npm run app:dev
```

Navigate to: `http://localhost:8000/features/feature-name`

#### Step 4: Comprehensive Validation

Test all aspects of the production feature:

**Functionality Testing:**
- [ ] All features work as specified
- [ ] Form validation functions correctly
- [ ] Data fetching/mutations work
- [ ] Error handling displays properly
- [ ] Loading states show during async operations

**Interactive States Testing:**
- [ ] Default state renders correctly
- [ ] Hover state works (visual feedback on mouse over)
- [ ] Focus state visible (keyboard navigation)
- [ ] Active/pressed state (click/tap feedback)
- [ ] Disabled state prevents interaction
- [ ] Loading state shows during async work
- [ ] Error state displays validation messages

**Responsive Testing:**
- [ ] Mobile (\u003c 768px) - Test by resizing browser
- [ ] Tablet (768px - 1024px) - Test intermediate sizes
- [ ] Desktop (\u003e 1024px) - Test full-width layout
- [ ] Breakpoint transitions are smooth
- [ ] Content remains readable at all sizes

**Accessibility Testing:**
- [ ] Tab through all interactive elements
- [ ] Focus indicators clearly visible
- [ ] Enter/Space activates buttons
- [ ] ARIA labels present (inspect with dev tools)
- [ ] Screen reader announces content properly
- [ ] Color contrast meets WCAG AA standards
- [ ] Semantic HTML structure (inspect DOM)

**Design Token Compliance:**
- [ ] No hardcoded colors (inspect styles in dev tools)
- [ ] No hardcoded spacing values
- [ ] No hardcoded typography
- [ ] All values use `var(--sds-*)` CSS variables

#### Step 5: Browser Console Check

Open browser developer console and verify:
- [ ] No JavaScript errors
- [ ] No React warnings
- [ ] No console warnings
- [ ] No network errors (check Network tab)

#### Step 6: Document Production Feature

Create comprehensive `README.md`:
```markdown
# [Feature Name]

## Purpose
Brief description of what this production feature does

## Route
`/features/feature-name`

## Key Features
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Interactive States
All components implement:
- Default, Hover, Focus, Active, Disabled, Loading, Error states

## Responsive Behavior
- Mobile: Single column, stacked layout, compact spacing
- Tablet: Two-column grid, medium spacing
- Desktop: Three-column grid, generous spacing

## Accessibility
- Full keyboard navigation support
- ARIA labels on all interactive elements
- Screen reader compatible
- WCAG AA color contrast

## Data Integration
- Uses `useAuth` for authentication
- Uses `usePricing` for billing
- Error handling for all API calls

## Testing Checklist
- [x] Functionality tested
- [x] All states tested
- [x] Responsive tested
- [x] Accessibility verified
- [x] No console errors
```

### Production Validation Checklist

Before considering finalization mode complete:

**Code Quality:**
- [ ] **Uses SDS components exclusively** - No custom HTML/CSS
- [ ] **All design tokens used** - No hardcoded values
- [ ] **TypeScript types defined** - Proper type safety
- [ ] **No linting errors** - Clean code

**Deployment:**
- [ ] **Deployed locally** - Running on `localhost:8000`
- [ ] **Route accessible** - Feature loads without errors
- [ ] **No console errors** - Clean browser console

**Functionality:**
- [ ] **All features work** - Complete implementation
- [ ] **All states implemented** - Default, hover, focus, etc.
- [ ] **Error handling present** - Graceful failure modes
- [ ] **Loading states shown** - User feedback during async

**Responsive:**
- [ ] **Mobile tested** - Works on small screens
- [ ] **Tablet tested** - Works on medium screens
- [ ] **Desktop tested** - Works on large screens
- [ ] **Transitions smooth** - No layout jumps

**Accessibility:**
- [ ] **Keyboard navigation** - Full tab support
- [ ] **Focus visible** - Clear focus indicators
- [ ] **ARIA labels** - Screen reader support
- [ ] **Semantic HTML** - Proper element usage
- [ ] **Color contrast** - WCAG AA compliance

**Documentation:**
- [ ] **README complete** - All sections filled
- [ ] **Usage documented** - Clear instructions
- [ ] **Test checklist** - Validation confirmed

---

## Deliverable

Finalization mode should produce:
1. **Production-ready code** with all features working
2. **Complete state coverage** (default, hover, focus, active, disabled, loading, error)
3. **Full accessibility** compliance
4. **Responsive behavior** tested across breakpoints
5. **Proper error handling** for all failure cases
6. **Design token usage** for all styling
7. **Documentation** of any complex logic or patterns
8. **Deployed and validated prototype** running on local development server
9. **Comprehensive README** with testing checklist and feature documentation

