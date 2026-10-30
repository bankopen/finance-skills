# Scoring rules for close-readiness-scorecard

Status: **DRAFT.** This is a methodology, not a statutory rule: the thresholds are defaults you can change.

## Ratings
**Ready**, **Watch**, **Not ready** or **Open** (no input was given for that dimension).

| Dimension | Ready | Watch | Not ready | Open |
|---|---|---|---|---|
| Reconciliations | All reconciled; differences below materiality and explained | A difference above materiality with a stated cause | A difference above materiality with no cause | No reconciliation status was given |
| Accruals and prepaids | All recurring items present | One or two missing or changed without a reason | Material items missing, shown by a **Supported** fact (for example a schedule or journal) | No schedule given and the trial balance alone does not settle it (then Watch if the movement looks wrong, with Hypothesis) |
| Flux | Every movement above the threshold explained | Some above threshold unexplained but below materiality | Material movements unexplained | Not applicable: the trial balances are always given |
| Balance sheet hygiene | No unusual balances | Items under materiality | Suspense or clearing accounts above materiality, or a negative control account (receivables or payables on the wrong side) above materiality | Account types unknown |
| Documentation | All journals narrated and approved | A few gaps | Material journals without support | No journal list or checklist given |

## Flux rules
Threshold default: a movement of more than 10% and above materiality. A **sign change** (for example a payable moving from credit to debit) is judged on the full swing in rupees, and labelled "sign change". An account that appears from zero is included. Equity accounts are excluded from flux except for movements that profit does not explain.

## Verdict
1. If the trial balance does not balance, the first blocker is that.
2. **Not ready** if any dimension is Not ready.
3. Otherwise **Cannot confirm** if any dimension is Open (including the case where every dimension is Open).
4. Otherwise **Ready with conditions** if any dimension is Watch.
5. Otherwise **Ready to lock**.

A rating of Not ready needs Supported evidence (a number in the data). Evidence that is only a Hypothesis (for example an unchanged prepaid balance with no schedule) can set at most Watch.
