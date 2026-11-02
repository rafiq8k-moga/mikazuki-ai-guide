---
title: Google Gemini (BYOK Provider)
---

# Google Gemini (BYOK Mode)

**Google Gemini** is one of the favorite providers for BYOK: there's a *free tier* for trying it without a credit card, a very long context window (millions of tokens on the newest Flash/Pro series), and a diverse model family — from light ones for daily chat to heavyweights for giant *roleplay*. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Gemini's key policies and pricing have changed fairly often through 2026. This page teaches the correct **method**, not specific price/limit numbers. Always check the official [Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing) before settling on a budget.
:::

---

## Creating an API Key

1. Open [Google AI Studio](https://ai.google.dev/aistudio) or go straight to [the API key page](https://aistudio.google.com/app/apikey).
2. Sign in with your Google account.
3. Click **Create API key** and follow the steps.

::: danger 🔒 Required: restrict the key to the Gemini API
Since mid-2026, the Gemini API **rejects *unrestricted* standard keys**. When creating a key, make sure you restrict it to the Gemini API only — AI Studio offers an **"Restrict key"** / **"Restrict to Gemini API only"** option during creation. Old *unrestricted* keys that were left abandoned can end up **Blocked**, so the app will throw 403/401 even though your key is technically "correct".
:::

::: tip 🔐 About "auth keys"
New keys created in AI Studio (after May 28, 2026) are automatically **auth keys** — bound to a *service account*, with stricter security constraints and fast enforcement for leaked keys. This happens automatically; you don't need to configure anything, just be aware the key shape is slightly different from before.
:::

---

## Enabling Gemini in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Gemini:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **Google Gemini** (not the entry that asks for a manual *Base URL*).
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears automatically based on your key (e.g. Flash versions, Flash-Lite, or whatever series is active at the time).
5. Pick a model, then set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — and click save.

::: tip Good to go out of the box
Mikazuki's default **temperature 0.85** maps well for roleplay; you don't need to change it unless you want a very different answer style.
:::

---

## Context Window & the `1M` Preset

Gemini's context window is famously wide — on the newest Flash/Pro series it can reach millions of tokens. This pairs perfectly with Mikazuki's `1M` preset:

- **Newest Flash/Flash-Lite models** → the `1M` preset is realistic for extra-long *roleplay*.
- **Older models or certain tiers** may have less capacity — when in doubt, start at `128K`.

How `context_window`, *Reserved Output*, and the preset chips work is covered in [Basic Parameters](../byok/parameter-dasar).

::: tip 💡 Make the most of 1M
When using the `1M` preset on Gemini, you can raise `max_tokens` to give answers more room — remember `max_tokens` is carved out of the context window too.
:::

---

## Free Tier, Limits & Pricing

The rules of the game (general, we don't lock numbers here):

- **Rate limits are counted per Google Cloud project**, not per key: there are RPM, TPM, and RPD caps. The daily quota resets at midnight Pacific time.
- **Tiers rise automatically** with spending (the next tier opens after you reach a certain *spend* threshold). Higher tier, looser limits.
- **There is always a free tier**, but throughout 2026 it was tightened repeatedly — the priciest models (Pro) are usually no longer included. For free usage, stick to **Flash** or **Flash-Lite** models.
- **Prices can change**: some tiers have promo pricing until the end of 2026 (with increases scheduled for 2027), so don't budget from a price sheet you read once.

::: warning ⚠️ Don't lock in numbers
We deliberately omit a price/RPM table on this page — the numbers go stale fast. Check the [official pricing table](https://ai.google.dev/gemini-api/docs/pricing) and the [rate limit](https://ai.google.dev/gemini-api/docs/rate-limits) documentation for current figures. A safe rule of thumb: **Flash/Flash-Lite** models for the free tier, **Pro** for paid accounts. It's also wise to set a **billing alert** in Google Cloud so the bill never surprises you.
:::

---

## Backup Option: OpenAI Compatible

If the native **Google Gemini** provider in Mikazuki misbehaves (e.g. a worker update hasn't caught up yet), Gemini has an *OpenAI-compatible* endpoint you can use through the **OpenAI Compatible** provider:

- **Base URL**: `https://generativelanguage.googleapis.com/v1beta/openai/`
- **API key**: your Gemini key (the OpenAI endpoint accepts a *Bearer key*).

This is the backup route, not the main one — for daily use, stick with the **Google Gemini** provider as described above.

---

## Troubleshooting

::: details Error 403 / 401 even though the key is correct
Almost always because the key is **unrestricted** or has gone **Blocked**. Open [the API key page](https://aistudio.google.com/app/apikey) in AI Studio, check the *"Unrestricted"* label on your key, then **apply the restriction** to the Gemini API only. Old keys that were already blocked need to be recreated with the right restriction.
:::

::: details Error 429 — too often
Gemini's rate limits are counted **per project** (RPM/TPM/RPD), not per key, and the daily quota resets at midnight Pacific time. If you hit it, wait for the reset or climb a tier through paid model usage. On the free tier, use Flash/Flash-Lite models — their limits are friendlier.
:::

::: details Models don't appear in the list after fetch
Check three things: your key is valid but the project hasn't enabled the Gemini API (inactive services usually show an empty list), the key was restricted to the wrong service instead of the Gemini API, or the key was pasted wrong / cut off. Retry the 🔍 fetch button after confirming all three.
:::

::: details Truncated answers / stops mid-sentence
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small. Raise it — but remember, `max_tokens` is also carved out of the context window as *Reserved Output*, so don't over-inflate it without raising `context_window`.
:::

::: details The bill keeps growing at the end of the month
Check spending in the Google Cloud console and make sure a **billing alert** is on. Price promos can run out (a rate change is scheduled starting 2027), so review the [pricing table](https://ai.google.dev/gemini-api/docs/pricing) regularly.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — `max_tokens`, `context_window`, and the creativity parameters.
