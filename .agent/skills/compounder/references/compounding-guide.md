# Compounding Guide

Templates for each type of knowledge entry.

## Lesson Learned

```markdown
## [Date] — [Title]

**What happened:** [Describe the situation]

**What went wrong:** [What was the mistake or unexpected outcome]

**Solution:** [How it was fixed]

**Rule for next time:** [The generalizable takeaway]
```

File: `knowledge/lessons-learned.md`

## Preference

```markdown
## [Topic]

**Decision:** [What was decided]

**Rationale:** [Why this choice was made]

**Date:** [When decided]
```

File: `knowledge/preferences.md`

## Ideation

```markdown
## [Title]

**Context:** [What prompted this idea]

**Idea:** [The proposal]

**Potential:** [Why it could be valuable]

**Status:** Proposed | In Progress | Tested | Adopted | Rejected
```

File: `knowledge/ideations.md`

## Skill Update

```markdown
**What changed:** [Description of the update]

**Why:** [What prompted the change]

**Which file updated:** [Path to the modified skill or reference file]
```

File: `knowledge/changelog.md` (log it) + the relevant skill file (apply it)

## Changelog Entry

| Date | Change | File(s) affected |
|------|--------|-----------------|
| [Date] | [Brief description] | [File paths] |

File: `knowledge/changelog.md`

## Process

1. Ask: "What type of knowledge is this?" (lesson, preference, ideation, skill update)
2. Use the appropriate template above
3. Write to the correct file
4. Add a changelog entry
5. Confirm to the user: "Captured [type] in [file]: [one-line summary]"
