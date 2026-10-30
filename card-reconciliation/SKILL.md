---
name: card-reconciliation
description: Match corporate card statement lines to employee expense claims and list matched items, unclaimed card spend, claims with no card line, amount differences and possible personal use. Use each statement cycle.
---

# Card reconciliation

Closes the loop between what the card was charged and what was claimed.

## Use when
- You have a card statement (CSV or pasted) and the expense claims for the same cardholders and period.

## Ask first
1. The **statement period** and the **cardholder** mapping (card to employee).
2. Which columns hold date, merchant, amount, currency and reference in each file.
3. The **exchange rate** to use for foreign-currency lines if your claims are in rupees, and the match tolerance (default Rs 1 and 3 days, stated).
4. Your **grace period** for unclaimed spend.

## Steps
1. Normalise merchants (case, punctuation, common suffixes) and say what you changed.
2. Match each card line to a claim line by cardholder, then amount within tolerance and date within the window, then merchant similarity. Record the rule used for each match.
3. Classify: **Matched**, **Card line with no claim** (unclaimed), **Claim with no card line**, **Amount differs**, **Foreign-currency difference**, **Possible duplicate** (the same card line claimed twice), **Possible personal** (merchants that look personal, as a question).
4. Total each class and show unclaimed spend by employee and age.
5. Suggest the question for each class (ask the employee, request a receipt, check the exchange rate).

## Output
Verdict ("Rs X of Rs Y card spend is matched; Rs Z is unclaimed"), a summary table, the detailed tables by class, **Unclaimed by employee**, and **Open** items.

## Checks
Every card line and every claim line appears exactly once; totals reconcile to the statement total and the claims total.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
