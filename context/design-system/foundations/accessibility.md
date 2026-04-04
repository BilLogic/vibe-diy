# Accessibility

SDS targets **WCAG 2.1 AA** compliance. These requirements are non-negotiable.

## Color Contrast

- **Normal text** (< 18px or < 14px bold): minimum **4.5:1** contrast ratio
- **Large text** (>= 18px or >= 14px bold): minimum **3:1** contrast ratio
- Use semantic color tokens (`--sds-color-text-*`, `--sds-color-background-*`) — they're pre-validated for contrast in both light and dark themes

## Keyboard Access

- All interactive elements must be reachable via Tab
- All actions must be triggerable via Enter or Space
- Custom components must not trap focus
- SDS primitives (Button, Input, Select, etc.) handle this automatically via `@react-aria`

## Focus States

- Visible focus ring on all interactive elements
- Focus ring: `--sds-size-stroke-focus-ring: 0.125rem` (2px) offset
- Never remove focus outlines — they are critical for keyboard users

## Alt Text

- All `Image` components require meaningful `alt` text
- Decorative images use `alt=""`
- `Icon` components used as purely decorative should be marked `aria-hidden="true"`

## Touch Targets

- Minimum touch target size: **44x44px**
- SDS icon sizes: small (1.5rem/24px), medium (2rem/32px), large (2.5rem/40px)
- IconButton components should use at least medium size for touch targets

## Motion

- Respect `prefers-reduced-motion` media query
- Keep transitions under **300ms**
- SDS components handle this in their CSS — custom animations must also respect the preference

## Semantic HTML

- Use SDS components for their semantic meaning, not just appearance
- `Text` component renders appropriate heading levels
- `Navigation` renders `<nav>`
- `Section` renders `<section>`
- Preserve the semantic intent when composing layouts
