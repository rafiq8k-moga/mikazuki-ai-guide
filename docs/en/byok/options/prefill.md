---
title: Bot Response Prefilling
---

# Bot Response Prefilling

Bot Response Prefilling replaces the **bot's internal response prefix** with your own text. The feature lives in `/settings/engine` — Basic Options — the **Prompts** tab, in the "Bot Response Prefilling" accordion. **Off by default.**

## How It Works

Right now, every bot response opens with a hard-coded internal prefix: the model "thinks briefly" that it is about to produce an immersive roleplay response, then keeps writing. With this feature:

- **Toggle off or empty text** — the default internal prefix is used verbatim, byte-for-byte as usual.
- **Toggle on and text filled in** — the default internal prefix is **fully replaced** with your text. The model is forced to continue from that text, so you can lock the opening format of the response (e.g. starting with action first, or a particular dialogue format).

This works as part of the instruction block on the last user message — not as a separate assistant message — so it is safe for all providers with no special adjustment (Claude thinking, Gemini, DeepSeek, and OpenAI-compatible providers all run through the same single path).

The `{{char}}` and `{{user}}` placeholders are replaced automatically.

## Limits

- Maximum **2000 characters** after trim.
- Hidden control characters are stripped; inserted closing tags are removed.
- BYOK mode only; the same three-layer gate as Custom System Prompt and Custom UJB.

## Applies to All Characters

Prefill does not distinguish children's or adult characters. Children's safety doesn't live in the internal prefix — it lives in the hard-coded policy block in the system prompt, which no prefill or custom text can change. Even so, use this feature responsibly.

::: info Empty or toggled off means no change
The default internal prefix is used as-is; no field is sent.
:::
