---
name: fixed-asset-check
description: Check additions, capitalisation, depreciation and disposals for the period against your asset register and policy, and tie the register to the ledger. Use at month end or year end.
---

# Fixed asset check

Finds fixed asset entries that do not follow your policy or do not tie out.

## Use when
- You have the asset register (opening and closing), the period's additions and disposals, the depreciation run and the general ledger balances for the asset classes.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **period** and **materiality**: one overall figure (default: 0.5% of total fixed assets at cost, floor Rs 10,000, stated) applied to every test.
2. Your **capitalisation threshold**, your **useful lives or rates by class**, the **method** (straight-line or written-down value), the **day-count basis** (default: actual days in the period over 365) and the **part-month convention** (default: from the in-use date; disposal assets stop at the disposal date). **You supply the rates; the skill never states a statutory rate.** If you give none, depreciation recomputation is **Open**.
3. The **register** with **as-at dates**: opening and **closing** cost and accumulated depreciation per asset, class, description, in-use date, status, and for disposals the date, proceeds and accumulated depreciation **at disposal**. If only one accumulated-depreciation figure is given, say which date it is; if it is the opening, closing = opening + the run (a **Hypothesis**).
4. The **depreciation run** (amount posted per asset or class).
5. The **GL balances** for cost and accumulated depreciation by class, and a **ledger listing of additions, disposals and expense lines above the threshold** if you have it (without it, "expensed candidates" are only those you point out).
6. The **CWIP** list with first booking date, last movement date and in-use date if known.
7. The **posted gain or loss** on disposals, if any.

## Steps
1. **Tie-out:** register against ledger by class, cost and accumulated depreciation, both at the same date. List every difference; mark those above materiality.
2. **Additions:** items at or above the threshold that were expensed, items below it that were capitalised, additions with no in-use date, additions placed in service but still in CWIP (only if CWIP has in-use dates).
3. **Depreciation recomputation** (only with your rates): amount = cost x rate x days / basis days (straight-line) or opening net book value x rate x days / basis (written-down value). Compare with the posted amount. List differences above materiality; total those below it in one line.
4. **Exceptions:** depreciation on fully depreciated assets, depreciation before the in-use date or after a disposal, negative net book value, assets with no depreciation and no reason.
5. **Disposals:** assets disposed but still on the register; gain or loss = proceeds minus net book value at disposal (a **Hypothesis** unless accumulated depreciation at disposal is given); whether the posted gain or loss exists (**Open** without it).
6. **CWIP** items with no movement for 12 months or more (default, stated), measured from the **last movement** date.

## Output
Verdict (when every difference is below materiality, say so: "Register ties to the ledger within materiality; N small differences totalling Rs X"; otherwise name the classes that do not tie). Tables with these columns: **Tie-out** (Class, Item, Register, Ledger, Difference, Above materiality?), **Additions** (Item, Amount, Booked to, Finding, Label), **Depreciation** (Asset, Inputs, Expected, Posted, Difference, Label), **Exceptions**, **Disposals** (Asset, Cost, Accumulated depreciation, Net book value, Proceeds, Gain or loss, Posted?, Label), **CWIP** (Item, Amount, First booked, Last movement, Finding). Then **Open** items. Whole rupees; Indian digit grouping.

## Checks
Every difference shows both figures and the date they are at; recomputation shows its inputs; nothing is called an error without the figures behind it.

## India notes
Depreciation under the Companies Act and under the Income-tax Act use different bases and rates; use the ones your accountant gives you. This skill states no rates.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
