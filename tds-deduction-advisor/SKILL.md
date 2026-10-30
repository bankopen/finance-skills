---
name: tds-deduction-advisor
description: For a list of vendor payments, suggest the TDS section, rate and threshold position, and flag missing PAN, lower-deduction certificates and payments that cross a threshold. Use before a payment run or at quarter end.
---

# TDS deduction advisor

Suggests how much TDS to consider on each vendor payment and where the paperwork is missing. It suggests; your accountant confirms.

## Use when
- You have a list of payments or bills with vendor, nature of payment, amount and date, ideally with vendor PAN status.

## Reads first
`finance-context.md` (deductor status, vendor categories). It then reads `references/tds-reference.md` for the sections and rates it may use.

## Steps
1. For each payment, propose the **nature of payment** (contractor, professional fees, technical services, commission or brokerage, rent, purchase of goods, other) from the vendor and description. Give the reason and a confidence.
2. Look up the section, rate and threshold for that nature in the reference file. Show the old section number (still used for reporting) and the new section reference under the Income-tax Act, 2025. If the reference file does not cover the nature, say **Open** and do not guess.
3. Track **cumulative payments per vendor per financial year** against single-payment and annual thresholds, and show when a threshold is crossed.
4. Compute the **indicative TDS** (amount x rate) and label it an estimate. State whether GST is included in the base as the source file shows; if unknown, **Open**.
5. Flag: missing or invalid PAN (a higher rate may apply), lower or nil deduction certificates on file (use only if the user supplies the certificate details), payments to vendors whose category is unclear, and payments where the threshold is close.
6. Group items needing a decision for the accountant.

## Output
Verdict ("34 payments checked; indicative TDS Rs X; 6 need an accountant's decision"), a table (Vendor, Date, Amount, Proposed nature, Section, Rate, Threshold status, Indicative TDS, Flags), and an **Open** list.

## Checks
Every rate comes from the reference file and is shown with its section; no payment is left without either a section or an **Open** note.

## India notes
Sections were renumbered under the Income-tax Act, 2025 from 1 April 2026; reporting still uses the old section numbers. The reference file states its last-checked date. It is **DRAFT until a chartered accountant signs it off**, and the skill tells the user to check rates against the current Act tables and CBDT notifications.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
