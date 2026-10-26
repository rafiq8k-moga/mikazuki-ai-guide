---
title: Google Gemini (BYOK Provider)
---

# Google Gemini (Mode BYOK)

**Google Gemini** salah satu penyedia favorit untuk BYOK: ada *free tier* untuk mencoba tanpa kartu kredit, context window yang sangat panjang (hingga jutaan token di seri Flash/Pro terbaru), dan keluarga model yang beragam — mulai yang ringan untuk chat harian sampai yang bertenaga besar untuk *roleplay* raksasa. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Kebijakan key dan harga Gemini berubah cukup sering di 2026. Halaman ini mengajarkan **cara** yang benar, bukan angka harga/limit tertentu. Selalu cek halaman resmi [harga Gemini API](https://ai.google.dev/gemini-api/docs/pricing) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Buka [Google AI Studio](https://ai.google.dev/aistudio) atau langsung ke [halaman API key](https://aistudio.google.com/app/apikey).
2. Sign in dengan akun Google kamu.
3. Klik **Create API key** lalu ikuti langkahnya.

::: danger 🔒 Wajib: restrict key ke Gemini API
Sejak pertengahan 2026, Gemini API **menolak standard key yang *unrestricted***. Saat membuat key, pastikan kamu membatasinya ke Gemini API saja — AI Studio menawarkan tombol **"Restrict key"** / **"Restrict to Gemini API only"** saat pembuatan. Key lama yang *unrestricted* dan terbengkalai bisa berstatus **Blocked**, jadi aplikasi akan error 403/401 padahal key kamu sebenarnya "benar".
:::

::: tip 🔐 Soal tipe "auth keys"
Key baru yang dibuat di AI Studio (setelah 28 Mei 2026) otomatis berupa **auth keys** — terikat ke *service account*, dengan batasan keamanan lebih ketat dan penegakan cepat untuk key yang bocor. Ini terjadi otomatis; kamu tidak perlu mengatur apa pun, cukup tahu bahwa bentuk key-nya memang sedikit berbeda dari dulu.
:::

---

## Mengaktifkan Gemini di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Gemini:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilih provider, pilih **Google Gemini** (bukan entri yang menuntut *Base URL* manual).
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis berdasarkan key kamu (misal versi Flash, Flash-Lite, atau seri lain yang aktif saat itu).
5. Pilih model, lalu atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — dan klik simpan.

::: tip Sudah baik dari sananya
Default **temperature 0.85** Mikazuki sudah dipetakan dengan baik untuk roleplay; kamu tidak perlu mengubahnya kecuali memang ingin gaya jawaban yang sangat berbeda.
:::

---

## Context Window & Preset 1M

Gemini punya context window yang terkenal luas — di seri Flash/Pro terbaru bisa mencapai jutaan token. Ini sangat cocok dengan preset `1M` di Mikazuki:

- **Model Flash/Flash-Lite terbaru** → preset `1M` realistis untuk *roleplay* super panjang.
- **Model lama atau tier tertentu** kapasitasnya bisa lebih kecil — kalau ragu, mulai dari `128K`.

Detail cara kerja `context_window`, *Reserved Output*, dan preset chip ada di [Parameter Dasar](../byok/parameter-dasar).

::: tip 💡 Optimalkan 1M
Saat memakai preset `1M` di Gemini, kamu bisa menaikkan `max_tokens` agar jawaban punya ruang lebih besar — ingat bahwa `max_tokens` ikut dipotong dari context window.
:::

---

## Free Tier, Limit & Harga

Aturan mainnya (berlaku umum, angka tidak kami kunci di sini):

- **Rate limit dihitung per Google Cloud project**, bukan per key: ada batas RPM, TPM, dan RPD. Kuota harian reset pada tengah malam waktu Pasifik.
- **Tier naik otomatis** seiring pengeluaran (tier berikutnya terbuka setelah mencapai ambang *spend* tertentu). Semakin tinggi tier, semakin longgar limitnya.
- **Selalu ada free tier**, tapi sepanjang 2026 ia berkali-kali diperketat — model termahal (Pro) biasanya sudah tidak ikut gratis. Untuk gratisan, pakai model **Flash** atau **Flash-Lite**.
- **Harga bisa berubah**: ada promo harga untuk beberapa tier hingga akhir 2026 (dengan kenaikan menyusul di 2027), jadi jangan menetapkan budget berdasarkan angka yang dibaca sekali saja.

::: warning ⚠️ Jangan kunci angka
Kami sengaja tidak mencantumkan tabel harga/RPM di halaman ini — angkanya cepat basi. Cek [tabel harga resmi](https://ai.google.dev/gemini-api/docs/pricing) dan dokumentasi [rate limit](https://ai.google.dev/gemini-api/docs/rate-limits) untuk angka terkini. Aturan praktis yang aman: model **Flash/Flash-Lite** untuk free tier, **Pro** untuk akun berbayar. Disarankan juga memasang **billing alert** di Google Cloud agar tagihan tidak mengejutkanmu.
:::

---

## Opsi Cadangan: OpenAI Compatible

Kalau provider native **Google Gemini** di Mikazuki bermasalah (mis. pembaruan worker belum mendukung), Gemini punya endpoint *OpenAI-compatible* yang bisa dipakai lewat provider **OpenAI Compatible**:

- **Base URL**: `https://generativelanguage.googleapis.com/v1beta/openai/`
- **API key**: key Gemini kamu (endpoint OpenAI-nya menerima *Bearer key*).

Ini jalur cadangan, bukan jalur utama — untuk penggunaan sehari-hari tetap pilih provider **Google Gemini** seperti di atas.

---

## Troubleshooting

::: details Error 403 / 401 padahal key sudah benar
Hampir selalu karena key **unrestricted** atau berstatus **Blocked**. Buka [halaman API key](https://aistudio.google.com/app/apikey) di AI Studio, cek label *"Unrestricted"* pada key kamu, lalu **apply restriction** ke Gemini API saja. Key lama yang terlanjur di-*block* perlu dibuat ulang dengan pembatasan yang benar.
:::

::: details Error 429 — terlalu sering
Rate limit Gemini dihitung **per project** (RPM/TPM/RPD), bukan per key, dan kuota harian reset pada tengah malam waktu Pasifik. Kalau kena, tunggu reset atau naikkan tier lewat pengeluaran model berbayar. Untuk free tier, gunakan model Flash/Flash-Lite — limitnya lebih ramah.
:::

::: details Model tidak muncul di daftar setelah fetch
Periksa tiga hal: key kamu valid tapi project-nya belum mengaktifkan Gemini API (service yang belum aktif biasanya kosong daftarnya), key dibatasi (restrict) salah selain ke service Gemini API, atau key salah tempel / terpotong. Retry tombol 🔍 fetch setelah memastikan ketiganya.
:::

::: details Jawaban terpotong / berhenti di tengah
Kemungkinan `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) terlalu kecil. Naikkan nilainya — tapi ingat, `max_tokens` juga dipotong dari context window sebagai *Reserved Output*, jadi jangan set berlebihan tanpa menaikkan `context_window`.
:::

::: details Harga di akhir bulan membesar
Cek pengeluaran di konsol Google Cloud dan pastikan **billing alert** aktif. Promosi harga bisa berakhir (ada perubahan tarif yang dijadwalkan mulai 2027), jadi tinjau ulang [tabel harga](https://ai.google.dev/gemini-api/docs/pricing) secara berkala.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — cara kerja dan konsep dasarnya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — `max_tokens`, `context_window`, dan parameter kreativitas.
