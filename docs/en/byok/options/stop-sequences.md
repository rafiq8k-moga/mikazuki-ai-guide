---
title: Stop Sequences
---

# Stop Sequences (`payload: stop`)

A stop sequence is text that makes the AI response **stop early**: the moment that text appears in the output, the provider stops generation right there. In the BYOK panel you can fill in up to **4 sequences** (the official OpenAI limit), each one being any string.

Its behavior (per the official OpenAI documentation):

- Generation stops **before** the sequence — the stop text itself **does not appear** in the answer.
- The response ends normally with the stop reason `stop`, not as an error.
- Some newer reasoning models **don't support** this parameter (the provider will reject or ignore it).

## Usage Examples in Roleplay

- `###` — cuts off the footer/section divider the model likes to add.
- `\n\n{` — stops the answer before the model randomly writes a leftover JSON block.
- `[OOC]` — closes the response before the model drops out of character.

## What Is NOT Automated in Mikazuki

::: info Different from AgnAI
AgnAI automatically inserts participant names as stop sequences. **Mikazuki does not do that** — the list here is 100% whatever you fill in yourself. If you want to cut when a certain name appears at the start of a turn, add it yourself, e.g. `Raiden:`.
:::

## Behavior Across Providers

| Provider | Form used |
| --- | --- |
| OpenAI-compatible (general) | `stop` in the request body, verbatim |
| Claude | `stop_sequences`, plus built-in stops so the model won't pretend to be the user |
| Gemini | `stopSequences` |

Maximum limits differ from provider to provider (OpenAI 4, others can be more/fewer) — if the provider rejects it, reduce the count.

## The Danger: Silent Truncation

::: warning Stop sequences that are too common
A stop sequence that **naturally** appears in the story will cut the answer in the middle **without any error**. Example: putting in a character name when the narration indeed often mentions that name — the result is an answer truncated at that point, and the cause is hard to trace. Use stop sequences that are short and unique (formats, dividers, control tokens), not everyday words.
:::

## Quick Tips

- Start empty — the best default is to fill in nothing.
- Short + specific sequences are safer than long ones.
- Multi-line (newline) is allowed — e.g. `\n\nHuman:` is the classic text-completion pattern.
- Answers suddenly getting cut off with no reason after you filled in sequences? This is suspect number one — remove them one by one to find the culprit.
