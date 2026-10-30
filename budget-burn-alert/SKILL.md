---
name: budget-burn-alert
description: Compare spend to date against budget by department and category, project the year-end position and flag lines that are burning ahead of plan. Use monthly or weekly in budget reviews.
---

# Budget burn alert

Shows where spend is running ahead of budget and where it will land.

## Use when
- You have a budget by department or category (annual and, if you have it, phased by month) and the spend to date.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **budget period**, the **as-of date**, whether the budget is **annual only or phased by month**, and the **currency and units**.
2. The **budget** by department and category and the **actuals to date** on the same lines (say if actuals are gross or net of GST, and whether they include accrued or committed items).
3. **Committed spend** not yet booked (open POs), if you want it added.
4. **Known one-offs** already in the actuals (amount and line) and **planned step-ups**, so the projection can be adjusted.
5. Which months count as "the last three": default **the three most recent closed months** before the as-of date.
6. Your **alert thresholds** (defaults below).

## Rules it uses (stated in the output; all percentages are of the **annual budget** unless stated)
- **Time elapsed** = days from the period start to the as-of date / days in the period.
- **Budget to date** = the sum of the monthly budget for the closed months (when phased), or annual x time elapsed (when not).
- **Burn to date** = actuals / budget to date (on plan is about 100%).
- **Annual burn** = actuals / annual budget. It is compared with time elapsed.
- **Two projections of the full year:** **run-rate** = actuals / time elapsed; **last three months** = actuals + (average of the last three months x months remaining). Show both. **Adjusted projection** = a projection with the one-offs removed and the step-ups added, labelled **Hypothesis**.
- **Alert level** uses the **higher of the two projections** (before adjustment), as a share of the annual budget: **Red** at 110% or more; **Amber** at more than 102% up to 110%; **Green** at 102% or less; plus **Amber** if annual burn is more than 10 percentage points ahead of time elapsed. A line with **no spend** after half the period gets **Open** ("no spend yet: is it deferred, annual, or cancelled?"), not Green.
- **Department alert** is based on the **department total** projection, and the department row lists the **worst line** beside it.
- **Overrun** = projection minus annual budget (negative is a saving). The verdict gives the **net** overrun for the higher projection and, separately, the sum of line overruns only.

## Steps
1. Match spend lines to budget lines. **Spend with no budget** and **budget with no spend** are listed separately and kept **out of** the department budget totals (spend with no budget is shown as an extra line under the department).
2. Compute burn, both projections, the adjusted projection (if one-offs or step-ups were given), the overrun and the alert for every line and each department.
3. Rank lines by overrun in rupees. Flag **lumpy lines** (more than half of the actuals in one month, or an annual premium) as a timing question.
4. Write one question for each Red and Amber line.

## Output
Verdict ("1 department Red, 1 Amber, 2 Green; projected net overrun Rs X on the higher projection (Rs Y if only lines over budget are summed); led by Marketing at Rs Z"). A **department table** (Department, Budget, Actual, Burn to date, Elapsed, Run-rate projection, Last-three-months projection, Overrun, Alert, Worst line). A **line detail** for Red and Amber lines and lumpy lines. **Spend with no budget**, **Budget with no spend**, **Adjusted view** (with one-offs removed) and **Open** items. A **worked example** line for the alert rule using one row of the data.

## Checks
Department projections equal the sum of line projections (unbudgeted spend shown separately); every alert shows the projection used and the rule that set it; elapsed time is shown with its day counts.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
