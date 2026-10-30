---
name: duplicate-claim-finder
description: Find expense receipts claimed twice, by the same person or by two people, including near-matches in amount, date and merchant, and list them for review. Use before reimbursing claims.
---

# Duplicate claim finder

Catches the same expense claimed more than once.

## Use when
- You have a claims export (employee, date, merchant, amount, claim id, receipt reference or image name).

## Ask first
1. The **period** covered and whether it includes earlier cycles.
2. Which columns hold the receipt reference, if any.
3. The **tolerance** for near matches (default: amount equal and date within 3 days, stated).

## Tests
1. **Same receipt reference** used on two claims.
2. **Same employee, merchant, date and amount** on two claims.
3. **Different employees, same merchant, date and amount**, which can be a shared meal or a duplicate; flag as a question.
4. **Near match:** same employee and merchant, amounts within the tolerance, dates within the window.
5. **Split claims:** several small claims from one merchant on one day that together exceed a limit you give.
6. **Claimed and card-charged twice:** a claim and a separate card-statement line for the same spend, if you provide the card data.

## Output
Verdict ("9 groups of likely duplicates worth Rs X"), groups in this order: **Paid twice** (if payment status is given), **Same receipt**, **Likely duplicate**, **Shared expense?**, **Possible split**. Each group shows the matching fields and claim ids, a label (**Supported** for matches in the data, **Hypothesis** for a reading of intent), and the question for the approver. Write "None" for an empty group.

## Checks
Every flagged group lists the claim ids it came from; nothing is flagged on a single weak signal without saying so.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
