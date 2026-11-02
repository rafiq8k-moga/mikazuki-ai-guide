---
title: Z.AI / GLM (BYOK Provider)
---

# Z.AI / GLM (BYOK Mode)

**Z.AI** (from Zhipu AI) runs the **GLM** model family — an interesting BYOK pick because flagship pricing is relatively wallet-friendly, there are a few **purely free models** (not trial credits) usable immediately without a top-up, and the API is *OpenAI-compatible*. The model family is diverse: from light and quick ones for daily chat to flagships with the muscle for long *roleplay*. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Z.AI's model names, pricing, and free/subscription rules change fairly often. This page teaches the correct **method**, not a price list — the numbers quoted are examples only. Always check the official [GLM pricing page](https://docs.z.ai/guides/overview/pricing) before settling on a budget.
:::

---

## Creating an API Key

1. Register at [z.ai/chat](https://chat.z.ai) with email or Google.
2. Click the **profile menu**, open the **API Keys** section.
3. Click **Create a new API key**, give it a name, then copy the displayed key.

::: tip 🔐 The difference from other providers: keys are viewable again
Unlike Gemini or Claude, which show the key **only once**, a Z.AI key **can be viewed and copied again anytime** from [the API Keys page](https://z.ai/manage-apikey/apikey-list). This makes key rotation and recovery far friendlier — but **still store it safely** (a password manager) and never paste keys into chats, forums, or screenshots. A leaked key = someone else can spend your credit balance.
:::

---

## Enabling Z.AI in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Z.AI:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **ZAI**.
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears automatically from your key.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — then click save.

Mikazuki's worker uses the **native ZAI provider** with a **fixed endpoint**, so there's no *Base URL* field to fill in. For reference, its endpoint follows the *OpenAI-compatible* format at `https://api.z.ai/api/paas/v4` — but stay on the native **ZAI** provider in Mikazuki, not the manual *OpenAI Compatible* route.

::: tip Good to go out of the box
Mikazuki's default **temperature 0.85** maps well for roleplay; you don't need to change it unless you want a very different answer style.
:::

---

## GLM Models & Variants

The GLM model family you're most likely to meet in the fetch models list:

| Group | Example names | Good for |
|------|-------------|-------------|
| **Flagship** | `glm-5.3` | best writing quality, heavy *roleplay* |
| **Budget & fast** | `glm-5.3-flash`, `glm-5.3-flashx` | daily chat, fast responses |
| **Previous generations** | `glm-5.2`, `glm-5` | fallbacks when the flagship misbehaves |
| **Purely free (text)** | `glm-4.7-flash`, `glm-4.5-flash` | trying at zero cost |
| **Purely free (vision)** | `glm-4.6v-flash` | image input at zero cost |

Three models are **purely free** (not expiring trial credits): `glm-4.7-flash` and `glm-4.5-flash` for text, plus `glm-4.6v-flash` for vision. All are *rate-limited* and optimized for speed — good for experimenting and light chat.

Take model names **exactly from the fetch models list** — typing manually invites spelling mistakes.

---

## Free Tier, Pricing & Coding Plan

- **No credit card to try**: new accounts usually get a small initial **trial credit**; check the amount in your dashboard.
- **Purely free models**: the three Flash/V-Flash models in the table above can be used **without paying anything** (with usage limits).
- **Credit top-up** for paid models: API usage draws down your credit balance.

On pricing: the flagship `glm-5.3` as a public example sits around **$1.4 per million input tokens / $4.4 per million output tokens**. All prices can change anytime, so this is only a cost sketch — **check the official [GLM pricing page](https://docs.z.ai/guides/overview/pricing)** for current numbers.

::: tip 💡 Cached input is far cheaper
Watch the *cached input* rate on the pricing page: input tokens read from the *cache* cost **far less** than fresh input — for `glm-5.3`, the cache rate is about **$0.26 per million tokens** (example, can change). Long roleplay conversations that resend context every message can exploit this rate — budget by the *string cache-difference*, not the total prompt.
:::

::: danger ⚠️ GLM Coding Plan ≠ general API
Z.AI also sells a subscription called the **GLM Coding Plan** — but that's **specifically for coding tools** (Claude Code, OpenCode, and the like), **NOT** for the general API. For Mikazuki BYOK, what you need is a **regular API key + credit top-up**, not the Coding Plan. Don't end up buying a subscription aimed at a different purpose.
:::

::: warning ⚠️ Don't lock in numbers for other models
We deliberately omit prices for the Flash/FlashX models etc. — the sources clash and the numbers go stale fast. Review the [official pricing page](https://docs.z.ai/guides/overview/pricing) before budgeting, and monitor your remaining credits in the Z.AI dashboard.
:::

---

## Rate Limits & Credits

- **No official public per-tier numbers**: limits are computed per account and per plan, and can change — so we don't lock them in here.
- **Rule of thumb**: **free** models have the tightest rate limits; paid models loosen up with the plan/top-up.
- If requests come too fast in a row, the API answers **429** — treat it as "slow down for a moment" and retry (*backoff*), not as a signal to spam retries.

---

## Privacy & Data

Z.AI is a provider **based in China**. If data residency matters to you, explore its policies neutrally: data is processed by Z.AI's servers under **their own privacy policy** — read [z.ai's official privacy policy](https://z.ai/privacypolicy) before deciding to use the API for personal content.

---

## Troubleshooting

Z.AI returns fairly informative detail codes — match your error message against these:

::: details Error 401 with code 1000 — Authentication Failed
The key is wrong, has been revoked, or picked up stray spaces when copied. Open [the API Keys page](https://z.ai/manage-apikey/apikey-list) — luckily a Z.AI key **can be viewed again** — compare it character by character there, or regenerate a new key outright and paste it into Mikazuki.
:::

::: details Error 401 with code 1003 — token expired
Your key has expired. Create a **new key** from the API Keys page and swap it in Mikazuki's Settings.
:::

::: details Error 429 with code 1113 — Insufficient balance / no resource package
Your credit balance is empty or the resource package isn't active. Top up credits in the Z.AI dashboard, then retry the request. If you think you still have trial credits, check the amount in the dashboard — trial credits are usually small.
:::

::: details Error 429 with code 1302 — rate limit
You're sending too frequently. Slow the request intensity and use *backoff* (wait briefly, try again). Free models have the tightest limits — if you hit them often, move your main chat to a paid model.
:::

::: details Error 400 with code 1211 — Unknown Model
The model name is misspelled. Take the name **exactly** from Mikazuki's fetch models list — like `glm-5.3`, `glm-5.3-flash`, or `glm-4.7-flash` — don't type it from memory.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [Anthropic Claude](./claude) — the matching guide for the Claude provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
