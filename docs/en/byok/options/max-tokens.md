---
title: Max Tokens
---

# Max Tokens

`max_tokens` sets the maximum output-token limit for **one answer**. Default in Mikazuki: **2048**, configurable in the BYOK panel under **Settings → Engine** (the Basic Options card) using preset chips or a number input.

One token is roughly equal to 3/4 of a word. So ±100 tokens ≈ 75 words — a rough figure, enough to picture the scale, not a precise conversion.

## Two Roles at Once

In Mikazuki, `max_tokens` is not just an "answer length cap". It plays two roles at once:

1. **Sent to the provider as `max_tokens`** — the provider uses it as the cap on answer length.
2. **Subtracted from the Context Window as *Reserved Output*** — this number is "reserved" from the context budget, so the answer always has room to run and never gets cut off at the end of the window.

```
Context Window (e.g. 32K)
├── System prompt + memories
├── Chat history
└── Reserved Output  <- max_tokens is subtracted from here first
```

::: tip 💡 The practical consequence
Raise `max_tokens` → the room for chat history **shrinks**. Lower it → history gets more room, but answers can get cut off if the AI wants to answer at length. There is no one right value for every case — this is a direct trade-off between answer length and memory length.
:::

## Choosing a Value

Practical recommendations (rule of thumb, not hard rules):

- **2048 (default)** — enough for *roleplay* and everyday conversation. Start here.
- **4096 or more** — for long answers, story writing, or output that is intentionally long.
- **Don't set it to the maximum just because you can** — every increase is paid for out of the history memory. Long conversations will start "forgetting" quickly because earlier history gets pruned more aggressively.

Also remember: this value eats from the same context window budget, so keep it in harmony with your [Context Window](./context-window) setting.

## Answer Got Cut Off?

The symptom: the answer stops abruptly **mid-sentence**, with no sense of a closing. This happens when the context fills up before the answer finishes — the provider stops the response and reports `finish_reason: length`.

How to deal with it:

- **Raise `max_tokens`** — e.g. from 2048 to 4096 — so answers have more room. Remember: this room is taken from the history budget.
- **Lower `max_tokens`** if the opposite happens: answers always come out reasonably short while you want deeper context — the history gets more room.
- Also check `context_window` — if the window is small, only raising `max_tokens` sometimes doesn't help because Reserved Output eats an ever larger share of the tight budget.

::: details Technical note: the parameter's name in the OpenAI API
In the modern OpenAI API, this parameter is being replaced by `max_completion_tokens`. In Mikazuki (and many compatible providers), `.compat` `max_tokens` is still accepted. Some newer providers demand the new name — if that happens, check the provider's documentation for the adjustment.
:::
