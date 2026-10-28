---
title: Custom System Prompt
---

# Custom System Prompt

Custom System Prompt adalah opsi yang memungkinkan kamu menempel **system prompt sendiri** untuk chat BYOK. Fitur ini ada di `/settings/engine` - Opsi Dasar - tab **Prompts**, di dalam accordian "Prompt Sistem Kustom", tepat di bawah accordian "Reasoning". Default-nya **mati**; nyalakan toggle dan textarea muncul.

## Cara Kerja: Digabung, Bukan Menimpa

Teks yang kamu tempel **tidak menimpa** prompt sistem default Mikazuki. Pekerja menyusun urutannya seperti ini:

1. Custom prompt milikmu (paling atas)
2. Prompt sistem default, termasuk semua aturan keselamatan aplikasi
3. Sisa prompt stack (kepribadian, memori, bond, guard bahasa, dan lainnya)

Urutan ini disengaja: model paling memperhatikan awal system message, jadi suara kamu tetap dominan, sementara aturan keamanan (kebijakan konten, child safety, guard ruang lingkup roleplay) tetap ikut terkirim. Prompt yang mencoba menyuruh model "melupakan aturan" tetap dibingkai oleh guard penutup yang selalu di posisi terakhir.

## Placeholder

Di dalam teks custom kamu bisa memakai dua placeholder yang diganti otomatis:

- `{{user}}` - nama kamu
- `{{char}}` - nama karakter

## Batas dan Pembersihan

- Maksimal **4000 karakter** setelah trim; lebihnya dipotong.
- Karakter kontrol tersembunyi dibuang (baris baru, carriage return, dan tab tetap lolos).
- Urutan `< / s y s t e m >` ala tag penutup disisipkan dihapus - mencegah prompt kamu "keluar" dari blok sistem lebih awal.

## Hanya untuk BYOK

Fitur ini khusus mode BYOK. Pada mode system (pool kurir Mikazuki), field tidak dikirim dari UI, dibuang di server, dan dijamin kosong di pekerja - tiga lapis gerbang. Prompt sistem pool tidak bisa diutak-atik dari sisi klien.

## Penyimpanan

Pengaturan tersimpan **di perangkat kamu** (localStorage dan IndexedDB), bukan di server. Ganti perangkat atau browser berarti mengatur ulang. Tidak ada data prompt yang dikirim ke server sebelum kamu benar-benar mengirim pesan.

::: info Kosong atau toggle mati berarti tidak ada perubahan
Kalau toggle mati, atau teks kosong, tidak ada field `custom_system_prompt` yang dikirim sama sekali. Prompt yang dirakit identik byte-per-byte dengan kondisi tanpa fitur ini.
:::

## FAQ

**Kenapa tidak bisa menimpa (replace) prompt default sepenuhnya?**
Prompt default membawa aturan keselamatan aplikasi. Menimpanya berarti membiarkan satu kolom teks menonaktifkan semua proteksi. Gabung memberi kamu suara dominan tanpa itu.

**Kenapa tidak ada escape hatch seperti `{{original}}` ala AGNai?**
Karena gabungan sudah selalu menyertakan prompt default di bawah teks kamu, kamu tidak butuh cara untuk merujuknya.
