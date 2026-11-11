---
title: Memories & Summaries
---

# Memories & Summaries

How does a character remember you after hundreds of messages? Mikazuki AI now maintains a **Past Events** record — a single summary of your chat's journey, **prepared automatically on the server** and kept fresh as the conversation unfolds. There is no button to press and nothing trapped on one device: open your chat from your phone or another laptop, and the memory is exactly the same.

Everything is managed from the **Past Events** tab on the [Character Data and Memories](/en/fitur/character-data) page. Two older memory layers keep working alongside it: **lorebooks** (manual knowledge you write yourself) and **long-term memory**, an automatic search over your older messages.

## Past Events

Past Events is a narrative record of your chat's journey: relationships that formed, big decisions, promises, and the moments that shaped the story. In the background, the system summarizes the parts of the conversation that have left the context window and **merges them with the previous record** — so the summary is always current without ever ballooning the prompt. When the record itself grows too long, it is summarized again in turn, keeping its size under control forever.

Because it lives on the server, the record is:

- **Consistent across devices** — no longer dependent on the browser you chatted from before.
- **Always up to date** — refreshed far more often than the old per-20-message batch summaries.
- **Fail-safe** — if summarization hits a snag, your chat keeps running normally; the record simply catches up a moment later.

### Editing and resetting

From the Past Events tab you can:

- **Edit** — rewrite the record however you like (up to 6,000 characters). A manually edited record is marked as *your own* and **will not be overwritten** by automatic updates: the system respects your writing.
- **Reset** — clear the record and let the system summarize again from zero. The confirmation says exactly what happens: *"Delete the past events record? The worker will summarize again from scratch."*

The tab previews with *"A summary of this chat's journey, maintained automatically by the worker. Manual edits mark it as your own note."* — and VIP members see a *"VIP: richer detail"* badge.

::: tip Why did my record stop updating?
Once you edit it, the system deliberately stops overwriting. Want automatic summarization back? Press **Reset** — your written version is discarded and the record is rebuilt from the chat history.
:::

## VIP: a bigger memory budget

Everyone gets Past Events. VIP difference is no longer a locked feature — it's **capacity**:

- **VIP members** get a **larger memory budget** and **richer summaries** (more paragraphs retained before re-summarizing), so nuance and small details survive much longer.
- **Free members** get the same full-featured summaries with a leaner budget.

Lorebooks and long-term memory work identically for everyone, VIP or not.

## What changed from the old system

**Chat Memories** (a local per-chat fact list) and **Global Memories** (VIP cross-chat facts) have been **retired**. Both roles are now covered by Past Events plus automatic long-term memory: important facts you mention flow into the summary, and older messages remain findable through long-term memory search — without you maintaining lists by hand.

If you used to write Chat Memories regularly, just mention things in chat — the system records them into the summary. For permanent rules that must always be active (speech style, world rules, mandatory facts), use a **[Lorebook](/en/fitur/character-data)** instead.

## Deleting

**Advanced delete** (from the chat list's selection mode, or the three-dot menu in the chat panel) now offers:

- **"Delete local chat"** — *"Local chat history and translations are permanently removed."*
- **A summary option** — *"Deletes the server-side summary. The worker re-summarizes automatically."* Perfect when you want the character to "start on a clean page" without losing history: the chat stays, the record is rebuilt.
- **"Reset bond"** — *"Removes the bond row - character returns to Not recruited."*

The two-stage confirmation still applies: *"This action cannot be undone. Tap delete again to confirm."*

::: tip Choose by intent
Want the app to feel like it "never met you"? **Delete local chat**. Want a fresh story while your data stays safe on the server? Reset the summary. Want the character to forget just one fact? Simply restate it in chat — the summary will catch up.
:::
