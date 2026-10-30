---
name: expense-policy-checker
description: Check expense claims against your expense policy and list violations, missing receipts, claims needing extra approval and claims at the edge of a limit. Use before approving or reimbursing claims.
---

# Expense policy checker

Applies your own policy to a batch of claims, consistently.

## Use when
- You have a list of expense claims and your expense policy as text or a table.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **policy**: limits by category and grade (and whether a limit is per claim, **per day** or per trip), receipt rules, approval levels, the submission cut-off and **what it counts from** (the expense date or the end of the trip), and anything not reimbursable. With no written policy it can only check internal consistency; it will not invent one.
2. The **grade** of each employee, and the **level** of each approver. A missing grade is **Open**, not assumed.
3. The **as-of date** (or the submission date of each claim) for the cut-off test.
4. **Currency** and any foreign-currency claims with the rate or date to use.
5. Whether any exception was **pre-approved** (a column for it).
6. The claim columns: employee, date, category, amount, description, receipt (yes or no), approver.

## Steps
1. Map each claim to a policy category. If it fits two, use the stricter and say so. For per-day limits, **add the claims of one employee, one category and one day** before testing.
2. Test each claim: amount against the limit, receipt present where required, within the submission cut-off, approver level sufficient (a higher level is acceptable), category allowed for the grade, no personal items.
3. Give each claim **one primary class**, chosen in this order of severity: **Not reimbursable**, **Needs a decision** (policy unclear), **Needs higher approval**, **Missing receipt**, **Over limit** (by how much), **Late claim**, **Within policy**. Record any other issue in an **Also** column.
4. Show the rupees at stake as both the **claimed amount** and, where relevant, the **excess**.
5. List **Near limit** claims (within policy but at 95% or more of the limit) as information, not a class.
6. List the **policy gaps** you met so the policy can be fixed. Duplicate claims are the job of the `duplicate-claim-finder` skill.

## Output
Verdict ("20 claims checked: 8 within policy; 12 need attention worth Rs 76,400 claimed, of which Rs 2,750 is over limit"). A **summary table** (Class, Claims, Claim IDs, Rs claimed, Rs at stake). A **per-employee table** (Employee, Claims needing attention, Rs claimed). An **exceptions** table (Claim, Employee, Date, Category, Rs, Issue, Also, Policy clause, Label, Suggested question); the clause is quoted, or "none, policy gap". Then **Near limit**, **Policy gaps** and **Open** items.

## Checks
Every claim is in exactly one primary class; every exception shows the clause it was tested against or "none, policy gap"; the totals reconcile to the claims total.

## India notes
GST input credit on expenses and the tax treatment of reimbursements are questions for your accountant; this skill does not decide them.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
