---
title: NovelAI (BYOK Provider)
---

# NovelAI (Mode BYOK)

**NovelAI** beda dari provider lain di panduan ini dari akarnya: ia **bukan penyedia API umum**, melainkan **layanan langganan (subscription)** dengan model in-house yang **sudah sejak awal ditraining untuk menulis cerita dan karakter** — teks *completion* bergaya novel, image generation bergaya anime, dan TTS dalam satu langganan. Model teksnya terkenal di komunitas *storytelling* dan *roleplay* justru karena "DNA"-nya naratif, bukan asisten. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: danger 🚫 Bukan OpenAI-compatible — jangan pakai mode OpenAI Compatible
API NovelAI **memiliki format sendiri** (bukan format *chat completions* gaya OpenAI). Artinya: **jangan pakai provider OpenAI Compatible di Mikazuki** — request hanya akan gagal. Gunakan **entri NovelAI** bila tersedia di daftar provider Mikazuki, sama seperti aturan untuk AI Horde. Seluruh halaman ini mengasumsikan kamu memakai jalur yang benar itu.
:::

---

## Membuat API Token

1. Sign in di [novelai.net](https://novelai.net).
2. Klik **User Settings** (ikon gerigi/gear).
3. Buka tab **Account**.
4. Klik **"Get Persistent API Token"**, lalu **copy** token yang tampil.
5. Tempel token di Mikazuki (langkah berikutnya).

::: warning 🔑 Token bersifat persistent
Bed dari key yang di-*rotate* otomatis, token API NovelAI **persistent** — tidak kedaluwarsa dan tidak berubah sendiri. Kelebihannya: kamu tidak perlu membuat ulang tiap beberapa bulan. Konsekuensinya: **simpan dengan aman** (password manager), dan kalau token bocor, **revoke dan buat ulang** lewat menu yang sama.
:::

---

## Mengaktifkan NovelAI di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk NovelAI:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, **pilih entri NovelAI bila ada** di daftar — **bukan** provider **OpenAI Compatible** (ingat peringatan di atas).
3. Tempel API token yang barusan kamu buat via **Get Persistent API Token**.
4. Pilih model teks yang tersedia untuk tier langgananmu (lihat [Model & Konteks](#model-konteks)).
5. Atur [Parameter Dasar](../byok/parameter-dasar), lalu klik simpan.

::: tip 💡 Trial dulu sebelum subscribe
NovelAI memberi **50 generasi gratis** untuk mencoba. Manfaatkan trial ini untuk memastikan setup di Mikazuki benar dan modelnya sesuai selera sebelum berlangganan. Akses terkunci setelahnya (lihat [Troubleshooting](#troubleshooting)).
:::

---

## Tier & Harga

NovelAI adalah layanan **langganan bulanan** — bukan bayar-per-token. Tier-nya (angka dari docs resmi NovelAI dan sumber komunitas 2026):

- **Paper** — trial gratis terbatas: hanya **50 generasi** untuk mengevaluasi layanan.
- **Tablet — $10/bulan** — langganan masuk pertama.
- **Scroll — $15/bulan** — tier menengah.
- **Opus — $25/bulan** — tier tertinggi; eksklusif untuk model **Erato**.

Poin penting soal biaya:

- **Text generation unlimited di semua tier berbayar** — tak ada kuota token bulanan seperti provider bayar-per-token.
- Fitur lain — terutama **image generation** — memakai mata uang **Anlas**. Untuk pemakaian teks di Mikazuki, Anlas umumnya tidak relevan.
- Angka harga di atas stabil di docs resmi, tapi tetap **cek halaman resmi NovelAI** sebelum memutuskan — halaman ini mengajarkan **cara**, bukan mengunci angka.

::: tip 💡 Bandingkan dengan saudaranya
Bedanya dengan Featherless (juga langganan flat-rate): NovelAI tidak menjual akses ke ribuan model open-weight, melainkan **model in-house sendiri** yang spesialisasi storytelling — katalognya kecil tapi *tuned* khusus untuk narasi dan karakter.
:::

---

## Model & Konteks

NovelAI tidak punya katalog ratusan model — yang ada tiga model teks in-house:

- **Erato** — model **terbaik** dan termutakhir; **eksklusif tier Opus**.
- **Kayra** — pilihan terbaik untuk tier **Tablet dan Scroll**.
- **Clio** — menawarkan **konteks lebih besar** di Tablet/Scroll, tapi biasanya kalah kuat dari Kayra.

Konteks per tier (angka dari docs resmi SillyTavern):

| Tier | Konteks teks |
|------|--------------|
| Kayra — Tablet | 3.072 token |
| Kayra — Scroll | 6.144 token |
| Kayra / Erato / Clio — Opus | 8.192 token |

::: warning ⚠️ Konteks NovelAI kecil — rencanakan sesi dengan bijak
3K–8K token itu **sangat kecil** dibanding provider lain di panduan ini (32K di Featherless, ratusan ribu di Gemini). Konsekuensinya: percakapan panjang akan **memangkas history lebih cepat** — NovelAI **bukan pilihan untuk sesi super panjang**. Di Mikazuki, fitur **memory capping** membantu: serahkan pengelolaan memori percakapan ke fitur memori, bukan ke context window mentah.
:::

Pasangkan angka ini dengan [Parameter Dasar](../byok/parameter-dasar): set `context_window` sesuai tier-mu, dan ingat `max_tokens` ikut dipotong dari context window (ruang yang sudah sempit di sini).

---

## Perilaku Model: Completion, Bukan Instruct

Ini **perbedaan perilaku paling penting** NovelAI dibanding provider lain — dan sering jadi sumber kebingungan:

Model NovelAI **bukan instruct-based**. Mereka **melanjutkan teks** (*text completion*), seperti melanjutkan cerita — **bukan menjawab perintah** seperti chatbot. Konsekuensinya:

- Tips gaya prompt dari provider lain (Gemini, Claude, dan sejenisnya) **tidak selalu berlaku** di sini.
- Hasil paling baik muncul saat prompt kamu berbentuk **deskripsi karakter bergaya prose** (naratif mengalir) atau **attributes list** — daftar atribut ringkas per karakter.
- Format attributes list adalah bagian dari **training data mereka** — contoh formatnya ada di [docs SillyTavern](https://docs.sillytavern.app/); cek di sana untuk penulisan yang benar.
- Perilaku instruct tetap bisa ter-*invoke* sesekali — kadang model mengikuti perintah — tapi jangan mengandalkannya sebagai mode utama.

::: tip 📖 Pikirkan seperti penulis, bukan seperti chat
Kalau di provider lain kamu "memerintah" model, di NovelAI kamu **memberi awalan cerita atau deskripsi karakter** dan membiarkan model **melanjutkan**. Banyak user menemukan gaya ini justru lebih hidup untuk roleplay naratif — asalkan ekspektasinya disetel dengan benar.
:::

---

## Limit Respons: Sekitar 150 Token

Satu kekhasan lagi yang wajib kamu tahu sejak awal:

- NovelAI membatasi panjang respons **sekitar 150 token per generation** — efektif sampai ±170 token dengan pencarian *stop sequence* dan hingga 20 token tambahan.
- **Jawaban yang terasa terpotong adalah perilaku khas**, bukan bug di Mikazuki.
- Solusinya standar di ekosistem NovelAI: fitur **continue / auto-continue** di frontend, yang menstimulasi *chain generation* — model melanjutkan tulisannya sampai bab selesai.

Di Mikazuki, terjemahannya:

- **Turunkan ekspektasi panjang per giliran** — jawaban pendek itu normal di sini.
- **Kalau ada opsi continue, gunakan** untuk melanjutkan jawaban yang terpotong.
- `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) **tidak bisa melebihi limit ini** — menaikkan nilainya tidak akan membuat NovelAI menghasilkan lebih dari limitnya.

::: info 🆚 Beda total dengan Claude
Di Claude, jawaban terpotong berarti `max_tokens` kamu perlu **dinaikkan**. Di NovelAI justru sebaliknya: limitnya **milik layanan**, bukan milik parameter — jadi jangan buang waktu mengutak-atik angka.
:::

---

## Privasi & Data

NovelAI adalah layanan langganan dengan akun — pemakaian API-mu melekat pada akun novelai.net milikmu. Untuk detail bagaimana data ditangani, rujuk langsung **kebijakan privasi resmi di novelai.net**: kebijakan privasi adalah satu-satunya sumber yang layak untuk klaim semacam ini, dan halaman ini sengaja tidak menambahkan klaim di luar itu.

::: tip 🛡️ Satu kebiasaan yang tetap berlaku
Terlepas dari provider mana pun di panduan ini: jangan menempelkan data pribadi sensitif ke dalam prompt. Kebiasaan ini gratis dan berlaku di mana-mana.
:::

---

## Troubleshooting

::: details Error "Not eligible for this model"
Trial **50 generasi gratis** kamu sudah habis, atau tier kamu tidak punya akses ke model itu (ingat: **Erato eksklusif Opus**). Solusinya: **subscribe atau upgrade** tier melalui novelai.net. Error ini bukan berarti setup di Mikazuki salah — setupmu kemungkinan besar sudah benar.
:::

::: details Error 401 — token tidak valid
Token salah tempel, terpotong saat salin, atau sudah dibuat ulang di akun. Buka **User Settings (gear) → Account → Get Persistent API Token** di novelai.net, buat/copy ulang token, lalu tempel dengan rapi di Mikazuki.
:::

::: details Jawaban selalu terpotong / pendek-pendek
Ini **limit khas NovelAI**: respons dibatasi **±150 token per generation**. Bukan bug, bukan salah set `max_tokens`. Gunakan fitur **continue / auto-continue** bila tersedia untuk merangkai lanjutan, dan turunkan ekspektasi panjang per giliran (lihat [Limit Respons](#limit-respons-sekitar-150-token)).
:::

::: details Konteks cepat habis, history sering terpangkas
Konteks NovelAI memang kecil — **3K–8K token** tergantung tier dan model (lihat tabel di [Model & Konteks](#model-konteks)). Kecilkan **memory preview** untuk memberi ruang lebih ke percakapan, dan **percayakan memori jangka panjang ke fitur memori Mikazuki** alih-alih mengandalkan context window mentah. NovelAI memang bukan untuk sesi super panjang.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [AI Horde](./horde) — provider gratis dengan API custom (non-OpenAI) yang serupa.
- [Featherless AI](./featherless) — langganan flat-rate tanpa limit token untuk ribuan model open-weight.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
