---
title: Game Mechanics
---

# Game Mechanics

This section defines the gameplay rules and economic mechanics currently implemented in the application.

---

## Predictions

- You may place **one prediction per tier per wallet**.
- A prediction consists of:
    - Selecting a number (0–9)
    - Choosing a conviction amount (your contribution to the pot)

Your conviction amount determines your proportional share of the pot **if your number wins**.

---

## Winning Number Range

The winning number is always in the range:

**0–9 (10 possible outcomes)**

Each epoch produces exactly one winning number derived from finalized on-chain data.

---

## Probability

Each prediction selects one number from the set `{0–9}`.

- Probability of matching the winning number in a given epoch: **1 in 10**
- Probability of a payout event (non-rollover epoch): **8 in 10**

Two outcomes always trigger a rollover (explained below).

---

## Rollover Mechanics

There are always two rollover numbers:

- **0**
- **The previous epoch’s winning number**

If the winning number matches either of these values, the game **rolls over** into the next epoch.

### When a rollover occurs:

- No winners are declared
- No predictions are lost
- The entire pot carries forward
- All predictions remain active
- Players may increase conviction
- The taker fee decreases by **1%** as a rollover incentive

### Example

If the previous winning number was **7**, then the rollover numbers for the current epoch are:

- 0
- 7

If either value is selected as the winning number, the round rolls over.

---

## Tiers

The game currently operates in **Tier 1**.

Additional tiers may open over time with:

- Higher conviction ranges
- Larger pots
- Different economic parameters

Each tier operates independently.

---

## Pot & Taker Fee

A taker fee is applied to each pot.

- **Gross pot** = total conviction contributed by all players
- **Protocol fee** = taker fee percentage
- **Net pot** = gross pot − protocol fee

The net pot is distributed proportionally among winners.

---

## Payout Model

If your selected number matches the winning number (and it is not a rollover event), your payout share is:

```
(your conviction amount / total conviction on winning number) × net pot
```

This ensures proportional distribution among winners.

---

## Change Tickets

Change tickets are automatically awarded to a percentage of players who miss the winning number as a consolation mechanism.

A change ticket allows you to:

- Override your existing prediction
- Change your selected number
- Do so **before the cutoff time**

### Strategic Impact

Switching to a number with fewer participants can significantly increase your potential share of the pot if that number wins.

> **Important:**  
> A change ticket does **not** increase your probability of winning.  
> It only affects payout distribution if your chosen number wins.
