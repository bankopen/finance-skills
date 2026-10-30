---
name: journal-entry-review
description: Screen a manual journal entry export with the tests an auditor typically runs. The tests are period-end clustering, round amounts, weekend and out-of-hours postings, unusual users, missing narration and Benford's law on amounts. It lists the entries to look at first. Use before locking a period.
---

# Journal entry review

Runs the standard journal tests so you see the unusual entries before your auditor does.

## Use when
- You have a journal listing (CSV or pasted) with date, posting date, user, account, debit, credit and, ideally, narration, approver and posting time.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **period** and the **close date** (the cut-off after which a posting is "after period end").
2. **Materiality.** Default if not given: 0.5% of total journal value, with a floor of Rs 10,000, stated in the output.
3. A **manual or system flag** per entry. If absent, all entries are treated as manual and it says so.
4. **Entry-level or line-level** data. A journal's value is the sum of its debit lines.
5. The **chart of accounts** or a list of **sensitive accounts** (reserves, equity, suspense, revenue, cash). Without it, test 6 uses only the built-in sensitive pairs below and is labelled Hypothesis.
6. **Working days, working hours (default before 08:00 or from 19:00 counts as out of hours), the holiday calendar** and the **time zone** of the posting times. Without a holiday list, holidays are **Open**.
7. **Currency and units** (rupees, thousands, lakhs).

## Definitions it uses (stated in the output so you can change them)
- **Period-end clustering:** posting date in the last 2 working days of the period, tested on the **posting date**.
- **Round amount:** a multiple of 1,000 that is **at least the materiality**.
- **Back-dated:** posting date more than 7 days after the effective date, or any entry posted after the close date for an earlier period.
- **User concentration:** one user posting more than 40% of total value, or a user with fewer than 3 entries in the data posting an entry above materiality.
- **Unusual account pairs:** an entry that debits and credits accounts from a sensitive pair: revenue with reserves or equity, cash or bank with revenue, expense with equity, suspense with anything above materiality. These are always **Hypothesis**.

## Tests it runs (each reports how many entries and how much value it flagged)
1. Period-end clustering. 2. Round amounts. 3. Weekend, holiday and out-of-hours posting. 4. Self-approval (the same user posted and approved) and user concentration, reported on separate rows. 5. Missing or weak narration (blank, one character, or generic such as "adj" or "correction"). 6. Unusual account pairs. 7. **Benford's law** on first digits of amounts, only with at least 300 entries (otherwise **Open**); a deviation is a prompt to look, not a finding. 8. Back-dated entries.

## Output
Verdict ("14 of 612 entries look worth reviewing first, worth Rs X"), a **test summary** table (Test, Entries flagged, Value, Label), then the **review list** ordered by how many tests each entry tripped and its value (Entry, Date, User, Amount, Tests tripped, Why it matters, Question to ask). Write the questions for the preparer or approver, not conclusions. End with **Open**.

## Checks
The review list is the **union** of flagged entries, so test counts overlap and are not expected to add up to it; every entry on the list names the tests it tripped. Nothing is flagged on Benford alone without saying so. A test with mixed evidence (for example self-approval Supported, concentration Hypothesis) is split into two rows so each row has one label.

## India notes
The tests are standard journal-testing procedures used in audit work. This skill is a self-check for your finance team, not an audit, and does not replace your auditor's procedures.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
