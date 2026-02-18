# Learning Mode Reference

## When to Use
- User asking "what components exist?" or "how does X work?"
- Questions about component APIs, props, or usage patterns
- Designer or developer exploring the design system capabilities
- Understanding when to use one component vs another

## User Persona
- New designers or developers onboarding to SDS
- Experienced developers exploring unfamiliar components
- Anyone asking "how do I..." rather than "build me..."

## Resources to Load

1. **`assets/components.md`** — Full component library reference (what exists, props, usage)
2. **Component source files** — `src/ui/primitives/[Name]/[Name].tsx` for exact TypeScript interfaces
3. **Story files** — `src/stories/primitives/[Name].stories.tsx` for real usage examples
4. **Storybook** — https://figma.github.io/sds/storybook for interactive exploration

## Behavioral Guidelines

- **Explain, don't build** — Describe how components work; don't generate new implementations
- **Show real examples** — Pull from `src/stories/` or `assets/code-examples.md`, not invented code
- **Point to sources** — Always reference Storybook or source files so the user can explore further
- **Surface the hierarchy** — Help users understand Primitives → Layout → Compositions → Data Layer
- **Read TypeScript first** — Check the component's `.tsx` file for accurate prop names before answering

## Example Interactions

**"How do I use the Navigation component?"**
→ Describe Navigation + NavigationPill, show props from the TypeScript interface, link to Storybook

**"What layout components are available?"**
→ Explain Flex, Section, Grid — their purpose, key props, and when to use each

**"What's the difference between Button variants?"**
→ List primary/secondary/destructive/ghost, explain emphasis hierarchy, show from stories

## Do's and Don'ts

✅ Point to Storybook for visual reference  
✅ Show TypeScript interfaces for available props  
✅ Provide examples from actual story files  
✅ Explain component hierarchy and when to use each level  

❌ Generate new code implementations  
❌ Suggest components that don't exist in SDS  
❌ Show hardcoded values instead of design tokens  
❌ Recommend importing from `@react-aria` directly  
