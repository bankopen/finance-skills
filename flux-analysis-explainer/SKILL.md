---
name: flux-analysis-explainer
description: Compare two periods of a trial balance or P&L, find the movements that matter, and draft a variance memo in which every explanation is labelled Supported, Hypothesis or Open. Use for monthly or quarterly flux review.
---

# Flux analysis explainer

Explains what moved, with an honest label on every explanation.

## Use when
- You have two periods of a trial balance or P&L (CSV or pasted), and optionally transactions, budgets or notes that explain movements.

## Ask first
1. The **two periods** and which is current.
2. The **materiality** (an amount, or a percentage of revenue). If none is given it states a default and asks you to confirm.
3. **Supporting data** you can share for the large movements (ledger lines, invoices, notes, budget). Without it, explanations are Hypothesis or Open.
4. Whether to compare **budget** or **same period last year** as well.

## Steps
1. Compute the change in amount and percentage for each account, and for each total line.
2. Select the movements that matter: those above both a percentage threshold (default 10%) and the materiality amount, plus any account that appears or disappears.
3. For each selected movement write the explanation in one of three forms:
   - **Supported:** the supporting data you gave shows the cause (name the document or lines).
   - **Hypothesis:** a plausible cause from the pattern (timing, a one-off, a price or volume change) that you must check.
   - **Open:** the data cannot say; list what would resolve it.
4. Never present a Hypothesis as fact. If supporting data was not given, say so in the row.
5. Draft a short memo for management: the three to five things that explain most of the change, each with its label.

## Output
Verdict ("Net profit fell Rs X (Y%); three movements explain 80%"), a **movement table** (Account, Prior, Current, Change, Change %, Label, Explanation, What would confirm it), then the **memo** (under 200 words), then **Open** items.

## Checks
Movements shown sum to the change in the total lines within the stated rounding; every explanation carries a label.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
