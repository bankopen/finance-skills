---
name: cutoff-check
description: Find sales, purchases and services recorded in the wrong period around a period end, by comparing document, delivery or service and posting dates, and list the entries to move or accrue. Use at every close.
---

# Cut-off check

Finds transactions booked in a different period from the one they belong to.

## Use when
- You have transactions near a period end with their document dates, delivery or service dates and posting dates (sales invoices, purchase bills, goods receipts, shipments, credit notes).

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **period end date**, whether it is a **month end or a year end**, and the **window** to test either side (default 5 working days each side, Monday to Friday, stated).
2. The columns: document type, number, party, document date, **delivery, receipt or service date**, posting date, amount, the period posted to, and for purchases whether the item is **stock or an expense**.
3. Your **recognition rule** if it is not "on delivery or service", and the **cost of sales** for sales if you want the profit effect after cost.
4. **Materiality.** Default: 0.5% of the period's revenue or expenses as relevant with a floor of Rs 10,000; **if revenue and expenses are not given, use the floor alone and say the 0.5% test is Open.**
5. Whether **GST timing** matters for bills booked early or late (input credit follows the bill).
6. The **dates of later bills** for goods received without a bill, so "missing" bills can be confirmed.

## Rules it uses (stated in the output)
- **Profit effect** is the **effect of correcting the entry** on the period's profit (negative reduces profit), using revenue and expense only unless cost of sales is given. A purchase of **stock** moves the balance sheet, not profit, so it is shown as "stock effect" and the profit effect is blank.
- **Value** in the summary is the **gross amount of the document**; the amount to move is shown separately where a bill spans the period end.
- **Day count for a split** is calendar days, inclusive of both end dates, stated.
- An entry that fits several tests is listed once under its **most specific test** (the lowest-numbered of 1 to 5), with the others noted.

## Tests
1. **Sales invoiced early:** invoice posted in the period, delivery or service after the period end.
2. **Sales delivered but not invoiced:** delivery on or before the period end, invoice posted after (unbilled revenue to accrue, a question).
3. **Purchases booked early:** bill posted in the period for goods or services received after the period end.
4. **Purchases missing:** goods or services received on or before the period end with the bill posted after, **or no bill at all** (label the no-bill case **Hypothesis** and refer to `accruals-prepaids`).
5. **Credit notes and returns** posted in a different period from the sale they reverse.
6. **Posting date vs document date** in a different period, with no reason (an observation, not the main test unless no other applies).
7. **Services over the period end:** a bill covering days on both sides: the split is a **Hypothesis** and a question.

## Output
Verdict ("9 entries look to be in the wrong period; correcting the Supported ones changes October profit by Rs X, and the Hypothesis ones by Rs Y; 8 are above materiality"). A **summary** by test (Test, Entries, Gross value, Profit effect, Label). The **entries** table (Document, Party, Dates as `document / delivery / posted`, Posted to, Should be, Gross amount, Profit effect, Question). A line "N other entries in the window were tested and passed". **Open** items (entries with no delivery date are excluded from totals).

## Checks
Every entry names the dates it was judged on; the counts, gross values and profit effects each reconcile to the summary; the Supported and Hypothesis effects are totalled separately.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
