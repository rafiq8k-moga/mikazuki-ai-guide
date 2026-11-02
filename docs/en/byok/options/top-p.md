---
title: Top P
---

# Top P (`top_p`)

`top_p` controls **how wide the group of candidate words** is that the model may pick from when composing an answer. This is the technique called *nucleus sampling*: instead of choosing from every word there is, the model only considers the top candidates that cumulatively cover `top_p` of the probability mass. Mikazuki's default is **0.95**, with an accepted range of **0.0 to 1.0**.

This parameter is often considered `temperature`'s sibling because both shape the diversity of answers. The difference: `temperature` reshuffles the odds of all candidates, while `top_p` cuts the candidate list directly.

## How Nucleus Sampling Works

Every time the model is about to write one word, it actually attends an "auction" of candidates: all possible next words are sorted from most to least likely. `top_p` then draws a line on that list: **"take candidates from the top until their total probability reaches X%."**

For example with `top_p` 0.9: the model builds a sorted candidate list (word A 40%, word B 25%, word C 15%, etc.), then cuts the list exactly when the cumulative sum touches 90%. Only the words above that line join the roll; the rest are discarded without ever being considered.

::: info 💡 A quick analogy
Picture the candidate words sorted from most to least sensible. `top_p` draws a line: "take candidates until their total probability reaches X%." Lower the line, and only the most sensible words get through. Raise it, and the candidate group widens until words that are somewhat far from the context get picked too.
:::

## What the Numbers Mean

The smaller the value, the "safer" and more predictable the answer. The bigger it is, the wider the space of words that can appear.

| Value | Effect |
| --- | --- |
| `0.1` | Only candidates covering the top 10% of the probability mass are considered. Very focused, nearly deterministic, answers tend to be monotonous. |
| `0.5` | Half of the top probability mass. Sensible and stable answers, but low variety; surprising choices rarely appear. |
| `0.95` | Mikazuki's default. A light trim: only the *outlier* candidates (very small probability) are discarded, everything else stays alive. The balanced point for *roleplay* and chat. |
| `1.0` | No trimming at all. Every candidate joins the sampling, and the behavior is fully dictated by `temperature`. |

> In practice: below roughly 0.5, answers start feeling stiff and repetitive; above the default, the difference gets more subtle, because the discarded candidates are precisely the ones that almost never win the roll anyway.

Keep in mind: `top_p` is not a "wildness level" like `temperature`. A bump from 0.95 to 1.0 rarely changes anything you can feel, because what comes in through that extra percentage are candidates with a super small chance. The effect of `top_p` is felt most when you **lower** it far below the default.

Since `top_p` and `temperature` ride on the same track, the practical rule is this: leave `top_p` at 0.95, and treat this slider as "set and forget". The default 0.95 already works as a light safety net that discards outlier candidates without changing the flavor of the answers.

When is `top_p` worth touching? Only when you're experimenting with a very specific answer style: for example, you want super-consistent answers for sorting data (lower it to 0.1-0.3), or on the contrary you want to maximize sampling freedom by returning `temperature` to a low value while loosening `top_p`. Beyond that, nothing is lost if you never touch this slider.

## Temperature vs Top P

Here there is one rule worth memorizing:

::: tip 🎯 Change temperature OR top_p, not both
The official OpenAI documentation states: *"We generally recommend altering this or temperature but not both."* They work on the same track (controlling sampling randomness), so setting both at once makes their effects stack up and hard to predict. Most people set `temperature` and leave `top_p` at its default value. If you're comfortable with your `temperature` results, leave `top_p` as it is.
:::

If you do want to try `top_p` as a replacement for `temperature`, move one axis at a time: return `temperature` to its default, then play with `top_p`, and compare the results. Don't slide both sliders at once and then try to figure out which one had an effect.

## If the Slider Has No Impact

Some providers or proxy servers **silently ignore `top_p`**: the slider moves, the value gets sent, but the model's behavior doesn't change at all. This is not a Mikazuki bug — it's each endpoint's own policy. If adjusting the value has no noticeable effect, check your provider's documentation, or see the [**OpenAI Compatible**](/en/providers/openaicompat) page for notes on non-native endpoint behavior.

An extra note for *local LLM* community users: there, a `top_k` parameter often shows up, which trims by the **number** of candidates (e.g. the top 40 candidates) rather than by probability mass like `top_p`. Mikazuki doesn't provide `top_k`, so don't mix the two up.
