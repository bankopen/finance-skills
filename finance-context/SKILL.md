---
name: finance-context
description: Interview the user once about their finance setup (banks, entities, ERP, approval limits, GST and TDS basics) and write one finance-context.md that every other skill in this library reads first. Use before running any other finance skill.
---

# Finance context

Captures how your finance team works, once, so the other skills do not ask you again.

## Use when
- You are about to use any other skill in this library for the first time.
- Something material changed: a new entity, bank, ERP, approval limit, or GST registration.

## Do not use when
- You only need a one-off answer from a single file. Run the skill directly and answer its questions.

## What it asks (skip anything you do not know; it marks it Open)
1. **Entities:** legal name, type (company, LLP, firm, proprietor), state(s) of GST registration, financial year end.
2. **Banks:** bank names and account types you pay from and collect into (no account numbers needed).
3. **Systems:** ERP or accounting software (Tally, Zoho Books, SAP, NetSuite, Business Central, other), how payments are made (bank portal, ERP plugin, other).
4. **Approvals:** payment approval limits by amount and role, and who can release payments.
5. **Tax basics:** GST registration type, whether e-invoicing applies, composition scheme or not, TDS deductor status, usual vendor categories.
6. **Vendors:** roughly how many, the share that are MSME, and whether MSME status is stored in your vendor master.
7. **Policies:** payment terms you usually agree, early-payment discounts, expense policy limits if you have one.
8. **Exports you can give** (names of reports, not the data).

## Output
Write `finance-context.md` with these headings, in this order: Entities, Banks, Systems, Approvals, Tax basics, Vendors, Policies, Exports available, Open questions. End with a **Last updated** date and a one-line **Verdict**: "Ready for other skills" or "Missing: ...".

## Checks
- No account numbers, PAN, GSTIN, passwords or tokens are written into the file. If you give them, it replaces them with "(held by you)".
- Every unknown is listed under **Open questions**, not guessed.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
