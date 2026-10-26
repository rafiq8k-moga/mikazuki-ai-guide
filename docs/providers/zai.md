---
title: Z.AI / GLM (BYOK Provider)
---

# Z.AI / GLM (Mode BYOK)

**Z.AI** (dari Zhipu AI) menjalankan keluarga model **GLM** — pilihan menarik untuk BYOK karena harga flagship-nya relatif ramah di kantong, ada beberapa **model gratis murni** (bukan trial credit) yang bisa langsung dipakai tanpa top-up, dan API-nya berformat *OpenAI-compatible*. Keluarga modelnya beragam: mulai yang ringan dan cepat untuk chat harian sampai flagship yang bertenaga besar untuk *roleplay* panjang. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Nama model, harga, dan aturan gratis-langganan Z.AI berubah cukup sering. Halaman ini mengajarkan **cara** yang benar, bukan daftar harga — angka yang disebut hanyalah contoh. Selalu cek halaman resmi [harga GLM](https://docs.z.ai/guides/overview/pricing) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Daftar di [z.ai/chat](https://chat.z.ai) dengan email atau Google.
2. Klik **menu profil**, buka bagian **API Keys**.
3. Klik **Create a new API key**, beri nama, lalu salin key yang ditampilkan.

::: tip 🔐 Bedanya dengan provider lain: key bisa dilihat ulang
Berbeda dengan Gemini atau Claude yang hanya menampilkan key **sekali**, key Z.AI **bisa dilihat dan di-copy ulang kapan saja** dari [halaman API Keys](https://z.ai/manage-apikey/apikey-list). Ini membuat rotasi dan pemulihan key jadi jauh lebih ramah — tapi **tetap simpan dengan aman** (password manager) dan jangan pernah menempelkan key ke chat, forum, atau screenshot. Key yang bocor = saldo kredit-mu bisa dipakai orang lain.
:::

---

## Mengaktifkan Z.AI di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Z.AI:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **ZAI**.
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis dari key kamu.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — lalu klik simpan.

Worker Mikazuki memakai **provider native ZAI** dengan **endpoint tetap (fixed)**, jadi tidak ada kolom *Base URL* yang perlu kamu isi. Sebagai referensi, endpoint-nya mengikuti format *OpenAI-compatible* di `https://api.z.ai/api/paas/v4` — tapi tetap pilih provider **ZAI** di Mikazuki, bukan jalur *OpenAI Compatible* manual.

::: tip Sudah baik dari sananya
Default **temperature 0.85** Mikazuki sudah dipetakan dengan baik untuk roleplay; kamu tidak perlu mengubahnya kecuali memang ingin gaya jawaban yang sangat berbeda.
:::

---

## Model GLM & Varian

Keluarga model GLM yang kemungkinan besar kamu temui di daftar fetch models:

| Grup | Contoh nama | Cocok untuk |
|------|-------------|-------------|
| **Flagship** | `glm-5.3` | kualitas tulisan terbaik, *roleplay* berat |
| **Hemat & cepat** | `glm-5.3-flash`, `glm-5.3-flashx` | chat harian, respons cepat |
| **Generasi sebelumnya** | `glm-5.2`, `glm-5` | alternatif kalau flagship sedang bermasalah |
| **Gratis murni (teks)** | `glm-4.7-flash`, `glm-4.5-flash` | mencoba tanpa biaya |
| **Gratis murni (vision)** | `glm-4.6v-flash` | input gambar tanpa biaya |

Tiga model **gratis murni** (bukan trial credit yang bisa habis): `glm-4.7-flash` dan `glm-4.5-flash` untuk teks, serta `glm-4.6v-flash` untuk vision. Semuanya *rate-limited* dan dioptimalkan untuk kecepatan — pas untuk mencoba-coba dan chat ringan.

Ambil nama model **persis dari daftar fetch models** — ketik manual mudah salah ejaan.

---

## Free Tier, Harga & Coding Plan

- **Tanpa kartu kredit untuk mencoba**: akun baru biasanya mendapat **kredit percobaan awal** kecil (trial); cek jumlahnya di dasbor.
- **Model gratis murni**: tiga model Flash/V-Flash di tabel di atas bisa dipakai **tanpa bayar sama sekali** (dengan limit pemakaian).
- **Top-up kredit** untuk model berbayar: pemakaian API memotong saldo kredit-mu.

Soal harga: flagship `glm-5.3` sebagai contoh publik berada di kisaran **$1,4 per juta token input / $4,4 per juta token output**. Semua harga bisa berubah kapan saja, jadi ini hanya contoh kerangka biaya — **cek [halaman harga resmi GLM](https://docs.z.ai/guides/overview/pricing)** untuk angka terkini.

::: tip 💡 Cached input jauh lebih murah
Perhatikan tarif *cached input* di halaman pricing: token input yang dibaca dari *cache* berbiaya **jauh lebih murah** daripada input segar — untuk `glm-5.3`, tarif cache-nya sekitar **$0,26 per juta token** (contoh, bisa berubah). Percakapan roleplay panjang yang mengirim ulang konteks tiap pesan bisa memanfaatkan tarif ini — hitung biaya berdasarkan *string cache-difference*, bukan total prompt.
:::

::: danger ⚠️ GLM Coding Plan ≠ API umum
Z.AI juga menjual langganan bernama **GLM Coding Plan** — tapi itu **khusus untuk tool coding** (Claude Code, OpenCode, dan sejenisnya), **BUKAN** untuk API umum. Untuk BYOK Mikazuki, yang kamu butuhkan adalah **API key biasa + top-up kredit**, bukan Coding Plan. Jangan sampai salah beli langganan yang tujuannya berbeda.
:::

::: warning ⚠️ Jangan kunci angka untuk model lain
Kami sengaja tidak mencantumkan harga untuk model Flash/FlashX dsb — sumber angkanya bertabrakan dan cepat basi. Tinjau [halaman harga resmi](https://docs.z.ai/guides/overview/pricing) sebelum budgeting, dan monitor sisa kreditmu di dasbor Z.AI.
:::

---

## Rate Limit & Kredit

- **Tidak ada angka publik resmi per tier**: limit dihitung per akun dan per plan, dan angkanya bisa berubah — jadi kami tidak menguncinya di sini.
- **Rule of thumb**: model **gratis** punya rate limit paling ketat; model berbayar lebih longgar seiring plan/top-up.
- Kalau request terlalu cepat berurutan, API merespons **429** — perlakukan ini sebagai "perlambat sebentar" lalu coba lagi (*backoff*), bukan sinyal untuk spam retry.

---

## Privasi & Data

Z.AI adalah penyedia yang **basisnya di Tiongkok (China)**. Untuk kamu yang peduli residensi data, jelajahi kebijakannya secara netral: data diproses oleh server Z.AI sesuai **kebijakan privasi mereka sendiri** — baca [kebijakan privasi resmi z.ai](https://z.ai/privacypolicy) sebelum memutuskan memakai API-nya untuk konten pribadi.

---

## Troubleshooting

Z.AI mengembalikan kode detail yang cukup informatif — cocokkan pesan error-mu dengan ini:

::: details Error 401 dengan code 1000 — Authentication Failed
Key-nya salah, sudah di-revoke, atau ter-gap spasi saat copy. Buka [halaman API Keys](https://z.ai/manage-apikey/apikey-list), untungnya key Z.AI **bisa dilihat ulang** — bandingkan karakter demi karakter di sana, atau regenerasi langsung key baru dan tempel ulang di Mikazuki.
:::

::: details Error 401 dengan code 1003 — token expired
Key kamu sudah kedaluwarsa. Buat **key baru** dari halaman API Keys dan ganti di Settings Mikazuki.
:::

::: details Error 429 dengan code 1113 — Insufficient balance / no resource package
Saldo kredit kamu habis atau paket resource-nya tidak aktif. Top-up kredit di dasbor Z.AI, lalu ulangi request-nya. Kalau kamu pikir masih ada kredit trial, cek jumlahnya di dasbor — kredit percobaan memang biasanya kecil.
:::

::: details Error 429 dengan code 1302 — rate limit
Kamu mengirim terlalu sering. Perlambat intensitas request dan pakai *backoff* (tunggu sebentar, coba lagi). Di model gratis limit paling ketat — kalau sering kena, pindahkan chat utama ke model berbayar.
:::

::: details Error 400 dengan code 1211 — Unknown Model
Nama model salah ejaan. Ambil nama **persis** dari daftar fetch models di Mikazuki — seperti `glm-5.3`, `glm-5.3-flash`, atau `glm-4.7-flash` — jangan ketik manual dari ingatan.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [Anthropic Claude](./claude) — panduan padanan untuk provider Claude.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
