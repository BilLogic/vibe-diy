# Finalization Mode Reference

## When to Use
- Implementing approved designs for production
- Building final features with pixel-perfect accuracy
- Refining existing implementations to production quality
- Creating complete, accessible, production-ready components

**Focus**: Pixel-perfect, all interactive states, full accessibility compliance.

## User Persona
- Developers implementing approved designs
- Engineers shipping production features
- Anyone building final, user-facing implementations

## Design Constraints

- **Strict token enforcement** — All values must use CSS variables from `src/theme.css`; no hardcoded colors, spacing, or typography
- **All interactive states mandatory** — Default, hover, focus, active/pressed, disabled, loading, error
- **Full accessibility compliance** — ARIA labels, keyboard navigation, focus management, WCAG AA contrast
- **Pixel-perfect to design specs** — Match approved designs exactly

## Resources to Load

Load ALL of the following:
1. **`references/tokens.md`** — Token reference with usage rules
2. **`assets/components.md`** — Component library reference
3. **`assets/code-examples.md`** — Common implementation patterns
4. **Storybook** — https://figma.github.io/sds/storybook for component behavior and API reference
5. **Component source files** — `src/ui/primitives/[Name]/[Name].tsx` for exact prop types

## Behavioral Guidelines

### Step-by-Step Implementation Process
1. **Extract design** — If implementing from Figma, use Figma MCP tools (`get_image`, `get_code`, `get_variable_defs`)
2. **Map to SDS components** — Identify which SDS primitives/compositions match each Figma element
3. **Implement all states** — Default, hover, focus, active, disabled, loading, error for every interactive element
4. **Apply tokens exactly** — Map Figma token values to CSS variables; never hardcode
5. **Ensure accessibility** — ARIA labels, keyboard support, focus management, semantic HTML
6. **Handle responsive behavior** — Use `useMediaQuery` for all breakpoint differences
7. **Cover edge cases** — Empty states, error states, loading states, long content

### Figma Integration (when implementing from Figma)
- Use `get_image` for visual context and reference
- Use `get_code` for component structure and hierarchy
- Use `get_variable_defs` for design token values
- Read annotations carefully — check for `hidden={true}` nodes
- Always verify Figma data against actual SDS components (Figma may suggest props that differ from the real API)

### File Organization
Production features go in:
```
src/examples/production/[feature-name]/
├── index.tsx            # Main feature component
├── components/          # Feature-specific sub-components
├── hooks/               # Feature-specific hooks
├── types.ts             # TypeScript types
└── README.md            # Feature documentation
```

## Quality Checklist

### Functionality
- [ ] All features work as specified
- [ ] Form validation works correctly
- [ ] Error states display properly
- [ ] Loading states show during async operations
- [ ] Data fetching/mutations work

### Interactive States
- [ ] Default state
- [ ] Hover state
- [ ] Focus state (keyboard visible)
- [ ] Active/pressed state
- [ ] Disabled state
- [ ] Loading state
- [ ] Error state

### Responsive Design
- [ ] Mobile (< 768px) tested
- [ ] Tablet (768px–1024px) tested
- [ ] Desktop (> 1024px) tested
- [ ] Breakpoint transitions smooth

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Space, Escape)
- [ ] Focus indicators visible
- [ ] ARIA labels present on all interactive elements
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Semantic HTML used

### Design Tokens
- [ ] No hardcoded colors
- [ ] No hardcoded spacing
- [ ] No hardcoded typography
- [ ] All values use `var(--sds-*)` CSS variables

### Deployment
- [ ] Deployed locally on `localhost:8000`
- [ ] Route accessible and loads without errors
- [ ] No JavaScript errors or React warnings in console

## Do's and Don'ts

✅ Match design specifications exactly  
✅ Implement all interactive states  
✅ Ensure full accessibility compliance  
✅ Use only design tokens, never hardcode  
✅ Test across all breakpoints  
✅ Handle all error cases  
✅ Use semantic HTML  

❌ Skip any interactive state  
❌ Hardcode design values  
❌ Ignore accessibility  
❌ Skip responsive testing  
❌ Forget keyboard navigation  
❌ Import from `@react-aria` directly  
❌ Write custom layout CSS  
