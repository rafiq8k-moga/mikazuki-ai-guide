---
title: Memories & Summaries
---

# Memories & Summaries

How does a character remember you after dozens of messages? Mikazuki AI answers that with a layered memory architecture working in the background: **automatic summaries** for the flow of the conversation, **Chat Memories** for important per-chat facts, and **Global Memories** for facts that span chats. The three work together — summaries keep the story going, while memories store the facts that must never be forgotten. Every management control lives in the **Summary** and **Memories** tabs of the [Character Data and Memories](/en/fitur/character-data) page.

## Chat Memories

**Chat Memories** are a list of important facts about you, specific to a single chat — a pet name, preferences, or life context you want the character to keep in mind. Everything is stored **locally on your device (IndexedDB)** and, as the note on that page says: *"Memories here are sent to the model every chat."* That means every time you send a message, the contents of these memories are injected into the model so the character stays consistent.

Capacity is **up to 10 items per chat, each up to 500 characters**. Adding a memory is as simple as typing into the "Add" field and pressing enter or the add button; deleting uses a short confirmation *"Delete this memory?"*, because *"Deleted memories are no longer sent to the model."* This list can also be updated automatically by the background summarizing process — when the system summarizes a conversation, it is allowed to store new facts worth remembering. In group chat, only Chat Memories are used.

## Global Memories (VIP)

**Global Memories** take it a step further: important facts stored **on the server** and **tied to that character**, so they carry over across chats with the same character. Mention something once — your favorite food, or the nickname you go by — and you never have to repeat it from scratch. Like Chat Memories, the note on the page explains: *"VIP global memories are also sent in this chat."* — they are sent along with every message.

This feature is **VIP-exclusive**. On the Free plan, the Global Memories tab appears locked with the label *"VIP only"*; tapping it takes you to the `/membership` page to upgrade. For VIP users, memories can be deleted one by one through the same confirmation as Chat Memories, and the delete button is **temporarily disabled while summary generation is running** to avoid data conflicts.

::: warning Global Memories are stored on the server
Unlike Chat Memories, which live on your device, Global Memories are stored on Mikazuki AI's server. Store only facts you are comfortable sharing, and delete them whenever you change your mind.
:::

## Automatic Summaries

Every **20 complete messages**, the system automatically summarizes the conversation in the background, directly from the chat page — no button for you to press. The results appear in the Summary tab of the Character Data page, grouped per batch like "Messages 1-20", "Messages 21-40", and so on. Summaries are stored locally in IndexedDB and form the backbone of long-term memory: when the model is given context, the recap of the latest batch is sent along to keep token usage light.

Batches that fail to generate don't disappear silently; they are marked *"This batch failed to summarize."* and are retried automatically on the next run. If you want to start from zero, use **selection mode** in the chat list (see [Basic Chat](/en/fitur/basic-chat)): select one or more chats, then tap **Re-Summary**. The app will firmly ask: *"Reset all summaries and memories for this chat, then regenerate? Global memories (VIP) will also be cleared."* Once finished you'll hear *"Summary reset for {count} chats."* — then the summaries are rebuilt from the entire history.

## Deleting

When deleting, you don't have to wipe everything at once. The delete button — both in the chat list's selection mode and in the chat panel's three-dot menu — opens **Advanced delete**, a panel with options you tick yourself:

- **"Delete chat + summary"** — *"Local history, summaries and translations are removed permanently."* The chat disappears from the list along with everything derived from it.
- **"Delete chat memories"** — *"Removes per-bot chat memories (chat can stay)."* Ideal when you only want the character to "forget" facts about you without losing the conversation history.
- **"Delete global memories (server)"** — the VIP option to remove cross-chat memories on the server along with their local cache.
- **"Reset bond"** — removes the bond data, returning the character to an unrecruited state.

Before executing, the panel asks for a two-stage confirmation with the warning: *"This action cannot be undone. Tap delete again to confirm."* If some options fail to run because of a network hiccup, the app reports how many items failed so you can try again.

::: tip Choose by intent
Want "total amnesia"? Use **Delete chat + summary**. Want the character to forget facts about you while the story stays? Use **Delete chat memories** only. This separation puts data control fully in your hands.
:::
