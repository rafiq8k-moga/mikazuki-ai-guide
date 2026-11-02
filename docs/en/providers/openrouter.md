---
title: OpenRouter (BYOK Provider)
---

# OpenRouter (BYOK Mode)

**OpenRouter** isn't a model provider, it's an **aggregator**: one uniform API gateway to **hundreds of models** from many different labs — from Gemini to Claude to open-source models — and you can reach them all with **a single key for everything**. Pricing is *pass-through* with no markup, and if one provider has an outage, OpenRouter automatically *falls back* to another provider serving the same model → better *uptime*. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
OpenRouter's model list, variants, and limit rules change fairly often. This page teaches the correct **method** — numbers marked "≈" are *rules of thumb* that can shift. Always check the official [OpenRouter docs](https://openrouter.ai/docs) and the **Limits** page before settling on a budget.
:::

---

## Creating an API Key

1. Create an account at [openrouter.ai](https://openrouter.ai).
2. Open the **Credits** page and **top up** your balance as needed (a credit purchase **fee of 5.5%**, minimum top-up **0.80 USD**).
3. Open the **API Keys** section, click **Create Key**, give it a name, then copy the displayed key.
4. This key is used as a *Bearer token* on every request.

::: danger 🔒 The key is shown only once
As with most providers, copy the key straight into a safe place (a password manager) before closing the dialog. A leaked key = someone else can spend your credit balance. Never paste keys into chats, forums, or screenshots.
:::

::: tip 💡 Check remaining credits via the API
OpenRouter provides the `GET https://openrouter.ai/api/v1/key` endpoint showing your remaining credits and key limits — handy for diagnostics without opening the dashboard.
:::

The API is **fully OpenAI-compatible** (*drop-in*): if you've ever used an OpenAI SDK, the request/response format is identical.

---

## Enabling OpenRouter in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for OpenRouter:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **OpenRouter** (native, *fixed endpoint*).
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the list will hold **hundreds of models** from various labs, so it's longer than usual.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — then click save.

### Example model picks

- To **try for free**: pick a model with the `:free` variant (see section below).
- For smooth **roleplay**: a *flash/sonnet/haiku*-class model with the `:nitro` variant — fast, stable responses.

::: tip Good to go out of the box
Mikazuki's default **temperature 0.85** maps well for roleplay; you don't need to change it unless you want a very different answer style.
:::

---

## Models & Variant Suffixes

Model names on OpenRouter follow the `vendor/model` format, e.g. `google/gemini-2.5-flash`. Variants are appended with a colon *suffix* behind the model name:

| Variant | Function |
|---------|--------|
| `:free` | Free version of the model — has its own usage limits (see next section) |
| `:nitro` | Prioritizes throughput/speed — the best fit for roleplay |
| `:floor` | Prioritizes the lowest price among the providers serving that model |
| `:exacto` | *Quality-first* for tool calling |

::: tip 💡 For roleplay, default to `:nitro`
Roleplay needs to feel responsive — the `:nitro` variant prioritizes serving speed. Use `:floor` if saving money matters more, and `:free` for no-cost experimentation.
:::

---

## Free Tier & Limits

Hundreds of OpenRouter models have a **truly free `:free` variant** — its limits are set by **the credit balance you've ever topped up**:

- Account **with no credits**: about **≈ 50 requests/day**.
- Total top-ups **≥ 10 USD**: the limit rises to about **≈ 1,000 requests/day**.
- An extra rate cap: about **≈ 20 requests/minute**.

::: warning ⚠️ Numbers can change
The numbers above carry the "**≈**" mark because free tier policy changes often — always check the **Limits** page in OpenRouter's official docs for current figures. If you hit limits often, the calmest option: use paid models; the cost per roleplay message is usually tiny.
:::

---

## Pricing & Credits

- **Pass-through pricing with no markup**: the model price you see is the price from the lab that serves it; OpenRouter adds a fee at the point of credit purchase (**5.5%**, minimum top-up 0.80 USD), not on the per-token price.
- **Credits can expire**: credits that are used or **left unused for a long time can lapse** — don't top up a jumbo amount at once if your usage is small.
- **Auto top-up** is available: configure your balance to refill automatically as it runs low, so you don't suddenly hit an error mid-conversation.
- **Refunds**: there's a refund policy for credits spent in the first 24 hours that end up unused; **crypto purchases cannot be refunded**.
- Check remaining credits/limits anytime via `GET https://openrouter.ai/api/v1/key`.

::: warning ⚠️ Don't lock in numbers
We don't include a per-model price table — hundreds of models and their prices go stale fast. Check the models page at [openrouter.ai](https://openrouter.ai/models) for current figures.
:::

---

## Privacy & Data

This section matters if you care about your *roleplay* privacy:

- **Zero logging by default**: OpenRouter **stores neither your prompts nor your completions** by default.
- **Opt-in logging** grants a **1% discount** — if you turn it on, your chats are recorded in their logs. If you don't need it, leave it off.
- **Data used for training**: can be switched off via a toggle in **Privacy settings**.
- **EU routing**: an `https://eu.openrouter.ai` endpoint is available for *data residency* in Europe.

::: tip 💡 Our recommendation for Mikazuki users
For private roleplay, keep the defaults (zero logging, no training) — you don't need the 1% discount. If you occasionally see your chats appearing on the **Usage** page as if saved, you probably once opted into logging for the discount — turn it off again in Privacy settings.
:::

---

## BYOK inside OpenRouter (Optional)

OpenRouter has its own feature also called BYOK: you can attach other providers' keys (Gemini, Claude, and so on) *inside* OpenRouter, with an inference quota at list-price **$25,000/month without a BYOK fee** (a **5%** fee above that). For regular Mikazuki BYOK users, this is **optional** and rarely needed — your own OpenRouter key is enough. If curious, see the [BYOK Introduction](../byok/).

---

## Troubleshooting

::: details Error 402 Payment Required
**Your credits are out.** First check the remaining balance via `GET https://openrouter.ai/api/v1/key`, then top up on openrouter.ai's **Credits** page. Tip: set up **auto top-up** so it stops happening mid-conversation.
:::

::: details Error 429 — too often
You hit the `:free` variant's limits — daily (≈ 50 to ≈ 1,000 requests depending on top-ups) or per minute (≈ 20). Wait for the reset, or move to **paid models** whose limits are far looser.
:::

::: details Error 404 — no endpoints found
All providers serving that model are down, or your privacy settings don't match one of their policies. Try **another model** or the `:nitro` variant — provider-to-provider fallback usually sorts it out.
:::

::: details Truncated answers / stops mid-sentence
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small. Raise it — but remember `max_tokens` is also carved out of the context window as *Reserved Output*, so don't over-inflate it without raising `context_window`.
:::

::: details Why does my chat appear in "usage"?
By default OpenRouter is **zero-logging** — prompts/completions aren't stored. If your chats appear as though saved on the Usage page, you probably once **opted into logging** for the 1% discount. Switch it off again in Privacy settings (and make sure the *training* toggle there is off too).
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [Anthropic Claude](./claude) — the matching guide for the Claude provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
