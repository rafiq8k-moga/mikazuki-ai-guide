---
title: NanoGPT (BYOK Provider)
---

# NanoGPT (Mode BYOK)

**NanoGPT** adalah "private pay-per-use AI" dengan **1.000+ model** dalam satu tempat — teks (ChatGPT, Claude, Gemini, GLM), gambar, video (184+), dan audio — semuanya dibayar lewat **satu saldo prepaid**. Yang membuatnya beda dari semua provider lain di panduan ini: NanoGPT sangat **ramah anonimitas** — harga dijual *list price* tanpa markup, dan API-nya bahkan bisa dipakai **tanpa membuat akun** (cukup deposit kecil). Tidak heran komunitas SillyTavern menyukainya: privasi ramah, pembayaran crypto mudah, dan akses langsung ke banyak model sekaligus. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Harga per model, daftar model, dan fitur NanoGPT cukup dinamis — **Private Mode & PII redaction** baru diluncurkan Mei 2026, dan katalognya terus bertambah. Halaman ini mengajarkan **cara** yang benar, bukan daftar angka. Cek halaman resmi [nano-gpt.com/api](https://nano-gpt.com/api) dan [get-started](https://nano-gpt.com/get-started) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Buka [nano-gpt.com/api](https://nano-gpt.com/api).
2. Klik **Create a key**.
3. Salin key yang ditampilkan — key ini nanti dikirim sebagai header `Authorization: Bearer` atau `x-api-key`.

::: tip 🔐 Ada token khusus "Management API"
NanoGPT menyediakan **Management API token yang terpisah** dari key biasa. Token ini **tidak bisa menjalankan model atau menghabiskan saldo** — fungsinya hanya untuk mengelola preset dan mengecek status langganan. Ini bonus keamanan yang bagus: kalau kamu butuh integrasi yang hanya membaca status, pakai token Management, bukan key utama.
:::

::: tip 🎛️ Batasi key ke mode "Subscription only"
Ada kualitas-hidup dari komunitas yang berguna: key bisa dibatasi ke mode **Subscription only** lewat ikon ⚙️ (gear) di halaman [nano-gpt.com/api](https://nano-gpt.com/api). Dengan mode ini, key hanya bisa memakai model-langganan — berguna kalau kamu ingin membatasi penyalahgunaan key.
:::

---

## Mengaktifkan NanoGPT di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk NanoGPT:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **OpenAI Compatible** (atau entri **NanoGPT**, bila ada di daftar provider).
3. Isi **Base URL**: `https://nano-gpt.com/api/v1`
4. Tempel API key yang barusan kamu buat.
5. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis dari key kamu.
6. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` dan `max_tokens` — lalu klik simpan.

API NanoGPT berformat *OpenAI-compatible*, sehingga jalur **OpenAI Compatible** bekerja penuh di Mikazuki.

::: warning ⚠️ Client error pada output reasoning / thinking
Kalau client-mu error saat menerima output *reasoning/thinking* dari model tertentu, ada jalan keluar berikut ini: gunakan endpoint legacy di `https://nano-gpt.com/api/v1legacy` sebagai Base URL — format output-nya lebih kompatibel untuk client yang lebih tua. Detail di bagian [Troubleshooting](#troubleshooting).
:::

---

## Bayar & Deposit

Sistem bayar NanoGPT adalah **prepaid murni**: kamu deposit dulu, lalu setiap request memotong saldo.

- **Deposit minimum sangat kecil**: **$0,10** via crypto, atau **$1** via kartu (Stripe / Apple Pay / Google Pay) untuk deposit pertama.
- **Tanpa fee deposit** — semua deposit masuk penuh ke saldo.
- **Saldo dalam USD**.
- **29 mata uang crypto** didukung, termasuk **Monero, BTC, Nano, USDC, USDT**.
- Deposit crypto mendapat **bonus 3%** — dan sekaligus jadi jalur pembayaran yang **paling privat** (tanpa identitas/akun).

Detail metode pembayaran ada di [FAQ pembayaran resmi NanoGPT](https://nano-gpt.com/faq/payment-methods-and-cryptocurrencies).

---

## Harga & Langganan Opsional

- Harga mengikuti **list price tanpa markup** — kamu membayar apa yang dari provider harganya, tanpa selisih.
- **Biaya exact dari setiap respons ditampilkan** di halaman [Usage](https://nano-gpt.com/api) — kamu bisa tahu persis berapa cent yang baru habis untuk request terakhir.
- **Subscription bersifat opsional**, bukan wajib: langganan bulanan (angkanya sekitar ±$12/bln — *ini per sumber pihak ketiga, cek situs resmi*) memberi akses ke model tertentu **tanpa bayar per token**.
- Model berlabel **beta/subscription** hanya untuk pelanggan langganan; key mode **"Subscription only"** membatasi key-mu hanya ke model-langganan.

::: warning ⚠️ Jangan kunci angka
Kami sengaja tidak mencantumkan tabel harga per model di halaman ini — dengan 1.000+ model, angkanya cepat basi. Tinjau katalog dan harga di [nano-gpt.com/api](https://nano-gpt.com/api) sebelum budgeting, dan monitor saldo-mu di halaman Usage.
:::

---

## Privasi & Data

Ini bagian yang membuat NanoGPT berbeda — dan menarik bagi pengguna *roleplay* yang privasi-conscious:

- **"History stays on your device"** — percakapan disimpan **lokal di perangkat secara default**, bukan di server. Tagline resminya: *"Privacy First. No accounts required."*
- **Private Mode & PII redaction** (diluncurkan Mei 2026) — lapisan privasi tambahan untuk menyamarkan data pribadi.
- **Batch API** tersedia untuk pemakaian massal.
- API-nya bisa diakses **dari Tor** menggunakan key biasa — tanpa perlakuan khusus apa pun.

::: tip 💡 Untuk pengguna privasi-conscious
Kalau kamu menganggap isi percakapan *roleplay*-mu sensitif, kombinasi di NanoGPT cukup langka: **tanpa akun** + **pembayaran crypto (Monero)** + **riwayat lokal di peramban** + **akses dari Tor**. Ini pengaturan privasi paling lengkap di antara semua provider di panduan ini.
:::

---

## Model & Katalog

Katalog model lengkap bisa dijelajahi di [halaman models NanoGPT](https://nano-gpt.com/models) — teks, gambar, video, dan audio. Format ID model umumnya **`vendor/model`**; contoh formatnya `openai/gpt-6.1-sol`.

Panduan ini fokus ke **chat completions** karena itulah yang dipakai Mikazuki — endpoint lain (image, video, audio, embeddings) ada, tapi di luar cakupan panduan ini.

Selalu gunakan tombol 🔍 **fetch models** Mikazuki untuk mengambil nama model yang valid: dengan 1.000+ model dan format `vendor/model`, ketik manual sangat mudah salah.

---

## Troubleshooting

::: details Muncul 402 / "live quote" tanpa key
Ini **fitur, bukan error**: NanoGPT punya mode *unauthenticated "live quote"* — request tanpa key bisa mengembalikan **402 berisi quote harga** yang bisa kamu bayar langsung dengan **Nano atau Base USDC tanpa perlu membuat akun**. Kalau kamu melihat 402 quote padahal belum memasang key, maksudnya NanoGPT sedang menawarkan harga persis untuk request tersebut. Untuk pemakaian di Mikazuki, tetap buat key normal agar alurnya sederhana.
:::

::: details Client error pada output thinking / reasoning
Beberapa model mengeluarkan *reasoning/thinking* yang format penulisannya bisa membuat client lebih tua padam. Solusinya: ganti **Base URL** ke endpoint legacy `https://nano-gpt.com/api/v1legacy` di pengaturan provider OpenAI Compatible-mu, lalu refetch models dan coba lagi.
:::

::: details Saldo tidak cukup / request gagal
Saldo prepaid-mu mungkin habis atau minimum deposit belum dilakukan. Cek saldo di halaman Usage [nano-gpt.com/api](https://nano-gpt.com/api), lalu isi ulang — depositnya kecil ($0,10 crypto / $1 kartu) dan tanpa fee, jadi top-up kecil untuk mencoba tidak terasa berat. Ingat juga bonus 3% untuk jalur crypto.
:::

::: details Jawaban terpotong
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil — model berhenti sebelum sempat menulis panjang. Naikkan nilainya, tapi ingat `max_tokens` ikut dipotong dari `context_window`, jadi jangan set berlebihan tanpa menaikkan `context_window` juga.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [DeepSeek](./deepseek) — panduan padanan untuk provider top-up.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
