---
name: close-calendar
description: Build a month-end close checklist with owners, dependencies and due dates for your entities and ERP, including the statutory due dates that fall in the period. Use at the start of each close.
---

# Close calendar

Turns your close process into a dated checklist so nothing is discovered late.

## Use when
- A close is about to start, or you want to define the close process for a new entity.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **close window start date** (the first day you start closing; for a November period this is usually the first working day of December) and the **target close** as a working-day number (for example working day 6).
2. The **working week** (default Monday to Friday, Saturdays and Sundays non-working, stated) and the **public holidays** in the window, with the **state or city** if holidays differ, and whether they apply to every entity.
3. The **entities** and the **ERP or accounting system** for each, and whether there is **intercompany** between them and a **consolidation** step.
4. The **owner** of each area (AP, AR, bank reconciliation, payroll, fixed assets, tax, reporting) and the **sign-off approver**. Unknown owners are shown as "Owner: open".
5. The **filing profile** for each entity, so statutory rows can be filtered: GST registration state and filing frequency (monthly or quarterly), whether PF and ESIC apply, whether TDS applies.
6. Known **dependencies** (for example bank statements arrive on working day 2) and any **task durations** you already use. Otherwise it uses the default durations below and labels them **Hypothesis**.

## Reads first
`finance-context.md` for entities, systems and approval limits, if it exists; if not, it carries on with the answers above and says so in one line. For statutory dates it reads `references/statutory-dates.md` and tells you its status and last-checked date.

## Definitions it uses
- **Working day 1 (WD1)** is the first working day on or after the window start. Weekends and the holidays you gave are skipped.
- **Default durations** (when none are given, all labelled Hypothesis): cut-off 1 day, bank reconciliation 2 days after statements arrive, AP and AR sub-ledger close 2 days, payroll posting 1 day, accruals and prepaids 1 day, fixed assets and depreciation 1 day, intercompany 1 day after both ledgers close, GST and TDS reconciliation 1 day, manual journal review 1 day, flux review 1 day, sign-off 1 day.
- **Too many tasks on one owner:** more than 4 tasks due on one owner on the same day.

## Steps
1. List the standard close tasks and tailor them: cut-off, bank reconciliations, AP and AR sub-ledger close, accruals and prepaids, payroll, fixed assets and depreciation, intercompany (if any), GST and TDS reconciliations, review of manual journals, flux review, sign-off. Use **one row per entity** for entity-specific tasks.
2. **Schedule backwards** from the target close day: set each task's due day so it and everything that depends on it finish by the target, using the durations above. Set the start day as due day minus duration, never before the day its dependencies finish. Show the **critical path** (the chain that sets the earliest possible finish).
3. Add **statutory dates** from the reference file as separate rows. Obligations for the month that just ended fall in this window (for a November period, the October GST and TDS items fall in the window). Show the usual date in the form 07 Nov 2026 (Sat); if it falls on a non-working day, say "falls on a non-working day, check"; include dates after the target close and mark them "after target close". Filter by the entity's filing profile. If none fall in the window, write "None in window". Never invent a date; a date not in the file is **Open**.
4. Flag risks: a task with no owner, a dependency that arrives after its dependent is due, a due date on a non-working day, more than 4 tasks on one owner on one day.

## Output
Verdict first, with counts **computed from the table** ("Close can finish on working day 6 (Tue 10 Nov 2026) if bank statements arrive by working day 2; 5 tasks have no owner"). Then the checklist table with columns **Task, Entity, Owner, Start, Due, Depends on, Status, Label**: **Status** is Not started (all are Not started in a new calendar), **Label** is Supported (your input), Hypothesis (a default duration or assumption) or Open. Statutory rows use Owner "Tax owner (open)" unless given, Start equal to Due, Depends on "none", and Label Open with the note "usual date, check the current notification". Order rows by due date, then by entity. After the table: the **Critical path**, **Risks** (as questions), and **Open** items (including the assumptions you had to make). Dates are shown in the form 06 Nov 2026 with the weekday.

## Checks
Every dependency exists as a row; no task is due before something it depends on; every due date is a working day unless it is a statutory row flagged as non-working.

## India notes
Statutory due dates (GST returns, TDS deposit and returns, provident fund, advance tax) are extended by notification from time to time; the reference file is a draft and the skill tells you to check the current dates.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
