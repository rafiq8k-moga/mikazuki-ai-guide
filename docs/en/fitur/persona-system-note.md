---
title: Persona & System Note
---

# Persona & System Note

On top of a character's built-in personality, Mikazuki AI gives you two text spaces for **steering the chat from your side**: the **Chat Persona** and the **System Note**. Both open from the chat input area, are stored per chat on your device, and are sent along with every message you send. The difference from the character settings in [Character Data and Memories](/en/fitur/character-data): this is not about who the character is — it is about you and what you want out of this conversation.

## Persona Chat

Persona Chat answers the question *"Who are you in this chat?"* — the hint in its modal reads: *"Who are you in this chat? The AI will treat you accordingly. Max 500 characters."* — and the **AI will adjust its behavior** to your answer: how it addresses you, your relationship with the character, or the background of yours you want recognized. The content is free-form — one or two sentences with a nickname and your personality is enough, or longer when needed.

The limit is **500 characters max**, counted live in the bottom-right corner of the modal (`x/500`) so you always see how much room is left. The persona is **specific to the chat you currently have open** — other characters have separate personas, and the system keeps each one tied to its own chat. This setting is available in group chats too, where it applies to the whole group.

## System Note

The **System Note** is an additional, more technical instruction. Its hint sentence explains everything: *"Extra instruction for this chat only, e.g. scene, tone, or boundaries. Sent with every message."* This is the right place for things like setting the scene in progress, requesting a certain tone, or establishing boundaries the AI must respect for the rest of this chat.

There is more room here than in the persona: **1000 characters max**, also with a counter in the modal. Because it is sent along with **every message**, the System Note content stays "attached" to the conversation — there is no need to repeat it when the topic changes, and it becomes active again automatically whenever you continue the chat. After pressing **Save**, the value is stored on your device for this chat only; only new messages feel the change, because past message texts are not altered.

::: tip Use each for its role
Persona = who you are. System note = the rules of the game. A sentence like "call me Rian" belongs in the persona; "use a third-person point of view, don't jump around in time" belongs in the system note. Keeping the two apart makes your instructions easier to maintain.
:::

## How This Differs from the BYOK Custom Prompt

Besides the two spaces above, there is one more in the [BYOK](/en/byok/) world: the **Custom System Prompt** in the BYOK Options. The similarity: both inject instructions into the model. The difference is clear in scope and mode:

- **Persona & System Note** — tied to **one chat**, stored on your device, and working in **all modes** (the Mikazuki pool and BYOK alike).
- **Custom System Prompt** — **global for all BYOK chats** and **only active in BYOK mode**; in system mode (the Mikazuki courier pool) this field is not sent from the UI and is discarded on the server.

So if you want rules that stick to one particular story, use the persona or system note; if you run your own API and want a custom system prompt that applies everywhere, use the BYOK Custom System Prompt. The two can live side by side without undoing each other.
