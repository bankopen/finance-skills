# Rule references and how they are verified

Skills that depend on Indian tax or compliance rules (GST input credit, TDS, MSME payments) keep those rules in a `references/` file inside the skill folder, not in the skill's logic. Each reference file starts with a status line:

- `Status: **DRAFT**`: compiled from public secondary sources and **not yet verified** by a chartered accountant.
- `Status: **VERIFIED**`: checked against the statute or notification, with the reviewer and date recorded in the file.

## Rules
1. A rate, threshold or date is quoted by a skill only if its row is verified. Anything marked **CHECK** makes the skill say **Open**.
2. Every row names its source section (for example the CGST Act, the Income-tax Act, 2025 or the MSMED Act) and a last-checked date.
3. Do not add a rule without its section reference and a date.

## Current state (v0.2)
| File | Status |
|---|---|
| `gst-input-credit-check/references/gst-itc-rules.md` | DRAFT |
| `tds-deduction-advisor/references/tds-reference.md` | DRAFT, most rows CHECK |
| `msme-payment-watch/references/msme-reference.md` | DRAFT |
| `close-calendar/references/statutory-dates.md` | DRAFT (usual due dates; check the current notification) |
| `close-readiness-scorecard/references/scoring.md` | DRAFT (methodology, default thresholds) |
| `13-week-cash-forecast/references/stress-cases.md` | DRAFT (methodology, default stress values) |
| `finance-controls-health-check/references/scoring.md` | DRAFT (methodology, default weights and deductions) |

Notes from the draft research: non-salary TDS moved to section 393 of the Income-tax Act, 2025 from 1 April 2026 while old section numbers are still used for reporting; sources disagree on some rates, thresholds and the supplier non-filing credit reversal rule, so those are left **Open** until verified.

## Contributing a correction
Open a pull request that changes the row, cites the section and the notification or circular, and updates the date. Corrections from practising chartered accountants are especially welcome.
