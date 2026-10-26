---
title: Parameter Dasar
---

# Parameter Dasar di Panel BYOK

Setelah BYOK aktif, buka kartu **"Opsi Lanjutan"** di pengaturan engine. Kamu tidak harus mengerti semuanya — semua parameter punya nilai default yang berperilaku baik. Tapi pahami dua yang paling penting: `max_tokens` dan `context_window`.

## Max Tokens (`payload: max_tokens`) {#max-tokens}

Jumlah token maksimum yang boleh dihasilkan AI untuk satu jawaban (default 2048). Nilai ini punya **peran ganda**:

1. **Dikirim ke provider sebagai `max_tokens`** — membatasi panjang jawaban.
2. **Dipotong dari Context Window sebagai *Reserved Output*** — menjamin jawaban selalu punya "ruang jalan" dan tidak pernah terpotong di akhir window.

Konsekuensinya:

- Angka lebih besar → jawaban bisa lebih panjang, tetapi riwayat chat yang bisa muat jadi **lebih sedikit**.
- Angka lebih kecil → jawaban pendek, tetapi memori riwayat makin lega.

## Context Window (`payload: context_window`) {#context-window}

*Budget* total satu request: system prompt + memori + riwayat + ruang jawaban; semuanya harus muat di angka ini.

- **0 (Auto)** — nilai default. Mikazuki mendeteksi otomatis per model (Gemini/Claude: 128K, DeepSeek: 64K, lainnya: 32K).
- Nilai lain — dipakai mentah, hingga **1.000.000 token** untuk model *long context*.
- Preset cepat tersedia sebagai chip: `Auto` `8K` `32K` `128K` `1M`.

::: tip 💡 Mengapa ini penting?
Context window kecil → riwayat chat terpangkas agresif → karakter "pelupa". Context window sesuai kapasitas asli model → karakter bisa mengingat percakapan jauh ke belakang. Jika memakai model long-context (mis. Gemini 1M), set `context_window` ke `1M`.
:::

## Parameter Kreativitas

| Parameter | Rentang | Efek |
| --- | --- | --- |
| `stream` | boolean | Mengirim teks berkarakter-per-karakter (*streaming*). Default aktif. |
| `max_tokens` | integer | Lihat penjelasan di atas. |
| `temperature` | 0.0–2.0 | Makin tinggi = jawaban makin liar/imajinatif. Makin rendah = makin kering, stabil. Default 0.85. |
| `top_p` | 0.0–1.0 | Alternatif pengendalian 'fokus' sampling. Default 0.95. |
| `repetition_penalty` | 0.0–2.0 | Menghukum pengulangan frasa yang sama. Nonaktif (0) atau 1.1 default. |
| `presence_penalty` | 0.0–2.0 | Mendorong topik / kata baru. Nonaktif (0) default. |

## Advanced Payload

Bagi yang ingin mendorong provider lebih jauh, panel **Advanced Payload** memungkinkan menambahkan field apa pun ke request (mis. `frequency_penalty`, `tool_choice`, atau parameter khusus provider). Field berikut sudah direservasi dan tak dapat dipakai ulang: `stream`, `max_tokens`, `context_window`, `temperature`, `top_p`, `repetition_penalty`, `presence_penalty`.

## Selanjutnya

- Belum mengaktifkan BYOK? Mulai dari [Instalasi & Aktivasi](./instalasi).
- Kembali ke [Pengenalan BYOK](./) untuk gambaran besar mode BYOK.
