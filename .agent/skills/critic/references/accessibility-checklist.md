# Accessibility Checklist

WCAG 2.1 AA practical checklist for evaluating SDS designs.

## Color & Contrast

- [ ] Normal text has 4.5:1 contrast ratio against its background
- [ ] Large text (18px+ or 14px+ bold) has 3:1 contrast ratio
- [ ] Using semantic color tokens (not primitive colors directly)
- [ ] Information is not conveyed by color alone (use text labels, icons too)
- [ ] Dark theme tokens maintain contrast (auto-handled by semantic tokens)

**How to verify:** Use browser DevTools contrast checker or axe extension.

## Keyboard Navigation

- [ ] All interactive elements reachable via Tab key
- [ ] Tab order follows visual layout (no unexpected jumps)
- [ ] All actions triggerable via Enter or Space
- [ ] No keyboard traps (user can always Tab away)
- [ ] Escape closes dialogs and menus

**SDS note:** Primitives handle keyboard via `@react-aria`. Custom compositions must also support keyboard.

## Focus States

- [ ] Visible focus indicator on all interactive elements
- [ ] Focus ring uses `--sds-size-stroke-focus-ring` (2px)
- [ ] Focus outlines are never removed via `outline: none`

## Images & Media

- [ ] All `Image` components have meaningful `alt` text
- [ ] Decorative images use `alt=""`
- [ ] Icons used as buttons have accessible labels
- [ ] Standalone icons use `aria-hidden="true"` if decorative

## Touch Targets

- [ ] All tappable elements are at least 44x44px
- [ ] IconButton uses at least medium size (32px) — preferably large (40px)
- [ ] Adequate spacing between touch targets (no accidental taps)

## Motion & Animation

- [ ] Respects `prefers-reduced-motion` media query
- [ ] No auto-playing animations that can't be paused
- [ ] Transitions are under 300ms
- [ ] No flashing content (3 flashes/second limit)

## Semantic HTML

- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skipping)
- [ ] `Navigation` component renders `<nav>`
- [ ] `Section` component renders `<section>`
- [ ] Form elements have associated labels
- [ ] ARIA attributes used correctly when needed

## Content

- [ ] Link text is descriptive (not "click here")
- [ ] Form labels describe expected input
- [ ] Error messages are specific and helpful
- [ ] Language is clear and jargon-free for the audience

## How to Test

1. **Keyboard only:** Navigate the entire page using only Tab, Enter, Escape, Arrow keys
2. **Screen reader:** Test with VoiceOver (Mac) — verify all content is announced
3. **Zoom:** Ensure page is usable at 200% zoom
4. **Contrast:** Check all text/background combinations with a contrast checker
5. **Mobile:** Test touch targets and responsive layout on a real device
