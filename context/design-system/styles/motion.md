# Motion

SDS does not define explicit duration or easing tokens in `theme.css`. Motion is handled at the component level.

## Guidelines

- Keep transitions under **300ms** for responsiveness
- Use `ease-out` for entrances, `ease-in` for exits
- Prefer `transform` and `opacity` for performant animations
- Avoid animating `width`, `height`, or `layout` properties

## Reduced Motion

Always respect the user's motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

SDS components handle this internally. Custom animations must also check `prefers-reduced-motion`.

## Backdrop Blur

The only motion-adjacent tokens in theme.css are backdrop filters:

| Token | Value |
|-------|-------|
| `--sds-effects-backdrop-filter-blur-overlay` | `blur(0.25rem)` |
| `--sds-effects-backdrop-filter-blur-glass` | `blur(0.25rem)` |
