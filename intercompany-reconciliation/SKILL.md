---
name: intercompany-reconciliation
description: Match intercompany balances and transactions between two entities, show the differences by cause (timing, currency, one side missing, amount), and say what is needed before consolidation. Use at month end for each pair of entities.
---

# Intercompany reconciliation

Finds why two entities disagree about what they owe each other.

## Use when
- You have the intercompany account for entity A (with B) and for entity B (with A), for the same period, as CSV or pasted tables.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **two entities**, the **period end date**, and the **functional currency** of each. A foreign-currency item needs its **original currency and amount** in a column; if it is only in the description, it is read from there and labelled **Hypothesis**.
2. If currencies differ, the **exchange rate and date** to use (default: the closing rate for balances, the transaction-date rate for items), and which entity's rate is right for consolidation.
3. Which columns hold date, reference, description, debit, credit and balance in each file, and the **opening balance** on each side.
4. Whether each balance is **as at the period end** (the default) or a later date, whether lines dated after the period end are included, and what a debit means in each file (receivable or payable).
5. The **match tolerance** (default Rs 1 and 5 days), items you know are **in transit**, and items **in dispute** (a note in the file counts only if you say so).
6. Whether a **third entity** is involved (this skill handles one pair).

## Rules it uses (stated in the output)
- **Closing balance as at the period end.** Lines dated after the period end are excluded from both balances and listed as **Post-period items**; if the supplied balance includes them, say so and show the balance at the period end.
- **Normalise** both sides to "amount B owes A" and show the direction used.
- **Matching:** reference first; then amount plus a date within the window; amount alone only when it is **one-to-one** and unique on both sides. Record the rule per match.
- **Class precedence** (each line in exactly one class, the first that applies): Disputed, Currency difference, Amount differs, Timing, In A only, In B only, Matched. Mention a second class in the notes column.

## Steps
1. Normalise and match.
2. Classify every line exactly once by the precedence above.
3. Build the **bridge** from A's balance to B's. Include **zero-effect items** (Timing, Disputed) as rows with amount 0 so every unmatched item appears; show the **unexplained remainder**.
4. For each difference give a likely cause as a **Hypothesis** and the question to ask.
5. List what must be settled **before consolidation**: items to book, items to eliminate, items to leave visible.

## Output
Verdict ("A shows Rs X; B shows Rs Y; the Rs W difference is explained by Rs V of items on the bridge (gross, Rs U); Rs Z is unexplained"). The **bridge** table (Step, Item, Class, Rule matched, Amount, Running balance, Label). The **line coverage** line: A lines = matched + unmatched, B lines = matched + unmatched. The **matched count**. The item tables by class. **Before consolidation** (checklist). **Questions** for each entity. **Open** items.

## Checks
The bridge ends at B's balance plus the stated remainder; every line of both files is counted once; the number of unmatched items in the bridge equals the number across the item tables.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
