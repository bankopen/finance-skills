# Writing a skill

Each skill is a folder named after its `name` (lower case, hyphens) containing `SKILL.md` and, if needed, a `references/` folder.

## Template

```markdown
---
name: your-skill-name
description: One or two sentences: what it does and when to use it (80 to 400 characters).
---

# Title

One line on what it does.

## Use when
## Do not use when
## Ask first            (only what it cannot read from finance-context.md or the files)
## Reads first          (finance-context.md, references/...; what to do if absent)
## Steps                (numbered, checkable, with the definitions it uses)
## Output               (verdict line, then the exact tables and headings)
## Checks               (what it verifies on its own output)
## India notes          (rule references, with dates, where relevant)

## Rules this skill always follows
(copy the block from any existing skill unchanged)
```

## Requirements
- Read-only. Never post, pay or file; never ask for credentials.
- Verdict first. Label claims Supported, Hypothesis or Open.
- State assumptions next to the row they affect. Say what is missing.
- State thresholds and windows as definitions the user can change.
- Put statutory rules in `references/`, with a status line (see [rule references](rule-references.md)).
- Test it: run the skill on a small made-up file and fix every place the agent had to guess.

## Validate
```bash
node scripts/validate.mjs
```
The same check runs on every pull request.
