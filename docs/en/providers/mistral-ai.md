---
title: Mistral AI (BYOK Provider)
---

# Mistral AI (BYOK Mode)

**Mistral AI** is worth considering for BYOK: an open, Europe-based provider with a *free tier* called the **Experiment** plan that lets you try it without a credit card, plus a well-organized model family — from the cheapest for daily chat up to premium models. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Mistral's consumer chat app is now called **Vibe** (formerly Le Chat). Be careful: these are **two different worlds** — a Le Chat/Vibe subscription **does not grant API quota**. API access only goes through *La Plateforme* (Mistral's console). This page teaches the correct **method**, not price numbers — check Mistral's official [pricing page](https://mistral.ai/pricing/) before settling on a budget.
:::

---

## Creating an API Key

1. Sign up at [console.mistral.ai](https://console.mistral.ai) — you can use email or OAuth (Google, GitHub, Microsoft, Apple).
2. On first login, create a **Workspace** (personal or team) and accept the *Terms of Service*. You're sometimes asked to verify a phone number when picking a plan.
3. After that, you **must activate a plan in Billing** — see the box below; this is the step most often missed.
4. Open the Admin Panel → **API Keys** → **Create new key**. Fill in a name/label (optional) and an **expiration date**.
5. The key is shown **once only** in a modal — copy it and store it somewhere safe.

::: danger 🔒 Required: activate a plan in Billing first
This is **the most common trap** in Mistral: before an API key can be used, you **must activate a plan** under *Administration → Billing* — **including** on the free **Experiment** plan (no credit card needed). If this step is missed, the key is created fine but every API call fails with **401** even though the key is "correct". The **Scale** plan is *pay-as-you-go* and requires a credit card.

Official reference: [billing & usage](https://docs.mistral.ai/admin/billing-usage/usage-limits) in Mistral's docs.
:::

::: tip 🔐 Use expiration + rotation
When creating a key, set an **expiration date** and make a habit of **periodic rotation** — create a new key, swap it in Mikazuki, then delete the old one. If you missed the key's display, the only fix is creating a new one (and never commit a key to a repository).
:::

---

## Enabling Mistral AI in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Mistral AI:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **Mistral AI**.
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears automatically from your key.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar), then click save.

Mikazuki's worker uses the **native Mistral AI endpoint**, so there is no *Base URL* field to fill in — the endpoint is fixed.

::: tip Good to go out of the box
Mikazuki's default **temperature 0.85** already fits Mistral AI; you don't need to change it unless you want a different answer style.
:::

---

## Context Window

Mistral's context window varies per model — recent models generally offer generous capacity, but the exact number follows whichever model is active in your fetch models list:

- **Newest models** → large capacity; if you're confident about the model, the `1M` preset can be considered where genuinely supported.
- **When in doubt** → start from the `128K` preset, check the model spec in the fetch models list, then raise it.

How `context_window`, *Reserved Output*, and the preset chips work is covered in [Basic Parameters](../byok/parameter-dasar).

::: tip 💡 Make the most of answer space
Raising `max_tokens` gives answers more room — remember `max_tokens` is carved out of the context window, so raise `context_window` too when needed.
:::

---

## Free Tier & Pricing

- **Free tier = the Experiment plan**: enough for *prototyping* and personal chat, no credit card. The trade-off: a **monthly usage quota** and **low rate limits**.
- For freer usage, move up to the **Scale** plan (*pay-as-you-go*, credit card required).
- **Prices** are per million tokens and differ per model. The model family: **Small** (cheapest), **Medium** (mid-tier), **Large** (premium), plus **Codestral** which is dedicated to code.

::: warning ⚠️ Don't lock in numbers
We deliberately omit a price table on this page — the numbers go stale fast. Check Mistral's official [pricing page](https://mistral.ai/pricing/) and the [usage limits](https://docs.mistral.ai/admin/billing-usage/usage-limits) documentation for current figures. A safe rule of thumb: **Small** for thrifty daily chat, **Medium** for balance, **Large** for the best quality you pay premium for.
:::

---

## Rate Limits & Spend Cap

Mistral's limits are counted **per Organization**, not per key, and measured **per model**:

- **Per-model rate limits** — a combination of *tokens per minute* (TPM) and *requests per second* (RPS).
- **Monthly spend limit** — applies at the Organization and also the Workspace level (*Administration → Workspaces*; managed via *Subscriptions → Billing* in the Admin Panel). Hit the spend limit? **The API can be deactivated** until the next month, or until an admin raises the limit.

(On the free Experiment tier, the monthly quota and low rate limits apply on top of all that — see the earlier section.)

For current limit numbers, always check **Admin Panel → API → Limits** directly.

---

## Troubleshooting

::: details Error 401 even though the key was just created
Almost always because **the plan in Billing wasn't activated** — the most common trap in Mistral (see the danger box above). Open *Administration → Billing*, activate a plan (even Experiment requires it), then retry the request. If it's already active, also check the key for paste errors / truncation or a passed *expiration*.
:::

::: details Error 429 — too often
The free Experiment tier has tight limits — the community rule of thumb is about **1 request per second per key**, applied globally. Lower your request intensity, or upgrade to the **Scale** plan for looser limits. On paid plans, remember the limit is measured **per model** (TPM + RPS) and **per Organization** — a new key doesn't help.
:::

::: details Error 404 / invalid model
The model name is wrong — use the list from the 🔍 **fetch models** button; don't type it manually (easy to get casing or format wrong). If the fetch briefly failed, retry it before filling the model field **manually**.
:::

::: details Truncated answers / stops mid-sentence
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small. Raise it — but remember `max_tokens` is also carved out of the context window as *Reserved Output*, so don't over-inflate it without raising `context_window`.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [Anthropic Claude](./claude) — the matching guide for the Claude provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
