---
name: duplicate-claim-finder
description: Find expense receipts claimed twice, by the same person or by two people, including near-matches in amount, date and merchant, and list them for review. Use before reimbursing claims.
---

# Duplicate claim finder

Catches the same expense claimed more than once.

## Use when
- You have a claims export (claim id, employee, date, merchant, amount, receipt reference, payment status).

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **period** covered and whether earlier cycles are included (duplicates can cross cycles).
2. Which column holds the **receipt reference**, if any (a missing reference is a weak signal, not a flag).
3. The **amount tolerance** (default **exact**) and the **date window** (default 3 days), and a **split limit** if you want split claims tested (without one, that test is **Open**).
4. The meaning of the **status** values; rejected and reversed claims are excluded.
5. Whether a receipt can legitimately cover several claims (mileage, a hotel folio), and whether **card statement data** is available for test 6.
6. The **currency** and whether amounts include tax.

## Normalisation
Merchants are compared after case, punctuation and common legal suffixes (Pvt, Ltd, Inc, LLC, India) are removed ("Uber" and "UBER INDIA" match); any wider mapping is a **Hypothesis**.

## Tests and where each result goes
| Test | What it finds | Output group |
|---|---|---|
| 1. Same receipt reference on two claims | One receipt, two claims. If the employees differ, say so (a stronger signal) | **Same receipt** |
| 2. Same employee, merchant, date and amount | An exact repeat | **Likely duplicate** (or **Paid twice** if both are paid) |
| 3. Different employees, same merchant, date and amount | A shared bill or a double claim | **Shared expense?** |
| 4. Near match: same employee and merchant, amount within 1% and date within the window | A possible repeat. A single weak signal; always **Hypothesis** | **Likely duplicate (weak)** |
| 5. Split claims: several claims from one merchant on one day whose total is over the split limit | A possible split | **Possible split** |
| 6. Claim also charged on a card statement | Claimed and card-paid twice | **Paid twice** (needs card data, else **Open**) |

An item that fits several groups is listed **once**, in the highest group in this order: **Paid twice**, **Same receipt**, **Likely duplicate**, **Likely duplicate (weak)**, **Shared expense?**, **Possible split**, with the other tests noted as "also".

## Output
Verdict ("9 groups of likely duplicates; Rs X at risk, of which Rs Y is already paid"). **Amount at risk** is the amount of the later or lower claim in a group (the part that would be paid twice); question-only and Open groups are not counted in the verdict. Then the groups in the order above, each item with **Evidence** (the matching fields and claim ids), a label (**Supported** for matches in the data, **Hypothesis** for a reading of intent, **Open** for what the data cannot show) and a **Next step** written as questions for the approver. Add **Near misses** (pairs that fell just outside the tolerance), **Not run** (tests with no data) and **Open**. Write "None" for an empty group.

## Checks
Every flagged group lists the claim ids it came from; nothing is flagged on a single weak signal without saying so; each claim appears in at most one group.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
