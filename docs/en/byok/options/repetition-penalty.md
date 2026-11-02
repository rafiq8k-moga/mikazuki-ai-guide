---
title: Repetition Penalty
---

# Repetition Penalty (`repetition_penalty`)

A classic parameter from the *open-source* model world for penalizing tokens that have **already appeared** before, so the model doesn't repeat the same phrases over and over. In Mikazuki, `repetition_penalty` has a **default of 1.1** with a range of **0.0 to 2.0**; fill in `0` to disable the penalty.

::: info 📜 An open-source legacy parameter
Per the HuggingFace documentation, `repetition_penalty` is a built-in parameter of the HuggingFace *transformers* ecosystem, not an official parameter in the OpenAI chain. Some OpenAI-compatible providers support it, some ignore it outright. Values > 1 divide down the probability of tokens that have already appeared (an exponential penalty per the HF documentation). A value of 1.0 means no penalty at all.
:::

## The Problem It Solves

Repetition penalty was built for one classic enemy: the model that **"circles the track endlessly"**. You have surely seen it: the character says the exact same sentence three times in a row, the narration loops on its favorite phrase, or an answer ends up as a mantra with no end. This affliction most often hits open-weight models (Llama, Qwen, Mistral, and friends) in long sessions, because small models tend to be "confident" in token choices they have already used: the more often a token is used, the bigger its chance of being picked again — and the circle forms.

`repetition_penalty` cuts that circle: every token that has appeared before (including ones from the prompt or history, depending on the provider's implementation) loses part of its probability, pushing the model to take a new path.

## What the Numbers Mean

| Value | Effect |
| --- | --- |
| `0` | Penalty disabled (sent as 0 or not sent, depending on the backend). |
| `1.0` | No penalty; raw model behavior. |
| `1.1` | **Mikazuki's default.** The safe point commonly cited by the community (≈). |
| `1.3` to `1.5` | Aggressive; starts to risk text quality (≈, community numbers). |
| `> 1.5` | Almost guaranteed to damage the output. Avoid. |

## The Danger of Too-High Values

::: warning ⚠️ Don't just crank it up
Community experience on the HuggingFace forums (Oct 2026, per the HuggingFace documentation): a penalty that is too high **damages text quality** rather than improving it. The model starts **avoiding words that genuinely need to appear often** (character names, prepositions, pronouns like "you") simply because the word is already frequent in the text. The result: broken grammar, sentences that feel strange and forced, and important words rejected just because they happen to be used a lot. The community generally calls **1.1 the safe point**, and above roughly 1.3 to 1.5 quality starts to collapse (community numbers, ≈).
:::

The practical rule: raise it slowly, watch one or two replies, and don't jump from 1.1 to 1.5 in one breath.

## vs Frequency Penalty & Presence Penalty

Don't confuse it with the OpenAI-style pair: [`frequency_penalty`](./frequency-penalty) and `presence_penalty` are official OpenAI parameters that work on different logic (penalizing based on how many times and whether a word is new, not the HuggingFace-style exponential penalty). The summary:

- **`repetition_penalty`**: the HuggingFace-style penalty on tokens that have appeared; one switch for all repetition.
- **`frequency_penalty`**: the more often a word appears, the bigger its penalty (OpenAI style).
- **`presence_penalty`**: a one-off bonus/penalty for each new word that appears; pushes toward fresh topics.

All three suppress repetition, so **don't set them all high at once**, because the effects stack up and the output becomes dry or lopsided. Pick one to raise, and leave the rest at their defaults.

## Recommendation for Roleplay

The default of **1.1 is already good** for most characters. The small calibration goes like this:

- The character starts **recycling its favorite mantra** ("I swear I will protect you...") → raise it a little, e.g. `1.15`.
- The text starts **drying out, stiffening, or avoiding character names / important words** → lower it, e.g. `1.05`, or `0` to switch it off entirely.
- A small open-weight model stuck in deep repetition loops → try `1.2`, and stop there.
