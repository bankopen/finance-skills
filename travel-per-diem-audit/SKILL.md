---
name: travel-per-diem-audit
description: Check travel expense claims against your city and grade limits for hotels, meals, local travel and per diems, and against booking data where you have it, and list over-limit lines and inconsistencies. Use for travel claim review.
---

# Travel per-diem audit

Finds travel claims that break your limits or do not add up.

## Use when
- You have travel claims (employee, grade, trip dates, city, hotel nights, rate and bill number, meals, local travel, per diem) and your travel policy limits.

## Ask first (one message; in a non-interactive run it states the defaults below and labels what it could not check as **Open**)
1. The **limit table**: hotel per night, meals or per-diem per day (say if the limit is per day or per meal), and local travel (per day or per trip), by **city tier and grade**, plus the **city tier list**. A city missing from the tier list, or a grade missing from the table, is **Open**, never passed.
2. How to treat **partial days** and **company-provided meals**. Default if not told: the arrival and departure days count as full days, and no meals were provided (a column for provided meals reduces the limit by your rule).
3. The claim columns, especially a **hotel bill or invoice number**, the **currency**, and whether limits are before or after tax.
4. **Booking data** (flights, trains, hotels), optional, for cross-checks.
5. A **holiday calendar**, if you want weekend and holiday stays flagged.

## Definitions it uses (stated in the output)
- **Nights** = end date minus start date; **days** = nights plus 1.
- **Overlap** = the date ranges of two trips of one employee overlap, or they share a travel day and both claim meals or local travel for it.
- **Duplicate hotel bill** = the same bill number, or the same vendor, amount and dates, in two claims.

## Steps
1. For each trip compute nights and days from the dates and compare with the claim.
2. Test each line against the limit for the city tier and grade. Excess = claimed minus limit.
3. Cross-check against bookings where given: dates, city and amounts.
4. Separately list **inconsistencies** that have no limit to exceed: more nights than the dates allow, a per diem claimed on a travel-only day, overlapping trips, a duplicate hotel bill, weekend or holiday stays without a note, a claim above its booking.
5. Total the over-limit amounts by employee and by city. Count the trips with no exception ("clean trips").

## Output
Verdict ("96 trips checked: 78 clean; Rs X claimed above limits across 11 trips; 7 trips have inconsistencies; 3 trips could not be tested"). The verdict's rupee total is **over-limit excess only**. An **over-limit table** (Employee, Trip, Line, Claimed, Limit, Excess, Label). An **inconsistencies table** (Employee, Trip, Issue, Evidence, Label), where amount columns may be "n/a". **By employee** and **By city** over-limit totals. **Open** items (missing tiers, grades, bookings). Sort both tables by excess, largest first.

## Checks
Every excess equals claimed minus limit; every trip is in exactly one of clean, over-limit, inconsistent or untested (or in more than one of the first three, stated); nothing with a missing limit is shown as clean.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
