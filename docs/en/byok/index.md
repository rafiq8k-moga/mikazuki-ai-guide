---
title: BYOK Introduction
---

# Bring Your Own Key (BYOK)

**BYOK (Bring Your Own Key)** is an *engine* mode in Mikazuki AI that lets you use **your own API key** to run conversations — without depending on the *system* model quota that the server provides. You bring your favorite model, and Mikazuki AI handles the rest: prompt assembly, memories, summaries, and the character's personality all keep working as usual.

> **In short:** System mode = Mikazuki's AI, with the server paying for it. BYOK mode = your AI, with you paying your own provider.

---

## When to Use BYOK?

| Situation | Recommendation |
| --- | --- |
| Your system model's quota/credits are limited or used up | ✅ BYOK |
| You want to use a specific model (e.g. Gemini, Claude, DeepSeek, or your own *OpenAI Compatible* endpoint) | ✅ BYOK |
| You want full control over creativity (temperature, `top_p`, `max_tokens`, `context window`) | ✅ BYOK |
| A new user who doesn't have any API key yet | ❌ Use System mode first |
| You want to chat without thinking about anything | ❌ System mode |

---

## Supported Providers

Mikazuki AI supports many providers directly from its Go worker:

**Native providers (implemented in the worker):**

- Google Gemini
- Anthropic Claude
- DeepSeek
- Mistral AI
- OpenRouter
- Z.AI (Zhipu)
- Groq
- Featherless
- NanoGPT
- Venus
- Chutes

**Public-endpoint providers (no API key needed):**

- ArliAI
- Mancer
- AI Horde
- NovelAI

**Custom-endpoint providers:**

- OpenAI Compatible — fill in your own *Base URL* (works for local servers like Ollama / llama.cpp that use the OpenAI API layout, or any third-party endpoint)

---

## How to Activate

Activating BYOK is quick: you only need one API key from your chosen provider, then switch the engine mode on the settings page. The complete step-by-step guide — including how to fill in the *Base URL* for custom endpoints and notes on key storage — is on the [Installation & Activation](./instalasi) page.

> ⚠️ **Privacy note:** Your API key is **stored locally on your device** (IndexedDB + localStorage), not in the server's database. It only passes through the server as part of the request payload while you chat. Never share your key with anyone.

Once BYOK is active, the **"Basic Options"** panel gives you control over parameters such as `max_tokens`, `context_window`, `temperature`, and more. Each parameter — including the creativity parameter table and the Advanced Payload — is explained on the [Basic Parameters](./parameter-dasar) page.

---

## What Stays the Same in BYOK Mode?

BYOK only swaps the "brain" that produces the answers. Every Mikazuki feature still applies:

- ✅ **Chat Memories & Global Memories (VIP)** — fully available.
- ✅ **Summaries / Re-Summary** — keep running.
- ✅ **Persona, System Notes, the character's language style** — identical.
- ✅ **Bond, Memories, and Advanced Delete (Dynamic Delete)** — still work.
- ✅ Validation & streaming layout (the typing animation) — the same.

---

## Quick FAQ

::: details Do BYOK chats still go into the same summary memory?
Yes. Overflow from old history is still packed into a *Recap* and *Chat Memories* on your device, just like System mode.
:::

::: details Are my credits / VIP quota used in BYOK?
No. BYOK requests run with your own credentials, so the system quota is not consumed. However, the **Global Memories (VIP)** feature still follows your account status.
:::

::: details Is my key recorded in the logs?
No. The API key is never written to server logs — it only passes through the request payload while a conversation is running, and is never stored in the database.
:::

::: details Hmm, my model doesn't show up in the list?
Check your API key and *Base URL* (for OpenAI Compatible), then press the 🔍 button again. If the provider rejects the official endpoint or uses a special one, try typing the model name manually in the Model field.
:::

---

## Next Steps

- Get an API key ready and activate BYOK with the [Installation & Activation](./instalasi) guide.
- Get to know the parameters in the Basic Options panel on the [Basic Parameters](./parameter-dasar) page.
- Use the `1M` **Context Window** preset for super-long conversations with characters that stay consistent in memory — details in [Basic Parameters](./parameter-dasar).
- Manage character memories together with the **Advanced Delete (Dynamic Delete)** feature inside the app.
