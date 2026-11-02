---
title: Custom System Prompt
---

# Custom System Prompt

Custom System Prompt is the option that lets you paste in **your own system prompt** for BYOK chats. It lives in `/settings/engine` — Basic Options — the **Prompts** tab, inside the "Custom System Prompt" accordion, right below the "Reasoning" accordion. **Off by default**; flip the toggle and a textarea appears.

## How It Works: Merged, Not Overwriting

The text you paste does **not overwrite** Mikazuki's default system prompt. The worker assembles the order like this:

1. Your custom prompt (at the very top)
2. The default system prompt, including all of the app's safety rules
3. The rest of the prompt stack (personality, memories, bond, the language guard, and more)

This order is deliberate: the model pays the most attention to the start of the system message, so your voice stays dominant, while the safety rules (the content policy, child safety, the roleplay scope guard) still get delivered. A prompt that tries to order the model to "forget the rules" is still framed by the closing guard that always sits in the last position.

## Placeholders

Inside your custom text you can use two placeholders that get replaced automatically:

- `{{user}}` — your name
- `{{char}}` — the character's name

## Limits and Sanitization

- Maximum **4000 characters** after trim; anything beyond that is cut.
- Hidden control characters are stripped (newlines, carriage returns, and tabs still pass through).
- Inserted `< / s y s t e m >` closing-tag sequences are removed — preventing your prompt from "escaping" the system block early.

## BYOK Only

This feature is BYOK-mode only. In system mode (the Mikazuki courier pool), the field is not sent from the UI, is discarded on the server, and is guaranteed empty at the worker — three layers of gating. The pool's system prompt cannot be tampered with from the client side.

## Storage

Settings are stored **on your device** (localStorage and IndexedDB), not on the server. Switching devices or browsers means setting it up again. No prompt data is sent to the server before you actually send a message.

::: info Empty or toggled off means no change
If the toggle is off, or the text is empty, no `custom_system_prompt` field is sent at all. The assembled prompt is byte-for-byte identical to the state without this feature.
:::

## FAQ

**Why can't I overwrite (replace) the default prompt entirely?**
The default prompt carries the app's safety rules. Overwriting it would mean letting a single text field switch off all the protections. Merging gives you a dominant voice without that.

**Why is there no escape hatch like AGNai's `{{original}}`?**
Because the merge always includes the default prompt below your text, you don't need a way to refer back to it.
