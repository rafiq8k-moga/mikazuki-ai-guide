---
title: Context Window
---

# Context Window

The `context_window` option lives in the **BYOK** panel, in the **Basic Options** section of the engine settings (*Settings → Engine*), complete with quick preset chips: `Auto` `8K` `32K` `128K` `1M`. The default value is **Auto (0)**.

This is the total *budget* for **one request** to the AI. Everything sent to the provider must fit within this number:

1. The character's system prompt.
2. Memories and lorebook.
3. The chat message history.
4. The answer space, i.e. the *Reserved Output* subtracted from `max_tokens`.

When the total exceeds this number, Mikazuki prunes the part that is safest to prune: the oldest chat history. The bigger the window, the further back the character can remember your conversation.

**Prerequisite for this page:** BYOK already enabled, and you know where the "Basic Options" card sits — see the [Basic Parameters](../parameter-dasar) panel.

## What Fills the Window

| Component | Source | Notes |
| --- | --- | --- |
| System prompt | Character definition | Required in every request. |
| Memories & lorebook | Memory cards, triggered lore entries | Can balloon if the lore is big. |
| Message history | Previous conversation messages | The hungriest consumer of the window. |
| Reserved Output | Subtracted from `max_tokens` | Guaranteed answer space, always used. |

Message history is the biggest consumer, and it is the first one sacrificed when the window gets tight. A small window doesn't show up as an error — it shows up as a character who goes "forgetful" quickly. That is why the value of `context_window` heavily determines the quality of long *roleplay*.

## Auto and Preset Options

The panel provides preset chips so you never have to type raw numbers:

- **Auto (0)**, the default value. Mikazuki detects the capacity per model automatically:
  - Gemini and Claude: **128K**.
  - DeepSeek: **64K**.
  - Other providers: **32K**.
- **8K / 32K / 128K / 1M** fill the field with a fixed value.

With Auto, you don't need to change anything when you switch models; the number adjusts itself. If you type a manual value, it is used **raw** as-is, up to a maximum of **1,000,000 tokens** — intended for *long context* models like the Gemini 1M variants.

## Choosing a Value

| Preset | When to use it |
| --- | --- |
| `Auto` | The safe default for everyone. The built-in choice. |
| `8K` | Old models or very quota-frugal keys; short history. |
| `32K` | A safe middle point for almost all modern models. |
| `128K` | Gemini and Claude, whose capacity is genuinely 128K. |
| `1M` | Only for *long context* models that truly support 1 million tokens. |

Before a manual override, **check the model's real capacity in the provider's documentation first**. The numbers on the chips are the upper limits you may request; not a guarantee that the model can handle them.

## Too Big vs Too Small

::: warning ⚠️ The danger of an oversized window
Setting `context_window` above the model's real capacity ends badly in one of two ways: the provider rejects the request with a **context exceeded** error, or old history is sent anyway even though it doesn't fit — wasting quota, slowing down responses, and still erroring out in the end. The `1M` value is only for models that genuinely support it.
:::

::: tip 💡 Signs the window is too small
No error appears — that is exactly the danger. The symptoms are subtle: the character starts forgetting your name, repeats questions that were already answered, or loses the thread of a story from a dozen messages back. That is a sign the history is being pruned too aggressively. Raise the window to the preset that matches the model.
:::

## Its Relationship with Max Tokens

The relationship is simple:

```
history space = context_window - max_tokens (Reserved Output)
```

Raise `max_tokens` for longer answers, and the room for history automatically shrinks. Lower it, and the chat memory stretches out, but answers become short. There is no free value; the two compete for the same window. Tune them as a pair, not one at a time.

Read the details of `max_tokens` in [Max Tokens](./max-tokens).
