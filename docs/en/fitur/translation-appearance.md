---
title: Translation & Appearance
---

# Translation & Appearance

Character replies don't always arrive in your language, and reading preferences differ from person to person. This page covers four settings that control **how text and the chat screen appear**: per-message translation, the chat wallpaper, the chat layout style (Chat UI), and the option to hide italics. All of them are cosmetic — nothing here changes the content of your stored chats or what is sent to the model.

## Message Translation

Every bot reply has a language-icon **"View translation"** button below the bubble. Translation is active when the interface language isn't English: the result is shown in the UI language you are using, while the AI Language set for the character only acts as the source language. If that source language is the same as the UI target language, the message is skipped and left untranslated. One thing to understand: translation is **display-only**. The result is stored separately on your device (IndexedDB) and is **never included in the message data or the payload sent to the AI** — the original text is always what the conversation uses.

The work happens **per paragraph** in the background, including quietly re-translating old history (*backfill*). That means results can be **partial**: finished paragraphs appear immediately, pending ones show an animated skeleton, and failed ones fall back to the original text — so you never wait for a whole message before you start reading.

How it displays depends on the chat layout you picked:

- **Mikazuki UI**: the translation appears as a **separate block below the message** with a dashed divider, so the original text stays intact above it. The button alternates between *"View translation"* and *"Hide translation"*.
- **HaloStory UI**: the bubble swaps its content for the translated result, and the button changes to *"View original"* to return to the original text.

The translation toggle works per bubble and is not persisted — other bubbles stay as they were, and each new session in a chat starts from the original text.

::: tip For fast reading
Long histories are translated automatically in the background as you open a chat, so by the time you need them, translations are usually ready. Even a single paragraph can fail on its own: that paragraph shows in its original language without blocking the rest of the message.
:::

## Chat Wallpaper

Wallpapers give the conversation area a gradient backdrop. There are four named presets — **Sakura**, **Umi**, **Mori**, and **Yoru** — plus an **Off** option. As described in the Preferences menu: *"Wallpapers show on screens under 1024px so text stays readable."* — so on wider screens (desktop) the wallpaper is deliberately hidden, while on phones and narrow windows it appears with a dimming layer to keep text comfortable to read.

The settings open from the chat panel's **three-dot** menu through the **"Wallpaper"** item: a *bottom sheet* with two sections. The **"For this chat"** section applies only to the conversation you have open, with the choices **"Follow global"**, **Off**, or one of the presets. The **"Default for all chats"** section decides the background for all conversations. There is also a **"Use as default for all chats"** button that promotes this chat's choice to the global setting in one go.

The selection rule is simple: chats set to **"Follow global"** use the default wallpaper, while chats with their own wallpaper are untouched — exactly as the note in Preferences says: *"Chats set to 'Follow global' use this. Chats with their own wallpaper remain unchanged."* Storage is separate too: the per-chat override lives in IndexedDB (and is included in the chat backup data), while the global choice is stored on your device.

## Chat UI Style

Mikazuki AI offers **two visual layouts**, selectable from the **Preferences** menu under **"Chat UI Style"**. The option descriptions:

- **Mikazuki UI** (default): *"Modern novel format: speech in bubbles, narrative actions centered outside bubbles."*
- **HaloStory UI**: *"Classic HaloStory format: all character responses contained inside traditional chat bubbles."*

This choice is stored on your device and applies to all chats without exception. When you pick HaloStory UI, every reply returns to the familiar classic bubble; when you switch back to Mikazuki UI, actions like `*laughs softly*` appear centered on screen in italics while dialogue goes into bubbles. The visual details are covered on the [Basic Chat](/en/fitur/basic-chat) page. Note that this choice also determines how the translation block is displayed, as described above.

## Hide Italics

In the chat panel's **three-dot** menu there is a **"Hide Italics (Actions)"** toggle. When enabled, novel-style action formatting like `*looks down*` or `*laughs softly*` no longer renders in italics — the text reads like pure dialogue without vanishing from the story. It suits readers who find asterisks distracting.

This toggle is **stored per chat on your device**, so you can hide actions with one character while still seeing them with another. Like translation, it is purely a **display preference**: messages are stored complete with their original formatting, and turning the toggle off anytime restores the italics without losing anything.

::: warning Translation is machine-made
Translations are produced automatically by a translation service, not by the character's model. For names, distinctive nicknames, or a story's language style, the original text remains the most accurate reference — use the *"View original"* button at any time.
:::
