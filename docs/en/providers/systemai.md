---
title: System AI (Built-in Mode)
---

# System AI (Built-in Mode)

**System AI** is Mikazuki AI's built-in *engine* mode — Mikazuki's own AI. You don't need an API key, there's no *Base URL* to fill, and there's nothing to configure at all. Open the app, send a message, and the server's built-in AI model responds right away.

> **The analogy:** System mode = riding a **taxi** (everything handled, just sit back). BYOK mode = **driving your own car** (you bring your own keys and steer the ride yourself). The BYOK guide lives at [BYOK Introduction](../byok/).

The engine mode can be switched anytime from the **/settings/engine** page — pick **System** or **BYOK**. While System mode is active, you're already using the server's own AI, at no cost and with zero setup.

---

## Your Two Tracks: Free vs VIP

Behind the scenes, System mode runs two different service levels. All you need to know is the capacity difference:

| Aspect | **Free** | **VIP** |
| --- | --- | --- |
| Account status | Regular user | VIP subscriber |
| **Context window** (character memory per request) | Standard — comfortable for daily chat | Far bigger — ideal for super-long roleplay |
| **Answer length** | Concise and efficient | Roomier |
| Response variety | Normal | Ideal for long roleplay and big groups |

::: tip The context window is the character's memory
The context window decides how much context (chat history, persona, memories) fits in a single request. The Free tier stays comfortable for daily conversations, but if you love super-long *roleplay* or big *group chats* with 255 characters, VIP context keeps the character from ever "forgetting".
:::

**When does upgrading to VIP make sense?**

- 📚 Your conversations regularly run into hundreds of messages and the character starts losing the thread → VIP context dissolves this problem.
- 👥 You run big *group chats* so the model must carry many personas at once.
- 💆 You want roomier quotas/limits without depending on the server's free quota.

::: details Where are the model name and API key?
That's the beauty of System mode: every model, endpoint, and API key **is a server-side secret**. You never manage them — there's no model dropdown, no key to fill in. The Mikazuki server picks and arranges the providers behind the scenes, so when the model is upgraded later, you enjoy it automatically.
:::

---

## What You Can Still Tune in System Mode

Even though generation parameters are locked by the server, your character-driven experience stays fully customizable:

### Prompt Engine: mikazuki vs halostory

In the **Prompt Engine** section of the same settings page, you can pick between two prompt engine styles:

| Option | Explanation |
| --- | --- |
| **mikazuki** *(default)* | The latest prompt style, calibrated specifically for Mikazuki AI — most optimal for casual Indonesian and the current response format. |
| **halostory** | A *legacy* parity mode from the old HaloStory era. Useful if you feel your character's responses feel "different" from the old version and want that classic flavor back. |

::: warning A note on halostory mode
`halostory` mode is kept purely for old-app *parity*. For new characters or new users, `mikazuki` remains the recommendation — that's the mode under active development.
:::

### Memory & character features — identical to BYOK

System mode only swaps the "brain" that processes answers; every Mikazuki feature is unchanged:

- ✅ **Chat Memories & Global Memories (VIP)** — still work. Per request, the system sends the **9 most recent memories** at most to keep responses focused and context-efficient.
- ✅ **Summary / Auto-Summarize** — conversation batch summaries are still injected (the latest summary batch per request).
- ✅ **Persona, System Notes, character language style** — identical.
- ✅ **Bond System** — bond XP and levels still grow.
- ✅ **Dynamic Delete (Hapus Lanjutan)** — memory curation stays available.

---

## The Contract & Policies of System Mode

**Why can't `temperature`, `max_tokens`, and the context window be tweaked?**

Generation parameters in System mode are fully tuned by the server — you can't change `temperature`, `top_p`, the output token cap, or the context window. This is a deliberate decision, not a clumsy restriction:

1. **Consistency** — the server has calibrated all of these values so the model produces stable roleplay responses that don't "drift" from the character's persona.
2. **Anti-abuse & fairness** — the free quota must stay enjoyable for everyone. Token limits prevent a handful of users from eating the free capacity with giant requests.
3. **Service stability** — the server applies internal *rate limits* and *throttling* so streaming stays healthy for everyone, not just the fastest clickers.

::: tip Need full control?
If you want advanced parameters — picking your own model, a free `temperature`, a custom context window — that's **BYOK**'s job. Bring your keys to the [BYOK Introduction](../byok/) and start from the [Installation & Activation](../byok/instalasi) page.
:::

---

## Quick FAQ

::: details Is System mode free?
Yes. The **Free** tier is available to every account at no cost, with applicable quotas and answer length limits. Upgrading to **VIP** significantly expands character memory (context window) and reply length, plus broader Global Memory features.
:::

::: details Are my System-mode chats stored on a server?
No. Just like BYOK, your chat history is stored **locally on your device** (IndexedDB). The server only processes requests while the conversation is happening and doesn't store your chat content in its database.
:::

::: details Why do answers sometimes feel cut off?
System mode caps output length per reply for quota fairness. If you need longer, more detailed replies, move the conversation to **BYOK**, where `max_tokens` is yours to set — or split the interaction into shorter messages.
:::

---

## What's Next

- Want the model and parameters your way? Step into [BYOK (Bring Your Own Key)](../byok/).
- Get to know the character memory architecture in the [Introduction](/en/introduction).
- Re-curate your character's memory via **Dynamic Delete (Hapus Lanjutan)** inside the app.
