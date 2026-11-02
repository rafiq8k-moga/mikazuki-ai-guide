---
title: Featherless AI (BYOK Provider)
---

# Featherless AI (BYOK Mode)

**Featherless AI** is different from every other provider in this guide: instead of pay-per-token, it's a *serverless* host for **open-weight models** — Llama, Qwen, DeepSeek, GLM, Kimi, and thousands more — with a **flat-rate subscription**. Its catalog spans 40,000+ models, and the service is popular in the **SillyTavern / RisuAI** communities for *roleplay* and long stories — a usage profile that looks a lot like Mikazuki users. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Important note for 2026
Unlike every other provider in this guide: **Featherless has no free tier or API trial**. You can create an account without a credit card, but **an API key only works while your subscription is active** — a key without a plan won't run. Don't expect a free quota. This page teaches the correct **method**; for current numbers always check the official [Featherless pricing page](https://featherless.ai/pricing).
:::

---

## Creating an API Key

1. Sign up at [featherless.ai](https://featherless.ai) — with email or OAuth.
2. **Pick a plan/subscription** (e.g. the Chat plan) — remember, the key does nothing until the subscription is active.
3. Open **dashboard → API Keys** → **Create New Key**.
4. Copy the key — on Featherless, the key is used as a *Bearer token*.

::: danger 🔒 Required: an active subscription first
This is **Featherless' biggest difference** from other providers: an API key **does not work without an active subscription**. Many people are surprised when their key errors out despite being "created correctly" — the plan just wasn't active. Make sure your subscription is running before switching Featherless on in Mikazuki.
:::

---

## Enabling Featherless in Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for Featherless:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. In the provider list, **pick the Featherless entry if one exists**; if not, use the **OpenAI Compatible** provider with:
   - **Base URL**: `https://api.featherless.ai/v1`
   - **API key**: your Featherless key (*Bearer token*).
3. Paste the API key you just created.
4. Click the 🔍 **fetch models** button — the model list appears from the Featherless catalog.
5. Pick a model, set up [Basic Parameters](../byok/parameter-dasar), then click save.

::: tip 🏷️ Model naming format
Featherless models use the `HuggingFaceOrg/ModelName` format — e.g. `Qwen/Qwen2.5-7B-Instruct`. Don't type it manually; use the 🔍 **fetch models** result to avoid typos.
:::

---

## Plans & Pricing

Featherless doesn't sell tokens per unit on its main plans — what it sells is **flat-rate access** to the entire catalog:

- **Chat plan — $25/month** (billed monthly, can pause/cancel anytime): **unlimited tokens** (*"Length is never billed. Concurrency is the only ceiling"*), **32K** context, **4 concurrent units**, access to **all** 40,000+ models, and compatibility with SillyTavern, RisuAI, and Wyvern. For roleplay and stories, **this is the recommended plan**.
- **Developer plan** — **starting at $50/month** in credits: per-token credit based, context up to **256K**, up to **100 concurrent units**. Aimed at coding agents and production APIs.
- **Pay-As-You-Go** — fill in credits, pay per token under the same system as the Developer plan.

The Chat plan's usage rules: interactive **human-typed chat** only — not app/API traffic, *reselling*, background automation, or *benchmarking*. For a Mikazuki user that means: private persona use = fine.

::: warning ⚠️ Don't lock in numbers
We only quote the plan numbers above as they appear on the site — details and changes may drift. Check the official [pricing](https://featherless.ai/pricing) page and [plans docs](https://featherless.ai/docs/plans) for current figures.
:::

---

## Models & Catalog

The Featherless catalog holds **40,000+ open-weight models** — all the big families like **Llama, Qwen, DeepSeek, GLM, Kimi**, and many more — and the Chat plan unlocks **all of them**, not just a subset.

Some practical notes:

- Models are pulled through the 🔍 **fetch models** button; names follow the `HuggingFaceOrg/ModelName` format.
- If one model is saturated, a *sibling* model from a similar family/size is usually available — don't fixate on one name.
- **The chat box on the model page** of the Featherless site is only for briefly *testing* that model — not a full chat interface for serious use.

---

## Limits & Concurrent Units

On the Chat plan, what limits you isn't output length, it's **concurrency**:

- **4 concurrent units** — picture one unit as one large-model (70B) conversation, or four small models running at once. If the units are used up, the next request waits.
- **"Too many concurrent requests"** is the most common error cause besides 503 — reduce the number of parallel sessions.
- The Developer/PAYG plans go up to **100 concurrent units**, with context up to **256K**.

In [Basic Parameters](../byok/parameter-dasar), the Chat plan's **32K** context means the `128K` preset isn't realistic — start from a fitting value, and remember `max_tokens` is carved out of the context window.

---

## Privacy & Data

This is Featherless' core *selling point* for roleplay use:

- **Prompts are never stored** — "Prompts stored: Never".
- Usage is **private, secure, and anonymous**: no logs on the chat plan. Prompts and completions are not used for training nor stored on their servers.

::: tip 🛡️ For the privacy-minded
If you write roleplay or stories you don't want leaving a trace anywhere, this "no logs + prompts never stored" model is a strong reason to pick Featherless over providers with looser retention policies.
:::

---

## Troubleshooting

::: details HTTP 503 — model saturated
The model you picked is **saturated** (popular models saturate first). Failed requests like this are **not billed**. Wait a moment and retry, or switch to a quieter *sibling* model from a similar family/size.
:::

::: details Error 401 — key doesn't work
On Featherless, a key **without an active subscription does nothing** — a different behavior from the free tiers you may be used to elsewhere, and it surprises people often. Open the dashboard and make sure your plan is active. If it is, check that the key wasn't pasted wrong or cut off.
:::

::: details Credits empty (Developer / PAYG)
Developer/PAYG calls will be *blocked* until you **top up credits in Billing** — Featherless will notify you when the balance touches zero. Credits don't *expire*, and one-off top-ups are possible. The good news: only *successful requests* are billed.
:::

::: details Truncated answers / story prunes old parts
The Chat plan has **32K** context — very long conversations will prune the oldest parts as they pass the limit. Raise `max_tokens` in [Basic Parameters](../byok/parameter-dasar) for more answer room (remember, it's carved out of the context window), or move to Developer/PAYG if you truly need context above 32K — the Chat plan is designed for everyday *roleplay*.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [DeepSeek](./deepseek) — the matching guide for the DeepSeek provider.
- [Groq](./groq) — the matching guide for the Groq provider.
