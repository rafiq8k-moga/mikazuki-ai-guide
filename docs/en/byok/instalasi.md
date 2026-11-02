---
title: Installation & Activation
---

# BYOK Installation & Activation

This page walks you through activating **BYOK (Bring Your Own Key)** mode in Mikazuki AI — from preparing an API key to your first conversation running through your own key.

## Requirements

Before you start, make sure you have:

- An **API key** from your chosen provider (e.g. Google Gemini, Anthropic Claude, DeepSeek, OpenRouter — see the full list in [BYOK Introduction](./)).
  - For public-endpoint providers (ArliAI, Mancer, AI Horde, NovelAI), no API key is required.
  - For **OpenAI Compatible**, you don't always need an official key — a *Base URL* from your custom server/endpoint is enough.
- Access to the Mikazuki AI app on your device.

::: tip 💡 Don't have an API key yet?
Providers like OpenRouter and Groq offer free keys/starting credits — check each provider's dashboard to create your first key.
:::

## Activation Steps

1. Open the **Settings → Engine** menu (`/settings/engine`).
2. Change **Mode** from `System` to `BYOK`.
3. Pick a **Provider**, paste your **API Key**, and search for/select a **Model** with the 🔍 button (*Fetch models*).
4. (Optional) For the `OpenAI Compatible`/`Chutes` providers, fill in the **Base URL**.
5. Done — all following chats will go through your own key.

## Privacy & Security Notes

> ⚠️ **Privacy note:** Your API key is **stored locally on your device** (IndexedDB + localStorage), not in the server's database. It only passes through the server as part of the request payload while you chat. Never share your key with anyone.

A few quick points:

- Keys are **never written to server logs** and are not stored in the database.
- The key is only sent while a conversation request is running.
- If a key gets published by accident, immediately *revoke* it from the provider's dashboard and create a new one.

## Tips: OpenAI Compatible for Local Servers

Running Ollama or llama.cpp on your own machine? Pick the **OpenAI Compatible** provider, then fill in the **Base URL** with a local endpoint that uses the OpenAI API layout, e.g. `http://localhost:11434` for Ollama. After that, press the 🔍 button (*Fetch models*) to load the model list from your local server.

::: tip 💡 Model not showing up in the list?
Check your API key and *Base URL*, then press the 🔍 button again. If the provider rejects the official endpoint or uses a special one, type the model name manually in the Model field. See also the [Quick FAQ](./#quick-faq) section on the BYOK Introduction page.
:::

## Next Steps

- Get to know the contents of the **"Basic Options"** panel on the [Basic Parameters](./parameter-dasar) page.
- Head back to [BYOK Introduction](./) for the provider list and the features that keep working.
