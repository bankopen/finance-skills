---
name: vendor-onboarding-check
description: Check a new vendor's details (name, GSTIN, PAN, bank account, IFSC, contact) for format errors, internal inconsistencies and risk flags before the first payment. Use when adding a vendor to the master.
---

# Vendor onboarding check

Catches wrong or inconsistent vendor details before they become a wrong payment.

## Use when
- A vendor form, KYC pack or vendor-master row is ready and no payment has been made yet.

## Do not use when
- You want it to confirm a registration with the GST portal, a bank or any registry. It cannot look anything up; it only checks what you give it.

## Ask first
1. The vendor details as text, CSV or pasted form data (one vendor or a list): name, vendor type (company, LLP or firm, individual or proprietor, trust, other), GSTIN, PAN, bank name, IFSC, account number (full or masked), account holder name, email, phone.
2. Whether you hold lookups you have already done (a GST portal status, a penny-drop result). It uses them only if you paste them.
3. Your category rules if any (for example which vendors need an MSME certificate or a cancelled cheque).
4. For the change-risk flags only: the vendor's **previous bank details** or change history and the **name on the invoice**. Without them those flags are **Open**.

## Reads first
`finance-context.md` if it exists (vendor categories, MSME handling). If not, it carries on and says so in one line.

## Checks (one row per failed check; list passing vendors in a single line each at the end)
1. **GSTIN structure:** exactly 15 characters matching `2 digits, 5 letters, 4 digits, 1 letter, 1 character from 1-9 or A-Z, the letter Z, 1 letter or digit`. The first two digits must be a state code from 01 to 38, or 97 or 99 (say "check the current list"). Characters 3 to 12 must equal the PAN given. It does **not** compute the final check character; say "check character not verified" as **Open**. Never state whether a GSTIN is active.
2. **PAN structure:** 5 letters, 4 digits, 1 letter. The 4th letter shows the holder type: P individual, C company, H Hindu undivided family, F firm or LLP, A association of persons, B body of individuals, G government, J artificial juridical person, L local authority, T trust. Flag a mismatch with the vendor type given.
3. **IFSC:** 11 characters, 4 letters, the digit 0, then 6 letters or digits.
4. **Account number:** if the full number is given, digits only and 9 to 18 digits long. If it is masked, the length check is skipped and listed as **Open**.
5. **Account holder name vs vendor name:** normalise both (case, punctuation, Ltd = Limited, Pvt = Private, LLP) and compare words. **No word in common** is a **Fail (Supported)**. Some in common but not equal is a **Question (Hypothesis)**. A company vendor with an individual-looking holder name is a **Fail**.
6. **Duplicates within the list:** the same GSTIN or PAN under different names, or the same full account number and IFSC. With **masked** accounts, matching on IFSC plus the last four digits is only a **possible duplicate (Hypothesis)**, never Supported. If phone is given, same phone under different names is a Question.
7. **Completeness:** missing items against the category rules. A blank GSTIN is **Open** (could be unregistered or missing); ask which.
8. **Change-risk flags** (only with the extra data in "Ask first"): bank account changed recently, payee name differs from the invoice name. Otherwise **Open**.
9. A personal email domain on a company vendor is a **Question (Hypothesis)**.

## Output
Verdict first: "6 vendors checked: 2 clear, 3 with a failed check, 1 with questions only." (**Clear** = no Fail, Missing or Question; **Failed check** = at least one Fail or Missing; **Questions only** = only Questions.) Then a table with columns Vendor, Check, Result, Detail, Label. **Result** is one of **Pass**, **Fail**, **Missing**, **Question**. Detail quotes the exact value and the rule it broke. Label is **Supported** (the value breaks a structural rule), **Hypothesis** (a risk reading) or **Open** (could not run).

Then **Needs a lookup** (checks that need an outside source: GST portal status, bank confirmation, asking the vendor) and **Open** (checks that could not run for lack of data). They differ: a lookup is something you do; an Open is something the data did not allow.

Example row: `Charlie Traders Pvt Ltd | GSTIN vs PAN | Fail | GSTIN 07ABCDE1234F1Z5 contains PAN ABCDE1234F but PAN given is ABCDE1234G | Supported`

## Checks it runs on its own output
Every failure quotes the exact field value and the rule it broke. It never writes that a vendor is genuine or active.

## India notes
Identifier formats are structural patterns only; passing them does not mean the registration exists. Avoid pasting full account numbers or PAN where you can: the skill works with masked values, with the limits above.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
