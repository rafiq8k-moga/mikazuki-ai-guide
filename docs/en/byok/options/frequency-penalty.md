---
title: Frequency Penalty
---

# Frequency Penalty

`frequency_penalty` is a light repetition-control parameter in the Mikazuki BYOK panel. Its job is simple: push down the chance of the model repeating the same word or phrase over and over, so the answers feel more varied without changing the character's speaking style.

A value of `0` means disabled, and that is the default. For most conversations this default is enough, and you only need to touch it if the character starts looking like a broken record: the same phrase repeating in different paragraphs.

Some providers ignore this parameter without any notice. No error, no effect, the value goes unused. If raising it produces no change at all, your provider is probably one of the ones that ignores it.

Not every provider can accept negative values either, so in Mikazuki the 0.0 - 2.0 range already covers everything useful.

## Frequency-Based Operation

::: info 📊 The official OpenAI definition
"Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim."
:::

Meaning: the more often a token has already appeared in the text so far, the bigger its penalty. This parameter scales with frequency, not just present-or-absent.

For example, a word that has already been used four times will be pressed down far harder than a word that appeared only once. That is why this parameter is effective against sentences repeated verbatim: the more often the model repeats the same pattern, the stronger the push to get out of that pattern. This penalty that grows with frequency is also what sets it apart from a plain presence-based penalty.

Also worth knowing: the official range of this parameter in the OpenAI API is -2.0 to 2.0, and negative values actually *encourage* repetition. Negative values are very rarely useful, so in Mikazuki's UI the effective range is simply 0.0 to 2.0.

## Frequency vs Presence

In the OpenAI API world there are two similar-but-different penalty parameters:

- `presence_penalty` penalizes a token **once only** if it has appeared at all, then pushes the model toward new topics or vocabulary.
- `frequency_penalty` penalizes a token **every single time** based on how many times it has appeared, which is what fights sentences repeated verbatim.

In short: presence pushes for the new, frequency fights repetition. Both exist in the OpenAI API, but in Mikazuki this parameter is the one acting as the frequency-based repetition penalty: it helps stop the AI from recycling its favorite words or phrases in the middle of a long roleplay.

## Value Guide for Roleplay

| Value | Effect |
| --- | --- |
| 0 (default) | Disabled. Good for ordinary tasks or short answers. |
| 0.2 - 0.6 | The sweet spot for roleplay: suppresses repetition without damaging style. |
| 0.6 - 1.2 | Stronger pressure. Try it only if repetition still shows up. |
| Above 1.2 | Risky. Can scramble sentences. |

::: warning ⚠️ Don't go too high
Values above 1.2 are dangerous for roleplay, similar to an excessive `repetition_penalty`. Words that genuinely need high frequency (character names, the word "you", prepositions) get penalized too, and sentence structure starts to scramble. If answers suddenly feel off after raising this number, lower it back down.
:::

## Don't Run Two Penalties Together

::: tip 💡 Pick one first
`frequency_penalty` and `repetition_penalty` both fight repetition. Running them both at high values stacks the pressure and damages text quality. Start with one parameter at a small value. If that isn't enough, only then consider adding the other.
:::

Read the details of its behavior in [Repetition Penalty](./repetition-penalty).
