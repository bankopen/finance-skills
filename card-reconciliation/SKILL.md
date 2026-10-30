---
name: card-reconciliation
description: Match corporate card statement lines to employee expense claims and list matched items, unclaimed card spend, claims with no card line, amount differences and possible personal use. Use each statement cycle.
---

# Card reconciliation

Closes the loop between what the card was charged and what was claimed.

## Use when
- You have a card statement (CSV or pasted) and the expense claims for the same cardholders and period.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **statement period** and date, and the **cardholder** mapping (card to employee).
2. Which columns hold date, merchant, amount, currency and reference in each file, and whether a claim's amount is in **rupees charged** or the **original currency**.
3. The **exchange rate** to use for foreign-currency lines, and the match **tolerance** (default Rs 1 and 3 days).
4. Your **grace period** for unclaimed spend (default none, so nothing is called overdue), which **claim statuses** to include (draft, rejected, reimbursed), and a list of merchants your company treats as personal, if any.
5. Whether one claim can cover several card lines, or one card line be split across claims.

## Steps
1. Normalise merchants: case, punctuation and legal suffixes (Pvt, Ltd, Inc, LLC, India). Any other mapping (for example "IndiGo" to "INDIGO AIRLINES") is a **Hypothesis**; list every mapping you made.
2. Match each card line to a claim line by cardholder, then reference if present, then amount within tolerance and date within the window, then merchant. **List every match with the rule used.**
3. Give each line exactly **one** class:
   - **Matched.**
   - **Date differs:** same cardholder, amount and merchant but the date is outside the window and within 14 days (a Hypothesis match, labelled).
   - **Foreign-currency difference:** the card line and the claim are in different currencies, or the claim note gives a rate, and the rupee amounts differ.
   - **Amount differs:** the same currency and the amounts differ beyond tolerance.
   - **Card line with no claim** (unclaimed).
   - **Claim with no card line.**
   - **Possible duplicate:** a second claim for a card line already matched; the **earlier** claim is the match and the later one is the duplicate (counted only here).
4. **Possible personal** is a flag on an unclaimed line, never a separate class and never added to the totals twice.
5. Show unclaimed spend by employee with the **age in days** (statement date minus card date) and, with a grace period, whether it is past it.

## Output
Verdict ("Rs X of Rs Y card spend is matched (Z%); Rs A is unclaimed; Rs B has a currency difference"). A **two-sided summary table** (Class, Card lines, Card Rs, Claim lines, Claim Rs) whose totals equal the statement total and the claims total. The **match list** (card line, claim line, rule, Label). **Unclaimed by employee** (employee, lines, Rs, oldest age, line detail). **Questions** (for a person to ask). **Open** items.

## Checks
Every card line and every claim line appears exactly once; the card side and the claim side each add up to their file's total; every match shows its rule.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
