---
title: Featherless AI (BYOK Provider)
---

# Featherless AI (Mode BYOK)

**Featherless AI** beda dari provider lain di panduan ini: ia bukan bayar-per-token, melainkan penyedia *serverless* untuk **model open-weight** — Llama, Qwen, DeepSeek, GLM, Kimi, dan ribuan lainnya — dengan **langganan flat-rate**. Katalognya 40.000+ model, dan layanan ini dirancang populer di komunitas **SillyTavern / RisuAI** untuk *roleplay* dan cerita panjang — profil pemakaian yang sangat mirip dengan user Mikazuki. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Beda dari semua provider lain di panduan ini: **Featherless tidak punya free tier atau trial API**. Membuat akun bisa tanpa kartu kredit, tapi **API key hanya berfungsi jika langgananmu aktif** — key tanpa plan tidak akan jalan. Jangan mengharapkan kuota gratisan. Halaman ini mengajarkan **cara** yang benar; untuk angka terkini selalu cek halaman resmi [harga Featherless](https://featherless.ai/pricing).
:::

---

## Membuat API Key

1. Daftar di [featherless.ai](https://featherless.ai) — dengan email atau OAuth.
2. **Pilih plan/langganan** (mis. plan Chat) — ingat, key tidak berfungsi sebelum langganan aktif.
3. Buka **dashboard → API Keys** → **Create New Key**.
4. Salin key-nya — di Featherless, key dipakai sebagai *Bearer token*.

::: danger 🔒 Wajib: langganan aktif dulu
Ini **perbedaan terbesar** Featherless dibanding provider lain: API key **tidak berfungsi tanpa langganan aktif**. Banyak orang kaget key-nya error padahal "sudah dibuat dengan benar" — padahal plan-nya belum aktif. Pastikan langgananmu berjalan sebelum menyalakan Featherless di Mikazuki.
:::

---

## Mengaktifkan Featherless di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Featherless:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, **pilih entri Featherless bila ada** di daftar; jika tidak ada, pakai provider **OpenAI Compatible** dengan:
   - **Base URL**: `https://api.featherless.ai/v1`
   - **API key**: key Featherless kamu (*Bearer token*).
3. Tempel API key yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul dari katalog Featherless.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar), lalu klik simpan.

::: tip 🏷️ Format nama model
Model Featherless memakai format `HuggingFaceOrg/ModelName` — contohnya `Qwen/Qwen2.5-7B-Instruct`. Jangan ketik manual; pakai hasil tombol 🔍 **fetch models** agar tidak salah ketik.
:::

---

## Plan & Harga

Featherless tidak menjual token per satuan pada plan utamanya — yang dijual adalah **akses flat-rate** ke seluruh katalog:

- **Chat plan — $25/bulan** (billed monthly, bisa pause/cancel kapan saja): **token unlimited** (*"Length is never billed. Concurrency is the only ceiling"*), konteks **32K**, **4 concurrent units**, akses ke **semua** 40.000+ model, dan kompatibel dengan SillyTavern, RisuAI, dan Wyvern. Untuk roleplay dan cerita, **ini plan yang direkomendasikan**.
- **Developer plan** — mulai **dari $50/bulan** dalam bentuk kredit: berbasis kredit per token, konteks hingga **256K**, hingga **100 concurrent units**. Ditujukan untuk coding agent dan API produksi.
- **Pay-As-You-Go** — isi kredit, bayar per token sistem yang sama dengan Developer plan.

Aturan pemakaian plan Chat: hanya untuk **chat interaktif yang diketik manusia** — bukan untuk traffic aplikasi/API, *reselling*, otomasi *background*, atau *benchmarking*. Untuk user Mikazuki artinya: pemakaian persona pribadi = OK.

::: warning ⚠️ Jangan kunci angka
Kami hanya menyebut angka plan di atas sebagaimana tampil di situsnya — detail dan perubahannya bisa saja bergeser. Cek halaman resmi [harga](https://featherless.ai/pricing) dan [docs plans](https://featherless.ai/docs/plans) untuk angka terkini.
:::

---

## Model & Katalog

Katalog Featherless berisi **40.000+ model open-weight** — seluruh keluarga besar seperti **Llama, Qwen, DeepSeek, GLM, Kimi**, dan banyak lagi — dan plan Chat membukamu ke **semuanya**, bukan hanya subset.

Beberapa catatan praktis:

- Model diambil lewat tombol 🔍 **fetch models**; nama mengikuti format `HuggingFaceOrg/ModelName`.
- Kalau satu model sedang penuh, model *sibling* dari keluarga/ukuran serupa biasanya tersedia — jangan terpaku pada satu nama.
- **Chat box di halaman model** pada situs Featherless hanya untuk *testing* singkat model tersebut — bukan chat interface penuh untuk pemakaian serius.

---

## Limit & Concurrent Units

Di plan Chat, yang membatasi bukan panjang output, melainkan **concurrency**:

- **4 concurrent units** — satu unit bisa dibayangkan sebagai satu percakapan model besar (70B), atau empat model kecil yang jalan sekaligus. Kalau habis unit, request berikutnya menunggu.
- **"Too many concurrent requests"** adalah penyebab paling umum error selain 503 — kurangi jumlah sesi paralel.
- Plan Developer/PAYG naik hingga **100 concurrent units**, dengan konteks hingga **256K**.

Di [Parameter Dasar](../byok/parameter-dasar), konteks plan Chat **32K** berarti preset `128K` tidak realistis — mulai dari nilai yang sesuai, dan ingat `max_tokens` ikut dipotong dari context window.

---

## Privasi & Data

Ini *selling point* utama Featherless untuk pemakaian roleplay:

- **Prompt tidak pernah disimpan** — "Prompts stored: Never".
- Pemakaian **private, secure, dan anonymous**: tanpa logs untuk chat plan. Prompt dan completions tidak dipakai untuk pelatihan maupun disimpan di server.

::: tip 🛡️ Untuk yang peduli privasi
Kalau kamu menulis roleplay atau cerita yang tidak ingin ada jejaknya di mana-mana, model "no logs + prompts never stored" ini jadi alasan kuat memilih Featherless dibanding provider lain dengan retention kebijakan lebih longgar.
:::

---

## Troubleshooting

::: details HTTP 503 — model saturated
Model yang kamu pilih sedang **kejenuhan** (populer sering saturasi dulu). Request yang gagal begini **tidak ditagih**. Tunggu sebentar lalu retry, atau pindah ke model *sibling* yang lebih sepi dari keluarga/ukuran serupa.
:::

::: details Error 401 — key tidak berfungsi
Di Featherless, key **tanpa langganan aktif tidak jalan** — beda dari provider gratis yang mungkin biasa kamu pakai, dan sering membuat orang kaget. Buka dashboard dan pastikan plan-mu aktif. Kalau sudah aktif, cek key salah tempel atau terpotong.
:::

::: details Kredit habis (Developer / PAYG)
Call Developer/PAYG akan di-*block* sampai kamu **top-up kredit di Billing** — Featherless akan memberi notifikasi saat saldo menyentuh nol. Kredit tidak *expire*, dan kamu juga bisa top-up satu-off. Kabar baiknya: hanya *successful requests* yang ditagih.
:::

::: details Jawaban terpotong / cerita memangkas bagian lama
Plan Chat punya konteks **32K** — percakapan yang sangat panjang akan memangkas bagian paling tua saat melewati batas. Naikkan `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) untuk ruang jawaban lebih besar (ingat, ikut dipotong dari context window), atau pindah ke Developer/PAYG jika benar-benar butuh konteks di atas 32K — plan Chat memang dirancang untuk *roleplay* sehari-hari.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [DeepSeek](./deepseek) — panduan padanan untuk provider DeepSeek.
- [Groq](./groq) — panduan padanan untuk provider Groq.
