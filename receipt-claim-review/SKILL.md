---
name: receipt-claim-review
description: Match each expense claim line to its receipt (text or described) and flag amount, date, merchant and tax-invoice mismatches, missing GST details and receipts that cannot be judged. Use before approving claims.
---

# Receipt and claim review

Checks that each claim line is supported by what its receipt actually says.

## Use when
- You have claim lines and the matching receipts as text (OCR or typed), or described in words. If your agent can read images, you may attach them; if not, give the text.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **claim lines**: claim id, employee, date (and whether it is the spend date or the submission date), merchant, category, amount, **currency**, and the receipt reference or file name for each.
2. The **receipts** as text or attachments, one per reference. A receipt it cannot read is **Open**, never assumed to match.
3. Your **tolerance**: amount default exact, date default within 2 days **inclusive** of the claim date (using the date printed on the receipt), merchant matched after normalising case, punctuation and legal suffixes (Pvt, Ltd, Inc, LLC, India). Close names that are not equal after that (for example "Star Printers" and "Star Print Pvt") are a **Question (Hypothesis)**, not a match.
4. Your **receipt rule** (receipt required above which amount; default: a receipt is required for every line, stated), your **company's legal name and GSTIN** if GST credit matters, and whether **receipts not tied to any claim** should be listed (default yes).
5. If the claim currency is not stated, it assumes rupees and says so.

## Steps
1. For each line read the receipt's merchant, date, total, currency, tax lines and any GSTIN, and compare with the claim.
2. Give each line exactly **one primary class**: **Supports the claim**, **Amount differs** (show both amounts and the difference), **Date differs**, **Merchant differs**, **Currency differs**, **Receipt unreadable**, **No receipt**, **Receipt belongs to another line** (it matches a different claim better; list both lines as a pair with the same class and a cross-reference).
3. For lines in **Supports the claim**, add a **Document note** when the document is a bill or payment confirmation rather than a tax invoice, or when tax details are missing. A document note is a question, not a failure and does not make the line "need attention".
4. If you gave a policy, check the receipt for non-business items (for example alcohol) and tips; otherwise write "Policy checks skipped: no policy given".
5. List receipts that match no claim line.

## Output
Verdict ("12 lines reviewed: 4 supported; 8 need attention; Rs X claimed on those lines, Rs Y of it differs by amount"). "Need attention" means any class other than Supports the claim; the **rupees claimed** is the total claimed on those lines, and the **rupees that differ** is the sum of the amount differences, shown separately (currency-mismatched lines are listed as not valued). A **summary** by class. An **exceptions** table, ordered by claim id (Claim, Employee, Claimed, Receipt shows, Difference, Issue, Label, Suggested question). In the Label column **Supported** means the mismatch is visible in the data, never that the claim is supported. **Document notes**, **Unmatched receipts**, and **Open** items.

## Checks
Every claim line is in exactly one primary class; every exception shows the figures from both sides; nothing is marked "supports the claim" without a readable receipt; the verdict counts equal the table.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
