---
title: Instalasi & Aktivasi
---

# Instalasi & Aktivasi BYOK

Halaman ini memandu kamu mengaktifkan mode **BYOK (Bring Your Own Key)** di Mikazuki AI — dari menyiapkan API key sampai percakapan pertama berjalan lewat key-mu sendiri.

## Persyaratan

Sebelum memulai, pastikan kamu sudah punya:

- **API key** dari provider pilihanmu (mis. Google Gemini, Anthropic Claude, DeepSeek, OpenRouter — lihat daftar lengkap di [Pengenalan BYOK](./)).
  - Untuk provider berbasis endpoint publik (ArliAI, Mancer, AI Horde, NovelAI), API key tidak diperlukan.
  - Untuk **OpenAI Compatible**, kamu tidak selalu butuh key resmi — cukup *Base URL* dari server/endpoint kustommu.
- Akses ke aplikasi Mikazuki AI di perangkatmu.

::: tip 💡 Belum punya API key?
Provider seperti OpenRouter dan Groq menyediakan key gratis/kredit awal — cek dashboard provider masing-masing untuk membuat key pertamamu.
:::

## Langkah Aktivasi

1. Buka menu **Pengaturan → Engine** (`/settings/engine`).
2. Ubah **Mode** dari `System` menjadi `BYOK`.
3. Pilih **Provider**, tempel **API Key**, dan cari/pilih **Model** lewat tombol 🔍 (*Fetch Models*).
4. (Opsional) Bagi provider `OpenAI Compatible`/`Chutes`, isi **Base URL**.
5. Selesai — seluruh chat berikutnya akan lewat key-mu.

## Catatan Privasi & Keamanan

> ⚠️ **Catatan Privasi:** API key-mu **disimpan lokal di perangkatmu** (IndexedDB + localStorage), bukan di database server. Ia hanya melewati server sebagai bagian payload request saat mengobrol. Jangan bagikan key-mu ke siapa pun.

Beberapa poin singkat:

- Key **tidak pernah ditulis ke log server** dan tidak disimpan di database.
- Key hanya dikirim saat request percakapan berlangsung.
- Jika key ter-publish tidak sengaja, segera *revoke* (cabut) key itu dari dashboard provider dan buat yang baru.

## Tips: OpenAI Compatible untuk Server Lokal

Memakai Ollama atau llama.cpp di mesin sendiri? Pilih provider **OpenAI Compatible**, lalu isi **Base URL** dengan endpoint lokal yang memakai layout API OpenAI, misalnya `http://localhost:11434` untuk Ollama. Setelah itu tekan tombol 🔍 (*Fetch Models*) untuk memuat daftar model dari server lokal-mu.

::: tip 💡 Model tidak tampil di daftar?
Periksa API key dan *Base URL*, lalu tekan tombol 🔍 lagi. Jika provider menolak endpoint resmi atau memakai endpoint khusus, isi nama model secara manual pada kolom Model. Lihat juga bagian [FAQ singkat](./#faq-singkat) di halaman Pengenalan BYOK.
:::

## Selanjutnya

- Kenali isi panel **"Opsi Dasar"** di halaman [Parameter Dasar](./parameter-dasar).
- Kembali ke [Pengenalan BYOK](./) untuk melihat daftar provider dan fitur yang tetap berjalan.
