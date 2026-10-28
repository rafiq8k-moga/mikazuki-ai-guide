---
title: Custom UJB
---

# Custom UJB

Custom UJB adalah teks instruksi tambahan milikmu yang ditambahkan **setelah** instruksi UJB default Mikazuki pada pesan terakhir. Fitur ini ada di `/settings/engine` - Opsi Dasar - tab **Prompts**, accordian "Custom UJB". Default-nya **mati**; nyalakan toggle dan textarea muncul.

## Cara Kerja

UJB default Mikazuki disusun otomatis dari matrix khusus (per pool dan varian prompt engine), lalu ditutup baris instruksi internal. Teks custom kamu **ditambahkan di blok yang sama, setelah semua itu** - bukan menimpa matrix. Jadi:

1. Isi UJB default (matrix pool + varian) tetap utuh
2. Baris instruksi internal tetap utuh
3. Teks kamu ditempel sebagai baris tambahan paling bawah di blok yang sama

Placeholder `{{user}}` dan `{{char}}` diganti otomatis jadi nama kamu dan nama karakter.

## Batas dan Pembersihan

- Maksimal **4000 karakter** setelah trim.
- Karakter kontrol tersembunyi dibuang (baris baru tetap lolos).
- Urutan tag penutup `< / s y s t e m >` disisipkan dihapus.

## Hanya untuk BYOK

Khusus mode BYOK. Pada mode system, field tidak dikirim dari UI, dibuang di server, dan dikosongkan di pekerja - tiga lapis gerbang.

## Berlaku untuk Semua Karakter

Custom UJB tidak membedakan karakter anak-anak atau dewasa. Aturan keselamatan anak-anak tidak bergantung pada UJB - mereka dijaga oleh blok kebijakan yang tertanam di system prompt dan tidak bisa dimatikan dari sisi klien maupun dari teks UJB custom.

::: info Kosong atau toggle mati berarti tidak ada perubahan
Kalau toggle mati atau teks kosong, tidak ada field yang dikirim dan prompt dirakit identik byte-per-byte dengan kondisi tanpa fitur ini.
:::

## Penyimpanan

Pengaturan tersimpan di perangkat kamu (localStorage dan IndexedDB), tidak di server.
