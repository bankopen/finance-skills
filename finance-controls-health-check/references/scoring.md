# Scoring for finance-controls-health-check

Status: **DRAFT.** A methodology, not a statutory rule. The weights and deductions are defaults; change them and state the values you used.

## Definitions
- **Finding:** one distinct issue instance. A duplicate payment pair is one finding; each split-invoice group is one finding; each vendor with a malformed identifier is one finding; each claim with a missing receipt is one finding.
- **Check:** one named test in the list below. A cap applies per check, not per station.

## Checks per station
| Station | Checks |
|---|---|
| Payment controls | duplicate payments; payments above authority or with fewer approvers than required; split invoices; initiator also approver |
| Vendor data quality | missing or malformed GSTIN or PAN on a vendor that was paid; duplicate vendors; bank-detail changes (needs the change log) |
| Reconciliation | unreconciled differences above materiality; reconciliations not completed for the period |
| Close discipline | late tasks; unreviewed manual journals; unexplained flux above threshold |
| Expense hygiene | policy breaches; missing receipts; duplicate claims; late claims (needs the policy window) |
| Tax and compliance hygiene | GST credit mismatches; TDS deduction gaps; MSME payments overdue |

A check that cannot run (missing data) is listed as **Open** and does not change the score. A station with data but no findings scores 100.

## Weights (default; scored stations only, re-normalised)
Payment controls 25, Vendor data quality 15, Reconciliation 20, Close discipline 15, Expense hygiene 10, Tax and compliance hygiene 15. A partly checked station keeps its full weight; the checks that did not run are listed.

## Deductions (flat per finding, then capped per check)
| Severity | Deduction | Cap per check | Examples |
|---|---|---|---|
| Critical | 10 | 40 | a payment made twice; a payment above authority with no second approver; a split invoice whose combined amount exceeds the limit with no second approver |
| Major | 5 | 25 | an unreconciled difference above materiality; a paid vendor with no or malformed GSTIN or PAN; a missing receipt on a claim above the receipt threshold; a split invoice whose combined amount exceeds the limit but had proper approval |
| Minor | 1 | 10 | missing narration; a late claim; a missing receipt on a small claim; a claim with weak documentation |

Rule: use the severity in the table; if a finding is not in the table, rate it Minor and say so. There is no "share of items" adjustment: deductions are flat.

## Overall grade, points and rounding
- **Overall** = sum(station score x weight) / sum(weights of scored stations).
- **Points a fix adds** (overall-grade points) = (the deduction it removes x the station's weight) / sum of weights of scored stations. Show one decimal.
- Show the overall as a whole number, rounded half up. Pick the letter from the **unrounded** score.
- **Bands:** 90 or more A, 80 or more B, 70 or more C, 60 or more D, below 60 E.

## Confidence
Start with the number of scored stations: High for five or six, Medium for three or four, Low for one or two. **Lower it one level** if any scored station rests on fewer than 20 items, or if an export was only a sample. A grade is never shown without its confidence and the reason for it.

## Worked example
Payment controls: one duplicate payment (Critical, -10), one single-approver payment above the limit (Critical, -10) and one split group above the limit with no second approver (Critical, -10): 100 - 30 = **70**. Vendor data: one paid vendor with no GSTIN (Major, -5): **95**. Expense: two missing receipts on small claims (Minor, -1 each): **98**. Scored weights 25 + 15 + 10 = 50. Overall = (70x25 + 95x15 + 98x10) / 50 = (1750 + 1425 + 980) / 50 = 83.1, so **83 (B)**. Fixing the duplicate adds (10 x 25) / 50 = **5.0** points. Confidence: three stations scored gives Medium; the payables export had 20 rows, which is not fewer than 20, so Medium stands.
