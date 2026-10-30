---
name: payment-prioritisation
description: Order a payment run by due date, early-payment discount, MSME payment limits and the cash available in each bank account, and show what to pay now, what can wait and what does not fit. Use before preparing a payment batch.
---

# Payment prioritisation

Decides the order of a payment run when cash is tight, and explains why.

## Use when
- You have a list of payables due or overdue, and the cash available now (and, if you want, over the coming days).

## Ask first (one message)
1. The **as-of date** and the payment dates you can make this week.
2. **Cash available** per bank account, and a **minimum balance** to keep in each (default none, stated).
3. Whether payments can be made from any account or only from specific ones.
4. **Discount terms** (for example 2% if paid in 10 days), per vendor or per invoice, if any.
5. Vendors you must not delay (statutory, payroll, utilities), if any.

## Reads first
`finance-context.md` if present (approval limits, MSME handling). Otherwise carries on and says so.

## Steps
1. Mark each payable: **Statutory or must-pay**, **MSME with deadline** (micro or small, with the due date from your data), **Discount available** (with the last date and rupee saving), **Due or overdue**, **Not yet due**. A payable can have more than one mark.
2. Rank in this order: must-pay, MSME items due or overdue, discounts that expire before the next run, other overdue by age, then due soon, then not yet due. Within a rank, larger rupee value first unless you say otherwise.
3. Allocate against cash: walk the ranked list, pay while the chosen account stays above its minimum balance, and stop. Show the running balance.
4. Show the trade-off in rupees: the discount you lose and the MSME or late-payment exposure you carry for every item that does not fit.
5. Suggest what would change the result (moving cash between accounts, a later run date), as questions.

## Output
Verdict ("Pay Rs X now across 14 invoices; Rs Y does not fit this run, of which Rs Z is MSME-overdue"), a ranked table (Rank, Vendor, Invoice, Amount, Reason, Account, Running balance), a **Does not fit** table with the cost of waiting, and an **Open** list (missing due dates, unknown MSME status).

## Checks
The total paid never takes an account below its minimum balance; every row shows its reason; no invoice appears twice.

## India notes
MSME payment limits and their year-end tax effect are described in the `msme-payment-watch` skill and its reference file (draft). This skill uses the due dates you supply and does not compute statutory dates.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
