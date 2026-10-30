---
name: approval-routing
description: Suggest who should approve each payment from its amount, type and department using your approval matrix, and flag payments with no valid approver, single-approver items over the limit and conflicts of interest. Use before payments go for approval.
---

# Approval routing

Sends each payment to the right approver and catches gaps in the approval matrix.

## Use when
- You have a list of payments to approve and your approval matrix (limits by amount, role, department or payment type).

## Ask first
1. The **approval matrix** (a table or plain text): who can approve what amount, for which departments or payment types, and how many approvers are needed above each limit.
2. Who **initiated** each payment (so an initiator is not also the approver).
3. Any **delegations** in force (who is covering whom, until when).

## Reads first
`finance-context.md` (approval limits) if present. If the matrix is also missing it asks for it; it does not invent one.

## Steps
1. For each payment, find the matrix row that applies. If more than one fits, use the strictest and say so.
2. Propose the **required approvers** by role and name where the matrix gives names.
3. Check the **segregation of duties**: the initiator is not an approver; the same person is not the only approver on a split of one vendor's invoices; the approver is not the payee's relationship owner if you tell it that.
4. Flag: **No matching rule**, **Over the highest limit**, **Initiator is approver**, **One approver where two are required**, **Approver on leave or delegation expired** (only if you gave dates).
5. Group the clean payments by approver so a batch can be reviewed together.

## Output
Verdict ("38 payments routed; 4 need a decision"), then **By approver** (approver, number and total value of payments), a **Needs a decision** table (Payment, Amount, Issue, Why, Suggested question), and **Open** items (rows where the matrix was ambiguous).

## Checks
Every payment appears in exactly one of the routed list or the needs-a-decision list; each exception quotes the matrix row it was tested against.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
