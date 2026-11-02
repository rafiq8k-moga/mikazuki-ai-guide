---
title: Arli AI (BYOK Provider)
---

# Arli AI (BYOK Mode)

**Arli AI** is an **unrestricted (*uncensored*)** inference platform with a clearly stated focus: **roleplay**. What sets it apart from most providers — Arli doesn't just host third-party open-weight models (up to 552B), it also **trains its own RP models**: the **RPMax** and **RpR (RolePlay with Reasoning)** series published on HuggingFace. Its community ties are obvious too: SillyTavern, JanitorAI, RisuAI, and WyvernChat. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Arli's model names, pricing, and free tier rules can change at any time — Arli's own docs stress that **model names are frequently re-versioned**. This page teaches the correct **method**; the plan numbers quoted here come from the official pricing page as of writing, with the standing advice to check [arliai.com](https://arliai.com) before settling on a budget.
:::

---

## Creating an API Key

1. Sign up at [arliai.com](https://arliai.com).
2. Open the **"My API Keys"** page on your account.
3. Create a new **API key**, then copy the displayed key — this key is used as a *Bearer token* on every request.

Arli's API endpoint for reference:

- **Base URL**: `https://api.arliai.com/v1`
- **Auth**: `Authorization: Bearer <token>` header
- **Format**: **drop-in OpenAI-compatible** — tools built for the OpenAI format can point straight at it.

Arli also offers a **Stable Diffusion image generation API** on the same host — relevant if you need character card illustrations, though it is not available on the free tier (see the plans section below).

---

## Enabling Arli AI in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Arli:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. In the provider list, **pick the Arli entry if one exists** — if it's there, that's the best route.
3. If **there is no Arli entry**, use the **OpenAI Compatible** provider with:
   - **Base URL**: `https://api.arliai.com/v1`
   - **API key**: your Arli key (*Bearer token*).
4. Click the 🔍 **fetch models** button — the model list will be pulled automatically.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar), then click save.

::: danger ⚠️ Arli model names change often
This is stressed by **Arli's official docs themselves**: their model names **change versions frequently**. Never type a model name from memory, an old tutorial, or a screenshot — **always use the 🔍 fetch models button** or check the Models page on Arli's site before picking a model.
:::

---

## Parameters & Settings

::: tip 🌟 Unique feature: per-API-key settings
Arli has a practical feature that is rare among providers: **each API key can carry its own default settings**. Two things you can lock per key:

- **Default generation parameters** — temperature, sampling, and other parameters already set at the key level.
- **"Model Filter"** — a whitelist of models that key can access (applies when querying `/v1/models`).

In practice, you can create a **dedicated roleplay key** whose generation parameters are neatly locked in, then use that key in Mikazuki — with no need to redo the parameters each time. If you've set the defaults at the key level, you can simply leave the values in [Basic Parameters](../byok/parameter-dasar) at their defaults.
:::

---

## Free Tier & Subscriptions

::: warning 📅 Check the pricing page
The plan numbers below are static plan tiers from [Arli's official pricing page](https://arliai.com/) as of writing. Don't assume they stay the same — **check the pricing page** before subscribing. They also usually offer a **discount of around 10%** for annual payments.
:::

**Free tier — $0**: enough for a **test**, not for real use.

- Responses are **delayed** — the busier the servers, the slower it gets (the official page calls it *delayed/slower*).
- **Max 12K context tokens**, one request at a time, **no image generation**.
- Request frequency is tightly limited — **≈5 requests every 2 days per model** (this figure comes **≈ from third-party tracking** by Free LLM API Hub; the official page only says "delayed/slower").

**Paid plans** — the main point: **every paid plan already includes unlimited tokens & requests**; what differs is **context, priority, and parallel requests**:

- **Core — $15/mo**: unlimited tokens & requests, one request at a time, standard priority, models up to 552B, max context **32K**, 3 MP image generation.
- **Plus — $20/mo**: same as Core with a max context of **128K**.
- **Pro — $30/mo**: **2 parallel requests**, high priority, max context **256K**, 6 MP images.
- **Max — $160/mo**: **6 parallel requests**, high priority, max context **512K**, 6 MP images.

---

## Privacy & Data

This is what makes private roleplay feel safe on Arli. **Per the provider's own statements**:

- Prompts and outputs are **not logged and not stored** — processed briefly, then discarded.
- **Usage metadata** (not conversation content) may be kept for up to **60 days**.
- On the question "is your prompt used to train models": the claim is **not confirmed** — there is no confirmation of training on user data.

Output you generate is referred to as "Your Content" — **full ownership stays with you**.

::: tip 💡 A discreet suggestion
The statements above are qualitative quotes from the provider at the time of writing — not a contract. For anything that matters, read the official terms yourself at [arliai.com/terms](https://arliai.com/terms) and check whether they still say the same.
:::

---

## Troubleshooting

::: details Very slow responses on the free tier
This is **by design** — Arli's free tier is deliberately **delayed**: the busier the servers, the slower your responses. Don't waste time trying to "fix" something that isn't a bug. If you're serious about usage, upgrade to the **Core** plan for normal speed; or accept this delay as the price of a free trial.
:::

::: details Error 401 — key rejected
Your key is mistyped, got cut off when copying, or has a prefix that was wrongly included or excluded. Open the **My API Keys** page on arliai.com, create a new key if needed, then paste it again in Mikazuki — making sure no extra spaces got copied along.
:::

::: details Model not found / model not found error
The most common cause on Arli: **model names change versions frequently** — tutorials and old configurations are almost certainly stale. The consistent solution: always press 🔍 **fetch models** in Mikazuki to pull the latest list, or check the Models page on Arli's site. Take the exact name from the fetch result, not from memory.
:::

::: details Truncated answers / stops mid-sentence
Your plan's context limits the conversation length that gets processed — free tier max **12K**, Core **32K**, Plus **128K**, Pro **256K**, Max **512K**. Two ways out: upgrade your tier, or **shrink the conversation history** and check `max_tokens` in [Basic Parameters](../byok/parameter-dasar) so answers don't run out of output space.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Venus Chub AI](./venus) — the matching guide for a character roleplay platform.
- [Chutes](./chutes) — the matching guide for cheap inference without a subscription.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
