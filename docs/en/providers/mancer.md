---
title: Mancer (BYOK Provider)
---

# Mancer (BYOK Mode)

**Mancer** differs from the other providers in this guide at its root: it is an **unfiltered** LLM inference service — they say it outright, *"run whatever prompts you want, doesn't censor responses"* — running on top-tier GPUs. But there's a hook you must understand from the start: **Mancer provides no chat interface of its own at all** — the service is purely an **API** designed to be used by other apps like Mikazuki, SillyTavern, and the like. You will never open "Mancer chat"; you chat inside Mikazuki, and Mancer works behind it. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning 📅 Test before you buy
The official message from Mancer itself: **"bps bps, test dulu dengan model gratis sebelum beli credits."** The service is paid per use and model quality varies — use its free model (see below) to confirm your setup works before spending money.
:::

---

## Creating an API Key

1. Sign up at [mancer.tech](https://mancer.tech).
2. Go to your **Dashboard**.
3. Copy the **API Key** shown on the dashboard.

::: info 🔑 One key per account
Unlike providers that show the key only once (like Claude), Mancer's key **stays visible on the Dashboard and can be viewed anytime**. Even so, never paste a key into chats, forums, or *screenshots* — a leaked key can still end up burning through your credits.
:::

Auth works like usual: the key is sent as a *Bearer token* in the `Authorization` header.

---

## Enabling Mancer in Mikazuki AI

Mancer's API is **OpenAI-compatible**, so in Mikazuki you take the **OpenAI Compatible** route:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **OpenAI Compatible** (or the **Mancer** entry if it's in your list).
3. Fill in the **Base URL**.
4. Paste the API key you copied from the Dashboard.
5. Click the 🔍 **fetch models** button — the model list is pulled straight from Mancer's live catalog.
6. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — then click save.

### About the Base URL

Mancer's official documentation (its OpenAPI spec) names the server **`https://neuro.mancer.tech`**, with routes like `/oai/v1/chat/completions` (chat), `/oai/v1/completions` (completion), and `GET /oai/v1/models` (live catalog).

For Mikazuki: **fill the Base URL the way Mikazuki's provider settings expect it**. When in doubt, use **`https://neuro.mancer.tech`** — then **always verify with the 🔍 fetch models button**. If the model list shows up, your Base URL is right.

::: tip 💡 fetch models doubles as a verification tool
On Mancer, the 🔍 **fetch models** button isn't just for filling in model names — it's also **proof that your Base URL + key are correct**. If the fetch succeeds, everything is in place; if it fails, the problem is one of the two (see [Troubleshooting](#troubleshooting)).
:::

---

## Credits & Pricing

Mancer **has no subscriptions** — none at all. The system is **credit packs**:

- You **buy credit packs**, then each request consumes credits **based on the model used and the number of tokens** (prompt + output).
- The live catalog (~11 text models as of August 2026) is visible via `GET /oai/v1/models` — each model's price (credits per token) is listed right there.
- A qualitative **rule of thumb** (not a locked number): classic *roleplay* models like **Magnum/MythoMax** tend to be **more expensive**; models like **DeepSeek V4 Flash** are **cheaper** and carry a ±1M token context.

**Refunds on packs** (from the official FAQ): usage under **300,000 credits** is refunded *no-questions-asked*; above that it's handled case by case through their email.

### Mancer's distinctive billing rules

This comes from their official docs and is rare among providers — worth understanding:

- **Successful requests are still billed**, even if your client already *disconnected* while the request finished drafting on the server. Don't close the app assuming "if I disconnect, I won't be billed".
- **Failed requests / 0-token replies → auto-refund**, automatically.
- **Replies containing only EOS** (end-of-sequence, an empty answer) are **not refunded** — it may be a legitimate model response, not a failure.
- **Streaming that is stopped midway** is still billed for tokens up to the stop point.
- **A negative balance** still works for **free models** — so connection testing keeps working even with no credits left.

::: warning ⚠️ Don't lock in numbers
Credits per token **differ per model** and can change. We deliberately omit a table of numbers — check the live catalog via the models endpoint (or the 🔍 fetch models button) for current prices before setting a budget.
:::

---

## Free Model & Model Catalog

Good news for testing: Mancer provides a **free model** — the most practical use:

- **`mytholite`** — a free model with a **2,560-token** context and **150-token** max output. Far too small for serious work, but **perfect for confirming your setup works** — exactly as Mancer's official message says: *"bps bps, test dulu dengan model gratis"*.

The live catalog holds around **11 text models** (August 2026). Interesting for roleplay:

- **`deepseek-v4-flash`** — a context window of **±1 million tokens**! Matches Mikazuki's `1M` preset.
- **`gpt-oss-120b`** — a **131K** context.
- Classic roleplay models **`magnum`**, **`mythomax`**, **`weaver`**, and others — some paid (usually pricier, see the rule of thumb above).

Two important notes about the catalog:

- **Context = prompt + completion combined**, not each at maximum. Don't expect to stuff a 1M-token prompt *and* ask for a 1M-token output on a 1M model.
- This catalog is **alive** — models come and go. **Always use the 🔍 fetch models button** for the currently valid list; never trust a list from memory (including the one on this page).

---

## Privacy & Data

::: danger 🛡️ Don't turn on "Enable Anon. Logging" for the discount
Mancer's Dashboard has an **"Enable Anon. Logging"** option — an *opt-in* that grants a **25% token discount** on certain models. **BUT**: with this option on, your chats **may be used for model training, service improvement, or published datasets**. Its default state is **OFF**. If privacy matters to you — and for roleplay it almost always does — **leave this option off**. Don't trade your conversation content for a 25% discount.
:::

Since the default is off, daily roleplay without touching that option adds none of this risk. Check its state once in Mancer's Dashboard after signing up, so you're confident you really start from "off".

---

## Troubleshooting

::: details `CANT_AFFORD` error
Your credits are **empty**. Buy a new credit pack on the Dashboard, or temporarily use the free **`mytholite`** model to keep testing the connection (a negative balance still allows free-model use — see [Credits & Pricing](#credits-pricing)).
:::

::: details `PROMPT_TOO_LONG` error
Your conversation + context exceeds the model's context window. Shorten the conversation (trim old parts), lower `max_tokens` in [Basic Parameters](../byok/parameter-dasar), or move to a model with a bigger context. Remember: the context is **prompt + output combined**, so growing the output also eats prompt space.
:::

::: details `MODEL_OFFLINE` / `MODEL_UNAVAILABLE` error
The model you picked is **offline**. Pick another model (maybe just for a moment), then retry your favorite later. Mancer's catalog is alive and model status fluctuates.
:::

::: details `ACCOUNT_MUTEX` / `CONNECTION_LIMIT` error
A **previous request is still running** or you hit the **simultaneous connection limit**. Wait for the old request to finish — don't spam retries, that only grows the queue. In Mikazuki, this usually means you tapped send again before the answer finished arriving.
:::

::: details Truncated answers / stops mid-sentence
`max_tokens` in [Basic Parameters](../byok/parameter-dasar) is too small — the model gets cut before finishing. Raise it, but remember `max_tokens` is also carved out of the context window as *Reserved Output*; don't over-inflate it.
:::

::: details Billed even though the app was closed
Mancer's official rule: **requests that finish successfully are still billed** even if the client disconnected at the end — and **streaming stopped midway** is billed up to the stop point. Requests that **fail** or return **0 tokens** are auto-refunded instead. So if a charge appears after you closed the tab, that's normal behavior, not a leak.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Chutes](./chutes) — a similar cheap, uncensored provider for roleplay.
- [Featherless AI](./featherless) — a flat-rate subscription for thousands of open-weight models.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
