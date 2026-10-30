---
name: audit-trail-pack
description: Match an auditor's request list against the documents you have indexed, mark each request Available, Partial, Missing or Not applicable, and list the gaps and how to close them. Use when an auditor sends a request list.
---

# Audit trail pack

Turns an auditor's request list into a checklist of evidence, with the gaps visible.

## Use when
- You have the auditor's request list (often called PBC, prepared by client) and a list of the documents you hold (file names, folder listing or an index), plus the period.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **request list** (number, description, due date, owner if known), the **audited period** (with the **financial year start and end**; default the Indian financial year, stated), the **date the list was received** and **today's date**.
2. The **entity type and industry** (it decides whether inventory, GST or TDS apply, and so what is **Not applicable**).
3. A **document index**: file names, folder paths, dates and, where possible, a one-line description. It works on names and descriptions only; it does not open files unless you paste text. For bundles (zips, folders) the **count of items inside** if known.
4. Whether **approvals and signatures** are recorded, and whether a document is **draft or final**.
5. The **owner** of each area and the **response date** you want to meet (default: the earliest due date).

## Rules it uses (stated in the output)
- **Date rule:** a document must be **in force or as at** the right date: transaction records and statements must fall inside the period; standing documents (loan agreements, leases, registers, constitutional papers) may predate the period if still in force. For "as at" documents (ageing, balances, confirmations) the **as-at date** must match the request, not just the file date.
- **Drafts and requests are not evidence.** A draft, a blank request or a placeholder is **Missing** (listed under the index summary as a draft), unless a final version is also present.
- **Not applicable** only when you say so with a reason; otherwise a request that may not apply is **Open**.
- **Multi-part requests** (several documents, 12 returns, four quarters): **Available** only if every part is present by name; some parts is **Partial**; names alone cannot confirm the contents of a bundle, so the label is **Hypothesis** unless the count is known.
- **"Due this week"** means due within 7 days of today.

## Steps
1. Match each request to the documents that could satisfy it, by description, name and date; list all matched documents (separated by semicolons) and why.
2. Give each request one status: **Available**, **Partial**, **Missing**, **Not applicable** or **Open**.
3. For Partial and Missing requests say **what is needed**, who might hold it and the **due date**.
4. Check evidence quality from the index: date rule, approval or signature noted, draft marker in the name.
5. Group the requests by owner and by due date.

## Output
Verdict ("20 requests: 8 available, 7 partial, 4 missing, 0 not applicable, 1 open; 7 are due this week and 4 of those are not yet available"). The **checklist** (No., Request, Status, Documents matched, Why, What is needed, Owner, Due, Label), where **Label** applies to the **match** (Supported when the document name and date clearly fit, Hypothesis otherwise, Open when it cannot tell). **By owner**. A **document index summary**: documents matched to no request, documents outside the date rule, and drafts. **Open** items.

## Checks
Every request has exactly one status; every Available row names a document; every Partial and Missing row has a "what is needed" and a due date; the counts in the verdict equal the checklist.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
