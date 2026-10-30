---
name: payment-prioritisation
description: Order a payment run by due date, early-payment discount, MSME payment limits and the cash available in each bank account, and show what to pay now, what can wait and what does not fit. Use before preparing a payment batch.
---

# Payment prioritisation

Decides the order of a payment run when cash is tight, and explains why.

## Use when
- You have a list of payables due or overdue, and the cash available now (and, if you want, over the coming days).

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **as-of date**, the **payment run dates** you can use (the first is "this run", the next is "the next run"), and any **bank cut-off or batch approval limit**.
2. **Cash available** per bank account, a **minimum balance** per account (default none, stated), whether payments can be made from any account, and whether a payment may be **split** across accounts (default no).
3. For each payable: vendor, invoice, due date, amount, whether the amount is **gross or net of TDS**, and **MSME status** (micro, small, medium, not MSME, unknown) with the **acceptance date** if you have it. Unknown stays **Open**; it is never assumed to be "not MSME".
4. **Discount terms** (for example 2% if paid within 10 days) with the last date.
5. **Vendors you must not delay** (statutory, payroll, utilities).
6. The **late-payment or interest rate** if you want the cost of waiting in rupees; otherwise that cost is **Open**.
7. Any **receipts expected before the run** that would add cash.

## Reads first
`finance-context.md` if present (approval limits, MSME handling); otherwise it carries on and says so.

## Steps
1. Mark each payable: **Must-pay** (statutory or on your list), **MSME with deadline**, **Discount available** (last date and rupee saving), **Overdue**, **Due before the next run**, **Not yet due**. A payable can carry more than one mark.
2. Rank in this order, and within a rank put the **earliest due date first**, then the larger amount:
   1. Must-pay. 2. MSME items overdue or due before the next run (by the MSME due date). 3. Discounts that expire before the next run. 4. Other overdue items, oldest first. 5. Items due before the next run. 6. Everything not yet due.
   Where a discount (rank 3) would take cash from a larger overdue item, show the trade-off in rupees under the questions.
3. **Allocate cash by walking the ranked list and continuing past items that do not fit** (skip and continue, not stop). For each item that fits, choose the account with the most headroom that covers the whole payment while staying **at or above** its minimum; do not split unless you allowed it. Pay **net of discount** and show both face and net amounts. Show a **running balance per account** (one column per account).
4. For every item that does not fit show the **cost of waiting**: the discount lost, the MSME exposure, the late cost if a rate was given (otherwise **Open**).
5. Note where headroom exists across accounts but not in one account (cash that is pooled but not usable), and suggest what would change the result (moving cash, a later run date, a lower minimum), as questions.

## Output
Verdict ("Pay Rs 7,25,000 now across 5 invoices (net of Rs 5,000 discount); Rs 5,25,000 across 7 invoices does not fit this run, including Rs X that is MSME-overdue"). A **ranked table** (Rank, Vendor, Invoice, Face, Pay, Reason, Account, balance after in each account, Label). A **Does not fit** table (Rank, Vendor, Invoice, Amount, Cost of waiting, Label). **Open** items. Show amounts with Indian digit grouping.

## Checks
Each account stays at or above its minimum after every payment; paid (face) plus unpaid plus discount equals the total of all payables; every row has a reason and a label.

## India notes
MSME payment limits are described in the `msme-payment-watch` skill and its draft reference file; this skill uses the due dates you supply and does not compute statutory dates.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
