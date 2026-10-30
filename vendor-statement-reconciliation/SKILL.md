---
name: vendor-statement-reconciliation
description: Match a vendor's statement of account against your own ledger for that vendor and list matched items, items missing on either side, amount differences and timing differences. Use at month end or when a vendor disputes a balance.
---

# Vendor statement reconciliation

Explains why a vendor's balance and yours differ.

## Use when
- You have a vendor's statement (CSV or pasted) and your ledger or AP transactions for that vendor and period.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **vendor**, the **statement date** and the **period start**.
2. The **currency and units**, whether the amounts are **gross or net of GST and TDS** on each side, and the **opening balance** on each side (if they differ, the difference is the first bridge item).
3. Which columns hold date, reference, debit, credit and balance in each file.
4. Whether your ledger shows the vendor as a payable (credit balance is what you owe). Remember the two files are mirrored: **a vendor's debit is your credit**.
5. A **tolerance** for rounding (default Rs 1).
6. For payments you say are in transit: the **bank date or UTR**.

## Steps
1. Normalise both sides to "amount owed to the vendor": invoices increase it; payments, credit notes, debit notes and TDS journals decrease it. Say what you changed.
2. Match on reference or invoice number first, then amount plus a date within 5 days, then amount alone. Record the rule used for each match. When the same reference appears twice on one side, the **earlier** line matches and the later line is a **Possible duplicate**; each line is in exactly one class.
3. Classify every line: **Matched** (also list the count), **In vendor statement only**, **In your ledger only**, **Amount differs**, **Timing difference** (the same item dated either side of the statement date), **In transit** (a payment in your ledger dated within 5 days before the statement date and missing from it), **Possible duplicate**.
4. Build the **bridge** from the vendor's closing balance to yours: remove each vendor-only item, and add or remove each ledger-only item by its effect on what you owe, until you reach your balance. Show the unexplained remainder.
5. Give each difference a likely cause as a **Hypothesis** (not yet booked, payment in transit, credit note not issued, GST or TDS treatment, wrong period). Treat a short payment as TDS **Supported** only when a TDS journal for that amount exists in your data; otherwise **Hypothesis**, and never state a rate or section.

## Output
Verdict ("Your balance is Rs X; the vendor's is Rs Y; Rs Z of the difference is explained (Rs A Supported, Rs B Hypothesis), Rs W is not"). Then the **bridge** table with exactly these columns: **Step, Item, Class, Rule matched, Amount, Running balance, Label**. Then the **matched count**, the item tables by class, **Questions for the vendor** and **Questions for your team** (for a person to send; the skill never contacts anyone).

## Checks
The bridge adds up to your balance plus the stated remainder; the number of unmatched items in the bridge equals the number across the item tables; every line of both files appears exactly once (matched, or in one class).

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
