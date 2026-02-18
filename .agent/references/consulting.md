# Consulting Mode Reference

## When to Use
- Early-stage concept exploration before visual design
- Information architecture planning
- Structural wireframing to validate layout and content hierarchy
- User flow mapping and navigation structure

**Focus**: Structure over style. Content hierarchy over visual polish.

## User Persona
- Designers in early ideation phase
- Product managers defining information architecture
- Anyone who needs to validate structure before committing to visual design

## Design Constraints

- **Greyscale only** — Use only neutral tokens: `background-default`, `background-subtle`, `text-default`, `text-subtle`, `border-subtle`
- **No brand colors** — No primary, accent, or semantic colors
- **No visual polish** — No shadows, gradients, or decorative elements
- **Default states only** — No hover, focus, or interactive state styling
- **Structure over style** — Spacing and layout to show hierarchy, not aesthetics

## Resources to Load

1. **`assets/code-examples.md`** — Layout patterns to build from (responsive layouts, card grids)
2. **`assets/components.md`** — Approved component set for consulting mode (layout + typography only)
3. **`references/tokens.md`** — Spacing tokens only; ignore color and shadow tokens

## Behavioral Guidelines

- **Ask about content priority first** — Before generating code, ask: "What's the most important content? What's secondary?"
- **Use layout components exclusively** — `Flex`, `Section`, `Grid` for all structure; never raw `<div>` with CSS
- **Use typography for hierarchy** — `TextTitle`, `TextHeading`, `Text`, `TextSmall` to show content levels
- **Show responsive behavior** — Always include `useMediaQuery` for mobile/desktop differences
- **Comment the architecture** — Add inline comments explaining information architecture decisions
- **Deploy locally to validate** — Run `npm run app:dev` and navigate to the prototype route

## Output Requirements

Every consulting mode output must:
1. Use SDS layout components exclusively (no raw HTML/CSS)
2. Be greyscale only (neutral tokens only)
3. Show responsive behavior with `useMediaQuery`
4. Include comments explaining the information architecture
5. Be placed in `src/examples/prototypes/[project-name]/`
6. Include a `README.md` documenting purpose and structure

## Approved Component Set

**Layout** (required for all structural work):
- `Flex` from `layout` — All flexbox layouts
- `Section` from `layout` — Page sections, containers
- `Grid` from `layout` — Complex grid layouts

**Typography** (for content hierarchy):
- `TextTitle` from `primitives` — Page titles
- `TextHeading` from `primitives` — Section headings
- `Text` from `primitives` — Body text
- `TextSmall` from `primitives` — Captions, labels

**Minimal interactive** (only if needed for flow):
- `Button` from `primitives` — Use neutral/ghost variant only
- `Link` from `primitives` — Navigation placeholders

## Validation Checklist

Before considering a consulting prototype complete:

- [ ] Uses SDS components only — no raw HTML/CSS
- [ ] Greyscale only — no brand or semantic colors
- [ ] Responsive behavior tested (resize browser)
- [ ] Content hierarchy is clear
- [ ] Architecture decisions commented in code
- [ ] Files organized in `src/examples/prototypes/[name]/`
- [ ] `README.md` explains purpose and structure
- [ ] No console errors

## Do's and Don'ts

✅ Focus on content structure and hierarchy  
✅ Use semantic HTML elements within SDS components  
✅ Show responsive behavior with `useMediaQuery`  
✅ Use placeholder text to indicate content type  
✅ Document the information architecture  

❌ Apply brand colors or theming  
❌ Add visual polish or decorative elements  
❌ Write raw HTML or custom CSS  
❌ Skip responsive considerations  
❌ Include real content or copy  
