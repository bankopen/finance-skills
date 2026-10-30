---
name: invoice-intake-coding
description: Read vendor invoices (text, CSV or pasted PDF text) and propose vendor, dates, amounts, GL account, cost centre and GST treatment with a confidence note, ready for a person to confirm. Use for accounts payable intake.
---

# Invoice intake and coding

Turns a pile of invoices into a clean, reviewable list of proposed bookings.

## Use when
- You have invoices as text, CSV or pasted PDF text and need them coded before entry.

## Do not use when
- You want it to post entries or pay. It only proposes.

## Reads first
`finance-context.md` (entities, ERP, chart-of-accounts shape). If missing, it asks only for the chart of accounts and cost centres.

## Steps
1. For each invoice extract: vendor name, vendor GSTIN (if shown), invoice number, invoice date, due date or terms, taxable value, each GST component (CGST, SGST, IGST, cess), total, place of supply, HSN or SAC, PO number if shown.
2. Check the arithmetic: lines add up, tax = rate x taxable value, total matches. Flag any invoice where it does not.
3. Check the GST structure: CGST and SGST for same-state supply, IGST for inter-state, based on the place of supply and your registration state. Flag mismatches.
4. Propose a GL account and cost centre from the vendor and the description, using your chart of accounts. Give a confidence (High, Medium, Low) and the reason in a few words.
5. Mark GST treatment as one of: input credit likely available, input credit blocked or doubtful (for example items commonly restricted under section 17(5)), reverse charge possible, or Open. These are questions for your accountant, not conclusions.
6. List every invoice that needs a human decision, grouped by reason.

## Output
Verdict line ("23 of 25 invoices ready to review; 2 need a decision"), then one table with columns: Vendor, Invoice no., Date, Taxable, GST, Total, Proposed GL, Cost centre, Confidence, What to confirm. Below it: **Needs a decision** (by reason) and **Open** items.

## Checks it runs on its own output
Row totals equal invoice totals; no invoice appears twice; every row has a confidence and a reason.

## India notes
Rule dates: GST rate and blocked-credit rules change; this skill states the rule as the reader supplied it and says "check the current rate" instead of asserting one. Statutory references are reviewed by a chartered accountant before this skill is published.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
