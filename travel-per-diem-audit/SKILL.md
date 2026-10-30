---
name: travel-per-diem-audit
description: Check travel expense claims against your city and grade limits for hotels, meals, local travel and per diems, and against booking data where you have it, and list over-limit lines and inconsistencies. Use for travel claim review.
---

# Travel per-diem audit

Finds travel claims that break your limits or do not add up.

## Use when
- You have travel claims (employee, grade, trip dates, city, hotel nights and rate, meals, local travel, per diem) and your travel policy limits.

## Ask first
1. The **limit table**: per night hotel limits, meal or per-diem limits and local travel limits by **city tier and grade**, and the city tier list.
2. **Booking data** (flights, trains, hotels) if you want claims cross-checked. Optional.
3. How to treat **partial days** and **company-provided meals**.

## Steps
1. For each trip compute the number of nights and days from the dates, and check it against the claim.
2. Test each line: hotel rate against the limit for the city tier and grade, meals or per diem against the daily limit (reduced if meals were provided, per your rule), local travel against any cap.
3. Cross-check the claim against bookings where given: dates, city and amounts.
4. Flag inconsistencies: more nights than the trip dates allow, a per diem claimed on a travel-only day, overlapping trips for one employee, weekend or holiday charges without a note, the same hotel bill claimed twice.
5. Total the over-limit amount by employee and by city.

## Output
Verdict ("96 trips checked; Rs X claimed above limits across 14 trips"), an **exceptions** table (Employee, Trip, Line, Claimed, Limit, Excess, Issue, Label), **By employee** and **By city** totals, and **Open** items (missing limits or tiers).

## Checks
Every excess equals claimed minus limit; any trip with a missing limit is listed as Open, not passed.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
