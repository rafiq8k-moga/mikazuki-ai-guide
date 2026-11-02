---
title: Reasoning
---

# Reasoning

Reasoning is the option that controls **how long the model thinks before answering**. It lives in `/settings/engine` — Basic Options — the **Prompts** tab, inside the "Reasoning" accordion. Turn the toggle off or pick "None", and Mikazuki doesn't send a reasoning key to the provider at all; turn it on, and the model sets aside part of its output tokens for a thinking process that shows up in the chat as a collapsible block.

## How It Works

There are two modes inside this accordion, and Claude/Gemini vs other providers run through different paths.

### Presets: low, medium, high

Pick one of the presets, and Mikazuki sends a `reasoning_effort` level to the worker. For Claude and Gemini, that level is converted into a thinking-token budget:

| Preset | Fraction of `max_tokens` | If multiplied by 4096 |
| --- | --- | --- |
| Low | 0.2 | ~819 → clamped to 1024 |
| Medium | 0.5 | ~2048 |
| High | 0.8 | ~3276 |

The multiplied result is clamped to a minimum of **1024 tokens on Claude** — so low with a small max_tokens still consumes ~1024 thinking tokens, not just 819. Gemini sends the fraction as-is with no such clamp. This becomes an important note for frugal usage.

Either way, the presets remove the manual math — just pick one of the provided levels.

::: info Why a live estimate appears
The UI shows "Estimated thinking: ~N tokens (frac x max_tokens)" because the actual budget is computed at runtime by the worker from the currently active `max_tokens`. The number is only an estimate — and the low preset at a small max_tokens can change value at the minimum clamp.
:::

### Custom: thinking_budget

Pick custom and you fill in the `thinking_budget` number directly (minimum 1024, multiples of 16). Claude and Gemini accept this number as-is — you know exactly how many tokens are set aside for thinking.

::: tip When to use custom
A custom budget is useful when the 0.2/0.5/0.8 preset fractions feel too big or too small for your response length, or when you want a consistent amount of thinking without changing `max_tokens`.
:::

## Behavior Across Providers

| Provider | Form used |
| --- | --- |
| Claude, Gemini | The preset is sent as `reasoning_effort`, and the worker converts it into a thinking budget. Custom sends `thinking_budget` with the number you filled in. |
| OpenAI-compatible (openaicompat + fixed endpoints) | **Always** just the `reasoning_effort` string, whatever you filled in. `thinking_budget` is never sent — the custom level is hidden. |

The final payload to `/api/chat` is `payload.reasoning_effort` (string) or `payload.thinking_budget` (integer, custom Claude/Gemini only); each worker maps it to the provider's native request.

## Extended Levels (OpenAI-Style)

OpenAI-style providers accept heavier levels than the three UI presets: `minimal`, `low`, `medium`, `high`, `xhigh`, `max`. Ordered from most frugal to most expensive:

minimal - low - medium - high - xhigh - max

::: warning Model-dependent and expensive
The extended levels are **model-dependent** — each model only accepts a subset, and an unsupported level gets the request rejected. Also remember that thinking is counted as output tokens: the cost can rise to ~5x compared to low, as a rough figure (the GPT-6.1 Sol reference scale).
:::

Good to know: there is also a valid `none` string on some models for turning reasoning off. From Mikazuki's UI, picking "None" means **the reasoning key is not sent at all** — not sending the string `none`.

## Claude Notes

::: info Interaction with other parameters
While thinking is active on Claude, `temperature` is forced to 1, `top_k` is ignored, and a raised `max_tokens` request runs as **budget + max_tokens** (not one replacing the other). Manual values of the same name in Advanced Options get overridden by this reasoning — so don't be confused if your temperature suddenly becomes 1.
:::

## Quick Tips

- Start from **medium** as the default; drop to **low** when the conversation is fairly ordinary.
- Go up to **xhigh/max** only for heavy tasks. Remember the cost can be ~5x.
- Need precision in thinking tokens, not a fraction? Use a **custom budget**.
- If the response doesn't need reasoning (casual chat, short output), just switch the toggle off — the cheapest option of all, compared to any preset.

---

See also [Basic Parameters](../parameter-dasar) for the relationship between `max_tokens` and the thinking budget.
