---
title: Chutes (BYOK Provider)
---

# Chutes (Mode BYOK)

**Chutes** bukan lab model biasa, melainkan **platform inference serverless terdesentralisasi** untuk model *open-source*, dijalankan di **Bittensor subnet 64 (SN64)** — artinya operator GPU independen berkompetisi saling melayani workload-mu. Hasilnya: harga per token yang sangat murah **tanpa markup** dan **tanpa langganan wajib**. Tidak kebetulan kalau platform ini banyak dipakai komunitas SillyTavern/JanitorAI untuk *roleplay* murah. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Katalog model, harga, dan aturan langganan Chutes berubah cukup sering. Halaman ini mengajarkan **cara** yang benar — angka yang disebut adalah contoh kisaran atau *rule of thumb*, bukan angka yang dikunci. Selalu cek halaman resmi [harga Chutes](https://chutes.ai/pricing) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Daftar akun di [chutes.ai/auth/signup](https://chutes.ai/auth/signup).
2. Buka halaman [chutes.ai/app/settings/api-keys](https://chutes.ai/app/settings/api-keys).
3. Klik tombol pembuatan key, beri nama, lalu salin key yang ditampilkan.
4. Key-nya berprefix **`cpk_`** — dikirim sebagai *Bearer token* di header `Authorization`.

::: danger 🔒 Key hanya ditampilkan sekali
Salin key langsung ke tempat aman (password manager) **sebelum menutup halaman** — setelah itu key **tidak bisa dilihat ulang lagi**. Kalau hilang, satu-satunya jalan adalah membuat key baru. Jangan pernah menempelkan key ke chat, forum, atau screenshot; key yang bocor = saldo-mu bisa dipakai orang lain.
:::

---

## Mengaktifkan Chutes di Mikazuki AI

API Chutes berformat **OpenAI-compatible**, jadi di Mikazuki kamu memakai jalur **OpenAI Compatible**:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **OpenAI Compatible** (atau entri **Chutes** bila tersedia di daftarmu).
3. Isi **Base URL**: `https://llm.chutes.ai/v1`
4. Tempel API key `cpk_` yang barusan kamu buat.
5. Klik tombol 🔍 **fetch models** — daftar model akan ditarik otomatis dari [daftar model resmi](https://llm.chutes.ai/v1/models).
6. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — lalu klik simpan.

::: tip Sudah baik dari sananya
Default **temperature 0.85** Mikazuki sudah dipetakan dengan baik untuk roleplay; kamu tidak perlu mengubahnya kecuali memang ingin gaya jawaban yang sangat berbeda.
:::

::: tip 💡 Sudah pernah pakai JanitorAI?
Chutes punya panduan resmi **integrasi JanitorAI** yang memakai proxy URL `https://llm.chutes.ai/v1/chat/completions` plus key `cpk_`. Pola konfigurasinya sama persis dengan BYOK di aplikasi lain — di Mikazuki kamu tinggal pakai **Base URL dan key yang sama** seperti di atas.
:::

---

## Model & Katalog

Chutes menyajikan katalog *open-source* yang besar dan sering bertambah — di antaranya keluarga **DeepSeek** (V3.2, V4-Flash), **Kimi K2.5/K2.6**, **GLM-5/5.1**, **Qwen 3.x**, **MiniMax**, **Gemma**, dan **Mistral**.

- **Format nama model**: `org/Model`, contohnya `deepseek-ai/DeepSeek-V4-Flash-0731-TEE`. Selalu ambil nama **persis dari hasil fetch models** — jangan ketik manual dari ingatan.
- **Suffix `-TEE`**: banyak model *featured* berakhiran ini, artinya model dijalankan di **Trusted Execution Environment** (*confidential computing*) — isi percakapanmu diproses di lingkungan terenkripsi yang bahkan tidak bisa dibaca operator GPU-nya. Untuk roleplay pribadi, varian `-TEE` biasanya pilihan yang bijak.
- **Context window bervariasi per model** — ada yang 41K sampai 262K — cek kartu model di katalog sebelum menyetel `context_window`.

---

## Free Tier, Harga & Langganan

Aturan main Chutes sederhana: **pay-per-token murni, tanpa langganan wajib, tanpa markup** — mereka menyebutnya *"priced in the open"*. Gambaran kasarnya (bukan tabel yang dikunci): model kecil mulai dari kisaran sekitar **$0,02–0,10 per juta token**; model besar sekitar **$1–4 per juta token output**. Semua bisa berubah — cek [halaman harga resmi](https://chutes.ai/pricing).

Beberapa hal lain yang perlu tahu:

- **Top-up wallet** untuk pemakaian pay-per-token. Kamu juga bisa membayar dari wallet **Bittensor (TAO)**.
- **Langganan opsional** (bukan wajib):
  - **Plus — $10/bulan**: kuota harian bundled + **diskon 6%** untuk pay-per-token di luar kuota.
  - **Pro — $20/bulan**: kuota harian lebih besar + **diskon 10%**. *Rule of thumb* komunitas menyebut sekitar **5.000 request/hari** di Pro — angka ini **≈ per pengumuman resmi di media sosial; cek halaman pricing** untuk angka terkini.
  - **Enterprise**: diskon volume custom, hubungi tim mereka.

::: warning ⚠️ Jangan kunci angka
Kami sengaja tidak mencantumkan tabel harga per model — angkanya cepat basi. Cek [chutes.ai/pricing](https://chutes.ai/pricing) untuk daftar harga terkini, dan pantau sisa saldo wallet-mu di dasbor.
:::

---

## Privasi & Data

Ini bagian yang jarang dimiliki penyedia murah — statement privasi Chutes cukup kuat:

- Untuk *inference* publik, Chutes menyatakan resmi bahwa mereka **"does not log, store, or persist the content of your API requests or responses"** — isi request dan respons-mu **tidak dicatat, tidak disimpan, tidak dipertahankan**.
- Model berakhiran **`-TEE`** dijalankan di *Trusted Execution Environment* (komputasi rahasia) — lapisan tambahan di atas statement itu.
- Bagi yang butuh formalitas, tersedia **Data Processing Agreement**.

::: tip 💡 Rekomendasi untuk roleplay pribadi
Kombinasi *no-logging* + opsi model TEE membuat Chutes salah satu pilihan paling nyaman untuk roleplay yang sifatnya pribadi — bagus untuk kamu yang tidak ingin isi percakapan dibaca siapa pun, sambil tetap menikmati harga per token yang murah.
:::

---

## Troubleshooting

::: details Error 401 — key ditolak
Key `cpk_` kamu salah tempel, terpotong, atau **memang sudah tidak bisa dilihat lagi** (key hanya ditampilkan sekali saat pembuatan). Jangan berharap bisa membuka key lama — langsung buat **key baru** di [halaman API keys](https://chutes.ai/app/settings/api-keys) dan tempel ulang di Mikazuki.
:::

::: details Model tidak ditemukan / error model not found
ID model harus **format `org/Model` yang persis** dari katalog `https://llm.chutes.ai/v1/models`. Kesalahan paling umum: keliru prefix **`-TEE`**, salah tanggal versi (mis. `...-0731-TEE`), atau salah huruf besar-kecil. Ambil nama dari hasil tombol 🔍 fetch models, bukan dari ingatan.
:::

::: details Saldo habis / error pembayaran
Top-up wallet-mu dari dasbor Chutes, lalu ulangi request-nya. Kalau pemakaianmu rutin dan sering, pertimbangkan plan **Plus** atau **Pro** — kuota bundled harian ditambah diskon pay-per-token di luar kuota bisa menekan biaya.
:::

::: details Jawaban terpotong / berhenti di tengah
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil. Naikkan nilainya — tapi ingat `max_tokens` juga dipotong dari context window sebagai *Reserved Output*. Context window **bervariasi per model** (ada yang 41K sampai 262K), jadi cek kartu modelnya di katalog sebelum menyetel nilai besar.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [OpenRouter](./openrouter) — agregator serupa dengan pilihan model yang juga luas.
- [DeepSeek](./deepseek) — panduan padanan untuk provider DeepSeek.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
