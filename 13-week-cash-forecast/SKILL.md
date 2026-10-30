---
name: 13-week-cash-forecast
description: Build a direct-method 13-week cash forecast from AR and AP ageing, payroll and statutory payment dates, other known flows and opening bank balances, with a base case and stress cases. Use weekly to plan cash and spot shortfalls early.
---

# 13-week cash forecast

A populated forecast from your own receivables, payables and calendar, not a blank template.

## Use when
- You want to see weekly cash for the next 13 weeks and where it runs short.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **start date** (week 1 begins on it; weeks then run seven days each, and it says the first and last dates) and **opening cash** per bank account.
2. The **minimum balance** and whether it is **per account or on the total** (default: none, stated; if given without a basis, on the total).
3. **AR ageing** and **AP ageing** as at the start date (customer or vendor, invoice, due date, amount, and whether disputed), so cash already received or paid is not counted twice. Also your **collection pattern** (typical days late) and **payment pattern** (pay on the due date, or a weekly or fortnightly run). If a pattern is not given, it states the one it used and labels it **Hypothesis**.
4. **Payroll** (amount, dates, and whether it includes provident fund and TDS so they are not counted twice), **statutory payments** with amounts or estimates (GST gross or net of input credit, TDS, provident fund, advance tax), rent, loan repayments and other known flows.
5. A **mapping of flows to bank accounts** (which account receives each customer's money and which pays payroll, GST and so on). Without it the forecast is shown **in total** and the per-account view is **Open**.
6. **Committed new orders or large expected receipts**, and a warning it gives you: receipts in later weeks are understated, because invoices not yet raised are not in the ageing.

## Reads first
`finance-context.md` (banks, entities) if present. For stress cases it reads `references/stress-cases.md`.

## Steps
Do the arithmetic with a script or a spreadsheet formula, not in your head, and say which.
1. Lay out 13 weekly columns. Put each known receipt and payment in the week of its **expected cash date** (the due date moved by the collection or payment pattern). State the rule used for each class.
2. **Overdue items:** an invoice whose expected cash date is before the start date goes in **week 1** and is labelled **Hypothesis**; list them with their rupee total so you can say which are really collectable. **Beyond week 13:** show as **Unscheduled**, with the rupee total (stressed cases may push more items into Unscheduled; show that too).
3. **Recurring flows** are counted by how many times they occur inside the 13 weeks. A flow that falls just before the start date is not counted. A flow whose amount you did not give (for example advance tax) is **Open** and named in the verdict as understating the shortfall.
4. Compute weekly opening cash, receipts and payments by type, net flow and closing cash, in total and (if mapped) per account.
5. Mark the weeks where closing cash is below the minimum. **Low point** = the lowest weekly closing balance. **Shortfall** = the minimum minus the low point (shown only if the low point is below the minimum; also show the gap below zero if the balance goes negative). Also report the **first week below the minimum**.
6. Build the **base case**, then the **stress cases** from the reference file. **Largest customer** means the customer with the largest total open receivables (say which, and the single-largest invoice as well if different).
7. Show what drives the low point and what moving it would do, as questions (for example "can this vendor wait a week?").

## Output
Verdict, using week numbers and their start dates ("In the base case cash first falls below the minimum in week 9 (w/c 28 Dec 2026) and the low point is Rs X in week 13; if collections slip 14 days it first breaches in week 5"; if cash never breaches, say so and give the low point), the **13-week table** for the base case, a **stress comparison** table (Case, Low point, Week of low point, First week below minimum, Shortfall), **Drivers** and **Assumptions** (every assumption with its Label), and **Open** items (flows with no date or amount).

## Checks
Each week's closing cash equals opening plus receipts minus payments; receipts in the table plus **Unscheduled** equal the AR input total, and payments in the table plus Unscheduled equal the AP input total; recurring flows equal amount times the number of occurrences in the window.

## India notes
Statutory payment dates change by notification; use the dates you supply. The advance tax calculator on open.money can help estimate the amount and dates.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
