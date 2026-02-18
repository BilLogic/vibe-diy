# Implementation Examples

This directory will contain full implementation examples showcasing how multiple SDS components work together in complete features.

## Purpose

While individual component documentation exists in Storybook and `assets/components.md`, this directory is meant for **complete, real-world implementations** that demonstrate:

- How to compose multiple components together
- Responsive patterns across breakpoints
- State management patterns
- Data integration with hooks
- Complex user flows

## Source Material

Examples should be extracted from:
- `src/examples/` - Full implementation files
- `src/stories/` - Storybook story files (especially `*.stories.tsx` files showing complex compositions)

## What to Include

Each example file should:
1. **Show composition** - Multiple components working together
2. **Include responsiveness** - Use of `useMediaQuery` and responsive props
3. **Demonstrate state** - React state management where applicable
4. **Integrate data** - Use of data hooks (`useAuth`, `usePricing`, `useProducts`) where relevant
5. **Be complete** - Runnable, production-quality code

## Example Topics

Future examples might include:
- Complete product listing page with filters
- Full authentication flow (login, register, forgot password)
- Pricing page with plan selection and cart
- Dashboard with multiple sections and navigation
- Form wizard with multi-step validation
- Responsive navigation with mobile menu

## Contributing Examples

When adding new examples:
1. Create a new `.tsx` or `.md` file
2. Include complete, working code
3. Add comments explaining key patterns
4. Show responsive behavior
5. Reference which components and patterns are used

## See Also

- [Component Reference](../components.md) - Full component library docs
- [Code Examples](../code-examples.md) - Common patterns and snippets
- Storybook (https://figma.github.io/sds/storybook) - Interactive component documentation
