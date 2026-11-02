---
title: Stream
---

# Stream (`payload: stream`)

`stream` controls **how the answer is delivered** to the UI. Its value is a boolean (on/off), shown as a toggle in the **"Basic Options"** panel of the engine settings. **The default is on**, and that is what's recommended.

When on (`stream: true`), the answer is delivered in stages: the server sends small pieces (chunks) as soon as each token is ready, instead of waiting for the whole answer to finish. In Mikazuki's UI, the text appears character by character — the *typewriter* effect you see while the AI is typing.

## How Streaming Works

Technically, streaming runs over **HTTP SSE** (Server-Sent Events). The flow:

1. The server sends a `data: {...}` event containing a **delta** — a small incremental piece of text.
2. The final chunk carries a `finish_reason` (e.g. `stop`) as the completion marker.
3. The connection closes with the `[DONE]` signal.

The client (Mikazuki) stitches these deltas together in real time, so the first word appears just a few hundred milliseconds after the request — not after the whole paragraph is finished.

::: info 📡 Stream is only about delivery
Streaming changes nothing about the content of the answer. Same model + same prompt = same result, whether delivered in stages or all at once. The token cost is identical too.
:::

## When to Turn Stream Off

When OFF (`stream: false`), the server **completes the entire answer first**, then sends it in one go. The total time is actually similar, but it feels like one long "lag" on long answers because no text appears while it works.

The most common reasons to turn it off:

- **Third-party providers with partial streaming** — some OpenAI-compatible providers implement their streaming sloppily: the `usage` chunk at the end has a shape different from the standard, or *tool-calling* isn't supported in streaming mode. If the model on your provider looks broken or fails only while stream is ON, try turning it off.
- **Integration & debugging** — a whole JSON answer is easier to read when testing payloads or hunting for the cause of a problem in the [Advanced Payload](../parameter-dasar) panel.

::: tip 💡 Advice for regular users
If nothing is wrong at all, **leave stream on**. For everyday chat, streaming generally has no downside — only a far more responsive experience.
:::

## Myths & Facts

::: details "Does stream ON make the answer different / more expensive?"
No. Streaming only changes **how the answer is delivered**, not how the model thinks. The answer content, the number of tokens generated, and the cost to the provider are all exactly the same whether stream is ON or OFF. The only difference is when the pieces of text reach your screen.
:::

::: details "Answers feel slower with stream OFF"
It feels that way, yes — but the total time is actually similar. The difference: stream ON shows the first word almost instantly, while stream OFF "holds" everything until the full answer is done being generated, then sends it in one piece.
:::
