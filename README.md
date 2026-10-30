# Open finance skills

Free, open skills that make an AI agent work like a careful finance controller for Indian businesses. Each skill is a playbook: the steps, the checks and the output format, so you get the same disciplined result every run. They work with Claude, Claude Code, Cursor, Codex, GitHub Copilot, Gemini CLI and any agent that reads the Agent Skills format (a folder with a `SKILL.md`).

> **Status: draft (v0.1).** The GST, TDS and MSME skills rely on rule references that are **not yet verified by a chartered accountant**. Each reference file says what is verified and what is not, and the skills say **Open** instead of quoting a rate they cannot support. Do not rely on them for filing or payment decisions without your own accountant's review.

## Install

```bash
npx skills add bankopen/finance-skills
```

Or by hand: copy a skill folder (for example `msme-payment-watch/`) into your agent's skills folder (`~/.claude/skills/` for Claude Code, or upload the folder as a zip in Claude under Settings, Capabilities, Skills).

## Start here

Run **`finance-context`** once. It asks about your entities, banks, ERP and approval limits, then writes one `finance-context.md` that the other skills read first, so they do not ask you again.

## Skills in this release

| Skill | What it does |
|---|---|
| [`finance-context`](finance-context/SKILL.md) | Captures your finance setup once for all other skills |
| [`invoice-intake-coding`](invoice-intake-coding/SKILL.md) | Proposes vendor, GL account, cost centre and GST treatment for invoices |
| [`three-way-match`](three-way-match/SKILL.md) | Compares PO, receipt and invoice and lists exceptions |
| [`gst-input-credit-check`](gst-input-credit-check/SKILL.md) | Finds input credit at risk by comparing your purchase register with GSTR-2B |
| [`tds-deduction-advisor`](tds-deduction-advisor/SKILL.md) | Suggests TDS section, rate and threshold position per payment |
| [`duplicate-invoice-detector`](duplicate-invoice-detector/SKILL.md) | Finds duplicates, split invoices and double payments |
| [`msme-payment-watch`](msme-payment-watch/SKILL.md) | Tracks payment deadlines for micro and small vendors |

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
