---
name: expense-policy-drafter
description: Draft a travel and expense policy for a company from its size, grades, travel patterns and approval structure, leaving every limit and amount as a decision for you, with the questions to settle them. Use when you do not have a written expense policy or are rewriting one.
---

# Expense policy drafter

Produces a structured first draft of an expense policy, with every number left for you to decide. The draft is for the owner to complete before it goes to employees.

## Use when
- You need a travel and expense policy, or want to rewrite the one you have.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. **Company size**, sector, locations, and whether people travel domestically, internationally or both. For international travel, the currency and forex process.
2. The **grades or levels** and the **approval structure**: who approves what, who the **finance approver** is, and whether any approver sits outside the reporting line.
3. Your **existing policy** (paste it), and the **problems** you want fixed (late claims, missing receipts, overspend on hotels).
4. How **travel is booked** (an agent, a tool, or by employees) and the **systems** used to claim and reimburse.
5. Whether **client-billable expenses** (re-billed to clients) are in scope, and anything **fixed by contract, client or investor rules**.
6. Whether you have **claims data** for a gap check (without it, the gap check is listed as **Open**).

## What it will and will not do
- It writes the **structure and the rules** (scope, principles, what is reimbursable, receipts, approvals, cut-off, advances, corporate cards, non-reimbursable items, misuse, review).
- It **never invents a number.** Every amount, percentage, number of days and date appears as **[Your decision #n: ...]**, with options but not market rates.
- **Qualitative rules** (for example "alcohol is not reimbursable") may be written as **defaults to confirm**: mark each as **[Default, confirm: ...]** and include it in the decision list.
- Anything about **tax treatment** (allowances, perquisites, GST credit) is a question for your accountant, not a rule.

## Steps
1. **Build the decision list first**, in order of importance, and number it. The policy text refers to these numbers; it does not introduce new ones.
2. Draft the policy under these headings: Purpose and scope, Principles, Who approves what, Eligible expenses by category, Limits, Receipts and documentation, Advances and cards, Submission and reimbursement timelines, Not reimbursable, Exceptions and pre-approval, Misuse and consequences, Review and ownership. Write in plain, short sentences. Every placeholder or default points to its decision number.
3. If there is an existing policy, list what to keep, change and drop.
4. List the **questions for your accountant**.
5. **Consistency step:** check that every [Your decision] and [Default] in the text appears in the decision list, and every decision in the list appears in the text. Report the counts.

## Output
Verdict: "Draft policy ready with N decisions to make, M for your accountant", where N and M are the counts in the lists (not a target). Then the **decision list** (No. in order of importance, Decision, Options, Why it matters), the **draft policy text** referring to those numbers, the **accountant questions**, and **Open** items (including any input not given, such as claims data for the gap check).

## Checks
The draft contains no invented amount, percentage, number of days or date; the decision numbers in the text and the list match exactly; every section has content or a placeholder.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
