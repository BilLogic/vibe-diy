# Layer 4: Knowledge Compound

The knowledge compound is where the system captures lessons, decisions, and ideas so that the design process gets smarter over time.

Every time an agent completes a task, it should reflect: What went well? What went wrong? What should we remember? Those reflections live here, organized into four files:

| File | Purpose |
|------|---------|
| `lessons-learned.md` | Mistakes and their fixes so they never repeat |
| `preferences.md` | Standing decisions about style, layout, and tooling |
| `ideations.md` | Ideas worth exploring later |
| `changelog.md` | Running log of changes to the knowledge base itself |

## How it works

1. **After completing a task**, the agent (or you) records what was learned.
2. **Before starting a new task**, the agent reads these files to avoid past mistakes and follow established preferences.
3. **Over time**, the knowledge base grows and the design process compounds -- each iteration is informed by every previous one.

## Recommended workflow

Use the **Compounder** skill (`.agent/skills/compounder/SKILL.md`) to automate knowledge capture. After any design task, invoke the Compounder and it will prompt you through what to record and where to file it.

## Important note

The entries you see here are **seeded examples** to demonstrate the format and give the system a starting point. Adapt them to your own project -- edit freely, add your own lessons, and delete anything that does not apply.
