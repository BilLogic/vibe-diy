# Layer 1: Context Engineering

Context engineering gives the agent the knowledge it needs to make good design decisions. Without context, agents produce generic output. With context, they produce work grounded in your specific design system, product, and audience.

## Three Buckets

| Bucket | Location | What it provides |
|--------|----------|-----------------|
| Persona | `persona.md` | Agent role, responsibilities, constraints |
| Design System | `design-system/` | Foundations, styles, components — everything needed to build with SDS |
| Product | `product/` | What we're building, for whom, and why |

## How It's Used

Before starting any task, the agent reads the relevant context files. The Prototyper reads the design system; the Consultant reads the product context; the Critic reads both.

## Important

Design system docs here **reference** (not duplicate) the actual code in `src/ui/` and tokens in `src/theme.css`. The source of truth is always the code. These docs are curated summaries that make the code accessible to agents without requiring them to parse 33KB of CSS or traverse 30+ component directories.
