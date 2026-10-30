# Testing the skills

A skill is only useful if an agent can follow it without guessing. Each skill is tested by giving it to a fresh agent with a **small made-up dataset** that has a few planted problems, and recording where the agent had to guess, what it should have asked for and whether the output format was clear. The fixes go back into the skill.

## Status (v0.2)
Dry-run tested on made-up data and revised from the findings:
`duplicate-invoice-detector`, `msme-payment-watch`, `vendor-onboarding-check`, `close-readiness-scorecard`, `journal-entry-review`, `finance-controls-health-check`, `13-week-cash-forecast`.

Written but not yet dry-run: the other skills in this repository. Treat their first outputs with extra care and open an issue for anything unclear.

## How to test a skill yourself
1. Make a small file of fictional data (no real vendors, employees, accounts or tax IDs).
2. Plant two or three known problems.
3. Ask your agent to follow the skill on that file.
4. Check that it finds the planted problems, labels each claim, states every assumption and says what it could not tell.
5. Note every instruction it had to interpret, and propose a clearer wording in a pull request.

The skills never post, pay or file, so a test is safe to run in any session. Do not use real data in tests or in issues.
