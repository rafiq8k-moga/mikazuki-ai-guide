---
title: AI Horde (BYOK Provider)
---

# AI Horde (BYOK Mode)

**AI Horde** is different from every other provider in this guide — and the difference is fundamental: it's not an inference company, it's a **cluster of FREE volunteer GPUs**. Volunteers lend their computers (FOSS, operated by **Haidra**, a Luxembourg-based non-profit), so anyone can generate images and text **without paying a cent** — no credit card, no phone number. Instead of money, the network runs on a priority system built on **kudos**. The consequence: speed and model availability **depend on the supply of volunteer workers**, not on a service with an SLA — **queues can get long when the network is busy**. If you're new to BYOK, read [BYOK Introduction](../byok/) first.

::: warning ⚠️ Totally different from other providers
The AI Horde API is **NOT OpenAI-compatible** — it has its own format (async generate/pop/poll at `stablehorde.net/api`). That means: **don't use OpenAI Compatible mode in Mikazuki** — it won't work. Use the **Horde entry** if it exists in the provider list. Also, because the network is run by volunteers, answer speed **can vary wildly** — from very fast to long queues. This page teaches the correct **method** and realistic expectations.
:::

---

## Creating an API Key

1. Open [stablehorde.net/register](https://stablehorde.net/register).
2. Pick how to register: **OAuth** through a provider of your choice (e.g. Google/GitHub), **or** an **anonymous** account.
3. Once registered, you get an **API key** you can use in Mikazuki.

The Horde service only stores the **account ID from the OAuth provider** you choose — they state that ID is not used for anything beyond identifying your account on the network.

::: danger 🔒 Anonymous keys CANNOT be recovered
This is the **official** warning on the register page: if you pick an **anonymous** account (not linked to any identity), the key is randomized and **cannot be retrieved if lost**. Lost key = lost access, and **any kudos accumulated on that account are gone for good**. If you plan to collect kudos or use Horde long-term, pick the **OAuth sign-in** so the key can be managed again.
:::

::: tip 💡 You can even skip registration entirely
Even without creating an account, requests can be sent with the anonymous key `000000000000` (a guest account). But remember: guest accounts get the **lowest priority** — when the network is busy, your queue lands at the very back. For serious use, registering is still the better choice.
:::

---

## Enabling AI Horde in Mikazuki AI

The flow differs slightly from other providers because Horde's API has its own format:

1. Open **Settings → Engine** and pick **BYOK** mode.
2. In the provider list, **pick the Horde entry** (if it's available in your Mikazuki version).
3. Paste your Horde API key (or use the anonymous key `000000000000` if you haven't registered — with the lowest-priority consequence).
4. Pick a model from the list of models available on the network.
5. Start chatting — your request enters the network's **queue** and the answer is *yielded* to you once a worker finishes processing it.

::: danger 🚫 Don't use OpenAI Compatible mode
There is no magic Base URL that makes Horde run through the **OpenAI Compatible** provider — Horde's API doesn't recognize the OpenAI-style `$chat completions` format; it uses its own *async generate/pop/poll* flow at `stablehorde.net/api`. If you force it through OpenAI Compatible, requests will just fail. Always use the **Horde entry** from Mikazuki's provider list.
:::

---

## Priority & Kudos

On Horde, the "currency" is called **kudos** — and kudos decides **how fast your queue gets served**:

- **More kudos, higher priority** — your requests get picked sooner when the network is busy.
- **How to earn kudos**: run a **Horde Worker** — meaning you lend your GPU to serve other people's requests — or through other community contributions.
- **Kudos don't expire** and **can't be bought or sold** — the only way is to contribute.
- Kudos are also used on the *image generation* side (Stable Horde), so it's one ecosystem-wide priority network.

Compared to other paid providers: a 429 on Groq means waiting for a quota reset; a long queue on Horde means your **priority is low or the network is saturated** — and the only "upgrade" is **kudos**, not a credit card.

---

## Privacy & Data

This is the **most important** section on this page — read it slowly.

::: danger 🛡️ Workers can read your prompts: DON'T send personal info
The Horde network is run by **ordinary volunteers**, and each of your requests is processed on one of their computers. **By default**, input is sent anonymously and workers **cannot see** the content of the responses returned to you. **HOWEVER**: the worker code is *open source* — meaning **a malicious worker can modify the code** to **record prompts and *yield* responses** to itself, or deliberately produce bad replies. The consequence is one golden rule from the official docs: **NEVER send personal information** — real names, email, addresses, phone numbers, or any identifying details — while using Horde. Treat every prompt as readable by a stranger.

The **"Trusted Workers Only"** option only limits requests to workers with a track record — that **narrows the risk, it's not a guarantee**. Mikazuki records the **Worker ID and model** for each response; if you receive a suspicious response (e.g. an odd answer out of character for the model), keep that record and **report it to the Horde admins on their Discord**.
:::

With the rules above in place, fictional-character roleplay without personal data remains reasonably fine on Horde — just always remember: **your anonymity depends on what your prompts contain**. A quick comparison with its sibling: Featherless promises "prompts never stored" on their official servers; Horde instead **has no central server** that could promise that — the trust is spread across thousands of workers.

---

## Pricing

- **THERE IS NO pricing** — Horde is **always free**: no per-token, no subscriptions, no top-ups, no free vs paid tier. Every tier of it is free.
- Contributions aren't monetary — they take the form of **kudos** (see above) or donations to **Haidra**, the non-profit behind it.

::: warning ⚠️ If someone charges you for Horde — that's not Horde
The official warning on Horde's register page: **if you are directed to a site that collects payment or runs ads for Horde's services (e.g. from a third-party client), Horde itself remains always free and volunteer-run**. Horde doesn't sell anything. If a "client" charges you for Horde access, what you're paying is a third-party markup — not the Horde service.
:::

---

## Troubleshooting

::: details Long queues / extremely delayed responses
This is **normal behavior**, not a bug. Your priority is probably the lowest (you're on an anonymous/guest key) or the network is just busy. Long-term fix: **register an account** and collect kudos — the most effective way is **running a Horde Worker** (lending your GPU). Short-term fix: wait, or try at a quieter hour.
:::

::: details Model unavailable / waiting endlessly
Worker supply **changes constantly** — a model that existed this morning can be gone tonight, since no SLA guarantees even one model is always up. Pick **another available model**, or try again later. Don't rely on one specific model as your mainstay.
:::

::: details API error while using OpenAI Compatible mode
This isn't an error you can fix — **the Horde API simply is not OpenAI-compatible**. Delete your OpenAI Compatible configuration, then use the **Horde entry** from Mikazuki's provider list as described in the [Enabling](#enabling-ai-horde-in-mikazuki-ai) section.
:::

::: details Anonymous key lost — can't log in again
An anonymous account's key **cannot be recovered** — that's the official warning on the register page. Kudos accumulated on that account are also **gone for good**. Path forward: create an account via **OAuth sign-in** so the key can be managed again if lost, then paste the new key into Mikazuki.
:::

---

## Explore BYOK Further

- [BYOK Introduction](../byok/) — the basic concepts and how it works.
- [Installation & Activation](../byok/instalasi) — how to switch BYOK mode on.
- [Basic Parameters](../byok/parameter-dasar) — set `max_tokens`, `context_window`, and the creativity parameters.
- [Groq](./groq) — the matching guide for a free, rate-limited provider.
- [Featherless AI](./featherless) — a flat-rate subscription for thousands of open-weight models.
- [System AI](./systemai) — if you don't want to manage your own keys and API billing.
