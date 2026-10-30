---
name: three-way-match
description: Compare purchase orders, goods or service receipts and vendor invoices and list matches, mismatches by amount, quantity and price, and exceptions to route. Use before approving invoices for payment.
---

# Three-way match

Finds invoices that do not agree with what you ordered and received.

## Use when
- You have a PO list, a receipt (GRN or service acceptance) list and an invoice list, each as CSV or pasted tables.

## Reads first
`finance-context.md` for tolerances if you have set them (for example 2% on price). Otherwise it asks once.

## Steps
1. Match on PO number first, then vendor plus item or description. List anything it cannot match.
2. For each matched line compare: ordered vs received vs invoiced quantity, PO price vs invoice price, taxable value, and tax.
3. Classify each line: **Match**, **Within tolerance**, **Price mismatch**, **Quantity mismatch** (over-billed or short-received), **No PO**, **No receipt**, **Duplicate invoice** (same vendor, number and amount).
4. Quantify the exposure: the rupee difference if the invoice were paid as billed.
5. Suggest the next step for each exception (hold, ask vendor for credit note, get receipt, confirm with buyer). Label each **Supported**, **Hypothesis** or **Open**.

## Output
Verdict ("41 of 48 lines match; 7 exceptions worth Rs X"), a summary count by class, then an exceptions table: PO, Vendor, Invoice, Ordered, Received, Invoiced, Price diff, Value at risk, Suggested next step.

## Checks
Counts in the summary equal the rows in the table; every exception shows the figures it was judged on.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
