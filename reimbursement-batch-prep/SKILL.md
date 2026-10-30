---
name: reimbursement-batch-prep
description: Prepare a draft employee reimbursement payout from approved claims, check employee bank details, advances and limits, and list items to hold. It never makes a payment. Use before a reimbursement run.
---

# Reimbursement batch prep

Builds a clean draft of who should be paid what, and what should wait.

## Use when
- You have approved claims and your employee master (with bank details held by you), ready to prepare a reimbursement run.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **approved claims**: claim id, employee, date, amount approved, approval date, status (approved, paid, on hold, rejected).
2. Employee details **by reference** (employee id, masked account with the last four digits, IFSC). **Do not paste full account numbers.**
3. **Advances** to adjust (employee, amount, date). Default: an advance offsets that employee's approved claims in the order of claim date, and only advances dated on or before the run date.
4. Your **batch rules**: a payout **cap per employee per run**, an amount above which a **second approver** is needed (tested on the **net payout**), a **minimum payout**, and an optional **cap per batch**.
5. The **payment date**, the **bank account** name, the **second approver's** role or name, and the **payment reference format** (otherwise the reference is **Open**).
6. A **stale-claim limit** (for example claims approved more than 60 days ago go to a decision), if you have one.

## Rules and precedence (stated in the output)
1. Only **approved** claims enter the run. Paid, rejected and on-hold claims are **Held** and listed with the reason.
2. Net payout per employee = approved claims minus advances applied. If the net is **zero or negative**, nothing is paid; the claims are **Rolled** and the unrecovered advance is shown as **carried forward**.
3. Apply these checks in this order, and place the employee in the **first** bucket that applies: **Needs a decision** (malformed IFSC or missing bank detail, a masked account and IFSC shared by two employees, a net above the cap or above the second-approver amount, a stale claim, an employee with two claims of the same amount and date), then **Rolled** (net below the minimum, or zero or negative), then the **draft payout**. A payout over the cap is **held in full** until someone decides, not paid up to the cap.
4. Show every bucket's reason once; if more than one reason applies, list them all but use the first rule for placement.
5. Duplicate claims: two claims with the same employee, amount and date under different ids are flagged as a **possible duplicate (Hypothesis)**.

## Steps
1. Select and bucket the claims by the rules above.
2. Compute net payouts and show the arithmetic.
3. Check bank details structurally: IFSC is 11 characters (4 letters, the digit 0, 6 characters); a masked account is present. Masked values may appear in a flag only as "last four" together with the employee id, never the full number.
4. Check that no claim appears twice in the batch and that no claim already marked paid is included.
5. Produce the **draft payout list**: employee id, name, claims, net payout, payment reference, and the account shown only as "(held in your master)". It is for a person to load into your banking process; the skill never pays.

## Output
Verdict ("3 employees, Rs X net across 7 claims ready; 6 claims need a decision; 3 claims roll to the next run; 4 claims held"). The **draft payout**, **needs a decision**, **rolled** and **held** tables, each with a reason column, the **advance adjustments** (applied, carried forward), and **Open** items. Employee id and name appear in every table.

## Checks
The batch total equals the sum of the net payouts; claims in the draft plus decision plus rolled plus held equal the claims given; every held claim is not approved or already paid; no full account number appears anywhere.

## India notes
Whether a reimbursement or an allowance is taxable to the employee is a question for your accountant; this skill does not decide it.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
