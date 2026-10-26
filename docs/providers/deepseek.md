---
title: DeepSeek (BYOK Provider)
---

# DeepSeek (Mode BYOK)

**DeepSeek** pilihan menarik untuk BYOK kalau kamu cari harga yang ramah di kantong dengan kualitas yang tetap layak untuk *roleplay* harian: daftar akun **tanpa kartu kredit**, model berbasis *top-up* (isi saldo sesuai kebutuhan), dan context window yang luas di model Flash terbarunya — hingga sekitar 1 juta token. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Harga DeepSeek sempat **naik drastis pada 16 Agustus 2026** — kenaikan paling tajam justru di tarif *cache-hit*. Halaman ini mengajarkan **cara** yang benar, bukan angka harga. Cek halaman resmi [harga DeepSeek API](https://api-docs.deepseek.com/quick_start/pricing) dan [platform DeepSeek](https://www.deepseek.com/en/platform/) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Buat akun di [platform.deepseek.com](https://platform.deepseek.com) — pendaftaran **tidak memerlukan kartu kredit**.
2. Ikuti *profile wizard* saat pertama masuk, lalu buka bagian **API Keys** di sidebar.
3. Klik **Create new API key**, beri nama, lalu salin key yang ditampilkan.

::: danger 🔒 Key only ditampilkan SEKALI
Setelah pembuatan, key hanya ditampilkan **satu kali**. Salin langsung ke tempat aman (password manager) sebelum menutup dialog. Yang sering kurang disadari: *duplikat sebuah kelemahan pemasangan API lain* — key yang bocor karena di-*paste* ke tempat publik bisa langsung dipakai orang lain memakai saldo top-up-mu. Jangan pernah menempelkan key ke chat, forum, atau *screenshot*.
:::

---

## Mengaktifkan DeepSeek di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk DeepSeek:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **Deepseek**.
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis dari key kamu.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — lalu klik simpan.

Worker Mikazuki memakai **endpoint DeepSeek native**, jadi tidak ada kolom *Base URL* untuk diisi — titik akhirnya fixed. API DeepSeek sendiri berformat *OpenAI-compatible* (base URL `https://api.deepseek.com`), jadi kalau perlu alternatif — misalnya provider native bermasalah — jalur **OpenAI Compatible** dengan Base URL tersebut juga bekerja dengan key DeepSeek yang sama.

### Contoh nama model

Model yang kemungkinan besar kamu temui di daftar fetch models:

- **`deepseek-flash`** — dilayani oleh DeepSeek-V4.1-Flash; nama legacy `deepseek-v4-flash` masih diterima.
- **`deepseek-v4-pro`** — kelas Pro untuk kualitas tulisan yang lebih berat.

### Prompt berpikir (thinking)

Model DeepSeek mendukung *prompt berpikir* melalui parameter `thinking: {"type": "enabled"}` beserta `reasoning_effort`. Keduanya tidak ada di [Parameter Dasar](../byok/parameter-dasar) default, tapi bisa dilempar lewat **Advanced Payload**.

::: warning ⚠️ thinking itu mahal
Mengaktifkan `reasoning_effort` berisiko **menaikkan biaya dan panjang respons** secara signifikan — token "berpikir" tetap dihitung sebagai token output. Untuk *roleplay* santai, biasanya tidak perlu.
:::

---

## Context Window & Preset 1M

Model Flash terbaru DeepSeek punya context window hingga sekitar **1 juta token** — pas dengan preset `1M` di Mikazuki:

- **`deepseek-flash`** (Flash terbaru) → preset `1M` realistis untuk *roleplay* super panjang.
- **`deepseek-v4-pro`** atau model lain → kapasitas bisa berbeda; kalau ragu, mulai dari `128K`.

Detail cara kerja `context_window`, *Reserved Output*, dan preset chip ada di [Parameter Dasar](../byok/parameter-dasar).

::: tip 💡 Optimalkan 1M
Saat memakai preset `1M` di model Flash, kamu bisa menaikkan `max_tokens` agar jawaban punya ruang lebih besar — ingat bahwa `max_tokens` ikut dipotong dari context window.
:::

---

## Free Tier & Harga

::: warning Tidak ada free tier seperti Gemini
DeepSeek memakai model **top-up balance (pre-paid)**: kamu mengisi saldo terlebih dahulu lewat menu *top-up*, lalu pemakaian API memotong saldo itu. Sebelum isi saldo penuh, kamu biasanya tetap bisa menyelesaikan *setup* (membuat key, fetch models). Kalau saldo berakhir, API mengembalikan error *insufficient balance*.
:::

## Rate Limit & Harga per Jendela Waktu

- **Rate limit berbasis concurrency per akun** — bukan RPM. Artinya yang dibatasi adalah **jumlah request yang berjalan bersamaan**, bukan jumlah request per menit. Nilai resminya: Flash sekitar **2.500 koneksi bersamaan** dan Pro sekitar **500 koneksi bersamaan** — jauh melampaui kebutuhan chat pribadi.

::: info Butuh lebih banyak?
Kalau kebutuhan concurrency-mu melampaui nilai default, DeepSeek menyediakan **capacity expansion request** yang bisa diajukan **gratis** dari platform. Untuk penggunaan pribadi, hampir tidak pernah perlu.
:::

- **Harga dibedakan per juta token dengan split jendela waktu**: tarif **off-peak adalah setengah dari tarif peak**. Jendela off-peak mengikuti jam-jam senggang global — jam persisnya bisa berubah, jadi cek langsung di halaman resmi, dan jangan kunci angka.

Harga per model bisa berubah kapan saja (kenaikan besar 16 Agustus 2026 sudah disebut di atas), jadi tautan resmi [harga DeepSeek API](https://api-docs.deepseek.com/quick_start/pricing) adalah sumber satu-satunya yang layak untuk angka.

::: warning ⚠️ Jangan kunci angka
Kami sengaja tidak mencantumkan tabel angka harga di halaman ini — angkanya cepat basi, dan jendela peak/off-peak pun bisa bergeser. Tinjau [halaman harga resmi](https://api-docs.deepseek.com/quick_start/pricing) sebelum budgeting, dan monitor saldo top-up-mu di [Dashboard](https://platform.deepseek.com) agar tidak mengejutkanmu.
:::

---

## Troubleshooting

::: details Error 401 — Insufficient Balance
Saldo top-up-mu **habis**. Buka menu *top-up* di [Dashboard DeepSeek](https://platform.deepseek.com), isi saldo, lalu ulangi request-nya. Kalau ternyata saldo masih ada tapi error tetap muncul, cek apakah key salah tempel / terpotong.
:::

::: details Error 429 terus-menerus
Rate limit DeepSeek berbasis **concurrency** — jumlah request yang berjalan bersamaan, bukan RPM. Kalau kena, tunggu request yang sedang berjalan **selesai dulu**, jangan spam retry (retry beruntun menambah request baru dan justru makan slot concurrency). Untuk kebutuhan lebih besar, ajukan *capacity expansion request* yang gratis.
:::

::: details Nama model tidak valid
Pakai nama persis dari daftar fetch models: **`deepseek-flash`** atau **`deepseek-v4-pro`**. Ketik manual mudah salah kapital atau salah format; kalau fetch gagal, isi kolom model secara **manual** dengan salah satu nama di atas.
:::

::: details Jawaban terasa ringkih
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil — model terpotong sebelum sempat menulis panjang. Naikkan nilainya, tapi ingat `max_tokens` juga dipotong dari context window sebagai *Reserved Output*, jadi jangan set berlebihan tanpa menaikkan `context_window`.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
