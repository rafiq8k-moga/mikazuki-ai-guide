---
title: Stop Sequences
---

# Stop Sequences (`payload: stop`)

Stop sequence adalah teks yang membuat respons AI **berhenti lebih awal**: begitu teks itu muncul di hasil, provider langsung menghentikan generasi pada titik itu. Di panel BYOK kamu bisa mengisi hingga **4 sequence** (batas resmi OpenAI), masing-masing berupa string apa pun.

Perilakunya (per dokumentasi resmi OpenAI):

- Generasi berhenti **sebelum** sequence - teks stop sendiri **tidak ikut muncul** di jawaban.
- Respons berakhir normal dengan alasan berhenti `stop`, bukan error.
- Beberapa model reasoning terbaru **tidak mendukung** parameter ini (provider akan menolak atau mengabaikannya).

## Contoh Penggunaan di Roleplay

- `###` - memotong footer/pembatas section yang model suka tambahkan.
- `\n\n{` - menghentikan jawaban sebelum model iseng menulis blok JSON bekas.
- `[OOC]` - menutup respons sebelum model keluar dari karakter.

## Yang TIDAK Otomatis di Mikazuki

::: info Beda dari AgnAI
AgnAI otomatis memasukkan nama-nama partisipan sebagai stop sequence. **Mikazuki tidak melakukannya** - daftar di sini 100% isi kamu sendiri. Kalau ingin memotong saat nama tertentu muncul di awal giliran, tambahkan sendiri, mis. `Raiden:`.
:::

## Perilaku Antar Provider

| Provider | Bentuk yang dipakai |
| --- | --- |
| OpenAI-compatible (umum) | `stop` di request body, verbatim |
| Claude | `stop_sequences`, ditambah stop bawaan agar model tidak berpura-pura jadi pengguna |
| Gemini | `stopSequences` |

Limit maksimum beda-beda antar provider (OpenAI 4, lainnya bisa lebih/sedikit) - bila provider menolak, kurangi jumlahnya.

## Bahaya: Truncation Diam-diam

::: warning Stop yang terlalu umum
Stop sequence yang secara **wajar** muncul di cerita akan memotong jawaban di tengah **tanpa error apa pun**. Contoh: memasukkan nama karakter padahal narasi memang sering menyebut nama itu - hasilnya jawaban terpotong di titik itu dan sulit dilacak penyebabnya. Pakai stop yang pendek dan unik (format, pembatas, token kontrol), bukan kata-kata biasa.
:::

## Tips Singkat

- Mulai kosong - default terbaik adalah tidak mengisi apa-apa.
- Sequence pendek + spesifik lebih aman daripada panjang.
- Multi-baris (newline) boleh - mis. `\n\nHuman:` pola klasik text-completion.
- Jawaban tiba-tiba terpotong tanpa alasan setelah kamu mengisi sequence? Inilah penyebab nomor satu - hapus satu per satu untuk menemukan pelakunya.
