---
title: Winning Number
---

# Winning Number 

Anyone can reproduce the winning number using **public Solana data**.

## What you need

1. The **final slot** of the epoch
2. The **finalized blockhash** for that slot (base58)

That’s it. With those two values, the winning number is deterministic.

---

## Steps (plain English)

When an epoch ends:

1. Take the **final slot** of that epoch.
2. Get the **finalized blockhash** from that slot.
3. Combine them as bytes:
    - Slot as **u64 little-endian** (8 bytes)
    - Blockhash decoded from **base58** (32 bytes)
4. Run **SHA-256** over the resulting 40-byte message.
5. Add all **32 digest bytes** together.
6. Take the remainder after dividing by 10 (**mod 10**).
7. The remainder (**0–9**) is the winning number.

---

## Reference implementation (TypeScript)

> This matches the verifier logic: u64 LE slot bytes + base58-decoded blockhash bytes.

```ts
import bs58 from "bs58";
import { sha256 } from "@noble/hashes/sha256";

export type VerifyResult = {
  slot: bigint;
  blockhash: string;
  winningNumber: number;
  debug: {
    slotU64LeHex: string;
    blockhashBytesHex: string;
    messageHex: string;
    digestSha256Hex: string;
    digestSumU64: bigint;
  };
};

// --- helpers ---
function slotToU64LeBytes(slot: bigint): Uint8Array {
  if (slot < 0n) throw new Error("slot must be >= 0");
  if (slot > 0xffff_ffff_ffff_ffffn) throw new Error("slot exceeds u64");

  const out = new Uint8Array(8);
  let x = slot;

  for (let i = 0; i < 8; i++) {
    out[i] = Number(x & 0xffn);
    x >>= 8n;
  }

  return out; // little-endian
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function reproduceWinningNumber(
  slot: bigint,
  blockhashBase58: string,
  range = 10
): VerifyResult {
  if (!Number.isInteger(range) || range <= 0) {
    throw new Error("range must be a positive integer");
  }

  // 1) final slot
  const finalSlot: bigint = slot;

  // 2) finalized blockhash at that slot
  const finalizedBlockhash: string = blockhashBase58;

  // 3) combine bytes (u64 LE + 32-byte blockhash)
  const slotLe = slotToU64LeBytes(finalSlot); // 8 bytes u64 LE
  const blockhashBytes = bs58.decode(finalizedBlockhash); // should be 32 bytes

  if (blockhashBytes.length !== 32) {
    throw new Error(
      `decoded blockhash must be 32 bytes, got ${blockhashBytes.length}`
    );
  }

  const msg = new Uint8Array(8 + 32); // 40 bytes
  msg.set(slotLe, 0);
  msg.set(blockhashBytes, 8);

  // 4) SHA-256(message)
  const digest = sha256(msg); // Uint8Array(32)

  // 5) sum 32 digest bytes
  let total = 0n;
  for (const b of digest) total += BigInt(b);

  // 6-7) mod range (default: 10)
  const winningNumber = Number(total % BigInt(range));

  return {
    slot: finalSlot,
    blockhash: finalizedBlockhash,
    winningNumber,
    debug: {
      slotU64LeHex: bytesToHex(slotLe),
      blockhashBytesHex: bytesToHex(blockhashBytes),
      messageHex: bytesToHex(msg),
      digestSha256Hex: bytesToHex(digest),
      digestSumU64: total,
    },
  };
}
```

---

## Run it locally (quick start)

If someone wants to reproduce the winning number locally in under a minute:

```bash
npm init -y
npm i bs58 @noble/hashes
```

Create a file named `reproduce.js` and paste the function above (or transpile TS). Then call it:

```js
import { reproduceWinningNumber } from "./reproduce.js";

const slot = 400031999n; // example
const blockhash = "BASE58_BLOCKHASH_HERE"; // example

console.log(reproduceWinningNumber(slot, blockhash).winningNumber);
```

> Tip: The returned `debug` object includes hex dumps (slot bytes, message bytes, digest) to help confirm the exact byte-level reproduction.

---

## Verifier repository (download + reproduce)

Clone the official verifier repo to reproduce results with the same logic used by the project:

```text
https://github.com/IC42N/iseefortune-verifier
```

That repo includes the reproduction code, helpful scripts, and usage instructions.
