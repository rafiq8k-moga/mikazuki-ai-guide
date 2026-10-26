---
title: Anthropic Claude (BYOK Provider)
---

# Anthropic Claude (Mode BYOK)

**Anthropic Claude** pilihan kuat untuk BYOK kalau kamu cari kualitas tulisan yang halus dan "berasa": keluarga modelnya terkenal jago dalam *roleplay* naratif, mengikuti instruksi panjang dengan patuh, dan menjaga konsistensi karakter di percakapan yang panjang. Konsekuensinya: tidak ada *free tier* seperti Gemini, jadi siapkan kartu pembayaran di Claude Console. Kalau kamu baru mengenal BYOK, baca dulu [Pengenalan BYOK](../byok/).

::: warning 📅 Info penting 2026
Claude Console kini berada di **platform.claude.com** (domain lama console.anthropic.com mengarah ke sana). Halaman ini mengajarkan **cara** yang benar, bukan daftar harga — angka harga dan limit berubah sering. Cek halaman resmi [harga Anthropic](https://www.anthropic.com/pricing) sebelum menetapkan budget.
:::

---

## Membuat API Key

1. Sign in di **Claude Console**, lalu buka [halaman API keys](https://platform.claude.com/settings/keys).
2. Klik **Create key**, beri nama, pilih **expiration**, dan pilih akun yang ditautkan (*personal* atau *service account*).
3. Salin key yang ditampilkan — formatnya diawali `sk-ant-`.

::: danger 🔒 Key only ditampilkan SEKALI
Setelah pembuatan, key `sk-ant-...` hanya ditampilkan **satu kali**. Salin langsung ke tempat aman (password manager) sebelum menutup dialog. Kalau terlewat, satu-satunya solusi adalah **membuat key baru**.
:::

::: tip Pilih key "personal"
Dua tipe key yang relevan: **personal** (terikat ke dirimu; berhenti bekerja kalau kamu keluar dari organisasi) dan **service account** (untuk workload otomatis/CI). Untuk BYOK pribadi, pilih **personal key** — sederhana dan cukup. *Workspace key* itu legacy, hindari.
:::

::: details Tombol Create key ter-*disabled*?
Artinya role kamu di organisasi tidak memadai untuk membuat key. Minta admin organisasi menaikkan role-mu, atau minta admin membuat / memberi akses **service account** yang bisa membawa key sendiri.
:::

---

## Mengaktifkan Claude di Mikazuki AI

Ikuti alur BYOK standar dari panduan [Instalasi & Aktivasi](../byok/instalasi). Ringkasannya untuk Claude:

1. Buka **Settings → Engine**, pilih mode **BYOK**.
2. Pada pilihan provider, pilih **Anthropic Claude**.
3. Tempel API key `sk-ant-...` yang barusan kamu buat.
4. Klik tombol 🔍 **fetch models** — daftar model akan muncul otomatis dari key kamu.
5. Pilih model, atur [Parameter Dasar](../byok/parameter-dasar), lalu klik simpan.

Worker Mikazuki memakai **endpoint Anthropic native**, jadi tidak ada kolom *Base URL* untuk diisi — titik akhirnya fixed. Ini bedanya dengan provider lain yang menawarkan mode *OpenAI Compatible*: untuk Claude, opsi itu belum tersedia (Anthropic tidak menyediakan endpoint OpenAI-compatible resmi).

---

## Rate Limit & Spend Cap

Satu hal yang paling sering mengejutkan pengguna Claude: **batasan dihitung per organisasi, bukan per key**. Satu organisasi (yang bisa memuat banyak key dan project) berbagi satu budget dan satu rate limit.

Dua jenis batas:

- **Spend limit bulanan** — berdasarkan tier akun. Tier naik otomatis seiring pengeluaran: *Evaluation → Start (500 USD/bulan) → Build (1.000 USD/bulan) → Scale (200.000 USD/bulan) → Custom* (tanpa cap). Mentok cap? API mengembalikan HTTP 429 `enforced_spend_limit_reached` sampai awal bulan berikutnya.
- **Rate limit menit-an** — RPM (request per menit), ITPM (token input per menit), dan OTPM (token output per menit) yang ikut naik tiap tier.

::: info Pasang sendiri spend limit-mu
Kamu juga bisa menetapkan **spend limit sendiri** di [Billing page](https://platform.claude.com/settings/billing) sebagai rem tambahan, terlepas dari cap resmi tier organisasimu. Angka lengkap dan terkini tier ada di dokumentasi [rate limits](https://platform.claude.com/docs/en/api/rate-limits) resmi Anthropic.
:::

---

## Free Tier & Harga

::: warning Tidak ada free tier seperti Gemini
Berbeda dengan Gemini, Anthropic API umumnya **memerlukan pembayaran aktif** — daftar kartu di [Billing](https://platform.claude.com/settings/billing) sebelum bisa pakai API. Akun baru kadang mendapat kredit trial kecil; cek apakah akunmu memilikinya, tapi jangan harap bisa jalan lama gratis.
:::

Harga per model dibedakan per juta token — **output selalu jauh lebih mahal daripada input** — dan bisa berubah kapan saja, jadi tautan resmi [harga Anthropic](https://www.anthropic.com/pricing) adalah sumber satu-satunya yang layak untuk angka. Untuk roleplay santai kamu tidak butuh model paling mahal:

- **Kelas menengah** (contoh: Sonnet 5 atau satu generasi di atasnya) — sweet spot untuk *roleplay* harian; kualitas tulisan solid, biaya masuk akal.
- **Kelas premium** (contoh: Opus 5) — simpan untuk momen khusus atau story dengan nuansa yang berat dan kompleks.
- **Kelas hemat** (contoh: Haiku 5) — buat chat ringan, autosummary, atau eksperimen murah.

---

## `max_tokens` Tidak Menghukum Rate Limit Output

Bonus kecil tapi enak dari rate limiting Anthropic: **OTPM hanya menghitung token yang benar-benar dihasilkan** — parameter `max_tokens` *tidak* ikut dihitung. Jadi menaikkan `max_tokens` di [Parameter Dasar](../byok/parameter-dasar) untuk memberi ruang jawaban panjang **tidak menambah konsumsi rate limit output-mu**.

(Sisi input juga punya bonus serupa untuk banyak model: token yang dibaca dari cache tidak dihitung ke ITPM — jarang relevan untuk aplikasi chat seperti ini, tapi menarik untuk diketahui.)

Jadi beda dengan Gemini, jawaban terpotong saat memakai Claude cenderung berarti `max_tokens`-mu perlu dinaikkan — bukan soal limit milik project.

---

## Troubleshooting

::: details Error 401 — key tidak valid
Key salah tempel, terpotong saat salin, atau sudah lewat masa *expiration*-nya. Buka [halaman API keys](https://platform.claude.com/settings/keys), hapus key lama jika ragu, lalu buat ulang dan tempel dengan rapi.
:::

::: details Error 429 — rate limit / spend limit
Ini limit **per organisasi**, bukan per key — membuat key baru tidak menolong. Cek dua hal: rate limit menit-an (tunggu sejenak dan coba lagi, atau naik tier lewat pengeluaran) atau `enforced_spend_limit_reached` (spend cap bulanan mentok; tunggu reset awal bulan berikutnya).
:::

::: details Daftar model tidak muncul / kosong saat fetch
Biasanya key memang valid tapi terkait workspace yang salah scope, atau pembacaan daftar model-nya gagal sesaat (error lookup). Pastikan key terkait workspace dengan akses ke model, lalu coba isi nama model secara **manual** di kolom model Mikazuki kalau fetch tetap gagal.
:::

::: details Jawaban terpotong / berhenti di tengah
`max_tokens` di [Parameter Dasar](../byok/parameter-dasar) mungkin terlalu kecil. Naikkan nilainya tanpa ragu: `max_tokens` untuk Claude **tidak ikut dihitung** dalam rate limit output (lihat bagian di atas), jadi tidak menghukung kuota menit-anmu. Kalau sudah naik tapi jawaban tetap terpotong, periksa juga bahwa model yang dipilih bukan kelas hemat dengan gaya jawaban pendeknya sendiri.
:::

::: details Tagihan di akhir bulan membesar
Pasang **spend limit sendiri** di [Billing page](https://platform.claude.com/settings/billing) sebagai rem tambahan, pakai kelas model hemat (Haiku) untuk chat harian, dan tinjau [harga resmi](https://www.anthropic.com/pricing) berkala karena angka bisa bergeser.
:::

---

## Jelajahi BYOK Lebih Lanjut

- [Pengenalan BYOK](../byok/) — konsep dasar dan cara kerjanya.
- [Instalasi & Aktivasi](../byok/instalasi) — langkah menyalakan mode BYOK.
- [Parameter Dasar](../byok/parameter-dasar) — atur `max_tokens`, `context_window`, dan parameter kreativitas.
- [Google Gemini](./gemini) — panduan padanan untuk provider Gemini.
- [System AI](./systemai) — kalau kamu tidak ingin mengurus key dan pembayaran API sendiri.
