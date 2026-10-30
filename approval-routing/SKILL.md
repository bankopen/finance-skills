---
name: approval-routing
description: Suggest who should approve each payment from its amount, type and department using your approval matrix, and flag payments with no valid approver, single-approver items over the limit and conflicts of interest. Use before payments go for approval.
---

# Approval routing

Sends each payment to the right approver and catches gaps in the approval matrix.

## Use when
- You have a list of payments to approve and your approval matrix (limits by amount, role, department or payment type).

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **approval matrix** as a table or plain text, with the **payment types it covers**, whether each **limit is inclusive or exclusive**, how many approvers are needed above each limit, and **who approves above the highest limit** (the escalation path).
2. Whether limits are **per payment** or **cumulative per vendor or per day** (the split check needs a **vendor** field per payment; without it that check is **Open**).
3. The **initiator** of each payment, the **currency**, whether amounts are before or after tax, and the **as-of date**.
4. **Delegations and leave** in force (who covers whom, until when).
5. Optional: payee relationship owners, for the conflict check.

## Reads first
`finance-context.md` (approval limits) if present. If the matrix is also missing it asks for it; it does not invent one.

## Steps
1. For each payment find the matrix rows that apply. If **one** row applies, use it. If **more than one** applies and they **agree** on who approves, use it. If they **disagree** on approvers, the payment goes to **Needs a decision** with both rows quoted; it is not guessed.
2. Propose the **required approvers** by role and name where the matrix gives names, applying delegations valid on the as-of date.
3. Check **segregation of duties**: the initiator is not an approver. If the initiator is the **only** matrix approver, flag it and ask who should approve instead; if the matrix has a next level, name it as a question.
4. Flag: **No matching rule** (including a payment type the matrix does not cover), **Over the highest limit** (name the escalation path if given, otherwise ask), **Initiator is approver**, **One approver where two are required**, **Delegation expired or approver on leave** (only with dates), **Split risk** (only with vendor data).
5. Group clean payments by approver. Payments needing two named approvers are listed as a **joint line** so they are not double counted.

## Output
Verdict ("38 payments routed; 4 need a decision"). The decision count includes ambiguity and conflicts but not Open notes. **By approver** (approver or pair, number of payments, total value). **Routed with a caveat** payments appear in the routed list with a caveat column. A **Needs a decision** table with columns: Payment, Amount, Issue, **Matrix row tested**, Why, Suggested question. Then **Open** items.

## Checks
Every payment appears in exactly one of the routed list or the needs-a-decision list; each exception quotes the matrix row it was tested against, or "none, no rule".

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
