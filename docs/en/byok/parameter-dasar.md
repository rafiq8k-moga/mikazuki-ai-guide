---
title: Basic Parameters
---

# Basic Parameters in the BYOK Panel

Once BYOK is active, open the **"Basic Options"** card in the engine settings. You don't have to understand everything — every parameter has a well-behaved default. This page is a quick map; the full guide for each parameter lives on its own page under Parameter Options.

| # | Parameter | Range | Default | One-liner |
| --- | --- | --- | --- | --- |
| 1 | `max_tokens` | integer | 2048 | Cap on answer length + guaranteed answer space |
| 2 | `context_window` | Auto-1M | Auto | Total history budget the character can remember |
| 3 | `temperature` | 0.0-2.0 | 0.85 | Higher = wilder/more imaginative, lower = more stable |
| 4 | `top_p` | 0.0-1.0 | 0.95 | Alternative "focus" sampling on the word-candidate side |
| 5 | `repetition_penalty` | 0.0-2.0 | 1.1 | Penalizes repeating the same phrases |
| 6 | `frequency_penalty` | 0.0-2.0 | 0 | Penalizes words that appear too often |
| 7 | `stream` | on/off | On | Text flows in as it is generated instead of waiting for the whole answer |
| 8 | `stop` | max 4 strings | (empty) | Ends the response when specific text appears |
| 9 | `message-parsers` | max 8 regex | (empty) | Client-side option: transform text via regex before sending |
| 10 | `reasoning` | effort / budget | Off | Control the model's thinking tokens (low-minimal-max) in the Prompts tab |
| 11 | `custom system prompt` | max 4000 characters | Off | Paste your own system prompt, merged IN ABOVE the default in the Prompts tab |
| 12 | `custom ujb` | max 4000 characters | Off | Extra UJB (safety rules) instructions after the default UJB in the Prompts tab |
| 13 | `prefilling` | max 2000 characters | Off | Replace the bot's internal response prefix with your own text in the Prompts tab |

::: tip 💡 Start with these two
Not sure what matters? Understand **Max Tokens** and **Context Window** first — together they decide how much history the character remembers and how safe the answers are from getting cut off.
:::

## Two parameters with a special role

### Max Tokens (`payload: max_tokens`) {#max-tokens}

The maximum number of tokens the AI is allowed to generate for one answer (default 2048). This value has a **dual role**: it is sent to the provider as the answer length cap, and it is subtracted from the Context Window as *Reserved Output* so answers never get cut off at the end of the window. Raise it = answers can get longer, but the history that fits shrinks. Full guide: **Max Tokens**.

### Context Window (`payload: context_window`) {#context-window}

The total *budget* of one request: system prompt + memories + history + answer space; all of it has to fit within this number. **Auto** (default) detects it per model; manual override up to **1,000,000 tokens** for long-context models. A window matching the model's real capacity = the character can remember the conversation far back. Full guide: **Context Window**.

## Three custom controls in the Prompts tab

### Custom System Prompt {#custom-system-prompt}

Your own system prompt text, pasted **above** the default prompt — not replacing it; the app's safety rules stay active. Supports the `{{user}}`/`{{char}}` placeholders. Full guide: **Custom System Prompt**.

### Custom UJB {#custom-ujb}

Extra instructions appended **after** the default UJB (safety rules) instruction on the last message — the default UJB matrix stays intact. Full guide: **Custom UJB**.

### Bot Response Prefilling {#prefilling}

Replaces the **bot's internal response prefix** with your own text to force the model to continue in a specific format. Off/empty = the default prefix is used verbatim. Full guide: **Bot Response Prefilling**.

All three are BYOK-only, off by default, stored on your device (not on the server), and when off/empty they don't change the prompt at all.
