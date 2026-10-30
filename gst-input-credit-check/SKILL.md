---
name: gst-input-credit-check
description: Compare your purchase register with GSTR-2B to find input tax credit at risk: invoices missing from GSTR-2B, amount or GSTIN mismatches, vendors not filing, invoices unpaid past 180 days, and time-limit risk. Use before filing GSTR-3B.
---

# GST input credit check

Shows which input tax credit you can safely claim this month and what to chase.

## Use when
- You have your purchase register (CSV) and the GSTR-2B download for the same month, and you are preparing GSTR-3B.

## Reads first
`finance-context.md` (GST registration state, whether e-invoicing applies). It does not need any login.

## Steps
1. Match each purchase-register line to GSTR-2B on supplier GSTIN, invoice number and date. Normalise obvious formatting differences (case, spaces, leading zeros, hyphens) and say when it did so.
2. Classify each line: **In 2B and matches**, **In 2B, amount differs**, **In 2B, GSTIN or date differs**, **In your register but not in 2B**, **In 2B but not in your register**.
3. Put a rupee value on each class (taxable value and tax).
4. Flag **credit at risk** for lines not in 2B: the claim rests on the invoice appearing in GSTR-2B, so these are a question for your accountant before claiming.
5. Flag the **payment rule**: invoices unpaid more than 180 days after the invoice date may need the credit reversed with interest and can be re-claimed after payment. It uses the payment data in your register or ledger only if you supplied it, otherwise **Open**.
6. Flag the **time limit**: credit for an invoice has a last claim date (the earlier of 30 November after the financial year or the annual return date). List invoices close to or past it, using the date rule as stated in the reference file.
7. Group vendors by how many of their invoices are missing, so you know whom to chase first.

## Output
Verdict ("Rs X of Rs Y credit is safe to claim; Rs Z needs a decision"), then a summary table by class with counts and rupee values, a **Chase list** (vendor, invoices missing, tax value), and an **Open** list.

## References
`references/gst-itc-rules.md` lists the rules this skill relies on, each with the section, a one-line statement and a "last checked" date. A chartered accountant confirms the file before each release; the skill tells you the date and asks you to check it.

## Limits
It cannot see the GST portal, your filing status, or blocked-credit categories beyond the lists you provide. It never files or claims anything.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
