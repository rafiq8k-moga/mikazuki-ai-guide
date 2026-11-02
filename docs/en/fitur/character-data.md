---
title: Character Data and Memories
---

# Character Data and Memories

Every one-on-one chat has a **Character Data** page — where you can view the character's profile, conversation summaries, and manage long-term memories. Open it from the person-icon button to the **left of the three-dot menu** in the chat topbar (this feature is not available in group chat).

The page has three tabs: **Profile**, **Summary**, and **Memories**.

## Profile

This tab is read-only and shows the character's identity: the description, personality attributes (Nickname, Age, Nationality, Height, Weight, Likes, Dislikes), birthday, and category. If you have already *recruited* the character, this tab also shows the full birthday — complete with a special badge when the day arrives — plus your **Bond Level** and XP progress.

At the bottom there is a link to open the character's full page.

::: info Summaries come from the chat page
Summaries are generated automatically from the chat page every 20 complete messages. This tab only displays them — there is no re-create button here.
:::

## Summary

This tab lists the conversation summaries that are generated automatically every **20 complete messages** from the chat page. Summaries are shown per batch, e.g. "Messages 1–20". Batches that failed to generate are marked, so you know which parts were not covered.

## Memories

This tab stores important facts about you that are sent to the model with every chat. There are two kinds:

| Type | Who gets it | Capacity | Available actions |
| --- | --- | --- | --- |
| Chat Memories | All users | Max 10 items, max 500 characters per item | Add and delete (with a short confirmation) |
| Global Memories | VIP only | Stored on the server, tied to this character | Delete items one by one |

**Chat Memories** are available to everyone. Store facts you want the character to keep in mind — a nickname, preferences, or important context. Deleting an item means that fact is **no longer sent to the model** in the next chats.

**Global Memories** work alongside Chat Memories: both are sent together to the model with every message. The delete button is temporarily disabled while summary generation is running.

::: tip Memory means control
Everything in your memories is sent to the model with every chat — that is a privacy decision in your hands. Store only what you are comfortable sharing, and delete whenever you change your mind.
:::

::: warning Global Memories are VIP-only
On the Free plan, the Global Memories tab appears locked. Tapping it takes you to the `/membership` page to upgrade.
:::

Learn how memories work together with chat history in the [Basic Parameters guide (BYOK)](/en/byok/parameter-dasar).
