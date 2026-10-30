---
name: daily-cash-position
description: Produce a one-page cash position across all your bank accounts from the balances you give it, showing total and available cash, the change since yesterday and what drove it, accounts below their minimum, overdrafts and bank concentration. Use every morning.
---

# Daily cash position

A fixed-format morning view of where your cash is.

## Use when
- You have today's account balances (from bank statements or a balance export), and ideally yesterday's, for each bank account.

## Ask first (one message; in a non-interactive run it states, for each question below, what it assumed, and labels what it could not check as **Open**)
1. The **date**, whether balances are **opening or closing**, and the **currency and units** (and the currency of each account if there is more than one).
2. Per account: bank, account name or last four digits, **entity**, **type** (current, overdraft or cash credit, deposit, sweep), the **balance**, whether it is the **ledger or the available balance**, and for overdrafts whether the figure is the **amount drawn** or the available limit, plus the **sanctioned limit**. Do not paste full account numbers.
3. **Yesterday's balances** for the same accounts. If today follows a weekend or holiday, "yesterday" means the **previous business day** and the output says which date.
4. Per account a **minimum balance** and a **target balance** if you have them (an account with none is treated as having none), **restricted or earmarked** amounts (for example a lien), and for **deposits** whether they are **liquid on demand** (the default is no) and their maturity.
5. A **bank concentration limit** (the largest share of cash you want in one bank), and any **entity-level limits** or transfer restrictions. If no limit is given, no concentration flag is raised; the largest share is still shown.
6. Known **same-day flows** with the account and whether they land before the bank cut-off, and **transactions** if you want the drivers named.
7. Which accounts **sweep** into others (a sweep account counts as cash only if you say so).

## Rules it uses (stated in the output)
- **Included accounts:** those with a balance today. An account with **no balance today** is excluded from totals, shares and the change, and listed under flags with its last known balance and date.
- **Total cash** = the sum of positive balances in current and deposit accounts that have a balance today (plus sweep accounts you marked as cash). **Overdraft drawn** is shown separately; **net cash** = total cash minus overdraft drawn. **Undrawn overdraft headroom** (limit minus drawn) is shown as a separate line and is **not** counted as cash.
- **Available cash** = for each current account, balance minus its restricted amount, then minus its minimum balance, **floored at zero per account**; deposits count only if you said they are liquid on demand. Restricted amounts are removed before the minimum so nothing is counted twice.
- **Change since yesterday** is **like-for-like**: only accounts with a balance on both days, change = today minus yesterday. State the number of accounts included and name any excluded; if an excluded account's last balance would change the picture, say so in the verdict.
- **Shares** are of total cash (gross), to one decimal place; the shares may add to 99.9 to 100.1 because of rounding, and the output says so.
- **Idle cash** = a balance above its target, shown **before** and, if same-day flows were given, **after** them.

## Steps
1. Build the position by **bank**, **entity** and **account type**, and in total, and an **account table** in a fixed order (bank, then account).
2. Compute the like-for-like change and name the **drivers**: the accounts with the largest changes, and large movements if you gave transactions (otherwise **Open**).
3. Flag: accounts **below their minimum** (the shortfall), **overdrafts drawn** with headroom and percentage used, accounts **above target** (idle), **concentration** above your limit (by how much), restricted amounts, and **stale or missing balances**.
4. If same-day flows were given, show the **expected end of day** for the accounts they touch and in total, labelled **Hypothesis**, and say whether any account would fall below its minimum.

## Output (use exactly this order so days can be compared)
1. **Verdict line:** `Cash <date>: Rs <total> total, Rs <available> available, <up or down> Rs <change> since <previous date> (like-for-like, <n> of <m> accounts).` If an account was excluded, add its name and last balance to this line.
2. **Position:** by bank (Bank, Accounts, Balance, Share), by entity, by type, then overdraft drawn, undrawn headroom and net cash. Then the **account table** (Bank, Account, Entity, Type, Balance, Yesterday, Change, Flag).
3. **Change since yesterday:** the largest movements and the total.
4. **Flags:** below minimum, overdraft, idle, concentration, restricted, stale or missing balances (write "None" for an empty list).
5. **Expected end of day** (Hypothesis), if same-day flows were given.
6. **Open:** anything it could not tell, including accounts with no minimum or target.

## Checks
The by-bank, by-entity and by-type totals equal the grand total; net cash equals total cash minus overdraft drawn; available cash equals the sum of the per-account figures; today minus yesterday equals the stated change for the included accounts; the account list is compared with yesterday's and any account added or missing is named; every flag names the account and the rule.

## Rules this skill always follows
- **Read-only.** It reads the files you give it. It never posts, pays, files or changes anything, and it never asks for bank credentials, OTPs, passwords, API keys or tokens. If you paste any, it stops and tells you to remove them.
- **Verdict first.** The first line of the answer is the result in one sentence, then the evidence.
- **Label every claim** as **Supported** (it is in your data), **Hypothesis** (a likely reading you should check) or **Open** (it cannot tell from what it was given).
- **Say what is missing** instead of guessing. Never invent a figure, a rate, an invoice or a vendor.
- **A person decides.** Every flag is a question for your accountant or approver, not an accounting, tax or legal opinion.
