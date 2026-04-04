---
name: SDS Skill Router
description: Routes to SDS skills. Workshop skills (prototyper, consultant, critic, compounder) in skills/. Legacy skills (Learn, Build, Maintain) also available.
---

# SDS Skill Router

## Workshop Skills (Compound Designing)

- Consultant → [`.agent/skills/consultant/SKILL.md`](./skills/consultant/SKILL.md)
- Prototyper → [`.agent/skills/prototyper/SKILL.md`](./skills/prototyper/SKILL.md)
- Critic → [`.agent/skills/critic/SKILL.md`](./skills/critic/SKILL.md)
- Compounder → [`.agent/skills/compounder/SKILL.md`](./skills/compounder/SKILL.md)

## Legacy Skills

- Learn → [`LEARN.SKILL.md`](./LEARN.SKILL.md)
- Build → [`BUILD.SKILL.md`](./BUILD.SKILL.md)
- Maintain → [`MAINTAIN.SKILL.md`](./MAINTAIN.SKILL.md)

## Orchestration

See [`AGENT.md`](./AGENT.md) for workflow orchestration — how skills sequence within the design process.

## Context & Knowledge

- Context engineering: `context/*`
- Compounded knowledge: `knowledge/*`
- Repo development docs: `docs/*`

## Compatibility Rule

Do not add new long-form canonical content to `.agent/assets` or `.agent/references`.
