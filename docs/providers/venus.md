---
title: Venus Chub AI (BYOK Provider)
---

# Venus Chub AI (Mode BYOK)

**Venus Chub AI** beda dari provider lain di panduan ini — penting dipahami sejak awal: ia bukan penyedia *inference* murni seperti Gemini atau Groq, melainkan **platform roleplay karakter**. Namanya banyak bentuk — Chub AI, Chub Venus, CharacterHub, atau Venus — tapi semuanya satu brand: **Chub** adalah perpustakaan karakter/kartu komunitas raksasa (plus *lorebooks*), dan **Venus** adalah chat frontend-nya. Yang relevan untuk BYOK di Mikazuki adalah **model hosted mereka bernama Mars** — suite model *uncensored* milik Chub yang bisa dipakai lewat API inference Chub. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Angka harga, daftar model hosted, dan aturan free tier Chub bisa berubah kapan saja. Halaman ini mengajarkan **cara** yang benar, bukan daftar angka — angka yang disebut di sini bersumber dari docs resmi Chub saat ditulis, dengan imbauan untuk selalu cek situs resmi [chub.ai](https://chub.ai) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Daftar (gratis) di [chub.ai](https://chub.ai) — cukup email, tidak perlu kartu kredit untuk membuat akun.
2. Buka **Account Settings**, cari bagian token/API (di beberapa referensi tampil sebagai `my_stages` → tokens).
3. Buat **API key/token** baru, lalu salin token yang ditampilkan — key ini dipakai sebagai *Bearer token* di setiap request.

Endpoint inference Chub yang menjadi referensi:

- **Base URL**: `https://inference.chub.ai`
- **Auth**: header `Authorization: Bearer <token>`

::: danger 🔒 Pakai API key resmi, BUKAN reverse proxy
Ini peringatan yang datang **langsung dari docs resmi Chub sendiri**: jangan memakai **reverse proxy** — Chub menyebutnya "kebalikan dari kebalikannya". Proxy pihak ketiga bisa **menyimpan (log) percakapanmu** dan bahkan **mencuri key-mu**; kamu tidak tahu apa yang terjadi di belakang layanan tak resmi. Selalu buat **API key resmi milikmu sendiri** dari Account Settings Chub dan pakai itu langsung — prinsip yang sama berlaku di sisi BYOK Mikazuki.
:::

---

## Mengaktifkan Venus Chub di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Venus Chub:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, **pilih entri Venus/Chub bila ada** di daftar provider — jika entri itu tersedia, itu jalur terbaik.
3. Jika **tidak ada entri Venus/Chub** di daftar, pakai provider **OpenAI Compatible** dengan:
   - **Base URL**: `https://inference.chub.ai`
   - **API key**: token Chub kamu (*Bearer token*).
4. Klik tombol 🔍 **fetch models** — daftar model hosted akan muncul; **gunakan tombol fetch models / konfigurasi Base URL yang tersedia di pengaturan provider** alih-alih mengetik nama endpoint atau path manual dari ingatan.
5. Pilih model (misal model suite **Mars** bila tersedia), atur [Parameter Dasar](../byok/parameter-dasar), lalu klik simpan.

::: warning ⚠️ Jangan mengarang path API
Kami tidak mendaftar sub-path chat-completions persis karena bisa berubah dan sulit diverifikasi. Cara yang aman: pilih entri Venus/Chub dari daftar provider Mikazuki bila ada, atau isi Base URL di atas lalu **selalu pakai tombol 🔍 fetch models** agar nama model dan endpoint yang valid datang dari konfigurasi — bukan dari tebakan.
:::

---

## Parameter & Pengaturan

API inference Chub resmi mengekspos parameter-parameter berikut — dua di antaranya punya aturan pemakaian yang perlu kamu tahu:

- **Temperature** — mengatur kekacauan/kreativitas jawaban.
- **Presence penalty** dan **Frequency penalty** — mengurangi pengulangan.
- **Top K** dan **Top P** — mengatur sampling.

::: danger ⚠️ Temperature vs Top P: pilih salah satu
Aturan resmi Chub: **Top P dan Temperature diatur hanya salah satu**. Kalau kamu mengubah **Temperature, jangan juga mengubah Top P** — dan sebaliknya. Mengubah keduanya bersamaan justru membuat perilaku sampling tidak terkendali. Di [Parameter Dasar](../byok/parameter-dasar) Mikazuki, cukup biarkan nilai default **temperature 0.85** dan jangan menyentuh Top P, atau kebalikannya.
:::

Soal konsep prompt: **System prompt** dan **Post-history instructions** itu konsep dari dunia Chub — di Mikazuki keduanya setara dengan *system prompt* dan *flavor*. Kalau kamu membimbing gaya karakter dari sisi Chub, petakan konsepnya ke dua tempat setara itu di Mikazuki.

---

## Free Tier & Langganan

Model hosted Chub berlapis seperti ini (kualitatif, tanpa angka kuota yang kami kunci):

- **Free tier** — membuat akun gratis dan ada akses hosted terbatas: model ber-tier dengan **kuota token/pesan terbatas**. Cukup untuk **mencoba** model Mars dan merasakan kualitasnya, **tidak untuk pemakaian intensif**.
- **Langganan Mars** — pada saat ditulis, docs resmi Chub menyebut **$20/bulan** dengan **unlimited messaging** plus akses penuh ke ekosistem Chub (karakter, lorebooks, dan lainnya). Angka ini bisa berubah — **cek situs resmi** sebelum berlangganan.

Kalau kamu sudah berlangganan Mars dan model Mars **tidak muncul** di daftar fetch models, kemungkinan besar langgananmu tidak aktif atau belum tersinkron — lihat bagian [Troubleshooting](#troubleshooting).

---

## Privasi & Data

::: danger 🛑 Larangan reverse proxy: pahami dua sisinya
- **Dari sisi Chub**: docs resmi Chub sendiri **melarang pemakaian reverse proxy** (iturannya persis kebalikan dari yang diiklankan proxy-proxy itu) dan menganjurkan **API key resmi** — proxy pihak ketiga bisa **nge-log datamu** atau **mencuri key**.
- **Dari sisi BYOK Mikazuki**: praktik yang sama berlaku — pakai **key resmi milikmu sendiri**, jangan mentah-mentah menempel key pinjaman/proxy orang lain. Sumber "Empty Response" sering bermula dari sini (lihat Troubleshooting).
:::

Mengenai pelatihan model: docs resmi Chub menyatakan **Mars dilatih TANPA chat pengguna** — data proprietary-nya bukan chat publik maupun privat Chub. Jadi percakapan pribadimu di Venus tidak menjadi bahan baku model berikutnya.

Satu catatan netral yang menyertai kabar baik itu: Chub adalah **platform sosial/komunitas** — soal chat **publik vs privat di Chub itu sendiri** adalah hal lain dengan aturannya sendiri. Publikasikah kontenmu di sana dengan sadar, dan pisahkan antara kebiasaan berbagi di komunitas dengan kebutuhan privasi roleplay pribadimu.

---

## Troubleshooting

::: details "Empty Response received from API"
Ini error **khas Chub** yang banyak dikeluh komunitas. Penyebab umumnya tiga: model/sumber inference **belum bayar OK** (kuota free tier habis, atau langganan tidak aktif), **key salah**, atau key-mu ternyata **routing milik pihak lain** (kayak proxy/anak pinjaman). Solusinya berlapis: cek key kamu valid dan milikmu sendiri, pastikan model yang dipilih tersedia untuk tier/langganamu, dan — prinsip yang sudah dibacakan di atas — **pakai key resmi sendiri**, bukan proxy.
:::

::: details Error 401 — token salah / expired
Token Chub kamu salah eja, terpotong saat salin, atau sudah kedaluwarsa. Buka **Account Settings** di chub.ai, buat **token baru**, lalu tempel ulang di Settings Mikazuki pastikan tanpa spasi yang ikut tersalin.
:::

::: details Model Mars tidak muncul di daftar fetch
Model hosted Chub **ber-tier** — aksesnya mengikuti langgananmu. Pastikan **langganan Mars aktif** (atau model yang kamu pilih memang termasuk tier free). Setelah itu klik 🔍 **fetch models** ulang; kalau masih kosong, coba model hosted lain untuk memastikan key-nya sendiri berfungsi.
:::

::: details Jawaban terpotong / berhenti di tengah
Naikkan `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) agar model punya ruang jawaban lebih besar. Ingat juga aturan dari bagian Parameter: kalau kamu mengatur **Temperature, jangan ikut mengubah Top P** — dan sebaliknya. Mengacak-acak keduanya sekaligus bisa membuat gaya jawaban berubah aneh tanpa bekas yang jelas.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [DeepSeek](./deepseek) — panduan padanan untuk provider top-up.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
