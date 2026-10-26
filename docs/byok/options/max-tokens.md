---
title: Max Tokens
---

# Max Tokens

`max_tokens` mengatur batas maksimum token output untuk **satu jawaban**. Default di Mikazuki: **2048**, dan bisa diatur lewat panel BYOK di **Settings → Engine** (kartu Opsi Dasar) menggunakan preset chip atau input angka.

Satu token kira-kira setara 3/4 kata. Jadi ±100 token ≈ 75 kata - angka kasar, cukup untuk membayangkan skala, bukan konversi presisi.

## Dua Peran Sekaligus

Di Mikazuki, `max_tokens` tidak hanya "batas panjang jawaban". Ia memegang dua peran sekaligus:

1. **Dikirim ke provider sebagai `max_tokens`** - provider memakainya sebagai batas panjang jawaban.
2. **Dipotong dari Context Window sebagai *Reserved Output*** - angka ini "dicadangkan" dari budget konteks, sehingga jawaban selalu punya ruang jalan dan tidak pernah terpotong di ujung window.

```
Context Window (mis. 32K)
├── System prompt + memori
├── Riwayat chat
└── Reserved Output  <- max_tokens dipotong duluan dari sini
```

::: tip 💡 Konsekuensi praktis
Naikkan `max_tokens` → ruang untuk riwayat chat **menyusut**. Turunkan → riwayat lebih lega, tetapi jawaban bisa kepotong kalau AI hendak menjawab panjang. Tidak ada nilai yang benar untuk semua kasus - ini trade-off langsung antara panjang jawaban dan panjang ingatan.
:::

## Memilih Nilai

Rekomendasi praktis (rule of thumb, bukan aturan baku):

- **2048 (default)** - cukup untuk *roleplay* dan percakapan sehari-hari. Mulai dari sini.
- **4096 atau lebih** - untuk jawaban panjang, penulisan cerita, atau output yang memang disengaja panjang.
- **Jangan set ke nilai maksimal hanya karena bisa** - setiap kenaikan dikorbankan dari memori riwayat. Perbincangan panjang akan jadi cepat "pelupa" karena riwayat lebih awal terpangkas lebih agresif.

Ingat juga: nilai ini memotong budget context window yang sama, jadi harmonikan dengan pengaturan [Context Window](./context-window).

## Jawaban Kepotong?

Gejalanya: jawaban berhenti mendadak **di tengah kalimat**, tanpa kesan penutup. Ini terjadi ketika konteks penuh sebelum jawaban selesai - provider menghentikan respons dan melaporkan `finish_reason: length`.

Cara mengatasinya:

- **Naikkan `max_tokens`** - misal dari 2048 ke 4096 - supaya jawaban punya ruang lebih panjang. Ingat: ruang ini diambil dari budget riwayat.
- **Turunkan `max_tokens`** jika kebalikannya terjadi: jawaban selalu pendek-pendek wajar padahal kamu ingin konteks lebih dalam - riwayat jadi lebih lega.
- Cek juga `context_window` - jika window-nya kecil, menaikkan `max_tokens` saja kadang tidak membantu karena Reserved Output memakan bagian makin besar dari budget sempit.

::: details Catatan teknis: nama parameter di API OpenAI
Di API OpenAI modern, parameter ini mulai digantikan oleh `max_completion_tokens`. Di Mikazuki (dan banyak provider kompatibel), `.compat` `max_tokens` masih bisa diterima. Beberapa provider yang lebih baru menuntut nama baru - jika terjadi, cek dokumentasi provider terkait untuk penyesuaian.
:::
