---
title: Arli AI (BYOK Provider)
---

# Arli AI (Mode BYOK)

**Arli AI** adalah platform inference **unrestricted (*uncensored*)** yang fokusnya jelas: **roleplay**. Bedanya dengan banyak penyedia lain — Arli bukan cuma meng-host model open-weight pihak ketiga (hingga model 552B), mereka juga **melatih model RP sendiri**: seri **RPMax** dan **RpR (RolePlay with Reasoning)** yang dipublikasikan di HuggingFace. Kuarsa komunitasnya juga jelas: SillyTavern, JanitorAI, RisuAI, dan WyvernChat. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Nama model, harga, dan aturan free tier Arli bisa berubah kapan saja — docs resmi Arli sendiri menekankan bahwa **nama model sering berganti versi**. Halaman ini mengajarkan **cara** yang benar; angka plan yang disebut bersumber dari halaman pricing resmi saat ditulis, dengan imbauan selalu cek [arliai.com](https://arliai.com) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Daftar akun di [arliai.com](https://arliai.com).
2. Buka halaman akun **"My API Keys"**.
3. Buat **API key** baru, lalu salin key yang ditampilkan — key ini dipakai sebagai *Bearer token* di setiap request.

Endpoint API Arli yang menjadi referensi:

- **Base URL**: `https://api.arliai.com/v1`
- **Auth**: header `Authorization: Bearer <token>`
- **Format**: **drop-in OpenAI-compatible** — tool dengan format OpenAI bisa diarahkan langsung ke sini.

Arli juga menyediakan **API image generation (Stable Diffusion)** di host yang sama — relevan jika kamu butuh ilustrasi kartu karakter, meski tidak tersedia di free tier (lihat bagian plan di bawah).

---

## Mengaktifkan Arli AI di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Arli:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, **pilih entri Arli bila ada** di daftar provider — jika entri itu tersedia, itu jalur terbaik.
3. Jika **tidak ada entri Arli**, pakai provider **OpenAI Compatible** dengan:
   - **Base URL**: `https://api.arliai.com/v1`
   - **API key**: key Arli kamu (*Bearer token*).
4. Klik tombol 🔍 **fetch models** — daftar model akan ditarik otomatis.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar), lalu klik simpan.

::: danger ⚠️ Nama model Arli sering berubah
Ini ditekankan **docs resmi Arli sendiri**: nama model mereka **sering berganti versi**. Jangan pernah mengetik nama model dari ingatan, tutorial lama, atau screenshot — **selalu pakai tombol 🔍 fetch models** atau cek halaman Models di situs Arli sebelum memilih model.
:::

---

## Parameter & Pengaturan

::: tip 🌟 Fitur unik: per-API-key settings
Arli punya fitur praktis yang jarang ada di penyedia lain: **setiap API key bisa punya pengaturan default tersendiri**. Dua hal yang bisa dikunci per key:

- **Default parameter generation** — temperature, sampling, dan parameter lain yang sudah di-set di level key.
- **"Model Filter"** — whitelist model yang boleh diakses key tersebut (berlaku saat query `/v1/models`).

Praktisnya: kamu bisa bikin **key khusus roleplay** yang parameter generation-nya sudah dikunci rapi, lalu pakai key itu di Mikazuki — tanpa perlu set ulang parameter setiap kali. Kalau kamu sudah mengatur default di level key, nilai di [Parameter Dasar](../byok/parameter-dasar) cukup dibiarkan default.
:::

---

## Free Tier & Langganan

::: warning 📅 Cek halaman pricing
Angka plan di bawah adalah static plan-tier dari [halaman pricing resmi Arli](https://arliai.com/) saat ditulis. Jangan asumsikan tetap sama — **cek halaman pricing** sebelum berlangganan. mereka juga biasanya menawarkan **diskon sekitar 10%** untuk pembayaran tahunan.
:::

**Free tier — $0**: cukup untuk **tes**, tidak untuk pemakaian nyata.

- Respons **delayed** — makin ramai server, makin lambat (halaman resmi menyebut *delayed/slower*).
- **Max 12K context tokens**, 1 request sekaligus, **tanpa image generation**.
- Frekuensi request dibatasi ketat — **≈5 request setiap 2 hari per model** (angka ini **≈ per pelacakan pihak ketiga** Free LLM API Hub; halaman resmi hanya menyebut "delayed/slower").

**Plan berbayar** — poin utamanya: **semua plan berbayar sudah unlimited tokens & requests**; yang membedakan adalah **konteks, prioritas, dan parallel request**:

- **Core — $15/bln**: unlimited tokens & requests, 1 request sekaligus, standard priority, model hingga 552B, konteks max **32K**, image generation 3 MP.
- **Plus — $20/bln**: sama seperti Core, konteks max **128K**.
- **Pro — $30/bln**: **2 parallel requests**, high priority, konteks max **256K**, image 6 MP.
- **Max — $160/bln**: **6 parallel requests**, high priority, konteks max **512K**, image 6 MP.

---

## Privasi & Data

Ini bagian yang membuat roleplay pribadi terasa aman di Arli. **Per pernyataan provider**:

- Prompt dan output **tidak di-log dan tidak di-store** — diproses sesaat lalu dibuang.
- **Usage metadata** (bukan isi percakapan) bisa disimpan hingga **60 hari**.
- Soal pertanyaan "apakah prompt-mu dipakai melatih model": **klaimnya not confirmed** — tidak ada konfirmasi pelatihan dari data pengguna.

Output yang kamu hasilkan disebut "Your Content" — **kepemilikan penuh ada di kamu**.

::: tip 💡 Saran discret
Statement di atas adalah kutipan kualitatif dari pernyataan provider saat ditulis — bukan kontrak. Untuk keputusan penting, baca sendiri terms resminya di [arliai.com/terms](https://arliai.com/terms) dan cek apakah masih sama.
:::

---

## Troubleshooting

::: details Respons sangat lambat di free tier
Ini **memang by design** — free tier Arli sengaja **delayed**: makin ramai server, makin lambat responsmu. Jangan buang waktu mencoba "memperbaiki" yang bukan bug. Kalau kamu sudah serius pakai, upgrade ke plan **Core** untuk kecepatan normal; atau terima delay ini sebagai harga trial gratis.
:::

::: details Error 401 — key ditolak
Key kamu salah eja, terpotong saat salin, atau ada prefix yang ikut/tidak ikut sesuai format. Buka halaman **My API Keys** di arliai.com, buat key baru bila perlu, lalu tempel ulang di Mikazuki — pastikan tanpa spasi yang ikut tersalin.
:::

::: details Model tidak ditemukan / error model not found
Penyebab paling umum di Arli: **nama modelnya sering berganti versi** — tutorial atau konfigurasi lama hampir pasti sudah basi. Solusinya konsisten: selalu klik 🔍 **fetch models** di Mikazuki untuk menarik daftar model terbaru, atau cek halaman Models di situs Arli. Ambil nama persis dari hasil fetch, bukan dari ingatan.
:::

::: details Jawaban terpotong / berhenti di tengah
Konteks plan-mu membatasi panjang percakapan yang diproses — free tier max **12K**, Core **32K**, Plus **128K**, Pro **256K**, Max **512K**. Ada dua jalan: upgrade tier, atau **kecilkan riwayat percakapan** dan cek `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) agar jawaban tidak kehabisan ruang output.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Venus Chub AI](./venus) — panduan padanan untuk platform roleplay karakter.
- [Chutes](./chutes) — panduan padanan untuk inference murah tanpa langganan.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
