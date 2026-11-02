---
title: Temperature
---

# Temperature

`temperature` is the parameter with the biggest influence on the "flavor" of the AI's answers. It ranges from **0.0 to 2.0** (2.0 is OpenAI's official maximum), and Mikazuki's default is **0.85**.

The official definition is simple: temperature controls **sampling randomness**. High values (around 0.8 and up) make the output more random and creative; low values (around 0.2 and below) make the output focused and deterministic — the model tends to pick the "safest" word over and over.

## How It Works

Before producing a single word, the model actually has a **list of candidate words**, each with its own probability. Temperature decides how bold the model gets about stepping away from the top candidates:

- **Low temperature** → the distribution is sharpened. Almost only the top candidates get picked. The result is consistent, dry, sometimes repetitive.
- **High temperature** → the distribution is flattened. "Wild" candidates with small probabilities get a real chance of being picked. The result is fresher, but less predictable.

Think of it like rolling a die: low temperature = a weighted die that almost always lands on the same number; high temperature = a die where every side is nearly equally likely.

::: info 🎲 A quick intuition
Temperature doesn't add knowledge or new ideas to the model. It only sets **how often the model picks the less common path** from the choices that already exist. Story quality is still decided by the prompt and the model itself.
:::

## Range Guide

There is no single magic number — the best value depends on the use case. The table below is assembled from the community guides and cheatsheets in circulation (values marked **≈** are unofficial recommendations, not official provider specs):

| Use case | Range | Notes |
| --- | --- | --- |
| Code & facts | 0.1-0.3 | Focused, consistent, minimal hallucination. |
| General writing | ≈0.7 | A balance between tidy and natural. |
| Creative writing | ≈0.8-1.2 | Room for unexpected wording and plot. |
| Character roleplay | ≈0.7-1.0 | Some communities go up to ≈1.5 for a "juicy" style, but garbled sentences become a risk. |
| Excessive adaptivity | >1.5 | Already too wild for most models; rarely useful. |

Mikazuki's default of **0.85** was chosen as a healthy compromise for roleplay: alive enough for dialogue that doesn't feel stiff, without wrecking narrative coherence.

::: tip ⚖️ Raise it gradually
If the answers feel boring, raise it by 0.1-0.2 in a single step, then test. Big jumps (e.g. from 0.7 to 1.4) make it hard to tell which change actually helped.
:::

## Temperature vs Top P

`top_p` regulates something similar through a different mechanism: cutting the candidate word list down to a certain cumulative probability group (default 0.95).

::: warning ⚠️ The golden rule from OpenAI
Change temperature **OR** top_p, not both at once. They work on the same sampling stage, so shifting both produces effects that are hard to predict and hard to debug. See [Top P](./top-p) for details.
:::

In practice: if you're comfortable with the default `top_p` of 0.95, treat temperature as your one and only creativity "knob".

## Too Low vs Too High

### Too low (e.g. below ≈0.4 for roleplay)

- Character dialogue feels **stiff and repetitive**: the same favorite phrases keep showing up.
- Narration circles through the same sentence patterns; scenes feel "on rails".

### Too high (e.g. above ≈1.3 for roleplay)

- Narration starts turning **into a mess**: scene logic jumps around, descriptions don't connect.
- Word salad appears everywhere; the conversation can break character.
- Character behavior goes **off track** with no story reason.

If both symptoms show up together, temperature isn't the only suspect — also check [Repetition Penalty](./repetition-penalty) and [Basic Parameters](../parameter-dasar).

## Provider Notes

Not every server treats temperature the same way. Some *OpenAI-compatible* backends **silently ignore temperature** or execute it differently from the specification — the **OpenAI Compatible** page covers this trap. If the slider feels like it "does nothing", check your provider's documentation before blaming the number.
