---
title: Bot Response Prefilling
---

# Bot Response Prefilling

Bot Response Prefilling mengganti **awalan internal respons bot** dengan teks milikmu. Fitur ini ada di `/settings/engine` - Opsi Dasar - tab **Prompts**, accordian "Bot Response Prefilling". Default-nya **mati**.

## Cara Kerja

Saat ini setiap respons bot dibuka dengan awalan internal hard-coded: model "berpikir singkat" bahwa dirinya akan menghasilkan respons roleplay yang imersif, lalu melanjutkan menulis. Dengan fitur ini:

- **Toggle mati atau teks kosong** - awalan internal default dipakai verbatim, byte-per-byte seperti biasa.
- **Toggle hidup dan teks terisi** - awalan internal default **diganti penuh** dengan teks kamu. Model dipaksa melanjutkan dari teks tersebut, sehingga kamu bisa mengunci format pembuka respons (misalnya memulai dengan aksi dulu, atau format dialog tertentu).

Ini bekerja sebagai bagian dari blok instruksi pada pesan user terakhir - bukan pesan assistant terpisah - sehingga aman untuk semua provider tanpa penyesuaian khusus (Claude thinking, Gemini, DeepSeek, dan provider OpenAI-compatible semuanya dijalankan lewat satu jalur yang sama).

Placeholder `{{char}}` dan `{{user}}` diganti otomatis.

## Batas

- Maksimal **2000 karakter** setelah trim.
- Karakter kontrol tersembunyi dibuang; tag penutup sisipan dihapus.
- Khusus mode BYOK; tiga lapis gerbang yang sama dengan Custom System Prompt dan Custom UJB.

## Berlaku untuk Semua Karakter

Prefill tidak membedakan karakter anak-anak atau dewasa. Aturan keselamatan anak-anak tidak hidup di awalan internal - mereka hidup di blok kebijakan hard-coded di system prompt yang tidak bisa diubah oleh prefill maupun teks custom manapun. Meski begitu gunakan fitur ini dengan bertanggung jawab.

::: info Kosong atau toggle mati berarti tidak ada perubahan
Awalan internal default dipakai apa adanya; tidak ada field yang dikirim.
:::
