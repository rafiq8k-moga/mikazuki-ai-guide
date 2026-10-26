---
title: OpenRouter (BYOK Provider)
---

# OpenRouter (Mode BYOK)

**OpenRouter** itu bukan provider model, melainkan **agregator**: satu pintu API seragam ke **ratusan model** dari banyak lab berbeda — dari Gemini sampai Claude sampai model open-source — dan semuanya bisa diakses dengan **satu key untuk semuanya**. Harganya *pass-through* tanpa markup, dan kalau satu provider sedang gangguan, OpenRouter otomatis *fallback* ke provider lain untuk model yang sama → *uptime* lebih baik. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Daftar model, varian, dan aturan limit OpenRouter berubah cukup sering. Halaman ini mengajarkan **cara** yang benar — angka yang diberi tanda "≈" adalah *rule of thumb* yang bisa bergeser. Selalu cek halaman resmi [docs OpenRouter](https://openrouter.ai/docs) dan halaman **Limits** sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Buat akun di [openrouter.ai](https://openrouter.ai).
2. Buka halaman **Credits**, lakukan **top-up** saldo sesuai kebutuhan (fee pembelian credit **5,5%**, minimum top-up **0,80 USD**).
3. Buka bagian **API Keys**, klik **Create Key**, beri nama, lalu salin key yang ditampilkan.
4. Key ini dipakai sebagai *Bearer token* di setiap request.

::: danger 🔒 Key hanya ditampilkan sekali
Sama seperti provider pada umumnya, salin key langsung ke tempat aman (password manager) sebelum menutup dialog. Key yang bocor = saldo kredit-mu bisa dipakai orang lain. Jangan pernah menempelkan key ke chat, forum, atau screenshot.
:::

::: tip 💡 Cek sisa kredit lewat API
OpenRouter menyediakan endpoint `GET https://openrouter.ai/api/v1/key` yang menampilkan sisa kredit dan limit key kamu — berguna buat diagnostik tanpa membuka dashboard.
:::

API-nya **kompatibel OpenAI penuh** (*drop-in*): kalau kamu pernah memakai SDK OpenAI, format request/response-nya identik.

---

## Mengaktifkan OpenRouter di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk OpenRouter:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **OpenRouter** (native, *fixed endpoint*).
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar akan berisi **ratusan model** dari berbagai lab, jadi lebih panjang dari biasanya.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — lalu klik simpan.

### Contoh memilih model

- Untuk **coba gratis**: pilih model dengan varian `:free` (lihat bagian di bawah).
- Untuk **roleplay** yang mulus: model kelas *flash/sonnet/haiku* dengan varian `:nitro` — respons cepat dan stabil.

::: tip Sudah baik dari sananya
Default **temperature 0.85** Mikazuki sudah dipetakan dengan baik untuk roleplay; kamu tidak perlu mengubahnya kecuali memang ingin gaya jawaban yang sangat berbeda.
:::

---

## Model & Variant Suffix

Nama model di OpenRouter berformat `vendor/model`, contohnya `google/gemini-2.5-flash`. Varian ditambahkan lewat *suffix* titik dua di belakang nama model:

| Variant | Fungsi |
|---------|--------|
| `:free` | Versi gratis model — punya limit pemakaian sendiri (lihat bagian berikutnya) |
| `:nitro` | Prioritas throughput/kecepatan — paling pas untuk roleplay |
| `:floor` | Prioritas harga termurah di antara provider yang melayani model tsb |
| `:exacto` | *Quality-first* untuk tool calling |

::: tip 💡 Untuk roleplay, biasakan `:nitro`
Roleplay harus terasa responsif — varian `:nitro` memprioritaskan kecepatan layanan. Pakai `:floor` kalau hemat lebih penting, dan `:free` untuk mencoba-coba tanpa biaya.
:::

---

## Free Tier & Limit

Ratusan model di OpenRouter punya varian **`:free` yang benar-benar gratis** — limitnya ditentukan oleh **saldo kredit yang pernah kamu top-up**:

- Akun **tanpa kredit**: sekitar **≈ 50 request/hari**.
- Total top-up **≥ 10 USD**: limit naik sekitar **≈ 1.000 request/hari**.
- Tambahan batas laju: sekitar **≈ 20 request/menit**.

::: warning ⚠️ Angka bisa berubah
Angka di atas diberi tanda **"≈"** karena kebijakan free tier sering berubah — selalu cek halaman **Limits** di docs resmi OpenRouter untuk angka terkini. Kalau sering kena limit, opsi paling tenang: pakai model berbayar; biaya per pesan roleplay biasanya sangat kecil.
:::

---

## Harga & Kredit

- **Harga pass-through tanpa markup**: harga model yang kamu lihat adalah harga dari lab penyedianya; OpenRouter menambahkan fee di titik pembelian kredit (**5,5%**, minimum top-up 0,80 USD), bukan di harga per token.
- **Kredit bisa hangus**: kredit yang dipakai atau **tidak terpakai lama bisa expire** — jangan top-up jumbo sekalian kalau pemakaianmu kecil.
- **Auto top-up** tersedia: setting agar saldo otomatis diisi ulang saat menipis, biar tidak tiba-tiba error di tengah obrolan.
- **Refund**: ada kebijakan refund untuk kredit yang terpakai di 24 jam pertama dan tidak jadi dipakai; **pembelian via crypto tidak bisa di-refund**.
- Cek sisa kredit/limit kapan saja via `GET https://openrouter.ai/api/v1/key`.

::: warning ⚠️ Jangan kunci angka
Kami tidak mencantumkan tabel harga per model — ratusan model dan harganya cepat basi. Cek halaman model di [openrouter.ai](https://openrouter.ai/models) untuk angka terkini.
:::

---

## Privasi & Data

Bagian ini penting kalau kamu prihatin soal privasi *roleplay*-mu:

- **Zero logging secara default**: OpenRouter **tidak menyimpan prompt maupun completion** kamu secara default.
- **Opt-in logging** memberi **diskon 1%** — kalau kamu mengaktifkannya, chat-mu tersimpan di log mereka. Kalau tidak butuh, biarkan mati.
- **Data used for training**: bisa dimatikan lewat toggle di **Privacy settings**.
- **Routing EU**: tersedia endpoint `https://eu.openrouter.ai` untuk *data residency* di Eropa.

::: tip 💡 Rekomendasi untuk pengguna Mikazuki
Untuk roleplay pribadi, pertahankan setelan default (zero logging, no training) — kamu tidak butuh diskon 1%. Kalau sesekali kamu melihat chat-mu muncul di halaman **Usage** seperti prompt yang tersimpan, kemungkinan kamu pernah opt-in logging untuk diskon — matikan lagi di Privacy settings.
:::

---

## BYOK di OpenRouter (Opsional)

OpenRouter juga punya fiturnya sendiri bernama BYOK: kamu bisa memasang key provider lain (Gemini, Claude, dan lainnya) *di dalam* OpenRouter, dengan kuota inference list-price **$25.000/bulan tanpa fee BYOK** (fee **5%** di atasnya). Untuk pengguna Mikazuki BYOK biasa, ini **opsional** dan jarang dibutuhkan — cukup pakai key OpenRouter kamu sendiri. Kalau penasaran, lihat [Pengenalan BYOK](../byok/).

---

## Troubleshooting

::: details Error 402 Payment Required
**Kredit kamu habis.** Cek dulu sisa saldo via `GET https://openrouter.ai/api/v1/key`, lalu top-up di halaman **Credits** openrouter.ai. Tip: atur **auto top-up** biar tidak kejadian lagi di tengah obrolan.
:::

::: details Error 429 — terlalu sering
Kamu kena limit varian `:free` — harian (≈ 50 sampai ≈ 1.000 request tergantung top-up) atau per menit (≈ 20). Tunggu reset limit, atau pakai **model berbayar** yang limitnya jauh lebih longgar.
:::

::: details Error 404 — no endpoints found
Semua provider yang melayani model itu sedang down, atau setelan privasi kamu tidak cocok dengan kebijakan salah satu provider-nya. Coba **model lain** atau varian `:nitro` — fallback antar provider biasanya langsung menyelesaikan.
:::

::: details Jawaban terpotong / berhenti di tengah
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil. Naikkan nilainya — tapi ingat `max_tokens` juga dipotong dari context window sebagai *Reserved Output*, jadi jangan set berlebihan tanpa menaikkan `context_window`.
:::

::: details Mengapa chat saya muncul di "usage"?
Secara default OpenRouter **zero-logging** — prompt/completion tidak disimpan. Kalau chat-mu muncul seolah tersimpan di halaman Usage, kemungkinan kamu pernah **opt-in logging** untuk diskon 1%. Matikan lagi lewat Privacy settings (dan pastikan toggle *training* di sana juga nonaktif).
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [Anthropic Claude](./claude) — panduan padanan untuk provider Claude.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
