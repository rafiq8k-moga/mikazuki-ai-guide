---
title: Chutes (BYOK Provider)
---

# Chutes (BYOK Mode)

**Chutes** is not your average model lab — it's a **decentralized serverless inference platform** for *open-source* models, run on **Bittensor subnet 64 (SN64)** — meaning independent GPU operators compete to serve your workload. The result: rock-bottom per-token prices with **no markup** and **no mandatory subscription**. It's no accident that SillyTavern/JanitorAI communities use this platform heavily for cheap *roleplay*. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Chutes' model catalog, pricing, and subscription rules change fairly often. This page teaches the correct **method** — the numbers quoted are example ranges or *rules of thumb*, not locked figures. Always check the official [Chutes pricing page](https://chutes.ai/pricing) before settling on a budget.
:::

---

## Creating an API Key

1. Sign up at [chutes.ai/auth/signup](https://chutes.ai/auth/signup).
2. Open [chutes.ai/app/settings/api-keys](https://chutes.ai/app/settings/api-keys).
3. Click the key creation button, give it a name, then copy the displayed key.
4. The key is prefixed **`cpk_`** — it's sent as a *Bearer token* in the `Authorization` header.

::: danger 🔒 The key is shown only once
Copy the key straight into a safe place (a password manager) **before closing the page** — after that the key **cannot be viewed again**. If you lose it, the only way out is creating a new key. Never paste a key into chats, forums, or screenshots; a leaked key = someone else can spend your balance.
:::

---

## Enabling Chutes in Mikazuki AI

Chutes' API is **OpenAI-compatible**, so in Mikazuki you take the **OpenAI Compatible** route:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **OpenAI Compatible** (or the **Chutes** entry if it's available in your list).
3. Fill in the **Base URL**: `https://llm.chutes.ai/v1`
4. Paste the `cpk_` API key you just created.
5. Click the 🔍 **fetch models** button — the model list will be pulled automatically from the [official model list](https://llm.chutes.ai/v1/models).
6. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — then click save.

::: tip Good to go out of the box
Mikazuki's default **temperature 0.85** maps well for roleplay; you don't need to change it unless you want a very different answer style.
:::

::: tip 💡 Used JanitorAI before?
Chutes has an official **JanitorAI integration** guide that uses the proxy URL `https://llm.chutes.ai/v1/chat/completions` plus a `cpk_` key. The configuration pattern is exactly the same as BYOK in other apps — in Mikazuki you simply reuse **the same Base URL and key** as above.
:::

---

## Models & Catalog

Chutes offers a large, fast-growing *open-source* catalog — among it the **DeepSeek** family (V3.2, V4-Flash), **Kimi K2.5/K2.6**, **GLM-5/5.1**, **Qwen 3.x**, **MiniMax**, **Gemma**, and **Mistral**.

- **Model naming format**: `org/Model`, e.g. `deepseek-ai/DeepSeek-V4-Flash-0731-TEE`. Always take the name **exactly from the fetch models result** — don't type it manually from memory.
- **The `-TEE` suffix**: many *featured* models end with this, meaning the model runs in a **Trusted Execution Environment** (*confidential computing*) — your conversation content is processed in an encrypted environment that not even the GPU operators can read. For private roleplay, the `-TEE` variants are usually the wise pick.
- **Context windows vary per model** — anywhere from 41K up to 262K — so check the model card in the catalog before tuning `context_window`.

---

## Free Tier, Pricing & Subscriptions

Chutes' rules are simple: **pure pay-per-token, no mandatory subscription, no markup** — they call it *"priced in the open"*. The rough picture (not a locked table): small models start around **$0.02–0.10 per million tokens**; large models around **$1–4 per million output tokens**. All of it can change — check the [official pricing page](https://chutes.ai/pricing).

A few other things worth knowing:

- **Wallet top-up** for pay-per-token usage. You can also pay from a **Bittensor (TAO)** wallet.
- **Optional subscriptions** (never required):
  - **Plus — $10/month**: bundled daily quota + a **6% discount** on pay-per-token beyond the quota.
  - **Pro — $20/month**: a larger daily quota + a **10% discount**. Community *rule of thumb* puts Pro at about **5,000 requests/day** — this figure comes **≈ from an official social media announcement; check the pricing page** for the latest number.
  - **Enterprise**: custom volume discounts — contact their team.

::: warning ⚠️ Don't lock in numbers
We deliberately omit a per-model price table — those numbers go stale fast. Check [chutes.ai/pricing](https://chutes.ai/pricing) for current prices, and keep an eye on your remaining wallet balance in the dashboard.
:::

---

## Privacy & Data

This is something cheap providers rarely offer — Chutes' privacy statement is fairly strong:

- For public *inference*, Chutes officially states that they **"does not log, store, or persist the content of your API requests or responses"** — your request and response content is **not recorded, not stored, not retained**.
- Models ending in **`-TEE`** run in a *Trusted Execution Environment* (confidential computing) — an extra layer on top of that statement.
- For those who need the formality, a **Data Processing Agreement** is available.

::: tip 💡 Our pick for private roleplay
The combination of *no-logging* + TEE model options makes Chutes one of the most comfortable choices for private roleplay — great if you don't want anyone reading your conversations while still enjoying cheap per-token pricing.
:::

---

## Troubleshooting

::: details Error 401 — key rejected
Your `cpk_` key was pasted wrong, cut off, or **can genuinely no longer be viewed** (keys are only shown once at creation). Don't expect to reopen an old key — just create a **new key** at [the API keys page](https://chutes.ai/app/settings/api-keys) and paste it again in Mikazuki.
:::

::: details Model not found / model not found error
The model ID must match the **exact `org/Model` format** from the `https://llm.chutes.ai/v1/models` catalog. The most common slips: getting the **`-TEE`** suffix wrong, the wrong version date (e.g. `...-0731-TEE`), or wrong letter casing. Take the name from the 🔍 fetch models result, not from memory.
:::

::: details Balance empty / payment error
Top up your wallet from the Chutes dashboard, then retry the request. If you use it regularly and heavily, consider the **Plus** or **Pro** plan — a bundled daily quota plus the pay-per-token discount beyond the quota can cut costs.
:::

::: details Truncated answers / stops mid-sentence
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small. Raise it — but remember `max_tokens` is also carved out of the context window as *Reserved Output*. The context window **varies per model** (anywhere from 41K to 262K), so check the model card in the catalog before setting a big value.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [OpenRouter](./openrouter) — a similar aggregator with an equally wide model selection.
- [DeepSeek](./deepseek) — the matching guide for the DeepSeek provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
