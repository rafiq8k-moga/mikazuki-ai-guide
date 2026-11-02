---
title: Groq (BYOK Provider)
---

# Groq (BYOK Mode)

**Groq** is an inference provider famous for its **LPU** hardware — its main edge isn't model quality but **speed**: tokens stream in tens of times faster than most other providers, so answers feel almost instant. For responsive chat and *roleplay*, it's an experience that's hard to match. Groq runs other people's hand-picked *open-weight* models (Llama, GPT-OSS, Qwen, Whisper) — so you're not paying for a model license, you're renting the fastest machine for it. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Groq's model list, rate limit numbers, and prices change fairly often — and models labeled *Preview* can be **killed off suddenly**. This page teaches the correct **method**, not a list of numbers. Check the official [Groq rate limits](https://console.groq.com/docs/rate-limits) and [Groq pricing](https://groq.com/pricing/) pages before settling on a budget.
:::

---

## Creating an API Key

1. Sign up at [console.groq.com](https://console.groq.com) with email or Google.
2. Open the **API Keys** menu.
3. Click **Create API Key**, give it a name, then copy the displayed key.

::: danger 🔒 The key is shown ONLY ONCE
Like Gemini and Claude, a Groq key is shown **only once** at creation. Copy it straight into a safe place (a password manager) before closing the dialog — if you lose it, the only way out is to **create a new key**. Never paste keys into chats, forums, or screenshots.
:::

---

## Enabling Groq in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Groq:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **Groq**.
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears automatically from your key.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` and `max_tokens` — then click save.

Mikazuki's worker uses the **native Groq provider** with a **fixed endpoint**, so there's no *Base URL* field to fill in. For reference, Groq's API is *OpenAI-compatible* at `https://api.groq.com/openai/v1` — but stay on the native **Groq** provider in Mikazuki, not the manual *OpenAI Compatible* route.

::: tip Good to go out of the box
Mikazuki's default **temperature 0.85** maps well for roleplay; you don't need to change it unless you want a very different answer style.
:::

Groq's streaming speed is usually felt from the very first message — if you're used to tokens trickling in slowly on other providers, this is the most satisfying part.

---

## Free Tier & Pricing

Groq's free models work differently from most other providers:

- **Truly free, no credit card** — no credit system, no top-up balance, no per-try tokens.
- **No per-token billing on the free tier**: every model is accessible; the only limiter is the **rate limit** (next section).
- This differs from DeepSeek (top-up balance) or Mistral (a time-limited experiment plan) — on Groq you can chat right away without ever topping up anything.

::: warning ⚠️ Free isn't for production
Groq's free tier is built for **prototyping and personal use** — which is exactly where Mikazuki lives. For production loads (public apps, many users), don't treat this as a viable foundation: the limits are tight and can be exhausted within minutes of heavy use.
:::

If you ever need bigger limits: the paid tier starts at **Developer**, with per-million-token prices starting from a few cents for the cheapest models. Don't lock in numbers — check [Groq's official pricing](https://groq.com/pricing/) for current rates.

---

## Rate Limits

Groq's rate limits have a distinctive shape — understand it before a 429 surprises you:

- **Measured per model**: each model has its own numbers, not one shared quota.
- **Main metrics: RPM** (requests per minute), **RPD** (requests per day), **TPM** (tokens per minute), **TPD** (tokens per day) — for audio models: **ASH** (audio seconds per hour) and **ASD** (audio seconds per day).
- **Applied at the Organization level**: adding new **keys does not** raise the limit — all keys in the same organization share the quota.
- **Cached tokens are not counted** against the rate limit — tokens read from cache don't eat your TPM/TPD.
- A **429** response carries a `retry-after` header (seconds) plus the `x-ratelimit-*` headers — the info on when the limit resets is right there in the response.

**Example from the official table** (numbers can change — just a snapshot): `openai/gpt-oss-120b` = 30 RPM, 1,000 RPD, 8K TPM, 200K TPD.

::: warning ⚠️ Third-party sources contradict each other
On the **aggregate daily quota**, community sources disagree — some say around 14,400 RPD, some around 1,000 RPD. We deliberately **don't** quote an aggregate number here; the only way to see the exact limits that apply to you is the **Groq console → Settings (Limits)**.
:::

---

## Tiers: Free, Developer, Enterprise

- **Free** — no credit card, tight per-model rate limits, enough for trying it out and personal chat.
- **Developer** — upgrade by adding a card (no minimum spend). Rate limits rise about **~10x** and per-token rates drop about **~25%** *(these figures are per third-party sources — verify in the Groq console before relying on them)*.
- **Enterprise** — for custom needs at scale; not the target for personal Mikazuki users.

---

## Models & the Preview Warning

Everything on Groq is **open-weight** — the families you're most likely to meet in the fetch models list:

- **GPT-OSS** — `gpt-oss-...`, OpenAI's open-weight flagship on Groq.
- **Llama** — `llama-...`, Meta's classic picks.
- **Qwen** — `qwen...`, Alibaba's open-weight alternative.
- **Whisper** — audio models for transcription.

Take model names **exactly from Mikazuki's fetch models list** — typing manually invites spelling or version-suffix mistakes.

::: danger ⚠️ Preview models can vanish overnight
Groq officially states that models labeled **Preview** can be **discontinued at any time**. Don't be surprised if a favorite model suddenly disappears from the list — this is behavior Groq itself has announced, not a Mikazuki bug. The fix: refetch models, then move to a neighboring model that's available.
:::

---

## Troubleshooting

::: details Error 429 right away
Groq's free tier rate limits are genuinely **tight and per-model** — 429s show up here faster than on other providers. Check the `retry-after` header in the response to see how long to wait, shorten the conversation (*prune* old context so TPM/TPD doesn't run out fast), or step up to the **Developer** tier if your usage is genuinely heavy.
:::

::: details Error 404 / invalid model
Two possibilities: the model name is misspelled, **or** its *Preview* version was discontinued by Groq (see the warning above). The first step is always: press 🔍 **fetch models** again in Mikazuki and use a name from the fresh list — don't hope an old name is still alive.
:::

::: details Truncated answers
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) might be too small — the model stops before it can write long. Raise it, but remember `max_tokens` is carved out of `context_window`, so don't over-inflate it without raising `context_window` as well.
:::

::: details Error 401 / invalid key
A Groq key is **shown only once** at creation — if you're not sure you saved it properly, create a **new key** from the **API Keys** menu at [console.groq.com](https://console.groq.com) and paste it again in Mikazuki's Settings. Also make sure no extra spaces got copied along.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Google Gemini](./gemini) — the matching guide for the Gemini provider.
- [DeepSeek](./deepseek) — the matching guide for a top-up provider.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
