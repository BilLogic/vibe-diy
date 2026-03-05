# Figma Sync Workflow

## Contents

- [Auth Setup](#auth-setup)
- [Token Sync](#token-sync)
- [Icon Sync](#icon-sync)
- [Dev Resources Sync](#dev-resources-sync)
- [Component Metadata Workflow](#component-metadata-workflow)
- [Code Connect Notes](#code-connect-notes)
- [Related References](#related-references)

## Auth Setup

1. Create token: https://www.figma.com/developers/api#authentication
2. Configure `.env`:

```bash
FIGMA_ACCESS_TOKEN=...
FIGMA_FILE_KEY=...
```

## Token Sync

- REST mode: `npm run script:tokens:rest`
- Local JSON mode: `npm run script:tokens`
- Main output: `src/theme.css`

## Icon Sync

- REST mode: `npm run script:icons:rest`
- Local JSON mode: `npm run script:icons`
- Outputs:
  - `src/ui/icons/*`
  - `src/ui/icons/index.ts`
  - `src/figma/icons/Icons.figma.tsx`

## Dev Resources Sync

- Command: `npm run script:dev-resources`
- Mapping source: `scripts/dev-resources/devResources.mjs`

## Component Metadata Workflow

- Export script: `scripts/component-metadata/exportComponentJSON.js`
- Edit payload
- Import script: `scripts/component-metadata/importComponentJSON.js`

## Code Connect Notes

- URL substitutions are in `figma.config.json`
- Publish mappings with `npx figma connect publish`
- Keep substituted file keys updated when you duplicate the Figma file

## Related References

- `scripts/tokens/README.md`
- `scripts/icons/README.md`
- `scripts/dev-resources/README.md`
- `scripts/component-metadata/README.md`
