# Open finance skills

Free, open skills that make an AI agent work like a careful finance controller for Indian businesses. Each skill is a playbook: the steps, the checks and the output format, so you get the same disciplined result every run. They work with Claude, Claude Code, Cursor, Codex, GitHub Copilot, Gemini CLI and any agent that reads the Agent Skills format (a folder with a `SKILL.md`).

> **Status: draft (v0.3).** The GST, TDS, MSME and statutory-date references are **not yet verified by a chartered accountant**, and each skill has been dry-run only once on made-up data (see [docs/rule-references.md](docs/rule-references.md) and [docs/testing.md](docs/testing.md)). Each reference file says what is verified and what is not, and the skills say **Open** instead of quoting a rate they cannot support. Do not rely on them for filing or payment decisions without your own accountant's review.

## Install

```bash
npx skills add bankopen/finance-skills
```

Or by hand: copy a skill folder (for example `msme-payment-watch/`) into your agent's skills folder (`~/.claude/skills/` for Claude Code, or upload the folder as a zip in Claude under Settings, Capabilities, Skills).

## Start here

Run **`finance-context`** once. It asks about your entities, banks, ERP and approval limits, then writes one `finance-context.md` that the other skills read first, so they do not ask you again.

## Skills in this release (22)

**Foundation**

| Skill | What it does |
|---|---|
| [`finance-context`](finance-context/SKILL.md) | Captures your finance setup once for all other skills |

**Accounts payable**

| Skill | What it does |
|---|---|
| [`invoice-intake-coding`](invoice-intake-coding/SKILL.md) | Proposes vendor, GL account, cost centre and GST treatment for invoices |
| [`three-way-match`](three-way-match/SKILL.md) | Compares PO, receipt and invoice and lists exceptions |
| [`duplicate-invoice-detector`](duplicate-invoice-detector/SKILL.md) | Finds duplicates, split invoices and double payments |
| [`vendor-onboarding-check`](vendor-onboarding-check/SKILL.md) | Format and consistency checks on a new vendor's GST, PAN and bank details |
| [`payment-prioritisation`](payment-prioritisation/SKILL.md) | Orders a payment run by due date, discounts, MSME limits and cash available |
| [`vendor-statement-reconciliation`](vendor-statement-reconciliation/SKILL.md) | Matches a vendor statement to your ledger and bridges the balance difference |
| [`approval-routing`](approval-routing/SKILL.md) | Suggests approvers from your approval matrix and flags gaps and conflicts |

**Tax and compliance**

| Skill | What it does |
|---|---|
| [`gst-input-credit-check`](gst-input-credit-check/SKILL.md) | Finds input credit at risk by comparing your purchase register with GSTR-2B |
| [`tds-deduction-advisor`](tds-deduction-advisor/SKILL.md) | Suggests TDS section, rate and threshold position per payment |
| [`msme-payment-watch`](msme-payment-watch/SKILL.md) | Tracks payment deadlines for micro and small vendors |

**Continuous close**

| Skill | What it does |
|---|---|
| [`close-calendar`](close-calendar/SKILL.md) | A dated close checklist with owners, dependencies and statutory dates |
| [`close-readiness-scorecard`](close-readiness-scorecard/SKILL.md) | A ready or not-ready verdict across reconciliations, accruals, flux, hygiene and documentation |
| [`daily-close-status`](daily-close-status/SKILL.md) | A fixed-format one-page status for close week |
| [`flux-analysis-explainer`](flux-analysis-explainer/SKILL.md) | Variance memos with every explanation labelled Supported, Hypothesis or Open |
| [`journal-entry-review`](journal-entry-review/SKILL.md) | Screens manual journals for round amounts, odd timing, self-approval and missing narration |

**Expense management**

| Skill | What it does |
|---|---|
| [`expense-policy-checker`](expense-policy-checker/SKILL.md) | Checks expense claims against your policy and quotes the clause |
| [`card-reconciliation`](card-reconciliation/SKILL.md) | Matches card statements to claims and finds unclaimed spend |
| [`travel-per-diem-audit`](travel-per-diem-audit/SKILL.md) | Checks travel claims against city and grade limits |
| [`duplicate-claim-finder`](duplicate-claim-finder/SKILL.md) | Finds the same receipt claimed twice, or by two people |

**Cash and controls**

| Skill | What it does |
|---|---|
| [`13-week-cash-forecast`](13-week-cash-forecast/SKILL.md) | A direct-method cash forecast from AR, AP, payroll and statutory dates, with stress cases |
| [`finance-controls-health-check`](finance-controls-health-check/SKILL.md) | A scored review of payables, close and expense controls with ranked fixes |

More are planned: see [docs/roadmap.md](docs/roadmap.md).

## How every skill behaves

- **Read-only.** It never posts, pays or files, and never asks for bank credentials, OTPs, passwords or tokens.
- **Verdict first,** then the evidence.
- **Every claim is labelled** Supported, Hypothesis or Open.
- **It says what is missing** instead of guessing.
- **A person decides.** Every flag is a question for your accountant or approver, not tax, accounting or legal advice.

Your data stays in your own session with your own agent. Nothing in this repository sends it anywhere.

## Documentation

- [How the skills work](docs/how-it-works.md)
- [Safety and data handling](docs/safety-and-data.md)
- [Rule references and how they are verified](docs/rule-references.md)
- [Writing a skill](docs/writing-a-skill.md)
- [Roadmap](docs/roadmap.md)
- [Contributing](CONTRIBUTING.md)

## Licence

MIT. See [LICENSE](LICENSE). Maintained by [Open](https://open.money).
