---
title: Reasoning
---

# Reasoning

Reasoning adalah opsi yang mengatur **seberapa lama model berpikir sebelum menjawab**. Fitur ini ada di `/settings/engine` - Opsi Dasar - tab **Prompts**, di dalam accordian "Reasoning". Matikan toggle atau pilih "Tidak ada", dan Mikazuki tidak mengirim key reasoning sama sekali ke provider; hidupkan, dan model menyisihkan sebagian token keluaran untuk proses berpikir yang muncul di chat sebagai blok collapsible.

## Cara Kerja

Ada dua mode di dalam accordian ini, dan mode Claude/Gemini vs provider lain dijalankan lewat jalur berbeda.

### Preset: low, medium, high

Pilih salah satu preset, dan Mikazuki mengirim level `reasoning_effort` ke worker. Untuk Claude dan Gemini, level itu dihitung menjadi budget token berpikir:

| Preset | Fraksi dari `max_tokens` | Jika dikali 4096 |
| --- | --- | --- |
| Low | 0.2 | ~819 → di-clamp jadi 1024 |
| Medium | 0.5 | ~2048 |
| High | 0.8 | ~3276 |

Hasil dikali di atas di-clamp ke minimum **1024 token di Claude** - jadi low dengan max_tokens kecil tetap memakan ~1024 token thinking, bukan cuma 819. Gemini mengirim fraksi apa adanya tanpa clamp ini. Ini jadi catatan penting untuk pemakaian hemat.

Jadi, preset mengenyahkan perhitungan manual, cukup pilih salah satu level yang disediakan.

::: info Kenapa muncul estimasi live
UI menampilkan "Estimasi thinking: ~N token (fraksi x max_tokens)" karena budget sebenarnya dihitung runtime oleh worker dari `max_tokens` yang aktif. Angkanya hanya estimasi - dan preset low di max_tokens kecil bisa berubah nilai di clamp minimum.
:::

### Custom: thinking_budget

Pilih custom dan kamu mengisi angka `thinking_budget` langsung (minimum 1024, kelipatan 16). Claude dan Gemini menerima angka ini apa adanya - kamu tahu persis berapa token yang disediakan untuk thinking.

::: tip Kapan pakai custom
Custom budget berguna kalau preset fraksi 0.2/0.5/0.8 terasa terlalu besar atau terlalu kecil untuk panjang respons-mu, atau kamu ingin thinking yang konsisten tanpa mengubah `max_tokens`.
:::

## Perilaku Antar Provider

| Provider | Bentuk yang dipakai |
| --- | --- |
| Claude, Gemini | Preset dikirim sebagai `reasoning_effort`, worker menghitungnya jadi thinking budget. Custom mengirim `thinking_budget` per angka yang kamu isi. |
| OpenAI-compatible (openaicompat + fixed endpoints) | **Selalu** hanya `reasoning_effort` string, apa pun yang kamu isi. `thinking_budget` tidak pernah dikirim - level custom disembunyikan. |

Payload final ke `/api/chat` berupa `payload.reasoning_effort` (string) atau `payload.thinking_budget` (integer, hanya custom Claude/Gemini); worker masing-masing memetakan ke request native provider.

## Level Extended (OpenAI-Style)

Provider OpenAI-style menerima level yang lebih lebat daripada tiga preset UI: `minimal`, `low`, `medium`, `high`, `xhigh`, `max`. Urutan dari paling hemat ke paling boros:

minimal - low - medium - high - xhigh - max

::: warning Model-dependent dan mahal
Level extended itu **model-dependent** - tiap model hanya menerima subset, dan level yang tidak didukung membuat request ditolak. Ingat juga thinking dihitung sebagai token keluaran: biaya bisa naik sampai ~5x dibanding low sebagai kasar (skala referensi GPT-6.1 Sol).
:::

Perlu tahu: ada juga string `none` yang valid di beberapa model untuk mematikan reasoning. Dari UI Mikazuki, memilih "Tidak ada" berarti **key reasoning tidak dikirim sama sekali** - bukan mengirim string `none`.

## Catatan Claude

::: info Interaksi dengan parameter lain
Saat thinking aktif di Claude, `temperature` dipaksa ke 1, `top_k` diabaikan, dan request `max_tokens` bertambah dijalankan sebagai **budget + max_tokens** (bukan saling menggantikan). Nilai manual yang sama di Advanced Options ditimpa oleh reasoning ini - jadi jangan bingung bila temperature-mu tiba-tiba 1.
:::

## Tips Singkat

- Mulai dari **medium** sebagai default; turun ke **low** kalau percakapan biasa-biasa saja.
- Naik ke **xhigh/max** hanya untuk tugas berat. Ingat biayanya bisa ~5x.
- Butuh presisi token thinking, bukan fraksi? Pakai **custom budget**.
- Kalau respons tak butuh reasoning (chat santai, output pendek), matikan toggle saja - paling hemat dibanding preset apa pun.

---

Lihat juga [Parameter Dasar](../parameter-dasar) untuk hubungan `max_tokens` dengan budget thinking.
