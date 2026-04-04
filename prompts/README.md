# Starter Prompts

Pre-written prompts you can paste into your AI tool to test the compound designing system in action.

## How to use

1. Open your AI-powered coding tool (Claude Code, Cursor, etc.) in this repository.
2. Make sure the agent has access to the `context/`, `knowledge/`, and `.agent/` directories.
3. Copy a prompt from one of the files below and paste it in.
4. Watch how the agent uses the design system context, knowledge base, and skills to produce its output.

## Files

| File | What it contains |
|------|-----------------|
| `landing-page.md` | The main demo prompt. Designs a full workshop landing page. Use this first to see the complete system in action. |
| `explore.md` | Open-ended prompts for experimentation. Try these after the landing page to push the system further, test individual skills, or adapt it to your own project. |

## What to expect

A well-configured agent should:

- Read the persona and product context before generating anything
- Check lessons-learned to avoid known mistakes
- Use SDS components rather than inventing custom HTML
- Use design tokens rather than hardcoding colors, spacing, or typography
- Use Flex, Section, and Grid for layout
- Offer to record new lessons after completing the task
