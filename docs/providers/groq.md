---
title: Groq (BYOK Provider)
---

# Groq (Mode BYOK)

**Groq** adalah penyedia inference yang terkenal berkat hardware **LPU**-nya — keunggulan utamanya bukan kualitas model, tapi **kecepatan**: token mengalir puluhan kali lebih cepat dari rata-rata penyedia lain, sehingga jawaban terasa mengalir hampir seketika. Untuk chat dan *roleplay* yang responsif, ini pengalaman yang sulit ditandingi. Groq menjalankan model *open-weight* pilihan orang lain (Llama, GPT-OSS, Qwen, Whisper) — jadi kamu tidak membayar lisensi model, melainkan se**wa** mesin tercepatnya. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Daftar model, angka rate limit, dan harga Groq berubah cukup sering — dan model berlabel *Preview* bisa **dihentikan mendadak**. Halaman ini mengajarkan **cara** yang benar, bukan daftar angka. Cek halaman resmi [rate limits Groq](https://console.groq.com/docs/rate-limits) dan [pricing Groq](https://groq.com/pricing/) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Daftar di [console.groq.com](https://console.groq.com) dengan email atau Google.
2. Buka menu **API Keys**.
3. Klik **Create API Key**, beri nama, lalu salin key yang ditampilkan.

::: danger 🔒 Key only ditampilkan SEKALI
Seperti Gemini dan Claude, key Groq hanya ditampilkan **satu kali** saat pembuatan. Salin langsung ke tempat aman (password manager) sebelum menutup dialog — kalau hilang, satu-satunya jalan adalah **membuat key baru**. Jangan pernah menempelkan key ke chat, forum, atau screenshot.
:::

---

## Mengaktifkan Groq di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Groq:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **Groq**.
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis dari key kamu.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` dan `max_tokens` — lalu klik simpan.

Worker Mikazuki memakai **provider native Groq** dengan **endpoint tetap (fixed)**, jadi tidak ada kolom *Base URL* yang perlu kamu isi. Sebagai referensi, API Groq berformat *OpenAI-compatible* di `https://api.groq.com/openai/v1` — tapi tetap pilih provider **Groq** di Mikazuki, bukan jalur *OpenAI Compatible* manual.

::: tip Sudah baik dari sananya
Default **temperature 0.85** Mikazuki sudah dipetakan dengan baik untuk roleplay; kamu tidak perlu mengubahnya kecuali memang ingin gaya jawaban yang sangat berbeda.
:::

Kecepatan streaming Groq biasanya langsung terasa di pesan pertama — kalau kamu terbiasa menunggu token muncul pelan di provider lain, ini bagian yang paling memuaskan.

---

## Free Tier & Harga

Groq punya model gratis yang berbeda dari kebanyakan provider lain:

- **Benar-benar gratis, tanpa kartu kredit** — tidak ada sistem kredit, tidak ada saldo top-up, tidak ada token per-percobaan.
- **Tidak ada billing per-token di free tier**: semua model bisa diakses, pembatasnya **hanya rate limit** (lihat bagian berikutnya).
- Ini berbeda dari DeepSeek (model top-up balance) atau Mistral (experiment plan berbatas waktu) — di Groq kamu bisa langsung chat tanpa pernah mengisi apa pun.

::: warning ⚠️ Gratis bukan untuk produksi
Free tier Groq dirancang untuk **prototyping dan pemakaian pribadi** — di situlah tempatnya untuk Mikazuki. Untuk beban produksi (aplikasi publik, banyak pengguna), anggap ini bukan fondasi yang layak: limitnya ketat dan bisa habis dalam hitungan menit pemakaian intensif.
:::

Kalau suatu saat butuh limit lebih besar: tier berbayar mulai **Developer**, dengan harga per juta token mulai dari beberapa sen dolar untuk model termurah. Jangan kunci angka — cek [pricing resmi Groq](https://groq.com/pricing/) untuk tarif terkini.

---

## Rate Limit

Rate limit Groq punya bentuk yang khas — penting dipahami sebelum kamu kaget kena 429:

- **Diukur per model**: setiap model punya angka sendiri, bukan satu kuota gabungan.
- **Volameter metrik: RPM** (request per menit), **RPD** (request per hari), **TPM** (token per menit), **TPD** (token per hari) — untuk meta audio: **ASH** (audio seconds per hour) dan **ASD** (audio seconds per day).
- **Berlaku di level Organization**: menambah key baru **tidak** menaikkan limit — semua key di organisasi yang sama berbagi kuota.
- **Cached tokens tidak dihitung** ke rate limit — token yang dibaca dari cache tidak memakan TPM/TPD-mu.
- Respons **429** menyertakan header `retry-after` (detik) serta header `x-ratelimit-*` — informasi kapan limit ter-reset tersedia langsung di respons.

**Contoh dari tabel resmi** (angka bisa berubah — ini hanya snapshot): `openai/gpt-oss-120b` = 30 RPM, 1.000 RPD, 8K TPM, 200K TPD.

::: warning ⚠️ Sumber pihak ketiga saling bertabrakan
Soal **kuota harian agregat**, sumber komunitas berbeda-beda — ada yang menulis sekitar 14.400 RPD, ada yang sekitar 1.000 RPD. Kami sengaja **tidak** mencantumkan angka agregat di sini; satu-satunya cara melihat limit pasti yang berlaku untukmu adalah **console Groq → Settings (Limit)**.
:::

---

## Tier: Free, Developer, Enterprise

- **Free** — tanpa kartu kredit, rate limit ketat per model, cukup untuk mencoba dan chat pribadi.
- **Developer** — upgrade dengan menambahkan kartu (tanpa minimum spend). Rate limit naik sekitar **~10x lipat** dan tarif per token berkurang sekitar **~25%** *(angka ini per sumber pihak ketiga — verifikasi di console Groq sebelum mengandalkannya)*.
- **Enterprise** — untuk kebutuhan custom dan skala besar; bukan target pengguna Mikazuki pribadi.

---

## Model & Peringatan Preview

Model di Groq semuanya **open-weight** — keluarga yang kemungkinan besar kamu temui di daftar fetch models:

- **GPT-OSS** — `gpt-oss-...`, flagship open-weight OpenAI di Groq.
- **Llama** — `llama-...`, pilihan klasik Meta.
- **Qwen** — `qwen...`, alternatif open-weight dari Alibaba.
- **Whisper** — model audio untuk transkripsi.

Ambil nama model **persis dari daftar fetch models Mikazuki** — ketik manual mudah salah ejaan atau salah suffix versi.

::: danger ⚠️ Model Preview bisa hilang mendadak
Groq secara resmi menyatakan model berlabel **Preview** bisa **dihentikan kapan saja** di akhir hari. Jangan kaget kalau model favoritmu tiba-tiba menghilang dari daftar — ini perilaku yang diumumkan sendiri oleh Groq, bukan bug Mikazuki. Solusinya: refetch models, lalu pindah ke model tetangga yang tersedia.
:::

---

## Troubleshooting

::: details Error 429 begitu cepat
Rate limit free tier Groq memang **ketat dan per model** — 429 muncul paling cepat di sini dibanding provider lain. Cek header `retry-after` di respons untuk tahu berapa lama menunggu, kurangi panjang percakapan (*prune* konteks lama agar TPM/TPD tidak cepat habis), atau sisipkan tier **Developer** kalau pemakaianmu memang intensif.
:::

::: details Error 404 / invalid model
Dua kemungkinan: nama model salah eja, **atau** model *Preview*-nya sudah dinonaktifkan Groq (lihat peringatan di atas). Langkah pertama selalu: klik 🔍 **fetch models** ulang di Mikazuki dan pakai nama dari daftar terbaru — jangan berharap nama lama masih hidup.
:::

::: details Jawaban terpotong
Angka `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil — model berhenti sebelum sempat menulis panjang. Naikkan nilainya, tapi ingat `max_tokens` ikut dipotong dari `context_window`, jadi jangan set berlebihan tanpa menaikkan `context_window` juga.
:::

::: details Error 401 / key invalid
Key Groq **hanya ditampilkan sekali** saat pembuatan — kalau kamu tidak yakin sudah menyimpannya dengan benar, buat **key baru** dari menu **API Keys** di [console.groq.com](https://console.groq.com) dan tempel ulang di Settings Mikazuki. Pastikan juga tidak ada spasi yang ikut tersalin.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [DeepSeek](./deepseek) — panduan padanan untuk provider top-up.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
