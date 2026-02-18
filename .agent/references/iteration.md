# Iteration Mode Reference

## When to Use
- User wants to see multiple ways to solve the same design problem
- Exploring different approaches before finalizing
- Comparing tradeoffs between design options
- A/B testing different layouts or component arrangements
- Mid-fidelity exploration with design system components

**Focus**: Generate 3-5 variations, use design tokens, explain tradeoffs clearly.

> [!CAUTION]
> **Output format is non-negotiable**: All output MUST be React `.tsx` files using SDS components.
> Never produce standalone HTML files, raw CSS, or `<div>` soup — even for quick explorations.
> Every prototype must import from `primitives`, `layout`, `compositions`, or `hooks`.
> Files go in `src/examples/iterations/<feature-name>/` with a `ComparisonView.tsx` switcher.

## User Persona
- Designers exploring design directions
- Product teams evaluating layout approaches
- Anyone who needs to make a data-driven design decision

## Resources to Load

1. **`assets/code-examples.md`** — Common patterns to build variations from
2. **`assets/components.md`** — Full component library to draw from
3. **`references/tokens.md`** — Spacing and color tokens to apply consistently across variations
4. **Storybook** — https://figma.github.io/sds/storybook for seeing components in action

## Behavioral Guidelines

- **Generate meaningfully different variations** — Not minor tweaks; each variation should represent a distinct design direction (e.g., card grid vs list view vs masonry)
- **Vary these dimensions**: layout approach, visual hierarchy, information density, navigation pattern, content emphasis
- **Document tradeoffs for each** — Pros, cons, best use cases, decision criteria
- **Use consistent tokens across all variations** — Same token system, different token values
- **Show responsive behavior** — Each variation must include `useMediaQuery` for mobile/desktop
- **Build a ComparisonView** — Create a switcher component so variations can be compared side-by-side
- **Deploy locally** — Run `npm run app:dev` and register a route for the comparison view

## Output Requirements

Every iteration mode output must:
1. Produce 3-5 distinct variation files: `VariationA.tsx`, `VariationB.tsx`, etc.
2. Include a `ComparisonView.tsx` with navigation between variations
3. Document each variation with: name, key characteristics, pros, cons, best for, when to choose
4. Place all files in `src/examples/iterations/[feature-name]/`
5. Include a `README.md` with variation summaries and decision criteria

## Pre-flight Checklist

Before writing any code, confirm:
- [ ] Output is React `.tsx` files (never standalone HTML/CSS)
- [ ] All components imported from `primitives`, `layout`, `compositions`, or `hooks`
- [ ] Files placed in `src/examples/iterations/<feature-name>/`
- [ ] No hardcoded colors, spacing, or typography — design tokens only
- [ ] `ComparisonView.tsx` planned with navigation between variations

## Validation Checklist

Before considering iteration mode complete:
- [ ] All variations use SDS components — no custom HTML/CSS
- [ ] Deployed locally with comparison view accessible
- [ ] Side-by-side navigation between variations works
- [ ] Each variation is responsive (mobile/tablet/desktop)
- [ ] Tradeoffs documented clearly in README
- [ ] Design tokens consistent across all variations
- [ ] No console errors for any variation

## Do's and Don'ts

✅ Create meaningfully different options (not minor tweaks)  
✅ Use consistent design tokens across all variations  
✅ Explain the rationale and tradeoffs for each approach  
✅ Show responsive behavior for each variation  
✅ Build a comparison view for side-by-side evaluation  

❌ Create minor tweaks as "variations"  
❌ Mix different token systems between variations  
❌ Skip the tradeoff explanation  
❌ Focus only on desktop layouts  
❌ Write raw HTML or custom CSS  
