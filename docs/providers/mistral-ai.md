---
title: Mistral AI (BYOK Provider)
---

# Mistral AI (Mode BYOK)

**Mistral AI** pilihan yang patut dipertimbangkan untuk BYOK: provider Eropa yang terbuka, punya *free tier* bernama plan **Experiment** untuk mencoba tanpa kartu kredit, dan keluarga model yang tertata rapi — dari yang paling murah untuk chat harian sampai model premium. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Aplikasi chat konsumen Mistral kini bernama **Vibe** (dulu Le Chat). Hati-hati: ini **dua dunia yang berbeda** — langganan Le Chat/Vibe **tidak memberikan kuota API**. Akses API hanya lewat *La Plateforme* (console Mistral). Halaman ini mengajarkan **cara** yang benar, bukan angka harga — cek halaman resmi [harga Mistral](https://mistral.ai/pricing/) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Daftar di [console.mistral.ai](https://console.mistral.ai) — bisa dengan email atau OAuth (Google, GitHub, Microsoft, Apple).
2. Saat masuk pertama kali, buat **Workspace** (personal atau team) dan terima *Terms of Service*. Kadang diminta verifikasi nomor HP saat memilih plan.
3. Setelah itu, wajib **mengaktifkan plan di Billing** — lihat kotak di bawah, ini langkah yang paling sering terlewat.
4. Buka Admin Panel → **API Keys** → **Create new key**. Isi nama/label (opsional) dan **expiration date**.
5. Key ditampilkan **sekali saja** dalam modal — salin dan simpan di tempat aman.

::: danger 🔒 Wajib: aktifkan plan di Billing dulu
Ini **perangkap paling umum** di Mistral: sebelum API key bisa dipakai, kamu **wajib mengaktifkan plan** lewat *Administration → Billing* — **termasuk** pada plan gratis **Experiment** (tanpa kartu kredit). Kalau langkah ini terlewat, key berhasil dibuat tapi setiap API call gagal **401** padahal key-nya "benar". Plan **Scale** adalah *pay-as-you-go* yang memerlukan kartu kredit.

Referensi resmi: [billing & usage](https://docs.mistral.ai/admin/billing-usage/usage-limits) di docs Mistral.
:::

::: tip 🔐 Pakai expiration + rotasi
Saat membuat key, isi **expiration date** dan biasakan **rotasi berkala** — buat key baru, ganti di Mikazuki, lalu hapus key lama. Kalau key terlewat tampilannya, satu-satunya solusi adalah membuat key baru (dan jangan pernah meng-commit key ke repository).
:::

---

## Mengaktifkan Mistral AI di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Mistral AI:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **Mistral AI**.
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis dari key kamu.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar), lalu klik simpan.

Worker Mikazuki memakai **endpoint Mistral AI native**, jadi tidak ada kolom *Base URL* untuk diisi — titik akhirnya fixed.

::: tip Sudah baik dari sananya
Default **temperature 0.85** Mikazuki sudah cocok untuk Mistral AI; kamu tidak perlu mengubahnya kecuali memang ingin gaya jawaban yang berbeda.
:::

---

## Context Window

Context window Mistral berbeda-beda per model — model terbaru umumnya penyediaannya luas, tapi angka pastinya ikut model yang aktif di daftar fetch models kamu:

- **Model terbaru** → kapasitas besar; kalau yakin dengan modelnya, preset `1M` bisa dipertimbangkan bila memang didukung.
- **Kalau ragu** → mulai dari preset `128K`, cek spesifikasi model di daftar fetch models, baru naikkan.

Detail cara kerja `context_window`, *Reserved Output*, dan preset chip ada di [Parameter Dasar](../byok/parameter-dasar).

::: tip 💡 Optimalkan ruang jawaban
Menaikkan `max_tokens` memberi jawaban ruang lebih besar — ingat bahwa `max_tokens` ikut dipotong dari context window, jadi naikkan `context_window`-nya juga bila perlu.
:::

---

## Free Tier & Harga

- **Free tier = plan Experiment**: cukup untuk *prototyping* dan obrolan pribadi, tanpa kartu kredit. Konsekuensinya: ada **kuota pemakaian bulanan** dan **rate limit yang rendah**.
- Untuk pemakaian lebih bebas, naik ke plan **Scale** (*pay-as-you-go*, wajib kartu kredit).
- **Harga** dibedakan per juta token dan berbeda per model. Keluarga modelnya: **Small** (paling murah), **Medium** (kelas menengah), **Large** (premium), plus **Codestral** yang khusus untuk kode.

::: warning ⚠️ Jangan kunci angka
Kami sengaja tidak mencantumkan tabel harga di halaman ini — angkanya cepat basi. Cek halaman resmi [harga Mistral](https://mistral.ai/pricing/) dan dokumentasi [usage limits](https://docs.mistral.ai/admin/billing-usage/usage-limits) untuk angka terkini. Aturan praktis yang aman: **Small** untuk chat harian yang hemat, **Medium** untuk keseimbangan, **Large** untuk kualitas terbaik yang kamu bayar mahal.
:::

---

## Rate Limit & Spend Cap

Batasan Mistral dihitung **per Organization**, bukan per key, dan diukur **per model**:

- **Rate limit per model** — gabungan *tokens per minute* (TPM) dan *requests per second* (RPS).
- **Spend limit bulanan** — berlaku di level Organization dan juga Workspace (*Administration → Workspaces*; kelola lewat *Subscriptions → Billing* di Admin Panel). Mentok spend limit? **API bisa dinonaktifkan** sampai bulan berikutnya, atau sampai admin menaikkan limit.

(Di free tier Experiment, kuota bulanan dan rate limit rendah berlaku di atas semua itu — lihat bagian sebelumnya.)

Angka limit terkini selalu cek langsung di **Admin Panel → API → Limits**.

---

## Troubleshooting

::: details Error 401 padahal key baru dibuat
Hampir selalu karena **plan di Billing belum diaktifkan** — perangkap paling umum di Mistral (lihat kotak danger di atas). Buka *Administration → Billing*, aktifkan plan (Experiment pun wajib), lalu ulangi request-nya. Kalau sudah aktif, cek juga key salah tempel / terpotong atau sudah lewat *expiration*.
:::

::: details Error 429 — terlalu sering
Free tier Experiment punya limit ketat — aturan praktis komunitasnya sekitar **1 request per detik per key**, berlaku global. Turunkan intensitas request, atau upgrade ke plan **Scale** untuk limit yang lebih longgar. Di plan berbayar, ingat limitnya diukur **per model** (TPM + RPS) dan **per Organization** — membuat key baru tidak menolong.
:::

::: details Error 404 / model tidak valid
Nama model salah — pakai daftar dari tombol 🔍 **fetch models**, jangan ketik manual (mudah salah kapital atau salah format). Kalau fetch gagal sesaat, retry tombol fetch dulu sebelum isi kolom model secara **manual**.
:::

::: details Jawaban terpotong / berhenti di tengah
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil. Naikkan nilainya — tapi ingat `max_tokens` juga dipotong dari context window sebagai *Reserved Output*, jadi jangan set berlebihan tanpa menaikkan `context_window`.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [Anthropic Claude](./claude) — panduan padanan untuk provider Claude.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
