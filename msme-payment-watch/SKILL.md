---
name: msme-payment-watch
description: List payables to micro and small enterprise vendors that are close to or past the payment limit (45 days from acceptance, or 15 days without a written agreement), with the tax and interest exposure to check. Use weekly and before 31 March.
---

# MSME payment watch

Keeps you from missing the payment deadline for micro and small vendors.

## Use when
- You have open payables with vendor, invoice date, amount and (ideally) acceptance date, and a column or list saying which vendors are micro or small (Udyam).

## Ask first (one message, skip what you already know)
1. **As-of date** for the check. If none is given it asks; it never assumes today's date silently.
2. **Which column holds MSME status** and which holds the written-agreement days.
3. **Partial payments:** an amount already paid or a payment date per invoice. If there is none it treats every invoice as wholly unpaid and says so.
4. **Interest rate** for the MSMED Act estimate. If not given, interest stays **Open**.
5. **Amounts** net or gross of GST (it shows them as given).

## Reads first
`finance-context.md` if it exists (whether MSME status is held in your vendor master, usual payment terms). If it does not exist it continues using only the file's own status column and says so in one line; it does not stop. Then `references/msme-reference.md`.

## Steps
1. Mark each vendor as **Micro or small (Udyam)**, **Medium**, **Not MSME**, or **Open** (unknown). Never assume. If Udyam numbers are given it only checks the format, not the portal. Blank status is **Open**.
2. For each micro or small vendor work out the **due date**:
   - Start date = the acceptance date. If there is none, use the invoice date and label the row **Hypothesis** ("start date = invoice date").
   - Period = the written-agreement days, **capped at 45** (use the smaller of agreed and 45, and write "capped at 45" in the row when the agreement says more). With no written agreement, 15 days. A written agreement counts only if it was made before the supply; if the file does not say, state the assumption.
   - Due date = start date + period.
3. Show **days left** (positive) or **days overdue** (negative, written "overdue") against the as-of date. Due today counts as **Due within 7 days**, not overdue.
4. Group, with no overlap: **Overdue** (due before the as-of date), **Due within 7 days** (0 to 7 days left), **Due in 8 to 30 days**, **Later**, **Open status**. Write "None" for an empty group.
5. Put **Medium** and **Not MSME** vendors in a short **Not in scope** list (vendor, invoice, amount, status) with a note that the MSMED limits were not applied.
6. Flag the **financial-year-end exposure**: the total of amounts still unpaid and beyond the limit as at the next 31 March (or the year end the user gives). It is a question for your accountant about deduction timing. It shows the rupee total only, never a tax figure.
7. Show **interest exposure** only if the user gave a rate, as an estimate with the formula visible; otherwise **Open**.

## Output
Verdict ("Rs X to micro and small vendors is overdue; Rs Y falls due in 7 days"), the grouped table (Vendor, Invoice, Amount, Due date, Days, Status, and an **Assumption** column that is blank unless a start date or agreement was assumed), the **Not in scope** list, and an **Open** list (vendors with unknown status). Amounts use Indian digit grouping (Rs 1,50,000).

## Checks
Every date comes from the data and is shown; any assumption about the start date is stated next to the row.

## India notes
The limits come from the MSMED Act, sections 15 and 16, and the tax effect from section 43B(h) of the Income-tax Act, 1961 (and its counterpart under the 2025 Act). The reference file is **DRAFT until a chartered accountant confirms it**.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
