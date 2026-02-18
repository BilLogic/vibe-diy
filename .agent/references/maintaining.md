# Maintaining Mode Reference

## When to Use
- Adding new primitives or compositions to the design system
- Syncing design tokens after Figma changes
- Generating new icons from Figma
- Updating component metadata or descriptions in Figma
- Managing dev resources or Code Connect mappings

**Important**: This mode is for **design system contributors**, not product developers building with the system.

## User Persona
- Design system team members
- Contributors adding new components
- Developers running sync scripts after Figma updates

## Resources to Load

1. **`scripts/README.md`** — Comprehensive documentation for all sync scripts
2. **`src/ui/primitives/`** — Existing component patterns to follow
3. **`src/theme.css`** — All CSS custom properties (design tokens)
4. **`assets/components.md`** — To update when adding new components

## Behavioral Guidelines

- **Check existing patterns first** — Before creating anything new, review similar components in `src/ui/primitives/`
- **Follow the scaffolding convention** — New primitives go in `src/ui/primitives/NewComponent/NewComponent.tsx`
- **Always export** — Add new components to `src/ui/primitives/index.ts`
- **Create Storybook stories** — Every new primitive needs `src/stories/primitives/NewComponent.stories.tsx`
- **Update documentation** — Add new components to `assets/components.md`
- **Use scripts for sync** — Never manually edit `src/theme.css` or icon files; use the sync scripts

## Workflows

### Token Sync
1. Run `npm run script:tokens:rest` (requires Figma API token in `.env`)
2. Alternative without API: export JSON from Figma plugins → save to `scripts/tokens/` → run `npm run script:tokens`
3. Review changes in `src/theme.css`

### Icon Generation
1. Run `npm run script:icons:rest` (requires Figma API token in `.env`)
2. Alternative: export from Figma plugin → save to `scripts/icons/icons.json` → run `npm run script:icons`
3. Verify new icons appear in `src/ui/icons/`

### Component Metadata (Figma descriptions)
1. Open Figma file in browser
2. Run `scripts/component-metadata/exportComponentJSON.js` in browser console
3. Edit descriptions in the exported JSON
4. Run `scripts/component-metadata/importComponentJSON.js` with updated JSON

### Dev Resources Bulk Update
1. Update `scripts/dev-resources/devResources.mjs` with new URLs
2. Run `npm run script:dev-resources`
3. Requires Dev Resources Write scope on Figma API token

## New Component Checklist

- [ ] Component file created: `src/ui/primitives/NewComponent/NewComponent.tsx`
- [ ] TypeScript interface defined with proper prop names (`isDisabled`, `onPress`, etc.)
- [ ] CSS module created using CSS variables only (no hardcoded values)
- [ ] Exported from `src/ui/primitives/index.ts`
- [ ] Storybook story created: `src/stories/primitives/NewComponent.stories.tsx`
- [ ] Added to `assets/components.md`

## Do's and Don'ts

✅ Follow existing component patterns and structure  
✅ Use CSS variables for all design values  
✅ Create comprehensive Storybook stories  
✅ Use scripts for all Figma sync operations  

❌ Duplicate existing component functionality  
❌ Hardcode colors, spacing, or typography  
❌ Skip TypeScript types  
❌ Forget to export from index files  
❌ Break existing component APIs without a migration plan  
