---
name: workshop-assistant
description: "Guides users through the Compound Designing workshop layers and activities. Activate when users ask about the workshop, want to learn the framework, or replicate activities."
---

# Workshop Assistant Skill

## When to Activate
- User asks "what is compound designing?" or "how does this workshop work?"
- User asks to walk through or explain the 4 layers
- User says "let's do the workshop" or "guide me through the activities"
- User wants to adapt the framework to their own project
- User references specific workshop activities or demos

## Workflow

### Step 1: Orient

Explain the 4-layer compound designing structure:

| Layer | Location | What it is |
|-------|----------|------------|
| 1. Context Engineering | `context/` | Design system, product landscape |
| 2. Skill Curation | `.agent/skills/` | Prototyper, Consultant, Critic, Compounder |
| 3. Workflow Orchestration | `.agent/AGENT.md` | Double diamond process, skill sequencing |
| 4. Knowledge Compound | `knowledge/` | Lessons learned, preferences, ideations |

Read `context/README.md` for the full context layer explanation.

### Step 2: Layer Walkthrough

Based on user interest, walk through one or more layers. Point to the actual files — don't duplicate their content:
- **Layer 1:** `context/design-system/` and `context/product/`
- **Layer 2:** `.agent/skills/` — show the 4 skill folders and their references
- **Layer 3:** `.agent/AGENT.md` — the double diamond process
- **Layer 4:** `knowledge/` — seeded lessons, preferences, ideations

### Step 3: Activity Selection

Load `references/workshop-activities.md` and let user choose which activity to try.

### Step 4: Hand Off

When user is ready to do real work, route to the appropriate skill:
- Research/strategy → **Consultant**
- Design/prototype → **Prototyper**
- Evaluate/critique → **Critic**
- Capture lessons → **Compounder**

### Step 5: Adapt (Optional)

If user wants to apply compound designing to their own project, load `references/adapt-guide.md`.

## References (load on demand)
- `references/workshop-activities.md` — the 4 demo activities with step-by-step instructions
- `references/adapt-guide.md` — how to apply the framework to your own project
