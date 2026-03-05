# Getting Started

## Contents

- [Prerequisites](#prerequisites)
- [Install and Run](#install-and-run)
- [Build Commands](#build-commands)
- [Figma Environment Variables](#figma-environment-variables)
- [First Session Checklist](#first-session-checklist)

## Prerequisites

- Node.js and npm
- Repository access
- Optional: Figma API token for sync scripts

## Install and Run

```bash
npm i
npm run app:dev
npm run storybook
```

## Build Commands

```bash
npm run app:build
npm run storybook:build
npm run build
```

## Figma Environment Variables

Create `.env` from `.env-rename`.

```bash
FIGMA_ACCESS_TOKEN=your_figma_token
FIGMA_FILE_KEY=your_figma_file_key
```

`FIGMA_FILE_KEY` is the value in your Figma URL after `/design/`.

## First Session Checklist

1. Run Storybook and inspect primitives/compositions.
2. Read [Component Reference](./component-reference.md) and [Patterns](./patterns.md).
3. Pick a skill path:
- Learn for explanation/navigation
- Build for prototyping/implementation
- Maintain for sync/system updates
