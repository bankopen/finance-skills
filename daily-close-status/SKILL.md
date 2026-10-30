---
name: daily-close-status
description: Produce a fixed-format one-page status for close week from the current state of your tasks, reconciliations and open items, showing what moved since yesterday, what is blocked and how many days remain. Use every morning during close.
---

# Daily close status

A short, repeatable status you can paste into chat or email each morning of close week.

## Use when
- A close is running and you have today's task or reconciliation status (and, if you have it, yesterday's).

## Ask first
1. **Today's date** and the **target close date**.
2. The **task list** with status (done, in progress, blocked, not started), owner and due date. A copy of the close calendar works.
3. **Yesterday's status** for the diff, if you have it. Without it, "what moved" is **Open**.
4. Open items worth naming: unreconciled differences, missing documents, late approvals.

## Steps
1. Count tasks by status and by owner; compute the percentage done.
2. Diff against yesterday: tasks that changed status, new blockers, items that cleared.
3. List the **blockers**: each with who or what it waits on and since when.
4. Compute **working days to target**, using the non-working days you supply.
5. Say whether the close is **On track**, **At risk** (any due task late or any blocker older than 1 working day) or **Behind** (the critical path cannot finish by the target). State the rule used.

## Output
Use exactly this format so it can be compared day to day:

1. **Verdict line:** `Day <n> of <total>: <On track | At risk | Behind>. <one sentence>`
2. **Progress:** done, in progress, blocked, not started (counts and percentage).
3. **Moved since yesterday:** a short list.
4. **Blocked:** table (Item, Waiting on, Since, Owner, What would unblock it).
5. **Due today and tomorrow:** table (Task, Owner, Due).
6. **Days to lock:** number, with the rule used.
7. **Open:** anything it could not tell.

## Checks
Counts add up to the number of tasks; every blocker has an owner or "Owner: open".

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
