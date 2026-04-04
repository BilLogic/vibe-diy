---
title: "feat: Add workshop-assistant skill"
type: feat
status: active
date: 2026-04-04
---

# Add Workshop Assistant Skill

## Overview

Add a 5th skill `workshop-assistant` to `.agent/skills/` that guides users through the Compound Designing workshop's 4-layer framework and helps them replicate workshop activities in their own projects. Update `AGENT.md` and `SKILL.md` to include it.

## Problem Statement

Users who attended the workshop (or are exploring the repo afterward) may want to:
- Understand the 4-layer structure and why it matters
- Follow along with specific workshop activities step-by-step
- Adapt the compound designing approach to their own project/repo
- Learn what each layer does before diving into individual skills

Currently, this guidance is scattered across `prompts/explore.md`, `context/README.md`, and the AGENT.md pre-task checklist. There's no dedicated skill to orchestrate the learning experience.

## Proposed Solution

Create `.agent/skills/workshop-assistant/` following the established pattern: thin SKILL.md (behavioral routing) + references (loaded on demand).

## Scope Boundaries

- This skill teaches/guides — it does NOT design, prototype, or critique
- It should hand off to Consultant/Prototyper/Critic/Compounder when the user is ready to do actual work
- It does not duplicate content from existing context files — it points to them

## Implementation Units

### Unit 1: Create skill folder and SKILL.md

**Goal:** Workshop-assistant skill with activation triggers and behavioral workflow

**Files:**
- `NEW` `.agent/skills/workshop-assistant/SKILL.md`

**Approach:**
Follow the exact pattern from existing skills:

```yaml
---
name: workshop-assistant
description: "Guides users through the Compound Designing workshop layers and activities. Activate when users ask about the workshop, want to learn the framework, or replicate activities."
---
```

**When to Activate:**
- User asks "what is compound designing?" or "how does this workshop work?"
- User asks to walk through the 4 layers
- User says "let's do the workshop" or "guide me through the activities"
- User wants to adapt the framework to their own project

**Workflow (behavioral routing — thin):**

1. **Orient** — Read `context/README.md` to explain the 4-layer structure
2. **Layer walkthrough** — Based on user interest, walk through one or more layers:
   - Layer 1 (Context): point to `context/` files, explain what context engineering is
   - Layer 2 (Skills): point to `.agent/skills/`, explain skill curation
   - Layer 3 (Workflow): point to `.agent/AGENT.md`, explain orchestration
   - Layer 4 (Knowledge): point to `knowledge/`, explain compounding
3. **Activity selection** — Load `references/workshop-activities.md` and let user choose an activity
4. **Hand off** — When user is ready to do real work, route to the appropriate skill (Consultant → Prototyper → Critic → Compounder)
5. **Adapt** — If user wants to apply to their own project, load `references/adapt-guide.md`

**Verification:**
- [ ] SKILL.md has correct YAML frontmatter
- [ ] Activation triggers cover workshop learning and adaptation scenarios
- [ ] Workflow is behavioral (what to do) not implementation detail (how)
- [ ] References listed but not inlined

### Unit 2: Create references

**Goal:** Two reference docs loaded on demand

**Files:**
- `NEW` `.agent/skills/workshop-assistant/references/workshop-activities.md`
- `NEW` `.agent/skills/workshop-assistant/references/adapt-guide.md`

**Approach:**

**workshop-activities.md** — The 4 demo activities from the workshop:

| Activity | What it demonstrates | Skills used |
|----------|---------------------|-------------|
| 1. Context walkthrough | Layer 1 — how context grounds the agent | (reading only) |
| 2. Skill exploration | Layer 2 — progressive disclosure of references | (reading only) |
| 3. Full design workflow | Layers 1-3 — Consultant → Prototyper → Stitch MCP → Figma MCP → Critic | Consultant, Prototyper, Critic |
| 4. Knowledge compounding | Layer 4 — agent learns from a mistake | Compounder |

For each activity: what to do, what to observe, which files to read, expected outcome.

**adapt-guide.md** — How to apply compound designing to your own project:

1. **Context** — Replace `context/product/` with your own product overview, users, journey. Keep `context/design-system/` if using SDS or replace with your own tokens/components.
2. **Skills** — Fork existing skills or create new ones in `.agent/skills/`. Follow the SKILL.md + references pattern.
3. **Workflow** — Adapt `.agent/AGENT.md` with your own process (doesn't have to be double diamond).
4. **Knowledge** — Start fresh in `knowledge/` — seed with your own first lessons.

**Verification:**
- [ ] workshop-activities.md covers all 4 demo clips
- [ ] adapt-guide.md is actionable, not just conceptual
- [ ] No content duplicated from existing context files (point to them instead)

### Unit 3: Update AGENT.md and SKILL.md

**Goal:** Register the new skill in orchestration and routing

**Files:**
- `MODIFY` `.agent/AGENT.md`
- `MODIFY` `.agent/SKILL.md`

**Approach:**

**AGENT.md** — Add to the Skill Routing table:

```markdown
| Workshop guidance, learning, adaptation | Workshop Assistant | `.agent/skills/workshop-assistant/SKILL.md` |
```

Add a note in the "Before Starting Any Task" section or a new section:
> **New to compound designing?** Start with the Workshop Assistant skill to learn the framework before diving into design tasks.

**SKILL.md** — Add to the skills list:

```markdown
- Workshop Assistant → [`.agent/skills/workshop-assistant/SKILL.md`](./skills/workshop-assistant/SKILL.md)
```

**Verification:**
- [ ] AGENT.md routing table includes workshop-assistant
- [ ] SKILL.md list includes workshop-assistant
- [ ] File paths are correct and resolve

### Unit 4: Merge persona.md into AGENT.md

**Goal:** Consolidate `context/persona.md` into `AGENT.md` so the agent's role, constraints, and tone live in the orchestration doc — not as a separate context file that needs an extra read step.

**Files:**
- `MODIFY` `.agent/AGENT.md`
- `DELETE` `context/persona.md`
- `MODIFY` `context/README.md` (remove persona reference)

**Approach:**

The persona content (role definition, responsibilities, constraints, tone, pre-task checklist) is behavioral — it tells the agent HOW to act, not WHAT to know about the product or design system. It belongs in AGENT.md.

1. Add a new `## Agent Role` section near the top of AGENT.md (before "Before Starting Any Task")
2. Absorb the key content from `context/persona.md`:
   - Role: digital product design assistant for SDS Playground
   - Responsibilities: generate UI, provide rationale, evaluate, compound knowledge
   - Constraints: SDS components only, tokens only, layout system, import aliases
   - Tone: professional but approachable
3. Remove the "Read `context/persona.md`" step from the pre-task checklist
4. Delete `context/persona.md`
5. Update `context/README.md` to remove the persona bucket reference
6. Update any skill SKILL.md files that reference `context/persona.md`

**Verification:**
- [ ] AGENT.md contains the agent role, constraints, and tone
- [ ] `context/persona.md` is deleted
- [ ] No file references `context/persona.md` anymore
- [ ] `context/README.md` updated (two buckets: design system + product)
- [ ] Pre-task checklist no longer says "Read persona.md"

---

## Acceptance Criteria

- [ ] `.agent/skills/workshop-assistant/SKILL.md` exists with correct frontmatter and behavioral workflow
- [ ] `references/workshop-activities.md` covers all 4 workshop activities with clear instructions
- [ ] `references/adapt-guide.md` provides actionable steps for own-project adaptation
- [ ] `AGENT.md` skill routing table includes the new skill
- [ ] `SKILL.md` includes the new skill in its list
- [ ] SKILL.md is thin (behavioral routing only) — all detail in references
- [ ] No content duplicated from existing `context/` or `knowledge/` files
- [ ] Skill correctly hands off to Consultant/Prototyper/Critic/Compounder for actual work
- [ ] `context/persona.md` deleted — content merged into AGENT.md `## Agent Role` section
- [ ] No remaining references to `context/persona.md` in any file
- [ ] `context/README.md` updated to reflect two buckets (design system + product)
