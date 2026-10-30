---
name: accruals-prepaids
description: Propose month-end accrual entries for goods and services received but not invoiced, and check prepaid balances and amortisation, from POs, contracts, unbilled work and last month's schedules, with the basis for every amount. Use at month end before locking the books.
---

# Accruals and prepaids

Drafts the accrual and prepaid entries for the period, each with its basis, for a person to confirm.

## Use when
- You are closing a period and have POs and receipts, contracts or unbilled work, last period's accrual list and your prepaid schedule.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **period end date** and **materiality**. Default: 0.5% of the period's total expenses with a floor of Rs 10,000; **if total expenses are not given, use the floor alone and say the 0.5% test is Open.**
2. **Goods and services received but not invoiced:** PO number, vendor, description, PO price (and whether it is net of GST), quantity received, quantity invoiced, receipt date.
3. **Contracts and recurring services:** vendor, amount per billing period, the **billing period** (monthly, quarterly, annual), the period covered by the last invoice and its end date.
4. **Last period's accrual list** and your **prepaid schedule**: item, amount paid, period covered, amount amortised to date, **amount posted this period**, and the **ledger balance** to compare with the schedule balance.
5. A **payments or AP list** if you want invoices matched to POs and payments that look like prepaids found; without it those checks are **Open**.
6. Your **policy**: the accrual threshold (default: materiality, applied **per vendor**, adding up that vendor's lines), whether accruals **auto-reverse** on day 1 of the next period (default yes), and the **expense and liability accounts** (otherwise "(open)").

## Reads first
`finance-context.md` if present; otherwise it carries on and says so.

## Rules it uses (stated in the output)
- **Receipt-based accrual:** amount = (quantity received minus quantity invoiced) x PO price. If invoiced exceeds received, it is **not** a negative accrual: show it as a question (over-invoiced).
- **Time-based accrual:** amount = amount per billing period x days from the day after the last invoice's end date to the period end, **inclusive of both ends**, divided by the days in the billing period. Show the days and both end dates. For quarterly or annual billing, use the days in that billing period.
- **Prepaid:** a payment covering a future period above the threshold is a prepaid candidate. Amortise **straight-line by day** (default, stated; say if you chose by month). Amount for the period = total x days of the period within the covered period / days covered.
- Amounts are **before GST**; GST and TDS treatment on accruals is a question for your accountant.
- **Recurring accrual "missing":** an item accrued last period with no matching accrual or invoice this period, shown regardless of the threshold, as a question. A previously accrued item below the threshold is mentioned once, not accrued.
- Rounding: whole rupees; a difference of Rs 1 is not reported.

## Steps
1. Build the **accrual table**: item, vendor, basis (receipt or time), arithmetic, amount, debit (expense) and credit (accrued liability), reversal date, Label (**Supported** if the receipt or contract is in your data, **Hypothesis** if an estimate).
2. Compare with **last period**: recurring accruals missing, accruals that should have reversed and did not, accruals changed without a stated cause (a change above materiality or 10%, whichever is larger, is shown as a question; smaller changes are not).
3. Check **prepaids**: amortisation posted equals the schedule for the period, balances that did not amortise, fully amortised items still on the schedule, and the **schedule balance against the ledger balance** (difference shown).
4. Show the **effect on expenses**: gross accruals added, accruals reversing from last period, and the net. State whether the prepaid catch-up is included.

## Output
Verdict ("5 accruals proposed worth Rs X; 1 recurring accrual missing; 1 prepaid did not amortise"). The **accrual table**, the **not accrued** list with the reason for each, the **last-period comparison**, the **prepaid check** (Item, Scheduled, Posted, Difference, Schedule balance, Ledger balance), the **effect on expenses**, and **Open** items. Use Indian digit grouping.

## Checks
Every accrual shows its arithmetic and a label; the table total equals the sum of its rows; no item is both accrued and invoiced in the period; the prepaid schedule balance reconciles to the ledger or the difference is shown.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
