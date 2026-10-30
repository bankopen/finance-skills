---
name: close-calendar
description: Build a month-end close checklist with owners, dependencies and due dates for your entities and ERP, including the statutory due dates that fall in the period. Use at the start of each close.
---

# Close calendar

Turns your close process into a dated checklist so nothing is discovered late.

## Use when
- A close is about to start, or you want to define the close process for a new entity.

## Ask first
1. The **period** and the **target close date** (for example working day 6).
2. The **entities** and the **ERP** or accounting system for each.
3. Who owns each area (AP, AR, bank reconciliation, payroll, fixed assets, tax, reporting). If unknown, tasks are left "Owner: open".
4. The **public holidays or non-working days** in the close window.
5. Any **dependencies** you already know (for example bank statements arrive on day 2).

## Reads first
`finance-context.md` for entities, systems and approval limits. For statutory dates it reads `references/statutory-dates.md` and tells you its status and last-checked date.

## Steps
1. List the standard close tasks for the period and tailor them: cut-off, bank reconciliations, AP and AR sub-ledger close, accruals and prepaids, payroll, fixed assets and depreciation, intercompany, GST and TDS reconciliations, review of manual journals, flux review, sign-off.
2. For each task set an **owner**, a **start day**, a **due day** counted back from the target close date, and the **tasks it depends on**. Show the critical path (the chain that sets the earliest possible finish).
3. Add the **statutory dates** that fall in the close window from the reference file, as separate rows marked "Statutory (check)". Never invent a date; if a date is not in the file, it is **Open**.
4. Flag risks: a task with no owner, a dependency that arrives after its dependent is due, a due date on a non-working day, too many tasks on one owner on one day.

## Output
Verdict ("Close can finish on working day 6 if bank statements arrive by day 2; 3 tasks have no owner"), then the checklist table (Task, Owner, Start, Due, Depends on, Status), the **Critical path**, **Risks**, and **Open** items. Dates are shown in the form 06 Nov 2026 with the weekday.

## Checks
Every dependency exists as a row; no task is due before something it depends on.

## India notes
Statutory due dates (GST returns, TDS deposit and returns, provident fund, advance tax) are extended by notification from time to time; the reference file is a draft and the skill tells you to check the current dates.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
