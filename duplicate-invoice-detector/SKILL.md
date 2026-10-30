---
name: duplicate-invoice-detector
description: Find likely duplicate invoices, split invoices just under approval limits, and outliers in an accounts payable ledger export. Use before a payment run and at month end.
---

# Duplicate invoice detector

Catches double payments and approval-limit workarounds before money leaves the bank.

## Use when
- You have an accounts payable export (CSV or pasted) with vendor, invoice number, invoice date, amount and, if available, approver and payment status.

## Ask first (one message, skip what you already know)
1. **Approval limits** and how approvals are recorded (one approver column, or a second column). If none, tests 4 and the limit comparison stay **Open**.
2. **Date range** the export covers and whether it includes earlier periods (duplicates can cross periods).
3. **Vendor identifiers** (GSTIN or PAN) if you have them, so name variants of one vendor can be joined. Without them it joins vendors only on a normalised name (case, punctuation, "Pvt Ltd"/"Private Limited") and says so.
4. Whether an **invoice date or a posting date** is in the export.

## Reads first
`finance-context.md` if it exists (approval limits). If it does not, it carries on with the answers above and says so in one line; it does not stop.

## Definitions it uses (stated in the output so you can change them)
- **Normalised invoice number:** upper case, spaces, hyphens, slashes and leading zeros removed.
- **Short window:** 3 days. **Just below a limit:** 95% to 99.99% of an approval limit. Say if you want other values.
- **Value at risk:** for an unpaid pair, the smaller amount; for a paid pair, the amount paid twice. Both figures are shown.

## Tests and where each result goes
| Test | What it finds | Output group |
|---|---|---|
| 1. Exact duplicate | Same vendor, same normalised invoice number, same amount | **Likely duplicate**, or **Paid twice** if both rows are paid |
| 2. Near duplicate | Same vendor and amount within the short window, or numbers equal after normalising | **Likely duplicate**, or **Paid twice** if both rows are paid |
| 3. Same invoice, amount changed | Same vendor and normalised number, different amount | **Likely duplicate** (label the amount difference) |
| 4. Possible split | Several invoices from one vendor inside the window, each just below a limit, together above it | **Possible split** |
| 5. Unusual | Round-amount clusters, amounts far from the vendor's usual range (needs vendor history; otherwise **Open**) | **Unusual** |
| 6. Paid twice | Any duplicate group where two or more rows are marked paid | Always shown first |

## Output
Verdict ("2 likely duplicate groups (Rs X at risk), 1 already paid twice (Rs Y), 1 possible split"), then the groups in this order: **Paid twice**, **Likely duplicate**, **Possible split**, **Unusual**. Within a group, sort by rupee value, largest first. Write "None" for an empty group. Each item has an **Evidence** line (the matching fields and the file line numbers), a label (**Supported** for matches in the data, **Hypothesis** for a reading of intent, **Open** for what the data cannot show), and a **Next step** written as questions for the approver. Amounts use Indian digit grouping (Rs 1,50,000).

## Checks
Every flagged group lists the exact rows it came from; nothing is flagged on a single weak signal without saying so.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
