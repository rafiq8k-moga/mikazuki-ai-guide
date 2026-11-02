---
title: OpenAI Compatible (Universal Mode)
---

# OpenAI Compatible (Universal Mode)

**OpenAI Compatible** is not one provider — it's Mikazuki AI's **universal gateway** for connecting **any endpoint compatible with the OpenAI API**. Its user base is broad: small providers without a built-in entry in the provider list, internal company endpoints, down to **local servers on your own machine** like Ollama or vLLM. Several providers in this guide even run through this mode — [Featherless](./featherless), [NanoGPT](./nanogpt), [Chutes](./chutes), [Arli AI](./arli), and [Mancer](./mancer). If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: info 📖 What does "OpenAI-compatible" mean?
Per a Restful API review (October 2026): "OpenAI-compatible" describes an HTTP API that **accepts requests and returns the same JSON** as the OpenAI API — primarily at the **POST /v1/chat/completions** endpoint. That means one client only needs to swap the **Base URL, API key, and model name** to switch servers. Important to understand: this compatibility is a **claim over a subset** of the API, not every OpenAI feature — and **there is no official standard** enforcing it; how faithfully a server mimics the OpenAI API is entirely each provider's decision.
:::

---

## How It Works, Briefly: Three Inputs

With OpenAI Compatible mode, you fill in **three things** and the rest behaves like a regular provider:

1. **Base URL** — the server address, e.g. `https://example.com/v1`. All requests are pointed here (chiefly `/chat/completions` and `/models`).
2. **API key** — sent as the `Authorization: Bearer` header. Local servers sometimes ignore the key, but the field still needs to be filled (see [Troubleshooting](#troubleshooting)).
3. **Model ID** — the model name, and **the format differs between servers**: some are plain (`model`), some use the `vendor/model` format. Use the 🔍 **fetch models** button — equivalent to `GET /v1/models` — to get the valid ID list from your server.

Once connected, you fill in [Basic Parameters](../byok/parameter-dasar) as usual: `temperature`, `max_tokens`, and — for BYOK — the **`max_tokens` field plays a dual role** as *Reserved Output*, plus **`context_window`** which can be overridden up to **1M tokens** if your server supports it.

---

## Filling It In Inside Mikazuki AI

Follow the standard BYOK flow from the [Installation & Activation](../byok/instalasi) guide. The short version for this mode:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. Among the providers, pick **OpenAI Compatible**.
3. Fill the **Base URL** with the endpoint from your provider's/server's documentation.
4. Fill the **API key** (if your server uses a key).
5. Click the 🔍 **fetch models** button — the model list is pulled straight from the server.
6. Pick a model, set up [Basic Parameters](../byok/parameter-dasar) — especially `context_window` — then click save.

::: tip 💡 fetch models doubles as a verification tool
The 🔍 **fetch models** button isn't just for filling in model names — it's also **proof that your Base URL + key are correct**. If the model list shows up, your connection is right; if it fails, the problem is almost always one of the two (see [Troubleshooting](#troubleshooting)).
:::

---

## The Most Common Pitfall: Base URL and `/v1`

This is the number-one source of errors in this mode — and the cause is almost always the **`/v1` path**:

- If the Base URL **already includes `/v1`** (e.g. `https://api.example.com/v1`), **don't add** `/v1/chat/completions` manually — the client appends its own paths behind the Base URL.
- Conversely, if the server **expects no `/v1`**, appending `/v1` at the end produces a **404**.
- A **trailing slash** can occasionally cause a *double-slash* in the final URL.

::: danger ⚠️ The safe rule for Base URLs
**Copy the Base URL exactly** from the provider's documentation — don't add or remove paths, don't guess — then **test with the 🔍 fetch models button**. If the fetch succeeds, your Base URL is right. If you get a 404, try the variant with/without `/v1` (watch the trailing slash too) until the fetch succeeds.
:::

---

## Parameter Compatibility: Not All Servers Are Equal

Because "OpenAI-compatible" is only a claim over a **subset** of the API, parameter support **differs between servers**. Some patterns that come up often (qualitative notes, not a locked table):

- **Parameters silently ignored without an error** — the most treacherous one. A server can return a **200 success** status while `response_format`, `seed`, or other parameters were never actually used — the result looks "fine" but behaves differently from what you expected.
- **Top P vs Temperature** — the general rule is to **never pair the two**. It's already discussed in [Basic Parameters](../byok/parameter-dasar).
- **Streaming** — occasionally has shape differences, e.g. a `usage` chunk at the end of the stream whose format varies between servers.
- **`n` (multi-choice)** — often unsupported.
- **Tool calling** — along with streaming, this is the feature with the **most frequently partial** support.

::: tip 💡 What this means for Mikazuki users
Mikazuki uses *chat completions* + streaming — the most widely supported combination. If answers feel off or truncated even though your setup is correct, suspect a parameter the server silently ignores, or a server context smaller than your setting (see [Troubleshooting](#troubleshooting)).
:::

---

## Featured Bonus: Local Servers on Your Own Machine

This is the edge no other provider can offer: OpenAI Compatible mode can connect to **models running on your own computer** — **Ollama** (default at `http://localhost:11434/v1/`), **vLLM**, llama.cpp, and others.

- ✅ **Free** — no per-token bills.
- ✅ **Totally private** — no data leaves your machine.
- ✅ **No internet needed** — it runs offline.
- ⚠️ **Hardware determines** which model can run — *rule of thumb*: the bigger the model, the more RAM/VRAM it needs. Check the Ollama/vLLM documentation for a match with your device.
- 🔑 **Keys are usually ignored by local servers** — you can type anything (say the text "ollama") in the API key field, since the server doesn't check it.

Once Ollama runs, fill the *Base URL*, press 🔍 **fetch models** to pull the models you've *pulled* locally, then use it like any regular provider.

---

## Security: Don't Paste Just Any Base URL

::: danger 🛡️ A free-form Base URL = free-form risk
OpenAI Compatible mode lets you enter **any Base URL you want** — and that cuts both ways. **Never paste a Base URL from an unknown source** (e.g. a "free" proxy shared around the internet): **your entire conversation plus your API key passes through that server**. The principle matches the reverse-proxy warnings in [Venus](./venus) and [Mancer](./mancer). Only use official Base URLs from provider documentation, or servers that are yours (local Ollama/vLLM).
:::

---

## Troubleshooting

::: details 404 while fetching models
Your Base URL is almost certainly wrong. This is the classic bug in this mode: try the variants **with and without `/v1`** at the end of the URL — following the format the provider's docs state — and watch for a **trailing slash** that can create a *double-slash*. The safe rule is always the same: copy it exactly from the provider's documentation, then test with the 🔍 fetch models button.
:::

::: details 401 — key rejected
The key was pasted wrong, cut off, or genuinely invalid. But there's a special case for **local servers**: some servers (e.g. Ollama) **ignore the key contents** but still **require the key field to be filled** — with the field empty, requests can be rejected. The fix: type anything, e.g. "ollama".
:::

::: details Model error / not found
Your model ID is malformed. Model name **formats differ between servers** — some plain, some `vendor/model` with exact casing and suffixes (compare Featherless' `HuggingFaceOrg/ModelName` format or Chutes' `org/Model`). Don't type it from memory — **always take it from the 🔍 fetch models result**.
:::

::: details Odd responses / truncated
Two big possibilities: **the server ignored parameters** (some servers silently drop `response_format`, `seed`, or others — status stays 200 but behavior differs), or **the server's context capacity is smaller than your setting**. Check the provider documentation, adjust `context_window` and `max_tokens` in [Basic Parameters](../byok/parameter-dasar), and shrink the conversation history when needed.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Featherless AI](./featherless) — a 40,000+ open-weight model catalog that runs on the OpenAI Compatible route.
- [NanoGPT](./nanogpt) — anonymous pay-per-use that runs on the OpenAI Compatible route.
- [Chutes](./chutes) — cheap censor-free inference from the open-source community.
- [Arli AI](./arli) — roleplay-focused models with a free tier.
- [Mancer](./mancer) — uncensored serverless inference.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
