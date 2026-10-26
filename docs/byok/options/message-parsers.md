---
title: Message Parsers
---

# Message Parsers (regex klien)

Message Parsers adalah daftar **regex milikmu sendiri** untuk mengubah atau membersihkan teks sebelum dikirim ke model: hapus pola yang mengganggu, replace placeholder, normalisasi format. Analog dengan fitur AgnAI/SillyTavern, diterapkan langsung di panel BYOK.

Pengaturan tiap parser:

- **Pola (regex)** - teks yang dicari, mis. `\[OOC:.*?]`
- **Pengganti** - teks pengganti; kosong = hapus; dukung grup `$1`
- **Cakupan** - pesan user (default), riwayat chat, persona, system note
- **Aktif** - toggle tanpa menghapus pengaturan

## Contoh yang Umum Dipakai

| Tujuan | Pola | Pengganti |
| --- | --- | --- |
| Buang OOC dari pesan | `\[OOC:.*?]` | (kosong) |
| Strip blok kode bekas | ` ```[\s\S]*?``` ` | (kosong) |
| Ratakan newline berlebih | `\n{3,}` | `\n\n` |
| Hapus tanda bintang markdown | `\*+` | (kosong) |

Untuk karakter khusus regex (`[ ( . * + ?`), beri backslash sebelum karakter itu.

## Yang Perlu Kamu Tahu

::: info Opsi klien, bukan parameter API
Parser jalan di perangkatmu sebelum request dibangun. Tidak ada field baru yang dikirim ke provider - request terlihat persis seperti biasa, hanya isinya sudah bersih.
:::

::: info Batas System Prompt
Parser bisa menyentuh pesan, persona, dan system note. **System prompt hasil perakitan aplikasi di server tidak ikut ditransform.**
:::

::: warning Regex longgar = teks berubah ke mana-mana
Pola yang terlalu umum (mis. `a` saja) akan mengubah semua kemunculannya di seluruh pesan. Uji dengan pesan terbatas dulu. Parser dengan regex tidak valid ditandai merah otomatis dan dilewati saat mengirim - percakapan tetap jalan, hanya parser itu yang off.
:::
