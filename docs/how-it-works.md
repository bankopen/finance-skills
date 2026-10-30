# How the skills work

A **skill** is a folder with a `SKILL.md` file. The file starts with a short header (`name` and `description`) and then gives the agent a repeatable procedure: when to use it, what to ask for, the steps, the exact output format and the checks to run on its own answer. Your agent loads the skill when your request matches its description, so you get the same structure every time instead of re-prompting from scratch.

## A typical session

1. Run `finance-context` once. It writes `finance-context.md` (entities, banks, ERP, approval limits, tax basics). It contains no account numbers or tax identifiers.
2. Attach an export (for example your purchase register and the GSTR-2B download) and ask: "Which input credit is at risk this month?" The matching skill asks only for what is still missing.
3. The answer opens with a one-line verdict, then tables and a list of what the skill could not tell.
4. You or your accountant decide what to do. Nothing is posted or paid by the skill.

## What a skill reads

Only files you give it, and `finance-context.md`. It does not log in to anything, call the GST portal or contact a bank. Where a skill needs a statutory rule, it reads a `references/` file in its own folder and states the date that file was last checked.

## Skills and live data

These skills run on exports. If your agent is connected to your accounting or banking data through a connector, the same skills can run on live data; the procedure does not change.

## Output conventions

| Label | Meaning |
|---|---|
| **Supported** | It is in the data you gave it |
| **Hypothesis** | A likely reading you should check |
| **Open** | It cannot tell from what it was given |

Amounts use Indian digit grouping (Rs 1,50,000). Every flag is written as a question for a person.
