---
name: expense-policy-checker
description: Check expense claims against your expense policy and list violations, missing receipts, claims needing extra approval and claims at the edge of a limit. Use before approving or reimbursing claims.
---

# Expense policy checker

Applies your own policy to a batch of claims, consistently.

## Use when
- You have a list of expense claims (employee, date, category, amount, description, receipt yes or no, approver) and your expense policy as text or a table.

## Ask first
1. The **policy** (limits by category and grade, receipt rules, advance and approval rules, anything not reimbursable). If you have no written policy it will not invent one; it can only check internal consistency.
2. The **grade or level** of each employee if limits depend on it.
3. The **cut-off** for submitting a claim after the expense date, if your policy has one.

## Steps
1. Map each claim to a policy category. If a claim fits two, use the stricter and say so.
2. Test each claim: amount against the limit, receipt present where required, claim within the submission cut-off, approver level sufficient, category allowed, and no personal items in the description.
3. Classify: **Within policy**, **Over limit** (by how much), **Missing receipt**, **Late claim**, **Needs higher approval**, **Not reimbursable**, **Needs a decision** (policy unclear).
4. Give the rupee amount at stake per class and per employee.
5. List the policy gaps you met: claims that the policy does not clearly cover, so the policy can be fixed.

## Output
Verdict ("212 claims checked: 187 within policy; 25 need attention worth Rs X"), a summary table by class, an **exceptions** table (Employee, Date, Category, Amount, Issue, Policy clause, Suggested question), **Policy gaps**, and **Open** items. Each exception quotes the policy line it was tested against.

## Checks
Every claim is in exactly one class; every exception shows the limit or rule used.

## India notes
GST input credit on expenses and any tax treatment of reimbursements are questions for your accountant; this skill does not decide them.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
