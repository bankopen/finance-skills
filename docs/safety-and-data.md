# Safety and data handling

## What the skills will never do
- Post journals, make payments, file returns or change records.
- Ask for bank credentials, OTPs, passwords, API keys, tokens or card numbers. If you paste one, the skill stops and tells you to remove it.
- Invent a figure, rate, invoice or vendor. Missing data is reported as **Open**.
- Give tax, accounting or legal advice. Outputs are suggestions for a person to confirm.

## Your data
The skills run inside your own agent session. This repository contains instructions only; it has no code that uploads or stores your data. Check the privacy terms of the agent you run them in.

## Recommendations
- Use exports with account numbers and tax identifiers removed where you can.
- Keep `finance-context.md` free of identifiers (the `finance-context` skill writes "(held by you)" instead).
- Review any suggestion before acting on it. Statutory rules change; each reference file shows its last-checked date.

## Reporting a problem
If a skill gives a wrong or unsafe answer, open an issue with the skill name, what you gave it (with sensitive data removed) and what you expected. For a security concern, email the maintainers through the contact on [open.money](https://open.money) rather than opening a public issue.
