---
name: expense-gst-capture
description: Check expense claims for the supplier tax-invoice details needed to claim GST input credit (supplier GSTIN, your GSTIN as recipient, invoice number and date, tax split) and list claims where credit is likely, doubtful or unavailable. Use before reimbursing and before filing GSTR-3B.
---

# Expense GST capture

Finds the GST on expense claims you can capture, and what you are losing by missing details.

## Use when
- You have expense claims with the supplier invoice details (or the text of the invoices) and your own GST registration details.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. **Your legal name, GSTIN(s) and state(s)** of registration (mask them if you prefer; it needs the structure). If you give none, the recipient checks are **Open**.
2. The claim columns: claim id, **claim date**, supplier, category, invoice number, **invoice date**, supplier GSTIN, **recipient name and GSTIN shown on the invoice**, HSN or SAC if shown, taxable value, tax rate, CGST, SGST, IGST, total, and whether **reverse charge** applies.
3. The **period** you are claiming in. Default: the credit period is the month of the **claim date**; an **invoice dated earlier** is reported as **Out of period**, not as a defect.
4. Whether **credit was already taken** for an earlier invoice, and your **list of categories where credit is not taken** (from your accountant). Without a list it does not decide blocked categories; it asks.
5. For services: whether the **place of supply** is the supplier's state or another (the supplier's GSTIN prefix is not always the place of supply).

## Steps
1. **Invoice completeness:** supplier name and GSTIN, recipient name **and** GSTIN matching yours, invoice number and date, tax shown separately, and taxable value plus tax equal to the total.
2. **Tax split:** CGST and SGST for same-state supply, IGST for inter-state, using the place of supply. A mismatch is a question. If a rate is shown, compare it with the tax amount; the skill does not say what the correct rate is.
3. **Classify each claim into one class, with every issue listed:** **Credit likely** (complete tax invoice in your name), **Credit doubtful** (a detail missing, wrong or arithmetically inconsistent), **Out of period** (a complete invoice dated before the credit period; a question about whether it was already claimed), **Credit not available** (a category on your blocked list, or no tax shown because the supplier is unregistered), **Open** (cannot tell). A claim with several issues shows all of them; its **whole GST amount** counts in the class, once.
4. Match the category to your blocked list by meaning and show the match as a **Hypothesis** when it is not exact (for example "client meals" and "food and beverages").
5. Total the GST in each class, by **month of claim date** and by category.
6. For doubtful and out-of-period claims write the fix as a question (ask the supplier to reissue the invoice with your details). For other rows leave the question blank.
7. Remind the user that credit also depends on the invoice appearing in GSTR-2B and on the other conditions in the `gst-input-credit-check` skill, and on reverse-charge and rate checks that this skill does not do.

## Output
Verdict ("GST of Rs X looks capturable; Rs Y is doubtful; Rs Z is out of period; Rs W is not available; total Rs T"). A **summary** by class (Claims, Taxable, GST, Label); write "None" for an empty class. The **claims** table (Claim, Supplier, Invoice, Taxable, GST, Class, **Label**, Issues, Suggested question). **By month** and **By category**. **Open** items. A one-line **reconciliation**: the class totals equal the total GST of all rows.

## Checks
Taxable plus tax equals the total on every row, or the row is flagged; the class totals equal the sum of the rows; no class is given without its reason.

## India notes
Which items are blocked and the exact conditions for credit are for your accountant; this skill does not state them as rules. The draft rule notes are in `gst-input-credit-check/references/`.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
