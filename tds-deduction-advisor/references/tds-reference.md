# TDS reference used by tds-deduction-advisor

Status: **DRAFT. A chartered accountant must verify every row against the Income-tax Act, 2025 (section 393 tables) and current CBDT notifications before this skill is published.** Last compiled from secondary sources: 30 Oct 2026. Sources disagree on some details, so rows marked CHECK are not to be used until confirmed.

Structure (supported by several sources): non-salary TDS on resident payees moved to section 393 of the Income-tax Act, 2025 from 1 April 2026; the old section numbers are still quoted for reporting; payments up to 31 March 2026 follow the 1961 Act.

| Nature | Old section | Rate (verify) | Single-payment / annual threshold (verify) | Status |
|---|---|---|---|---|
| Contractors and sub-contractors | 194C | 1% individual or HUF payee, 2% others | CHECK | DRAFT |
| Professional fees | 194J | 10% | CHECK | DRAFT |
| Technical services, call-centre | 194J | 2% | CHECK | DRAFT |
| Commission and brokerage | 194H | CHECK | CHECK | DRAFT |
| Rent: land, building, furniture | 194I | CHECK | CHECK | DRAFT |
| Rent: plant and machinery | 194I | CHECK | CHECK | DRAFT |
| Purchase of goods above threshold | 194Q | CHECK | CHECK | DRAFT |
| Payment to partners | 194T | 10% (one source) | 20,000 (one source) | CHECK |
| No PAN | 206AA | higher rate applies | not applicable | CHECK |

Rules:
- A rate or threshold appears in the skill's output only if its row here is **Verified**, with a date and reviewer. Rows marked CHECK produce an **Open** note.
- Add the section 393 table row number for each nature when verified.
