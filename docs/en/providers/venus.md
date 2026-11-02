---
title: Venus Chub AI (BYOK Provider)
---

# Venus Chub AI (BYOK Mode)

**Venus Chub AI** is different from the other providers in this guide — and it matters from the start: it's not a pure *inference* provider like Gemini or Groq, but a **character roleplay platform**. The name takes many shapes — Chub AI, Chub Venus, CharacterHub, or Venus — but they're all one brand: **Chub** is a giant community character/card library (plus *lorebooks*), and **Venus** is its chat frontend. The part relevant to BYOK in Mikazuki is **their hosted model named Mars** — Chub's *uncensored* model suite, usable through Chub's inference API. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Chub's prices, hosted model list, and free tier rules can change at any time. This page teaches the correct **method**, not a list of numbers — the numbers quoted here come from Chub's official docs as of writing, with the standing advice to check the official [chub.ai](https://chub.ai) site before settling on a budget.
:::

---

## Creating an API Key

1. Register (free) at [chub.ai](https://chub.ai) — email is enough; no credit card needed to create an account.
2. Open **Account Settings**, find the token/API section (in some references it appears as `my_stages` → tokens).
3. Create a new **API key/token**, then copy the displayed token — this key is used as a *Bearer token* on every request.

Chub's inference endpoint for reference:

- **Base URL**: `https://inference.chub.ai`
- **Auth**: `Authorization: Bearer <token>` header

::: danger 🔒 Use an official API key, NOT a reverse proxy
This warning comes **straight from Chub's own official docs**: don't use a **reverse proxy** — Chub calls it "the opposite of the opposite". Third-party proxies can **store (log) your conversations** and even **steal your key**; you don't know what happens behind an unofficial service. Always create **your own official API key** from Chub's Account Settings and use that directly — the same principle applies on Mikazuki's BYOK side.
:::

---

## Enabling Venus Chub in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Venus Chub:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. In the provider list, **pick the Venus/Chub entry if one exists** — if that entry is available, it's the best route.
3. If **there is no Venus/Chub entry** in the list, use the **OpenAI Compatible** provider with:
   - **Base URL**: `https://inference.chub.ai`
   - **API key**: your Chub token (*Bearer token*).
4. Click the 🔍 **fetch models** button — the hosted model list will appear; **use the fetch models button / Base URL configuration available in the provider settings** rather than typing endpoint names or paths manually from memory.
5. Pick a model (e.g. a **Mars** suite model if available), set up [Basic Parameters](../byok/parameter-dasar), then click save.

::: warning ⚠️ Don't invent API paths
We don't list the exact chat-completions sub-path because it can change and is hard to verify. The safe way: pick the Venus/Chub entry from Mikazuki's provider list if it exists, or fill the Base URL above and then **always use the 🔍 fetch models button** so valid model names and endpoints come from the configuration — not from guesses.
:::

---

## Parameters & Settings

Chub's official inference API exposes the following parameters — two of them carry usage rules you should know:

- **Temperature** — controls the chaos/creativity of answers.
- **Presence penalty** and **Frequency penalty** — reduce repetition.
- **Top K** and **Top P** — control sampling.

::: danger ⚠️ Temperature vs Top P: pick one
Chub's official rule: **only one of Top P and Temperature is tuned**. If you change **Temperature, don't also change Top P** — and vice versa. Changing both at once makes sampling behavior uncontrollable. In Mikazuki's [Basic Parameters](../byok/parameter-dasar), simply keep the default **temperature 0.85** and leave Top P alone — or the reverse.
:::

On prompt concepts: **System prompt** and **Post-history instructions** are concepts from the Chub world — in Mikazuki they map to the *system prompt* and *flavor*. If you guide a character's style from the Chub side, map those concepts to those two equivalent places in Mikazuki.

---

## Free Tier & Subscriptions

Chub's hosted models are layered like this (qualitative, without locked quota numbers):

- **Free tier** — creating an account is free and limited hosted access exists: tiered models with **limited token/message quotas**. Enough to **try** the Mars models and feel their quality, **not for intensive use**.
- **Mars subscription** — at the time of writing, Chub's official docs cite **$20/month** with **unlimited messaging** plus full access to the Chub ecosystem (characters, lorebooks, and more). This number can change — **check the official site** before subscribing.

If you've subscribed to Mars but the Mars model **doesn't appear** in the fetch models list, your subscription is most likely inactive or not synced — see the [Troubleshooting](#troubleshooting) section.

---

## Privacy & Data

::: danger 🛑 The reverse-proxy ban: understand both edges
- **From Chub's side**: Chub's official docs **forbid using reverse proxies** (their exact wording is the inverse of what those proxies advertise) and recommend an **official API key** — third-party proxies can **log your data** or **steal your key**.
- **From Mikazuki's BYOK side**: the same practice applies — use **your own official key**, never just paste someone else's borrowed/proxy key. Many "Empty Response" reports start here (see Troubleshooting).
:::

On model training: Chub's official docs state that **Mars was trained WITHOUT user chats** — its proprietary data is neither Chub's public nor private chats. So your private Venus conversations don't become raw material for the next model.

One neutral note attached to that good news: Chub is a **social/community platform** — the question of chats being **public vs private on Chub itself** is a separate matter with its own rules. Publish your content there consciously, and keep the habit of sharing with the community distinct from your private roleplay privacy needs.

---

## Troubleshooting

::: details "Empty Response received from API"
This is a **signature Chub error** the community complains about a lot. Three usual causes: the model/inference source **isn't paid up OK** (free tier quota exhausted, or subscription inactive), the **key is wrong**, or your key turns out to be **someone else's routing** (like a proxy/borrowed key). The fix is layered: check your key is valid and yours, make sure the chosen model is available to your tier/subscription, and — per the principle above — **use your own official key**, not a proxy.
:::

::: details Error 401 — wrong token / expired
Your Chub token is mistyped, got cut off while copying, or has expired. Open **Account Settings** on chub.ai, create a **new token**, then paste it again in Mikazuki's Settings, making sure no extra spaces got copied along.
:::

::: details Mars model doesn't appear in the fetch list
Chub's hosted models are **tiered** — access follows your subscription. Make sure the **Mars subscription is active** (or the model you picked really is in the free tier). Then press 🔍 **fetch models** again; if it's still empty, try another hosted model to confirm the key itself works.
:::

::: details Truncated answers / stops mid-sentence
Raise `max_tokens` in [Basic Parameters](../byok/parameter-dasar) so the model has more answer room. Also remember the rule from the Parameters section: if you tune **Temperature, don't touch Top P** — and vice versa. Fiddling with both at once can flip the answer style in strange, hard-to-trace ways.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [DeepSeek](./deepseek) — the matching guide for a top-up provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
