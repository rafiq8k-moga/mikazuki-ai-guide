---
title: NanoGPT (BYOK Provider)
---

# NanoGPT (BYOK Mode)

**NanoGPT** is "private pay-per-use AI" with **1,000+ models** in one place — text (ChatGPT, Claude, Gemini, GLM), images, video (184+), and audio — all paid through a **single prepaid balance**. What makes it unlike every other provider in this guide: NanoGPT is extremely **anonymity-friendly** — pricing is sold at *list price* with no markup, and its API can even be used **without creating an account** (just a small deposit). No surprise the SillyTavern community likes it: privacy-friendly, easy crypto payments, and direct access to many models at once. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
NanoGPT's per-model prices, model list, and features are quite dynamic — **Private Mode & PII redaction** only launched in May 2026, and the catalog keeps growing. This page teaches the correct **method**, not a list of numbers. Check the official [nano-gpt.com/api](https://nano-gpt.com/api) and [get-started](https://nano-gpt.com/get-started) pages before settling on a budget.
:::

---

## Creating an API Key

1. Open [nano-gpt.com/api](https://nano-gpt.com/api).
2. Click **Create a key**.
3. Copy the displayed key — this key is later sent as an `Authorization: Bearer` or `x-api-key` header.

::: tip 🔐 There's a dedicated "Management API" token
NanoGPT provides a **Management API token separate from** the regular key. This token **cannot run models or spend your balance** — its only job is managing presets and checking subscription status. A nice security bonus: if you need an integration that only reads status, use the Management token, not the main key.
:::

::: tip 🎛️ Restrict the key to "Subscription only" mode
A useful quality-of-life feature from the community: a key can be limited to **Subscription only** mode via the ⚙️ (gear) icon on the [nano-gpt.com/api](https://nano-gpt.com/api) page. In this mode, the key can only use subscription models — handy if you want to contain the damage of a leaked key.
:::

---

## Enabling NanoGPT in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for NanoGPT:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **OpenAI Compatible** (or the **NanoGPT** entry, if it's in the provider list).
3. Fill in the **Base URL**: `https://nano-gpt.com/api/v1`
4. Paste the API key you just created.
5. Click the 🔍 **fetch models** button — the model list appears automatically from your key.
6. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` and `max_tokens` — then click save.

NanoGPT's API is *OpenAI-compatible*, so the **OpenAI Compatible** route works fully in Mikazuki.

::: warning ⚠️ Client error on reasoning / thinking output
If your client errors while receiving *reasoning/thinking* output from certain models, there's a way out: use the legacy endpoint at `https://nano-gpt.com/api/v1legacy` as the Base URL — its output format is more compatible with older clients. Details in the [Troubleshooting](#troubleshooting) section.
:::

---

## Payments & Deposits

NanoGPT's payment system is **purely prepaid**: you deposit first, then every request draws the balance down.

- **A very small minimum deposit**: **$0.10** via crypto, or **$1** via card (Stripe / Apple Pay / Google Pay) for the first deposit.
- **No deposit fees** — every deposit lands fully in your balance.
- **Balance is held in USD**.
- **29 cryptocurrencies** supported, including **Monero, BTC, Nano, USDC, USDT**.
- Crypto deposits get a **3% bonus** — and double as the **most private** payment route (no identity/account).

Payment method details are in [NanoGPT's official payments FAQ](https://nano-gpt.com/faq/payment-methods-and-cryptocurrencies).

---

## Pricing & Optional Subscriptions

- Prices follow the **list price with no markup** — you pay exactly what the underlying provider charges, with no spread.
- **The exact cost of every response is shown** on the [Usage](https://nano-gpt.com/api) page — you can see precisely how many cents the last request spent.
- **Subscriptions are optional**, never mandatory: a monthly plan (around ±$12/mo — *this is per a third-party source, check the official site*) opens up certain models **without paying per token**.
- Models labeled **beta/subscription** are for subscribers only; a key in **"Subscription only"** mode restricts your key to subscription models.

::: warning ⚠️ Don't lock in numbers
We deliberately omit a per-model price table on this page — with 1,000+ models, the numbers go stale fast. Review the catalog and prices at [nano-gpt.com/api](https://nano-gpt.com/api) before budgeting, and keep an eye on your balance on the Usage page.
:::

---

## Privacy & Data

This is what sets NanoGPT apart — and makes it attractive for privacy-conscious *roleplay* users:

- **"History stays on your device"** — conversations are stored **locally on your device by default**, not on a server. The official tagline: *"Privacy First. No accounts required."*
- **Private Mode & PII redaction** (launched May 2026) — an extra privacy layer to mask personal data.
- **Batch API** is available for bulk usage.
- The API is accessible **from Tor** with a regular key — no special treatment whatsoever.

::: tip 💡 For privacy-conscious users
If you consider your *roleplay* content sensitive, the combination on NanoGPT is rare: **no account** + **crypto payments (Monero)** + **local history in your browser** + **Tor access**. This is the most complete privacy setup among all the providers in this guide.
:::

---

## Models & Catalog

The full model catalog can be browsed on [NanoGPT's models page](https://nano-gpt.com/models) — text, image, video, and audio. The model ID format is generally **`vendor/model`**; example format `openai/gpt-6.1-sol`.

This guide focuses on **chat completions** since that's what Mikazuki uses — the other endpoints (image, video, audio, embeddings) exist but are outside this guide's scope.

Always use Mikazuki's 🔍 **fetch models** button to pull valid model names: with 1,000+ models and the `vendor/model` format, typing manually is very easy to get wrong.

---

## Troubleshooting

::: details A 402 / "live quote" appears without a key
That's a **feature, not an error**: NanoGPT has an *unauthenticated "live quote"* mode — a keyless request can return a **402 containing a price quote** you can pay directly with **Nano or Base USDC without creating an account**. If you see a 402 quote before adding a key, NanoGPT is offering you the exact price for that request. For use in Mikazuki, still create a normal key to keep the flow simple.
:::

::: details Client error on thinking / reasoning output
Some models emit *reasoning/thinking* whose formatting can crash older clients. The fix: change the **Base URL** to the legacy endpoint `https://nano-gpt.com/api/v1legacy` in your OpenAI Compatible provider settings, then refetch models and try again.
:::

::: details Insufficient balance / request fails
Your prepaid balance may be empty or the minimum deposit hasn't been made. Check the balance on the Usage page at [nano-gpt.com/api](https://nano-gpt.com/api), then top up — the deposit is small ($0.10 crypto / $1 card) and fee-free, so a small top-up to try it doesn't hurt. Remember the 3% bonus on the crypto route too.
:::

::: details Truncated answers
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small — the model stops before it can write long. Raise it, but remember `max_tokens` is carved out of `context_window`, so don't over-inflate it without raising `context_window` as well.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [DeepSeek](./deepseek) — the matching guide for a top-up provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
