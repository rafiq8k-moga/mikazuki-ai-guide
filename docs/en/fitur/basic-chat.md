---
title: Basic Chat
---

# Basic Chat

This page is the hub of your daily activity in Mikazuki AI: the list of all your conversations plus the tools to manage them. All chat list data — from message history to ordering preferences — is stored directly on your device (IndexedDB), so the list stays available even when your connection is down. Because data is not synced across devices, the app shows a reminder at the top: *"Chat data is not synced across devices. Please use the cloud save feature to transfer data."*

## Chat List

Each chat row shows the character's avatar, a name truncated at around 15 characters to keep it on one line, and the bond status as a heart with the bond number on the right. There are also a few small markers around the avatar: a pin for pinned chats, a 🎂 cake emoji when the character's birthday is today, and a special badge for child characters. The page title shows the number of active chats, e.g. "Chats (12)".

You can **pin** your favorite chats so they are easy to find, with a limit of **5 chats**. When the pin slots are full, the app tells you: *"You can pin up to 5 chats."* Pinned chats are **always placed at the top** of the list, overriding any other order.

The list order can be changed with the **Sort** button in the top right. The options are **Newest**, **Name**, and **Bond**, and each can be flipped between ascending and descending with the direction button next to it. These ordering preferences are **saved on your device** automatically, so you don't have to set them again every time you open the app.

To manage many chats at once, enter **selection mode**: right-click (long-press on tap) a chat row, or press and hold a little longer on a touch screen. Once selected, three actions appear in the top bar: **Pin** to pin, **Re-Summary** to reset the summary, and a trash icon to delete via the *Advanced delete* panel. Selected rows are highlighted in color and get a check mark on their avatar.

::: tip Pin what matters
Pin the five chats you open most often. Pinned chats stay on top even when other chats get newer replies, so important conversations never sink out of sight.
:::

## Viewing Messages

Mikazuki AI offers **two chat layout styles**, selectable from the **Preferences** menu under **Chat UI Style**:

- **Mikazuki UI** (default): *"Modern novel format: speech in bubbles, narrative actions centered outside bubbles."* Action sentences like `*laughs softly*` appear centered on screen in italics, while the dialogue goes into the bubble.
- **HaloStory UI**: *"Classic HaloStory format: all character responses contained inside traditional chat bubbles."* — exactly like the previous generation's look.

Long character replies are automatically split into several bubbles per paragraph, so they read as comfortably as real short messages. Above every reply bubble you'll see the **character's avatar and name**, with each speaker's own color in group chats.

**Your own messages** have two floating buttons on their left: **edit (the pencil ✎ icon)** and **delete**. Deleting a message also deletes every message after it and asks for confirmation: *"Delete this message and all subsequent messages? This action cannot be undone."* Below the bubble there is a timestamp plus the message status: a clock icon while still sending, one check mark when sent, and a double check mark while being processed or done. Each message also carries a sequence number like `#12` as its identity in the conversation.

**Bot replies** provide a **Copy** button, a **regenerate (rotate-arrow icon)** button to produce the answer again, and the message number. If the model you use supports reasoning, a collapsible **"thinking"** block appears above the bubble — while active it is marked *"Thinking..."*, and once the answer starts flowing it auto-collapses into *"Show thinking process"*. System error messages appear as their own row with a copy button.

## Chat Details

You can scroll conversations freely; when the history is very long, the **"Load more"** button loads older messages without losing your reading position. A down-arrow button floating at the bottom right helps you jump back to the latest message while you are reading upward. Translation is available per message through the **"View translation"** button under the bot bubble, with a *"View original"* option to return to the original text.

The **three-dot** menu in the chat panel opens several conversation settings:

- **Hide Italics (Actions)** — hides action formatting like `*like this*` so the text feels like pure dialogue.
- **Wallpaper** — change the background for this conversation only, or set it as the default for all chats.
- **Re-Summary** — shows re-summary info; the actual regeneration runs from selection mode in the chat list.
- **Delete** — opens *Advanced delete* to clean up chat data selectively.

Besides that, from the input area you can open the **System Note** modal (extra instructions for this chat only) and **Chat Persona** (defining who you are in the character's eyes). For the character profile, summaries, and memories, open the [Character Data and Memories](/en/fitur/character-data) page from the chat topbar.

The message number `#n` shown small next to the timestamp is not just decoration: the system **uses this number as its reference** when you edit or regenerate. When the edit or regenerate button is pressed, the app points at the message with that number in the history, then truncates and rebuilds the conversation from that point — so edit and regenerate results always hit exactly the right spot.
