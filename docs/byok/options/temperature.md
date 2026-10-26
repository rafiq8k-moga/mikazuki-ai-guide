---
title: Temperature
---

# Temperature

`temperature` adalah parameter paling berpengaruh terhadap "rasa" jawaban AI. Angkanya berkisar **0.0 sampai 2.0** (2.0 adalah maksimum resmi OpenAI), dan default Mikazuki adalah **0.85**.

Definisi resminya sederhana: temperature mengendalikan **keacakan sampling**. Nilai tinggi (sekitar 0.8 ke atas) membuat output lebih acak dan kreatif; nilai rendah (sekitar 0.2 ke bawah) membuat output fokus dan deterministik - model cenderung memilih kata yang "paling aman" berulang kali.

## Cara Kerjanya

Sebelum menghasilkan satu kata, model sebenarnya punya **daftar kandidat kata** lengkap dengan probabilitas masing-masing. Temperature menentukan seberapa berani model keluar dari kandidat teratas:

- **Temperature rendah** → distribusi dipertajam. Hampir hanya kandidat teratas yang terpilih. Hasilnya konsisten, kering, kadang repetitif.
- **Temperature tinggi** → distribusi diratakan. Kandidat "liar" yang probabilitasnya kecil ikut berpeluang terpilih. Hasilnya lebih segar, tapi makin tak terprediksi.

Anggap saja seperti melempar dadu: temperature rendah = dadu bocor yang hampir selalu jatuh di angka yang sama; temperature tinggi = dadu yang tiap sisinya hampir sama peluangnya.

::: info 🎲 Intuisi singkat
Temperature tidak menambah pengetahuan atau ide baru ke model. Ia hanya mengatur **seberapa sering model memilih jalan yang kurang umum** dari pilihan yang sudah ada. Kualitas cerita tetap ditentukan prompt dan modelnya.
:::

## Panduan Rentang

Tidak ada satu angka ajaib - nilai terbaik bergantung pada use case. Tabel berikut disusun dari panduan komunitas dan cheatsheet yang beredar (angka bertanda **≈** adalah rekomendasi non-resmi, bukan spesifikasi resmi provider):

| Use case | Rentang | Catatan |
| --- | --- | --- |
| Kode & fakta | 0.1-0.3 | Fokus, konsisten, minim halusinasi. |
| Penulisan umum | ≈0.7 | Seimbang antara rapi dan natural. |
| Menulis kreatif | ≈0.8-1.2 | Ruang untuk diksi dan plot yang tak terduga. |
| Roleplay karakter | ≈0.7-1.0 | Beberapa komunitas naik sampai ≈1.5 demi gaya "juicy", tapi rawan kalimat kacau. |
| Adaptivitas berlebihan | >1.5 | Sudah terlalu liar untuk kebanyakan model; jarang berguna. |

Default **0.85** Mikazuki dipilih sebagai kompromi sehat untuk roleplay: cukup hidup untuk dialog yang tidak kaku, tidak sampai merusak koherensi narasi.

::: tip ⚖️ Naikkan pelan-pelan
Kalau jawaban terasa membosankan, naikkan 0.1-0.2 sekali saja lalu uji. Loncatan besar (mis. dari 0.7 ke 1.4) membuat kamu sulit tahu mana perubahan yang sebenarnya membantu.
:::

## Temperature vs Top P

`top_p` mengatur hal yang mirip lewat mekanisme berbeda: memotong daftar kandidat kata ke sekelompok probabilitas kumulatif tertentu (default 0.95).

::: warning ⚠️ Aturan emas dari OpenAI
Ubah temperature **ATAU** top_p, jangan keduanya sekaligus. Keduanya bekerja pada tahap sampling yang sama, jadi menggeser dua-duanya menghasilkan efek yang sulit diprediksi dan sulit di-debug. Lihat [Top P](./top-p) untuk detailnya.
:::

Praktisnya: kalau kamu sudah nyaman dengan default `top_p` 0.95, gunakan temperature sebagai satu-satunya "knob" kreativitas.

## Terlalu Rendah vs Terlalu Tinggi

### Terlalu rendah (mis. di bawah ≈0.4 untuk roleplay)

- Dialog karakter terasa **kaku dan berulang**: frasa favorit yang sama muncul terus.
- Narasi berputar di pola kalimat yang sama; adegan terasa "di-track".

### Terlalu tinggi (mis. di atas ≈1.3 untuk roleplay)

- Narasi mulai **kacau**: logika adegan melompat, deskripsi tak nyambung.
- Karangan kata muncul dari mana-mana; percakapan bisa break character.
- Perilaku karakter **melenceng** tanpa alasan cerita.

Kalau dua gejala itu muncul bareng, temperature bukan satu-satunya tersangka - cek juga [Repetition Penalty](./repetition-penalty) dan [Parameter Dasar](../parameter-dasar).

## Catatan Provider

Tidak semua server memperlakukan temperature dengan sama. Beberapa backend *OpenAI-compatible* **mengabaikan temperature diam-diam** atau mengeksekusinya berbeda dari spesifikasi - halaman [OpenAI Compatible](../../providers/openaicompat) membahas jebakan ini. Kalau slider terasa "tidak ada efeknya", cek dokumentasi provider-mu sebelum menyalahkan angkanya.
