---
name: vendor-statement-reconciliation
description: Match a vendor's statement of account against your own ledger for that vendor and list matched items, items missing on either side, amount differences and timing differences. Use at month end or when a vendor disputes a balance.
---

# Vendor statement reconciliation

Explains why a vendor's balance and yours differ.

## Use when
- You have a vendor's statement (CSV or pasted) and your ledger or AP transactions for the same vendor and period.

## Ask first
1. The **vendor** and the **statement date**.
2. Which columns hold date, reference, debit, credit and running balance in each file.
3. Whether your ledger shows the vendor as a payable (credit balance is what you owe).
4. Any **tolerance** for rounding (default Rs 1, stated).

## Steps
1. Normalise both sides to "amount owed to the vendor" (invoices increase it; payments, credit notes and debit notes decrease it) and say how you did it.
2. Match on reference or invoice number first, then amount plus a date within 5 days, then amount alone. Record which rule matched each pair.
3. Classify every item: **Matched**, **In vendor statement only**, **In your ledger only**, **Amount differs**, **Timing difference** (the same item dated either side of the statement date), **Possible duplicate**.
4. Walk from the vendor's closing balance to yours: start at the statement balance, apply each unmatched item with its sign, and show whether it lands on your balance. Show the unexplained remainder.
5. For each difference, suggest the usual cause as a **Hypothesis** (invoice not yet booked, payment in transit, credit note missing, GST or TDS treatment, wrong period) and the question to ask.

## Output
Verdict ("Your balance is Rs X; the vendor's is Rs Y; Rs Z of the difference is explained, Rs W is not"), the **bridge** table (balance walk), then the item tables by class, then **Questions for the vendor** and **Questions for your team**.

## Checks
The bridge arithmetic adds up to your balance plus the stated remainder; every unmatched item appears exactly once.

## India notes
TDS deducted on a payment makes the cash paid smaller than the invoice amount; the skill treats a short payment as a TDS difference only when your data shows a deduction, otherwise **Hypothesis**.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
