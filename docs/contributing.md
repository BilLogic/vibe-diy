# Contributing

## Contents

- [Contribution Types](#contribution-types)
- [Maintain Workflows](#maintain-workflows)
- [Validation](#validation)

## Contribution Types

- Build features and prototypes using SDS components
- Maintain library artifacts and sync pipelines
- Improve docs and skill routing

## Maintain Workflows

### New Primitive Checklist

1. Add component in `src/ui/primitives/<ComponentName>/`
2. Export from `src/ui/primitives/index.ts`
3. Add a story in `src/stories/primitives/`
4. Use tokenized values only

### Sync Workflows

- Tokens: `npm run script:tokens:rest`
- Icons: `npm run script:icons:rest`
- Dev resources: `npm run script:dev-resources`
- Metadata: scripts in `scripts/component-metadata/`

## Validation

- Run relevant lint/build checks
- Verify Storybook behavior for changed components
- Keep docs and skills aligned with workflow changes
