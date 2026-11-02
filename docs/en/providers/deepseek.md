---
title: DeepSeek (BYOK Provider)
---

# DeepSeek (BYOK Mode)

**DeepSeek** is an interesting BYOK pick if you want wallet-friendly pricing with quality that still holds up for daily *roleplay*: sign-up **without a credit card**, top-up-based models (fill your balance as needed), and a wide context window on its newest Flash model — up to around 1 million tokens. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
DeepSeek's prices **rose sharply on August 16, 2026** — the steepest jump was on the *cache-hit* rate. This page teaches the correct **method**, not price numbers. Check the official [DeepSeek API pricing page](https://api-docs.deepseek.com/quick_start/pricing) and the [DeepSeek platform](https://www.deepseek.com/en/platform/) before settling on a budget.
:::

---

## Creating an API Key

1. Create an account at [platform.deepseek.com](https://platform.deepseek.com) — sign-up **does not require a credit card**.
2. Follow the *profile wizard* on first login, then open the **API Keys** section in the sidebar.
3. Click **Create new API key**, give it a name, then copy the displayed key.

::: danger 🔒 The key is shown ONLY ONCE
After creation, the key is displayed **only once**. Copy it straight into a safe place (a password manager) before closing the dialog. What's often underrated: *this duplicates a weakness of other API setups* — a key leaked by pasting it somewhere public can be used by anyone to burn your top-up balance. Never paste keys into chats, forums, or *screenshots*.
:::

---

## Enabling DeepSeek in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for DeepSeek:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **Deepseek**.
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears automatically from your key.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — then click save.

Mikazuki's worker uses the **native DeepSeek endpoint**, so there is no *Base URL* field to fill in — the endpoint is fixed. DeepSeek's own API is *OpenAI-compatible* (base URL `https://api.deepseek.com`), so if you need an alternative — say the native provider misbehaves — the **OpenAI Compatible** route with that Base URL also works with the same DeepSeek key.

### Example model names

Models you're most likely to see in the fetch models list:

- **`deepseek-flash`** — served by DeepSeek-V4.1-Flash; the legacy name `deepseek-v4-flash` is still accepted.
- **`deepseek-v4-pro`** — the Pro class for heavier writing quality.

### Thinking prompts

DeepSeek models support *thinking prompts* via the `thinking: {"type": "enabled"}` parameter plus `reasoning_effort`. Neither is present in the default [Basic Parameters](../byok/parameter-dasar), but you can pass them through **Advanced Payload**.

::: warning ⚠️ Thinking is expensive
Turning on `reasoning_effort` risks **raising cost and response length significantly** — "thinking" tokens still count as output tokens. For casual *roleplay*, it's usually unnecessary.
:::

---

## Context Window & the `1M` Preset

DeepSeek's newest Flash model has a context window of up to around **1 million tokens** — a perfect match for Mikazuki's `1M` preset:

- **`deepseek-flash`** (newest Flash) → the `1M` preset is realistic for extra-long *roleplay*.
- **`deepseek-v4-pro`** or other models → capacity may differ; when in doubt, start at `128K`.

How `context_window`, *Reserved Output*, and the preset chips work is covered in [Basic Parameters](../byok/parameter-dasar).

::: tip 💡 Make the most of 1M
When using the `1M` preset on the Flash model, you can raise `max_tokens` to give answers more room — remember `max_tokens` is carved out of the context window too.
:::

---

## Free Tier & Pricing

::: warning No free tier like Gemini
DeepSeek uses a **top-up balance (pre-paid)** model: you fill your balance first through the *top-up* menu, then API usage draws it down. Before you've topped up in full, you can usually still finish *setup* (create a key, fetch models). When the balance runs out, the API returns an *insufficient balance* error.
:::

## Rate Limits & Windowed Pricing

- **Concurrency-based rate limit per account** — not RPM. That means what's limited is the **number of requests running simultaneously**, not requests per minute. Official values: about **2,500 concurrent connections** for Flash and about **500 concurrent connections** for Pro — far beyond personal chat needs.

::: info Need more?
If your concurrency needs exceed the defaults, DeepSeek offers a **capacity expansion request** you can file **free of charge** from the platform. For personal use, it's almost never needed.
:::

- **Prices are per million tokens with a time-window split**: the **off-peak rate is half the peak rate**. Off-peak windows follow global quiet hours — the exact times can change, so check the official page directly and don't lock in numbers.

Per-model prices can change at any time (the big August 16, 2026 increase is mentioned above), so the official [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing) link is the only source worth trusting for numbers.

::: warning ⚠️ Don't lock in numbers
We deliberately omit a price table on this page — the numbers go stale fast, and even the peak/off-peak windows can shift. Review the [official pricing page](https://api-docs.deepseek.com/quick_start/pricing) before budgeting, and monitor your top-up balance on the [Dashboard](https://platform.deepseek.com) so it doesn't surprise you.
:::

---

## Troubleshooting

::: details Error 401 — Insufficient Balance
Your top-up balance is **empty**. Open the *top-up* menu on the [DeepSeek Dashboard](https://platform.deepseek.com), fill the balance, then retry the request. If the balance looks fine but the error persists, check whether the key was pasted wrong / cut off.
:::

::: details Constant Error 429
DeepSeek's rate limit is **concurrency**-based — requests running simultaneously, not RPM. If you hit it, wait for the running requests to **finish first**; don't spam retries (back-to-back retries just add new requests and eat concurrency slots). For bigger needs, file the free *capacity expansion request*.
:::

::: details Invalid model name
Use the exact names from the fetch models list: **`deepseek-flash`** or **`deepseek-v4-pro`**. Typing manually invites casing or formatting mistakes; if fetch fails, fill the model field **manually** with one of the names above.
:::

::: details Answers feel flimsy
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small — the model gets cut before it can write long. Raise it, but remember `max_tokens` is also carved out of the context window as *Reserved Output*, so don't over-inflate it without raising `context_window`.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
