---
title: OpenAI Compatible (Mode Universal)
---

# OpenAI Compatible (Mode Universal)

**OpenAI Compatible** bukan satu penyedia — ini **gerbang universal** Mikazuki AI untuk menyambungkan **endpoint apa pun yang kompatibel dengan API OpenAI**. Pagar penggunanya luas: provider kecil yang belum punya entri bawaan di daftar provider, endpoint perusahaan internal, sampai **server lokal di komputermu sendiri** seperti Ollama atau vLLM. Beberapa provider di panduan ini bahkan dijalankan lewat mode ini — [Featherless](./featherless), [NanoGPT](./nanogpt), [Chutes](./chutes), [Arli AI](./arli), dan [Mancer](./mancer). Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: info 📖 Apa arti "OpenAI-compatible"?
Menurut riset Restful API (Oktober 2026): "OpenAI-compatible" adalah API HTTP yang **menerima request dan mengembalikan JSON yang sama** dengan API OpenAI — terutama di endpoint **POST /v1/chat/completions**. Artinya, satu client cukup mengganti **Base URL, API key, dan nama model** untuk berganti server. Penting dipahami: kompatibilitas ini adalah **klaim atas subset** API, bukan semua fitur OpenAI — dan **tidak ada standar resmi** yang memaksanya; seberapa jauh sebuah server meniru API OpenAI sepenuhnya jadi keputusan tiap provider.
:::

---

## Cara Kerja Singkat: Tiga Input

Dengan mode OpenAI Compatible, kamu mengisi **tiga hal** dan sisanya bekerja seperti provider biasa:

1. **Base URL** — alamat server, misalnya `https://contoh.com/v1`. Semua request diarahkan ke sini (terutama `/chat/completions` dan `/models`).
2. **API key** — dikirim sebagai header `Authorization: Bearer`. Server lokal kadang mengabaikan key, tapi kolomnya tetap perlu terisi (lihat [Troubleshooting](#troubleshooting)).
3. **Model ID** — nama model, dan **formatnya beda-beda antar server**: ada yang polos (`model`), ada yang pakai format `vendor/model`. Gunakan tombol 🔍 **fetch models** — setara dengan `GET /v1/models` — untuk mendapatkan daftar ID yang valid dari servermu.

Setelah tersambung, kamu mengisi [Parameter Dasar](../byok/parameter-dasar) seperti biasa: `temperature`, `max_tokens`, dan — untuk BYOK — field **`max_tokens` berperan ganda** sebagai *Reserved Output*, serta **`context_window`** yang bisa di-override hingga **1M token** bila servermu mendukung.

---

## Mengisi di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk mode ini:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **OpenAI Compatible**.
3. Isi **Base URL** dengan endpoint dari dokumentasi provider/servermu.
4. Isi **API key** (jika servernya memakai key).
5. Klik tombol 🔍 **fetch models** — daftar model ditarik langsung dari server.
6. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar) — terutama `context_window` — lalu klik simpan.

::: tip 💡 fetch models itu alat verifikasi
Tombol 🔍 **fetch models** bukan cuma untuk mengisi nama model — ia juga **bukti Base URL + key kamu benar**. Kalau daftar model muncul, sambunganmu sudah tepat; kalau gagal, masalahnya hampir selalu ada di salah satu keduanya (lihat [Troubleshooting](#troubleshooting)).
:::

---

## Pitfall Paling Umum: Base URL dan `/v1`

Ini sumber error nomor satu di mode ini — dan penyebabnya hampir selalu **path `/v1`**:

- Kalau Base URL **sudah termasuk `/v1`** (misal `https://api.contoh.com/v1`), **jangan tambahkan** `/v1/chat/completions` secara manual — client yang menempelkan path-nya sendiri di belakang Base URL.
- Sebaliknya, kalau servernya **mengharapkan tanpa `/v1`**, menempelkan `/v1` di akhir akan menghasilkan **404**.
- **Trailing slash** kadang bikin *double-slash* di URL akhir.

::: danger ⚠️ Aturan aman untuk Base URL
**Copy persis** Base URL dari dokumentasi provider — jangan tambah/kurang path, jangan tebak — lalu **tes dengan tombol 🔍 fetch models**. Kalau fetch berhasil, Base URL-mu benar. Kalau 404, coba varian dengan/tanpa `/v1` (hati-hati juga trailing slash di akhir) sampai fetch sukses.
:::

---

## Kompatibilitas Parameter: Tidak Semua Server Sama

Karena "OpenAI-compatible" hanyalah klaim atas **subset** API, tingkat dukungan parameter **berbeda-beda antar server**. Beberapa pola yang sering muncul (catatan kualitatif, bukan tabel yang dikunci):

- **Parameter diam-diam diabaikan tanpa error** — ini yang paling menjebak. Server bisa mengembalikan status **200 sukses** padahal `response_format`, `seed`, atau parameter lain tidak benar-benar dipakai — hasilnya tampak "berhasil" tapi perilakunya beda dari harapanmu.
- **Top P vs Temperature** — aturan umumnya keduanya **tidak dipasangkan**. Pembahasannya sudah ada di [Parameter Dasar](../byok/parameter-dasar).
- **Streaming** — kadang punya perbedaan bentuk, misalnya chunk `usage` di akhir stream yang formatnya tidak seragam antar server.
- **`n` (multi-choice)** — sering tidak didukung.
- **Tool calling** — bersama streaming, ini fitur yang **paling sering parsial** dukungannya.

::: tip 💡 Praktisnya untuk user Mikazuki
Mikazuki memakai *chat completions* + streaming — kombinasi yang paling luas didukung. Kalau jawaban terasa janggal atau terpotong meski setup-mu benar, curigai parameter yang diam-diam diabaikan server, atau context server yang lebih kecil dari setting-mu (lihat [Troubleshooting](#troubleshooting)).
:::

---

## Bonus Unggulan: Server Lokal di Komputermu Sendiri

Ini keunggulan yang tidak dimiliki provider mana pun: mode OpenAI Compatible bisa tersambung ke **model yang berjalan di komputermu sendiri** — **Ollama** (default di `http://localhost:11434/v1/`), **vLLM**, llama.cpp, dan lainnya.

- ✅ **Gratis** — tidak ada tagihan per token.
- ✅ **Privat total** — tidak ada data yang keluar dari mesinmu.
- ✅ **Tanpa internet** — jalan offline.
- ⚠️ **Kebutuhan hardware menentukan** model apa yang bisa dijalankan — *rule of thumb*: makin besar model, makin besar RAM/VRAM yang dibutuhkan. Cek dokumentasi Ollama/vLLM untuk kecocokan dengan perangkatmu.
- 🔑 **Key di server lokal biasanya diabaikan** — kamu bisa mengisi apa saja (misal teks "ollama") di kolom API key, karena servernya tidak memeriksanya.

Setelah Ollama jalan, isi *Base URL*, tekan 🔍 **fetch models** untuk menarik daftar model yang sudah kamu *pull*, lalu pakai seperti provider biasa.

---

## Keamanan: Jangan Asal Tempel Base URL

::: danger 🛡️ Base URL bebas = risiko bebas
Mode OpenAI Compatible membiarkanmu mengisi **Base URL apa pun** — dan itu pedang bermata dua. **Jangan pernah menempel Base URL dari sumber tidak dikenal** (misalnya proxy "gratis" yang dibagikan di internet): **seluruh percakapan plus API key-mu melewati server tersebut**. Prinsipnya sama dengan peringatan reverse proxy di [Venus](./venus) dan [Mancer](./mancer). Hanya pakai Base URL resmi dari dokumentasi provider, atau server milikmu sendiri (Ollama/vLLM lokal).
:::

---

## Troubleshooting

::: details 404 saat fetch models
Base URL-mu hampir pasti salah. Ini bug umum di mode ini: coba varian **dengan dan tanpa `/v1`** di akhir URL — sesuai format yang dokumen provider sebutkan — dan hati-hati **trailing slash** yang bisa bikin *double-slash*. Aturan amannya selalu sama: copy persis dari dokumentasi provider, lalu tes dengan tombol 🔍 fetch models.
:::

::: details 401 — key ditolak
Key salah tempel, terpotong, atau memang tidak valid. Tapi ada kasus khusus **server lokal**: beberapa server (misalnya Ollama) **mengabaikan isi key** tapi tetap **menuntut kolom key terisi** — kalau kolom kosong request bisa ditolak. Solusinya: isi teks apa saja, misal "ollama".
:::

::: details Model error / not found
Model ID-mu salah format. Format Nama model **beda antar server** — ada yang polos, ada yang `vendor/model` dengan huruf besar-kecil dan suffix yang harus persis (bandingkan dengan format Featherless `HuggingFaceOrg/ModelName` atau Chutes `org/Model`). Jangan ketik manual dari ingatan — **selalu ambil dari hasil tombol 🔍 fetch models**.
:::

::: details Respons janggal / terpotong
Dua kemungkinan besar: **parameter diabaikan server** (beberapa server diam-diam melewatkan `response_format`, `seed`, atau yang lain — status tetap 200 tapi perilaku beda), atau **kapasitas konteks server lebih kecil dari setting-mu**. Cek dokumentasi provider, sesuaikan `context_window` dan `max_tokens` di [Parameter Dasar](../byok/parameter-dasar), dan kurangi riwayat percakapan bila perlu.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Featherless AI](./featherless) — katalog 40.000+ model open-weight yang memakai jalur OpenAI Compatible.
- [NanoGPT](./nanogpt) — pay-per-use anonim yang memakai jalur OpenAI Compatible.
- [Chutes](./chutes) — inference murah tanpa censor dari open-source community.
- [Arli AI](./arli) — roleplay-untuned models dengan free tier.
- [Mancer](./mancer) — serverless inference tanpa censor.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
