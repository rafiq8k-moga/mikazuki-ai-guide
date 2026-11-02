---
title: NovelAI (BYOK Provider)
---

# NovelAI (BYOK Mode)

**NovelAI** differs from the other providers in this guide at its root: it is **not a general-purpose API provider**, but a **subscription service** with in-house models **trained from the ground up to write stories and characters** — novel-style text *completion*, anime-style image generation, and TTS in one subscription. Its text models are beloved in the *storytelling* and *roleplay* communities precisely because their "DNA" is narrative, not assistant. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: danger 🚫 Not OpenAI-compatible — don't use OpenAI Compatible mode
NovelAI's API **has its own format** (not the OpenAI-style *chat completions* format). That means: **don't use the OpenAI Compatible provider in Mikazuki** — requests will simply fail. Use the **NovelAI entry** if it's in Mikazuki's provider list, the same rule as AI Horde. This entire page assumes you're on the correct route.
:::

---

## Creating an API Token

1. Sign in at [novelai.net](https://novelai.net).
2. Click **User Settings** (the gear icon).
3. Open the **Account** tab.
4. Click **"Get Persistent API Token"**, then **copy** the displayed token.
5. Paste the token in Mikazuki (next section).

::: warning 🔑 The token is persistent
Unlike keys that auto-rotate, NovelAI's API token is **persistent** — it doesn't expire and doesn't change on its own. The upside: you don't need to recreate it every few months. The consequence: **store it safely** (a password manager), and if the token leaks, **revoke and recreate it** from the same menu.
:::

---

## Enabling NovelAI in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for NovelAI:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. In the provider list, **pick the NovelAI entry if one exists** — **not** the **OpenAI Compatible** provider (remember the warning above).
3. Paste the API token you created via **Get Persistent API Token**.
4. Pick a text model available to your subscription tier (see [Models & Context](#models-context)).
5. Set up [Basic Parameters](../byok/parameter-dasar), then click save.

::: tip 💡 Trial first, subscribe later
NovelAI grants **50 free generations** for trying it out. Use this trial to confirm your setup in Mikazuki is correct and the model suits your taste before subscribing. Access locks afterward (see [Troubleshooting](#troubleshooting)).
:::

---

## Tiers & Pricing

NovelAI is a **monthly subscription** service — not pay-per-token. Its tiers (figures from NovelAI's official docs and community sources, 2026):

- **Paper** — a limited free trial: only **50 generations** to evaluate the service.
- **Tablet — $10/month** — the first paid tier.
- **Scroll — $15/month** — the mid-tier.
- **Opus — $25/month** — the top tier; exclusive to the **Erato** model.

Key points about cost:

- **Text generation is unlimited on every paid tier** — no monthly token quota like pay-per-token providers.
- Other features — mainly **image generation** — use the **Anlas** currency. For text use in Mikazuki, Anlas is generally irrelevant.
- The prices above are stable in the official docs, but still **check NovelAI's official page** before deciding — this page teaches the **method**, it doesn't lock numbers.

::: tip 💡 Compare with its sibling
The difference from Featherless (also a flat-rate subscription): NovelAI doesn't sell access to thousands of open-weight models, but **its own in-house models** specialized in storytelling — a small catalog, but *tuned* specifically for narrative and characters.
:::

---

## Models & Context

NovelAI has no catalog of hundreds of models — there are three in-house text models:

- **Erato** — the **best** and most recent model; **exclusive to Opus**.
- **Kayra** — the best pick for the **Tablet and Scroll** tiers.
- **Clio** — offers a **bigger context** on Tablet/Scroll, but is usually outclassed by Kayra in strength.

Context per tier (figures from official SillyTavern docs):

| Tier | Text context |
|------|--------------|
| Kayra — Tablet | 3,072 tokens |
| Kayra — Scroll | 6,144 tokens |
| Kayra / Erato / Clio — Opus | 8,192 tokens |

::: warning ⚠️ NovelAI's context is small — plan sessions wisely
3K–8K tokens is **very small** compared to the other providers in this guide (32K on Featherless, hundreds of thousands on Gemini). The consequence: long conversations will **prune history faster** — NovelAI is **not the choice for super-long sessions**. In Mikazuki, **memory capping** helps: hand conversation memory management to the memory features, not to the raw context window.
:::

Pair these numbers with [Basic Parameters](../byok/parameter-dasar): set `context_window` to match your tier, and remember `max_tokens` is carved out of the context window (already tight space here).

---

## Model Behavior: Completion, Not Instruct

This is **NovelAI's most important behavioral difference** from other providers — and a frequent source of confusion:

NovelAI's models are **not instruct-based**. They **continue text** (*text completion*), like continuing a story — **not answering commands** like a chatbot. The consequences:

- Prompt-style tips from other providers (Gemini, Claude, and the like) **don't always apply** here.
- The best results come when your prompt takes the shape of **prose-style character descriptions** (flowing narrative) or an **attributes list** — a concise attribute list per character.
- The attributes list format is part of **their training data** — an example format is in the [SillyTavern docs](https://docs.sillytavern.app/); check there for the correct way to write it.
- Instruct behavior can still be *invoked* occasionally — sometimes the model follows a command — but don't rely on it as the main mode.

::: tip 📖 Think like a writer, not like a chat
Where other providers let you "command" the model, on NovelAI you **give a story opening or a character description** and let the model **continue**. Many users find this style livelier for narrative roleplay — as long as expectations are set correctly.
:::

---

## Response Limit: Around 150 Tokens

One more quirk you should know from the start:

- NovelAI caps response length at **about 150 tokens per generation** — effectively up to ±170 tokens with *stop sequence* searching and up to 20 extra tokens.
- **Answers that feel truncated are characteristic behavior**, not a bug in Mikazuki.
- The standard fix in the NovelAI ecosystem is the frontend's **continue / auto-continue** feature, which stimulates *chain generation* — the model keeps writing until the scene is done.

In Mikazuki, that translates to:

- **Lower your per-turn length expectations** — short answers are normal here.
- **If a continue option exists, use it** to carry on a truncated answer.
- `max_tokens` in [Basic Parameters](../byok/parameter-dasar) **cannot exceed this limit** — raising it won't make NovelAI produce beyond the cap.

::: info 🆚 Totally different from Claude
On Claude, a truncated answer means your `max_tokens` should be **raised**. On NovelAI it's the reverse: the limit **belongs to the service**, not the parameter — so don't waste time fiddling with numbers.
:::

---

## Privacy & Data

NovelAI is a subscription service with accounts — your API usage is tied to your own novelai.net account. For details on how data is handled, refer directly to **the official privacy policy at novelai.net**: the privacy policy is the only source worth trusting for claims like this, and this page deliberately adds no claims beyond it.

::: tip 🛡️ One habit that still applies
Regardless of which provider in this guide: don't paste sensitive personal data into prompts. The habit is free and applies everywhere.
:::

---

## Troubleshooting

::: details Error "Not eligible for this model"
Your **50 free generations** are used up, or your tier doesn't have access to that model (remember: **Erato is Opus-exclusive**). The fix: **subscribe or upgrade** your tier through novelai.net. This error doesn't mean your Mikazuki setup is wrong — your setup is most likely fine.
:::

::: details Error 401 — invalid token
The token was pasted wrong, cut off while copying, or has since been recreated on the account. Open **User Settings (gear) → Account → Get Persistent API Token** at novelai.net, create/copy the token again, then paste it cleanly into Mikazuki.
:::

::: details Answers are always truncated / come in short pieces
This is **NovelAI's signature limit**: responses are capped at **±150 tokens per generation**. Not a bug, not a wrong `max_tokens` setting. Use the **continue / auto-continue** feature when available to chain continuations, and lower your per-turn length expectations (see [Response Limit](#response-limit-around-150-tokens)).
:::

::: details Context runs out fast, history gets pruned often
NovelAI's context is genuinely small — **3K–8K tokens** depending on tier and model (see the table in [Models & Context](#models-context)). Shrink the **memory preview** to give the conversation more room, and **entrust long-term memory to Mikazuki's memory features** instead of relying on the raw context window. NovelAI simply isn't built for super-long sessions.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [AI Horde](./horde) — a free provider with a similar custom (non-OpenAI) API.
- [Featherless AI](./featherless) — a flat-rate subscription without token limits for thousands of open-weight models.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
