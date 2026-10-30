---
name: daily-close-status
description: Produce a fixed-format one-page status for close week from the current state of your tasks, reconciliations and open items, showing what moved since yesterday, what is blocked and how many days remain. Use every morning during close.
---

# Daily close status

A short, repeatable status you can paste into chat or email each morning of close week.

## Use when
- A close is running and you have today's task status (and, if you have it, yesterday's).

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. **Today's date**, the **close start date** and **total close days**, the **target close date**, and the **non-working days** (default Saturday and Sunday).
2. The **task list** with status, owner and due date. A copy of the close calendar works. Status meanings: done = completed and reviewed (say if "prepared" counts).
3. **Yesterday's list** for the diff and, if you have it, **yesterday's verdict**. Without it, "moved since yesterday" is **Open**.
4. **Dependencies or the sign-off chain**, if you have them. Without them the verdict can only be On track or At risk.
5. Open items worth naming (unreconciled differences, missing documents, late approvals).

## Rules it uses (stated in the output)
- **Day n of total:** the close start date is day 1; non-working days are skipped.
- **Late task:** due **before today** and not done (in progress, blocked and not started all count).
- **Blocker age:** working days since the blocker was raised, with the day raised counted as 0. A blocker is **old** at 2 or more working days.
- **At risk:** any task is late, or any blocker is old. **Behind:** dependencies were given and the critical path cannot finish by the target date. **On track:** neither. If no dependencies were given, Behind cannot be assessed and it says so.
- **Percentage:** by task count, not weighted.
- **Days to lock:** working days after today, up to and including the target day.

## Output (use exactly these seven parts, in this order, so days can be compared)
1. **Verdict line:** `Day <n> of <total>: <On track | At risk | Behind>. <one sentence>` and, if known, `Previous: <yesterday's verdict>`.
2. **Progress:** done, in progress, blocked, not started (counts and percentages), with `yesterday -> today` counts for each.
3. **Moved since yesterday:** fixed sub-lists: **Newly done**, **Started**, **Newly blocked**, **Unblocked**, **Newly late**. Write "None" for an empty list.
4. **Blocked:** table (Item, Waiting on, Raised, **Age in working days**, Owner, What would unblock it).
5. **Due today and tomorrow:** table (Task, Owner, Due, **Overdue?**). Overdue items come first and are marked Overdue; a task that is both blocked and overdue appears in parts 4 and 5. "Tomorrow" means the next working day.
6. **Days to lock:** the number and the rule used.
7. **Open:** anything it could not tell. Labels (Supported, Hypothesis, Open) appear here and on any statement that is only a Hypothesis elsewhere.

## Checks
Counts add up to the number of tasks; the number of rows in part 4 equals the number of blocked tasks; the `yesterday -> today` counts reconcile with the lists in part 3; every blocker has an owner or "Owner: open".

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
