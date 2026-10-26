---
title: Context Window
---

# Context Window

Opsi `context_window` ada di panel **BYOK**, bagian **Opsi Dasar** di pengaturan engine (*Settings → Engine*), lengkap dengan chip preset cepat: `Auto` `8K` `32K` `128K` `1M`. Nilai defaultnya **Auto (0)**.

Ini adalah *budget* total untuk **satu request** ke AI. Semua yang dikirim ke provider harus muat di angka ini:

1. System prompt karakter.
2. Memori dan lorebook.
3. Riwayat pesan chat.
4. Ruang jawaban, yaitu *Reserved Output* yang dipotong dari `max_tokens`.

Bila totalnya melebihi angka ini, Mikazuki memangkas bagian yang paling aman dipangkas, yaitu riwayat chat paling lama. Makin besar window, makin jauh karakter mengingat percakapan kamu.

**Prasyarat membaca halaman ini:** sudah mengaktifkan BYOK dan tahu letak kartu "Opsi Dasar" di panel [Parameter Dasar](../parameter-dasar).

## Apa yang Mengisi Window

| Komponen | Sumber | Catatan |
| --- | --- | --- |
| System prompt | Definisi karakter | Wajib ada di setiap request. |
| Memori & lorebook | Kartu ingatan, entri lore yang terpicu | Bisa membengkak kalau lore besar. |
| Riwayat pesan | Percakapan sebelumnya | Paling lapar memakan window. |
| Reserved Output | Dipotong dari `max_tokens` | Jaminan ruang jawaban, selalu terpakai. |

Riwayat pesan adalah pemakan terbesar, dan dialah pihak pertama yang dikorbankan saat window sempit. Gunanya window kecil itu terasa sebagai karakter yang cepat "pelupa", bukan sebagai error. Itulah sebabnya nilai `context_window` sangat menentukan kualitas *roleplay* panjang.

## Opsi Auto dan Preset

Panel menyediakan chip preset supaya tidak perlu mengetik angka mentah:

- **Auto (0)**, nilai default. Mikazuki mendeteksi kapasitas per model secara otomatis:
  - Gemini dan Claude: **128K**.
  - DeepSeek: **64K**.
  - Provider lainnya: **32K**.
- **8K / 32K / 128K / 1M** mengisi field dengan nilai tetap.

Kalau memilih Auto, kamu tidak perlu mengubah apa pun saat berganti model; angka menyesuaikan sendiri. Kalau mengetik nilai manual, nilainya dipakai **mentah** apa adanya, hingga maksimum **1.000.000 token** - ditujukan untuk model *long context* seperti varian Gemini 1M.

## Panduan Memilih Nilai

| Preset | Kapan dipakai |
| --- | --- |
| `Auto` | Default aman untuk semua orang. Pilihan bawaan. |
| `8K` | Model lama atau key sangat hemat kuota; riwayat pendek. |
| `32K` | Titik tengah yang aman untuk hampir semua model modern. |
| `128K` | Gemini dan Claude, yang memang kapasitasnya 128K. |
| `1M` | Hanya untuk model *long context* yang benar-benar mendukung 1 juta token. |

Sebelum override manual, **cek dahulu kapasitas asli model di dokumentasi provider**. Angka di chip adalah batas atas yang boleh Anda minta; bukan jaminan modelnya sanggup.

## Terlalu Besar vs Terlalu Kecil

::: warning ⚠️ Bahaya window terlalu besar
Menyetel `context_window` melebihi kapasitas asli model berujung dua cara buruk: provider menolak request dengan error **konteks terlampaui**, atau riwayat lama tetap dikirim padahal tidak muat sehingga memboroskan kuota, memperlambat respons, lalu tetap error. Nilai `1M` hanya untuk model yang benar-benar mendukungnya.
:::

::: tip 💡 Tanda window terlalu kecil
Tidak ada error - justru itu bahayanya. Gejalanya halus: karakter mulai lupa nama kamu, mengulang pertanyaan yang sudah dijawab, atau kehilangan alur cerita dari belasan pesan sebelumnya. Itu tanda riwayat terpangkas terlalu agresif. Naikkan window ke preset model yang sesuai.
:::

## Hubungannya dengan Max Tokens

Hubungan keduanya sederhana:

```
ruang riwayat = context_window - max_tokens (Reserved Output)
```

Naikkan `max_tokens` agar jawaban lebih panjang, dan ruang untuk riwayat otomatis menyusut. Turunkan, dan memori chat melar, tetapi jawaban jadi pendek. Tidak ada nilai gratis; keduanya berebut window yang sama. Atur berpasangan, jangan sendiri-sendiri.

Baca detail `max_tokens` di [Max Tokens](./max-tokens).
