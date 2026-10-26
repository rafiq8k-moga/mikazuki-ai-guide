---
title: Mancer (BYOK Provider)
---

# Mancer (Mode BYOK)

**Mancer** beda dari provider lain di panduan ini dari akarnya: ia adalah layanan inference LLM **unfiltered** — mereka bilang langsung, *"run whatever prompts you want, doesn't censor responses"* — dijalankan di GPU kelas atas. Tapi ada *hook* yang wajib dipahami sejak awal: **Mancer tidak menyediakan interface chat sendiri sama sekali** — layanannya murni **API** yang dirancang dipakai aplikasi lain seperti Mikazuki, SillyTavern, dan sejenisnya. Kamu tidak akan pernah membuka "chat Mancer"; kamu membuka chat di Mikazuki, dan Mancer yang bekerja di belakangnya. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Test dulu sebelum beli
Pesan resmi dari Mancer sendiri: **"bps bps, test dulu dengan model gratis sebelum beli credits."** Layanan ini berbayar per pemakaian dan kualitas model bervariasi — manfaatkan model gratisnya (lihat bagian bawah) untuk memastikan setup kamu benar sebelum mengeluarkan uang.
:::

---

## Membuat API Key

1. Daftar akun di [mancer.tech](https://mancer.tech).
2. Masuk ke **Dashboard**.
3. Salin **API Key** yang tampil di dashboard.

::: info 🔑 Satu key untuk satu akun
Beda dari provider yang menampilkan key hanya sekali (seperti Claude), key Mancer **tampil di Dashboard dan bisa dilihat kapan saja**. Tetap saja, jangan pernah menempelkan key ke chat, forum, atau *screenshot* — key yang bocor tetap rantai menghabiskan credits-mu.
:::

Auth bekerja seperti biasa: key dikirim sebagai *Bearer token* di header `Authorization`.

---

## Mengaktifkan Mancer di Mikazuki AI

API Mancer berformat **OpenAI-compatible**, jadi di Mikazuki kamu memakai jalur **OpenAI Compatible**:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **OpenAI Comparable** (atau entri **Mancer** bila ada di daftarmu).
3. Isi **Base URL**.
4. Tempel API key yang barusan kamu salin dari Dashboard.
5. Klik tombol 🔍 **fetch models** — daftar model langsung ditarik dari katalog live Mancer.
6. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — lalu klik simpan.

### Soal Base URL

Dokumentasi resmi Mancer (OpenAPI-nya) menamai server **`https://neuro.mancer.tech`**, dengan route seperti `/oai/v1/chat/completions` (chat), `/oai/v1/completions` (completion), dan `GET /oai/v1/models` (katalog live).

Untuk Mikazuki: **isi Base URL sesuai yang muncul di pengaturan provider Mikazuki**. Kalau ragu, pakai **`https://neuro.mancer.tech`** — lalu **selalu verifikasi lewat tombol 🔍 fetch models**. Kalau daftar model muncul, berarti Base URL kamu benar.

::: tip 💡 fetch models itu alat verifikasi
Di Mancer, tombol 🔍 **fetch models** bukan cuma untuk mengisi nama model — ia juga **bukti Base URL + key kamu benar**. Kalau fetch berhasil, semua jalur sudah siap; kalau gagal, masalahnya ada di salah satu keduanya (lihat [Troubleshooting](#troubleshooting)).
:::

---

## Kredit & Harga

Mancer **tidak punya langganan** — sama sekali. Sistemnya **credit packs**:

- Kamu **membeli pack credits**, lalu setiap request mengonsumsi credits **sesuai model yang dipakai dan jumlah token** (prompt + output).
- Katalog live (~11 model teks per Agustus 2026) bisa dilihat lewat `GET /oai/v1/models` — harga per model (credits per token) ikut tampil di sana.
- **Rule of thumb** kualitatif (bukan angka yang dikunci): model *roleplay* klasik seperti **Magnum/MythoMax** cenderung **lebih mahal**; model seperti **DeepSeek V4 Flash** **lebih murah** dan punya konteks ±1M token.

**Refund pack** (dari FAQ resmi): pemakaian di bawah **300.000 credits** di-refund *no-questions-asked*; di atas itu penilaian kasus per kasus melalui email mereka.

### Aturan tagihan khas Mancer

Ini bagian dari docs resmi mereka dan jarang ada di provider lain — penting dipahami:

- **Request sukses tetap ditagih**, meski client-mu sudah *disconnect* saat request selesai dijanakan di server. Jangan tutup aplikasi dengan asumsi "kalau disconnect berarti tidak ditagih".
- **Request gagal / balasan 0 token → auto-refund** otomatis.
- **Balasan yang hanya berisi EOS** (end-of-sequence, jawaban kosong) **tidak di-refund** — bisa jadi itu respons sah dari model, bukan kegagalan.
- **Streaming yang dihentikan di tengah** tetap ditagih token sampai titik berhentinya.
- **Saldo negatif** masih bisa dipakai untuk **model gratis** — jadi connection test tetap jalan walau credits habis.

::: warning ⚠️ Jangan kunci angka
Credits per token **beda per model** dan bisa berubah. Kami sengaja tidak mencantumkan tabel angka — cek langsung katalog live lewat endpoint models (atau tombol 🔍 fetch models) untuk harga terkini sebelum menetapkan budget.
:::

---

## Free Model & Katalog Model

Kabar baik untuk testing: Mancer menyediakan **model gratis** — paling praktis digunakan:

- **`mytholite`** — model gratis dengan context **2.560 token** dan max output **150 token**. Kecil sekali untuk kerja serius, tapi **pas untuk memastikan setup kamu bekerja** — persis sesuai pesan resmi Mancer: *"bps bps, test dulu dengan model gratis"*.

Katalog live sekitar **11 model teks** (Agustus 2026). Menarik untuk roleplay:

- **`deepseek-v4-flash`** — context window **±1 juta token**! Cocok dengan preset `1M` di Mikazuki.
- **`gpt-oss-120b`** — context **131K**.
- Model roleplay klasik **`magnum`**, **`mythomax`**, **`weaver`**, dan lainnya — sebagian berbayar (biasanya lebih mahal, lihat rule of thumb di atas).

Dua catatan penting soal katalog:

- **Konteks = prompt + completion digabung**, bukan masing-masing maksimal. Jangan berharap mengisi prompt 1M token *dan* minta output 1M token di model 1M.
- Katalog ini **hidup** — model bisa datang dan pergi. **Selalu pakai tombol 🔍 fetch models** untuk daftar yang berlaku saat itu, jangan daftar dari ingatan (termasuk daftar di halaman ini).

---

## Privasi & Data

::: danger 🛡️ Jangan nyalakan "Enable Anon. Logging" demi diskon
Di Dashboard Mancer ada opsi **"Enable Anon. Logging"** — *opt-in* yang memberi **diskon 25% token** pada model tertentu. **TAPI**: dengan opsi ini aktif, chat kamu **berpotensi dipakai untuk training model, improv service, atau publish datasets**. Status default-nya **TIDAK aktif**. Kalau privasi penting bagimu — dan untuk roleplay, hampir selalu penting — **biarkan opsi ini mati**. Jangan tukar isi percakapanmu demi diskon 25%.
:::

Sejak default-nya mati, pemakaian roleplay harian tanpa menyentuh opsi itu tidak menambah risiko ini. Cek statusnya sekali di Dashboard Mancer setelah daftar, agar yakin posisi awal kamu memang "off".

---

## Troubleshooting

::: details Error `CANT_AFFORD`
Credits-mu **habis**. Beli credit pack baru di Dashboard, atau sementara pakai model gratis **`mytholite`** untuk tetap bisa test koneksi (saldo negatif masih boleh pemakaian model gratis — lihat bagian [Kredit & Harga](#kredit-harga)).
:::

::: details Error `PROMPT_TOO_LONG`
Percakapan + konteks kamu melebihi context window model. Perpendek percakapan (trim bagian lama), kurangi `max_tokens` di [Parameter Dasar](../byok/parameter-dasar), atau pindah ke model dengan context lebih besar. Ingat: konteks itu **prompt + output digabung**, jadi memperbesar output juga memakan ruang prompt.
:::

::: details Error `MODEL_OFFLINE` / `MODEL_UNAVAILABLE`
Model yang kamu pilih sedang **offline**. Pilih model lain (mungkin lolos sesaat), lalu coba lagi dengan model favoritmu nanti. Katalog Mancer hidup dan status model berubah-ubah.
:::

::: details Error `ACCOUNT_MUTEX` / `CONNECTION_LIMIT`
Ada **request sebelumnya yang masih berjalan** atau kamu kena **limit koneksi bersamaan**. Tunggu request yang lama selesai dulu — jangan spam retry, karena itu hanya menambah antrean. Di Mikazuki, ini biasanya berarti kamu menekan kirim lagi sebelum jawaban selesai masuk.
:::

::: details Jawaban terpotong / berhenti di tengah
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) terlalu kecil — model terpotong sebelum selesai. Naikkan nilainya, tapi ingat `max_tokens` juga dipotong dari context window sebagai *Reserved Output*, jangan set berlebihan.
:::

::: details Tertagih padahal sudah tutup aplikasi
Aturan resmi Mancer: **request yang selesai sukses tetap ditagih** walau client sudah disconnect di akhir — dan **streaming yang dihentikan di tengah** tetap ditagih sampai titik berhentinya. Request yang **gagal** atau balasan **0 token** justru auto-refund. Jadi kalau tagihan muncul padahal kamu tutup tab, itu perilaku normal, bukan kebocoran.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Chutes](./chutes) — penyedia murah tanpa censorship yang serupa untuk roleplay.
- [Featherless AI](./featherless) — langganan flat-rate untuk ribuan model open-weight.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
