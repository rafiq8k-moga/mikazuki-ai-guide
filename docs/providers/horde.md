---
title: AI Horde (BYOK Provider)
---

# AI Horde (Mode BYOK)

**AI Horde** beda dari semua provider lain di panduan ini — dan bedanya fundamental: ia bukan perusahaan inference, melainkan **klaster GPU sukarelawan GRATIS**. Orang-orang sukarela meminjamkan komputernya (FOSS, dioperasikan **Haidra**, non-profit asal Luxembourg), sehingga siapa pun bisa menghasilkan gambar dan teks **tanpa bayar sepeser pun** — tanpa kartu kredit, tanpa nomor telepon. Sebagai ganti uang, jaringan memakai sistem prioritas berbasis **kudos**. Konsekuensinya: kecepatan dan ketersediaan model **bergantung pada pasokan worker sukarelawan**, bukan layanan dengan SLA — **antrean bisa lama saat jaringan ramai**. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning ⚠️ Beda total dari provider lain
API AI Horde **TIDAK berformat OpenAI-compatible** — ia punya format sendiri (async generate/pop/poll di `stablehorde.net/api`). Artinya: **jangan pakai mode OpenAI Compatible di Mikazuki** — tidak akan jalan. Gunakan **entri Horde** bila tersedia di daftar provider. Selain itu, karena jaringannya dikelola sukarelawan, kecepatan jawaban **bisa sangat bervariasi** — dari cepat sekali sampai antre panjang. Halaman ini mengajarkan **cara** yang benar dan ekspektasi yang realistis.
:::

---

## Membuat API Key

1. Buka [stablehorde.net/register](https://stablehorde.net/register).
2. Pilih cara daftar: **OAuth** lewat penyedia pilihanmu (mis. Google/GitHub), **atau** akun **anonymous**.
3. Setelah terdaftar, kamu mendapat **API key** yang bisa dipakai di Mikazuki.

Layanan Horde hanya menyimpan **ID akun dari penyedia OAuth** yang kamu pilih — mereka menyatakan ID itu tidak dipakai untuk hal lain selain identifikasi akunmu di jaringan.

::: danger 🔒 Key anonymous TIDAK BISA dipulihkan
Ini peringatan **resmi** di halaman register: kalau kamu memilih akun **anonymous** (tidak terhubung identitas apa pun), key-nya diacak dan **tidak bisa didapatkan kembali kalau hilang**. Key hilang = akses hilang, dan **kudos yang sudah terkumpul di akun itu hangus**. Kalau kamu berencana mengumpulkan kudos atau memakai Horde dalam jangka panjang, pilih **sign-in OAuth** supaya key bisa dikelola kembali.
:::

::: tip 💡 Tanpa daftar sama sekali juga bisa
Tanpa membuat akun pun, request bisa dikirim dengan key anonim `000000000000` (akun tamu). Tapi ingat: akun tamu mendapat **prioritas paling rendah** — saat jaringan ramai, antreanmu berada di urutan paling belakang. Untuk pemakaian serius, mendaftar tetap lebih baik.
:::

---

## Mengaktifkan AI Horde di Mikazuki AI

Alurnya sedikit beda dari provider lain karena API Horde punya format sendiri:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, **pilih entri Horde** dari daftar (bila tersedia di versi Mikazuki-mu).
3. Tempel API key Horde kamu (atau pakai key anonim `000000000000` kalau belum daftar — dengan konsekuensi prioritas terendah).
4. Pilih model dari daftar model yang tersedia di jaringan.
5. Mulai chat — request-mu masuk ke **antrean** jaringan dan jawaban di-*yield* ke kamu saat selesai diproses worker.

::: danger 🚫 Jangan pakai mode OpenAI Compatible
Tidak ada Base URL ajaib yang membuat Horde jalan lewat provider **OpenAI Compatible** — API Horde tidak mengenal format `$chat completions` gaya OpenAI; ia memakai alur *async generate/pop/poll* sendiri di `stablehorde.net/api`. Kalau kamu memaksa lewat OpenAI Compatible, request hanya akan gagal error. Selalu pakai **entri Horde** dari daftar provider Mikazuki.
:::

---

## Prioritas & Kudos

Di Horde, "mata uang"nya disebut **kudos** — dan kudos menentukan **seberapa cepat antreanmu dilayani**:

- **Makin banyak kudos, makin tinggi prioritas** — request-mu dipicker lebih dulu saat jaringan ramai.
- **Cara dapat kudos**: jalankan **Horde Worker** — artinya kamu meminjamkan GPU-mu untuk melayani request orang lain — atau via kontribusi komunitas lainnya.
- **Kudos tidak expire** dan **tidak bisa dibeli/dijual** — satu-satunya jalan adalah berkontribusi.
- Kudos juga dipakai di sisi *image generation* (Stable Horde), jadi ekosistem prioritasnya satu jaringan.

Dibanding provider berbayar lain: di Groq kena 429 berarti menunggu reset kuota; di Horde antrean panjang berarti prioritas mu **rendah atau jaringan sedang jenuh** — dan satu-satunya "upgrade"-nya adalah **kudos**, bukan kartu kredit.

---

## Privasi & Data

Ini bagian **paling penting** di seluruh halaman ini — baca pelan-pelan.

::: danger 🛡️ Worker membaca prompt-mu: JANGAN kirim info pribadi
Jaringan Horde dijalankan oleh **sukarelawan biasa**, dan setiap request kamu diproses di komputer salah satu dari mereka. Secara **default**, input dikirim secara anonim dan worker **tidak bisa melihat** isi respons yang dikembalikan ke kamu. **TETAPI**: kode worker-nya *open source* — artinya **worker jahat bisa memodifikasi kode** untuk **mencatat prompt dan men-*yield* respons** ke dirinya sendiri, atau sengaja menghasilkan balasan yang buruk. Konsekuensinya satu aturan emas dari docs resmi: **JANGAN pernah mengirim informasi pribadi** — nama asli, email, alamat, nomor telepon, atau detail identifikasi apa pun — saat memakai Horde. Anggap setiap prompt bisa dibaca orang asing.

Opsi **"Trusted Workers Only"** hanya membatasi request ke worker lama yang punya rekam jejak — itu **mempersempit risiko, bukan jaminan**. Mikazuki merekam **Worker ID dan model** untuk tiap respons; kalau kamu menerima respons yang mencurigakan (mis. jawaban aneh yang tidak seperti gaya modelnya), simpan catatan itu dan **laporkan ke admin Horde di Discord** mereka.
:::

Dengan aturan di atas, pemakaian *roleplay* karakter fiksi tanpa data pribadi tetap wajar dilakukan di Horde — hanya saja selalu ingat: **anonimitasmu bergantung pada isi prompt-mu sendiri**. Perbandingan cepat dengan saudaranya: Featherless menjanjikan "prompts never stored" di server resmi mereka; Horde justru **tidak punya server pusat** yang bisa menjanjikan hal itu — kepercayaannya tersebar ke ribuan worker.

---

## Harga

- **TIDAK ADA harga** — Horde **selalu gratis**: tidak ada per-token, tidak ada langganan, tidak ada top-up, tidak ada free tier vs paid tier. Semua tier-nya gratis.
- Kontribusi tidak berbentuk uang — berbentuk **kudos** (lihat bagian di atas) atau donasi ke **Haidra**, non-profit di belakangnya.

::: warning ⚠️ Kalau ada yang menagihmu atas Horde — itu bukan Horde
Peringatan resmi di halaman register Horde: **kalau kamu diarahkan ke situs yang memungut bayaran atau penuh iklan atas layanan Horde (misal dari client pihak ketiga), Horde sendiri tetap selalu gratis dan dijalankan sukarelawan**. Horde tidak menjual apa pun. Kalau sebuah "client" menagihmu untuk akses Horde, yang kamu bayar adalah markup pihak ketiga — bukan layanan Horde.
:::

---

## Troubleshooting

::: details Antrean lama / respons molor sekali
Ini **perilaku normal**, bukan bug. Prioritasmu kemungkinan paling rendah (kamu pakai key anonim/guest) atau jaringan sedang ramai. Solusi jangka panjang: **daftar akun** lalu kumpulkan kudos — cara paling efektif adalah **menjalankan Horde Worker** (meminjamkan GPU-mu). Solusi jangka pendek: tunggu, atau coba di jam yang lebih sepi.
:::

::: details Model tidak tersedia / menunggu tanpa batas
Pasokan worker **berubah sepanjang waktu** — model yang tadi pagi ada bisa kosong malam ini, karena tidak ada SLA yang menjamin satu model pun selalu uptime. Pilih **model lain** yang tersedia saat itu, atau coba lagi nanti. Jangan mengandalkan satu model spesifik sebagai andalan.
:::

::: details API error saat pakai mode OpenAI Compatible
Ini bukan error yang bisa diperbaiki — **API Horde memang tidak OpenAI-compatible**. Hapus konfigurasi OpenAI Compatible-mu, lalu pakai **entri Horde** dari daftar provider Mikazuki seperti dijelaskan di bagian [Mengaktifkan](#mengaktifkan-ai-horde-di-mikazuki-ai).
:::

::: details Key anonymous hilang — tidak bisa login lagi
Key akun anonymous **tidak bisa dipulihkan** — itu peringatan resmi di halaman register. Kudos yang terkumpul di akun itu juga **hangus**. Langkah ke depan: buat akun lewat **sign-in OAuth** supaya key bisa dikelola kembali kalau hilang, lalu tempel key baru di Mikazuki.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Groq](./groq) — panduan padanan untuk provider gratisan berbasis rate limit.
- [Featherless AI](./featherless) — langganan flat-rate untuk ribuan model open-weight.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
