---
name: finance-controls-health-check
description: Score your payables, close and expense controls from the exports you can give it, with a 0 to 100 grade, station scores, ranked fixes and a short shareable summary. Use quarterly or before an audit.
---

# Finance controls health check

A scored review of how well your finance controls are working, using your own data.

## Use when
- You have some of: an AP ledger export, payment and approval data, bank or sub-ledger reconciliation status, a journal listing, expense claims and your policies. It scores whatever you give it and skips what you do not.

## Ask first
1. The exports you can provide, the **period** they cover, and whether each is **complete or a sample**.
2. Your **approval limits** and where approvals are recorded (in the ledger or a separate log), your **expense policy** (including any receipt threshold and late-claim window) and your **close checklist**, if any. Missing documents lower confidence; they do not lower the score.
3. **Materiality** for reconciliation differences (a default of Rs 10,000 is used and stated if none is given).
4. **Bank-detail change logs**, if you have them (the vendor station uses them; otherwise that check is **Open**).
5. Which other skills in this library you have already run, so it can reuse their findings.

## Reads first
`finance-context.md` if present. Then `references/scoring.md` for how every station is scored.

## Stations (each scored 0 to 100, or Not scored if no data)
1. **Payment controls:** approval limits respected, segregation of duties, duplicate payments, split invoices.
2. **Vendor data quality:** missing or malformed identifiers, duplicate vendors, bank-detail changes.
3. **Reconciliation:** bank and sub-ledger reconciliations current and cleared.
4. **Close discipline:** days to close, late tasks, manual journals reviewed, unexplained flux.
5. **Expense hygiene:** policy breaches, missing receipts, duplicate claims, late claims.
6. **Tax and compliance hygiene:** GST credit mismatches, TDS deduction gaps, MSME overdue payments (as flagged by the data you give, with the draft rules in the other skills).

## Steps
1. For each station run the checks in the scoring file on the data you gave. You can also use the findings of the other skills in this library if you ran them; say which.
2. Score each station by the rules in the scoring file, counting only what the data shows. Never score from an assumption.
3. Compute the overall grade as the weighted average of the **scored** stations, using the exact rules in the scoring file. Report how many stations were scored and a **confidence** (see the scoring file; thin data lowers it).
4. Rank the fixes by overall-grade points added, then lower effort, then larger rupee value.
5. Write a three-line summary that can be pasted into chat.

## Output
Verdict ("Grade 72/100 (C), confidence Medium: 4 of 6 stations scored; the biggest gain is fixing duplicate payments (+8)"), a **station scores** table (Station, Score, Weight, What drove it, Label), the **Ranked fixes** (Fix, Points, Effort, Owner suggestion), **Not scored** (stations and the export that would score them), and the **shareable summary**.

## Checks
The overall grade equals the weighted average of scored stations under the scoring file; every point lost cites the finding behind it; stations with no data are never scored 100 or 0.

## India notes
This is a self-assessment for your finance team, not an audit opinion. The tax and compliance station inherits the draft status of the GST, TDS and MSME reference files in this library.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
