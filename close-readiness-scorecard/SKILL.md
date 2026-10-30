---
name: close-readiness-scorecard
description: Read the current and prior trial balance and grade whether the close is ready to lock across reconciliations, accruals, flux, balance sheet hygiene and documentation, with a clear ready or not-ready verdict. Use before locking a period.
---

# Close-readiness scorecard

Answers one question: is this close ready to lock, and if not, what is in the way?

## Use when
- You have the current and prior period trial balances (CSV or pasted) and, if you have them, reconciliation status, accrual lists and a journal listing.

## Ask first (one message; in a non-interactive run it states the defaults and labels what it could not check as **Open**)
1. The **two trial balances**, the period end dates, whether each is **monthly or year to date**, and whether the prior period is last month or last year.
2. The **sign convention** (debit positive and credit negative, or Dr and Cr columns), the **account type** of each account if the file does not show it, and the **currency and units** (rupees, thousands, lakhs).
3. Optional inputs: bank and sub-ledger reconciliation status, accruals and prepaids schedules, manual journal list, the close checklist. Each missing input makes its dimension **Open**, never a pass.
4. **Known one-offs or expected changes** (so a flux item is not reported as unexplained when you already know why).
5. **Materiality.** Default if none is given: 1% of the larger of period revenue (annualised if the file is year to date) and total assets net of accumulated depreciation, stated and to be confirmed.

## Reads first
`finance-context.md` if present. Then `references/scoring.md` for the rating and verdict rules.

## Dimensions (each rated Ready, Watch, Not ready or Open)
1. **Reconciliations:** bank and sub-ledger (AR, AP) balances that agree to the trial balance; unreconciled differences above materiality.
2. **Accruals and prepaids:** recurring accruals present this month; accruals that look missing compared with last month; prepaid balances that did not amortise.
3. **Flux:** accounts whose movement versus the prior period exceeds the thresholds in the scoring file and have no explanation.
4. **Balance sheet hygiene:** unusual balances (negative payables or receivables, suspense or clearing accounts not zero, old items), and accounts that were active last month but are empty now.
5. **Documentation:** journals without narration, support or an approver; checklist items not signed off.

## Output
Verdict first, exactly one of: "**Ready to lock**", "**Ready with conditions**" (list them), "**Not ready**" (list the blockers) or "**Cannot confirm**" (list the missing inputs). The first check is always whether the trial balance balances (debits equal credits); if it does not, that is the first blocker. Then a scorecard table (Dimension, Rating, Evidence, What would fix it), the **Blockers** list ordered by rupee impact, and **Open** items (dimensions with no input). Every rating is labelled **Supported**, **Hypothesis** or **Open**.

## Checks
A dimension with no input is rated **Open**, never Ready; the verdict follows the rules in the scoring file; a **Not ready** rating rests on **Supported** evidence (a Hypothesis alone can set at most Watch); every blocker names the account or item and the amount. Blockers are ordered by the absolute movement or balance in rupees.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
