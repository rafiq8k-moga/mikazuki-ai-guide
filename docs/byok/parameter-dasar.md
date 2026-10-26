---
title: Parameter Dasar
---

# Parameter Dasar di Panel BYOK

Setelah BYOK aktif, buka kartu **"Opsi Lanjutan"** di pengaturan engine. Kamu tidak harus mengerti semuanya - semua parameter punya nilai default yang berperilaku baik. Halaman ini peta ringkas; klik nama parameter untuk panduan lengkapnya.

| # | Parameter | Rentang | Default | One-liner |
| --- | --- | --- | --- | --- |
| 1 | [`stream`](./options/stream) | on/off | Aktif | Teks muncul mengalir, bukan menunggu jawaban utuh |
| 2 | [`max_tokens`](./options/max-tokens) | integer | 2048 | Batas panjang jawaban + jaminan ruang jawaban |
| 3 | [`context_window`](./options/context-window) | Auto-1M | Auto | Budget total riwayat yang bisa diingat karakter |
| 4 | [`temperature`](./options/temperature) | 0.0-2.0 | 0.85 | Makin tinggi makin liar/imajinatif, makin rendah makin stabil |
| 5 | [`top_p`](./options/top-p) | 0.0-1.0 | 0.95 | Alternatif "fokus" sampling dari sisi kandidat kata |
| 6 | [`repetition_penalty`](./options/repetition-penalty) | 0.0-2.0 | 1.1 | Menghukum pengulangan frasa yang sama |
| 7 | [`frequency_penalty`](./options/frequency-penalty) | 0.0-2.0 | 0 | Menghukum kata yang muncul terlalu sering |
| 8 | [`stop`](./options/stop-sequences) | maks 4 string | (kosong) | Mengakhiri respons saat teks tertentu muncul |

::: tip 💡 Mulai dari dua ini
Belum tahu mana yang penting? Pahami dulu [Max Tokens](./options/max-tokens) dan [Context Window](./options/context-window) - keduanya menentukan berapa banyak riwayat yang diingat karakter dan seberapa aman jawaban dari terpotong.
:::

## Dua parameter dengan peran khusus

### Max Tokens (`payload: max_tokens`) {#max-tokens}

Jumlah token maksimum yang boleh dihasilkan AI untuk satu jawaban (default 2048). Nilai ini punya **peran ganda**: dikirim ke provider sebagai batas panjang jawaban, dan dipotong dari Context Window sebagai *Reserved Output* agar jawaban tidak pernah terpotong di ujung window. Naikkan = jawaban bisa lebih panjang tetapi riwayat yang muat menyusut. Panduan penuh: [Max Tokens](./options/max-tokens).

### Context Window (`payload: context_window`) {#context-window}

*Budget* total satu request: system prompt + memori + riwayat + ruang jawaban; semuanya harus muat di angka ini. **Auto** (default) mendeteksi per model; override manual hingga **1.000.000 token** untuk model long-context. Window sesuai kapasitas asli model = karakter bisa mengingat percakapan jauh ke belakang. Panduan penuh: [Context Window](./options/context-window).

## Advanced Payload

Bagi yang ingin mendorong provider lebih jauh, panel **Advanced Payload** memungkinkan menambahkan field apa pun ke request (mis. `tool_choice`, `top_k`, atau parameter khusus provider). Field berikut sudah direservasi dan tak dapat dipakai ulang: `stream`, `max_tokens`, `context_window`, `temperature`, `top_p`, `repetition_penalty`, `presence_penalty`, `stop`.

::: warning ⚠️ Parameter diabaikan diam-diam
Tingkat dukungan antar provider berbeda. Parameter yang tidak didukung bisa diabaikan **tanpa error** - kalau slider tidak terasa efeknya, cek halaman panduan provider tersebut.
:::
