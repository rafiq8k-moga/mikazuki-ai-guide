---
title: Message Parsers
---

# Message Parsers (client-side regex)

Message Parsers is a list of **your own regexes** for transforming or cleaning up text before it is sent to the model: remove noisy patterns, replace placeholders, normalize formatting. Analogous to the AgnAI/SillyTavern feature, applied directly in the BYOK panel.

Each parser's settings:

- **Pattern (regex)** — the text to search for, e.g. `\[OOC:.*?]`
- **Replacement** — the replacement text; empty = remove; supports the `$1` group
- **Scope** — user messages (default), chat history, persona, system note
- **Enabled** — toggle without deleting the settings

## Commonly Used Examples

| Goal | Pattern | Replacement |
| --- | --- | --- |
| Remove OOC from messages | `\[OOC:.*?]` | (empty) |
| Strip leftover code blocks | ` ```[\s\S]*?``` ` | (empty) |
| Flatten excessive newlines | `\n{3,}` | `\n\n` |
| Remove markdown asterisks | `\*+` | (empty) |

For regex special characters (`[ ( . * + ?`), put a backslash in front of the character.

## What You Should Know

::: info A client-side option, not an API parameter
Parsers run on your device before the request is built. No new field is sent to the provider — the request looks exactly like usual, only with clean contents.
:::

::: info The System Prompt Boundary
Parsers can touch messages, the persona, and the system note. **The app-assembled system prompt on the server is not transformed.**
:::

::: warning Loose regex = text changed everywhere
A pattern that is too generic (e.g. just `a`) will change every occurrence across all messages. Test with a limited message first. Parsers with an invalid regex are flagged red automatically and skipped when sending — the conversation keeps running, only that parser is off.
:::
