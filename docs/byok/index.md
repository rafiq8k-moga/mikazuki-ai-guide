---
title: Pengenalan BYOK
---

# Bring Your Own Key (BYOK)

**BYOK (Bring Your Own Key)** adalah mode *engine* di Mikazuki AI yang memungkinkan kamu memakai **kunci API (API key) milikmu sendiri** untuk menjalankan percakapan — tanpa bergantung pada kuota model *system* bawaan server. Kamu membawa model favoritmu, Mikazuki AI yang mengurus sisanya: penyusunan prompt, memori, ringkasan, dan personality karakter tetap bekerja seperti biasa.

> **Ringkasnya:** Mode System = AI-nya Mikazuki yang bayar servernya. Mode BYOK = AI-nya kamu yang bayar providernya sendiri.

---

## Kapan Memakai BYOK?

| Situasi | Rekomendasi |
| --- | --- |
| Kuota/kredit model system mu terbatas atau habis | ✅ BYOK |
| Ingin memakai model spesifik (mis. Gemini, Claude, DeepSeek, atau endpoint *OpenAI Compatible* sendiri) | ✅ BYOK |
| Ingin full kendali atas kreativitas (temperature, `top_p`, `max_tokens`, `context window`) | ✅ BYOK |
| Pengguna baru yang belum punya API key manapun | ❌ Pakai Mode System dulu |
| Ingin percakapan tanpa memikirkan apapun | ❌ Mode System |

---

## Provider yang Didukung

Mikazuki AI mendukung banyak provider langsung dari Go worker-nya:

**Provider native (implemented di worker):**

- Google Gemini
- Anthropic Claude
- DeepSeek
- Mistral AI
- OpenRouter
- Z.AI (Zhipu)
- Groq
- Featherless
- NanoGPT
- Venus
- Chutes

**Provider berbasis endpoint publik (tanpa API key):**

- ArliAI
- Mancer
- AI Horde
- NovelAI

**Provider berbasis endpoint kustom:**

- OpenAI Compatible — isi *Base URL* sendiri (cocok untuk server Lokal seperti Ollama / llama.cpp yang memakai layout API OpenAI, atau endpoint pihak ketiga apa pun)

---

## Cara Mengaktifkan

Aktivasi BYOK cukup cepat: kamu hanya perlu satu API key dari provider pilihanmu, lalu mengubah mode engine di halaman pengaturan. Panduan lengkap langkah demi langkah — termasuk cara mengisi *Base URL* untuk endpoint kustom dan catatan keamanan penyimpanan key — ada di halaman [Instalasi & Aktivasi](./instalasi).

> ⚠️ **Catatan Privasi:** API key-mu **disimpan lokal di perangkatmu** (IndexedDB + localStorage), bukan di database server. Ia hanya melewati server sebagai bagian payload request saat mengobrol. Jangan bagikan key-mu ke siapa pun.

Setelah BYOK aktif, panel **"Opsi Lanjutan"** memberimu kendali atas parameter seperti `max_tokens`, `context_window`, `temperature`, dan lainnya. Penjelasan tiap parameter — termasuk tabel parameter kreativitas dan Advanced Payload — dibahas di halaman [Parameter Dasar](./parameter-dasar).

---

## Apa Saja yang Tetap Sama di Mode BYOK?

BYOK hanya mengganti "otak" yang memproses jawaban. Seluruh fitur Mikazuki tetap berlaku:

- ✅ **Memori Chat & Global Memories (VIP)** — lengkap.
- ✅ **Ringkasan (Summary) / Re-Summary** — tetap berjalan.
- ✅ **Persona, System Notes, gaya bahasa karakter** — identik.
- ✅ **Bond, Memories, dan Hapus Lanjutan (Dynamic Delete)** — tetap jalan.
- ✅ Validasi & streaming layout (mengetik animasi) — sama.

---

## FAQ singkat

::: details Apakah chat BYOK masih masuk ke memori ringkasan yang sama?
Ya. Overflow riwayat lama tetap dikemas menjadi *Recap* dan *Memori Chat* di perangkatmu, sama seperti Mode System.
:::

::: details Apakah credits / kuota VIP saya dipakai di BYOK?
Tidak. Request BYOK berjalan dengan kredensialmu sendiri, sehingga kuota sistem tidak terbebani. Namun fitur **Global Memori (VIP)** tetap mengikuti status akunmu.
:::

::: details Key saya terekam di log?
Tidak. API key tidak pernah ditulis ke log server — ia hanya melewati payload request saat percakapan berlangsung, tidak disimpan di database.
:::

::: details Hum, model saya tidak tampil di daftar?
Periksa API key dan *Base URL* (untuk OpenAI Compatible), lalu tekan tombol 🔍 lagi. Jika provider menolak endpoint resmi atau memakai endpoint khusus, coba isi nama model secara manual pada kolom Model.
:::

---

## Selanjutnya

- Siapkan API key dan aktifkan BYOK lewat panduan [Instalasi & Aktivasi](./instalasi).
- Kenali parameter di panel Opsi Lanjutan lewat halaman [Parameter Dasar](./parameter-dasar).
- Pakai **preset Context Window** `1M` untuk percakapan super panjang dengan karakter yang konsisten memori — detail di [Parameter Dasar](./parameter-dasar).
- Kelola memori karakter bersama fitur **Hapus Lanjutan (Dynamic Delete)** di dalam aplikasi.
