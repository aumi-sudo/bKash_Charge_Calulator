# bKash Charge Calculator

A simple, lightweight web tool to calculate fees and total costs for bKash transactions — including Cash Out, Send Money, Add Money, and bKash to Bank.

## Why I Made This

The official bKash website has a charge calculator, but it only shows you the charge amount — not the total you actually need to have in your account. I got tired of doing the math manually every time, so I built this for my own use. If anyone else finds it useful, great!

## What It Does

- Select your transaction type — Cash Out, Send Money, Add Money, or bKash to Bank
- Choose the relevant method, recipient type, monthly tier, or bank depending on the transaction
- Enter the amount and instantly see the service charge and total deducted from your wallet

## What's New in v2

- Added support for Send Money, Add Money, and bKash to Bank — v1 only handled Cash Out
- Cash Out now lets you choose between Agent, Priyo Agent, and ATM
- Send Money includes Priyo/Non-Priyo recipient selection with monthly spend tiers — if your entered amount exceeds the selected tier's limit, the correct higher charge is applied automatically
- bKash to Bank supports bank-specific charge rates
- Light and dark mode with preference saved between visits
- All amounts now displayed in Bangladeshi taka format (e.g. ৳1,00,000.00)

## How to Use

Open [https://aumi-sudo.github.io/bKash_Charge_Calulator/](https://aumi-sudo.github.io/bKash_Charge_Calulator/), select your transaction type and relevant options, enter the amount, and hit **Calculate Charges**. That's it.

## Tech

Plain HTML, CSS, and JavaScript — no frameworks, no dependencies, no build step.

## Versioning

| Branch | Description |
|---|---|
| v1 | Basic Cash Out calculator only |
| v2 | Added transaction types, dark mode, Bangladeshi number formatting |

## Disclaimer

This is an unofficial tool made for personal convenience. I am not affiliated with bKash in any way. Charge rates are based on publicly available information and may change — always verify with the official bKash website. Please don't sue me bKash — I love this revolutionary thing!
