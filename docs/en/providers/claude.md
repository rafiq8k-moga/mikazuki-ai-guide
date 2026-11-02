---
title: Anthropic Claude (BYOK Provider)
---

# Anthropic Claude (BYOK Mode)

**Anthropic Claude** is a strong BYOK pick if you want smooth, "lived-in" writing quality: the model family is famous for excelling at narrative *roleplay*, following long instructions faithfully, and keeping characters consistent over long conversations. The trade-off: no *free tier* like Gemini, so have a payment card ready at Claude Console. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Claude Console now lives at **platform.claude.com** (the old console.anthropic.com domain redirects there). This page teaches the correct **method**, not a price list — prices and limits change often. Check Anthropic's official [pricing page](https://www.anthropic.com/pricing) before settling on a budget.
:::

---

## Creating an API Key

1. Sign in to **Claude Console**, then open [the API keys page](https://platform.claude.com/settings/keys).
2. Click **Create key**, give it a name, pick an **expiration**, and choose the linked account (*personal* or *service account*).
3. Copy the displayed key — it starts with `sk-ant-`.

::: danger 🔒 The key is shown ONLY ONCE
After creation, an `sk-ant-...` key is displayed **exactly once**. Copy it straight into a safe place (a password manager) before closing the dialog. If you missed it, the only fix is to **create a new key**.
:::

::: tip Pick the "personal" key
Two key types matter here: **personal** (bound to you; it stops working if you leave the organization) and **service account** (for automated/CI workloads). For personal BYOK, choose a **personal key** — simple and enough. *Workspace keys* are legacy; avoid them.
:::

::: details Is the Create key button *disabled*?
That means your role in the organization isn't sufficient to create keys. Ask the org admin to raise your role, or ask them to create / grant access to a **service account** that can carry its own key.
:::

---

## Enabling Claude in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Claude:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **Anthropic Claude**.
3. Paste the `sk-ant-...` API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears automatically from your key.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar), then click save.

Mikazuki's worker uses the **native Anthropic endpoint**, so there is no *Base URL* field to fill in — the endpoint is fixed. This differs from providers that offer an *OpenAI Compatible* mode: for Claude that option isn't available (Anthropic provides no official OpenAI-compatible endpoint).

---

## Rate Limits & Spend Cap

The thing that surprises Claude users most: **limits are counted per organization, not per key**. One organization (which can hold many keys and projects) shares one budget and one rate limit.

Two kinds of limits:

- **Monthly spend limit** — based on your account tier. Tiers rise automatically with spending: *Evaluation → Start (500 USD/month) → Build (1,000 USD/month) → Scale (200,000 USD/month) → Custom* (no cap). Hit the cap? The API returns HTTP 429 `enforced_spend_limit_reached` until the start of the next month.
- **Per-minute rate limits** — RPM (requests per minute), ITPM (input tokens per minute), and OTPM (output tokens per minute), which rise with each tier.

::: info Set your own spend limit
You can also set **your own spend limit** on the [Billing page](https://platform.claude.com/settings/billing) as an extra brake, independent of your organization's official tier cap. Full, current tier numbers are in Anthropic's official [rate limits](https://platform.claude.com/docs/en/api/rate-limits) documentation.
:::

---

## Free Tier & Pricing

::: warning No free tier like Gemini
Unlike Gemini, the Anthropic API generally **requires an active payment method** — register a card under [Billing](https://platform.claude.com/settings/billing) before you can use the API. New accounts sometimes get a small trial credit; check whether yours has one, but don't expect to run free for long.
:::

Prices are per model, per million tokens — **output is always far more expensive than input** — and can change at any time, so Anthropic's official [pricing page](https://www.anthropic.com/pricing) is the only source worth trusting for numbers. For casual roleplay you don't need the priciest model:

- **Mid-tier** (e.g. Sonnet 5 or one generation above) — the sweet spot for daily *roleplay*; solid writing at sensible cost.
- **Premium tier** (e.g. Opus 5) — save it for special moments or stories with heavy, complex themes.
- **Budget tier** (e.g. Haiku 5) — for light chat, autosummary, or cheap experimentation.

---

## `max_tokens` Does Not Punish Your Output Rate Limit

A small but pleasant bonus of Anthropic's rate limiting: **OTPM only counts tokens actually generated** — the `max_tokens` parameter is *not* included. So raising `max_tokens` in [Basic Parameters](../byok/parameter-dasar) to give long answers room **does not increase your output rate limit consumption**.

(The input side has a similar bonus for many models: tokens read from cache don't count toward ITPM — rarely relevant for a chat app like this, but interesting to know.)

So unlike Gemini, truncated answers on Claude usually mean your `max_tokens` needs raising — not a project-level limit problem.

---

## Troubleshooting

::: details Error 401 — invalid key
The key was pasted wrong, cut off while copying, or has passed its *expiration*. Open [the API keys page](https://platform.claude.com/settings/keys), delete the old key if in doubt, then create a new one and paste it cleanly.
:::

::: details Error 429 — rate limit / spend limit
These limits are **per organization**, not per key — creating a new key doesn't help. Check two things: the per-minute rate limits (wait a moment and retry, or move up a tier via spending) or `enforced_spend_limit_reached` (monthly spend cap hit; wait for the next month's reset).
:::

::: details Model list doesn't appear / is empty on fetch
Usually the key is valid but tied to a workspace with the wrong scope, or the model list lookup briefly failed. Make sure the key belongs to a workspace with access to the models, then try typing the model name **manually** into Mikazuki's model field if fetch still fails.
:::

::: details Truncated answers / stops mid-sentence
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small. Raise it without hesitation: for Claude, `max_tokens` **is not counted** against the output rate limit (see above), so it doesn't punish your per-minute quota. If answers still get cut off after raising it, also check that the selected model isn't a budget-tier one with its own short answer style.
:::

::: details Bill keeps growing at the end of the month
Set a **spend limit of your own** on the [Billing page](https://platform.claude.com/settings/billing) as an extra brake, use a budget-tier model (Haiku) for daily chat, and review the [official pricing](https://www.anthropic.com/pricing) periodically since numbers can drift.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
