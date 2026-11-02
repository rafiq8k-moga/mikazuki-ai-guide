---
title: Custom UJB
---

# Custom UJB

Custom UJB is your own extra instruction text appended **after** Mikazuki's default UJB instruction on the last message — and the default UJB is the app-level safety prompt that always stays active. The feature lives in `/settings/engine` — Basic Options — the **Prompts** tab, in the "Custom UJB" accordion. **Off by default**; flip the toggle and a textarea appears.

## How It Works

Mikazuki's default UJB is assembled automatically from a dedicated matrix (per pool and prompt-engine variant), then closed with an internal instruction line. Your custom text is **appended to the same block, after all of that** — not overwriting the matrix. So:

1. The default UJB content (the pool matrix + variant) stays intact
2. The internal instruction line stays intact
3. Your text is pasted as the bottommost extra line in the same block

The `{{user}}` and `{{char}}` placeholders are replaced automatically with your name and the character's name.

## Limits and Sanitization

- Maximum **4000 characters** after trim.
- Hidden control characters are stripped (newlines still get through).
- Inserted `< / s y s t e m >` closing-tag sequences are removed.

## BYOK Only

BYOK mode only. In system mode, the field is not sent from the UI, is discarded on the server, and is cleared at the worker — a three-layer gate.

## Applies to All Characters

Custom UJB does not distinguish children's or adult characters. Children's safety does not depend on the UJB — it is guarded by a policy block embedded in the system prompt that cannot be switched off from the client side or from any custom UJB text.

::: info Empty or toggled off means no change
If the toggle is off or the text is empty, no field is sent and the prompt is assembled byte-for-byte identically to the state without this feature.
:::

## Storage

Settings are stored on your device (localStorage and IndexedDB), not on the server.
