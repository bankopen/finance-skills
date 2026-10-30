---
name: flux-analysis-explainer
description: Compare two periods of a trial balance or P&L, find the movements that matter, and draft a variance memo in which every explanation is labelled Supported, Hypothesis or Open. Use for monthly or quarterly flux review.
---

# Flux analysis explainer

Explains what moved, with an honest label on every explanation.

## Use when
- You have two periods of a trial balance or P&L (CSV or pasted), and optionally transactions, budgets or notes that explain movements.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **two periods**, which is current, the **currency and units**, and whether the file is a **P&L or a trial balance** (a signed trial balance needs its sign convention).
2. Whether the two periods are **comparable** (days in each, reclassified or remapped accounts) and any **known one-offs, accruals or reversals**.
3. **Materiality.** Default if none is given: 1% of the prior period's total income (revenue), stated and to be confirmed.
4. **Supporting data** for the large movements (ledger lines, invoices, a written note from the owner). Without it, explanations are Hypothesis or Open.
5. Whether to compare **budget** or **same period last year** as well.

## Rules it uses (stated in the output)
- A movement is **selected** when its change is at least the materiality **and** at least 10% of the prior balance. An account that appears or disappears is always selected (its percentage is "n/a").
- **Change** is the raw change (current minus prior). A **Profit effect** column shows the effect on profit (a rise in an expense is negative).
- **Supported** needs a document, ledger lines or a named written note that reconciles to the movement. If a note explains only part of it, **split the row**: a Supported part with the amount explained, and an **Open** remainder.
- A **near miss** (failed on one test by less than 20%) is mentioned in one line, not analysed.

## Steps
1. Compute change and change % for every account and for the total lines.
2. Select the movements by the rule above. Add one **roll-up row** for all unselected lines so the table reconciles to the change in the total.
3. For each selected movement write the explanation as **Supported**, **Hypothesis** (a plausible cause from the pattern, to be checked) or **Open**. Never present a Hypothesis as fact.
4. Draft a short memo of the three to five movements that explain most of the change, each with its label. Count "explains X%" as the sum of the selected profit effects divided by the total change in profit (it can exceed 100%).

## Output
Verdict ("Net profit rose Rs 3,47,000 (19.6%); five movements explain 79%"). A **movement table** (Account, Prior, Current, Change, Change %, Profit effect, Label, Explanation, What would confirm it), plus the roll-up row; if the table is too wide for the chat, give one bullet per account with the same fields. The **memo** (under 200 words, amounts in rupees with Indian grouping, lakh allowed). **Near misses**. **Open** items as a deduplicated checklist of what would confirm each movement.

## Checks
Selected movements plus the roll-up row equal the change in the total line to the nearest rupee; every explanation carries a label; a row with a partial note is split.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
